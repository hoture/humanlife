import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import { finishGame, newGame } from '../actions'
import './css/FinishButtons.css'

let FinishButtons = ({ dispatch }) => {
  return (
    <Row>
      <Col xs={12} className="finishbuttons-col">
        <Button
          onClick={() => {dispatch(newGame())}}
          className="button newgame-button"
          bsStyle="danger"
        >赤ちゃんからやり直す</Button>
        <Button
          onClick={() => {dispatch(finishGame())}}
          className="button finish-button"
          bsStyle="success"
        >人生を引退する</Button>
      </Col>
    </Row>
  )
}
FinishButtons = connect()(FinishButtons)
export default FinishButtons
