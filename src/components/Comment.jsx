import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src='https://github.com/diego3g.png' alt='' />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Diego Fernandes</strong>
							<time title='02 de Julho de 2022' dateTime='2022-07-02 00:56:00'>
								Cerca de 1h atrás
							</time>
						</div>

						<button title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>
					<p>Muito bom Devon, Parabéns!!</p>
				</div>
				<footer>
					<button title='Aplaudir'>
						<ThumbsUp />
						Aplaudir <span>28</span>
					</button>
				</footer>
			</div>
		</div>
	)
}
