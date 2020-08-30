import React from 'react';
import { useFormik } from 'formik';
import { Msg } from 'src/i18n/Msg';
import { useMutation } from '@apollo/client';

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
  UserLocale,
  SignUpEmailDocument,
  SignUpEmailMutationResult,
  SignUpEmailMutationVariables,
} from 'src/__generated__';
import { EnterThrough } from 'src/components/blocks/EnterThrough';

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
          locale: UserLocale.Rus, // TODO: automatic language detection
        },
      }),
  });

  return (
    <Page layout="entry" withTitle>
      <EnterThrough />

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

        <ButtonSubmit
          disabled={!formik.values.isAgree}
          text={{ id: 'web.routes.SignUpEmail.form_submit' }}
        />
      </form>

      <p>
        <Link url={{ scheme: ROUTES.SIGN_IN_EMAIL }} theme="negative">
          <Msg id="web.routes.SignUpEmail.link_sign_in" />
        </Link>
      </p>
    </Page>
  );
};

export default SignUpEmail;
