import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import NewPostForm from "./components/NewPostForm/NewPostForm";
import Post from "./components/Post/Post";
import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <Header />
      <div>
        <NewPostForm onNewPost={handleNewPost} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;

/* import './App.css';
import Header from './components/Header/Header'
import MovieList from './components/MovieList/MovieList';
import MovieInfo from './components/MovieInfo/MovieInfo';
import NewMovieForm from './components/NewMovieForm/NewMovieForm';
import React, { useState, useEffect } from 'react';
import initData from './data/data';


function App() {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    setMovies(initData)
  }, []);

  const handleNewMovie = (newMovie) => {
    const updatedMovies= [...movies, newMovie]
    setMovies(updatedMovies)
    }

  const selectedMovie = movies[activeIndex]
    
  
  return (
    <div className="App">
      <Header/>
      <div className="flex-container">
        <MovieList movies={movies} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
        <MovieInfo movieObj={selectedMovie}/>
        <NewMovieForm onNewMovie={handleNewMovie}/>
      </div>
    </div>
  );
}

export default App;
 */
