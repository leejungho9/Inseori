import axios from 'axios';

const { REACT_APP_API } = process.env;

async function request({ url, option }) {
  try {
    const response = await axios.get(url, option);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getData = async (path) => {
  const response = await request({
    url: `${REACT_APP_API}/${path}`,
    option: {
      method: 'GET',
    },
  });
  return response;
};
