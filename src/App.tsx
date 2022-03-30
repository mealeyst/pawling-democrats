import React from 'react';
import { Navigation } from './components/Navigation';
import { Page } from './components/Page/Page';
import { BlueTheme } from './theme/Theme';

const App: React.FC = (props) =>
  <BlueTheme>
    <Page>
      <Navigation/>
    </Page>
  </BlueTheme>;

export default App;
