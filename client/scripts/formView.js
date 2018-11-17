var FormView = {

  $form: $('form'),
  $chats: $('#chats'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();

    let message = {
      username: App.username,
      text: $('#message')[0].value,
      roomname: window.currentRoom,
    }
    
    Parse.create(message);

    setTimeout(function(){
      delayedReload();
    }, 100)

    let delayedReload = function() {
      MessagesView.$chats.empty();
      $('#message')[0].value = '';
      Parse.readAll((data) => {
        MessagesView.renderMessages(data, window.currentRoom);
        window.data = data;
      });
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};