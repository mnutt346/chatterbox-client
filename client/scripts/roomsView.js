var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: _.template(`
  <div class="rooms select">
  </div>
  `),
  

  renderRoom: function(roomName) {
    let $newRoomNode = $(this.render(roomName));
    $newRoomNode.appendTo(this.$select); 
  }
};
