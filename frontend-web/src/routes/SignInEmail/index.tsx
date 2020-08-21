import React from 'react';
import { useFormik } from 'formik';
import { Msg } from 'src/i18n/Msg';
import { useMutation } from '@apollo/client';

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

const Logo = React.lazy(() => import('src/components/ui/Logo'));
const EnterThrough = React.lazy(() =>
  import('src/components/blocks/EnterThrough')
);

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
    <Page>
      <Logo />
      <EnterThrough />

      <form onSubmit={formik.handleSubmit}>
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

        <ButtonSubmit>
          <Msg id="web.routes.SignInEmail.form_submit" />
        </ButtonSubmit>
      </form>

      <p>
        <Link url={{ scheme: ROUTES.FORGOT_PASSWORD }}>
          <Msg id="web.routes.SignInEmail.link_forgot_password" />
        </Link>
      </p>

      <p>
        <Link url={{ scheme: ROUTES.SIGN_UP_EMAIL }}>
          <Msg id="web.routes.SignInEmail.link_sign_up" />
        </Link>
      </p>
    </Page>
  );
};

export default SignInEmail;
