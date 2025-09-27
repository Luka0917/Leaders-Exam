import { useState } from "react"
import { Link } from 'react-router'

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <>
      <img src={`../src/assets/pattern-background-desktop-${theme === 'dark' ? 'dark' : 'light'}.svg`} className="w-[100%] h-screen absolute pointer-events-none"/>
      <div className={`${theme === 'dark' ? 'bg-[#313e51]' : 'bg-[#F4F9F9]'} flex justify-center items-center flex-col h-screen`}>
        {/* Switch-ის ფუნქცია მე ვერ დავწერე და ესე გავაკეთე dark და light mode-ი */}
        <div className="flex justify-end items-center w-[100%] px-[300px] z-1 absolute top-[100px] gap-[25px]">
          <button onClick={() => setTheme('light')} className={`${theme === 'light' && 'bg-[#3c4d67] hover:bg-[#3d5983]'} p-[7px] rounded-[50%] cursor-pointer transition duration-200`}>
            <img src='../src/assets/icon-sun-light.svg' className="pointer-events-none w-[30px] h-[30px]"/>
          </button>
          <button onClick={() => setTheme('dark')} className={`${theme === 'dark' && 'bg-[#3c4d67] hover:bg-[#3d5983]'} p-[7px] rounded-[50%] cursor-pointer transition duration-200`}>
            <img src={`../src/assets/icon-moon-${theme === 'dark' ? 'light' : 'dark'}.svg`} className="pointer-events-none w-[30px] h-[30px]"/>
          </button>
        </div>
        <div className="flex justify-between items-start w-[100%] z-1 px-[300px]">
          <div className="flex justify-center items-start flex-col gap-[30px] w-[408px]">
            <p className={`${theme === 'dark' ? 'text-[#fffffd]' : 'text-[#2d3949]'} text-[60px] font-[300]`}>Welcome to the <b className="font-[600]">Frontend Quiz!</b></p>
            <i className={`${theme === 'dark' ? 'text-[#b4c0d4]' : 'text-[#878e99]'} text-[20px] font-[300]`}>Pick a subject to get started.</i>
          </div>
          <div className="flex justify-center items-center flex-col gap-[20px]">
            <Link to={'/HTML'} className={`${theme === 'dark' ? 'bg-[#3c4d67]' : 'bg-[#B6BBC4]'} flex justify-start items-center gap-[20px] py-[11px] pl-[12px] rounded-[12px] w-[430px] cursor-pointer`}>
              <div className="flex justify-center items-center p-[8px] bg-[#ffeee1] rounded-[10px]">
                <img src="../src/assets/icon-html.svg" alt="" className="pointer-events-none" />
              </div>
              <p className={`${theme === 'dark' ? 'text-[#feffff]' : 'text-[#2d3949]'} text-[20px] font-[500]`}>HTML</p>
            </Link>
            <button className={`${theme === 'dark' ? 'bg-[#3c4d67]' : 'bg-[#B6BBC4]'} flex justify-start items-center gap-[20px] py-[11px] pl-[12px] rounded-[12px] w-[430px] cursor-pointer`}>
              <div className="flex justify-center items-center p-[8px] bg-[#e1fdef] rounded-[10px]">
                <img src="../src/assets/icon-css.svg" className="pointer-events-none"/>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#feffff]' : 'text-[#2d3949]'} text-[20px] font-[500]`}>CSS</p>
            </button>
            <button className={`${theme === 'dark' ? 'bg-[#3c4d67]' : 'bg-[#B6BBC4]'} flex justify-start items-center gap-[20px] py-[11px] pl-[12px] rounded-[12px] w-[430px] cursor-pointer`}>
              <div className="flex justify-center items-center p-[8px] bg-[#edeeff] rounded-[10px]">
                <img src="../src/assets/icon-js.svg" className="pointer-events-none"/>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#feffff]' : 'text-[#2d3949]'} text-[20px] font-[500]`}>JavaScript</p>
            </button>
            <button className={`${theme === 'dark' ? 'bg-[#3c4d67]' : 'bg-[#B6BBC4]'} flex justify-start items-center gap-[20px] py-[11px] pl-[12px] rounded-[12px] w-[430px] cursor-pointer`}>
              <div className="flex justify-center items-center p-[8px] bg-[#edeeff] rounded-[10px]">
                <img src="../src/assets/icon-accessibility.svg" className="pointer-events-none"/>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#feffff]' : 'text-[#2d3949]'} text-[20px] font-[500]`}>Accessibility</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App