import React from 'react'
import { Pagination } from '../../node_modules/semantic-ui-react'

const PaginationCard = (props) => {
  return (
    <div className="pagination-section">
      <Pagination defaultActivePage={props.firstPage} totalPages={props.maxpage} onPageChange={props.handlePageChange} />
    </div>
  )
}
export { PaginationCard }
