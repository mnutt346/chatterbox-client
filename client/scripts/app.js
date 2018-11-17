var App = {

  $spinner: $('.spinner img'),

  username: window.location.search.slice(10),

  initialize: function() {
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      MessagesView.renderMessages(data);
      RoomsView.renderRooms(data);
      window.data = data;
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
    Friends.initialize();
  },

};
