const users = [];
 
//join user to chat

 function userJOin(id, username, room) {

    const user = { id, username, room };

    user.push(user);
    return user;
 }

 //get current user 

 function getCurrentUser(id) {
     return users.find(user => user.id === id);

 }

 //user leaaves chat
 fuction userleave(id) {
     const index = users.findIndex(user => user.id === id);

     if(index !== -1) {
     return users.splice(index, 1)[0];
    }
 }

 //get room users
 function getRoomUsers(room) {
     return users.filter(user => user.room === room);

 }

 module.exports = {
     userJoin,
     getCurrentUser,
     userLeave,
     getRoomUsers
 };