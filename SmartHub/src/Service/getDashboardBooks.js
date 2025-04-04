import axios from "axios";
const BASE_URL = "http://localhost:8080"
export const getDashboardBooks = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/dashboard/get/67ef8d8c9b8c045bc2b04e7a`);        
        return response.data;
    }
    catch(error){
        console.error("Error fetching dashboard books:",error);
        throw error;
    }
}
export const getWishList = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/dashboard/get/wishlist/67ef8d8c9b8c045bc2b04e7a`)
        return response.data;
    }
    catch(error){
        console.error("error fetching wishlist:",error);
        throw error;
    }
}
export const getCompletedBooks = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/dashboard/get/completed/67ef8d8c9b8c045bc2b04e7a`)
        return response.data;
    }
    catch(error){
        console.error("error fetching completed books   :",error);
        throw error;
    }
}