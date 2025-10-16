import React from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Project from './Pages/Project';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Project />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
