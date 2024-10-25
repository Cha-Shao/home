import Image from "next/image"
import Link from "next/link"

const friends = [{
  id: 'pomotimer',
  name: '番茄钟',
  url: 'https://target.elfmc.com',
}]

const Friends = () => {
  return (
    <div className="w-fit mx-auto">
      <p className="mb-2">快速访问</p>
      <div className="grid grid-cols-8">
        {friends.map((friend, i) => (
          <Link
            key={i}
            href={friend.url}
            target="_blank"
          >
            <button className="p-2 mb-1 rounded-2xl border border-border">
              <Image
                src={`/friends/${friend.id}.png`}
                alt={friend.name}
                width={48}
                height={48}
                quality={100}
              />
            </button>
            <p className="text-sm text-center">{friend.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Friends
