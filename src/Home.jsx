import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Card from './components/Card'
import Fruits from './assets/fruits.png'
import Vegetables from './assets/vegetables.png'
import Meats from './assets/meats.png'
import Dairies from './assets/dairies.png'
import Bakeries from './assets/bakeries.png'
import Seeds from './assets/seeds.png'
import Sweets from './assets/sweets.png'
import Drinks from './assets/drinks.png'

function Home() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <header>
                <h1 className="text-4xl font-['Dosis'] text-light-green uppercase tracking-[.7rem] font-medium text-center pt-[2.5rem] sm:text-left sm:ml-[15rem] 2xl:float-left 2xl:ml-[20rem] 2xl:text-[4rem]">
                    nutrinet
                </h1>
                <input className="bg-light-green text-white p-1 pl-6 mt-10 ml-8 rounded-3xl placeholder:text-white/60 font-poppins text-xl tracking-[.1rem] focus:outline-none w-[70%] sm:w-[16rem] sm:ml-[12rem] 2xl:w-[16rem] 2xl:mt-[2.5rem] 2xl:ml-[10rem]" type="text" placeholder="Keresés..." />
                <button className="bg-light-green text-white p-1.5 pl-2.5 pr-2.5 mt-10 ml-3 rounded-3xl focus:outline-none hover:bg-light-green/40 transition duration-300 ease-out hover:ease-in cursor-pointer">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <p className='text-light-gray font-poppins pt-10 text-xl text-center sm:text-left sm:ml-[12rem] 2xl:text-left 2xl:ml-[19rem] 2xl:text-2xl'>
                    Üdvözöllek a NutriNet oldalán!
                </p>
                <p className='text-white bg-light-gray mt-10 ml-6 mr-6 text-center text-lg p-2 font-poppins rounded-3xl sm:text-left sm:ml-[8rem] sm:w-[26rem] 2xl:text-left 2xl:w-[26.7rem] 2xl:pl-4 2xl:ml-[17rem]'>
                    Tájékozódj élelmiszerek kalória tartalmáról!
                </p>
            </header>
            <div className='bg-light-green mt-14 pb-[8rem]'>
                <p className='text-white font-poppins text-lg pt-7 pl-7 2xl:text-xl'>
                    Válassz kategóriát:
                </p>
                <div className='flex flex-wrap justify-center gap-[10rem] sm:px-[10rem]'>
                    <Card name={"Gyümölcsök"} src={Fruits} />
                    <Card name={"Zöldségek"} src={Vegetables} />
                    <Card name={"Húsfélék"} src={Meats} />
                    <Card name={"Tejtermékek"} src={Dairies} />
                    <Card name={"Pékáruk"} src={Bakeries} />
                    <Card name={"Magvak"} src={Seeds} />
                    <Card name={"Édességek"} src={Sweets} />
                    <Card name={"Italok"} src={Drinks} />
                </div>
            </div>
            <footer>
                <div className='bg-medium-gray mt-[8rem]'>
                    <FontAwesomeIcon icon={faAngleUp} className="text-medium-gray float-right text-3xl w-8 h-8 mr-8 mt-8 bg-white p-3 rounded-full hover:bg-light-gray hover:text-white transition duration-300 ease-out hover:ease-in cursor-pointer 2xl:mr-[16rem]" onClick={scrollToTop}/>
                    <h1 className="text-4xl font-['Dosis'] text-white uppercase tracking-[.7rem] font-medium pt-[2.5rem] pl-[2.2rem] pb-[2.2rem] 2xl:text-[4rem] 2xl:pl-[16rem] 2xl:pt-[2.5rem] ">
                        nutrinet
                    </h1>
                </div>
                <div className='bg-dark-gray'>
                    <p className='text-white text-center text-xs font-poppins p-2'>
                        Copiright &copy; NutriNet 2024  -  Minden jog fenntartva   
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Home