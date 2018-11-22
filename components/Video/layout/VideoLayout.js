import React, { Component } from 'react'
import { VideoCard } from '../cards'
import { PaginationLayout } from '../../Pagination'
import { Grid,Card } from 'semantic-ui-react';
import getRes from '../../../pages/get_data'

class VideoLayout extends Component {

  componentDidMount = () => {
    this.getResultSearch()
  }

  state = {
    resultsearch: null
  } 

  getResultSearch = () => {

    getRes({"type":this.props.query.type, "q":this.props.query.q, "filter_t":this.props.query.filter_t, "filter_p":this.props.query.filter_p, "sort":this.props.query.sort, "page":this.props.query.page}).then(res => {
      console.log(res)
      console.log(res.res)
      this.setState({
        resultsearch:res.res
      })
    })
  }

  render() {
    
    return (
      <div>
        <Grid>
        
      <Grid.Row columns={3}>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Card.Group itemsPerRow={4}>
          {this.state.resultsearch != null ? 
          this.state.resultsearch.map((data,index)=>{
              return(
                <div>
                  <VideoCard key={index} video={data.video} title={data.title.slice(0,20)} cuturl={data.url.slice(0,20)+'...'} url={data.url} />
                </div>
              )
          })
          :null}
            </Card.Group>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
        
    <PaginationLayout query={this.props.query} maxpage={this.state.maxpage+1} />
      </div>
    )
  }
}

export { VideoLayout }
