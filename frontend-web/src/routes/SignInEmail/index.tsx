import React from 'react';
import { useFormik } from 'formik';
import { Msg } from 'src/i18n/Msg';
import { useMutation, gql } from '@apollo/client';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { COLOR } from 'src/constants/colors';
import { Notification } from 'src/components/ui/forms/Notification';
import { Page } from 'src/components/wrappers/Page';
import { InputEmail, InputPassword } from 'src/components/ui/forms/Input';
import { Button } from 'src/components/ui/forms/Button';
import { ROUTES, validators } from 'shared';
import { Link } from 'src/components/ui/Link';
import { client } from 'src/utils/fela';
import {
  SignInEmailDocument,
  SignInEmailMutationResult,
  SignInEmailMutationVariables,
} from 'src/generated';
import { EnterThrough } from 'src/components/blocks/EnterThrough';

const styles: Styles<'form' | 'buttonSubmit' | 'link'> = {
  form: {
    nested: {
      '> input': {
        display: 'block',
        width: 255,
        marginBottom: 40,
        paddingBottom: 5,
        border: 0,
        borderBottom: `2px solid ${COLOR.SECONDARY_200}`,

        nested: {
          ':hover': {
            borderColor: COLOR.SECONDARY_300,
          },

          '::placeholder': {
            color: COLOR.SECONDARY_200,
            ...font(FONT_SIZE.M, FONT_WEIGHT.REGULAR),
          },
        },
      },
    },
  },
  buttonSubmit: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 40,
  },
  link: {
    marginBottom: 15,
  },
};

const pushUserInLocalState = (result: any): void => {
  result.client.writeQuery({
    query: gql`
      query {
        user @client
      }
    `,
    data: {
      user: result.data?.data?.signInEmail,
    },
  });
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
    onSubmit: (variables) => {
      signInEmail({ variables: { ...variables, client } });
      pushUserInLocalState(result);
    },
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
            <Button
              text={{ id: 'web.routes.SignInEmail.form_submit' }}
              mode="origin"
              type="submit"
            />
          </FelaComponent>
        </FelaComponent>
      </form>

      <FelaComponent style={styles.link}>
        <Link
          url={{ scheme: ROUTES.FORGOT_PASSWORD }}
          color={COLOR.SECONDARY_200}
        >
          <Msg id="web.routes.SignInEmail.link_forgot_password" />
        </Link>
      </FelaComponent>

      <FelaComponent style={styles.link}>
        <Link
          url={{ scheme: ROUTES.SIGN_UP_EMAIL }}
          color={COLOR.SECONDARY_200}
        >
          <Msg id="web.routes.SignInEmail.link_sign_up" />
        </Link>
      </FelaComponent>
    </Page>
  );
};

export default SignInEmail;
