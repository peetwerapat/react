import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  age: number
  country: string
}

const Greeting = ({ name, age, country }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <p>
        {name} {age} {country}
      </p>
    </div>
  )
}

export default Greeting
