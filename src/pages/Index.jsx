const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Discover Jupiter: The Giant of Our Solar System</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img src="/placeholder.svg" alt="Jupiter" className="mx-auto object-cover w-full md:w-1/2 h-[300px] rounded-lg shadow-lg" />
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
            Welcome to our Jupiter exploration website! Here, you'll embark on a journey to learn about the largest planet in our solar system.
          </p>
          <p className="text-lg mb-4">
            Jupiter, named after the king of the Roman gods, is a gas giant with a mass more than two and a half times that of all the other planets in our solar system combined.
          </p>
          <p className="text-lg">
            Explore our site to discover fascinating facts about Jupiter's composition, its numerous moons, and the history of its exploration by human-made spacecraft.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
