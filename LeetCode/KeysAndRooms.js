/*
There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room.

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0).

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.
*/
const canVisitAllRooms = function(rooms) {
    let visited = new Set();
    visited.add(0);
    DFS(rooms, rooms[0], visited);
    return visited.size === rooms.length
};

const DFS = function(rooms, keys, visited){
    for(let i = 0; i < keys.length; i++){
        if(!visited.has(keys[i])){
            visited.add(keys[i]);
            DFS(rooms, rooms[keys[i]], visited);
        }
    }
}
