import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 to-purple-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Capturing Love Stories
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Professional wedding and couples photography that tells your unique story
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors shadow-lg">
            View My Work
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Recent Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Demo photos - using placeholder images */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=600&fit=crop"
                alt="Couple photo 1"
                width={400}
                height={600}
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop"
                alt="Couple photo 2"
                width={400}
                height={600}
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=600&fit=crop"
                alt="Couple photo 3"
                width={400}
                height={600}
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop"
                alt="Couple photo 4"
                width={400}
                height={600}
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=600&fit=crop"
                alt="Couple photo 5"
                width={400}
                height={600}
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop"
                alt="Couple photo 6"
                width={400}
                height={600}
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            With over 10 years of experience capturing life's most precious moments, I specialize in wedding and couples photography.
            My passion lies in telling your unique love story through beautiful, authentic images that you'll cherish forever.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From intimate elopements to grand celebrations, I work with couples to create timeless memories that reflect their personality and love.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Create Magic Together</h2>
          <p className="text-xl mb-8">Ready to capture your love story? Get in touch to discuss your special day.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Book a Consultation
            </button>
            <div className="text-center">
              <p className="font-semibold">Email: hello@photographer.com</p>
              <p className="font-semibold">Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
