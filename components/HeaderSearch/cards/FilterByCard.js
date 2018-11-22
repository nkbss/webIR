import React from 'react'
import { Modal, Grid, Dropdown, Button } from '../../../node_modules/semantic-ui-react'

const FilterByCard = props => {
  return (
    <Modal
      size="tiny"
      open={props.filterby}
    
    
    >
      <Modal.Content>
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <label className="filterby-title">Players</label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Dropdown placeholder="Select Players" selection options={props.filter_p} onChange={props.handleFilterbyp} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <label className="filterby-title">Teams</label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Dropdown placeholder="Select Teams" selection options={props.filter_t} onChange={props.handleFilterbyt} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4} >
              <Grid.Column width={1}/>
             
              <Grid.Column>
                <Button basic color="green" size="large" onClick={()=>props.filterBy()}>Search</Button>
              </Grid.Column>
              <Grid.Column>
                <Button basic color="red" size="large" onClick={props.closeFilterby}>Cancle</Button>
              </Grid.Column>
              <Grid.Column width={1}/>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  )
}
export { FilterByCard }
