import { Route, Routes } from 'react-router-dom'
import { LoginForm } from './pages/LoginForm'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App
