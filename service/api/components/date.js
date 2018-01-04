

Date.prototype.getYMD = function(time=new Date()){
  let year = time.getFullYear();
  let month = time.getMonth() > 8 ? time.getMonth() + 1 : '0'+(time.getMonth() + 1);
  let day = time.getDate() > 9 ? time.getDate() : '0'+time.getDate()
  return `${year}-${month}-${day}`
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