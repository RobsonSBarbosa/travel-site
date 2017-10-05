import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
    constructor(els, offset){
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitialy();
        this.createWaypoints();
    }

    hideInitialy(){
        this.itemsToReveal.addClass("reveal-item"); 
    }

    createWaypoints(){
        var that = this; //In here "this" will access the constructor value
        this.itemsToReveal.each(function(){
            var currentItem = this; //In here "this" will access the waypoint value
           new Waypoint({
               element: currentItem,
               handler: function(){
                   $(currentItem).addClass("reveal-item--is-visible");
               },
               offset: that.offsetPercentage //This sets when the waypoint will act 0 is the bottom of the page 100% is the top
           });
        });
    }
}

export default RevealOnScroll;