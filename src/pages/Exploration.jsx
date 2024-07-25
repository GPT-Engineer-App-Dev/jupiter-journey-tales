const Exploration = () => {
  const missions = [
    { name: "Pioneer 10", year: 1973, agency: "NASA" },
    { name: "Pioneer 11", year: 1974, agency: "NASA" },
    { name: "Voyager 1", year: 1979, agency: "NASA" },
    { name: "Voyager 2", year: 1979, agency: "NASA" },
    { name: "Ulysses", year: 1992, agency: "NASA/ESA" },
    { name: "Galileo", year: 1995, agency: "NASA" },
    { name: "Cassini", year: 2000, agency: "NASA/ESA" },
    { name: "New Horizons", year: 2007, agency: "NASA" },
    { name: "Juno", year: 2016, agency: "NASA" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Exploration of Jupiter</h1>
      <p className="text-lg mb-6">
        Jupiter has been visited by several spacecraft since the 1970s, providing us with invaluable data about the gas giant.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Notable Missions to Jupiter</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Mission Name</th>
              <th className="border border-gray-300 px-4 py-2">Year of Jupiter Encounter</th>
              <th className="border border-gray-300 px-4 py-2">Space Agency</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.name}>
                <td className="border border-gray-300 px-4 py-2">{mission.name}</td>
                <td className="border border-gray-300 px-4 py-2">{mission.year}</td>
                <td className="border border-gray-300 px-4 py-2">{mission.agency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Current Mission: Juno</h2>
      <p className="text-lg mb-4">
        NASA's Juno spacecraft is currently orbiting Jupiter, studying the planet's composition, gravity field, magnetic field, and polar magnetosphere.
      </p>
      <img src="/placeholder.svg" alt="Juno spacecraft" className="mx-auto object-cover w-full h-[300px] mt-4 rounded-lg shadow-lg" />
    </div>
  );
};

export default Exploration;
