import axios from "axios";

const BASE_URL = "http://localhost:8080";
const userId = "67ef8d8c9b8c045bc2b04e7a";

export const addToWishList = async (bookId) => {
    try {
        console.log("📡 Sending request...");
        const response = await axios.post(`${BASE_URL}/wishlist/${userId}/add/${bookId}`);
        console.log("✅ Added to wishlist:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Network error:", error);
    }
};

export const removeFromWishList = async (bookId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/wishlist/${userId}/remove/${bookId}`);
        console.log("✅ Removed from wishlist:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Network error:", error);
    }
};

export const BorrowBook = async (bookId) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/${userId}/borrow/${bookId}`);
        return response.data;
    } catch (error) {
        console.error("❌ Network error:", error);
    }
};

export const ReturnBook = async (bookId) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/${userId}/return/${bookId}`);
        return response.data;
    } catch (error) {
        console.error("❌ Network error:", error);
    }
};