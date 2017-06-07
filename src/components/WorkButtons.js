import React, { PropTypes } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './css/WorkButtons.css'
import FontAwesome from 'react-fontawesome'

const WorkButtons = ({
  isUsagi, isDisabled,
  handleWork, handlePlay, handleCarrot,
}) => {
  return (
    <div>
      {
        isUsagi ?
          (
            <Row>
              <Col xs={12} className="workbuttons-col">
              <Button onClick={() => {handleCarrot()}} disabled={isDisabled} className="button carrot-button">
                <FontAwesome name="heart" className="fa-carrot" />
                {' '}人参
              </Button>
              </Col>
            </Row>
          )
        :
          (
            <Row>
              <Col xs={12} className="workbuttons-col">
                <Button onClick={() => {handleWork()}} className="button work-button" disabled={isDisabled}>
                  <FontAwesome name="wpforms" className="fa-work" />
                  {' '}労働
                </Button>
                <Button onClick={() => {handlePlay()}} disabled={isDisabled} className="button play-button">
                  <FontAwesome name="money" className="fa-play" />
                  {' '}豪遊
                </Button>
              </Col>
            </Row>
          )

      }

    </div>
  )
}
WorkButtons.PropTypes = {
  isUsagi      : PropTypes.bool.isRequired,
  isDisabled   : PropTypes.bool.isRequired,
  handleWork   : PropTypes.func.isRequired,
  handlePlay  : PropTypes.func.isRequired,
  handleCarrot : PropTypes.func.isRequired,
}
export default WorkButtons
