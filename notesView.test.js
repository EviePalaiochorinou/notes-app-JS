const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('Notes view', () => {
  it('displays 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesView = new NotesView();
    const notes = new NotesModel();
    notes.addNote('Buy milk', 'Go to the gym');
    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  });
});
