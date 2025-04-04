import axios from "axios";

const API_URL = "http://localhost:8080"; // Replace with your actual API URL
export const loginUser = async (username, password) => {
  try {
    // ✅ Send login request
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      username,
      password,
    });

    if (response.data.message === "Login successful") {
      const { token } = response.data; // ✅ Extract token

      // ✅ Store token in localStorage
      localStorage.setItem("authToken", token);

      // ✅ Fetch user details WITHOUT Authorization header
      const userResponse = await axios.get(`${API_URL}/api/auth/${username}`);

      if (userResponse.status === 200 && userResponse.data) {
        return {
          success: true,
          userDetails: {
            username: userResponse.data.username || username,
            firstName: userResponse.data.firstname || "",
            lastName: userResponse.data.lastname || "",
            number: userResponse.data.number || "",
            email: userResponse.data.email || "",
            dob: userResponse.data.dob || "",
            token: token, // ✅ Save token
          },
        };
      } else {
        return { success: false, message: "⚠️ Unable to fetch user details." };
      }
    } else {
      return { success: false, message: "⚠️ Login failed. Please check your credentials." };
    }
  } catch (error) {
    return {
      success: false,
      message: `⚠️ ${error.response?.data?.message || "Login failed. Try again."}`,
    };
  }
};


export const checkUsernameAvailability = async (username) => {
    if (!username.trim()) return false;
  
    try {
      const response = await axios.get(`${API_URL}/api/auth/check-username?username=${username}`);
      return response.data.available;
    } catch (error) {
      console.error("Error checking username availability:", error);
      return null; // Indicate API failure
    }
  };
  export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, userData);
      return response.data; // Return success response
    } catch (error) {
      throw error.response?.data?.message || "Registration failed. Please try again.";
    }
  };