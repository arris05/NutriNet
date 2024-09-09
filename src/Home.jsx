import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'

function Home() {
    return (
        <>
            <header>
                <h1 className="text-4xl font-['Dosis'] text-light-green uppercase tracking-[.7rem] font-medium text-center pt-[2.5rem]">
                    nutrinet
                </h1>
                <input className="bg-light-green text-white p-1 pl-6 mt-10 ml-8 rounded-3xl placeholder:text-white font-poppins text-xl tracking-[.1rem] focus:outline-none w-[70%]" type="text" placeholder="Keresés..." />
                <button className="bg-light-green text-white p-1.5 pl-2.5 pr-2.5 mt-10 ml-3 rounded-3xl focus:outline-none">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <p className='text-light-gray font-poppins pt-10 text-xl text-center'>
                    Üdvözöllek a NutriNet oldalán!
                </p>
                <p className='text-white bg-light-gray mt-10 ml-6 mr-6 text-center text-lg p-2 font-poppins rounded-3xl'>
                    Tájékozódj élelmiszerek kalória tartalmáról!
                </p>
            </header>
            <div className='bg-light-green mt-14'>
                <p className='text-white font-poppins text-lg pt-7 pl-7'>Válassz kategóriát:</p>
                <Card name={Gyümölcsök} />
            </div>
        </>
    )
}

export default Home