import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">

      {/* HERO */}
      <section className="h-screen bg-[url('/tour5.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/50 p-8 rounded-lg text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Discover Nigeria
          </h1>
          <p className="mt-4 text-lg">
            From hidden waterfalls to vibrant cities — your journey starts here.
          </p>

          <Link
            href="./tips"
            className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition"
          >
            Begin Journey
          </Link>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section
        id="explore"
        className="grid md:grid-cols-2 min-h-screen"
      >
        <div className="bg-[url('/zumarock.jpg')] bg-cover bg-center"></div>

        <div className="bg-blue-900 flex items-center justify-center p-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Adventure Awaits
            </h2>
            <p className="mb-6 text-lg">
              Explore breathtaking landscapes, from rocky terrains to peaceful
              mountain escapes across Nigeria.
            </p>

            <Link
              href="./explore"
              className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-white transition"
            >
              Explore Places
            </Link>
          </div>
        </div>
      </section>

      {/* FULL IMAGE BREAK */}
      <section className="h-[80vh] bg-[url('/waterfall.jpg')] bg-cover bg-center flex items-end">
        <div className="bg-black/60 w-full p-8">
          <h2 className="text-3xl font-bold">
            Feel Nature Like Never Before
          </h2>
        </div>
      </section>

      {/* EXPERIENCE STRIP */}
      <section className="bg-black py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          What You Can Experience
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <span className="border px-6 py-3 rounded-full">
            Hiking
          </span>
          <span className="border px-6 py-3 rounded-full">
            Culture
          </span>
          <span className="border px-6 py-3 rounded-full">
            Food
          </span>
          <span className="border px-6 py-3 rounded-full">
            Festivals
          </span>
          <span className="border px-6 py-3 rounded-full">
            Beaches
          </span>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="h-screen bg-blue-800 flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Your Nigerian Adventure Starts Now
          </h2>

          <p className="mb-6">
            Join TourGEE and start exploring destinations you’ve never seen before.
          </p>
        </div>
      </section>

    </main>
  );
}