import {
  createPasswordHash,
  createRandomString,
  verifyPassword,
} from 'src/utils/password';

const passwordHash =
  'a8798de7770916049315bbedb4dfee961bc56bdd920c08283936e0c50c966a12';

describe('Create random string', () => {
  test('string is not empty', () => {
    expect(createRandomString()).toBeTruthy();
  });

  test('each new string is unique', () => {
    const randomStrings: string[] = [];

    for (let i = 0; i < 10; i++) {
      const randomString = createRandomString();

      if (!randomStrings.includes(randomString)) {
        randomStrings.push(randomString);
      }
    }

    expect(randomStrings.length).toBe(10);
  });
});

describe('Create password hash', () => {
  test('created correctly', () => {
    expect(createPasswordHash('password', 'testSalt')).toBe(passwordHash);
  });
});

describe('Verify password', () => {
  test('if the password is correct', () => {
    expect(
      verifyPassword('password', {
        salt: 'testSalt',
        hash: passwordHash,
      })
    ).toBe(true);
  });

  test('if the password is incorrect', () => {
    expect(
      verifyPassword('incorrectPassword', {
        salt: 'testSalt',
        hash: passwordHash,
      })
    ).toBe(false);
  });
});
