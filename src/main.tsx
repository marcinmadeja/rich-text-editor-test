import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppBasic from './lexical-plain-example/App'
import AppRichTextEditor from './lexical-rich-text-editor-example/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppRichTextEditor />} />
      <Route path="basic" element={<AppBasic />} />
    </Routes>

    </BrowserRouter>
  </React.StrictMode>
)
