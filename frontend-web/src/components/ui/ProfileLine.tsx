import React from 'react'
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import {Avatar} from 'src/components/ui/Avatar'
import { UserClient } from 'src/__generated__';
import { ProgressBar } from 'src/components/ui/ProgressBar'
import {Button} from 'src/components/ui/forms/Button'
import { Msg } from 'src/i18n/Msg';
import { COLOR } from 'src/constants/colors';
import {Edit} from 'src/components/icons/interactions/Edit'
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';

const style: Styles< 'container' | 'textContainer' | 'pencilIconContainer' | 'buttonContaier' | 'attentionText' | 'requireText' | 'dateContainer' | 'dateText'> = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '310px',
        position: 'fixed',
        height: '100%',
        backgroundColor: COLOR.WHITE,
        left: '0px',
        padding: '30px' 
    },
    textContainer:{
        marginBottom: '50px'
    },
    pencilIconContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '25px 0px',
    },
    buttonContaier:{
        marginTop: '50px',
        display: 'flex',
        rowGap: '20px',
        flexDirection: 'column'
    },
    attentionText:{
        color: COLOR.RED,
        ...font(FONT_SIZE.M, FONT_WEIGHT.REGULAR),
        marginBottom: '10px'
    },
    requireText:{
        color: COLOR.SECONDARY_200,
        ...font(FONT_SIZE.M, FONT_WEIGHT.REGULAR)
    },
    dateContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: '35px'
    },
    dateText:{
        color: COLOR.SECONDARY_200,
        ...font(FONT_SIZE.M, FONT_WEIGHT.REGULAR) 
    }
}

export const ProfileLine: React.FC = () => {
    return(
        <FelaComponent style={style.container}>
            <FelaComponent style={style.dateContainer}>
                <FelaComponent style={style.dateText} as='p'>00.00.0000</FelaComponent>
            </FelaComponent>
            <Avatar id={'1'} isOnline={true} client={UserClient.Desktop} size={'140px'}></Avatar>
            <FelaComponent style={style.pencilIconContainer}>
                <Edit fill={COLOR.SECONDARY_200}></Edit>
            </FelaComponent>
            <FelaComponent style={style.textContainer}>
                <FelaComponent style={style.attentionText} as='p'><Msg id={'web.components.ui.ProfileLine.attention'}></Msg></FelaComponent>
                <FelaComponent style={style.requireText} as='p'><Msg id={'web.components.ui.ProfileLine.required'}></Msg></FelaComponent>
            </FelaComponent>
            <ProgressBar percent={60} progressBarTitle={'До первых начинаний'} negative={false}></ProgressBar>
            <FelaComponent style={style.buttonContaier}>
                <Button mode={'origin'} text={{id: 'web.components.ui.ProfileLine.send'}}></Button>
                <Button mode={'origin'} text={{id: 'web.components.ui.ProfileLine.cancel'}}></Button>
            </FelaComponent>
        </FelaComponent>
    )
}