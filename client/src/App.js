import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import UnauthenticatedApp from './UnauthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch('/auth', {
      credentials: 'include'
    })
    .then(res => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user)
          setAuthChecked(true)
        })
      } else {
        setAuthChecked(true)
      }
    })
  }, [])

  if(!authChecked) {return <div></div>}
  return (
    <Router>
      {currentUser ? (
        <AuthenticatedApp setCurrentUser={setCurrentUser} currentUser={currentUser} />
      ) : (
        <UnauthenticatedApp setCurrentUser={setCurrentUser} />
      )}
    </Router>
  );
}

export default App;
