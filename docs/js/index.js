// HTMLロード完了時
window.onload = function () {
  openMenu();
}

function openMenu() {
  // お品書き開閉ボタンをタップすることで、画面ロードと同時にお品書きを開く
  document.getElementById("book-button").click();
}
