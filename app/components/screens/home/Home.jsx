import React from 'react'
import MetaTitle from '../../ui/MetaTitle'
import styles from './Home.module.scss'
import AboutMe from './about-me/AboutMe'
import Grid from './grid/Grid'
import Circles from '../../ui/Circles/Circles'

const Home = ({ links, me }) => {
	return (
		<section className={styles.section}>
			<MetaTitle title="Portfolio Plandum" />
			<div className={styles.container}>
				<AboutMe me={me} />
				<Grid links={links} />
			</div>

			<Circles />
		</section>
	)
}

export default Home
