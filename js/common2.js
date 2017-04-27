var nc = {};
var package_ver = 'v0.5';

/*----------  VALIDATION  ----------*/
nc.elcheck = function(el) {
    'use strict';
    if ($(el).length > 0) {
        return true;
    } else {
        return false;
    };
}

/*----------  MEDIAQUARY  ----------*/
$.mediaquery({
    minWidth: [200, 480, 600, 768, 992, 1200],
    maxWidth: [1199, 991, 767, 599, 479],
    minHeight: [400, 800],
    maxHeight: [800, 400]
});

/*----------  EQUAL HEIGHT  ----------*/
nc.eqh = function(parentObj, childObj, a) {
    'use strict';
    if (nc.elcheck(parentObj)) {
        $(parentObj).each(function(index, el) {
            if (a == "destroy") {
                $(this).equalize("destroy");
            } else {
                $(this).equalize({
                    target: $(childObj)
                });
            };
        });
    };
}

/*----------  GETVAR  ----------*/
nc.getvar = function(v, default_v, val_type) {
    'use strict';
    if (val_type == 'n') {
        return v ? parseInt(v, 10) : default_v;
    }
    if (val_type == 'b') {
        if (v == 'true') {
            return true;
        } else if (v == 'false') {
            return false;
        } else {
            return default_v;
        }
    }
    if (val_type == 's') {
        if (v == 'false') {
            return false;
        } else {
            return v ? v : default_v;
        };

    }
}

/*----------  COUNTDOWN-CLOCK  ----------*/
nc.countdown = function(obj) {
    'use strict';

    var config = {
        day: parseInt($(obj).attr("data-day"), 10),
        month: parseInt($(obj).attr("data-month"), 10),
        year: parseInt($(obj).attr("data-year"), 10),
        hour: parseInt($(obj).attr("data-hr"), 10),
        min: parseInt($(obj).attr("data-min"), 10),
        sec: parseInt($(obj).attr("data-sec"), 10)
    }

    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(config.year, config.month - 1, config.day - 1);
    var d = new Date();
    var secondDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    if (d.getFullYear() == config.year && d.getMonth() == config.month - 1 && d.getDate() >= config.day) {
        var countdownHtml = '<div  style="overflow: hidden">';
        countdownHtml += '<h1 id="fin">Fini !</h1>'
        countdownHtml += '<p id= "message">L\'évènement Open Data à déjà eu lieu !<br/> Découvrez les équipes gagnantes </p></div>'
    } else if (d.getFullYear() == config.year && d.getMonth() > config.month - 1) {
        var countdownHtml = '<div style="overflow: hidden">';
        countdownHtml += '<h1 id="fin">Fini !</h1>'
        countdownHtml += '<p id="message">L\'évènement Open Data à déjà eu lieu !<br/>Découvrez les équipes gagnantes </p></div>'
    } else if (d.getFullYear() > config.year) {
        var countdownHtml = '<div  style="overflow: hidden; position: fixed; left: 35%; top: 45%">';
        countdownHtml += '<h1 id="fin">Fini !</h1>'
        countdownHtml += '<p id="message">L\'évènement Open Data à déjà eu lieu !<br/>Découvrez les équipes gagnantes </p></div>'
    } else {
        var countdownHtml = '<div class="inner-dashboard">';
        countdownHtml += '	<!-- DAYS -->';
        countdownHtml += '	<div class="dash days_dash">';
        countdownHtml += '		<div class="inner-dash">';
        countdownHtml += diffDays > 99 ? '<div class="digit">0</div>' : '';
        countdownHtml += '			<div class="digit">0</div>';
        countdownHtml += '			<div class="digit">0</div>';
        countdownHtml += '		</div>';
        countdownHtml += '		<span class="dash_title">Jours</span>';
        countdownHtml += '	</div>';
        countdownHtml += '	<!-- HOURS -->';
        countdownHtml += '	<div class="dash hours_dash">';
        countdownHtml += '		<div class="inner-dash">';
        countdownHtml += '			<div class="digit">0</div>';
        countdownHtml += '			<div class="digit">0</div>';
        countdownHtml += '		</div>';
        countdownHtml += '		<span class="dash_title">Heures</span>';
        countdownHtml += '	</div>';
        countdownHtml += '	<!-- MINIUTES -->';
        countdownHtml += '	<div class="dash minutes_dash">';
        countdownHtml += '		<div class="inner-dash">';
        countdownHtml += '			<div class="digit">0</div>';
        countdownHtml += '			<div class="digit">0</div>';
        countdownHtml += '		</div>';
        countdownHtml += '		<span class="dash_title">Min</span>';
        countdownHtml += '	</div>';
        countdownHtml += '	<!-- SECONDS -->';
        countdownHtml += '	<div class="dash seconds_dash">';
        countdownHtml += '		<div class="inner-dash">';
        countdownHtml += '			<div class="digit">0</div>';
        countdownHtml += '			<div class="digit">0</div>';
        countdownHtml += '		</div>';
        countdownHtml += '		<span class="dash_title">Sec</span>';
        countdownHtml += '	</div>';
        countdownHtml += '</div>';
    }


    $(obj).html(countdownHtml);

    // DESKTOP CLOCK
    $(obj).countDown({
        targetDate: {
            'day': config.day,
            'month': config.month,
            'year': config.year,
            'hour': config.hour,
            'min': config.min,
            'sec': config.sec
        },
        omitWeeks: true
    });
}

/*----------  BACKGROUND SLIDER  ----------*/
nc.bgSlider = function(setting) {
    'use strict';
    $(setting.obj).vegas({
        delay: setting.delay,
        slides: setting.slides,
        animation: setting.effect
    });
}

/*----------  ANIMATION OUT  ----------*/
nc.animationOut = function(obj) {
    $(obj + " .animated").each(function() {
        $(this).removeClass($(this).attr("data-animOut"));
        $(this).removeClass($(this).attr("data-animIn"));
        $(this).addClass($(this).attr("data-animOut"));
    });
}

/*----------  ANIMATION IN  ----------*/
nc.animationIn = function(obj) {
    $(obj + " .animated").each(function() {
        $(this).removeClass($(this).attr("data-animOut"));
        $(this).removeClass($(this).attr("data-animIn"));
        $(this).addClass($(this).attr("data-animIn"));
    });
}



nc.common = function() {

    /*----------  SET BACKGROUND-IMAGE  ----------*/
    if (nc.elcheck("[data-bgImage]")) {
        $("[data-bgImage]").each(function(index, el) {
            $(this).css({
                backgroundImage: "url(" + $(this).attr("data-bgImage") + ")"
            });
        });
    }

    /*----------  COUNTDOWN-CLOCK  ----------*/
    if (nc.elcheck(".countdown-widget")) {
        var countdown = 0;
        $(".countdown-widget").each(function(index, el) {
            var obj = 'countdown' + countdown;
            $(this).children('div').attr("id", obj);
            nc.countdown("#" + obj);
            countdown++;
        });
    }
}

nc.videoBg = function(obj, imglist) {
    'use strict';
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        $(obj).css("display", "none");
    } else {
        $(obj).css("display", "block");
        $(obj).YTPlayer();
    }
};
(function() {
    'use strict';

    $(window).load(function() {

        /*----------  PAGE-LOADER  ----------*/
        if (nc.elcheck(".page-loader-wrapper")) {
            $(".page-loader-wrapper").fadeOut(800);
        }

    });

    jQuery(document).ready(function($) {

        $('html').before('<!-- ' + package_ver + ' -->');

        /*------------- Plus TRANSITION ------------------*/
        if (nc.elcheck("#plus")) {
            $("#plus").on("click", function() {
                var pageWrapper = $("#page-wrapper");
                var animated = ".animated"
                var delay1 = 100;
                var delay2 = 100;
                var pageUrl = $(this).attr("data-page");

                if (pageUrl == "home-page") {
                    nc.animationOut("#pages");

                    setTimeout(function() {
                        $("#pages").html(" ");
                        pageWrapper.removeClass("full");
                        pageWrapper.addClass("active-home");

                        setTimeout(function() {
                            if (nc.elcheck(animated)) {
                                $("#page-wrapper .home-page").removeClass("hidden");
                                $(".text-animarion").removeClass("hide-text");
                                nc.animationIn(".home-page");
                                nc.animationIn(".text-animarion");
                            }
                        }, delay1);
                    }, delay2);
                } else {
                    if (pageWrapper.hasClass("active-home")) {
                        if (nc.elcheck(animated)) {
                            nc.animationOut(".home-page");
                            nc.animationOut(".text-animarion");
                        }

                        setTimeout(function() {
                            pageWrapper.removeClass("active-home");
                            $("#page-wrapper .home-page").addClass("hidden");
                            $(".text-animarion").addClass("hide-text");
                            pageWrapper.addClass("full");
                            setTimeout(function() {
                                $.get(pageUrl, function(data) {
                                    $("#pages").html(data);
                                    nc.animationIn("#pages");
                                    nc.common();
                                });
                            }, delay1);
                        }, delay2);
                    } else {
                        nc.animationOut("#pages");
                        setTimeout(function() {
                            $("#pages").html(" ");
                            $.get(pageUrl, function(data) {
                                $("#pages").html(data);
                                nc.animationIn("#pages");
                                nc.common();
                            });
                        }, delay1);
                    }
                }
            });
        }

        nc.common();

        /*----------  PAGE TRANSITION  ----------*/
        if (nc.elcheck("#bt-menu")) {
            $("#bt-menu").on("click", ".navigation .navlink", function() {
                var menu = $("#bt-menu");
                var pageWrapper = $("#page-wrapper");
                var animated = ".animated"
                var delay1 = 700;
                var delay2 = 1300;
                var pageUrl = $(this).attr("data-page");

                menu.removeClass("bt-menu-open");
                menu.addClass("bt-menu-close");

                if (pageUrl == "home-page") {
                    nc.animationOut("#pages");

                    setTimeout(function() {
                        $("#pages").html(" ");
                        pageWrapper.removeClass("full");
                        pageWrapper.addClass("active-home");

                        setTimeout(function() {
                            if (nc.elcheck(animated)) {
                                $("#page-wrapper .home-page").removeClass("hidden");
                                $(".text-animarion").removeClass("hide-text");
                                nc.animationIn(".home-page");
                                nc.animationIn(".text-animarion");
                            }
                        }, delay1);
                    }, delay2);
                } else {
                    if (pageWrapper.hasClass("active-home")) {
                        if (nc.elcheck(animated)) {
                            nc.animationOut(".home-page");
                            nc.animationOut(".text-animarion");
                        }

                        setTimeout(function() {
                            pageWrapper.removeClass("active-home");
                            $("#page-wrapper .home-page").addClass("hidden");
                            $(".text-animarion").addClass("hide-text");
                            pageWrapper.addClass("full");
                            setTimeout(function() {
                                $.get(pageUrl, function(data) {
                                    $("#pages").html(data);
                                    nc.animationIn("#pages");
                                    nc.common();
                                });
                            }, delay1);
                        }, delay2);
                    } else {
                        nc.animationOut("#pages");
                        setTimeout(function() {
                            $("#pages").html(" ");
                            $.get(pageUrl, function(data) {
                                $("#pages").html(data);
                                nc.animationIn("#pages");
                                nc.common();
                            });
                        }, delay1);
                    }
                }
            });
        }

        nc.common();









        /*----------  RESPONSIVE  ----------*/
        $.mediaquery("bind", "mq-key", "(min-width: 992px)", {
            enter: function() {
                nc.eqh(".eqh", ".eqh > div", "");
            },
            leave: function() {
                nc.eqh(".eqh", ".eqh > div", "destroy");
            }
        });

        $.mediaquery("bind", "mq-key", "(min-width: 200px) and (max-width: 767px)", {
            enter: function() {

            },
            leave: function() {

            }
        });

    });
})();
    /*------------ MENU CHANGE -----------*/
    setInterval(function(){
        var btn = document.getElementById("btn");

        if(document.getElementById("page-wrapper").scrollTop >= 723){
            btn.style.backgroundColor = "rgb(203, 38, 132)";
        }
        else {
            btn.style.backgroundColor = "";
        }


    }, 150);

    setInterval(function(){
        var fleche = document.getElementById("fleche");
        fleche.style.transition = "2s opacity";
        if(fleche.style.opacity == "0"){
            fleche.style.opacity = "1";
        }
        else{
            fleche.style.opacity = "0";
        }
    }, 1000)
