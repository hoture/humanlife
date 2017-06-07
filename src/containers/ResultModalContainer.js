import { connect } from 'react-redux'
import ResultModal from '../components/ResultModal'
import { tweetConstants, mapCategoryToTwitterImgUrl, getCategory } from '../constants'
import { closeModal } from '../actions'

const finalMessage = status => {
  let { name } = status
  const { isUsagi, age, money } = status

  if (name === '') name = 'あなた'

  if (isUsagi) return name + 'はうさぎとして引退しました'

  if (money < 0) {
    return `${name}は${age}歳で借金${-money}億円とともに人生を引退しました`
  } else {
    return `${name}は${age}歳で貯金${money}億円とともに人生を引退しました`
  }
}

const getTweetLink = (status, message) => {
  const category = getCategory(status)
  const imgUrl = mapCategoryToTwitterImgUrl[category]
  const text = `${message} ${imgUrl}`
  const { tweetBaseUrl, tweetUrl, hashTag, myTwitterId } = tweetConstants


  return `${tweetBaseUrl}?text=${text}&url=${tweetUrl}&hashtags=${hashTag}&via=${myTwitterId}`
}

const mapStateToProps = state => {
  const { isShowModal } = state.appState
  const { status } = state

  const message = finalMessage(status)
  const tweetLink = getTweetLink(status, message)

  const category = getCategory(state.status)
  const imgUrl = `imgs/${category}.png`

  return {
    isShowModal,
    message,
    imgUrl,
    tweetLink,
  }
}
const mapDispatchToProps = dispatch => {
  const handleClose = () => {
    dispatch(closeModal())
  }

  return {
    handleClose,
  }
}

const ResultModalContainer = connect(mapStateToProps, mapDispatchToProps)(ResultModal)
export default ResultModalContainer
