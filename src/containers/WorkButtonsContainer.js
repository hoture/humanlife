import { connect } from 'react-redux'
import WorkButtons from '../components/WorkButtons'
import { gameConstants, getRand } from '../constants'
import {
  carrot, play, work,
  getLotteryThunk, becomeUsagiThunk
} from '../actions'

const {
  usagiProb, lotteryProb,
  workGainMin, workGainMax, playLoseMin, playLoseMax, lotteryGain,
} = gameConstants

const mapStateToProps = state => {
  const { isUsagi } = state.status
  const { isFinished, isUpdating } = state.appState

  const isDisabled = isFinished || isUpdating

  return {
    isUsagi,
    isDisabled,
  }
}
const mapDispatchToProps = dispatch => {
  const handleWork = () => {
    if (Math.random()*100 < usagiProb) {
      dispatch(becomeUsagiThunk())
    } else {
      const gain = getRand(workGainMin, workGainMax)
      dispatch(work(gain))
    }
  }
  const handlePlay = () => {

    if (Math.random()*100 < usagiProb) {
      console.log('from handle')
      dispatch(becomeUsagiThunk())
    } else if (Math.random()*100 < lotteryProb) {
      dispatch(getLotteryThunk(lotteryGain))
    } else {
      const lose = getRand(playLoseMax, playLoseMin)
      dispatch(play(lose))
    }
  }
  const handleCarrot = () => {
    dispatch(carrot())
  }

  return {
    handleWork,
    handlePlay,
    handleCarrot,
  }
}
const WorkButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(WorkButtons)
export default WorkButtonsContainer
