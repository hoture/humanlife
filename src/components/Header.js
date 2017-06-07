import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './css/Header.css'

const Header = () => {
  return (
    <div>
      <Row>
        <Col xs={12} className="header-col">
          <h1>人はなぜ生きるのか</h1>
          <p>10年間労働するか豪遊するか選んで人生を送っていきましょう</p>
          <p>そろそろ潮時か...と思ったら下のボタンから引退できます</p>
          </Col>
      </Row>
    </div>
  )
}
export default Header
