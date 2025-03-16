import { UserProvider } from "./UserContext"; // Existing User Context
import { BookProvider } from "./BookContext"; // New Book Context

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <BookProvider>{children}</BookProvider>
    </UserProvider>
  );
};
export default Providers;