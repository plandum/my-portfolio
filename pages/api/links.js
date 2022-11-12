const links = [
	{
		_id: 'Link_1',
		icon: {
			path: '/icons/ВКонтакте.png',
			width: 160
		},
		gradient: {
			from: '#a044c1',
			to: '#6f1fbf'
		},
		link: 'https://vk.com/plandum',
		title: 'ВКонтакте'
	},
	{
		_id: 'Link_1',
		icon: {
			path: '/icons/ВКонтакте.png',
			width: 160
		},
		gradient: {
			from: '#a044c1',
			to: '#6f1fbf'
		},
		link: 'https://vk.com/plandum',
		title: 'ВКонтакте'
	},
	{
		_id: 'Link_1',
		icon: {
			path: '/icons/ВКонтакте.png',
			width: 160
		},
		gradient: {
			from: '#a044c1',
			to: '#6f1fbf'
		},
		link: 'https://vk.com/plandum',
		title: 'ВКонтакте'
	},
	{
		_id: 'Link_1',
		icon: {
			path: '/icons/ВКонтакте.png',
			width: 160
		},
		gradient: {
			from: '#a044c1',
			to: '#6f1fbf'
		},
		link: 'https://vk.com/plandum',
		title: 'ВКонтакте'
	}
]

export default function handler(req, res) {
	res.status(200).json(links)
}
