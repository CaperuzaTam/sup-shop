require('chai').should();
describe('Landing page',function(){
    'use strict';
   var controller;
    beforeEach(function(){
        var LandingController = require('./controller-landing');
       controller = new LandingController(function Firebase(){});
    });

    it('Should have a heading saying "Landing"',function(){
        controller.heading.should.equal('You Seem Thirsty, come and have a drink :)');
    });

    it('Should have list of links if heading exist',function(){
        controller.links.should.be.an('array');
    });
});
