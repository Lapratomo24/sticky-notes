import React from "react";

const Note = props => {

    const updateTitle = (e) => {
        const updatedValue = e.target.value;
        const noteId = props.note.id;
        props.editNote(noteId, "title", updatedValue);
    }

    const updateDescription = (e) => {
        const updatedValue = e.target.value;
        const noteId = props.note.id;
        props.editNote(noteId, "description", updatedValue);
    }

    return (
        <li class="note">
            <input 
                value={props.note.title} 
                class="note__title" 
                type="text" 
                placeholder="Title" 
                onChange={updateTitle}
            />
            <textarea 
                value={props.note.description} 
                class="note__description" 
                placeholder="Description..." 
                onChange={updateDescription}
            />
            <span class="note__delete">X</span>
        </li>
    );
};

export default Note;