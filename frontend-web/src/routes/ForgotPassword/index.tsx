import React from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';

import { Msg } from 'src/i18n/Msg';
import { Notification } from 'src/components/ui/forms/Notification';
import { Page } from 'src/components/wrappers/Page';
import { InputEmail } from 'src/components/ui/forms/Input';
import { Button } from 'src/components/ui/forms/Button';
import { ROUTES, validators } from 'shared';
import { Link } from 'src/components/ui/Link';
import {
  ForgotPasswordDocument,
  ForgotPasswordMutationResult,
  ForgotPasswordMutationVariables,
} from 'src/generated';

const style: Styles<'subtitleText' | 'formContainer'> = {
  subtitleText: {
    ...font(FONT_SIZE.L, FONT_WEIGHT.REGULAR),
    color: COLOR.SECONDARY_200,
    width: '320px',
    textAlign: 'center',
    marginTop: '10px',
  },

  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    rowGap: '50px',
    flexDirection: 'column',
    margin: '30px 0px',
  },
};

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
      <FelaComponent style={style.subtitleText} as="p">
        <Msg id="web.routes.ForgotPassword.description" />
      </FelaComponent>

      <form onSubmit={formik.handleSubmit}>
        <FelaComponent style={style.formContainer}>
          <Notification error={result.error} />

          <InputEmail
            name="email"
            value={formik.values.email}
            error={formik.errors.email}
            onChange={formik.handleChange}
            placeholder={{ id: 'web.routes.ForgotPassword.form_email' }}
          />

          <Button
            text={{ id: 'web.routes.ForgotPassword.form_submit' }}
            type="submit"
            mode="origin"
          />
        </FelaComponent>
      </form>

      <FelaComponent style={{ marginBottom: '10px' }} as="p">
        <Link url={{ scheme: ROUTES.SIGN_IN_EMAIL }} theme="negative">
          <Msg id="web.routes.ForgotPassword.link_sign_in" />
        </Link>
      </FelaComponent>

      <p>
        <Link url={{ scheme: ROUTES.SIGN_UP_EMAIL }} theme="negative">
          <Msg id="web.routes.ForgotPassword.link_sign_up" />
        </Link>
      </p>
    </Page>
  );
};

export default ForgotPassword;
