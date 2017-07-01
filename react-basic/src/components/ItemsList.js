import React, { Component } from 'react'
import Item from './Item'
import '../css/ItemsList.css'

export default class ItemsList extends Component {
	render() {
		var items = this.props.items;
		return(
			<div className="columns ItemsList">
				{items.map(function(data){
					return <Item key={data.id} content={data}/>
				})}
			</div>
		);
	}
}
