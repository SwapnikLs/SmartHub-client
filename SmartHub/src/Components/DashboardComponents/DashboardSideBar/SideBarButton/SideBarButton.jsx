import React from 'react';
import './SideBarButton.css';

function DashboardSidebarButton({ label, onClick, Icon, isActive }) {
  return (
    <button
      className={`sidebar-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {Icon && <Icon className="sidebar-button-icon" />}
      <span>{label}</span>
    </button>
  );
}

export default DashboardSidebarButton;
