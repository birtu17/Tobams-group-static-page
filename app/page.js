export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Content */}
      <div className="relative container mx-auto mt-16 px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-white">
          Welcome to My Static Page
        </h1>
        <p className="text-center text-gray-200 mt-4">
          This is the homepage with a background image
        </p>
      </div>
    </div>
  );
}

