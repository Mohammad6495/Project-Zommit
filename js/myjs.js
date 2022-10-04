

function showMenu() {
    var menu = document.getElementById("menu");
    var bergure = document.getElementById("bergur-none");
    var close = document.getElementById("close");

    if (close.style.display == "inline-block") {
        close.style.display = "none";
        bergure.style.display = "inline-block";
    } else {
        bergure.style.display = "none";
        close.style.display = "inline-block";
    }

    if (menu.className === "nav-size-phone") {
        menu.className += " show";
    } else {
        menu.className = "nav-size-phone";
    }
}

$(document).ready(function () {

    $("#showsearch").on("click", () => {
        $("#closesearch").fadeIn(1000);
        $("#showsearch").fadeOut(1000);
        $("#search").fadeIn(1000);
    });

    $("#closesearch").on("click", () => {
        $("#showsearch").fadeIn(1000);
        $("#closesearch").fadeOut(1000);
        $("#search").fadeOut(1000);
    });

    $("#show-child").on("click", () => {
        var child = $("#child");
        child.toggleClass("child-list-open");
        if (child.hasClass("child-list-open")) {
            $("#top").css({
                "transform": "rotateZ(180deg)",
                "transition": "all 0.4s"
            });
        }
        else {
            $("#top").css({
                "transform": "rotateZ(0deg)",
                "transition": "all 0.4s"
            });
        }
    });


    $(window).scroll(() => {
        var up = $(window).scrollTop();
        var navbar = $("#navbar");
        var sizemenu = $("#menu");
        if (up > 150) {
            sizemenu.css({
                "position": "fixed",
                "top": "0",
                "z-index": "999",
                "height": "100vh"
            });
            navbar.css({
                "position": "fixed",
                "top": "0",
                "width": "100%",
                "z-index": "1000"
            })
        } else {
            navbar.css({
                "position": "relative",
                "transform": "translateY(0px)",
                "z-index": "1000"
            })
        }
    });

    $(window).scroll(() => {
        var up = $(window).scrollTop();
        var scrollbtn = $("#scroll-top");
        if (up > 200) {
            scrollbtn.css({
                "bottom": "15px",
                "transition": "all 0.4s",
            })
        } else {
            scrollbtn.css({
                "bottom": "-60px",
            })
        }
    });

    $('#scroll-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1200);
        return false;
    });

});
