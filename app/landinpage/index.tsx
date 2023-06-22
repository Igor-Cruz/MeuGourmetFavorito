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
        <section id='Home' className='h-screen bg-pink-300' >
          <div  >
            <div >
              <h1 className='text-slate-800 text-center '>Aqui temos os melhores chocolates da cidade.</h1>
              <p> </p>
            </div>
            <div>

            </div>
          </div>

        </section>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-0.5'>
        </div>
        <section id='Pedido' className='h-screen bg-pink-400'>
          <div>
            <h2 className='text-center text-slate-800'>Realize aqui o seu pedido:</h2>
            <form>

            </form>
          </div>

        </section>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 h-0.5'>
        </div>
        <section id='Contato' className='h-screen bg-pink-500'>
          <div>
            <h2 className='text-center text-slate-800'>Entre em contato conosco através:</h2>
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