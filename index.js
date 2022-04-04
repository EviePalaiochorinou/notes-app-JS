/* eslint-disable max-len */

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesApi = require('./notesApi');

console.log('The notes app is running!');

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
}, () => {
  view.displayError();
});
