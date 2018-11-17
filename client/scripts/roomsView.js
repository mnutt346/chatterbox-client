var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //RoomsView.handleChange;
    RoomsView.$select.on('change', RoomsView.handleChange);
    console.log(RoomsView.$select)
    //RoomsView.$select.addEventListener("change", function(){console.log('gfd')});
  },

  handleChange: function(event) {
    event.preventDefault();
    MessagesView.$chats.empty();
    let chatRoom = RoomsView.$select[0].value;
    MessagesView.renderMessages(window.data, chatRoom);
    window.currentRoom = chatRoom;
    console.log('hello');
  },

  render: _.template(`
    <option value=<%- room %>><%- room %>
    </option>`
  ),
  

  renderRooms: function(data) {
    let roomList = Rooms.listRooms(data);
    for (let room of roomList) {
      let $newRoomNode = $(this.render({room: room}));
      $newRoomNode.appendTo(this.$select); 
    }
    
  }
};
