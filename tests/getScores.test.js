import { url, getScores } from '../src/lib/leaderboardApi';

global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({ result: [{ user: 'John', score: 42 }] }),
}));

beforeEach(() => {
  fetch.mockClear();
});

test('getScores uses fetch and gives back score data in a nested array', () => {
  getScores(url)
    .then(data => {
      expect(data).toEqual([{ user: 'John', score: 42 }]);
    });
});

test('getScores only calls fetch once', () => {
  getScores(url);
  expect(fetch).toHaveBeenCalledTimes(1);
});

test('getScores calls fetch with the defined url', () => {
  getScores(url);
  expect(fetch).toHaveBeenCalledWith(url);
});

test('getScores does not call another url', () => {
  getScores(url);
  expect(fetch).not.toHaveBeenCalledWith('https://google.com');
});