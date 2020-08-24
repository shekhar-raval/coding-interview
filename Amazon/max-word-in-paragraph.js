const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.toLowerCase().split(/[ !?',;.]/);
  let map = {};
  for (word of paragraph) {
    if (banned.includes(word) || word == '') continue;
    if (word in map) map[word]++;
    else map[word] = 0;
  }
  return (Object.keys(map).sort((a, b) => map[b] - map[a]))[0];
};

console.log(mostCommonWord(paragraph, ["hit"]));