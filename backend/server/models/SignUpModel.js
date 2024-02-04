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
  Gender: {
    type: String,
    require: false,
  },
  Age: {
    type: String,
    required: false,
  },
  Major: {
    type: String,
    required: false,
  },
  Experience: {
    type: String,
    required: false,
  },
  Quote: {
    type: String, 
    required: false
  },
  AboutMe: {
    type: String, 
    required: false
  },
  MentorPreference: {
    type: String, 
    required: false
  }
});

export const signupUser = mongoose.model("Users", signupSchema);
//When actually running the website, make it postBlog
