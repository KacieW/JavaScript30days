# Whack A Mole

## Get Skills
1. Get a random time generator function. This is to set up the peep of the moles randomly.
2. Get a random hole generator function. It should avoid the same hole come hand in hand. Store the hole in the lasthole as a copy. Then 
check the new hole with the last one.
  ```javascript
  if(lastHole==hole){
    return randomHole(holes);
  }
  lastHole = hole;
  ```
3. Create a function for the peep moles. Use a setTimeout function to control the mole peep. it should show and hide the mole within the
random time, which is the speed of it. We should continue to call the function untill the game time's up.
4. Create a function to start the game. It should use a `setTimeoue` function to control the totle time of the game. when time is up, stop 
peep function by passing a flag to it. 
5. A function for bonk the mole. just add up the score when we hit the mole by click. Make sure the click if from the user, not a fake one.
  ```javascript
  if(!e.isTrusted){//`.isTrusted` is a flag to prevent fake clicking
    return;
  }
  ```
## Additional
Create an addition function to show the game time left and levels for users to choose.
A `setInterval` function to controll the time countdown. The level function is for user to choose differnet speed of the mole peep.

