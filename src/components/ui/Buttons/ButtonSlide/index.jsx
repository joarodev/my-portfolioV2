import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonSlide({text, path}) {
  return (
    <Link
        className="group relative inline-block overflow-hidden border border-fg px-8 py-3 focus:ring-3 focus:outline-hidden"
        to={path}
        >
        <span
            className="absolute inset-y-0 left-0 w-[2px] bg-secondary transition-all group-hover:w-full"
        ></span>

        <span
            className="relative text-sm font-medium text-fg transition-colors group-hover:text-black"
        >
            {text}
        </span>
    </Link>
  )
}
