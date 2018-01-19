var Data = {
	user: {
		auth: false,
		email: '',
		id: '',
		adm: false,
		ban: false
	},
	controls: {
		test: '0',
		activeCheat: '0',
		popup: 'auth'
	},
	games: [
		{
			link: 'pubg',
			name: "PLAYERUNKNOWN'S BATTLEGROUNDS",
			shirtDesc: 'Это невероятно крутой чит, просто великолепный, оближешь пальчики, вот бы мне такой',
			cheats: [{
				name: "AIM by 4e4enskiy sniper",
				description: 'Возволяет стрелять с башен кремля по оппозицонерам не боять бана. За каждое убийство начисляется голда, риск бана нулевой, поможет апнуться до ранга "Герой Роисиси".',
				status: { name: 'Активен', color: 'blue'},
				support: { name: 'Имеется', color: 'blue'},
				prices: [
					{days: '1 день', cost: 20},
					{days: '15 дней', cost: 150},
					{days: '30 дней', cost: 250},
					{days: '180 дней', cost: 1000}
				],
				news: [{
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					img: 'img/news/1.jpg',
					date: '05.01.2018'
				}, {
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					date: '05.01.2018'
				}]
			}],
			class: ["pubg"],
			images: {
				bg: 'img/games/pubg-bg.png',
				screens: ['img/games/pubg-scr1.png']
			},
			colors: {
				acc: 'fbd500',
				desc: '804f09',
				bg: '110902'
			}
		},
		{
			link: 'csgo',
			name: "CS:GO",
			shirtDesc: 'С этим читом ты станешь ещё большим гомосексуалистом и удовлетворишь всех на сервере',
			cheats: [{
				name: "WALLHACK v02.231",
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, iste impedit eveniet temporibus perferendis dignissimos iure! Incidunt beatae, temporibus quo aliquid, ullam non quam sapiente consequuntur reprehenderit neque sint et.',
				status: { name: 'Возможен бан', color: 'yellow'},
				support: { name: 'Отключена', color: 'red'},
				prices: [
					{days: '5 дней', cost: 80},
					{days: '15 дней', cost: 150},
					{days: '30 дней', cost: 250}
				],
				news: [{
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					img: 'img/news/1.jpg',
					date: '05.01.2018'
				}, {
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					date: '05.01.2018'
				}]
			}],
			class: ["csgo"],
			images: {
				bg: 'img/games/csgo-bg.png',
				screens: ['img/games/csgo-scr1.jpg']
			},
			colors: {
				acc: '3278ae',
				desc: '1e5580',
				bg: '03070c'
			}
		},
		{
			link: 'pb',
			name: "Point Blank",
			shirtDesc: 'С этим читом ты станешь ещё большим гомосексуалистом и удовлетворишь всех на сервере',
			cheats: [{
				name: "Wall Hack by Pia3333 v1.4",
				description: `<div class="alert yellow">Нет Дыма - запускать только в игре.<br><br>
				Быстрый респ и отключение мигания - запускать или выключать <span class="acc yellow">только в комнате</span>.</div><br>
				Специально пометил функции, <span class="acc">из-за которых может кикнуть с сервера!</span><br><br>
				<div class="quote red">Ну дамаг <span class="acc red">больше 60-70 не юзать.</span> С ховером <span class="acc yellow">только передвигаться</span>.<br><br>
				С супер патроном будьте осторожными! Не убивайте слишком много и не кидайте больше 2 грен </div>
				<br>
				<br>
				в архиве я добавил Process Hacker и инжектор с помощью которого надо инжетить чит!
				<br>
				<br>
				<div class="quote blue">Активация на <span class="acc">Home</span></div>
				`,
				status: { name: 'Пофикшен', color: 'red'},
				support: { name: 'Отключена', color: 'red'},
				prices: [
					{days: '5 дней', cost: 80},
					{days: '15 дней', cost: 150},
					{days: '30 дней', cost: 250}
				],
				news: [{
					name: 'Изменения в 1.4:',
					desc: `1) Фиксанул краш из-за фроста<br>
					2) Вырезал 2 функции(супер патрон и супер нож)<br>
					3) Добавлено описание о получении приватки`,
					img: 'http://s019.radikal.ru/i627/1205/59/04336e422db1.jpg',
					date: '12 - 05 - 2012'
				}, {
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					date: '05 - 01 - 2018'
				}]
			}],
			class: ["pb"],
			images: {
				bg: 'img/games/pb-bg.png',
				screens: ['img/games/pb-scr1.png']
			},
			colors: {
				acc: 'fb0000',
				desc: '954343',
				bg: '190303'
			}
		},
		{
			link: 'cs',
			name: "CS:GO",
			shirtDesc: 'С этим читом ты станешь ещё большим гомосексуалистом и удовлетворишь всех на сервере',
			cheats: [{
				name: "Чит на полёт",
				description: 'С этим читом ты станешь ещё большим гомосексуалистом и удовлетворишь всех на сервере',
				status: { name: 'не работает', color: 'yellow'},
				support: { name: 'Моральная', color: 'green'},
				prices: [
					{days: '15 дней', cost: 150},
					{days: '30 дней', cost: 250}
				],
				news: [{
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					img: 'img/news/1.jpg',
					date: '05.01.2018'
				}, {
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					date: '05.01.2018'
				}]
			}],
			class: ["csgo"],
			images: {
				bg: 'img/games/csgo-bg.png',
				screens: ['img/games/csgo-scr1.jpg']
			},
			colors: {
				acc: '3278ae',
				desc: '1e5580',
				bg: '03070c'
			}
		},
		{
			link: 'pubg2',
			name: "PLAYERUNKNOWN'S BATTLEGROUNDS",
			shirtDesc: 'С этим читом ты станешь ещё большим гомосексуалистом и удовлетворишь всех на сервере',
			cheats: [{
				name: "Чит на полёт",
				description: 'С этим читом ты станешь ещё большим гомосексуалистом и удовлетворишь всех на сервере',
				status: { name: 'Активен', color: 'blue'},
				support: { name: 'Платная', color: 'yellow'},
				prices: [
					{days: '15 дней', cost: 150},
					{days: '30 дней', cost: 250}
				],
				news: [{
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					img: 'img/news/1.jpg',
					date: '05.01.2018'
				}, {
					name: 'Обновление, очень классно всё стало',
					desc: 'Новое обновление, теперь наш чит стал ещё лучше, просто охуеть как классно, вы бы видели',
					date: '05.01.2018'
				}]
			}],
			class: ["pubg"],
			images: {
				bg: 'img/games/pubg-bg.png',
				screens: ['img/games/pubg-scr1.png']
			},
			colors: {
				acc: 'fbd500',
				desc: '804f09',
				bg: '110902'
			}
		}
	]
}

Vue.use(VueRouter);

const auth = {
	template: `<transition name="fade">
	<div class="popup">
		<div class="container">
			<form v-on:submit.prevent="login()" id="login">
				<label for="email">E-mail:</label>
				<input type="email" placeholder="email@mail.ru" id="email" name="email" required>
				<label for="password">Пароль:</label>
				<input type="password" placeholder="*****" id="password" name="password" required>
				<div id="captchaCredits"></div>
				<div class="reset"><span>Забыли пароль?</span></div>
				<button type="submit">Авторизация</button>
				<div id="error"></div>
				<div class="or"><span>Или</span></div>
				<div class="vk-reg">
					<a class="vk-button" href='https://oauth.vk.com/authorize?client_id=6334423&display=page&redirect_uri=http://ana.lh1.in/piaras/controllers/handler_vk.php&scope=stats, email&response_type=code&v=5.67'>Регистрация через ВКонтакте</a>
				</div>
			</form>
		</div>
		<router-link to="/">
			<div class="bg"></div>
		</router-link>
	</div>
</transition>`,
	methods: {
		login: function () {
			$.ajax({
				type: "POST",
				url: "http://ana.lh1.in/piaras/controllers/handler_login.php",
				data: $('#login').serialize(),
				success: function (result) {
					var res = $.parseJSON(result);
					if (res.message == 'success') {
						rLink('/');
						userReset();
					} else {
						$("#error").text(res.message);
					}
				}
			})
		}
	},
	mounted () {
		if (Data.user.auth) {
			rLink('/');
		} else {
			setTimeout(function () {
				grecaptcha.render('captchaCredits', { 'sitekey': '6LeV9kAUAAAAAOtYOxoOR79NJb8OCAz5YmuStHnK'});
			}, 400)
		}
	}
}

const signUp = {
	template: `<transition name="fade">
	<div class="popup">
		<div class="container">
			<form v-on:submit.prevent="signUp()" id="signUp">
				<label for="email">E-mail:</label>
				<input type="email" placeholder="email@mail.ru" id="email" name="email" required>
				<label for="password">Пароль:</label>
				<input type="password" placeholder="*****" id="password" name="password" required>
				<label for="password">Повторите пароль:</label>
				<input type="password" placeholder="*****" id="repeat-password" name="repeat-password" required>
				<div id="captchaCredits"></div>
				<button type="submit">Регистрация</button>
				<div id="error"></div>
				<div class="or"><span>Или</span></div>
				<div class="vk-reg">
					<a class="vk-button" href='https://oauth.vk.com/authorize?client_id=6334423&display=page&redirect_uri=http://ana.lh1.in/piaras/controllers/handler_vk.php&scope=stats,email&response_type=code&v=5.67'>Регистрация через ВКонтакте</a>
				</div>
			</form>
		</div>
		<div class="bg" @click="rLink('/')"></div>
	</div>
</transition>`,
	methods: {
		signUp: function () {
			$.ajax({
				type: "POST",
				url: "http://ana.lh1.in/piaras/controllers/handler_reg.php",
				data: $('#signUp').serialize(),
				success: function (result) {
					var res = $.parseJSON(result);
					if (res.message == 'success') {
						rLink('/reg-complete');
						userReset();
					} else {
						$("#error").text(res.message);
					}
				}
			})
		},
		vkReg: function () {
			$.ajax({
				type: "POST",
				url: "http://ana.lh1.in/piaras/controllers/handler_vk.php",
				success: function (result) {
					var res = $.parseJSON(result);
					if (res.message == 'success') {
						rLink('/');
						userReset();
					} else {
						$("#error").text(res.message);
					}
				}
			})
		}
	},
	mounted () {
		if (Data.user.auth) {
			rLink('/');
		} else {
			setTimeout(function () {
				grecaptcha.render('captchaCredits', { 'sitekey': '6LeV9kAUAAAAAOtYOxoOR79NJb8OCAz5YmuStHnK'});
			}, 400)
		}
	}
}

const vkComplete = {
	template: `<transition name="fade">
	<div class="popup">
		<div class="container">
			<form v-on:submit.prevent="vkComplete()" id="vkComplete">
				<label for="email">E-mail:</label>
				<input type="email" placeholder="email@mail.ru" id="email" name="email" v-model="Data.user.email" v-show="Data.user.email != undefined && Data.user.email != ''" required>
				<input type="email" placeholder="email@mail.ru" :placeholder="Data.user.email" disabled v-if="Data.user.email == undefined && Data.user.email == ''">
				<label for="password">Придумайте пароль:</label>
				<input type="password" placeholder="*****" id="password" name="password" required>
				<label for="password">Повторите пароль:</label>
				<input type="password" placeholder="*****" id="repeat-password" name="repeat-password" required>
				<div id="captchaCredits"></div>
				<button class="vk-button" type="submit">Сохранить пароль</button>
				<div id="error"></div>
			</form>
		</div>
	</div>
</transition>`,
	methods: {
		vkComplete: function () {
			$.ajax({
				type: "POST",
				url: "http://ana.lh1.in/piaras/controllers/handler_vk.php",
				data: $('#vkComplete').serialize(),
				success: function (result) {
					var res = $.parseJSON(result);
					console.log(res);
					if (res.message == 'success') {
						rLink('/');
						userReset();
					} else {
						$("#error").text(res.message);
					}
				}
			})
		}
	},
	mounted () {
		if (Data.user.auth) {
		} else {
			setTimeout(function () {
				grecaptcha.render('captchaCredits', { 'sitekey': '6LeV9kAUAAAAAOtYOxoOR79NJb8OCAz5YmuStHnK'});
			}, 400)
		}
	}
}

const regComplete = {
	template: `<transition name="fade">
	<div class="popup">
		<div class="container">
			<form v-on:submit.prevent="login()" id="login">
				Всё заебок, зайди на почту
			</form>
		</div>
		<div class="bg" @click="rLink('/')"></div>
	</div>
</transition>`
}

const logout = {
	template: `<transition name="fade">
	<div class="popup">
		<div class="container"><div class="question">Вы действительно хотите выйти?</div>
			<div class="choice">
				<button class="yes" @click.prevent="logout()">Да, выйти</button>
				<button class="no" @click.prevent="rLink('/')">Нет, я передумал</button>
			</div>
			<div id="error"></div>
		</div>
		<div class="bg" @click="rLink('/')"></div>
	</div>
</transition>`,
	methods: {
		logout: function () {
			$.ajax({
				type: "POST",
				url: "http://ana.lh1.in/piaras/controllers/logout.php",
				success: function (result) {
					var res = $.parseJSON(result);
					console.log(res);
					if (res.auth == 'false') {
						Data.user.auth = false;
						Data.user.email = '';
						Data.user.id = '';
						Data.user.adm = false;
						rLink('/');
					} else {
						$("#error").text('Произошла ошибка');
					}
				}
			})
		}
	},
	mounted () {
		if (Data.user.auth) {
		} else {
			rLink('/');
		}
	}
}

const gameModal = {
	template: `<transition name="slide-up">
	<div class="modal">
		<header>
			<a href="#" class="logo">
				Pia<span class="acc">Ras</span>
				<span class="alt">Здесь вас наебут и обоссут</span>
			</a>
		</header>
		<div class="container">
			
			<div class="col">
				<div class="preview"><img :src="games[activeGame]['images']['screens']['0']"></div>
				<div class="description" v-html="games[activeGame]['cheats'][controls.activeCheat]['description']"></div>
			</div>
			<div class="col col-right">
				<div class="name">{{games[activeGame]['cheats'][controls.activeCheat]['name']}}</div>
				<div class="status">
					<div class="punkt">Статус: <span :class="[games[activeGame]['cheats'][controls.activeCheat]['status']['color'], 'acc']">{{games[activeGame]['cheats'][controls.activeCheat]['status']['name']}}</span></div>
					<div class="punkt">Поддержка: <span :class="[games[activeGame]['cheats'][controls.activeCheat]['support']['color'], 'acc']">{{games[activeGame]['cheats'][controls.activeCheat]['support']['name']}}</span></div>
				</div>
				<form>
					<div class="price-list">
						<label v-for="(price, index) in games[activeGame]['cheats'][controls.activeCheat]['prices']">
							<input type="radio" class="price" id="price" name="price" v-if="index == 0" checked>
							<input type="radio" class="price" id="price" name="price" v-else>
							<div class="price">
								{{price.days}}
								<div class="acc">{{price.cost}} р.</div>
							</div>
						</label>
					</div>
					<div class="mg-box"><button>Купить</button></div>
				</form>
				<div class="news-block">
					<div class="header">Последние новости</div>
					<div class="news-list">
						<div class="item" v-for="news in games[activeGame]['cheats'][controls.activeCheat]['news']">
							<div class="topic">
								{{news.name}}
								<div class="date">{{news.date}}</div>
							</div>
							<div class="contents">
								<div class="p" v-html="news.desc"></div>
								<img :src="news['img']" v-if="news['img']">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<router-link to="/"><div class="bg"></div></router-link>
	</div>
</transition>`,
	data: function () {
		return Data;
	},
	computed: {
		activeGame: function () {
			return this.games.findIndex(el => el.link === this.$route.params.id);
		}
	},
	beforeMount: function () {
		if (this.games.findIndex(el => el.link === this.$route.params.id) == -1) {
			rLink('/404');
		}
	},
	beforeUpdate: function () {
		if (this.games.findIndex(el => el.link === this.$route.params.id) == -1) {
			rLink('/404');
		}
	}
}

const NotFoundComponent = {
	template: `
	<div class="modal">
		<div class="container">
			<div class="v-center">
				<div class="error">
					<span class="err404">404</span><br>
					<span class="err-desc">Not Found</span><br>
					<router-link to="/"><button>На главную</button></router-link>
				</div>
			</div>
		</div>
		<router-link to="/"><div class="bg"></div></router-link>
	</div>`
}

var router = new VueRouter({
	routes: [
		{ path: '', name: 'root'},
		{ path: '/auth', component: auth, title: 'Search' },
		{ path: '/signup', component: signUp },
		{ path: '/vk-complete', component: vkComplete },
		{ path: '/reg-complete', component: regComplete },
		{ path: '/logout', component: logout },
		{ path: '/game/:id', component: gameModal },
		{ path: '/404', component: NotFoundComponent },
		{ path: '*', redirect: '/404' }
	]
})

Vue.component('userPanel', {
	template: ``,
	data: function () {
		return Data;
	}
})

Vue.component('game', {
	props: ['id'],
	template: `
<div :class="['game', games[id]['class']]" :style="{backgroundImage: 'url(' + games[id]['images']['bg'] + ')', backgroundColor: '#' + games[id]['colors']['bg']}" @click="rLink('/game/' + games[id]['link'])">
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
					{{games[id]['shirtDesc']}}
				</div>
				<br>
				<router-link :to="'/game/' + games[id]['link']"><button class="buy" :style="{backgroundColor: '#' + games[id]['colors']['desc']}">Подробнее</button></router-link>
			</div>
			<div class="overlay"></div>
		</div>
	</div>`,
	data: function () {
		return Data;
	}
})

//Vue.component('popup', {
//	props: ['status'],
//	template: `<transition name="fade">
//	<div class="popup" v-if="status && status != ''">
//		<div class="container">
//			<form v-if="status == 'auth'" v-on:submit.prevent="login()" id="login">
//				<label for="email">E-mail:</label>
//				<input type="email" placeholder="email@mail.ru" id="email" name="email" required>
//				<label for="password">Пароль:</label>
//				<input type="password" placeholder="*****" id="password" name="password" required>
//    			<div class="g-recaptcha" data-sitekey="6LeV9kAUAAAAAOtYOxoOR79NJb8OCAz5YmuStHnK"></div>
//				<button type="submit">Авторизация</button>
//				<div id="error"></div>
//			</form>
//		</div>
//		<div class="bg" @click="vm.controls.popup = ''"></div>
//	</div>
//</transition>`,
//	methods: {
//		login: function () {
//			$.ajax({
//				type: "POST",
//				url: "http://ana.lh1.in/piaras/controllers/handler_login.php",
//				data: $('#login').serialize(),
//				success: function (result) {
//					var res = $.parseJSON(result);
//					$("#error").text(res.message);
//				}
//			})
//		}
//	}
//})

var vm = new Vue({
	el: "#app",
	data: Data,
	watch: {
		"user.adm": function () {
			userTest(function (result) {
				if (result.adm != undefined) {
					if (Data.user.adm != result.adm) {
						switch(result.adm) {
							case '0':
								Data.user.adm = false;
								break;
							case '1':
								Data.user.adm = true;
								break;
							default:
								Data.user.adm = result.adm;
								break;
						}
						alert('ЧЁ, УМНЫЙ ДОХУЯ ЧТО ЛИ?');
					}
				} else {
					Data.user.adm = false;
				}
			})
		}
	},
	router: router,
	created: function () {
		userReset()
	}
})

function userReset() {
	$.ajax({
		method: "POST",
		url: "http://ana.lh1.in/piaras/controllers/handler.php",
		success: function (res) {
			var result = $.parseJSON(res);

			if (result['auth'] == 'false') {
				Data.user.auth = false;
			} else {
				Data.user.auth = true;
				Data.user.email = result['email'];
				Data.user.id = result['user_id'];
				Data.user.adm = result['adm'];
				Data.user.ban = result['ban'];
			}
		}
	})
}

function userTest(callback) {
	$.ajax({
		method: "POST",
		url: "http://ana.lh1.in/piaras/controllers/handler.php",
		success: function (res) {
			var result = $.parseJSON(res);
			callback(result);
		}
	})
}

function rLink(link) {router.push({ path: link })}