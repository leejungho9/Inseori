const { useState } = require('react');

const useLoading = (action) => {
  const [loading, setLoading] = useState(true);

  const handleData = async (...rest) => {
    return await action(...rest).finally(() => setLoading(false));
  };

  return [handleData, loading];
};

export default useLoading;
