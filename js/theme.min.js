(function(j) {
    function A(a) {
        return a.replace(B, h).replace(C, function(a, d, b) {
            for (var a = b.split(","), b = 0, e = a.length; b < e; b++) {
                var s = D(a[b].replace(E, h).replace(F, h)) + o,
                    l = [];
                a[b] = s.replace(G, function(a, b, c, d, e) {
                    if (b) {
                        if (l.length > 0) {
                            var a = l,
                                f, e = s.substring(0, e).replace(H, i);
                            if (e == i || e.charAt(e.length - 1) == o) {
                                e += "*"
                            }
                            try {
                                f = t(e)
                            } catch (k) {}
                            if (f) {
                                e = 0;
                                for (c = f.length; e < c; e++) {
                                    for (var d = f[e], h = d.className, j = 0, m = a.length; j < m; j++) {
                                        var g = a[j];
                                        if (!RegExp("(^|\\s)" + g.className + "(\\s|$)").test(d.className) && g.b && (g.b === !0 || g.b(d) === !0)) {
                                            h = u(h, g.className, !0)
                                        }
                                    }
                                    d.className = h
                                }
                            }
                            l = []
                        }
                        return b
                    } else {
                        if (b = c ? I(c) : !v || v.test(d) ? {
                            className: w(d),
                            b: !0
                        } : null) {
                            return l.push(b), "." + b.className
                        }
                        return a
                    }
                })
            }
            return d + a.join(",")
        })
    }

    function I(a) {
        var c = !0,
            d = w(a.slice(1)),
            b = a.substring(0, 5) == ":not(",
            e, f;
        b && (a = a.slice(5, -1));
        var l = a.indexOf("(");
        l > -1 && (a = a.substring(0, l));
        if (a.charAt(0) == ":") {
            switch (a.slice(1)) {
                case "root":
                    c = function(a) {
                        return b ? a != p : a == p
                    };
                    break;
                case "target":
                    if (m == 8) {
                        c = function(a) {
                            function c() {
                                var d = location.hash,
                                    e = d.slice(1);
                                return b ? d == i || a.id != e : d != i && a.id == e
                            }
                            k(j, "hashchange", function() {
                                g(a, d, c())
                            });
                            return c()
                        };
                        break
                    }
                    return !1;
                case "checked":
                    c = function(a) {
                        J.test(a.type) && k(a, "propertychange", function() {
                            event.propertyName == "checked" && g(a, d, a.checked !== b)
                        });
                        return a.checked !== b
                    };
                    break;
                case "disabled":
                    b = !b;
                case "enabled":
                    c = function(c) {
                        if (K.test(c.tagName)) {
                            return k(c, "propertychange", function() {
                                event.propertyName == "$disabled" && g(c, d, c.a === b)
                            }), q.push(c), c.a = c.disabled, c.disabled === b
                        }
                        return a == ":enabled" ? b : !b
                    };
                    break;
                case "focus":
                    e = "focus", f = "blur";
                case "hover":
                    e || (e = "mouseenter", f = "mouseleave");
                    c = function(a) {
                        k(a, b ? f : e, function() {
                            g(a, d, !0)
                        });
                        k(a, b ? e : f, function() {
                            g(a, d, !1)
                        });
                        return b
                    };
                    break;
                default:
                    if (!L.test(a)) {
                        return !1
                    }
            }
        }
        return {
            className: d,
            b: c
        }
    }

    function w(a) {
        return M + "-" + (m == 6 && N ? O++ : a.replace(P, function(a) {
            return a.charCodeAt(0)
        }))
    }

    function D(a) {
        return a.replace(x, h).replace(Q, o)
    }

    function g(a, c, d) {
        var b = a.className,
            c = u(b, c, d);
        if (c != b) {
            a.className = c, a.parentNode.className += i
        }
    }

    function u(a, c, d) {
        var b = RegExp("(^|\\s)" + c + "(\\s|$)"),
            e = b.test(a);
        return d ? e ? a : a + o + c : e ? a.replace(b, h).replace(x, h) : a
    }

    function k(a, c, d) {
        a.attachEvent("on" + c, d)
    }

    function r(a, c) {
        if (/^https?:\/\//i.test(a)) {
            return c.substring(0, c.indexOf("/", 8)) == a.substring(0, a.indexOf("/", 8)) ? a : null
        }
        if (a.charAt(0) == "/") {
            return c.substring(0, c.indexOf("/", 8)) + a
        }
        var d = c.split(/[?#]/)[0];
        a.charAt(0) != "?" && d.charAt(d.length - 1) != "/" && (d = d.substring(0, d.lastIndexOf("/") + 1));
        return d + a
    }

    function y(a) {
        if (a) {
            return n.open("GET", a, !1), n.send(), (n.status == 200 ? n.responseText : i).replace(R, i).replace(S, function(c, d, b, e, f) {
                return y(r(b || f, a))
            }).replace(T, function(c, d, b) {
                d = d || i;
                return " url(" + d + r(b, a) + d + ") "
            })
        }
        return i
    }

    function U() {
        var a, c;
        a = f.getElementsByTagName("BASE");
        for (var d = a.length > 0 ? a[0].href : f.location.href, b = 0; b < f.styleSheets.length; b++) {
            if (c = f.styleSheets[b], c.href != i && (a = r(c.href, d))) {
                c.cssText = A(y(a))
            }
        }
        q.length > 0 && setInterval(function() {
            for (var a = 0, c = q.length; a < c; a++) {
                var b = q[a];
                if (b.disabled !== b.a) {
                    b.disabled ? (b.disabled = !1, b.a = !0, b.disabled = !0) : b.a = b.disabled
                }
            }
        }, 250)
    }
    if (!
        /*@cc_on!@*/
        true) {
        var f = document,
            p = f.documentElement,
            n = function() {
                if (j.XMLHttpRequest) {
                    return new XMLHttpRequest
                }
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch (a) {
                    return null
                }
            }(),
            m = /MSIE (\d+)/.exec(navigator.userAgent)[1];
        if (!(f.compatMode != "CSS1Compat" || m < 6 || m > 8 || !n)) {
            var z = {
                    NW: "*.Dom.select",
                    MooTools: "$$",
                    DOMAssistant: "*.$",
                    Prototype: "$$",
                    YAHOO: "*.util.Selector.query",
                    Sizzle: "*",
                    jQuery: "*",
                    dojo: "*.query"
                },
                t, q = [],
                O = 0,
                N = !0,
                M = "slvzr",
                R = /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g,
                S = /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g,
                T = /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g,
                L = /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,
                B = /:(:first-(?:line|letter))/g,
                C = /(^|})\s*([^\{]*?[\[:][^{]+)/g,
                G = /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,
                H = /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,
                P = /[^\w-]/g,
                K = /^(INPUT|SELECT|TEXTAREA|BUTTON)$/,
                J = /^(checkbox|radio)$/,
                v = m > 6 ? /[\$\^*]=([])\1/ : null,
                E = /([(\[+~])\s+/g,
                F = /\s+([)\]+~])/g,
                Q = /\s+/g,
                x = /^\s*((?:[\S\s]*\S)?)\s*$/,
                i = "",
                o = " ",
                h = "$1";
            (function(a, c) {
                function d() {
                    try {
                        p.doScroll("left")
                    } catch (a) {
                        setTimeout(d, 50);
                        return
                    }
                    b("poll")
                }

                function b(d) {
                    if (!(d.type == "readystatechange" && f.readyState != "complete") && ((d.type == "load" ? a : f).detachEvent("on" + d.type, b, !1), !e && (e = !0))) {
                        c.call(a, d.type || d)
                    }
                }
                var e = !1,
                    g = !0;
                if (f.readyState == "complete") {
                    c.call(a, i)
                } else {
                    if (f.createEventObject && p.doScroll) {
                        try {
                            g = !a.frameElement
                        } catch (h) {}
                        g && d()
                    }
                    k(f, "readystatechange", b);
                    k(a, "load", b)
                }
            })(j, function() {
                for (var a in z) {
                    var c, d, b = j;
                    if (j[a]) {
                        for (c = z[a].replace("*", a).split(".");
                            (d = c.shift()) && (b = b[d]);) {}
                        if (typeof b == "function") {
                            t = b;
                            U();
                            break
                        }
                    }
                }
            })
        }
    }
})(this);
window.Modernizr = function(an, am, al) {
    function H(b) {
        ae.cssText = b
    }

    function Y(d, c) {
        return H(ab.join(d + ";") + (c || ""))
    }

    function W(d, c) {
        return typeof d === c
    }

    function U(d, c) {
        return !!~("" + d).indexOf(c)
    }

    function S(f, c) {
        for (var h in f) {
            var g = f[h];
            if (!U(g, "-") && ae[g] !== al) {
                return c == "pfx" ? g : !0
            }
        }
        return !1
    }

    function Q(g, c, j) {
        for (var i in g) {
            var h = c[g[i]];
            if (h !== al) {
                return j === !1 ? g[i] : W(h, "function") ? h.bind(j || c) : h
            }
        }
        return !1
    }

    function O(g, f, j) {
        var i = g.charAt(0).toUpperCase() + g.slice(1),
            h = (g + " " + Z.join(i + " ") + i).split(" ");
        return W(f, "string") || W(f, "undefined") ? S(h, f) : (h = (g + " " + X.join(i + " ") + i).split(" "), Q(h, f, j))
    }
    var ak = "2.6.2",
        aj = {},
        ai = !0,
        ah = am.documentElement,
        ag = "modernizr",
        af = am.createElement(ag),
        ae = af.style,
        ad, ac = {}.toString,
        ab = " -webkit- -moz- -o- -ms- ".split(" "),
        aa = "Webkit Moz O ms",
        Z = aa.split(" "),
        X = aa.toLowerCase().split(" "),
        V = {},
        T = {},
        R = {},
        P = [],
        N = P.slice,
        M, K = function(v, u, t, s) {
            var r, q, p, o, h = am.createElement("div"),
                g = am.body,
                b = g || am.createElement("body");
            if (parseInt(t, 10)) {
                while (t--) {
                    p = am.createElement("div"), p.id = s ? s[t] : ag + (t + 1), h.appendChild(p)
                }
            }
            return r = ["&#173;", '<style id="s', ag, '">', v, "</style>"].join(""), h.id = ag, (g ? h : b).innerHTML += r, b.appendChild(h), g || (b.style.background = "", b.style.overflow = "hidden", o = ah.style.overflow, ah.style.overflow = "hidden", ah.appendChild(b)), q = u(h, v), g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b), ah.style.overflow = o), !!q
        },
        J = {}.hasOwnProperty,
        I;
    !W(J, "undefined") && !W(J.call, "undefined") ? I = function(d, c) {
        return J.call(d, c)
    } : I = function(d, c) {
        return c in d && W(d.constructor.prototype[c], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var h = this;
        if (typeof h != "function") {
            throw new TypeError
        }
        var g = N.call(arguments, 1),
            f = function() {
                if (this instanceof f) {
                    var b = function() {};
                    b.prototype = h.prototype;
                    var d = new b,
                        c = h.apply(d, g.concat(N.call(arguments)));
                    return Object(c) === c ? c : d
                }
                return h.apply(a, g.concat(N.call(arguments)))
            };
        return f
    }), V.touch = function() {
        var a;
        return "ontouchstart" in an || an.DocumentTouch && am instanceof DocumentTouch ? a = !0 : K(["@media (", ab.join("touch-enabled),("), ag, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(b) {
            a = b.offsetTop === 9
        }), a
    }, V.cssanimations = function() {
        return O("animationName")
    };
    for (var L in V) {
        I(V, L) && (M = L.toLowerCase(), aj[M] = V[L](), P.push((aj[M] ? "" : "no-") + M))
    }
    return aj.addTest = function(e, c) {
        if (typeof e == "object") {
            for (var f in e) {
                I(e, f) && aj.addTest(f, e[f])
            }
        } else {
            e = e.toLowerCase();
            if (aj[e] !== al) {
                return aj
            }
            c = typeof c == "function" ? c() : c, typeof ai != "undefined" && ai && (ah.className += " " + (c ? "" : "no-") + e), aj[e] = c
        }
        return aj
    }, H(""), af = ad = null, aj._version = ak, aj._prefixes = ab, aj._domPrefixes = X, aj._cssomPrefixes = Z, aj.testProp = function(b) {
        return S([b])
    }, aj.testAllProps = O, aj.testStyles = K, ah.className = ah.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (ai ? " js " + P.join(" ") : ""), aj
}(this, this.document),
function(ad, ac, ab) {
    function aa(b) {
        return "[object Function]" == P.call(b)
    }

    function Z(b) {
        return "string" == typeof b
    }

    function Y() {}

    function X(b) {
        return !b || "loaded" == b || "complete" == b || "uninitialized" == b
    }

    function W() {
        var b = O.shift();
        M = 1, b ? b.t ? R(function() {
            ("c" == b.t ? L.injectCss : L.injectJs)(b.s, 0, b.a, b.x, b.e, 1)
        }, 0) : (b(), W()) : M = 0
    }

    function V(w, v, t, s, q, p, n) {
        function m(a) {
            if (!g && X(h.readyState) && (x.r = g = 1, !M && W(), h.onload = h.onreadystatechange = null, a)) {
                "img" != w && R(function() {
                    I.removeChild(h)
                }, 50);
                for (var c in D[v]) {
                    D[v].hasOwnProperty(c) && D[v][c].onload()
                }
            }
        }
        var n = n || L.errorTimeout,
            h = ac.createElement(w),
            g = 0,
            b = 0,
            x = {
                t: t,
                s: v,
                e: q,
                a: p,
                x: n
            };
        1 === D[v] && (b = 1, D[v] = []), "object" == w ? h.data = v : (h.src = v, h.type = w), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
            m.call(this, b)
        }, O.splice(s, 0, x), "img" != w && (b || 2 === D[v] ? (I.insertBefore(h, J ? null : Q), R(m, n)) : D[v].push(h))
    }

    function U(g, e, j, i, h) {
        return M = 0, e = e || "j", Z(g) ? V("c" == e ? G : H, g, e, this.i++, j, i, h) : (O.splice(this.i++, 0, g), 1 == O.length && W()), this
    }

    function T() {
        var b = L;
        return b.loader = {
            load: U,
            i: 0
        }, b
    }
    var S = ac.documentElement,
        R = ad.setTimeout,
        Q = ac.getElementsByTagName("script")[0],
        P = {}.toString,
        O = [],
        M = 0,
        K = "MozAppearance" in S.style,
        J = K && !!ac.createRange().compareNode,
        I = J ? S : Q.parentNode,
        S = ad.opera && "[object Opera]" == P.call(ad.opera),
        S = !!ac.attachEvent && !S,
        H = K ? "object" : S ? "script" : "img",
        G = S ? "script" : H,
        F = Array.isArray || function(b) {
            return "[object Array]" == P.call(b)
        },
        E = [],
        D = {},
        C = {
            timeout: function(d, c) {
                return c.length && (d.timeout = c[0]), d
            }
        },
        N, L;
    L = function(e) {
        function c(i) {
            var i = i.split("!"),
                h = E.length,
                q = i.pop(),
                p = i.length,
                q = {
                    url: q,
                    origUrl: q,
                    prefixes: i
                },
                o, l, j;
            for (l = 0; l < p; l++) {
                j = i[l].split("="), (o = C[j.shift()]) && (q = o(q, j))
            }
            for (l = 0; l < h; l++) {
                q = E[l](q)
            }
            return q
        }

        function n(b, s, r, q, p) {
            var o = c(b),
                l = o.autoCallback;
            o.url.split(".").pop().split("?").shift(), o.bypass || (s && (s = aa(s) ? s : s[b] || s[q] || s[b.split("/").pop().split("?")[0]]), o.instead ? o.instead(b, s, r, q, p) : (D[o.url] ? o.noexec = !0 : D[o.url] = 1, r.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : ab, o.noexec, o.attrs, o.timeout), (aa(s) || aa(l)) && r.load(function() {
                T(), s && s(o.origUrl, p, q), l && l(o.origUrl, p, q), D[o.url] = 2
            })))
        }

        function m(w, v) {
            function u(b, h) {
                if (b) {
                    if (Z(b)) {
                        h || (r = function() {
                            var i = [].slice.call(arguments);
                            q.apply(this, i), p()
                        }), n(b, r, v, 0, t)
                    } else {
                        if (Object(b) === b) {
                            for (g in o = function() {
                                var a = 0,
                                    i;
                                for (i in b) {
                                    b.hasOwnProperty(i) && a++
                                }
                                return a
                            }(), b) {
                                b.hasOwnProperty(g) && (!h && !--o && (aa(r) ? r = function() {
                                    var i = [].slice.call(arguments);
                                    q.apply(this, i), p()
                                } : r[g] = function(i) {
                                    return function() {
                                        var a = [].slice.call(arguments);
                                        i && i.apply(this, a), p()
                                    }
                                }(q[g])), n(b[g], r, v, g, t))
                            }
                        }
                    }
                } else {
                    !h && p()
                }
            }
            var t = !!w.test,
                s = w.load || w.both,
                r = w.callback || Y,
                q = r,
                p = w.complete || Y,
                o, g;
            u(t ? w.yep : w.nope, !!s), s && u(s)
        }
        var k, f, d = this.yepnope.loader;
        if (Z(e)) {
            n(e, 0, d, 0)
        } else {
            if (F(e)) {
                for (k = 0; k < e.length; k++) {
                    f = e[k], Z(f) ? n(f, 0, d, 0) : F(f) ? L(f) : Object(f) === f && m(f, d)
                }
            } else {
                Object(e) === e && m(e, d)
            }
        }
    }, L.addPrefix = function(d, c) {
        C[d] = c
    }, L.addFilter = function(b) {
        E.push(b)
    }, L.errorTimeout = 10000, null == ac.readyState && ac.addEventListener && (ac.readyState = "loading", ac.addEventListener("DOMContentLoaded", N = function() {
        ac.removeEventListener("DOMContentLoaded", N, 0), ac.readyState = "complete"
    }, 0)), ad.yepnope = T(), ad.yepnope.executeStack = W, ad.yepnope.injectJs = function(r, q, p, n, m, h) {
        var g = ac.createElement("script"),
            f, b, n = n || L.errorTimeout;
        g.src = r;
        for (b in p) {
            g.setAttribute(b, p[b])
        }
        q = h ? W : q || Y, g.onreadystatechange = g.onload = function() {
            !f && X(g.readyState) && (f = 1, q(), g.onload = g.onreadystatechange = null)
        }, R(function() {
            f || (f = 1, q(1))
        }, n), m ? g.onload() : Q.parentNode.insertBefore(g, Q)
    }, ad.yepnope.injectCss = function(b, n, m, l, k, h) {
        var l = ac.createElement("link"),
            f, n = h ? W : n || Y;
        l.href = b, l.rel = "stylesheet", l.type = "text/css";
        for (f in m) {
            l.setAttribute(f, m[f])
        }
        k || (Q.parentNode.insertBefore(l, Q), R(n, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
var pixelentity = window.pixelentity || {
    classes: {},
    targets: {}
};
(function(f) {
    var h, d;

    function g(k) {
        k = k.toLowerCase();
        var j = /(chrome)[ \/]([\w.]+)/.exec(k) || /(webkit)[ \/]([\w.]+)/.exec(k) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(k) || /(msie) ([\w.]+)/.exec(k) || k.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(k) || [];
        return {
            browser: j[1] || "",
            version: j[2] || "0"
        }
    }
    if (!jQuery.browser) {
        d = g(navigator.userAgent);
        h = {};
        if (d.browser) {
            h[d.browser] = true;
            h.version = d.version
        }
        if (h.chrome) {
            h.webkit = true
        } else {
            if (h.webkit) {
                h.safari = true
            }
        }
        jQuery.browser = h
    }
    f.pixelentity = f.pixelentity || {
        version: "1.0.0"
    };
    var b = navigator.userAgent.toLowerCase();
    var c = b.match(/(iphone|ipod|ipad)/) !== null;
    var e = !c && b.match(/android ([^;]+)/);
    var i = b.match("webkit") !== null;
    if (e) {
        e = e[1].split(/\./);
        e = parseFloat(e.shift() + "." + e.join(""))
    } else {
        e = false
    }
    var a = (c || e || b.match(/(android|blackberry|webOS|opera mobi)/) !== null);
    f.pixelentity.browser = {
        iDev: c,
        android: e,
        mobile: a,
        webkit: i
    }
}(jQuery));
(function(c) {
    c.pixelentity = c.pixelentity || {
        version: "1.0.0"
    };
    c.pixelentity.peLazyLoading = {
        conf: {
            api: false
        }
    };
    var d = c(window);
    var a = false;
    var b = window.devicePixelRatio >= 1.5;
    c(function() {
        a = c(".scroller > .scroll-content");
        a = a.length === 0 ? false : a
    });

    function e(l, m) {
        var o, f, n = true,
            g = 0;

        function i(s, u) {
            if (u.peLoading || u._peLoaded) {
                return
            }
            u = l.eq(u.peIDX);
            if (!u.hasClass("pe-lazyloading-forceload")) {
                var v = (n || !u.data("pe-lazyload-top")) ? (u.data("pe-lazyload-forced-top") ? u.data("pe-lazyload-forced-top") : u.offset().top) : u.data("pe-lazyload-top");
                u.data("pe-lazyload-top", v);
                var t = (n || !u.data("pe-lazyload-height")) ? u.height() : u.data("pe-lazyload-height");
                u.data("pe-lazyload-height", t);
                if ((v + t) < o || v > f) {
                    return
                }
            }
            u.triggerHandler("pe-lazyload-load")
        }

        function k() {
            var s = l.eq(this.idx);
            s.attr("src", this.src);
            s.addClass("pe-lazyload-loaded").triggerHandler("pe-lazyload-loaded");
            s.fadeTo(c.pixelentity.browser.mobile ? 0 : 200, 1);
            s[0].peLoaded = true;
            this.src = "";
            g--
        }

        function q() {
            var s = this.peIDX;
            var u = l.eq(s);
            this.peLoading = true;
            var t = c("<img />");
            t[0].idx = this.peIDX;
            var v = b ? u.attr("data-original-hires") : u.attr("data-original");
            v = v || u.attr("data-original");
            t.one("load", k).attr("src", v)
        }

        function r(s) {
            this.peLoading = false;
            this.peLoaded = false;
            this.peIDX = s;
            g++;
            l.eq(s).css("opacity", 0).addClass("pe-lazyload-inited")
        }

        function j() {
            if (g === 0) {
                p();
                return true
            }
            o = a ? a.scrollTop() : 0;
            o += d.scrollTop();
            f = o + (window.innerHeight ? window.innerHeight : d.height());
            n = true;
            l.each(i);
            return true
        }

        function p() {
            d.off("scroll pe-lazyloading-refresh", j);
            if (a) {
                a.off("scroll", j)
            }
            if (l) {
                l.off("pe-lazyload-load");
                l.data("peLazyLoading", null);
                l = undefined
            }
        }

        function h() {
            l.each(r);
            l.on("pe-lazyload-load", q);
            c(j);
            d.on("scroll pe-lazyloading-refresh", j);
            if (a) {
                a.on("scroll", j)
            }
        }
        c.extend(this, {
            destroy: p
        });
        h()
    }
    c.fn.peLazyLoading = function(f) {
        var h = this.data("peLazyLoading");
        if (h) {
            return h
        }
        f = c.extend(true, {}, c.pixelentity.peLazyLoading.conf, f);
        var g = c(this);
        h = new e(g, f);
        g.data("peLazyLoading", h);
        return f.api ? h : this
    }
}(jQuery));
(function(a) {
    a.fn.fitText = function(d, b) {
        var e = d || 1,
            c = a.extend({
                minFontSize: Number.NEGATIVE_INFINITY,
                maxFontSize: Number.POSITIVE_INFINITY
            }, b);
        return this.each(function() {
            var f = a(this);
            var g = function() {
                f.css("font-size", Math.max(Math.min(f.width() / (e * 10), parseFloat(c.maxFontSize)), parseFloat(c.minFontSize)))
            };
            g();
            a(window).on("resize.fittext orientationchange.fittext", g)
        })
    }
})(jQuery);
(function(aS) {
    var aR = "Close",
        aQ = "BeforeClose",
        aP = "AfterClose",
        aO = "BeforeAppend",
        aN = "MarkupParse",
        aM = "Open",
        aL = "Change",
        aK = "mfp",
        aJ = "." + aK,
        aI = "mfp-ready",
        aH = "mfp-removing",
        aG = "mfp-prevent-close",
        aF, aE = function() {},
        aD = !!window.jQuery,
        aC, aB = aS(window),
        aA, az, ay, ax, aw, av = function(d, c) {
            aF.ev.on(aK + d + aJ, c)
        },
        au = function(a, j, i, h) {
            var g = document.createElement("div");
            return g.className = "mfp-" + a, i && (g.innerHTML = i), h ? j && j.appendChild(g) : (g = aS(g), j && g.appendTo(j)), g
        },
        at = function(a, d) {
            aF.ev.triggerHandler(aK + a, d), aF.st.callbacks && (a = a.charAt(0).toLowerCase() + a.slice(1), aF.st.callbacks[a] && aF.st.callbacks[a].apply(aF, aS.isArray(d) ? d : [d]))
        },
        ar = function(a) {
            if (a !== aw || !aF.currTemplate.closeBtn) {
                aF.currTemplate.closeBtn = aS(aF.st.closeMarkup.replace("%title%", aF.st.tClose)), aw = a
            }
            return aF.currTemplate.closeBtn
        },
        aq = function() {
            aS.magnificPopup.instance || (aF = new aE, aF.init(), aS.magnificPopup.instance = aF)
        },
        ap = function() {
            var d = document.createElement("p").style,
                c = ["ms", "O", "Moz", "Webkit"];
            if (d.transition !== undefined) {
                return !0
            }
            while (c.length) {
                if (c.pop() + "Transition" in d) {
                    return !0
                }
            }
            return !1
        };
    aE.prototype = {
        constructor: aE,
        init: function() {
            var a = navigator.appVersion;
            aF.isIE7 = a.indexOf("MSIE 7.") !== -1, aF.isIE8 = a.indexOf("MSIE 8.") !== -1, aF.isLowIE = aF.isIE7 || aF.isIE8, aF.isAndroid = /android/gi.test(a), aF.isIOS = /iphone|ipad|ipod/gi.test(a), aF.supportsTransition = ap(), aF.probablyMobile = aF.isAndroid || aF.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), aA = aS(document.body), az = aS(document), aF.popupsCache = {}
        },
        open: function(t) {
            var s;
            if (t.isObj === !1) {
                aF.items = t.items.toArray(), aF.index = 0;
                var r = t.items,
                    q;
                for (s = 0; s < r.length; s++) {
                    q = r[s], q.parsed && (q = q.el[0]);
                    if (q === t.el[0]) {
                        aF.index = s;
                        break
                    }
                }
            } else {
                aF.items = aS.isArray(t.items) ? t.items : [t.items], aF.index = t.index || 0
            } if (aF.isOpen) {
                aF.updateItemHTML();
                return
            }
            aF.types = [], ax = "", t.mainEl && t.mainEl.length ? aF.ev = t.mainEl.eq(0) : aF.ev = az, t.key ? (aF.popupsCache[t.key] || (aF.popupsCache[t.key] = {}), aF.currTemplate = aF.popupsCache[t.key]) : aF.currTemplate = {}, aF.st = aS.extend(!0, {}, aS.magnificPopup.defaults, t), aF.fixedContentPos = aF.st.fixedContentPos === "auto" ? !aF.probablyMobile : aF.st.fixedContentPos, aF.st.modal && (aF.st.closeOnContentClick = !1, aF.st.closeOnBgClick = !1, aF.st.showCloseBtn = !1, aF.st.enableEscapeKey = !1), aF.bgOverlay || (aF.bgOverlay = au("bg").on("click" + aJ, function() {
                aF.close()
            }), aF.wrap = au("wrap").attr("tabindex", -1).on("click" + aJ, function(b) {
                aF._checkIfClose(b.target) && aF.close()
            }), aF.container = au("container", aF.wrap)), aF.contentContainer = au("content"), aF.st.preloader && (aF.preloader = au("preloader", aF.container, aF.st.tLoading));
            var n = aS.magnificPopup.modules;
            for (s = 0; s < n.length; s++) {
                var k = n[s];
                k = k.charAt(0).toUpperCase() + k.slice(1), aF["init" + k].call(aF)
            }
            at("BeforeOpen"), aF.st.showCloseBtn && (aF.st.closeBtnInside ? (av(aN, function(h, e, l, i) {
                l.close_replaceWith = ar(i.type)
            }), ax += " mfp-close-btn-in") : aF.wrap.append(ar())), aF.st.alignTop && (ax += " mfp-align-top"), aF.fixedContentPos ? aF.wrap.css({
                overflow: aF.st.overflowY,
                overflowX: "hidden",
                overflowY: aF.st.overflowY
            }) : aF.wrap.css({
                top: aB.scrollTop(),
                position: "absolute"
            }), (aF.st.fixedBgPos === !1 || aF.st.fixedBgPos === "auto" && !aF.fixedContentPos) && aF.bgOverlay.css({
                height: az.height(),
                position: "absolute"
            }), aF.st.enableEscapeKey && az.on("keyup" + aJ, function(b) {
                b.keyCode === 27 && aF.close()
            }), aB.on("resize" + aJ, function() {
                aF.updateSize()
            }), aF.st.closeOnContentClick || (ax += " mfp-auto-cursor"), ax && aF.wrap.addClass(ax);
            var j = aF.wH = aB.height(),
                g = {};
            if (aF.fixedContentPos && aF._hasScrollBar(j)) {
                var f = aF._getScrollbarSize();
                f && (g.marginRight = f)
            }
            aF.fixedContentPos && (aF.isIE7 ? aS("body, html").css("overflow", "hidden") : g.overflow = "hidden");
            var a = aF.st.mainClass;
            return aF.isIE7 && (a += " mfp-ie7"), a && aF._addClassToMFP(a), aF.updateItemHTML(), at("BuildControls"), aS("html").css(g), aF.bgOverlay.add(aF.wrap).prependTo(document.body), aF._lastFocusedEl = document.activeElement, setTimeout(function() {
                aF.content ? (aF._addClassToMFP(aI), aF._setFocus()) : aF.bgOverlay.addClass(aI), az.on("focusin" + aJ, aF._onFocusIn)
            }, 16), aF.isOpen = !0, aF.updateSize(j), at(aM), t
        },
        close: function() {
            if (!aF.isOpen) {
                return
            }
            at(aQ), aF.isOpen = !1, aF.st.removalDelay && !aF.isLowIE && aF.supportsTransition ? (aF._addClassToMFP(aH), setTimeout(function() {
                aF._close()
            }, aF.st.removalDelay)) : aF._close()
        },
        _close: function() {
            at(aR);
            var b = aH + " " + aI + " ";
            aF.bgOverlay.detach(), aF.wrap.detach(), aF.container.empty(), aF.st.mainClass && (b += aF.st.mainClass + " "), aF._removeClassFromMFP(b);
            if (aF.fixedContentPos) {
                var a = {
                    marginRight: ""
                };
                aF.isIE7 ? aS("body, html").css("overflow", "") : a.overflow = "", aS("html").css(a)
            }
            az.off("keyup" + aJ + " focusin" + aJ), aF.ev.off(aJ), aF.wrap.attr("class", "mfp-wrap").removeAttr("style"), aF.bgOverlay.attr("class", "mfp-bg"), aF.container.attr("class", "mfp-container"), aF.st.showCloseBtn && (!aF.st.closeBtnInside || aF.currTemplate[aF.currItem.type] === !0) && aF.currTemplate.closeBtn && aF.currTemplate.closeBtn.detach(), aF._lastFocusedEl && aS(aF._lastFocusedEl).focus(), aF.currItem = null, aF.content = null, aF.currTemplate = null, aF.prevHeight = 0, at(aP)
        },
        updateSize: function(e) {
            if (aF.isIOS) {
                var d = document.documentElement.clientWidth / window.innerWidth,
                    f = window.innerHeight * d;
                aF.wrap.css("height", f), aF.wH = f
            } else {
                aF.wH = e || aB.height()
            }
            aF.fixedContentPos || aF.wrap.css("height", aF.wH), at("Resize")
        },
        updateItemHTML: function() {
            var a = aF.items[aF.index];
            aF.contentContainer.detach(), aF.content && aF.content.detach(), a.parsed || (a = aF.parseEl(aF.index));
            var h = a.type;
            at("BeforeChange", [aF.currItem ? aF.currItem.type : "", h]), aF.currItem = a;
            if (!aF.currTemplate[h]) {
                var g = aF.st[h] ? aF.st[h].markup : !1;
                at("FirstMarkupParse", g), g ? aF.currTemplate[h] = aS(g) : aF.currTemplate[h] = !0
            }
            ay && ay !== a.type && aF.container.removeClass("mfp-" + ay + "-holder");
            var f = aF["get" + h.charAt(0).toUpperCase() + h.slice(1)](a, aF.currTemplate[h]);
            aF.appendContent(f, h), a.preloaded = !0, at(aL, a), ay = a.type, aF.container.prepend(aF.contentContainer), at("AfterChange")
        },
        appendContent: function(d, c) {
            aF.content = d, d ? aF.st.showCloseBtn && aF.st.closeBtnInside && aF.currTemplate[c] === !0 ? aF.content.find(".mfp-close").length || aF.content.append(ar()) : aF.content = d : aF.content = "", at(aO), aF.container.addClass("mfp-" + c + "-holder"), aF.contentContainer.append(aF.content)
        },
        parseEl: function(a) {
            var j = aF.items[a],
                i = j.type;
            j.tagName ? j = {
                el: aS(j)
            } : j = {
                data: j,
                src: j.src
            };
            if (j.el) {
                var h = aF.types;
                for (var g = 0; g < h.length; g++) {
                    if (j.el.hasClass("mfp-" + h[g])) {
                        i = h[g];
                        break
                    }
                }
                j.src = j.el.attr("data-mfp-src"), j.src || (j.src = j.el.attr("href"))
            }
            return j.type = i || aF.st.type || "inline", j.index = a, j.parsed = !0, aF.items[a] = j, at("ElementParse", j), aF.items[a]
        },
        addGroup: function(f, e) {
            var h = function(a) {
                a.mfpEl = this, aF._openClick(a, f, e)
            };
            e || (e = {});
            var g = "click.magnificPopup";
            e.mainEl = f, e.items ? (e.isObj = !0, f.off(g).on(g, h)) : (e.isObj = !1, e.delegate ? f.off(g).on(g, e.delegate, h) : (e.items = f, f.off(g).on(g, h)))
        },
        _openClick: function(a, j, i) {
            var h = i.midClick !== undefined ? i.midClick : aS.magnificPopup.defaults.midClick;
            if (!h && (a.which === 2 || a.ctrlKey || a.metaKey)) {
                return
            }
            var g = i.disableOn !== undefined ? i.disableOn : aS.magnificPopup.defaults.disableOn;
            if (g) {
                if (aS.isFunction(g)) {
                    if (!g.call(aF)) {
                        return !0
                    }
                } else {
                    if (aB.width() < g) {
                        return !0
                    }
                }
            }
            a.type && (a.preventDefault(), aF.isOpen && a.stopPropagation()), i.el = aS(a.mfpEl), i.delegate && (i.items = j.find(i.delegate)), aF.open(i)
        },
        updateStatus: function(e, d) {
            if (aF.preloader) {
                aC !== e && aF.container.removeClass("mfp-s-" + aC), !d && e === "loading" && (d = aF.st.tLoading);
                var f = {
                    status: e,
                    text: d
                };
                at("UpdateStatus", f), e = f.status, d = f.text, aF.preloader.html(d), aF.preloader.find("a").on("click", function(b) {
                    b.stopImmediatePropagation()
                }), aF.container.addClass("mfp-s-" + e), aC = e
            }
        },
        _checkIfClose: function(a) {
            if (aS(a).hasClass(aG)) {
                return
            }
            var f = aF.st.closeOnContentClick,
                e = aF.st.closeOnBgClick;
            if (f && e) {
                return !0
            }
            if (!aF.content || aS(a).hasClass("mfp-close") || aF.preloader && a === aF.preloader[0]) {
                return !0
            }
            if (a !== aF.content[0] && !aS.contains(aF.content[0], a)) {
                if (e && aS.contains(document, a)) {
                    return !0
                }
            } else {
                if (f) {
                    return !0
                }
            }
            return !1
        },
        _addClassToMFP: function(b) {
            aF.bgOverlay.addClass(b), aF.wrap.addClass(b)
        },
        _removeClassFromMFP: function(b) {
            this.bgOverlay.removeClass(b), aF.wrap.removeClass(b)
        },
        _hasScrollBar: function(b) {
            return (aF.isIE7 ? az.height() : document.body.scrollHeight) > (b || aB.height())
        },
        _setFocus: function() {
            (aF.st.focus ? aF.content.find(aF.st.focus).eq(0) : aF.wrap).focus()
        },
        _onFocusIn: function(a) {
            if (a.target !== aF.wrap[0] && !aS.contains(aF.wrap[0], a.target)) {
                return aF._setFocus(), !1
            }
        },
        _parseMarkup: function(a, h, g) {
            var f;
            g.data && (h = aS.extend(g.data, h)), at(aN, [a, h, g]), aS.each(h, function(b, j) {
                if (j === undefined || j === !1) {
                    return !0
                }
                f = b.split("_");
                if (f.length > 1) {
                    var i = a.find(aJ + "-" + f[0]);
                    if (i.length > 0) {
                        var e = f[1];
                        e === "replaceWith" ? i[0] !== j[0] && i.replaceWith(j) : e === "img" ? i.is("img") ? i.attr("src", j) : i.replaceWith('<img src="' + j + '" class="' + i.attr("class") + '" />') : i.attr(f[1], j)
                    }
                } else {
                    a.find(aJ + "-" + b).html(j)
                }
            })
        },
        _getScrollbarSize: function() {
            if (aF.scrollbarSize === undefined) {
                var b = document.createElement("div");
                b.id = "mfp-sbm", b.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(b), aF.scrollbarSize = b.offsetWidth - b.clientWidth, document.body.removeChild(b)
            }
            return aF.scrollbarSize
        }
    }, aS.magnificPopup = {
        instance: null,
        proto: aE.prototype,
        modules: [],
        open: function(a, d) {
            return aq(), a ? a = aS.extend(!0, {}, a) : a = {}, a.isObj = !0, a.index = d || 0, this.instance.open(a)
        },
        close: function() {
            return aS.magnificPopup.instance && aS.magnificPopup.instance.close()
        },
        registerModule: function(a, d) {
            d.options && (aS.magnificPopup.defaults[a] = d.options), aS.extend(this.proto, d.proto), this.modules.push(a)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, aS.fn.magnificPopup = function(a) {
        aq();
        var j = aS(this);
        if (typeof a == "string") {
            if (a === "open") {
                var i, h = aD ? j.data("magnificPopup") : j[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                h.items ? i = h.items[g] : (i = j, h.delegate && (i = i.find(h.delegate)), i = i.eq(g)), aF._openClick({
                    mfpEl: i
                }, j, h)
            } else {
                aF.isOpen && aF[a].apply(aF, Array.prototype.slice.call(arguments, 1))
            }
        } else {
            a = aS.extend(!0, {}, a), aD ? j.data("magnificPopup", a) : j[0].magnificPopup = a, aF.addGroup(j, a)
        }
        return j
    };
    var ao = "inline",
        an, am, al, ak = function() {
            al && (am.after(al.addClass(an)).detach(), al = null)
        };
    aS.magnificPopup.registerModule(ao, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                aF.types.push(ao), av(aR + "." + ao, function() {
                    ak()
                })
            },
            getInline: function(a, j) {
                ak();
                if (a.src) {
                    var i = aF.st.inline,
                        h = aS(a.src);
                    if (h.length) {
                        var g = h[0].parentNode;
                        g && g.tagName && (am || (an = i.hiddenClass, am = au(an), an = "mfp-" + an), al = h.after(am).detach().removeClass(an)), aF.updateStatus("ready")
                    } else {
                        aF.updateStatus("error", i.tNotFound), h = aS("<div>")
                    }
                    return a.inlineElement = h, h
                }
                return aF.updateStatus("ready"), aF._parseMarkup(j, {}, a), j
            }
        }
    });
    var aj = "ajax",
        ai, ah = function() {
            ai && aA.removeClass(ai)
        },
        ag = function() {
            ah(), aF.req && aF.req.abort()
        };
    aS.magnificPopup.registerModule(aj, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                aF.types.push(aj), ai = aF.st.ajax.cursor, av(aR + "." + aj, ag), av("BeforeChange." + aj, ag)
            },
            getAjax: function(a) {
                ai && aA.addClass(ai), aF.updateStatus("loading");
                var d = aS.extend({
                    url: a.src,
                    success: function(i, h, g) {
                        var b = {
                            data: i,
                            xhr: g
                        };
                        at("ParseAjax", b), aF.appendContent(aS(b.data), aj), a.finished = !0, ah(), aF._setFocus(), setTimeout(function() {
                            aF.wrap.addClass(aI)
                        }, 16), aF.updateStatus("ready"), at("AjaxContentAdded")
                    },
                    error: function() {
                        ah(), a.finished = a.loadError = !0, aF.updateStatus("error", aF.st.ajax.tError.replace("%url%", a.src))
                    }
                }, aF.st.ajax.settings);
                return aF.req = aS.ajax(d), ""
            }
        }
    });
    var af, ae = function(a) {
        if (a.data && a.data.title !== undefined) {
            return a.data.title
        }
        var d = aF.st.image.titleSrc;
        if (d) {
            if (aS.isFunction(d)) {
                return d.call(aF, a)
            }
            if (a.el) {
                return a.el.attr(d) || ""
            }
        }
        return ""
    };
    aS.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var b = aF.st.image,
                    d = ".image";
                aF.types.push("image"), av(aM + d, function() {
                    aF.currItem.type === "image" && b.cursor && aA.addClass(b.cursor)
                }), av(aR + d, function() {
                    b.cursor && aA.removeClass(b.cursor), aB.off("resize" + aJ)
                }), av("Resize" + d, aF.resizeImage), aF.isLowIE && av("AfterChange", aF.resizeImage)
            },
            resizeImage: function() {
                var d = aF.currItem;
                if (!d || !d.img) {
                    return
                }
                if (aF.st.image.verticalFit) {
                    var c = 0;
                    aF.isLowIE && (c = parseInt(d.img.css("padding-top"), 10) + parseInt(d.img.css("padding-bottom"), 10)), d.img.css("max-height", aF.wH - c)
                }
            },
            _onImageHasSize: function(b) {
                b.img && (b.hasSize = !0, af && clearInterval(af), b.isCheckingImgSize = !1, at("ImageHasSize", b), b.imgHidden && (aF.content && aF.content.removeClass("mfp-loading"), b.imgHidden = !1))
            },
            findImageSize: function(f) {
                var e = 0,
                    h = f.img[0],
                    g = function(a) {
                        af && clearInterval(af), af = setInterval(function() {
                            if (h.naturalWidth > 0) {
                                aF._onImageHasSize(f);
                                return
                            }
                            e > 200 && clearInterval(af), e++, e === 3 ? g(10) : e === 40 ? g(50) : e === 100 && g(500)
                        }, a)
                    };
                g(1)
            },
            getImage: function(a, p) {
                var o = 0,
                    n = function() {
                        a && (a.img[0].complete ? (a.img.off(".mfploader"), a === aF.currItem && (aF._onImageHasSize(a), aF.updateStatus("ready")), a.hasSize = !0, a.loaded = !0, at("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(n, 100) : m()))
                    },
                    m = function() {
                        a && (a.img.off(".mfploader"), a === aF.currItem && (aF._onImageHasSize(a), aF.updateStatus("error", l.tError.replace("%url%", a.src))), a.hasSize = !0, a.loaded = !0, a.loadError = !0)
                    },
                    l = aF.st.image,
                    k = p.find(".mfp-img");
                if (k.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", a.img = aS(j).on("load.mfploader", n).on("error.mfploader", m), j.src = a.src, k.is("img") && (a.img = a.img.clone()), j = a.img[0], j.naturalWidth > 0 ? a.hasSize = !0 : j.width || (a.hasSize = !1)
                }
                return aF._parseMarkup(p, {
                    title: ae(a),
                    img_replaceWith: a.img
                }, a), aF.resizeImage(), a.hasSize ? (af && clearInterval(af), a.loadError ? (p.addClass("mfp-loading"), aF.updateStatus("error", l.tError.replace("%url%", a.src))) : (p.removeClass("mfp-loading"), aF.updateStatus("ready")), p) : (aF.updateStatus("loading"), a.loading = !0, a.hasSize || (a.imgHidden = !0, p.addClass("mfp-loading"), aF.findImageSize(a)), p)
            }
        }
    });
    var ad, ac = function() {
        return ad === undefined && (ad = document.createElement("p").style.MozTransform !== undefined), ad
    };
    aS.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(b) {
                return b.is("img") ? b : b.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var b = aF.st.zoom,
                    p = ".zoom",
                    o;
                if (!b.enabled || !aF.supportsTransition) {
                    return
                }
                var n = b.duration,
                    m = function(a) {
                        var j = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            i = "all " + b.duration / 1000 + "s " + b.easing,
                            h = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            },
                            g = "transition";
                        return h["-webkit-" + g] = h["-moz-" + g] = h["-o-" + g] = h[g] = i, j.css(h), j
                    },
                    l = function() {
                        aF.content.css("visibility", "visible")
                    },
                    k, c;
                av("BuildControls" + p, function() {
                    if (aF._allowZoom()) {
                        clearTimeout(k), aF.content.css("visibility", "hidden"), o = aF._getItemToZoom();
                        if (!o) {
                            l();
                            return
                        }
                        c = m(o), c.css(aF._getOffset()), aF.wrap.append(c), k = setTimeout(function() {
                            c.css(aF._getOffset(!0)), k = setTimeout(function() {
                                l(), setTimeout(function() {
                                    c.remove(), o = c = null, at("ZoomAnimationEnded")
                                }, 16)
                            }, n)
                        }, 16)
                    }
                }), av(aQ + p, function() {
                    if (aF._allowZoom()) {
                        clearTimeout(k), aF.st.removalDelay = n;
                        if (!o) {
                            o = aF._getItemToZoom();
                            if (!o) {
                                return
                            }
                            c = m(o)
                        }
                        c.css(aF._getOffset(!0)), aF.wrap.append(c), aF.content.css("visibility", "hidden"), setTimeout(function() {
                            c.css(aF._getOffset())
                        }, 16)
                    }
                }), av(aR + p, function() {
                    aF._allowZoom() && (l(), c && c.remove(), o = null)
                })
            },
            _allowZoom: function() {
                return aF.currItem.type === "image"
            },
            _getItemToZoom: function() {
                return aF.currItem.hasSize ? aF.currItem.img : !1
            },
            _getOffset: function(a) {
                var l;
                a ? l = aF.currItem.img : l = aF.st.zoom.opener(aF.currItem.el || aF.currItem);
                var k = l.offset(),
                    j = parseInt(l.css("padding-top"), 10),
                    i = parseInt(l.css("padding-bottom"), 10);
                k.top -= aS(window).scrollTop() - j;
                var h = {
                    width: l.width(),
                    height: (aD ? l.innerHeight() : l[0].offsetHeight) - i - j
                };
                return ac() ? h["-moz-transform"] = h.transform = "translate(" + k.left + "px," + k.top + "px)" : (h.left = k.left, h.top = k.top), h
            }
        }
    });
    var ab = "iframe",
        aa = "//about:blank",
        Z = function(d) {
            if (aF.currTemplate[ab]) {
                var c = aF.currTemplate[ab].find("iframe");
                c.length && (d || (c[0].src = aa), aF.isIE8 && c.css("display", d ? "block" : "none"))
            }
        };
    aS.magnificPopup.registerModule(ab, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                aF.types.push(ab), av("BeforeChange", function(e, d, f) {
                    d !== f && (d === ab ? Z() : f === ab && Z(!0))
                }), av(aR + "." + ab, function() {
                    Z()
                })
            },
            getIframe: function(a, j) {
                var i = a.src,
                    h = aF.st.iframe;
                aS.each(h.patterns, function() {
                    if (i.indexOf(this.index) > -1) {
                        return this.id && (typeof this.id == "string" ? i = i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : i = this.id.call(this, i)), i = this.src.replace("%id%", i), !1
                    }
                });
                var g = {};
                return h.srcAction && (g[h.srcAction] = i), aF._parseMarkup(j, g, a), aF.updateStatus("ready"), j
            }
        }
    });
    var Y = function(d) {
            var c = aF.items.length;
            return d > c - 1 ? d - c : d < 0 ? c + d : d
        },
        X = function(e, d, f) {
            return e.replace(/%curr%/gi, d + 1).replace(/%total%/gi, f)
        };
    aS.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var f = aF.st.gallery,
                    b = ".mfp-gallery",
                    a = Boolean(aS.fn.mfpFastClick);
                aF.direction = !0;
                if (!f || !f.enabled) {
                    return !1
                }
                ax += " mfp-gallery", av(aM + b, function() {
                    f.navigateByImgClick && aF.wrap.on("click" + b, ".mfp-img", function() {
                        if (aF.items.length > 1) {
                            return aF.next(), !1
                        }
                    }), az.on("keydown" + b, function(c) {
                        c.keyCode === 37 ? aF.prev() : c.keyCode === 39 && aF.next()
                    })
                }), av("UpdateStatus" + b, function(d, c) {
                    c.text && (c.text = X(c.text, aF.currItem.index, aF.items.length))
                }), av(aN + b, function(g, c, j, i) {
                    var h = aF.items.length;
                    j.counter = h > 1 ? X(f.tCounter, i.index, h) : ""
                }), av("BuildControls" + b, function() {
                    if (aF.items.length > 1 && f.arrows && !aF.arrowLeft) {
                        var c = f.arrowMarkup,
                            i = aF.arrowLeft = aS(c.replace(/%title%/gi, f.tPrev).replace(/%dir%/gi, "left")).addClass(aG),
                            h = aF.arrowRight = aS(c.replace(/%title%/gi, f.tNext).replace(/%dir%/gi, "right")).addClass(aG),
                            e = a ? "mfpFastClick" : "click";
                        i[e](function() {
                            aF.prev()
                        }), h[e](function() {
                            aF.next()
                        }), aF.isIE7 && (au("b", i[0], !1, !0), au("a", i[0], !1, !0), au("b", h[0], !1, !0), au("a", h[0], !1, !0)), aF.container.append(i.add(h))
                    }
                }), av(aL + b, function() {
                    aF._preloadTimeout && clearTimeout(aF._preloadTimeout), aF._preloadTimeout = setTimeout(function() {
                        aF.preloadNearbyImages(), aF._preloadTimeout = null
                    }, 16)
                }), av(aR + b, function() {
                    az.off(b), aF.wrap.off("click" + b), aF.arrowLeft && a && aF.arrowLeft.add(aF.arrowRight).destroyMfpFastClick(), aF.arrowRight = aF.arrowLeft = null
                })
            },
            next: function() {
                aF.direction = !0, aF.index = Y(aF.index + 1), aF.updateItemHTML()
            },
            prev: function() {
                aF.direction = !1, aF.index = Y(aF.index - 1), aF.updateItemHTML()
            },
            goTo: function(b) {
                aF.direction = b >= aF.index, aF.index = b, aF.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var f = aF.st.gallery.preload,
                    e = Math.min(f[0], aF.items.length),
                    h = Math.min(f[1], aF.items.length),
                    g;
                for (g = 1; g <= (aF.direction ? h : e); g++) {
                    aF._preloadItem(aF.index + g)
                }
                for (g = 1; g <= (aF.direction ? e : h); g++) {
                    aF._preloadItem(aF.index - g)
                }
            },
            _preloadItem: function(a) {
                a = Y(a);
                if (aF.items[a].preloaded) {
                    return
                }
                var d = aF.items[a];
                d.parsed || (d = aF.parseEl(a)), at("LazyLoad", d), d.type === "image" && (d.img = aS('<img class="mfp-img" />').on("load.mfploader", function() {
                    d.hasSize = !0
                }).on("error.mfploader", function() {
                    d.hasSize = !0, d.loadError = !0, at("LazyLoadError", d)
                }).attr("src", d.src)), d.preloaded = !0
            }
        }
    });
    var W = "retina";
    aS.magnificPopup.registerModule(W, {
        options: {
            replaceSrc: function(b) {
                return b.src.replace(/\.\w+$/, function(c) {
                    return "@2x" + c
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var d = aF.st.retina,
                        c = d.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (av("ImageHasSize." + W, function(b, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), av("ElementParse." + W, function(b, a) {
                        a.src = d.replaceSrc(a, c)
                    }))
                }
            }
        }
    }),
    function() {
        var a = 1000,
            j = "ontouchstart" in window,
            i = function() {
                aB.off("touchmove" + g + " touchend" + g)
            },
            h = "mfpFastClick",
            g = "." + h;
        aS.fn.mfpFastClick = function(b) {
            return aS(this).each(function() {
                var q = aS(this),
                    p;
                if (j) {
                    var o, f, e, d, c, r;
                    q.on("touchstart" + g, function(k) {
                        d = !1, r = 1, c = k.originalEvent ? k.originalEvent.touches[0] : k.touches[0], f = c.clientX, e = c.clientY, aB.on("touchmove" + g, function(l) {
                            c = l.originalEvent ? l.originalEvent.touches : l.touches, r = c.length, c = c[0];
                            if (Math.abs(c.clientX - f) > 10 || Math.abs(c.clientY - e) > 10) {
                                d = !0, i()
                            }
                        }).on("touchend" + g, function(l) {
                            i();
                            if (d || r > 1) {
                                return
                            }
                            p = !0, l.preventDefault(), clearTimeout(o), o = setTimeout(function() {
                                p = !1
                            }, a), b()
                        })
                    })
                }
                q.on("click" + g, function() {
                    p || b()
                })
            })
        }, aS.fn.destroyMfpFastClick = function() {
            aS(this).off("touchstart" + g + " click" + g), j && aB.off("touchmove" + g + " touchend" + g)
        }
    }(), aq()
})(window.jQuery || window.Zepto);
! function(a) {
    var c = {},
        b = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4000,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function() {},
            onSlideBefore: function() {},
            onSlideAfter: function() {},
            onSlideNext: function() {},
            onSlidePrev: function() {}
        };
    a.fn.bxSlider = function(aq) {
        if (0 == this.length) {
            return this
        }
        if (this.length > 1) {
            return this.each(function() {
                a(this).bxSlider(aq)
            }), this
        }
        var ap = {},
            am = this;
        c.el = this;
        var aB = a(window).width(),
            at = a(window).height(),
            ay = function() {
                ap.settings = a.extend({}, b, aq), ap.settings.slideWidth = parseInt(ap.settings.slideWidth), ap.children = am.children(ap.settings.slideSelector), ap.children.length < ap.settings.minSlides && (ap.settings.minSlides = ap.children.length), ap.children.length < ap.settings.maxSlides && (ap.settings.maxSlides = ap.children.length), ap.settings.randomStart && (ap.settings.startSlide = Math.floor(Math.random() * ap.children.length)), ap.active = {
                    index: ap.settings.startSlide
                }, ap.carousel = ap.settings.minSlides > 1 || ap.settings.maxSlides > 1, ap.carousel && (ap.settings.preloadImages = "all"), ap.minThreshold = ap.settings.minSlides * ap.settings.slideWidth + (ap.settings.minSlides - 1) * ap.settings.slideMargin, ap.maxThreshold = ap.settings.maxSlides * ap.settings.slideWidth + (ap.settings.maxSlides - 1) * ap.settings.slideMargin, ap.working = !1, ap.controls = {}, ap.interval = null, ap.animProp = "vertical" == ap.settings.mode ? "top" : "left", ap.usingCSS = ap.settings.useCSS && "fade" != ap.settings.mode && function() {
                    var f = document.createElement("div"),
                        g = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var d in g) {
                        if (void 0 !== f.style[g[d]]) {
                            return ap.cssPrefix = g[d].replace("Perspective", "").toLowerCase(), ap.animProp = "-" + ap.cssPrefix + "-transform", !0
                        }
                    }
                    return !1
                }(), "vertical" == ap.settings.mode && (ap.settings.maxSlides = ap.settings.minSlides), am.data("origStyle", am.attr("style")), am.children(ap.settings.slideSelector).each(function() {
                    a(this).data("origStyle", a(this).attr("style"))
                }), az()
            },
            az = function() {
                am.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), ap.viewport = am.parent(), ap.loader = a('<div class="bx-loading" />'), ap.viewport.prepend(ap.loader), am.css({
                    width: "horizontal" == ap.settings.mode ? 100 * ap.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), ap.usingCSS && ap.settings.easing ? am.css("-" + ap.cssPrefix + "-transition-timing-function", ap.settings.easing) : ap.settings.easing || (ap.settings.easing = "swing"), ax(), ap.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), ap.viewport.parent().css({
                    maxWidth: ak()
                }), ap.settings.pager || ap.viewport.parent().css({
                    margin: "0 auto 0px"
                }), ap.children.css({
                    "float": "horizontal" == ap.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), ap.children.css("width", al()), "horizontal" == ap.settings.mode && ap.settings.slideMargin > 0 && ap.children.css("marginRight", ap.settings.slideMargin), "vertical" == ap.settings.mode && ap.settings.slideMargin > 0 && ap.children.css("marginBottom", ap.settings.slideMargin), "fade" == ap.settings.mode && (ap.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), ap.children.eq(ap.settings.startSlide).css({
                    zIndex: 50,
                    display: "block"
                })), ap.controls.el = a('<div class="bx-controls" />'), ap.settings.captions && J(), ap.active.last = ap.settings.startSlide == ai() - 1, ap.settings.video && am.fitVids();
                var d = ap.children.eq(ap.settings.startSlide);
                "all" == ap.settings.preloadImages && (d = ap.children), ap.settings.ticker ? ap.settings.pager = !1 : (ap.settings.pager && F(), ap.settings.controls && ad(), ap.settings.auto && ap.settings.autoControls && ab(), (ap.settings.controls || ap.settings.autoControls || ap.settings.pager) && ap.viewport.after(ap.controls.el)), aw(d, av)
            },
            aw = function(g, d) {
                var f = g.find("img, iframe").length;
                if (0 == f) {
                    return d(), void 0
                }
                var h = 0;
                g.find("img, iframe").each(function() {
                    a(this).one("load", function() {
                        ++h == f && d()
                    }).each(function() {
                        this.complete && a(this).load()
                    })
                })
            },
            av = function() {
                if (ap.settings.infiniteLoop && "fade" != ap.settings.mode && !ap.settings.ticker) {
                    var g = "vertical" == ap.settings.mode ? ap.settings.minSlides : ap.settings.maxSlides,
                        d = ap.children.slice(0, g).clone().addClass("bx-clone"),
                        f = ap.children.slice(-g).clone().addClass("bx-clone");
                    am.append(d).prepend(f)
                }
                ap.loader.remove(), G(), "vertical" == ap.settings.mode && (ap.settings.adaptiveHeight = !0), ap.viewport.height(ao()), am.redrawSlider(), ap.settings.onSliderLoad(ap.active.index), ap.initialized = !0, ap.settings.responsive && a(window).bind("resize", ae), ap.settings.auto && ap.settings.autoStart && aa(), ap.settings.ticker && U(), ap.settings.pager && Z(ap.settings.startSlide), ap.settings.controls && s(), ap.settings.touchEnabled && !ap.settings.ticker && K()
            },
            ao = function() {
                var f = 0,
                    d = a();
                if ("vertical" == ap.settings.mode || ap.settings.adaptiveHeight) {
                    if (ap.carousel) {
                        var g = 1 == ap.settings.moveSlides ? ap.active.index : ap.active.index * ar();
                        for (d = ap.children.eq(g), i = 1; i <= ap.settings.maxSlides - 1; i++) {
                            d = g + i >= ap.children.length ? d.add(ap.children.eq(i - 1)) : d.add(ap.children.eq(g + i))
                        }
                    } else {
                        d = ap.children.eq(ap.active.index)
                    }
                } else {
                    d = ap.children
                }
                return "vertical" == ap.settings.mode ? (d.each(function() {
                    f += a(this).outerHeight()
                }), ap.settings.slideMargin > 0 && (f += ap.settings.slideMargin * (ap.settings.minSlides - 1))) : f = Math.max.apply(Math, d.map(function() {
                    return a(this).outerHeight(!1)
                }).get()), f
            },
            ak = function() {
                var d = "100%";
                return ap.settings.slideWidth > 0 && (d = "horizontal" == ap.settings.mode ? ap.settings.maxSlides * ap.settings.slideWidth + (ap.settings.maxSlides - 1) * ap.settings.slideMargin : ap.settings.slideWidth), d
            },
            al = function() {
                var d = ap.settings.slideWidth,
                    f = ap.viewport.width();
                return 0 == ap.settings.slideWidth || ap.settings.slideWidth > f && !ap.carousel || "vertical" == ap.settings.mode ? d = f : ap.settings.maxSlides > 1 && "horizontal" == ap.settings.mode && (f > ap.maxThreshold || f < ap.minThreshold && (d = (f - ap.settings.slideMargin * (ap.settings.minSlides - 1)) / ap.settings.minSlides)), d
            },
            ax = function() {
                var d = 1;
                if ("horizontal" == ap.settings.mode && ap.settings.slideWidth > 0) {
                    if (ap.viewport.width() < ap.minThreshold) {
                        d = ap.settings.minSlides
                    } else {
                        if (ap.viewport.width() > ap.maxThreshold) {
                            d = ap.settings.maxSlides
                        } else {
                            var f = ap.children.first().width();
                            d = Math.floor(ap.viewport.width() / f)
                        }
                    }
                } else {
                    "vertical" == ap.settings.mode && (d = ap.settings.minSlides)
                }
                return d
            },
            ai = function() {
                var f = 0;
                if (ap.settings.moveSlides > 0) {
                    if (ap.settings.infiniteLoop) {
                        f = ap.children.length / ar()
                    } else {
                        for (var g = 0, d = 0; g < ap.children.length;) {
                            ++f, g = d + ax(), d += ap.settings.moveSlides <= ax() ? ap.settings.moveSlides : ax()
                        }
                    }
                } else {
                    f = Math.ceil(ap.children.length / ax())
                }
                return f
            },
            ar = function() {
                return ap.settings.moveSlides > 0 && ap.settings.moveSlides <= ax() ? ap.settings.moveSlides : ax()
            },
            G = function() {
                if (ap.children.length > ap.settings.maxSlides && ap.active.last && !ap.settings.infiniteLoop) {
                    if ("horizontal" == ap.settings.mode) {
                        var f = ap.children.last(),
                            g = f.position();
                        aA(-(g.left - (ap.viewport.width() - f.width())), "reset", 0)
                    } else {
                        if ("vertical" == ap.settings.mode) {
                            var d = ap.children.length - ap.settings.minSlides,
                                g = ap.children.eq(d).position();
                            aA(-g.top, "reset", 0)
                        }
                    }
                } else {
                    var g = ap.children.eq(ap.active.index * ar()).position();
                    ap.active.index == ai() - 1 && (ap.active.last = !0), void 0 != g && ("horizontal" == ap.settings.mode ? aA(-g.left, "reset", 0) : "vertical" == ap.settings.mode && aA(-g.top, "reset", 0))
                }
            },
            aA = function(g, k, f, h) {
                if (ap.usingCSS) {
                    var l = "vertical" == ap.settings.mode ? "translate3d(0, " + g + "px, 0)" : "translate3d(" + g + "px, 0, 0)";
                    am.css("-" + ap.cssPrefix + "-transition-duration", f / 1000 + "s"), "slide" == k ? (am.css(ap.animProp, l), am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), ac()
                    })) : "reset" == k ? am.css(ap.animProp, l) : "ticker" == k && (am.css("-" + ap.cssPrefix + "-transition-timing-function", "linear"), am.css(ap.animProp, l), am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), aA(h.resetValue, "reset", 0), Q()
                    }))
                } else {
                    var d = {};
                    d[ap.animProp] = g, "slide" == k ? am.animate(d, f, ap.settings.easing, function() {
                        ac()
                    }) : "reset" == k ? am.css(ap.animProp, g) : "ticker" == k && am.animate(d, speed, "linear", function() {
                        aA(h.resetValue, "reset", 0), Q()
                    })
                }
            },
            aj = function() {
                for (var g = "", d = ai(), f = 0; d > f; f++) {
                    var h = "";
                    ap.settings.buildPager && a.isFunction(ap.settings.buildPager) ? (h = ap.settings.buildPager(f), ap.pagerEl.addClass("bx-custom-pager")) : (h = f + 1, ap.pagerEl.addClass("bx-default-pager")), g += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + h + "</a></div>"
                }
                ap.pagerEl.html(g)
            },
            F = function() {
                ap.settings.pagerCustom ? ap.pagerEl = a(ap.settings.pagerCustom) : (ap.pagerEl = a('<div class="bx-pager" />'), ap.settings.pagerSelector ? a(ap.settings.pagerSelector).html(ap.pagerEl) : ap.controls.el.addClass("bx-has-pager").append(ap.pagerEl), aj()), ap.pagerEl.delegate("a", "click", an)
            },
            ad = function() {
                ap.controls.next = a('<a class="bx-next" href="">' + ap.settings.nextText + "</a>"), ap.controls.prev = a('<a class="bx-prev" href="">' + ap.settings.prevText + "</a>"), ap.controls.next.bind("click", ah), ap.controls.prev.bind("click", ag), ap.settings.nextSelector && a(ap.settings.nextSelector).append(ap.controls.next), ap.settings.prevSelector && a(ap.settings.prevSelector).append(ap.controls.prev), ap.settings.nextSelector || ap.settings.prevSelector || (ap.controls.directionEl = a('<div class="bx-controls-direction" />'), ap.controls.directionEl.append(ap.controls.prev).append(ap.controls.next), ap.controls.el.addClass("bx-has-controls-direction").append(ap.controls.directionEl))
            },
            ab = function() {
                ap.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + ap.settings.startText + "</a></div>"), ap.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + ap.settings.stopText + "</a></div>"), ap.controls.autoEl = a('<div class="bx-controls-auto" />'), ap.controls.autoEl.delegate(".bx-start", "click", au), ap.controls.autoEl.delegate(".bx-stop", "click", R), ap.settings.autoControlsCombine ? ap.controls.autoEl.append(ap.controls.start) : ap.controls.autoEl.append(ap.controls.start).append(ap.controls.stop), ap.settings.autoControlsSelector ? a(ap.settings.autoControlsSelector).html(ap.controls.autoEl) : ap.controls.el.addClass("bx-has-controls-auto").append(ap.controls.autoEl), af(ap.settings.autoStart ? "stop" : "start")
            },
            J = function() {
                ap.children.each(function() {
                    var d = a(this).find("img:first").attr("title");
                    void 0 != d && ("" + d).length && a(this).append('<div class="bx-caption"><span>' + d + "</span></div>")
                })
            },
            ah = function(d) {
                ap.settings.auto && am.stopAuto(), am.goToNextSlide(), d.preventDefault()
            },
            ag = function(d) {
                ap.settings.auto && am.stopAuto(), am.goToPrevSlide(), d.preventDefault()
            },
            au = function(d) {
                am.startAuto(), d.preventDefault()
            },
            R = function(d) {
                am.stopAuto(), d.preventDefault()
            },
            an = function(g) {
                ap.settings.auto && am.stopAuto();
                var d = a(g.currentTarget),
                    f = parseInt(d.attr("data-slide-index"));
                f != ap.active.index && am.goToSlide(f), g.preventDefault()
            },
            Z = function(f) {
                var d = ap.children.length;
                return "short" == ap.settings.pagerType ? (ap.settings.maxSlides > 1 && (d = Math.ceil(ap.children.length / ap.settings.maxSlides)), ap.pagerEl.html(f + 1 + ap.settings.pagerShortSeparator + d), void 0) : (ap.pagerEl.find("a").removeClass("active"), ap.pagerEl.each(function(g, h) {
                    a(h).find("a").eq(f).addClass("active")
                }), void 0)
            },
            ac = function() {
                if (ap.settings.infiniteLoop) {
                    var d = "";
                    0 == ap.active.index ? d = ap.children.eq(0).position() : ap.active.index == ai() - 1 && ap.carousel ? d = ap.children.eq((ai() - 1) * ar()).position() : ap.active.index == ap.children.length - 1 && (d = ap.children.eq(ap.children.length - 1).position()), "horizontal" == ap.settings.mode ? aA(-d.left, "reset", 0) : "vertical" == ap.settings.mode && aA(-d.top, "reset", 0)
                }
                ap.working = !1, ap.settings.onSlideAfter(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index)
            },
            af = function(d) {
                ap.settings.autoControlsCombine ? ap.controls.autoEl.html(ap.controls[d]) : (ap.controls.autoEl.find("a").removeClass("active"), ap.controls.autoEl.find("a:not(.bx-" + d + ")").addClass("active"))
            },
            s = function() {
                1 == ai() ? (ap.controls.prev.addClass("disabled"), ap.controls.next.addClass("disabled")) : !ap.settings.infiniteLoop && ap.settings.hideControlOnEnd && (0 == ap.active.index ? (ap.controls.prev.addClass("disabled"), ap.controls.next.removeClass("disabled")) : ap.active.index == ai() - 1 ? (ap.controls.next.addClass("disabled"), ap.controls.prev.removeClass("disabled")) : (ap.controls.prev.removeClass("disabled"), ap.controls.next.removeClass("disabled")))
            },
            aa = function() {
                ap.settings.autoDelay > 0 ? setTimeout(am.startAuto, ap.settings.autoDelay) : am.startAuto(), ap.settings.autoHover && am.hover(function() {
                    ap.interval && (am.stopAuto(!0), ap.autoPaused = !0)
                }, function() {
                    ap.autoPaused && (am.startAuto(!0), ap.autoPaused = null)
                })
            },
            U = function() {
                var f = 0;
                if ("next" == ap.settings.autoDirection) {
                    am.append(ap.children.clone().addClass("bx-clone"))
                } else {
                    am.prepend(ap.children.clone().addClass("bx-clone"));
                    var d = ap.children.first().position();
                    f = "horizontal" == ap.settings.mode ? -d.left : -d.top
                }
                aA(f, "reset", 0), ap.settings.pager = !1, ap.settings.controls = !1, ap.settings.autoControls = !1, ap.settings.tickerHover && !ap.usingCSS && ap.viewport.hover(function() {
                    am.stop()
                }, function() {
                    var k = 0;
                    ap.children.each(function() {
                        k += "horizontal" == ap.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                    });
                    var g = ap.settings.speed / k,
                        h = "horizontal" == ap.settings.mode ? "left" : "top",
                        l = g * (k - Math.abs(parseInt(am.css(h))));
                    Q(l)
                }), Q()
            },
            Q = function(g) {
                speed = g ? g : ap.settings.speed;
                var k = {
                        left: 0,
                        top: 0
                    },
                    f = {
                        left: 0,
                        top: 0
                    };
                "next" == ap.settings.autoDirection ? k = am.find(".bx-clone").first().position() : f = ap.children.first().position();
                var h = "horizontal" == ap.settings.mode ? -k.left : -k.top,
                    l = "horizontal" == ap.settings.mode ? -f.left : -f.top,
                    d = {
                        resetValue: l
                    };
                aA(h, "ticker", speed, d)
            },
            K = function() {
                ap.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                }, ap.viewport.bind("touchstart", j)
            },
            j = function(d) {
                if (ap.working) {
                    d.preventDefault()
                } else {
                    ap.touch.originalPos = am.position();
                    var f = d.originalEvent;
                    ap.touch.start.x = f.changedTouches[0].pageX, ap.touch.start.y = f.changedTouches[0].pageY, ap.viewport.bind("touchmove", e), ap.viewport.bind("touchend", t)
                }
            },
            e = function(f) {
                var k = f.originalEvent,
                    d = Math.abs(k.changedTouches[0].pageX - ap.touch.start.x),
                    g = Math.abs(k.changedTouches[0].pageY - ap.touch.start.y);
                if (3 * d > g && ap.settings.preventDefaultSwipeX ? f.preventDefault() : 3 * g > d && ap.settings.preventDefaultSwipeY && f.preventDefault(), "fade" != ap.settings.mode && ap.settings.oneToOneTouch) {
                    var l = 0;
                    if ("horizontal" == ap.settings.mode) {
                        var h = k.changedTouches[0].pageX - ap.touch.start.x;
                        l = ap.touch.originalPos.left + h
                    } else {
                        var h = k.changedTouches[0].pageY - ap.touch.start.y;
                        l = ap.touch.originalPos.top + h
                    }
                    aA(l, "reset", 0)
                }
            },
            t = function(f) {
                ap.viewport.unbind("touchmove", e);
                var h = f.originalEvent,
                    d = 0;
                if (ap.touch.end.x = h.changedTouches[0].pageX, ap.touch.end.y = h.changedTouches[0].pageY, "fade" == ap.settings.mode) {
                    var g = Math.abs(ap.touch.start.x - ap.touch.end.x);
                    g >= ap.settings.swipeThreshold && (ap.touch.start.x > ap.touch.end.x ? am.goToNextSlide() : am.goToPrevSlide(), am.stopAuto())
                } else {
                    var g = 0;
                    "horizontal" == ap.settings.mode ? (g = ap.touch.end.x - ap.touch.start.x, d = ap.touch.originalPos.left) : (g = ap.touch.end.y - ap.touch.start.y, d = ap.touch.originalPos.top), !ap.settings.infiniteLoop && (0 == ap.active.index && g > 0 || ap.active.last && 0 > g) ? aA(d, "reset", 200) : Math.abs(g) >= ap.settings.swipeThreshold ? (0 > g ? am.goToNextSlide() : am.goToPrevSlide(), am.stopAuto()) : aA(d, "reset", 200)
                }
                ap.viewport.unbind("touchend", t)
            },
            ae = function() {
                var f = a(window).width(),
                    d = a(window).height();
                (aB != f || at != d) && (aB = f, at = d, am.redrawSlider())
            };
        return am.goToSlide = function(o, k) {
            if (!ap.working && ap.active.index != o) {
                if (ap.working = !0, ap.oldIndex = ap.active.index, ap.active.index = 0 > o ? ai() - 1 : o >= ai() ? 0 : o, ap.settings.onSlideBefore(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index), "next" == k ? ap.settings.onSlideNext(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index) : "prev" == k && ap.settings.onSlidePrev(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index), ap.active.last = ap.active.index >= ai() - 1, ap.settings.pager && Z(ap.active.index), ap.settings.controls && s(), "fade" == ap.settings.mode) {
                    ap.settings.adaptiveHeight && ap.viewport.height() != ao() && ap.viewport.animate({
                        height: ao()
                    }, ap.settings.adaptiveHeightSpeed), ap.children.filter(":visible").fadeOut(ap.settings.speed).css({
                        zIndex: 0
                    }), ap.children.eq(ap.active.index).css("zIndex", 51).fadeIn(ap.settings.speed, function() {
                        a(this).css("zIndex", 50), ac()
                    })
                } else {
                    ap.settings.adaptiveHeight && ap.viewport.height() != ao() && ap.viewport.animate({
                        height: ao()
                    }, ap.settings.adaptiveHeightSpeed);
                    var u = 0,
                        f = {
                            left: 0,
                            top: 0
                        };
                    if (!ap.settings.infiniteLoop && ap.carousel && ap.active.last) {
                        if ("horizontal" == ap.settings.mode) {
                            var r = ap.children.eq(ap.children.length - 1);
                            f = r.position(), u = ap.viewport.width() - r.outerWidth()
                        } else {
                            var h = ap.children.length - ap.settings.minSlides;
                            f = ap.children.eq(h).position()
                        }
                    } else {
                        if (ap.carousel && ap.active.last && "prev" == k) {
                            var p = 1 == ap.settings.moveSlides ? ap.settings.maxSlides - ar() : (ai() - 1) * ar() - (ap.children.length - ap.settings.maxSlides),
                                r = am.children(".bx-clone").eq(p);
                            f = r.position()
                        } else {
                            if ("next" == k && 0 == ap.active.index) {
                                f = am.find("> .bx-clone").eq(ap.settings.maxSlides).position(), ap.active.last = !1
                            } else {
                                if (o >= 0) {
                                    var q = o * ar();
                                    f = ap.children.eq(q).position()
                                }
                            }
                        }
                    } if ("undefined" != typeof f) {
                        var m = "horizontal" == ap.settings.mode ? -(f.left - u) : -f.top;
                        aA(m, "slide", ap.settings.speed)
                    }
                }
            }
        }, am.goToNextSlide = function() {
            if (ap.settings.infiniteLoop || !ap.active.last) {
                var d = parseInt(ap.active.index) + 1;
                am.goToSlide(d, "next")
            }
        }, am.goToPrevSlide = function() {
            if (ap.settings.infiniteLoop || 0 != ap.active.index) {
                var d = parseInt(ap.active.index) - 1;
                am.goToSlide(d, "prev")
            }
        }, am.startAuto = function(d) {
            ap.interval || (ap.interval = setInterval(function() {
                "next" == ap.settings.autoDirection ? am.goToNextSlide() : am.goToPrevSlide()
            }, ap.settings.pause), ap.settings.autoControls && 1 != d && af("stop"))
        }, am.stopAuto = function(d) {
            ap.interval && (clearInterval(ap.interval), ap.interval = null, ap.settings.autoControls && 1 != d && af("start"))
        }, am.getCurrentSlide = function() {
            return ap.active.index
        }, am.getSlideCount = function() {
            return ap.children.length
        }, am.redrawSlider = function() {
            ap.children.add(am.find(".bx-clone")).outerWidth(al()), ap.viewport.css("height", ao()), ap.settings.ticker || G(), ap.active.last && (ap.active.index = ai() - 1), ap.active.index >= ai() && (ap.active.last = !0), ap.settings.pager && !ap.settings.pagerCustom && (aj(), Z(ap.active.index))
        }, am.destroySlider = function() {
            ap.initialized && (ap.initialized = !1, a(".bx-clone", this).remove(), ap.children.each(function() {
                void 0 != a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
            }), void 0 != a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), ap.controls.el && ap.controls.el.remove(), ap.controls.next && ap.controls.next.remove(), ap.controls.prev && ap.controls.prev.remove(), ap.pagerEl && ap.pagerEl.remove(), a(".bx-caption", this).remove(), ap.controls.autoEl && ap.controls.autoEl.remove(), clearInterval(ap.interval), ap.settings.responsive && a(window).unbind("resize", ae))
        }, am.reloadSlider = function(d) {
            void 0 != d && (aq = d), am.destroySlider(), ay()
        }, ay(), this
    }
}(jQuery);
(function(f) {
    var e = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: false,
            getWidthFrom: ""
        },
        b = f(window),
        d = f(document),
        i = [],
        a = b.height(),
        g = function() {
            var j = b.scrollTop(),
                q = d.height(),
                p = q - a,
                l = (j > p) ? p - j : 0;
            for (var m = 0; m < i.length; m++) {
                var r = i[m],
                    k = r.stickyWrapper.offset().top,
                    n = k - r.topSpacing - l;
                if (j <= n) {
                    if (r.currentTop !== null) {
                        r.stickyElement.css("position", "").css("top", "");
                        r.stickyElement.parent().removeClass(r.className);
                        r.currentTop = null
                    }
                } else {
                    var o = q - r.stickyElement.outerHeight() - r.topSpacing - r.bottomSpacing - j - l;
                    if (o < 0) {
                        o = o + r.topSpacing
                    } else {
                        o = r.topSpacing
                    } if (r.currentTop != o) {
                        r.stickyElement.css("position", "fixed").css("top", o);
                        if (typeof r.getWidthFrom !== "undefined") {
                            r.stickyElement.css("width", f(r.getWidthFrom).width())
                        }
                        r.stickyElement.parent().addClass(r.className);
                        r.currentTop = o
                    }
                }
            }
        },
        h = function() {
            a = b.height()
        },
        c = {
            init: function(j) {
                var k = f.extend(e, j);
                return this.each(function() {
                    var l = f(this);
                    var m = l.attr("id");
                    var o = f("<div></div>").attr("id", m + "-sticky-wrapper").addClass(k.wrapperClassName);
                    l.wrapAll(o);
                    if (k.center) {
                        l.parent().css({
                            width: l.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        })
                    }
                    if (l.css("float") == "right") {
                        l.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        })
                    }
                    var n = l.parent();
                    n.css("height", l.outerHeight());
                    i.push({
                        topSpacing: k.topSpacing,
                        bottomSpacing: k.bottomSpacing,
                        stickyElement: l,
                        currentTop: null,
                        stickyWrapper: n,
                        className: k.className,
                        getWidthFrom: k.getWidthFrom
                    })
                })
            },
            update: g
        };
    if (window.addEventListener) {
        window.addEventListener("scroll", g, false);
        window.addEventListener("resize", h, false)
    } else {
        if (window.attachEvent) {
            window.attachEvent("onscroll", g);
            window.attachEvent("onresize", h)
        }
    }
    f.fn.sticky = function(j) {
        if (c[j]) {
            return c[j].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof j === "object" || !j) {
                return c.init.apply(this, arguments)
            } else {
                f.error("Method " + j + " does not exist on jQuery.sticky")
            }
        }
    };
    f(function() {
        setTimeout(g, 0)
    })
})(jQuery);
if (typeof ytp != "object") {
    ytp = {}
}

function onYouTubePlayerAPIReady() {
    if (ytp.YTAPIReady) {
        return
    }
    ytp.YTAPIReady = true;
    jQuery(document).trigger("YTAPIReady")
}(function(jQuery, ytp) {
    ytp.isDevice = "ontouchstart" in window;
    if (!jQuery.browser) {
        jQuery.browser = {};
        jQuery.browser.mozilla = !1;
        jQuery.browser.webkit = !1;
        jQuery.browser.opera = !1;
        jQuery.browser.msie = !1;
        var nAgt = navigator.userAgent;
        jQuery.browser.ua = nAgt;
        jQuery.browser.name = navigator.appName;
        jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
        jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        if (-1 != (verOffset = nAgt.indexOf("Opera"))) {
            jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))
        } else {
            if (-1 != (verOffset = nAgt.indexOf("MSIE"))) {
                jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)
            } else {
                if (-1 != nAgt.indexOf("Trident")) {
                    jQuery.browser.msie = !0;
                    jQuery.browser.name = "Microsoft Internet Explorer";
                    var start = nAgt.indexOf("rv:") + 3,
                        end = start + 4;
                    jQuery.browser.fullVersion = nAgt.substring(start, end)
                } else {
                    -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName))
                }
            }
        } - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
        jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
        isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
        jQuery.browser.version = jQuery.browser.majorVersion
    }
    jQuery.fn.CSSAnimate = function(a, b, k, l, f) {
        return this.each(function() {
            var c = jQuery(this);
            if (0 !== c.length && a) {
                "function" == typeof b && (f = b, b = jQuery.fx.speeds._default);
                "function" == typeof k && (f = k, k = 0);
                "function" == typeof l && (f = l, l = "cubic-bezier(0.65,0.03,0.36,0.72)");
                if ("string" == typeof b) {
                    for (var j in jQuery.fx.speeds) {
                        if (b == j) {
                            b = jQuery.fx.speeds[j];
                            break
                        } else {
                            b = null
                        }
                    }
                }
                if (jQuery.support.transition) {
                    var e = "",
                        h = "transitionEnd";
                    jQuery.browser.webkit ? (e = "-webkit-", h = "webkitTransitionEnd") : jQuery.browser.mozilla ? (e = "-moz-", h = "transitionend") : jQuery.browser.opera ? (e = "-o-", h = "otransitionend") : jQuery.browser.msie && (e = "-ms-", h = "msTransitionEnd");
                    j = [];
                    for (d in a) {
                        var g = d;
                        "transform" === g && (g = e + "transform", a[g] = a[d], delete a[d]);
                        "transform-origin" === g && (g = e + "transform-origin", a[g] = a[d], delete a[d]);
                        j.push(g);
                        c.css(g) || c.css(g, 0)
                    }
                    d = j.join(",");
                    c.css(e + "transition-property", d);
                    c.css(e + "transition-duration", b + "ms");
                    c.css(e + "transition-delay", k + "ms");
                    c.css(e + "transition-timing-function", l);
                    c.css(e + "backface-visibility", "hidden");
                    setTimeout(function() {
                        c.css(a)
                    }, 0);
                    setTimeout(function() {
                        c.called || !f ? c.called = !1 : f()
                    }, b + 20);
                    c.on(h, function(a) {
                        c.off(h);
                        c.css(e + "transition", "");
                        a.stopPropagation();
                        "function" == typeof f && (c.called = !0, f());
                        return !1
                    })
                } else {
                    for (var d in a) {
                        "transform" === d && delete a[d], "transform-origin" === d && delete a[d], "auto" === a[d] && delete a[d]
                    }
                    if (!f || "string" === typeof f) {
                        f = "linear"
                    }
                    c.animate(a, b, f)
                }
            }
        })
    };
    jQuery.fn.CSSAnimateStop = function() {
        var a = "",
            b = "transitionEnd";
        jQuery.browser.webkit ? (a = "-webkit-", b = "webkitTransitionEnd") : jQuery.browser.mozilla ? (a = "-moz-", b = "transitionend") : jQuery.browser.opera ? (a = "-o-", b = "otransitionend") : jQuery.browser.msie && (a = "-ms-", b = "msTransitionEnd");
        jQuery(this).css(a + "transition", "");
        jQuery(this).off(b)
    };
    jQuery.support.transition = function() {
        var a = (document.body || document.documentElement).style;
        return void 0 !== a.transition || void 0 !== a.WebkitTransition || void 0 !== a.MozTransition || void 0 !== a.MsTransition || void 0 !== a.OTransition
    }();
    (function(c) {
        c.extend({
            metadata: {
                defaults: {
                    type: "class",
                    name: "metadata",
                    cre: /({.*})/,
                    single: "metadata"
                },
                setType: function(b, c) {
                    this.defaults.type = b;
                    this.defaults.name = c
                },
                get: function(b, f) {
                    var d = c.extend({}, this.defaults, f);
                    d.single.length || (d.single = "metadata");
                    var a = c.data(b, d.single);
                    if (a) {
                        return a
                    }
                    a = "{}";
                    if ("class" == d.type) {
                        var e = d.cre.exec(b.className);
                        e && (a = e[1])
                    } else {
                        if ("elem" == d.type) {
                            if (!b.getElementsByTagName) {
                                return
                            }
                            e = b.getElementsByTagName(d.name);
                            e.length && (a = c.trim(e[0].innerHTML))
                        } else {
                            void 0 != b.getAttribute && (e = b.getAttribute(d.name)) && (a = e)
                        }
                    }
                    0 > a.indexOf("{") && (a = "{" + a + "}");
                    a = eval("(" + a + ")");
                    c.data(b, d.single, a);
                    return a
                }
            }
        });
        c.fn.metadata = function(b) {
            return c.metadata.get(this[0], b)
        }
    })(jQuery);
    String.prototype.getVideoID = function() {
        var movieURL;
        if (this.substr(0, 16) == "http://youtu.be/") {
            movieURL = this.replace("http://youtu.be/", "")
        } else {
            if (this.indexOf("http") > -1) {
                movieURL = this.match(/[\\?&]v=([^&#]*)/)[1]
            } else {
                movieURL = this
            }
        }
        return movieURL
    };
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.6.0",
        author: "Matteo Bicocchi",
        defaults: {
            containment: "body",
            ratio: "16/9",
            showYTLogo: false,
            videoURL: null,
            startAt: 0,
            autoPlay: true,
            vol: 100,
            addRaster: false,
            opacity: 1,
            quality: "default",
            mute: false,
            loop: true,
            showControls: true,
            showAnnotations: false,
            printUrl: true,
            stopMovieOnClick: false,
            realfullscreen: true,
            onReady: function(player) {},
            onStateChange: function(player) {},
            onPlaybackQualityChange: function(player) {},
            onError: function(player) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        rasterImg: "images/raster.png",
        rasterImgRetina: "images/raster@2x.png",
        locationProtocol: location.protocol != "file:" ? location.protocol : "http:",
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this;
                var $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0;
                YTPlayer.opt = {};
                var property = {};
                $YTPlayer.addClass("mb_YTVPlayer");
                if (jQuery.metadata) {
                    jQuery.metadata.setType("class");
                    property = $YTPlayer.metadata()
                }
                if (jQuery.isEmptyObject(property)) {
                    property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property")
                }
                jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
                var canGoFullscreen = false;
                try {
                    canGoFullscreen = !(jQuery.browser.msie || jQuery.browser.opera || self.location.href != top.location.href)
                } catch (x) {}
                if (!canGoFullscreen) {
                    YTPlayer.opt.realfullscreen = false
                }
                if (!$YTPlayer.attr("id")) {
                    $YTPlayer.attr("id", "id_" + new Date().getTime())
                }
                YTPlayer.opt.id = YTPlayer.id;
                YTPlayer.isAlone = false;
                if (YTPlayer.opt.isBgndMovie) {
                    YTPlayer.opt.containment = "body"
                }
                if (YTPlayer.opt.isBgndMovie && YTPlayer.opt.isBgndMovie.mute != undefined) {
                    YTPlayer.opt.mute = YTPlayer.opt.isBgndMovie.mute
                }
                if (!YTPlayer.opt.videoURL) {
                    YTPlayer.opt.videoURL = $YTPlayer.attr("href")
                }
                var playerID = "mbYTP_" + YTPlayer.id;
                var videoID = this.opt.videoURL ? this.opt.videoURL.getVideoID() : $YTPlayer.attr("href") ? $YTPlayer.attr("href").getVideoID() : false;
                YTPlayer.videoID = videoID;
                YTPlayer.opt.showAnnotations = (YTPlayer.opt.showAnnotations) ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: true,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                var canPlayHTML5 = false;
                var v = document.createElement("video");
                if (v.canPlayType) {
                    canPlayHTML5 = true
                }
                if (canPlayHTML5) {
                    jQuery.extend(playerVars, {
                        html5: 1
                    })
                }
                if (jQuery.browser.msie && jQuery.browser.version < 9) {
                    this.opt.opacity = 1
                }
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                var overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery(this) : jQuery(YTPlayer.opt.containment);
                YTPlayer.isBackground = YTPlayer.opt.containment.get(0).tagName.toLowerCase() == "body";
                if (ytp.isDevice && YTPlayer.isBackground) {
                    $YTPlayer.hide();
                    return
                }
                if (YTPlayer.opt.addRaster) {
                    var retina = (window.retina || window.devicePixelRatio > 1);
                    overlay.addClass(retina ? "raster retina" : "raster")
                } else {
                    overlay.removeClass("raster retina")
                }
                var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                wrapper.css({
                    position: "absolute",
                    zIndex: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    opacity: 0
                });
                playerBox.css({
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    opacity: this.opt.opacity
                });
                wrapper.append(playerBox);
                if (YTPlayer.isBackground && ytp.isInit) {
                    return
                }
                YTPlayer.opt.containment.children().each(function() {
                    if (jQuery(this).css("position") == "static") {
                        jQuery(this).css("position", "relative")
                    }
                });
                if (YTPlayer.isBackground) {
                    jQuery("body").css({
                        position: "relative",
                        minWidth: "100%",
                        minHeight: "100%",
                        zIndex: 1,
                        boxSizing: "border-box"
                    });
                    wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    });
                    $YTPlayer.hide();
                    YTPlayer.opt.containment.prepend(wrapper)
                } else {
                    YTPlayer.opt.containment.prepend(wrapper)
                }
                YTPlayer.wrapper = wrapper;
                playerBox.css({
                    opacity: 1
                });
                if (!ytp.isDevice) {
                    playerBox.after(overlay);
                    YTPlayer.overlay = overlay
                }
                if (!YTPlayer.isBackground) {
                    overlay.on("mouseenter", function() {
                        $YTPlayer.find(".mb_YTVPBar").addClass("visible")
                    }).on("mouseleave", function() {
                        $YTPlayer.find(".mb_YTVPBar").removeClass("visible")
                    })
                }
                if (!ytp.YTAPIReady) {
                    var tag = document.createElement("script");
                    tag.src = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api";
                    tag.id = "YTAPI";
                    var firstScriptTag = document.getElementsByTagName("script")[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
                } else {
                    setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady")
                    }, 200)
                }
                jQuery(document).on("YTAPIReady", function() {
                    if ((YTPlayer.isBackground && ytp.isInit) || YTPlayer.opt.isInit) {
                        return
                    }
                    if (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick) {
                        jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function(e) {
                            var target = jQuery(e.target);
                            if (target.is("a") || target.parents().is("a")) {
                                $YTPlayer.pauseYTP()
                            }
                        })
                    }
                    if (YTPlayer.isBackground) {
                        ytp.isInit = true
                    }
                    YTPlayer.opt.isInit = true;
                    YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;
                    jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer);
                    jQuery(document).on("getVideoInfo_" + YTPlayer.opt.id, function() {
                        if (ytp.isDevice && !YTPlayer.isBackground) {
                            new YT.Player(playerID, {
                                height: "100%",
                                width: "100%",
                                videoId: YTPlayer.videoID,
                                events: {
                                    onReady: function() {
                                        $YTPlayer.optimizeDisplay();
                                        playerBox.css({
                                            opacity: 1
                                        });
                                        YTPlayer.wrapper.css({
                                            opacity: 1
                                        });
                                        $YTPlayer.optimizeDisplay()
                                    },
                                    onStateChange: function() {}
                                }
                            });
                            return
                        }
                        new YT.Player(playerID, {
                            videoId: YTPlayer.videoID.toString(),
                            playerVars: playerVars,
                            events: {
                                onReady: function(event) {
                                    YTPlayer.player = event.target;
                                    if (YTPlayer.isReady) {
                                        return
                                    }
                                    YTPlayer.isReady = true;
                                    YTPlayer.playerEl = YTPlayer.player.getIframe();
                                    $YTPlayer.optimizeDisplay();
                                    YTPlayer.videoID = videoID;
                                    jQuery(window).on("resize.YTP", function() {
                                        $YTPlayer.optimizeDisplay()
                                    });
                                    if (YTPlayer.opt.showControls) {
                                        jQuery(YTPlayer).buildYTPControls()
                                    }
                                    YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                    if (YTPlayer.opt.startAt > 0) {
                                        YTPlayer.player.seekTo(parseFloat(YTPlayer.opt.startAt), true)
                                    }
                                    if (!YTPlayer.opt.autoPlay) {
                                        YTPlayer.player.pauseVideo();
                                        YTPlayer.checkForStartAt = setInterval(function() {
                                            if (YTPlayer.player.getCurrentTime() >= YTPlayer.opt.startAt) {
                                                clearInterval(YTPlayer.checkForStartAt);
                                                if (YTPlayer.opt.mute) {
                                                    jQuery(YTPlayer).muteYTPVolume()
                                                } else {
                                                    jQuery(YTPlayer).unmuteYTPVolume()
                                                }
                                            }
                                        }, 1)
                                    } else {
                                        $YTPlayer.playYTP();
                                        YTPlayer.player.setVolume(YTPlayer.opt.vol);
                                        if (YTPlayer.opt.mute) {
                                            jQuery(YTPlayer).muteYTPVolume()
                                        } else {
                                            jQuery(YTPlayer).unmuteYTPVolume()
                                        }
                                    } if (typeof YTPlayer.opt.onReady == "function") {
                                        YTPlayer.opt.onReady($YTPlayer)
                                    }
                                    jQuery.mbYTPlayer.checkForState(YTPlayer)
                                },
                                onStateChange: function(event) {
                                    if (typeof event.target.getPlayerState != "function") {
                                        return
                                    }
                                    var state = event.target.getPlayerState();
                                    if (typeof YTPlayer.opt.onStateChange == "function") {
                                        YTPlayer.opt.onStateChange($YTPlayer, state)
                                    }
                                    var playerBox = jQuery(YTPlayer.playerEl);
                                    var controls = jQuery("#controlBar_" + YTPlayer.id);
                                    var data = YTPlayer.opt;
                                    if (state == 0) {
                                        if (YTPlayer.state == state) {
                                            return
                                        }
                                        YTPlayer.state = state;
                                        YTPlayer.player.pauseVideo();
                                        var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                        if (data.loop) {
                                            YTPlayer.wrapper.css({
                                                opacity: 0
                                            });
                                            $YTPlayer.playYTP();
                                            YTPlayer.player.seekTo(startAt, true)
                                        } else {
                                            if (!YTPlayer.isBackground) {
                                                YTPlayer.player.seekTo(startAt, true);
                                                $YTPlayer.playYTP();
                                                setTimeout(function() {
                                                    $YTPlayer.pauseYTP()
                                                }, 10)
                                            }
                                        } if (!data.loop && YTPlayer.isBackground) {
                                            YTPlayer.wrapper.CSSAnimate({
                                                opacity: 0
                                            }, 2000)
                                        } else {
                                            if (data.loop) {
                                                YTPlayer.wrapper.css({
                                                    opacity: 0
                                                });
                                                YTPlayer.loop++
                                            }
                                        }
                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                        jQuery(YTPlayer).trigger("YTPEnd")
                                    }
                                    if (state == 3) {
                                        if (YTPlayer.state == state) {
                                            return
                                        }
                                        YTPlayer.state = state;
                                        YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                        jQuery(YTPlayer).trigger("YTPBuffering")
                                    }
                                    if (state == -1) {
                                        if (YTPlayer.state == state) {
                                            return
                                        }
                                        YTPlayer.state = state;
                                        YTPlayer.wrapper.css({
                                            opacity: 0
                                        });
                                        jQuery(YTPlayer).trigger("YTPUnstarted")
                                    }
                                    if (state == 1) {
                                        if (YTPlayer.state == state) {
                                            return
                                        }
                                        YTPlayer.state = state;
                                        YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                        if (YTPlayer.opt.mute) {
                                            $YTPlayer.muteYTPVolume();
                                            YTPlayer.opt.mute = false
                                        }
                                        if (YTPlayer.opt.autoPlay && YTPlayer.loop == 0) {
                                            YTPlayer.wrapper.CSSAnimate({
                                                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                            }, 2000)
                                        } else {
                                            if (!YTPlayer.isBackground) {
                                                YTPlayer.wrapper.css({
                                                    opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                                });
                                                $YTPlayer.css({
                                                    background: "rgba(0,0,0,0.5)"
                                                })
                                            } else {
                                                setTimeout(function() {
                                                    jQuery(YTPlayer.playerEl).CSSAnimate({
                                                        opacity: 1
                                                    }, 2000);
                                                    YTPlayer.wrapper.CSSAnimate({
                                                        opacity: YTPlayer.opt.opacity
                                                    }, 2000)
                                                }, 1000)
                                            }
                                        }
                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause);
                                        jQuery(YTPlayer).trigger("YTPStart");
                                        if (typeof _gaq != "undefined") {
                                            _gaq.push(["_trackEvent", "YTPlayer", "Play", (YTPlayer.title || YTPlayer.videoID.toString())])
                                        }
                                    }
                                    if (state == 2) {
                                        if (YTPlayer.state == state) {
                                            return
                                        }
                                        YTPlayer.state = state;
                                        controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                        jQuery(YTPlayer).trigger("YTPPause")
                                    }
                                },
                                onPlaybackQualityChange: function(e) {
                                    if (typeof YTPlayer.opt.onPlaybackQualityChange == "function") {
                                        YTPlayer.opt.onPlaybackQualityChange($YTPlayer)
                                    }
                                },
                                onError: function(err) {
                                    if (err.data == 2 && YTPlayer.isPlayList) {
                                        jQuery(YTPlayer).playNext()
                                    }
                                    if (typeof YTPlayer.opt.onError == "function") {
                                        YTPlayer.opt.onError($YTPlayer, err)
                                    }
                                }
                            }
                        })
                    })
                })
            })
        },
        getDataFromFeed: function(videoID, YTPlayer) {
            YTPlayer.videoID = videoID;
            if (!jQuery.browser.msie) {
                jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//gdata.youtube.com/feeds/api/videos/" + videoID + "?v=2&alt=jsonc", function(data, status, xhr) {
                    YTPlayer.dataReceived = true;
                    var videoData = data.data;
                    YTPlayer.title = videoData.title;
                    YTPlayer.videoData = videoData;
                    if (YTPlayer.opt.ratio == "auto") {
                        if (videoData.aspectRatio && videoData.aspectRatio === "widescreen") {
                            YTPlayer.opt.ratio = "16/9"
                        } else {
                            YTPlayer.opt.ratio = "4/3"
                        }
                    }
                    if (!YTPlayer.isInit) {
                        YTPlayer.isInit = true;
                        if (!YTPlayer.isBackground) {
                            var bgndURL = YTPlayer.videoData.thumbnail.hqDefault;
                            jQuery(YTPlayer).css({
                                background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                                backgroundSize: "cover"
                            })
                        }
                        jQuery(document).trigger("getVideoInfo_" + YTPlayer.opt.id)
                    }
                    jQuery(YTPlayer).trigger("YTPChanged")
                });
                setTimeout(function() {
                    if (!YTPlayer.dataReceived && !YTPlayer.isInit) {
                        YTPlayer.isInit = true;
                        jQuery(document).trigger("getVideoInfo_" + YTPlayer.opt.id)
                    }
                }, 2500)
            } else {
                YTPlayer.opt.ratio == "auto" ? YTPlayer.opt.ratio = "16/9" : YTPlayer.opt.ratio;
                if (!YTPlayer.isInit) {
                    YTPlayer.isInit = true;
                    setTimeout(function() {
                        jQuery(document).trigger("getVideoInfo_" + YTPlayer.opt.id)
                    }, 100)
                }
                jQuery(YTPlayer).trigger("YTPChanged")
            }
        },
        getVideoID: function() {
            var YTPlayer = this.get(0);
            return YTPlayer.videoID || false
        },
        setVideoQuality: function(quality) {
            var YTPlayer = this.get(0);
            YTPlayer.player.setPlaybackQuality(quality)
        },
        YTPlaylist: function(videos, shuffle, callback) {
            var YTPlayer = this.get(0);
            YTPlayer.isPlayList = true;
            if (shuffle) {
                videos = jQuery.shuffle(videos)
            }
            if (!YTPlayer.videoID) {
                YTPlayer.videos = videos;
                YTPlayer.videoCounter = 0;
                YTPlayer.videoLength = videos.length;
                jQuery(YTPlayer).data("property", videos[0]);
                jQuery(YTPlayer).mb_YTPlayer()
            }
            if (typeof callback == "function") {
                jQuery(YTPlayer).on("YTPChanged", function() {
                    callback(YTPlayer)
                })
            }
            jQuery(YTPlayer).on("YTPEnd", function() {
                jQuery(YTPlayer).playNext()
            })
        },
        playNext: function() {
            var YTPlayer = this.get(0);
            YTPlayer.videoCounter++;
            if (YTPlayer.videoCounter >= YTPlayer.videoLength) {
                YTPlayer.videoCounter = 0
            }
            jQuery(YTPlayer.playerEl).css({
                opacity: 0
            });
            jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter])
        },
        playPrev: function() {
            var YTPlayer = this.get(0);
            YTPlayer.videoCounter--;
            if (YTPlayer.videoCounter <= 0) {
                YTPlayer.videoCounter = YTPlayer.videoLength
            }
            jQuery(YTPlayer.playerEl).css({
                opacity: 0
            });
            jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter])
        },
        changeMovie: function(opt) {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            if (opt) {
                jQuery.extend(data, opt)
            }
            YTPlayer.videoID = data.videoURL.getVideoID();
            jQuery(YTPlayer).pauseYTP();
            var timer = jQuery.browser.msie ? 1000 : 0;
            jQuery(YTPlayer).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + YTPlayer.videoID), 5, YTPlayer.opt.quality);
            setTimeout(function() {
                jQuery(YTPlayer).playYTP();
                jQuery(YTPlayer).one("YTPStart", function() {
                    jQuery(YTPlayer.playerEl).CSSAnimate({
                        opacity: 1
                    }, 2000)
                })
            }, timer);
            if (YTPlayer.opt.mute) {
                jQuery(YTPlayer).muteYTPVolume()
            } else {
                jQuery(YTPlayer).unmuteYTPVolume()
            } if (YTPlayer.opt.addRaster) {
                var retina = (window.retina || window.devicePixelRatio > 1);
                YTPlayer.overlay.addClass(retina ? "raster retina" : "raster")
            } else {
                YTPlayer.overlay.removeClass("raster");
                YTPlayer.overlay.removeClass("retina")
            }
            jQuery("#controlBar_" + YTPlayer.id).remove();
            if (YTPlayer.opt.showControls) {
                jQuery(YTPlayer).buildYTPControls()
            }
            jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer);
            jQuery(YTPlayer).optimizeDisplay();
            jQuery.mbYTPlayer.checkForState(YTPlayer)
        },
        getPlayer: function() {
            return jQuery(this).get(0).player
        },
        playerDestroy: function() {
            var YTPlayer = this.get(0);
            ytp.YTAPIReady = false;
            ytp.isInit = false;
            YTPlayer.opt.isInit = false;
            YTPlayer.videoID = null;
            var playerBox = YTPlayer.wrapper;
            playerBox.remove();
            jQuery("#controlBar_" + YTPlayer.id).remove()
        },
        fullscreen: function(real) {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var fullScreenBtn = controls.find(".mb_OnlyYT");
            var videoWrapper = jQuery(YTPlayer.wrapper);
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange);
                jQuery(document).on(fullscreenchange, function() {
                    var isFullScreen = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    if (!isFullScreen) {
                        jQuery(YTPlayer).removeClass("fullscreen");
                        YTPlayer.isAlone = false;
                        fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                        jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality);
                        if (YTPlayer.isBackground) {
                            jQuery("body").after(controls)
                        } else {
                            YTPlayer.wrapper.before(controls)
                        }
                        jQuery(window).resize()
                    } else {
                        jQuery(YTPlayer).setVideoQuality("default")
                    }
                })
            }
            if (!YTPlayer.isAlone) {
                if (YTPlayer.player.getPlayerState() != 1 && YTPlayer.player.getPlayerState() != 2) {
                    jQuery(YTPlayer).playYTP()
                }
                if (real) {
                    YTPlayer.wrapper.append(controls);
                    jQuery(YTPlayer).addClass("fullscreen");
                    launchFullscreen(videoWrapper.get(0))
                } else {
                    videoWrapper.css({
                        zIndex: 10000
                    }).CSSAnimate({
                        opacity: 1
                    }, 1000, 0)
                }
                jQuery(YTPlayer).trigger("YTPFullScreenStart");
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
                YTPlayer.isAlone = true
            } else {
                if (real) {
                    cancelFullscreen()
                } else {
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500)
                }
                jQuery(YTPlayer).trigger("YTPFullScreenEnd");
                videoWrapper.css({
                    zIndex: -1
                });
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                YTPlayer.isAlone = false
            }

            function RunPrefixMethod(obj, method) {
                var pfx = ["webkit", "moz", "ms", "o", ""];
                var p = 0,
                    m, t;
                while (p < pfx.length && !obj[m]) {
                    m = method;
                    if (pfx[p] == "") {
                        m = m.substr(0, 1).toLowerCase() + m.substr(1)
                    }
                    m = pfx[p] + m;
                    t = typeof obj[m];
                    if (t != "undefined") {
                        pfx = [pfx[p]];
                        return (t == "function" ? obj[m]() : obj[m])
                    }
                    p++
                }
            }

            function launchFullscreen(element) {
                RunPrefixMethod(element, "RequestFullScreen")
            }

            function cancelFullscreen() {
                if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
                    RunPrefixMethod(document, "CancelFullScreen")
                }
            }
        },
        playYTP: function() {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTVPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.pause);
            YTPlayer.player.playVideo();
            YTPlayer.wrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, 2000);
            jQuery(YTPlayer).on("YTPStart", function() {
                jQuery(YTPlayer).css("background", "none")
            })
        },
        toggleLoops: function() {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            if (data.loop == 1) {
                data.loop = 0
            } else {
                if (data.startAt) {
                    YTPlayer.player.seekTo(data.startAt)
                } else {
                    YTPlayer.player.playVideo()
                }
                data.loop = 1
            }
        },
        stopYTP: function() {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTVPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.player.stopVideo()
        },
        pauseYTP: function() {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTVPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.player.pauseVideo()
        },
        seekToYTP: function(val) {
            var YTPlayer = this.get(0);
            YTPlayer.player.seekTo(val, true)
        },
        setYTPVolume: function(val) {
            var YTPlayer = this.get(0);
            if (!val && !YTPlayer.opt.vol && player.getVolume() == 0) {
                jQuery(YTPlayer).unmuteYTPVolume()
            } else {
                if ((!val && YTPlayer.player.getVolume() > 0) || (val && YTPlayer.player.getVolume() == val)) {
                    jQuery(YTPlayer).muteYTPVolume()
                } else {
                    YTPlayer.opt.vol = val
                }
            }
            YTPlayer.player.setVolume(YTPlayer.opt.vol)
        },
        muteYTPVolume: function() {
            var YTPlayer = this.get(0);
            YTPlayer.opt.vol = YTPlayer.player.getVolume() || 50;
            YTPlayer.player.mute();
            YTPlayer.player.setVolume(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTVPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.unmute)
        },
        unmuteYTPVolume: function() {
            var YTPlayer = this.get(0);
            YTPlayer.player.unMute();
            YTPlayer.player.setVolume(YTPlayer.opt.vol);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTVPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.mute)
        },
        manageYTPProgress: function() {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var progressBar = controls.find(".mb_YTVPProgress");
            var loadedBar = controls.find(".mb_YTVPLoaded");
            var timeBar = controls.find(".mb_YTVTime");
            var totW = progressBar.outerWidth();
            var currentTime = Math.floor(YTPlayer.player.getCurrentTime());
            var totalTime = Math.floor(YTPlayer.player.getDuration());
            var timeW = (currentTime * totW) / totalTime;
            var startLeft = 0;
            var loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;
            loadedBar.css({
                left: startLeft,
                width: loadedW + "%"
            });
            timeBar.css({
                left: 0,
                width: timeW
            });
            return {
                totalTime: totalTime,
                currentTime: currentTime
            }
        },
        buildYTPControls: function() {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            if (jQuery("#controlBar_" + YTPlayer.id).length) {
                return
            }
            var controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTVPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 10000 : 1000
            }).hide();
            var buttonBar = jQuery("<div/>").addClass("buttonBar");
            var playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTVPPlaypause ytpicon").click(function() {
                if (YTPlayer.player.getPlayerState() == 1) {
                    jQuery(YTPlayer).pauseYTP()
                } else {
                    jQuery(YTPlayer).playYTP()
                }
            });
            var MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function() {
                if (YTPlayer.player.getVolume() == 0) {
                    jQuery(YTPlayer).unmuteYTPVolume()
                } else {
                    jQuery(YTPlayer).muteYTPVolume()
                }
            });
            var idx = jQuery("<span/>").addClass("mb_YTVPTime");
            var vURL = data.videoURL;
            if (vURL.indexOf("http") < 0) {
                vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL
            }
            var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                window.open(vURL, "viewOnYT")
            });
            var onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                jQuery(YTPlayer).fullscreen(data.realfullscreen)
            });
            var progressBar = jQuery("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function(e) {
                timeBar.css({
                    width: (e.clientX - timeBar.offset().left)
                });
                YTPlayer.timeW = e.clientX - timeBar.offset().left;
                controlBar.find(".mb_YTVPLoaded").css({
                    width: 0
                });
                var totalTime = Math.floor(YTPlayer.player.getDuration());
                YTPlayer["goto"] = (timeBar.outerWidth() * totalTime) / progressBar.outerWidth();
                YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), true);
                controlBar.find(".mb_YTVPLoaded").css({
                    width: 0
                })
            });
            var loadedBar = jQuery("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute");
            var timeBar = jQuery("<div/>").addClass("mb_YTVTime").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar);
            buttonBar.append(playpause).append(MuteUnmute).append(idx);
            if (data.printUrl) {
                buttonBar.append(movieUrl)
            }
            if (YTPlayer.isBackground || (YTPlayer.opt.realfullscreen && !YTPlayer.isBackground)) {
                buttonBar.append(onlyVideo)
            }
            controlBar.append(buttonBar).append(progressBar);
            if (!YTPlayer.isBackground) {
                controlBar.addClass("inlinePlayer");
                YTPlayer.wrapper.before(controlBar)
            } else {
                jQuery("body").after(controlBar)
            }
            controlBar.fadeIn()
        },
        checkForState: function(YTPlayer) {
            var controlBar = jQuery("#controlBar_" + YTPlayer.id);
            var data = YTPlayer.opt;
            var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
            YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).manageYTPProgress();
                controlBar.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime));
                if (parseFloat(YTPlayer.player.getDuration() - 3) < YTPlayer.player.getCurrentTime() && YTPlayer.player.getPlayerState() == 1 && !YTPlayer.isPlayList) {
                    if (!data.loop) {
                        YTPlayer.player.pauseVideo();
                        YTPlayer.wrapper.CSSAnimate({
                            opacity: 0
                        }, 2000, function() {
                            YTPlayer.player.seekTo(startAt, true);
                            if (!YTPlayer.isBackground) {
                                var bgndURL = YTPlayer.videoData.thumbnail.hqDefault;
                                jQuery(YTPlayer).css({
                                    background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                                    backgroundSize: "cover"
                                })
                            }
                        })
                    } else {
                        YTPlayer.player.seekTo(startAt)
                    }
                    jQuery(YTPlayer).trigger("YTPEnd")
                }
            }, 1)
        },
        formatTime: function(s) {
            var min = Math.floor(s / 60);
            var sec = Math.floor(s - (60 * min));
            return (min < 9 ? "0" + min : min) + " : " + (sec < 9 ? "0" + sec : sec)
        }
    };
    jQuery.fn.toggleVolume = function() {
        var YTPlayer = this.get(0);
        if (!YTPlayer) {
            return
        }
        if (YTPlayer.player.isMuted()) {
            jQuery(YTPlayer).unmuteYTPVolume();
            return true
        } else {
            jQuery(YTPlayer).muteYTPVolume();
            return false
        }
    };
    jQuery.fn.optimizeDisplay = function() {
        var YTPlayer = this.get(0);
        var data = YTPlayer.opt;
        var playerBox = jQuery(YTPlayer.playerEl);
        var win = {};
        var el = !YTPlayer.isBackground ? data.containment : jQuery(window);
        win.width = el.width();
        win.height = el.height();
        var margin = 24;
        var vid = {};
        vid.width = win.width + ((win.width * margin) / 100);
        vid.height = data.ratio == "16/9" ? Math.ceil((9 * win.width) / 16) : Math.ceil((3 * win.width) / 4);
        vid.marginTop = -((vid.height - win.height) / 2);
        vid.marginLeft = -((win.width * (margin / 2)) / 100);
        if (vid.height < win.height) {
            vid.height = win.height + ((win.height * margin) / 100);
            vid.width = data.ratio == "16/9" ? Math.floor((16 * win.height) / 9) : Math.floor((4 * win.height) / 3);
            vid.marginTop = -((win.height * (margin / 2)) / 100);
            vid.marginLeft = -((vid.width - win.width) / 2)
        }
        playerBox.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft
        })
    };
    jQuery.shuffle = function(arr) {
        var newArray = arr.slice();
        var len = newArray.length;
        var i = len;
        while (i--) {
            var p = parseInt(Math.random() * len);
            var t = newArray[i];
            newArray[i] = newArray[p];
            newArray[p] = t
        }
        return newArray
    };
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist;
    jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
    jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev;
    jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
    jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
    jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
    jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
    jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen;
    jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls;
    jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP;
    jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
    jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP;
    jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP;
    jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP;
    jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTPVolume;
    jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTPVolume;
    jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume;
    jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
    jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress
})(jQuery, ytp);
(function(b) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], b)
    } else {
        b(jQuery)
    }
}(function(X) {
    var N = "left",
        O = "right",
        Y = "up",
        F = "down",
        Z = "in",
        E = "out",
        Q = "none",
        J = "auto",
        R = "swipe",
        I = "pinch",
        D = "tap",
        T = "doubletap",
        aa = "longtap",
        M = "horizontal",
        H = "vertical",
        U = "all",
        K = 10,
        W = "start",
        S = "move",
        V = "end",
        L = "cancel",
        ab = "ontouchstart" in window,
        C = "TouchSwipe";
    var P = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    X.fn.swipe = function(a) {
        var b = X(this),
            c = b.data(C);
        if (c && typeof a === "string") {
            if (c[a]) {
                return c[a].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                X.error("Method " + a + " does not exist on jQuery.swipe")
            }
        } else {
            if (!c && (typeof a === "object" || !a)) {
                return G.apply(this, arguments)
            }
        }
        return b
    };
    X.fn.swipe.defaults = P;
    X.fn.swipe.phases = {
        PHASE_START: W,
        PHASE_MOVE: S,
        PHASE_END: V,
        PHASE_CANCEL: L
    };
    X.fn.swipe.directions = {
        LEFT: N,
        RIGHT: O,
        UP: Y,
        DOWN: F,
        IN: Z,
        OUT: E
    };
    X.fn.swipe.pageScroll = {
        NONE: Q,
        HORIZONTAL: M,
        VERTICAL: H,
        AUTO: J
    };
    X.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: U
    };

    function G(a) {
        if (a && (a.allowPageScroll === undefined && (a.swipe !== undefined || a.swipeStatus !== undefined))) {
            a.allowPageScroll = Q
        }
        if (a.click !== undefined && a.tap === undefined) {
            a.tap = a.click
        }
        if (!a) {
            a = {}
        }
        a = X.extend({}, X.fn.swipe.defaults, a);
        return this.each(function() {
            var b = X(this);
            var c = b.data(C);
            if (!c) {
                c = new B(this, a);
                b.data(C, c)
            }
        })
    }

    function B(a, a9) {
        var aw = (ab || !a9.fallbackToMouseEvents),
            w = aw ? "touchstart" : "mousedown",
            ay = aw ? "touchmove" : "mousemove",
            j = aw ? "touchend" : "mouseup",
            l = aw ? null : "mouseleave",
            t = "touchcancel";
        var bn = 0,
            bE = null,
            c = 0,
            bs = 0,
            bu = 0,
            ax = 1,
            bd = 0,
            bK = 0,
            r = null;
        var bC = X(a);
        var e = "start";
        var h = 0;
        var bD = null;
        var k = 0,
            br = 0,
            bV = 0,
            bp = 0,
            q = 0;
        var bx = null;
        try {
            bC.bind(w, bG);
            bC.bind(t, bR)
        } catch (bj) {
            X.error("events not supported " + w + "," + t + " on jQuery.swipe")
        }
        this.enable = function() {
            bC.bind(w, bG);
            bC.bind(t, bR);
            return bC
        };
        this.disable = function() {
            bJ();
            return bC
        };
        this.destroy = function() {
            bJ();
            bC.data(C, null);
            return bC
        };
        this.option = function(ac, ad) {
            if (a9[ac] !== undefined) {
                if (ad === undefined) {
                    return a9[ac]
                } else {
                    a9[ac] = ad
                }
            } else {
                X.error("Option " + ac + " does not exist on jQuery.swipe.options")
            }
            return null
        };

        function bG(ac) {
            if (x()) {
                return
            }
            if (X(ac.target).closest(a9.excludedElements, bC).length > 0) {
                return
            }
            var af = ac.originalEvent ? ac.originalEvent : ac;
            var ad, ae = ab ? af.touches[0] : af;
            e = W;
            if (ab) {
                h = af.touches.length
            } else {
                ac.preventDefault()
            }
            bn = 0;
            bE = null;
            bK = null;
            c = 0;
            bs = 0;
            bu = 0;
            ax = 1;
            bd = 0;
            bD = bk();
            r = d();
            m();
            if (!ab || (h === a9.fingers || a9.fingers === U) || bw()) {
                bl(0, ae);
                k = bb();
                if (h == 2) {
                    bl(1, af.touches[1]);
                    bs = bu = ba(bD[0].start, bD[1].start)
                }
                if (a9.swipeStatus || a9.pinchStatus) {
                    ad = p(af, e)
                }
            } else {
                ad = false
            } if (ad === false) {
                e = L;
                p(af, e);
                return ad
            } else {
                bf(true)
            }
            return null
        }

        function bq(ai) {
            var af = ai.originalEvent ? ai.originalEvent : ai;
            if (e === V || e === L || bh()) {
                return
            }
            var ac, ad = ab ? af.touches[0] : af;
            var ah = bM(ad);
            br = bb();
            if (ab) {
                h = af.touches.length
            }
            e = S;
            if (h == 2) {
                if (bs == 0) {
                    bl(1, af.touches[1]);
                    bs = bu = ba(bD[0].start, bD[1].start)
                } else {
                    bM(af.touches[1]);
                    bu = ba(bD[0].end, bD[1].end);
                    bK = bc(bD[0].end, bD[1].end)
                }
                ax = bT(bs, bu);
                bd = Math.abs(bs - bu)
            }
            if ((h === a9.fingers || a9.fingers === U) || !ab || bw()) {
                bE = bI(ah.start, ah.end);
                bi(ai, bE);
                bn = bB(ah.start, ah.end);
                c = bH();
                bL(bE, bn);
                if (a9.swipeStatus || a9.pinchStatus) {
                    ac = p(af, e)
                }
                if (!a9.triggerOnTouchEnd || a9.triggerOnTouchLeave) {
                    var ae = true;
                    if (a9.triggerOnTouchLeave) {
                        var ag = bv(this);
                        ae = a7(ah.end, ag)
                    }
                    if (!a9.triggerOnTouchEnd && ae) {
                        e = v(S)
                    } else {
                        if (a9.triggerOnTouchLeave && !ae) {
                            e = v(V)
                        }
                    } if (e == L || e == V) {
                        p(af, e)
                    }
                }
            } else {
                e = L;
                p(af, e)
            } if (ac === false) {
                e = L;
                p(af, e)
            }
        }

        function s(ad) {
            var ac = ad.originalEvent;
            if (ab) {
                if (ac.touches.length > 0) {
                    az();
                    return true
                }
            }
            if (bh()) {
                h = bp
            }
            ad.preventDefault();
            br = bb();
            c = bH();
            if (bQ()) {
                e = L;
                p(ac, e)
            } else {
                if (a9.triggerOnTouchEnd || (a9.triggerOnTouchEnd == false && e === S)) {
                    e = V;
                    p(ac, e)
                } else {
                    if (!a9.triggerOnTouchEnd && bU()) {
                        e = V;
                        bO(ac, e, D)
                    } else {
                        if (e === S) {
                            e = L;
                            p(ac, e)
                        }
                    }
                }
            }
            bf(false);
            return null
        }

        function bR() {
            h = 0;
            br = 0;
            k = 0;
            bs = 0;
            bu = 0;
            ax = 1;
            m();
            bf(false)
        }

        function u(ad) {
            var ac = ad.originalEvent;
            if (a9.triggerOnTouchLeave) {
                e = v(V);
                p(ac, e)
            }
        }

        function bJ() {
            bC.unbind(w, bG);
            bC.unbind(t, bR);
            bC.unbind(ay, bq);
            bC.unbind(j, s);
            if (l) {
                bC.unbind(l, u)
            }
            bf(false)
        }

        function v(af) {
            var ag = af;
            var ac = z();
            var ad = bg();
            var ae = bQ();
            if (!ac || ae) {
                ag = L
            } else {
                if (ad && af == S && (!a9.triggerOnTouchEnd || a9.triggerOnTouchLeave)) {
                    ag = V
                } else {
                    if (!ad && af == V && a9.triggerOnTouchLeave) {
                        ag = L
                    }
                }
            }
            return ag
        }

        function p(ac, ae) {
            var ad = undefined;
            if (y() || i()) {
                ad = bO(ac, ae, R)
            } else {
                if ((o() || bw()) && ad !== false) {
                    ad = bO(ac, ae, I)
                }
            } if (bN() && ad !== false) {
                ad = bO(ac, ae, T)
            } else {
                if (be() && ad !== false) {
                    ad = bO(ac, ae, aa)
                } else {
                    if (bm() && ad !== false) {
                        ad = bO(ac, ae, D)
                    }
                }
            } if (ae === L) {
                bR(ac)
            }
            if (ae === V) {
                if (ab) {
                    if (ac.touches.length == 0) {
                        bR(ac)
                    }
                } else {
                    bR(ac)
                }
            }
            return ad
        }

        function bO(af, ae, ac) {
            var ad = undefined;
            if (ac == R) {
                bC.trigger("swipeStatus", [ae, bE || null, bn || 0, c || 0, h]);
                if (a9.swipeStatus) {
                    ad = a9.swipeStatus.call(bC, af, ae, bE || null, bn || 0, c || 0, h);
                    if (ad === false) {
                        return false
                    }
                }
                if (ae == V && by()) {
                    bC.trigger("swipe", [bE, bn, c, h]);
                    if (a9.swipe) {
                        ad = a9.swipe.call(bC, af, bE, bn, c, h);
                        if (ad === false) {
                            return false
                        }
                    }
                    switch (bE) {
                        case N:
                            bC.trigger("swipeLeft", [bE, bn, c, h]);
                            if (a9.swipeLeft) {
                                ad = a9.swipeLeft.call(bC, af, bE, bn, c, h)
                            }
                            break;
                        case O:
                            bC.trigger("swipeRight", [bE, bn, c, h]);
                            if (a9.swipeRight) {
                                ad = a9.swipeRight.call(bC, af, bE, bn, c, h)
                            }
                            break;
                        case Y:
                            bC.trigger("swipeUp", [bE, bn, c, h]);
                            if (a9.swipeUp) {
                                ad = a9.swipeUp.call(bC, af, bE, bn, c, h)
                            }
                            break;
                        case F:
                            bC.trigger("swipeDown", [bE, bn, c, h]);
                            if (a9.swipeDown) {
                                ad = a9.swipeDown.call(bC, af, bE, bn, c, h)
                            }
                            break
                    }
                }
            }
            if (ac == I) {
                bC.trigger("pinchStatus", [ae, bK || null, bd || 0, c || 0, h, ax]);
                if (a9.pinchStatus) {
                    ad = a9.pinchStatus.call(bC, af, ae, bK || null, bd || 0, c || 0, h, ax);
                    if (ad === false) {
                        return false
                    }
                }
                if (ae == V && bS()) {
                    switch (bK) {
                        case Z:
                            bC.trigger("pinchIn", [bK || null, bd || 0, c || 0, h, ax]);
                            if (a9.pinchIn) {
                                ad = a9.pinchIn.call(bC, af, bK || null, bd || 0, c || 0, h, ax)
                            }
                            break;
                        case E:
                            bC.trigger("pinchOut", [bK || null, bd || 0, c || 0, h, ax]);
                            if (a9.pinchOut) {
                                ad = a9.pinchOut.call(bC, af, bK || null, bd || 0, c || 0, h, ax)
                            }
                            break
                    }
                }
            }
            if (ac == D) {
                if (ae === L || ae === V) {
                    clearTimeout(bx);
                    if (f() && !A()) {
                        q = bb();
                        bx = setTimeout(X.proxy(function() {
                            q = null;
                            bC.trigger("tap", [af.target]);
                            if (a9.tap) {
                                ad = a9.tap.call(bC, af, af.target)
                            }
                        }, this), a9.doubleTapThreshold)
                    } else {
                        q = null;
                        bC.trigger("tap", [af.target]);
                        if (a9.tap) {
                            ad = a9.tap.call(bC, af, af.target)
                        }
                    }
                }
            } else {
                if (ac == T) {
                    if (ae === L || ae === V) {
                        clearTimeout(bx);
                        q = null;
                        bC.trigger("doubletap", [af.target]);
                        if (a9.doubleTap) {
                            ad = a9.doubleTap.call(bC, af, af.target)
                        }
                    }
                } else {
                    if (ac == aa) {
                        if (ae === L || ae === V) {
                            clearTimeout(bx);
                            q = null;
                            bC.trigger("longtap", [af.target]);
                            if (a9.longTap) {
                                ad = a9.longTap.call(bC, af, af.target)
                            }
                        }
                    }
                }
            }
            return ad
        }

        function bg() {
            var ac = true;
            if (a9.threshold !== null) {
                ac = bn >= a9.threshold
            }
            return ac
        }

        function bQ() {
            var ac = false;
            if (a9.cancelThreshold !== null && bE !== null) {
                ac = (bA(bE) - bn) >= a9.cancelThreshold
            }
            return ac
        }

        function bo() {
            if (a9.pinchThreshold !== null) {
                return bd >= a9.pinchThreshold
            }
            return true
        }

        function z() {
            var ac;
            if (a9.maxTimeThreshold) {
                if (c >= a9.maxTimeThreshold) {
                    ac = false
                } else {
                    ac = true
                }
            } else {
                ac = true
            }
            return ac
        }

        function bi(ae, ad) {
            if (a9.allowPageScroll === Q || bw()) {
                ae.preventDefault()
            } else {
                var ac = a9.allowPageScroll === J;
                switch (ad) {
                    case N:
                        if ((a9.swipeLeft && ac) || (!ac && a9.allowPageScroll != M)) {
                            ae.preventDefault()
                        }
                        break;
                    case O:
                        if ((a9.swipeRight && ac) || (!ac && a9.allowPageScroll != M)) {
                            ae.preventDefault()
                        }
                        break;
                    case Y:
                        if ((a9.swipeUp && ac) || (!ac && a9.allowPageScroll != H)) {
                            ae.preventDefault()
                        }
                        break;
                    case F:
                        if ((a9.swipeDown && ac) || (!ac && a9.allowPageScroll != H)) {
                            ae.preventDefault()
                        }
                        break
                }
            }
        }

        function bS() {
            var ad = bF();
            var ae = g();
            var ac = bo();
            return ad && ae && ac
        }

        function bw() {
            return !!(a9.pinchStatus || a9.pinchIn || a9.pinchOut)
        }

        function o() {
            return !!(bS() && bw())
        }

        function by() {
            var ah = z();
            var af = bg();
            var ac = bF();
            var ae = g();
            var ad = bQ();
            var ag = !ad && ae && ac && af && ah;
            return ag
        }

        function i() {
            return !!(a9.swipe || a9.swipeStatus || a9.swipeLeft || a9.swipeRight || a9.swipeUp || a9.swipeDown)
        }

        function y() {
            return !!(by() && i())
        }

        function bF() {
            return ((h === a9.fingers || a9.fingers === U) || !ab)
        }

        function g() {
            return bD[0].end.x !== 0
        }

        function bU() {
            return !!(a9.tap)
        }

        function f() {
            return !!(a9.doubleTap)
        }

        function bz() {
            return !!(a9.longTap)
        }

        function n() {
            if (q == null) {
                return false
            }
            var ac = bb();
            return (f() && ((ac - q) <= a9.doubleTapThreshold))
        }

        function A() {
            return n()
        }

        function a0() {
            return ((h === 1 || !ab) && (isNaN(bn) || bn === 0))
        }

        function bt() {
            return ((c > a9.longTapThreshold) && (bn < K))
        }

        function bm() {
            return !!(a0() && bU())
        }

        function bN() {
            return !!(n() && f())
        }

        function be() {
            return !!(bt() && bz())
        }

        function az() {
            bV = bb();
            bp = event.touches.length + 1
        }

        function m() {
            bV = 0;
            bp = 0
        }

        function bh() {
            var ad = false;
            if (bV) {
                var ac = bb() - bV;
                if (ac <= a9.fingerReleaseThreshold) {
                    ad = true
                }
            }
            return ad
        }

        function x() {
            return !!(bC.data(C + "_intouch") === true)
        }

        function bf(ac) {
            if (ac === true) {
                bC.bind(ay, bq);
                bC.bind(j, s);
                if (l) {
                    bC.bind(l, u)
                }
            } else {
                bC.unbind(ay, bq, false);
                bC.unbind(j, s, false);
                if (l) {
                    bC.unbind(l, u, false)
                }
            }
            bC.data(C + "_intouch", ac === true)
        }

        function bl(ad, ae) {
            var ac = ae.identifier !== undefined ? ae.identifier : 0;
            bD[ad].identifier = ac;
            bD[ad].start.x = bD[ad].end.x = ae.pageX || ae.clientX;
            bD[ad].start.y = bD[ad].end.y = ae.pageY || ae.clientY;
            return bD[ad]
        }

        function bM(ae) {
            var ac = ae.identifier !== undefined ? ae.identifier : 0;
            var ad = b(ac);
            ad.end.x = ae.pageX || ae.clientX;
            ad.end.y = ae.pageY || ae.clientY;
            return ad
        }

        function b(ac) {
            for (var ad = 0; ad < bD.length; ad++) {
                if (bD[ad].identifier == ac) {
                    return bD[ad]
                }
            }
        }

        function bk() {
            var ad = [];
            for (var ac = 0; ac <= 5; ac++) {
                ad.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return ad
        }

        function bL(ad, ac) {
            ac = Math.max(ac, bA(ad));
            r[ad].distance = ac
        }

        function bA(ac) {
            if (r[ac]) {
                return r[ac].distance
            }
            return undefined
        }

        function d() {
            var ac = {};
            ac[N] = a8(N);
            ac[O] = a8(O);
            ac[Y] = a8(Y);
            ac[F] = a8(F);
            return ac
        }

        function a8(ac) {
            return {
                direction: ac,
                distance: 0
            }
        }

        function bH() {
            return br - k
        }

        function ba(af, ac) {
            var ad = Math.abs(af.x - ac.x);
            var ae = Math.abs(af.y - ac.y);
            return Math.round(Math.sqrt(ad * ad + ae * ae))
        }

        function bT(ae, ad) {
            var ac = (ad / ae) * 1;
            return ac.toFixed(2)
        }

        function bc() {
            if (ax < 1) {
                return E
            } else {
                return Z
            }
        }

        function bB(ac, ad) {
            return Math.round(Math.sqrt(Math.pow(ad.x - ac.x, 2) + Math.pow(ad.y - ac.y, 2)))
        }

        function bP(ah, ad) {
            var ae = ah.x - ad.x;
            var af = ad.y - ah.y;
            var ac = Math.atan2(af, ae);
            var ag = Math.round(ac * 180 / Math.PI);
            if (ag < 0) {
                ag = 360 - Math.abs(ag)
            }
            return ag
        }

        function bI(ad, ae) {
            var ac = bP(ad, ae);
            if ((ac <= 45) && (ac >= 0)) {
                return N
            } else {
                if ((ac <= 360) && (ac >= 315)) {
                    return N
                } else {
                    if ((ac >= 135) && (ac <= 225)) {
                        return O
                    } else {
                        if ((ac > 45) && (ac < 135)) {
                            return F
                        } else {
                            return Y
                        }
                    }
                }
            }
        }

        function bb() {
            var ac = new Date();
            return ac.getTime()
        }

        function bv(ae) {
            ae = X(ae);
            var ac = ae.offset();
            var ad = {
                left: ac.left,
                right: ac.left + ae.outerWidth(),
                top: ac.top,
                bottom: ac.top + ae.outerHeight()
            };
            return ad
        }

        function a7(ad, ac) {
            return (ad.x > ac.left && ad.x < ac.right && ad.y > ac.top && ad.y < ac.bottom)
        }
    }
}));
(function($) {
    function sc_setScroll(a, b, c) {
        return "transition" == c.transition && "swing" == b && (b = "ease"), {
            anims: [],
            duration: a,
            orgDuration: a,
            easing: b,
            startTime: getTime()
        }
    }

    function sc_startScroll(a, b) {
        for (var c = 0, d = a.anims.length; d > c; c++) {
            var e = a.anims[c];
            e && e[0][b.transition](e[1], a.duration, a.easing, e[2])
        }
    }

    function sc_stopScroll(a, b) {
        is_boolean(b) || (b = !0), is_object(a.pre) && sc_stopScroll(a.pre, b);
        for (var c = 0, d = a.anims.length; d > c; c++) {
            var e = a.anims[c];
            e[0].stop(!0), b && (e[0].css(e[1]), is_function(e[2]) && e[2]())
        }
        is_object(a.post) && sc_stopScroll(a.post, b)
    }

    function sc_afterScroll(a, b, c) {
        switch (b && b.remove(), c.fx) {
            case "fade":
            case "crossfade":
            case "cover-fade":
            case "uncover-fade":
                a.css("opacity", 1), a.css("filter", "")
        }
    }

    function sc_fireCallbacks(a, b, c, d, e) {
        if (b[c] && b[c].call(a, d), e[c].length) {
            for (var f = 0, g = e[c].length; g > f; f++) {
                e[c][f].call(a, d)
            }
        }
        return []
    }

    function sc_fireQueue(a, b, c) {
        return b.length && (a.trigger(cf_e(b[0][0], c), b[0][1]), b.shift()), b
    }

    function sc_hideHiddenItems(a) {
        a.each(function() {
            var a = $(this);
            a.data("_cfs_isHidden", a.is(":hidden")).hide()
        })
    }

    function sc_showHiddenItems(a) {
        a && a.each(function() {
            var a = $(this);
            a.data("_cfs_isHidden") || a.show()
        })
    }

    function sc_clearTimers(a) {
        return a.auto && clearTimeout(a.auto), a.progress && clearInterval(a.progress), a
    }

    function sc_mapCallbackArguments(a, b, c, d, e, f, g) {
        return {
            width: g.width,
            height: g.height,
            items: {
                old: a,
                skipped: b,
                visible: c
            },
            scroll: {
                items: d,
                direction: e,
                duration: f
            }
        }
    }

    function sc_getDuration(a, b, c, d) {
        var e = a.duration;
        return "none" == a.fx ? 0 : ("auto" == e ? e = b.scroll.duration / b.scroll.items * c : 10 > e && (e = d / e), 1 > e ? 0 : ("fade" == a.fx && (e /= 2), Math.round(e)))
    }

    function nv_showNavi(a, b, c) {
        var d = is_number(a.items.minimum) ? a.items.minimum : a.items.visible + 1;
        if ("show" == b || "hide" == b) {
            var e = b
        } else {
            if (d > b) {
                debug(c, "Not enough items (" + b + " total, " + d + " needed): Hiding navigation.");
                var e = "hide"
            } else {
                var e = "show"
            }
        }
        var f = "show" == e ? "removeClass" : "addClass",
            g = cf_c("hidden", c);
        a.auto.button && a.auto.button[e]()[f](g), a.prev.button && a.prev.button[e]()[f](g), a.next.button && a.next.button[e]()[f](g), a.pagination.container && a.pagination.container[e]()[f](g)
    }

    function nv_enableNavi(a, b, c) {
        if (!a.circular && !a.infinite) {
            var d = "removeClass" == b || "addClass" == b ? b : !1,
                e = cf_c("disabled", c);
            if (a.auto.button && d && a.auto.button[d](e), a.prev.button) {
                var f = d || 0 == b ? "addClass" : "removeClass";
                a.prev.button[f](e)
            }
            if (a.next.button) {
                var f = d || b == a.items.visible ? "addClass" : "removeClass";
                a.next.button[f](e)
            }
        }
    }

    function go_getObject(a, b) {
        return is_function(b) ? b = b.call(a) : is_undefined(b) && (b = {}), b
    }

    function go_getItemsObject(a, b) {
        return b = go_getObject(a, b), is_number(b) ? b = {
            visible: b
        } : "variable" == b ? b = {
            visible: b,
            width: b,
            height: b
        } : is_object(b) || (b = {}), b
    }

    function go_getScrollObject(a, b) {
        return b = go_getObject(a, b), is_number(b) ? b = 50 >= b ? {
            items: b
        } : {
            duration: b
        } : is_string(b) ? b = {
            easing: b
        } : is_object(b) || (b = {}), b
    }

    function go_getNaviObject(a, b) {
        if (b = go_getObject(a, b), is_string(b)) {
            var c = cf_getKeyCode(b);
            b = -1 == c ? $(b) : c
        }
        return b
    }

    function go_getAutoObject(a, b) {
        return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
            button: b
        } : is_boolean(b) ? b = {
            play: b
        } : is_number(b) && (b = {
            timeoutDuration: b
        }), b.progress && (is_string(b.progress) || is_jquery(b.progress)) && (b.progress = {
            bar: b.progress
        }), b
    }

    function go_complementAutoObject(a, b) {
        return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_boolean(b.play) || (b.play = !0), is_number(b.delay) || (b.delay = 0), is_undefined(b.pauseOnEvent) && (b.pauseOnEvent = !0), is_boolean(b.pauseOnResize) || (b.pauseOnResize = !0), is_number(b.timeoutDuration) || (b.timeoutDuration = 10 > b.duration ? 2500 : 5 * b.duration), b.progress && (is_function(b.progress.bar) && (b.progress.bar = b.progress.bar.call(a)), is_string(b.progress.bar) && (b.progress.bar = $(b.progress.bar)), b.progress.bar ? (is_function(b.progress.updater) || (b.progress.updater = $.fn.carouFredSel.progressbarUpdater), is_number(b.progress.interval) || (b.progress.interval = 50)) : b.progress = !1), b
    }

    function go_getPrevNextObject(a, b) {
        return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
            button: b
        } : is_number(b) && (b = {
            key: b
        }), b
    }

    function go_complementPrevNextObject(a, b) {
        return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_string(b.key) && (b.key = cf_getKeyCode(b.key)), b
    }

    function go_getPaginationObject(a, b) {
        return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
            container: b
        } : is_boolean(b) && (b = {
            keys: b
        }), b
    }

    function go_complementPaginationObject(a, b) {
        return is_function(b.container) && (b.container = b.container.call(a)), is_string(b.container) && (b.container = $(b.container)), is_number(b.items) || (b.items = !1), is_boolean(b.keys) || (b.keys = !1), is_function(b.anchorBuilder) || is_false(b.anchorBuilder) || (b.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder), is_number(b.deviation) || (b.deviation = 0), b
    }

    function go_getSwipeObject(a, b) {
        return is_function(b) && (b = b.call(a)), is_undefined(b) && (b = {
            onTouch: !1
        }), is_true(b) ? b = {
            onTouch: b
        } : is_number(b) && (b = {
            items: b
        }), b
    }

    function go_complementSwipeObject(a, b) {
        return is_boolean(b.onTouch) || (b.onTouch = !0), is_boolean(b.onMouse) || (b.onMouse = !1), is_object(b.options) || (b.options = {}), is_boolean(b.options.triggerOnTouchEnd) || (b.options.triggerOnTouchEnd = !1), b
    }

    function go_getMousewheelObject(a, b) {
        return is_function(b) && (b = b.call(a)), is_true(b) ? b = {} : is_number(b) ? b = {
            items: b
        } : is_undefined(b) && (b = !1), b
    }

    function go_complementMousewheelObject(a, b) {
        return b
    }

    function gn_getItemIndex(a, b, c, d, e) {
        if (is_string(a) && (a = $(a, e)), is_object(a) && (a = $(a, e)), is_jquery(a) ? (a = e.children().index(a), is_boolean(c) || (c = !1)) : is_boolean(c) || (c = !0), is_number(a) || (a = 0), is_number(b) || (b = 0), c && (a += d.first), a += b, d.total > 0) {
            for (; a >= d.total;) {
                a -= d.total
            }
            for (; 0 > a;) {
                a += d.total
            }
        }
        return a
    }

    function gn_getVisibleItemsPrev(a, b, c) {
        for (var d = 0, e = 0, f = c; f >= 0; f--) {
            var g = a.eq(f);
            if (d += g.is(":visible") ? g[b.d.outerWidth](!0) : 0, d > b.maxDimension) {
                return e
            }
            0 == f && (f = a.length), e++
        }
    }

    function gn_getVisibleItemsPrevFilter(a, b, c) {
        return gn_getItemsPrevFilter(a, b.items.filter, b.items.visibleConf.org, c)
    }

    function gn_getScrollItemsPrevFilter(a, b, c, d) {
        return gn_getItemsPrevFilter(a, b.items.filter, d, c)
    }

    function gn_getItemsPrevFilter(a, b, c, d) {
        for (var e = 0, f = 0, g = d, h = a.length; g >= 0; g--) {
            if (f++, f == h) {
                return f
            }
            var i = a.eq(g);
            if (i.is(b) && (e++, e == c)) {
                return f
            }
            0 == g && (g = h)
        }
    }

    function gn_getVisibleOrg(a, b) {
        return b.items.visibleConf.org || a.children().slice(0, b.items.visible).filter(b.items.filter).length
    }

    function gn_getVisibleItemsNext(a, b, c) {
        for (var d = 0, e = 0, f = c, g = a.length - 1; g >= f; f++) {
            var h = a.eq(f);
            if (d += h.is(":visible") ? h[b.d.outerWidth](!0) : 0, d > b.maxDimension) {
                return e
            }
            if (e++, e == g + 1) {
                return e
            }
            f == g && (f = -1)
        }
    }

    function gn_getVisibleItemsNextTestCircular(a, b, c, d) {
        var e = gn_getVisibleItemsNext(a, b, c);
        return b.circular || c + e > d && (e = d - c), e
    }

    function gn_getVisibleItemsNextFilter(a, b, c) {
        return gn_getItemsNextFilter(a, b.items.filter, b.items.visibleConf.org, c, b.circular)
    }

    function gn_getScrollItemsNextFilter(a, b, c, d) {
        return gn_getItemsNextFilter(a, b.items.filter, d + 1, c, b.circular) - 1
    }

    function gn_getItemsNextFilter(a, b, c, d) {
        for (var f = 0, g = 0, h = d, i = a.length - 1; i >= h; h++) {
            if (g++, g >= i) {
                return g
            }
            var j = a.eq(h);
            if (j.is(b) && (f++, f == c)) {
                return g
            }
            h == i && (h = -1)
        }
    }

    function gi_getCurrentItems(a, b) {
        return a.slice(0, b.items.visible)
    }

    function gi_getOldItemsPrev(a, b, c) {
        return a.slice(c, b.items.visibleConf.old + c)
    }

    function gi_getNewItemsPrev(a, b) {
        return a.slice(0, b.items.visible)
    }

    function gi_getOldItemsNext(a, b) {
        return a.slice(0, b.items.visibleConf.old)
    }

    function gi_getNewItemsNext(a, b, c) {
        return a.slice(c, b.items.visible + c)
    }

    function sz_storeMargin(a, b, c) {
        b.usePadding && (is_string(c) || (c = "_cfs_origCssMargin"), a.each(function() {
            var a = $(this),
                d = parseInt(a.css(b.d.marginRight), 10);
            is_number(d) || (d = 0), a.data(c, d)
        }))
    }

    function sz_resetMargin(a, b, c) {
        if (b.usePadding) {
            var d = is_boolean(c) ? c : !1;
            is_number(c) || (c = 0), sz_storeMargin(a, b, "_cfs_tempCssMargin"), a.each(function() {
                var a = $(this);
                a.css(b.d.marginRight, d ? a.data("_cfs_tempCssMargin") : c + a.data("_cfs_origCssMargin"))
            })
        }
    }

    function sz_storeOrigCss(a) {
        a.each(function() {
            var a = $(this);
            a.data("_cfs_origCss", a.attr("style") || "")
        })
    }

    function sz_restoreOrigCss(a) {
        a.each(function() {
            var a = $(this);
            a.attr("style", a.data("_cfs_origCss") || "")
        })
    }

    function sz_setResponsiveSizes(a, b) {
        var d = (a.items.visible, a.items[a.d.width]),
            e = a[a.d.height],
            f = is_percentage(e);
        b.each(function() {
            var b = $(this),
                c = d - ms_getPaddingBorderMargin(b, a, "Width");
            b[a.d.width](c), f && b[a.d.height](ms_getPercentage(c, e))
        })
    }

    function sz_setSizes(a, b) {
        var c = a.parent(),
            d = a.children(),
            e = gi_getCurrentItems(d, b),
            f = cf_mapWrapperSizes(ms_getSizes(e, b, !0), b, !1);
        if (c.css(f), b.usePadding) {
            var g = b.padding,
                h = g[b.d[1]];
            b.align && 0 > h && (h = 0);
            var i = e.last();
            i.css(b.d.marginRight, i.data("_cfs_origCssMargin") + h), a.css(b.d.top, g[b.d[0]]), a.css(b.d.left, g[b.d[3]])
        }
        return a.css(b.d.width, f[b.d.width] + 2 * ms_getTotalSize(d, b, "width")), a.css(b.d.height, ms_getLargestSize(d, b, "height")), f
    }

    function ms_getSizes(a, b, c) {
        return [ms_getTotalSize(a, b, "width", c), ms_getLargestSize(a, b, "height", c)]
    }

    function ms_getLargestSize(a, b, c, d) {
        return is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d ? b[b.d[c]] : is_number(b.items[b.d[c]]) ? b.items[b.d[c]] : (c = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", ms_getTrueLargestSize(a, b, c))
    }

    function ms_getTrueLargestSize(a, b, c) {
        for (var d = 0, e = 0, f = a.length; f > e; e++) {
            var g = a.eq(e),
                h = g.is(":visible") ? g[b.d[c]](!0) : 0;
            h > d && (d = h)
        }
        return d
    }

    function ms_getTotalSize(a, b, c, d) {
        if (is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d) {
            return b[b.d[c]]
        }
        if (is_number(b.items[b.d[c]])) {
            return b.items[b.d[c]] * a.length
        }
        for (var e = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", f = 0, g = 0, h = a.length; h > g; g++) {
            var i = a.eq(g);
            f += i.is(":visible") ? i[b.d[e]](!0) : 0
        }
        return f
    }

    function ms_getParentSize(a, b, c) {
        var d = a.is(":visible");
        d && a.hide();
        var e = a.parent()[b.d[c]]();
        return d && a.show(), e
    }

    function ms_getMaxDimension(a, b) {
        return is_number(a[a.d.width]) ? a[a.d.width] : b
    }

    function ms_hasVariableSizes(a, b, c) {
        for (var d = !1, e = !1, f = 0, g = a.length; g > f; f++) {
            var h = a.eq(f),
                i = h.is(":visible") ? h[b.d[c]](!0) : 0;
            d === !1 ? d = i : d != i && (e = !0), 0 == d && (e = !0)
        }
        return e
    }

    function ms_getPaddingBorderMargin(a, b, c) {
        return a[b.d["outer" + c]](!0) - a[b.d[c.toLowerCase()]]()
    }

    function ms_getPercentage(a, b) {
        if (is_percentage(b)) {
            if (b = parseInt(b.slice(0, -1), 10), !is_number(b)) {
                return a
            }
            a *= b / 100
        }
        return a
    }

    function cf_e(a, b, c, d, e) {
        return is_boolean(c) || (c = !0), is_boolean(d) || (d = !0), is_boolean(e) || (e = !1), c && (a = b.events.prefix + a), d && (a = a + "." + b.events.namespace), d && e && (a += b.serialNumber), a
    }

    function cf_c(a, b) {
        return is_string(b.classnames[a]) ? b.classnames[a] : a
    }

    function cf_mapWrapperSizes(a, b, c) {
        is_boolean(c) || (c = !0);
        var d = b.usePadding && c ? b.padding : [0, 0, 0, 0],
            e = {};
        return e[b.d.width] = a[0] + d[1] + d[3], e[b.d.height] = a[1] + d[0] + d[2], e
    }

    function cf_sortParams(a, b) {
        for (var c = [], d = 0, e = a.length; e > d; d++) {
            for (var f = 0, g = b.length; g > f; f++) {
                if (b[f].indexOf(typeof a[d]) > -1 && is_undefined(c[f])) {
                    c[f] = a[d];
                    break
                }
            }
        }
        return c
    }

    function cf_getPadding(a) {
        if (is_undefined(a)) {
            return [0, 0, 0, 0]
        }
        if (is_number(a)) {
            return [a, a, a, a]
        }
        if (is_string(a) && (a = a.split("px").join("").split("em").join("").split(" ")), !is_array(a)) {
            return [0, 0, 0, 0]
        }
        for (var b = 0; 4 > b; b++) {
            a[b] = parseInt(a[b], 10)
        }
        switch (a.length) {
            case 0:
                return [0, 0, 0, 0];
            case 1:
                return [a[0], a[0], a[0], a[0]];
            case 2:
                return [a[0], a[1], a[0], a[1]];
            case 3:
                return [a[0], a[1], a[2], a[1]];
            default:
                return [a[0], a[1], a[2], a[3]]
        }
    }

    function cf_getAlignPadding(a, b) {
        var c = is_number(b[b.d.width]) ? Math.ceil(b[b.d.width] - ms_getTotalSize(a, b, "width")) : 0;
        switch (b.align) {
            case "left":
                return [0, c];
            case "right":
                return [c, 0];
            case "center":
            default:
                return [Math.ceil(c / 2), Math.floor(c / 2)]
        }
    }

    function cf_getDimensions(a) {
        for (var b = [
            ["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
            ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
        ], c = b[0].length, d = "right" == a.direction || "left" == a.direction ? 0 : 1, e = {}, f = 0; c > f; f++) {
            e[b[0][f]] = b[d][f]
        }
        return e
    }

    function cf_getAdjust(a, b, c, d) {
        var e = a;
        if (is_function(c)) {
            e = c.call(d, e)
        } else {
            if (is_string(c)) {
                var f = c.split("+"),
                    g = c.split("-");
                if (g.length > f.length) {
                    var h = !0,
                        i = g[0],
                        j = g[1]
                } else {
                    var h = !1,
                        i = f[0],
                        j = f[1]
                }
                switch (i) {
                    case "even":
                        e = 1 == a % 2 ? a - 1 : a;
                        break;
                    case "odd":
                        e = 0 == a % 2 ? a - 1 : a;
                        break;
                    default:
                        e = a
                }
                j = parseInt(j, 10), is_number(j) && (h && (j = -j), e += j)
            }
        }
        return (!is_number(e) || 1 > e) && (e = 1), e
    }

    function cf_getItemsAdjust(a, b, c, d) {
        return cf_getItemAdjustMinMax(cf_getAdjust(a, b, c, d), b.items.visibleConf)
    }

    function cf_getItemAdjustMinMax(a, b) {
        return is_number(b.min) && b.min > a && (a = b.min), is_number(b.max) && a > b.max && (a = b.max), 1 > a && (a = 1), a
    }

    function cf_getSynchArr(a) {
        is_array(a) || (a = [
            [a]
        ]), is_array(a[0]) || (a = [a]);
        for (var b = 0, c = a.length; c > b; b++) {
            is_string(a[b][0]) && (a[b][0] = $(a[b][0])), is_boolean(a[b][1]) || (a[b][1] = !0), is_boolean(a[b][2]) || (a[b][2] = !0), is_number(a[b][3]) || (a[b][3] = 0)
        }
        return a
    }

    function cf_getKeyCode(a) {
        return "right" == a ? 39 : "left" == a ? 37 : "up" == a ? 38 : "down" == a ? 40 : -1
    }

    function cf_setCookie(a, b, c) {
        if (a) {
            var d = b.triggerHandler(cf_e("currentPosition", c));
            $.fn.carouFredSel.cookie.set(a, d)
        }
    }

    function cf_getCookie(a) {
        var b = $.fn.carouFredSel.cookie.get(a);
        return "" == b ? 0 : b
    }

    function in_mapCss(a, b) {
        for (var c = {}, d = 0, e = b.length; e > d; d++) {
            c[b[d]] = a.css(b[d])
        }
        return c
    }

    function in_complementItems(a, b, c, d) {
        return is_object(a.visibleConf) || (a.visibleConf = {}), is_object(a.sizesConf) || (a.sizesConf = {}), 0 == a.start && is_number(d) && (a.start = d), is_object(a.visible) ? (a.visibleConf.min = a.visible.min, a.visibleConf.max = a.visible.max, a.visible = !1) : is_string(a.visible) ? ("variable" == a.visible ? a.visibleConf.variable = !0 : a.visibleConf.adjust = a.visible, a.visible = !1) : is_function(a.visible) && (a.visibleConf.adjust = a.visible, a.visible = !1), is_string(a.filter) || (a.filter = c.filter(":hidden").length > 0 ? ":visible" : "*"), a[b.d.width] || (b.responsive ? (debug(!0, "Set a " + b.d.width + " for the items!"), a[b.d.width] = ms_getTrueLargestSize(c, b, "outerWidth")) : a[b.d.width] = ms_hasVariableSizes(c, b, "outerWidth") ? "variable" : c[b.d.outerWidth](!0)), a[b.d.height] || (a[b.d.height] = ms_hasVariableSizes(c, b, "outerHeight") ? "variable" : c[b.d.outerHeight](!0)), a.sizesConf.width = a.width, a.sizesConf.height = a.height, a
    }

    function in_complementVisibleItems(a, b) {
        return "variable" == a.items[a.d.width] && (a.items.visibleConf.variable = !0), a.items.visibleConf.variable || (is_number(a[a.d.width]) ? a.items.visible = Math.floor(a[a.d.width] / a.items[a.d.width]) : (a.items.visible = Math.floor(b / a.items[a.d.width]), a[a.d.width] = a.items.visible * a.items[a.d.width], a.items.visibleConf.adjust || (a.align = !1)), ("Infinity" == a.items.visible || 1 > a.items.visible) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'), a.items.visibleConf.variable = !0)), a
    }

    function in_complementPrimarySize(a, b, c) {
        return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerWidth")), a
    }

    function in_complementSecondarySize(a, b, c) {
        return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerHeight")), a || (a = b.items[b.d.height]), a
    }

    function in_getAlignPadding(a, b) {
        var c = cf_getAlignPadding(gi_getCurrentItems(b, a), a);
        return a.padding[a.d[1]] = c[1], a.padding[a.d[3]] = c[0], a
    }

    function in_getResponsiveValues(a, b) {
        var d = cf_getItemAdjustMinMax(Math.ceil(a[a.d.width] / a.items[a.d.width]), a.items.visibleConf);
        d > b.length && (d = b.length);
        var e = Math.floor(a[a.d.width] / d);
        return a.items.visible = d, a.items[a.d.width] = e, a[a.d.width] = d * e, a
    }

    function bt_pauseOnHoverConfig(a) {
        if (is_string(a)) {
            var b = a.indexOf("immediate") > -1 ? !0 : !1,
                c = a.indexOf("resume") > -1 ? !0 : !1
        } else {
            var b = c = !1
        }
        return [b, c]
    }

    function bt_mousesheelNumber(a) {
        return is_number(a) ? a : null
    }

    function is_null(a) {
        return null === a
    }

    function is_undefined(a) {
        return is_null(a) || a === void 0 || "" === a || "undefined" === a
    }

    function is_array(a) {
        return a instanceof Array
    }

    function is_jquery(a) {
        return a instanceof jQuery
    }

    function is_object(a) {
        return (a instanceof Object || "object" == typeof a) && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a)
    }

    function is_number(a) {
        return (a instanceof Number || "number" == typeof a) && !isNaN(a)
    }

    function is_string(a) {
        return (a instanceof String || "string" == typeof a) && !is_undefined(a) && !is_true(a) && !is_false(a)
    }

    function is_function(a) {
        return a instanceof Function || "function" == typeof a
    }

    function is_boolean(a) {
        return a instanceof Boolean || "boolean" == typeof a || is_true(a) || is_false(a)
    }

    function is_true(a) {
        return a === !0 || "true" === a
    }

    function is_false(a) {
        return a === !1 || "false" === a
    }

    function is_percentage(a) {
        return is_string(a) && "%" == a.slice(-1)
    }

    function getTime() {
        return (new Date).getTime()
    }

    function deprecated(a, b) {
        debug(!0, a + " is DEPRECATED, support for it will be removed. Use " + b + " instead.")
    }

    function debug(a, b) {
        if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
            if (is_object(a)) {
                var c = " (" + a.selector + ")";
                a = a.debug
            } else {
                var c = ""
            } if (!a) {
                return !1
            }
            b = is_string(b) ? "carouFredSel" + c + ": " + b : ["carouFredSel" + c + ":", b], window.console.log(b)
        }
        return !1
    }
    $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function(options, configs) {
        if (0 == this.length) {
            return debug(!0, 'No element found for "' + this.selector + '".'), this
        }
        if (this.length > 1) {
            return this.each(function() {
                $(this).carouFredSel(options, configs)
            })
        }
        var $cfs = this,
            $tt0 = this[0],
            starting_position = !1;
        $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"), $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
        var FN = {};
        FN._init = function(a, b, c) {
            a = go_getObject($tt0, a), a.items = go_getItemsObject($tt0, a.items), a.scroll = go_getScrollObject($tt0, a.scroll), a.auto = go_getAutoObject($tt0, a.auto), a.prev = go_getPrevNextObject($tt0, a.prev), a.next = go_getPrevNextObject($tt0, a.next), a.pagination = go_getPaginationObject($tt0, a.pagination), a.swipe = go_getSwipeObject($tt0, a.swipe), a.mousewheel = go_getMousewheelObject($tt0, a.mousewheel), b && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, a)), opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, a), opts.d = cf_getDimensions(opts), crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
            var d = $cfs.children(),
                e = ms_getParentSize($wrp, opts, "width");
            if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber), opts.maxDimension = ms_getMaxDimension(opts, e), opts.items = in_complementItems(opts.items, opts, d, c), opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, d), opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, d), opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")), is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0, crsl.primarySizePercentage = opts[opts.d.width], opts[opts.d.width] = ms_getPercentage(e, crsl.primarySizePercentage), opts.items.visible || (opts.items.visibleConf.variable = !0)), opts.responsive ? (opts.usePadding = !1, opts.padding = [0, 0, 0, 0], opts.align = !1, opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, e)), opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width], opts.align = !1) : opts[opts.d.width] = "variable"), is_undefined(opts.align) && (opts.align = is_number(opts[opts.d.width]) ? "center" : !1), opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(d, opts, 0))), "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible, opts.items.visible = gn_getVisibleItemsNextFilter(d, opts, 0)), opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts.responsive) {
                opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible), opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible), opts = in_getResponsiveValues(opts, d, e)
            } else {
                switch (opts.padding = cf_getPadding(opts.padding), "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"), opts.align) {
                    case "center":
                    case "left":
                    case "right":
                        "variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, d), opts.usePadding = !0);
                        break;
                    default:
                        opts.align = !1, opts.usePadding = 0 == opts.padding[0] && 0 == opts.padding[1] && 0 == opts.padding[2] && 0 == opts.padding[3] ? !1 : !0
                }
            }
            is_number(opts.scroll.duration) || (opts.scroll.duration = 500), is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible), opts.auto = $.extend(!0, {}, opts.scroll, opts.auto), opts.prev = $.extend(!0, {}, opts.scroll, opts.prev), opts.next = $.extend(!0, {}, opts.scroll, opts.next), opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination), opts.auto = go_complementAutoObject($tt0, opts.auto), opts.prev = go_complementPrevNextObject($tt0, opts.prev), opts.next = go_complementPrevNextObject($tt0, opts.next), opts.pagination = go_complementPaginationObject($tt0, opts.pagination), opts.swipe = go_complementSwipeObject($tt0, opts.swipe), opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel), opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)), opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart, deprecated("auto.onPauseStart", "auto.onTimeoutStart")), opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause, deprecated("auto.onPausePause", "auto.onTimeoutPause")), opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd, deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")), opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration, deprecated("auto.pauseDuration", "auto.timeoutDuration"))
        }, FN._build = function() {
            $cfs.data("_cfs_isCarousel", !0);
            var a = $cfs.children(),
                b = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
                c = "relative";
            switch (b.position) {
                case "absolute":
                case "fixed":
                    c = b.position
            }
            "parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(b), $wrp.css({
                overflow: "hidden",
                position: c
            }), sz_storeOrigCss($cfs), $cfs.data("_cfs_origCssZindex", b.zIndex), $cfs.css({
                textAlign: "left",
                "float": "none",
                position: "absolute",
                top: 0,
                right: "auto",
                bottom: "auto",
                left: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0
            }), sz_storeMargin(a, opts), sz_storeOrigCss(a), opts.responsive && sz_setResponsiveSizes(opts, a)
        }, FN._bind_events = function() {
            FN._unbind_events(), $cfs.bind(cf_e("stop", conf), function(a, b) {
                return a.stopPropagation(), crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)), crsl.isStopped = !0, opts.auto.play && (opts.auto.play = !1, $cfs.trigger(cf_e("pause", conf), b)), !0
            }), $cfs.bind(cf_e("finish", conf), function(a) {
                return a.stopPropagation(), crsl.isScrolling && sc_stopScroll(scrl), !0
            }), $cfs.bind(cf_e("pause", conf), function(a, b, c) {
                if (a.stopPropagation(), tmrs = sc_clearTimers(tmrs), b && crsl.isScrolling) {
                    scrl.isStopped = !0;
                    var d = getTime() - scrl.startTime;
                    scrl.duration -= d, scrl.pre && (scrl.pre.duration -= d), scrl.post && (scrl.post.duration -= d), sc_stopScroll(scrl, !1)
                }
                if (crsl.isPaused || crsl.isScrolling || c && (tmrs.timePassed += getTime() - tmrs.startTime), crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)), crsl.isPaused = !0, opts.auto.onTimeoutPause) {
                    var e = opts.auto.timeoutDuration - tmrs.timePassed,
                        f = 100 - Math.ceil(100 * e / opts.auto.timeoutDuration);
                    opts.auto.onTimeoutPause.call($tt0, f, e)
                }
                return !0
            }), $cfs.bind(cf_e("play", conf), function(a, b, c, d) {
                a.stopPropagation(), tmrs = sc_clearTimers(tmrs);
                var e = [b, c, d],
                    f = ["string", "number", "boolean"],
                    g = cf_sortParams(e, f);
                if (b = g[0], c = g[1], d = g[2], "prev" != b && "next" != b && (b = crsl.direction), is_number(c) || (c = 0), is_boolean(d) || (d = !1), d && (crsl.isStopped = !1, opts.auto.play = !0), !opts.auto.play) {
                    return a.stopImmediatePropagation(), debug(conf, "Carousel stopped: Not scrolling.")
                }
                crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)), opts.auto.button.removeClass(cf_c("paused", conf))), crsl.isPaused = !1, tmrs.startTime = getTime();
                var h = opts.auto.timeoutDuration + c;
                return dur2 = h - tmrs.timePassed, perc = 100 - Math.ceil(100 * dur2 / h), opts.auto.progress && (tmrs.progress = setInterval(function() {
                    var a = getTime() - tmrs.startTime + tmrs.timePassed,
                        b = Math.ceil(100 * a / h);
                    opts.auto.progress.updater.call(opts.auto.progress.bar[0], b)
                }, opts.auto.progress.interval)), tmrs.auto = setTimeout(function() {
                    opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100), opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2), crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), b) : $cfs.trigger(cf_e(b, conf), opts.auto)
                }, dur2), opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2), !0
            }), $cfs.bind(cf_e("resume", conf), function(a) {
                return a.stopPropagation(), scrl.isStopped ? (scrl.isStopped = !1, crsl.isPaused = !1, crsl.isScrolling = !0, scrl.startTime = getTime(), sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)), !0
            }), $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(a, b, c, d, e) {
                if (a.stopPropagation(), crsl.isStopped || $cfs.is(":hidden")) {
                    return a.stopImmediatePropagation(), debug(conf, "Carousel stopped or hidden: Not scrolling.")
                }
                var f = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
                if (f > itms.total) {
                    return a.stopImmediatePropagation(), debug(conf, "Not enough items (" + itms.total + " total, " + f + " needed): Not scrolling.")
                }
                var g = [b, c, d, e],
                    h = ["object", "number/string", "function", "boolean"],
                    i = cf_sortParams(g, h);
                b = i[0], c = i[1], d = i[2], e = i[3];
                var j = a.type.slice(conf.events.prefix.length);
                if (is_object(b) || (b = {}), is_function(d) && (b.onAfter = d), is_boolean(e) && (b.queue = e), b = $.extend(!0, {}, opts[j], b), b.conditions && !b.conditions.call($tt0, j)) {
                    return a.stopImmediatePropagation(), debug(conf, 'Callback "conditions" returned false.')
                }
                if (!is_number(c)) {
                    if ("*" != opts.items.filter) {
                        c = "visible"
                    } else {
                        for (var k = [c, b.items, opts[j].items], i = 0, l = k.length; l > i; i++) {
                            if (is_number(k[i]) || "page" == k[i] || "visible" == k[i]) {
                                c = k[i];
                                break
                            }
                        }
                    }
                    switch (c) {
                        case "page":
                            return a.stopImmediatePropagation(), $cfs.triggerHandler(cf_e(j + "Page", conf), [b, d]);
                        case "visible":
                            opts.items.visibleConf.variable || "*" != opts.items.filter || (c = opts.items.visible)
                    }
                }
                if (scrl.isStopped) {
                    return $cfs.trigger(cf_e("resume", conf)), $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]]), a.stopImmediatePropagation(), debug(conf, "Carousel resumed scrolling.")
                }
                if (b.duration > 0 && crsl.isScrolling) {
                    return b.queue && ("last" == b.queue && (queu = []), ("first" != b.queue || 0 == queu.length) && $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]])), a.stopImmediatePropagation(), debug(conf, "Carousel currently scrolling.")
                }
                if (tmrs.timePassed = 0, $cfs.trigger(cf_e("slide_" + j, conf), [b, c]), opts.synchronise) {
                    for (var m = opts.synchronise, n = [b, c], o = 0, l = m.length; l > o; o++) {
                        var p = j;
                        m[o][2] || (p = "prev" == p ? "next" : "prev"), m[o][1] || (n[0] = m[o][0].triggerHandler("_cfs_triggerEvent", ["configuration", p])), n[1] = c + m[o][3], m[o][0].trigger("_cfs_triggerEvent", ["slide_" + p, n])
                    }
                }
                return !0
            }), $cfs.bind(cf_e("slide_prev", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.children();
                if (!opts.circular && 0 == itms.first) {
                    return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1), a.stopImmediatePropagation()
                }
                if (sz_resetMargin(d, opts), !is_number(c)) {
                    if (opts.items.visibleConf.variable) {
                        c = gn_getVisibleItemsPrev(d, opts, itms.total - 1)
                    } else {
                        if ("*" != opts.items.filter) {
                            var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
                            c = gn_getScrollItemsPrevFilter(d, opts, itms.total - 1, e)
                        } else {
                            c = opts.items.visible
                        }
                    }
                    c = cf_getAdjust(c, opts, b.items, $tt0)
                }
                if (opts.circular || itms.total - c < itms.first && (c = itms.total - itms.first), opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                    var f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0);
                    f >= opts.items.visible + c && itms.total > c && (c++, f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0)), opts.items.visible = f
                } else {
                    if ("*" != opts.items.filter) {
                        var f = gn_getVisibleItemsNextFilter(d, opts, itms.total - c);
                        opts.items.visible = cf_getItemsAdjust(f, opts, opts.items.visibleConf.adjust, $tt0)
                    }
                } if (sz_resetMargin(d, opts, !0), 0 == c) {
                    return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.")
                }
                for (debug(conf, "Scrolling " + c + " items backward."), itms.first += c; itms.first >= itms.total;) {
                    itms.first -= itms.total
                }
                opts.circular || (0 == itms.first && b.onEnd && b.onEnd.call($tt0, "prev"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), $cfs.children().slice(itms.total - c, itms.total).prependTo($cfs), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
                var d = $cfs.children(),
                    g = gi_getOldItemsPrev(d, opts, c),
                    h = gi_getNewItemsPrev(d, opts),
                    i = d.eq(c - 1),
                    j = g.last(),
                    k = h.last();
                sz_resetMargin(d, opts);
                var l = 0,
                    m = 0;
                if (opts.align) {
                    var n = cf_getAlignPadding(h, opts);
                    l = n[0], m = n[1]
                }
                var o = 0 > l ? opts.padding[opts.d[3]] : 0,
                    p = !1,
                    q = $();
                if (c > opts.items.visible && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
                    var r = opts.items[opts.d.width];
                    p = q, i = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable"
                }
                var s = !1,
                    t = ms_getTotalSize(d.slice(0, c), opts, "width"),
                    u = cf_mapWrapperSizes(ms_getSizes(h, opts, !0), opts, !opts.usePadding),
                    v = 0,
                    w = {},
                    x = {},
                    y = {},
                    z = {},
                    A = {},
                    B = {},
                    C = {},
                    D = sc_getDuration(b, opts, c, t);
                switch (b.fx) {
                    case "cover":
                    case "cover-fade":
                        v = ms_getTotalSize(d.slice(0, opts.items.visible), opts, "width")
                }
                p && (opts.items[opts.d.width] = r), sz_resetMargin(d, opts, !0), m >= 0 && sz_resetMargin(j, opts, opts.padding[opts.d[1]]), l >= 0 && sz_resetMargin(i, opts, opts.padding[opts.d[3]]), opts.align && (opts.padding[opts.d[1]] = m, opts.padding[opts.d[3]] = l), B[opts.d.left] = -(t - o), C[opts.d.left] = -(v - o), x[opts.d.left] = u[opts.d.width];
                var E = function() {},
                    F = function() {},
                    G = function() {},
                    H = function() {},
                    I = function() {},
                    J = function() {},
                    K = function() {},
                    L = function() {},
                    M = function() {},
                    N = function() {},
                    O = function() {};
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                    case "uncover":
                    case "uncover-fade":
                        s = $cfs.clone(!0).appendTo($wrp)
                }
                switch (b.fx) {
                    case "crossfade":
                    case "uncover":
                    case "uncover-fade":
                        s.children().slice(0, c).remove(), s.children().slice(opts.items.visibleConf.old).remove();
                        break;
                    case "cover":
                    case "cover-fade":
                        s.children().slice(opts.items.visible).remove(), s.css(C)
                }
                if ($cfs.css(B), scrl = sc_setScroll(D, b.easing, conf), w[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0, ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (E = function() {
                    $wrp.css(u)
                }, F = function() {
                    scrl.anims.push([$wrp, u])
                }), opts.usePadding) {
                    switch (k.not(i).length && (y[opts.d.marginRight] = i.data("_cfs_origCssMargin"), 0 > l ? i.css(y) : (K = function() {
                        i.css(y)
                    }, L = function() {
                        scrl.anims.push([i, y])
                    })), b.fx) {
                        case "cover":
                        case "cover-fade":
                            s.children().eq(c - 1).css(y)
                    }
                    k.not(j).length && (z[opts.d.marginRight] = j.data("_cfs_origCssMargin"), G = function() {
                        j.css(z)
                    }, H = function() {
                        scrl.anims.push([j, z])
                    }), m >= 0 && (A[opts.d.marginRight] = k.data("_cfs_origCssMargin") + opts.padding[opts.d[1]], I = function() {
                        k.css(A)
                    }, J = function() {
                        scrl.anims.push([k, A])
                    })
                }
                O = function() {
                    $cfs.css(w)
                };
                var P = opts.items.visible + c - itms.total;
                N = function() {
                    if (P > 0 && ($cfs.children().slice(itms.total).remove(), g = $($cfs.children().slice(itms.total - (opts.items.visible - P)).get().concat($cfs.children().slice(0, P).get()))), sc_showHiddenItems(p), opts.usePadding) {
                        var a = $cfs.children().eq(opts.items.visible + c - 1);
                        a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
                    }
                };
                var Q = sc_mapCallbackArguments(g, q, h, c, "prev", D, u);
                switch (M = function() {
                    sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", Q, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", Q, clbk), b.fx) {
                    case "none":
                        $cfs.css(w), E(), G(), I(), K(), O(), N(), M();
                        break;
                    case "fade":
                        scrl.anims.push([$cfs, {
                                opacity: 0
                            },
                            function() {
                                E(), G(), I(), K(), O(), N(), scrl = sc_setScroll(D, b.easing, conf), scrl.anims.push([$cfs, {
                                        opacity: 1
                                    },
                                    M
                                ]), sc_startScroll(scrl, conf)
                            }
                        ]);
                        break;
                    case "crossfade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([s, {
                            opacity: 0
                        }]), scrl.anims.push([$cfs, {
                                opacity: 1
                            },
                            M
                        ]), F(), G(), I(), K(), O(), N();
                        break;
                    case "cover":
                        scrl.anims.push([s, w,
                            function() {
                                G(), I(), K(), O(), N(), M()
                            }
                        ]), F();
                        break;
                    case "cover-fade":
                        scrl.anims.push([$cfs, {
                            opacity: 0
                        }]), scrl.anims.push([s, w,
                            function() {
                                G(), I(), K(), O(), N(), M()
                            }
                        ]), F();
                        break;
                    case "uncover":
                        scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
                        break;
                    case "uncover-fade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([$cfs, {
                            opacity: 1
                        }]), scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
                        break;
                    default:
                        scrl.anims.push([$cfs, w,
                            function() {
                                N(), M()
                            }
                        ]), F(), H(), J(), L()
                }
                return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
            }), $cfs.bind(cf_e("slide_next", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.children();
                if (!opts.circular && itms.first == opts.items.visible) {
                    return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1), a.stopImmediatePropagation()
                }
                if (sz_resetMargin(d, opts), !is_number(c)) {
                    if ("*" != opts.items.filter) {
                        var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
                        c = gn_getScrollItemsNextFilter(d, opts, 0, e)
                    } else {
                        c = opts.items.visible
                    }
                    c = cf_getAdjust(c, opts, b.items, $tt0)
                }
                var f = 0 == itms.first ? itms.total : itms.first;
                if (!opts.circular) {
                    if (opts.items.visibleConf.variable) {
                        var g = gn_getVisibleItemsNext(d, opts, c),
                            e = gn_getVisibleItemsPrev(d, opts, f - 1)
                    } else {
                        var g = opts.items.visible,
                            e = opts.items.visible
                    }
                    c + g > f && (c = f - e)
                }
                if (opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                    for (var g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - c >= g && itms.total > c;) {
                        c++, g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0)
                    }
                    opts.items.visible = g
                } else {
                    if ("*" != opts.items.filter) {
                        var g = gn_getVisibleItemsNextFilter(d, opts, c);
                        opts.items.visible = cf_getItemsAdjust(g, opts, opts.items.visibleConf.adjust, $tt0)
                    }
                } if (sz_resetMargin(d, opts, !0), 0 == c) {
                    return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.")
                }
                for (debug(conf, "Scrolling " + c + " items forward."), itms.first -= c; 0 > itms.first;) {
                    itms.first += itms.total
                }
                opts.circular || (itms.first == opts.items.visible && b.onEnd && b.onEnd.call($tt0, "next"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
                var d = $cfs.children(),
                    h = gi_getOldItemsNext(d, opts),
                    i = gi_getNewItemsNext(d, opts, c),
                    j = d.eq(c - 1),
                    k = h.last(),
                    l = i.last();
                sz_resetMargin(d, opts);
                var m = 0,
                    n = 0;
                if (opts.align) {
                    var o = cf_getAlignPadding(i, opts);
                    m = o[0], n = o[1]
                }
                var p = !1,
                    q = $();
                if (c > opts.items.visibleConf.old && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
                    var r = opts.items[opts.d.width];
                    p = q, j = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable"
                }
                var s = !1,
                    t = ms_getTotalSize(d.slice(0, c), opts, "width"),
                    u = cf_mapWrapperSizes(ms_getSizes(i, opts, !0), opts, !opts.usePadding),
                    v = 0,
                    w = {},
                    x = {},
                    y = {},
                    z = {},
                    A = {},
                    B = sc_getDuration(b, opts, c, t);
                switch (b.fx) {
                    case "uncover":
                    case "uncover-fade":
                        v = ms_getTotalSize(d.slice(0, opts.items.visibleConf.old), opts, "width")
                }
                p && (opts.items[opts.d.width] = r), opts.align && 0 > opts.padding[opts.d[1]] && (opts.padding[opts.d[1]] = 0), sz_resetMargin(d, opts, !0), sz_resetMargin(k, opts, opts.padding[opts.d[1]]), opts.align && (opts.padding[opts.d[1]] = n, opts.padding[opts.d[3]] = m), A[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
                var C = function() {},
                    D = function() {},
                    E = function() {},
                    F = function() {},
                    G = function() {},
                    H = function() {},
                    I = function() {},
                    J = function() {},
                    K = function() {};
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                    case "uncover":
                    case "uncover-fade":
                        s = $cfs.clone(!0).appendTo($wrp), s.children().slice(opts.items.visibleConf.old).remove()
                }
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "cover-fade":
                        $cfs.css("zIndex", 1), s.css("zIndex", 0)
                }
                if (scrl = sc_setScroll(B, b.easing, conf), w[opts.d.left] = -t, x[opts.d.left] = -v, 0 > m && (w[opts.d.left] += m), ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (C = function() {
                    $wrp.css(u)
                }, D = function() {
                    scrl.anims.push([$wrp, u])
                }), opts.usePadding) {
                    var L = l.data("_cfs_origCssMargin");
                    n >= 0 && (L += opts.padding[opts.d[1]]), l.css(opts.d.marginRight, L), j.not(k).length && (z[opts.d.marginRight] = k.data("_cfs_origCssMargin")), E = function() {
                        k.css(z)
                    }, F = function() {
                        scrl.anims.push([k, z])
                    };
                    var M = j.data("_cfs_origCssMargin");
                    m > 0 && (M += opts.padding[opts.d[3]]), y[opts.d.marginRight] = M, G = function() {
                        j.css(y)
                    }, H = function() {
                        scrl.anims.push([j, y])
                    }
                }
                K = function() {
                    $cfs.css(A)
                };
                var N = opts.items.visible + c - itms.total;
                J = function() {
                    N > 0 && $cfs.children().slice(itms.total).remove();
                    var a = $cfs.children().slice(0, c).appendTo($cfs).last();
                    if (N > 0 && (i = gi_getCurrentItems(d, opts)), sc_showHiddenItems(p), opts.usePadding) {
                        if (itms.total < opts.items.visible + c) {
                            var b = $cfs.children().eq(opts.items.visible - 1);
                            b.css(opts.d.marginRight, b.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
                        }
                        a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
                    }
                };
                var O = sc_mapCallbackArguments(h, q, i, c, "next", B, u);
                switch (I = function() {
                    $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")), sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", O, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", O, clbk), b.fx) {
                    case "none":
                        $cfs.css(w), C(), E(), G(), K(), J(), I();
                        break;
                    case "fade":
                        scrl.anims.push([$cfs, {
                                opacity: 0
                            },
                            function() {
                                C(), E(), G(), K(), J(), scrl = sc_setScroll(B, b.easing, conf), scrl.anims.push([$cfs, {
                                        opacity: 1
                                    },
                                    I
                                ]), sc_startScroll(scrl, conf)
                            }
                        ]);
                        break;
                    case "crossfade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([s, {
                            opacity: 0
                        }]), scrl.anims.push([$cfs, {
                                opacity: 1
                            },
                            I
                        ]), D(), E(), G(), K(), J();
                        break;
                    case "cover":
                        $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
                        break;
                    case "cover-fade":
                        $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([s, {
                            opacity: 0
                        }]), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
                        break;
                    case "uncover":
                        scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
                        break;
                    case "uncover-fade":
                        $cfs.css({
                            opacity: 0
                        }), scrl.anims.push([$cfs, {
                            opacity: 1
                        }]), scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
                        break;
                    default:
                        scrl.anims.push([$cfs, w,
                            function() {
                                K(), J(), I()
                            }
                        ]), D(), F(), H()
                }
                return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
            }), $cfs.bind(cf_e("slideTo", conf), function(a, b, c, d, e, f, g) {
                a.stopPropagation();
                var h = [b, c, d, e, f, g],
                    i = ["string/number/object", "number", "boolean", "object", "string", "function"],
                    j = cf_sortParams(h, i);
                return e = j[3], f = j[4], g = j[5], b = gn_getItemIndex(j[0], j[1], j[2], itms, $cfs), 0 == b ? !1 : (is_object(e) || (e = !1), "prev" != f && "next" != f && (f = opts.circular ? itms.total / 2 >= b ? "next" : "prev" : 0 == itms.first || itms.first > b ? "next" : "prev"), "prev" == f && (b = itms.total - b), $cfs.trigger(cf_e(f, conf), [e, b, g]), !0)
            }), $cfs.bind(cf_e("prevPage", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                return $cfs.triggerHandler(cf_e("slideToPage", conf), [d - 1, b, "prev", c])
            }), $cfs.bind(cf_e("nextPage", conf), function(a, b, c) {
                a.stopPropagation();
                var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                return $cfs.triggerHandler(cf_e("slideToPage", conf), [d + 1, b, "next", c])
            }), $cfs.bind(cf_e("slideToPage", conf), function(a, b, c, d, e) {
                a.stopPropagation(), is_number(b) || (b = $cfs.triggerHandler(cf_e("currentPage", conf)));
                var f = opts.pagination.items || opts.items.visible,
                    g = Math.ceil(itms.total / f) - 1;
                return 0 > b && (b = g), b > g && (b = 0), $cfs.triggerHandler(cf_e("slideTo", conf), [b * f, 0, !0, c, d, e])
            }), $cfs.bind(cf_e("jumpToStart", conf), function(a, b) {
                if (a.stopPropagation(), b = b ? gn_getItemIndex(b, 0, !0, itms, $cfs) : 0, b += itms.first, 0 != b) {
                    if (itms.total > 0) {
                        for (; b > itms.total;) {
                            b -= itms.total
                        }
                    }
                    $cfs.prepend($cfs.children().slice(b, itms.total))
                }
                return !0
            }), $cfs.bind(cf_e("synchronise", conf), function(a, b) {
                if (a.stopPropagation(), b) {
                    b = cf_getSynchArr(b)
                } else {
                    if (!opts.synchronise) {
                        return debug(conf, "No carousel to synchronise.")
                    }
                    b = opts.synchronise
                }
                for (var c = $cfs.triggerHandler(cf_e("currentPosition", conf)), d = !0, e = 0, f = b.length; f > e; e++) {
                    b[e][0].triggerHandler(cf_e("slideTo", conf), [c, b[e][3], !0]) || (d = !1)
                }
                return d
            }), $cfs.bind(cf_e("queue", conf), function(a, b, c) {
                return a.stopPropagation(), is_function(b) ? b.call($tt0, queu) : is_array(b) ? queu = b : is_undefined(b) || queu.push([b, c]), queu
            }), $cfs.bind(cf_e("insertItem", conf), function(a, b, c, d, e) {
                a.stopPropagation();
                var f = [b, c, d, e],
                    g = ["string/object", "string/number/object", "boolean", "number"],
                    h = cf_sortParams(f, g);
                if (b = h[0], c = h[1], d = h[2], e = h[3], is_object(b) && !is_jquery(b) ? b = $(b) : is_string(b) && (b = $(b)), !is_jquery(b) || 0 == b.length) {
                    return debug(conf, "Not a valid object.")
                }
                is_undefined(c) && (c = "end"), sz_storeMargin(b, opts), sz_storeOrigCss(b);
                var i = c,
                    j = "before";
                "end" == c ? d ? (0 == itms.first ? (c = itms.total - 1, j = "after") : (c = itms.first, itms.first += b.length), 0 > c && (c = 0)) : (c = itms.total - 1, j = "after") : c = gn_getItemIndex(c, e, d, itms, $cfs);
                var k = $cfs.children().eq(c);
                return k.length ? k[j](b) : (debug(conf, "Correct insert-position not found! Appending item to the end."), $cfs.append(b)), "end" == i || d || itms.first > c && (itms.first += b.length), itms.total = $cfs.children().length, itms.first >= itms.total && (itms.first -= itms.total), $cfs.trigger(cf_e("updateSizes", conf)), $cfs.trigger(cf_e("linkAnchors", conf)), !0
            }), $cfs.bind(cf_e("removeItem", conf), function(a, b, c, d) {
                a.stopPropagation();
                var e = [b, c, d],
                    f = ["string/number/object", "boolean", "number"],
                    g = cf_sortParams(e, f);
                if (b = g[0], c = g[1], d = g[2], b instanceof $ && b.length > 1) {
                    return i = $(), b.each(function() {
                        var e = $cfs.trigger(cf_e("removeItem", conf), [$(this), c, d]);
                        e && (i = i.add(e))
                    }), i
                }
                if (is_undefined(b) || "end" == b) {
                    i = $cfs.children().last()
                } else {
                    b = gn_getItemIndex(b, d, c, itms, $cfs);
                    var i = $cfs.children().eq(b);
                    i.length && itms.first > b && (itms.first -= i.length)
                }
                return i && i.length && (i.detach(), itms.total = $cfs.children().length, $cfs.trigger(cf_e("updateSizes", conf))), i
            }), $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(a, b) {
                a.stopPropagation();
                var c = a.type.slice(conf.events.prefix.length);
                return is_array(b) && (clbk[c] = b), is_function(b) && clbk[c].push(b), clbk[c]
            }), $cfs.bind(cf_e("currentPosition", conf), function(a, b) {
                if (a.stopPropagation(), 0 == itms.first) {
                    var c = 0
                } else {
                    var c = itms.total - itms.first
                }
                return is_function(b) && b.call($tt0, c), c
            }), $cfs.bind(cf_e("currentPage", conf), function(a, b) {
                a.stopPropagation();
                var e, c = opts.pagination.items || opts.items.visible,
                    d = Math.ceil(itms.total / c - 1);
                return e = 0 == itms.first ? 0 : itms.first < itms.total % c ? 0 : itms.first != c || opts.circular ? Math.round((itms.total - itms.first) / c) : d, 0 > e && (e = 0), e > d && (e = d), is_function(b) && b.call($tt0, e), e
            }), $cfs.bind(cf_e("currentVisible", conf), function(a, b) {
                a.stopPropagation();
                var c = gi_getCurrentItems($cfs.children(), opts);
                return is_function(b) && b.call($tt0, c), c
            }), $cfs.bind(cf_e("slice", conf), function(a, b, c, d) {
                if (a.stopPropagation(), 0 == itms.total) {
                    return !1
                }
                var e = [b, c, d],
                    f = ["number", "number", "function"],
                    g = cf_sortParams(e, f);
                if (b = is_number(g[0]) ? g[0] : 0, c = is_number(g[1]) ? g[1] : itms.total, d = g[2], b += itms.first, c += itms.first, items.total > 0) {
                    for (; b > itms.total;) {
                        b -= itms.total
                    }
                    for (; c > itms.total;) {
                        c -= itms.total
                    }
                    for (; 0 > b;) {
                        b += itms.total
                    }
                    for (; 0 > c;) {
                        c += itms.total
                    }
                }
                var i, h = $cfs.children();
                return i = c > b ? h.slice(b, c) : $(h.slice(b, itms.total).get().concat(h.slice(0, c).get())), is_function(d) && d.call($tt0, i), i
            }), $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(a, b) {
                a.stopPropagation();
                var c = a.type.slice(conf.events.prefix.length),
                    d = crsl[c];
                return is_function(b) && b.call($tt0, d), d
            }), $cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
                e.stopPropagation();
                var reInit = !1;
                if (is_function(a)) {
                    a.call($tt0, opts)
                } else {
                    if (is_object(a)) {
                        opts_orig = $.extend(!0, {}, opts_orig, a), b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a)
                    } else {
                        if (!is_undefined(a)) {
                            if (is_function(b)) {
                                var val = eval("opts." + a);
                                is_undefined(val) && (val = ""), b.call($tt0, val)
                            } else {
                                if (is_undefined(b)) {
                                    return eval("opts." + a)
                                }
                                "boolean" != typeof c && (c = !0), eval("opts_orig." + a + " = b"), c !== !1 ? reInit = !0 : eval("opts." + a + " = b")
                            }
                        }
                    }
                } if (reInit) {
                    sz_resetMargin($cfs.children(), opts), FN._init(opts_orig), FN._bind_buttons();
                    var sz = sz_setSizes($cfs, opts);
                    $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
                }
                return opts
            }), $cfs.bind(cf_e("linkAnchors", conf), function(a, b, c) {
                return a.stopPropagation(), is_undefined(b) ? b = $("body") : is_string(b) && (b = $(b)), is_jquery(b) && 0 != b.length ? (is_string(c) || (c = "a.caroufredsel"), b.find(c).each(function() {
                    var a = this.hash || "";
                    a.length > 0 && -1 != $cfs.children().index($(a)) && $(this).unbind("click").click(function(b) {
                        b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), a)
                    })
                }), !0) : debug(conf, "Not a valid object.")
            }), $cfs.bind(cf_e("updatePageStatus", conf), function(a, b) {
                if (a.stopPropagation(), opts.pagination.container) {
                    var d = opts.pagination.items || opts.items.visible,
                        e = Math.ceil(itms.total / d);
                    b && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(), opts.pagination.container.each(function() {
                        for (var a = 0; e > a; a++) {
                            var b = $cfs.children().eq(gn_getItemIndex(a * d, 0, !0, itms, $cfs));
                            $(this).append(opts.pagination.anchorBuilder.call(b[0], a + 1))
                        }
                    })), opts.pagination.container.each(function() {
                        $(this).children().unbind(opts.pagination.event).each(function(a) {
                            $(this).bind(opts.pagination.event, function(b) {
                                b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [a * d, -opts.pagination.deviation, !0, opts.pagination])
                            })
                        })
                    }));
                    var f = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
                    return f >= e && (f = 0), 0 > f && (f = e - 1), opts.pagination.container.each(function() {
                        $(this).children().removeClass(cf_c("selected", conf)).eq(f).addClass(cf_c("selected", conf))
                    }), !0
                }
            }), $cfs.bind(cf_e("updateSizes", conf), function() {
                var b = opts.items.visible,
                    c = $cfs.children(),
                    d = ms_getParentSize($wrp, opts, "width");
                if (itms.total = c.length, crsl.primarySizePercentage ? (opts.maxDimension = d, opts[opts.d.width] = ms_getPercentage(d, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, d), opts.responsive ? (opts.items.width = opts.items.sizesConf.width, opts.items.height = opts.items.sizesConf.height, opts = in_getResponsiveValues(opts, c, d), b = opts.items.visible, sz_setResponsiveSizes(opts, c)) : opts.items.visibleConf.variable ? b = gn_getVisibleItemsNext(c, opts, 0) : "*" != opts.items.filter && (b = gn_getVisibleItemsNextFilter(c, opts, 0)), !opts.circular && 0 != itms.first && b > itms.first) {
                    if (opts.items.visibleConf.variable) {
                        var e = gn_getVisibleItemsPrev(c, opts, itms.first) - itms.first
                    } else {
                        if ("*" != opts.items.filter) {
                            var e = gn_getVisibleItemsPrevFilter(c, opts, itms.first) - itms.first
                        } else {
                            var e = opts.items.visible - itms.first
                        }
                    }
                    debug(conf, "Preventing non-circular: sliding " + e + " items backward."), $cfs.trigger(cf_e("prev", conf), e)
                }
                opts.items.visible = cf_getItemsAdjust(b, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts = in_getAlignPadding(opts, c);
                var f = sz_setSizes($cfs, opts);
                return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, f]), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), f
            }), $cfs.bind(cf_e("destroy", conf), function(a, b) {
                return a.stopPropagation(), tmrs = sc_clearTimers(tmrs), $cfs.data("_cfs_isCarousel", !1), $cfs.trigger(cf_e("finish", conf)), b && $cfs.trigger(cf_e("jumpToStart", conf)), sz_restoreOrigCss($cfs.children()), sz_restoreOrigCss($cfs), FN._unbind_events(), FN._unbind_buttons(), "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs), !0
            }), $cfs.bind(cf_e("debug", conf), function() {
                return debug(conf, "Carousel width: " + opts.width), debug(conf, "Carousel height: " + opts.height), debug(conf, "Item widths: " + opts.items.width), debug(conf, "Item heights: " + opts.items.height), debug(conf, "Number of items visible: " + opts.items.visible), opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items), opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items), opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items), conf.debug
            }), $cfs.bind("_cfs_triggerEvent", function(a, b, c) {
                return a.stopPropagation(), $cfs.triggerHandler(cf_e(b, conf), c)
            })
        }, FN._unbind_events = function() {
            $cfs.unbind(cf_e("", conf)), $cfs.unbind(cf_e("", conf, !1)), $cfs.unbind("_cfs_triggerEvent")
        }, FN._bind_buttons = function() {
            if (FN._unbind_buttons(), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), opts.auto.pauseOnHover) {
                var a = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                $wrp.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function(a) {
                a.preventDefault();
                var b = !1,
                    c = null;
                crsl.isPaused ? b = "play" : opts.auto.pauseOnEvent && (b = "pause", c = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)), b && $cfs.trigger(cf_e(b, conf), c)
            }), opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function(a) {
                a.preventDefault(), $cfs.trigger(cf_e("prev", conf))
            }), opts.prev.pauseOnHover)) {
                var a = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                opts.prev.button.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function(a) {
                a.preventDefault(), $cfs.trigger(cf_e("next", conf))
            }), opts.next.pauseOnHover)) {
                var a = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                opts.next.button.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.pagination.container && opts.pagination.pauseOnHover) {
                var a = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function() {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, !1), function() {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(a) {
                var b = a.keyCode;
                b == opts.next.key && (a.preventDefault(), $cfs.trigger(cf_e("next", conf))), b == opts.prev.key && (a.preventDefault(), $cfs.trigger(cf_e("prev", conf)))
            }), opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(a) {
                var b = a.keyCode;
                b >= 49 && 58 > b && (b = (b - 49) * opts.items.visible, itms.total >= b && (a.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [b, 0, !0, opts.pagination])))
            }), $.fn.swipe) {
                var b = "ontouchstart" in window;
                if (b && opts.swipe.onTouch || !b && opts.swipe.onMouse) {
                    var c = $.extend(!0, {}, opts.prev, opts.swipe),
                        d = $.extend(!0, {}, opts.next, opts.swipe),
                        e = function() {
                            $cfs.trigger(cf_e("prev", conf), [c])
                        },
                        f = function() {
                            $cfs.trigger(cf_e("next", conf), [d])
                        };
                    switch (opts.direction) {
                        case "up":
                        case "down":
                            opts.swipe.options.swipeUp = f, opts.swipe.options.swipeDown = e;
                            break;
                        default:
                            opts.swipe.options.swipeLeft = f, opts.swipe.options.swipeRight = e
                    }
                    crsl.swipe && $cfs.swipe("destroy"), $wrp.swipe(opts.swipe.options), $wrp.css("cursor", "move"), crsl.swipe = !0
                }
            }
            if ($.fn.mousewheel && opts.mousewheel) {
                var g = $.extend(!0, {}, opts.prev, opts.mousewheel),
                    h = $.extend(!0, {}, opts.next, opts.mousewheel);
                crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)), $wrp.bind(cf_e("mousewheel", conf, !1), function(a, b) {
                    a.preventDefault(), b > 0 ? $cfs.trigger(cf_e("prev", conf), [g]) : $cfs.trigger(cf_e("next", conf), [h])
                }), crsl.mousewheel = !0
            }
            if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay), crsl.upDateOnWindowResize) {
                var i = function() {
                        $cfs.trigger(cf_e("finish", conf)), opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)), sz_resetMargin($cfs.children(), opts), $cfs.trigger(cf_e("updateSizes", conf))
                    },
                    j = $(window),
                    k = null;
                if ($.debounce && "debounce" == conf.onWindowResize) {
                    k = $.debounce(200, i)
                } else {
                    if ($.throttle && "throttle" == conf.onWindowResize) {
                        k = $.throttle(300, i)
                    } else {
                        var l = 0,
                            m = 0;
                        k = function() {
                            var a = j.width(),
                                b = j.height();
                            (a != l || b != m) && (i(), l = a, m = b)
                        }
                    }
                }
                j.bind(cf_e("resize", conf, !1, !0, !0), k)
            }
        }, FN._unbind_buttons = function() {
            var b = (cf_e("", conf), cf_e("", conf, !1));
            ns3 = cf_e("", conf, !1, !0, !0), $(document).unbind(ns3), $(window).unbind(ns3), $wrp.unbind(b), opts.auto.button && opts.auto.button.unbind(b), opts.prev.button && opts.prev.button.unbind(b), opts.next.button && opts.next.button.unbind(b), opts.pagination.container && (opts.pagination.container.unbind(b), opts.pagination.anchorBuilder && opts.pagination.container.children().remove()), crsl.swipe && ($cfs.swipe("destroy"), $wrp.css("cursor", "default"), crsl.swipe = !1), crsl.mousewheel && (crsl.mousewheel = !1), nv_showNavi(opts, "hide", conf), nv_enableNavi(opts, "removeClass", conf)
        }, is_boolean(configs) && (configs = {
            debug: configs
        });
        var crsl = {
                direction: "next",
                isPaused: !0,
                isScrolling: !1,
                isStopped: !1,
                mousewheel: !1,
                swipe: !1
            },
            itms = {
                total: $cfs.children().length,
                first: 0
            },
            tmrs = {
                auto: null,
                progress: null,
                startTime: getTime(),
                timePassed: 0
            },
            scrl = {
                isStopped: !1,
                duration: 0,
                startTime: 0,
                easing: "",
                anims: []
            },
            clbk = {
                onBefore: [],
                onAfter: []
            },
            queu = [],
            conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs),
            opts = {},
            opts_orig = $.extend(!0, {}, options),
            $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
        if (conf.selector = $cfs.selector, conf.serialNumber = $.fn.carouFredSel.serialNumber++, conf.transition = conf.transition && $.fn.transition ? "transition" : "animate", FN._init(opts_orig, !0, starting_position), FN._build(), FN._bind_events(), FN._bind_buttons(), is_array(opts.items.start)) {
            var start_arr = opts.items.start
        } else {
            var start_arr = [];
            0 != opts.items.start && start_arr.push(opts.items.start)
        } if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)), start_arr.length > 0) {
            for (var a = 0, l = start_arr.length; l > a; a++) {
                var s = start_arr[a];
                if (0 != s) {
                    if (s === !0) {
                        if (s = window.location.hash, 1 > s.length) {
                            continue
                        }
                    } else {
                        "random" === s && (s = Math.floor(Math.random() * itms.total))
                    } if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
                        fx: "none"
                    }])) {
                        break
                    }
                }
            }
        }
        var siz = sz_setSizes($cfs, opts),
            itm = gi_getCurrentItems($cfs.children(), opts);
        return opts.onCreate && opts.onCreate.call($tt0, {
            width: siz.width,
            height: siz.height,
            items: itm
        }), $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]), $cfs.trigger(cf_e("linkAnchors", conf)), conf.debug && $cfs.trigger(cf_e("debug", conf)), $cfs
    }, $.fn.carouFredSel.serialNumber = 1, $.fn.carouFredSel.defaults = {
        synchronise: !1,
        infinite: !0,
        circular: !0,
        responsive: !1,
        direction: "left",
        items: {
            start: 0
        },
        scroll: {
            easing: "swing",
            duration: 500,
            pauseOnHover: !1,
            event: "click",
            queue: !1
        }
    }, $.fn.carouFredSel.configs = {
        debug: !1,
        transition: !1,
        onWindowResize: "throttle",
        events: {
            prefix: "",
            namespace: "cfs"
        },
        wrapper: {
            element: "div",
            classname: "caroufredsel_wrapper"
        },
        classnames: {}
    }, $.fn.carouFredSel.pageAnchorBuilder = function(a) {
        return '<a href="#"><span>' + a + "</span></a>"
    }, $.fn.carouFredSel.progressbarUpdater = function(a) {
        $(this).css("width", a + "%")
    }, $.fn.carouFredSel.cookie = {
        get: function(a) {
            a += "=";
            for (var b = document.cookie.split(";"), c = 0, d = b.length; d > c; c++) {
                for (var e = b[c];
                    " " == e.charAt(0);) {
                    e = e.slice(1)
                }
                if (0 == e.indexOf(a)) {
                    return e.slice(a.length)
                }
            }
            return 0
        },
        set: function(a, b, c) {
            var d = "";
            if (c) {
                var e = new Date;
                e.setTime(e.getTime() + 1000 * 60 * 60 * 24 * c), d = "; expires=" + e.toGMTString()
            }
            document.cookie = a + "=" + b + d + "; path=/"
        },
        remove: function(a) {
            $.fn.carouFredSel.cookie.set(a, "", -1)
        }
    }, $.extend($.easing, {
        quadratic: function(a) {
            var b = a * a;
            return a * (-b * a + 4 * b - 6 * a + 4)
        },
        cubic: function(a) {
            return a * (4 * a * a - 9 * a + 6)
        },
        elastic: function(a) {
            var b = a * a;
            return a * (33 * b * b - 106 * b * a + 126 * b - 67 * a + 15)
        }
    }))
})(jQuery);
(function(a) {
    a.fn.equalizeHeight = function() {
        var b = this.length;
        var g = true;
        var j = 0;
        var i = 0;
        var h = 0;
        var f = this;
        var c = 1;
        var e = 0;
        this.each(function() {
            var k = a(this);
            k.height("auto");
            if (g) {
                g = false;
                i = k.offset().top
            }
            e++;
            j = k.offset().top;
            if (i == j) {
                if (k.height() > h) {
                    h = k.height()
                }
            } else {
                d(c, e - 1, h, k);
                h = 0;
                if (k.height() > h) {
                    h = k.height()
                }
            } if (e == b) {
                d(c, e, h, k)
            }
        });

        function d(k, l, n, o) {
            for (var m = k; m <= l; m++) {
                f.eq(m - 1).height(n)
            }
            i = o.offset().top;
            h = 0;
            c = l + 1
        }
        return f
    }
})(jQuery);
if (!jQuery.browser) {
    jQuery.browser = {};
    jQuery.browser.mozilla = !1;
    jQuery.browser.webkit = !1;
    jQuery.browser.opera = !1;
    jQuery.browser.msie = !1;
    var nAgt = navigator.userAgent;
    jQuery.browser.ua = nAgt;
    jQuery.browser.name = navigator.appName;
    jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
    jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix; - 1 != (verOffset = nAgt.indexOf("Opera")) ? (jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("MSIE")) || -1 != nAgt.indexOf("Trident") ? (jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5), -1 != nAgt.indexOf("Trident") && (jQuery.browser.fullVersion = nAgt.substring(nAgt.indexOf("rv:") + 3))) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
    jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
    isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
    jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.fn.CSSAnimate = function(c, g, d, b, h) {
    return this.each(function() {
        var a = jQuery(this);
        this.id = this.id || "CSSA_" + (new Date).getTime();
        if (0 !== a.length && c) {
            "function" == typeof g && (h = g, g = jQuery.fx.speeds._default);
            "function" == typeof d && (h = d, d = 0);
            "function" == typeof b && (h = b, b = "cubic-bezier(0.65,0.03,0.36,0.72)");
            if ("string" == typeof g) {
                for (var e in jQuery.fx.speeds) {
                    if (g == e) {
                        g = jQuery.fx.speeds[e];
                        break
                    } else {
                        g = null
                    }
                }
            }
            if (jQuery.support.transition) {
                var m = "",
                    f = "transitionEnd";
                jQuery.browser.webkit ? (m = "-webkit-", f = "webkitTransitionEnd") : jQuery.browser.mozilla ? (m = "-moz-", f = "transitionend") : jQuery.browser.opera ? (m = "-o-", f = "otransitionend") : jQuery.browser.msie && (m = "-ms-", f = "msTransitionEnd");
                e = [];
                for (p in c) {
                    var k = p;
                    "transform" === k && (k = m + "transform", c[k] = c[p], delete c[p]);
                    "filter" === k && (k = m + "filter", c[k] = c[p], delete c[p]);
                    "transform-origin" === k && (k = m + "transform-origin", c[k] = c[p], delete c[p]);
                    e.push(k)
                }
                var p = e.join(","),
                    o = function() {
                        a.off(f + "." + a.get(0).id);
                        clearTimeout(a.get(0).timeout);
                        a.css(m + "transition", "");
                        "function" == typeof h && (a.called = !0, h(a))
                    },
                    i = {};
                jQuery.extend(i, c);
                i[m + "transition-property"] = p;
                i[m + "transition-duration"] = g + "ms";
                i[m + "transition-delay"] = d + "ms";
                i[m + "transition-timing-function"] = b;
                i[m + "backface-visibility"] = "hidden";
                setTimeout(function() {
                    a.css(i);
                    a.one(f + "." + a.get(0).id, o)
                }, 1);
                a.get(0).timeout = setTimeout(function() {
                    a.called || !h ? a.called = !1 : (a.css(m + "transition", ""), h(a))
                }, g + d + 100)
            } else {
                for (var p in c) {
                    "transform" === p && delete c[p], "transform-origin" === p && delete c[p], "auto" === c[p] && delete c[p]
                }
                if (!h || "string" === typeof h) {
                    h = "linear"
                }
                a.animate(c, g, h)
            }
        }
    })
};
jQuery.support.transition = function() {
    var b = (document.body || document.documentElement).style;
    return void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition
}();
(function(a) {
    a.mbBgndGallery = {
        name: "mb.bgndGallery",
        author: "Matteo Bicocchi",
        version: "1.8.5",
        defaults: {
            containment: "body",
            images: [],
            shuffle: false,
            controls: null,
            effect: "fade",
            timer: 4000,
            effTimer: 3000,
            raster: false,
            folderPath: false,
            autoStart: true,
            grayScale: false,
            activateKeyboard: true,
            preserveTop: false,
            preserveWidth: false,
            placeHolder: "",
            thumbs: {
                folderPath: "",
                placeholder: ""
            },
            onStart: function() {},
            onChange: function(d, c) {},
            onPause: function(c) {},
            onPlay: function(c) {},
            onNext: function(c) {},
            onPrev: function(c) {}
        },
        clear: false,
        buildGallery: function(m) {
            var g = {};
            a.extend(g, a.mbBgndGallery.defaults, m);
            g.galleryID = new Date().getTime();
            var i = a(g.containment).get(0);
            i.opt = g;
            console.debug(i.opt);
            a.mbBgndGallery.el = i;
            if (i.opt.onStart) {
                i.opt.onStart()
            }
            i.opt.gallery = a("<div/>").attr({
                id: "bgndGallery_" + i.opt.galleryID
            }).addClass("mbBgndGallery");
            var k = i.opt.containment == "body" ? "fixed" : "absolute";
            i.opt.gallery.css({
                position: k,
                top: 0,
                let: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden"
            });
            var d = i.opt.containment;
            if (d != "body" && a(d).text().trim() != "") {
                var f = a("<div/>").css({
                    position: "absolute",
                    minHeight: "100%",
                    minWidth: "100%",
                    zIndex: 3
                });
                a(d).wrapInner(f);
                if (a(d).css("position") == "static") {
                    a(d).css("position", "relative")
                }
            }
            if (g.raster) {
                var j = a("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "url(" + g.raster + ")",
                    zIndex: 1
                });
                g.gallery.append(j)
            }
            a(d).prepend(g.gallery);
            if (i.opt.folderPath && i.opt.images.length == 0) {
                i.opt.images = jQuery.loadFromSystem(i.opt.folderPath)
            }
            if (i.opt.shuffle) {
                i.opt.images = a.shuffle(i.opt.images)
            }
            var h = i.opt.images.length;
            var e = 0;
            a.mbBgndGallery.preload(i.opt.images[0], i);
            i.opt.gallery.on("imageLoaded." + i.opt.galleryID, function() {
                e++;
                if (e == h) {
                    i.opt.gallery.off("imageLoaded." + i.opt.galleryID);
                    return
                }
                a.mbBgndGallery.preload(i.opt.images[e], i)
            });
            i.opt.imageCounter = 0;
            a.mbBgndGallery.changePhoto(i.opt.images[i.opt.imageCounter], i);
            if (!g.autoStart) {
                i.opt.paused = true;
                a(i.opt.gallery).trigger("paused")
            }
            i.opt.gallery.on("imageReady." + i.opt.galleryID, function() {
                if (i.opt.paused) {
                    return
                }
                clearTimeout(i.opt.changing);
                a.mbBgndGallery.play(i)
            });
            a(window).on("resize", function() {
                var n = a("img", i.opt.gallery);
                a.mbBgndGallery.checkSize(n, i)
            });
            var l = i.opt.controls;
            if (l) {
                var c = a(i.opt.controls).find(".counter");
                c.html(i.opt.imageCounter + 1 + " / " + i.opt.images.length);
                a.mbBgndGallery.buildControls(l, i);
                a(i.opt.containment).on("paused", function() {
                    a(i.opt.controls).find(".play").show();
                    a(i.opt.controls).find(".pause").hide()
                });
                a(i.opt.containment).on("play", function() {
                    a(i.opt.controls).find(".play").hide();
                    a(i.opt.controls).find(".pause").show()
                })
            }
            if (i.opt.thumbs.folderPath.trim().length > 0 && i.opt.thumbs.placeholder.trim().length > 0) {
                a.mbBgndGallery.buildThumbs(i)
            }
            if (i.opt.thumbs.folderPath.trim().length > 0 && i.opt.thumbs.placeholder.trim().length > 0) {
                a(".sel", a(i.opt.thumbs.placeholder)).removeClass("sel");
                a("#mbBgImg_" + i.opt.imageCounter).addClass("sel")
            }
        },
        normalizeCss: function(d) {
            var g = jQuery.extend(true, {}, d);
            var e = "";
            var c = "transitionEnd";
            if (a.browser.webkit) {
                e = "-webkit-";
                c = "webkitTransitionEnd"
            } else {
                if (a.browser.mozilla) {
                    e = "-moz-";
                    c = "transitionend"
                } else {
                    if (a.browser.opera) {
                        e = "-o-";
                        c = "oTransitionEnd"
                    } else {
                        if (a.browser.msie) {
                            e = "-ms-";
                            c = "msTransitionEnd"
                        }
                    }
                }
            }
            for (var f in g) {
                if (f === "transform") {
                    g[e + "transform"] = g[f];
                    delete g[f]
                }
                if (f === "transform-origin") {
                    g[e + "transform-origin"] = d[f];
                    delete g[f]
                }
                if (f === "filter") {
                    g[e + "filter"] = d[f];
                    delete g[f]
                }
            }
            return g
        },
        preload: function(d, e) {
            if (a.mbBgndGallery.clear) {
                e.opt.gallery.remove();
                return
            }
            var c = a("<img/>").load(function() {
                e.opt.gallery.trigger("imageLoaded." + e.opt.galleryID)
            }).attr("src", d)
        },
        checkSize: function(d, c) {
            if (!d) {
                return
            }
            if (a.mbBgndGallery.changing) {
                return
            }
            if (a.mbBgndGallery.clear) {
                c.opt.gallery.remove();
                return
            }
            return d.each(function() {
                var j = a(this);
                var e = j.attr("w");
                var g = j.attr("h");
                var k = c.opt.containment == "body" ? window : c.opt.containment;
                var i = e / g;
                var f = a(k).width() / a(k).height();
                if (i >= f) {
                    j.css("height", "100%");
                    j.css("width", "auto")
                } else {
                    j.css("width", "100%");
                    j.css("height", "auto")
                }
                j.css("margin-left", ((a(k).width() - j.width()) / 2));
                if (!c.opt.preserveTop) {
                    j.css("margin-top", ((a(k).height() - j.height()) / 2))
                }
                if (c.opt.preserveWidth) {
                    j.css({
                        width: "100%",
                        height: "auto",
                        left: 0,
                        marginLeft: 0
                    })
                }
            })
        },
        changePhoto: function(d, e) {
            if (a.mbBgndGallery.clear) {
                e.opt.gallery.remove();
                return
            }
            if (e.opt.thumbs.folderPath.trim().length > 0 && e.opt.thumbs.placeholder.trim().length > 0) {
                a(".sel", a(e.opt.thumbs.placeholder)).removeClass("sel");
                a("#mbBgImg_" + e.opt.imageCounter).addClass("sel")
            }
            a.mbBgndGallery.changing = true;
            if (e.opt.onChange) {
                e.opt.onChange(e.opt, e.opt.imageCounter)
            }
            var f = a("<img/>").hide().load(function() {
                var i = a(this);
                var g = a("<div/>").css({
                    position: "absolute",
                    top: -5000
                });
                g.append(i);
                a("body").append(g);
                i.attr("w", i.width());
                i.attr("h", i.height());
                g.remove();
                e.opt.effect = typeof e.opt.effect == "object" ? e.opt.effect : a.mbBgndGallery.effects[e.opt.effect];
                a("img", e.opt.gallery).CSSAnimate(e.opt.effect.exit, e.opt.effTimer, 0, e.opt.effect.exitTiming, function(j) {
                    if (j.length) {
                        j.remove()
                    }
                });
                i.css({
                    position: "absolute"
                });
                e.opt.gallery.append(i);
                a.mbBgndGallery.changing = false;
                a.mbBgndGallery.checkSize(i, e);
                var h = {
                    top: 0,
                    left: 0,
                    opacity: 1,
                    transform: "scale(1) rotate(0deg)",
                    filter: " blur(0)"
                };
                h = a.mbBgndGallery.normalizeCss(h);
                i.css(a.mbBgndGallery.normalizeCss(e.opt.effect.enter)).show().CSSAnimate(h, e.opt.effTimer, 0, e.opt.effect.enterTiming, function() {
                    e.opt.gallery.trigger("imageReady." + e.opt.galleryID)
                })
            }).attr("src", d);
            f.error(function() {
                var g = a(this);
                g.attr("src", e.opt.placeHolder)
            });
            if (e.opt.grayScale) {
                f.greyScale(e)
            }
            var c = a(e.opt.controls).find(".counter");
            c.html(e.opt.imageCounter + 1 + " / " + e.opt.images.length)
        },
        play: function(c) {
            clearTimeout(c.opt.changing);
            var d = a("img", c.opt.gallery).not(":last");
            d.remove();
            if (a.mbBgndGallery.clear) {
                c.opt.gallery.remove();
                return
            }
            if (c.opt.onPlay) {
                c.opt.onPlay(c.opt)
            }
            c.opt.changing = setTimeout(function() {
                if (c.opt.paused) {
                    return
                }
                if (c.opt.onNext) {
                    c.opt.onNext(c.opt)
                }
                if (c.opt.imageCounter >= c.opt.images.length - 1) {
                    c.opt.imageCounter = -1
                }
                c.opt.imageCounter++;
                a.mbBgndGallery.changePhoto(c.opt.images[c.opt.imageCounter], a(c.opt.containment).get(0))
            }, c.opt.paused ? 0 : c.opt.timer);
            c.opt.gallery.trigger("play")
        },
        pause: function(c) {
            if (a.mbBgndGallery.clear) {
                c.opt.gallery.remove();
                return
            }
            clearTimeout(c.opt.changing);
            c.opt.paused = true;
            c.opt.gallery.trigger("paused");
            if (c.opt.onPause) {
                c.opt.onPause(c.opt)
            }
        },
        next: function(c) {
            if (a.mbBgndGallery.clear) {
                c.opt.gallery.remove();
                return
            }
            if (c.opt.onNext) {
                c.opt.onNext(c.opt)
            }
            a.mbBgndGallery.pause(c);
            if (c.opt.imageCounter == c.opt.images.length - 1) {
                c.opt.imageCounter = -1
            }
            c.opt.imageCounter++;
            a.mbBgndGallery.changePhoto(c.opt.images[c.opt.imageCounter], c);
            clearTimeout(c.opt.changing)
        },
        prev: function(c) {
            if (a.mbBgndGallery.clear) {
                c.opt.gallery.remove();
                return
            }
            if (c.opt.onPrev) {
                c.opt.onPrev(c.opt)
            }
            a.mbBgndGallery.pause(c);
            clearTimeout(c.opt.changing);
            if (c.opt.imageCounter == 0) {
                c.opt.imageCounter = c.opt.images.length
            }
            c.opt.imageCounter--;
            a.mbBgndGallery.changePhoto(c.opt.images[c.opt.imageCounter], c)
        },
        loader: {
            show: function() {},
            hide: function() {}
        },
        keyboard: function(c) {
            a(document).on("keydown.bgndGallery", function(d) {
                switch (d.keyCode) {
                    case 32:
                        if (c.opt.paused) {
                            a.mbBgndGallery.play(c);
                            c.opt.paused = false
                        } else {
                            c.opt.paused = true;
                            a.mbBgndGallery.pause(c)
                        }
                        d.preventDefault();
                        break;
                    case 39:
                        a.mbBgndGallery.next(c);
                        d.preventDefault();
                        break;
                    case 37:
                        a.mbBgndGallery.prev(c);
                        d.preventDefault();
                        break
                }
            })
        },
        buildControls: function(c, f) {
            var i = a(c).find(".pause");
            var h = a(c).find(".play");
            var e = a(c).find(".next");
            var g = a(c).find(".prev");
            var d = a(c).find(".fullscreen");
            if ((a.browser.msie || a.browser.opera || "ontouchstart" in window)) {
                d.remove()
            }
            if (f.opt.autoStart) {
                h.hide()
            }
            i.on("click", function() {
                a.mbBgndGallery.pause(f);
                a(this).hide();
                h.show()
            });
            h.on("click", function() {
                if (!f.opt.paused) {
                    return
                }
                clearTimeout(f.opt.changing);
                a.mbBgndGallery.play(f);
                f.opt.paused = false
            });
            e.on("click", function() {
                a.mbBgndGallery.next(f);
                i.hide();
                h.show()
            });
            g.on("click", function() {
                a.mbBgndGallery.prev(f);
                i.hide();
                h.show()
            });
            d.on("click", function() {
                a.mbBgndGallery.runFullscreen(f)
            });
            if (f.opt.activateKeyboard) {
                a.mbBgndGallery.keyboard(f)
            }
        },
        changeGallery: function(f, g) {
            f.opt.gallery.fadeOut();
            a.mbBgndGallery.pause(f);
            f.opt.images = g;
            var c = f.opt.images;
            var e = c.length;
            var d = 0;
            a.mbBgndGallery.preload(c[0], f);
            f.opt.gallery.on("imageLoaded." + f.opt.galleryID, function() {
                d++;
                if (d == e) {
                    f.opt.gallery.off("imageLoaded." + f.opt.galleryID);
                    f.opt.gallery.fadeIn();
                    a.mbBgndGallery.play(f);
                    f.opt.paused = false;
                    return
                }
                a.mbBgndGallery.preload(c[d], f)
            });
            f.opt.imageCounter = 0
        },
        changeEffect: function(c) {
            a.mbBgndGallery.el.opt.effect = c
        },
        runFullscreen: function(g) {
            var f = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
            jQuery(document).off(f);
            jQuery(document).on(f, function() {
                var i = c(document, "IsFullScreen") || c(document, "FullScreen");
                console.debug(i);
                if (!i) {
                    g.isFullscreen = false;
                    a(".fullScreen_controls").remove();
                    if (!a(g.opt.containment).is("body")) {
                        a(g.opt.containment).css({
                            width: g.width,
                            height: g.height,
                            top: g.top,
                            left: g.left,
                            position: g.position
                        })
                    }
                    g.opt.gallery.css({
                        background: "transparent"
                    });
                    var j = a("#bgndGallery_" + g.opt.galleryID + " img:first")
                }
                a.mbBgndGallery.checkSize(j, g)
            });
            if (g.isFullscreen) {
                e()
            } else {
                g.isFullscreen = true;
                if (!a(g.opt.containment).is("body")) {
                    g.width = a(g.opt.containment).css("width");
                    g.height = a(g.opt.containment).css("height");
                    g.top = a(g.opt.containment).css("top");
                    g.left = a(g.opt.containment).css("left");
                    g.position = a(g.opt.containment).css("position")
                }
                var d = a(g.opt.controls).clone(true).addClass("fullScreen_controls").css({
                    position: "absolute",
                    zIndex: 1000,
                    bottom: 20,
                    right: 20
                });
                d.find(".fullscreen").html("exit");
                g.opt.gallery.append(d).css({
                    background: "#000"
                });
                a(g.opt.containment).CSSAnimate({
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    position: "absolute"
                });
                h(g.opt.gallery.get(0))
            }

            function c(l, o) {
                var n = ["webkit", "moz", "ms", "o", ""];
                var k = 0,
                    i, j;
                while (k < n.length && !l[i]) {
                    i = o;
                    if (n[k] == "") {
                        i = i.substr(0, 1).toLowerCase() + i.substr(1)
                    }
                    i = n[k] + i;
                    j = typeof l[i];
                    if (j != "undefined") {
                        n = [n[k]];
                        return (j == "function" ? l[i]() : l[i])
                    }
                    k++
                }
            }

            function h(i) {
                c(i, "RequestFullScreen")
            }

            function e() {
                if (c(document, "FullScreen") || c(document, "IsFullScreen")) {
                    c(document, "CancelFullScreen")
                }
            }
        },
        buildThumbs: function(g) {
            function d(h) {
                return h.split("/").pop()
            }
            for (var e = 0; e < g.opt.images.length; e++) {
                var f = g.opt.thumbs.folderPath + d(g.opt.images[e]);
                var c = a("<img/>").attr({
                    src: f,
                    id: "mbBgImg_" + e
                }).click(function() {
                    g.opt.imageCounter = a(this).attr("i") - 1;
                    a.mbBgndGallery.next(g);
                    g.opt.paused = true
                }).attr("i", e);
                a(g.opt.thumbs.placeholder).append(c)
            }
        }
    };
    jQuery.loadFromSystem = function(d, e) {
        if (!d) {
            return
        }
        if (!e) {
            e = ["jpg", "jpeg", "png"]
        }
        var c = [];
        a.ajax({
            url: d,
            async: false,
            success: function(f) {
                var h = a(f);
                var g = h.find("[href]");
                g.each(function() {
                    for (var j in e) {
                        if (a(this).attr("href").indexOf(e[j]) >= 0) {
                            c.push(d + a(this).attr("href"))
                        }
                        c = a.unique(c)
                    }
                });
                h.remove()
            }
        });
        return c
    };
    a.fn.greyScale = function(c) {
        return this.each(function() {
            if (a.browser.msie && a.browser.version < 9) {
                this.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayScale=1)"
            } else {
                if (a.browser.webkit) {
                    c.opt.gallery.css("-webkit-filter", "grayscale(1) sepia(.4)")
                } else {
                    this.src = b(this)
                }
            }
        })
    };
    a.shuffle = function(e) {
        var d = e.slice();
        var c = d.length;
        var g = c;
        while (g--) {
            var h = parseInt(Math.random() * c);
            var f = d[g];
            d[g] = d[h];
            d[h] = f
        }
        return d
    };

    function b(f) {
        var d = document.createElement("canvas");
        var h = d.getContext("2d");
        var k = f.width;
        var e = f.height;
        d.width = k;
        d.height = e;
        h.drawImage(f, 0, 0);
        var c = h.getImageData(0, 0, k, e);
        for (var l = 0; l < c.height; l++) {
            for (var m = 0; m < c.width; m++) {
                var g = (l * 4) * c.width + m * 4;
                var j = (c.data[g] + c.data[g + 1] + c.data[g + 2]) / 3;
                c.data[g] = j;
                c.data[g + 1] = j;
                c.data[g + 2] = j
            }
        }
        h.putImageData(c, 0, 0, 0, 0, c.width, c.height);
        return d.toDataURL()
    }
})(jQuery);
jQuery.mbBgndGallery.effects = {
    fade: {
        enter: {
            left: 0,
            opacity: 0
        },
        exit: {
            left: 0,
            opacity: 0
        },
        enterTiming: "ease-in",
        exitTiming: "ease-in"
    },
    slideUp: {
        enter: {
            top: "100%",
            opacity: 1
        },
        exit: {
            top: 0,
            opacity: 0
        },
        enterTiming: "ease-in",
        exitTiming: "ease-in"
    },
    slideDown: {
        enter: {
            top: "-100%",
            opacity: 1
        },
        exit: {
            top: 0,
            opacity: 0
        },
        enterTiming: "ease-in",
        exitTiming: "ease-in"
    },
    slideLeft: {
        enter: {
            left: "100%",
            opacity: 1
        },
        exit: {
            left: "-100%",
            opacity: 0
        }
    },
    slideRight: {
        enter: {
            left: "-100%",
            opacity: 1
        },
        exit: {
            left: "100%",
            opacity: 0
        }
    },
    zoom: {
        enter: {
            transform: "scale(" + (1 + Math.random() * 5) + ")",
            opacity: 0
        },
        exit: {
            transform: "scale(" + (1 + Math.random() * 5) + ")",
            opacity: 0
        },
        enterTiming: "cubic-bezier(0.19, 1, 0.22, 1)",
        exitTiming: "cubic-bezier(0.19, 1, 0.22, 1)"
    },
    zoomBlur: {
        enter: {
            opacity: 0,
            filter: "blur(30px)",
            transform: "scale(2)"
        },
        exit: {
            opacity: 0,
            filter: "blur(30px)",
            transform: "scale(2)"
        },
        enterTiming: "cubic-bezier(0.19, 1, 0.22, 1)",
        exitTiming: "cubic-bezier(0.19, 1, 0.22, 1)"
    },
    blur: {
        enter: {
            opacity: 0,
            filter: "blur(30px)"
        },
        exit: {
            opacity: 0,
            filter: "blur(30px)"
        },
        enterTiming: "cubic-bezier(0.19, 1, 0.22, 1)",
        exitTiming: "cubic-bezier(0.19, 1, 0.22, 1)"
    }
};
(function(b, a) {
    var d, c = "superslides";
    d = function(i, m) {
        this.options = a.extend({
            play: !1,
            animation_speed: 600,
            animation_easing: "swing",
            animation: "slide",
            inherit_width_from: b,
            inherit_height_from: b,
            pagination: !0,
            hashchange: !1,
            scrollable: !0,
            elements: {
                preserve: ".preserve",
                nav: ".slides-navigation",
                container: ".slides-container",
                pagination: ".slides-pagination"
            }
        }, m);
        var u = this,
            g = a("<div>", {
                "class": "slides-control"
            }),
            t = 1;
        this.$el = a(i), this.$container = this.$el.find(this.options.elements.container);
        var f = function() {
                return t = u._findMultiplier(), u.$el.on("click", u.options.elements.nav + " a", function(e) {
                    e.preventDefault(), u.stop(), a(this).hasClass("next") ? u.animate("next", function() {
                        u.start()
                    }) : u.animate("prev", function() {
                        u.start()
                    })
                }), a(document).on("keyup", function(e) {
                    37 === e.keyCode && u.animate("prev"), 39 === e.keyCode && u.animate("next")
                }), a(b).on("resize", function() {
                    setTimeout(function() {
                        var e = u.$container.children();
                        u.width = u._findWidth(), u.height = u._findHeight(), e.css({
                            width: u.width,
                            left: u.width
                        }), u.css.containers(), u.css.images()
                    }, 10)
                }), a(b).on("hashchange", function() {
                    var h, e = u._parseHash();
                    h = u._upcomingSlide(e), h >= 0 && h !== u.current && u.animate(h)
                }), u.pagination._events(), u.start(), u
            },
            k = {
                containers: function() {
                    u.init ? (u.$el.css({
                        height: u.height
                    }), u.$control.css({
                        width: u.width * t,
                        left: -u.width
                    }), u.$container.css({})) : (a("body").css({
                        margin: 0
                    }), u.$el.css({
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: u.height
                    }), u.$control.css({
                        position: "relative",
                        transform: "translate3d(0)",
                        height: "100%",
                        width: u.width * t,
                        left: -u.width
                    }), u.$container.css({
                        display: "none",
                        margin: "0",
                        padding: "0",
                        listStyle: "none",
                        position: "relative",
                        height: "100%"
                    })), 1 === u.size() && u.$el.find(u.options.elements.nav).hide()
                },
                images: function() {
                    var e = u.$container.find("img").not(u.options.elements.preserve);
                    e.removeAttr("width").removeAttr("height").css({
                        "-webkit-backface-visibility": "hidden",
                        "-ms-interpolation-mode": "bicubic",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        "z-index": "-1",
                        "max-width": "none"
                    }), e.each(function() {
                        var h = u.image._aspectRatio(this),
                            o = this;
                        if (a.data(this, "processed")) {
                            u.image._scale(o, h), u.image._center(o, h)
                        } else {
                            var l = new Image;
                            l.onload = function() {
                                u.image._scale(o, h), u.image._center(o, h), a.data(o, "processed", !0)
                            }, l.src = this.src
                        }
                    })
                },
                children: function() {
                    var e = u.$container.children();
                    e.is("img") && (e.each(function() {
                        if (a(this).is("img")) {
                            a(this).wrap("<div>");
                            var h = a(this).attr("id");
                            a(this).removeAttr("id"), a(this).parent().attr("id", h)
                        }
                    }), e = u.$container.children()), u.init || e.css({
                        display: "none",
                        left: 2 * u.width
                    }), e.css({
                        position: "absolute",
                        overflow: "hidden",
                        height: "100%",
                        width: u.width,
                        top: 0,
                        zIndex: 0
                    })
                }
            },
            q = {
                slide: function(l, h) {
                    var r = u.$container.children(),
                        o = r.eq(l.upcoming_slide);
                    o.css({
                        left: l.upcoming_position,
                        display: "block"
                    }), u.$control.animate({
                        left: l.offset
                    }, u.options.animation_speed, u.options.animation_easing, function() {
                        u.size() > 1 && (u.$control.css({
                            left: -u.width
                        }), r.eq(l.upcoming_slide).css({
                            left: u.width,
                            zIndex: 2
                        }), l.outgoing_slide >= 0 && r.eq(l.outgoing_slide).css({
                            left: u.width,
                            display: "none",
                            zIndex: 0
                        })), h()
                    })
                },
                fade: function(l, h) {
                    var x = this,
                        v = x.$container.children(),
                        r = v.eq(l.outgoing_slide),
                        w = v.eq(l.upcoming_slide);
                    w.css({
                        left: this.width,
                        opacity: 1,
                        display: "block"
                    }), l.outgoing_slide >= 0 ? r.animate({
                        opacity: 0
                    }, x.options.animation_speed, x.options.animation_easing, function() {
                        x.size() > 1 && (v.eq(l.upcoming_slide).css({
                            zIndex: 2
                        }), l.outgoing_slide >= 0 && v.eq(l.outgoing_slide).css({
                            opacity: 1,
                            display: "none",
                            zIndex: 0
                        })), h()
                    }) : (w.css({
                        zIndex: 2
                    }), h())
                }
            };
        q = a.extend(q, a.fn.superslides.fx);
        var p = {
                _centerY: function(e) {
                    var h = a(e);
                    h.css({
                        top: (u.height - h.height()) / 2
                    })
                },
                _centerX: function(e) {
                    var h = a(e);
                    h.css({
                        left: (u.width - h.width()) / 2
                    })
                },
                _center: function(e) {
                    u.image._centerX(e), u.image._centerY(e)
                },
                _aspectRatio: function(h) {
                    if (!h.naturalHeight && !h.naturalWidth) {
                        var e = new Image;
                        e.src = h.src, h.naturalHeight = e.height, h.naturalWidth = e.width
                    }
                    return h.naturalHeight / h.naturalWidth
                },
                _scale: function(h, s) {
                    s = s || u.image._aspectRatio(h);
                    var l = u.height / u.width,
                        r = a(h);
                    l > s ? r.css({
                        height: u.height,
                        width: u.height / s
                    }) : r.css({
                        height: u.width * s,
                        width: u.width
                    })
                }
            },
            j = {
                _setCurrent: function(h) {
                    if (u.$pagination) {
                        var e = u.$pagination.children();
                        e.removeClass("current"), e.eq(h).addClass("current")
                    }
                },
                _addItem: function(l) {
                    var x = l + 1,
                        v = x,
                        w = u.$container.children().eq(l),
                        h = w.attr("id");
                    h && (v = h);
                    var s = a("<a>", {
                        href: "#" + v,
                        text: v
                    });
                    s.appendTo(u.$pagination)
                },
                _setup: function() {
                    if (u.options.pagination && 1 !== u.size()) {
                        var e = a("<nav>", {
                            "class": u.options.elements.pagination.replace(/^\./, "")
                        });
                        u.$pagination = e.appendTo(u.$el);
                        for (var h = 0; u.size() > h; h++) {
                            u.pagination._addItem(h)
                        }
                    }
                },
                _events: function() {
                    u.$el.on("click", u.options.elements.pagination + " a", function(h) {
                        h.preventDefault();
                        var e, l = u._parseHash(this.hash);
                        e = u._upcomingSlide(l, !0), e !== u.current && u.animate(e, function() {
                            u.start()
                        })
                    })
                }
            };
        return this.css = k, this.image = p, this.pagination = j, this.fx = q, this.animation = this.fx[this.options.animation], this.$control = this.$container.wrap(g).parent(".slides-control"), u._findPositions(), u.width = u._findWidth(), u.height = u._findHeight(), this.css.children(), this.css.containers(), this.css.images(), this.pagination._setup(), f()
    }, d.prototype = {
        _findWidth: function() {
            return a(this.options.inherit_width_from).width()
        },
        _findHeight: function() {
            return a(this.options.inherit_height_from).height()
        },
        _findMultiplier: function() {
            return 1 === this.size() ? 1 : 3
        },
        _upcomingSlide: function(f, e) {
            if (e && !isNaN(f) && (f -= 1), /next/.test(f)) {
                return this._nextInDom()
            }
            if (/prev/.test(f)) {
                return this._prevInDom()
            }
            if (/\d/.test(f)) {
                return +f
            }
            if (f && /\w/.test(f)) {
                var g = this._findSlideById(f);
                return g >= 0 ? g : 0
            }
            return 0
        },
        _findSlideById: function(e) {
            return this.$container.find("#" + e).index()
        },
        _findPositions: function(f, e) {
            e = e || this, void 0 === f && (f = -1), e.current = f, e.next = e._nextInDom(), e.prev = e._prevInDom()
        },
        _nextInDom: function() {
            var e = this.current + 1;
            return e === this.size() && (e = 0), e
        },
        _prevInDom: function() {
            var e = this.current - 1;
            return 0 > e && (e = this.size() - 1), e
        },
        _parseHash: function(e) {
            return e = e || b.location.hash, e = e.replace(/^#/, ""), e && !isNaN(+e) && (e = +e), e
        },
        size: function() {
            return this.$container.children().length
        },
        destroy: function() {
            return this.$el.removeData()
        },
        update: function() {
            this.css.children(), this.css.containers(), this.css.images(), this.pagination._addItem(this.size()), this._findPositions(this.current), this.$el.trigger("updated.slides")
        },
        stop: function() {
            clearInterval(this.play_id), delete this.play_id, this.$el.trigger("stopped.slides")
        },
        start: function() {
            var e = this;
            e.options.hashchange ? a(b).trigger("hashchange") : this.animate(), this.options.play && (this.play_id && this.stop(), this.play_id = setInterval(function() {
                e.animate()
            }, this.options.play)), this.$el.trigger("started.slides")
        },
        animate: function(g, k) {
            var i = this,
                h = {};
            if (!(this.animating || (this.animating = !0, void 0 === g && (g = "next"), h.upcoming_slide = this._upcomingSlide(g), h.upcoming_slide >= this.size()))) {
                if (h.outgoing_slide = this.current, h.upcoming_position = 2 * this.width, h.offset = -h.upcoming_position, ("prev" === g || h.outgoing_slide > g) && (h.upcoming_position = 0, h.offset = 0), i.size() > 1 && i.pagination._setCurrent(h.upcoming_slide), i.options.hashchange) {
                    var j = h.upcoming_slide + 1,
                        f = i.$container.children(":eq(" + h.upcoming_slide + ")").attr("id");
                    b.location.hash = f ? f : j
                }
                i.$el.trigger("animating.slides", [h]), i.animation(h, function() {
                    i._findPositions(h.upcoming_slide, i), "function" == typeof k && k(), i.animating = !1, i.$el.trigger("animated.slides"), i.init || (i.$el.trigger("init.slides"), i.init = !0, i.$container.fadeIn("fast"))
                })
            }
        }
    }, a.fn[c] = function(e, f) {
        var g = [];
        return this.each(function() {
            var i, k, j;
            return i = a(this), k = i.data(c), j = "object" == typeof e && e, k || (g = i.data(c, k = new d(this, j))), "string" == typeof e && (g = k[e], "function" == typeof g) ? g = g.call(k, f) : void 0
        }), g
    }, a.fn[c].fx = {}
})(this, jQuery);
(function(a) {
    a.fn.fitVids = function(b) {
        var c = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var f = document.createElement("div"),
                d = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                e = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
            f.className = "fit-vids-style";
            f.id = "fit-vids-style";
            f.style.display = "none";
            f.innerHTML = e;
            d.parentNode.insertBefore(f, d)
        }
        if (b) {
            a.extend(c, b)
        }
        return this.each(function() {
            var g = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            if (c.customSelector) {
                g.push(c.customSelector)
            }
            var h = a(this).find(g.join(","));
            h = h.not("object object");
            h.each(function() {
                var m = a(this);
                if (this.tagName.toLowerCase() === "embed" && m.parent("object").length || m.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                var i = (this.tagName.toLowerCase() === "object" || (m.attr("height") && !isNaN(parseInt(m.attr("height"), 10)))) ? parseInt(m.attr("height"), 10) : m.height(),
                    j = !isNaN(parseInt(m.attr("width"), 10)) ? parseInt(m.attr("width"), 10) : m.width(),
                    k = i / j;
                if (!m.attr("id")) {
                    var l = "fitvid" + Math.floor(Math.random() * 999999);
                    m.attr("id", l)
                }
                m.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", (k * 100) + "%");
                m.removeAttr("height").removeAttr("width")
            })
        })
    }
})(window.jQuery || window.Zepto);
jQuery(function() {
    jQuery(".smoothscroll, .smoothscroll > a").bind("click.smoothscroll", function(d) {
        var c = this.hash,
            a = jQuery("body").find(c);
        if (!a.length) {
            return
        }
        var f = a.offset().top,
            b = jQuery(".main-menu").height();
        if (jQuery(".admin-bar").length) {
            b = b + 32
        }
        f = f - b + 70;
        d.preventDefault();
        jQuery("html, body").stop().animate({
            scrollTop: f - 0
        }, 900, "swing", function() {
            window.location.hash = c
        })
    })
});
jQuery(window).load(function() {
    setTimeout(function() {
        jQuery("h1.fittext").fitText(1, {
            minFontSize: "50px",
            maxFontSize: "100px"
        });
        jQuery("h2.fittext").fitText(1, {
            minFontSize: "40px",
            maxFontSize: "80px"
        });
        jQuery("h3.fittext").fitText(1, {
            minFontSize: "30px",
            maxFontSize: "60px"
        });
        jQuery("h4.fittext").fitText(1, {
            minFontSize: "20px",
            maxFontSize: "40px"
        });
        jQuery("h5.fittext").fitText(1, {
            minFontSize: "15px",
            maxFontSize: "30px"
        });
        jQuery("h6.fittext").fitText(1, {
            minFontSize: "10px",
            maxFontSize: "20px"
        })
    }, 200)
});
jQuery("h1.fittext").fitText(1, {
    minFontSize: "50px",
    maxFontSize: "100px"
});
jQuery("h2.fittext").fitText(1, {
    minFontSize: "40px",
    maxFontSize: "80px"
});
jQuery("h3.fittext").fitText(1, {
    minFontSize: "30px",
    maxFontSize: "60px"
});
jQuery("h4.fittext").fitText(1, {
    minFontSize: "20px",
    maxFontSize: "40px"
});
jQuery("h5.fittext").fitText(1, {
    minFontSize: "15px",
    maxFontSize: "30px"
});
jQuery("h6.fittext").fitText(1, {
    minFontSize: "10px",
    maxFontSize: "20px"
});
jQuery(".popup, .popup-image").magnificPopup({
    type: "image",
    fixedContentPos: false,
    fixedBgPos: false,
    mainClass: "mfp-no-margins mfp-with-zoom",
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300
    }
});
jQuery(".popup-soundcloud").magnificPopup({
    type: "iframe",
    mainClass: "soundcloud-popup"
});
jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    fixedContentPos: false,
    fixedBgPos: false,
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false
});
jQuery(".popup-inline").magnificPopup({
    type: "inline"
});
jQuery(".popup-project").magnificPopup({
    type: "inline",
    alignTop: true
});
jQuery(".popup-ajax").magnificPopup({
    type: "ajax",
    alignTop: true
});
jQuery(window).load(function() {
    jQuery(".fw-slider").bxSlider({
        auto: false,
        mode: "fade",
        pager: true,
        controls: true,
        nextText: "",
        prevText: ""
    });
    var a = jQuery(".quote-slider").bxSlider({
        auto: false,
        responsive: true,
        adaptiveHeight: true,
        mode: "fade",
        pager: false,
        controls: false
    });
    jQuery(".quote-next").click(function() {
        a.goToNextSlide();
        return false
    });
    jQuery(".quote-prev").click(function() {
        a.goToPrevSlide();
        return false
    })
});
if (jQuery("html").hasClass("no-touch")) {
    jQuery(".fade-it, .image-thumb, .service-item").hover(function() {
        jQuery(this).siblings().addClass("fade")
    }, function() {
        jQuery(this).siblings().removeClass("fade")
    })
}
jQuery(function() {
    jQuery("#toggle").click(function(a) {
        a.stopPropagation()
    });
    jQuery("html").click(function(a) {
        if (!jQuery(".toggle").is(jQuery(a.target))) {
            jQuery("#toggle").prop("checked", false)
        }
    })
});
jQuery(window).load(function() {
    jQuery(".fixedmenu").sticky({
        topSpacing: 0
    })
});
jQuery(document).ready(function() {
    var e = false,
        d = !jQuery(".fallback-image").length;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        e = true
    }
    var c = jQuery("#video"),
        g = jQuery(".splash-gallery-slider-simple"),
        a = jQuery(".splash-gallery-slider-notsimple");
    if (c.length) {
        if ((e === false)) {
            jQuery(".fullscreen-video").mb_YTPlayer({
                containment: "body",
                opacity: 1,
                startAt: 0,
                showYTLogo: false,
                showControls: false
            });
            jQuery(".video-controls, #show-after, .img-after").hide();
            jQuery(".small-play-btn").hide();
            c.on("YTPStart", function() {
                jQuery(".small-play-btn").hide();
                jQuery(".small-pause-btn").show()
            });
            c.on("YTPPause", function() {
                jQuery(".small-play-btn").show();
                jQuery(".small-pause-btn").hide()
            });
            if (!jQuery("section.is-autoplay").length) {
                c.on("YTPStart", function() {
                    jQuery(".video-controls").show().css({
                        opacity: 0,
                        visibility: "visible"
                    }).animate({
                        opacity: 1
                    }, 300)
                });
                c.on("YTPPause", function() {
                    jQuery(".video-controls").css({
                        opacity: 1,
                        visibility: "hidden"
                    }).animate({
                        opacity: 0
                    }, 300)
                });
                if (!jQuery(".video-loop").length) {
                    c.on("YTPEnd", function() {
                        jQuery(".video-controls, #show-before, .img-before").hide()
                    })
                }
            } else {
                c.on("YTPStart", function() {
                    jQuery(".video-controls").show().css({
                        opacity: 0,
                        visibility: "visible"
                    }).animate({
                        opacity: 1
                    }, 300)
                })
            } if (jQuery("section.playhide").length) {
                c.on("YTPStart", function() {
                    jQuery("section.playhide").css({
                        opacity: 1,
                        visibility: "hidden"
                    }).animate({
                        opacity: 0
                    }, 300)
                });
                c.on("YTPPause", function() {
                    jQuery("section.playhide").show().css({
                        opacity: 0,
                        visibility: "visible"
                    }).animate({
                        opacity: 1
                    }, 300)
                });
                if (!jQuery("section.is-autoplay").length) {
                    c.on("YTPEnd", function() {
                        jQuery("section.playhide").show().css({
                            opacity: 0,
                            visibility: "visible"
                        }).animate({
                            opacity: 1
                        }, 300)
                    })
                }
            }
        } else {
            jQuery("#home").removeClass(".video");
            jQuery("#show-after, .img-after").show();
            jQuery(".fullscreen-video, #show-before, .img-before, .video-controls, .play-btn, .play-btn-normal").hide()
        }
    } else {
        if (g.length && jQuery(".hiddenslide").length) {
            if ((e === false || d)) {
                jQuery("body").addClass("nobg");
                jQuery(".fallback-image").hide();
                var b = [];
                jQuery(".hiddenslide").each(function() {
                    var h = jQuery(this);
                    b.push(h.attr("data-src"))
                });
                var f = {
                    containment: "body",
                    timer: 4000,
                    effTimer: 2000,
                    grayScale: false,
                    shuffle: false,
                    preserveWidth: false,
                    images: b,
                    onStart: function() {},
                    onPause: function() {},
                    onPlay: function(h) {},
                    onChange: function(i, h) {},
                    onNext: function(h) {},
                    onPrev: function(h) {}
                };
                if (jQuery(".splash-arrows").length || jQuery(".splash-both").length) {
                    f.autoStart = false;
                    f.effTimer = 1000;
                    f.controls = "#home-controls"
                }
                jQuery.mbBgndGallery.buildGallery(f)
            } else {
                jQuery("body").removeClass("nobg");
                jQuery(".fallback-image").show()
            }
        } else {
            if (a.length) {
                var f = {
                    animation: "fade",
                    pagination: true
                };
                if (jQuery(".splash-no").length) {
                    f.play = 4000;
                    f.pagination = false
                } else {
                    if (jQuery(".splash-arrows").length) {
                        f.pagination = false
                    }
                }
                jQuery("#slides").superslides(f)
            }
        }
    }
});
jQuery(document).on("animating.slides", function(b) {
    setTimeout(function() {
        jQuery("h1.fittext").fitText(1, {
            minFontSize: "50px",
            maxFontSize: "100px"
        });
        jQuery("h2.fittext").fitText(1, {
            minFontSize: "40px",
            maxFontSize: "80px"
        });
        jQuery("h3.fittext").fitText(1, {
            minFontSize: "30px",
            maxFontSize: "60px"
        });
        jQuery("h4.fittext").fitText(1, {
            minFontSize: "20px",
            maxFontSize: "40px"
        });
        jQuery("h5.fittext").fitText(1, {
            minFontSize: "15px",
            maxFontSize: "30px"
        });
        jQuery("h6.fittext").fitText(1, {
            minFontSize: "10px",
            maxFontSize: "20px"
        })
    }, 100)
});
jQuery(window).load(function() {
    jQuery(".featured-post-slider").bxSlider({
        auto: false,
        mode: "horizontal",
        pager: false,
        controls: true,
        nextText: "",
        prevText: ""
    })
});
jQuery(".post-media, .vendor").fitVids();
(function(c) {
    c.pixelentity = c.pixelentity || {
        version: "1.0.0"
    };
    c.pixelentity.peThemeContactForm = {
        conf: {
            api: false
        }
    };
    var d = window.peContactForm ? decodeURIComponent(window.peContactForm.url) : false;
    var b = {
        email: /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/,
        "default": /.{4}/
    };

    function a(l, m) {
        var k = [];
        var h, j;

        function g() {
            l.bind("submit", n).find("input,textarea").each(f).bind("change", e).end();
            h = c("#contactFormSent");
            j = c("#contactFormError")
        }

        function f() {
            var q = c(this);
            if (q.attr("type") == "submit") {
                return
            }
            k.push(q);
            q.attr("data-fieldID", k.length - 1)
        }

        function e() {
            o(k[this.getAttribute("data-fieldID")]);
            return true
        }

        function o(v, t) {
            var w = v.val();
            var r = v.attr("data-validation");
            var q = true;
            if (w === "") {
                if (v.hasClass("required")) {
                    q = false
                }
            } else {
                var u = b[r] ? b[r] : b["default"];
                q = (w.match(u) !== null)
            }
            var s = q ? "removeClass" : "addClass";
            v[s]("error");
            v.closest(".control-group")[s]("error");
            return q
        }

        function n(t) {
            var r = true;
            var s = {};
            var u;
            var q;
            for (q = 0; q < k.length; q++) {
                r = o(k[q], true) && r;
                if (r) {
                    if (k[q].is(":radio") && !k[q].is(":checked")) {
                        continue
                    }
                    u = k[q].val();
                    s[k[q].attr("name")] = u
                }
            }
            l.find("span.error")[r ? "hide" : "show"]().end();
            l.find("span.success")[r ? "show" : "hide"]().end();
            if (r) {
                i(s);
                j.hide()
            } else {
                j.show()
            }
            return false
        }

        function i(q) {
            jQuery.post(d || l.attr("action"), {
                action: "peThemeContactForm",
                data: q
            }, p)
        }

        function p(q) {
            if (q.success) {
                for (var r = 0; r < k.length; r++) {
                    k[r].val("")
                }
                h.show();
                j.hide()
            } else {
                j.show();
                h.hide()
            }
        }
        c.extend(this, {
            destroy: function() {
                l.data("peThemeContactForm", null);
                l = undefined
            }
        });
        g()
    }
    c.fn.peThemeContactForm = function(e) {
        var f = this.data("peThemeContactForm");
        if (f) {
            return f
        }
        e = c.extend(true, {}, c.pixelentity.peThemeContactForm.conf, e);
        this.each(function() {
            var g = c(this);
            f = new a(g, e);
            g.data("peThemeContactForm", f)
        });
        return e.api ? f : this
    }
}(jQuery));
(function(c) {
    c.pixelentity = c.pixelentity || {};
    var b = [];
    var d = [];

    function a() {
        function e(g, h) {
            b.push({
                check: g,
                widget: h
            })
        }

        function f(m, g) {
            if (m.data("peWidgets")) {
                return false
            }
            var l = false;
            m.data("peWidgets", true);
            var o = b.length;
            var k;
            var j;
            for (var h = 0; h < o; h++) {
                k = b[h];
                j = k.check(m, g);
                if (j) {
                    l = true;
                    if (k.widget) {
                        d.push(new k.widget(j))
                    }
                }
            }
            return l
        }
        c.extend(this, {
            add: e,
            build: f
        })
    }
    c.pixelentity.widgets = new a()
}(jQuery));
(function(b) {
    function a(d) {
        var c = d.find(".peThemeContactForm");
        if (c.length > 0) {
            c.peThemeContactForm()
        }
        return false
    }
    b.pixelentity.widgets.add(a)
}(jQuery));
jQuery(window).load(function() {
    jQuery(".services-slider").carouFredSel({
        auto: false,
        swipe: {
            onTouch: true,
            onMouse: false
        },
        prev: ".services-prev",
        next: ".services-next",
        responsive: true,
        width: "100%",
        height: "variable",
        scroll: 1,
        items: {
            width: 360,
            height: "variable",
            visible: {
                min: 1,
                max: 3
            }
        }
    })
});
(function(a) {
    a(function() {
        a(".social-footer.transparent a i").addClass("big white").removeClass("light");
        if (a(".peThemeContactForm").length > 0) {
            a(".peThemeContactForm").peThemeContactForm()
        }
        a(".row-fluid.post-pagination").addClass("row");
        a(".post-pagination .span12").addClass("twelve columns");
        a(".post-pagination").before('<div class="clearfix"></div>');
        var b = a(".menu-wrap");
        b.find("> a.smoothscroll img").addClass("menu-logo");
        b.children("ul").addClass("menu");
        a(window).load(function() {
            a("#status").fadeOut();
            a("#preloader").delay(350).fadeOut("slow");
            a("body").delay(350).css({
                "overflow-y": "visible"
            })
        });
        a(".back-to-top").each(function() {
            var d = a(this),
                c = a("body > section").first();
            if (!c.length) {
                retun
            }
            d.attr("href", "#" + c.attr("id"))
        });
        a(".popup-gallery").each(function() {
            var c = a(this);
            c.magnificPopup({
                type: "image",
                delegate: "a",
                gallery: {
                    enabled: true
                },
                fixedContentPos: false,
                fixedBgPos: false,
                mainClass: "mfp-no-margins mfp-with-zoom",
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            })
        });
        a(".popup-gallery").each(function() {
            var c = a(this);
            c.magnificPopup({
                type: "image",
                delegate: "a",
                gallery: {
                    enabled: true
                },
                fixedContentPos: false,
                fixedBgPos: false,
                mainClass: "mfp-no-margins mfp-with-zoom",
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            })
        });
        a(".dolightbox.single-gallery").each(function() {
            var c = a(this);
            c.magnificPopup({
                type: "image",
                delegate: "a",
                gallery: {
                    enabled: true
                },
                fixedContentPos: false,
                fixedBgPos: false,
                mainClass: "mfp-no-margins mfp-with-zoom",
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            })
        });
        a(".equal").children(".columns").equalizeHeight();
        a(window).resize(function() {
            a(".equal").children(".columns").equalizeHeight();
            setTimeout(function() {
                a(".equal").children(".columns").equalizeHeight()
            }, 100);
            setTimeout(function() {
                a(".equal").children(".columns").equalizeHeight()
            }, 400);
            setTimeout(function() {
                a(".equal").children(".columns").equalizeHeight()
            }, 1400);
            setTimeout(function() {
                a(".equal").children(".columns").equalizeHeight()
            }, 2400)
        });
        setTimeout(function() {
            a(window).trigger("resize scroll")
        }, 1000);
        setTimeout(function() {
            a(window).trigger("resize scroll")
        }, 3000);
        a(window).load(function() {
            a(".equal").children(".columns").equalizeHeight();
            a(window).trigger("resize scroll");
            setTimeout(function() {
                a(".equal").children(".columns").equalizeHeight()
            }, 1000);
            setTimeout(function() {
                a(".equal").children(".columns").equalizeHeight()
            }, 1300)
        });
        a(".sub-menu").addClass("dropdown-menu")
    })
})(jQuery);
(function(l) {
    var f, e;
    var c = l(window),
        d;
    var y = l("html");
    var n;
    var s;
    var p;
    var o = 0,
        w = 0;
    var x;
    var g = false,
        b = false;
    var z = false;
    var j;
    var m;
    var t = 0;
    var r, u, q, i, v;
    var a;
    window.peGmapStyle = [{
        stylers: [{
            saturation: -100
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            lightness: 100
        }, {
            visibility: "simplified"
        }]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }];

    function k() {
        return this.href.match(/\.(jpg|jpeg|png|gif)$/i)
    }
    pixelentity.classes.Controller = function() {
        var M, I;
        var G;
        var A;

        function K(h, P) {
            P = l(P);
            P.attr("data-target", "flare")
        }

        function J() {
            var h = s.filter(this).parent();
            if (h.hasClass("dropdown-on")) {
                h.removeClass("dropdown-on").find(".dropdown-on").removeClass("dropdown-on")
            } else {
                h.addClass("dropdown-on")
            }
            h.siblings(".dropdown-on").removeClass("dropdown-on").find(".dropdown-on").removeClass("dropdown-on");
            return false
        }

        function B(h) {
            var T = e.eq(h);
            var Q, S = T.find("ul.sub-menu").removeClass("rightAlign");
            var R, P = T.width() + T.parent().offset().left;
            if (P >= M) {
                T.addClass("rightAlign")
            } else {
                for (R = 0; R < S.length; R++) {
                    Q = S.eq(R);
                    if (P + Q.width() > M) {
                        Q.addClass("rightAlign")
                    }
                }
            }
        }

        function D() {
            a.find(".peNeedResize").triggerHandler("resize")
        }

        function E() {
            M = c.width();
            I = window.innerHeight ? window.innerHeight : c.height();
            if (a.length > 0) {
                a.height(Math.max(300, I - u.outerHeight() - r.outerHeight()));
                D();
                setTimeout(D, 500);
                if (l.browser.msie && l.browser.version < 10) {
                    setTimeout(D, 1500);
                    setTimeout(D, 2000);
                    setTimeout(D, 2000)
                }
            }
            e.removeClass("rightAlign").each(B)
        }

        function O(h) {
            j.filter(h.currentTarget).find("div.scalable img").addClass("animated")
        }

        function F(P) {
            var h = j.eq(P);
            var R, S = h.find("span.cell-title");
            var Q = false;
            R = S.find("> a");
            if (R.length > 0) {
                Q = true;
                S.html("<span>" + R.html() + "</span>");
                R.addClass("pe-over-icon pe-over-icon-link").html('<i class="icon-info"></i>');
                S.addClass("has-icons").append(R)
            }
            R = h.find(".scalable > a[data-target=flare]");
            if (R.length > 0) {
                R = R.clone(true);
                R.addClass("pe-over-icon pe-over-icon-lb").html('<i class="icon-plus"></i>');
                if (!Q) {
                    S.wrapInner("<span></span>");
                    Q = true
                }
                S.addClass("has-icons").append(R)
            }
            if (Q) {
                S.wrapInner("<span></span>")
            }
        }

        function N(h) {
            var P = m.eq(h);
            P.prepend('<span class="cell-title"><span><i class="icon-%0"></i></span></span>'.format(P.attr("data-target") == "flare" ? "plus" : "info"))
        }

        function H(Q) {
            var h = m.filter(Q.currentTarget);
            var P = h.find("img");
            P.addClass("animated");
            h[Q.type === "mouseenter" ? "addClass" : "removeClass"]("pe-status-over")
        }

        function L(h) {
            if (c.scrollTop() > 45) {
                n.addClass("sticky-header")
            } else {
                n.removeClass("sticky-header")
            }
        }

        function C() {
            n = l("body");
            i = l.pixelentity.browser.mobile;
            if (i) {
                l("a[data-rel='tooltip']").removeAttr("data-rel");
                y.removeClass("desktop").addClass("mobile");
                if (l.pixelentity.browser.android) {
                    y.addClass("android")
                }
            } else {
                y.addClass("desktop").removeClass("mobile")
            }
            u = l(".site-wrapper > .sticky-bar");
            r = l(".site-wrapper > .footer");
            a = l(".site-wrapper > .site-body > .pe-full-page");
            e = u.find("ul.nav > li > ul");
            var h = u.find("ul:eq(0) > li > a ");
            f = l('a[data-target!="flare"]').not("a[data-toggle]");
            f.filter(k).each(K);
            if (!i) {
                m = l("a.over-effect");
                m.each(N);
                m.on("mouseenter mouseleave", H)
            }
            s = u.find("li.dropdown > a");
            if (i) {
                s.on("touchstart", J)
            }
            l("a.peVideo").attr({
                "data-autoplay": "disabled"
            });
            var P = l("span.cell-title");
            P.each(function() {
                var Q = P.filter(this);
                if (Q.next().find("> a").length > 0) {
                    Q.addClass("show-on-top")
                }
            });
            l("img[data-original]:not(img.pe-lazyload-inited)").peLazyLoading();
            if (i) {
                setTimeout(function() {
                    c.triggerHandler("pe-lazyloading-refresh")
                }, 100)
            } else {
                j = l(".peIsotopeGrid .peIsotopeItem");
                j.each(F).one("mouseenter", O)
            }
            c.resize(E);
            c.on("load", E);
            E()
        }
        l.extend(this, {
            start: C
        })
    }
}(jQuery));
jQuery(function(a) {
    if (window.peFallBackPlayer) {
        a.pixelentity.video.fallBackPlayer = decodeURIComponent(window.peFallBackPlayer.url)
    }
    pixelentity.controller = new pixelentity.classes.Controller();
    pixelentity.controller.start()
});
