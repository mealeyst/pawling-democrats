import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Page } from './components/Entries/Page/Page';
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
      </>
    </BlueTheme>
  );
}

export default App;
