$('.element').tinytip({
    tooltip : '<img src="images/p01-small.jpg">',
    position : 'bottom',
    animation : {
        top : -10
    },
    fix : {
        top: 10,
        left: -5
    },
    speed : 100,
    on : 'click',
    off: 'click',
    preventClose : true,
    onLoad : function(e){}
});