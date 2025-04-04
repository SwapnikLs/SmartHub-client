import axios from "axios";

const API_BASE_URL = "http://localhost:8080";
const userid = "67ef8d8c9b8c045bc2b04e7a"
/** 📥 Fetch PDF file */
export const fetchPDF = async (bookId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/books/${bookId}/${userid}pdf`, { responseType: "blob" });
        return URL.createObjectURL(response.data);
    } catch (error) {
        console.error("❌ Error fetching PDF:", error);
        return null;
    }
};

/** 📤 Send Scroll Progress */
export const sendScrollProgress = async (bookId, scrollPercentage) => {
    try {
        await axios.post(`${API_BASE_URL}/read-percentage/${userid}/add`, { id:bookId, percentage:scrollPercentage });
        console.log(`📤 Sent Scroll Progress: ${scrollPercentage}%`);
    } catch (error) {
        console.error("❌ Error sending scroll data:", error);
    }
};

/** 📊 Fetch Book Percentage */
export const fetchBookPercentage = async (bookId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/read-percentage/${userid}/${bookId}/getpercentage`);
        console.log(response.data.percentage)
        return response.data.percentage; // Assuming the API returns an object with a 'percentage' field
    } catch (error) {
        console.error("❌ Error fetching book percentage:", error);
        return null;
    }
};
