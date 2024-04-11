(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    8312: function(e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return s(118)
        }
        ])
    },
    118: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return A
            }
        });
        var l = s(5893)
          , i = s(9008)
          , a = s.n(i)
          , n = s(7294);
        let x = ()=>(0,
        l.jsxs)("div", {
            className: "bouncing-loader",
            children: [(0,
            l.jsx)("div", {}), (0,
            l.jsx)("div", {}), (0,
            l.jsx)("div", {})]
        })
          , r = ()=>{
            let e = n.useRef("")
              , [t,s] = n.useState(!1)
              , [i,a] = n.useState(null)
              , [r,o] = n.useState(!1)
              , c = n.useCallback(async()=>{
                if (!t && !r && "" !== e.current) {
                    s(!0);
                    try {
                        let t = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: e.current
                            })
                        }
                          , s = await fetch("https://2zfkra38xa.execute-api.us-west-2.amazonaws.com/prod/platformemailsignup", t)
                          , l = await s.json();
                        "success" === l.msg ? a("Thank you for signing up! We'll be in touch soon.") : "email_already_entered" === l.msg ? a("You've already signed up! We'll be in touch soon.") : (l.msg = "email_invalid",
                        a("Please enter a valid email address."))
                    } catch (e) {
                        console.error(e),
                        a("Something went wrong. Please try again.")
                    }
                    o(!0),
                    setTimeout(()=>{
                        o(()=>!1),
                        a(()=>null)
                    }
                    , 3500),
                    s(!1)
                }
            }
            , [t, r, a, o]);
            return (0,
            l.jsxs)("div", {
                className: "flex flex-col justify-center mt-[24px] sm:mt-[50px] mx-[20px]",
                children: [(0,
                l.jsxs)("div", {
                    className: "flex flex-col justify-center",
                    children: [(0,
                    l.jsx)("img", {
                        src: "/astro-logo.svg",
                        alt: "logo",
                        style: {
                            width: "full",
                            height: 60
                        }
                    }), (0,
                    l.jsx)("p", {
                        className: "text-white flex font-display tracking-widest m-auto text-[14px] mt-[20px]",
                        children: "lukesecrets"
                    })]
                
                }), i && r && (0,
                l.jsx)("div", {
                    className: "w-full text-center text-white h-[35px] mt-[12px]",
                    children: i
                })]
            })
        }
        ;
        var o = s(1664)
          , c = s.n(o);
        let d = ()=>(0,
        l.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0,
            l.jsx)("path", {
                d: "M20.317 4.15559C18.7873 3.45371 17.147 2.93659 15.4319 2.64042C15.4007 2.6347 15.3695 2.64899 15.3534 2.67756C15.1424 3.05277 14.9087 3.54227 14.7451 3.92701C12.9004 3.65084 11.0652 3.65084 9.25832 3.92701C9.09465 3.53372 8.85248 3.05277 8.64057 2.67756C8.62449 2.64994 8.59328 2.63566 8.56205 2.64042C6.84791 2.93564 5.20756 3.45276 3.67693 4.15559C3.66368 4.1613 3.65233 4.17083 3.64479 4.18321C0.533392 8.83157 -0.31895 13.3657 0.0991801 17.8436C0.101072 17.8655 0.11337 17.8864 0.130398 17.8997C2.18321 19.4073 4.17171 20.3225 6.12328 20.9291C6.15451 20.9387 6.18761 20.9272 6.20748 20.9015C6.66913 20.2711 7.08064 19.6063 7.43348 18.9073C7.4543 18.8664 7.43442 18.8178 7.39186 18.8016C6.73913 18.554 6.1176 18.2521 5.51973 17.9093C5.47244 17.8817 5.46865 17.814 5.51216 17.7816C5.63797 17.6874 5.76382 17.5893 5.88396 17.4902C5.90569 17.4721 5.93598 17.4683 5.96153 17.4797C9.88928 19.273 14.1415 19.273 18.023 17.4797C18.0485 17.4674 18.0788 17.4712 18.1015 17.4893C18.2216 17.5883 18.3475 17.6874 18.4742 17.7816C18.5177 17.814 18.5149 17.8817 18.4676 17.9093C17.8697 18.2588 17.2482 18.554 16.5945 18.8007C16.552 18.8169 16.533 18.8664 16.5538 18.9073C16.9143 19.6054 17.3258 20.2701 17.7789 20.9006C17.7978 20.9272 17.8319 20.9387 17.8631 20.9291C19.8241 20.3225 21.8126 19.4073 23.8654 17.8997C23.8834 17.8864 23.8948 17.8664 23.8967 17.8445C24.3971 12.6676 23.0585 8.17065 20.3482 4.18415C20.3416 4.17083 20.3303 4.1613 20.317 4.15559ZM8.02002 15.117C6.8375 15.117 5.86313 14.0314 5.86313 12.6981C5.86313 11.3648 6.8186 10.2791 8.02002 10.2791C9.23087 10.2791 10.1958 11.3743 10.1769 12.6981C10.1769 14.0314 9.22141 15.117 8.02002 15.117ZM15.9947 15.117C14.8123 15.117 13.8379 14.0314 13.8379 12.6981C13.8379 11.3648 14.7933 10.2791 15.9947 10.2791C17.2056 10.2791 18.1705 11.3743 18.1516 12.6981C18.1516 14.0314 17.2056 15.117 15.9947 15.117Z",
                fill: "white"
            })
        })
          , p = ()=>(0,
        l.jsxs)("svg", {
            width: "25",
            height: "24",
            viewBox: "0 0 25 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0,
            l.jsxs)("g", {
                clipPath: "url(#clip0_129_3482)",
                children: [(0,
                l.jsx)("path", {
                    d: "M12.6799 2.16094C15.8862 2.16094 16.2659 2.175 17.5268 2.23125C18.6987 2.28281 19.3315 2.47969 19.7534 2.64375C20.3112 2.85938 20.7143 3.12188 21.1315 3.53906C21.5534 3.96094 21.8112 4.35938 22.0268 4.91719C22.1909 5.33906 22.3877 5.97656 22.4393 7.14375C22.4956 8.40937 22.5096 8.78906 22.5096 11.9906C22.5096 15.1969 22.4956 15.5766 22.4393 16.8375C22.3877 18.0094 22.1909 18.6422 22.0268 19.0641C21.8112 19.6219 21.5487 20.025 21.1315 20.4422C20.7096 20.8641 20.3112 21.1219 19.7534 21.3375C19.3315 21.5016 18.694 21.6984 17.5268 21.75C16.2612 21.8062 15.8815 21.8203 12.6799 21.8203C9.47368 21.8203 9.094 21.8062 7.83306 21.75C6.66118 21.6984 6.02837 21.5016 5.60649 21.3375C5.04868 21.1219 4.64556 20.8594 4.22837 20.4422C3.80649 20.0203 3.54868 19.6219 3.33306 19.0641C3.16899 18.6422 2.97212 18.0047 2.92056 16.8375C2.86431 15.5719 2.85024 15.1922 2.85024 11.9906C2.85024 8.78438 2.86431 8.40469 2.92056 7.14375C2.97212 5.97187 3.16899 5.33906 3.33306 4.91719C3.54868 4.35938 3.81118 3.95625 4.22837 3.53906C4.65024 3.11719 5.04868 2.85938 5.60649 2.64375C6.02837 2.47969 6.66587 2.28281 7.83306 2.23125C9.094 2.175 9.47368 2.16094 12.6799 2.16094ZM12.6799 0C9.42212 0 9.01431 0.0140625 7.73462 0.0703125C6.45962 0.126563 5.58306 0.332812 4.82368 0.628125C4.03149 0.9375 3.36118 1.34531 2.69556 2.01562C2.02524 2.68125 1.61743 3.35156 1.30806 4.13906C1.01274 4.90313 0.806494 5.775 0.750244 7.05C0.693994 8.33437 0.679932 8.74219 0.679932 12C0.679932 15.2578 0.693994 15.6656 0.750244 16.9453C0.806494 18.2203 1.01274 19.0969 1.30806 19.8563C1.61743 20.6484 2.02524 21.3188 2.69556 21.9844C3.36118 22.65 4.03149 23.0625 4.81899 23.3672C5.58306 23.6625 6.45493 23.8687 7.72993 23.925C9.00962 23.9812 9.41743 23.9953 12.6752 23.9953C15.9331 23.9953 16.3409 23.9812 17.6206 23.925C18.8956 23.8687 19.7721 23.6625 20.5315 23.3672C21.319 23.0625 21.9893 22.65 22.6549 21.9844C23.3206 21.3188 23.7331 20.6484 24.0377 19.8609C24.3331 19.0969 24.5393 18.225 24.5956 16.95C24.6518 15.6703 24.6659 15.2625 24.6659 12.0047C24.6659 8.74688 24.6518 8.33906 24.5956 7.05938C24.5393 5.78438 24.3331 4.90781 24.0377 4.14844C23.7424 3.35156 23.3346 2.68125 22.6643 2.01562C21.9987 1.35 21.3284 0.9375 20.5409 0.632812C19.7768 0.3375 18.9049 0.13125 17.6299 0.075C16.3456 0.0140625 15.9377 0 12.6799 0Z",
                    fill: "white"
                }), (0,
                l.jsx)("path", {
                    d: "M12.6799 5.83594C9.27681 5.83594 6.51587 8.59688 6.51587 12C6.51587 15.4031 9.27681 18.1641 12.6799 18.1641C16.0831 18.1641 18.844 15.4031 18.844 12C18.844 8.59688 16.0831 5.83594 12.6799 5.83594ZM12.6799 15.9984C10.4721 15.9984 8.68149 14.2078 8.68149 12C8.68149 9.79219 10.4721 8.00156 12.6799 8.00156C14.8877 8.00156 16.6784 9.79219 16.6784 12C16.6784 14.2078 14.8877 15.9984 12.6799 15.9984Z",
                    fill: "white"
                }), (0,
                l.jsx)("path", {
                    d: "M20.5268 5.59214C20.5268 6.38902 19.8799 7.0312 19.0877 7.0312C18.2909 7.0312 17.6487 6.38433 17.6487 5.59214C17.6487 4.79526 18.2956 4.15308 19.0877 4.15308C19.8799 4.15308 20.5268 4.79995 20.5268 5.59214Z",
                    fill: "white"
                })]
            }), (0,
            l.jsx)("defs", {
                children: (0,
                l.jsx)("clipPath", {
                    id: "clip0_129_3482",
                    children: (0,
                    l.jsx)("rect", {
                        width: "24",
                        height: "24",
                        fill: "white",
                        transform: "translate(0.679932)"
                    })
                })
            })]
        })
          , h = ()=>(0,
        l.jsx)("svg", {
            width: "22",
            height: "24",
            viewBox: "0 0 22 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0,
            l.jsx)("path", {
                d: "M17.2002 3.76C16.2551 2.7195 15.7342 1.38324 15.7346 0H11.4622V16.5333C11.4292 17.428 11.0375 18.2755 10.3696 18.8973C9.70161 19.519 8.8095 19.8665 7.88112 19.8667C5.91775 19.8667 4.28622 18.32 4.28622 16.4C4.28622 14.1067 6.58143 12.3867 8.94577 13.0933V8.88C4.17561 8.26667 0 11.84 0 16.4C0 20.84 3.81612 24 7.8673 24C12.2088 24 15.7346 20.6 15.7346 16.4V8.01333C17.4671 9.21313 19.5471 9.85686 21.68 9.85333V5.73333C21.68 5.73333 19.0806 5.85333 17.2002 3.76Z",
                fill: "white"
            })
        })
          , m = ()=>(0,
        l.jsxs)("svg", {
            width: "25",
            height: "24",
            viewBox: "0 0 25 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0,
            l.jsx)("g", {
                clipPath: "url(#clip0_129_3481)",
                children: (0,
                l.jsx)("path", {
                    d: "M8.23021 21.75C17.2846 21.75 22.2383 14.2468 22.2383 7.74191C22.2383 7.53097 22.2336 7.31534 22.2243 7.10441C23.1879 6.40751 24.0195 5.5443 24.6801 4.55534C23.7826 4.95465 22.8297 5.21543 21.854 5.32878C22.8813 4.71295 23.6506 3.74552 24.0191 2.60581C23.0526 3.1786 21.9956 3.58266 20.8935 3.80066C20.1509 3.01161 19.169 2.48916 18.0997 2.3141C17.0304 2.13903 15.9332 2.3211 14.9778 2.83214C14.0223 3.34319 13.2619 4.15475 12.8139 5.14136C12.3659 6.12796 12.2555 7.23466 12.4996 8.29034C10.5425 8.19214 8.62799 7.68375 6.88004 6.79814C5.13208 5.91254 3.58975 4.66948 2.35302 3.14956C1.72445 4.23329 1.53211 5.51569 1.81508 6.73614C2.09806 7.95658 2.83512 9.02349 3.87646 9.72003C3.09468 9.69521 2.33003 9.48473 1.64568 9.10597V9.16691C1.64498 10.3042 2.03815 11.4066 2.75836 12.2868C3.47858 13.167 4.48138 13.7706 5.5963 13.995C4.87211 14.1932 4.11204 14.222 3.3749 14.0794C3.68951 15.0575 4.30163 15.9129 5.12582 16.5264C5.95002 17.1398 6.94517 17.4806 7.9724 17.5013C6.22848 18.8712 4.07423 19.6142 1.85662 19.6107C1.46334 19.6101 1.07045 19.586 0.680054 19.5385C2.93291 20.9838 5.55358 21.7514 8.23021 21.75Z",
                    fill: "white"
                })
            }), (0,
            l.jsx)("defs", {
                children: (0,
                l.jsx)("clipPath", {
                    id: "clip0_129_3481",
                    children: (0,
                    l.jsx)("rect", {
                        width: "24",
                        height: "24",
                        fill: "white",
                        transform: "translate(0.680054)"
                    })
                })
            })]
        })
          , C = new Date().getFullYear()
          , g = ()=>{
            let e = (0,
            n.useCallback)(()=>{
                window.open("https://vyft.xyz/luke", "_blank", "noopener,noreferrer")
            }
            , []);
            return (0,
            l.jsxs)(n.Fragment, {
                children: [(0,
                l.jsx)("img", {
                    src: "/images/star2.svg",
                    alt: "star2",
                    className: "h-[50px] m-auto top-[16px] relative"
                }), (0,
                l.jsxs)("footer", {
                    className: "bg-[#10162B] mx-[40px] mb-[40px] pt-10 pb-10 text-white px-10 flex flex-col-reverse sm:flex-row justify-between rounded-xl",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex justify-center gap-6 flex-col align-middle mx-auto sm:mx-0",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [(0,
                            l.jsx)(c(), {
                                href: "",
                                passHref: !0,
                                target: "_blank",
                                children: (0,
                                l.jsx)("span", {
                                    className: "block w-6 h-6",
                                    children: (0,
                                    l.jsx)(d, {})
                                })
                            }), (0,
                            l.jsx)(c(), {
                                href: "",
                                passHref: !0,
                                target: "_blank",
                                children: (0,
                                l.jsx)("span", {
                                    className: "block w-6 h-6",
                                    children: (0,
                                    l.jsx)(h, {})
                                })
                            }), (0,
                            l.jsx)(c(), {
                                href: "",
                                passHref: !0,
                                target: "_blank",
                                children: (0,
                                l.jsx)("span", {
                                    className: "block w-6 h-6",
                                    children: (0,
                                    l.jsx)(m, {})
                                })
                            }), (0,
                            l.jsx)(c(), {
                                href: "",
                                passHref: !0,
                                target: "_blank",
                                children: (0,
                                l.jsx)("span", {
                                    className: "block w-6 h-6",
                                    children: (0,
                                    l.jsx)(p, {})
                                })
                            })]
                        }), (0,
                        l.jsxs)("p", {
                            className: "font-text text-[14px] leading-[20px] text-center sm:text-left",
                            children: ["\xa9 ", C, " lukesecrets"]
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex flex-col sm:flex-row justify-center gap-6 mb-[24px] sm:my-auto mx-auto sm:mx-0",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "flex sm:mr-[20px] gap-4 justify-around",
                            children: [(0,
                            l.jsx)(c(), {
                                href: "",
                                passHref: !0,
                                target: "_blank",
                                className: "font-display text-[14px] underline my-auto",
                                children: "Careers"
                            }), (0,
                            l.jsx)(c(), {
                                href: "",
                                passHref: !0,
                                target: "_blank",
                                className: "font-display text-[14px] underline my-auto",
                                children: "Terms"
                            })]
                        }), (0,
                        l.jsxs)("button", {
                            onClick: e,
                            className: "flex gap-2 justify-center w-[130px] text-black px-[11px] bg-white rounded-md items-center h-[40px] font-display text-[12px]",
                            children: ["Open Studio", (0,
                            l.jsx)("img", {
                                src: "/images/button_arrow_purple.svg",
                                alt: "phone",
                                className: "h-[18px]"
                            })]
                        })]
                    })]
                })]
            })
        }
          , f = e=>{
            let {className: t, ...s} = e;
            return (0,
            l.jsx)("button", {
                ...s,
                className: "px-[11px] bg-gradient-to-r from-[#D800CD] to-[#8C76FF] outline-none border-none rounded-lg flex items-center h-[37px] text-white font-display text-[12px] leading-[15px] ".concat(t)
            })
        }
          , w = e=>{
            let {className: t, ...s} = e;
            return (0,
            l.jsx)("input", {
                ...s,
                className: "flex items-center rounded-lg outline-none px-4 h-[37px] font-text text-[12px] leading-[18px] ".concat(t)
            })
        }
        ;
        var u = s(7005);
        let j = ()=>(0,
        l.jsx)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0,
            l.jsx)("path", {
                d: "M28 19.8V16.4C29.1 15.9333 30.2253 15.5833 31.376 15.35C32.5253 15.1167 33.7333 15 35 15C35.8667 15 36.7167 15.0667 37.55 15.2C38.3833 15.3333 39.2 15.5 40 15.7V18.9C39.2 18.6 38.392 18.3753 37.576 18.226C36.7587 18.0753 35.9 18 35 18C33.7333 18 32.5167 18.1587 31.35 18.476C30.1833 18.792 29.0667 19.2333 28 19.8ZM28 30.8V27.4C29.1 26.9333 30.2253 26.5833 31.376 26.35C32.5253 26.1167 33.7333 26 35 26C35.8667 26 36.7167 26.0667 37.55 26.2C38.3833 26.3333 39.2 26.5 40 26.7V29.9C39.2 29.6 38.392 29.3753 37.576 29.226C36.7587 29.0753 35.9 29 35 29C33.7333 29 32.5167 29.15 31.35 29.45C30.1833 29.75 29.0667 30.2 28 30.8ZM28 25.3V21.9C29.1 21.4333 30.2253 21.0833 31.376 20.85C32.5253 20.6167 33.7333 20.5 35 20.5C35.8667 20.5 36.7167 20.5667 37.55 20.7C38.3833 20.8333 39.2 21 40 21.2V24.4C39.2 24.1 38.392 23.8753 37.576 23.726C36.7587 23.5753 35.9 23.5 35 23.5C33.7333 23.5 32.5167 23.6587 31.35 23.976C30.1833 24.292 29.0667 24.7333 28 25.3ZM26 34.1C27.4667 33.4 28.942 32.8747 30.426 32.524C31.9087 32.1747 33.4333 32 35 32C36.2 32 37.3753 32.1 38.526 32.3C39.6753 32.5 40.8333 32.8 42 33.2V13.4C40.9 12.9333 39.7587 12.5833 38.576 12.35C37.392 12.1167 36.2 12 35 12C33.4333 12 31.8833 12.2 30.35 12.6C28.8167 13 27.3667 13.6 26 14.4V34.1ZM24 40C22.4 38.7333 20.6667 37.75 18.8 37.05C16.9333 36.35 15 36 13 36C11.2333 36 9.38333 36.3333 7.45 37C5.51667 37.6667 3.7 38.7 2 40.1V11.1C3.46667 10.1 5.192 9.33333 7.176 8.8C9.15867 8.26667 11.1 8 13 8C14.9333 8 16.8253 8.25 18.676 8.75C20.5253 9.25 22.3 10 24 11C25.7 10 27.4753 9.25 29.326 8.75C31.1753 8.25 33.0667 8 35 8C36.9 8 38.842 8.26667 40.826 8.8C42.8087 9.33333 44.5333 10.1 46 11.1V40.1C44.3333 38.7 42.5253 37.6667 40.576 37C38.6253 36.3333 36.7667 36 35 36C33 36 31.0667 36.35 29.2 37.05C27.3333 37.75 25.6 38.7333 24 40Z",
                fill: "white"
            })
        })
          , v = ()=>(0,
        l.jsx)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 49 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0,
            l.jsx)("path", {
                d: "M20.041 42C17.841 42 15.9577 41.2167 14.391 39.65C12.8243 38.0833 12.041 36.2 12.041 34C12.041 31.8 12.8243 29.9167 14.391 28.35C15.9577 26.7833 17.841 26 20.041 26C20.8077 26 21.5157 26.0913 22.165 26.274C22.8157 26.458 23.441 26.7333 24.041 27.1V10C24.041 8.9 24.433 7.958 25.217 7.174C25.9997 6.39133 26.941 6 28.041 6H32.041C33.141 6 34.083 6.39133 34.867 7.174C35.6497 7.958 36.041 8.9 36.041 10C36.041 11.1 35.6497 12.0413 34.867 12.824C34.083 13.608 33.141 14 32.041 14H28.041V34C28.041 36.2 27.2577 38.0833 25.691 39.65C24.1243 41.2167 22.241 42 20.041 42Z",
                fill: "white"
            })
        })
          , b = ()=>(0,
        l.jsx)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 37 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0,
            l.jsx)("path", {
                d: "M31.1472 6.94509L29.1372 4.93509C28.5822 4.35009 27.6072 4.35009 27.0222 4.93509L13.5822 18.3751L17.7072 22.5001L31.1472 9.06009C31.7322 8.47509 31.7322 7.50009 31.1472 6.94509ZM10.5822 21.0001C9.38868 21.0001 8.24409 21.4742 7.40017 22.3181C6.55626 23.162 6.08215 24.3066 6.08215 25.5001C6.08215 27.4651 4.34215 28.5001 3.08215 28.5001C4.46215 30.3301 6.83215 31.5001 9.08215 31.5001C10.6735 31.5001 12.1996 30.8679 13.3248 29.7427C14.45 28.6175 15.0822 27.0914 15.0822 25.5001C15.0822 24.3066 14.608 23.162 13.7641 22.3181C12.9202 21.4742 11.7756 21.0001 10.5822 21.0001Z",
                fill: "white"
            })
        })
          , y = ()=>(0,
        l.jsxs)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 38 38",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0,
            l.jsx)("path", {
                d: "M19 27.9609C19.5304 27.9609 20.0391 27.7704 20.4142 27.4314C20.7893 27.0924 21 26.6325 21 26.1531C21 25.6736 20.7893 25.2138 20.4142 24.8747C20.0391 24.5357 19.5304 24.3452 19 24.3452C18.4696 24.3452 17.9609 24.5357 17.5858 24.8747C17.2107 25.2138 17 25.6736 17 26.1531C17 26.6325 17.2107 27.0924 17.5858 27.4314C17.9609 27.7704 18.4696 27.9609 19 27.9609Z",
                fill: "white",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), (0,
            l.jsx)("path", {
                d: "M37 10.5206V27.3226C37.0001 27.5163 36.9428 27.7065 36.8342 27.8734C36.7255 28.0403 36.5694 28.1778 36.382 28.2718L19.582 36.7071C19.4039 36.7964 19.2036 36.8432 19 36.8432C18.7964 36.8432 18.5961 36.7964 18.418 36.7071L1.618 28.2718C1.43063 28.1778 1.27451 28.0403 1.16583 27.8734C1.05716 27.7065 0.999896 27.5163 1 27.3226V10.5206C1.00025 10.3272 1.05768 10.1375 1.16634 9.9709C1.275 9.80435 1.43093 9.66707 1.618 9.57329L18.418 1.13611C18.5961 1.04684 18.7964 1 19 1C19.2036 1 19.4039 1.04684 19.582 1.13611L36.382 9.57329C36.5691 9.66707 36.725 9.80435 36.8337 9.9709C36.9423 10.1375 36.9997 10.3272 37 10.5206Z",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), (0,
            l.jsx)("path", {
                d: "M36 27.4583L19.582 19.2145C19.4039 19.1253 19.2036 19.0784 19 19.0784C18.7964 19.0784 18.5961 19.1253 18.418 19.2145L2 27.4583M2.056 10.414L18.416 18.6288C18.5943 18.7184 18.795 18.7654 18.999 18.7654C19.203 18.7654 19.4037 18.7184 19.582 18.6288L36 10.3851M19 2.65112V18.9217M19 32.4804V37",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        })
          , N = ()=>(0,
        l.jsx)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 37 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0,
            l.jsx)("path", {
                d: "M34.1342 17.2534C32.6428 10.5111 30.3985 6.9125 27.0692 5.92953C26.3693 5.72426 25.6434 5.6217 24.9141 5.62508C23.9501 5.62508 23.1106 5.85992 22.2225 6.10883C21.1524 6.40907 19.9367 6.75008 18.1641 6.75008C16.3915 6.75008 15.1751 6.40977 14.1028 6.10953C13.2141 5.85992 12.3753 5.62508 11.4141 5.62508C10.6599 5.62247 9.90907 5.72469 9.18307 5.92883C5.87135 6.90758 3.62838 10.5048 2.11526 17.2491C0.488225 24.5068 1.28908 29.0891 4.36104 30.1522C4.78213 30.3006 5.22518 30.3772 5.67166 30.3786C7.77612 30.3786 9.46362 28.6257 10.6167 27.1906C11.9196 25.5664 13.4447 24.7423 18.1641 24.7423C22.3793 24.7423 24.1238 25.314 25.6306 27.1906C26.5777 28.3705 27.4728 29.1959 28.3657 29.7155C29.5533 30.406 30.7402 30.5593 31.8926 30.1634C33.7081 29.544 34.7487 27.9064 34.9864 25.295C35.1671 23.2925 34.8886 20.6621 34.1342 17.2534ZM14.7891 16.8751H12.5391V19.1251C12.5391 19.4234 12.4206 19.7096 12.2096 19.9206C11.9986 20.1316 11.7125 20.2501 11.4141 20.2501C11.1157 20.2501 10.8296 20.1316 10.6186 19.9206C10.4076 19.7096 10.2891 19.4234 10.2891 19.1251V16.8751H8.03908C7.74072 16.8751 7.45457 16.7566 7.24359 16.5456C7.03261 16.3346 6.91408 16.0484 6.91408 15.7501C6.91408 15.4517 7.03261 15.1656 7.24359 14.9546C7.45457 14.7436 7.74072 14.6251 8.03908 14.6251H10.2891V12.3751C10.2891 12.0767 10.4076 11.7906 10.6186 11.5796C10.8296 11.3686 11.1157 11.2501 11.4141 11.2501C11.7125 11.2501 11.9986 11.3686 12.2096 11.5796C12.4206 11.7906 12.5391 12.0767 12.5391 12.3751V14.6251H14.7891C15.0875 14.6251 15.3736 14.7436 15.5846 14.9546C15.7956 15.1656 15.9141 15.4517 15.9141 15.7501C15.9141 16.0484 15.7956 16.3346 15.5846 16.5456C15.3736 16.7566 15.0875 16.8751 14.7891 16.8751ZM20.6953 17.1563C20.4172 17.1563 20.1453 17.0739 19.9141 16.9193C19.6828 16.7648 19.5026 16.5452 19.3961 16.2882C19.2897 16.0313 19.2618 15.7485 19.3161 15.4757C19.3704 15.2029 19.5043 14.9524 19.701 14.7557C19.8976 14.559 20.1482 14.4251 20.421 14.3709C20.6938 14.3166 20.9765 14.3444 21.2335 14.4509C21.4904 14.5573 21.7101 14.7376 21.8646 14.9688C22.0191 15.2001 22.1016 15.472 22.1016 15.7501C22.1016 16.123 21.9534 16.4807 21.6897 16.7444C21.426 17.0082 21.0683 17.1563 20.6953 17.1563ZM23.7891 20.2501C23.5108 20.2501 23.2388 20.1675 23.0075 20.0128C22.7761 19.8582 22.5959 19.6383 22.4895 19.3812C22.3832 19.124 22.3556 18.8411 22.4101 18.5682C22.4647 18.2953 22.5989 18.0447 22.796 17.8482C22.993 17.6517 23.2439 17.518 23.5169 17.4642C23.7899 17.4103 24.0728 17.4387 24.3297 17.5456C24.5866 17.6526 24.806 17.8334 24.9601 18.0651C25.1141 18.2968 25.196 18.5691 25.1953 18.8473C25.1944 19.2197 25.0458 19.5765 24.7822 19.8394C24.5186 20.1024 24.1614 20.2501 23.7891 20.2501ZM23.7891 14.0626C23.511 14.0626 23.2391 13.9801 23.0078 13.8256C22.7766 13.6711 22.5963 13.4514 22.4899 13.1945C22.3834 12.9375 22.3556 12.6548 22.4099 12.382C22.4641 12.1092 22.598 11.8586 22.7947 11.662C22.9914 11.4653 23.242 11.3314 23.5147 11.2771C23.7875 11.2228 24.0703 11.2507 24.3272 11.3571C24.5842 11.4636 24.8038 11.6438 24.9583 11.8751C25.1129 12.1063 25.1953 12.3782 25.1953 12.6563C25.1953 13.0293 25.0472 13.387 24.7835 13.6507C24.5197 13.9144 24.162 14.0626 23.7891 14.0626ZM26.8828 17.1563C26.6047 17.1563 26.3328 17.0739 26.1016 16.9193C25.8703 16.7648 25.6901 16.5452 25.5836 16.2882C25.4772 16.0313 25.4493 15.7485 25.5036 15.4757C25.5579 15.2029 25.6918 14.9524 25.8885 14.7557C26.0851 14.559 26.3357 14.4251 26.6085 14.3709C26.8813 14.3166 27.164 14.3444 27.421 14.4509C27.6779 14.5573 27.8976 14.7376 28.0521 14.9688C28.2066 15.2001 28.2891 15.472 28.2891 15.7501C28.2891 16.123 28.1409 16.4807 27.8772 16.7444C27.6135 17.0082 27.2558 17.1563 26.8828 17.1563Z",
                fill: "white"
            })
        })
          , k = e=>{
            let {icon: t, text: s, title: i, className: a, ...n} = e;
            return (0,
            l.jsxs)("div", {
                className: "vision-slide flex flex-col bg-[#10162B] hover:bg-[#20294A] mx-[14px] rounded-lg px-[16px] pt-[10px] w-[180px] lg:w-[220px] h-[160px] lg:h-[230px] text-white ".concat(a),
                ...n,
                children: [(0,
                l.jsxs)("div", {
                    className: "flex flex-row",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0,
                        l.jsx)("div", {
                            className: "w-[22px] h-[22px] mt-[10px] lg:mt-[32px] mb-[6px] lg:mb-[12px]",
                            children: t
                        }), (0,
                        l.jsx)("h3", {
                            className: "font-text font-bold text-[9px] lg:text-[14px] lg:leading-[16px] mb-[6px] lg:mb-[12px]",
                            children: i
                        })]
                    }), (0,
                    l.jsx)("img", {
                        src: "/images/vision_slide_2.svg",
                        alt: "",
                        className: "vision-slide-line w-[36px] lg:w-[60px] ml-auto opacity-1 md:opacity-0"
                    })]
                }), (0,
                l.jsx)("p", {
                    className: "font-display text-[8px] leading-3 lg:text-[13px] lg:leading-4",
                    children: s
                }), (0,
                l.jsx)("img", {
                    src: "/images/vision_slide_1.svg",
                    alt: "",
                    className: "vision-slide-line h-[12px] lg:h-[22px] self-start mt-auto opacity-1 md:opacity-0 mb-[14px]"
                })]
            })
        }
          , F = e=>{
            let {className: t} = e;
            return (0,
            l.jsxs)("div", {
                className: "flex-row justify-center flex md:mx-[27px] ".concat(t),
                children: [(0,
                l.jsx)(k, {
                    title: "Discovery",
                    text: "Truely be in the moment playing our experiences",
                    icon: (0,
                    l.jsx)(j, {})
                }), (0,
                l.jsx)(k, {
                    title: "Audio",
                    text: "Choose from our never ending sound library with copyright-free soundscapes perfect for your experience.",
                    icon: (0,
                    l.jsx)(v, {})
                }), (0,
                l.jsx)(k, {
                    title: "Magic",
                    text: "Harness the power our experiences will carry you through",
                    icon: (0,
                    l.jsx)(b, {})
                }), (0,
                l.jsx)(k, {
                    title: "Physics",
                    text: "We are working on some Roblox plugins that'll up your games quality infinitely.",
                    icon: (0,
                    l.jsx)(y, {})
                }), (0,
                l.jsx)(k, {
                    title: "Game Mechanics",
                    text: "Discover unforseen game mechanics with the power of lukesecrets",
                    icon: (0,
                    l.jsx)(N, {})
                })]
            })
        }
          , _ = ()=>(0,
        l.jsxs)(n.Fragment, {
            children: [(0,
            l.jsx)("section", {
                className: "text-white px-[40px] mt-[50px] flex justify-center",
                children: (0,
                l.jsx)("h5", {
                    className: "font-display text-[20px] leading-[18px] lg:text-[25px] lg:leading-[25px] mb-[26px] lg:mb-[60px] font-bold",
                    children: "Features"
                })
            }), (0,
            l.jsx)("div", {
                className: "md:hidden",
                children: (0,
                l.jsx)(u.Z, {
                    gradient: !1,
                    speed: 30,
                    style: {
                        height: 180
                    },
                    children: (0,
                    l.jsx)(F, {})
                })
            }), (0,
            l.jsx)(F, {
                className: "hidden md:flex"
            })]
        })
          , M = ()=>(0,
        l.jsxs)("section", {
            className: "flex flex-col p-[46px] pb-[25px] lg:pt-[75px] items-center gap-[54px]",
            children: [(0,
            l.jsx)("img", {
                src: "/astro-logo.svg",
                alt: "logo",
                style: {
                    width: "full",
                    height: 60
                }
            }), (0,
            l.jsx)("p", {
                className: "text-white font-display text-[12px] leading-[15px] lg:text-[20px] lg:leading-[35px] flex-1 text-center max-w-5xl mx-auto",
                children: "Our mission is to revolutionize Roblox game development by creating high quality assets for your experiences."
            })]
        })
          , Z = ()=>(0,
        l.jsxs)("section", {
            className: "flex flex-col font-display text-white text-center py-[48px] lg:pt-[60px] lg:pb-[60px]",
            children: [(0,
            l.jsxs)("div", {
                className: "flex flex-col justify-center font-bold items-center",
                children: [(0,
                l.jsxs)("div", {
                    className: "flex flex-row m-auto px-[12px]",
                    children: [(0,
                    l.jsx)("img", {
                        src: "/images/star1.svg",
                        alt: "",
                        className: "h-[50px] sm:h-[68px]"
                    }), (0,
                    l.jsx)("h1", {
                        className: "text-[22px] sm:text-[40px] leading-[40px] sm:leading-[49px]",
                        children: "Play with your imagination ..."
                    })]
                }), (0,
                l.jsxs)("h1", {
                    className: "text-[22px] sm:text-[40px] leading-[10px] sm:leading-[18px] mx-[12px]",
                    children: ["or ", (0,
                    l.jsx)("span", {
                        className: "text-[#D800CD]",
                        children: "against it"
                    })]
                }), (0,
                l.jsx)("img", {
                    src: "/images/hero_title_line.svg",
                    alt: "",
                    className: "w-[100px] sm:w-[180px] translate-x-[14px] sm:translate-x-[28px] translate-y-[14px] sm:translate-y-[20px]"
                })]
            }), (0,
            l.jsx)("p", {
                className: "opacity-80 text-[12px] sm:text-[14px] mt-[42px] break-normal px-[15px] font-light font-display m-auto",
                children: "No hard work, assets provided to you. Welcome to almost effortless game creation."
            })]
        });
        var L = s(2637);
        let V = ()=>(0,
        l.jsx)("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0,
            l.jsx)("path", {
                d: "M7.99992 10.6666L10.6666 7.99998L7.99992 5.33331L7.06658 6.26665L8.13325 7.33331H5.33325V8.66665H8.13325L7.06658 9.73331L7.99992 10.6666ZM7.99992 14.6666C7.0777 14.6666 6.21103 14.4915 5.39992 14.1413C4.58881 13.7911 3.88325 13.3162 3.28325 12.7166C2.68325 12.1166 2.20836 11.4111 1.85859 10.6C1.50881 9.78887 1.3337 8.9222 1.33325 7.99998C1.33325 7.07776 1.50836 6.21109 1.85859 5.39998C2.20881 4.58887 2.6837 3.88331 3.28325 3.28331C3.88325 2.68331 4.58881 2.20842 5.39992 1.85865C6.21103 1.50887 7.0777 1.33376 7.99992 1.33331C8.92214 1.33331 9.78881 1.50842 10.5999 1.85865C11.411 2.20887 12.1166 2.68376 12.7166 3.28331C13.3166 3.88331 13.7917 4.58887 14.1419 5.39998C14.4921 6.21109 14.667 7.07776 14.6666 7.99998C14.6666 8.9222 14.4915 9.78887 14.1412 10.6C13.791 11.4111 13.3161 12.1166 12.7166 12.7166C12.1166 13.3166 11.411 13.7918 10.5999 14.142C9.78881 14.4922 8.92214 14.6671 7.99992 14.6666Z",
                fill: "#F266F7"
            })
        })
          , S = "Easier game, purple cartoon graphics"
          , D = e=>{
            let {active: t, onClick: s, text: i} = e;
            return (0,
            l.jsxs)("div", {
                className: "flex flex-col",
                children: [(0,
                l.jsx)("img", {
                    src: "/images/feature_button_arrow.svg",
                    alt: "",
                    className: "flex w-[12px] ".concat(t ? "visible" : "invisible", " relative left-[34px] bottom-[12px]")
                }), (0,
                l.jsx)("div", {
                    onClick: s,
                    className: "text-white rounded-md px-5 py-[10px] cursor-pointer select-none transition-all duration-150 font-text text-[14px] w-[80px] text-center\n          ".concat(t ? "bg-gradient-to-r from-[#D800CD] to-[#8C76FF]" : "bg-[#272727]"),
                    children: i
                })]
            })
        }
          , z = ()=>{
            let[e,t] = (0,
            n.useState)(0)
              , [s,i] = (0,
            n.useState)(!0)
              , [a,x] = (0,
            n.useState)(!0)
              , [r,o] = (0,
            n.useState)(!1)
              , c = (0,
            n.useRef)(0)
              , d = (0,
            n.useRef)(null);
            return (0,
            n.useEffect)(()=>{
                1 === e && (d.current && window.clearTimeout(d.current),
                i(!0),
                c.current = 0,
                x(!0),
                o(!0))
            }
            , [e]),
            (0,
            l.jsxs)("section", {
                className: "",
                children: [(0,
                l.jsxs)("div", {
                    className: "mb-[12px] relative",
                    children: [0 === e && (0,
                    l.jsx)("div", {
                        className: "z-[2] top-0 absolute h-full px-3 pt-8 text-white w-[170px] mx-auto left-1/2 transform -translate-x-1/2 rounded-b-[20px]",
                        children: (0,
                        l.jsxs)("div", {
                            className: "flex flex-col h-full",
                            children: [(0,
                            l.jsx)("div", {
                                className: "font-text text-[14px] leading-[20px] block text-[#D800CD] h-[68px] py-[14px] px-[10px] text-center",
                                children: (0,
                                l.jsx)(L.rf, {
                                    words: ["Find assets suiting you, with ease."],
                                    loop: !1,
                                    cursor: !0,
                                    cursorStyle: "|",
                                    typeSpeed: 50,
                                    deleteSpeed: 50
                                })
                            }), (0,
                            l.jsx)("button", {
                                className: "w-[110px] px-[11px] bg-gradient-to-r from-[#D800CD] to-[#8C76FF] rounded-full block items-center h-[26px] text-white font-display text-[10px] mx-auto",
                                children: (0,
                                l.jsx)("p", {
                                    className: "m-auto",
                                    children: "Start Creating"
                                })
                            }), (0,
                            l.jsxs)("div", {
                                className: "flex items-center justify-center gap-[8px] my-[8px]",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "flex w-[8px] h-[1px] bg-gray-700 opacity-90"
                                }), (0,
                                l.jsx)("p", {
                                    className: "text-[10px]",
                                    children: "or"
                                }), (0,
                                l.jsx)("div", {
                                    className: "flex w-[8px] h-[1px] bg-gray-700 opacity-90"
                                })]
                            }), (0,
                            l.jsx)("button", {
                                className: "w-[70px] px-[11px] bg-white rounded-full block items-center h-[26px] text-black font-display text-[10px] mx-auto",
                                children: (0,
                                l.jsx)("p", {
                                    className: "m-auto",
                                    children: "Explore"
                                })
                            })]
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "bottom-0 w-[280px] h-[280px] bg-[#312463] blur-[100px] absolute left-1/2 transform -translate-x-1/2 z-0"
                    }), (0,
                    l.jsxs)("div", {
                        className: "absolute -bottom-[28px] z-10 w-full",
                        children: [0 === e && (0,
                        l.jsxs)(n.Fragment, {
                            children: [(0,
                            l.jsxs)("div", {
                                className: "flex w-full flex-col absolute -top-[15px]",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "flex w-full",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "flex-grow opacity-60 bg-gradient-to-t from-[#0F0F0F] z-50"
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "w-[166px] h-[15px] opacity-60 bg-gradient-to-t from-[#0F0F0F] z-0"
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "flex-grow opacity-60 bg-gradient-to-t from-[#0F0F0F] z-50"
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "flex w-full",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "flex-grow opacity-60 bg-[#0F0F0F] z-50"
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "w-[166px] h-[214px] opacity-60 bg-[#0F0F0F] z-0"
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "flex-grow opacity-60 bg-[#0F0F0F] z-50"
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "flex w-full",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "flex-grow opacity-60 bg-gradient-to-b from-[#0F0F0F] z-50"
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "w-[166px] h-[15px] opacity-60 bg-gradient-to-b from-[#0F0F0F] z-0"
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "flex-grow opacity-60 bg-gradient-to-b from-[#0F0F0F] z-50"
                                    })]
                                })]
                            }), (0,
                            l.jsx)(u.Z, {
                                gradient: !1,
                                speed: 15,
                                direction: "left",
                                children: (0,
                                l.jsx)("img", {
                                    src: "/images/gamerow2.png",
                                    alt: "gamerow2",
                                    style: {
                                        width: "auto",
                                        height: 46,
                                        overflow: "hidden",
                                        marginBottom: 10,
                                        marginRight: 8
                                    }
                                })
                            }), (0,
                            l.jsx)(u.Z, {
                                gradient: !1,
                                speed: 35,
                                direction: "right",
                                children: (0,
                                l.jsx)("img", {
                                    src: "/images/gamerow3.png",
                                    alt: "gamerow3",
                                    style: {
                                        width: "auto",
                                        height: 46,
                                        overflow: "hidden",
                                        marginBottom: 10,
                                        marginRight: 8
                                    }
                                })
                            }), (0,
                            l.jsx)(u.Z, {
                                gradient: !1,
                                speed: 20,
                                direction: "left",
                                children: (0,
                                l.jsx)("img", {
                                    src: "/images/gamerow4.png",
                                    alt: "gamerow4",
                                    style: {
                                        width: "auto",
                                        height: 46,
                                        overflow: "hidden",
                                        marginBottom: 75,
                                        marginRight: 8
                                    }
                                })
                            })]
                        }), 1 === e && (0,
                        l.jsx)("div", {
                            className: "bottom-[66px] absolute flex items-center pl-3 bg-bgPrimary h-[34px] text-white w-[162px] mx-auto left-1/2 transform -translate-x-1/2 rounded-b-[20px]",
                            children: (0,
                            l.jsxs)("div", {
                                className: "relative w-full",
                                children: [r && (0,
                                l.jsxs)("div", {
                                    className: "relative font-text text-[7px] leading-[18px] block",
                                    children: [(0,
                                    l.jsx)(L.rf, {
                                        words: ["hi", S],
                                        loop: !1,
                                        cursor: !0,
                                        cursorStyle: "|",
                                        typeSpeed: 50,
                                        deleteSpeed: 10,
                                        delaySpeed: 1750,
                                        onDelay: ()=>{
                                            0 === c.current && (d.current && window.clearTimeout(d.current),
                                            d.current = window.setTimeout(()=>{
                                                x(()=>!1)
                                            }
                                            , 1750))
                                        }
                                        ,
                                        onType: ()=>{
                                            c.current += 1,
                                            c.current === S.length && i(!1)
                                        }
                                        ,
                                        onDelete: ()=>{
                                            c.current -= 1,
                                            0 === c.current && (i(!0),
                                            x(!0))
                                        }
                                    }), a && (0,
                                    l.jsx)("div", {
                                        className: "absolute left-[0px] top-[0px] bg-bgPrimary w-full h-full text-left rounded-br-[20px]",
                                        children: "Use LukesAI to find an asset suiting you."
                                    })]
                                }), (0,
                                l.jsx)("div", {
                                    className: "absolute w-4 h-4 top-1/2 -translate-y-1/2 right-1",
                                    children: (0,
                                    l.jsx)(V, {})
                                })]
                            })
                        })]
                    }), (0,
                    l.jsx)("div", {
                        className: "flex justify-center w-full relative z-10 bottom-[10px] ".concat(2 === e ? "block" : "hidden"),
                        children: (0,
                        l.jsx)("img", {
                            src: "/images/phone_neon_share.svg",
                            alt: "phone",
                            style: {
                                width: "full",
                                height: 409
                            }
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "flex justify-center relative pointer-events-none bottom-[10px] ".concat(1 === e ? "block" : "hidden"),
                        children: s ? (0,
                        l.jsx)("img", {
                            src: "/images/phone_neon_before.svg",
                            alt: "phone",
                            style: {
                                width: "full",
                                height: 409
                            }
                        }) : (0,
                        l.jsx)("img", {
                            src: "/images/phone_neon_after.svg",
                            alt: "phone",
                            style: {
                                width: "full",
                                height: 409
                            }
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "flex justify-center relative z-10 pointer-events-none bottom-[10px] ".concat(0 === e ? "block" : "hidden"),
                        children: (0,
                        l.jsx)("img", {
                            src: "/images/phone_neon.svg",
                            alt: "phone",
                            style: {
                                width: "full",
                                height: 409
                            }
                        })
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "mb-6 flex justify-center gap-2 relative",
                    children: [(0,
                    l.jsx)(D, {
                        text: "Create",
                        active: 0 === e,
                        onClick: ()=>t(0)
                    }), (0,
                    l.jsx)(D, {
                        text: "AI Tool",
                        active: 1 === e,
                        onClick: ()=>t(1)
                    }), (0,
                    l.jsx)(D, {
                        text: "Share",
                        active: 2 === e,
                        onClick: ()=>t(2)
                    })]
                }), (0,
                l.jsx)("div", {
                    className: "px-10",
                    children: (0,
                    l.jsxs)("p", {
                        className: "font-text text-white text-[16px] leading-6 text-center lg:text-[20px] lg:leading-8",
                        children: [0 === e && (0,
                        l.jsxs)(l.Fragment, {
                            children: ["Use ", " ", (0,
                            l.jsx)("u", {
                                children: "text-to-game"
                            }), " ", "to discover endless games using this tool."]
                        }), 1 === e && "With our ai tool, quickly get an asset from our endless library that suites your desires best.", 2 === e && "Share your game to show off your creation or skill, and compete with friends"]
                    })
                })]
            })
        }
        ;
        function A() {
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsxs)(a(), {
                    children: [(0,
                    l.jsx)("title", {
                        children: "ls"
                    }), (0,
                    l.jsx)("meta", {
                        name: "description",
                        content: "ls"
                    }), (0,
                    l.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }), (0,
                    l.jsx)("link", {
                        rel: "icon",
                        href: "/astro-logo.svg"
                    })]
                }), (0,
                l.jsxs)("main", {
                    children: [(0,
                    l.jsx)(r, {}), (0,
                    l.jsx)(Z, {}), (0,
                    l.jsx)(z, {}), (0,
                    l.jsx)(_, {}), (0,
                    l.jsx)(M, {}), (0,
                    l.jsx)(g, {})]
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [68, 774, 888, 179], function() {
        return e(e.s = 8312)
    }),
    _N_E = e.O()
}
]);
