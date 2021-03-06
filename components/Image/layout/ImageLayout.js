import React, { Component } from 'react'
import { ImageCard } from '../cards'

import getRes from '../../../pages/get_data';
import { Grid,Card } from 'semantic-ui-react';
import { PaginationLayout } from '../../Pagination';
import { HeaderSearchLayout } from '../../HeaderSearch/layout';
class ImageLayout extends Component {

  componentDidMount = () => {
    this.getResultSearch()
  }

  state= {
    resultsearch : null,
      maxpage:null,
      filter_t:null,
      filter_p:null
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
    return (
      <div>
        <HeaderSearchLayout handlePage={this.props.handlePage} query={this.props.query} filter_t={this.state.filter_t} filter_p={this.state.filter_p}  />
      <Grid>
      <Grid.Row columns={3}>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <Card.Group itemsPerRow={4}>
            {this.state.resultsearch != null ? 
            this.state.resultsearch.map((data,index)=>{
             return(
              
                  <ImageCard key={index} image={data.img} title={data.title.slice(0,40)} url={data.url.slice(0,70)} handleUrl={this.handleUrl} />
                
             )
            })
          :null}
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>


  <PaginationLayout query={this.props.query} maxpage={this.state.maxpage+1} />
        
        
        
      </div>
    )
  }
}

export { ImageLayout }
