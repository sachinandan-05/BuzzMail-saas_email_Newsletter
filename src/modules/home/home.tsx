'use client'
import React from 'react'
import Header from '@/shared/widgets/header/header'
import Banner from './elements/banner'
import Branding from './elements/branding'
import Benifits from "./elements/benifits"
import FeatureHighlight from './elements/feature.highlight'
import Pricing from './elements/pricing'
import Footer from './elements/footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Branding/>
      <Benifits/>
      <FeatureHighlight/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Home
