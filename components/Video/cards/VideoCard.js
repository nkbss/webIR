import React from 'react'
import { Card } from '../../../node_modules/semantic-ui-react'

const VideoCard = (props) => {
  return (
            <Card raised>
              <iframe
                width="291"
                height="200"
                src={props.video}
              />
              <Card.Content extra textAlign="center">
                <Card.Header>{props.title}</Card.Header>
                <Card.Description>
                  {props.cuturl}
                </Card.Description>
              </Card.Content>
            </Card>
  )
}

export { VideoCard }
