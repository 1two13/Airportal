import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Code from './components/Code';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
	</Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

