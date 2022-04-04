/* eslint-disable require-jsdoc */
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');

class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.button = document.querySelector('#note-button');

    document.querySelector('#note-button').addEventListener('click', () => {
      const userNote = document.querySelector('#note-input').value;
      // this.addNewNote(userNote);
      // document.querySelector('#note-input').value = "";
      if (userNote) {
        this.api.createNote(userNote, (res) => {
          this.model.setNotes(res);
          this.displayNotes();
          document.querySelector('#note-input').value = '';
        });
      }
    });

    document.querySelector('#reset-button').addEventListener('click', () => {
      this.api.resetNotes();
      this.model.reset();
      this.displayNotes();
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

  // addNewNote(note) {
  //   this.model.addNote(note);
  //   this.displayNotes();
  // }

  displayError() {
    const errorEl = document.createElement('p');
    errorEl.innerText = 'Oops, something went wrong!';
    errorEl.className = 'error';
    this.mainContainerEl.append(errorEl);
  }
}

module.exports = NotesView;
