const me = {
	siteName: 'Portfolio',
	avatar: '/avatar.png',
	description:
		'<p>Меня зовут Артем, в данный момент обучаюсь веб-разработке.</p>' +
		'<p>Сейчас хорошо знаю html, css. Не плохо изучил JavaScript.</p>' +
		'<p>Все проекты на данный момент являются учебными (Даже этот).</p>' +
		'<p>Спасибо что прочли это. 😊</p>'
}

export default function handler(req, res) {
	res.status(200).json(me)
}
