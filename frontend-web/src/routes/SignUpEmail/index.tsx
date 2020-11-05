import React from 'react';
import { useFormik } from 'formik';
import { FelaComponent } from 'react-fela';
import { ROUTES, validators } from 'shared';

import { Styles } from 'src/utils/fela';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { COLOR } from 'src/constants/colors';

import { useMutation } from '@apollo/client';
import { Msg } from 'src/i18n/Msg';
import { Notification } from 'src/components/ui/forms/Notification';
import { Page } from 'src/components/wrappers/Page';
import {
  InputText,
  InputEmail,
  InputPassword,
  InputCheckbox,
} from 'src/components/ui/forms/Input';
import { Button } from 'src/components/ui/forms/Button';
import { Link } from 'src/components/ui/Link';
import { client } from 'src/utils/fela';
import {
  UserLocale,
  SignUpEmailDocument,
  SignUpEmailMutationResult,
  SignUpEmailMutationVariables,
} from 'src/generated';
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

  const style: Styles<'container' | 'socialNetworksContainer' | 'checkbox'> = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '30px',
      marginTop: '30px',
    },

    socialNetworksContainer: {
      marginTop: '20px',
    },

    checkbox: {
      nested: {
        '>div>label': {
          ...font(FONT_SIZE.S, FONT_WEIGHT.REGULAR),
          color: COLOR.SECONDARY_300,
          display: 'flex',
          alignItems: 'center',
          columnGap: '10px',
          width: '250px',
          nested: {
            '>input': {
              display: 'inline-table',
            },
          },
        },
      },
    },
  };

  return (
    <Page layout="entry" withTitle>
      <form onSubmit={formik.handleSubmit}>
        <FelaComponent style={style.container}>
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
          <FelaComponent style={style.checkbox}>
            <InputCheckbox
              name="isAgree"
              label={{ id: 'web.routes.SignUpEmail.form_is_agree' }}
              value=""
              checked={formik.values.isAgree}
              onChange={formik.handleChange}
            />
          </FelaComponent>

          <Button
            disabled={!formik.values.isAgree}
            text={{ id: 'web.routes.SignUpEmail.form_submit' }}
            type="submit"
            mode="origin"
          />
        </FelaComponent>
      </form>
      <FelaComponent style={style.socialNetworksContainer}>
        <EnterThrough />
      </FelaComponent>
      <p>
        <Link url={{ scheme: ROUTES.SIGN_IN_EMAIL }} theme="negative">
          <Msg id="web.routes.SignUpEmail.link_sign_in" />
        </Link>
      </p>
    </Page>
  );
};

export default SignUpEmail;
