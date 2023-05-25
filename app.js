const BASE_URL = "https://visual-crossing-weather.p.rapidapi.com";
const OPTIONS = {
    'X-RapidAPI-Key': '7cc19a1227msh8862e54e13083fcp1225f4jsn963fce01679c',
	'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
}

const response = await fetch(`${BASE_URL}/forecast?aggregateHours=24&location=Kuressaare,Estonia&contentType=json&unitGroup=metric`, { 
    headers: OPTIONS
});
const data = await response.json();

// Kui console.log annab vastuse "pending" siis on kuskil await puudu.
console.log(data);

