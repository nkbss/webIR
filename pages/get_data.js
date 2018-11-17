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
			this.setState({data: res.hits.hits , total:res.hits.total , time:this.time})
			console.log(res)
	}

	async fetching(params) {
		let query = {
						"must" : [
						{
							"bool" : {
								"should" : [
									{"match" : {"title":params.q}},
									{"match" : {"content":params.q}}
								]
							}
						}
						]
					}
		if (params.filter_t != ""){
			const words = params.filter_t.split("+")
			const len = words.length
			for (let i=0;i<len;i++){
				query["must"].push({"match" : {"teams":words[i]}})
			}
		}
		if(params.filter_p != ""){
			const words = params.filter_p.split("+")
			const len = words.length
			for (let i=0;i<len;i++){
				query["must"].push({"match" : {"players":words[i]}})
			}	
		}
		if(params.sort == "date"){
			query['sort'] = [{'date_str' : {"order":"desc"}}]
		}
		let res = await fetch('http://localhost:9200/_search', 
			{"from" : params.from, "size" : 15,"query":{"bool" : query}})

		res = await res.json()
		res = this.funcA(res)
	}

	constructor(props) {
		super(props)
		this.params = props.url.query
		console.log(this.params)
		this.state = {data: []}
		this.getDocs = this.getDocs.bind(this)
		this.funcA = this.funcA.bind(this)
		this.fetching = this.fetching.bind(this)
		let d = new Date()
    const start = d.getTime()
		this.fetching(this.params)
		d = new Date()
    const stop = d.getTime()
    this.time = stop-start
	}

	getDocs(type) {
		if(type=="news"){
			return [<div><p>{this.state.total},{this.state.time}</p></div>, 
			this.state.data.map(
				x => <div>
								<p>{x._source.img}</p>
								<p>{x._source.title}</p>
								<p>{JSON.stringify(x._source.date_str)}</p>
								<p>{x._source.content}</p>
								<p>{x._source.url}</p>
					 	</div>
			)]
		}
		return [<div><p>{this.state.total},{this.state.time}</p></div>, 
		this.state.data.map(
			x => <div>
							<p>{x._source.img}</p>
							<p>{x._source.title}</p>	
							<p>{x._source.url}</p>
					</div>
		)]

	}

  render() {
    return (
    	<div>
	    	{this.getDocs(this.params.type)}
	    </div>
    )
  }
}

export default news
