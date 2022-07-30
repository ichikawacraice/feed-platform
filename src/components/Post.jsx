import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState(['Post muito bacana hein?!'])
	const [newCommentText, setNewCommentText] = useState('')

	const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	})

	function handleCreateNewComment() {
		event.preventDefault()

		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	function handleNewCommentChange() {
		event.target.setCustomValidity('')
		setNewCommentText(event.target.value)
	}

	function handleNewCommentInvalide() {
		event.target.setCustomValidity('Po bixo, digita algo né?!')
	}

	function deleteComment(commentToDelete) {
		const commentWithoutDeletedOne = comments.filter((comment) => {
			return !comment.includes(commentToDelete)
		})
		setComments(commentWithoutDeletedOne)
	}

	return (
		<article className={styles.post}>
			<header className={styles.header}>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} alt={author.name} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					if (line.type == 'paragraph') {
						return <p key={line.content}>{line.content}</p>
					} else if (line.type == 'link') {
						return (
							<p key={line.content}>
								<a href='#'> {line.content} </a>
							</p>
						)
					}
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixei seu feedback</strong>

				<textarea
					name='comment'
					placeholder='Deixe um comentário'
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalide}
					required
				/>

				<footer>
					<button type='submit' disabled={!newCommentText.length}>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
				})}
			</div>
		</article>
	)
}
