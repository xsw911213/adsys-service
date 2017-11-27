

Date.prototype.getYMD = function(time=new Date()){
  return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`
}
