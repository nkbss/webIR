import React, { Component } from 'react'
import { NewsCard } from '../Cards'
import { PaginationLayout } from '../../Pagination'
import getRes from '../../../pages/get_data';
import Router from 'next/router'

class NewsLayout extends Component {


    state = {
      resultsearch : null
    }
  
  componentDidMount = () => {
    this.getResultSearch()
  }

  handleUrl = (url) => {
    console.log(url)
  }

  getResultSearch = () => {
    getRes({"type":this.props.query.type, "q":this.props.query.q, "filter_t":this.props.query.filter_t, "filter_p":this.props.query.filter_p, "sort":this.props.query.sort, "page":this.props.query.page}).then(res => {
      this.setState({
        resultsearch:res.res
      })
    })
  }

  

  render() {
    console.log(this.state.resultsearch)
    return (
      <div>
        { this.state.resultsearch!= null ? this.state.resultsearch.map((data,index)=>{
          return(
            <NewsCard key={index} img={data._source.img} date={data._source.date_str} title={data._source.title} content={data._source.content.slice(0,270)+'...'} url={data._source.url}  handleUrl={this.handleUrl} />
          )
        }) : null}
        <PaginationLayout query={this.props.query} />
      </div>
    )
  }
}

export { NewsLayout }
