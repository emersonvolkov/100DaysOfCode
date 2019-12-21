const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body to save",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title to remove",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a file of notes and print it",
  handler: function() {
    console.log(notes.getNotes());
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function() {
    console.log("List all notes");
  }
});

// add, remove, read, list

yargs.parse();
// console.log(yargs.argv);
