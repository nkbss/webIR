import React, { Component } from 'react'
import { NewsCard } from '../Cards'
import { PaginationLayout } from '../../Pagination'

class NewsLayout extends Component {


  
  componentDidMount = () => {
   
    this.getResultSearch()
      
  }


  getResultSearch = () => {
    console.log(this.props.query.q)
    fetch(
      'http://orion.mikelab.net:55557/_search'+'?q='+this.props.query.q
                                                                                                                   
        // '?q=' +
        // this.state.q 
        // +
        // '?type=' +
        // this.state.type +
        // '?filter_t=' +
        // this.state.filter_t +
        // '?filter_p=' +
        // this.state.filter +
        // '?sort=' +
        // this.state.sort +
        // '?page=' +
        // this.state.page
    ).then((res) => res.json()).then((res) => console.log(res.hits.hits))
    
  }

  render() {
  
    return (
      <div>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <PaginationLayout />
      </div>
    )
  }
}

export { NewsLayout }
