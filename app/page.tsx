import React from 'react'
import reat from 'react'

const Index = () => {
  return (
    <body>
      <header className="bg-pink-300 text-center p-4">
        <h1 className='text-gray-200'>Meu <span className='text-pink-600'>Gourmet</span> Favorito</h1>
      </header>
      <nav>
        <ul className='bg-slate-300'>
          <li>
            <a href="#Home" >Home</a>
          </li>

          <li>
            <a href="#Pedido">Pedido</a>
          </li>

          <li>
            <a href="#Contato">Contato</a>
          </li>

          <li>
            <a href="login.tsx" target="_blank">Login</a>
          </li>

        </ul>
      </nav>
      <main>
        <section id='Home' className='h-screen bg-pink-300' >
          <div  >
            <div >
              <h1 className='text-red-600'>Aqui temos os melhores chocolates da cidade.</h1>
              <p> </p>
            </div>
            <div>

            </div>
          </div>

        </section>
        <section id='Pedido' className='h-screen bg-slate-300'>
          <div>
            <h2>Realize aqui o seu pedido:</h2>
            <form>

            </form>
          </div>

        </section>
        <section id='Contato' className='h-screen bg-pink-300'>
          <div>
            <h2>Entre em contato conosco através:</h2>
            <div>

            </div>
          </div>

        </section>
      </main>
      <footer className=' bg-slate-300 p-4 text-center text-red-600'>
        <div>
          <h1><a href='https://www.linkedin.com/in/igor-cruz-ti/' target="_blank">Desenvolvido no curso DevPleno por:Igor Cruz</a> </h1>
        </div>
      </footer>
    </body >
  )
}

export default Index