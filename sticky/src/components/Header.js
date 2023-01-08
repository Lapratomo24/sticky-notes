import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <h1 class="app-header__title">Super Sticky Notes</h1>
                <aside class="app-header__controls">
                    <button class="add-new">+ New Note</button>
                    <input class="search" type="text" placeholder="Type here to search..." />
                </aside>
            </header>
        )
    }
}

export default Header;