import * as React from 'react'
import { ButtonStyled } from './button-style'

const Button = (props) => {
  const content = props
  return (
    <ButtonStyled>{content.text}</ButtonStyled>
  )
}

export default Button
