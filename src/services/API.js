const API_KEY = '22965571-072909f782f88cd625ec58d3c';
const BASE_URL = 'https://pixabay.com/api';

class ImageApi {
  async fetchImageOrPhoto(searchQuery, page) {
    const result = await fetch(
      `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );

    if (!result.ok) {
      const message = `An error has occured: ${result.status}`;
      throw new Error(message);
    }

    const { hits, totalHits } = await result.json();
    return { hits, totalHits };
  }
}

export default ImageApi;
