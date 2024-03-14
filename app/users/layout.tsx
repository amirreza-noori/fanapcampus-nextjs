import Link from 'next/link'
import React, {  type ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export default function Layout({children}: Props) {
  return (
    <div>{children}
        <hr />
        <Link href="/">Back to Home</Link>
    </div>
  )
}
