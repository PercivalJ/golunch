angular
	.module('GoLunchApp', [ 'ui.router'] )
	.config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: "",
			templateUrl: "home.html"
		})

		.state('login', {
			url: '/login',
			templateUrl: 'login.html'
		})

		.state('list', {
			url: '/list',
			templateUrl: 'list.html'
		})

		.state('new', {
			url: '/new',
			templateUrl: 'new.html'
		})

		.state('about', {
			url: '/about',
			templateUrl: 'about.html'
		})

		.state('loggedout', {
			url: '/loggedout',
			templateUrl: 'loggedout.html'
		})
}

