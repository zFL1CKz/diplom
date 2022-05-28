import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { RegisterPage } from './pages/AuthPage/RegisterPage'
import { RegResult } from './pages/AuthPage/RegResult'
import { MainPage } from './pages/MainPage/MainPage'
import { NewTrip } from './pages/NewTrip/NewTrip'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { PaymentsPage } from './pages/PaymentsPage/PaymentsPage'
import { TermsPage } from './pages/TermsPage/TermsPage'
import { Contract } from './pages/TermsPage/Contract'
import { UserAgreement } from './pages/TermsPage/UserAgreement'
import { Privacy } from './pages/TermsPage/Privacy'
import { RentContract } from './pages/TermsPage/RentContract'

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
      <Route path='/terms' exact>
        <TermsPage />
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
      <Redirect to='/login' />
    </Switch>
  )
}
