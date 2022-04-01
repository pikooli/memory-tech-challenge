export default function converNumber(number: number) {
  let moins = 1;
  if (number < 0) {
    moins = -1;
  }
  if (number >= 1000000) {
    return (Math.floor(number / 10000) / 100) * moins + "M";
  }
  if (number >= 1000) {
    return (Math.floor(number / 10) / 100) * moins + "k";
  }
  return number * moins;
}
