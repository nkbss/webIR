import React from 'react'
import { Card, Image } from '../../../node_modules/semantic-ui-react'

const VideoCard = (props) => {
  return (
          <a href={props.url}>
            <Card raised id="video-card" onClick={() => props.handleUrl(props.url)}>
             <Image src={props.image} size="large" centered id="video-image"/>
              <Card.Content extra textAlign="center">
                <Card.Header>{props.title}</Card.Header>
                <Card.Description>
                  {props.cuturl}
                </Card.Description>
              </Card.Content>
            </Card>
          </a>
            
  )
}

export { VideoCard }
