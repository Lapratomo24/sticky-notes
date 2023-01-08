import React from "react";

const Note = props => (
    <li class="note">
        <input class="note__title" type="text" placeholder="Title" />
        <textarea class="note__description" placeholder="Description..." />
        <span class="note__delete">X</span>
    </li>
);

export default Note;