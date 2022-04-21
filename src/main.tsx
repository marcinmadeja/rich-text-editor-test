import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './lexical-plain-example/App'
import AppRichTextEditor from './lexical-rich-text-editor-example/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRichTextEditor />
  </React.StrictMode>
)
