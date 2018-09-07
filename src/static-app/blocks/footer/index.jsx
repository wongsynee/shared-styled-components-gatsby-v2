import * as React from 'react'
import Copyright from './copyright'
import { FooterStyled } from './styles'

const Footer = (props) => {
  return (
    <FooterStyled>
      Footer
      <Copyright text="Copyright 2018" />
    </FooterStyled>
  )
}

export default Footer
