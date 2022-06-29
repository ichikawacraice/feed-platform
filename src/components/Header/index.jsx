import styles from './style.module.css'

import igniteLogo from '/src/assets/img/logo.svg'

export function Header() {
	return (
		<header className={styles.header}>
			<img src={igniteLogo} alt="Logo Ignite" />
		</header>
	)
}
