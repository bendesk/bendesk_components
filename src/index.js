import React from 'react'
import styles from './styles.module.css'
import { TypographyTeaser } from './TypographyTeaser'
const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { TypographyTeaser, ExampleComponent }
