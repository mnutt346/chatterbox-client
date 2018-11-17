var FormView = {

  $form: $('form'),
  $chats: $('#chats'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    let message = {
      username: 'banana',
      text: $('#message')[0].value,
      roomname: 'banana',
      createdAt: new Date()
    }
    event.preventDefault();
    
    Parse.create(message);

    setTimeout(function(){
      delayedReload();
    }, 100)

    let delayedReload = function() {
      location.reload(true);
    }
    // let $newChatNode = $(MessageView.render(message));
    // console.log(FormView.$chats);
    // FormView.$chats.prepend($newChatNode);


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};