import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodoList from './Components/To-do-List/To-do-List.tsx'
import FontChange from './Components/Font-Change/Font-Change.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FontChange/>
    <App />
    <TodoList />
  </React.StrictMode>,
)
