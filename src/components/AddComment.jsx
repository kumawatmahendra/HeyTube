import {useState} from 'react'

const AddComment = () => {
  const [commentText, setCommentText] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleCancel = () => {
    setCommentText("")
    setIsFocused(false)
  }

  const handleComment = () => {
    if (commentText.trim() === "") return
    console.log("Comment added:", commentText)
    setCommentText("")
    setIsFocused(false)
  }

  return (
    <div className="flex gap-3 mb-6">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src="https://i.pinimg.com/236x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg"
        alt="You"
      />

      <div className="flex-1">
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className={`w-full bg-transparent outline-none border-b ${isFocused ? "border-black" : "border-gray-300"
            } pb-1 text-sm transition-colors duration-200`}
        />
        {isFocused && (
          <div className="flex justify-between items-center mt-3">
            <button className="text-xl hover:bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center transition">
              😊
            </button>

            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200 rounded-full transition"
              >
                Cancel
              </button>

              <button
                onClick={handleComment}
                disabled={commentText.trim() === ""}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${commentText.trim() === ""
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
              >
                Comment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddComment