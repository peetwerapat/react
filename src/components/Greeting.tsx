import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  age: number
  country: string
  isLoggedIn: boolean
}

const Greeting = ({ name, age, country, isLoggedIn }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>
        Welcome! {name} {age} {country}
      </h3>
      <p>{isLoggedIn ? name : 'Unknown'}</p>
    </div>
  )
}

export default Greeting
