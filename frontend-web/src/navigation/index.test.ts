import { makeURL } from 'src/navigation/index';
import { ROUTES } from 'shared';

const originalLog = console.error;

describe('Make URL', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    console.error = () => {};
  });

  afterEach(() => {
    console.error = originalLog;
  });

  test('scheme without params', () => {
    const url = makeURL({ scheme: ROUTES.SIGN_IN_EMAIL });

    expect(url).toBe('/sign-in');
  });

  test('scheme without params & ignore extra params', () => {
    const url = makeURL({
      scheme: ROUTES.SIGN_IN_EMAIL,
      params: { never: 'yX2' },
    });

    expect(url).toBe('/sign-in');
  });

  test('scheme with params', () => {
    const url = makeURL({ scheme: ROUTES.USER, params: { id: 'xY1' } });

    expect(url).toBe('/u/xY1');
  });

  test('scheme with params & ignore extra params', () => {
    const url = makeURL({
      scheme: ROUTES.USER,
      params: { id: 'xY1', never: 'yX2' },
    });

    expect(url).toBe('/u/xY1');
  });

  test('incorrect params', () => {
    const url = makeURL({ scheme: ROUTES.USER, params: { never: 'yX2' } });

    expect(url).toBe(null);
  });
});
