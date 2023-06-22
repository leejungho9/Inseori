import axios from 'axios';

const { REACT_APP_API } = process.env;

export const getData = async (path) => {
  try {
    const response = await axios.get(`${REACT_APP_API}/${path}`, {
      option: {
        method: 'GET',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
