import React from "react";

const Header = props => (
    <header>
        <h1 class="app-header__title">Super Sticky Notes</h1>
        <aside class="app-header__controls">
            <button onClick={props.addNote} class="add-new">+ New Note</button>
            <input value={props.searchText} class="search" type="text" placeholder="Type here to search..." />
        </aside>
    </header>
);

export default Header;