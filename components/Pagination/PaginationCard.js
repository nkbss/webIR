import React from 'react'
import { Pagination } from '../../node_modules/semantic-ui-react'

const PaginationCard = () => {
  return (
    <div className="pagination-section">
      <Pagination defaultActivePage={1} totalPages={10} />
    </div>
  )
}
export { PaginationCard }
