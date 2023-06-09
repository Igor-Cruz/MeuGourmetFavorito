import Link from "next/link"

export default function Navbar() {
  return (
    <nav className='bg-gray-300 text-slate-800'>
      <ul className=" p-4 text-end">

        <li className="hover:text-pink-700  list-none inline px-2">
          <Link href='#Home'>Home</Link>
        </li>

        <li className="hover:text-pink-700  list-none inline  px-2">
          <Link href='#Pedido'>Pedido</Link>
        </li>

        <li className="hover:text-pink-700  list-none inline  px-2">
          <Link href='#Contato'>Contato</Link>
        </li>

        <li className="hover:text-pink-700  list-none inline  px-2">
          <a href="login.tsx" target="_blank">Login</a>
        </li>

      </ul>
    </nav>
  )
}