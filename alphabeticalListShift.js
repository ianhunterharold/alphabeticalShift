// How do you know your code is good code?
// Tell me about yourself?
// What is an example of a website you dislike from a user experience perspective? Why?

/* 
data = [
    'potato',
    'rose',
    'rosemary',
    'strawberry',
    'thyme',
    'tomato',
    'basil',
    'bell pepper',
    'blueberry',
    'carrot',
    'dill',
    'fig',
    'leek',
    'lemon',
    'lily',
    'mint',
    'orange',
    'oregano',
    'parsley',
    'pepper', 
]

*/

//Given an array of strings which have been sorted alphabetically and then randomly rotated n places, unrotate the list to restore //it to its alphabetical form



// rotated n amount of times, unroate the list. 
// alpahbetical, modify it in place. 


// look for word that is closest to the beggingin of the alpa 
// rotate the array depending on the position of lowest string.

// sort 
// 'rosemary' > 'lilly'  
// > / < string comparison.

//  a < b  

// tomatoe > basil 

// compare i  i + 1



const reAlphaList = function(arr){
  
    let notAlp; 
    for (let i = 0; i< arr.length; i++){
        if (arr[i] > arr[i + 1]){
          notAlp = i;
        break; //
        }
    }
    // binary search moving pointers in, when they cross
    //calculate mid point, grater then my endpoint, mid and end 
    // mid and beggining, left or the right
    // point where you stop? Right - one, point exists, left + one,
    // if already alphabatized then return
    if (notAlp === undefined){
      return;
    }
    // for (let j =0; j < notAlp + 1; j++){
      // let removeFromFront = arr.shift();
      // let addToEnd = arr.push(removeFromFront);
      // all at once  - 
      // indicate your starting point, stoppoing point and what you would like to replace it with 
      let entireFirstChunkNotAlpha = arr.splice(0, notAlp+1);
      let addEntireChunkToEnd = arr.push(...entireFirstChunkNotAlpha)
      console.log(arr)
    // };
}
const data=[
  'lily',      'mint',
  'orange',    'oregano',
  'parsley',   'pepper',
  'potato',    'rose',
  'rosemary',  'strawberry',
  'thyme',     'tomato',
  'basil',     'bell pepper',
  'blueberry', 'carrot',
  'dill',      'fig',
  'leek',      'lemon',
]
reAlphaList(data);

// another edge could be that all strings are the same. 