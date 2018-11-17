var RoomsView = {

  $button: $('#roombutton'),
  $submitroom: $('#submitroom'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleSubmit);
  },



  handleChange: function(event) {
    event.preventDefault();
    MessagesView.$chats.empty();
    let chatRoom = RoomsView.$select[0].value;
    MessagesView.renderMessages(window.data, chatRoom);
    window.currentRoom = chatRoom;
  },

  render: _.template(`
    <option <%- selected %> value=<%- room %>><%- room %>
    </option>`
  ),
  

  renderRooms: function(data) {
    let roomList = Rooms.listRooms(data);
    for (let room of roomList) {
      let $newRoomNode = $(this.render({room: room, selected: ''}));
      $newRoomNode.appendTo(this.$select); 
    }
    
  },

  handleSubmit: function(event) {
    event.preventDefault();
    MessagesView.$chats.empty();
    let $newRoomNode = $(RoomsView.render({room: RoomsView.$submitroom[0].value, selected: 'selected'}));
    $newRoomNode.appendTo(RoomsView.$select);
    let chatRoom = RoomsView.$submitroom[0].value;
    MessagesView.renderMessages(window.data, chatRoom);
    window.currentRoom = chatRoom;
    $('#submitroom')[0].value = '';
  }


};
