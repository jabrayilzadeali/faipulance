import { Outlet } from 'react-router'
import Navbar from '../components/ui/Navbar'

export default function App() {

  return (
    <main className="">
      <Navbar />
      <Outlet />
    </main>
  )
}

