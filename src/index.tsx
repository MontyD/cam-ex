import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { MainLayout } from './layout/main';

ReactDOM.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
