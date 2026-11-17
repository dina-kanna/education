import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("eduUser")) || null;
  });

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("eduUsers")) || [];

    const exists = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
      return { success: false, message: "Email already registered." };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      phone: "",
      location: "",
      bio: "Welcome to my learning journey!",
      enrolledCourses: [],
    };

    users.push(newUser);
    localStorage.setItem("eduUsers", JSON.stringify(users));

    const loggedUser = { ...newUser };
    delete loggedUser.password;

    localStorage.setItem("eduUser", JSON.stringify(loggedUser));
    setUser(loggedUser);

    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("eduUsers")) || [];

    const foundUser = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const loggedUser = { ...foundUser };
    delete loggedUser.password;

    localStorage.setItem("eduUser", JSON.stringify(loggedUser));
    setUser(loggedUser);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("eduUser");
    setUser(null);
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };

    const users = JSON.parse(localStorage.getItem("eduUsers")) || [];

    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, ...updatedData } : u
    );

    localStorage.setItem("eduUsers", JSON.stringify(updatedUsers));
    localStorage.setItem("eduUser", JSON.stringify(updatedUser));

    setUser(updatedUser);
  };

  const enrollCourse = (courseId) => {
    if (!user) return;

    const enrolledCourses = user.enrolledCourses || [];

    if (enrolledCourses.includes(courseId)) return;

    updateProfile({
      enrolledCourses: [...enrolledCourses, courseId],
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        updateProfile,
        enrollCourse,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);