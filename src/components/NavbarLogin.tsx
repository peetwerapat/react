import { useAuth } from '../providers/AuthProviders'
import classes from './NavbarLogin.module.css'
import { NavLink } from 'react-router-dom'

const NavbarLogin = () => {
  const { isLoggedIn } = useAuth()

  console.log('from navbar:', isLoggedIn)

  return (
    <div className={classes.top}>
      <div className={classes.menu}>
        <h3>Navbar</h3>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
          Profile
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
          Create
        </NavLink>
        <button>Login</button>
      </div>
    </div>
  )
}

export default NavbarLogin
