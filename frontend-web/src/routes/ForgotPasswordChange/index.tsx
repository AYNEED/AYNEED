import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { Page } from 'src/components/wrappers/Page';
import { InputPassword } from 'src/components/ui/forms/Input';
import { Button } from 'src/components/ui/forms/Button';

const ForgotPasswordChange: React.FC = () => {
  const style: Styles<'formContainer'> = {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '40px',
      marginTop: '30px',
    },
  };

  return (
    <Page layout="entry" withTitle>
      <FelaComponent style={style.formContainer}>
        <InputPassword
          onChange={() => null}
          name="password"
          value={''}
          placeholder={{ id: 'web.routes.ForgotPassword.form_newPassword' }}
        ></InputPassword>
        <InputPassword
          onChange={() => null}
          name="passwordRepeat"
          value={''}
          placeholder={{
            id: 'web.routes.ForgotPassword.form_newPasswordRepeat',
          }}
        ></InputPassword>
        <Button
          mode="origin"
          text={{ id: 'web.routes.ForgotPassword.form_submit' }}
        ></Button>
      </FelaComponent>
    </Page>
  );
};

export default ForgotPasswordChange;
