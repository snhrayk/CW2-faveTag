const accessToken =
  "BQCbmnEDLIgVM0cARvppqsTQw7_VFzaiQF2yE9Yu6UJUACI1vWNTJhOkRxYpzprzlDLJFXStGb-49TU41CMTgq-kG7Y5eDaL_o3-CJsEL1tkNH8Ie69HDJqwd-qCGOzn0-XideKC6ktb2ba2HhmvQWD_T8gvElt67oHyv_qEXiJ1oKGlW02xN0Jf0r6RikbSF6m52r03B_JwpLSLBb4iIetyCZMP-DFEb1ZFH0BlTYFsz8buc8FgeIo0wbRC3etYdFL4xgKhn9atDfR_BfRdOjcw";
document.addEventListener("DOMContentLoaded", function () {
  // Ariana Grandeの情報を取得して表示する関数
  async function getArianaGrandeInfo() {
    const response = await fetch(
      "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    const artistImg = document.querySelectorAll(".artistImg")[0];
    const artistName = document.querySelectorAll(".artistName")[0];

    // アーティストの写真を表示
    artistImg.style.backgroundImage = `url(${data.images[0].url})`;

    // アーティストの名前を表示
    artistName.textContent = data.name;
  }

  // Sabrina Carpenterの情報を取得して表示する関数
  async function getSabrinaCarpenterInfo() {
    const response = await fetch(
      "https://api.spotify.com/v1/artists/3MpGqNB0Vzdnv26lYc4Pjl",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    const artistImg = document.querySelectorAll(".artistImg")[1];
    const artistName = document.querySelectorAll("artistName")[1];

    // アーティストの写真を表示
    artistImg.style.backgroundImage = `url(${data.images[0].url})`;

    // アーティストの名前を表示
    artistName.textContent = data.name;
  }

  // Johnny Orlandoの情報を取得して表示する関数
  async function getJohnnyOrlandoInfo() {
    const response = await fetch(
      "https://api.spotify.com/v1/artists/4DMKwE2E2iYDKY01C335Uw",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    const artistImg = document.querySelectorAll(".artistImg")[2];
    const artistName = document.querySelectorAll(".artistName")[2];

    // アーティストの写真を表示
    artistImg.style.backgroundImage = `url(${data.images[0].url})`;

    // アーティストの名前を表示
    artistName.textContent = data.name;
  }

  // Selena Gomezの情報を取得して表示する関数
  async function getSelenaGomezInfo() {
    const response = await fetch(
      "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    const artistImg = document.querySelectorAll(".artistImg")[3];
    const artistName = document.querySelectorAll(".artistName")[3];

    // アーティストの写真を表示
    artistImg.style.backgroundImage = `url(${data.images[0].url})`;

    // アーティストの名前を表示
    artistName.textContent = data.name;
  }

  // 各アーティストの情報を取得して表示
  getArianaGrandeInfo();
  getSabrinaCarpenterInfo();
  getJohnnyOrlandoInfo();
  getSelenaGomezInfo();
});

//artistTop
// 1. Spotify APIを使用してアーティスト情報を取得する関数
async function fetchArtistInfo() {
  const artistName = "Sabrina Carpenter";
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    artistName
  )}&type=artist`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data.artists.items[0]; // 最初のアーティスト情報を返す
}

// 2. HTMLにアーティスト情報と写真を適用する関数
async function applyArtistInfo() {
  const artistInfo = await fetchArtistInfo();
  const artistNameElement = document.querySelector(".artistName");
  if (artistInfo && artistNameElement) {
    artistNameElement.textContent = artistInfo.name;
    // ここで背景画像を設定
    document.querySelector(
      ".artistTop"
    ).style.backgroundImage = `url(${artistInfo.images[0].url})`;
  }
}

// 3. applyArtistInfo関数を呼び出して実行
applyArtistInfo();
