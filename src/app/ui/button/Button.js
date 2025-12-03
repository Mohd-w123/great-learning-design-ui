import Link from 'next/link'
import React from 'react'

function Button({clr ,bg,text , clas , reff}) {
  return (
    <Link href={reff}>
      <button className={`${bg ? bg : "bg-[#196ae5]"} ${clr ? clr : "text-white"} ${clas  }`}>{text}</button>
    </Link>
  )
}

export default Button
