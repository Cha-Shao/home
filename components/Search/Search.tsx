"use client"

import { useEffect, useState } from "react"
import SearchInput from "./SearchInput"
import SearchEngines from "./SearchEngines"

export interface Engine {
  id: string
  name: string
  url: string
  color: string
}

const engines: Engine[] = [{
  id: "google",
  name: "谷歌",
  url: "https://www.google.com/search?q=",
  color: "#fbbc05"
}, {
  id: "bing",
  name: "必应",
  url: "https://cn.bing.com/search?q=",
  color: "#106ebe"
}, {
  id: "baidu",
  name: "百度",
  url: "https://www.baidu.com/s?wd=",
  color: "#2932e1"
}]

const Search = () => {
  const [engine, setEngine] = useState<string>('google')

  useEffect(() => {
    const engine = localStorage.getItem('engine')
    setEngine(engine || 'google')

    const changeEngine = (e: KeyboardEvent) => {
      if (e.altKey && e.key >= '0' && e.key <= '9') {
        const i = Number(e.key)
        if (i < engines.length + 1) {
          setEngine(engines[i - 1].id)
          localStorage.setItem('engine', engines[i - 1].id)
        }
      }
    }

    window.addEventListener('keydown', changeEngine)

    return () => {
      window.removeEventListener('keydown', changeEngine)
    }
  }, [])

  return (
    <div className="mb-16">
      <SearchInput engines={engines} engine={engine} />
      <SearchEngines
        engines={engines}
        engine={engine}
        onChange={setEngine}
      />
    </div>
  )
}

export default Search
