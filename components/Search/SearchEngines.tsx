"use client"

import classNames from "classnames"
import Image from "next/image"
import { Engine } from "./Search"

const SearchEngines = ({
  engines,
  engine,
  onChange
}: {
  engines: Engine[]
  engine: string
  onChange: (engine: string) => void
}) => {
  return (
    <div className="flex justify-center gap-2">
      {engines.map((thisEngine, i) => {
        const active = thisEngine.id === engine

        return (
          <div key={i}>
            <button
              className={classNames(
                "rounded-lg border p-2 mb-2",
                active && 'ring-2',
                'ring-offset-2 ring-offset-background',
                'transition-shadow duration-200'
              )}
              style={{
                '--tw-ring-color': thisEngine.color,
              } as React.CSSProperties}
              onClick={() => {
                onChange(thisEngine.id)
                localStorage.setItem('engine', thisEngine.id)
              }}
            >
              <Image
                src={`/engine/${thisEngine.id}.png`}
                alt={thisEngine.name}
                width={32}
                height={32}
              />
            </button>
            <p className="text-muted text-xs text-center">Alt + {i + 1}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SearchEngines
