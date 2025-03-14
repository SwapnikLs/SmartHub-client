import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentlyReading from '../Components/DashboardComponents/Status/CurrentlyReading/CurrentlyReading';
import MyLibrary from '../Components/DashboardComponents/Status/MyLibrary/MyLibrary';
import DashboardSideBar from '../Components/DashboardComponents/DashboardSideBar/DashboardSideBar';
import "../Components/DashboardComponents/Dashboard.css";
import OverdueTable from '../Components/DashboardComponents/OverDues/OverDues';
import WishList from '../Components/DashboardComponents/WishList/WishList';
import CompletedBooks from '../Components/DashboardComponents/CompletedBooks/CompletedBooks';
import Button from "../Components/GlobalComponents/Button/Button";

function Dashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('Status');

  const books = [
    {
      id: 1,
      name: "Atomic Habits",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      borrowDate: "2024-02-15",
      dueDate: "2024-03-01",
      status: "OVERDUE"
    },
    {
      id: 2,
      name: "The Alchemist",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
      borrowDate: "2024-02-25",
      dueDate: "2024-03-10",
      status: "PENDING"
    },
    {
      id: 3,
      name: "The Subtle Art of Not Giving a F*ck",
      image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
      borrowDate: "2025-02-20",
      dueDate: "2025-03-10",
      status: "PAID"
    },
    {
      id: 4,
      name: "The Power of Habit",
      image: "https://m.media-amazon.com/images/I/91Fg03BiaNL.jpg",
      borrowDate: "2025-03-01",
      dueDate: "2025-03-20",
      status: "PENDING"
    },
    {
      id: 5,
      name: "Deep Work",
      image: "https://m.media-amazon.com/images/I/81RlA9wqz3L.jpg",
      borrowDate: "2025-03-05",
      dueDate: "2025-03-25",
      status: "SCHEDULED"
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Back Button at the Top Left */}
      <div className="back-button-container"  onClick={() => navigate(-1)}>
        <Button text="⬅" />
      </div>

      <DashboardSideBar activeSection={activeSection} handleButtonClick={setActiveSection} />
      
      <div className='dashboard-right'>
        {activeSection === 'Status' && (
          <>
            <CurrentlyReading />
            <MyLibrary />
          </>
        )}
        {activeSection === 'My Library' && <MyLibrary />}
        {activeSection === 'OverDues' && <OverdueTable books={books} />}
        {activeSection === 'Completed' && <CompletedBooks />}
        {activeSection === 'WishList' && <WishList />}
        {activeSection === 'Favourites' && <div>Favourites Section</div>}
      </div>
    </div>
  );
}

export default Dashboard;
