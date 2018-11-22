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
	let size = 20
	if(params.type === "videos"){
		size = 30
	}else if(params.type === "images"){
		size = 10
	}
	let res = await fetching(params, size, true)
	// console.log('hihihi')
	// console.log(res.hits.total)
	const teams_players = await getTeamPlayer(params, res.hits.total)
	// console.log(this.players)
	// console.log(this.teams)
	const stop = d.getTime()
	const max_page = Math.ceil(res.hits.total/size)
	const total = res.hits.total
	const time = stop - start
	res = res.hits.hits
	if(params.type==="video"){
		const videos_res = []
		const len_videos = res.length
		for(let i=0;i<len_videos;i++){
			const len_cur_videos = res[i]["_source"]["videos"].length
			for(let j=0;j<len_cur_videos;j++) {
				videos_res.push({
					video:res[i]["_source"]["videos"][j],
					img:res[i]["_source"]["img"],
					title:res[i]["_source"]["title"],
					url:res[i]["_source"]["url"]
				})
			}
		}
		return {res:videos_res,time:time,cur_page:params.page,max_page:max_page,total:total,filter_teams:teams_players[0],filter_players:teams_players[1]}
	} else if (params.type==="image"){
		const images_res = []
		const len_images = res.length
		for(let i=0;i<len_images;i++){
			const len_cur_images = res[i]["_source"]["imgs"].length
			for(let j=0;j<len_cur_images;j++){
				images_res.push({
					img:res[i]["_source"]["imgs"][j],
					title:res[i]["_source"]["title"],
					url:res[i]["_source"]["url"]
				})
			}
		}
		return {res:images_res,time:time,cur_page:params.page,max_page:max_page,total:total,filter_teams:teams_players[0],filter_players:teams_players[1]}
	}
	const news_res = []
	const len_news = res.length
	for(let i=0;i<len_news;i++){
		news_res.push({
			img:res[i]["_source"]["img"],
			title:res[i]["_source"]["title"],
			date_str:JSON.stringify(res[i]["_source"]["date_str"]),
			content:res[i]["_source"]["content"],
			url:res[i]["_source"]["url"]
		})
	}
	return {res:news_res,time:time,cur_page:params.page,max_page:max_page,total:total,filter_teams:teams_players[0],filter_players:teams_players[1]}
}

const main = async () => {
	const res = await fetching({"type":"news", "q":"messi", "filter_t":"", "filter_p":"", "sort":"date", "page":0}, 20)
	const data = await res.json()
	console.log(JSON.stringify(data))
}

export default getRes