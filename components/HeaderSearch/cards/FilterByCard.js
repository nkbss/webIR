import React from 'react'
import { Modal, Grid } from '../../../node_modules/semantic-ui-react'

const FilterByCard = props => {
  return (
    <Modal
      size="small"
      open={props.filterby}
      onClose={props.closeFilterby}
      closeOnEscape={true}
    >
      <Modal.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <label>Players</label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <label>Teams</label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  )
}
export { FilterByCard }
