import axios from "axios";
import Comments from "../containers/Comments";
import './PostDetails.css'

const PostDetails = (props) => {
    const handleDelete = (id) => {
        axios.delete('http://localhost:8080/api/v1/posts/' + id).then(res => {
            props.changeFetchFlag();
        }).catch(error => {
            console.error(error);
        })
    }
    return ( 
        <div className="PostDetails">
            <p> Posted by: {props.id}</p>

            <Comments id={props.id}></Comments>
            <button
                    onClick={() => {handleDelete(props.id)}}> 
                    Delete post
            </button>
        </div>
     );
}
 
export default PostDetails;