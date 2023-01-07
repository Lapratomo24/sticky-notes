import React from "react";
import Header from "../src/components/Header";
import NotesList from "./components/NotesList";

const App = () => (
  <div>
    <Header />
    <ul class="notes-list">
      <NotesList />
    </ul>
  </div>
);

export default App;
