// Result of creating game: {"result":"Game with ID: IeWR2bb5qDryHD6KKs3d added."}
export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IeWR2bb5qDryHD6KKs3d/scores';

const handleErrors = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

export const getScores = (url) => fetch(url)
  .then(handleErrors)
  .then(response => response.json())
  .then(data => {
    if (data.result.length === 0) {
      throw new Error();
    }
    return data.result.sort((a, b) => b.score - a.score);
  });

export const postScores = (user, score, url) => fetch(url,
  {
    method: 'POST',
    mode: 'cors',
    headers:
      { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, score }),
  })
  .then(handleErrors);
