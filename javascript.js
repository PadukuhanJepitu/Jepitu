// menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });
}

$(document).ready(function (){
    var width = $(window).width();
    if(width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function(){
    var width = $(window).width();
    if(width > 989){
        menu.css("display","block");
    }else{
        menu.css("display","none");
    }
    klikMenu;
});


//efek scroll
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        }else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

document.addEventListener('DOMContentLoaded', function() {
    var umkmContainer = document.querySelector('#umkm .support');
    var umkmItems = umkmContainer.querySelectorAll('div');

    function adjustUMKMGrid() {
        if (umkmItems.length > 4) {
            umkmContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
        } else {
            umkmContainer.style.gridTemplateColumns = 'repeat(' + umkmItems.length + ', 1fr)';
        }
    }

    adjustUMKMGrid();

    window.addEventListener('resize', adjustUMKMGrid);
});