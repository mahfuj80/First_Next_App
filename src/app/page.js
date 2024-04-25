import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <Counter />
      <Link href={"/about"}>
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href={"/news"}>
        <button className="btn btn-accent">News</button>
      </Link>
    </div>
  );
};

export default HomePage;
