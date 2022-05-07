import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Page } from './components/Entries/Page/Page';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { BlueTheme } from './theme/Theme';

const App: React.FC = (props) => {
  return (
    <BlueTheme>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/:slug" element={<Page />} />
        </Routes>
        <Footer />
      </>
    </BlueTheme>
  );
}

export default App;
