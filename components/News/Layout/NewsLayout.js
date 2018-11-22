import React, { Component } from 'react'
import { NewsCard } from '../Cards'

import getRes from '../../../pages/get_data';
import { PaginationLayout } from '../../Pagination';
import { HeaderSearchLayout } from '../../HeaderSearch/layout';


class NewsLayout extends Component {


    state = {
      resultsearch : null,
      maxpage:null,
      filter_t:null,
      filter_p:null
    }
  
  componentDidMount = () => {
    this.getResultSearch()
  }

  handleUrl = (url) => {
    console.log(url)
  }

  getResultSearch = () => {
    getRes({"type":this.props.query.type, "q":this.props.query.q, "filter_t":this.props.query.filter_t, "filter_p":this.props.query.filter_p, "sort":this.props.query.sort, "page":this.props.query.page}).then(res => {
      console.log(res)
      this.setState({
        resultsearch:res.res,
        maxpage:res.max_page,
        filter_t:res.filter_teams,
        filter_p:res.filter_players
      })
    })
  }

  

  render() {
    console.log(this.state.resultsearch)
    return (
      <div>
        <HeaderSearchLayout handlePage={this.props.handlePage} query={this.props.query} filter_t={this.state.filter_t} filter_p={this.state.filter_p}  />
        { this.state.resultsearch!= null ? this.state.resultsearch.map((data,index)=>{
          return(
            <NewsCard key={index} img={data.img} date={data.date_str} title={data.title} content={data.content.slice(0,270)+'...'} url={data.url}  handleUrl={this.handleUrl} />
          )
        }) : null}
       <PaginationLayout query={this.props.query} maxpage={this.state.maxpage+1} />
      </div>
    )
  }
}

export { NewsLayout }
