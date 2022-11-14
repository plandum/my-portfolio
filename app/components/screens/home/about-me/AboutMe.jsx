import Image from 'next/image'
import React from 'react'
import styles from './AboutMe.module.scss'
import EmailButton from './email-button/EmailButton'
import DescriptionButton from './description-button/DescriptionButton'
import { APP_URL } from '../../../../constants'

const AboutMe = ({ me }) => {
	return (
		<div className={styles.me}>
			<div className={styles['image-wrapper']}>
				<span>
					<Image
						src={`${APP_URL}${me.avatar}`}
						width={190}
						height={190}
						className={styles.image}
						alt={me.siteName}
						quality={100}
					/>
				</span>
			</div>
			<div className={styles.heading}>
				<span>Plandum</span>
			</div>
			<EmailButton />
			<DescriptionButton description={me.description} />
		</div>
	)
}

export default AboutMe
