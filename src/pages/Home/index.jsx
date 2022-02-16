import React from 'react';

import HomeView from './HomeView';
import BlogView from './BlogView';
import { About, Portfolio, Skills, Contact } from 'pages';
import 'styles/Home.scss';

function Home() {
  return <main className='home'>
    <HomeView/>
    <Portfolio/>
    <BlogView/>
    <About/>
    <Skills/>
    <Contact/>
  </main>
}

export default Home;