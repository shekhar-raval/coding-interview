const compareVersion = (version1, version2) => {
  const version1Array = version1.split(".");
  const version2Array = version2.split(".");
  const zerosToAdd = Math.abs(version2Array.length - version1Array.length);
  if (version2Array.length > version1Array.length) {
    addZeros(version1Array, zerosToAdd);
  } else if (version1Array.length > version2Array.length) {
    addZeros(version2Array, zerosToAdd);
  }
  for (let i = 0; i < version2Array.length; i++) {
    const sum1 = parseInt(version2Array[i]);
    const sum2 = parseInt(version1Array[i]);
    if (sum1 > sum2) {
      return 1
    } else if (sum2 > sum1) {
      return -1
    }
  }
  return 0
}

const addZeros = (array, length) => {
  for (let i = 0; i < length; i++) {
    array.push('0');
  }
}

const compareVersion2 = (version1, version2) => {
  const version1Array = version1.split(".");
  const version2Array = version2.split(".");
  while (version2Array.length || version1Array.length) {
    const num1 = +version1Array.shift() || 0;
    const num2 = +version2Array.shift() || 0;
    if (num1 > num2) return 1;
    if (num2 > num1) return -1;
  }
  return 0;
}

console.log(compareVersion("7.5.2.4", "7.5.3"));