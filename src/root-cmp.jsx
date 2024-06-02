import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes.js'

import { AppHeader } from './cmps/app-header'

export default function RootCmp() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            {routes.map(route =>
              <Route key={route.path} path={route.path} exact={true} element={route.component} />
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}