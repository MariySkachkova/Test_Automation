const fetchDataFromFakeAPI  = require('./task6');

test('Fetch data from fake API test', async () => {
  const data = await fetchDataFromFakeAPI();
  expect(data).toEqual(expect.objectContaining({
    userId: expect.any(Number),
    id: expect.any(Number),
    title: expect.any(String),
    body: expect.any(String)
  }));
});
