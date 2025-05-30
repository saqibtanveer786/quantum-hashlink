import Image from "next/image";
import Customtypewriter from "./Customtypewriter";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative flex justify-center z-10 overflow-hidden bg-gradient-to-br from-white via-pink-50 to-primary pb-16 pt-[100px] md:pb-[120px] md:pt-[200px] xl:pb-[180px] xl:pt-[100px] 2xl:pb-[200px] 2xl:pt-[110px]"
      >
        <div className="container px-4 sm:px-12 lg:px-8 py-20">
          <div className="flex flex-wrap">
            <div className="w-full px-4 grid grid-cols-1 gap-y-8 sm:gap-y-12 sm:grid-cols-2 sm:px-0 place-items-center lg:place-items-center">
              <div className="max-w-[600px] text-start">
                <h1 className="mb-5 text-3xl text-center sm:text-left font-bold leading-tight text-black sm:leading-tight md:text-4xl lg:text-5xl md:leading-tight">
                  Quantum HashLink |<br />
                  <Customtypewriter
                    words={[
                      "Innovative Solutions",
                      "Secure Transactions",
                      "AI-Powered Systems",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h1>
                <p className="mb-12 w-96 sm:w-auto text-center sm:justify-center sm:text-left px-8 sm:px-0 text-base !leading-relaxed text-gray-900 sm:text-lg md:text-xl">
                  We build modern, scalable, and efficient software tailored to
                  your business goals. From startups to enterprises — we craft
                  technology that grows with you.
                </p>
                <div className="sm:flex justify-center sm:justify-start gap-4 hidden">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition bg-primary rounded-md hover:bg-opacity-90"
                  >
                    Get Started
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[500px] lg:h-[500px] col-span-1 lg:block -mt-12 sm:mt-0">
                {/* <HeroImages /> */}
                <Image src="/images/hero/9796308.png" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute max-w-[1400px] right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#b5246c" />
                <stop offset="1" stopColor="#b5246c" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#b5246c" stopOpacity="0" />
                <stop offset="1" stopColor="#b5246c" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#b5246c" stopOpacity="0" />
                <stop offset="1" stopColor="#b5246c" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#b5246c" />
                <stop offset="1" stopColor="#b5246c" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#b5246c" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#b5246c" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#b5246c" />
                <stop offset="1" stopColor="#b5246c" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute max-w-[1400px] bottom-28 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#b5246c" stopOpacity="0" />
                <stop offset="1" stopColor="#b5246c" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#b5246c" stopOpacity="0" />
                <stop offset="1" stopColor="#b5246c" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#b5246c" stopOpacity="0" />
                <stop offset="1" stopColor="#b5246c" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#b5246c" stopOpacity="0" />
                <stop offset="1" stopColor="#b5246c" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#b5246c" />
                <stop offset="1" stopColor="#b5246c" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        {/* wavy loop */}
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            transform="scale(-1, 1) translate(-1440, 0)"
            d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,218.7C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </section>
    </>
  );
};

export default Hero;
