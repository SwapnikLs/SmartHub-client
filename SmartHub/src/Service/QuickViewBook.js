import axios from "axios";

const BASE_URL = "http://localhost:8080";
const userId = "67ef8d8c9b8c045bc2b04e7a"
export const ViewBook = async (bookId) =>{
    try{
        const response = await axios.get(`${BASE_URL}/quick-view/${userId}/get/${bookId}`);
        return response.data;
    }
    catch(error){
        console.error("Error fetching Book details.",error);
        return {};
    }

}