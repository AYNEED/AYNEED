import React from 'react';
import { useFormik } from 'formik';
import { Msg } from 'src/i18n/Msg';
import { useMutation } from '@apollo/react-hooks';

import { Notification } from 'src/components/ui/forms/Notification';
import { Page } from 'src/components/wrappers/Page';
import {
  InputText,
  InputEmail,
  InputPassword,
  InputCheckbox,
} from 'src/components/ui/forms/Input';
import { ButtonSubmit } from 'src/components/ui/forms/Button';
import { ROUTES, validators } from 'shared';
import { Link } from 'src/components/ui/Link';
import { client } from 'src/utils/fela';
import {
  Locale,
  SignUpEmailDocument,
  SignUpEmailMutationResult,
  SignUpEmailMutationVariables,
} from 'src/__generated__';

const Logo = React.lazy(() => import('src/components/ui/Logo'));
const EnterThrough = React.lazy(() =>
  import('src/components/blocks/EnterThrough')
);

const SignUpEmail: React.FC = () => {
  const [signUpEmail, result] = useMutation<
    SignUpEmailMutationResult,
    SignUpEmailMutationVariables
  >(SignUpEmailDocument);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isAgree: false,
    },
    validateOnChange: false,
    validationSchema: validators.signUpEmail,
    onSubmit: (variables) =>
      signUpEmail({
        variables: {
          ...variables,
          client,
          locale: Locale.Rus, // TODO: automatic language detection
        },
      }),
  });

  return (
    <Page>
      <Logo />
      <EnterThrough />

      <h1>
        <Msg id="web.routes.SignUpEmail.title" />
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <Notification error={result.error} />

        <InputText
          name="firstName"
          value={formik.values.firstName}
          error={formik.errors.firstName}
          onChange={formik.handleChange}
          placeholder={{ id: 'web.routes.SignUpEmail.form_first_name' }}
        />

        <InputText
          name="lastName"
          value={formik.values.lastName}
          error={formik.errors.lastName}
          onChange={formik.handleChange}
          placeholder={{ id: 'web.routes.SignUpEmail.form_last_name' }}
        />

        <InputEmail
          name="email"
          value={formik.values.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
          placeholder={{ id: 'web.routes.SignUpEmail.form_email' }}
        />

        <InputPassword
          name="password"
          value={formik.values.password}
          error={formik.errors.password}
          onChange={formik.handleChange}
          placeholder={{ id: 'web.routes.SignUpEmail.form_password' }}
        />

        <InputCheckbox
          name="isAgree"
          label={{ id: 'web.routes.SignUpEmail.form_is_agree' }}
          value=""
          checked={formik.values.isAgree}
          onChange={formik.handleChange}
        />

        <ButtonSubmit disabled={!formik.values.isAgree}>
          <Msg id="web.routes.SignUpEmail.form_submit" />
        </ButtonSubmit>
      </form>

      <p>
        <Link url={{ scheme: ROUTES.SIGN_IN_EMAIL }}>
          <Msg id="web.routes.SignUpEmail.link_sign_in" />
        </Link>
      </p>
    </Page>
  );
};

export default SignUpEmail;
