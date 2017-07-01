import React, { Component } from 'react'
import '../css/Item.css'

export default class Item extends Component {
	render() {
		return(
			<div className="column is-one-third Item">
				<a href={this.props.content.url}>{this.props.content.url}</a>
				<img src={this.props.content.thumbnailUrl} title={this.props.content.title}/>
			</div>
		);
	}
}
