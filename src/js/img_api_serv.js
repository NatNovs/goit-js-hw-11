import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40724647-c674e9468a58393409b61a919';


export class ImgApiServ {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImg() {
    const params = new URLSearchParams({
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: this.page,
    });

      const {
        data: { hits, totalHits },
      } = await axios.get(BASE_URL, { params });

      return { hits, totalHits };
    } 


  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
  
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}