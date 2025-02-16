const accessToken =
  "BQDwAxbdDhBu4qjS6_Mz02x1DG2AwsxcB9TkY84xNNAP67FzJ5gAm-n8wDyr6zPMvYW37neORK4L3Iik9uRKoCZiqnOjERFVVwuttj7lszDvrXvXdKCZDGXoT2zrUHAG2nAwSApkhU-T0ns76AGFrRUVd5A1Caufw5Iwe63nyILP8D9nt8jLoFpyQFdKdQ7t0fbAEqQq3Rm1LjbiovkOMy7aDLdV829aWuABmbNtPbnaPjlDmQcn3w2Islo4qI6mWfuqttVp_2mDjuUPjYhDNGF-";
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
      "https://api.spotify.com/v1/artists/74KM79TiuVKeVCqs8QtB0B",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    const artistImg = document.querySelectorAll(".artistImg")[1]; // 修正されたインデックス
    const artistName = document.querySelectorAll(".artistName")[1]; // 修正されたインデックス

    // アーティストの写真を表示
    artistImg.style.backgroundImage = `url(${data.images[0].url})`;

    // アーティストの名前を表示
    artistName.textContent = data.name;
  }

  // Johnny Orlandoの情報を取得して表示する関数
  async function getJohnnyOrlandoInfo() {
    const response = await fetch(
      "https://api.spotify.com/v1/artists/6aX6KqXgEcARRHwvWxHcFW",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    const artistImg = document.querySelectorAll(".artistImg")[2]; // 修正されたインデックス
    const artistName = document.querySelectorAll(".artistName")[2]; // 修正されたインデックス

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
  const artistName = "Ariana Grande";
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

// ここから下はモーダルの実装です
//要素を取得
const modal = document.querySelector(".js-modal"),
  open = document.querySelector(".postBtn"),
  close = document.querySelector(".js-modal-close");

//「開くボタン」をクリックしてモーダルを開く
function modalOpen() {
  modal.classList.add("is-active");
}
open.addEventListener("click", modalOpen);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
  modal.classList.remove("is-active");
}
close.addEventListener("click", modalClose);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut(e) {
  if (e.target == modal) {
    modal.classList.remove("is-active");
  }
}
addEventListener("click", modalOut);
