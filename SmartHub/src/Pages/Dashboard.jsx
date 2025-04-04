import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentlyReading from '../Components/DashboardComponents/Status/CurrentlyReading/CurrentlyReading';
import MyLibrary from '../Components/DashboardComponents/Status/MyLibrary/MyLibrary';
import DashboardSideBar from '../Components/DashboardComponents/DashboardSideBar/DashboardSideBar';
import "../Components/DashboardComponents/Dashboard.css";
import OverdueTable from '../Components/DashboardComponents/OverDues/OverDues';
import WishList from '../Components/DashboardComponents/WishList/WishList';
import CompletedBooks from '../Components/DashboardComponents/CompletedBooks/CompletedBooks';
import Button from "../Components/GlobalComponents/Button/Button";
import { useUserDashboard } from '../Context/UserDashboardContext';
import { getDashboardBooks } from '../Service/getDashboardBooks';

function Dashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(() => {
    // Retrieve the saved section from localStorage or default to 'Status'
    return localStorage.getItem('activeSection') || 'Status';
  });
  const { dashboardBooks, setDashboardBooks } = useUserDashboard();

  
  useEffect(() => {
    // Save the active section to localStorage whenever it changes
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);
  
  useEffect(() => {
    const fetchAndSetDashboardBooks = async () => {
      try {
        const books = await getDashboardBooks();
        setDashboardBooks(books);
      } catch (error) {
        console.error("❌ Error fetching dashboard books:", error);
      }
    };
  
    fetchAndSetDashboardBooks();
    console.log(dashboardBooks);
  }, [setDashboardBooks]);  // Ensure re-fetching when the setter function is available
  

  return (
    <div className="dashboard-container">
      {/* Back Button at the Top Left */}
      <div className="back-button-container" onClick={() => navigate(-1)}>
        <Button text="⬅" />
      </div>

      <DashboardSideBar activeSection={activeSection} handleButtonClick={setActiveSection} />
      
      <div className='dashboard-right'>
        {activeSection === 'Status' && (
          <>
            <CurrentlyReading dashboardBooks={dashboardBooks} />
            <MyLibrary />
          </>
        )}
        {activeSection === 'My Library' && <MyLibrary />}
        {activeSection === 'OverDues' && <OverdueTable  />}
        {activeSection === 'Completed' && <CompletedBooks />}
        {activeSection === 'WishList' && <WishList />}
      </div>
    </div>
  );
}

export default Dashboard;
