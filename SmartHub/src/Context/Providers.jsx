import { UserProvider } from "./UserContext"; // Existing User Context
import { BookProvider } from "./BookContext"; // New Book Context
import { UserDashboardProvider } from "./UserDashboardContext";
const Providers = ({ children }) => {
  return (
    <UserProvider>
      <BookProvider>
        <UserDashboardProvider>{children}</UserDashboardProvider>
      </BookProvider>
    </UserProvider>
  );
};

export default Providers;
