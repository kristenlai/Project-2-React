import '../App.css';
import React, { useState, useRef, useEffect } from 'react';
import Onecomment from './onecomment';

function comments() {
  const [comment, setComment] = useState({
    name: "",
    content: ""
  });
  const [commentList, setCommentList] = useState([]);
  const addComment = (e) => {
    e.preventDefault();
    setCommentList((prev) => [...prev, comment]);
    setComment({
        name: "",
        content: ""
    });
  };
  const textBoxRef = useRef();
  const focusOnCommentBox = () => {
    textBoxRef.current.focus();
  };
  useEffect(() => {
    focusOnCommentBox();
  }, []);


  return (
      <div>
        <h2>Comments</h2>
        <form className="form" onSubmit={addComment}>
          <input 
          value={comment.name}
          onChange={(e) => setComment({...comment, name: e.target.value})}
          placeholder="Name"
          ></input>
          <textarea 
          value={comment.content}
          onChange={(e) => setComment({...comment, content: e.target.value})}
          ref={textBoxRef}
          id="comments" 
          cols="50" rows="3" 
          placeholder="Add a Comment"
          ></textarea>
          <button 
          type="submit"
          >Submit</button>
        </form>
        <h3>Existing Comments:</h3>
        <ul>
          {commentList.map((value, index) => (
            <Onecomment key={index} value={value} />
          ))}
        </ul>
      </div>
  )
}

export default comments;
