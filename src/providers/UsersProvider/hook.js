import { useContext } from "react";
import { UserContext } from "./context";

const useUsersProvider = () => {
    const {
        users,
        addUserData
      } = useContext(UserContext);
    
      return {
        users,
        addUserData
      };
}

export default useUsersProvider;