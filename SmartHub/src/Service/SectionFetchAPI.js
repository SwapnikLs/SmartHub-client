import axios from "axios";

const BASE_URL = "http://localhost:8080"; 

export const fetchSectionBooks = async (section) => {
    try {
        const response = await axios.get(`${BASE_URL}/sections/${section}`);
        return response.data.map(book => ({
            id: book.bookId,
            title: book.title,
            src: book.coverImageUrl,
        }));
    } catch (error) {
        console.error("Error fetching books:", error);  
        return [];
    }
};
