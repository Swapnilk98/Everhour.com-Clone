import React from 'react'
import Test from './Corousel/Carousel'
import LargeWithAppLinksAndSocial from './Footer/Footer'
import Frontpage from './Frontpage/Frontpage'
import SplitScreen from './Img/img'
import WithSubnavigation from './Navbar/Navbar'
import Section from './Section/Section'

const Landing = () => {
  return (
    <div>
     
      <Frontpage />
      <Test />
      <Section />
      <SplitScreen />
      <LargeWithAppLinksAndSocial />
    </div>
  );
}

export default Landing