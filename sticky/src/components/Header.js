import React from "react";

const Header = props => {

    const callSearch = e => {
        props.searchNote(e.target.value);
    }

    return(
        <header>
            <h1 class="app-header__title">Super Sticky Notes</h1>
            <aside class="app-header__controls">
                <button onClick={props.addNote} class="add-new">+ New Note</button>
                <input 
                    value={props.searchText} 
                    class="search" 
                    type="text"
                    placeholder="Type here to search..."
                    onChange={callSearch} 
                />
            </aside>
        </header>
    )
};

export default Header;