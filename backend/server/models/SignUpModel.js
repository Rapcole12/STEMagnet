import mongoose from "mongoose";

const Schema = mongoose.Schema;
const signupSchema = new Schema({
  FirstName: {
    type: String,
    require: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  TypeOfUser: {
    type: String,
    required: true
  },
});

export const signupUser = mongoose.model("Users", signupSchema);
//When actually running the website, make it postBlog
