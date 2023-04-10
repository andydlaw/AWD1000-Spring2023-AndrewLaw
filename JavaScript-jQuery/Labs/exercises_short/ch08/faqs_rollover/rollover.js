$(document).ready(() => {


    $("#faq_rollovers h2").hover(evt =>{
        evt.preventDefault()
    
        const link = evt.currentTarget;
    
        $(link).next().toggleClass("hidden")
    
        if ($(link).next().attr("class") !=="hidden"){
            $(link).next().show();
        }
        else
        {
            $(link).next().hide();
        }
     })

});