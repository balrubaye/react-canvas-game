import React, {Component} from 'react';


 class Popup extends Component{

	render(){

		return(
			<div className={'popup ' + this.props.className} >
				<h3> {this.props.headerTitle}</h3>
				<p>{this.props.paragraph} </p>

				<span className='close'> <input type='button' onClick={this.props.whenClicked} >Close</input>

			</div> );

	}
}

module.exports= { hello:'jjj'}