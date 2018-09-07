import * as React from 'react'
import { CopyrightStyled } from './styles'

const Copyright = (props) => {
  const content = props
  return (
    <CopyrightStyled>
      {content.text}
    </CopyrightStyled>
  )
}

export default Copyright
