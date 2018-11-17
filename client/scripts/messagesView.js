var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessages: function(data, chatRoom = 'Lobby') {

    for (let entry of data.results) {
      if(entry.username && entry.text && 
        (chatRoom === 'Lobby' || chatRoom === entry.roomname)) {
        entry.createdAt = MessagesView.formatTime(entry.createdAt);
        let $newChatNode = $(MessageView.render(entry));
        $newChatNode.appendTo(this.$chats); 
      }
    }

    Friends.initialize();
  },

  formatTime: function(entryTime) {
    let formmatedTime = ('@ ' + entryTime.slice(11,16) + 'GMT ' + 
       entryTime.slice(5,7) + '/' + entryTime.slice(8,10) + '/' +
       entryTime.slice(0,4));

    return formmatedTime

  }
};
