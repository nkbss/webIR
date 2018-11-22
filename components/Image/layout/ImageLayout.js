import React, { Component } from 'react'
import { ImageCard } from '../cards'
import { PaginationLayout } from '../../Pagination'
import getRes from '../../../pages/get_data';
import { Grid,Card } from 'semantic-ui-react';
class ImageLayout extends Component {

  componentDidMount = () => {
    this.getResultSearch()
  }

  state= {
    resultsearch:null
  } 

  getResultSearch = () => {

    getRes({"type":this.props.query.type, "q":this.props.query.q, "filter_t":this.props.query.filter_t, "filter_p":this.props.query.filter_p, "sort":this.props.query.sort, "page":this.props.query.page}).then(res => {
      console.log(res)
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
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <Card.Group itemsPerRow={4}>
            {this.state.resultsearch != null ? 
            this.state.resultsearch.map((data,index)=>{
             return(
               <div>
                  <ImageCard key={index} image={data._source.img} title={data._source.title} url={data._source.url.slice(0,70)} />
                </div>
             )
            })
          :null}
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>



        
        
        <PaginationLayout />
      </div>
    )
  }
}

export { ImageLayout }
