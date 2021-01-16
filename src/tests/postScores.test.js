import { url, postScores } from '../lib/leaderboardApi';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ result: 'Leaderboard score created correctly.' }),
}));

beforeEach(() => {
  fetch.mockClear();
});

test('postScores resolves successfully', () => {
  postScores(url)
    .then(response => response.json())
    .then(data => {
      expect(data.result).toEqual('Leaderboard score created correctly.');
    });
});

test('fetch gets called only once', () => {
  postScores(url);
  expect(fetch).toHaveBeenCalledTimes(1);
});


test('postScores does not call another url', () => {
  postScores(url);
  expect(fetch).not.toHaveBeenCalledWith('https://google.com');
});