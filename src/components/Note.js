import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';

const Note = ( {note}) => {
    // useEffect(()=> {
    //     //debugger;
    //     console.log('Setting up effect') // Аналог mount компонента - выполняется (второй параметр [])
    //     // ПОСЛЕ первого рендеринга компонента на экран
    //     return ()=> {
    //         console.log('Cleaning up') // Аналог unmount компонента - выполняетсоя 1 раз при выход е компонента из document
    //     }
    // }, []) 
    const { dispatch } = useContext(NotesContext);
    return (
        <div> 
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <button onClick={()=>dispatch({type: 'REMOVE_NOTE', title: note.title})}>x</button>
    </div>
    )
}
export default Note;