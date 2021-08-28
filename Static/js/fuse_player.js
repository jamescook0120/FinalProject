var button = d3.select("#button");

var form = d3.select("#form-search");

// button.on("click", runEnter);
// form.on("submit",runEnter);

const options = {
  isCaseSensitive: false,
  includeScore: false,
  shouldSort: true,
  includeMatches: false,
  findAllMatches: false,
  minMatchCharLength: 1,
  location: 0,
  threshold: 0.6,
  distance: 100,
  useExtendedSearch: false,
  ignoreLocation: false,
  ignoreFieldNorm: false,
 
 
  keys: ['Player', 'Position','College'
  ]
};

const fuse = new Fuse(player_list, options);

// function runEnter(){

//   d3.event.preventDefault();
  
//   var inputElement = d3.select("#searchbar"); 

//   var inputValue = inputElement.property("value");
  
//   console.log(inputValue);
// }





// Change the pattern
// const pattern = "Tim"

// return fuse.search(pattern)


