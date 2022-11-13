import React from 'react'
import Image from 'next/image'
import styles from './EmailButton.module.scss'
import { APP_URL } from '../../../../../constants'

const EmailButton = () => {
	return (
		<div className={styles.button}>
			<a
				href="mailto:Plandum@mail.ru"
				target="_blank"
				rel="noreferrer"
				title="Plandum"
			>
				<span>
					<Image
						src={`${APP_URL}/icons/email.svg`}
						alt=""
						height={18}
						width={18}
					/>
				</span>
				<span>Email</span>
			</a>
		</div>
	)
}

export default EmailButton
