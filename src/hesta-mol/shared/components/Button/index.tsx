import React, { StatelessComponent } from 'react'
import PropTypes from 'prop-types'

const Button: StatelessComponent<{}> = ({ children }) => (
  <button>{children}</button>
)

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  children: null,
}

export default Button
