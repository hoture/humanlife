import React from 'react'
import { Grid } from 'react-bootstrap'
import Header from './Header'
import StatusContainer from '../containers/StatusContainer'
import WorkButtonsContainer from '../containers/WorkButtonsContainer'
import FinishButtons from './FinishButtons'
import ResultModalContainer from '../containers/ResultModalContainer'
import './css/App.css'

const App = () => {
  return (
    <Grid className="app-div">
      <Header />
      <div className="game-div">
        <StatusContainer />
        <WorkButtonsContainer />
      </div>
      <FinishButtons />
      <ResultModalContainer />
    </Grid>
  )
}
export default App
