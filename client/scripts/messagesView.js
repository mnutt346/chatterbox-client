var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessages: function(data, chatRoom = 'Lobby') {
    
    for (let i = 0; i < data.results.length; i++) {
      if(data.results[i].username && data.results[i].text && 
        (chatRoom === 'Lobby' || chatRoom === data.results[i].roomname)) {
        let $newChatNode = $(MessageView.render(data.results[i]));
        $newChatNode.appendTo(this.$chats); 
      }
    }

    Friends.initialize();
  }

};