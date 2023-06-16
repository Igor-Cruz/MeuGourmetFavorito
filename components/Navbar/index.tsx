export default function Navbar() {
  return (
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
  )
}