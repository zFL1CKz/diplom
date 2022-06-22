import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { RegisterPage } from './pages/AuthPage/RegisterPage'
import { RegResult } from './pages/AuthPage/RegResult'
import { MainPage } from './pages/MainPage/MainPage'
import { NewTrip } from './pages/NewTrip/NewTrip'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { Contract } from './pages/AboutPage/Contract'
import { UserAgreement } from './pages/AboutPage/UserAgreement'
import { Privacy } from './pages/AboutPage/Privacy'
import { RentContract } from './pages/AboutPage/RentContract'
import { RacePage } from './pages/RacePage/RacePage'
import { HistoryPage } from './pages/HistoryPage/HistoryPage'

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/main' exact>
          <MainPage />
        </Route>
        <Route path='/profile' exact>
          <ProfilePage />
        </Route>
        <Route path='/newtrip' exact>
          <NewTrip />
        </Route>
        <Route path='/history' exact>
          <HistoryPage />
        </Route>
        <Route path='/terms' exact>
          <AboutPage />
        </Route>
        <Route path='/terms/contract' exact>
          <Contract />
        </Route>
        <Route path='/terms/privacy' exact>
          <Privacy />
        </Route>
        <Route path='/terms/rent-contract' exact>
          <RentContract />
        </Route>
        <Route path='/terms/user-agreement' exact>
          <UserAgreement />
        </Route>
        <Route path='/race/:id'>
          <RacePage />
        </Route>
        <Route path='*'>
          <MainPage />
        </Route>
        <Redirect to='/main' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/register' exact>
        <RegisterPage />
      </Route>
      <Route path='/regresult' exact>
        <RegResult />
      </Route>
      <Route path='/login' exact>
        <AuthPage />
      </Route>
      <Route path='/terms' exact>
        <AboutPage />
      </Route>
      <Route path='/terms/contract' exact>
        <Contract />
      </Route>
      <Route path='/terms/privacy' exact>
        <Privacy />
      </Route>
      <Route path='/terms/rent-contract' exact>
        <RentContract />
      </Route>
      <Route path='/terms/user-agreement' exact>
        <UserAgreement />
      </Route>
      <Route path='/race/:id'>
        <RacePage />
      </Route>
      <Route path='*'>
        <AuthPage />
      </Route>
      <Redirect to='/login' />
    </Switch>
  )
}
