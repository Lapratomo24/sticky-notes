import React, { Component } from "react";
import Header from "./components/Header";
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

  // edit a note
  editNote = (noteId, updatedField, updatedValue) => {
    const updatedNote = this.state.notes.map(note => {
      if (noteId !== note.id) {
        return note;
      } else {
        if (updatedField === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNote });
  };

  // search a note
  searchNote = (text) => {
    const newSearchText = text.toLowerCase(); 
    const searchResult = this.state.notes.map(note => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        note.doesMatchSearch = hasMatch;
        return note;
      };
    })
    this.setState({
      notes: searchResult,
      searchText: newSearchText
    })
  };

  // delete a note
  deleteNote = (noteId) => {
    const deletedNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({ notes: deletedNotes });
  }

  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} addNote={this.addNote} searchNote={this.searchNote} />
        <NotesList notes={this.state.notes} editNote={this.editNote } deleteNote={this.deleteNote} />
      </div>
    )
  }
};

export default App;
