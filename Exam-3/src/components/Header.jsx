export default function Header({theme, setTheme, setUsername}){

    function handleForm(formData){
        const username = formData.get('username');
        setUsername(username);
        console.log(username)
    }

    return (
        <div className="flex justify-center items-center flex-col w-[100vh] gap-[40px]">
            <div className="flex justify-between items-center w-[100%]">
                <p className="text-[20px] font-[500]">devfinder</p>
                <button onClick={() => setTheme(prev => prev === 'bg-[#141c2f] text-white' ? 'bg-[#f5f8ff] text-black' : 'bg-[#141c2f] text-white')} className="flex justify-center items-center gap-[10px] font-[500] cursor-pointer">
                    {theme === 'bg-[#141c2f] text-white' ? (<>L I G H T <img src="./src/assets/icon-sun.svg"/></>) : (<>D A R K <img src="./src/assets/icon-moon.svg"/></>)}
                </button>
            </div>
            <div className={`${theme === 'bg-[#141c2f] text-white' ? 'bg-[#1f2a48]' : 'bg-[#fefefe]'} flex justify-center items-center w-[100%] py-[12px] rounded-[12px]`}>
                <img src="./src/assets/icon-search.svg"/>
                <form action={handleForm} className="flex justify-center items-center">
                    <input type="text" name="username" placeholder="Search GitHub username..." className={`${theme === 'bg-[#141c2f] text-white' ? 'placeholder-white' : 'placeholder-black'} placeholder:text-[20px] placeholder:font-[300] w-[82vh] ml-[20px] py-[12px} text-[20px] font-[300]`}/>
                    <button className="bg-[#007aff] text-white px-[20px] py-[10px] rounded-[7px]">Search</button>
                </form>
            </div>
        </div>
    )
}