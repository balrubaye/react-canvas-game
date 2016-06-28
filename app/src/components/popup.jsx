import React, {Component} from 'react';


 module.exports= class Popup extends Component{

	render(){

		return(<div className={'popup ' + this.props.className} >
				<h3> {this.props.headerTitle}</h3>
				<p>{this.props.paragraph} </p>

				<span className='close'> <input type='button'  value={this.props.buttonText} onClick={this.props.whenClicked}/> </span>

			</div> );

	}
}

