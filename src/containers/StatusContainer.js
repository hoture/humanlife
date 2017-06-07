import { connect } from 'react-redux'
import Status from '../components/Status'
import { changeName } from '../actions'
import { getCategory } from '../constants'

const mapStateToProps = state => {
  const { name, age, money, message } = state.status
  const { isUpdating } = state.appState

  const category = getCategory(state.status)
  let imgUrl = `/imgs/${category}.png`
  if (isUpdating) {
    imgUrl = '/imgs/hatena.png'
  }

  const ageText = `年齢：${age}歳`
  let moneyText
  let moneyStyle
  if (money < 0) {
    moneyText = `借金：${-money}億円`
    moneyStyle = { color: '#ac383b'}
  } else if (money === 0) {
    moneyText = `貯金：0億円`
    moneyStyle = { color: '#000000'}
  } else {
    moneyText = `貯金：${money}億円`
    moneyStyle = { color: '#3871ac'}
  }

  return {
    name,
    ageText,
    moneyText,
    moneyStyle,
    message,
    imgUrl,
    isUpdating,
  }
}
const mapDispatchToProps = dispatch => {
  const handleNameChange = (input => {
    dispatch(changeName(input))
  })

  return {
    handleNameChange,
  }
}
const StatusContainer = connect(mapStateToProps, mapDispatchToProps)(Status)
export default StatusContainer
