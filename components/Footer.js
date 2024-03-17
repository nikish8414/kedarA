import Link from "next/link";

export default function Footer() {
  return (
    <section className="">
      <footer className="flex flex-col space-y-10 justify-center m-10">

<nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <Link href="/#"><div className="hover:text-gray-900" >Home</div></Link>
    <Link href="#About"><div className="hover:text-gray-900" >About</div></Link>
    <Link href="#Services"><div className="hover:text-gray-900" >Services</div></Link>
    <Link href="#Contact"><div className="hover:text-gray-900" >Contact</div></Link>
</nav>

<div className="flex justify-center space-x-5">
    <Link  href="https://m.facebook.com/profile.php?id=100090385383094&locale2=hi_IN&_rdr">
    <div target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </div>
    </Link>
    
    <Link href="https://www.instagram.com/kedarrealty5/?igsh=MXBobzV1NW1rbXA2MA%3D%3D"><div  target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </div>
    </Link>
    <Link href="https://www.youtube.com/channel/UCJgDVbPB64GOirAJhKLnFag/videos">
    <div target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="30" viewBox="0 0 48 48">
<path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
</svg>
    </div>
    </Link>
    {/* <div href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </div> */}
</div>
<p className="text-center text-gray-700 font-medium">&copy; 2023-24 Company Ltd. All rights reservered.</p>
<p className="text-center text-gray-700 font-medium">&copy; Made By Niiksih.</p>

</footer>
    </section>
  );
}
