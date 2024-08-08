import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>setLoading(false),1000)
  },[])

  return (
    <>
      <div>
        
       { loading?<Loading/>:<div style={{paddingTop:"125px"}}><h1>this is perfect recipe </h1> </div>
        }
      </div>
    </>
  )
}

export default App
