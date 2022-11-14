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
		title: 'ВКонтакте',
		isImportant: true
	},
	{
		_id: 'Link_2',
		icon: {
			path: '/icons/ВКонтакте.png',
			width: 160
		},
		gradient: {
			from: '#FF1A18',
			to: '#FF18F2'
		},
		link: 'https://vk.com/plandum',
		title: 'ВКонтакте'
	},
	{
		_id: 'Link_3',
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
		_id: 'Link_4',
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
		_id: 'Link_5',
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
		_id: 'Link_6',
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
		_id: 'Link_7',
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
		_id: 'Link_8',
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
