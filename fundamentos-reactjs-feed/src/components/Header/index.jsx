
import igniteLogo from '../../assets/images/ignite-logo.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do ignite"/>
    </header>
  )
}