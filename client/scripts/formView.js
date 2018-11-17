var FormView = {

  $form: $('form'),
  $chats: $('#chats'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();

    let message = {
      // username: $('.username'),
      username: App.username,
      text: $('#message')[0].value,
      roomname: window.currentRoom,
    }
    
    Parse.create(message);

    setTimeout(function(){
      delayedReload();
    }, 100)

    let delayedReload = function() {
      // location.reload(true);
      MessagesView.$chats.empty();
      Parse.readAll((data) => {
        MessagesView.renderMessages(data, window.currentRoom);
        window.data = data;
      });
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