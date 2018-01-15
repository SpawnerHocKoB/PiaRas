Vue.component('game', {
	props: ['games', 'id'],
	template: `<div :class="['game', games[id]['class']]" :style="{backgroundImage: 'url(img/games/' + games[id]['images']['bg'] + ')', backgroundColor: '#' + games[id]['colors']['bg']}" @click="vm.contols.modalActive = id">
		<div class="shine" :style="{backgroundImage: 'radial-gradient(#' + games[id]['colors']['acc'] + ', transparent 60%)'}"></div>
		<div class="box">
			<div class="info">
				<div class="header">
					{{games[id]['name']}}
				</div>
				<div class="br">
					<div class="romb"></div><div class="romb"></div>
				<div class="romb"></div></div>
				<div class="description" :style="{color: '#' + games[id]['colors']['desc']}">
					{{games[id]['description']}}
				</div>
				<br>
				<button class="buy" :style="{backgroundColor: '#' + games[id]['colors']['desc']}">Подробнее</button>
			</div>
			<div class="overlay"></div>
		</div>
	</div>`,
	data: function () {
		return {
			test: 'test'
		}
	}
})

var vm = new Vue({
	el: "#app",
	data: {
		user: {
			email: 'email@site.ru',
			id: '124532534',
			adm: false,
			ban: false
		},
		contols: {
			modalActive: ''
		},
		games: {
			0: {
				name: "PLAYERUNKNOWN'S BATTLEGROUNDS",
				description: 'Это невероятно крутой чит, просто великолепный, оближешь пальчики, вот бы мне такой',
				fullDesc: 'Полное описание чита',
				class: ["pubg"],
				prices: {
					1: 20,
					5: 70,
					15: 150,
					30: 250,
					180: 1000
				},
				images: {
					bg: 'pubg-bg.png'
				},
				colors: {
					acc: 'fbd500',
					desc: '804f09',
					bg: '110902'
				},
				news: [{
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					img: 'news/1.jpg',
					date: '05.01.2018'
				}, {
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					date: '05.01.2018'
				}]
			},
			1: {
				name: "CS:GO",
				description: 'С этим читом ты станешь ещё большим гомосексуалистом и удовлетворишь всех на сервере',
				fullDesc: 'Полное описание чита',
				class: ["csgo"],
				prices: {
					15: 150,
					30: 250
				},
				images: {
					bg: 'csgo-bg.png'
				},
				colors: {
					acc: '3278ae',
					desc: '1e5580',
					bg: '03070c'
				},
				news: [{
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					img: 'news/1.jpg',
					date: '05.01.2018'
				}, {
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					date: '05.01.2018'
				}]
			},
			2: {
				name: "Point Blank",
				description: 'С этим читом ты станешь ещё большим гомосексуалистом и удовлетворишь всех на сервере',
				fullDesc: 'Полное описание чита',
				class: ["pb"],
				prices: {
					5: 80,
					15: 150,
					30: 250
				},
				images: {
					bg: 'pb-bg.png'
				},
				colors: {
					acc: 'fb0000',
					desc: '954343',
					bg: '190303'
				},
				news: [{
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					img: 'news/1.jpg',
					date: '05.01.2018'
				}, {
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					date: '05.01.2018'
				}]
			},
			3: {
				name: "CS:GO",
				description: 'С этим читом ты станешь ещё большим гомосексуалистом и удовлетворишь всех на сервере',
				fullDesc: 'Полное описание чита',
				class: ["csgo"],
				prices: {
					15: 150,
					30: 250
				},
				images: {
					bg: 'csgo-bg.png'
				},
				colors: {
					acc: '3278ae',
					desc: '1e5580',
					bg: '03070c'
				},
				news: [{
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					img: 'news/1.jpg',
					date: '05.01.2018'
				}, {
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					date: '05.01.2018'
				}]
			},
			4: {
				name: "PLAYERUNKNOWN'S BATTLEGROUNDS",
				description: 'Это невероятно крутой чит, просто великолепный, оближешь пальчики, вот бы мне такой',
				fullDesc: 'Полное описание чита',
				class: ["pubg"],
				prices: {
					1: 20,
					5: 70,
					15: 150,
					30: 250,
					180: 1000
				},
				images: {
					bg: 'pubg-bg.png'
				},
				colors: {
					acc: 'fbd500',
					desc: '804f09',
					bg: '110902'
				},
				news: [{
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					img: 'news/1.jpg',
					date: '05.01.2018'
				}, {
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					date: '05.01.2018'
				}]
			}
		}
	}
})