import Image from "next/image";
import walletLogo from "../public/logo.png"
import bg1 from "@/public/image1.png"
import bg2 from "@/public/image2.png";

export default function Home() {
  return (
    <div className="h-screen bg-black max-w-full mx-auto px-16 py-5">

      <nav className="text-black bg-white/35 flex items-center justify-between gap-x-3 px-5 py-2 rounded-4xl">

        <div className="flex items-center justify-center gap-2">
          <Image alt="Shadhin Wallet Logo" src={walletLogo} width={40} quality={75} preload={true}></Image>
          <p className="font-bold text-2xl">SHADHIN WALLET</p>
        </div>

        <div className="flex gap-x-5">
            <div>
            Home
          </div>
          
          <div>
            About Us
          </div>
          
          <div>
            Contact Us
          </div>
          
          <div>
            Create Wallet
          </div>
          
        </div>
      </nav>
      
      <div className="my-12">
        <div>
          <p>We Are</p>
          <h1>SHADHIN WALLET</h1>
        </div>
        <div className="flex justify-end">
          <div className="w-[600px] h-[600px] bg-[linear-gradient(260deg,#8750f7,rgba(115,67,210,0)_100%)] rounded-full blur-[150px] absolute"></div>
          <Image alt="background-image" src={bg1} quality={100} width={400}></Image>
        </div>
      </div>
      
    </div>
  );
}
