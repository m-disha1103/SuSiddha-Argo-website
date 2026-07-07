import Image from "next/image";
export default function FarmToFamily() {
  return (
    <>
    {/* Farm To Family Section */}
      <section className="relative overflow-hidden py-28 bg-gradient-to-br from-[#FFFDF7] via-[#F8F4E8] to-[#EDE3C8]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#1F5132]/10 blur-3xl"></div>

          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B8860B]/10 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B8860B] font-semibold tracking-widest uppercase">
              Our Process
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1F5132] mt-4">
              From Farm To Family
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every grain of SuSiddha rice follows a carefully monitored journey
              from cultivation to your dining table, ensuring purity, nutrition,
              and exceptional quality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Seed Selection */}
            <div className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(31,81,50,0.20)]">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
                alt="Seed Selection"
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5132]/60 via-transparent to-transparent"></div>

              <div className="p-6">
                <h3 className="mt-2 text-2xl font-bold text-[#1F5132]">
                  Seed Selection
                </h3>

                <p className="text-gray-600 mt-3">
                  Carefully selected premium-quality seeds ensure superior grain
                  quality and consistency.
                </p>
              </div>
            </div>

            {/* Cultivation */}
            <div className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(31,81,50,0.20)]">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                alt="Green Rice Field"
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5132]/60 via-transparent to-transparent"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F5132]">
                  Cultivation
                </h3>

                <p className="text-gray-600 mt-3">
                  Nurtured in lush green paddy fields using traditional farming
                  practices and sustainable methods.
                </p>
              </div>
            </div>

            {/* Processing */}
            <div className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(31,81,50,0.20)]">
              <Image
                src="/images/sona-masuri-rice.jpg"
                alt="Unpolished Sona Masuri Rice"
                width={900}
                height={600}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5132]/60 via-transparent to-transparent" />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F5132]">
                  Careful Processing
                </h3>

                <p className="mt-3 text-gray-600">
                  Processed with care to preserve natural nutrition, aroma,
                  texture and authentic taste of every grain.
                </p>
              </div>
            </div>

            {/* Family Table */}
            <div className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(31,81,50,0.20)]">
              <img
                src="https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80"
                alt="Family Dining"
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F5132]/60 via-transparent to-transparent"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F5132]">
                  Family Table
                </h3>

                <p className="text-gray-600 mt-3">
                  Healthy, wholesome meals enjoyed by families every day with
                  the goodness of SuSiddha rice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>  
  );
}