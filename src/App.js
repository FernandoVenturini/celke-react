import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login} from './pages/Login';


function App() {

  return (
    <div>		
		<h1>CRIANDO O FRONTEND DO SISTEMA DE LOGIN COM REACT 19!</h1>
		<Router>
			<Routes>
				<Route path='/' element={Login}/>
			</Routes>
		</Router>
    </div>
  );

}

export default App;