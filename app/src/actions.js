var Reflux= require('reflux');

var Actions= Reflux.createActions([ 
	'startGame', 'endGame']);

window.Actions= Actions;
module.exports = Actions;