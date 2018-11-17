import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

class news extends Component {
	/*
	constructor(props) {
		super(props)
		const params = props.url.query
		console.log(params)
		this.state = {data: []}
		this.getDocs = this.getDocs.bind(this)
		// fetch('http://localhost:9200/_search', {q: `content:${params.q}`})
		fetch('http://localhost:9200/_search', 
			{
				q: `content:${params.q}`,
				sort:
				[{
					'date_str':{"order":"asc"}
				}]
			}).then(res => {
			res.json().then(res => {
				this.setState({data: res.hits.hits})
				console.log(res)
	    })
		})
	}
	*/
	funcA(res) {
			this.setState({data: res.hits.hits})
			console.log(res)
	}

	async fetching(params) {
		let res = await fetch('http://localhost:9200/_search', 
			{
				q: `content:${params.q}`,
				sort:
				[{
					'date_str':{"order":"asc"}
				}]
			})

		res = await res.json()
		res = this.funcA(res)
	}

	constructor(props) {
		super(props)
		const params = props.url.query
		console.log(params)
		this.state = {data: []}
		this.getDocs = this.getDocs.bind(this)
		this.funcA = this.funcA.bind(this)
		this.fetching = this.fetching.bind(this)
		// fetch('http://localhost:9200/_search', {q: `content:${params.q}`})
		this.fetching(params)
	}

	getDocs() {
		return this.state.data.map(
			x => <div><p>{x._source.url}</p><p>{JSON.stringify(x._source.date)}</p></div>
		)
	}

  render() {
    return (
    	<div>
	    	{this.getDocs()}
	    </div>
    )
  }
}

export default news
