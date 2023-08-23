import axios from "axios";

export const fetchAuthenticatedUser = async () => {
  try {
    const { data: user } = await axios.get("http://localhost:3000/auth/");
    console.log(user);
    return user;
  } catch (error) {
    console.log("Error occurred", error.message);
    throw error;
  }
};
