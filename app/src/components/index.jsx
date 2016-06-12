
import React, {Component} from 'react';

import {render} from 'react-dom';
import MyCanvas from './myCanvas.jsx'

 class App extends Component {

      constructor() {
        super();
      }


      render() {
        return ( < div >
          < span className = 'info' >
          Use[A], [D] --- [←], [→] to MOVE Circles < /span>

          < MyCanvas / >
          < /div>
        );
      }

    }

render(<App /> , document.getElementById('container'));