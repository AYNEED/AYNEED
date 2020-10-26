import React from 'react'
import { FelaComponent } from 'react-fela';
import { useFormik } from 'formik';
import { validators } from 'shared';

import {ProfileLine} from 'src/components/ui/ProfileLine'
import { InputEmail, InputText } from 'src/components/ui/forms/Input';
import {CalendarInput} from 'src/components/ui/CalendarInput'
import { Styles } from 'src/utils/fela';

const style: Styles<'container' | 'formContainer'> = {
    container:{
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: '100%',
        left: '310px',
        top: '0px'
    },
    formContainer:{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '50px',
        marginBottom: '225px'
    }
}

const ProfileFilling: React.FC = () => {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          calendar: '',
          email: '',
          phone: '',
          country: '',
          socialNetwork: ''
        },
        validateOnChange: false,
        validationSchema: validators.signUpEmail,
        onSubmit: () => { console.log('submit')}
      });

    return(
        <>
            <FelaComponent style={style.container}>
                <ProfileLine></ProfileLine>
                <form onSubmit={formik.handleSubmit}>
                    <FelaComponent style={style.formContainer}>
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
                        <CalendarInput disabled={false}></CalendarInput>
                        <InputEmail
                            name="email"
                            value={formik.values.email}
                            error={formik.errors.email}
                            onChange={formik.handleChange}
                            placeholder={{ id: 'web.routes.SignUpEmail.form_email' }}
                        />
                        <InputText
                            name="phone"
                            value={formik.values.phone}
                            error={formik.errors.phone}
                            onChange={formik.handleChange}
                            placeholder={{ id: 'web.routes.ProfileFilling.phone' }}
                        />
                        <InputText
                            name="country"
                            value={formik.values.country}
                            error={formik.errors.country}
                            onChange={formik.handleChange}
                            placeholder={{ id: 'web.routes.ProfileFilling.country' }}
                        />
                        <InputText
                            name="socialNetwork"
                            value={formik.values.socialNetwork}
                            error={formik.errors.socialNetwork}
                            onChange={formik.handleChange}
                            placeholder={{ id: 'web.routes.ProfileFilling.socialNetwork' }}
                        />
                    </FelaComponent>
                </form>
            </FelaComponent>
        </>
    )
}

export default ProfileFilling