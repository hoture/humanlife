import { combineReducers } from 'redux'
import {
  CHANGE_NAME,
  CARROT, BECOME_USAGI, UPDATE_STATUS,
  UPDATING_ON, UPDATING_OFF,
  NEW_GAME, FINISH_GAME, CLOSE_MODAL
} from './actions'

const initialState = {
  status: {
    age: 0,
    money: 0,
    isUsagi: false,
    name: '',
    message: '生まれました',
  },
  appState: {
    isUpdating: false,
    isFinished: false,
    isShowModal: false,
  },
}

const statusReducer = (state = initialState.status, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      }

    case CARROT:
      return {
        ...state,
        age: state.age + action.ageDiff,
        message: action.message,
      }
    case UPDATE_STATUS:
      return {
        ...state,
        age: state.age + action.ageDiff,
        money: state.money + action.moneyDiff,
        message: action.message,
      }
    case BECOME_USAGI:
      return {
        ...state,
        isUsagi: true,
        message: action.message,
        imgUrl: action.imgUrl,
      }

    case NEW_GAME:
      return {
        ...initialState.status,
        name: state.name,
      }
    default:
      return {
        ...state,
      }
  }
}
const appStateReducer = (state = initialState.appState, action) => {
  switch (action.type) {
    case UPDATING_ON:
      return {
        ...state,
        isUpdating: true,
      }
    case UPDATING_OFF:
      return {
        ...state,
        isUpdating: false,
      }
    case FINISH_GAME:
      return {
        ...state,
        isFinished: true,
        isShowModal: true,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isShowModal: false,
      }
    case NEW_GAME:
      return initialState.appState
    default:
      return state
  }
}

const rootReducer = combineReducers({
  status:statusReducer,
  appState: appStateReducer,
})
export default rootReducer
