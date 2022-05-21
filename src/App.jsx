import React from 'react';
import {
  Nav,
  Section,
  DisplayVideo,
  Patrocinios,
  Features,
  UserFeedback,
  Footer
} from './pages';

import ImageDog from './assets/Image.png';
import ImageDog2 from './assets/Image2.png';

function App() {
  return (
    <>
      <Nav />
      <Section 
        BackgrundSection={'var(--ligth-purple)'}
        ImageUrl={ImageDog}
        TitleSection={'Pet Store & Beyond'}
        SubTitleSection={'This is a sample landing page, created with Figma and Anima. No coding involved.'}
        ButtonContent={'Get Started'}

        />
      <DisplayVideo />
      <Patrocinios />
      <Features />
      <UserFeedback />
      <Section
        BackgrundSection={'var(--off-white)'}
        ImageUrl={ImageDog2}
        TitleSection={'Let’s talk, woof! '}
        SubTitleSection={'You can ask us questions about your pet, and we will be happy to answer you!'}
        ButtonContent={'Contact us'}

        />
        <Footer/>
    </>
  )
}

export default App
