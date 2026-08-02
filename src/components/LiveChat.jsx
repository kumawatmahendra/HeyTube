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
    }, 1000)
    return () => clearInterval(i)
  }, []);


  return (
    <>
      <div
        className='w-full p-2 border border-black h-[300px] md:h-[400px] lg:h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
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
          if (liveMassage.trim() === "") return
          dispatch(
            addMassage({
              name: "Mahendra",
              massage: liveMassage
            })
          )
          setLiveMassage("")
        }}
      >
        <input
          className='w-full sm:w-[200px] md:w-[250px] border border-black px-2 py-1 rounded'
          type="text"
          value={liveMassage}
          onChange={(e) => {
            setLiveMassage(e.target.value)
          }}
        />
        <button className='px-2 mx-2 border bg-slate-100 border-black hover:bg-red-300 text-black cursor-pointer rounded-lg'>Chat</button>
      </form>
    </>

  )
}

export default LiveChat

