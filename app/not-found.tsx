import Link from "next/link";

export default function notfound() {
  return (
    <div>
        <h1>
            Page Not found
        </h1>
        <Link href="/">Go Home</Link>
    </div>
  )
}
