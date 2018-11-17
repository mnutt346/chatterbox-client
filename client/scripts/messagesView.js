var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(data) {
    
    for (let i = 0; i < data.results.length; i++) {
      if(data.results[i].username) {
        console.log(data.results[i])
        let $newChatNode = $(MessageView.render(data.results[i]));
        $newChatNode.appendTo(this.$chats); 
      }
    }

    Friends.initialize();
  }

};