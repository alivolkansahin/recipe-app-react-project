import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserPreferencesProvider } from './context/UserPreferencesContext.jsx'
import { APIContextProvider } from './context/APIContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { ProductListingContextProvider } from './context/ProductListingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserPreferencesProvider>
      <APIContextProvider>
        <AuthContextProvider>
          <ProductListingContextProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </ProductListingContextProvider>
        </AuthContextProvider>
      </APIContextProvider>
    </UserPreferencesProvider>
  </React.StrictMode>,
)
