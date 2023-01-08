import React, { Component } from "react";
import Note from "./Note";

class NotesList extends Component {
    render() {
        return (
            <ul class="notes-list">
                <Note />
                <Note />
                <Note />
            </ul>
        )
    }
}

export default NotesList;