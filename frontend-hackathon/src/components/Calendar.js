import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);

    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<span key={`empty-${i}`} className="empty"></span>);
    }

    // Add the days of the month
    for (let day = 1; day <= totalDays; day++) {
      const isToday = 
        day === new Date().getDate() && 
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear();

      days.push(
        <span 
          key={day} 
          className={`calendar-day ${isToday ? 'today' : ''}`}
        >
          {day}
        </span>
      );
    }

    return days;
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <h2>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <div className="calendar-nav">
          <button onClick={previousMonth} className="nav-button">
            <FaChevronLeft />
          </button>
          <button onClick={nextMonth} className="nav-button">
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="calendar-grid">
        <div className="weekdays">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>
        <div className="days">
          {generateCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar; 