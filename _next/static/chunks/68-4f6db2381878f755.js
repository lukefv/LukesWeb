(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[68], {
    1516: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getDomainLocale = function(e, t, n, r) {
            return !1
        }
        ,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5569: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2648).Z
          , o = n(7273).Z
          , i = r(n(7294))
          , a = n(4532)
          , l = n(3353)
          , u = n(1410)
          , s = n(9064)
          , c = n(370)
          , d = n(9955)
          , f = n(4224)
          , p = n(508)
          , v = n(1516)
          , y = n(4266);
        let h = new Set;
        function m(e, t, n, r, o) {
            if (o || l.isLocalURL(t)) {
                if (!r.bypassPrefetchedCheck) {
                    let o = void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0
                      , i = t + "%" + n + "%" + o;
                    if (h.has(i))
                        return;
                    h.add(i)
                }
                Promise.resolve(e.prefetch(t, n, r)).catch(e=>{}
                )
            }
        }
        function g(e) {
            return "string" == typeof e ? e : u.formatUrl(e)
        }
        let b = i.default.forwardRef(function(e, t) {
            let n, r;
            let {href: u, as: h, children: b, prefetch: C, passHref: _, replace: E, shallow: x, scroll: w, locale: k, onClick: T, onMouseEnter: S, onTouchStart: j, legacyBehavior: O=!1} = e
              , R = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            n = b,
            O && ("string" == typeof n || "number" == typeof n) && (n = i.default.createElement("a", null, n));
            let D = !1 !== C
              , L = i.default.useContext(d.RouterContext)
              , M = i.default.useContext(f.AppRouterContext)
              , P = null != L ? L : M
              , N = !L
              , {href: A, as: q} = i.default.useMemo(()=>{
                if (!L) {
                    let e = g(u);
                    return {
                        href: e,
                        as: h ? g(h) : e
                    }
                }
                let[e,t] = a.resolveHref(L, u, !0);
                return {
                    href: e,
                    as: h ? a.resolveHref(L, h) : t || e
                }
            }
            , [L, u, h])
              , B = i.default.useRef(A)
              , I = i.default.useRef(q);
            O && (r = i.default.Children.only(n));
            let H = O ? r && "object" == typeof r && r.ref : t
              , [U,z,K] = p.useIntersection({
                rootMargin: "200px"
            })
              , X = i.default.useCallback(e=>{
                (I.current !== q || B.current !== A) && (K(),
                I.current = q,
                B.current = A),
                U(e),
                H && ("function" == typeof H ? H(e) : "object" == typeof H && (H.current = e))
            }
            , [q, H, A, K, U]);
            i.default.useEffect(()=>{
                P && z && D && m(P, A, q, {
                    locale: k
                }, N)
            }
            , [q, A, z, k, D, null == L ? void 0 : L.locale, P, N]);
            let Y = {
                ref: X,
                onClick(e) {
                    O || "function" != typeof T || T(e),
                    O && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    P && !e.defaultPrevented && function(e, t, n, r, o, a, u, s, c, d) {
                        let {nodeName: f} = e.currentTarget
                          , p = "A" === f.toUpperCase();
                        if (p && (function(e) {
                            let t = e.currentTarget
                              , n = t.getAttribute("target");
                            return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !c && !l.isLocalURL(n)))
                            return;
                        e.preventDefault();
                        let v = ()=>{
                            "beforePopState"in t ? t[o ? "replace" : "push"](n, r, {
                                shallow: a,
                                locale: s,
                                scroll: u
                            }) : t[o ? "replace" : "push"](r || n, {
                                forceOptimisticNavigation: !d
                            })
                        }
                        ;
                        c ? i.default.startTransition(v) : v()
                    }(e, P, A, q, E, x, w, k, N, D)
                },
                onMouseEnter(e) {
                    O || "function" != typeof S || S(e),
                    O && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    P && (D || !N) && m(P, A, q, {
                        locale: k,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, N)
                },
                onTouchStart(e) {
                    O || "function" != typeof j || j(e),
                    O && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    P && (D || !N) && m(P, A, q, {
                        locale: k,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, N)
                }
            };
            if (s.isAbsoluteUrl(q))
                Y.href = q;
            else if (!O || _ || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== k ? k : null == L ? void 0 : L.locale
                  , t = (null == L ? void 0 : L.isLocaleDomain) && v.getDomainLocale(q, e, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales);
                Y.href = t || y.addBasePath(c.addLocale(q, e, null == L ? void 0 : L.defaultLocale))
            }
            return O ? i.default.cloneElement(r, Y) : i.default.createElement("a", Object.assign({}, R, Y), n)
        });
        t.default = b,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    508: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            let {rootRef: t, rootMargin: n, disabled: u} = e
              , s = u || !i
              , [c,d] = r.useState(!1)
              , f = r.useRef(null)
              , p = r.useCallback(e=>{
                f.current = e
            }
            , []);
            r.useEffect(()=>{
                if (i) {
                    if (s || c)
                        return;
                    let e = f.current;
                    if (e && e.tagName) {
                        let r = function(e, t, n) {
                            let {id: r, observer: o, elements: i} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = l.find(e=>e.root === n.root && e.margin === n.margin);
                                if (r && (t = a.get(r)))
                                    return t;
                                let o = new Map
                                  , i = new IntersectionObserver(e=>{
                                    e.forEach(e=>{
                                        let t = o.get(e.target)
                                          , n = e.isIntersecting || e.intersectionRatio > 0;
                                        t && n && t(n)
                                    }
                                    )
                                }
                                ,e);
                                return t = {
                                    id: n,
                                    observer: i,
                                    elements: o
                                },
                                l.push(n),
                                a.set(n, t),
                                t
                            }(n);
                            return i.set(e, t),
                            o.observe(e),
                            function() {
                                if (i.delete(e),
                                o.unobserve(e),
                                0 === i.size) {
                                    o.disconnect(),
                                    a.delete(r);
                                    let e = l.findIndex(e=>e.root === r.root && e.margin === r.margin);
                                    e > -1 && l.splice(e, 1)
                                }
                            }
                        }(e, e=>e && d(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        });
                        return r
                    }
                } else if (!c) {
                    let e = o.requestIdleCallback(()=>d(!0));
                    return ()=>o.cancelIdleCallback(e)
                }
            }
            , [s, n, t, c, f.current]);
            let v = r.useCallback(()=>{
                d(!1)
            }
            , []);
            return [p, c, v]
        }
        ;
        var r = n(7294)
          , o = n(29);
        let i = "function" == typeof IntersectionObserver
          , a = new Map
          , l = [];
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    9008: function(e, t, n) {
        e.exports = n(2636)
    },
    1664: function(e, t, n) {
        e.exports = n(5569)
    },
    7005: function(e, t, n) {
        var r = n(7294)
          , o = r && "object" == typeof r && "default"in r ? r : {
            default: r
        }
          , i = function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        !function(e) {
            if (!e || "undefined" == typeof window)
                return;
            let t = document.createElement("style");
            t.setAttribute("type", "text/css"),
            t.innerHTML = e,
            document.head.appendChild(t)
        }('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'),
        t.Z = function(e) {
            var t, n, a, l, u = e.style, s = e.className, c = e.play, d = void 0 === c || c, f = e.pauseOnHover, p = void 0 !== f && f, v = e.pauseOnClick, y = void 0 !== v && v, h = e.direction, m = void 0 === h ? "left" : h, g = e.speed, b = void 0 === g ? 20 : g, C = e.delay, _ = void 0 === C ? 0 : C, E = e.loop, x = void 0 === E ? 0 : E, w = e.gradient, k = e.gradientColor, T = void 0 === k ? [255, 255, 255] : k, S = e.gradientWidth, j = void 0 === S ? 200 : S, O = e.onFinish, R = e.onCycleComplete, D = e.children, L = r.useState(0), M = L[0], P = L[1], N = r.useState(0), A = N[0], q = N[1], B = r.useState(!1), I = B[0], H = B[1], U = r.useRef(null), z = r.useRef(null);
            r.useEffect(function() {
                if (I) {
                    var e = function() {
                        z.current && U.current && (P(U.current.getBoundingClientRect().width),
                        q(z.current.getBoundingClientRect().width))
                    };
                    return e(),
                    window.addEventListener("resize", e),
                    function() {
                        window.removeEventListener("resize", e)
                    }
                }
            }, [I]),
            r.useEffect(function() {
                H(!0)
            }, []);
            var K = "rgba(" + T[0] + ", " + T[1] + ", " + T[2]
              , X = A < M ? M / b : A / b;
            return o.default.createElement(r.Fragment, null, I ? o.default.createElement("div", {
                ref: U,
                style: i(i({}, void 0 === u ? {} : u), ((t = {})["--pause-on-hover"] = !d || p ? "paused" : "running",
                t["--pause-on-click"] = !d || p && !y || y ? "paused" : "running",
                t)),
                className: (void 0 === s ? "" : s) + " marquee-container"
            }, (void 0 === w || w) && o.default.createElement("div", {
                style: ((n = {})["--gradient-color"] = K + ", 1), " + K + ", 0)",
                n["--gradient-width"] = "number" == typeof j ? j + "px" : j,
                n),
                className: "overlay"
            }), o.default.createElement("div", {
                ref: z,
                style: ((a = {})["--play"] = d ? "running" : "paused",
                a["--direction"] = "left" === m ? "normal" : "reverse",
                a["--duration"] = X + "s",
                a["--delay"] = _ + "s",
                a["--iteration-count"] = x ? "" + x : "infinite",
                a),
                className: "marquee",
                onAnimationIteration: R,
                onAnimationEnd: O
            }, D), o.default.createElement("div", {
                style: ((l = {})["--play"] = d ? "running" : "paused",
                l["--direction"] = "left" === m ? "normal" : "reverse",
                l["--duration"] = X + "s",
                l["--delay"] = _ + "s",
                l["--iteration-count"] = x ? "" + x : "infinite",
                l),
                className: "marquee",
                "aria-hidden": "true"
            }, D)) : null)
        }
    },
    2637: function(e, t, n) {
        "use strict";
        var r = n(5893)
          , o = n(7294)
          , i = function() {
            return (i = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function a(e, t) {
            var n, r;
            switch (t.type) {
            case "TYPE":
                return i(i({}, e), {
                    speed: t.speed,
                    text: null === (n = t.payload) || void 0 === n ? void 0 : n.substring(0, e.text.length + 1)
                });
            case "DELAY":
                return i(i({}, e), {
                    speed: t.payload
                });
            case "DELETE":
                return i(i({}, e), {
                    speed: t.speed,
                    text: null === (r = t.payload) || void 0 === r ? void 0 : r.substring(0, e.text.length - 1)
                });
            case "COUNT":
                return i(i({}, e), {
                    count: e.count + 1
                });
            default:
                return e
            }
        }
        var l = function(e) {
            var t = e.words
              , n = void 0 === t ? ["Hello World!", "This is", "a simple Typewriter"] : t
              , r = e.loop
              , i = void 0 === r ? 1 : r
              , l = e.typeSpeed
              , u = void 0 === l ? 80 : l
              , s = e.deleteSpeed
              , c = void 0 === s ? 50 : s
              , d = e.delaySpeed
              , f = void 0 === d ? 1500 : d
              , p = e.onLoopDone
              , v = e.onType
              , y = e.onDelete
              , h = e.onDelay
              , m = o.useReducer(a, {
                speed: u,
                text: "",
                count: 0
            })
              , g = m[0]
              , b = g.speed
              , C = g.text
              , _ = g.count
              , E = m[1]
              , x = o.useRef(0)
              , w = o.useRef(!1)
              , k = o.useRef(!1)
              , T = o.useRef(!1)
              , S = o.useRef(!1)
              , j = o.useCallback(function() {
                var e = _ % n.length
                  , t = n[e];
                k.current ? (E({
                    type: "DELETE",
                    payload: t,
                    speed: c
                }),
                "" === C && (k.current = !1,
                E({
                    type: "COUNT"
                }))) : (E({
                    type: "TYPE",
                    payload: t,
                    speed: u
                }),
                T.current = !0,
                C === t && (E({
                    type: "DELAY",
                    payload: f
                }),
                T.current = !1,
                S.current = !0,
                setTimeout(function() {
                    S.current = !1,
                    k.current = !0
                }, f),
                i > 0 && (x.current += 1,
                x.current / n.length === i && (S.current = !1,
                w.current = !0)))),
                T.current && v && v(x.current),
                k.current && y && y(),
                S.current && h && h()
            }, [_, f, c, i, u, n, C, v, y, h]);
            return o.useEffect(function() {
                var e = setTimeout(j, b);
                return w.current && clearTimeout(e),
                function() {
                    return clearTimeout(e)
                }
            }, [j, b]),
            o.useEffect(function() {
                p && w.current && p()
            }, [p]),
            [C, {
                isType: T.current,
                isDelay: S.current,
                isDelete: k.current,
                isDone: w.current
            }]
        };
        !function(e, t) {
            void 0 === t && (t = {});
            var n = t.insertAt;
            if (e && "undefined" != typeof document) {
                var r = document.head || document.getElementsByTagName("head")[0]
                  , o = document.createElement("style");
                o.type = "text/css",
                "top" === n && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o),
                o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
            }
        }(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");
        var u = o.memo(function(e) {
            var t = e.cursorBlinking
              , n = e.cursorStyle
              , o = e.cursorColor;
            return r.jsx("span", i({
                style: {
                    color: void 0 === o ? "inherit" : o
                },
                className: "".concat("styles-module_blinkingCursor__yugAC", " ").concat(void 0 === t || t ? "styles-module_blinking__9VXRT" : "")
            }, {
                children: void 0 === n ? "|" : n
            }))
        });
        t.rf = function(e) {
            var t = e.words
              , n = e.loop
              , o = e.typeSpeed
              , i = e.deleteSpeed
              , a = e.delaySpeed
              , s = e.cursor
              , c = e.cursorStyle
              , d = e.cursorColor
              , f = e.cursorBlinking
              , p = l({
                words: void 0 === t ? ["Hello World!", "This is", "a simple Typewriter"] : t,
                loop: void 0 === n ? 1 : n,
                typeSpeed: void 0 === o ? 80 : o,
                deleteSpeed: void 0 === i ? 50 : i,
                delaySpeed: void 0 === a ? 1500 : a,
                onLoopDone: e.onLoopDone,
                onType: e.onType,
                onDelay: e.onDelay,
                onDelete: e.onDelete
            })[0];
            return r.jsxs(r.Fragment, {
                children: [r.jsx("span", {
                    children: p
                }), void 0 !== s && s && r.jsx(u, {
                    cursorStyle: void 0 === c ? "|" : c,
                    cursorColor: void 0 === d ? "inherit" : d,
                    cursorBlinking: void 0 === f || f
                })]
            })
        }
    }
}]);
