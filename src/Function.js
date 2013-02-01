/*
 * Function
 */
Function.prototype.defer = function(seconds){
  seconds = seconds || 0;
  seconds = seconds < 0 ? 0 : seconds;
  setTimeout(this, seconds * 1000);
};