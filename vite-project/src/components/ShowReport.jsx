import React, { useEffect, useState } from 'react';

function ShowReport() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('usersData')) || [];
    setUsers(savedUsers);
  }, []);

  return (
    <>
      <div className="view-page">
        <h1>Report Summary</h1>

        <div className="report-container">
          {users.length > 0 ? (
            users.map((user, index) => (
              <div className="report-box" key={index}>
                <p>Name: {user.username}</p>
                <p>Correct Attempts: {user.score}</p>
                <p>Wrong Attempts: {user.total > 0 ? user.total - user.score : 0}</p>
                <p>Total Questions: {user.total}</p>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ShowReport;
