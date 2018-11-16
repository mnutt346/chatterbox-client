var Friends = {

    

    initialize: function() {
        //Friends.$username.on('click', Friends.toggleStatus);
        //Friends.$username.click(Friends.toggleStatus);
        let $username = $('.username');
        // Friends.$username.click(function(){console.log('SUCCESS')})
        $username.click(Friends.toggleStatus)
    },


    toggleStatus: function(event) {
        console.log('hello')
        //event.preventDefault();
    }

};