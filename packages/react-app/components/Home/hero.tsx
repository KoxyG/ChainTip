import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      <div className="relative flex h-full w-full h-full text-white">
        <Image
          src="/images/header.png"
          width="200"
          height="100"
          alt="Header"
          className="filter brightness-50 shadow' block h-[500px] sm:h-[700px] w-full object-cover"
        />

        <div className="absolute my-[50px] sm:my-[100px] ml-[50px] inset-0 w-[492.59px] items-center justify-center text-left">
          <h1 className="text-[25px] sm:text-[33px]">
            Discover Decentralized News Earn <br /> Tokens for Sharing and
            Creating Content
          </h1>
          <p className="text-[10px] sm:text-[14px] my-[20px]">
            Explore ChainTip, where news meets rewards in the decentralized{" "}
            <br /> world of web3. Earn tokens for sharing and creating quality{" "}
            <br /> content, empowering a community-driven approach to news{" "}
            <br /> reporting. Join us in reshaping the future of journalism.
          </p>

          <div className="flex space-x-4">
            <button className="bg-[#ac740c] text-white px-4 py-2 rounded-md mt-[20px]">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-md mt-[20px]">
              Learn More
            </button>
          </div>

          <div className="py-3">
            <div className="flex">
              <Image
                src="/images/icon1.png"
                width="45"
                height="45"
                alt="icon"
                className=""
              />

              <div className="grid">
                <h1 className="text-[10px] text-[#ac740c] sm:text-[14px]">
                  2K
                </h1>
                <p className="text-white">Total number of creator</p>
              </div>
            </div>
          </div>

          <div className="py-3">
            <div className="flex">
              <Image
                src="/images/icon1.png"
                width="45"
                height="45"
                alt="icon"
                className=""
              />

              <div className="grid">
                <h1 className="text-[10px] text-[#ac740c] sm:text-[14px]">
                  2K
                </h1>
                <p className="text-white">Total number of creator</p>
              </div>
            </div>
          </div>

          <div className="py-3">
            <div className="flex">
              <Image
                src="/images/icon1.png"
                width="45"
                height="45"
                alt="icon"
                className=""
              />

              <div className="grid">
                <h1 className="text-[10px] text-[#ac740c] sm:text-[14px]">
                  2K
                </h1>
                <p className="text-white">Total number of creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#feebd4] py-[50px]">
        <h1 className="text-dark text-center text-[25px] sm:text-[30px] py-[50px]">
          Latest News
        </h1>

        <div>
          <div className="bg-[#fbf4ed] mx-[50px] border-rounded px-[30px] py-[50px]">
            <div className="sm:flex">
              <div className="grid">
                <h1 className="text-[#dc950e] text-[18px] font-bold leading-6 ">Blockchain News</h1>
                <h2 className="text-dark text-[18px] py-3 leading-6 ">Celo joins Chainlink SCALE</h2>
                <p className="text-[#5d5d5c]">
                  Celo is joining the Chainlink SCALE program to accelerate the
                  growth and adoption of the Ethereum Virtual Machine
                  (EVM)-compatible Layer-1 network. The Celo governance
                  community passed the proposal with a 99.9% approval rate.
                </p>
              </div>
              <Image src="/images/image1.png"
                    width="180"
                    height="200"
                    alt="Header"
                    className=" py-4 sm:px-0"
                />
            </div>
            <p className="text-[#727271] pt-[10px]">1 month ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
