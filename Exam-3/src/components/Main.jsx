import { FaUser } from "react-icons/fa";

export default function Main({theme, username}){
    return (
        <div className={`${theme === 'bg-[#141c2f] text-white' ? 'bg-[#1f2a48]' : 'bg-[#fefefe]'} w-[100vh] rounded-[12px] flex justify-center items-start gap-[50px] py-[20px]`}>
            <div className={`${theme === 'bg-[#141c2f] text-white' ? 'border-white' : 'border-black'} border-2 rounded-[50%] p-[20px] flex justify-center items-center text-[70px]`}>
                <FaUser />
            </div>
            <div className="w-[75vh]">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[32px]">{username}</p>
                        <p className="text-[#224e8e] font-[700]">{username}</p>
                    </div>
                    <p className={`${theme === 'bg-[#141c2f] text-white' ? 'text-[#c8d2e9]' : 'text-[#7d828d]'} font-[500]`}>Joined 25 Jan 2011</p>
                </div>
                <p className="text-[#8790a3] font-[500] mt-[30px]">This profile has no bio</p>
                <div className={`${theme === 'bg-[#141c2f] text-white' ? 'bg-[#141c2f]' : 'bg-[#e2e5ec]'} flex justify-between px-[20px] py-[15px] rounded-[12px] mt-[30px]`}>
                    <div className="flex flex-col">
                        <p className="text-[#8790a3]">Repos</p> 
                        <b className="text-[25px]">8</b>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#8790a3]">Followers</p> 
                        <b className="text-[25px]">3938</b>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#8790a3]">Following</p> 
                        <b className="text-[25px]">9</b>
                    </div>
                </div>
                <div className="grid grid-rows-2 grid-cols-2 gap-[20px] mt-[40px]">
                    <div className="flex gap-[15px]">
                        <img src="./src/assets/icon-location.svg"/>   
                        <p className="text-[#8790a3] text-[18px]">San Francisco</p>
                    </div>
                    <div className="flex gap-[15px]">
                        <img src="./src/assets/icon-twitter.svg"/>
                        <p className="text-[#8790a3] text-[18px]">Not Avaliable</p>
                    </div>
                    <div className="flex gap-[15px]">
                        <img src="./src/assets/icon-website.svg"/>
                        <p className="text-[#8790a3] text-[18px]">https://github.blog</p>
                    </div>
                    <div className="flex gap-[15px]">
                        <img src="./src/assets/icon-company.svg"/>
                        <p className="text-[#8790a3] text-[18px]">github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}