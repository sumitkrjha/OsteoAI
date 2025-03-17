import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className=" overflow-hidden py-10 lg:px-3 border-2 border-black rounded-3xl m-5 cursor-pointer "
      >
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="outline-none cursor-default select-none">
                  Fast, Accurate
                </span>
                <span className="outline-none cursor-default select-none text-[#401e48] ">
                  {" "}
                  Bone Analysis{" "}
                </span>
                <span className="outline-none cursor-default select-none">
                  with AI
                </span>
              </h1>
              <p className="outline-none cursor-default text-xl text-muted-foreground">
                Empower your medical diagnosis with 80-85% accurate X-ray
                analysis in just 15 seconds. Detect bone tumors and hairline
                fractures with unprecedented precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <button className="inline-flex items-center justify-center cursor-pointer border-2 border-[#3B2B3F] bg-[#3B2B3F] text-green-300 hover:text-green-500 hover:shadow-lg hover:shadow-[#3B2B3F] h-11 px-8 font-semibold rounded-2xl">
                    <span className="outline-none cursor-pointer select-none">
                      Start Analysis
                    </span>
                  </button>
                </Link>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col hover:scale-110">
                  <span className="outline-none  select-none text-3xl font-bold cursor-pointer">
                    15s
                  </span>
                  <span className="outline-none  select-none text-sm text-muted-foreground cursor-pointer">
                    Analysis Time
                  </span>
                </div>
                <div
                  data-orientation="vertical"
                  className="shrink-0 bg-border w-px h-12"
                ></div>
                <div className="flex flex-col hover:scale-110">
                  <span className="outline-none cursor-pointer select-none text-3xl font-bold">
                    85%
                  </span>
                  <span className="outline-none cursor-pointer select-none text-sm text-muted-foreground">
                    Accuracy Rate
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="OsteoAI X-ray Analysis"
                className="relative rounded-2xl shadow-2xl"
                src={hero}
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
