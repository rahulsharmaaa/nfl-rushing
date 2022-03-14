import CircularProgress from '@mui/material/CircularProgress'
import React, { useEffect, useState } from 'react'
import './App.css'
import DisplayTable from './components/DisplayTable/DisplayTable'

function App() {
  const [data, setData] = useState(null)

  const callAPI = () => {
    fetch(`http://localhost:9000/`)
      .then((res) => {
        const result = res.json()
        return result
      })
      .then((res) => {
        setData(res)
      })
  }
  useEffect(() => {
    callAPI()
  }, [])
  return (
    <div>
      <header className='App-header'>
        {data ? (
          <DisplayTable data={data} />
        ) : (
          <div className='loadingIcon'>
            <CircularProgress />
          </div>
        )}
      </header>
    </div>
  )
}

export default App
