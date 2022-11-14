import React from 'react'
import AnimateBlock from '../../../ui/animate-block/AnimateBlock'
import styles from './GridItem.module.scss'

const GridItem = ({ item }) => {
	return (
		<a
			href={item.link}
			rel={'noreferrer'}
			target="_blank"
			className={styles.item}
		>
			<div
				className={styles.gradient}
				style={{
					backgroundImage: `linear-gradient(to right, ${item.gradient.from} 0%, ${item.gradient.to} 51%, ${item.gradient.from} 100%)`
				}}
			>
				<img src={item.icon.path} alt="" width={item.icon.width} />
			</div>
			<div className={styles.title}>{item.title}</div>
			{item.IsImportant && <AnimateBlock />}
		</a>
	)
}

export default GridItem
