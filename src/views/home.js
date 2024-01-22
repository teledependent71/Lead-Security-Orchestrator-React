import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Security Orchestrator</title>
        <meta property="og:title" content="Lead Security Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
