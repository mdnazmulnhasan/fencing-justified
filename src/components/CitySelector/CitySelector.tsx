export default function CitySelector() {
  const cities = [
    { name: 'COIMBATORE', image: '/hm.svg', active: true },
    { name: 'CHENNAI', image: '/chennai.svg', active: false },
    { name: 'HYDERABAD', image: '/hyderabad.svg', active: false },
    { name: 'GOA', image: '/goa.svg', active: false },
    { name: 'KOCHI', image: '/kochi.svg', active: false },
    { name: 'MUMBAI', image: '/mumbai.svg', active: false },
  ];

  return (
    <div className="flex justify-center flex-wrap md:flex-nowrap items-center gap-6 py-4 bg-white">
      {cities.map((city) => (
        <div
          key={city.name}
          className={`flex flex-col items-center justify-center p-3 rounded-md transition
            ${city.active ? 'border border-[#c1fa00] bg-[#f8fff2]' : ''}
          `}
        >
          <img
            src={city.image}
            alt={city.name}
            className="w-8 h-8 object-contain mb-2"
          />
          <p
            className={`text-[12px] font-medium tracking-wide ${
              city.active ? 'text-black font-bold' : 'text-gray-600'
            }`}
          >
            {city.name}
          </p>
        </div>
      ))}
    </div>
  );
}


