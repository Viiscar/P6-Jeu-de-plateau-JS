//prevent Bootstrap modal from closing when clicking outside
$(document).ready(function(){

  $(".show-modal").click(function(){

      $("#myModal").modal({

          backdrop: 'static',

          keyboard: false

      });

  });

});

// Attack / Defence
<button id = "atack" type="button" class="btn btn-danger">Attack</button>
<button id = "defence" type="button" class="btn btn-warning">Defence</button>

//Mettre addeventlistner sur les boutons

document.getElementByClass("modal-body").innerHTML = "<p>some text</p>";

$('.modalShow').click(function(event){
  event.preventDefault();
  var e = $(this);
  var title = e.data('title');
  var body = e.data('value');
  $("#myModal").modal("show");
  $('#modal-title').html(title);
  $('#modal-body').html(body);
});


$(function(){
  $('.custom-modal').click(function(e){
    e.preventDefault();
    var mymodal = $('#myModal');
    mymodal.find('.modal-body').text('hello');
    mymodal.modal('show');

  });
})

$('#your-modal').removeData('bs.modal');

if < 2

normal

else

fuite

