import axios from 'axios';

const { REACT_APP_API } = process.env;

export const getData = async (path) => {
  try {
    const response = await axios.get(`${REACT_APP_API}/${path}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (path, data) => {
  try {
    const response = await axios.post(`${REACT_APP_API}/${path}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
