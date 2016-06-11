
import React, {Component} from 'react';

import {render} from 'react-dom';

class APP extends Component{

	render(){

		return (
				<p> Hello World </p>
			);
	}
}

render(<APP /> , document.getElementById('container'));