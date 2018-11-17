var Friends = {

    

    initialize: function() {
        window.friendsList = new Set();
        $username =  $('.username')
        $username.click(Friends.toggleStatus)
    },


    toggleStatus: function(event) {
        if (event.target.innerHTML !== App.username){
            window.friendsList.add(event.target.innerHTML)
        }
    }

};