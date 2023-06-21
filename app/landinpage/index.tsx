import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"


export default function Landinpage() {
  return (

    <>
      <Header />
      <div className='bg-gradient-to-r from-gray-800 to-gray-850 h-0.5'></div>
      <Navbar />
      <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-0.5'>
      </div>
      <main>
        <section id='Home' className='h-screen ' >
          <div  >
            <div >
              <h1 className='text-red-600 text-center '>Aqui temos os melhores chocolates da cidade.</h1>
              <p> </p>
            </div>
            <div>

            </div>
          </div>

        </section>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-0.5'>
        </div>
        <section id='Pedido' className='h-screen bg-slate-300'>
          <div>
            <h2 className='text-center'>Realize aqui o seu pedido:</h2>
            <form>

            </form>
          </div>

        </section>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-0.5'>
        </div>
        <section id='Contato' className='h-screen bg-pink-300'>
          <div>
            <h2 className='text-center'>Entre em contato conosco através:</h2>
            <div>

            </div>
          </div>

        </section>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-0.5'>
        </div>
      </main>
      <Footer />

    </>


  )
}