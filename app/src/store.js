var Reflux= require('reflux');
var gameActions = require('./actions.js');

var Store = Reflux.createStore({
	init:function(){
		
		
		this.listenTo(gameActions.startGame, this.gameStart);
		this.listenTo(gameActions.endGame, this.gameEnd);
		
	},
	gameState: 'ready',

	gameStart: function(){
		

		this.gameState='start';
		this.trigger(this.gameState);
	},

	gameEnd: function(){
		//console.log('end');

		this.gameState='end';
		this.trigger(this.gameState);
	}
});


module.exports =Store;