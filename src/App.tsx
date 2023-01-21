import { LoginScreen } from 'apps'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route  path='' element={<LoginScreen />} />
    </Routes>
  )
}

export default App
