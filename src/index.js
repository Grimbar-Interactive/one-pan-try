//Import React
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//Import Stylesheets
import './index.css';
import '../src/styles/typical.css';
import '../src/styles/typical-mobile.css';

//Import Routes
import { Home, Cookbook, Pantry, Calendar, ShoppingList } from 'routes';
import { App } from 'components';

//Import Others
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="cookbook" element={<Cookbook />} />
          <Route path="pantry" element={<Pantry />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="shopping-list" element={<ShoppingList />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();