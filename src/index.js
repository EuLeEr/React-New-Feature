import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = (props) => {
    
    const [notes, setNotes] = useState( []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(()=> {
        const notesData  = JSON.parse(localStorage.getItem('notes'));
        if (notesData) {
            setNotes(notesData);
        }
    },[])

    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            {title, body}
            
        ])
        setTitle('')
        setBody('')
    }
    const removeNote = (title) => {
        setNotes(notes.filter((note)=> note.title !== title));
    }

    useEffect(()=> {
        localStorage.setItem('notes', JSON.stringify(notes));
    },[notes])

    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note)=> (
                <Note key={note.title} note = {note} removeNote={removeNote}/>
            ))}
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                <button> Add title </button>
            </form>
        </div>
    )
}

const Note = (props) => {
    useEffect(()=> {
        //debugger;
        console.log('Setting up effect') // Аналог mount компонента - выполняется (второй параметр [])
        // ПОСЛЕ первого рендеринга компонента на экран
        return ()=> {
            console.log('Cleaning up') // Аналог unmount компонента - выполняетсоя 1 раз при выход е компонента из document
        }
    }, []) 
    return (
        <div key={props.key}> 
        <h3>{props.note.title}</h3>
        <p>{props.note.body}</p>
        <button onClick={()=>props.removeNote(props.note.title)}>x</button>
    </div>
    )
}

const App = (props) => {
    const [count, setCount] = useState(props.count);
    const [text,  SetText] = useState('а ну-ка');
  
    return (
        <div>
            <p> The current {text || 'count'} is {count}  </p>
            <button onClick={()=>setCount(count + 1)}>+1</button>
            <button onClick={()=>setCount(props.count)}>reset</button> 
            <button onClick={()=>setCount(count - 1)}>-1</button>
            <input value={text} onChange={(e) =>SetText(e.target.value)}/>
        </div>
    )
}

App.defaultProps ={
    count: 0
}

//ReactDOM.render(<App count = {9} />, document.getElementById('root'));

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
