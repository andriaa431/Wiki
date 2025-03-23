import "./App.css"
import { Route, Routes, Navigate } from "react-router"
import Entries from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to ="entries"/>} />
      <Route path="/entries" element={<Entries/>} />
    </Routes>
  )
}

export default App


// function App() {


//   return (

//   )
// }

// export default App
