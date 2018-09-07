import * as React from 'react';
import { ButtonStyled } from './button-style';

const Button = (props) => {
    return (
        <ButtonStyled>
            {props.text}
        </ButtonStyled>
    );
};

export default Button;