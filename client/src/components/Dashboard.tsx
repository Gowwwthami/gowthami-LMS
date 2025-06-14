import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ role }: { role: string }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`/api/dashboard/${role}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => setMessage(res.data.message))
    .catch(err => setMessage('Unauthorized or error'));
  }, [role]);

  return (
    <div className="p-6 text-xl font-semibold">
      {message || 'Loading...'}
    </div>
  );
};

export default Dashboard;
