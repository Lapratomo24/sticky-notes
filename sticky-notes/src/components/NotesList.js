import React, { Component } from "react";

class NotesList extends Component {
    render() {
        return (
            <>
            <li class="note">
                <input class="note__title" type="text" placeholder="Title" />
                <textarea class="note__description" placeholder="Description..." />
                <span class="note__delete">X</span>
            </li>
            <li class="note">
                <input class="note__title" type="text" placeholder="Title" />
                <textarea class="note__description" placeholder="Description..." />
                <span class="note__delete">X</span>
            </li>
            <li class="note">
                <input class="note__title" type="text" placeholder="Title" />
                <textarea class="note__description" placeholder="Description..." />
                <span class="note__delete">X</span>
            </li>
            </>
        )
    }
}

export default NotesList;