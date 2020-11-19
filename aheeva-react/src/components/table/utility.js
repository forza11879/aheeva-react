async function getData(url, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  };
  return await fetch(url, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      console.log('successful connection');
      return data;
    } else {
      console.log('connection failled');
      return Promise.reject(data);
    }
  });
}

export { getData };
