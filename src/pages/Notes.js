import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:4000/notes')
  //     .then(response => setNotes(response.data))
  //     .catch(error => console.error(error));
  // }, []);

  useEffect(()=>{
    axios.get('http://localhost:4000/notes').then(res =>setNotes(res.data)).catch(error =>console.error(error))
  },[])

  // useEffect(()=>{
  //   fetch("http://localhost:4000/notes").then(res=>res.json()).then(data=>setNotes(data))
  // })

  return (
    <div>
      {notes.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>

        </div>
      ))}
    </div>
  );
}
