const api_url = "http://localhost:5000/drivers";

export const getDrivers = async () => {
  const response = await fetch(api_url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
};

export const createUser = async (driver) => {
  const response = await fetch(api_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(driver),
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${api_url}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};
