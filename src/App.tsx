import { LoginComponent } from './components/LoginComponent/LoginComponent'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
