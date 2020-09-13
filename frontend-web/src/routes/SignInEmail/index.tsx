import React from 'react';
import { useFormik } from 'formik';
import { Msg } from 'src/i18n/Msg';
import { useMutation } from '@apollo/client';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { COLOR } from 'src/constants/colors';
import { Notification } from 'src/components/ui/forms/Notification';
import { Page } from 'src/components/wrappers/Page';
import { InputEmail, InputPassword } from 'src/components/ui/forms/Input';
import { ButtonSubmit } from 'src/components/ui/forms/Button';
import { ROUTES, validators } from 'shared';
import { Link } from 'src/components/ui/Link';
import { client } from 'src/utils/fela';
import {
  SignInEmailDocument,
  SignInEmailMutationResult,
  SignInEmailMutationVariables,
} from 'src/__generated__';
import { EnterThrough } from 'src/components/blocks/EnterThrough';

const styles: Styles<'form' | 'buttonSubmit' | 'link'> = {
  form: () => ({
    nested: {
      '> input': {
        display: 'block',
        width: 260,
        marginBottom: 40,
        paddingBottom: 5,
        border: 0,
        borderBottom: `2px solid ${COLOR.SECONDARY_200}`,

        '::placeholder': {
          color: COLOR.SECONDARY_200,
          ...font(FONT_SIZE.M, FONT_WEIGHT.REGULAR),
        },

        ':hover': {
          borderColor: COLOR.SECONDARY_300,
        },
      },
    },
  }),
  buttonSubmit: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 40,
  },
  link: {
    marginBottom: 10,
  },
};

const SignInEmail: React.FC = () => {
  const [signInEmail, result] = useMutation<
    SignInEmailMutationResult,
    SignInEmailMutationVariables
  >(SignInEmailDocument);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validationSchema: validators.signInEmail,
    onSubmit: (variables) =>
      signInEmail({ variables: { ...variables, client } }),
  });

  return (
    <Page layout="entry">
      <EnterThrough />

      <form onSubmit={formik.handleSubmit}>
        <FelaComponent style={styles.form}>
          <Notification error={result.error} />

          <InputEmail
            name="email"
            value={formik.values.email}
            error={formik.errors.email}
            onChange={formik.handleChange}
            placeholder={{ id: 'web.routes.SignInEmail.form_email' }}
          />

          <InputPassword
            name="password"
            value={formik.values.password}
            error={formik.errors.password}
            onChange={formik.handleChange}
            placeholder={{ id: 'web.routes.SignInEmail.form_password' }}
          />

          <FelaComponent style={styles.buttonSubmit}>
            <ButtonSubmit>
              <Msg id="web.routes.SignInEmail.form_submit" />
            </ButtonSubmit>
          </FelaComponent>
        </FelaComponent>
      </form>

      <p>
        <FelaComponent style={styles.link}>
          <Link
            url={{ scheme: ROUTES.FORGOT_PASSWORD }}
            color={COLOR.SECONDARY_200}
          >
            <Msg id="web.routes.SignInEmail.link_forgot_password" />
          </Link>
        </FelaComponent>
      </p>

      <p>
        <FelaComponent style={styles.link}>
          <Link
            url={{ scheme: ROUTES.SIGN_UP_EMAIL }}
            color={COLOR.SECONDARY_200}
          >
            <Msg id="web.routes.SignInEmail.link_sign_up" />
          </Link>
        </FelaComponent>
      </p>
    </Page>
  );
};

export default SignInEmail;
