import { Token, UserRegistration, UserLogin } from "@/interfaces/Accountinterfaces";

const url = "https://your-api-url.com/"; 

export const createAccount = async (user: UserRegistration) => {
  try {
    const res = await fetch(`${url}CreateUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    return data.success; 
  } catch (error) {
    console.error("Registration error:", error);
    return false;
  }
};


export const login = async (credentials: UserLogin): Promise<Token | null> => {
  try {
    const res = await fetch(`${url}Login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) return null;

    const data: Token = await res.json();
    return data;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};


export const getUserByUsername = async (username: string) => {
  const res = await fetch(`${url}GetUserByUsername/${username}`);
  if (res.ok) {
    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
  }
};

