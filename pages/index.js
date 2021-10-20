import Link from "next/link"

export default function Home() {
  return (
    <>
    <ul>
      <li>
        <Link href="labyrinth">
          <a>LABYRINTH</a>
        </Link>
      </li>
      <li>
        <Link href="/3Dcube">
          <a>3Dcube</a>
        </Link>
      </li>
      <li>
        <Link href="/SquidGameRedlightGreenlight">
          <a>Squid Game Redlight Greenlight</a>
        </Link>
      </li>
    </ul>
    </>
  )
}
