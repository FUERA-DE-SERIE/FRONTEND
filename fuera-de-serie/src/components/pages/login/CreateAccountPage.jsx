import React from 'react'
import SectionFormRegister from './loginSections/SectionFormRegister'
import SectionVideo from './loginSections/SectionVideo'
import './loginPage.css'

const CreateAccountPage = () => {

  return (
    <div className="section-up">
      <div className="col-4">
        <SectionFormRegister />
      </div>
      <div className="col-6">
        <SectionVideo />
      </div>
    </div>
  )
}

export default CreateAccountPage
