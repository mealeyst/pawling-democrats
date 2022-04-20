import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Page } from './components/Entries/Page/Page';
import { BlueTheme } from './theme/Theme';

const App: React.FC = (props) =>
  <BlueTheme>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/:slug" element={<Page />} />
    </Routes>
  </BlueTheme>;

export default App;
