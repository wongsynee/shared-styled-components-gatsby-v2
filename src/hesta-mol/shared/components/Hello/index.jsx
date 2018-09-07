import React from 'react'
import PropTypes from 'prop-types'

import Button from 'hesta-mol/shared/components/Button'

import styles from './styles.scss'

const Hello = ({ children }) => (
  <div className={styles.message}>
    {children}
    <Button>Button</Button>
  </div>
)

Hello.propTypes = {
  children: PropTypes.node,
}

Hello.defaultProps = {
  children: null,
}

export default Hello
