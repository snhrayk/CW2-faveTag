window.onload = async function () {
  const accessToken =
    "BQDwAxbdDhBu4qjS6_Mz02x1DG2AwsxcB9TkY84xNNAP67FzJ5gAm-n8wDyr6zPMvYW37neORK4L3Iik9uRKoCZiqnOjERFVVwuttj7lszDvrXvXdKCZDGXoT2zrUHAG2nAwSApkhU-T0ns76AGFrRUVd5A1Caufw5Iwe63nyILP8D9nt8jLoFpyQFdKdQ7t0fbAEqQq3Rm1LjbiovkOMy7aDLdV829aWuABmbNtPbnaPjlDmQcn3w2Islo4qI6mWfuqttVp_2mDjuUPjYhDNGF-";
  const artists = [
    "Ariana Grande",
    "Sabrina Carpenter",
    "Olivia Rodrigo",
    "Johnny Orlando",
    "Selena Gomez",
    "taylor swift",
  ];

  for (let i = 0; i < artists.length; i++) {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${artists[i]}&type=artist`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();
    const artist = data.artists.items[0];

    // アーティストの画像を取得して表示
    if (artist.images[0]) {
      const imageUrl = artist.images[0].url;
      const imgDiv = document.querySelector(
        `.artist:nth-child(${i + 1}) .artistImg`
      );
      imgDiv.style.backgroundImage = `url(${imageUrl})`;
    }

    // アーティスト名を表示
    const nameP = document.querySelector(
      `.artist:nth-child(${i + 1}) .artistName`
    );
    nameP.textContent = artist.name;
  }

  const artistElements = document.querySelectorAll(".artist.selected");

  // artistElements.forEach(function (artistElement) {
  //   artistElement.addEventListener("click", function () {
  //     artistElement.classList.add("highlighted");
  //   });
  // });
  artistElements.forEach(function (artistElement) {
    artistElement.addEventListener("click", function () {
      artistElement.style.border = "3px solid #c74a82";
      artistElement.style.border = "border 0.4s ease-in-out";
    });
  });

  document
    .getElementById("sbtn2")
    .addEventListener("click", async function (event) {
      event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

      const artistNameInput = document.getElementById("sbox2").value;

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${artistNameInput}&type=artist`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();

      const artist = data.artists.items[0];
      const artistDiv = document.createElement("div");
      artistDiv.className = "artist selected";

      // 最初の画像を取得して表示
      if (artist.images[0]) {
        const imageUrl = artist.images[0].url;
        const imgDiv = document.createElement("div");
        imgDiv.className = "artistImg";
        imgDiv.style.backgroundImage = `url(${imageUrl})`;
        artistDiv.appendChild(imgDiv);
      }

      // アーティスト名を表示
      const nameP = document.createElement("p");
      nameP.className = "artistName";
      nameP.textContent = artist.name;
      artistDiv.appendChild(nameP);

      // 既存のアーティスト情報をすべて削除
      const artistWrapDiv = document.querySelector(".artistWrap");
      while (artistWrapDiv.firstChild) {
        artistWrapDiv.removeChild(artistWrapDiv.firstChild);
      }

      // justify-contentスタイルを削除
      artistWrapDiv.style.justifyContent = "start";

      // 新しいアーティストを追加
      artistWrapDiv.appendChild(artistDiv);
    });
};
