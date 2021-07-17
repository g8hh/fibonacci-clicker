$(document).ready(function () {
    $("#topbut1").hover(function () {
        $("#open").css("left", "0");
        $("#open").css("width", "105px");
    }, function () {
        $("#open").css("left", openleft + "px");
        $("#open").css("width", openwidth + "px");
    });
    $("#topbut2").hover(function () {
        $("#open").css("left", "108.72px");
        $("#open").css("width", "138px");
    }, function () {
        $("#open").css("left", openleft + "px");
        $("#open").css("width", openwidth + "px");
    });
    $("#topbut3").hover(function () {
        $("#open").css("left", "255px");
        $("#open").css("width", "105px");
    }, function () {
        $("#open").css("left", openleft + "px");
        $("#open").css("width", openwidth + "px");
    });
    $("#topbut4").hover(function () {
        $("#open").css("left", "362px");
        $("#open").css("width", "63px");
    }, function () {
        $("#open").css("left", openleft + "px");
        $("#open").css("width", openwidth + "px");
    });

    $(".topbut").hover(function () {
        $(this).children().css("color", "hsl(" + themeh + ",100%,50%)");
    }, function () {
        $(this).children().css("color", "hsl(0,0%,60%)");
    });

    $("#changeback").hover(function () {
        $("#infochangecanvas").css("opacity", "1");
        $("#infochangecanvas").css("display", "block");
    }, function () {
        $("#infochangecanvas").css("opacity", "0");
        $("#infochangecanvas").css("display", "none");
    });
    $("#fibospiral").hover(function () {
        spiralon = true;
        corSpiral = Math.random() * 360;
    }, function () {
        spiralon = false;
    });

    $("#bonusicon").hover(function () {
        $("#infobonus").css("opacity", "1");
        $("#infobonus").css("display", "block");
    }, function () {
        $("#infobonus").css("opacity", "0");
        $("#infobonus").css("display", "none");
    });
    $("#buginfo").hover(function () {
        $("#infobug").css("opacity", "1");
        $("#infobug").css("display", "block");
    }, function () {
        $("#infobug").css("opacity", "0");
        $("#infobug").css("display", "none");
    });

    $("#exploon").hover(function () {
        $("#infoexplo").css("opacity", "1");
        $("#infoexplo").css("display", "block");
    }, function () {
        $("#infoexplo").css("opacity", "0");
        $("#infoexplo").css("display", "none");
    });

    $("#particleson").hover(function () {
        $("#infoparticles").css("opacity", "1");
        $("#infoparticles").css("display", "block");
    }, function () {
        $("#infoparticles").css("opacity", "0");
        $("#infoparticles").css("display", "none");
    });

    $("#changeSquares").hover(function () {
        $("#infosquares").css("opacity", "1");
        $("#infosquares").css("display", "block");
    }, function () {
        $("#infosquares").css("opacity", "0");
        $("#infosquares").css("display", "none");
    });
    $("#levelzone").hover(function () {
        $("#infofl").css("opacity", "1");
        $("#infofl").css("display", "block");
    }, function () {
        $("#infofl").css("opacity", "0");
        $("#infofl").css("display", "none");
    });
    $("#pointszone").hover(function () {
        $("#infopts").css("opacity", "1");
        $("#infopts").css("display", "block");
    }, function () {
        $("#infopts").css("opacity", "0");
        $("#infopts").css("display", "none");
    });
    $("#appzone").hover(function () {
        $("#infoapp").css("opacity", "1");
        $("#infoapp").css("display", "block");
    }, function () {
        $("#infoapp").css("opacity", "0");
        $("#infoapp").css("display", "none");
    });
    $("#rpzone").hover(function () {
        $("#inforp").css("opacity", "1");
        $("#inforp").css("display", "block");
    }, function () {
        $("#inforp").css("opacity", "0");
        $("#inforp").css("display", "none");
    });
    $("#powerzone").hover(function () {
        $("#infopower").css("opacity", "1");
        $("#infopower").css("display", "block");
    }, function () {
        $("#infopower").css("opacity", "0");
        $("#infopower").css("display", "none");
    });
    $("#upwhat1").hover(function () {
        $("#infoup1").css("opacity", "1");
        $("#infoup1").css("display", "block");
    }, function () {
        $("#infoup1").css("opacity", "0");
        $("#infoup1").css("display", "none");
    });
    $("#upwhat2").hover(function () {
        $("#infoup2").css("opacity", "1");
        $("#infoup2").css("display", "block");
    }, function () {
        $("#infoup2").css("opacity", "0");
        $("#infoup2").css("display", "none");
    });
    $("#upwhat3").hover(function () {
        $("#infoup3").css("opacity", "1");
        $("#infoup3").css("display", "block");
    }, function () {
        $("#infoup3").css("opacity", "0");
        $("#infoup3").css("display", "none");
    });
    $("#upwhat4").hover(function () {
        $("#infoup4").css("opacity", "1");
        $("#infoup4").css("display", "block");
    }, function () {
        $("#infoup4").css("opacity", "0");
        $("#infoup4").css("display", "none");
    });
    $("#upwhat5").hover(function () {
        $("#infoup5").css("opacity", "1");
        $("#infoup5").css("display", "block");
    }, function () {
        $("#infoup5").css("opacity", "0");
        $("#infoup5").css("display", "none");
    });
    $("#uplevel1").hover(function () {
        $("#infolevel1").css("opacity", "1");
        $("#infolevel1").css("display", "block");
    }, function () {
        $("#infolevel1").css("opacity", "0");
        $("#infolevel1").css("display", "none");
    });
    $("#uplevel2").hover(function () {
        $("#infolevel2").css("opacity", "1");
        $("#infolevel2").css("display", "block");
    }, function () {
        $("#infolevel2").css("opacity", "0");
        $("#infolevel2").css("display", "none");
    });
    $("#uplevel3").hover(function () {
        $("#infolevel3").css("opacity", "1");
        $("#infolevel3").css("display", "block");
    }, function () {
        $("#infolevel3").css("opacity", "0");
        $("#infolevel3").css("display", "none");
    });
    $("#uplevel4").hover(function () {
        $("#infolevel4").css("opacity", "1");
        $("#infolevel4").css("display", "block");
    }, function () {
        $("#infolevel4").css("opacity", "0");
        $("#infolevel4").css("display", "none");
    });
    $("#uplevel5").hover(function () {
        $("#infolevel5").css("opacity", "1");
        $("#infolevel5").css("display", "block");
    }, function () {
        $("#infolevel5").css("opacity", "0");
        $("#infolevel5").css("display", "none");
    });
    $("#reset2").hover(function () {
        $("#inforeset").css("opacity", "1");
        $("#inforeset").css("display", "block");
    }, function () {
        $("#inforeset").css("opacity", "0");
        $("#inforeset").css("display", "none");
    });



});

function soundVerifier(string) {
    if (soundOn) {
        var novo = 0;
        if (string == "click")
            novo = 1;
        else if (string == "ExplosionSound")
            novo = 2;
        else if (string == "upgradeSound")
            novo = 3;
        else if (string == "notSound")
            novo = 4;
        else if (string == "achievementSound")
            novo = 5;
        else if (string == "menuSound")
            novo = 6;
        else if (string == "miniExploSound")
            novo = 7;
        else if (string == "researchSound")
            novo = 8;



        for (var a = 1; a != 0; a++) {
            if (document.getElementById(string + a) != null) {
                if (document.getElementById(string + a).paused)
                    document.getElementById(string + a).play(), a = -1;
            }
            else {
                createSound(novo);
                document.getElementById(string + a).play();
                a = -1;
            }
        }
    }
}

$("#myCanvas, #ask-to-click").click(function () {
    if (cheat == 0) {
        cheat = 1;
        clicks++;
        soundVerifier("click");
        if (drawparticles == 1)
            particle.insere(power, 1);
        else {

            for (var i = 0; i < 100; i++) {
                setTimeout(function () {
                    points += power / 100;
                    totalpoints += power / 100;
                }, i * 10);
            }
            test();
        }
        var teste = Math.random();
        if (teste <= bonuschance) {
            if (document.getElementById("bonusicon") == undefined)
                bonusanim();
        }
        setTimeout(function () {
            cheat = 0;
        }, 50)
    }
});
$("#topbut1").click(function () {
    soundVerifier("menuSound");
    $("#up").delay(450).fadeIn(400);
    $("#ach").fadeOut(400);
    $("#research").fadeOut(400);
    $("#stats").fadeOut(400);
    openleft = 0, openwidth = 105;
});
$("#topbut2").click(function () {
    soundVerifier("menuSound");
    $("#up").fadeOut(400);
    $("#ach").delay(450).fadeIn(400);
    $("#research").fadeOut(400);
    $("#stats").fadeOut(400);
    openleft = 108.72, openwidth = 138;
});
$("#topbut3").click(function () {
    soundVerifier("menuSound");
    $("#up").fadeOut(400);
    $("#ach").fadeOut(400);
    $("#research").delay(450).fadeIn(400);
    $("#stats").fadeOut(400);
    openleft = 255, openwidth = 105;
});
$("#gotoresearch").click(function () {
    soundVerifier("menuSound");
    $("#up").fadeOut(400);
    $("#ach").fadeOut(400);
    $("#research").delay(450).fadeIn(400);
    $("#stats").fadeOut(400);
    openleft = 255, openwidth = 95;
    fecharappup2();
});
$("#topbut4").click(function () {
    soundVerifier("menuSound");
    $("#up").fadeOut(400);
    $("#ach").fadeOut(400);
    $("#research").fadeOut(400);
    $("#stats").delay(450).fadeIn(400);
    openleft = 362, openwidth = 63;
});

$("#clicktext").click(function () {
    soundVerifier("menuSound");
    if ($("#up1").css("display") == 'block') {
        fecharclickup();
    } else if ($("#up4").css("display") == 'block' || $("#up6").css("display") == 'block') {
        if (researchapp[0] == 1)
            fecharappup();
        else
            fecharappup2();
        setTimeout(function () {
            abrirclickup();
        }, 200);
    } else {
        abrirclickup();
    }
});
$("#apprenticestext").click(function () {
    soundVerifier("menuSound");

    if ($("#up4").css("display") == 'block' || $("#up6").css("display") == 'block') {
        if (researchapp[0] == 1)
            fecharappup();
        else
            fecharappup2();
    } else if ($("#up1").css("display") == 'block') {
        fecharclickup();
        setTimeout(function () {
            if (researchapp[0] == 1)
                abrirappup();
            else
                abrirappup2();
        }, 300);
    } else {

        if (researchapp[0] == 1)
            abrirappup();
        else
            abrirappup2();
    }
});


$(document).ready(function () {
    $("#uplevel1").mouseenter(function () {
        if (levelfinished < 2)
            document.getElementById("textinfolevel1").innerHTML = "Level " + uplevel[0] + ": " + up1Value(0).toFixed(1) + "<br>Level " + (uplevel[0] + 1) + ": " + up1Value(1).toFixed(1);
        else
            document.getElementById("textinfolevel1").innerHTML = "Level " + uplevel[0] + ": " + up1Value(0).toFixed(2) + "<br>Level " + (uplevel[0] + 1) + ": " + up1Value(1).toFixed(2);
    });
});
$(document).ready(function () {
    $("#uplevel2").mouseenter(function () {
        if (uplevel[1] == 25)
            document.getElementById("textinfolevel2").innerHTML = "Level " + uplevel[1] + ": " + (up2Value(0) * 100).toFixed(2) + "%";
        else
            document.getElementById("textinfolevel2").innerHTML = "Level " + uplevel[1] + ": " + (up2Value(0) * 100).toFixed(2) + "%<br>Level " + (uplevel[1] + 1) + ": " + (up2Value(1) * 100).toFixed(2) + "%";

    });
});
$(document).ready(function () {
    $("#uplevel3").mouseenter(function () {
        document.getElementById("textinfolevel3").innerHTML = "Level " + uplevel[2] + ": " + up3Value(0).toFixed(0) + "x<br>Level " + (uplevel[2] + 1) + ": " + up3Value(1).toFixed(0) + "x";

    });
});
$(document).ready(function () {
    $("#uplevel4").mouseenter(function () {
        document.getElementById("textinfolevel4").innerHTML = "Level " + uplevel[3] + ": " + up4Value(0).toFixed(0) + "<br>Level " + (uplevel[3] + 1) + ": " + up4Value(1).toFixed(0);
    });
});
$(document).ready(function () {
    $("#uplevel5").mouseenter(function () {
        if (levelfinished < 2)
            document.getElementById("textinfolevel5").innerHTML = "Level " + uplevel[4] + ": " + up5Value(0).toFixed(3) + "<br>Level " + (uplevel[4] + 1) + ": " + up5Value(1).toFixed(3);
        else
            document.getElementById("textinfolevel5").innerHTML = "Level " + uplevel[4] + ": " + up5Value(0).toFixed(4) + "<br>Level " + (uplevel[4] + 1) + ": " + up5Value(1).toFixed(4);
    });
});
function fecharclickup() {
    $("#cover1").animate({
        width: "420px"
    }, 100);
    setTimeout(function () {
        $("#cover1").css({
            position: "relative"
        });
        $("#up1").css({
            display: "none"
        });
        $("#up2").css({
            display: "none"
        });
        $("#up3").css({
            display: "none"
        });
        $("#cover1").animate({
            height: "0"
        }, 100);
        $("#setaupg").css({
            transform: "rotateZ(0deg)"
        });
        $("#setaupg").css({
            top: "0px"
        });
    }, 200);

}

function abrirclickup() {
    $("#cover1").animate({
        height: "270px"
    }, 100);
    setTimeout(function () {
        $("#cover1").css({
            position: "absolute"
        });
        $("#up1").css({
            display: "block"
        });
        $("#up2").css({
            display: "block"
        });
        $("#up3").css({
            display: "block"
        });
        $("#setaupg").css({
            transform: "rotateZ(90deg)"
        });
        $("#setaupg").css({
            top: "2px"
        });
        $("#cover1").animate({
            width: "0"
        }, 100);
    }, 200);


}

function fecharappup() {
    $("#cover2").animate({
        width: "420px"
    }, 100);
    $("#cover2").css({
        position: "absolute",
        top: "90px"
    });
    $("#cover2").animate({
        height: "180px"
    }, 100);
    setTimeout(function () {
        $("#up4").css({
            display: "none"
        });
        $("#up5").css({
            display: "none"
        });
        $("#cover2").css({
            display: "none"
        });
        $("#setaapp").css({
            transform: "rotateZ(0deg)"
        });
        $("#setaapp").css({
            top: "0px"
        });
    }, 200);
}

function fecharappup2() {
    $("#cover2").animate({
        width: "420px"
    }, 100);
    $("#cover2").css({
        position: "absolute",
        top: "90px"
    });
    $("#cover2").animate({
        height: "180px"
    }, 100);
    setTimeout(function () {
        $("#up6").css({
            display: "none"
        });
        $("#cover2").css({
            display: "none"
        });
        $("#setaapp").css({
            transform: "rotateZ(0deg)"
        });
        $("#setaapp").css({
            top: "0px"
        });
    }, 200);
}

function abrirappup() {
    $("#cover2").css({
        display: "block",
        width: "420px",
        position: "absolute",
        top: "90px",
        height: "180px"
    });
    $("#up4").css({
        display: "block"
    });
    $("#up5").css({
        display: "block"
    });
    $("#cover2").animate({
        height: "0"
    }, 200);
    $("#setaapp").css({
        transform: "rotateZ(90deg)"
    });
    $("#setaapp").css({
        top: "2px"
    });
}

function abrirappup2() {
    $("#cover2").css({
        display: "block",
        width: "420px",
        position: "absolute",
        top: "90px",
        height: "180px"
    });
    $("#up6").css({
        display: "block"
    });
    $("#cover2").animate({
        height: "0"
    }, 200);
    $("#setaapp").css({
        transform: "rotateZ(90deg)"
    });
    $("#setaapp").css({
        top: "2px"
    });
}

function abrefechacolors() {
    if ($("#colors").css("display") == 'block') {
        $("#colors").animate({
            height: "0"
        }, 200);
        setTimeout(function () {
            $("#colors").css({
                display: "none"
            });
            $("#themecolor").css({
                top: "340px"
            }, 200);
            $("#randomize").css({
                top: "310px"
            }, 200);
            $("#facediv").css({
                top: "290px"
            }, 200);
            $("#twitterdiv").css({
                top: "260px"
            }, 200);
            $("#followme").css({
                top: "225px"
            }, 200);
        }, 200);
    } else {
        $("#colors").css({
            display: "block"
        });
        $("#colors").animate({
            height: "50px"
        }, 200);
        $("#themecolor").css({
            top: "290px"
        }, 200);
        $("#randomize").css({
            top: "260px"
        }, 200);
        $("#facediv").css({
            top: "240px"
        }, 200);
        $("#twitterdiv").css({
            top: "210px"
        }, 200);
        $("#followme").css({
            top: "175px"
        }, 200);
    }
}

function onoffgraphs(a) {
    if (a == 1) {
        if (drawparticles == 1)
            drawparticles = 0, document.getElementById("particlestext").innerHTML = "Enable particle effects";
        else
            drawparticles = 1, document.getElementById("particlestext").innerHTML = "Disable particle effects";
    }
    else if (a == 2) {
        if (drawexplosions == 1)
            drawexplosions = 0, document.getElementById("explosionstext").innerHTML = "Enable explosions effects";
        else
            drawexplosions = 1, document.getElementById("explosionstext").innerHTML = "Disable explosions effects";
    }
}

function menuchange(a) {
    if (a == 1 && backgroundColorCanvas != "white")
        changeBack();
    else if (a == 2 && backgroundColorCanvas == "white")
        changeBack();

}
function resetResearch() {
    for (var i = 0; i < researchapp.length; i++) {
        if (researchapp[i] == 1)
            researchpoints += researchacr[i], researchapp[i] = 0;
    }
    for (var i = 0; i < researchpower.length; i++) {
        if (researchpower[i] == 1)
            researchpoints += researchpcr[i], researchpower[i] = 0;
    }
    apprentices = 0;
    rpfunc();
    atualizardocument();

}
