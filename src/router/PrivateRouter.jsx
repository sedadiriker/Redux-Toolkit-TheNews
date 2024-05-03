import { Outlet } from "react-router-dom"
import Login from "../pages/Login"
import { useSelector } from "react-redux"

const PrivateRouter = () => {
  // const user = false
  const {user} = useSelector(state => state.login)
  console.log(user)
  return (
    <div>
      {
        user?.email && user?.password ? <Outlet/> : <Login/>
      }
    </div>
  )
}

export default PrivateRouter
