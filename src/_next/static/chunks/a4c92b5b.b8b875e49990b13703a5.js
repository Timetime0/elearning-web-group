(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    thk6: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s("9Pxm"),
        i = s("19JU");
      const n = {
        addClass: a.c,
        removeClass: a.F,
        hasClass: a.n,
        toggleClass: a.I,
        attr: a.e,
        removeAttr: a.E,
        data: a.i,
        transform: a.J,
        transition: a.K,
        on: a.v,
        off: a.t,
        trigger: a.M,
        transitionEnd: a.L,
        outerWidth: a.x,
        outerHeight: a.w,
        offset: a.u,
        css: a.h,
        each: a.j,
        html: a.o,
        text: a.H,
        is: a.q,
        index: a.p,
        eq: a.k,
        append: a.d,
        prepend: a.A,
        next: a.r,
        nextAll: a.s,
        prev: a.B,
        prevAll: a.C,
        parent: a.y,
        parents: a.z,
        closest: a.g,
        find: a.m,
        children: a.f,
        filter: a.l,
        remove: a.D,
        add: a.b,
        styles: a.G,
      };
      Object.keys(n).forEach((e) => {
        a.a.fn[e] = a.a.fn[e] || n[e];
      });
      const r = {
          deleteProps(e) {
            const t = e;
            Object.keys(t).forEach((e) => {
              try {
                t[e] = null;
              } catch (s) {}
              try {
                delete t[e];
              } catch (s) {}
            });
          },
          nextTick: (e, t = 0) => setTimeout(e, t),
          now: () => Date.now(),
          getTranslate(e, t = "x") {
            let s, a, n;
            const r = i.b.getComputedStyle(e, null);
            return (
              i.b.WebKitCSSMatrix
                ? ((a = r.transform || r.webkitTransform),
                  a.split(",").length > 6 &&
                    (a = a
                      .split(", ")
                      .map((e) => e.replace(",", "."))
                      .join(", ")),
                  (n = new i.b.WebKitCSSMatrix("none" === a ? "" : a)))
                : ((n =
                    r.MozTransform ||
                    r.OTransform ||
                    r.MsTransform ||
                    r.msTransform ||
                    r.transform ||
                    r
                      .getPropertyValue("transform")
                      .replace("translate(", "matrix(1, 0, 0, 1,")),
                  (s = n.toString().split(","))),
              "x" === t &&
                (a = i.b.WebKitCSSMatrix
                  ? n.m41
                  : 16 === s.length
                  ? parseFloat(s[12])
                  : parseFloat(s[4])),
              "y" === t &&
                (a = i.b.WebKitCSSMatrix
                  ? n.m42
                  : 16 === s.length
                  ? parseFloat(s[13])
                  : parseFloat(s[5])),
              a || 0
            );
          },
          parseUrlQuery(e) {
            const t = {};
            let s,
              a,
              n,
              r,
              l = e || i.b.location.href;
            if ("string" === typeof l && l.length)
              for (
                l = l.indexOf("?") > -1 ? l.replace(/\S*\?/, "") : "",
                  a = l.split("&").filter((e) => "" !== e),
                  r = a.length,
                  s = 0;
                s < r;
                s += 1
              )
                (n = a[s].replace(/#\S+/g, "").split("=")),
                  (t[decodeURIComponent(n[0])] =
                    "undefined" === typeof n[1]
                      ? void 0
                      : decodeURIComponent(n[1]) || "");
            return t;
          },
          isObject: (e) =>
            "object" === typeof e &&
            null !== e &&
            e.constructor &&
            e.constructor === Object,
          extend(...e) {
            const t = Object(e[0]);
            for (let s = 1; s < e.length; s += 1) {
              const a = e[s];
              if (void 0 !== a && null !== a) {
                const e = Object.keys(Object(a));
                for (let s = 0, i = e.length; s < i; s += 1) {
                  const i = e[s],
                    n = Object.getOwnPropertyDescriptor(a, i);
                  void 0 !== n &&
                    n.enumerable &&
                    (r.isObject(t[i]) && r.isObject(a[i])
                      ? r.extend(t[i], a[i])
                      : !r.isObject(t[i]) && r.isObject(a[i])
                      ? ((t[i] = {}), r.extend(t[i], a[i]))
                      : (t[i] = a[i]));
                }
              }
            }
            return t;
          },
        },
        l = {
          touch:
            (i.b.Modernizr && !0 === i.b.Modernizr.touch) ||
            !!(
              i.b.navigator.maxTouchPoints > 0 ||
              "ontouchstart" in i.b ||
              (i.b.DocumentTouch && i.a instanceof i.b.DocumentTouch)
            ),
          pointerEvents:
            !!i.b.PointerEvent &&
            "maxTouchPoints" in i.b.navigator &&
            i.b.navigator.maxTouchPoints > 0,
          observer:
            "MutationObserver" in i.b || "WebkitMutationObserver" in i.b,
          passiveListener: (function () {
            let e = !1;
            try {
              const t = Object.defineProperty({}, "passive", {
                get() {
                  e = !0;
                },
              });
              i.b.addEventListener("testPassiveListener", null, t);
            } catch (t) {}
            return e;
          })(),
          gestures: "ongesturestart" in i.b,
        };
      class o {
        constructor(e = {}) {
          const t = this;
          (t.params = e),
            (t.eventsListeners = {}),
            t.params &&
              t.params.on &&
              Object.keys(t.params.on).forEach((e) => {
                t.on(e, t.params.on[e]);
              });
        }
        on(e, t, s) {
          const a = this;
          if ("function" !== typeof t) return a;
          const i = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t);
            }),
            a
          );
        }
        once(e, t, s) {
          const a = this;
          if ("function" !== typeof t) return a;
          function i(...s) {
            a.off(e, i), i.f7proxy && delete i.f7proxy, t.apply(a, s);
          }
          return (i.f7proxy = t), a.on(e, i, s);
        }
        off(e, t) {
          const s = this;
          return s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                "undefined" === typeof t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].length &&
                    s.eventsListeners[e].forEach((a, i) => {
                      (a === t || (a.f7proxy && a.f7proxy === t)) &&
                        s.eventsListeners[e].splice(i, 1);
                    });
              }),
              s)
            : s;
        }
        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let s, a, i;
          return (
            "string" === typeof e[0] || Array.isArray(e[0])
              ? ((s = e[0]), (a = e.slice(1, e.length)), (i = t))
              : ((s = e[0].events), (a = e[0].data), (i = e[0].context || t)),
            (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
              if (t.eventsListeners && t.eventsListeners[e]) {
                const s = [];
                t.eventsListeners[e].forEach((e) => {
                  s.push(e);
                }),
                  s.forEach((e) => {
                    e.apply(i, a);
                  });
              }
            }),
            t
          );
        }
        useModulesParams(e) {
          const t = this;
          t.modules &&
            Object.keys(t.modules).forEach((s) => {
              const a = t.modules[s];
              a.params && r.extend(e, a.params);
            });
        }
        useModules(e = {}) {
          const t = this;
          t.modules &&
            Object.keys(t.modules).forEach((s) => {
              const a = t.modules[s],
                i = e[s] || {};
              a.instance &&
                Object.keys(a.instance).forEach((e) => {
                  const s = a.instance[e];
                  t[e] = "function" === typeof s ? s.bind(t) : s;
                }),
                a.on &&
                  t.on &&
                  Object.keys(a.on).forEach((e) => {
                    t.on(e, a.on[e]);
                  }),
                a.create && a.create.bind(t)(i);
            });
        }
        static set components(e) {
          this.use && this.use(e);
        }
        static installModule(e, ...t) {
          const s = this;
          s.prototype.modules || (s.prototype.modules = {});
          const a =
            e.name || `${Object.keys(s.prototype.modules).length}_${r.now()}`;
          return (
            (s.prototype.modules[a] = e),
            e.proto &&
              Object.keys(e.proto).forEach((t) => {
                s.prototype[t] = e.proto[t];
              }),
            e.static &&
              Object.keys(e.static).forEach((t) => {
                s[t] = e.static[t];
              }),
            e.install && e.install.apply(s, t),
            s
          );
        }
        static use(e, ...t) {
          const s = this;
          return Array.isArray(e)
            ? (e.forEach((e) => s.installModule(e)), s)
            : s.installModule(e, ...t);
        }
      }
      var d = {
        updateSize: function () {
          const e = this;
          let t, s;
          const a = e.$el;
          (t =
            "undefined" !== typeof e.params.width
              ? e.params.width
              : a[0].clientWidth),
            (s =
              "undefined" !== typeof e.params.height
                ? e.params.height
                : a[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(a.css("padding-left"), 10) -
                parseInt(a.css("padding-right"), 10)),
              (s =
                s -
                parseInt(a.css("padding-top"), 10) -
                parseInt(a.css("padding-bottom"), 10)),
              r.extend(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function () {
          const e = this,
            t = e.params,
            { $wrapperEl: s, size: a, rtlTranslate: n, wrongRTL: l } = e,
            o = e.virtual && t.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            p = s.children(`.${e.params.slideClass}`),
            c = o ? e.virtual.slides.length : p.length;
          let h = [];
          const u = [],
            m = [];
          function f(e) {
            return !t.cssMode || e !== p.length - 1;
          }
          let g = t.slidesOffsetBefore;
          "function" === typeof g && (g = t.slidesOffsetBefore.call(e));
          let v = t.slidesOffsetAfter;
          "function" === typeof v && (v = t.slidesOffsetAfter.call(e));
          const b = e.snapGrid.length,
            w = e.snapGrid.length;
          let y,
            x,
            T = t.spaceBetween,
            E = -g,
            C = 0,
            S = 0;
          if ("undefined" === typeof a) return;
          "string" === typeof T &&
            T.indexOf("%") >= 0 &&
            (T = (parseFloat(T.replace("%", "")) / 100) * a),
            (e.virtualSize = -T),
            n
              ? p.css({ marginLeft: "", marginTop: "" })
              : p.css({ marginRight: "", marginBottom: "" }),
            t.slidesPerColumn > 1 &&
              ((y =
                Math.floor(c / t.slidesPerColumn) ===
                c / e.params.slidesPerColumn
                  ? c
                  : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
              "auto" !== t.slidesPerView &&
                "row" === t.slidesPerColumnFill &&
                (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
          const $ = t.slidesPerColumn,
            M = y / $,
            z = Math.floor(c / t.slidesPerColumn);
          for (let r = 0; r < c; r += 1) {
            x = 0;
            const s = p.eq(r);
            if (t.slidesPerColumn > 1) {
              let a, i, n;
              if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                const e = Math.floor(
                    r / (t.slidesPerGroup * t.slidesPerColumn)
                  ),
                  l = r - t.slidesPerColumn * t.slidesPerGroup * e,
                  o =
                    0 === e
                      ? t.slidesPerGroup
                      : Math.min(
                          Math.ceil((c - e * $ * t.slidesPerGroup) / $),
                          t.slidesPerGroup
                        );
                (n = Math.floor(l / o)),
                  (i = l - n * o + e * t.slidesPerGroup),
                  (a = i + (n * y) / $),
                  s.css({
                    "-webkit-box-ordinal-group": a,
                    "-moz-box-ordinal-group": a,
                    "-ms-flex-order": a,
                    "-webkit-order": a,
                    order: a,
                  });
              } else
                "column" === t.slidesPerColumnFill
                  ? ((i = Math.floor(r / $)),
                    (n = r - i * $),
                    (i > z || (i === z && n === $ - 1)) &&
                      ((n += 1), n >= $ && ((n = 0), (i += 1))))
                  : ((n = Math.floor(r / M)), (i = r - n * M));
              s.css(
                `margin-${e.isHorizontal() ? "top" : "left"}`,
                0 !== n && t.spaceBetween && `${t.spaceBetween}px`
              );
            }
            if ("none" !== s.css("display")) {
              if ("auto" === t.slidesPerView) {
                const a = i.b.getComputedStyle(s[0], null),
                  n = s[0].style.transform,
                  r = s[0].style.webkitTransform;
                if (
                  (n && (s[0].style.transform = "none"),
                  r && (s[0].style.webkitTransform = "none"),
                  t.roundLengths)
                )
                  x = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
                else if (e.isHorizontal()) {
                  const e = parseFloat(a.getPropertyValue("width")),
                    t = parseFloat(a.getPropertyValue("padding-left")),
                    s = parseFloat(a.getPropertyValue("padding-right")),
                    i = parseFloat(a.getPropertyValue("margin-left")),
                    n = parseFloat(a.getPropertyValue("margin-right")),
                    r = a.getPropertyValue("box-sizing");
                  x = r && "border-box" === r ? e + i + n : e + t + s + i + n;
                } else {
                  const e = parseFloat(a.getPropertyValue("height")),
                    t = parseFloat(a.getPropertyValue("padding-top")),
                    s = parseFloat(a.getPropertyValue("padding-bottom")),
                    i = parseFloat(a.getPropertyValue("margin-top")),
                    n = parseFloat(a.getPropertyValue("margin-bottom")),
                    r = a.getPropertyValue("box-sizing");
                  x = r && "border-box" === r ? e + i + n : e + t + s + i + n;
                }
                n && (s[0].style.transform = n),
                  r && (s[0].style.webkitTransform = r),
                  t.roundLengths && (x = Math.floor(x));
              } else
                (x = (a - (t.slidesPerView - 1) * T) / t.slidesPerView),
                  t.roundLengths && (x = Math.floor(x)),
                  p[r] &&
                    (e.isHorizontal()
                      ? (p[r].style.width = `${x}px`)
                      : (p[r].style.height = `${x}px`));
              p[r] && (p[r].swiperSlideSize = x),
                m.push(x),
                t.centeredSlides
                  ? ((E = E + x / 2 + C / 2 + T),
                    0 === C && 0 !== r && (E = E - a / 2 - T),
                    0 === r && (E = E - a / 2 - T),
                    Math.abs(E) < 0.001 && (E = 0),
                    t.roundLengths && (E = Math.floor(E)),
                    S % t.slidesPerGroup === 0 && h.push(E),
                    u.push(E))
                  : (t.roundLengths && (E = Math.floor(E)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ===
                      0 && h.push(E),
                    u.push(E),
                    (E = E + x + T)),
                (e.virtualSize += x + T),
                (C = x),
                (S += 1);
            }
          }
          let P;
          if (
            ((e.virtualSize = Math.max(e.virtualSize, a) + v),
            n &&
              l &&
              ("slide" === t.effect || "coverflow" === t.effect) &&
              s.css({ width: `${e.virtualSize + t.spaceBetween}px` }),
            t.setWrapperSize &&
              (e.isHorizontal()
                ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` })
                : s.css({ height: `${e.virtualSize + t.spaceBetween}px` })),
            t.slidesPerColumn > 1 &&
              ((e.virtualSize = (x + t.spaceBetween) * y),
              (e.virtualSize =
                Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
              e.isHorizontal()
                ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` })
                : s.css({ height: `${e.virtualSize + t.spaceBetween}px` }),
              t.centeredSlides))
          ) {
            P = [];
            for (let s = 0; s < h.length; s += 1) {
              let a = h[s];
              t.roundLengths && (a = Math.floor(a)),
                h[s] < e.virtualSize + h[0] && P.push(a);
            }
            h = P;
          }
          if (!t.centeredSlides) {
            P = [];
            for (let s = 0; s < h.length; s += 1) {
              let i = h[s];
              t.roundLengths && (i = Math.floor(i)),
                h[s] <= e.virtualSize - a && P.push(i);
            }
            (h = P),
              Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 &&
                h.push(e.virtualSize - a);
          }
          if (
            (0 === h.length && (h = [0]),
            0 !== t.spaceBetween &&
              (e.isHorizontal()
                ? n
                  ? p.filter(f).css({ marginLeft: `${T}px` })
                  : p.filter(f).css({ marginRight: `${T}px` })
                : p.filter(f).css({ marginBottom: `${T}px` })),
            t.centeredSlides && t.centeredSlidesBounds)
          ) {
            let e = 0;
            m.forEach((s) => {
              e += s + (t.spaceBetween ? t.spaceBetween : 0);
            }),
              (e -= t.spaceBetween);
            const s = e - a;
            h = h.map((e) => (e < 0 ? -g : e > s ? s + v : e));
          }
          if (t.centerInsufficientSlides) {
            let e = 0;
            if (
              (m.forEach((s) => {
                e += s + (t.spaceBetween ? t.spaceBetween : 0);
              }),
              (e -= t.spaceBetween),
              e < a)
            ) {
              const t = (a - e) / 2;
              h.forEach((e, s) => {
                h[s] = e - t;
              }),
                u.forEach((e, s) => {
                  u[s] = e + t;
                });
            }
          }
          r.extend(e, {
            slides: p,
            snapGrid: h,
            slidesGrid: u,
            slidesSizesGrid: m,
          }),
            c !== d && e.emit("slidesLengthChange"),
            h.length !== b &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            u.length !== w && e.emit("slidesGridLengthChange"),
            (t.watchSlidesProgress || t.watchSlidesVisibility) &&
              e.updateSlidesOffset();
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [];
          let a,
            i = 0;
          if (
            ("number" === typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed),
            "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          )
            if (t.params.centeredSlides) s.push(...t.visibleSlides);
            else
              for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const e = t.activeIndex + a;
                if (e > t.slides.length) break;
                s.push(t.slides.eq(e)[0]);
              }
          else s.push(t.slides.eq(t.activeIndex)[0]);
          for (a = 0; a < s.length; a += 1)
            if ("undefined" !== typeof s[a]) {
              const e = s[a].offsetHeight;
              i = e > i ? e : i;
            }
          i && t.$wrapperEl.css("height", `${i}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let s = 0; s < t.length; s += 1)
            t[s].swiperSlideOffset = e.isHorizontal()
              ? t[s].offsetLeft
              : t[s].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            s = t.params,
            { slides: i, rtlTranslate: n } = t;
          if (0 === i.length) return;
          "undefined" === typeof i[0].swiperSlideOffset &&
            t.updateSlidesOffset();
          let r = -e;
          n && (r = e),
            i.removeClass(s.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let a = 0; a < i.length; a += 1) {
            const e = i[a],
              l =
                (r +
                  (s.centeredSlides ? t.minTranslate() : 0) -
                  e.swiperSlideOffset) /
                (e.swiperSlideSize + s.spaceBetween);
            if (s.watchSlidesVisibility || (s.centeredSlides && s.autoHeight)) {
              const n = -(r - e.swiperSlideOffset),
                l = n + t.slidesSizesGrid[a];
              ((n >= 0 && n < t.size - 1) ||
                (l > 1 && l <= t.size) ||
                (n <= 0 && l >= t.size)) &&
                (t.visibleSlides.push(e),
                t.visibleSlidesIndexes.push(a),
                i.eq(a).addClass(s.slideVisibleClass));
            }
            e.progress = n ? -l : l;
          }
          t.visibleSlides = Object(a.a)(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if ("undefined" === typeof e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            a = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: n, isEnd: l } = t;
          const o = n,
            d = l;
          0 === a
            ? ((i = 0), (n = !0), (l = !0))
            : ((i = (e - t.minTranslate()) / a), (n = i <= 0), (l = i >= 1)),
            r.extend(t, { progress: i, isBeginning: n, isEnd: l }),
            (s.watchSlidesProgress ||
              s.watchSlidesVisibility ||
              (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            n && !o && t.emit("reachBeginning toEdge"),
            l && !d && t.emit("reachEnd toEdge"),
            ((o && !n) || (d && !l)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: s,
              $wrapperEl: a,
              activeIndex: i,
              realIndex: n,
            } = e,
            r = e.virtual && s.virtual.enabled;
          let l;
          t.removeClass(
            `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
          ),
            (l = r
              ? e.$wrapperEl.find(
                  `.${s.slideClass}[data-swiper-slide-index="${i}"]`
                )
              : t.eq(i)),
            l.addClass(s.slideActiveClass),
            s.loop &&
              (l.hasClass(s.slideDuplicateClass)
                ? a
                    .children(
                      `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass)
                : a
                    .children(
                      `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass));
          let o = l
            .nextAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slideNextClass);
          s.loop &&
            0 === o.length &&
            ((o = t.eq(0)), o.addClass(s.slideNextClass));
          let d = l
            .prevAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slidePrevClass);
          s.loop &&
            0 === d.length &&
            ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
            s.loop &&
              (o.hasClass(s.slideDuplicateClass)
                ? a
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass)
                : a
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${o.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass),
              d.hasClass(s.slideDuplicateClass)
                ? a
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${d.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)
                : a
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${d.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: a,
              snapGrid: i,
              params: n,
              activeIndex: l,
              realIndex: o,
              snapIndex: d,
            } = t;
          let p,
            c = e;
          if ("undefined" === typeof c) {
            for (let e = 0; e < a.length; e += 1)
              "undefined" !== typeof a[e + 1]
                ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
                  ? (c = e)
                  : s >= a[e] && s < a[e + 1] && (c = e + 1)
                : s >= a[e] && (c = e);
            n.normalizeSlideIndex &&
              (c < 0 || "undefined" === typeof c) &&
              (c = 0);
          }
          if (i.indexOf(s) >= 0) p = i.indexOf(s);
          else {
            const e = Math.min(n.slidesPerGroupSkip, c);
            p = e + Math.floor((c - e) / n.slidesPerGroup);
          }
          if ((p >= i.length && (p = i.length - 1), c === l))
            return void (
              p !== d && ((t.snapIndex = p), t.emit("snapIndexChange"))
            );
          const h = parseInt(
            t.slides.eq(c).attr("data-swiper-slide-index") || c,
            10
          );
          r.extend(t, {
            snapIndex: p,
            realIndex: h,
            previousIndex: l,
            activeIndex: c,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            o !== h && t.emit("realIndexChange"),
            (t.initialized || t.runCallbacksOnInit) && t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            s = t.params,
            i = Object(a.a)(e.target).closest(`.${s.slideClass}`)[0];
          let n = !1;
          if (i)
            for (let a = 0; a < t.slides.length; a += 1)
              t.slides[a] === i && (n = !0);
          if (!i || !n)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  Object(a.a)(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = Object(a.a)(i).index()),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      var p = {
        getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
          const {
            params: t,
            rtlTranslate: s,
            translate: a,
            $wrapperEl: i,
          } = this;
          if (t.virtualTranslate) return s ? -a : a;
          if (t.cssMode) return a;
          let n = r.getTranslate(i[0], e);
          return s && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
          const s = this,
            {
              rtlTranslate: a,
              params: i,
              $wrapperEl: n,
              wrapperEl: r,
              progress: l,
            } = s;
          let o,
            d = 0,
            p = 0;
          s.isHorizontal() ? (d = a ? -e : e) : (p = e),
            i.roundLengths && ((d = Math.floor(d)), (p = Math.floor(p))),
            i.cssMode
              ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  s.isHorizontal() ? -d : -p)
              : i.virtualTranslate ||
                n.transform(`translate3d(${d}px, ${p}px, 0px)`),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? d : p);
          const c = s.maxTranslate() - s.minTranslate();
          (o = 0 === c ? 0 : (e - s.minTranslate()) / c),
            o !== l && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (
          e = 0,
          t = this.params.speed,
          s = !0,
          a = !0,
          i
        ) {
          const n = this,
            { params: r, wrapperEl: l } = n;
          if (n.animating && r.preventInteractionOnTransition) return !1;
          const o = n.minTranslate(),
            d = n.maxTranslate();
          let p;
          if (
            ((p = a && e > o ? o : a && e < d ? d : e),
            n.updateProgress(p),
            r.cssMode)
          ) {
            const e = n.isHorizontal();
            return (
              0 === t
                ? (l[e ? "scrollLeft" : "scrollTop"] = -p)
                : l.scrollTo
                ? l.scrollTo({ [e ? "left" : "top"]: -p, behavior: "smooth" })
                : (l[e ? "scrollLeft" : "scrollTop"] = -p),
              !0
            );
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(p),
                s &&
                  (n.emit("beforeTransitionStart", t, i),
                  n.emit("transitionEnd")))
              : (n.setTransition(t),
                n.setTranslate(p),
                s &&
                  (n.emit("beforeTransitionStart", t, i),
                  n.emit("transitionStart")),
                n.animating ||
                  ((n.animating = !0),
                  n.onTranslateToWrapperTransitionEnd ||
                    (n.onTranslateToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          n.onTranslateToWrapperTransitionEnd
                        ),
                        n.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          n.onTranslateToWrapperTransitionEnd
                        ),
                        (n.onTranslateToWrapperTransitionEnd = null),
                        delete n.onTranslateToWrapperTransitionEnd,
                        s && n.emit("transitionEnd"));
                    }),
                  n.$wrapperEl[0].addEventListener(
                    "transitionend",
                    n.onTranslateToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    n.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      var c = {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { activeIndex: a, params: i, previousIndex: n } = s;
          if (i.cssMode) return;
          i.autoHeight && s.updateAutoHeight();
          let r = t;
          if (
            (r || (r = a > n ? "next" : a < n ? "prev" : "reset"),
            s.emit("transitionStart"),
            e && a !== n)
          ) {
            if ("reset" === r) return void s.emit("slideResetTransitionStart");
            s.emit("slideChangeTransitionStart"),
              "next" === r
                ? s.emit("slideNextTransitionStart")
                : s.emit("slidePrevTransitionStart");
          }
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { activeIndex: a, previousIndex: i, params: n } = s;
          if (((s.animating = !1), n.cssMode)) return;
          s.setTransition(0);
          let r = t;
          if (
            (r || (r = a > i ? "next" : a < i ? "prev" : "reset"),
            s.emit("transitionEnd"),
            e && a !== i)
          ) {
            if ("reset" === r) return void s.emit("slideResetTransitionEnd");
            s.emit("slideChangeTransitionEnd"),
              "next" === r
                ? s.emit("slideNextTransitionEnd")
                : s.emit("slidePrevTransitionEnd");
          }
        },
      };
      var h = {
        slideTo: function (e = 0, t = this.params.speed, s = !0, a) {
          const i = this;
          let n = e;
          n < 0 && (n = 0);
          const {
            params: r,
            snapGrid: l,
            slidesGrid: o,
            previousIndex: d,
            activeIndex: p,
            rtlTranslate: c,
            wrapperEl: h,
          } = i;
          if (i.animating && r.preventInteractionOnTransition) return !1;
          const u = Math.min(i.params.slidesPerGroupSkip, n);
          let m = u + Math.floor((n - u) / i.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (p || r.initialSlide || 0) === (d || 0) &&
              s &&
              i.emit("beforeSlideChangeStart");
          const f = -l[m];
          if ((i.updateProgress(f), r.normalizeSlideIndex))
            for (let v = 0; v < o.length; v += 1)
              -Math.floor(100 * f) >= Math.floor(100 * o[v]) && (n = v);
          if (i.initialized && n !== p) {
            if (!i.allowSlideNext && f < i.translate && f < i.minTranslate())
              return !1;
            if (
              !i.allowSlidePrev &&
              f > i.translate &&
              f > i.maxTranslate() &&
              (p || 0) !== n
            )
              return !1;
          }
          let g;
          if (
            ((g = n > p ? "next" : n < p ? "prev" : "reset"),
            (c && -f === i.translate) || (!c && f === i.translate))
          )
            return (
              i.updateActiveIndex(n),
              r.autoHeight && i.updateAutoHeight(),
              i.updateSlidesClasses(),
              "slide" !== r.effect && i.setTranslate(f),
              "reset" !== g && (i.transitionStart(s, g), i.transitionEnd(s, g)),
              !1
            );
          if (r.cssMode) {
            const e = i.isHorizontal();
            return (
              0 === t
                ? (h[e ? "scrollLeft" : "scrollTop"] = -f)
                : h.scrollTo
                ? h.scrollTo({ [e ? "left" : "top"]: -f, behavior: "smooth" })
                : (h[e ? "scrollLeft" : "scrollTop"] = -f),
              !0
            );
          }
          return (
            0 === t
              ? (i.setTransition(0),
                i.setTranslate(f),
                i.updateActiveIndex(n),
                i.updateSlidesClasses(),
                i.emit("beforeTransitionStart", t, a),
                i.transitionStart(s, g),
                i.transitionEnd(s, g))
              : (i.setTransition(t),
                i.setTranslate(f),
                i.updateActiveIndex(n),
                i.updateSlidesClasses(),
                i.emit("beforeTransitionStart", t, a),
                i.transitionStart(s, g),
                i.animating ||
                  ((i.animating = !0),
                  i.onSlideToWrapperTransitionEnd ||
                    (i.onSlideToWrapperTransitionEnd = function (e) {
                      i &&
                        !i.destroyed &&
                        e.target === this &&
                        (i.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          i.onSlideToWrapperTransitionEnd
                        ),
                        i.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          i.onSlideToWrapperTransitionEnd
                        ),
                        (i.onSlideToWrapperTransitionEnd = null),
                        delete i.onSlideToWrapperTransitionEnd,
                        i.transitionEnd(s, g));
                    }),
                  i.$wrapperEl[0].addEventListener(
                    "transitionend",
                    i.onSlideToWrapperTransitionEnd
                  ),
                  i.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    i.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, s = !0, a) {
          const i = this;
          let n = e;
          return i.params.loop && (n += i.loopedSlides), i.slideTo(n, t, s, a);
        },
        slideNext: function (e = this.params.speed, t = !0, s) {
          const a = this,
            { params: i, animating: n } = a,
            r = a.activeIndex < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup;
          if (i.loop) {
            if (n) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          return a.slideTo(a.activeIndex + r, e, t, s);
        },
        slidePrev: function (e = this.params.speed, t = !0, s) {
          const a = this,
            {
              params: i,
              animating: n,
              snapGrid: r,
              slidesGrid: l,
              rtlTranslate: o,
            } = a;
          if (i.loop) {
            if (n) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const p = d(o ? a.translate : -a.translate),
            c = r.map((e) => d(e));
          l.map((e) => d(e)), r[c.indexOf(p)];
          let h,
            u = r[c.indexOf(p) - 1];
          return (
            "undefined" === typeof u &&
              i.cssMode &&
              r.forEach((e) => {
                !u && p >= e && (u = e);
              }),
            "undefined" !== typeof u &&
              ((h = l.indexOf(u)), h < 0 && (h = a.activeIndex - 1)),
            a.slideTo(h, e, t, s)
          );
        },
        slideReset: function (e = this.params.speed, t = !0, s) {
          return this.slideTo(this.activeIndex, e, t, s);
        },
        slideToClosest: function (e = this.params.speed, t = !0, s, a = 0.5) {
          const i = this;
          let n = i.activeIndex;
          const r = Math.min(i.params.slidesPerGroupSkip, n),
            l = r + Math.floor((n - r) / i.params.slidesPerGroup),
            o = i.rtlTranslate ? i.translate : -i.translate;
          if (o >= i.snapGrid[l]) {
            const e = i.snapGrid[l];
            o - e > (i.snapGrid[l + 1] - e) * a &&
              (n += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[l - 1];
            o - e <= (i.snapGrid[l] - e) * a && (n -= i.params.slidesPerGroup);
          }
          return (
            (n = Math.max(n, 0)),
            (n = Math.min(n, i.slidesGrid.length - 1)),
            i.slideTo(n, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: s } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            l = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              Object(a.a)(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? l < e.loopedSlides - i / 2 ||
                  l > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (l = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    r.nextTick(() => {
                      e.slideTo(l);
                    }))
                  : e.slideTo(l)
                : l > e.slides.length - i
                ? (e.loopFix(),
                  (l = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  r.nextTick(() => {
                    e.slideTo(l);
                  }))
                : e.slideTo(l);
          } else e.slideTo(l);
        },
      };
      var u = {
        loopCreate: function () {
          const e = this,
            { params: t, $wrapperEl: s } = e;
          s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
          let n = s.children(`.${t.slideClass}`);
          if (t.loopFillGroupWithBlank) {
            const e = t.slidesPerGroup - (n.length % t.slidesPerGroup);
            if (e !== t.slidesPerGroup) {
              for (let n = 0; n < e; n += 1) {
                const e = Object(a.a)(i.a.createElement("div")).addClass(
                  `${t.slideClass} ${t.slideBlankClass}`
                );
                s.append(e);
              }
              n = s.children(`.${t.slideClass}`);
            }
          }
          "auto" !== t.slidesPerView ||
            t.loopedSlides ||
            (t.loopedSlides = n.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(t.loopedSlides || t.slidesPerView, 10)
            )),
            (e.loopedSlides += t.loopAdditionalSlides),
            e.loopedSlides > n.length && (e.loopedSlides = n.length);
          const r = [],
            l = [];
          n.each((t, s) => {
            const i = Object(a.a)(s);
            t < e.loopedSlides && l.push(s),
              t < n.length && t >= n.length - e.loopedSlides && r.push(s),
              i.attr("data-swiper-slide-index", t);
          });
          for (let i = 0; i < l.length; i += 1)
            s.append(
              Object(a.a)(l[i].cloneNode(!0)).addClass(t.slideDuplicateClass)
            );
          for (let i = r.length - 1; i >= 0; i -= 1)
            s.prepend(
              Object(a.a)(r[i].cloneNode(!0)).addClass(t.slideDuplicateClass)
            );
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: s,
            loopedSlides: a,
            allowSlidePrev: i,
            allowSlideNext: n,
            snapGrid: r,
            rtlTranslate: l,
          } = e;
          let o;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const d = -r[t] - e.getTranslate();
          if (t < a) {
            (o = s.length - 3 * a + t),
              (o += a),
              e.slideTo(o, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((l ? -e.translate : e.translate) - d);
          } else if (t >= s.length - a) {
            (o = -s.length + t + a),
              (o += a),
              e.slideTo(o, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((l ? -e.translate : e.translate) - d);
          }
          (e.allowSlidePrev = i), (e.allowSlideNext = n), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: s } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            s.removeAttr("data-swiper-slide-index");
        },
      };
      var m = {
        setGrabCursor: function (e) {
          if (
            l.touch ||
            !this.params.simulateTouch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode
          )
            return;
          const t = this.el;
          (t.style.cursor = "move"),
            (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (t.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          l.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode ||
            (this.el.style.cursor = "");
        },
      };
      var f = {
        appendSlide: function (e) {
          const t = this,
            { $wrapperEl: s, params: a } = t;
          if (
            (a.loop && t.loopDestroy(), "object" === typeof e && "length" in e)
          )
            for (let i = 0; i < e.length; i += 1) e[i] && s.append(e[i]);
          else s.append(e);
          a.loop && t.loopCreate(), (a.observer && l.observer) || t.update();
        },
        prependSlide: function (e) {
          const t = this,
            { params: s, $wrapperEl: a, activeIndex: i } = t;
          s.loop && t.loopDestroy();
          let n = i + 1;
          if ("object" === typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            n = i + e.length;
          } else a.prepend(e);
          s.loop && t.loopCreate(),
            (s.observer && l.observer) || t.update(),
            t.slideTo(n, 0, !1);
        },
        addSlide: function (e, t) {
          const s = this,
            { $wrapperEl: a, params: i, activeIndex: n } = s;
          let r = n;
          i.loop &&
            ((r -= s.loopedSlides),
            s.loopDestroy(),
            (s.slides = a.children(`.${i.slideClass}`)));
          const o = s.slides.length;
          if (e <= 0) return void s.prependSlide(t);
          if (e >= o) return void s.appendSlide(t);
          let d = r > e ? r + 1 : r;
          const p = [];
          for (let l = o - 1; l >= e; l -= 1) {
            const e = s.slides.eq(l);
            e.remove(), p.unshift(e);
          }
          if ("object" === typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            d = r > e ? r + t.length : r;
          } else a.append(t);
          for (let l = 0; l < p.length; l += 1) a.append(p[l]);
          i.loop && s.loopCreate(),
            (i.observer && l.observer) || s.update(),
            i.loop ? s.slideTo(d + s.loopedSlides, 0, !1) : s.slideTo(d, 0, !1);
        },
        removeSlide: function (e) {
          const t = this,
            { params: s, $wrapperEl: a, activeIndex: i } = t;
          let n = i;
          s.loop &&
            ((n -= t.loopedSlides),
            t.loopDestroy(),
            (t.slides = a.children(`.${s.slideClass}`)));
          let r,
            o = n;
          if ("object" === typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1)
              (r = e[s]),
                t.slides[r] && t.slides.eq(r).remove(),
                r < o && (o -= 1);
            o = Math.max(o, 0);
          } else
            (r = e),
              t.slides[r] && t.slides.eq(r).remove(),
              r < o && (o -= 1),
              (o = Math.max(o, 0));
          s.loop && t.loopCreate(),
            (s.observer && l.observer) || t.update(),
            s.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
        },
        removeAllSlides: function () {
          const e = this,
            t = [];
          for (let s = 0; s < e.slides.length; s += 1) t.push(s);
          e.removeSlide(t);
        },
      };
      const g = (function () {
        const e = i.b.navigator.platform,
          t = i.b.navigator.userAgent,
          s = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!i.b.cordova && !i.b.phonegap),
            phonegap: !(!i.b.cordova && !i.b.phonegap),
            electron: !1,
          },
          a = i.b.screen.width,
          n = i.b.screen.height,
          r = t.match(/(Android);?[\s\/]+([\d.]+)?/);
        let o = t.match(/(iPad).*OS\s([\d_]+)/);
        const d = t.match(/(iPod)(.*OS\s([\d_]+))?/),
          p = !o && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          c = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
          h = t.indexOf("Edge/") >= 0,
          u = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
          m = "Win32" === e,
          f = t.toLowerCase().indexOf("electron") >= 0;
        let g = "MacIntel" === e;
        return (
          !o &&
            g &&
            l.touch &&
            ((1024 === a && 1366 === n) ||
              (834 === a && 1194 === n) ||
              (834 === a && 1112 === n) ||
              (768 === a && 1024 === n)) &&
            ((o = t.match(/(Version)\/([\d.]+)/)), (g = !1)),
          (s.ie = c),
          (s.edge = h),
          (s.firefox = u),
          r &&
            !m &&
            ((s.os = "android"),
            (s.osVersion = r[2]),
            (s.android = !0),
            (s.androidChrome = t.toLowerCase().indexOf("chrome") >= 0)),
          (o || p || d) && ((s.os = "ios"), (s.ios = !0)),
          p && !d && ((s.osVersion = p[2].replace(/_/g, ".")), (s.iphone = !0)),
          o && ((s.osVersion = o[2].replace(/_/g, ".")), (s.ipad = !0)),
          d &&
            ((s.osVersion = d[3] ? d[3].replace(/_/g, ".") : null),
            (s.ipod = !0)),
          s.ios &&
            s.osVersion &&
            t.indexOf("Version/") >= 0 &&
            "10" === s.osVersion.split(".")[0] &&
            (s.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
          (s.webView =
            !(
              !(p || o || d) ||
              (!t.match(/.*AppleWebKit(?!.*Safari)/i) &&
                !i.b.navigator.standalone)
            ) ||
            (i.b.matchMedia &&
              i.b.matchMedia("(display-mode: standalone)").matches)),
          (s.webview = s.webView),
          (s.standalone = s.webView),
          (s.desktop = !(s.ios || s.android) || f),
          s.desktop &&
            ((s.electron = f),
            (s.macos = g),
            (s.windows = m),
            s.macos && (s.os = "macos"),
            s.windows && (s.os = "windows")),
          (s.pixelRatio = i.b.devicePixelRatio || 1),
          s
        );
      })();
      function v(e) {
        const t = this,
          s = t.touchEventsData,
          { params: n, touches: l } = t;
        if (t.animating && n.preventInteractionOnTransition) return;
        let o = e;
        o.originalEvent && (o = o.originalEvent);
        const d = Object(a.a)(o.target);
        if ("wrapper" === n.touchEventsTarget && !d.closest(t.wrapperEl).length)
          return;
        if (
          ((s.isTouchEvent = "touchstart" === o.type),
          !s.isTouchEvent && "which" in o && 3 === o.which)
        )
          return;
        if (!s.isTouchEvent && "button" in o && o.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        if (
          n.noSwiping &&
          d.closest(
            n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
          )[0]
        )
          return void (t.allowClick = !0);
        if (n.swipeHandler && !d.closest(n.swipeHandler)[0]) return;
        (l.currentX =
          "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
          (l.currentY =
            "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
        const p = l.currentX,
          c = l.currentY,
          h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
          u = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
        if (!h || !(p <= u || p >= i.b.screen.width - u)) {
          if (
            (r.extend(s, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0,
            }),
            (l.startX = p),
            (l.startY = c),
            (s.touchStartTime = r.now()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            n.threshold > 0 && (s.allowThresholdMove = !1),
            "touchstart" !== o.type)
          ) {
            let e = !0;
            d.is(s.formElements) && (e = !1),
              i.a.activeElement &&
                Object(a.a)(i.a.activeElement).is(s.formElements) &&
                i.a.activeElement !== d[0] &&
                i.a.activeElement.blur();
            const r = e && t.allowTouchMove && n.touchStartPreventDefault;
            (n.touchStartForcePreventDefault || r) && o.preventDefault();
          }
          t.emit("touchStart", o);
        }
      }
      function b(e) {
        const t = this,
          s = t.touchEventsData,
          { params: n, touches: l, rtlTranslate: o } = t;
        let d = e;
        if ((d.originalEvent && (d = d.originalEvent), !s.isTouched))
          return void (
            s.startMoving &&
            s.isScrolling &&
            t.emit("touchMoveOpposite", d)
          );
        if (s.isTouchEvent && "mousemove" === d.type) return;
        const p =
            "touchmove" === d.type &&
            d.targetTouches &&
            (d.targetTouches[0] || d.changedTouches[0]),
          c = "touchmove" === d.type ? p.pageX : d.pageX,
          h = "touchmove" === d.type ? p.pageY : d.pageY;
        if (d.preventedByNestedSwiper)
          return (l.startX = c), void (l.startY = h);
        if (!t.allowTouchMove)
          return (
            (t.allowClick = !1),
            void (
              s.isTouched &&
              (r.extend(l, { startX: c, startY: h, currentX: c, currentY: h }),
              (s.touchStartTime = r.now()))
            )
          );
        if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (t.isVertical()) {
            if (
              (h < l.startY && t.translate <= t.maxTranslate()) ||
              (h > l.startY && t.translate >= t.minTranslate())
            )
              return (s.isTouched = !1), void (s.isMoved = !1);
          } else if (
            (c < l.startX && t.translate <= t.maxTranslate()) ||
            (c > l.startX && t.translate >= t.minTranslate())
          )
            return;
        if (
          s.isTouchEvent &&
          i.a.activeElement &&
          d.target === i.a.activeElement &&
          Object(a.a)(d.target).is(s.formElements)
        )
          return (s.isMoved = !0), void (t.allowClick = !1);
        if (
          (s.allowTouchCallbacks && t.emit("touchMove", d),
          d.targetTouches && d.targetTouches.length > 1)
        )
          return;
        (l.currentX = c), (l.currentY = h);
        const u = l.currentX - l.startX,
          m = l.currentY - l.startY;
        if (
          t.params.threshold &&
          Math.sqrt(u ** 2 + m ** 2) < t.params.threshold
        )
          return;
        if ("undefined" === typeof s.isScrolling) {
          let e;
          (t.isHorizontal() && l.currentY === l.startY) ||
          (t.isVertical() && l.currentX === l.startX)
            ? (s.isScrolling = !1)
            : u * u + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(u))) / Math.PI),
              (s.isScrolling = t.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (s.isScrolling && t.emit("touchMoveOpposite", d),
          "undefined" === typeof s.startMoving &&
            ((l.currentX === l.startX && l.currentY === l.startY) ||
              (s.startMoving = !0)),
          s.isScrolling)
        )
          return void (s.isTouched = !1);
        if (!s.startMoving) return;
        (t.allowClick = !1),
          n.cssMode || d.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
          s.isMoved ||
            (n.loop && t.loopFix(),
            (s.startTranslate = t.getTranslate()),
            t.setTransition(0),
            t.animating &&
              t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (s.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
              t.setGrabCursor(!0),
            t.emit("sliderFirstMove", d)),
          t.emit("sliderMove", d),
          (s.isMoved = !0);
        let f = t.isHorizontal() ? u : m;
        (l.diff = f),
          (f *= n.touchRatio),
          o && (f = -f),
          (t.swipeDirection = f > 0 ? "prev" : "next"),
          (s.currentTranslate = f + s.startTranslate);
        let g = !0,
          v = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (v = 0),
          f > 0 && s.currentTranslate > t.minTranslate()
            ? ((g = !1),
              n.resistance &&
                (s.currentTranslate =
                  t.minTranslate() -
                  1 +
                  (-t.minTranslate() + s.startTranslate + f) ** v))
            : f < 0 &&
              s.currentTranslate < t.maxTranslate() &&
              ((g = !1),
              n.resistance &&
                (s.currentTranslate =
                  t.maxTranslate() +
                  1 -
                  (t.maxTranslate() - s.startTranslate - f) ** v)),
          g && (d.preventedByNestedSwiper = !0),
          !t.allowSlideNext &&
            "next" === t.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !t.allowSlidePrev &&
            "prev" === t.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(f) > n.threshold || s.allowThresholdMove))
            return void (s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove)
            return (
              (s.allowThresholdMove = !0),
              (l.startX = l.currentX),
              (l.startY = l.currentY),
              (s.currentTranslate = s.startTranslate),
              void (l.diff = t.isHorizontal()
                ? l.currentX - l.startX
                : l.currentY - l.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) &&
            (t.updateActiveIndex(), t.updateSlidesClasses()),
          n.freeMode &&
            (0 === s.velocities.length &&
              s.velocities.push({
                position: l[t.isHorizontal() ? "startX" : "startY"],
                time: s.touchStartTime,
              }),
            s.velocities.push({
              position: l[t.isHorizontal() ? "currentX" : "currentY"],
              time: r.now(),
            })),
          t.updateProgress(s.currentTranslate),
          t.setTranslate(s.currentTranslate));
      }
      function w(e) {
        const t = this,
          s = t.touchEventsData,
          {
            params: a,
            touches: i,
            rtlTranslate: n,
            $wrapperEl: l,
            slidesGrid: o,
            snapGrid: d,
          } = t;
        let p = e;
        if (
          (p.originalEvent && (p = p.originalEvent),
          s.allowTouchCallbacks && t.emit("touchEnd", p),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        )
          return (
            s.isMoved && a.grabCursor && t.setGrabCursor(!1),
            (s.isMoved = !1),
            void (s.startMoving = !1)
          );
        a.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = r.now(),
          h = c - s.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(p),
            t.emit("tap click", p),
            h < 300 &&
              c - s.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", p)),
          (s.lastClickTime = r.now()),
          r.nextTick(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !t.swipeDirection ||
            0 === i.diff ||
            s.currentTranslate === s.startTranslate)
        )
          return (
            (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
          );
        let u;
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (u = a.followFinger
            ? n
              ? t.translate
              : -t.translate
            : -s.currentTranslate),
          a.cssMode)
        )
          return;
        if (a.freeMode) {
          if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (u > -t.maxTranslate())
            return void (t.slides.length < d.length
              ? t.slideTo(d.length - 1)
              : t.slideTo(t.slides.length - 1));
          if (a.freeModeMomentum) {
            if (s.velocities.length > 1) {
              const e = s.velocities.pop(),
                i = s.velocities.pop(),
                n = e.position - i.position,
                l = e.time - i.time;
              (t.velocity = n / l),
                (t.velocity /= 2),
                Math.abs(t.velocity) < a.freeModeMinimumVelocity &&
                  (t.velocity = 0),
                (l > 150 || r.now() - e.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *= a.freeModeMomentumVelocityRatio),
              (s.velocities.length = 0);
            let e = 1e3 * a.freeModeMomentumRatio;
            const i = t.velocity * e;
            let o = t.translate + i;
            n && (o = -o);
            let p,
              c = !1;
            const h = 20 * Math.abs(t.velocity) * a.freeModeMomentumBounceRatio;
            let u;
            if (o < t.maxTranslate())
              a.freeModeMomentumBounce
                ? (o + t.maxTranslate() < -h && (o = t.maxTranslate() - h),
                  (p = t.maxTranslate()),
                  (c = !0),
                  (s.allowMomentumBounce = !0))
                : (o = t.maxTranslate()),
                a.loop && a.centeredSlides && (u = !0);
            else if (o > t.minTranslate())
              a.freeModeMomentumBounce
                ? (o - t.minTranslate() > h && (o = t.minTranslate() + h),
                  (p = t.minTranslate()),
                  (c = !0),
                  (s.allowMomentumBounce = !0))
                : (o = t.minTranslate()),
                a.loop && a.centeredSlides && (u = !0);
            else if (a.freeModeSticky) {
              let e;
              for (let t = 0; t < d.length; t += 1)
                if (d[t] > -o) {
                  e = t;
                  break;
                }
              (o =
                Math.abs(d[e] - o) < Math.abs(d[e - 1] - o) ||
                "next" === t.swipeDirection
                  ? d[e]
                  : d[e - 1]),
                (o = -o);
            }
            if (
              (u &&
                t.once("transitionEnd", () => {
                  t.loopFix();
                }),
              0 !== t.velocity)
            ) {
              if (
                ((e = n
                  ? Math.abs((-o - t.translate) / t.velocity)
                  : Math.abs((o - t.translate) / t.velocity)),
                a.freeModeSticky)
              ) {
                const s = Math.abs((n ? -o : o) - t.translate),
                  i = t.slidesSizesGrid[t.activeIndex];
                e = s < i ? a.speed : s < 2 * i ? 1.5 * a.speed : 2.5 * a.speed;
              }
            } else if (a.freeModeSticky) return void t.slideToClosest();
            a.freeModeMomentumBounce && c
              ? (t.updateProgress(p),
                t.setTransition(e),
                t.setTranslate(o),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                l.transitionEnd(() => {
                  t &&
                    !t.destroyed &&
                    s.allowMomentumBounce &&
                    (t.emit("momentumBounce"),
                    t.setTransition(a.speed),
                    t.setTranslate(p),
                    l.transitionEnd(() => {
                      t && !t.destroyed && t.transitionEnd();
                    }));
                }))
              : t.velocity
              ? (t.updateProgress(o),
                t.setTransition(e),
                t.setTranslate(o),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  l.transitionEnd(() => {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : t.updateProgress(o),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          } else if (a.freeModeSticky) return void t.slideToClosest();
          return void (
            (!a.freeModeMomentum || h >= a.longSwipesMs) &&
            (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          );
        }
        let m = 0,
          f = t.slidesSizesGrid[0];
        for (
          let r = 0;
          r < o.length;
          r += r < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
        ) {
          const e = r < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          "undefined" !== typeof o[r + e]
            ? u >= o[r] && u < o[r + e] && ((m = r), (f = o[r + e] - o[r]))
            : u >= o[r] && ((m = r), (f = o[o.length - 1] - o[o.length - 2]));
        }
        const g = (u - o[m]) / f,
          v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (h > a.longSwipesMs) {
          if (!a.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)),
            "prev" === t.swipeDirection &&
              (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m));
        } else {
          if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl)
            ? p.target === t.navigation.nextEl
              ? t.slideTo(m + v)
              : t.slideTo(m)
            : ("next" === t.swipeDirection && t.slideTo(m + v),
              "prev" === t.swipeDirection && t.slideTo(m));
        }
      }
      function y() {
        const e = this,
          { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: a, allowSlidePrev: i, snapGrid: n } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = i),
          (e.allowSlideNext = a),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function x(e) {
        const t = this;
        t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function T() {
        const e = this,
          { wrapperEl: t } = e;
        let s;
        (e.previousTranslate = e.translate),
          (e.translate = e.isHorizontal() ? -t.scrollLeft : -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const a = e.maxTranslate() - e.minTranslate();
        (s = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
          s !== e.progress && e.updateProgress(e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let E = !1;
      function C() {}
      var S = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
      };
      const $ = {
          update: d,
          translate: p,
          transition: c,
          slide: h,
          loop: u,
          grabCursor: m,
          manipulation: f,
          events: {
            attachEvents: function () {
              const e = this,
                { params: t, touchEvents: s, el: a, wrapperEl: n } = e;
              (e.onTouchStart = v.bind(e)),
                (e.onTouchMove = b.bind(e)),
                (e.onTouchEnd = w.bind(e)),
                t.cssMode && (e.onScroll = T.bind(e)),
                (e.onClick = x.bind(e));
              const r = !!t.nested;
              if (!l.touch && l.pointerEvents)
                a.addEventListener(s.start, e.onTouchStart, !1),
                  i.a.addEventListener(s.move, e.onTouchMove, r),
                  i.a.addEventListener(s.end, e.onTouchEnd, !1);
              else {
                if (l.touch) {
                  const n = !(
                    "touchstart" !== s.start ||
                    !l.passiveListener ||
                    !t.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  a.addEventListener(s.start, e.onTouchStart, n),
                    a.addEventListener(
                      s.move,
                      e.onTouchMove,
                      l.passiveListener ? { passive: !1, capture: r } : r
                    ),
                    a.addEventListener(s.end, e.onTouchEnd, n),
                    s.cancel && a.addEventListener(s.cancel, e.onTouchEnd, n),
                    E || (i.a.addEventListener("touchstart", C), (E = !0));
                }
                ((t.simulateTouch && !g.ios && !g.android) ||
                  (t.simulateTouch && !l.touch && g.ios)) &&
                  (a.addEventListener("mousedown", e.onTouchStart, !1),
                  i.a.addEventListener("mousemove", e.onTouchMove, r),
                  i.a.addEventListener("mouseup", e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) &&
                a.addEventListener("click", e.onClick, !0),
                t.cssMode && n.addEventListener("scroll", e.onScroll),
                t.updateOnWindowResize
                  ? e.on(
                      g.ios || g.android
                        ? "resize orientationchange observerUpdate"
                        : "resize observerUpdate",
                      y,
                      !0
                    )
                  : e.on("observerUpdate", y, !0);
            },
            detachEvents: function () {
              const e = this,
                { params: t, touchEvents: s, el: a, wrapperEl: n } = e,
                r = !!t.nested;
              if (!l.touch && l.pointerEvents)
                a.removeEventListener(s.start, e.onTouchStart, !1),
                  i.a.removeEventListener(s.move, e.onTouchMove, r),
                  i.a.removeEventListener(s.end, e.onTouchEnd, !1);
              else {
                if (l.touch) {
                  const i = !(
                    "onTouchStart" !== s.start ||
                    !l.passiveListener ||
                    !t.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  a.removeEventListener(s.start, e.onTouchStart, i),
                    a.removeEventListener(s.move, e.onTouchMove, r),
                    a.removeEventListener(s.end, e.onTouchEnd, i),
                    s.cancel &&
                      a.removeEventListener(s.cancel, e.onTouchEnd, i);
                }
                ((t.simulateTouch && !g.ios && !g.android) ||
                  (t.simulateTouch && !l.touch && g.ios)) &&
                  (a.removeEventListener("mousedown", e.onTouchStart, !1),
                  i.a.removeEventListener("mousemove", e.onTouchMove, r),
                  i.a.removeEventListener("mouseup", e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) &&
                a.removeEventListener("click", e.onClick, !0),
                t.cssMode && n.removeEventListener("scroll", e.onScroll),
                e.off(
                  g.ios || g.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  y
                );
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                {
                  activeIndex: t,
                  initialized: s,
                  loopedSlides: a = 0,
                  params: i,
                  $el: n,
                } = e,
                l = i.breakpoints;
              if (!l || (l && 0 === Object.keys(l).length)) return;
              const o = e.getBreakpoint(l);
              if (o && e.currentBreakpoint !== o) {
                const d = o in l ? l[o] : void 0;
                d &&
                  [
                    "slidesPerView",
                    "spaceBetween",
                    "slidesPerGroup",
                    "slidesPerGroupSkip",
                    "slidesPerColumn",
                  ].forEach((e) => {
                    const t = d[e];
                    "undefined" !== typeof t &&
                      (d[e] =
                        "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                          ? "slidesPerView" === e
                            ? parseFloat(t)
                            : parseInt(t, 10)
                          : "auto");
                  });
                const p = d || e.originalParams,
                  c = i.slidesPerColumn > 1,
                  h = p.slidesPerColumn > 1;
                c && !h
                  ? n.removeClass(
                      `${i.containerModifierClass}multirow ${i.containerModifierClass}multirow-column`
                    )
                  : !c &&
                    h &&
                    (n.addClass(`${i.containerModifierClass}multirow`),
                    "column" === p.slidesPerColumnFill &&
                      n.addClass(`${i.containerModifierClass}multirow-column`));
                const u = p.direction && p.direction !== i.direction,
                  m = i.loop && (p.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(),
                  r.extend(e.params, p),
                  r.extend(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev,
                  }),
                  (e.currentBreakpoint = o),
                  m &&
                    s &&
                    (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - a + e.loopedSlides, 0, !1)),
                  e.emit("breakpoint", p);
              }
            },
            getBreakpoint: function (e) {
              if (!e) return;
              let t = !1;
              const s = Object.keys(e).map((e) => {
                if ("string" === typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: i.b.innerHeight * t, point: e };
                }
                return { value: e, point: e };
              });
              s.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let a = 0; a < s.length; a += 1) {
                const { point: e, value: n } = s[a];
                n <= i.b.innerWidth && (t = e);
              }
              return t || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                t = e.params,
                s = e.isLocked,
                a =
                  e.slides.length > 0 &&
                  t.slidesOffsetBefore +
                    t.spaceBetween * (e.slides.length - 1) +
                    e.slides[0].offsetWidth * e.slides.length;
              t.slidesOffsetBefore && t.slidesOffsetAfter && a
                ? (e.isLocked = a <= e.size)
                : (e.isLocked = 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
                s !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                s &&
                  s !== e.isLocked &&
                  ((e.isEnd = !1), e.navigation.update());
            },
          },
          classes: {
            addClasses: function () {
              const { classNames: e, params: t, rtl: s, $el: a } = this,
                i = [];
              i.push("initialized"),
                i.push(t.direction),
                t.freeMode && i.push("free-mode"),
                t.autoHeight && i.push("autoheight"),
                s && i.push("rtl"),
                t.slidesPerColumn > 1 &&
                  (i.push("multirow"),
                  "column" === t.slidesPerColumnFill &&
                    i.push("multirow-column")),
                g.android && i.push("android"),
                g.ios && i.push("ios"),
                t.cssMode && i.push("css-mode"),
                i.forEach((s) => {
                  e.push(t.containerModifierClass + s);
                }),
                a.addClass(e.join(" "));
            },
            removeClasses: function () {
              const { $el: e, classNames: t } = this;
              e.removeClass(t.join(" "));
            },
          },
          images: {
            loadImage: function (e, t, s, a, n, r) {
              let l;
              function o() {
                r && r();
              }
              e.complete && n
                ? o()
                : t
                ? ((l = new i.b.Image()),
                  (l.onload = o),
                  (l.onerror = o),
                  a && (l.sizes = a),
                  s && (l.srcset = s),
                  t && (l.src = t))
                : o();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                "undefined" !== typeof e &&
                  null !== e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                const a = e.imagesToLoad[s];
                e.loadImage(
                  a,
                  a.currentSrc || a.getAttribute("src"),
                  a.srcset || a.getAttribute("srcset"),
                  a.sizes || a.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        M = {};
      class z extends o {
        constructor(...e) {
          let t, s;
          1 === e.length && e[0].constructor && e[0].constructor === Object
            ? (s = e[0])
            : ([t, s] = e),
            s || (s = {}),
            (s = r.extend({}, s)),
            t && !s.el && (s.el = t),
            super(s),
            Object.keys($).forEach((e) => {
              Object.keys($[e]).forEach((t) => {
                z.prototype[t] || (z.prototype[t] = $[e][t]);
              });
            });
          const i = this;
          "undefined" === typeof i.modules && (i.modules = {}),
            Object.keys(i.modules).forEach((e) => {
              const t = i.modules[e];
              if (t.params) {
                const e = Object.keys(t.params)[0],
                  a = t.params[e];
                if ("object" !== typeof a || null === a) return;
                if (!(e in s && "enabled" in a)) return;
                !0 === s[e] && (s[e] = { enabled: !0 }),
                  "object" !== typeof s[e] ||
                    "enabled" in s[e] ||
                    (s[e].enabled = !0),
                  s[e] || (s[e] = { enabled: !1 });
              }
            });
          const n = r.extend({}, S);
          i.useModulesParams(n),
            (i.params = r.extend({}, n, M, s)),
            (i.originalParams = r.extend({}, i.params)),
            (i.passedParams = r.extend({}, s)),
            (i.$ = a.a);
          const o = Object(a.a)(i.params.el);
          if (((t = o[0]), !t)) return;
          if (o.length > 1) {
            const e = [];
            return (
              o.each((t, a) => {
                const i = r.extend({}, s, { el: a });
                e.push(new z(i));
              }),
              e
            );
          }
          let d;
          return (
            (t.swiper = i),
            o.data("swiper", i),
            t && t.shadowRoot && t.shadowRoot.querySelector
              ? ((d = Object(a.a)(
                  t.shadowRoot.querySelector(`.${i.params.wrapperClass}`)
                )),
                (d.children = (e) => o.children(e)))
              : (d = o.children(`.${i.params.wrapperClass}`)),
            r.extend(i, {
              $el: o,
              el: t,
              $wrapperEl: d,
              wrapperEl: d[0],
              classNames: [],
              slides: Object(a.a)(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === i.params.direction,
              isVertical: () => "vertical" === i.params.direction,
              rtl:
                "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
              rtlTranslate:
                "horizontal" === i.params.direction &&
                ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
              wrongRTL: "-webkit-box" === d.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                  "touchstart",
                  "touchmove",
                  "touchend",
                  "touchcancel",
                ];
                let t = ["mousedown", "mousemove", "mouseup"];
                return (
                  l.pointerEvents &&
                    (t = ["pointerdown", "pointermove", "pointerup"]),
                  (i.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (i.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  l.touch || !i.params.simulateTouch
                    ? i.touchEventsTouch
                    : i.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video, label",
                lastClickTime: r.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.useModules(),
            i.params.init && i.init(),
            i
          );
        }
        slidesPerViewDynamic() {
          const {
            params: e,
            slides: t,
            slidesGrid: s,
            size: a,
            activeIndex: i,
          } = this;
          let n = 1;
          if (e.centeredSlides) {
            let e,
              s = t[i].swiperSlideSize;
            for (let r = i + 1; r < t.length; r += 1)
              t[r] &&
                !e &&
                ((s += t[r].swiperSlideSize), (n += 1), s > a && (e = !0));
            for (let r = i - 1; r >= 0; r -= 1)
              t[r] &&
                !e &&
                ((s += t[r].swiperSlideSize), (n += 1), s > a && (e = !0));
          } else
            for (let r = i + 1; r < t.length; r += 1)
              s[r] - s[i] < a && (n += 1);
          return n;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: s } = e;
          function a() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let i;
          s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode
              ? (a(), e.params.autoHeight && e.updateAutoHeight())
              : ((i =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                i || a()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          const s = this,
            a = s.params.direction;
          return (
            e || (e = "horizontal" === a ? "vertical" : "horizontal"),
            e === a || ("horizontal" !== e && "vertical" !== e)
              ? s
              : (s.$el
                  .removeClass(`${s.params.containerModifierClass}${a}`)
                  .addClass(`${s.params.containerModifierClass}${e}`),
                (s.params.direction = e),
                s.slides.each((t, s) => {
                  "vertical" === e
                    ? (s.style.width = "")
                    : (s.style.height = "");
                }),
                s.emit("changeDirection"),
                t && s.update(),
                s)
          );
        }
        init() {
          const e = this;
          e.initialized ||
            (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit("init"));
        }
        destroy(e = !0, t = !0) {
          const s = this,
            { params: a, $el: i, $wrapperEl: n, slides: l } = s;
          return "undefined" === typeof s.params || s.destroyed
            ? null
            : (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              a.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                i.removeAttr("style"),
                n.removeAttr("style"),
                l &&
                  l.length &&
                  l
                    .removeClass(
                      [
                        a.slideVisibleClass,
                        a.slideActiveClass,
                        a.slideNextClass,
                        a.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e &&
                ((s.$el[0].swiper = null),
                s.$el.data("swiper", null),
                r.deleteProps(s)),
              (s.destroyed = !0),
              null);
        }
        static extendDefaults(e) {
          r.extend(M, e);
        }
        static get extendedDefaults() {
          return M;
        }
        static get defaults() {
          return S;
        }
        static get Class() {
          return o;
        }
        static get $() {
          return a.a;
        }
      }
      var P = { name: "device", proto: { device: g }, static: { device: g } },
        k = { name: "support", proto: { support: l }, static: { support: l } };
      const O = {
        isEdge: !!i.b.navigator.userAgent.match(/Edge/g),
        isSafari: (function () {
          const e = i.b.navigator.userAgent.toLowerCase();
          return (
            e.indexOf("safari") >= 0 &&
            e.indexOf("chrome") < 0 &&
            e.indexOf("android") < 0
          );
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          i.b.navigator.userAgent
        ),
      };
      var I = {
          name: "browser",
          proto: { browser: O },
          static: { browser: O },
        },
        L = {
          name: "resize",
          create() {
            const e = this;
            r.extend(e, {
              resize: {
                resizeHandler() {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    (e.emit("beforeResize"), e.emit("resize"));
                },
                orientationChangeHandler() {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    e.emit("orientationchange");
                },
              },
            });
          },
          on: {
            init() {
              i.b.addEventListener("resize", this.resize.resizeHandler),
                i.b.addEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
            destroy() {
              i.b.removeEventListener("resize", this.resize.resizeHandler),
                i.b.removeEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
          },
        };
      const D = {
        func: i.b.MutationObserver || i.b.WebkitMutationObserver,
        attach(e, t = {}) {
          const s = this,
            a = new (0, D.func)((e) => {
              if (1 === e.length) return void s.emit("observerUpdate", e[0]);
              const t = function () {
                s.emit("observerUpdate", e[0]);
              };
              i.b.requestAnimationFrame
                ? i.b.requestAnimationFrame(t)
                : i.b.setTimeout(t, 0);
            });
          a.observe(e, {
            attributes: "undefined" === typeof t.attributes || t.attributes,
            childList: "undefined" === typeof t.childList || t.childList,
            characterData:
              "undefined" === typeof t.characterData || t.characterData,
          }),
            s.observer.observers.push(a);
        },
        init() {
          const e = this;
          if (l.observer && e.params.observer) {
            if (e.params.observeParents) {
              const t = e.$el.parents();
              for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s]);
            }
            e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren,
            }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy() {
          this.observer.observers.forEach((e) => {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      };
      var G = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create() {
          r.extend(this, {
            observer: {
              init: D.init.bind(this),
              attach: D.attach.bind(this),
              destroy: D.destroy.bind(this),
              observers: [],
            },
          });
        },
        on: {
          init() {
            this.observer.init();
          },
          destroy() {
            this.observer.destroy();
          },
        },
      };
      const A = {
        update(e) {
          const t = this,
            {
              slidesPerView: s,
              slidesPerGroup: a,
              centeredSlides: i,
            } = t.params,
            { addSlidesBefore: n, addSlidesAfter: l } = t.params.virtual,
            {
              from: o,
              to: d,
              slides: p,
              slidesGrid: c,
              renderSlide: h,
              offset: u,
            } = t.virtual;
          t.updateActiveIndex();
          const m = t.activeIndex || 0;
          let f, g, v;
          (f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
            i
              ? ((g = Math.floor(s / 2) + a + n),
                (v = Math.floor(s / 2) + a + l))
              : ((g = s + (a - 1) + n), (v = a + l));
          const b = Math.max((m || 0) - v, 0),
            w = Math.min((m || 0) + g, p.length - 1),
            y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
          function x() {
            t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
              t.lazy && t.params.lazy.enabled && t.lazy.load();
          }
          if (
            (r.extend(t.virtual, {
              from: b,
              to: w,
              offset: y,
              slidesGrid: t.slidesGrid,
            }),
            o === b && d === w && !e)
          )
            return (
              t.slidesGrid !== c && y !== u && t.slides.css(f, `${y}px`),
              void t.updateProgress()
            );
          if (t.params.virtual.renderExternal)
            return (
              t.params.virtual.renderExternal.call(t, {
                offset: y,
                from: b,
                to: w,
                slides: (function () {
                  const e = [];
                  for (let t = b; t <= w; t += 1) e.push(p[t]);
                  return e;
                })(),
              }),
              void x()
            );
          const T = [],
            E = [];
          if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
          else
            for (let r = o; r <= d; r += 1)
              (r < b || r > w) &&
                t.$wrapperEl
                  .find(
                    `.${t.params.slideClass}[data-swiper-slide-index="${r}"]`
                  )
                  .remove();
          for (let r = 0; r < p.length; r += 1)
            r >= b &&
              r <= w &&
              ("undefined" === typeof d || e
                ? E.push(r)
                : (r > d && E.push(r), r < o && T.push(r)));
          E.forEach((e) => {
            t.$wrapperEl.append(h(p[e], e));
          }),
            T.sort((e, t) => t - e).forEach((e) => {
              t.$wrapperEl.prepend(h(p[e], e));
            }),
            t.$wrapperEl.children(".swiper-slide").css(f, `${y}px`),
            x();
        },
        renderSlide(e, t) {
          const s = this,
            i = s.params.virtual;
          if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
          const n = i.renderSlide
            ? Object(a.a)(i.renderSlide.call(s, e, t))
            : Object(a.a)(
                `<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
              );
          return (
            n.attr("data-swiper-slide-index") ||
              n.attr("data-swiper-slide-index", t),
            i.cache && (s.virtual.cache[t] = n),
            n
          );
        },
        appendSlide(e) {
          const t = this;
          if ("object" === typeof e && "length" in e)
            for (let s = 0; s < e.length; s += 1)
              e[s] && t.virtual.slides.push(e[s]);
          else t.virtual.slides.push(e);
          t.virtual.update(!0);
        },
        prependSlide(e) {
          const t = this,
            s = t.activeIndex;
          let a = s + 1,
            i = 1;
          if (Array.isArray(e)) {
            for (let s = 0; s < e.length; s += 1)
              e[s] && t.virtual.slides.unshift(e[s]);
            (a = s + e.length), (i = e.length);
          } else t.virtual.slides.unshift(e);
          if (t.params.virtual.cache) {
            const e = t.virtual.cache,
              s = {};
            Object.keys(e).forEach((t) => {
              const a = e[t],
                n = a.attr("data-swiper-slide-index");
              n && a.attr("data-swiper-slide-index", parseInt(n, 10) + 1),
                (s[parseInt(t, 10) + i] = a);
            }),
              (t.virtual.cache = s);
          }
          t.virtual.update(!0), t.slideTo(a, 0);
        },
        removeSlide(e) {
          const t = this;
          if ("undefined" === typeof e || null === e) return;
          let s = t.activeIndex;
          if (Array.isArray(e))
            for (let a = e.length - 1; a >= 0; a -= 1)
              t.virtual.slides.splice(e[a], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[a]],
                e[a] < s && (s -= 1),
                (s = Math.max(s, 0));
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < s && (s -= 1),
              (s = Math.max(s, 0));
          t.virtual.update(!0), t.slideTo(s, 0);
        },
        removeAllSlides() {
          const e = this;
          (e.virtual.slides = []),
            e.params.virtual.cache && (e.virtual.cache = {}),
            e.virtual.update(!0),
            e.slideTo(0, 0);
        },
      };
      var H = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        },
        create() {
          r.extend(this, {
            virtual: {
              update: A.update.bind(this),
              appendSlide: A.appendSlide.bind(this),
              prependSlide: A.prependSlide.bind(this),
              removeSlide: A.removeSlide.bind(this),
              removeAllSlides: A.removeAllSlides.bind(this),
              renderSlide: A.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {},
            },
          });
        },
        on: {
          beforeInit() {
            const e = this;
            if (!e.params.virtual.enabled) return;
            e.classNames.push(`${e.params.containerModifierClass}virtual`);
            const t = { watchSlidesProgress: !0 };
            r.extend(e.params, t),
              r.extend(e.originalParams, t),
              e.params.initialSlide || e.virtual.update();
          },
          setTranslate() {
            this.params.virtual.enabled && this.virtual.update();
          },
        },
      };
      const B = {
        handle(e) {
          const t = this,
            { rtlTranslate: s } = t;
          let a = e;
          a.originalEvent && (a = a.originalEvent);
          const n = a.keyCode || a.charCode;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && 39 === n) ||
              (t.isVertical() && 40 === n) ||
              34 === n)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && 37 === n) ||
              (t.isVertical() && 38 === n) ||
              33 === n)
          )
            return !1;
          if (
            !(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey) &&
            (!i.a.activeElement ||
              !i.a.activeElement.nodeName ||
              ("input" !== i.a.activeElement.nodeName.toLowerCase() &&
                "textarea" !== i.a.activeElement.nodeName.toLowerCase()))
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (33 === n ||
                34 === n ||
                37 === n ||
                39 === n ||
                38 === n ||
                40 === n)
            ) {
              let e = !1;
              if (
                t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
                0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
              )
                return;
              const a = i.b.innerWidth,
                n = i.b.innerHeight,
                r = t.$el.offset();
              s && (r.left -= t.$el[0].scrollLeft);
              const l = [
                [r.left, r.top],
                [r.left + t.width, r.top],
                [r.left, r.top + t.height],
                [r.left + t.width, r.top + t.height],
              ];
              for (let t = 0; t < l.length; t += 1) {
                const s = l[t];
                s[0] >= 0 && s[0] <= a && s[1] >= 0 && s[1] <= n && (e = !0);
              }
              if (!e) return;
            }
            t.isHorizontal()
              ? ((33 !== n && 34 !== n && 37 !== n && 39 !== n) ||
                  (a.preventDefault
                    ? a.preventDefault()
                    : (a.returnValue = !1)),
                (((34 !== n && 39 !== n) || s) &&
                  ((33 !== n && 37 !== n) || !s)) ||
                  t.slideNext(),
                (((33 !== n && 37 !== n) || s) &&
                  ((34 !== n && 39 !== n) || !s)) ||
                  t.slidePrev())
              : ((33 !== n && 34 !== n && 38 !== n && 40 !== n) ||
                  (a.preventDefault
                    ? a.preventDefault()
                    : (a.returnValue = !1)),
                (34 !== n && 40 !== n) || t.slideNext(),
                (33 !== n && 38 !== n) || t.slidePrev()),
              t.emit("keyPress", n);
          }
        },
        enable() {
          this.keyboard.enabled ||
            (Object(a.a)(i.a).on("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !0));
        },
        disable() {
          this.keyboard.enabled &&
            (Object(a.a)(i.a).off("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !1));
        },
      };
      var j = {
        name: "keyboard",
        params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
        create() {
          r.extend(this, {
            keyboard: {
              enabled: !1,
              enable: B.enable.bind(this),
              disable: B.disable.bind(this),
              handle: B.handle.bind(this),
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.keyboard.enabled && e.keyboard.enable();
          },
          destroy() {
            const e = this;
            e.keyboard.enabled && e.keyboard.disable();
          },
        },
      };
      const X = {
        lastScrollTime: r.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: () =>
          i.b.navigator.userAgent.indexOf("firefox") > -1
            ? "DOMMouseScroll"
            : (function () {
                let e = "onwheel" in i.a;
                if (!e) {
                  const t = i.a.createElement("div");
                  t.setAttribute("onwheel", "return;"),
                    (e = "function" === typeof t.onwheel);
                }
                return (
                  !e &&
                    i.a.implementation &&
                    i.a.implementation.hasFeature &&
                    !0 !== i.a.implementation.hasFeature("", "") &&
                    (e = i.a.implementation.hasFeature("Events.wheel", "3.0")),
                  e
                );
              })()
            ? "wheel"
            : "mousewheel",
        normalize(e) {
          let t = 0,
            s = 0,
            a = 0,
            i = 0;
          return (
            "detail" in e && (s = e.detail),
            "wheelDelta" in e && (s = -e.wheelDelta / 120),
            "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
            "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
            (a = 10 * t),
            (i = 10 * s),
            "deltaY" in e && (i = e.deltaY),
            "deltaX" in e && (a = e.deltaX),
            e.shiftKey && !a && ((a = i), (i = 0)),
            (a || i) &&
              e.deltaMode &&
              (1 === e.deltaMode
                ? ((a *= 40), (i *= 40))
                : ((a *= 800), (i *= 800))),
            a && !t && (t = a < 1 ? -1 : 1),
            i && !s && (s = i < 1 ? -1 : 1),
            { spinX: t, spinY: s, pixelX: a, pixelY: i }
          );
        },
        handleMouseEnter() {
          this.mouseEntered = !0;
        },
        handleMouseLeave() {
          this.mouseEntered = !1;
        },
        handle(e) {
          let t = e;
          const s = this,
            i = s.params.mousewheel;
          s.params.cssMode && t.preventDefault();
          let n = s.$el;
          if (
            ("container" !== s.params.mousewheel.eventsTarged &&
              (n = Object(a.a)(s.params.mousewheel.eventsTarged)),
            !s.mouseEntered && !n[0].contains(t.target) && !i.releaseOnEdges)
          )
            return !0;
          t.originalEvent && (t = t.originalEvent);
          let l = 0;
          const o = s.rtlTranslate ? -1 : 1,
            d = X.normalize(t);
          if (i.forceToAxis)
            if (s.isHorizontal()) {
              if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
              l = d.pixelX * o;
            } else {
              if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
              l = d.pixelY;
            }
          else
            l =
              Math.abs(d.pixelX) > Math.abs(d.pixelY)
                ? -d.pixelX * o
                : -d.pixelY;
          if (0 === l) return !0;
          if ((i.invert && (l = -l), s.params.freeMode)) {
            const e = {
                time: r.now(),
                delta: Math.abs(l),
                direction: Math.sign(l),
              },
              { lastEventBeforeSnap: a } = s.mousewheel,
              n =
                a &&
                e.time < a.time + 500 &&
                e.delta <= a.delta &&
                e.direction === a.direction;
            if (!n) {
              (s.mousewheel.lastEventBeforeSnap = void 0),
                s.params.loop && s.loopFix();
              let a = s.getTranslate() + l * i.sensitivity;
              const o = s.isBeginning,
                d = s.isEnd;
              if (
                (a >= s.minTranslate() && (a = s.minTranslate()),
                a <= s.maxTranslate() && (a = s.maxTranslate()),
                s.setTransition(0),
                s.setTranslate(a),
                s.updateProgress(),
                s.updateActiveIndex(),
                s.updateSlidesClasses(),
                ((!o && s.isBeginning) || (!d && s.isEnd)) &&
                  s.updateSlidesClasses(),
                s.params.freeModeSticky)
              ) {
                clearTimeout(s.mousewheel.timeout),
                  (s.mousewheel.timeout = void 0);
                const t = s.mousewheel.recentWheelEvents;
                t.length >= 15 && t.shift();
                const a = t.length ? t[t.length - 1] : void 0,
                  i = t[0];
                if (
                  (t.push(e),
                  a && (e.delta > a.delta || e.direction !== a.direction))
                )
                  t.splice(0);
                else if (
                  t.length >= 15 &&
                  e.time - i.time < 500 &&
                  i.delta - e.delta >= 1 &&
                  e.delta <= 6
                ) {
                  const a = l > 0 ? 0.8 : 0.2;
                  (s.mousewheel.lastEventBeforeSnap = e),
                    t.splice(0),
                    (s.mousewheel.timeout = r.nextTick(() => {
                      s.slideToClosest(s.params.speed, !0, void 0, a);
                    }, 0));
                }
                s.mousewheel.timeout ||
                  (s.mousewheel.timeout = r.nextTick(() => {
                    (s.mousewheel.lastEventBeforeSnap = e),
                      t.splice(0),
                      s.slideToClosest(s.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (n || s.emit("scroll", t),
                s.params.autoplay &&
                  s.params.autoplayDisableOnInteraction &&
                  s.autoplay.stop(),
                a === s.minTranslate() || a === s.maxTranslate())
              )
                return !0;
            }
          } else {
            const t = {
                time: r.now(),
                delta: Math.abs(l),
                direction: Math.sign(l),
                raw: e,
              },
              a = s.mousewheel.recentWheelEvents;
            a.length >= 2 && a.shift();
            const i = a.length ? a[a.length - 1] : void 0;
            if (
              (a.push(t),
              i
                ? (t.direction !== i.direction || t.delta > i.delta) &&
                  s.mousewheel.animateSlider(t)
                : s.mousewheel.animateSlider(t),
              s.mousewheel.releaseScroll(t))
            )
              return !0;
          }
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
          );
        },
        animateSlider(e) {
          const t = this;
          return (
            (e.delta >= 6 && r.now() - t.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), t.emit("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), t.emit("scroll", e.raw)),
            (t.mousewheel.lastScrollTime = new i.b.Date().getTime()),
            !1)
          );
        },
        releaseScroll(e) {
          const t = this,
            s = t.params.mousewheel;
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
            return !0;
          return !1;
        },
        enable() {
          const e = this,
            t = X.event();
          if (e.params.cssMode)
            return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
          if (!t) return !1;
          if (e.mousewheel.enabled) return !1;
          let s = e.$el;
          return (
            "container" !== e.params.mousewheel.eventsTarged &&
              (s = Object(a.a)(e.params.mousewheel.eventsTarged)),
            s.on("mouseenter", e.mousewheel.handleMouseEnter),
            s.on("mouseleave", e.mousewheel.handleMouseLeave),
            s.on(t, e.mousewheel.handle),
            (e.mousewheel.enabled = !0),
            !0
          );
        },
        disable() {
          const e = this,
            t = X.event();
          if (e.params.cssMode)
            return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
          if (!t) return !1;
          if (!e.mousewheel.enabled) return !1;
          let s = e.$el;
          return (
            "container" !== e.params.mousewheel.eventsTarged &&
              (s = Object(a.a)(e.params.mousewheel.eventsTarged)),
            s.off(t, e.mousewheel.handle),
            (e.mousewheel.enabled = !1),
            !0
          );
        },
      };
      const Y = {
        update() {
          const e = this,
            t = e.params.navigation;
          if (e.params.loop) return;
          const { $nextEl: s, $prevEl: a } = e.navigation;
          a &&
            a.length > 0 &&
            (e.isBeginning
              ? a.addClass(t.disabledClass)
              : a.removeClass(t.disabledClass),
            a[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](t.lockClass)),
            s &&
              s.length > 0 &&
              (e.isEnd
                ? s.addClass(t.disabledClass)
                : s.removeClass(t.disabledClass),
              s[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass));
        },
        onPrevClick(e) {
          e.preventDefault(),
            (this.isBeginning && !this.params.loop) || this.slidePrev();
        },
        onNextClick(e) {
          e.preventDefault(),
            (this.isEnd && !this.params.loop) || this.slideNext();
        },
        init() {
          const e = this,
            t = e.params.navigation;
          if (!t.nextEl && !t.prevEl) return;
          let s, i;
          t.nextEl &&
            ((s = Object(a.a)(t.nextEl)),
            e.params.uniqueNavElements &&
              "string" === typeof t.nextEl &&
              s.length > 1 &&
              1 === e.$el.find(t.nextEl).length &&
              (s = e.$el.find(t.nextEl))),
            t.prevEl &&
              ((i = Object(a.a)(t.prevEl)),
              e.params.uniqueNavElements &&
                "string" === typeof t.prevEl &&
                i.length > 1 &&
                1 === e.$el.find(t.prevEl).length &&
                (i = e.$el.find(t.prevEl))),
            s && s.length > 0 && s.on("click", e.navigation.onNextClick),
            i && i.length > 0 && i.on("click", e.navigation.onPrevClick),
            r.extend(e.navigation, {
              $nextEl: s,
              nextEl: s && s[0],
              $prevEl: i,
              prevEl: i && i[0],
            });
        },
        destroy() {
          const e = this,
            { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t.length &&
            (t.off("click", e.navigation.onNextClick),
            t.removeClass(e.params.navigation.disabledClass)),
            s &&
              s.length &&
              (s.off("click", e.navigation.onPrevClick),
              s.removeClass(e.params.navigation.disabledClass));
        },
      };
      const N = {
        update() {
          const e = this,
            t = e.rtl,
            s = e.params.pagination;
          if (
            !s.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          )
            return;
          const i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            n = e.pagination.$el;
          let r;
          const l = e.params.loop
            ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((r = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                r > i - 1 - 2 * e.loopedSlides && (r -= i - 2 * e.loopedSlides),
                r > l - 1 && (r -= l),
                r < 0 && "bullets" !== e.params.paginationType && (r = l + r))
              : (r =
                  "undefined" !== typeof e.snapIndex
                    ? e.snapIndex
                    : e.activeIndex || 0),
            "bullets" === s.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const i = e.pagination.bullets;
            let l, o, d;
            if (
              (s.dynamicBullets &&
                ((e.pagination.bulletSize = i
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                n.css(
                  e.isHorizontal() ? "width" : "height",
                  `${e.pagination.bulletSize * (s.dynamicMainBullets + 4)}px`
                ),
                s.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += r - e.previousIndex),
                  e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        s.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (l = r - e.pagination.dynamicBulletIndex),
                (o = l + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                (d = (o + l) / 2)),
              i.removeClass(
                `${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`
              ),
              n.length > 1)
            )
              i.each((e, t) => {
                const i = Object(a.a)(t),
                  n = i.index();
                n === r && i.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (n >= l &&
                      n <= o &&
                      i.addClass(`${s.bulletActiveClass}-main`),
                    n === l &&
                      i
                        .prev()
                        .addClass(`${s.bulletActiveClass}-prev`)
                        .prev()
                        .addClass(`${s.bulletActiveClass}-prev-prev`),
                    n === o &&
                      i
                        .next()
                        .addClass(`${s.bulletActiveClass}-next`)
                        .next()
                        .addClass(`${s.bulletActiveClass}-next-next`));
              });
            else {
              const t = i.eq(r),
                a = t.index();
              if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                const t = i.eq(l),
                  n = i.eq(o);
                for (let e = l; e <= o; e += 1)
                  i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (a >= i.length - s.dynamicMainBullets) {
                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        `${s.bulletActiveClass}-main`
                      );
                    i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                      `${s.bulletActiveClass}-prev`
                    );
                  } else
                    t
                      .prev()
                      .addClass(`${s.bulletActiveClass}-prev`)
                      .prev()
                      .addClass(`${s.bulletActiveClass}-prev-prev`),
                      n
                        .next()
                        .addClass(`${s.bulletActiveClass}-next`)
                        .next()
                        .addClass(`${s.bulletActiveClass}-next-next`);
                else
                  t
                    .prev()
                    .addClass(`${s.bulletActiveClass}-prev`)
                    .prev()
                    .addClass(`${s.bulletActiveClass}-prev-prev`),
                    n
                      .next()
                      .addClass(`${s.bulletActiveClass}-next`)
                      .next()
                      .addClass(`${s.bulletActiveClass}-next-next`);
              }
            }
            if (s.dynamicBullets) {
              const a = Math.min(i.length, s.dynamicMainBullets + 4),
                n =
                  (e.pagination.bulletSize * a - e.pagination.bulletSize) / 2 -
                  d * e.pagination.bulletSize,
                r = t ? "right" : "left";
              i.css(e.isHorizontal() ? r : "top", `${n}px`);
            }
          }
          if (
            ("fraction" === s.type &&
              (n
                .find(`.${s.currentClass}`)
                .text(s.formatFractionCurrent(r + 1)),
              n.find(`.${s.totalClass}`).text(s.formatFractionTotal(l))),
            "progressbar" === s.type)
          ) {
            let t;
            t = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const a = (r + 1) / l;
            let i = 1,
              o = 1;
            "horizontal" === t ? (i = a) : (o = a),
              n
                .find(`.${s.progressbarFillClass}`)
                .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${o})`)
                .transition(e.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (n.html(s.renderCustom(e, r + 1, l)),
              e.emit("paginationRender", e, n[0]))
            : e.emit("paginationUpdate", e, n[0]),
            n[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](s.lockClass);
        },
        render() {
          const e = this,
            t = e.params.pagination;
          if (
            !t.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          )
            return;
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            a = e.pagination.$el;
          let i = "";
          if ("bullets" === t.type) {
            const n = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            for (let s = 0; s < n; s += 1)
              t.renderBullet
                ? (i += t.renderBullet.call(e, s, t.bulletClass))
                : (i += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            a.html(i), (e.pagination.bullets = a.find(`.${t.bulletClass}`));
          }
          "fraction" === t.type &&
            ((i = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span>` +
                " / " +
                `<span class="${t.totalClass}"></span>`),
            a.html(i)),
            "progressbar" === t.type &&
              ((i = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              a.html(i)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        },
        init() {
          const e = this,
            t = e.params.pagination;
          if (!t.el) return;
          let s = Object(a.a)(t.el);
          0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" === typeof t.el &&
              s.length > 1 &&
              1 === e.$el.find(t.el).length &&
              (s = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
            s.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              s.addClass(t.progressbarOppositeClass),
            t.clickable &&
              s.on("click", `.${t.bulletClass}`, function (t) {
                t.preventDefault();
                let s = Object(a.a)(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides), e.slideTo(s);
              }),
            r.extend(e.pagination, { $el: s, el: s[0] }));
        },
        destroy() {
          const e = this.params.pagination;
          if (
            !e.el ||
            !this.pagination.el ||
            !this.pagination.$el ||
            0 === this.pagination.$el.length
          )
            return;
          const t = this.pagination.$el;
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off("click", `.${e.bulletClass}`);
        },
      };
      const V = {
        setTranslate() {
          const e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t, rtlTranslate: s, progress: a } = e,
            { dragSize: i, trackSize: n, $dragEl: r, $el: l } = t,
            o = e.params.scrollbar;
          let d = i,
            p = (n - i) * a;
          s
            ? ((p = -p),
              p > 0 ? ((d = i - p), (p = 0)) : -p + i > n && (d = n + p))
            : p < 0
            ? ((d = i + p), (p = 0))
            : p + i > n && (d = n - p),
            e.isHorizontal()
              ? (r.transform(`translate3d(${p}px, 0, 0)`),
                (r[0].style.width = `${d}px`))
              : (r.transform(`translate3d(0px, ${p}px, 0)`),
                (r[0].style.height = `${d}px`)),
            o.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (l[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(() => {
                (l[0].style.opacity = 0), l.transition(400);
              }, 1e3)));
        },
        setTransition(e) {
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            this.scrollbar.$dragEl.transition(e);
        },
        updateSize() {
          const e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t } = e,
            { $dragEl: s, $el: a } = t;
          (s[0].style.width = ""), (s[0].style.height = "");
          const i = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
            n = e.size / e.virtualSize,
            l = n * (i / e.size);
          let o;
          (o =
            "auto" === e.params.scrollbar.dragSize
              ? i * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (s[0].style.width = `${o}px`)
              : (s[0].style.height = `${o}px`),
            (a[0].style.display = n >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (a[0].style.opacity = 0),
            r.extend(t, {
              trackSize: i,
              divider: n,
              moveDivider: l,
              dragSize: o,
            }),
            t.$el[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](e.params.scrollbar.lockClass);
        },
        getPointerPosition(e) {
          return this.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        },
        setDragPosition(e) {
          const { scrollbar: t, rtlTranslate: s } = this,
            { $el: a, dragSize: i, trackSize: n, dragStartPos: r } = t;
          let l;
          (l =
            (t.getPointerPosition(e) -
              a.offset()[this.isHorizontal() ? "left" : "top"] -
              (null !== r ? r : i / 2)) /
            (n - i)),
            (l = Math.max(Math.min(l, 1), 0)),
            s && (l = 1 - l);
          const o =
            this.minTranslate() +
            (this.maxTranslate() - this.minTranslate()) * l;
          this.updateProgress(o),
            this.setTranslate(o),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        },
        onDragStart(e) {
          const t = this,
            s = t.params.scrollbar,
            { scrollbar: a, $wrapperEl: i } = t,
            { $el: n, $dragEl: r } = a;
          (t.scrollbar.isTouched = !0),
            (t.scrollbar.dragStartPos =
              e.target === r[0] || e.target === r
                ? a.getPointerPosition(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            i.transition(100),
            r.transition(100),
            a.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            n.transition(0),
            s.hide && n.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            t.emit("scrollbarDragStart", e);
        },
        onDragMove(e) {
          const { scrollbar: t, $wrapperEl: s } = this,
            { $el: a, $dragEl: i } = t;
          this.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            t.setDragPosition(e),
            s.transition(0),
            a.transition(0),
            i.transition(0),
            this.emit("scrollbarDragMove", e));
        },
        onDragEnd(e) {
          const t = this,
            s = t.params.scrollbar,
            { scrollbar: a, $wrapperEl: i } = t,
            { $el: n } = a;
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
            s.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = r.nextTick(() => {
                n.css("opacity", 0), n.transition(400);
              }, 1e3))),
            t.emit("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest());
        },
        enableDraggable() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const {
              scrollbar: t,
              touchEventsTouch: s,
              touchEventsDesktop: a,
              params: n,
            } = e,
            r = t.$el[0],
            o = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          l.touch
            ? (r.addEventListener(s.start, e.scrollbar.onDragStart, o),
              r.addEventListener(s.move, e.scrollbar.onDragMove, o),
              r.addEventListener(s.end, e.scrollbar.onDragEnd, d))
            : (r.addEventListener(a.start, e.scrollbar.onDragStart, o),
              i.a.addEventListener(a.move, e.scrollbar.onDragMove, o),
              i.a.addEventListener(a.end, e.scrollbar.onDragEnd, d));
        },
        disableDraggable() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const {
              scrollbar: t,
              touchEventsTouch: s,
              touchEventsDesktop: a,
              params: n,
            } = e,
            r = t.$el[0],
            o = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!l.passiveListener || !n.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          l.touch
            ? (r.removeEventListener(s.start, e.scrollbar.onDragStart, o),
              r.removeEventListener(s.move, e.scrollbar.onDragMove, o),
              r.removeEventListener(s.end, e.scrollbar.onDragEnd, d))
            : (r.removeEventListener(a.start, e.scrollbar.onDragStart, o),
              i.a.removeEventListener(a.move, e.scrollbar.onDragMove, o),
              i.a.removeEventListener(a.end, e.scrollbar.onDragEnd, d));
        },
        init() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const { scrollbar: t, $el: s } = e,
            i = e.params.scrollbar;
          let n = Object(a.a)(i.el);
          e.params.uniqueNavElements &&
            "string" === typeof i.el &&
            n.length > 1 &&
            1 === s.find(i.el).length &&
            (n = s.find(i.el));
          let l = n.find(`.${e.params.scrollbar.dragClass}`);
          0 === l.length &&
            ((l = Object(a.a)(
              `<div class="${e.params.scrollbar.dragClass}"></div>`
            )),
            n.append(l)),
            r.extend(t, { $el: n, el: n[0], $dragEl: l, dragEl: l[0] }),
            i.draggable && t.enableDraggable();
        },
        destroy() {
          this.scrollbar.disableDraggable();
        },
      };
      const F = {
        setTransform(e, t) {
          const { rtl: s } = this,
            i = Object(a.a)(e),
            n = s ? -1 : 1,
            r = i.attr("data-swiper-parallax") || "0";
          let l = i.attr("data-swiper-parallax-x"),
            o = i.attr("data-swiper-parallax-y");
          const d = i.attr("data-swiper-parallax-scale"),
            p = i.attr("data-swiper-parallax-opacity");
          if (
            (l || o
              ? ((l = l || "0"), (o = o || "0"))
              : this.isHorizontal()
              ? ((l = r), (o = "0"))
              : ((o = r), (l = "0")),
            (l =
              l.indexOf("%") >= 0
                ? `${parseInt(l, 10) * t * n}%`
                : `${l * t * n}px`),
            (o =
              o.indexOf("%") >= 0 ? `${parseInt(o, 10) * t}%` : `${o * t}px`),
            "undefined" !== typeof p && null !== p)
          ) {
            const e = p - (p - 1) * (1 - Math.abs(t));
            i[0].style.opacity = e;
          }
          if ("undefined" === typeof d || null === d)
            i.transform(`translate3d(${l}, ${o}, 0px)`);
          else {
            const e = d - (d - 1) * (1 - Math.abs(t));
            i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
          }
        },
        setTranslate() {
          const e = this,
            { $el: t, slides: s, progress: i, snapGrid: n } = e;
          t
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each((t, s) => {
              e.parallax.setTransform(s, i);
            }),
            s.each((t, s) => {
              let r = s.progress;
              e.params.slidesPerGroup > 1 &&
                "auto" !== e.params.slidesPerView &&
                (r += Math.ceil(t / 2) - i * (n.length - 1)),
                (r = Math.min(Math.max(r, -1), 1)),
                Object(a.a)(s)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((t, s) => {
                    e.parallax.setTransform(s, r);
                  });
            });
        },
        setTransition(e = this.params.speed) {
          const { $el: t } = this;
          t.find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          ).each((t, s) => {
            const i = Object(a.a)(s);
            let n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (n = 0), i.transition(n);
          });
        },
      };
      const W = {
        getDistanceBetweenTouches(e) {
          if (e.targetTouches.length < 2) return 1;
          const t = e.targetTouches[0].pageX,
            s = e.targetTouches[0].pageY,
            a = e.targetTouches[1].pageX,
            i = e.targetTouches[1].pageY;
          return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
        },
        onGestureStart(e) {
          const t = this,
            s = t.params.zoom,
            i = t.zoom,
            { gesture: n } = i;
          if (
            ((i.fakeGestureTouched = !1),
            (i.fakeGestureMoved = !1),
            !l.gestures)
          ) {
            if (
              "touchstart" !== e.type ||
              ("touchstart" === e.type && e.targetTouches.length < 2)
            )
              return;
            (i.fakeGestureTouched = !0),
              (n.scaleStart = W.getDistanceBetweenTouches(e));
          }
          (n.$slideEl && n.$slideEl.length) ||
          ((n.$slideEl = Object(a.a)(e.target).closest(
            `.${t.params.slideClass}`
          )),
          0 === n.$slideEl.length && (n.$slideEl = t.slides.eq(t.activeIndex)),
          (n.$imageEl = n.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (n.$imageWrapEl = n.$imageEl.parent(`.${s.containerClass}`)),
          (n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
          0 !== n.$imageWrapEl.length)
            ? (n.$imageEl.transition(0), (t.zoom.isScaling = !0))
            : (n.$imageEl = void 0);
        },
        onGestureChange(e) {
          const t = this.params.zoom,
            s = this.zoom,
            { gesture: a } = s;
          if (!l.gestures) {
            if (
              "touchmove" !== e.type ||
              ("touchmove" === e.type && e.targetTouches.length < 2)
            )
              return;
            (s.fakeGestureMoved = !0),
              (a.scaleMove = W.getDistanceBetweenTouches(e));
          }
          a.$imageEl &&
            0 !== a.$imageEl.length &&
            (l.gestures
              ? (s.scale = e.scale * s.currentScale)
              : (s.scale = (a.scaleMove / a.scaleStart) * s.currentScale),
            s.scale > a.maxRatio &&
              (s.scale = a.maxRatio - 1 + (s.scale - a.maxRatio + 1) ** 0.5),
            s.scale < t.minRatio &&
              (s.scale = t.minRatio + 1 - (t.minRatio - s.scale + 1) ** 0.5),
            a.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`));
        },
        onGestureEnd(e) {
          const t = this.params.zoom,
            s = this.zoom,
            { gesture: a } = s;
          if (!l.gestures) {
            if (!s.fakeGestureTouched || !s.fakeGestureMoved) return;
            if (
              "touchend" !== e.type ||
              ("touchend" === e.type &&
                e.changedTouches.length < 2 &&
                !g.android)
            )
              return;
            (s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1);
          }
          a.$imageEl &&
            0 !== a.$imageEl.length &&
            ((s.scale = Math.max(Math.min(s.scale, a.maxRatio), t.minRatio)),
            a.$imageEl
              .transition(this.params.speed)
              .transform(`translate3d(0,0,0) scale(${s.scale})`),
            (s.currentScale = s.scale),
            (s.isScaling = !1),
            1 === s.scale && (a.$slideEl = void 0));
        },
        onTouchStart(e) {
          const t = this.zoom,
            { gesture: s, image: a } = t;
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            (a.isTouched ||
              (g.android && e.preventDefault(),
              (a.isTouched = !0),
              (a.touchesStart.x =
                "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (a.touchesStart.y =
                "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
        },
        onTouchMove(e) {
          const t = this,
            s = t.zoom,
            { gesture: a, image: i, velocity: n } = s;
          if (!a.$imageEl || 0 === a.$imageEl.length) return;
          if (((t.allowClick = !1), !i.isTouched || !a.$slideEl)) return;
          i.isMoved ||
            ((i.width = a.$imageEl[0].offsetWidth),
            (i.height = a.$imageEl[0].offsetHeight),
            (i.startX = r.getTranslate(a.$imageWrapEl[0], "x") || 0),
            (i.startY = r.getTranslate(a.$imageWrapEl[0], "y") || 0),
            (a.slideWidth = a.$slideEl[0].offsetWidth),
            (a.slideHeight = a.$slideEl[0].offsetHeight),
            a.$imageWrapEl.transition(0),
            t.rtl && ((i.startX = -i.startX), (i.startY = -i.startY)));
          const l = i.width * s.scale,
            o = i.height * s.scale;
          if (!(l < a.slideWidth && o < a.slideHeight)) {
            if (
              ((i.minX = Math.min(a.slideWidth / 2 - l / 2, 0)),
              (i.maxX = -i.minX),
              (i.minY = Math.min(a.slideHeight / 2 - o / 2, 0)),
              (i.maxY = -i.minY),
              (i.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (i.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !i.isMoved && !s.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(i.minX) === Math.floor(i.startX) &&
                  i.touchesCurrent.x < i.touchesStart.x) ||
                  (Math.floor(i.maxX) === Math.floor(i.startX) &&
                    i.touchesCurrent.x > i.touchesStart.x))
              )
                return void (i.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(i.minY) === Math.floor(i.startY) &&
                  i.touchesCurrent.y < i.touchesStart.y) ||
                  (Math.floor(i.maxY) === Math.floor(i.startY) &&
                    i.touchesCurrent.y > i.touchesStart.y))
              )
                return void (i.isTouched = !1);
            }
            e.preventDefault(),
              e.stopPropagation(),
              (i.isMoved = !0),
              (i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX),
              (i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY),
              i.currentX < i.minX &&
                (i.currentX = i.minX + 1 - (i.minX - i.currentX + 1) ** 0.8),
              i.currentX > i.maxX &&
                (i.currentX = i.maxX - 1 + (i.currentX - i.maxX + 1) ** 0.8),
              i.currentY < i.minY &&
                (i.currentY = i.minY + 1 - (i.minY - i.currentY + 1) ** 0.8),
              i.currentY > i.maxY &&
                (i.currentY = i.maxY - 1 + (i.currentY - i.maxY + 1) ** 0.8),
              n.prevPositionX || (n.prevPositionX = i.touchesCurrent.x),
              n.prevPositionY || (n.prevPositionY = i.touchesCurrent.y),
              n.prevTime || (n.prevTime = Date.now()),
              (n.x =
                (i.touchesCurrent.x - n.prevPositionX) /
                (Date.now() - n.prevTime) /
                2),
              (n.y =
                (i.touchesCurrent.y - n.prevPositionY) /
                (Date.now() - n.prevTime) /
                2),
              Math.abs(i.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
              Math.abs(i.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
              (n.prevPositionX = i.touchesCurrent.x),
              (n.prevPositionY = i.touchesCurrent.y),
              (n.prevTime = Date.now()),
              a.$imageWrapEl.transform(
                `translate3d(${i.currentX}px, ${i.currentY}px,0)`
              );
          }
        },
        onTouchEnd() {
          const e = this.zoom,
            { gesture: t, image: s, velocity: a } = e;
          if (!t.$imageEl || 0 === t.$imageEl.length) return;
          if (!s.isTouched || !s.isMoved)
            return (s.isTouched = !1), void (s.isMoved = !1);
          (s.isTouched = !1), (s.isMoved = !1);
          let i = 300,
            n = 300;
          const r = a.x * i,
            l = s.currentX + r,
            o = a.y * n,
            d = s.currentY + o;
          0 !== a.x && (i = Math.abs((l - s.currentX) / a.x)),
            0 !== a.y && (n = Math.abs((d - s.currentY) / a.y));
          const p = Math.max(i, n);
          (s.currentX = l), (s.currentY = d);
          const c = s.width * e.scale,
            h = s.height * e.scale;
          (s.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
            (s.maxX = -s.minX),
            (s.minY = Math.min(t.slideHeight / 2 - h / 2, 0)),
            (s.maxY = -s.minY),
            (s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX)),
            (s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY)),
            t.$imageWrapEl
              .transition(p)
              .transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`);
        },
        onTransitionEnd() {
          const e = this.zoom,
            { gesture: t } = e;
          t.$slideEl &&
            this.previousIndex !== this.activeIndex &&
            (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            (e.scale = 1),
            (e.currentScale = 1),
            (t.$slideEl = void 0),
            (t.$imageEl = void 0),
            (t.$imageWrapEl = void 0));
        },
        toggle(e) {
          const t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in(e) {
          const t = this,
            s = t.zoom,
            a = t.params.zoom,
            { gesture: i, image: n } = s;
          if (
            (i.$slideEl ||
              ((i.$slideEl = t.slides.eq(t.activeIndex)),
              (i.$imageEl = i.$slideEl.find(
                "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (i.$imageWrapEl = i.$imageEl.parent(`.${a.containerClass}`))),
            !i.$imageEl || 0 === i.$imageEl.length)
          )
            return;
          let r, l, o, d, p, c, h, u, m, f, g, v, b, w, y, x, T, E;
          i.$slideEl.addClass(`${a.zoomedSlideClass}`),
            "undefined" === typeof n.touchesStart.x && e
              ? ((r =
                  "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
                (l =
                  "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
              : ((r = n.touchesStart.x), (l = n.touchesStart.y)),
            (s.scale = i.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
            (s.currentScale =
              i.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
            e
              ? ((T = i.$slideEl[0].offsetWidth),
                (E = i.$slideEl[0].offsetHeight),
                (o = i.$slideEl.offset().left),
                (d = i.$slideEl.offset().top),
                (p = o + T / 2 - r),
                (c = d + E / 2 - l),
                (m = i.$imageEl[0].offsetWidth),
                (f = i.$imageEl[0].offsetHeight),
                (g = m * s.scale),
                (v = f * s.scale),
                (b = Math.min(T / 2 - g / 2, 0)),
                (w = Math.min(E / 2 - v / 2, 0)),
                (y = -b),
                (x = -w),
                (h = p * s.scale),
                (u = c * s.scale),
                h < b && (h = b),
                h > y && (h = y),
                u < w && (u = w),
                u > x && (u = x))
              : ((h = 0), (u = 0)),
            i.$imageWrapEl
              .transition(300)
              .transform(`translate3d(${h}px, ${u}px,0)`),
            i.$imageEl
              .transition(300)
              .transform(`translate3d(0,0,0) scale(${s.scale})`);
        },
        out() {
          const e = this,
            t = e.zoom,
            s = e.params.zoom,
            { gesture: a } = t;
          a.$slideEl ||
            ((a.$slideEl = e.slides.eq(e.activeIndex)),
            (a.$imageEl = a.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (a.$imageWrapEl = a.$imageEl.parent(`.${s.containerClass}`))),
            a.$imageEl &&
              0 !== a.$imageEl.length &&
              ((t.scale = 1),
              (t.currentScale = 1),
              a.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              a.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              a.$slideEl.removeClass(`${s.zoomedSlideClass}`),
              (a.$slideEl = void 0));
        },
        enable() {
          const e = this,
            t = e.zoom;
          if (t.enabled) return;
          t.enabled = !0;
          const s = !(
              "touchstart" !== e.touchEvents.start ||
              !l.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            a = !l.passiveListener || { passive: !1, capture: !0 },
            i = `.${e.params.slideClass}`;
          l.gestures
            ? (e.$wrapperEl.on("gesturestart", i, t.onGestureStart, s),
              e.$wrapperEl.on("gesturechange", i, t.onGestureChange, s),
              e.$wrapperEl.on("gestureend", i, t.onGestureEnd, s))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.on(e.touchEvents.start, i, t.onGestureStart, s),
              e.$wrapperEl.on(e.touchEvents.move, i, t.onGestureChange, a),
              e.$wrapperEl.on(e.touchEvents.end, i, t.onGestureEnd, s),
              e.touchEvents.cancel &&
                e.$wrapperEl.on(e.touchEvents.cancel, i, t.onGestureEnd, s)),
            e.$wrapperEl.on(
              e.touchEvents.move,
              `.${e.params.zoom.containerClass}`,
              t.onTouchMove,
              a
            );
        },
        disable() {
          const e = this,
            t = e.zoom;
          if (!t.enabled) return;
          e.zoom.enabled = !1;
          const s = !(
              "touchstart" !== e.touchEvents.start ||
              !l.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            a = !l.passiveListener || { passive: !1, capture: !0 },
            i = `.${e.params.slideClass}`;
          l.gestures
            ? (e.$wrapperEl.off("gesturestart", i, t.onGestureStart, s),
              e.$wrapperEl.off("gesturechange", i, t.onGestureChange, s),
              e.$wrapperEl.off("gestureend", i, t.onGestureEnd, s))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.off(e.touchEvents.start, i, t.onGestureStart, s),
              e.$wrapperEl.off(e.touchEvents.move, i, t.onGestureChange, a),
              e.$wrapperEl.off(e.touchEvents.end, i, t.onGestureEnd, s),
              e.touchEvents.cancel &&
                e.$wrapperEl.off(e.touchEvents.cancel, i, t.onGestureEnd, s)),
            e.$wrapperEl.off(
              e.touchEvents.move,
              `.${e.params.zoom.containerClass}`,
              t.onTouchMove,
              a
            );
        },
      };
      const R = {
        loadInSlide(e, t = !0) {
          const s = this,
            i = s.params.lazy;
          if ("undefined" === typeof e) return;
          if (0 === s.slides.length) return;
          const n =
            s.virtual && s.params.virtual.enabled
              ? s.$wrapperEl.children(
                  `.${s.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : s.slides.eq(e);
          let r = n.find(
            `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
          );
          !n.hasClass(i.elementClass) ||
            n.hasClass(i.loadedClass) ||
            n.hasClass(i.loadingClass) ||
            (r = r.add(n[0])),
            0 !== r.length &&
              r.each((e, r) => {
                const l = Object(a.a)(r);
                l.addClass(i.loadingClass);
                const o = l.attr("data-background"),
                  d = l.attr("data-src"),
                  p = l.attr("data-srcset"),
                  c = l.attr("data-sizes");
                s.loadImage(l[0], d || o, p, c, !1, () => {
                  if (
                    "undefined" !== typeof s &&
                    null !== s &&
                    s &&
                    (!s || s.params) &&
                    !s.destroyed
                  ) {
                    if (
                      (o
                        ? (l.css("background-image", `url("${o}")`),
                          l.removeAttr("data-background"))
                        : (p &&
                            (l.attr("srcset", p), l.removeAttr("data-srcset")),
                          c && (l.attr("sizes", c), l.removeAttr("data-sizes")),
                          d && (l.attr("src", d), l.removeAttr("data-src"))),
                      l.addClass(i.loadedClass).removeClass(i.loadingClass),
                      n.find(`.${i.preloaderClass}`).remove(),
                      s.params.loop && t)
                    ) {
                      const e = n.attr("data-swiper-slide-index");
                      if (n.hasClass(s.params.slideDuplicateClass)) {
                        const t = s.$wrapperEl.children(
                          `[data-swiper-slide-index="${e}"]:not(.${s.params.slideDuplicateClass})`
                        );
                        s.lazy.loadInSlide(t.index(), !1);
                      } else {
                        const t = s.$wrapperEl.children(
                          `.${s.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                        );
                        s.lazy.loadInSlide(t.index(), !1);
                      }
                    }
                    s.emit("lazyImageReady", n[0], l[0]),
                      s.params.autoHeight && s.updateAutoHeight();
                  }
                }),
                  s.emit("lazyImageLoad", n[0], l[0]);
              });
        },
        load() {
          const e = this,
            { $wrapperEl: t, params: s, slides: i, activeIndex: n } = e,
            r = e.virtual && s.virtual.enabled,
            l = s.lazy;
          let o = s.slidesPerView;
          function d(e) {
            if (r) {
              if (
                t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`)
                  .length
              )
                return !0;
            } else if (i[e]) return !0;
            return !1;
          }
          function p(e) {
            return r
              ? Object(a.a)(e).attr("data-swiper-slide-index")
              : Object(a.a)(e).index();
          }
          if (
            ("auto" === o && (o = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
          )
            t.children(`.${s.slideVisibleClass}`).each((t, s) => {
              const i = r
                ? Object(a.a)(s).attr("data-swiper-slide-index")
                : Object(a.a)(s).index();
              e.lazy.loadInSlide(i);
            });
          else if (o > 1)
            for (let a = n; a < n + o; a += 1) d(a) && e.lazy.loadInSlide(a);
          else e.lazy.loadInSlide(n);
          if (l.loadPrevNext)
            if (o > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
              const t = l.loadPrevNextAmount,
                s = o,
                a = Math.min(n + s + Math.max(t, s), i.length),
                r = Math.max(n - Math.max(s, t), 0);
              for (let i = n + o; i < a; i += 1) d(i) && e.lazy.loadInSlide(i);
              for (let i = r; i < n; i += 1) d(i) && e.lazy.loadInSlide(i);
            } else {
              const a = t.children(`.${s.slideNextClass}`);
              a.length > 0 && e.lazy.loadInSlide(p(a));
              const i = t.children(`.${s.slidePrevClass}`);
              i.length > 0 && e.lazy.loadInSlide(p(i));
            }
        },
      };
      const q = {
        LinearSpline: function (e, t) {
          const s = (function () {
            let e, t, s;
            return (a, i) => {
              for (t = -1, e = a.length; e - t > 1; )
                (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
              return e;
            };
          })();
          let a, i;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((i = s(this.x, e)),
                  (a = i - 1),
                  ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                    (this.x[i] - this.x[a]) +
                    this.y[a])
                : 0;
            }),
            this
          );
        },
        getInterpolateFunction(e) {
          const t = this;
          t.controller.spline ||
            (t.controller.spline = t.params.loop
              ? new q.LinearSpline(t.slidesGrid, e.slidesGrid)
              : new q.LinearSpline(t.snapGrid, e.snapGrid));
        },
        setTranslate(e, t) {
          const s = this,
            a = s.controller.control;
          let i, n;
          function r(e) {
            const t = s.rtlTranslate ? -s.translate : s.translate;
            "slide" === s.params.controller.by &&
              (s.controller.getInterpolateFunction(e),
              (n = -s.controller.spline.interpolate(-t))),
              (n && "container" !== s.params.controller.by) ||
                ((i =
                  (e.maxTranslate() - e.minTranslate()) /
                  (s.maxTranslate() - s.minTranslate())),
                (n = (t - s.minTranslate()) * i + e.minTranslate())),
              s.params.controller.inverse && (n = e.maxTranslate() - n),
              e.updateProgress(n),
              e.setTranslate(n, s),
              e.updateActiveIndex(),
              e.updateSlidesClasses();
          }
          if (Array.isArray(a))
            for (let l = 0; l < a.length; l += 1)
              a[l] !== t && a[l] instanceof z && r(a[l]);
          else a instanceof z && t !== a && r(a);
        },
        setTransition(e, t) {
          const s = this,
            a = s.controller.control;
          let i;
          function n(t) {
            t.setTransition(e, s),
              0 !== e &&
                (t.transitionStart(),
                t.params.autoHeight &&
                  r.nextTick(() => {
                    t.updateAutoHeight();
                  }),
                t.$wrapperEl.transitionEnd(() => {
                  a &&
                    (t.params.loop &&
                      "slide" === s.params.controller.by &&
                      t.loopFix(),
                    t.transitionEnd());
                }));
          }
          if (Array.isArray(a))
            for (i = 0; i < a.length; i += 1)
              a[i] !== t && a[i] instanceof z && n(a[i]);
          else a instanceof z && t !== a && n(a);
        },
      };
      const K = {
        makeElFocusable: (e) => (e.attr("tabIndex", "0"), e),
        addElRole: (e, t) => (e.attr("role", t), e),
        addElLabel: (e, t) => (e.attr("aria-label", t), e),
        disableEl: (e) => (e.attr("aria-disabled", !0), e),
        enableEl: (e) => (e.attr("aria-disabled", !1), e),
        onEnterKey(e) {
          const t = this,
            s = t.params.a11y;
          if (13 !== e.keyCode) return;
          const i = Object(a.a)(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(s.lastSlideMessage)
              : t.a11y.notify(s.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              i.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(s.firstSlideMessage)
                : t.a11y.notify(s.prevSlideMessage)),
            t.pagination &&
              i.is(`.${t.params.pagination.bulletClass}`) &&
              i[0].click();
        },
        notify(e) {
          const t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation() {
          const e = this;
          if (e.params.loop || !e.navigation) return;
          const { $nextEl: t, $prevEl: s } = e.navigation;
          s &&
            s.length > 0 &&
            (e.isBeginning ? e.a11y.disableEl(s) : e.a11y.enableEl(s)),
            t &&
              t.length > 0 &&
              (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t));
        },
        updatePagination() {
          const e = this,
            t = e.params.a11y;
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.bullets.each((s, i) => {
              const n = Object(a.a)(i);
              e.a11y.makeElFocusable(n),
                e.a11y.addElRole(n, "button"),
                e.a11y.addElLabel(
                  n,
                  t.paginationBulletMessage.replace(/{{index}}/, n.index() + 1)
                );
            });
        },
        init() {
          const e = this;
          e.$el.append(e.a11y.liveRegion);
          const t = e.params.a11y;
          let s, a;
          e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
            s &&
              (e.a11y.makeElFocusable(s),
              e.a11y.addElRole(s, "button"),
              e.a11y.addElLabel(s, t.nextSlideMessage),
              s.on("keydown", e.a11y.onEnterKey)),
            a &&
              (e.a11y.makeElFocusable(a),
              e.a11y.addElRole(a, "button"),
              e.a11y.addElLabel(a, t.prevSlideMessage),
              a.on("keydown", e.a11y.onEnterKey)),
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.$el.on(
                "keydown",
                `.${e.params.pagination.bulletClass}`,
                e.a11y.onEnterKey
              );
        },
        destroy() {
          const e = this;
          let t, s;
          e.a11y.liveRegion &&
            e.a11y.liveRegion.length > 0 &&
            e.a11y.liveRegion.remove(),
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
            t && t.off("keydown", e.a11y.onEnterKey),
            s && s.off("keydown", e.a11y.onEnterKey),
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.$el.off(
                "keydown",
                `.${e.params.pagination.bulletClass}`,
                e.a11y.onEnterKey
              );
        },
      };
      const U = {
        init() {
          const e = this;
          if (!e.params.history) return;
          if (!i.b.history || !i.b.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          const t = e.history;
          (t.initialized = !0),
            (t.paths = U.getPathValues()),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                i.b.addEventListener("popstate", e.history.setHistoryPopState));
        },
        destroy() {
          const e = this;
          e.params.history.replaceState ||
            i.b.removeEventListener("popstate", e.history.setHistoryPopState);
        },
        setHistoryPopState() {
          (this.history.paths = U.getPathValues()),
            this.history.scrollToSlide(
              this.params.speed,
              this.history.paths.value,
              !1
            );
        },
        getPathValues() {
          const e = i.b.location.pathname
              .slice(1)
              .split("/")
              .filter((e) => "" !== e),
            t = e.length;
          return { key: e[t - 2], value: e[t - 1] };
        },
        setHistory(e, t) {
          if (!this.history.initialized || !this.params.history.enabled) return;
          const s = this.slides.eq(t);
          let a = U.slugify(s.attr("data-history"));
          i.b.location.pathname.includes(e) || (a = `${e}/${a}`);
          const n = i.b.history.state;
          (n && n.value === a) ||
            (this.params.history.replaceState
              ? i.b.history.replaceState({ value: a }, null, a)
              : i.b.history.pushState({ value: a }, null, a));
        },
        slugify: (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        scrollToSlide(e, t, s) {
          const a = this;
          if (t)
            for (let i = 0, n = a.slides.length; i < n; i += 1) {
              const n = a.slides.eq(i);
              if (
                U.slugify(n.attr("data-history")) === t &&
                !n.hasClass(a.params.slideDuplicateClass)
              ) {
                const t = n.index();
                a.slideTo(t, e, s);
              }
            }
          else a.slideTo(0, e, s);
        },
      };
      const _ = {
        onHashCange() {
          const e = this,
            t = i.a.location.hash.replace("#", "");
          if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
            const s = e.$wrapperEl
              .children(`.${e.params.slideClass}[data-hash="${t}"]`)
              .index();
            if ("undefined" === typeof s) return;
            e.slideTo(s);
          }
        },
        setHash() {
          const e = this;
          if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
            if (
              e.params.hashNavigation.replaceState &&
              i.b.history &&
              i.b.history.replaceState
            )
              i.b.history.replaceState(
                null,
                null,
                `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""
              );
            else {
              const t = e.slides.eq(e.activeIndex),
                s = t.attr("data-hash") || t.attr("data-history");
              i.a.location.hash = s || "";
            }
        },
        init() {
          const e = this;
          if (
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
            return;
          e.hashNavigation.initialized = !0;
          const t = i.a.location.hash.replace("#", "");
          if (t) {
            const s = 0;
            for (let a = 0, i = e.slides.length; a < i; a += 1) {
              const i = e.slides.eq(a);
              if (
                (i.attr("data-hash") || i.attr("data-history")) === t &&
                !i.hasClass(e.params.slideDuplicateClass)
              ) {
                const t = i.index();
                e.slideTo(t, s, e.params.runCallbacksOnInit, !0);
              }
            }
          }
          e.params.hashNavigation.watchState &&
            Object(a.a)(i.b).on("hashchange", e.hashNavigation.onHashCange);
        },
        destroy() {
          const e = this;
          e.params.hashNavigation.watchState &&
            Object(a.a)(i.b).off("hashchange", e.hashNavigation.onHashCange);
        },
      };
      const J = {
        run() {
          const e = this,
            t = e.slides.eq(e.activeIndex);
          let s = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = r.nextTick(() => {
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    e.slidePrev(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                      e.emit("autoplay"))
                  : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  e.slideNext(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                e.params.cssMode && e.autoplay.running && e.autoplay.run();
            }, s));
        },
        start() {
          return (
            "undefined" === typeof this.autoplay.timeout &&
            !this.autoplay.running &&
            ((this.autoplay.running = !0),
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0)
          );
        },
        stop() {
          const e = this;
          return (
            !!e.autoplay.running &&
            "undefined" !== typeof e.autoplay.timeout &&
            (e.autoplay.timeout &&
              (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
            (e.autoplay.running = !1),
            e.emit("autoplayStop"),
            !0)
          );
        },
        pause(e) {
          const t = this;
          t.autoplay.running &&
            (t.autoplay.paused ||
              (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
              (t.autoplay.paused = !0),
              0 !== e && t.params.autoplay.waitForTransition
                ? (t.$wrapperEl[0].addEventListener(
                    "transitionend",
                    t.autoplay.onTransitionEnd
                  ),
                  t.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    t.autoplay.onTransitionEnd
                  ))
                : ((t.autoplay.paused = !1), t.autoplay.run())));
        },
      };
      const Z = {
        setTranslate() {
          const e = this,
            { slides: t } = e;
          for (let s = 0; s < t.length; s += 1) {
            const t = e.slides.eq(s);
            let a = -t[0].swiperSlideOffset;
            e.params.virtualTranslate || (a -= e.translate);
            let i = 0;
            e.isHorizontal() || ((i = a), (a = 0));
            const n = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(t[0].progress), 0)
              : 1 + Math.min(Math.max(t[0].progress, -1), 0);
            t.css({ opacity: n }).transform(`translate3d(${a}px, ${i}px, 0px)`);
          }
        },
        setTransition(e) {
          const t = this,
            { slides: s, $wrapperEl: a } = t;
          if ((s.transition(e), t.params.virtualTranslate && 0 !== e)) {
            let e = !1;
            s.transitionEnd(() => {
              if (e) return;
              if (!t || t.destroyed) return;
              (e = !0), (t.animating = !1);
              const s = ["webkitTransitionEnd", "transitionend"];
              for (let e = 0; e < s.length; e += 1) a.trigger(s[e]);
            });
          }
        },
      };
      const Q = {
        setTranslate() {
          const {
              $el: e,
              $wrapperEl: t,
              slides: s,
              width: i,
              height: n,
              rtlTranslate: r,
              size: l,
            } = this,
            o = this.params.cubeEffect,
            d = this.isHorizontal(),
            p = this.virtual && this.params.virtual.enabled;
          let c,
            h = 0;
          o.shadow &&
            (d
              ? ((c = t.find(".swiper-cube-shadow")),
                0 === c.length &&
                  ((c = Object(a.a)('<div class="swiper-cube-shadow"></div>')),
                  t.append(c)),
                c.css({ height: `${i}px` }))
              : ((c = e.find(".swiper-cube-shadow")),
                0 === c.length &&
                  ((c = Object(a.a)('<div class="swiper-cube-shadow"></div>')),
                  e.append(c))));
          for (let m = 0; m < s.length; m += 1) {
            const e = s.eq(m);
            let t = m;
            p && (t = parseInt(e.attr("data-swiper-slide-index"), 10));
            let i = 90 * t,
              n = Math.floor(i / 360);
            r && ((i = -i), (n = Math.floor(-i / 360)));
            const c = Math.max(Math.min(e[0].progress, 1), -1);
            let u = 0,
              f = 0,
              g = 0;
            t % 4 === 0
              ? ((u = 4 * -n * l), (g = 0))
              : (t - 1) % 4 === 0
              ? ((u = 0), (g = 4 * -n * l))
              : (t - 2) % 4 === 0
              ? ((u = l + 4 * n * l), (g = l))
              : (t - 3) % 4 === 0 && ((u = -l), (g = 3 * l + 4 * l * n)),
              r && (u = -u),
              d || ((f = u), (u = 0));
            const v = `rotateX(${d ? 0 : -i}deg) rotateY(${
              d ? i : 0
            }deg) translate3d(${u}px, ${f}px, ${g}px)`;
            if (
              (c <= 1 &&
                c > -1 &&
                ((h = 90 * t + 90 * c), r && (h = 90 * -t - 90 * c)),
              e.transform(v),
              o.slideShadows)
            ) {
              let t = d
                  ? e.find(".swiper-slide-shadow-left")
                  : e.find(".swiper-slide-shadow-top"),
                s = d
                  ? e.find(".swiper-slide-shadow-right")
                  : e.find(".swiper-slide-shadow-bottom");
              0 === t.length &&
                ((t = Object(a.a)(
                  `<div class="swiper-slide-shadow-${
                    d ? "left" : "top"
                  }"></div>`
                )),
                e.append(t)),
                0 === s.length &&
                  ((s = Object(a.a)(
                    `<div class="swiper-slide-shadow-${
                      d ? "right" : "bottom"
                    }"></div>`
                  )),
                  e.append(s)),
                t.length && (t[0].style.opacity = Math.max(-c, 0)),
                s.length && (s[0].style.opacity = Math.max(c, 0));
            }
          }
          if (
            (t.css({
              "-webkit-transform-origin": `50% 50% -${l / 2}px`,
              "-moz-transform-origin": `50% 50% -${l / 2}px`,
              "-ms-transform-origin": `50% 50% -${l / 2}px`,
              "transform-origin": `50% 50% -${l / 2}px`,
            }),
            o.shadow)
          )
            if (d)
              c.transform(
                `translate3d(0px, ${i / 2 + o.shadowOffset}px, ${
                  -i / 2
                }px) rotateX(90deg) rotateZ(0deg) scale(${o.shadowScale})`
              );
            else {
              const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                s = o.shadowScale,
                a = o.shadowScale / t,
                i = o.shadowOffset;
              c.transform(
                `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${
                  -n / 2 / a
                }px) rotateX(-90deg)`
              );
            }
          const u = O.isSafari || O.isUiWebView ? -l / 2 : 0;
          t.transform(
            `translate3d(0px,0,${u}px) rotateX(${
              this.isHorizontal() ? 0 : h
            }deg) rotateY(${this.isHorizontal() ? -h : 0}deg)`
          );
        },
        setTransition(e) {
          const { $el: t, slides: s } = this;
          s
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
            this.params.cubeEffect.shadow &&
              !this.isHorizontal() &&
              t.find(".swiper-cube-shadow").transition(e);
        },
      };
      const ee = {
        setTranslate() {
          const e = this,
            { slides: t, rtlTranslate: s } = e;
          for (let i = 0; i < t.length; i += 1) {
            const n = t.eq(i);
            let r = n[0].progress;
            e.params.flipEffect.limitRotation &&
              (r = Math.max(Math.min(n[0].progress, 1), -1));
            let l = -180 * r,
              o = 0,
              d = -n[0].swiperSlideOffset,
              p = 0;
            if (
              (e.isHorizontal()
                ? s && (l = -l)
                : ((p = d), (d = 0), (o = -l), (l = 0)),
              (n[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
              e.params.flipEffect.slideShadows)
            ) {
              let t = e.isHorizontal()
                  ? n.find(".swiper-slide-shadow-left")
                  : n.find(".swiper-slide-shadow-top"),
                s = e.isHorizontal()
                  ? n.find(".swiper-slide-shadow-right")
                  : n.find(".swiper-slide-shadow-bottom");
              0 === t.length &&
                ((t = Object(a.a)(
                  `<div class="swiper-slide-shadow-${
                    e.isHorizontal() ? "left" : "top"
                  }"></div>`
                )),
                n.append(t)),
                0 === s.length &&
                  ((s = Object(a.a)(
                    `<div class="swiper-slide-shadow-${
                      e.isHorizontal() ? "right" : "bottom"
                    }"></div>`
                  )),
                  n.append(s)),
                t.length && (t[0].style.opacity = Math.max(-r, 0)),
                s.length && (s[0].style.opacity = Math.max(r, 0));
            }
            n.transform(
              `translate3d(${d}px, ${p}px, 0px) rotateX(${o}deg) rotateY(${l}deg)`
            );
          }
        },
        setTransition(e) {
          const t = this,
            { slides: s, activeIndex: a, $wrapperEl: i } = t;
          if (
            (s
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
            t.params.virtualTranslate && 0 !== e)
          ) {
            let e = !1;
            s.eq(a).transitionEnd(function () {
              if (e) return;
              if (!t || t.destroyed) return;
              (e = !0), (t.animating = !1);
              const s = ["webkitTransitionEnd", "transitionend"];
              for (let e = 0; e < s.length; e += 1) i.trigger(s[e]);
            });
          }
        },
      };
      const te = {
        setTranslate() {
          const {
              width: e,
              height: t,
              slides: s,
              $wrapperEl: i,
              slidesSizesGrid: n,
            } = this,
            r = this.params.coverflowEffect,
            o = this.isHorizontal(),
            d = this.translate,
            p = o ? e / 2 - d : t / 2 - d,
            c = o ? r.rotate : -r.rotate,
            h = r.depth;
          for (let l = 0, u = s.length; l < u; l += 1) {
            const e = s.eq(l),
              t = n[l],
              i = ((p - e[0].swiperSlideOffset - t / 2) / t) * r.modifier;
            let d = o ? c * i : 0,
              u = o ? 0 : c * i,
              m = -h * Math.abs(i),
              f = r.stretch;
            "string" === typeof f &&
              -1 !== f.indexOf("%") &&
              (f = (parseFloat(r.stretch) / 100) * t);
            let g = o ? 0 : f * i,
              v = o ? f * i : 0;
            Math.abs(v) < 0.001 && (v = 0),
              Math.abs(g) < 0.001 && (g = 0),
              Math.abs(m) < 0.001 && (m = 0),
              Math.abs(d) < 0.001 && (d = 0),
              Math.abs(u) < 0.001 && (u = 0);
            const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${u}deg) rotateY(${d}deg)`;
            if (
              (e.transform(b),
              (e[0].style.zIndex = 1 - Math.abs(Math.round(i))),
              r.slideShadows)
            ) {
              let t = o
                  ? e.find(".swiper-slide-shadow-left")
                  : e.find(".swiper-slide-shadow-top"),
                s = o
                  ? e.find(".swiper-slide-shadow-right")
                  : e.find(".swiper-slide-shadow-bottom");
              0 === t.length &&
                ((t = Object(a.a)(
                  `<div class="swiper-slide-shadow-${
                    o ? "left" : "top"
                  }"></div>`
                )),
                e.append(t)),
                0 === s.length &&
                  ((s = Object(a.a)(
                    `<div class="swiper-slide-shadow-${
                      o ? "right" : "bottom"
                    }"></div>`
                  )),
                  e.append(s)),
                t.length && (t[0].style.opacity = i > 0 ? i : 0),
                s.length && (s[0].style.opacity = -i > 0 ? -i : 0);
            }
          }
          if (l.pointerEvents || l.prefixedPointerEvents) {
            i[0].style.perspectiveOrigin = `${p}px 50%`;
          }
        },
        setTransition(e) {
          this.slides
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e);
        },
      };
      const se = {
        init() {
          const e = this,
            { thumbs: t } = e.params,
            s = e.constructor;
          t.swiper instanceof s
            ? ((e.thumbs.swiper = t.swiper),
              r.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              r.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : r.isObject(t.swiper) &&
              ((e.thumbs.swiper = new s(
                r.extend({}, t.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (e.thumbs.swiperCreated = !0)),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
        },
        onThumbClick() {
          const e = this,
            t = e.thumbs.swiper;
          if (!t) return;
          const s = t.clickedIndex,
            i = t.clickedSlide;
          if (
            i &&
            Object(a.a)(i).hasClass(e.params.thumbs.slideThumbActiveClass)
          )
            return;
          if ("undefined" === typeof s || null === s) return;
          let n;
          if (
            ((n = t.params.loop
              ? parseInt(
                  Object(a.a)(t.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )
              : s),
            e.params.loop)
          ) {
            let t = e.activeIndex;
            e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
              (e.loopFix(),
              (e._clientLeft = e.$wrapperEl[0].clientLeft),
              (t = e.activeIndex));
            const s = e.slides
                .eq(t)
                .prevAll(`[data-swiper-slide-index="${n}"]`)
                .eq(0)
                .index(),
              a = e.slides
                .eq(t)
                .nextAll(`[data-swiper-slide-index="${n}"]`)
                .eq(0)
                .index();
            n =
              "undefined" === typeof s
                ? a
                : "undefined" === typeof a
                ? s
                : a - t < t - s
                ? a
                : s;
          }
          e.slideTo(n);
        },
        update(e) {
          const t = this,
            s = t.thumbs.swiper;
          if (!s) return;
          const a =
            "auto" === s.params.slidesPerView
              ? s.slidesPerViewDynamic()
              : s.params.slidesPerView;
          if (t.realIndex !== s.realIndex) {
            let i,
              n = s.activeIndex;
            if (s.params.loop) {
              s.slides.eq(n).hasClass(s.params.slideDuplicateClass) &&
                (s.loopFix(),
                (s._clientLeft = s.$wrapperEl[0].clientLeft),
                (n = s.activeIndex));
              const e = s.slides
                  .eq(n)
                  .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index(),
                a = s.slides
                  .eq(n)
                  .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index();
              i =
                "undefined" === typeof e
                  ? a
                  : "undefined" === typeof a
                  ? e
                  : a - n === n - e
                  ? n
                  : a - n < n - e
                  ? a
                  : e;
            } else i = t.realIndex;
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(i) < 0 &&
              (s.params.centeredSlides
                ? (i =
                    i > n
                      ? i - Math.floor(a / 2) + 1
                      : i + Math.floor(a / 2) - 1)
                : i > n && (i = i - a + 1),
              s.slideTo(i, e ? 0 : void 0));
          }
          let i = 1;
          const n = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (i = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (i = 1),
            (i = Math.floor(i)),
            s.slides.removeClass(n),
            s.params.loop || (s.params.virtual && s.params.virtual.enabled))
          )
            for (let r = 0; r < i; r += 1)
              s.$wrapperEl
                .children(`[data-swiper-slide-index="${t.realIndex + r}"]`)
                .addClass(n);
          else
            for (let r = 0; r < i; r += 1)
              s.slides.eq(t.realIndex + r).addClass(n);
        },
      };
      const ae = [
        P,
        k,
        I,
        L,
        G,
        H,
        j,
        {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarged: "container",
            },
          },
          create() {
            r.extend(this, {
              mousewheel: {
                enabled: !1,
                enable: X.enable.bind(this),
                disable: X.disable.bind(this),
                handle: X.handle.bind(this),
                handleMouseEnter: X.handleMouseEnter.bind(this),
                handleMouseLeave: X.handleMouseLeave.bind(this),
                animateSlider: X.animateSlider.bind(this),
                releaseScroll: X.releaseScroll.bind(this),
                lastScrollTime: r.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
              },
            });
          },
          on: {
            init() {
              const e = this;
              !e.params.mousewheel.enabled &&
                e.params.cssMode &&
                e.mousewheel.disable(),
                e.params.mousewheel.enabled && e.mousewheel.enable();
            },
            destroy() {
              const e = this;
              e.params.cssMode && e.mousewheel.enable(),
                e.mousewheel.enabled && e.mousewheel.disable();
            },
          },
        },
        {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
            },
          },
          create() {
            r.extend(this, {
              navigation: {
                init: Y.init.bind(this),
                update: Y.update.bind(this),
                destroy: Y.destroy.bind(this),
                onNextClick: Y.onNextClick.bind(this),
                onPrevClick: Y.onPrevClick.bind(this),
              },
            });
          },
          on: {
            init() {
              this.navigation.init(), this.navigation.update();
            },
            toEdge() {
              this.navigation.update();
            },
            fromEdge() {
              this.navigation.update();
            },
            destroy() {
              this.navigation.destroy();
            },
            click(e) {
              const t = this,
                { $nextEl: s, $prevEl: i } = t.navigation;
              if (
                t.params.navigation.hideOnClick &&
                !Object(a.a)(e.target).is(i) &&
                !Object(a.a)(e.target).is(s)
              ) {
                let e;
                s
                  ? (e = s.hasClass(t.params.navigation.hiddenClass))
                  : i && (e = i.hasClass(t.params.navigation.hiddenClass)),
                  !0 === e
                    ? t.emit("navigationShow", t)
                    : t.emit("navigationHide", t),
                  s && s.toggleClass(t.params.navigation.hiddenClass),
                  i && i.toggleClass(t.params.navigation.hiddenClass);
              }
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: (e) => e,
              formatFractionTotal: (e) => e,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create() {
            r.extend(this, {
              pagination: {
                init: N.init.bind(this),
                render: N.render.bind(this),
                update: N.update.bind(this),
                destroy: N.destroy.bind(this),
                dynamicBulletIndex: 0,
              },
            });
          },
          on: {
            init() {
              this.pagination.init(),
                this.pagination.render(),
                this.pagination.update();
            },
            activeIndexChange() {
              const e = this;
              e.params.loop
                ? e.pagination.update()
                : "undefined" === typeof e.snapIndex && e.pagination.update();
            },
            snapIndexChange() {
              const e = this;
              e.params.loop || e.pagination.update();
            },
            slidesLengthChange() {
              const e = this;
              e.params.loop && (e.pagination.render(), e.pagination.update());
            },
            snapGridLengthChange() {
              const e = this;
              e.params.loop || (e.pagination.render(), e.pagination.update());
            },
            destroy() {
              this.pagination.destroy();
            },
            click(e) {
              const t = this;
              if (
                t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                t.pagination.$el.length > 0 &&
                !Object(a.a)(e.target).hasClass(t.params.pagination.bulletClass)
              ) {
                !0 ===
                t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                  ? t.emit("paginationShow", t)
                  : t.emit("paginationHide", t),
                  t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
              }
            },
          },
        },
        {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create() {
            r.extend(this, {
              scrollbar: {
                init: V.init.bind(this),
                destroy: V.destroy.bind(this),
                updateSize: V.updateSize.bind(this),
                setTranslate: V.setTranslate.bind(this),
                setTransition: V.setTransition.bind(this),
                enableDraggable: V.enableDraggable.bind(this),
                disableDraggable: V.disableDraggable.bind(this),
                setDragPosition: V.setDragPosition.bind(this),
                getPointerPosition: V.getPointerPosition.bind(this),
                onDragStart: V.onDragStart.bind(this),
                onDragMove: V.onDragMove.bind(this),
                onDragEnd: V.onDragEnd.bind(this),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            });
          },
          on: {
            init() {
              this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate();
            },
            update() {
              this.scrollbar.updateSize();
            },
            resize() {
              this.scrollbar.updateSize();
            },
            observerUpdate() {
              this.scrollbar.updateSize();
            },
            setTranslate() {
              this.scrollbar.setTranslate();
            },
            setTransition(e) {
              this.scrollbar.setTransition(e);
            },
            destroy() {
              this.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create() {
            r.extend(this, {
              parallax: {
                setTransform: F.setTransform.bind(this),
                setTranslate: F.setTranslate.bind(this),
                setTransition: F.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              this.params.parallax.enabled &&
                ((this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            init() {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTranslate() {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTransition(e) {
              this.params.parallax.enabled && this.parallax.setTransition(e);
            },
          },
        },
        {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create() {
            const e = this,
              t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
              .split(" ")
              .forEach((s) => {
                t[s] = W[s].bind(e);
              }),
              r.extend(e, { zoom: t });
            let s = 1;
            Object.defineProperty(e.zoom, "scale", {
              get: () => s,
              set(t) {
                if (s !== t) {
                  const s = e.zoom.gesture.$imageEl
                      ? e.zoom.gesture.$imageEl[0]
                      : void 0,
                    a = e.zoom.gesture.$slideEl
                      ? e.zoom.gesture.$slideEl[0]
                      : void 0;
                  e.emit("zoomChange", t, s, a);
                }
                s = t;
              },
            });
          },
          on: {
            init() {
              const e = this;
              e.params.zoom.enabled && e.zoom.enable();
            },
            destroy() {
              this.zoom.disable();
            },
            touchStart(e) {
              this.zoom.enabled && this.zoom.onTouchStart(e);
            },
            touchEnd(e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e);
            },
            doubleTap(e) {
              const t = this;
              t.params.zoom.enabled &&
                t.zoom.enabled &&
                t.params.zoom.toggle &&
                t.zoom.toggle(e);
            },
            transitionEnd() {
              const e = this;
              e.zoom.enabled &&
                e.params.zoom.enabled &&
                e.zoom.onTransitionEnd();
            },
            slideChange() {
              const e = this;
              e.zoom.enabled &&
                e.params.zoom.enabled &&
                e.params.cssMode &&
                e.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader",
            },
          },
          create() {
            r.extend(this, {
              lazy: {
                initialImageLoaded: !1,
                load: R.load.bind(this),
                loadInSlide: R.loadInSlide.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              const e = this;
              e.params.lazy.enabled &&
                e.params.preloadImages &&
                (e.params.preloadImages = !1);
            },
            init() {
              const e = this;
              e.params.lazy.enabled &&
                !e.params.loop &&
                0 === e.params.initialSlide &&
                e.lazy.load();
            },
            scroll() {
              const e = this;
              e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
            },
            resize() {
              const e = this;
              e.params.lazy.enabled && e.lazy.load();
            },
            scrollbarDragMove() {
              const e = this;
              e.params.lazy.enabled && e.lazy.load();
            },
            transitionStart() {
              const e = this;
              e.params.lazy.enabled &&
                (e.params.lazy.loadOnTransitionStart ||
                  (!e.params.lazy.loadOnTransitionStart &&
                    !e.lazy.initialImageLoaded)) &&
                e.lazy.load();
            },
            transitionEnd() {
              const e = this;
              e.params.lazy.enabled &&
                !e.params.lazy.loadOnTransitionStart &&
                e.lazy.load();
            },
            slideChange() {
              const e = this;
              e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create() {
            r.extend(this, {
              controller: {
                control: this.params.controller.control,
                getInterpolateFunction: q.getInterpolateFunction.bind(this),
                setTranslate: q.setTranslate.bind(this),
                setTransition: q.setTransition.bind(this),
              },
            });
          },
          on: {
            update() {
              const e = this;
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            resize() {
              const e = this;
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            observerUpdate() {
              const e = this;
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            setTranslate(e, t) {
              this.controller.control && this.controller.setTranslate(e, t);
            },
            setTransition(e, t) {
              this.controller.control && this.controller.setTransition(e, t);
            },
          },
        },
        {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
            },
          },
          create() {
            const e = this;
            r.extend(e, {
              a11y: {
                liveRegion: Object(a.a)(
                  `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
                ),
              },
            }),
              Object.keys(K).forEach((t) => {
                e.a11y[t] = K[t].bind(e);
              });
          },
          on: {
            init() {
              this.params.a11y.enabled &&
                (this.a11y.init(), this.a11y.updateNavigation());
            },
            toEdge() {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            fromEdge() {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            paginationUpdate() {
              this.params.a11y.enabled && this.a11y.updatePagination();
            },
            destroy() {
              this.params.a11y.enabled && this.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
          create() {
            r.extend(this, {
              history: {
                init: U.init.bind(this),
                setHistory: U.setHistory.bind(this),
                setHistoryPopState: U.setHistoryPopState.bind(this),
                scrollToSlide: U.scrollToSlide.bind(this),
                destroy: U.destroy.bind(this),
              },
            });
          },
          on: {
            init() {
              const e = this;
              e.params.history.enabled && e.history.init();
            },
            destroy() {
              const e = this;
              e.params.history.enabled && e.history.destroy();
            },
            transitionEnd() {
              const e = this;
              e.history.initialized &&
                e.history.setHistory(e.params.history.key, e.activeIndex);
            },
            slideChange() {
              const e = this;
              e.history.initialized &&
                e.params.cssMode &&
                e.history.setHistory(e.params.history.key, e.activeIndex);
            },
          },
        },
        {
          name: "hash-navigation",
          params: {
            hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
          },
          create() {
            r.extend(this, {
              hashNavigation: {
                initialized: !1,
                init: _.init.bind(this),
                destroy: _.destroy.bind(this),
                setHash: _.setHash.bind(this),
                onHashCange: _.onHashCange.bind(this),
              },
            });
          },
          on: {
            init() {
              const e = this;
              e.params.hashNavigation.enabled && e.hashNavigation.init();
            },
            destroy() {
              const e = this;
              e.params.hashNavigation.enabled && e.hashNavigation.destroy();
            },
            transitionEnd() {
              const e = this;
              e.hashNavigation.initialized && e.hashNavigation.setHash();
            },
            slideChange() {
              const e = this;
              e.hashNavigation.initialized &&
                e.params.cssMode &&
                e.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create() {
            const e = this;
            r.extend(e, {
              autoplay: {
                running: !1,
                paused: !1,
                run: J.run.bind(e),
                start: J.start.bind(e),
                stop: J.stop.bind(e),
                pause: J.pause.bind(e),
                onVisibilityChange() {
                  "hidden" === document.visibilityState &&
                    e.autoplay.running &&
                    e.autoplay.pause(),
                    "visible" === document.visibilityState &&
                      e.autoplay.paused &&
                      (e.autoplay.run(), (e.autoplay.paused = !1));
                },
                onTransitionEnd(t) {
                  e &&
                    !e.destroyed &&
                    e.$wrapperEl &&
                    t.target === this &&
                    (e.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      e.autoplay.onTransitionEnd
                    ),
                    e.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      e.autoplay.onTransitionEnd
                    ),
                    (e.autoplay.paused = !1),
                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                },
              },
            });
          },
          on: {
            init() {
              const e = this;
              e.params.autoplay.enabled &&
                (e.autoplay.start(),
                document.addEventListener(
                  "visibilitychange",
                  e.autoplay.onVisibilityChange
                ));
            },
            beforeTransitionStart(e, t) {
              const s = this;
              s.autoplay.running &&
                (t || !s.params.autoplay.disableOnInteraction
                  ? s.autoplay.pause(e)
                  : s.autoplay.stop());
            },
            sliderFirstMove() {
              const e = this;
              e.autoplay.running &&
                (e.params.autoplay.disableOnInteraction
                  ? e.autoplay.stop()
                  : e.autoplay.pause());
            },
            touchEnd() {
              const e = this;
              e.params.cssMode &&
                e.autoplay.paused &&
                !e.params.autoplay.disableOnInteraction &&
                e.autoplay.run();
            },
            destroy() {
              const e = this;
              e.autoplay.running && e.autoplay.stop(),
                document.removeEventListener(
                  "visibilitychange",
                  e.autoplay.onVisibilityChange
                );
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create() {
            r.extend(this, {
              fadeEffect: {
                setTranslate: Z.setTranslate.bind(this),
                setTransition: Z.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              if ("fade" !== this.params.effect) return;
              this.classNames.push(`${this.params.containerModifierClass}fade`);
              const e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              r.extend(this.params, e), r.extend(this.originalParams, e);
            },
            setTranslate() {
              "fade" === this.params.effect && this.fadeEffect.setTranslate();
            },
            setTransition(e) {
              "fade" === this.params.effect && this.fadeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          },
          create() {
            r.extend(this, {
              cubeEffect: {
                setTranslate: Q.setTranslate.bind(this),
                setTransition: Q.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              if ("cube" !== this.params.effect) return;
              this.classNames.push(`${this.params.containerModifierClass}cube`),
                this.classNames.push(`${this.params.containerModifierClass}3d`);
              const e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              r.extend(this.params, e), r.extend(this.originalParams, e);
            },
            setTranslate() {
              "cube" === this.params.effect && this.cubeEffect.setTranslate();
            },
            setTransition(e) {
              "cube" === this.params.effect && this.cubeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-flip",
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create() {
            r.extend(this, {
              flipEffect: {
                setTranslate: ee.setTranslate.bind(this),
                setTransition: ee.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              if ("flip" !== this.params.effect) return;
              this.classNames.push(`${this.params.containerModifierClass}flip`),
                this.classNames.push(`${this.params.containerModifierClass}3d`);
              const e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              r.extend(this.params, e), r.extend(this.originalParams, e);
            },
            setTranslate() {
              "flip" === this.params.effect && this.flipEffect.setTranslate();
            },
            setTransition(e) {
              "flip" === this.params.effect && this.flipEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: !0,
            },
          },
          create() {
            r.extend(this, {
              coverflowEffect: {
                setTranslate: te.setTranslate.bind(this),
                setTransition: te.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              "coverflow" === this.params.effect &&
                (this.classNames.push(
                  `${this.params.containerModifierClass}coverflow`
                ),
                this.classNames.push(`${this.params.containerModifierClass}3d`),
                (this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            setTranslate() {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTranslate();
            },
            setTransition(e) {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTransition(e);
            },
          },
        },
        {
          name: "thumbs",
          params: {
            thumbs: {
              multipleActiveThumbs: !0,
              swiper: null,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-container-thumbs",
            },
          },
          create() {
            r.extend(this, {
              thumbs: {
                swiper: null,
                init: se.init.bind(this),
                update: se.update.bind(this),
                onThumbClick: se.onThumbClick.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              const { thumbs: e } = this.params;
              e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
            },
            slideChange() {
              this.thumbs.swiper && this.thumbs.update();
            },
            update() {
              this.thumbs.swiper && this.thumbs.update();
            },
            resize() {
              this.thumbs.swiper && this.thumbs.update();
            },
            observerUpdate() {
              this.thumbs.swiper && this.thumbs.update();
            },
            setTransition(e) {
              const t = this.thumbs.swiper;
              t && t.setTransition(e);
            },
            beforeDestroy() {
              const e = this.thumbs.swiper;
              e && this.thumbs.swiperCreated && e && e.destroy();
            },
          },
        },
      ];
      "undefined" === typeof z.use &&
        ((z.use = z.Class.use), (z.installModule = z.Class.installModule)),
        z.use(ae),
        (t.default = z);
    },
  },
]);
