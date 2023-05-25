const BASE_URL = "https://andmed.stat.ee/api/v1/et";

const response = await fetch(`${BASE_URL}/stat/majandus/hinnad`);
const data = await response.json();

// Kui console.log annab vastuse "pending" siis on kuskil await puudu.
console.log(data);

