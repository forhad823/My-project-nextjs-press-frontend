import Link from "next/link";
import LikeButton from "./ui/LikeButton";

export default function Home() {
  console.log("root route");
  return (
    <div>
      <p>Hello NextJS Blogs Page</p>
      <hr />
      <Link href={"/blogs/1"}>Blogs</Link>
      <LikeButton />
    </div>
  );
}
