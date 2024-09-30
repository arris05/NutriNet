import Apple from "../assets/apple.png"
import Banana from "../assets/banana.png"
import Kiwi from "../assets/kiwi.jpg"
import Cherry from "../assets/cherry.jpg"

function ProductCard () {
    return (
        <>
            <div className="flex flex-row">
                <div className="w-[12rem] h-[15rem] ml-[10rem] my-[10rem] border-2 rounded-xl hover:cursor-pointer">
                    <img className="p-4" src={Apple} alt="" />
                    <h1 className="text-black text-center text-2xl">Alma</h1>
                </div>
                <div className="w-[12rem] h-[15rem] ml-[10rem] my-[10rem] border-2 rounded-xl hover:cursor-pointer">
                    <img className="p-4" src={Banana} alt="" />
                    <h1 className="text-black text-center text-2xl">Banán</h1>
                </div>
                <div className="w-[12rem] h-[15rem] ml-[10rem] my-[10rem] border-2 rounded-xl hover:cursor-pointer">
                    <img className="p-4" src={Kiwi} alt="" />
                    <h1 className="text-black text-center text-2xl">Kiwi</h1>
                </div>
                <div className="w-[12rem] h-[15rem] ml-[10rem] my-[10rem] border-2 rounded-xl hover:cursor-pointer">
                    <img className="p-4" src={Cherry} alt="" />
                    <h1 className="text-black text-center text-2xl">Cseresznye</h1>
                </div>
            </div>
        </>
    )
}

export default ProductCard