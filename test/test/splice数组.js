<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>function removeWithoutCopy(arr, item) {
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    let index = arr.indexOf(item);
    arr.splice(index, index != -1 ? 1 : 0);
  }
  return arr;
}

removeWithoutCopy([1, 2, 3, 4, 5, 2, 2, 3, 2], 2);
