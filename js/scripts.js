$(document).ready(function(){
  $("#ad").submit(function(event) {
    var sentences = $("input#user").val();
    //set up value with the user input
    var splits= sentences.split(' ', );
    //using .split to slit the strung into an array
    var newArray = [];
    //creating new empty array
    splits.forEach(function(split) {
      if (split.length > 3) {
        // cpecifying the creteria > 3 characters inlength
        newArray.push(split);
        // splitting out the characters crateris >3
      }
    })
    alert(newArray);
    event.preventDefault(); // preventing default
  });
});
