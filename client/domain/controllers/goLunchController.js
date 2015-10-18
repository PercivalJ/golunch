angular
	.moduel('GoLunchApp', [])
	.controller('GoLunchController', GoLunchController)

GoLunchController.$inject = ["$http"]

function GoLunchController($http){
	//this is our hardcoded seed data
	this.all = []
	this.newLunch = {}
	this.$http = $http
	this.getLunches()

	
}
GoLunchController.prototype.getLunches = function () {
	this.$http
		.get( "http://localhost:3000/lunches")
		.then(response => {
			this.all = response.data.lunches
		})
}

GoLunchController.prototype.addLunch = function () {
	this.$http
	.post( "http://localhost:3000/lunches", this.newLunch )
	.then( ( response ) => {
		this.getLunches()
	})
	this.newLunch = {}
}

GoLunchController.prototype.delete = function ( lunch ){
	this.$http
		.delete( "http://localhost:3000/lunches" + lunch._id )
		.then( response => {
			var index = this.all.indexOf( lunch )
			this.all.splice( index, 1 )
		})
}