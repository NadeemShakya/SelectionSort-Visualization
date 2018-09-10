let lines = [];     //array to hold all elements.
let i = j = 0;  
let smallest;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Assigning random height values as elements to be sorted for the number of width pixels.
  for(n = 0; n < width; n++) {
    lines[n] = parseFloat(random(height));
  }
}

function draw() {
  background(0);
  stroke(255, 100, 255, 200);
  if(i < lines.length) {
    smallest = lines[i];

  // Code to see individual lines getting compared and being bubbled up to the last.
  // Note - SLOW STEP
    // if(lines[j + 1] < smallest) {
    //   smallest = lines[j + 1];
    // }
    // j += 1;
    // if( j >= lines.length) {
    //   j = 0;
    //   i += 1;
    // }

  // Code to see the ith interation only.
  // Note - FAST STEP
    for(j = i; j < lines.length; j++) {
      if(lines[j + 1] < smallest) {
        smallest = lines[j + 1];
      }
    }
    swap(lines, lines.indexOf(smallest), i);
  }else {
    noLoop();
  }
  // Displaying the lines from the 'Lines Array'.
  for(k = 0; k < lines.length; k++) {
    line(k, height, k, height - lines[k]);
  }
  i++;
}

// General Swapping function to swap two elements.
function swap(arr, preceding, succeding) {
  let temp = arr[preceding];
  arr[preceding] = arr[succeding];
  arr[succeding] = temp;
}