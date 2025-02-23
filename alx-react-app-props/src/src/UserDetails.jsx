import { useContext } from "react";
import UserContext from "./contexts/UserContext";

function UserDetails() {
  // Get userData from UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
