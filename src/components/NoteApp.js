
import React ,{ useState, useEffect, useReducer} from 'react';
import NoteList from './NoteList';
import notesReducer from '../reducers/notes';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
    
    //const [notes, setNotes] = useState( []);
    const [notes, dispatch] = useReducer(notesReducer,[]);


    useEffect(()=> {
        // const notesData  = JSON.parse(localStorage.getItem('notes'));
        // if (notesData) {
        //     setNotes(notesData);
        // }
         const notes  = JSON.parse(localStorage.getItem('notes'));
        if (notes) {
            dispatch({type: 'POPULATE_NOTES', notes})
        }
    },[])

    // const removeNote = (title) => {
    //     dispatch({
    //         type: 'REMOVE_NOTE',
    //         title
    //     })
    //     // setNotes(notes.filter((note)=> note.title !== title));
    // }

    useEffect(()=> {
        localStorage.setItem('notes', JSON.stringify(notes));
    },[notes])

    return (
        //<div>
/*         <NotesContext.Provider>
        <h1>Notes</h1>

            <NoteList notes={notes} removeNote ={removeNote} /> 
            
            <AddNoteForm dispatch={dispatch} />
        </NotesContext.Provider> */
        // При употреблении React.createContext() исчезает потребность передавать параметры компнентов
        // через props - все можно достать через useContext(NotesContext)
        //  removeNote ={removeNote} убираем , чтобы переопределить уже в самом Note,а не передавать её через
        // все компоненты
         <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>

            <NoteList  /> 
            
            <AddNoteForm  />
        </NotesContext.Provider>         
        //</div>
    )
}

export { NoteApp as default}