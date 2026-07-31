import React from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
import commentsData from '../utlis/commentsData'

function CommentsContainer() {
  return (
    <div className="m-5 p-3 max-w-full">
      <h1 className="text-2xl font-bold mb-4">Comments:</h1>
      <AddComment />
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer