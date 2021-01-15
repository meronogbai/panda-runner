// Result of creating game: {"result":"Game with ID: IeWR2bb5qDryHD6KKs3d added."}
export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IeWR2bb5qDryHD6KKs3d/scores';

export const getScores = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(data => data);
};

export const postScores = (user, score, url) => fetch(url,
  {
    method: 'POST',
    mode: 'cors',
    headers:
      { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, score }),
  });
