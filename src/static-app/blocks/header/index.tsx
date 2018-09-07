import * as React from 'react'
import Button from '../../../shared-components/button'
import { HeaderStyled } from './styles'

const Header = (props: any) => {
  return (
    <HeaderStyled>
      Header
      <Button text="Log in" />
    </HeaderStyled>
  )
}

export default Header
