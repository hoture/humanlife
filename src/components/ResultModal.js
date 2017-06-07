import React, { PropTypes } from 'react'
import { Modal, Button, Image } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './css/ResultModal.css'

const ResultModal = ({ isShowModal, message, imgUrl, tweetLink, handleClose }) => {
  return (
    <Modal show={isShowModal} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Result</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <p>{message}</p>
        <Image src={imgUrl} width="30%" alt='you' className="result-img" thumbnail/>
        <Button href={tweetLink} target="_blank" className="tweet-button">
          <FontAwesome name="twitter" className="fa-twitter" />
          {' '}結果をtweetすることを通じて社会に貢献する
        </Button>
      </Modal.Body>
    </Modal>
  )
}
ResultModal.PropTypes = {
  isShowModal : PropTypes.bool.isRequired,
  message : PropTypes.string.isRequired,
  tweetLink : PropTypes.string.isRequired,
}
export default ResultModal
