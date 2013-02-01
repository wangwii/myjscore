/*
 * Match
 */
Math.rand = function(min, max){
  min = min || 0;
  max = max || Number.MAX_VALUE;
  var value = (Math.random() * (max - min)) + min;
  return Math.ceil(value);
};