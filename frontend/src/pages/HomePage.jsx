import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx'
import RateLimitedUI from '../components/RateLimitedUI.jsx';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = axios
      } catch (error) {
        
      }
    }
    fetchNotes();
  }, []);
  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
    </div>
  )
}

export default HomePage