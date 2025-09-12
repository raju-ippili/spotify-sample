import Logo from "./assets/logo.png"
export default function Header(){
return(
    <div className="bg-gray-950 px-3 py-3">
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="h-6 w-6"/>
            <h1 className="text-white text-[25px] font-bold ">Spotify</h1>
        </div>
        </div>
    </div>
)
}