export default function CinematicBanner() {
  return (
    <>
    <section
      className="py-40 bg-cover bg-center text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('/images/paddy-field-wide.jpg')",
      }}
    >
      <h2 className="text-6xl font-bold text-white">
        From Golden Fields
      </h2>

      <p className="mt-5 text-3xl text-[#E9C46A]">
        To Healthy Family Meals
      </p>
    </section>
    </>
  );
}  