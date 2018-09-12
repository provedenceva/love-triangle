/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift(0);
  var triangles = 0;
  var a;
  var b;
  var c;
  for(let i = 1; i < preferences.length; i++){
    if (preferences[i] == 0) continue;
    a = preferences[i];
    b = preferences[a];
    c = preferences[b];
    if(a == b || b == c ) continue;
    if (c == i) {
      triangles++;
    
    }
    }
 return (triangles/3); // your implementation
}