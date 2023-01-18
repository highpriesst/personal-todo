// removes user in the user section down below the navbar
import { REMOVE_USER } from "../utils";

const initialState = {
  users: [],
  error: "",
};

//gets the user search bar up top
//This should be on the users state i think? will see

//gets the user payload and removes it in the reducer?
export default function removeUser(user) {
  return {
    type: REMOVE_USER,
    payload: user,
  };
}
