import { ToastContainer } from 'react-toastify'
import useRouteElements from './useRouteElements'
import 'react-toastify/dist/ReactToastify.css'
import { useContext, useEffect } from 'react'
import { localStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/app.contexts'

function App() {
  const routeElemets = useRouteElements()
  const { reset } = useContext(AppContext)
  useEffect(() => {
    localStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      localStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])

  return (
    <div>
      {routeElemets}
      <ToastContainer />
    </div>
  )
}

export default App
