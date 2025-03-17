const AboutUs = () => {
  return (
    <section id="about" className="m-5 py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="outline-none cursor-default select-none text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About OsteoAI
          </h2>
          <p className="outline-none cursor-default select-none mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            OsteoAI is an AI-powered web application that helps medical
            professionals diagnose bone tumors and fractures with 80-85%
            accuracy in just 15 seconds.
          </p>
        </div>
        <div className="mt-16 grid gap-8">
          <div className="rounded-lg border border-black bg-card text-card-foreground shadow-sm overflow-hidden cursor-pointer hover:shadow-lg">
            <div className="p-6">
              <p className="outline-none cursor-default select-none text-muted-foreground text-lg">
                Built with ReactJS and Tailwind CSS, OsteoAI offers an intuitive
                interface for fast and efficient X-ray analysis. Its secure
                backend, powered by ExpressJS and MongoDB, ensures data privacy
                with JWT authentication.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-black bg-card text-card-foreground shadow-sm relative overflow-hidden transition-all hover:shadow-lg cursor-pointer">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
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
                    className="lucide lucide-brain h-5 w-5 text-primary"
                  >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                  </svg>
                  <span className="outline-none cursor-default select-none">
                    AI-Powered Diagnosis
                  </span>
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="outline-none cursor-default select-none text-muted-foreground">
                  Achieves 80-85% accuracy in tumor and fracture detection
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-black bg-card text-card-foreground shadow-sm relative overflow-hidden transition-all hover:shadow-lg cursor-pointer">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
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
                    className="lucide lucide-timer h-5 w-5 text-primary"
                  >
                    <line x1="10" x2="14" y1="2" y2="2"></line>
                    <line x1="12" x2="15" y1="14" y2="11"></line>
                    <circle cx="12" cy="14" r="8"></circle>
                  </svg>
                  <span className="outline-none cursor-default select-none">
                    Instant Results
                  </span>
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="outline-none cursor-default select-none text-muted-foreground">
                  Reduces X-ray result processing time to 15 seconds
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-black bg-card text-card-foreground shadow-sm relative overflow-hidden transition-all hover:shadow-lg cursor-pointer">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
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
                    className="lucide lucide-shield h-5 w-5 text-primary"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                  <span className="outline-none cursor-default select-none">
                    Secure Platform
                  </span>
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="outline-none cursor-default select-none text-muted-foreground">
                  Powered by JWT authentication for enhanced security
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-black bg-card text-card-foreground shadow-sm relative overflow-hidden transition-all hover:shadow-lg cursor-pointer">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
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
                    className="lucide lucide-users h-5 w-5 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span className="outline-none cursor-default select-none">
                    User-Friendly Interface
                  </span>
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p className="outline-none cursor-default select-none text-muted-foreground">
                  Simplifies the workflow for medical professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span id="working"></span>
    </section>
  );
};

export default AboutUs;
