import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  const fetchUserProfileAndNavigate = async () => {
    try {
      const {data: user} = await axios.get("http://localhost:3000/auth/");
      console.log(user);
      // toast.success("Registered successfully");
      navigate(`/dashboard/profile/:${user._id}`);
      setUser({
        username: user.username,
        email: user.email,
      });
    } catch (error) {
      console.log("Error occurred", error.message);
    }
  };
  return (
    <div>Profile</div>
  )
}

export default Profile