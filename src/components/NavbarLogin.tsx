import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProviders'
import classes from './NavbarLogin.module.css'
import { NavLink } from 'react-router-dom'

const NavbarLogin = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <div className={classes.top}>
      <div className={classes.menu}>
        <h3>Navbar</h3>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        {isLoggedIn ? (
          <>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
              Profile
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
              Create
            </NavLink>
            <button className={classes.login} onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <Link to="/login" className={classes.login}>
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default NavbarLogin
