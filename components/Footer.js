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
    <div href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </div>
    
    <div href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </div>
    <div href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </div>
    <div href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </div>
</div>
<p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
<p className="text-center text-gray-700 font-medium">&copy; Made By Niiksih.</p>

</footer>
    </section>
  );
}
