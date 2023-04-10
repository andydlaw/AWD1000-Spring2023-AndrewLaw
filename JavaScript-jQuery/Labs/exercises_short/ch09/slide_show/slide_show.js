"use strict";
$(document).ready( () => {

    // create an array of the slide images
    let imageCache = [];
    $("#slides img").each( (index, img) => {    
        const image = new Image();
        image.src = $(img).attr("src");
        image.title = $(img).attr("alt");
        imageCache[index] = image;
    });
    
    // start slide show
    let imageCounter = 0;
    setInterval( () => {
        imageCounter = (imageCounter + 1) % imageCache.length;
        
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
            () => {                       
                const nextImage = imageCache[imageCounter];
                $("#slide").attr("src", nextImage.src).fadeIn(1000);
                $("#caption").text(nextImage.title).fadeIn(1000);      
                 
                
            });  // end fadeOut() method
    }, 
    3000);   
       // end setInterval() method
    
});