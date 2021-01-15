// Result of creating game: {"result":"Game with ID: IeWR2bb5qDryHD6KKs3d added."}
export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IeWR2bb5qDryHD6KKs3d/scores';

export const getScores = async (url) => {
  const scores = await fetch(url);
  const data = await scores.json();
  return data;
};

export const postScores = async (user, score, url) => {
  try {
    await fetch(url,
      {
        method: 'POST',
        mode: 'cors',
        headers:
        { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, score }),
      });
    return true;
  } catch (error) {
    return false;
  }
};