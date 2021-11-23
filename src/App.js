import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';

function App() {
  return (
    <div className="App">
        <Route path="/notice" component={Notice} />
        <Route path="/noticeDetail" component={NoticeDetail} />
        <Route path="/" component={Login} exact/>
    </div>
  );
}

export default App;
