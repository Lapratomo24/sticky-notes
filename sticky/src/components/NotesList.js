import React from "react";
import Note from "./Note";

const NotesList = props => {
    const filterElements = note => note.doesMatchSearch;
    const filterMatches = props.notes.filter(filterElements);

    const renderNote = note => <Note editNote={props.editNote} note={note} key={note.id} />;
    const noteElements = filterMatches.map(renderNote);
    
    return <ul className="notes-list">{noteElements}</ul>
};

export default NotesList;