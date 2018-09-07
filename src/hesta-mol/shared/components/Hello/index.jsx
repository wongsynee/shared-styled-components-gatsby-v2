import React from 'react'
import PropTypes from 'prop-types'

// import styles from './styles.scss'

const Hello = ({ children }) => (
  <div className={styles.message}>{children}</div>
)

Hello.propTypes = {
  children: PropTypes.node,
}

Hello.defaultProps = {
  children: null,
}

export default Hello
