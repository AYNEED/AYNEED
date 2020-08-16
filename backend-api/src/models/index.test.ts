import { readdirSync } from 'fs';
import { UModel, Document } from 'mongoose';

type ParsedData = {
  model?: UModel<Document, Document>;
  expectedModelName: string;
  exportedNames: string[];
  fileName: string;
};

type Models = { [key: string]: ParsedData };

const getExpectedModelName = (fileName: string): string => {
  const name = fileName.split('.')[0];
  return name.charAt(0).toUpperCase() + name.slice(1) + 'Model';
};

const files = readdirSync('src/models', { withFileTypes: true })
  .filter(({ name }) => name.includes('.ts') && !name.includes('index.'))
  .map(({ name }) => ({
    fileName: `src/models/${name}`,
    expectedModelName: getExpectedModelName(name),
  }));

let models: Models = {};

const importData = async (): Promise<ParsedData[]> =>
  Promise.all<ParsedData>(
    files.map(
      ({ fileName, expectedModelName }) =>
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async (resolve) => {
          const data = await import(fileName);

          return resolve({
            model: data[expectedModelName],
            expectedModelName,
            exportedNames: Object.keys(data),
            fileName,
          });
        })
    )
  );

beforeAll(async () => {
  const data = await importData();

  models = data.reduce<Models>(
    (all, item) => ({
      ...all,
      [item.fileName]: item,
    }),
    {}
  );
});

describe('Models are exported with expected names', () => {
  const cases = files.map(({ fileName, expectedModelName }) => [
    fileName,
    expectedModelName,
  ]);

  test.each(cases)(
    'File %p exports a model with name %p',
    (fileName, expectedModelName) => {
      const { exportedNames } = models[fileName];

      expect(exportedNames).toContain(expectedModelName);
    }
  );
});

describe('Exported models do not contain service fields', () => {
  const cases = files.map(({ expectedModelName, fileName }) => [
    expectedModelName,
    fileName,
  ]);

  test.each(cases)(
    'Model %p does not contain "id" field',
    (expectedModelName, fileName) => {
      const { obj: config } = models[fileName].model?.schema || {};

      if (config) {
        expect(Object.keys(config)).not.toContain('id');
      }
    }
  );

  test.each(cases)(
    'Model %p does not contain "createdAt" field',
    (expectedModelName, fileName) => {
      const { obj: config } = models[fileName].model?.schema || {};

      if (config) {
        expect(Object.keys(config)).not.toContain('createdAt');
      }
    }
  );

  test.each(cases)(
    'Model %p does not contain "updatedAt" field',
    (expectedModelName, fileName) => {
      const { obj: config } = models[fileName].model?.schema || {};

      if (config) {
        expect(Object.keys(config)).not.toContain('updatedAt');
      }
    }
  );
});

describe('Exported models contain correct references', () => {
  const cases = files.map(({ expectedModelName, fileName }) => [
    expectedModelName,
    fileName,
  ]);

  test.each(cases)(
    'Model %p correct "targetId" and "targetModel" are defined simultaneously',
    (expectedModelName, fileName) => {
      const { obj: config } = models[fileName].model?.schema || {};

      if (config && 'targetModel' in config) {
        expect(Object.keys(config)).toContain('targetId');
      }
    }
  );

  test.each(cases)(
    'Model %p contain correct reference',
    (expectedModelName, fileName) => {
      const { obj: config } = models[fileName].model?.schema || {};

      if (config && 'targetId' in config) {
        if ('targetModel' in config) {
          expect(config.targetId.ref).toBeUndefined();
          expect(config.targetId.refPath).toEqual('targetModel');
        } else {
          expect(config.targetId.ref).toEqual('User');
          expect(config.targetId.refPath).toBeUndefined();
        }
      }
    }
  );
});
