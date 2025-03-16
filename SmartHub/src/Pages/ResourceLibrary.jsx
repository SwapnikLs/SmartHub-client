import React from 'react';
import { useBooks } from '../Context/BookContext'; // Import useBooks Hook
import TrendingBooks from '../Components/ExplorePageComponents/TrendingBooks/TrendingBooks';
import NewArrivals from '../Components/ExplorePageComponents/NewArrivals/NewArrivals';
import TopPicks from '../Components/ExplorePageComponents/TopPicks/TopPicks';
import SmartPicks from '../Components/ExplorePageComponents/SmartPicks/SmartPicks';
import YouMayLike from '../Components/ExplorePageComponents/YouMayLike/YouMayLike';
import ContinueReading from '../Components/ExplorePageComponents/ContinueReading/ContinueReading';

function Explore() {
  const { trendingBooks, topPicks, newArrivals,continueReading,youMayLike,smartPicks } = useBooks();

  return (
    <>
      <TrendingBooks books={trendingBooks} />
      <NewArrivals books={newArrivals} />
      <ContinueReading books={continueReading} />
      <TopPicks books={topPicks} />
      <SmartPicks books={smartPicks} />
      <YouMayLike books={youMayLike} />
    </>
  );
}

export default Explore;
