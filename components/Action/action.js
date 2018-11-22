

export const fetching = (params, size, writeState) => {
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
    let res = await fetch('http://orion.mikelab.net:55557/_search', 
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
    
    // console.log(res)
    if(writeState){
        this.funcA(res)
    }
    return res
}

export const getTeamPlayer = (params, total) => {
    // console.log(total)
    let res = await this.fetching(this.params, total, false);
    // console.log('fuck')
    // console.log(res.hits.total)
    res = await this.fetching(this.params, res.hits.total, false);
    res = res.hits.hits;
    const len = res.length;
    for (let i = 0; i < len; i++) {
        const teams = res[i]._source.teams;
        const tLen = teams.length;
        for (let j = 0; j < tLen; j++) {
            if (!this.teams.includes(teams[j])) {
                this.teams.push(teams[j]);
            }
        }
        const players = res[i]._source.players;
        const pLen = players.length;
        for (let j = 0; j < tLen; j++) {
            if (!this.players.includes(players[j])) {
                this.players.push(players[j]);
            }
        }
    }
}
