import Friends from "@/components/Friends";
import Search from "@/components/Search/Search";
import Time from "@/components/Time";

export default function Home() {
  return (
    <div className="mt-96">
      <Time />
      <Search />
      <Friends />
    </div>
  );
}
