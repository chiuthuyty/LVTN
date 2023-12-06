import { ToastContainer } from 'react-toastify'
import useRouteElements from './useRouteElements'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElemets = useRouteElements()
  return (
    <div>
      {routeElemets}
      <ToastContainer />
    </div>
  )
}

export default App
