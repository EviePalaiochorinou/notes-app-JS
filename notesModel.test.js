const NotesModel = require('./notesModel');

describe('notesModel class', () => {
  it('starts with no notes', () => {
    const notes = new NotesModel();
    expect(notes.getNotes()).toEqual([]);
  });

  it('adds new note in the array', () => {
    const notes = new NotesModel();
    notes.addNote('Buy milk');
    expect(notes.notes).toEqual(['Buy milk']);
  });

  it('gets all notes from a note array', () => {
    const notes = new NotesModel();
    notes.addNote('Buy milk');
    notes.addNote('Go to the gym');
    expect(notes.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('resets the list of notes', () => {
    const notes = new NotesModel();
    notes.addNote('Buy milk');
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  });
});
