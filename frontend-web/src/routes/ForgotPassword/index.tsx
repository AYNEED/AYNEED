import React from 'react';
import { useFormik } from 'formik';
import { Msg } from 'src/i18n/Msg';
import { useMutation } from '@apollo/client';

import { Notification } from 'src/components/ui/forms/Notification';
import { Page } from 'src/components/wrappers/Page';
import { InputEmail } from 'src/components/ui/forms/Input';
import { ButtonSubmit } from 'src/components/ui/forms/Button';
import { ROUTES, validators } from 'shared';
import { Link } from 'src/components/ui/Link';
import {
  ForgotPasswordDocument,
  ForgotPasswordMutationResult,
  ForgotPasswordMutationVariables,
} from 'src/__generated__';
import { EnterThrough } from 'src/components/blocks/EnterThrough';

const ForgotPassword: React.FC = () => {
  const [forgotPassword, result] = useMutation<
    ForgotPasswordMutationResult,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validateOnChange: false,
    validationSchema: validators.forgotPassword,
    onSubmit: (variables) => forgotPassword({ variables }),
  });

  return (
    <Page layout="entry" withTitle>
      <EnterThrough />

      <p>
        <Msg id="web.routes.ForgotPassword.description" />
      </p>

      <form onSubmit={formik.handleSubmit}>
        <Notification error={result.error} />

        <InputEmail
          name="email"
          value={formik.values.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
          placeholder={{ id: 'web.routes.ForgotPassword.form_email' }}
        />

        <ButtonSubmit>
          <Msg id="web.routes.ForgotPassword.form_submit" />
        </ButtonSubmit>
      </form>

      <p>
        <Link
          url={{ scheme: ROUTES.SIGN_IN_EMAIL }}
          theme="negative"
        >
          <Msg id="web.routes.ForgotPassword.link_sign_in" />
        </Link>
      </p>

      <p>
        <Link
          url={{ scheme: ROUTES.SIGN_UP_EMAIL }}
          theme="negative"
        >
          <Msg id="web.routes.ForgotPassword.link_sign_up" />
        </Link>
      </p>
    </Page>
  );
};

export default ForgotPassword;
