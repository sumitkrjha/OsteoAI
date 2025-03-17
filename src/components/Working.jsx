const Working = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 border-2 border-black m-5 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="outline-none cursor-default select-none text-3xl font-heading font-bold mb-4">
            How It Works
          </h2>
          <p className="outline-none cursor-default select-none text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes it easy to get AI-powered X-Ray
            analysis in just three simple steps
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="relative bg-card rounded-2xl hover:scale-105 transition delay-105 p-6 border border-gray-600 cursor-pointer hover:shadow-lg">
              <div className="outline-none cursor-default select-none w-12 h-12 bg-[#281551] rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                1
              </div>
              <div className="text-center">
                <h3 className="outline-none cursor-default select-none font-heading text-xl font-semibold mb-2">
                  Upload X-Ray Image
                </h3>
                <p className="outline-none cursor-default select-none text-muted-foreground">
                  Simply upload your X-Ray image in any common format. Our
                  system accepts JPEG, PNG and DICOM files.
                </p>
              </div>
            </div>
            <div className="relative bg-card rounded-2xl hover:scale-105 transition delay-105 p-6 border border-gray-600 cursor-pointer hover:shadow-lg">
              <div className="outline-none cursor-default select-none w-12 h-12 bg-[#281551] rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                2
              </div>
              <div className="text-center">
                <h3 className="outline-none cursor-default select-none font-heading text-xl font-semibold mb-2">
                  AI Analysis in Progress
                </h3>
                <p className="outline-none cursor-default select-none text-muted-foreground">
                  Our advanced AI algorithms analyze your X-Ray image with high
                  precision and accuracy.
                </p>
              </div>
            </div>
            <div className="relative bg-card rounded-2xl hover:scale-105 transition delay-105 p-6 border border-gray-600 cursor-pointer hover:shadow-lg">
              <div className="outline-none cursor-default select-none w-12 h-12 bg-[#281551] rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                3
              </div>
              <div className="text-center">
                <h3 className="outline-none cursor-default select-none font-heading text-xl font-semibold mb-2">
                  Receive Instant Results
                </h3>
                <p className="outline-none cursor-default select-none text-muted-foreground">
                  Get detailed analysis results within seconds, including
                  annotations and diagnostic suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
