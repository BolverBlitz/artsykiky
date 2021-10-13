import Link from "next/link"

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="labyrinth">
          <a>Labyrinth</a>
        </Link>
      </li>
      <li>
        <Link href="/3Dcube">
          <a>3Dcube</a>
        </Link>
      </li>

    </ul>
  )
}