import { useEffect } from 'react'
import api from './utils/api'

const App = () => {
  useEffect(() => {
    const getUserData = async () => {
      const res = await api.get('/json-data')
      const data = res.data
      console.log(data)
    }

    getUserData()
  }, [])

  return <div>App</div>
}

export default App
