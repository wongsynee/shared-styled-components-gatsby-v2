import * as React from 'react';
import { CopyrightStyled } from './styles';

const Copyright = (props) => {
    return(
        <CopyrightStyled>
            {props.text}
        </CopyrightStyled>
    );
};

export default Copyright;