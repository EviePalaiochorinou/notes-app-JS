/* eslint-disable require-jsdoc */
const NotesModel = require('./notesModel');

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.button = document.querySelector('#note-button');

    document.querySelector('#note-button').addEventListener('click', () => {
      const userNote = document.querySelector('#note-input').value;
      this.addNewNote(userNote);
      document.querySelector('#note-input').value = "";
    });
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach((element) => {
      element.remove();
    });
    const notes = this.model.getNotes();

    // For each note, create and append a new element on the main container
    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }

  addNewNote(note) {
    this.model.addNote(note);
    this.displayNotes();
  }
}

module.exports = NotesView;
