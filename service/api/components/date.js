

Date.prototype.getYMD = function(time=new Date()){
  return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`
}


Date.prototype.getTimeQuantum = function(time=new Date()){
  let hour = time.getHours();
  if( 0 <= hour && hour < 8){
    return 1
  }else if( 8 <= hour && hour < 16 ){
    return 2
  }else if( 16 <= hour && hour < 24 ){
    return 3
  }
}