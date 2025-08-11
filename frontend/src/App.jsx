import React from 'react'
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage"
import NoteDetailPage from "./Pages/NoteDetailPage"
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div>
<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>
      
      <Routes>
        <Route path="/"  element={<HomePage />}  />
        <Route path="/create"  element={<CreatePage />}  />
        <Route path="/note/:id"  element={<NoteDetailPage />}  />

      </Routes>
      
    </div>
  )
}

export default App
  