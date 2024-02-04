const button = document.querySelector("#myButton");
const tooltip = document.querySelector("#tooltip");

button.addEventListener("click", () => {
  // ボタンの位置を取得
  const rect = button.getBoundingClientRect();
  const top = rect.top - 30; // 吹き出しの位置を調整

  // 吹き出しの内容を設定
  tooltip.textContent = "ライブ終わりここで集合して写真撮りましょう！";

  // 吹き出しを表示
  tooltip.style.display = "block";
  tooltip.style.top = `${top}px`;
});

// ボタン外をクリックしたら吹き出しを非表示にする
document.addEventListener("click", (event) => {
  if (!button.contains(event.target)) {
    tooltip.style.display = "none";
  }
});
