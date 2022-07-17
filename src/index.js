import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
