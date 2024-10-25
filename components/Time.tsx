"use client"

import { useEffect, useState } from "react"

const Time = () => {
  const [time, setTime] = useState<string>('--:--:--')

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 333)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <h1 className="font-bold text-center mb-8">
      <span className="text-7xl">
        {time.slice(0, -3)}
      </span>
      <span className="text-5xl text-muted">
        {time.slice(5)}
      </span>
    </h1>
  )
}

export default Time
