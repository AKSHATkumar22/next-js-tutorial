'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  // ek function banaya baanane ka baad yeh aage badha hai 

  const router = useRouter();
  console.log(router);

  function handleNavigatePage(){
    // it basically pushes the router server to the client server
    // yaad rakhna yeh push sa hii hum next page ja payenge 
    // router main path name daalke
    router.push('Design');

  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      {/* isme hume link ka saath href den ahoga tab aage jayega wana nahin */}
      <Link href={'Design'}>Go to the Next page</Link>
      {/* alternative to do the routing in the server side */}
      <button onClick={handleNavigatePage}>Go to the next Page</button>

    </main>
  );
}
