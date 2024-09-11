import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
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
                <h1 className="text-4xl font-['Dosis'] text-light-green uppercase tracking-[.7rem] font-medium text-center pt-[2.5rem]">
                    nutrinet
                </h1>
                <input className="bg-light-green text-white p-1 pl-6 mt-10 ml-8 rounded-3xl placeholder:text-white/60 font-poppins text-xl tracking-[.1rem] focus:outline-none w-[70%]" type="text" placeholder="Keresés..." />
                <button className="bg-light-green text-white p-1.5 pl-2.5 pr-2.5 mt-10 ml-3 rounded-3xl focus:outline-none hover:bg-light-green/40 transition duration-250 ease-out hover:ease-in cursor-pointer">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <p className='text-light-gray font-poppins pt-10 text-xl text-center'>
                    Üdvözöllek a NutriNet oldalán!
                </p>
                <p className='text-white bg-light-gray mt-10 ml-6 mr-6 text-center text-lg p-2 font-poppins rounded-3xl'>
                    Tájékozódj élelmiszerek kalória tartalmáról!
                </p>
            </header>
            <div className='bg-light-green mt-14 h-[138rem]'>
                <p className='text-white font-poppins text-lg pt-7 pl-7'>
                    Válassz kategóriát:
                </p>
                <Card name={"Gyümölcsök"} src={Fruits} />
                <Card name={"Zöldségek"} src={Vegetables} />
                <Card name={"Húsfélék"} src={Meats} />
                <Card name={"Tejtermékek"} src={Dairies} />
                <Card name={"Pékáruk"} src={Bakeries} />
                <Card name={"Magvak"} src={Seeds} />
                <Card name={"Édességek"} src={Sweets} />
                <Card name={"Italok"} src={Drinks} />
            </div>
            <footer>
                <div className='bg-medium-gray mt-[8rem]'>
                    <FontAwesomeIcon icon={faAngleUp} className="text-medium-gray float-right text-3xl w-8 h-8 mr-8 mt-16 bg-white p-3 rounded-full hover:bg-light-gray hover:text-white" onClick={scrollToTop}/>
                    <h1 className="text-4xl font-['Dosis'] text-white uppercase tracking-[.7rem] font-medium pt-[2.5rem] pl-[2.2rem] pb-[2.2rem]">
                        nutrinet
                    </h1>
                    <p className="text-white font-poppins text-lg pl-[2.2rem] pb-[2.2rem]">
                        Élelmiszer adatbázis
                    </p>
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