import React, { PropTypes } from 'react'
import { Row, Col, FormControl, ControlLabel, Image } from 'react-bootstrap'
import './css/Status.css'

const Status = ({
  name, ageText, moneyText, moneyStyle, message, imgUrl, isUpdating,
  handleNameChange,
}) => {
  return (
    <div className="status-div">
      <Row>
        <Col xs={7} className="status-info">
          <ControlLabel>あなたの名前</ControlLabel>
          <FormControl
            type="text"
            value={name}
            placeholder='Enter your name'
            onChange={(e) =>  handleNameChange(e.target.value)}
          />
          <h2>{ageText}</h2>
          <h2 style={moneyStyle}>{moneyText}</h2>
        </Col>
        <Col xs={5} className="status-image-wrapper">
          <Image src={imgUrl} width="100%" alt='you' className="status-img" thumbnail/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="status-message">
          <h4>{message}</h4>
        </Col>
      </Row>
    </div>

  )
}
Status.PropTypes = {
  age : PropTypes.number.isRequired,
  money : PropTypes.number.isRequired,
  message : PropTypes.string.isRequired,
  imgUrl : PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
}
export default Status