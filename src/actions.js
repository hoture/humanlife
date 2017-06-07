import {
  gameConstants,
} from './constants'

export const CHANGE_NAME = 'CHANGE_NAME'
export const CARROT = 'CARROT'
export const BECOME_USAGI = 'BECOME_USAGI'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const UPDATING_ON = 'UPDATING_ON'
export const UPDATING_OFF = 'UPDATING_OFF'
export const NEW_GAME = 'NEW_GAME'
export const FINISH_GAME = 'FINISH_GAME'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const changeName = input => {
  return {
    type: CHANGE_NAME,
    name: input,
  }
}

const {
  yearsUnit, timeout,
  workMessage, playMessage, usagiMessage, carrotMessage, lotteryMessage,
} = gameConstants

export const carrot = () => {
  return {
    type: CARROT,
    ageDiff: yearsUnit,
    message: carrotMessage(),
  }
}
export const becomeUsagi = () => {
  return {
    type: BECOME_USAGI,
    ageDiff: yearsUnit,
    message: usagiMessage(),
  }
}
export const work = gain => {
  return {
    type: UPDATE_STATUS,
    ageDiff: yearsUnit,
    moneyDiff: gain,
    message: workMessage(yearsUnit, gain),
  }
}
export const play = lose => {
  return {
    type: UPDATE_STATUS,
    ageDiff: yearsUnit,
    moneyDiff: lose,
    message: playMessage(yearsUnit, lose),
  }
}
export const getLottery = gain => {
  return {
    type: UPDATE_STATUS,
    ageDiff: yearsUnit,
    moneyDiff: gain,
    message: lotteryMessage(gain),
  }
}

export const updatingOn = () => {
  return {
    type: UPDATING_ON,
  }
}
export const updatingOff = () => {
  return {
    type: UPDATING_OFF,
  }
}

export const becomeUsagiThunk = () => dispatch => {
  console.log('from thunk', timeout)
  dispatch(updatingOn())
  setTimeout(() => {
    dispatch(becomeUsagi())
  }, timeout)
  dispatch(updatingOn())
  setTimeout(() => {
    dispatch(updatingOff())
  }, timeout)
}
export const getLotteryThunk = gain => dispatch => {
  dispatch(updatingOn())
  setTimeout(dispatch, timeout, getLottery(gain))
  setTimeout(dispatch, timeout, updatingOff())
}

export const newGame = () => {
  return {
    type : NEW_GAME,
  }
}
export const finishGame = () => {
  return {
    type : FINISH_GAME,
  }
}
export const closeModal = () => {
  return {
    type : CLOSE_MODAL,
  }
}
