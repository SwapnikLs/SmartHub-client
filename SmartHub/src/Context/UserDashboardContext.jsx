import React, { createContext, useContext, useEffect, useState } from "react";
import { getCompletedBooks, getDashboardBooks, getWishList } from "../Service/getDashboardBooks";

// Create UserDashboardContext
export const UserDashboardContext = createContext();

// Custom hook to use UserDashboardContext
export const useUserDashboard = () => {
    const context = useContext(UserDashboardContext);
    if (!context) {
        throw new Error("useUserDashboard must be used within a UserDashboardProvider");
    }
    return context;
};

// UserDashboardProvider component to wrap the app and provide context
export const UserDashboardProvider = ({ children }) => {
    const [dashboardBooks, setDashboardBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(null);
    const [myLibrary, setMyLibrary] = useState([]);
    const [overDues, setOverDues] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const books = await getDashboardBooks();
                setDashboardBooks(books);
                const foundBook = books.find((book) => book.currentlyReading === true);
                setCurrentBook(foundBook || null);

                setMyLibrary(books.map(book => ({
                    title: book.title,
                    image: book.image,
                    percentage: book.percentage
                })));

                setOverDues(books.map(book => ({
                    title: book.title,
                    image: book.image,
                    borrowDate: book.borrowDate,
                    dueDate: book.dueDate,
                    status: book.status
                })));

                const wishListBooks = await getWishList();
                setWishList(wishListBooks);

                const completedBooks = await getCompletedBooks();
                setCompleted(completedBooks);
            } catch (err) {
                console.error("❌ Error fetching dashboard data:", err);
                setError(err);
            }
        };

        fetchData();
    }, []); // Ensure this runs only once when the component mounts

    return (
        <UserDashboardContext.Provider value={{
            dashboardBooks, setDashboardBooks,
            myLibrary, setMyLibrary,
            overDues, wishList, setWishList,
            completed, currentBook, error
        }}>
            {children}
        </UserDashboardContext.Provider>
    );
};
