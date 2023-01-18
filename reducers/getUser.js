import { GET_USER } from "../utils";

const initialState = {
  users: [],
};

//gets the user search bar up top
export default function getUsers() {
  return {
    type: GET_USERS,
  };
}
