export default function ProductSpecs() {
  const specs = [
    {
      title: "Rice Variety",
      value: "Sona Masuri",
    },
    {
      title: "Type",
      value: "Unpolished",
    },
    {
      title: "Origin",
      value: "India",
    },
    {
      title: "Processing",
      value: "Traditional",
    },
    {
      title: "Shelf Life",
      value: "12 Months",
    },
    {
      title: "Storage",
      value: "Cool & Dry Place",
    },
    {
      title: "Quality",
      value: "Premium Grade",
    },
    {
      title: "Nutrition",
      value: "Rich in Fiber",
    },
  ];

  return (
    <section className="py-24 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] font-semibold text-[#B8860B]">
            Product Specifications
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#1F5132]">
            Everything You Need To Know
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {specs.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-lg hover:-translate-y-2 transition"
            >
              <p className="text-sm text-[#B8860B] uppercase">
                {item.title}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#1F5132]">
                {item.value}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}