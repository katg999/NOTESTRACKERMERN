import React from 'react'
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage"
import NoteDetailPage from "./Pages/NoteDetailPage"
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div data-theme="relative h-full w-full">
       <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      
      <Routes>
        <Route path="/"  element={<HomePage />}  />
        <Route path="/create"  element={<CreatePage />}  />
        <Route path="/note/:id"  element={<NoteDetailPage />}  />

      </Routes>
      
    </div>
  )
}

export default App
  