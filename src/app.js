import axios from 'axios';

async function fetchCNJoke() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(result.data.value);
    } catch(e) {
        console.error(e);
    }
}

fetchCNJoke();

