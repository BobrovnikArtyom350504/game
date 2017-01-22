'use strict';
import $ from 'jquery';

export default class Table {

	constructor(name) {	
		this.tableName = name;
		if(!localStorage.hasOwnProperty(name))
			localStorage.setItem(this.tableName, JSON.stringify({lastId: 0}));
	}

	all() {
		return JSON.parse(localStorage.getItem(this.tableName));
	}


	set(data) {
		let all = this.all();
		let id = data.id || getNextId();
		data = Object.assign({}, data, {id: id});
		all[id] = data;
		localStorage.setItem(this.tableName, JSON.stringify(all));
		return data;

		function getNextId() {
			return ++all.lastId ;
		}
	}

	get(properties) {
		let results = $.map(this.all(), (object) => {
			for (var key in properties) {
				if(properties[key] !== object[key])
					return null;
			}
			return object;
		});
		return results;
	}

	update(data) {
		var object = this.get({id: data.id})[0];
		if(object)
			this.set(Object.assign(object, data));
	}

	delete(id) {
		let all = this.all();
		delete all[id];
		localStorage.setItem(this.tableName, JSON.stringify(all));
	}

	clear() {
		localStorage.clear();
	}
}
