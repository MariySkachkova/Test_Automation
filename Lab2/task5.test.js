const fetchDataFromAPI = require('./task5');

test('Fetch data from API test', async () => {
  const data = await fetchDataFromAPI();
  expect(data).toEqual(expect.objectContaining({
    userId: expect.any(Number),
    id: expect.any(Number),
    title: expect.any(String),
    body: expect.any(String)
  }));
});
