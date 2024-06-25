// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    const block = 42; 
    return Math.abs(value - block);
  }
  function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264; 
    const distanceInBlocks = distanceFromHqInBlocks(someValue); 
    const distanceInFeet = distanceInBlocks * feetPerBlock; 
    return distanceInFeet; 
  }
  
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(destination - start); 
    const distanceInFeet = distanceInBlocks * feetPerBlock; 
    return distanceInFeet; 
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 
    
    
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
  
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(destination - start); 
    return distanceInBlocks * feetPerBlock; 
  }
  
  