(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
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
        setNotes(notes) {
          this.notes = notes;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((data) => data.json()).then((data) => {
            callback(data);
          });
        }
        createNote(note, callback) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ "content": note })
          }).then((res) => res.json()).then((data) => callback(data));
        }
        resetNotes() {
          fetch("http://localhost:3000/notes", {
            method: "DELETE"
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesApi2 = require_notesApi();
      var NotesView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.button = document.querySelector("#note-button");
          document.querySelector("#note-button").addEventListener("click", () => {
            const userNote = document.querySelector("#note-input").value;
            if (userNote) {
              this.api.createNote(userNote, (res) => {
                this.model.setNotes(res);
                this.displayNotes();
                document.querySelector("#note-input").value = "";
              });
            }
          });
          document.querySelector("#reset-button").addEventListener("click", () => {
            this.api.resetNotes();
            this.model.reset();
            this.displayNotes();
          });
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
        displayError() {
          const errorEl = document.createElement("p");
          errorEl.innerText = "Oops, something went wrong!";
          errorEl.className = "error";
          this.mainContainerEl.append(errorEl);
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  console.log("The notes app is running!");
  var api = new NotesApi();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  }, () => {
    view.displayError();
  });
})();
