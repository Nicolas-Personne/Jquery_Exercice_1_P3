$(function(){
$("button").click(function() {
    var count = $('#count').val();
    count++;
    $("#count").val(count);
    if (count == 20){
      alert("Wahouuuuu tu a cliquer 20 fois");
    }
});
});
// $(function(){
//  $('button').click(function(){
//    //on initialise l'input appeler '#count' à 0 (la valeur actuelle) avec le get et on incrémente la value avec le ++
//   $('#count').get(0).value++;
//  });
// });
