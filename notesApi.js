/* eslint-disable require-jsdoc */
class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
        .then((data) => data.json())
        .then((data) => {
          callback(data);
        });
  }
}

module.exports = NotesApi;
