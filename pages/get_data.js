import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

class news extends Component {
	funcA(res) {
			this.setState(
				{
					data:res.hits.hits, 
					total:res.hits.total, 
					time:this.time, 
					page:this.page, 
					maxPage:Math.ceil(res.hits.total/15.0)
				}
			)
			console.log(res)
	}

	async fetching(params) {
		let body = {
				  				"from" : params.page,
				  				"size" : 15,
								  "query" :
								  {
								     "bool" :
								     {
								        "must" : 
								        {
								          "bool" : 
								          {
								            "should" : 
								            [
								              {"match" : {"title":params.q}},
								              {"match" : {"content":params.q}}
								            ]
								          }
								        }
								      }
								  }
								}
		let filter_body = []
		if (params.filter_t != ""){
			const words = params.filter_t.split("+")
			const len = words.length
			for (let i=0;i<len;i++){
				filter_body.append({"term":{"teams":words[i]}})
			}
		}
		if(params.filter_p != ""){
			const words = params.filter_p.split("+")
			const len = words.length
			for (let i=0;i<len;i++){
				filter_body.append({"term":{"players":words[i]}})
			}	
		}
		if(filter_body != []){
			body['query']['bool']['filter'] = {"bool":{"should":filter_body}}
		}
		if(params.sort == "date"){
			body['sort'] = [{"date":"desc"}]
		}
		console.log(body)
		let res = await fetch('http://localhost:9200/_search', 
			{
				method: "POST",
				mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow",
        referrer: "no-referrer",
				body:JSON.stringify(body)
			})
		console.log(res)
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
    this.page = this.params.page
	}

	getDocs(type) {
		const details = <div><p>{this.state.total},{this.state.time},{this.state.page},{this.state.maxPage}</p></div>
		if(type=="news"){ 
			return [details, 
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
		return [details, 
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
