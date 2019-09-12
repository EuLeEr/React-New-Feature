import React, { useState, useContext} from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../customhooks/useMousePosition';

const AddNoteForm = () => {
    const {dispatch } = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // !! THIS JOKE EXAMPLE
    const mousePosition = useMousePosition();
    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        })
        // setNotes([
        //     ...notes,
        //     {title, body}
            
        // ])
        setTitle('')
        setBody('')
    }


    return (
        <>
        <p>Add note {mousePosition.x} - {mousePosition.y}</p>
        <form onSubmit={addNote}>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
            <button> Add node </button>
        </form>
        </>
    )
    }
export { AddNoteForm as default };