import * as React from 'react'
import { CopyrightStyled } from './styles'

const Copyright = (props: any) => {
  const content = props
  return (
    <CopyrightStyled>
      {content.text}
    </CopyrightStyled>
  )
}

export default Copyright
