import React from 'react'
import Comment from './Comment'


const CommentsList = ({ comments }) => {
  if (!comments || comments.length === 0) return null

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />

          {comment.replies && comment.replies.length > 0 && (
            <div className="pl-5 ml-5 border-l-2 border-gray-300">
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CommentsList