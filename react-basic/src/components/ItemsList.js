import React, { Component } from 'react'
import Item from './Item'

export default class ItemsList extends Component {
	render() {
		var items = this.props.items;
		return(
			<div className="ItemsList">
				{items.map(function(data){
					return <Item content={data}/>
				})}
			</div>
		);
	}
}
