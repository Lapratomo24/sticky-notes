import React, { Component } from "react";
import Header from "../src/components/Header";
import NotesList from "./components/NotesList";

class App extends Component {

  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  // add a new note
  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    // add the new note to existing array of notes
    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };

  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} addNote={this.addNote} />
        <NotesList notes={this.state.notes} />
      </div>
    )
  }
};

export default App;
