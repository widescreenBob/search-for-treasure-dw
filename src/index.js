import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Header from './components/Header/Header';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-bg-color: #fff;
    --main-font-color: #000;
    --main-border-color: #000;
    --magical-color: #8859b6;
    --mundane-color: #80503d;
    --button-back: #fff;
    --button-back-hov: #000;

    --font-size-1: 1rem;
    --font-size-2: 1.2rem;
    --font-size-3: 1.44rem;
    --font-size-4: 1.728rem;
    --font-size-5: 2.074rem;
    --font-size-6: 2.488rem;
  }

  @media screen and (min-width: 800px) {
    :root {
      /* scale for 1.33 */
      --font-size-1: 1rem;
      --font-size-2: 1.333rem;
      --font-size-3: 1.777rem;
      --font-size-4: 2.369rem;
      --font-size-5: 3.157rem;
      --font-size-6: 4.209rem;
    }
  }

  body {
    margin: 0;
    padding: 0 1rem;
    color: var(--main-font-color);
    font-family: 'Merriweather', serif;
    font-size: var(--font-size-1);
    background-color: var(--main-bg-color);
  }

  h1 {
    font-size: var(--font-size-6);
    font-family: Oswald, sans-serif;
    margin: 0;
  }

  h2 {
    font-size: var(--font-size-5);
    font-family: Oswald, sans-serif;
    margin: 0 0 1.5rem 0;
  }

  h3 {
    font-size: var(--font-size-4);
    font-family: Oswald, sans-serif;
    margin: 0;
  }

  h4 {
    font-size: var(--font-size-3);
    font-family: Oswald, sans-serif;
    margin: 0;
  }

  h5 {
    font-size: var(--font-size-2);
    margin: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
    text-align: left;
    padding: 0;
  }

  p {
    margin-top: 0;
  }

  .magical {
    color: var(--magical-color);
  }

  .mundane {
    color: var(--mundane-color);
  }

  footer {
    margin: 2rem auto 0;
    padding: 2rem;
    text-align: center;
    border-top: 2px solid;
    max-width: 50%;
    text-transform: uppercase;
    font-family: Oswald, sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <App />
    <footer>
      Some Kind Of Game Thing
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
