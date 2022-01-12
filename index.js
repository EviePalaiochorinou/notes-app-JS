/* eslint-disable max-len */
// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

console.log('The notes app is running!');

const newNote = new NotesModel;
console.log(newNote.getNotes());
newNote.addNote('This is an example note');

const newView = new NotesView(newNote);
newView.displayNotes();


