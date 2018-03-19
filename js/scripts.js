$(document).ready(function(){
  $("#ad").submit(function(event) {
    var sentences = $("input#user").val();
    //set up value with the user input
    var splits= sentences.split(' ', );
    //using .split to split the string into an array
    var newArray = [];
    //creating new empty array
    splits.forEach(function(split) {
      if (split.length > 3) {
        // specifying the criteria > 3 characters in length
        newArray.push(split);
        // splitting out the characters >3
      }
    })
    alert(newArray);
    event.preventDefault();
  });
});
