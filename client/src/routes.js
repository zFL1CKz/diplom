import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { RegisterPage } from './pages/AuthPage/RegisterPage'
import { RegResult } from './pages/AuthPage/RegResult'
import { MainPage } from './pages/MainPage/MainPage'
import { NewTrip } from './pages/NewTrip/NewTrip'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { PaymentsPage } from './pages/PaymentsPage/PaymentsPage'

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
        <Route path='/payments' exact>
          <PaymentsPage />
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
      <Redirect to='/login' />
    </Switch>
  )
}
