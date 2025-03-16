import { UserProvider } from "./UserContext"; // Existing User Context
import { BookProvider } from "./BookContext"; // New Book Context

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <BookProvider>{children}</BookProvider>
    </UserProvider>
  );
};
