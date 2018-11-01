import React from 'react'
import { Grid, Input, Dropdown } from '../../../node_modules/semantic-ui-react'
import './style.css'
const type = [
  { key: '1', value: 'Football Club', text: 'Football Club' },
  { key: '2', value: 'Team', text: 'Team' },
  { key: '3', value: 'Player', text: 'Player' },
  { key: '4', value: 'Coach', text: 'Coach' }
]

const SearchCard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row columns="2">
          <Grid.Column textAlign="right">
            <Input className="search" icon="search" placeholder="Search" />
          </Grid.Column>
          <Grid.Column textAlign="left">
            <Dropdown
              className="searchType"
              placeholder="Search Type"
              search
              selection
              options={type}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
export { SearchCard }
