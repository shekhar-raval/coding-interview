const minWindow = (s, t) => {
  if (s.length < t.length) return "";
  const map = new Map();

  let left = 0, rigth = 0; counter = 0;
  for (const char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
}