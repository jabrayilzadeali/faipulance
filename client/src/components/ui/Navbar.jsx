import { useEffect, useState } from "react"

const Navbar = () => {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    document.querySelector('html').classList = theme
  }, [theme])

  return (
    <div>
      <button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>Dark mode btn</button>
    </div>
  )
}

export default Navbar
