import { useState, useEffect } from 'react';
import { api } from '../api/api';

const AdminDashBoard = () => {
  const [celebrations, setCelebrations] = useState([]);
  const [stats, setStats] = useState({
    totalCelebrations: 0,
    activeCelebrations: 0,
    totalUsers: 0,
    totalContacts: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [celebrationsRes, statsRes] = await Promise.all([
        api.getCelebrations(),
        api.getStats()
      ]);
      
      const celebrationsData = await celebrationsRes.json();
      const statsData = await statsRes.json();
      
      setCelebrations(celebrationsData);
      setStats(statsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const [newCelebration, setNewCelebration] = useState({
    name: '',
    date: '',
    guests: ''
  });

  const handleAddCelebration = async (e) => {
    e.preventDefault();
    try {
      const response = await api.createCelebration({
        ...newCelebration,
        guests: parseInt(newCelebration.guests)
      });
      
      if (response.ok) {
        setNewCelebration({ name: '', date: '', guests: '' });
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Error creating celebration:', error);
    }
  };

  const deleteCelebration = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/celebrations/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Error deleting celebration:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>🎉 Admin Dashboard</h1>
        
        <div style={statsGridStyle}>
          <div style={statCardStyle}>
            <h3>Total Celebrations</h3>
            <p style={statNumberStyle}>{stats.totalCelebrations}</p>
          </div>
          <div style={statCardStyle}>
            <h3>Active Events</h3>
            <p style={statNumberStyle}>{stats.activeCelebrations}</p>
          </div>
          <div style={statCardStyle}>
            <h3>Total Users</h3>
            <p style={statNumberStyle}>{stats.totalUsers}</p>
          </div>
          <div style={statCardStyle}>
            <h3>Total Contacts</h3>
            <p style={statNumberStyle}>{stats.totalContacts}</p>
          </div>
        </div>

        <div style={sectionsStyle}>
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Add New Celebration</h2>
            <form onSubmit={handleAddCelebration} style={formStyle}>
              <input
                type="text"
                placeholder="Birthday Person's Name"
                value={newCelebration.name}
                onChange={(e) => setNewCelebration({...newCelebration, name: e.target.value})}
                required
                style={inputStyle}
              />
              <input
                type="date"
                value={newCelebration.date}
                onChange={(e) => setNewCelebration({...newCelebration, date: e.target.value})}
                required
                style={inputStyle}
              />
              <input
                type="number"
                placeholder="Expected Guests"
                value={newCelebration.guests}
                onChange={(e) => setNewCelebration({...newCelebration, guests: e.target.value})}
                required
                style={inputStyle}
              />
              <button type="submit" style={addButtonStyle}>
                Add Celebration 🎂
              </button>
            </form>
          </div>

          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Recent Celebrations</h2>
            <div style={tableContainerStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr style={headerRowStyle}>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Date</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Guests</th>
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {celebrations.map(celebration => (
                    <tr key={celebration._id} style={rowStyle}>
                      <td style={tdStyle}>{celebration.name}</td>
                      <td style={tdStyle}>{new Date(celebration.date).toLocaleDateString()}</td>
                      <td style={tdStyle}>
                        <span style={{
                          ...statusStyle,
                          backgroundColor: 
                            celebration.status === 'Active' ? '#27ae60' :
                            celebration.status === 'Completed' ? '#95a5a6' : '#f39c12'
                        }}>
                          {celebration.status}
                        </span>
                      </td>
                      <td style={tdStyle}>{celebration.guests}</td>
                      <td style={tdStyle}>
                        <button 
                          onClick={() => deleteCelebration(celebration._id)}
                          style={deleteButtonStyle}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: '2rem 0'
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem'
};

const titleStyle = {
  fontSize: '3rem',
  textAlign: 'center',
  color: 'white',
  marginBottom: '3rem',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
};

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  marginBottom: '3rem'
};

const statCardStyle = {
  background: 'rgba(255,255,255,0.9)',
  padding: '2rem',
  borderRadius: '15px',
  textAlign: 'center',
  backdropFilter: 'blur(10px)'
};

const statNumberStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#e74c3c',
  margin: '0.5rem 0'
};

const sectionsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
  gap: '2rem'
};

const sectionStyle = {
  background: 'rgba(255,255,255,0.9)',
  padding: '2rem',
  borderRadius: '15px',
  backdropFilter: 'blur(10px)'
};

const sectionTitleStyle = {
  fontSize: '1.8rem',
  color: '#2c3e50',
  marginBottom: '1.5rem'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const inputStyle = {
  padding: '1rem',
  fontSize: '1rem',
  border: '2px solid #ddd',
  borderRadius: '8px',
  outline: 'none'
};

const addButtonStyle = {
  padding: '1rem',
  fontSize: '1.1rem',
  background: '#27ae60',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};

const tableContainerStyle = {
  overflowX: 'auto'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse'
};

const headerRowStyle = {
  background: '#f8f9fa'
};

const thStyle = {
  padding: '1rem',
  textAlign: 'left',
  borderBottom: '2px solid #ddd',
  fontWeight: 'bold'
};

const rowStyle = {
  borderBottom: '1px solid #eee'
};

const tdStyle = {
  padding: '1rem',
  borderBottom: '1px solid #eee'
};

const statusStyle = {
  padding: '0.3rem 0.8rem',
  borderRadius: '15px',
  color: 'white',
  fontSize: '0.9rem',
  fontWeight: 'bold'
};

const deleteButtonStyle = {
  padding: '0.5rem 1rem',
  background: '#e74c3c',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '0.9rem'
};

export default AdminDashBoard;