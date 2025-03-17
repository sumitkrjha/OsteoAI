import sumit from "../assets/Team/sumit.png";
import vibhu from "../assets/Team/vibhu.jpeg";

const Team = () => {
  return (
    <section id="team" className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="outline-none cursor-default select-none text-3xl md:text-4xl font-bold text-center font-heading mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 rounded-2xl border border-black hover:scale-105 cursor-pointer transition delay-105">
            <div className="relative w-32 h-32 mb-4">
              <img
                alt="Sumit Kumar Jha"
                decoding="async"
                data-nimg="fill"
                className="rounded-full object-cover"
                src={sumit}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <h3 className="outline-none cursor-default select-none text-xl font-bold mb-2 font-heading">
              Sumit Kumar Jha
            </h3>
            <p className="outline-none cursor-default select-none text-muted-foreground mb-4">
              Full Stack Web Developer
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/-sumitkumarjha"
                target="_blank"
              >
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-linkedin h-5 w-5 hover:fill-black"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
              </a>
              <a href="https://github.com/sumitkrjha" target="_blank">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 cursor-pointer"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github h-5 w-5 hover:fill-black"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl border border-black hover:scale-105 cursor-pointer transition delay-105">
            <div className="relative w-32 h-32 mb-4">
              <img
                alt="Vibhu Raj"
                width="128"
                height="128"
                decoding="async"
                data-nimg="1"
                className="rounded-full object-cover"
                src={vibhu}
              />
            </div>
            <h3 className="outline-none cursor-default select-none text-xl font-bold mb-2 font-heading">
              Vibhu Raj
            </h3>
            <p className="outline-none cursor-default select-none text-muted-foreground mb-4">
              AI Engineer
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/vibhuraj01" target="_blank">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-linkedin h-5 w-5 hover:fill-black"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
              </a>
              <a href="https://github.com/vibhuraj01" target="_blank">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github h-5 w-5 hover:fill-black"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
