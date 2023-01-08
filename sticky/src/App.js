import React, { Component } from "react";
import Header from "../src/components/Header";
import NotesList from "./components/NotesList";

class App extends Component {

  state = {
    notes: [
      {
        id: 0,
        title: "code",
        description: "master frontend & backend languages",
        doesMatchSearch: true
      },
      {
        id: 1,
        title: "sport",
        description: "cycle and workout at the gym regularly",
        doesMatchSearch: true
      },
      {
        id: 2,
        title: "food",
        description: "eat healthy food and hydrate well",
        doesMatchSearch: true
      }
    ],
    searchText: "search for me"
  };

  render() {
    return (
      <div>
        <Header />
        <NotesList />
      </div>
    )
  }
};

export default App;
