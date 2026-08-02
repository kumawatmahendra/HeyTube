import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMassage } from '../utlis/chatSlice';
import ChatMessage from './ChatMessage'
import { generateRandomMassage, generateRandomName } from '../utlis/helper';


function LiveChat() {
  const [liveMassage, setLiveMassage] = useState("")

  const dispatch = useDispatch()
  const chatMassages = useSelector((store) => store.chat?.massage) || []

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMassage({
          name: generateRandomName(),
          massage: generateRandomMassage()
        })
      );
    }, 800)
    return () => clearInterval(i)
  }, []);


  return (
    <>
      <div
        className='w-full ml-2 p-2 border border-black  h-[600px] bg-slate-100 rounded-lg overflow-y-hidden overflow-y-scroll flex flex-col-reverse'>
        <div >
          {
            chatMassages.map((e, index) => (
              <ChatMessage key={index} name={e.name} massage={e.massage} />
            ))
          }
        </div>
      </div>
      <form
        className=' w-full p-2 ml-2 border border-black'
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(
            addMassage({
              name: "Mahendra",
              massage: liveMassage
            })
          )
        }}
      >
        <input
          className='w-[300px] border border-black'
          type="text"
          value={liveMassage}
          onChange={(e) => {
            setLiveMassage(e.target.value)
          }}
        />
        <button className='px-2 mx-2 border border-black bg-green-300 rounded-lg'>Send</button>
      </form>
    </>

  )
}

export default LiveChat