(function(s) {
    var n;
    s(".secret__list").on("click", "li:not(.secret__li--active)", function() {
        n = s(this).parents(".secret__wrapper"), s(this).shitTab(n)
    }), s.fn.shitTab = function(n) {
        s(this).addClass("secret__li--active").siblings().removeClass("secret__li--active"), n.find(".secret__item").eq(s(this).index()).show(1, function() {
            s(this).addClass(".secret__item--active")
        }).siblings(".secret__item").hide(1, function() {
            s(this).removeClass(".secret__item--active")
        })
    }
})(jQuery);

(function(fr1) {
    var fr;
    fr1(".franchise__nav").on("click", "li:not(.franchise__li--active)", function() {
        fr = fr1(this).parents(".franchise__wrapper"), fr1(this).fuckTab(fr)
    }), fr1.fn.fuckTab = function(fr) {
        fr1(this).addClass("franchise__li--active").siblings().removeClass("franchise__li--active"), fr.find(".franchise__item").eq(fr1(this).index()).show(1, function() {
            fr1(this).addClass(".franchise__item--active")
        }).siblings(".franchise__item").hide(1, function() {
            fr1(this).removeClass(".franchise__item--active")
        })
    }
})(jQuery);

(function(fr1) {
    var fr;
    fr1(".franchise__nav").on("click", "li:not(.franchise__li--active)", function() {
        fr = fr1(this).parents(".franchise__wrapper"), fr1(this).fuckTab(fr)
    }), fr1.fn.fuckTab = function(fr) {
        fr1(this).addClass("franchise__li--active").siblings().removeClass("franchise__li--active"), fr.find(".franchise__item").eq(fr1(this).index()).show(1, function() {
            fr1(this).addClass(".franchise__item--active")
        }).siblings(".franchise__item").hide(1, function() {
            fr1(this).removeClass(".franchise__item--active")
        })
    }
})(jQuery);
