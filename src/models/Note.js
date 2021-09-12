const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    author: { type: String },
    date: Date,
  },
  {
    timestamps: true,
  }
);

//Se crea la coleccion Note
module.exports = model("Note", noteSchema);
