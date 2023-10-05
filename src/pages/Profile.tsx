import Greeting from '../components/Greeting'

const Profile = () => {
  return (
    <div>
      <Greeting name="Peet" age={23} country="Thailand" isLoggedIn={true} />
      <Greeting name="Dodo" age={24} country="Thailand" isLoggedIn={false} />
    </div>
  )
}

export default Profile
