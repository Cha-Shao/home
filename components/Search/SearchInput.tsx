"use client"

import classNames from "classnames"
import { Engine } from "./Search"
import { useRouter } from "next/navigation"

const SearchInput = ({
  engines,
  engine
}: {
  engines: Engine[]
  engine: string
}) => {
  const router = useRouter()

  return (
    <div
      className={classNames(
        "border border-border rounded-full",
        "flex items-center",
        'w-4/5 max-w-screen-sm mx-auto',
        'px-4 mb-4'
      )}
    >
      <span className="icon-[ph--magnifying-glass-bold] text-muted" />
      <input
        type="search"
        placeholder={`通过${engines.find(e => e.id === engine)?.name}搜索`}
        className="bg-transparent w-full p-2 outline-none"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            const query = (e.target as HTMLInputElement).value
            router.push(
              engines.find(e => e.id === engine)?.url + encodeURIComponent(query)
            )
          }
        }}
      />
    </div>
  )
}

export default SearchInput
