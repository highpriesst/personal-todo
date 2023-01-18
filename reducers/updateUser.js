//change this to update user
// removes user in the user section down below the navbar
import { UPDATE_USER } from "../utils";

const initialState = {
  user: [],
  error: "",
};

//gets the user search bar up top
export default function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: name,
  };
}
