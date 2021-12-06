import React from 'react'
import SectionForm from './loginSections/SectionForm'
import SectionVideo from './loginSections/SectionVideo'
import './loginPage.css'

const LoginPage = () => {

  return (
    <div className="section">
      <div className="col-4">
        <SectionForm />
      </div>
      <div className="col-6">
        <SectionVideo />
      </div>
    </div>
  )
}

export default LoginPage
