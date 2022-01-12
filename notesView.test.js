/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('Notes view', () => {
  it('displays 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notes = new NotesModel();
    notes.addNote('Buy milk');
    notes.addNote('Go to the gym');
    const notesView = new NotesView(notes);
    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
