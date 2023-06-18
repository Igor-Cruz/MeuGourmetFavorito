import Link from "next/link"

export default function Navbar() {
  return (
    <nav >
      <ul className='bg-slate-300 '>

        <li >
          <Link href='#Home'>Home</Link>
        </li>

        <li >
          <Link href='#Pedido'>Pedido</Link>
        </li>

        <li>
          <Link href='#Contato'>Contato</Link>
        </li>

        <li >
          <a href="login.tsx" target="_blank">Login</a>
        </li>

      </ul>
    </nav>
  )
}