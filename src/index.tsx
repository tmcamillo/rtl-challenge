import App from 'components/containers/App';
import { NewsContentProvider } from 'context/NewsContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from 'styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NewsContentProvider>
        <GlobalStyle />
        <App />
      </NewsContentProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
