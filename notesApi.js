/* eslint-disable require-jsdoc */
class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
        .then((data) => data.json())
        .then((data) => {
          callback(data);
        });
  }

  createNote(note, callback) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'content': note}),
    }).then((res) => res.json()).then((data) => callback(data));
  }

  resetNotes() {
    fetch("http://localhost:3000/notes", {
      method: "DELETE",
    });
  }
}

module.exports = NotesApi;
