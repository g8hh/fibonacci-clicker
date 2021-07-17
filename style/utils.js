
const isThisKongregate = () => {
    return window.location.host === "www.kongregate.com"
}

function fib(n) {
    if (n < 2) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

function sumfib(n) {
    return (fib(n + 2) - fib(3) + 1);
}

function sumarea(n) {
    var value = 0;
    for (n; n >= 1; n--) {
        value += Math.pow(fib(n), 2);
    }
    return value;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function IsInThisQuad(a, x, y) {
    if (verlevel > 3) {
        var x1 = quadrados.num[a].centrox - (quadrados.num[a].lado / 2);
        var x2 = quadrados.num[a].centrox + (quadrados.num[a].lado / 2);
        var y1 = quadrados.num[a].centroy - (quadrados.num[a].lado / 2);
        var y2 = quadrados.num[a].centroy + (quadrados.num[a].lado / 2);
        if ((a % 4) == 0) {

            var x3 = quadrados.num[a - 2].centrox - (quadrados.num[a - 2].lado / 2);
            var x4 = quadrados.num[a - 1].centrox + (quadrados.num[a - 1].lado / 2);
            var y3 = quadrados.num[a - 1].centroy - (quadrados.num[a - 1].lado / 2);
            var y4 = quadrados.num[a - 1].centroy + (quadrados.num[a - 1].lado / 2);
        }
        else if ((a % 4) == 1) {

            var x3 = quadrados.num[a - 1].centrox - (quadrados.num[a - 1].lado / 2);
            var x4 = quadrados.num[a - 1].centrox + (quadrados.num[a - 1].lado / 2);
            var y3 = quadrados.num[a - 2].centroy - (quadrados.num[a - 2].lado / 2);
            var y4 = quadrados.num[a - 1].centroy + (quadrados.num[a - 1].lado / 2);
        }

        else if ((a % 4) == 2) {

            var x3 = quadrados.num[a - 1].centrox - (quadrados.num[a - 1].lado / 2);
            var x4 = quadrados.num[a - 2].centrox + (quadrados.num[a - 2].lado / 2);
            var y3 = quadrados.num[a - 1].centroy - (quadrados.num[a - 1].lado / 2);
            var y4 = quadrados.num[a - 1].centroy + (quadrados.num[a - 1].lado / 2);
        }

        else if ((a % 4) == 3) {

            var x3 = quadrados.num[a - 1].centrox - (quadrados.num[a - 1].lado / 2);
            var x4 = quadrados.num[a - 1].centrox + (quadrados.num[a - 1].lado / 2);
            var y3 = quadrados.num[a - 1].centroy - (quadrados.num[a - 1].lado / 2);
            var y4 = quadrados.num[a - 2].centroy + (quadrados.num[a - 2].lado / 2);
        }
        if ((x >= x1 && x <= x2 && y >= y1 && y <= y2) || (x >= x3 && x <= x4 && y >= y3 && y <= y4))
            return true
    }
    else {

        for (a; a >= 0; a--) {
            var x1 = quadrados.num[a].centrox - (quadrados.num[a].lado / 2);
            var x2 = quadrados.num[a].centrox + (quadrados.num[a].lado / 2);
            var y1 = quadrados.num[a].centroy - (quadrados.num[a].lado / 2);
            var y2 = quadrados.num[a].centroy + (quadrados.num[a].lado / 2);

            if (x >= x1 && x <= x2 && y >= y1 && y <= y2)
                return true
        }
    }
}
