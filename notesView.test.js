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

  it('user adds new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notes = new NotesModel();
    const notesView = new NotesView(notes);
    const input = document.querySelector('#note-input');
    input.value = 'New user note';
    const button = document.querySelector('#note-button');
    button.click();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('New user note');
  });

  it('verifies the correct number of notes is displayed', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('one');
    model.addNote('two');

    view.displayNotes();
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
