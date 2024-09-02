import axios from 'axios';

const fetchJsonData = async (queryText: string) => {
  try {
    const url = `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${queryText}&returnGeom=Y&getAddrDetails=Y&pageNum=1`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchJsonData;
