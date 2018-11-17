var Rooms = {
    listRooms: function(data) {
        let roomList = new Set().add('Lobby');
        for (let entry of data.results) {
            if (entry.roomname){ 
                roomList.add(entry.roomname);
            }
        }
        return roomList;
    }

};