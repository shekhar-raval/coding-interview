const reOrderLogs = (logs) => {
  const digitLogs = [];
  const letterLogs = [];
  for (const log of logs) {
    const val = log.split(' ')[1];
    if (!isNaN(val)) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }
  const sortedLetterLogs = letterLogs.sort((a, b) => {
    const strA = a.slice(a.indexOf(' ') + 1);
    const strB = b.slice(b.indexOf(' ') + 1);
    if (strA > strB) {
      return 1;
    }
    if (strA === strB) {
      if (a > b) {
        return 1;
      }
      if (a === b) {
        return 0;
      }
      return -1;
    }
    return -1;
  });
  return [...sortedLetterLogs, ...digitLogs];
}
console.log(reOrderLogs(input));