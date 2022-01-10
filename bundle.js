/* eslint-disable max-len */
(() => {
  const __getOwnPropNames = Object.getOwnPropertyNames;
  const __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };

  // notesModel.js
  const require_notesModel = __commonJS({
    'notesModel.js'(exports, module) {
      const NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    },
  });

  // index.js
  console.log('The notes app is running!');
  newNote = new NotesModel();
  console.log(newNote.getNotes());
  var NotesModel = require_notesModel();
})();
