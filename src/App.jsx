import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import $confirm from './components/CustomConfirm'
const App = () => {

  const [confirm, setIsConfirm] = useState('')
  const handleClick = async () => {
    const result = await $confirm({ title: 'Confirmation', message: 'Are you sure ?', buttonText: 'Confirm' })
    console.log("result", result)
    setIsConfirm(result == true ? 'Yes' : 'No')

  }

  return (
    <>

      <div className="flex items-center justify-center h-screen">

        {confirm && <>{confirm}</>} <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" > Confirm</button>
      </div>
    </>
  )
}
export default App
