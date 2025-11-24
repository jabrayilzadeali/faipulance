import { Outlet } from 'react-router'

export default function App() {
  return (
    <>
      <div className='bg-red-700'>
        navbar
      </div>
      <Outlet />
    </>
  )
}

