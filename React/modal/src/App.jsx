import "./user.css"
import user from "./user.json"
import { UserCard } from "./UserCard"

export default function App() {
  return (
    <UserCard name={user.name} phoneNumber={user.phoneNumber} age={user.age} address={user.address} />
  )
}


