import { createContext } from "react";

const UserInfoContext = createContext({
  loggedInUser:"default user"
})

export default UserInfoContext;