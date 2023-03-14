import "./CommentComponent.scss";

export function CommentComponent ({comment}) {
    return(
        <div className="comment_container" style={comment.style}>
            <div className="comment_header">
                <div>{comment.title}</div> 
                <div className="comment_icon">{comment.icon}</div>
            </div>
           <div className="comment_text">{comment.content}</div>
        </div>
    )
}