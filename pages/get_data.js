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
					maxPage:Math.ceil(res.hits.total/20.0)
				}
			)
			console.log(res)
	}

	async fetching(params, size, writeState) {
		let body = {
				  				"from" : params.page,
				  				"size" : size,
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
			const words = params.filter_t.split(".")
			const len = words.length
			for (let i=0;i<len;i++){
				filter_body.push({"term":{"teams":words[i]}})
			}
		}
		if(params.filter_p != ""){
			const words = params.filter_p.split(".")
			const len = words.length
			for (let i=0;i<len;i++){
				filter_body.push({"term":{"players":words[i]}})
			}	
		}
		if(filter_body != []){
			body['query']['bool']['filter'] = {"bool":{"should":filter_body}}
		}
		if(params.sort == "date"){
			body['sort'] = [{"date":"desc"}]
		}
		// console.log(body)
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
		// console.log(res)
		res = await res.json()
		if(writeState){
			this.funcA(res)
		}
		return res
	}

	async getTeamPlayer(params, total) {
		let res = await this.fetching(this.params, total, false)
		// console.log('fuck')
		// console.log(res)
		res = res.hits.hits
		const len = res.length
		for(let i=0;i<len;i++){
			const teams = res[i]._source.teams
			const tLen = teams.length
			for(let j=0;j<tLen;j++){
				if (!this.teams.includes(teams[j])){
					this.teams.push(teams[j])
				}
			}
			const players = res[i]._source.players
			const pLen = players.length
			for(let j=0;j<tLen;j++){
				if (!this.players.includes(players[j])){
					this.players.push(players[j])
				}
			}	

		}
		
	}

	funcB() {
		this.setState({players:this.players,teams:this.teams})
	}
	async getRes() {
		let res = await this.fetching(this.params, 20, true)
		// console.log('hihihi')
		// console.log(res.hits.total)
		await this.getTeamPlayer(this.params, res.hits.total)
		this.funcB(res)
		// console.log(this.players)
		// console.log(this.teams)
	}

	constructor(props) {
		super(props)
		this.params = props.url.query
		// console.log(this.params)
		this.state = {data: []}
		this.teams = []
		this.players = []
		this.getDocs = this.getDocs.bind(this)
		this.funcA = this.funcA.bind(this)
		this.fetching = this.fetching.bind(this)
		this.getTeamPlayer = this.getTeamPlayer.bind(this)
		let d = new Date()
    const start = d.getTime()
    this.getRes()
		d = new Date()
    const stop = d.getTime()
    this.time = stop-start
    this.page = this.params.page
	}

	getDocs(type) {
		const details = <div><p>{this.state.total},{this.state.time},{this.state.page},{this.state.maxPage},{this.state.players},{this.state.teams}</p></div>
		if(type=="video"){ 
			return [details, 
			this.state.data.map(
				x => x._source.videos.map(
					y => <div>
								<p>{y}</p>
								<p>{x._source.img}</p>
								<p>{x._source.title}</p>	
								<p>{x._source.url}</p>
						</div>
				)
			)]
		}
		if(type=="image"){
			return [details, 
			this.state.data.map(
				x => x._source.imgs.map(
					y => <div>
									<p>{y}</p>
									<p>{x._source.title}</p>	
									<p>{x._source.url}</p>
							</div>
				)
			)]
		}
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

  render() {
    return (
    	<div>
	    	{this.getDocs(this.params.type)}
	    </div>
    )
  }
}

export default news
