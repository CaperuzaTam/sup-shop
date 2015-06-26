'use strict';
function LandingController(Firebase){
    var self = this;
    var fbaseRef = new Firebase('https://sup-shop.firebaseio.com');
    self.heading = 'You Seem Thirsty, come and have a drink :)';
    self.links=[];
}
module.exports=LandingController;
