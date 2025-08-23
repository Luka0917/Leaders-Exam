import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main";

function App() {
  const [theme, setTheme] = useState('bg-[#141c2f] text-white');
  const [username, setUsername] = useState('No Info');

  return (
    <>
      <div className={`${theme} h-screen flex justify-center items-center flex-col gap-[20px]`}>
        <Header theme={theme} setTheme={setTheme} setUsername={setUsername}/>
        <Main theme={theme} username={username}/>
      </div>
    </>
  )
}
export default App