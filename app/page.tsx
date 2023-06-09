import React from 'react'
import reat from 'react'

const Index = () => {
  return (
    <body>
      <header className="cabeçalho">
        <section className="logo">
          <img src="" alt="logo do Meu Gourmet Favorito"></img>
        </section>
        <section>
          <h1 className='text-red-600'>Meu Gourmet Favorito</h1>
        </section>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>

          <li>
            <a href="#Pedido">Pedido</a>
          </li>

          <li>
            <a href="#Contato">Contato</a>
          </li>

          <li>
            <a href="#Login" target="_blank">Login</a>
          </li>

        </ul>
      </nav>
      <main>
        <section id='Home' >
          <div className='h-full bg-slate-300'>
            <div>
              <h1>Aqui temos os melhores chocolates da cidade.</h1>
              <p> </p>
            </div>
            <div>

            </div>
          </div>

        </section>
        <section id='Pedido' className='w-full'>
          <div>
            <h2>Realize aqui o seu pedido:</h2>
            <form>

            </form>
          </div>

        </section>
        <section id='Contato' className='w-full'>
          <div>
            <h2>Entre em contato conosco através:</h2>
            <div>

            </div>
          </div>

        </section>
      </main>
      <footer>

      </footer>
    </body>
  )
}

export default Index