const Overview = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Jupiter: An Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Facts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Diameter: 142984 km (88846 miles)</li>
            <li>Mass: 1.90 × 10^27 kg (317.8 Earth masses)</li>
            <li>Average distance from Sun: 778 million km (484 million miles)</li>
            <li>Rotation period: 9.93 hours</li>
            <li>Orbital period: 11.86 Earth years</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Composition</h2>
          <p className="mb-4">
            Jupiter is primarily composed of hydrogen and helium, similar to the Sun. It likely has a rocky core of heavier elements.
          </p>
          <h3 className="text-xl font-semibold mb-2">Atmosphere</h3>
          <p>
            Jupiter's atmosphere features colorful bands and spots, including the Great Red Spot, a giant storm that has lasted for hundreds of years.
          </p>
        </div>
      </div>
      <img src="/placeholder.svg" alt="Jupiter's structure" className="mx-auto object-cover w-full h-[400px] mt-8 rounded-lg shadow-lg" />
    </div>
  );
};

export default Overview;
