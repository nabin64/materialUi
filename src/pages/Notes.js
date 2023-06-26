import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';
import { useHistory } from 'react-router-dom';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const history = useHistory()

  // useEffect(() => {
  //   axios.get('http://localhost:4000/notes')
  //     .then(response => setNotes(response.data))
  //     .catch(error => console.error(error));
  // }, []);

  useEffect(() => {
    axios.get('http://localhost:4000/notes').then(res => setNotes(res.data)).catch(error => console.error(error))
  }, [])

  // useEffect(()=>{
  //   fetch("http://localhost:4000/notes").then(res=>res.json()).then(data=>setNotes(data))
  // })


  const handleDelete = async (id) => {

    await fetch('http://localhost:4000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }

  const handleEdit = async (id) => {

    history.push('/edit/' + id);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }


  return (
    <Container>



      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid-column"
      >
        {notes.map(item => (
          <div item key={item.id}>
            <NoteCard item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
          </div>
        ))}

      </Masonry>
    </Container>
  );
}
