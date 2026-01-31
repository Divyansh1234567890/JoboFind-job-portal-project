import { asset } from "../assets/asset";
const Hero = () => {
  return (
    // ✅ Full-width without horizontal scroll
    <section className="w-full bg-gray-100 py-16">
      
      {/* Centered content, same as Navbar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-800">
            Your Gateway to Better Jobs and Career Growth
          </h1>
          <p className="mt-4 text-gray-700">
            Find your dream job or hire top talent with our jobofind job portal
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={asset.hero}
            alt="Hero"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
