import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in (by checking if the token cookie is present)
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (token) {
      const userId = token.split('=')[1]; // Extract user ID from token
      // Fetch user data from server using the provided user ID
      axiosInstance.get(`http://localhost:3000/api/user/${userId}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    // Send a request to your server to clear the token
    axiosInstance.get('http://localhost:5000/api/logout')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
