import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function SearchPageFront() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchTerm = location.state?.searchTerm;

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        const response = await fetch(`http://localhost:8000/search?username=${searchTerm}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div>
      <h1 className='resultlabel'>Search Results for {searchTerm}</h1>
      <table  className="bordered-table">
        <thead>
          <tr>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result, index) => (
            <tr key={index}>
              <td>
              <Link to={`/selected-user/`}>{result.username}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}