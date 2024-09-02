import axios from 'axios';

interface ApiResponse {
  success: boolean;
  data?: any;
  message?: string;
}

const fetchJsonData = async (queryText: string): Promise<ApiResponse> => {
  try {
    const url = `https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${queryText}&returnGeom=Y&getAddrDetails=Y&pageNum=1`;
    const response = await axios.get(url);

    // Check if the response data is what we expect
    if (response.data) {
      return {
        success: true,
        data: response.data,
      };
    } else {
      return {
        success: false,
        message: 'No data returned from the API.',
      };
    }
  } catch (error: any) {
    // Handle specific errors
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code outside the range of 2xx
        console.error('API responded with an error:', error.response.status, error.response.data);
        return {
          success: false,
          message: `Server responded with status ${error.response.status}: ${error.response.data.message || 'Unknown error'}`,
        };
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        return {
          success: false,
          message: 'No response received from the server. Please check your network connection and try again.',
        };
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error setting up the request:', error.message);
        return {
          success: false,
          message: `Request setup failed: ${error.message}`,
        };
      }
    } else {
      // Handle unexpected errors
      console.error('Unexpected error:', error);
      return {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      };
    }
  }
};

export default fetchJsonData;
