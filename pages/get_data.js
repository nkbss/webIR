import fetch from 'isomorphic-fetch'

const fetching = async (params, size, writeState) => {
	let body = await {
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
	if (params.filter_t != "" && writeState){
		const words = params.filter_t.split(".")
		const len = words.length
		for (let i=0;i<len;i++){
			filter_body.push({"term":{"teams":words[i]}})
		}
	}
	if(params.filter_p != "" && writeState){
		const words = params.filter_p.split(".")
		const len = words.length
		for (let i=0;i<len;i++){
			filter_body.push({"term":{"players":words[i]}})
		}	
	}
	// console.log(filter_body)
	if(filter_body != [] && writeState){
		// console.log('hihihihihihihi')
		body['query']['bool']['filter'] = {"bool":{"should":filter_body}}
	}
	if(params.sort == "date"){
		body['sort'] = [{"date":"desc"}]
	}
	// console.log(body)
	let res = await fetch('http://orion.mikelab.net:55557/_search',//('http://localhost:9200/_search', 
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
	return res
}

const getTeamPlayer = async(params, total) => {
	const teams = []
	const players = []
	// console.log(total)
	let res = await fetching(params, total, false)
	// console.log(res.hits.total)
	res = await fetching(params, res.hits.total, false)
	res = res.hits.hits
	const len = res.length
	for(let i=0;i<len;i++){
		const cur_teams = res[i]._source.teams
		const tLen = cur_teams.length
		for(let j=0;j<tLen;j++){
			if (!teams.includes(cur_teams[j])){
				teams.push(cur_teams[j])
			}
		}
		const cur_players = res[i]._source.players
		const pLen = cur_players.length
		for(let j=0;j<tLen;j++){
			if (!players.includes(cur_players[j])){
				players.push(cur_players[j])
			}
		}	

	}
	return [teams, players]
}

const getRes = async(params) => {
	let d = new Date()
	const start = d.getTime()
	const res = await fetching(params, 20, true)
	// console.log('hihihi')
	// console.log(res.hits.total)
	const teams_players = await getTeamPlayer(params, res.hits.total)
	// console.log(this.players)
	// console.log(this.teams)
	const stop = d.getTime()
	const max_page = Math.ceil(res.hits.total/20)
	if(params.type==="videos"){
		return {res:res.hits.hits,time:stop-start,cur_page:params.page,max_page:max_page,total:res.hits.total,filter_teams:teams_players[0],filter_players:teams_players[1]}
	} else if (params.type==="image"){
		return {res:res.hits.hits,time:stop-start,cur_page:params.page,max_page:max_page,total:res.hits.total,filter_teams:teams_players[0],filter_players:teams_players[1]}
	}
	return {res:res.hits.hits,time:stop-start,cur_page:params.page,max_page:max_page,total:res.hits.total,filter_teams:teams_players[0],filter_players:teams_players[1]}
}

const main = async () => {
	const res = await fetching({"type":"news", "q":"messi", "filter_t":"", "filter_p":"", "sort":"date", "page":0}, 20)
	const data = await res.json()
	console.log(JSON.stringify(data))
}

export default getRes