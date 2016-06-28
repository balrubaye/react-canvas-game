
import React, {Component} from 'react';

import {render} from 'react-dom';
import MyCanvas from './myCanvas'
import Popup from './popup'
import Store from '../store.js';
import Actions from '../actions.js';

 class App extends Component {
      

      constructor() {
        super();

        Store.listen(  () => this.onGameStateChange(Store.gameState) );

        this.state={ gameState: Store.gameState};

       // console.log(Popup);

      }

      onGameStateChange(status){
        //console.log(this);
        console.log( 'status: ' + status);
        
        this.setState({gameState : status});
      } 

      handlePopupClick(arg){
        console.log('click : ' + arg);
          if(arg === 'start'){
            console.log(Actions);
            Actions.startGame();
          }

          else if(arg=== 'end'){
            Actions.endGame();
          }
      }

      showPopup(){

      let title, className, text, status;
      console.log('show popup ' + this.state.gameState);
      if(this.state.gameState === 'ready')
      {
        title='Welcome to the best game!';
        status= 'start';
        className='show';
        text= 'Start Game';
      }

      else if( this.state.gameState === 'end'){
        title='You got busted!!!';
        status= 'start';
        className='show';
        text= 'Retry';
      }

      return (<Popup headerTitle={title} className={className} 
        buttonText={text} whenClicked={ () => this.handlePopupClick(status) }/>
        );
    }

      loadContent(){
        if(this.state.gameState === 'start'){
          console.log('now start');

           return ( < div >
          < span className = 'info' >
          Use[A], [D] --- [←], [→] to MOVE Circles < /span>

          < MyCanvas / >
          < /div>
        );
        }
        else if(this.state.gameState === 'ready' || this.state.gameState === 'end'){
          return this.showPopup();
        }
      }
           
      render() {
        return (<div>
                  {this.loadContent()}
                </div>
          );

         
      }

    }

render(<App /> , document.getElementById('container'));