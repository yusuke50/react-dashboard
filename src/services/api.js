const API_URL = 'http://localhost:3001';

export const loginUser = async (credentials) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      `${API_URL}/users?username=${credentials.username}&password=${credentials.password}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const users = await response.json();

    if (users.length == 0) {
      throw new Error('Invalid credentials');
    }

    const { password, ...user } = users[0];
    return user;
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};
