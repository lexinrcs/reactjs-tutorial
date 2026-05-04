import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './utils/design.css'
import App from './App.jsx'

import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './utils/authConfig';

import ModalProvider from './components/_modals/ModalContext.jsx';

const renderApp = () => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <MsalProvider instance={msalInstance}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </MsalProvider>
    </StrictMode>,
  )
}


msalInstance.initialize()
  .then(() => {
    msalInstance.handleRedirectPromise()
      .then((response) => {
        if (response && response.account) {
          msalInstance.setActiveAccount(response.account);
        }

        const accounts = msalInstance.getAllAccounts();

        if (accounts.length === 0) {
          msalInstance.loginRedirect();
        } else {
          msalInstance.setActiveAccount(accounts[0]);
        }
      })

    renderApp();

  }).catch((error) => {
    console.error('MSAL Redirect Error:', error);
  });
