var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d"),
    LARGURA = 460,
    ALTURA = 580,
    Xcentro = 230,
    Ycentro = 230,
    time = 0,
    basearea = 14400,
    themeh = 200,
    apprentices = 0,
    teachpower = 0,
    bonuschancebase = 0.0002,
    bonusqtd = 0,
    points = 10,
    maxpoints = 0,
    researchpoints = 0,
    totalpoints = 0,
    power = 0,
    powerapp = 0,
    clicks = 0,
    level = 1,
    verlevel = 1,
    upgrade = [0, 0, 0, 0, 0],
    uplevel = [1, 1, 1, 1, 1],
    achievement = [1, 1, 1],
    achievpayed = [0, 0, 0],
    researchpower = [0, 0, 0, 0, 0, 0, 0, 0],
    researchapp = [0, 0, 0, 0, 0, 0, 0],
    backgroundColorCanvas = "white",
    next = 0,
    levelfinished = 1,
    researchpcr = [10e1, 10e2, 10e2, 10e3, 10e4, 10e4, 10e4, 10e5], //research power cost researchpoints
    researchacr = [10e1, 10e2, 10e2, 10e3, 10e4, 10e4, 10e5], //research apprentices cost researchpoints
    cheat = 0,
    openleft = 0,
    buying = [0, 0, 0, 0, 0],
    changingbase = false,
    changingcentro = false,
    tutorialdone = 0,
    soundOn = true,
    spiralon = false,
    insertSound,
    openwidth = 105,
    anguloBug = 303,
    drawparticles = 1,
    drawexplosions = 1;
load();
createSound(10);
changeBack();

function iniciar() {
    soundVerifier("menuSound");
    document.getElementById("menu").style.width = "0";
    document.getElementById("onoff").style.opacity = "0";
    document.getElementById("banner-container").style.opacity = "0";
    document.getElementById("menu1").style.opacity = "0";
    document.getElementById("menu2").style.opacity = "0";
    document.getElementById("menu3").style.opacity = "0";
    document.getElementById("whiteback").style.opacity = "0";
    document.getElementById("otherback").style.opacity = "0";

    tutorial();
    
    setTimeout(function () {
        document.getElementById("content").style.display = "block";
        document.getElementById("menu").style.display = "none";
        $("#content").css("opacity", "1");
    }, 500);
    changethemecolor(themeh);
    rpfunc();
    atualizardocument();
    iniciarresearchcost();
    apprenticesfunction();
    setInterval(function () {
        apprenticesfunction();
        save();
    }, 1000);
    achievementsfunc();
    atualtext();
    for (var p = 1; p < 6; p++){
        atualizarup(p);
    }

    functionidle();

    setTimeout(function () {
        makeTheBug();
    }, (Math.floor(Math.random() * 4) * 2500 + 15000));
    if (verlevel > 3){
        basearea = Math.pow(350, 2) / (Math.pow(2 * (fib(verlevel - 1)) + fib(verlevel - 2), 2));
    }
}



function changeBack() {
    if (backgroundColorCanvas == "white") {
        backgroundColorCanvas = "#002424";
        document.getElementById("changeback").style.backgroundColor = "white";
        document.getElementById("menu").style.backgroundColor = "#002424";
        document.getElementById("menu1").style.backgroundColor = "#002424";
        document.getElementById("menu2").style.backgroundColor = "#002424";
        document.getElementById("menu3").style.backgroundColor = "#002424";
        document.getElementById("onoff").style.backgroundColor = "#002424";
        document.getElementById("reset2").style.border = "2px solid white";
        document.getElementById("reset2").style.color = "white";
        document.getElementById("tuned").style.color = "white";
        document.getElementById("ask-to-click").style.color = "white";
        if (document.getElementById("bugicon") != null){
            document.getElementById("bugicon").style.color = "white";
        }
        document.getElementById("changeSquares").style.color = "white";
        document.getElementById("changeback").style.boxShadow =
            "0 1px 4px white";
        document.getElementById("soundicon").style.color = "white";
        document.getElementById("apprenticestext").style.color = "white";
        document.getElementById("apprenticestext").style.textShadow =
            "0 1px 2px white";
        document.getElementById("cover1").style.backgroundColor =
            backgroundColorCanvas;
        document.getElementById("cover2").style.backgroundColor =
            backgroundColorCanvas;
        document.getElementById("top").style.borderBottom =
            "1px solid rgba(360, 360,360, 0.15)";
        document.getElementById("someOptions").style.borderBottom = "1px solid rgba(360, 360,360, 0.15)";
        $(".menubox").css("box-shadow", "0 1px 4px hsla(0,0%,100%,0.5)");
        $(".menubox").css("color", "white");
        $(".updiv").css("box-shadow", "0 1px 4px hsla(0,0%,100%,0.5)");
        $(".achived").css("box-shadow", "0 1px 4px hsla(0,0%,100%,0.5)");
        $(".levelachiv").css("color", "white");
        $(".reward").css("color", "white");
        $(".what").css("color", "white");
        $("h1").css("color", "white");
        $("h4").css("color", "white");
        $(".info h1").css("color", "black");
        $(".info h4").css("color", "black");
        $("h1").css("text-shadow", "0 1px 2px white");
        $(".upwhat").css("color", "white");
        $(".uplevel").css("color", "white");
        $("#followme").css("color", "white");
        $("#followdiv i").css("color", "white");
        $("#fibospiral h2").css("color", "white");
        $("#exploon h2").css("color", "white");
        $("#particleson h2").css("color", "white");
        $("#buginfoicon").css("color", "white");
        $(".backbar").css("box-shadow", "0 1px 4px hsla(0,0%,100%,0.5)");

    } else {
        backgroundColorCanvas = "white";
        document.getElementById("changeback").style.backgroundColor = "black";
        document.getElementById("menu").style.backgroundColor = "white";
        document.getElementById("menu1").style.backgroundColor = "white";
        document.getElementById("menu2").style.backgroundColor = "white";
        document.getElementById("menu3").style.backgroundColor = "white";
        document.getElementById("onoff").style.backgroundColor = "white";
        document.getElementById("reset2").style.border = "2px solid black";
        document.getElementById("reset2").style.color = "black";
        document.getElementById("tuned").style.color = "black";
        if (document.getElementById("bugicon") != null)
            document.getElementById("bugicon").style.color = "black";
        document.getElementById("changeback").style.boxShadow = "0 1px 4px black";
        document.getElementById("changeSquares").style.color = "black";
        document.getElementById("soundicon").style.color = "black";
        document.getElementById("apprenticestext").style.color = "black";
        document.getElementById("ask-to-click").style.color = "black";
        document.getElementById("apprenticestext").style.textShadow =
            "0 1px 2px black";
        document.getElementById("clicktext").style.color = "black";
        document.getElementById("clicktext").style.textShadow =
            "0 1px 2px black";
        document.getElementById("cover1").style.backgroundColor = "white";
        document.getElementById("cover2").style.backgroundColor = "white";
        document.getElementById("top").style.borderBottom = "1px solid rgba(0, 0,0, 0.15)";
        document.getElementById("someOptions").style.borderBottom = "1px solid rgba(0, 0,0, 0.15)";
        $(".updiv").css("box-shadow", "0 1px 4px hsla(0,0%,0%,0.5)");
        $(".menubox").css("box-shadow", "0 1px 4px hsla(0,0%,0%,0.5)");
        $(".menubox").css("color", "black");
        $(".achived").css("box-shadow", "0 1px 4px hsla(0,0%,10%,0.5)");
        $(".levelachiv").css("color", "black");
        $(".reward").css("color", "black");
        $(".what").css("color", "black");
        $("h1").css("color", "black");
        $("h4").css("color", "black");
        $("h1").css("text-shadow", "0 1px 2px black");
        $(".contentbott").next().css("color", "black");
        $(".upwhat").css("color", "black");
        $(".uplevel").css("color", "black");
        $("#followme").css("color", "black");
        $("#followdiv i").css("color", "black");
        $("#fibospiral h2").css("color", "black");
        $("#exploon h2").css("color", "black");
        $("#particleson h2").css("color", "black");
        $("#buginfoicon").css("color", "black");
        $(".backbar").css("box-shadow", "0 1px 4px hsla(0,0%,0%,0.5)");
    }
}

function createSound(type) {
    const soundPath = "style/sound/"
    if (type == 1 || type == 10) {
        insertSound = document.createElement("audio");
        insertSound.setAttribute("src", soundPath + "clickSound.mp3");
        insertSound.setAttribute("preload", "auto");
        insertSound.setAttribute("controls", "none");
        insertSound.volume = 0.1;
        insertSound.style.display = "none";
        for (var a = 1; a != 0; a++) {
            if (document.getElementById("click" + a) == null)
                insertSound.setAttribute("id", "click" + a), a = -1;

        }
        document.body.appendChild(insertSound);
    }
    if (type == 2 || type == 10) {
        insertSound = document.createElement("audio");
        insertSound.setAttribute("src", soundPath + "ExplosionSound.mp3");
        insertSound.setAttribute("preload", "auto");
        insertSound.setAttribute("controls", "none");
        insertSound.volume = 0.4;
        insertSound.style.display = "none";
        for (var a = 1; a != 0; a++) {
            if (document.getElementById("ExplosionSound" + a) == null)
                insertSound.setAttribute("id", "ExplosionSound" + a), a = -1;

        }
        document.body.appendChild(insertSound);
    }
    if (type == 3 || type == 10) {
        insertSound = document.createElement("audio");
        insertSound.setAttribute("src", soundPath + "upgradeSound.mp3");
        insertSound.setAttribute("preload", "auto");
        insertSound.setAttribute("controls", "none");
        insertSound.volume = 1;
        insertSound.style.display = "none";
        for (var a = 1; a != 0; a++) {
            if (document.getElementById("upgradeSound" + a) == null)
                insertSound.setAttribute("id", "upgradeSound" + a), a = -1;

        }
        document.body.appendChild(insertSound);
    }
    if (type == 4 || type == 10) {
        insertSound = document.createElement("audio");
        insertSound.setAttribute("src", soundPath + "notSound.mp3");
        insertSound.setAttribute("preload", "auto");
        insertSound.setAttribute("controls", "none");
        insertSound.volume = 0.8;
        insertSound.style.display = "none";
        for (var a = 1; a != 0; a++) {
            if (document.getElementById("notSound" + a) == null)
                insertSound.setAttribute("id", "notSound" + a), a = -1;

        }
        document.body.appendChild(insertSound);
    }
    if (type == 5 || type == 10) {
        insertSound = document.createElement("audio");
        insertSound.setAttribute("src", soundPath + "Achievement.mp3");
        insertSound.setAttribute("preload", "auto");
        insertSound.setAttribute("controls", "none");
        insertSound.volume = 0.2;
        insertSound.style.display = "none";
        for (var a = 1; a != 0; a++) {
            if (document.getElementById("achievementSound" + a) == null)
                insertSound.setAttribute("id", "achievementSound" + a), a = -1;

        }
        document.body.appendChild(insertSound);
    }

    if (type == 6 || type == 10) {
        insertSound = document.createElement("audio");
        insertSound.setAttribute("src", soundPath + "Menu.mp3");
        insertSound.setAttribute("preload", "auto");
        insertSound.setAttribute("controls", "none");
        insertSound.volume = 0.2;
        insertSound.style.display = "none";
        for (var a = 1; a != 0; a++) {
            if (document.getElementById("menuSound" + a) == null)
                insertSound.setAttribute("id", "menuSound" + a), a = -1;

        }
        document.body.appendChild(insertSound);
    }

    if (type == 7 || type == 10) {
        insertSound = document.createElement("audio");
        insertSound.setAttribute("src", soundPath + "ExplosionSound.mp3");
        insertSound.setAttribute("preload", "auto");
        insertSound.setAttribute("controls", "none");
        insertSound.volume = 0.1;
        insertSound.style.display = "none";
        for (var a = 1; a != 0; a++) {
            if (document.getElementById("miniExploSound" + a) == null)
                insertSound.setAttribute("id", "miniExploSound" + a), a = -1;

        }
        document.body.appendChild(insertSound);
    }
    if (type == 8 || type == 10) {
        insertSound = document.createElement("audio");
        insertSound.setAttribute("src", soundPath + "researchSound.mp3");
        insertSound.setAttribute("preload", "auto");
        insertSound.setAttribute("controls", "none");
        insertSound.volume = 1;
        insertSound.style.display = "none";
        for (var a = 1; a != 0; a++) {
            if (document.getElementById("researchSound" + a) == null)
                insertSound.setAttribute("id", "researchSound" + a), a = -1;

        }
        document.body.appendChild(insertSound);
    }
}

function functionidle() {
    if (localStorage.getItem("z")) {
        date = Number(localStorage.getItem("z"));
        var d = new Date();
        d = d.getTime();
        var idleTime = Math.floor((d - date) / 1000);
        var gains = (maxpoints / 10000) * Math.pow(idleTime, 0.99) / 5;
        points += gains;
        totalpoints += gains;

        if (idleTime <= 60){
            var string = idleTime % 60 + " seconds";
        }
        else if (idleTime > 60 && idleTime < 3600) {
            var string = Math.floor(idleTime / 60) + " minutes and " + idleTime %
                60 + " seconds";
        }
        else if (idleTime >= 3600){
            var string = Math.floor(idleTime / 3600) + " hours " + Math.floor((
                idleTime % 3600) / 60) + " minutes and " + idleTime % 60 +
                " seconds";
        }
        var infoIdle = document.createElement("div");
        infoIdle.setAttribute("class", "info");
        infoIdle.setAttribute("id", "infoidle");
        infoIdle.setAttribute("onclick", "removeinfoidle()");
        infoIdle.style.height = "200px";

        document.getElementById("content").appendChild(infoIdle);

        var leftside = document.createElement("div");
        leftside.setAttribute("id", "leftside");
        leftside.style.left = 0;
        leftside.style.top = "30px";
        leftside.style.margin = "10px";
        leftside.style.width = "100px";
        leftside.style.position = "absolute";


        var rightside = document.createElement("div");
        rightside.setAttribute("id", "rightside");
        rightside.style.top = 0;
        rightside.style.right = 0;
        rightside.style.margin = "10px";
        rightside.style.width = "500px";
        rightside.style.position = "absolute";

        var imgFibo = document.createElement("img");
        imgFibo.setAttribute("src", "style/images/leofibo.jpg")
        imgFibo.style.width = "100px";
        var textInfoIdle1 = document.createElement("h2");
        textInfoIdle1.setAttribute("id", "infoidletext1");
        textInfoIdle1.innerHTML = "Welcome back you stayed " + string +
            ".<br>I chose some of my apprentices to help you while you were out. They helped you with " +
            gains.toFixed(1) + " &Phi;";
        var textInfoIdle2 = document.createElement("h2");
        textInfoIdle2.setAttribute("id", "infoidletext2");
        textInfoIdle2.innerHTML = "Click here to close"

        infoIdle.appendChild(leftside);
        infoIdle.appendChild(rightside);
        leftside.appendChild(imgFibo);
        rightside.appendChild(textInfoIdle1);
        rightside.appendChild(textInfoIdle2);

    }
}

function tutorial() {

    var tutorialBox = document.createElement("div");
    tutorialBox.setAttribute("class", "info");
    tutorialBox.setAttribute("id", "tutorial");
    tutorialBox.setAttribute("onclick", "removetutorial()");
    tutorialBox.style.height = "160px";

    document.getElementById("content").appendChild(tutorialBox);

    var leftside = document.createElement("div");
    leftside.setAttribute("id", "leftside");
    leftside.style.left = 0;
    leftside.style.top = "30px";
    leftside.style.margin = "10px";
    leftside.style.width = "100px";
    leftside.style.position = "absolute";


    var rightside = document.createElement("div");
    rightside.setAttribute("id", "rightside");
    rightside.style.top = 0;
    rightside.style.right = 0;
    rightside.style.margin = "10px";
    rightside.style.width = "340px";
    rightside.style.position = "absolute";


    var imgFibo = document.createElement("img");
    imgFibo.setAttribute("src", "style/images/leofibo.jpg")
    imgFibo.style.width = "100px";
    var textInfo1 = document.createElement("h2");
    textInfo1.setAttribute("id", "infoidletext1");
    textInfo1.innerHTML =
        "Welcome to Fibonacci idle.<br>To start playing click on the canvas on my left.";
    var textInfo2 = document.createElement("h2");
    textInfo2.setAttribute("id", "infoidletext2");
    textInfo2.innerHTML = "Click here to close"

    tutorialBox.appendChild(leftside);
    tutorialBox.appendChild(rightside);
    leftside.appendChild(imgFibo);
    rightside.appendChild(textInfo1);
    rightside.appendChild(textInfo2);
}

function removetutorial() {
    $("#tutorial").remove();
    soundVerifier("menuSound");
    tutorialdone = 1;
}

function removeinfoidle() {
    $("#infoidle").remove();
    soundVerifier("menuSound");
}

function save() {

    if(isThisKongregate()){
        kongregate.stats.submit('Points', points * levelfinished);
        kongregate.stats.submit('Clicks', clicks);
        kongregate.stats.submit('Time Played', time);
        kongregate.stats.submit('Research Points', researchpoints * levelfinished);
        kongregate.stats.submit('Level', levelfinished);
    }
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("a", points);

        localStorage.setItem("b", themeh);

        localStorage.setItem("c", time);

        localStorage.setItem("d", maxpoints);

        localStorage.setItem("e", researchpoints);

        localStorage.setItem("f", totalpoints);

        localStorage.setItem("l", clicks);

        localStorage.setItem("o", tutorialdone);

        localStorage.setItem("qwe", levelfinished);

        for (var a = 0; a < achievement.length; a++)
            localStorage.setItem("h" + a, achievement[a]);

        for (var a = 0; a < researchpower.length; a++)
            localStorage.setItem("i" + a, researchpower[a]);

        for (var a = 0; a < researchapp.length; a++)
            localStorage.setItem("j" + a, researchapp[a]);

        for (var a = 0; a < achievpayed.length; a++)
            localStorage.setItem("k" + a, achievpayed[a]);

        for (var a = 0; a < uplevel.length; a++)
            localStorage.setItem("m" + a, uplevel[a]);

        var d = new Date();
        d = d.getTime();
        localStorage.setItem("z", d);
    } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }

}

function load() {

    if (localStorage.getItem("a"))
        points = Number(localStorage.getItem("a"));

    if (localStorage.getItem("b"))
        themeh = Number(localStorage.getItem("b"));

    if (localStorage.getItem("c"))
        time = Number(localStorage.getItem("c"));

    if (localStorage.getItem("d"))
        maxpoints = Number(localStorage.getItem("d"));

    if (localStorage.getItem("e"))
        researchpoints = Number(localStorage.getItem("e"));

    if (localStorage.getItem("f"))
        totalpoints = Number(localStorage.getItem("f"));

    if (localStorage.getItem("l"))
        clicks = Number(localStorage.getItem("l"));

    if (localStorage.getItem("o"))
        tutorialdone = Number(localStorage.getItem("o"));

    if (localStorage.getItem("qwe"))
        levelfinished = Number(localStorage.getItem("qwe"));

    if (localStorage.getItem("h0")) {
        for (var a = 0; a < achievement.length; a++)
            achievement[a] = Number(localStorage.getItem("h" + a));
    }
    if (localStorage.getItem("i0")) {
        for (var a = 0; a < researchpower.length; a++)
            researchpower[a] = Number(localStorage.getItem("i" + a));
    }
    if (localStorage.getItem("j0")) {
        for (var a = 0; a < researchapp.length; a++)
            researchapp[a] = Number(localStorage.getItem("j" + a));

        if (localStorage.getItem("k0")) {
            for (var a = 0; a < achievpayed.length; a++)
                achievpayed[a] = Number(localStorage.getItem("k" + a));
        }


        if (localStorage.getItem("m0")) {
            for (var a = 0; a < uplevel.length; a++)
                uplevel[a] = Number(localStorage.getItem("m" + a));
        }

        achievementsload();
    }
    test();
    changethemecolor(themeh);
}

function atualizardocument() {
    $(document).ready(function () {
        $(".researchdivs").hover(function () {
            $(this).next().css("display", "block");
            $(this).next().css("opacity", "1");
        }, function () {
            $(this).next().css("display", "none");
            $(this).next().css("opacity", "0");
        });
        $(".researchdivsun").hover(function () {
            $(this).next().css("display", "block");
            $(this).next().css("opacity", "1");
        }, function () {
            $(this).next().css("display", "none");
            $(this).next().css("opacity", "0");
        });
    });
}

function iniciarresearchcost() {
    for (var i = 0; i <= 7; i++)
        document.getElementsByClassName('rpcost')[i].innerHTML =
            "Research Points: " + bigNumbers(researchpcr[i]);
    for (var i = 0; i <= 6; i++)
        document.getElementsByClassName('rpcost')[i + 8].innerHTML =
            "Research Points: " + bigNumbers(researchacr[i]);

    document.getElementsByClassName('rpcost')[15].innerHTML = "Research Points: " + bigNumbers(researchpower[7] * 2);

}

function nextvalue() {
    return Math.floor((totalpoints - 100) / 40);
}

function nexttext() {
    if (next != nextvalue()) {
        next = nextvalue();
        if (next >= 1)
            document.getElementById("nextstart").innerHTML =
                "Next reset: +<span id=nextrp>" +
                bigNumbers(next) +
                "</span> research points";
        else
            document.getElementById("nextstart").innerHTML =
                "Next reset: +<span id=nextrp>0</span> research points";
    }
}

function onoff() {
    soundVerifier("menuSound");
    if (document.getElementById("iconsoundmenu").style.color == "red") {
        document.getElementById("iconsoundmenu").style.color = "black", soundOn =
            false;
        document.getElementById("soundicon").className = "fa fa-volume-off";
    } else {
        document.getElementById("iconsoundmenu").style.color = "red", soundOn =
            true;
        document.getElementById("soundicon").className = "fa fa-volume-up";
    }
}

function confirmReset() {
    if (next > 0) {
        var confirmacao = confirm(
            "Your upgrades and achievements will start over  and you will gain " +
            next + " research points.");
        if (confirmacao == true)
            reset();
    }
}

function achievementsload() {

    //level
    var levelsnewachiv = 2;
    var formula1 = (sumarea(achievement[0] * levelsnewachiv - 1));
    document.getElementById("progbar1").style.width = 90 * points / formula1 +
        "%";
    document.getElementById("reward1").innerHTML = "Reward: " + formula1 / 2 + "&Phi;";
    document.getElementById("levelachiv1").innerHTML = "Level " + achievement[0];
    document.getElementById("prognum1").innerHTML = "Fibonacci Level " +
        achievement[0] * levelsnewachiv;


    //clicks
    var formula2 = 75 * achievement[1] + Math.pow(achievement[1], 2) * 25;
    document.getElementById("progbar2").style.width = 90 * clicks / formula2 + "%";
    document.getElementById("prognum2").innerHTML = clicks + "/" + formula2;
    document.getElementById("reward2").innerHTML = "Reward: " + formula2 / 10 + "&Phi;";
    document.getElementById("levelachiv2").innerHTML = "Level " + achievement[1];


    //time

    document.getElementById("progbar3").style.width = 90 * time / (60 * Math.pow(
        10, achievement[2] - 1)) + "%";
    document.getElementById("prognum3").innerHTML = time.toFixed(0) + "/" + (60 *
        Math.pow(10, achievement[2] - 1));
    document.getElementById("prognum3").innerHTML = (60 * Math.pow(10,
        achievement[2] - 1)) + "/" + (60 * Math.pow(10, achievement[2] - 1)),
        document.getElementById(
            "progbar3").style.width = 90 + "%";
    document.getElementById("reward3").innerHTML = "Reward: " + Math.pow(5,
        achievement[2]) + "&Phi;";
    document.getElementById("levelachiv3").innerHTML = "Level " + achievement[2];

}


function achievementsfunc() {
    //maxwidth é 90%
    //level
    var levelsnewachiv = 2;
    var formula1 = (sumarea(achievement[0] * levelsnewachiv - 1));
    if (90 * points / formula1 > 90)
        document.getElementById("progbar1").style.width = "90%";
    else
        document.getElementById("progbar1").style.width = 90 * points /
            formula1 + "%";
    if (points >= formula1) {
        soundVerifier("achievementSound");
        addsome(2, formula1 / 2, 10);
        achievement[0]++;
        formula1 = (sumarea(achievement[0] * levelsnewachiv - 1));
        document.getElementById("reward1").innerHTML = "Reward: " + formula1 / 2 + "&Phi;";
        document.getElementById("levelachiv1").innerHTML = "Level " + achievement[0];
        document.getElementById("prognum1").innerHTML = "Fibonacci Level " + achievement[0] * levelsnewachiv;
    }

    //clicks
    var formula2 = 75 * achievement[1] + Math.pow(achievement[1], 2) * 25;
    document.getElementById("progbar2").style.width = 90 * clicks / formula2 +
        "%";
    document.getElementById("prognum2").innerHTML = clicks + "/" + formula2;
    if (clicks >= formula2) {
        soundVerifier("achievementSound");
        addsome(2, formula2 / 10, 10);
        achievement[1]++;
        document.getElementById("reward2").innerHTML = "Reward: " + formula2 / 10 + "&Phi;";
        document.getElementById("levelachiv2").innerHTML = "Level " + achievement[1];
    }

    //time
    document.getElementById("progbar3").style.width = 90 * time / (60 * Math.pow(
        10, achievement[2] - 1)) + "%";
    document.getElementById("prognum3").innerHTML = time.toFixed(0) + "/" + (60 *
        Math.pow(10, achievement[2] - 1));
    if (time > (60 * Math.pow(10, achievement[2] - 1)))
        document.getElementById("prognum3").innerHTML = (60 * Math.pow(10,
            achievement[2] - 1)) + "/" + (60 * Math.pow(10, achievement[2] - 1)),
            document.getElementById(
                "progbar3").style.width = 90 + "%";
    if (time > (60 * Math.pow(10, achievement[2] - 1)) && clicks > (60 * Math.pow(
        8, achievement[2] - 1))) {
        soundVerifier("achievementSound");
        addsome(2, Math.pow(5, achievement[2]), 10);
        achievement[2]++;
        document.getElementById("reward3").innerHTML = "Reward: " + Math.pow(5,
            achievement[2]) + "&Phi;";
        document.getElementById("levelachiv3").innerHTML = "Level " +
            achievement[2];
    }

    setTimeout(function () {
        achievementsfunc();
        if (points > maxpoints)
            maxpoints = points;
    }, 100)
}

function addsome(tipo, pointshere, particlesnum, posx, posy) {
    if (drawparticles == 1) {
        if (tipo == 2) {
            for (var a = particlesnum; a > 0; a--) {
                particle.insere(pointshere / particlesnum, 2);
            }
        } else if (tipo == 3) {
            for (var a = particlesnum; a > 0; a--) {
                particle.insere(pointshere / particlesnum, 3, posx, posy);
            }
        }
    }
    else {
        for (var i = 0; i < 100; i++) {
            setTimeout(function () {
                points += pointshere / 100;
                totalpoints += pointshere / 100;
            }, i * 10);
        }
    }
}

function apprenticesfunction() {
    if (points > 0)
        powerapp = Math.pow(apprentices, 0.9) * Math.pow(points, 0.5) * Math.pow(teachpower, 0.9);
    else
        powerapp = 0;
    document.getElementById("app2").innerHTML = bigNumbers(apprentices);
    if (apprentices >= 1) {
        if (particle.num.length <= 10 && drawparticles == 1)
            particle.insere(powerapp, 1);
        else {

            for (var i = 0; i < 100; i++) {
                setTimeout(function () {
                    points += powerapp / 100;
                    totalpoints += powerapp / 100;
                }, i * 10);
            }
        }
        document.getElementById("app4").innerHTML = (Math.round(powerapp * 100) /
            100);
    } else {
        document.getElementById("app4").innerHTML = 0;
    }
}

function reset() {
    quadrados.num.splice(0, quadrados.num.length);
    particle.num.splice(0, particle.num.length);
    researchpoints += next;
    for (var i = 0; i < 5; i++)
        uplevel[i] = 1, upgrade[i] = 0;
    for (var i = 0; i < 3; i++)
        achievement[i] = 1, achievpayed[i] = 0;

    points = 0, maxpoints = 0, cheat = 0, next = 0, changingbase = false, level =
        1, verlevel = 1, clicks = 0, totalpoints = 0, basearea = 14400, time =
        0;
    if (researchapp[0] == 1)
        apprentices = 1;
    else
        apprentices = 0;
    test();
    rpfunc();
    achievementsfunc();
    for (var i = 0; i < 5; i++)
        upgradefunc(i), atualizarup(i + 1);
    document.getElementById("rptop2").innerHTML = bigNumbers(researchpoints);
    achievementsload();

}

function changethemecolor(a) {
    themeh = a;
    document.getElementById("themebutton").style.backgroundColor = "hsl(" +
        themeh + ",100%,50%)";
    document.getElementById("open").style.backgroundColor = "hsl(" + themeh +
        ",100%,50%)";
    document.getElementById("power").style.color = "hsl(" + themeh +
        ",100%,60%)";
    document.getElementById("rptop2").style.color = "hsl(" + themeh +
        ",100%,60%)";
    document.getElementById("points").style.color = "hsl(" + themeh +
        ",100%,60%)";
    document.getElementById("app2").style.color = "hsl(" + themeh +
        ",100%,60%)";
    document.getElementById("app4").style.color = "hsl(" + themeh +
        ",100%,60%)";
    document.getElementById("progbar1").style.backgroundColor = "hsl(" + themeh +
        ",100%,60%)";
    document.getElementById("progbar2").style.backgroundColor = "hsl(" + themeh +
        ",100%,60%)";
    document.getElementById("progbar3").style.backgroundColor = "hsl(" + themeh +
        ",100%,60%)";
    $("#topbar").css("border-bottom", "3px solid hsl(" + themeh + ",100%,50%)");
    var a = 0;
    for (a; a < 5; a++) {
        document.getElementsByClassName("bar")[a].style.backgroundColor =
            "hsl(" + themeh + ",100%,50%)";
    }
}
var quadrados = {
    num: [],
    insere: function (level, power) {
        this.num.push({
            area: 0,
            lado: 0.01,
            cor: Math.floor(Math.random() * 361),
            centrox: 0,
            centroy: 0
        });
        this.cor();
    },
    cor: function () {

        var i = this.num.length;
        if (i > 1) {
            var cor1 = this.num[i - 1].cor;
            var cor2 = this.num[i - 2].cor;
            var diferenca1 = Math.abs(cor1 - cor2);
            if (diferenca1 < 50)
                this.num[i - 1].cor = Math.floor(Math.random() * 361),
                    this.cor();
        }
    },
    randomize: function () {
        for (var i = 0; i < quadrados.num.length; i++) {
            this.num[i].cor = Math.floor(Math.random() * 361);
            if (i > 0) {
                var cor1 = this.num[i].cor;
                var cor2 = this.num[i - 1].cor;
                var diferenca1 = Math.abs(cor1 - cor2);
                if (diferenca1 < 50)
                    i--;
            }
        }
    },
    atualizar: function (a) {
        if (quadrados.num[a] === undefined) {
            var qtd = verlevel - quadrados.num.length;
            for (var i = 0; i <= qtd; i++) {
                quadrados.insere()
            }
        }
        if (points < sumarea(a + 1))
            this.num[a].area = (points - sumarea(a)) * basearea;
        else if (points >= sumarea(a + 1))
            this.num[a].area = fib(a + 1) * fib(a + 1) * basearea;

        this.num[a].lado = Math.sqrt(this.num[a].area);

        var lar = 0,
            alt = 0;
        if (a == 0) {
            this.num[a].lar = Xcentro, this.num[a].alt = Ycentro;

        } else if (a == 1) {
            this.num[a].lar = this.num[a - 1].lar - this.num[a].lado,
                this.num[a].alt = this.num[a - 1].alt;
        } else if (a == 2) {
            this.num[a].lar = Xcentro - this.num[a - 1].lado, this.num[
                a].alt = Ycentro - this.num[a].lado;
        } else if (a == 3) {
            this.num[a].lar = Xcentro + this.num[a - 1].lado / 2, this.num[
                a].alt = Ycentro - this.num[a - 1].lado;
        } else if (a % 4 == 0) {
            this.num[a].lar = this.num[a - 1].lar + this.num[a - 1].lado - this.num[a].lado,
                this.num[a].alt = this.num[a - 1].alt + this.num[a - 1].lado;
        } else if (a % 4 == 1) {

            this.num[a].lar = this.num[a - 1].lar - this.num[a].lado,
                this.num[a].alt = this.num[a - 1].alt + this.num[a - 1].lado - this.num[a].lado;
        } else if (a % 4 == 2) {
            this.num[a].lar = this.num[a - 1].lar,
                this.num[a].alt = this.num[a - 1].alt - this.num[a].lado;

        } else if (a % 4 == 3) {
            this.num[a].lar = this.num[a - 1].lar + this.num[a - 1].lado,
                this.num[a].alt = this.num[a - 1].alt;

        }

        this.num[a].centrox = this.num[a].lar + this.num[a].lado / 2;
        this.num[a].centroy = this.num[a].alt + this.num[a].lado / 2;
    },
    desenha: function () {

        quadrados.atualizar(verlevel - 1);
        for (var a = 0; a < verlevel; a++) {
            // if(this.num[a] != undefined){
            ctx.beginPath();

            ctx.rect(this.num[a].lar, this.num[a].alt, this.num[a].lado,
                this.num[a].lado);
            // create radial gradient
            if (this.num[a].lado > 0 && this.num[a].centrox > 0) {
                var grdd = ctx.createRadialGradient(this.num[a].centrox,
                    this.num[a].centroy, this.num[a].lado / 50,
                    this.num[a].centrox, this.num[a].centroy,
                    this.num[a].lado / 2.2);

                // light blue
                grdd.addColorStop(0, 'hsl(' + this.num[a].cor +
                    ', 100%, 55%)');
                // dark blue
                grdd.addColorStop(1, 'hsl(' + this.num[a].cor +
                    ', 100%, 50%)');
            }

            ctx.fillStyle = grdd;
            ctx.fill();
            var fontsize = this.num[a].lado / 2;
            ctx.font = fontsize + 'px "Aldrich", sans-serif';
            ctx.fillStyle = "white";
            var string = Math.floor(Math.sqrt(this.num[a].area / basearea));
            if (string > 1000 && string < 1000000)
                string = Math.floor(string / 1000) + "k";
            else if (string >= 1000000 && string < 1000000000)
                string = Math.floor(string / 1000000) + "M";
            else if (string >= 1000000000)
                string = Math.floor(string / 1000000000) + "B";
            var metrics = ctx.measureText(string);
            var width = metrics.width;
            while (width > this.num[a].lado * (8 / 9)) {
                fontsize /= 1.05;
                ctx.font = fontsize + 'px "Aldrich", sans-serif';
                metrics = ctx.measureText(string);
                width = metrics.width;
            }
            ctx.fillText(string, this.num[a].lar + this.num[a].lado / 2 -
                (width / 2), this.num[a].alt + this.num[a].lado * (
                    4 / 6));
            // }
        }
    }
}
var particle = {
    num: [],
    insere: function (inserepower, tipo, desdex, desdey) {
        var side = Math.floor(Math.random() * 4) + 1,
            posx = 0,
            posy = 0;
        if (tipo == 1) {
            switch (side) {
                case 1:
                    posx = 0;
                    posy = Math.floor(Math.random() * ALTURA) + 1;
                    break;
                case 2:
                    posx = LARGURA - 4;
                    posy = Math.floor(Math.random() * ALTURA) + 1;
                    break;
                case 3:
                    posx = Math.floor(Math.random() * LARGURA) + 1;
                    posy = 0;
                    break;
                case 4:
                    posx = Math.floor(Math.random() * LARGURA) + 1;
                    posy = ALTURA - 4;
                    break;
            }
        } else if (tipo == 2) {
            posx = 574 + Math.floor(Math.random() * 119);
            posy = 75;
        } else if (tipo == 3) {
            posx = desdex;
            posy = desdey;
        }
        var scale = (Math.sqrt(basearea) + 1) * inserepower / 4;
        scale = Math.min(6,scale)
        scale = Math.max(3,scale)
        this.num.push({
            x: posx,
            y: posy,
            cor: Math.floor(Math.random() * 361) /*rgbToHex(r,g,b)*/,
            atuallevel: verlevel - 1,
            atualpower: inserepower,
            velocidade: Math.random() * 4 + 6,
            vx: 0,
            vy: 0,
            lado: scale
        });
    },
    atualizarvelocidade: function (a) {

        var razao = Math.sqrt(Math.pow(quadrados.num[this.num[a].atuallevel]
            .centrox - this.num[a].x, 2) + Math.pow(quadrados.num[
                this.num[a].atuallevel]
                .centroy - this.num[a].y, 2));
        this.num[a].vx = (quadrados.num[this.num[a].atuallevel].centrox -
            this.num[a].x) * (this.num[a].velocidade / razao);
        this.num[a].vy = (quadrados.num[this.num[a].atuallevel].centroy -
            this.num[a].y) * (this.num[a].velocidade / razao);
    },
    desenha: function () {
        for (var a = 0; a < particle.num.length; a++) {
            ctx.beginPath();
            ctx.rect(this.num[a].x, this.num[a].y, this.num[a].lado,
                this.num[a].lado);
            if (this.num[a].vx == 0 && this.num[a].vy == 0)
                this.atualizarvelocidade(a);
            this.num[a].x += this.num[a].vx;
            this.num[a].y += this.num[a].vy;
            ctx.fillStyle = "hsl(" + this.num[a].cor + ",100%,50%)";



            if (quadrados.num[this.num[a].atuallevel].lado <= power) {

                var addhere = (this.num[a].atualpower * 10) / 10;
                for (var i = 0; i < 100; i++) {
                    setTimeout(function () {
                        points += addhere / 100;
                        totalpoints += addhere / 100;
                    }, i * 10);
                }
                if (points > maxpoints)
                    maxpoints = points;
                //arrendodamento a 6 casas decimais em baixo
                points = Math.round(points * 1000000) / 1000000;
                totalpoints = Math.round(totalpoints * 100000000) /
                    100000000;
                this.num[a].first = 1;
                this.num[a].firstpower = this.num[a].atualpower;
                this.num[a].atualpower = 0;
                this.atualizarvelocidade(a);
            } else if (IsInThisQuad(verlevel - 1, this.num[a].x, this.num[
                a].y) == true || IsInThisQuad(verlevel - 1, this.num[
                    a].x + this.num[a].lado,
                    this.num[a].y) == true || IsInThisQuad(verlevel - 1,
                        this.num[a].x, this.num[a].y + this.num[a].lado) ==
                true || IsInThisQuad(
                    verlevel - 1, this.num[a].x + this.num[a].lado,
                    this.num[a].y + this.num[a].lado) == true) {
                if (drawexplosions) {
                    createExplosion(this.num[a].x, this.num[a].y, "#525252",
                        this.num[a].atualpower);
                    createExplosion(this.num[a].x, this.num[a].y, "hsl(" +
                        this.num[a].cor + ",100%,50%)", this.num[a].atualpower
                    );
                }
                test();
                soundVerifier("ExplosionSound");
                if (this.num[a].first == 1) {
                    if (drawexplosions) {
                        createExplosion(this.num[a].x, this.num[a].y, "#525252",
                            this.num[a].atualpower);
                        createExplosion(this.num[a].x, this.num[a].y, "hsl(" +
                            this.num[a].cor + ",100%,50%)", this.num[a].atualpower
                        );
                    }
                    test();
                    soundVerifier("ExplosionSound");
                }
                var addhere = this.num[a].atualpower;
                for (var i = 0; i < 100; i++) {
                    setTimeout(function () {
                        points += addhere / 100;
                        totalpoints += addhere / 100;
                    }, i * 10);
                }
                //points += this.num[a].atualpower;
                //totalpoints += this.num[a].atualpower;
                if (points > maxpoints)
                    maxpoints = points;
                //arrendodamento a 6 casas decimais em baixo
                points = Math.round(points * 1000000) / 1000000;
                totalpoints = Math.round(totalpoints * 100000000) /
                    100000000;
                particle.num.splice(a, 1);

            }
            ctx.fill();
        }


    }

}

var sellerparticle = {
    num: [],
    insere: function (qual, qtd1) {
        var posx = quadrados.num[verlevel - 1].centrox - quadrados.num[
            verlevel - 1].lado / 2 + quadrados.num[verlevel - 1].lado * Math.random(),
            posy = quadrados.num[verlevel - 1].centroy - quadrados.num[
                verlevel - 1].lado / 2 + quadrados.num[verlevel - 1].lado * Math.random();
        var scale = (Math.sqrt(basearea) / 10) * power;
        if (scale < 4) {
            scale = 4;
        } else if (scale > 6) {
            scale = 6;
        }
        this.num.push({
            x: posx,
            y: posy,
            cor: Math.floor(Math.random() * 361) /*rgbToHex(r,g,b)*/,
            atuallevel: verlevel - 1,
            atualpower: power,
            velocidade: Math.random() * 6 + 10,
            vx: 0,
            vy: 0,
            breakatxmin: 0,
            breakatxmax: 0,
            breakatymin: 0,
            breakatymax: 0,
            lado: scale,
            airpara: qual,
            qtd: qtd1
        });
    },
    atualizarvelocidade: function (a, b) {
        switch (b) {
            case 1:
                this.num[a].irparay = 145;
                break;
            case 2:
                this.num[a].irparay = 230;
                break;
            case 3:
                this.num[a].irparay = 315;
                break;
            case 4:
                this.num[a].irparay = 190;
                break;
            case 5:
                this.num[a].irparay = 275;
                break;
        }
        this.num[a].breakatxmin = 710;
        this.num[a].breakatxmax = 860;
        this.num[a].breakatymin = this.num[a].irparay;
        this.num[a].breakatymax = this.num[a].irparay + 52;
        this.num[a].irparay += 40 * Math.random() + 1;
        this.num[a].irparax = 712 + 145 * Math.random();

        var razao = Math.sqrt(Math.pow(this.num[a].irparax - this.num[a]
            .x, 2) + Math.pow(this.num[a].irparay - this.num[a]
                .y, 2));
        this.num[a].vx = (this.num[a].irparax - this.num[a].x) * (this.num[
            a].velocidade / razao);
        this.num[a].vy = (this.num[a].irparay - this.num[a].y) * (this.num[
            a].velocidade / razao);
    },
    desenha: function () {
        for (var a = 0; a < sellerparticle.num.length; a++) {
            ctx.beginPath();
            ctx.rect(this.num[a].x, this.num[a].y, this.num[a].lado,
                this.num[a].lado);
            if (this.num[a].vx == 0 && this.num[a].vy == 0)
                this.atualizarvelocidade(a, this.num[a].airpara);
            this.num[a].x += this.num[a].vx;
            this.num[a].y += this.num[a].vy;
            ctx.fillStyle = "hsl(" + this.num[a].cor + ",100%,50%)";
            if (this.num[a].x >= this.num[a].breakatxmin && this.num[a]
                .x <= this.num[a].breakatxmax && this.num[a].y >= this.num[
                    a].breakatymin &&
                this.num[a].y <= this.num[a].breakatymax) {
                soundVerifier("miniExploSound");
                if (drawexplosions == 1) {
                    createSmallExplosion(this.num[a].x, this.num[a].y,
                        "#525252", this.num[a].lado / 1000);
                    createSmallExplosion(this.num[a].x, this.num[a].y,
                        "hsl(" + themeh + ",100%,50%)", this.num[a].lado /
                    1000);
                }


                upgrade[this.num[a].airpara - 1] += this.num[a].qtd /
                    10;
                upgrade[this.num[a].airpara - 1] = Math.round(upgrade[
                    this.num[a].airpara - 1] * 10) / 10; //medida para arrendodar valor porque antes eram perdidas alguns milesimos
                if (upgrade[this.num[a].airpara - 1] >= formula(uplevel[
                    this.num[a].airpara - 1], this.num[a].airpara)) {
                    upgrade[this.num[a].airpara - 1] -= formula(uplevel[
                        this.num[a].airpara - 1], this.num[a].airpara);
                    uplevel[this.num[a].airpara - 1]++;
                    buying[this.num[a].airpara - 1]--;
                }
                atualizarup(this.num[a].airpara);
                test();

                sellerparticle.num.splice(a, 1);
            }
            ctx.fill();
        }


    }


}

function desenhaEspiral() {
    ctx.beginPath();
    ctx.moveTo(quadrados.num[0].centrox + (quadrados.num[0].lado) / 2, quadrados.num[0].centroy - (quadrados.num[0].lado) / 2);
    var max = verlevel;
    for (var i = 0; i < max; i++) {
        var x = quadrados.num[i].centrox;
        var y = quadrados.num[i].centroy;
        var l = quadrados.num[i].lado / 2; //metade dos lados
        if ((i % 4) == 0)
            ctx.bezierCurveTo(x + l, y - l, x + l, y + l, x - l, y + l);
        else if ((i % 4) == 1)
            ctx.bezierCurveTo(x + l, y + l, x - l, y + l, x - l, y - l);
        else if ((i % 4) == 2)
            ctx.bezierCurveTo(x - l, y + l, x - l, y - l, x + l, y - l);
        else if ((i % 4) == 3)
            ctx.bezierCurveTo(x - l, y - l, x + l, y - l, x + l, y + l);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "hsl(" + corSpiral + ",100%,50%)";
        ctx.stroke();
    }
}

var render = function () {
    requestAnimationFrame(render);
    verify();
    desenha();
};

function ajustarCentro() {

    if (verlevel > 3) {
        var ord = verlevel - 1;
        var up = 0;
        var left = 0;
        var i = ord;
        var f = ord;
        while ((i % 4) != 2) {
            i--;
        };
        while ((f % 4) != 1) {
            f--;
        };
        do {
            up += quadrados.num[i].lado;
            i -= 4;
        } while (i >= 0)

        do {
            left += quadrados.num[f].lado;
            f -= 4;
        } while (f >= 0)

        if (isNaN(up) || isNaN(left))
            up = 0, left = 0;
        lado1 = quadrados.num[ord].lado;
        if (isNaN(lado1))
            lado1 = 0;
        lado2 = quadrados.num[ord - 1].lado;
        if (isNaN(lado2))
            lado2 = 0;
        lado3 = quadrados.num[ord - 2].lado;
        if (isNaN(lado3))
            lado3 = 0;
        if ((verlevel % 4) == 1) {
            y = 40 + (460 - (lado2 + lado1)) / 2 + up;
            x = left + (460 - (lado2 + lado3)) / 2;
        }
        else if ((verlevel % 4) == 2) {
            y = 40 + (460 - (lado2 + lado3)) / 2 + up;
            x = left + (460 - (lado1 + lado2)) / 2;
        }
        else if ((verlevel % 4) == 3) {
            y = 40 + (460 - (lado1 + lado2)) / 2 + up;
            x = left + (460 - (lado2 + lado3)) / 2;
        }
        else if ((verlevel % 4) == 0) {
            y = 40 + (460 - (lado3 + lado2)) / 2 + up;
            x = left + (460 - (lado2 + lado1)) / 2;
        }
        changeCentro(x, y);
    }
    else {
        y = 290;
        x = 230;
        changeCentro(x, y);
    }
}
function verify() {
    if (quadrados.num.length < verlevel) {
        quadrados.insere(level);
    }
    if (quadrados.num.length > 2 && changingbase == false) {
        basegoto();
        ajustarCentro();
    }
}

function basegoto() {

    var value = Math.pow(350, 2) / (Math.pow(2 * (fib(verlevel - 1)) + fib(verlevel - 2), 2));
    changingbase = true;
    add = (value - basearea) / (25);
    for (var a = 25; a > 0; a--) {
        setTimeout(function () {
            basearea += add;
            for (var a = 0; a < verlevel; a++)
                quadrados.atualizar(a);
            for (var a = 0; a < particle.num.length; a++)
                particle.atualizarvelocidade(a);

        }, 20 * a)
    }
    setTimeout(function () {
        changingbase = false;
    }, 1000)
}

function changeCentro(x, y) {
    var dn = 20; // difference need
    if (Math.abs(y - Ycentro) > dn || Math.abs(x - Xcentro) > dn) {
        changingcentro = true;
        addx = (x - Xcentro) / (25);
        addy = (y - Ycentro) / (25);
        for (var a = 25; a > 0; a--) {
            setTimeout(function () {
                Xcentro += addx;
                Ycentro += addy;

            }, 10 * a)
        }
        setTimeout(function () {
            changingcentro = false;
        }, 1000)
    }
}
render();


function desenha() {
    if (document.getElementById("bugicon") != null)
        moveTheBug();
    if (!spiralon)
        particle.desenha();
    if (sellerparticle.num.length > 0)
        sellerparticle.desenha();
    if (quadrados.num.length > 0 && !spiralon)
        quadrados.desenha();
    if (spiralon)
        desenhaEspiral();

}

function bigNumbers(bignum) {
    var num = Math.floor(bignum);
    if (num > 1e4 && num < 1e6)
        num = (num / 1000) + "k";
    else if (num >= 1e6 && num < 1e9)
        num = Math.floor(num / 1e3) / 1000 + "M";
    else if (num >= 1e9 && num < 1e12)
        num = Math.floor(num / 1e6) / 1000 + "B";
    else if (num >= 1e12 && num < 1e15)
        num = Math.floor(num / 1e9) / 1000 + "T";
    else if (num >= 1e15 && num < 1e18)
        num = Math.floor(num / 1e12) / 1000 + "q";
    else if (num >= 1e18 && num < 1e21)
        num = Math.floor(num / 1e15) / 1000 + "Q";
    else if (num >= 1e21 && num < 1e24)
        num = Math.floor(num / 1e18) / 1000 + "s";
    else if (num >= 1e24)
        num = Math.floor(num / 1e21) / 1000 + "S";

    return num;
}

function atualtext() {
    time += 0.1;

    document.getElementById("points").innerHTML = bigNumbers(points);
    var n = 0;
    if (points >= 1) {
        do {
            n++;
            if (points >= sumarea(n) && (n + 1) > level)
                level = n + 1;
            if (points >= sumarea(n))
                verlevel = n + 1;

        } while (points > sumarea(n))
    } else {
        verlevel = 1;
    }

    nexttext();
    setTimeout(function () {
        atualtext()
    }, 100);
}

function makeTheBug() {
    var bug = document.createElement("i");
    bug.setAttribute("class", "bug fa fa-bug");
    bug.setAttribute("id", "bugicon");
    document.getElementById("content").appendChild(bug);
    if (backgroundColorCanvas != "white")
        bug.style.color = "white";
    else
        bug.style.color = "black";

    bug.style.left = Math.floor(Math.random() * 460) + "px";
    bug.style.top = Math.floor(Math.random() * 500) + "px";
    bug.style.width = 55 + "px";
    bug.style.fontSize = "60px";
    bug.setAttribute("onclick", "bugadd()");
    $("#bugicon").animate({
        opacity: "1"
    }, 500);
    moveTheBug();
}

function bugadd() {
    addsome(3, power * 50, 1, parseFloat($("#bugicon").css("left")) + 30,
        parseFloat($("#bugicon").css("top")) + 30);
    $("#bugicon").remove();
    anguloBug = 303;
    setTimeout(function () {
        makeTheBug();
    }, (Math.floor(Math.random() * 8) * 2500 + 30000));
}

function moveTheBug() {
    if (anguloBug == 303)
        anguloBug = Math.random() * Math.PI * 2;
    var velocidade = 3;
    var rot = 0.4;

    if (Math.random() < 0.2) {
        const rotation = rot + Math.random() * rot;
        if (Math.random() < 0.5) {   
            anguloBug += rotation;
        }
        else {
            anguloBug -= rotation;
        }
    }

    //nao passar os limites
    if (parseFloat($("#bugicon").css("left")) > 410)
        anguloBug = Math.PI;
    else if (parseFloat($("#bugicon").css("left")) < 30)
        anguloBug = 0;

    if (parseFloat($("#bugicon").css("top")) > 430)
        anguloBug = Math.PI * (1 / 2);
    else if (parseFloat($("#bugicon").css("top")) < 82)
        anguloBug = Math.PI * (3 / 2);
    var positionx = parseFloat($("#bugicon").css("left")) + Math.cos(anguloBug) *
        velocidade;
    var positiony = parseFloat($("#bugicon").css("top")) - Math.sin(anguloBug) *
        velocidade;

    $("#bugicon").css({
        left: positionx + "px",
        top: positiony + "px"
    });
}

function bonusanim() {
    var bonustext = document.createElement("i");
    var fas = ["android", "bomb", "linux", "hand-spock-o", "rocket"];
    var num = Math.floor(Math.random() * fas.length);
    bonustext.setAttribute("class", "bonus fa fa-" + fas[num]);
    bonustext.setAttribute("id", "bonusicon");
    document.getElementById("content").appendChild(bonustext);
    if (backgroundColorCanvas != "white")
        bonustext.style.color = "white";
    else
        bonustext.style.color = "black";

    bonustext.style.left = "-50px";
    bonustext.style.fontSize = "60px";
    bonustext.setAttribute("onclick", "bonusadd()");
    $("#bonusicon").animate({
        left: "450px"
    }, 8950, "linear");
    setTimeout(function () {
        $("#bonusicon").animate({
            opacity: "0"
        }, 200);
    }, 8950);
    setTimeout(function () {
        $("#bonusicon").remove();
        clearInterval(alertas);
    }, 9150);
    var alerts = 0, neweach = 300, animtime = 600;
    var alertas = setInterval(function () {
        alerts++;
        var alert = document.createElement("h3");
        alert.innerHTML = "CLICK HERE"
        alert.id = "BonusAlert" + alerts;
        alert.className = "bonusalert";
        alert.style.bottom = (Math.random() * 20 + 50) + "px";
        alert.style.left = $("#bonusicon").css("left");
        alert.style.color = "hsl(" + Math.random() * 360 + ",100%,50%)";
        if (backgroundColorCanvas == "white")
            alert.style.textShadow = "0 1px 4px rgba(0, 0, 0, 0.5)";
        else
            alert.style.textShadow = "0 1px 4px rgba(360,360, 360, 0.2)";
        alert.fontSize = "30px";
        document.getElementById("content").appendChild(alert);
        $("#BonusAlert" + alerts).animate({
            fontSize: "10px",
            opacity: "0",
            bottom: (Math.random() * 20 + 50) + "px"
        }, animtime);
        removeAlert(alerts, animtime);
    }, neweach)
}
function removeAlert(alerts, animtime) {
    var a = alerts;
    setTimeout(function () {
        $("#BonusAlert" + a).remove();
    }, animtime + 10);
}

function bonusadd(a) {
    addsome(3, power * bonusqtd, 1, parseFloat($("#bonusicon").css("left")) +
        30, 448);
}

function test(qual) {
    for (var qual = uplevel.length; qual >= 1; qual--) {
        var qtd = points,
            maxwidth = 150;


        var test = ((upgrade[qual - 1] + qtd) / formula(uplevel[qual - 1], qual) *
            maxwidth);
        if (test >= maxwidth) //document.getElementById("upgrade"+qual).className ="upgradenow"; animacao quando o upgrade esta disponivel
            document.getElementsByClassName("backbar")[qual - 1].style.boxShadow =
                "0 1px 4px hsla(" + themeh + ", 100%, 50%, 1)";
        else {
            if (backgroundColorCanvas == "white")
                document.getElementsByClassName("backbar")[qual - 1].style.boxShadow =
                    "0 1px 4px hsla(0, 0%, 0%, 0.5)";
            else
                document.getElementsByClassName("backbar")[qual - 1].style.boxShadow =
                    "0 1px 4px hsla(0, 0%, 100%, 0.5)";

        }
        if (test > maxwidth || upgrade[qual - 1] > 0)
            test = maxwidth;

        document.getElementById("bar" + qual).style.width = test + "px";
        if (qual == 2 && uplevel[1] == 25)
            document.getElementById("bar" + qual).style.width = maxwidth + "px";
    }

}

function upgradefunc(qual) {

    var qtd = formula(uplevel[qual - 1] + buying[qual - 1], qual);
    if ((points >= qtd && qual != 2) || (points >= qtd && qual == 2 && uplevel[1] + buying[1] < 25)) {
        soundVerifier("upgradeSound");
        buying[qual - 1]++;
        for (var d = 10; d > 0; d--)
            sellerparticle.insere(qual, qtd);
        points -= qtd;
    } else {
        soundVerifier("notSound");
    }
}


function formula(a, qual) {
    if (qual == 1)
        var b = 2,
            c = 1.5;
    else if (qual == 2)
        var b = 20,
            c = 2;
    else if (qual == 3)
        var b = 100,
            c = 2;
    else if (qual == 4)
        var b = 100,
            c = 2;
    else if (qual == 5)
        var b = 100,
            c = 2;
    var isto = Math.round(b * Math.pow(a, c));
    return isto
}

function atualizarup(qual) {
    var maxwidth = 150;
    document.getElementById("uplevel" + qual).innerHTML = "level " + uplevel[
        qual - 1];
    if (qual != 2 || uplevel[1] != 25)
        document.getElementById("tonext" + qual).innerHTML = bigNumbers((formula(uplevel[qual - 1], qual) - upgrade[qual - 1])) + " &Phi;";
    else
        document.getElementById("tonext2").innerHTML = "Max level";
    power = up1Value(0);
    if (levelfinished < 2)
        document.getElementById("power").innerHTML = power.toFixed(1);
    else
        document.getElementById("power").innerHTML = power.toFixed(2);
    bonuschance = up2Value(0);
    bonusqtd = up3Value(0);
    apprentices = up4Value(0);
    teachpower = up5Value(0);
}

function levelValue() {
    return Math.pow(2, (levelfinished - 1))
}
function up1Value(a) {
    return ((uplevel[0] + a) * 0.1 * (researchpower[0] + 1) * (researchpower[4] + 1) * (researchpower[7] + 1)) / levelValue();
}
function up2Value(a) {
    return (uplevel[1] + a) * bonuschancebase * (researchpower[2] + 1) * (researchpower[3] + 1) * (researchpower[5] + 1);
}
function up3Value(a) {
    return ((uplevel[2] + a) * 2 * (researchpower[1] + 1) * (researchpower[6] + 1) * (researchpower[7] + 1)) / levelValue();
}
function up4Value(a) {
    return Math.floor(((uplevel[3] + a) - 1 + researchapp[0]) * (researchapp[1] + 1) * ((researchapp[2] * 0.5) + 1) * ((researchapp[3] * 0.5) + 1) * ((researchapp[4] * 0.5) + 1) * ((researchapp[6] * 0.5) + 1));
}
function up5Value(a) {
    return ((uplevel[4] + a) * 0.002 * ((researchapp[6] * 0.5) + 1) * ((researchapp[5] * 0.5) + 1) * ((researchapp[3] * 0.5) + 1) * ((researchapp[1] * 0.5) + 1)) / levelValue();
}



//researchfunction

function finishthislevel() {
    if (researchapp[6] == 1 && researchpower[7] == 1 && (researchpower[7] * 2 <= researchpoints)) {
        levelfinished++;
        soundVerifier("achievementSound");
        reset();
        resetResearch();
        researchpoints = 0;
        unlockresearchp(4);//para resetar o numero no topo
        document.getElementById("rf").style.display = "none";
    }
}

function unlockresearchp(a) {
    if (document.getElementById("rp" + a).className == "researchdivs" &&
        researchpoints >= researchpcr[a - 1]) {
        soundVerifier("researchSound");
        researchpoints -= researchpcr[a - 1];
        researchpower[a - 1] = 1;
        atualizarup(1);
        document.getElementById("rptop2").innerHTML = bigNumbers(researchpoints);
    } else
        soundVerifier("notSound");
    rpfunc();
    atualizardocument();
}

function unlockresearcha(a) {
    if (document.getElementById("ra" + a).className == "researchdivs" &&
        researchpoints >= researchacr[a - 1]) {
        soundVerifier("researchSound");
        researchpoints -= researchacr[a - 1];
        researchapp[a - 1] = 1
        atualizarup(1);
        document.getElementById("rptop2").innerHTML = bigNumbers(researchpoints);
    } else
        soundVerifier("notSound");
    rpfunc();
    atualizardocument();
}


function rpfunc() {

    document.getElementById("rptop2").innerHTML = bigNumbers(researchpoints);
    if (researchpower[0] == 0) {
        document.getElementById("rp1").className = "researchdivs";
        for (var q = 1; q <= 7; q++) {
            document.getElementById("rp" + (q + 1)).className =
                "researchdivslocked";
        }
    } else if (researchpower[1] == 0 && researchpower[2] == 0) {
        document.getElementById("rp2").className = "researchdivs";
        document.getElementById("rp3").className = "researchdivs";
        for (var q = 3; q <= 7; q++) {
            document.getElementById("rp" + (q + 1)).className =
                "researchdivslocked";
        }
    } else if (researchpower[3] == 0) {
        document.getElementById("rp4").className = "researchdivs";
        for (var q = 4; q <= 7; q++) {
            document.getElementById("rp" + (q + 1)).className =
                "researchdivslocked";
        }
    } else if (researchpower[4] == 0 && researchpower[5] == 0 && researchpower[
        6] == 0) {
        document.getElementById("rp5").className = "researchdivs";
        document.getElementById("rp6").className = "researchdivs";
        document.getElementById("rp7").className = "researchdivs";
        document.getElementById("rp8").className = "researchdivslocked";
    } else if (researchpower[7] == 0) {
        document.getElementById("rp8").className = "researchdivs";
    }
    if (researchpower[0] == 1) {
        document.getElementById("rp1").className = "researchdivsun";
    }
    if (researchpower[1] == 1) {
        document.getElementById("rp2").className = "researchdivsun";
        document.getElementById("rp3").className = "researchdivslocked";
    }
    if (researchpower[2] == 1) {
        document.getElementById("rp2").className = "researchdivslocked";
        document.getElementById("rp3").className = "researchdivsun";
    }
    if (researchpower[3] == 1) {
        document.getElementById("rp4").className = "researchdivsun";
    }
    if (researchpower[4] == 1) {
        document.getElementById("rp5").className = "researchdivsun";
        document.getElementById("rp6").className = "researchdivslocked";
        document.getElementById("rp7").className = "researchdivslocked";
    }
    if (researchpower[5] == 1) {
        document.getElementById("rp5").className = "researchdivslocked";
        document.getElementById("rp6").className = "researchdivsun";
        document.getElementById("rp7").className = "researchdivslocked";
    }
    if (researchpower[6] == 1) {
        document.getElementById("rp5").className = "researchdivslocked";
        document.getElementById("rp6").className = "researchdivslocked";
        document.getElementById("rp7").className = "researchdivsun";
    }
    if (researchpower[7] == 1) {
        document.getElementById("rp8").className = "researchdivsun";
    }

    //researchapp

    if (researchapp[0] == 0) {
        document.getElementById("ra1").className = "researchdivs";
        for (var q = 1; q <= 6; q++) {
            document.getElementById("ra" + (q + 1)).className =
                "researchdivslocked";
        }
    } else if (researchapp[1] == 0 && researchapp[2] == 0) {
        document.getElementById("ra2").className = "researchdivs";
        document.getElementById("ra3").className = "researchdivs";
        for (var q = 3; q <= 6; q++) {
            document.getElementById("ra" + (q + 1)).className =
                "researchdivslocked";
        }
    } else if (researchapp[3] == 0) {
        document.getElementById("ra4").className = "researchdivs";
        for (var q = 4; q <= 6; q++) {
            document.getElementById("ra" + (q + 1)).className =
                "researchdivslocked";
        }
    } else if (researchapp[4] == 0 && researchapp[5] == 0) {
        document.getElementById("ra5").className = "researchdivs";
        document.getElementById("ra6").className = "researchdivs";
        document.getElementById("ra7").className = "researchdivslocked";
    } else if (researchapp[6] == 0) {
        document.getElementById("ra7").className = "researchdivs";
    }
    if (researchapp[0] == 1) {
        document.getElementById("ra1").className = "researchdivsun";
    }
    if (researchapp[1] == 1) {
        document.getElementById("ra2").className = "researchdivsun";
        document.getElementById("ra3").className = "researchdivslocked";
    }
    if (researchapp[2] == 1) {
        document.getElementById("ra2").className = "researchdivslocked";
        document.getElementById("ra3").className = "researchdivsun";
    }
    if (researchapp[3] == 1) {
        document.getElementById("ra4").className = "researchdivsun";
    }
    if (researchapp[4] == 1) {
        document.getElementById("ra5").className = "researchdivsun";
        document.getElementById("ra6").className = "researchdivslocked";
    }
    if (researchapp[5] == 1) {
        document.getElementById("ra5").className = "researchdivslocked";
        document.getElementById("ra6").className = "researchdivsun";
    }
    if (researchapp[6] == 1) {
        document.getElementById("ra7").className = "researchdivsun";
    }

    if (researchapp[6] == 1 && researchpower[7] == 1) {
        document.getElementById("rf").style.display = "block", document.getElementById("finishleveltext").innerHTML = "Finish level " + levelfinished;

    }

}

//helpers
