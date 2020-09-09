export default function replaceAllItemsWithFalseExceptLastOne(
  arr: Array<boolean> = []
): Array<boolean> {
  let foundLastVisibleElem = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (foundLastVisibleElem) {
      arr[i] = false;
    }
    if (arr[i]) {
      foundLastVisibleElem = true;
    }
  }
  return arr;
}
