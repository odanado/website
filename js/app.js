"use strict";var EventBinder={goTop:function(a){$(a).on("click",function(){$(document.body).animate({scrollTop:0},300)})},pseudoHover:function(a){$(document.body).on("touchstart",a,function(){$(this).addClass("hover")}).on("touchend",a,function(){$(this).removeClass("hover")})}};$(function(){EventBinder.goTop(".btn-gotop"),EventBinder.pseudoHover("a, input")});