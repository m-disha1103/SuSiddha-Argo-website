export default function CinematicBanner() {
  return (
    <section
      className="relative flex min-h-[45vh] md:min-h-[55vh] items-center justify-center bg-cover bg-center px-6 py-24 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('/images/paddy-field-wide.jpg')",
      }}
    >
      <div className="max-w-5xl">
        <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          From Golden Fields
        </h2>

        <p className="mt-4 text-xl text-[#E9C46A] sm:text-2xl md:text-3xl">
          To Healthy Family Meals
        </p>
      </div>
    </section>
  );
}