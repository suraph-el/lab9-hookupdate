import React, { useContext } from 'react';
import "./Post.css";
import { PostContext } from '../context/PostContext';

const Post = (props) => {
    const {setSelectedPostIdState} = useContext(PostContext);
    return ( 
        <div className="Post" key={props.id} onClick={() => setSelectedPostIdState(props.id)}>
             <span>Id: </span>{props.id} <br/>
             <span>Title: </span>{props.title} <br/>
             <span>Author: </span>{props.author} <br/>
         </div>
     );
}
 
export default Post;