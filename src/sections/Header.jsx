import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center bg-black text-white py-3 text-sm">
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div>
        <div className="container">
          <Image src={Logo} alt="saas logo" height={40} width={40} />
        </div>
      </div>
    </header>
  );
};
