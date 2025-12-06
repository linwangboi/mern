import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx'
import RateLimitedUI from '../components/RateLimitedUI.jsx';
import axios from 'axios';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('https://opulent-space-winner-x5vq5q4xq9543vppw-5001.app.github.dev/api/notes');
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log('error fetching notes', error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error('Failed to load notes');
        }
      } finally {
        setLoading(false);
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