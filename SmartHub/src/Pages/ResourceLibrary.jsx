import React, { useEffect, useState } from 'react';
import { useBooks } from '../Context/BookContext'; // Import useBooks Hook
import TrendingBooks from '../Components/ExplorePageComponents/TrendingBooks/TrendingBooks';
import NewArrivals from '../Components/ExplorePageComponents/NewArrivals/NewArrivals';
import TopPicks from '../Components/ExplorePageComponents/TopPicks/TopPicks';
import SmartPicks from '../Components/ExplorePageComponents/SmartPicks/SmartPicks';
import YouMayLike from '../Components/ExplorePageComponents/YouMayLike/YouMayLike';
import ContinueReading from '../Components/ExplorePageComponents/ContinueReading/ContinueReading';
import Modal from '../Components/ProfilePageComponents/Modal/Modal';
import { addToWishList } from '../Service/BorrowApi';
import PdfViewer from './PdfViewer';
function Explore() {
  const { trendingBooks,setTrendingBooks, topPicks,setTopPicks, newArrivals,setNewArrivals,continueReading,setContinueReading,youMayLike,setYouMayLike,smartPicks,setSmartPicks } = useBooks();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("")
  const addTowishList = (bookId) => {
    addToWishList(bookId)
      .then((data) => {
        console.log(data);
        try{
            setMessage(data.message)
            setShowModal(true);
            setTimeout(() => setShowModal(false), 2000);
          }
          catch(error){
            console.log(error);
            
        }
      });
};

  //similar for other sections also
  return (
    <>
      <TrendingBooks books={trendingBooks} addTowishList={addTowishList} />
      <NewArrivals books={newArrivals} addTowishList={addTowishList} />
      <ContinueReading books={continueReading} addTowishList={addTowishList} />
      <TopPicks books={topPicks} addTowishList={addTowishList} />
      <SmartPicks books={smartPicks} addTowishList={addTowishList} />
      <YouMayLike books={youMayLike} addTowishList={addTowishList} />
      <Modal show={showModal} message={message}/>
  
    </>
  );
}

export default Explore;
