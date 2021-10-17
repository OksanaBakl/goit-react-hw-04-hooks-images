// import axios from 'axios';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.params = {
//   key: '22965571-072909f782f88cd625ec58d3c',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// async function getFetch(query, page) {
//   const { data } = await axios
//     .get('', {
//       params: {
//         q: query,
//         page,
//       },
//     })
//     .catch(function (error) {
//       toast.error(error);
//     });
//   // console.log(data.hits);
//   return data.hits;
// }

// export default getFetch;

const API_KEY = '22965571-072909f782f88cd625ec58d3c';
const BASE_URL = 'https://pixabay.com/api';

class ImageApi {
  async fetchImageOrPhoto(searchQuery, page) {
    const res = await fetch(
      `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );

    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }

    const { hits, totalHits } = await res.json();
    return { hits, totalHits };
  }
}

export default ImageApi;
