import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/index.css'
import { setupListeners } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'
import { api } from './state/api.ts'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
})
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
