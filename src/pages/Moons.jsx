const Moons = () => {
  const majorMoons = [
    { name: "Io", diameter: 3642, discoveredBy: "Galileo Galilei", discoveryYear: 1610 },
    { name: "Europa", diameter: 3122, discoveredBy: "Galileo Galilei", discoveryYear: 1610 },
    { name: "Ganymede", diameter: 5268, discoveredBy: "Galileo Galilei", discoveryYear: 1610 },
    { name: "Callisto", diameter: 4821, discoveredBy: "Galileo Galilei", discoveryYear: 1610 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Jupiter's Moons</h1>
      <p className="text-lg mb-6">
        Jupiter has 79 known moons, with the four largest known as the Galilean moons: Io, Europa, Ganymede, and Callisto.
      </p>
      <h2 className="text-2xl font-semibold mb-4">The Galilean Moons</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Diameter (km)</th>
              <th className="border border-gray-300 px-4 py-2">Discovered By</th>
              <th className="border border-gray-300 px-4 py-2">Discovery Year</th>
            </tr>
          </thead>
          <tbody>
            {majorMoons.map((moon) => (
              <tr key={moon.name}>
                <td className="border border-gray-300 px-4 py-2">{moon.name}</td>
                <td className="border border-gray-300 px-4 py-2">{moon.diameter}</td>
                <td className="border border-gray-300 px-4 py-2">{moon.discoveredBy}</td>
                <td className="border border-gray-300 px-4 py-2">{moon.discoveryYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <img src="/placeholder.svg" alt="Jupiter's major moons" className="mx-auto object-cover w-full h-[300px] mt-8 rounded-lg shadow-lg" />
    </div>
  );
};

export default Moons;
