import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios.get('/Projects.json')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        // Optionally, you can handle error here or leave it empty
      });
  };

  return (
    <div>
      <h1>Project List</h1>
      <button onClick={fetchProjects}>Fetch Projects</button>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
