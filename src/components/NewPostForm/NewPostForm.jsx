import React, { useState } from "react";
import TextField from "../TextField/TextField";

const NewPostForm = ({ onNewPost }) => {
  const [userName, setUserName] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userName,
      postContent,
    };
    onNewPost(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <TextField label="UserName" value={userName} onChange={setUserName} />
      <TextField
        label="PostContent"
        value={postContent}
        onChange={setPostContent}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default NewPostForm;

/* import React, { useState } from 'react';
import TextField from '../TextField/TextField';

const NewMovieForm = ({onNewMovie}) => {
    const [title, setTitle] = useState('');
    const [runningTime, setRunningTime] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title,
            runningTime,
            genre
        };

        onNewMovie(formData)
    }



    return ( <form onSubmit={handleSubmit} className="flex-item">
        <h4>Add Movie</h4>
        <TextField label='Title' value={title} onChange={setTitle} />
        <TextField label='RunningTime' value={runningTime} onChange={setRunningTime} />
        <TextField label='Genre' value={genre} onChange={setGenre} />
        <button type='submit'>Add Movie</button>
    </form> );
}
 
export default NewMovieForm; */
