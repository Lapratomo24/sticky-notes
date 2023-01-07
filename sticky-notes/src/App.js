import React from "react";
import Header from "../src/components/Header";

const App = () => (
  <div>
    <Header />
    <ul class="notes-list">
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
        <textare class="note__description" placeholder="Description..." />
        <span class="note__delete">X</span>
      </li>
    </ul>
  </div>
);

export default App;
