(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    RNiq: function (e, a, s) {
      "use strict";
      s.r(a);
      var t = s("q1tI"),
        o = s.n(t),
        n = s("5Yp1"),
        r = s("1OyB"),
        l = s("vuIU"),
        c = s("md7G"),
        i = s("foSv"),
        m = s("Ji7U"),
        u = o.a.createElement;
      function d() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      var f = (function (e) {
          Object(m.a)(t, e);
          var a,
            s =
              ((a = t),
              function () {
                var e,
                  s = Object(i.a)(a);
                if (d()) {
                  var t = Object(i.a)(this).constructor;
                  e = Reflect.construct(s, arguments, t);
                } else e = s.apply(this, arguments);
                return Object(c.a)(this, e);
              });
          function t() {
            return Object(r.a)(this, t), s.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  return u(
                    "div",
                    { className: "topbar-one" },
                    u(
                      "div",
                      { className: "container" },
                      u(
                        "div",
                        { className: "topbar-one__left" },
                        u("a", { href: "#" }, "needhelp@kipso.com"),
                        u("a", { href: "#" }, "444 888 0000")
                      ),
                      u(
                        "div",
                        { className: "topbar-one__right" },
                        u("a", { href: "#" }, "Login"),
                        u("a", { href: "#" }, "Register")
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(t.Component),
        _ = s("n+Gj"),
        h = s("f03Y"),
        N = s("8lYe"),
        p = s("JX7q"),
        g = s("rePB"),
        v = s("PHNs"),
        b = s.n(v),
        y = s("aqT/"),
        w = s.n(y),
        k = o.a.createElement;
      function j() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      var O = (function (e) {
          Object(m.a)(t, e);
          var a,
            s =
              ((a = t),
              function () {
                var e,
                  s = Object(i.a)(a);
                if (j()) {
                  var t = Object(i.a)(this).constructor;
                  e = Reflect.construct(s, arguments, t);
                } else e = s.apply(this, arguments);
                return Object(c.a)(this, e);
              });
          function t() {
            var e;
            return (
              Object(r.a)(this, t),
              (e = s.call(this)),
              Object(g.a)(Object(p.a)(e), "onVisibilityChange", function (a) {
                a && e.setState({ startCounter: !0 });
              }),
              (e.state = { startCounter: !1 }),
              e
            );
          }
          return (
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  return k(
                    "section",
                    { className: "about-two" },
                    k(
                      "div",
                      { className: "container" },
                      k(
                        "div",
                        { className: "row" },
                        k(
                          "div",
                          { className: "col-xl-6" },
                          k(
                            "div",
                            { className: "about-two__content" },
                            k(
                              "div",
                              { className: "block-title text-left" },
                              k(
                                "h2",
                                { className: "block-title__title" },
                                "Welcome to online ",
                                k("br", null),
                                "learning center"
                              )
                            ),
                            k(
                              "p",
                              { className: "about-two__text" },
                              "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look."
                            ),
                            k(
                              "div",
                              { className: "about-two__single-wrap" },
                              k(
                                "div",
                                { className: "about-two__single" },
                                k(
                                  "div",
                                  { className: "about-two__single-icon" },
                                  k("i", { className: "kipso-icon-professor" })
                                ),
                                k(
                                  "div",
                                  { className: "about-two__single-content" },
                                  k(
                                    "p",
                                    { className: "about-two__single-text" },
                                    "Start learning from our experts"
                                  )
                                )
                              ),
                              k(
                                "div",
                                { className: "about-two__single" },
                                k(
                                  "div",
                                  { className: "about-two__single-icon" },
                                  k("i", { className: "kipso-icon-knowledge" })
                                ),
                                k(
                                  "div",
                                  { className: "about-two__single-content" },
                                  k(
                                    "p",
                                    { className: "about-two__single-text" },
                                    "Enhance your skills with us now"
                                  )
                                )
                              )
                            ),
                            k(
                              "a",
                              { href: "#", className: "thm-btn" },
                              "Learn More"
                            )
                          )
                        ),
                        k(
                          "div",
                          {
                            className:
                              "col-xl-6 d-flex justify-content-xl-end justify-content-sm-center",
                          },
                          k(
                            "div",
                            { className: "about-two__image" },
                            k("span", { className: "about-two__image-dots" }),
                            k("img", {
                              src: "/assets/images/about-1-1.jpg",
                              alt: "",
                            }),
                            k(
                              "div",
                              { className: "about-two__count" },
                              k(
                                "div",
                                { className: "about-two__count-text" },
                                "Trusted by",
                                k(
                                  "span",
                                  { className: "counter" },
                                  k(
                                    w.a,
                                    {
                                      onChange: this.onVisibilityChange,
                                      offset: { top: 10 },
                                      delayedCall: !0,
                                    },
                                    k(b.a, {
                                      end: this.state.startCounter ? 4890 : 0,
                                    })
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(t.Component),
        S = s("YVwf"),
        P = s.n(S),
        x = (s("p6Nx"), s("YFqc"), o.a.createElement),
        C = function () {
          return x(
            "div",
            null,
            x(
              "section",
              { className: "course-one__top-title home-one" },
              x(
                "div",
                { className: "container" },
                x(
                  "div",
                  { className: "block-title mb-0" },
                  x(
                    "h2",
                    { className: "block-title__title" },
                    "Explore our ",
                    x("br", null),
                    "popular courses"
                  )
                )
              ),
              x("div", { className: "course-one__top-title__curve" })
            ),
            x(
              "section",
              { className: "course-one course-one__teacher-details home-one" },
              x(
                "div",
                { className: "container" },
                x(
                  "div",
                  { className: "course-one__carousel" },
                  x(
                    P.a,
                    {
                      slidesPerView: 3,
                      loop: !0,
                      speed: 1e3,
                      spaceBetween: 30,
                      autoplay: { delay: 3e3, disableOnInteraction: !1 },
                      pagination: { el: ".swiper-pagination", clickable: !0 },
                      breakpoints: {
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        320: { slidesPerView: 1 },
                      },
                    },
                    x(
                      "div",
                      { className: "item" },
                      x(
                        "div",
                        { className: "course-one__single color-1" },
                        x(
                          "div",
                          { className: "course-one__image" },
                          x("img", {
                            src: "/assets/images/course-1-1.jpg",
                            alt: "",
                          }),
                          x("i", { className: "far fa-heart" })
                        ),
                        x(
                          "div",
                          { className: "course-one__content" },
                          x(
                            "a",
                            { href: "#", className: "course-one__category" },
                            "development"
                          ),
                          x(
                            "div",
                            { className: "course-one__admin" },
                            x("img", {
                              src: "/assets/images/team-1-1.jpg",
                              alt: "",
                            }),
                            "by ",
                            x("a", { href: "/teacher-details" }, "Lou Guerrero")
                          ),
                          x(
                            "h2",
                            { className: "course-one__title" },
                            x(
                              "a",
                              { href: "/course-details" },
                              "New react bootcamp"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__stars" },
                            x(
                              "span",
                              { className: "course-one__stars-wrap" },
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" })
                            ),
                            x(
                              "span",
                              { className: "course-one__count" },
                              "4.8"
                            ),
                            x(
                              "span",
                              { className: "course-one__stars-count" },
                              "250"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__meta" },
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-clock" }),
                              " 10 Hours"
                            ),
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-folder-open" }),
                              " 6 Lectures"
                            ),
                            x("a", { href: "/course-details" }, "$18")
                          ),
                          x(
                            "a",
                            { href: "#", className: "course-one__link" },
                            "See Preview"
                          )
                        )
                      )
                    ),
                    x(
                      "div",
                      { className: "item" },
                      x(
                        "div",
                        { className: "course-one__single color-2" },
                        x(
                          "div",
                          { className: "course-one__image" },
                          x("img", {
                            src: "/assets/images/course-1-2.jpg",
                            alt: "",
                          }),
                          x("i", { className: "far fa-heart" })
                        ),
                        x(
                          "div",
                          { className: "course-one__content" },
                          x(
                            "a",
                            { href: "#", className: "course-one__category" },
                            "It & Software"
                          ),
                          x(
                            "div",
                            { className: "course-one__admin" },
                            x("img", {
                              src: "/assets/images/team-1-2.jpg",
                              alt: "",
                            }),
                            "by ",
                            x("a", { href: "/teacher-details" }, "Cora Diaz")
                          ),
                          x(
                            "h2",
                            { className: "course-one__title" },
                            x(
                              "a",
                              { href: "/course-details" },
                              "Improve editing skills"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__stars" },
                            x(
                              "span",
                              { className: "course-one__stars-wrap" },
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" })
                            ),
                            x(
                              "span",
                              { className: "course-one__count" },
                              "4.8"
                            ),
                            x(
                              "span",
                              { className: "course-one__stars-count" },
                              "250"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__meta" },
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-clock" }),
                              " 10 Hours"
                            ),
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-folder-open" }),
                              " 6 Lectures"
                            ),
                            x("a", { href: "/course-details" }, "$18")
                          ),
                          x(
                            "a",
                            { href: "#", className: "course-one__link" },
                            "See Preview"
                          )
                        )
                      )
                    ),
                    x(
                      "div",
                      { className: "item" },
                      x(
                        "div",
                        { className: "course-one__single color-3" },
                        x(
                          "div",
                          { className: "course-one__image" },
                          x("img", {
                            src: "/assets/images/course-1-3.jpg",
                            alt: "",
                          }),
                          x("i", { className: "far fa-heart" })
                        ),
                        x(
                          "div",
                          { className: "course-one__content" },
                          x(
                            "a",
                            { href: "#", className: "course-one__category" },
                            "marketing"
                          ),
                          x(
                            "div",
                            { className: "course-one__admin" },
                            x("img", {
                              src: "/assets/images/team-1-3.jpg",
                              alt: "",
                            }),
                            "by ",
                            x("a", { href: "/teacher-details" }, "Ruth Becker")
                          ),
                          x(
                            "h2",
                            { className: "course-one__title" },
                            x(
                              "a",
                              { href: "/course-details" },
                              "Marketing strategies"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__stars" },
                            x(
                              "span",
                              { className: "course-one__stars-wrap" },
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" })
                            ),
                            x(
                              "span",
                              { className: "course-one__count" },
                              "4.8"
                            ),
                            x(
                              "span",
                              { className: "course-one__stars-count" },
                              "250"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__meta" },
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-clock" }),
                              " 10 Hours"
                            ),
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-folder-open" }),
                              " 6 Lectures"
                            ),
                            x("a", { href: "/course-details" }, "$18")
                          ),
                          x(
                            "a",
                            { href: "#", className: "course-one__link" },
                            "See Preview"
                          )
                        )
                      )
                    ),
                    x(
                      "div",
                      { className: "item" },
                      x(
                        "div",
                        { className: "course-one__single color-4" },
                        x(
                          "div",
                          { className: "course-one__image" },
                          x("img", {
                            src: "/assets/images/course-1-4.jpg",
                            alt: "",
                          }),
                          x("i", { className: "far fa-heart" })
                        ),
                        x(
                          "div",
                          { className: "course-one__content" },
                          x(
                            "a",
                            { href: "#", className: "course-one__category" },
                            "Photography"
                          ),
                          x(
                            "div",
                            { className: "course-one__admin" },
                            x("img", {
                              src: "/assets/images/team-1-4.jpg",
                              alt: "",
                            }),
                            "by ",
                            x(
                              "a",
                              { href: "/teacher-details" },
                              "Ernest Rodriquez"
                            )
                          ),
                          x(
                            "h2",
                            { className: "course-one__title" },
                            x(
                              "a",
                              { href: "/course-details" },
                              "Basics of photography"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__stars" },
                            x(
                              "span",
                              { className: "course-one__stars-wrap" },
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" })
                            ),
                            x(
                              "span",
                              { className: "course-one__count" },
                              "4.8"
                            ),
                            x(
                              "span",
                              { className: "course-one__stars-count" },
                              "250"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__meta" },
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-clock" }),
                              " 10 Hours"
                            ),
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-folder-open" }),
                              " 6 Lectures"
                            ),
                            x("a", { href: "/course-details" }, "$18")
                          ),
                          x(
                            "a",
                            { href: "#", className: "course-one__link" },
                            "See Preview"
                          )
                        )
                      )
                    ),
                    x(
                      "div",
                      { className: "item" },
                      x(
                        "div",
                        { className: "course-one__single color-5" },
                        x(
                          "div",
                          { className: "course-one__image" },
                          x("img", {
                            src: "/assets/images/course-1-5.jpg",
                            alt: "",
                          }),
                          x("i", { className: "far fa-heart" })
                        ),
                        x(
                          "div",
                          { className: "course-one__content" },
                          x(
                            "a",
                            { href: "#", className: "course-one__category" },
                            "marketing"
                          ),
                          x(
                            "div",
                            { className: "course-one__admin" },
                            x("img", {
                              src: "/assets/images/team-1-5.jpg",
                              alt: "",
                            }),
                            "by ",
                            x(
                              "a",
                              { href: "/teacher-details" },
                              "Isabella Stanley"
                            )
                          ),
                          x(
                            "h2",
                            { className: "course-one__title" },
                            x(
                              "a",
                              { href: "/course-details" },
                              "Affiliate bootcamp"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__stars" },
                            x(
                              "span",
                              { className: "course-one__stars-wrap" },
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" })
                            ),
                            x(
                              "span",
                              { className: "course-one__count" },
                              "4.8"
                            ),
                            x(
                              "span",
                              { className: "course-one__stars-count" },
                              "250"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__meta" },
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-clock" }),
                              " 10 Hours"
                            ),
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-folder-open" }),
                              " 6 Lectures"
                            ),
                            x("a", { href: "/course-details" }, "$18")
                          ),
                          x(
                            "a",
                            { href: "#", className: "course-one__link" },
                            "See Preview"
                          )
                        )
                      )
                    ),
                    x(
                      "div",
                      { className: "item" },
                      x(
                        "div",
                        { className: "course-one__single color-6" },
                        x(
                          "div",
                          { className: "course-one__image" },
                          x("img", {
                            src: "/assets/images/course-1-6.jpg",
                            alt: "",
                          }),
                          x("i", { className: "far fa-heart" })
                        ),
                        x(
                          "div",
                          { className: "course-one__content" },
                          x(
                            "a",
                            { href: "#", className: "course-one__category" },
                            "Health & Fitness"
                          ),
                          x(
                            "div",
                            { className: "course-one__admin" },
                            x("img", {
                              src: "/assets/images/team-1-6.jpg",
                              alt: "",
                            }),
                            "by ",
                            x(
                              "a",
                              { href: "/teacher-details" },
                              "Katherine Collins"
                            )
                          ),
                          x(
                            "h2",
                            { className: "course-one__title" },
                            x(
                              "a",
                              { href: "/course-details" },
                              "Healthy workout tips "
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__stars" },
                            x(
                              "span",
                              { className: "course-one__stars-wrap" },
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" })
                            ),
                            x(
                              "span",
                              { className: "course-one__count" },
                              "4.8"
                            ),
                            x(
                              "span",
                              { className: "course-one__stars-count" },
                              "250"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__meta" },
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-clock" }),
                              " 10 Hours"
                            ),
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-folder-open" }),
                              " 6 Lectures"
                            ),
                            x("a", { href: "/course-details" }, "$18")
                          ),
                          x(
                            "a",
                            { href: "#", className: "course-one__link" },
                            "See Preview"
                          )
                        )
                      )
                    ),
                    x(
                      "div",
                      { className: "item" },
                      x(
                        "div",
                        { className: "course-one__single color-1" },
                        x(
                          "div",
                          { className: "course-one__image" },
                          x("img", {
                            src: "/assets/images/course-1-1.jpg",
                            alt: "",
                          }),
                          x("i", { className: "far fa-heart" })
                        ),
                        x(
                          "div",
                          { className: "course-one__content" },
                          x(
                            "a",
                            { href: "#", className: "course-one__category" },
                            "development"
                          ),
                          x(
                            "div",
                            { className: "course-one__admin" },
                            x("img", {
                              src: "/assets/images/team-1-1.jpg",
                              alt: "",
                            }),
                            "by ",
                            x("a", { href: "/teacher-details" }, "Lou Guerrero")
                          ),
                          x(
                            "h2",
                            { className: "course-one__title" },
                            x(
                              "a",
                              { href: "/course-details" },
                              "New react bootcamp"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__stars" },
                            x(
                              "span",
                              { className: "course-one__stars-wrap" },
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" })
                            ),
                            x(
                              "span",
                              { className: "course-one__count" },
                              "4.8"
                            ),
                            x(
                              "span",
                              { className: "course-one__stars-count" },
                              "250"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__meta" },
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-clock" }),
                              " 10 Hours"
                            ),
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-folder-open" }),
                              " 6 Lectures"
                            ),
                            x("a", { href: "/course-details" }, "$18")
                          ),
                          x(
                            "a",
                            { href: "#", className: "course-one__link" },
                            "See Preview"
                          )
                        )
                      )
                    ),
                    x(
                      "div",
                      { className: "item" },
                      x(
                        "div",
                        { className: "course-one__single color-2" },
                        x(
                          "div",
                          { className: "course-one__image" },
                          x("img", {
                            src: "/assets/images/course-1-2.jpg",
                            alt: "",
                          }),
                          x("i", { className: "far fa-heart" })
                        ),
                        x(
                          "div",
                          { className: "course-one__content" },
                          x(
                            "a",
                            { href: "#", className: "course-one__category" },
                            "It & Software"
                          ),
                          x(
                            "div",
                            { className: "course-one__admin" },
                            x("img", {
                              src: "/assets/images/team-1-2.jpg",
                              alt: "",
                            }),
                            "by ",
                            x("a", { href: "/teacher-details" }, "Cora Diaz")
                          ),
                          x(
                            "h2",
                            { className: "course-one__title" },
                            x(
                              "a",
                              { href: "/course-details" },
                              "Improve editing skills"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__stars" },
                            x(
                              "span",
                              { className: "course-one__stars-wrap" },
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" })
                            ),
                            x(
                              "span",
                              { className: "course-one__count" },
                              "4.8"
                            ),
                            x(
                              "span",
                              { className: "course-one__stars-count" },
                              "250"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__meta" },
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-clock" }),
                              " 10 Hours"
                            ),
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-folder-open" }),
                              " 6 Lectures"
                            ),
                            x("a", { href: "/course-details" }, "$18")
                          ),
                          x(
                            "a",
                            { href: "#", className: "course-one__link" },
                            "See Preview"
                          )
                        )
                      )
                    ),
                    x(
                      "div",
                      { className: "item" },
                      x(
                        "div",
                        { className: "course-one__single color-3" },
                        x(
                          "div",
                          { className: "course-one__image" },
                          x("img", {
                            src: "/assets/images/course-1-3.jpg",
                            alt: "",
                          }),
                          x("i", { className: "far fa-heart" })
                        ),
                        x(
                          "div",
                          { className: "course-one__content" },
                          x(
                            "a",
                            { href: "#", className: "course-one__category" },
                            "marketing"
                          ),
                          x(
                            "div",
                            { className: "course-one__admin" },
                            x("img", {
                              src: "/assets/images/team-1-3.jpg",
                              alt: "",
                            }),
                            "by ",
                            x("a", { href: "/teacher-details" }, "Ruth Becker")
                          ),
                          x(
                            "h2",
                            { className: "course-one__title" },
                            x(
                              "a",
                              { href: "/course-details" },
                              "Marketing strategies"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__stars" },
                            x(
                              "span",
                              { className: "course-one__stars-wrap" },
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" }),
                              x("i", { className: "fa fa-star" })
                            ),
                            x(
                              "span",
                              { className: "course-one__count" },
                              "4.8"
                            ),
                            x(
                              "span",
                              { className: "course-one__stars-count" },
                              "250"
                            )
                          ),
                          x(
                            "div",
                            { className: "course-one__meta" },
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-clock" }),
                              " 10 Hours"
                            ),
                            x(
                              "a",
                              { href: "/course-details" },
                              x("i", { className: "far fa-folder-open" }),
                              " 6 Lectures"
                            ),
                            x("a", { href: "/course-details" }, "$18")
                          ),
                          x(
                            "a",
                            { href: "#", className: "course-one__link" },
                            "See Preview"
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        D = s("60Bi"),
        T = s.n(D),
        I = o.a.createElement;
      function R() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      var M = (function (e) {
          Object(m.a)(t, e);
          var a,
            s =
              ((a = t),
              function () {
                var e,
                  s = Object(i.a)(a);
                if (R()) {
                  var t = Object(i.a)(this).constructor;
                  e = Reflect.construct(s, arguments, t);
                } else e = s.apply(this, arguments);
                return Object(c.a)(this, e);
              });
          function t() {
            var e;
            return (
              Object(r.a)(this, t),
              (e = s.call(this)),
              Object(g.a)(Object(p.a)(e), "openModal", function () {
                e.setState({ isOpen: !0 });
              }),
              (e.state = { isOpen: !1 }),
              e
            );
          }
          return (
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return I(
                    "section",
                    { className: "video-two" },
                    I(
                      "div",
                      { className: "container" },
                      I("img", {
                        src: "/assets/images/scratch-1-1.png",
                        className: "video-two__scratch",
                        alt: "",
                      }),
                      I(
                        "div",
                        { className: "row" },
                        I(
                          "div",
                          { className: "col-lg-7" },
                          I(
                            "div",
                            { className: "video-two__content" },
                            I(
                              "h2",
                              { className: "video-two__title" },
                              "Kipso one & only ",
                              I("br", null),
                              "mission is to extend ",
                              I("br", null),
                              "your knowledge base"
                            ),
                            I(
                              "a",
                              { href: "#", className: "thm-btn" },
                              "Learn More"
                            )
                          )
                        ),
                        I(
                          "div",
                          {
                            className:
                              "col-lg-5 d-flex justify-content-lg-end justify-content-sm-start",
                          },
                          I(
                            "div",
                            { className: "my-auto" },
                            I(T.a, {
                              channel: "youtube",
                              isOpen: this.state.isOpen,
                              videoId: "aitb---aDYM",
                              onClose: function () {
                                return e.setState({ isOpen: !1 });
                              },
                            }),
                            I(
                              "div",
                              {
                                onClick: this.openModal,
                                className: "video-two__popup",
                              },
                              I("i", { className: "fa fa-play" })
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(t.Component),
        E = s("17x9"),
        L = s.n(E);
      function q(e, a) {
        if (!(e instanceof a))
          throw new TypeError("Cannot call a class as a function");
      }
      function H(e, a) {
        for (var s = 0; s < a.length; s++) {
          var t = a[s];
          (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            "value" in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t);
        }
      }
      function A(e, a, s) {
        return a && H(e.prototype, a), s && H(e, s), e;
      }
      function V(e, a) {
        if ("function" !== typeof a && null !== a)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(a && a.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          a && J(e, a);
      }
      function B(e) {
        return (B = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function J(e, a) {
        return (J =
          Object.setPrototypeOf ||
          function (e, a) {
            return (e.__proto__ = a), e;
          })(e, a);
      }
      function z(e, a) {
        return !a || ("object" !== typeof a && "function" !== typeof a)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : a;
      }
      function Y(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var a = 0, s = new Array(e.length); a < e.length; a++)
                s[a] = e[a];
              return s;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function G(e) {
        var a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          s = String(e);
        if (0 === a) return s;
        var t = s.match(/(.*?)([0-9]+)(.*)/),
          o = t ? t[1] : "",
          n = t ? t[3] : "",
          r = t ? t[2] : s,
          l =
            r.length >= a
              ? r
              : (
                  Y(Array(a))
                    .map(function () {
                      return "0";
                    })
                    .join("") + r
                ).slice(-1 * a);
        return "".concat(o).concat(l).concat(n);
      }
      var F = { daysInHours: !1, zeroPadTime: 2 };
      function $(e, a) {
        var s = e.days,
          t = e.hours,
          o = e.minutes,
          n = e.seconds,
          r = Object.assign({}, F, a),
          l = r.daysInHours,
          c = r.zeroPadTime,
          i = r.zeroPadDays,
          m = void 0 === i ? c : i,
          u = l ? G(t + 24 * s, c) : G(t, Math.min(2, c));
        return {
          days: l ? "" : G(s, m),
          hours: u,
          minutes: G(o, Math.min(2, c)),
          seconds: G(n, Math.min(2, c)),
        };
      }
      var U = (function (e) {
        function a() {
          var e;
          return (
            q(this, a),
            ((e = z(this, B(a).apply(this, arguments))).state = {
              count: e.props.count || 3,
            }),
            (e.startCountdown = function () {
              e.interval = window.setInterval(function () {
                0 === e.state.count - 1
                  ? (e.stopCountdown(),
                    e.props.onComplete && e.props.onComplete())
                  : e.setState(function (e) {
                      return { count: e.count - 1 };
                    });
              }, 1e3);
            }),
            (e.stopCountdown = function () {
              clearInterval(e.interval);
            }),
            (e.addTime = function (a) {
              e.stopCountdown(),
                e.setState(function (e) {
                  return { count: e.count + a };
                }, e.startCountdown);
            }),
            e
          );
        }
        return (
          V(a, e),
          A(a, [
            {
              key: "componentDidMount",
              value: function () {
                this.startCountdown();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearInterval(this.interval);
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.children
                  ? o.a.cloneElement(this.props.children, {
                      count: this.state.count,
                    })
                  : null;
              },
            },
          ]),
          a
        );
      })(o.a.Component);
      U.propTypes = {
        count: L.a.number,
        children: L.a.element,
        onComplete: L.a.func,
      };
      var W = (function (e) {
        function a(e) {
          var s;
          return (
            q(this, a),
            ((s = z(this, B(a).call(this, e))).mounted = !1),
            (s.legacyMode = !1),
            (s.legacyCountdownRef = o.a.createRef()),
            (s.tick = function () {
              var e = s.props.onTick,
                a = s.calcTimeDelta();
              s.setTimeDeltaState(a), e && a.total > 0 && e(a);
            }),
            (s.start = function () {
              s.setState(
                function (e) {
                  var a = e.offsetStart;
                  return {
                    offsetStart: 0,
                    offsetTime: e.offsetTime + (a ? Date.now() - a : 0),
                  };
                },
                function () {
                  var e = s.calcTimeDelta();
                  s.setTimeDeltaState(e),
                    s.props.onStart && s.props.onStart(e),
                    s.props.controlled ||
                      (s.clearInterval(),
                      (s.interval = window.setInterval(
                        s.tick,
                        s.props.intervalDelay
                      )));
                }
              );
            }),
            (s.pause = function () {
              s.clearInterval(),
                s.setState({ offsetStart: s.calcOffsetStart() }, function () {
                  var e = s.calcTimeDelta();
                  s.setTimeDeltaState(e), s.props.onPause && s.props.onPause(e);
                });
            }),
            (s.isPaused = function () {
              return s.state.offsetStart > 0;
            }),
            (s.isCompleted = function () {
              return s.state.timeDelta.completed;
            }),
            e.date
              ? (s.state = {
                  timeDelta: s.calcTimeDelta(),
                  offsetStart: e.autoStart ? 0 : s.calcOffsetStart(),
                  offsetTime: 0,
                })
              : (s.legacyMode = !0),
            s
          );
        }
        return (
          V(a, e),
          A(a, [
            {
              key: "componentDidMount",
              value: function () {
                this.legacyMode ||
                  ((this.mounted = !0),
                  this.props.autoStart && this.start(),
                  this.props.onMount &&
                    this.props.onMount(this.calcTimeDelta()));
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.legacyMode ||
                  this.shallowCompareProps(this.props, e) ||
                  this.setTimeDeltaState(this.calcTimeDelta());
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.legacyMode || ((this.mounted = !1), this.clearInterval());
              },
            },
            {
              key: "calcTimeDelta",
              value: function () {
                var e = this.props;
                return (function (e) {
                  var a,
                    s =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    t = s.now,
                    o = void 0 === t ? Date.now : t,
                    n = s.precision,
                    r = void 0 === n ? 0 : n,
                    l = s.controlled,
                    c = void 0 !== l && l,
                    i = s.offsetTime,
                    m = void 0 === i ? 0 : i;
                  (a =
                    "string" === typeof e
                      ? new Date(e).getTime()
                      : e instanceof Date
                      ? e.getTime()
                      : e),
                    c || (a += m);
                  var u = Math.round(
                      1e3 *
                        parseFloat(
                          (Math.max(0, c ? a : a - o()) / 1e3).toFixed(
                            Math.max(0, Math.min(20, r))
                          )
                        )
                    ),
                    d = u / 1e3;
                  return {
                    total: u,
                    days: Math.floor(d / 86400),
                    hours: Math.floor((d / 3600) % 24),
                    minutes: Math.floor((d / 60) % 60),
                    seconds: Math.floor(d % 60),
                    milliseconds: Number(((d % 1) * 1e3).toFixed()),
                    completed: u <= 0,
                  };
                })(e.date, {
                  now: e.now,
                  precision: e.precision,
                  controlled: e.controlled,
                  offsetTime: this.state ? this.state.offsetTime : 0,
                });
              },
            },
            {
              key: "calcOffsetStart",
              value: function () {
                return Date.now();
              },
            },
            {
              key: "addTime",
              value: function (e) {
                this.legacyCountdownRef.current.addTime(e);
              },
            },
            {
              key: "clearInterval",
              value: function () {
                window.clearInterval(this.interval);
              },
            },
            {
              key: "shallowCompareProps",
              value: function (e, a) {
                var s = Object.keys(e);
                return (
                  s.length === Object.keys(a).length &&
                  !s.some(function (s) {
                    var t = e[s],
                      o = a[s];
                    return (
                      !a.hasOwnProperty(s) || !(t === o || (t !== t && o !== o))
                    );
                  })
                );
              },
            },
            {
              key: "setTimeDeltaState",
              value: function (e) {
                var a,
                  s = this;
                if (
                  (!this.state.timeDelta.completed &&
                    e.completed &&
                    (this.clearInterval(),
                    (a = function () {
                      return s.props.onComplete && s.props.onComplete(e);
                    })),
                  this.mounted)
                )
                  return this.setState({ timeDelta: e }, a);
              },
            },
            {
              key: "getApi",
              value: function () {
                return (this.api = this.api || {
                  start: this.start,
                  pause: this.pause,
                  isPaused: this.isPaused,
                  isCompleted: this.isCompleted,
                });
              },
            },
            {
              key: "getRenderProps",
              value: function () {
                var e = this.props,
                  a = e.daysInHours,
                  s = e.zeroPadTime,
                  t = e.zeroPadDays,
                  o = this.state.timeDelta;
                return Object.assign({}, o, {
                  api: this.getApi(),
                  props: this.props,
                  formatted: $(o, {
                    daysInHours: a,
                    zeroPadTime: s,
                    zeroPadDays: t,
                  }),
                });
              },
            },
            {
              key: "render",
              value: function () {
                if (this.legacyMode) {
                  var e = this.props,
                    a = e.count,
                    s = e.children,
                    t = e.onComplete;
                  return o.a.createElement(
                    U,
                    { ref: this.legacyCountdownRef, count: a, onComplete: t },
                    s
                  );
                }
                var n = this.props,
                  r = n.children,
                  l = n.renderer,
                  c = this.getRenderProps();
                if (l) return l(c);
                if (r && this.state.timeDelta.completed)
                  return o.a.cloneElement(r, { countdown: c });
                var i = c.formatted,
                  m = i.days,
                  u = i.hours,
                  d = i.minutes,
                  f = i.seconds;
                return o.a.createElement(
                  "span",
                  null,
                  m,
                  m ? ":" : "",
                  u,
                  ":",
                  d,
                  ":",
                  f
                );
              },
            },
          ]),
          a
        );
      })(o.a.Component);
      (W.defaultProps = Object.assign({}, F, {
        controlled: !1,
        intervalDelay: 1e3,
        precision: 0,
        autoStart: !0,
      })),
        (W.propTypes = {
          date: L.a.oneOfType([L.a.instanceOf(Date), L.a.string, L.a.number]),
          daysInHours: L.a.bool,
          zeroPadTime: L.a.number,
          zeroPadDays: L.a.number,
          controlled: L.a.bool,
          intervalDelay: L.a.number,
          precision: L.a.number,
          autoStart: L.a.bool,
          children: L.a.element,
          renderer: L.a.func,
          now: L.a.func,
          onMount: L.a.func,
          onStart: L.a.func,
          onPause: L.a.func,
          onTick: L.a.func,
          onComplete: L.a.func,
        });
      var X = W,
        K = o.a.createElement,
        Q = function () {
          return K(
            "section",
            { className: "countdown-one" },
            K(
              "div",
              { className: "container" },
              K(
                "div",
                { className: "row" },
                K(
                  "div",
                  { className: "col-lg-6" },
                  K(
                    "div",
                    { className: "countdown-one__content" },
                    K(
                      "h2",
                      { className: "countdown-one__title" },
                      "Register now "
                    ),
                    K(
                      "p",
                      { className: "countdown-one__tag-line" },
                      "get premium online courses for free!"
                    ),
                    K(
                      "p",
                      { className: "countdown-one__text" },
                      "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat is simply free text available in the psutis sem nibh id eis sed odio sit amet."
                    ),
                    K(
                      "div",
                      { className: "countdown-one__list list-unstyled" },
                      K(X, { date: Date.now() + 5e9 })
                    )
                  )
                ),
                K(
                  "div",
                  { className: "col-lg-6" },
                  K(
                    "div",
                    { className: "become-teacher__form" },
                    K(
                      "div",
                      { className: "become-teacher__form-top" },
                      K(
                        "h2",
                        { className: "become-teacher__form-title" },
                        "Get free courses"
                      )
                    ),
                    K(
                      "form",
                      {
                        action: "#",
                        method: "POST",
                        className:
                          "become-teacher__form-content contact-form-validated",
                      },
                      K("input", {
                        type: "text",
                        placeholder: "Your Name",
                        name: "name",
                      }),
                      K("input", {
                        type: "text",
                        placeholder: "Email Address",
                        name: "email",
                      }),
                      K("input", {
                        type: "text",
                        placeholder: "Phone Number",
                        name: "phone",
                      }),
                      K("input", {
                        type: "text",
                        placeholder: "Comment",
                        name: "message",
                      }),
                      K(
                        "button",
                        {
                          type: "submit",
                          className: "thm-btn become-teacher__form-btn",
                        },
                        "Apply For It"
                      )
                    ),
                    K("div", { className: "result text-center" })
                  )
                )
              )
            )
          );
        },
        Z = o.a.createElement,
        ee = function () {
          return Z(
            "section",
            { className: "thm-gray-bg course-category-one" },
            Z(
              "div",
              { className: "container-fluid text-center" },
              Z(
                "div",
                { className: "block-title text-center" },
                Z(
                  "h2",
                  { className: "block-title__title" },
                  "Browse online ",
                  Z("br", null),
                  "course categories"
                )
              ),
              Z(
                "div",
                { className: "course-category-one__carousel" },
                Z(
                  P.a,
                  {
                    slidesPerView: 6,
                    loop: !0,
                    speed: 1e3,
                    spaceBetween: 30,
                    autoplay: { delay: 3e3, disableOnInteraction: !1 },
                    breakpoints: {
                      1024: { slidesPerView: 6 },
                      768: { slidesPerView: 4 },
                      640: { slidesPerView: 3 },
                      320: { slidesPerView: 2 },
                    },
                  },
                  Z(
                    "div",
                    { className: "item" },
                    Z(
                      "div",
                      { className: "course-category-one__single color-1" },
                      Z(
                        "div",
                        { className: "course-category-one__icon" },
                        Z("i", { className: "kipso-icon-desktop" })
                      ),
                      Z(
                        "h3",
                        { className: "course-category-one__title" },
                        Z("a", { href: "#" }, "IT & Software")
                      )
                    )
                  ),
                  Z(
                    "div",
                    { className: "item" },
                    Z(
                      "div",
                      { className: "course-category-one__single color-2" },
                      Z(
                        "div",
                        { className: "course-category-one__icon" },
                        Z("i", { className: "kipso-icon-web-programming" })
                      ),
                      Z(
                        "h3",
                        { className: "course-category-one__title" },
                        Z("a", { href: "#" }, "Development")
                      )
                    )
                  ),
                  Z(
                    "div",
                    { className: "item" },
                    Z(
                      "div",
                      { className: "course-category-one__single color-3" },
                      Z(
                        "div",
                        { className: "course-category-one__icon" },
                        Z("i", { className: "kipso-icon-music-player" })
                      ),
                      Z(
                        "h3",
                        { className: "course-category-one__title" },
                        Z("a", { href: "#" }, "Music")
                      )
                    )
                  ),
                  Z(
                    "div",
                    { className: "item" },
                    Z(
                      "div",
                      { className: "course-category-one__single color-4" },
                      Z(
                        "div",
                        { className: "course-category-one__icon" },
                        Z("i", { className: "kipso-icon-camera" })
                      ),
                      Z(
                        "h3",
                        { className: "course-category-one__title" },
                        Z("a", { href: "#" }, "Photography")
                      )
                    )
                  ),
                  Z(
                    "div",
                    { className: "item" },
                    Z(
                      "div",
                      { className: "course-category-one__single color-5" },
                      Z(
                        "div",
                        { className: "course-category-one__icon" },
                        Z("i", { className: "kipso-icon-targeting" })
                      ),
                      Z(
                        "h3",
                        { className: "course-category-one__title" },
                        Z("a", { href: "#" }, "Marketing")
                      )
                    )
                  ),
                  Z(
                    "div",
                    { className: "item" },
                    Z(
                      "div",
                      { className: "course-category-one__single color-6" },
                      Z(
                        "div",
                        { className: "course-category-one__icon" },
                        Z("i", { className: "kipso-icon-health" })
                      ),
                      Z(
                        "h3",
                        { className: "course-category-one__title" },
                        Z("a", { href: "#" }, "Health & Fitness")
                      )
                    )
                  ),
                  Z(
                    "div",
                    { className: "item" },
                    Z(
                      "div",
                      { className: "course-category-one__single color-1" },
                      Z(
                        "div",
                        { className: "course-category-one__icon" },
                        Z("i", { className: "kipso-icon-desktop" })
                      ),
                      Z(
                        "h3",
                        { className: "course-category-one__title" },
                        Z("a", { href: "#" }, "IT & Software")
                      )
                    )
                  ),
                  Z(
                    "div",
                    { className: "item" },
                    Z(
                      "div",
                      { className: "course-category-one__single color-2" },
                      Z(
                        "div",
                        { className: "course-category-one__icon" },
                        Z("i", { className: "kipso-icon-web-programming" })
                      ),
                      Z(
                        "h3",
                        { className: "course-category-one__title" },
                        Z("a", { href: "#" }, "Development")
                      )
                    )
                  ),
                  Z(
                    "div",
                    { className: "item" },
                    Z(
                      "div",
                      { className: "course-category-one__single color-3" },
                      Z(
                        "div",
                        { className: "course-category-one__icon" },
                        Z("i", { className: "kipso-icon-music-player" })
                      ),
                      Z(
                        "h3",
                        { className: "course-category-one__title" },
                        Z("a", { href: "#" }, "Music")
                      )
                    )
                  ),
                  Z(
                    "div",
                    { className: "item" },
                    Z(
                      "div",
                      { className: "course-category-one__single color-4" },
                      Z(
                        "div",
                        { className: "course-category-one__icon" },
                        Z("i", { className: "kipso-icon-camera" })
                      ),
                      Z(
                        "h3",
                        { className: "course-category-one__title" },
                        Z("a", { href: "#" }, "Photography")
                      )
                    )
                  )
                )
              ),
              Z("a", { href: "#", className: "thm-btn" }, "View All Categories")
            )
          );
        },
        ae = o.a.createElement;
      function se() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      var te = (function (e) {
          Object(m.a)(t, e);
          var a,
            s =
              ((a = t),
              function () {
                var e,
                  s = Object(i.a)(a);
                if (se()) {
                  var t = Object(i.a)(this).constructor;
                  e = Reflect.construct(s, arguments, t);
                } else e = s.apply(this, arguments);
                return Object(c.a)(this, e);
              });
          function t() {
            return Object(r.a)(this, t), s.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  return ae(
                    "section",
                    { className: "cta-three" },
                    ae(
                      "div",
                      { className: "container" },
                      ae(
                        "div",
                        { className: "row" },
                        ae(
                          "div",
                          { className: "col-lg-6 clearfix" },
                          ae("img", {
                            src: "/assets/images/cta-1.jpg",
                            className: "cta-three__image",
                            alt: "",
                          })
                        ),
                        ae(
                          "div",
                          { className: "col-lg-6" },
                          ae(
                            "div",
                            { className: "cta-three__content" },
                            ae(
                              "div",
                              { className: "block-title text-left" },
                              ae(
                                "h2",
                                { className: "block-title__title" },
                                "Benefits of learning with kipso"
                              )
                            ),
                            ae(
                              "p",
                              { className: "cta-three__text" },
                              "There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy fringilla vitae."
                            ),
                            ae(
                              "div",
                              { className: "cta-three__single-wrap" },
                              ae(
                                "div",
                                { className: "cta-three__single" },
                                ae("i", { className: "kipso-icon-strategy" }),
                                ae(
                                  "p",
                                  { className: "cta-three__single-text" },
                                  "Professional Courses"
                                )
                              ),
                              ae(
                                "div",
                                { className: "cta-three__single" },
                                ae("i", { className: "kipso-icon-training" }),
                                ae(
                                  "p",
                                  { className: "cta-three__single-text" },
                                  "Live Learning"
                                )
                              ),
                              ae(
                                "div",
                                { className: "cta-three__single" },
                                ae("i", {
                                  className: "kipso-icon-human-resources",
                                }),
                                ae(
                                  "p",
                                  { className: "cta-three__single-text" },
                                  "Expert Teachers"
                                )
                              )
                            ),
                            ae(
                              "a",
                              { href: "#", className: "thm-btn" },
                              "Learn More"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(t.Component),
        oe = s("Bozz"),
        ne = o.a.createElement,
        re = function () {
          return ne(
            "section",
            { className: "blog-two" },
            ne(
              "div",
              { className: "container" },
              ne(
                "div",
                { className: "block-title text-center" },
                ne(
                  "h2",
                  { className: "block-title__title" },
                  "Our latest news ",
                  ne("br", null),
                  "& articles"
                )
              ),
              ne(
                "div",
                { className: "blog-two__carousel" },
                ne(
                  P.a,
                  {
                    slidesPerView: 3,
                    loop: !0,
                    speed: 1e3,
                    spaceBetween: 30,
                    autoplay: { delay: 3e3, disableOnInteraction: !1 },
                    pagination: { el: ".swiper-pagination", clickable: !0 },
                    breakpoints: {
                      1024: { slidesPerView: 3 },
                      768: { slidesPerView: 2 },
                      640: { slidesPerView: 1 },
                      320: { slidesPerView: 1 },
                    },
                  },
                  ne(
                    "div",
                    { className: "item" },
                    ne(
                      "div",
                      {
                        className: "blog-two__single",
                        style: {
                          backgroundImage: "url(assets/images/blog-2-1.jpg)",
                        },
                      },
                      ne(
                        "div",
                        { className: "blog-two__inner" },
                        ne(
                          "a",
                          {
                            href: "news-details.html",
                            className: "blog-two__date",
                          },
                          ne("span", null, "25"),
                          "Jul"
                        ),
                        ne(
                          "div",
                          { className: "blog-two__meta" },
                          ne("a", { href: "#" }, "by Admin"),
                          ne("a", { href: "#" }, "3 Comments")
                        ),
                        ne(
                          "h3",
                          { className: "blog-two__title" },
                          ne(
                            "a",
                            { href: "news-details.html" },
                            "Summer high school journalism camp"
                          )
                        )
                      )
                    )
                  ),
                  ne(
                    "div",
                    { className: "item" },
                    ne(
                      "div",
                      {
                        className: "blog-two__single",
                        style: {
                          backgroundImage: "url(assets/images/blog-2-2.jpg)",
                        },
                      },
                      ne(
                        "div",
                        { className: "blog-two__inner" },
                        ne(
                          "a",
                          {
                            href: "news-details.html",
                            className: "blog-two__date",
                          },
                          ne("span", null, "25"),
                          "Jul"
                        ),
                        ne(
                          "div",
                          { className: "blog-two__meta" },
                          ne("a", { href: "#" }, "by Admin"),
                          ne("a", { href: "#" }, "3 Comments")
                        ),
                        ne(
                          "h3",
                          { className: "blog-two__title" },
                          ne(
                            "a",
                            { href: "news-details.html" },
                            "Get a tips to develop a quality education"
                          )
                        )
                      )
                    )
                  ),
                  ne(
                    "div",
                    { className: "item" },
                    ne(
                      "div",
                      {
                        className: "blog-two__single",
                        style: {
                          backgroundImage: "url(assets/images/blog-2-3.jpg)",
                        },
                      },
                      ne(
                        "div",
                        { className: "blog-two__inner" },
                        ne(
                          "a",
                          {
                            href: "news-details.html",
                            className: "blog-two__date",
                          },
                          ne("span", null, "25"),
                          "Jul"
                        ),
                        ne(
                          "div",
                          { className: "blog-two__meta" },
                          ne("a", { href: "#" }, "by Admin"),
                          ne("a", { href: "#" }, "3 Comments")
                        ),
                        ne(
                          "h3",
                          { className: "blog-two__title" },
                          ne(
                            "a",
                            { href: "news-details.html" },
                            "Learn variety of programs and courses"
                          )
                        )
                      )
                    )
                  ),
                  ne(
                    "div",
                    { className: "item" },
                    ne(
                      "div",
                      {
                        className: "blog-two__single",
                        style: {
                          backgroundImage: "url(assets/images/blog-2-1.jpg)",
                        },
                      },
                      ne(
                        "div",
                        { className: "blog-two__inner" },
                        ne(
                          "a",
                          {
                            href: "news-details.html",
                            className: "blog-two__date",
                          },
                          ne("span", null, "25"),
                          "Jul"
                        ),
                        ne(
                          "div",
                          { className: "blog-two__meta" },
                          ne("a", { href: "#" }, "by Admin"),
                          ne("a", { href: "#" }, "3 Comments")
                        ),
                        ne(
                          "h3",
                          { className: "blog-two__title" },
                          ne(
                            "a",
                            { href: "news-details.html" },
                            "Summer high school journalism camp"
                          )
                        )
                      )
                    )
                  ),
                  ne(
                    "div",
                    { className: "item" },
                    ne(
                      "div",
                      {
                        className: "blog-two__single",
                        style: {
                          backgroundImage: "url(assets/images/blog-2-2.jpg)",
                        },
                      },
                      ne(
                        "div",
                        { className: "blog-two__inner" },
                        ne(
                          "a",
                          {
                            href: "news-details.html",
                            className: "blog-two__date",
                          },
                          ne("span", null, "25"),
                          "Jul"
                        ),
                        ne(
                          "div",
                          { className: "blog-two__meta" },
                          ne("a", { href: "#" }, "by Admin"),
                          ne("a", { href: "#" }, "3 Comments")
                        ),
                        ne(
                          "h3",
                          { className: "blog-two__title" },
                          ne(
                            "a",
                            { href: "news-details.html" },
                            "Get a tips to develop a quality education"
                          )
                        )
                      )
                    )
                  ),
                  ne(
                    "div",
                    { className: "item" },
                    ne(
                      "div",
                      {
                        className: "blog-two__single",
                        style: {
                          backgroundImage: "url(assets/images/blog-2-3.jpg)",
                        },
                      },
                      ne(
                        "div",
                        { className: "blog-two__inner" },
                        ne(
                          "a",
                          {
                            href: "news-details.html",
                            className: "blog-two__date",
                          },
                          ne("span", null, "25"),
                          "Jul"
                        ),
                        ne(
                          "div",
                          { className: "blog-two__meta" },
                          ne("a", { href: "#" }, "by Admin"),
                          ne("a", { href: "#" }, "3 Comments")
                        ),
                        ne(
                          "h3",
                          { className: "blog-two__title" },
                          ne(
                            "a",
                            { href: "news-details.html" },
                            "Learn variety of programs and courses"
                          )
                        )
                      )
                    )
                  ),
                  ne(
                    "div",
                    { className: "item" },
                    ne(
                      "div",
                      {
                        className: "blog-two__single",
                        style: {
                          backgroundImage: "url(assets/images/blog-2-1.jpg)",
                        },
                      },
                      ne(
                        "div",
                        { className: "blog-two__inner" },
                        ne(
                          "a",
                          {
                            href: "news-details.html",
                            className: "blog-two__date",
                          },
                          ne("span", null, "25"),
                          "Jul"
                        ),
                        ne(
                          "div",
                          { className: "blog-two__meta" },
                          ne("a", { href: "#" }, "by Admin"),
                          ne("a", { href: "#" }, "3 Comments")
                        ),
                        ne(
                          "h3",
                          { className: "blog-two__title" },
                          ne(
                            "a",
                            { href: "news-details.html" },
                            "Summer high school journalism camp"
                          )
                        )
                      )
                    )
                  ),
                  ne(
                    "div",
                    { className: "item" },
                    ne(
                      "div",
                      {
                        className: "blog-two__single",
                        style: {
                          backgroundImage: "url(assets/images/blog-2-2.jpg)",
                        },
                      },
                      ne(
                        "div",
                        { className: "blog-two__inner" },
                        ne(
                          "a",
                          {
                            href: "news-details.html",
                            className: "blog-two__date",
                          },
                          ne("span", null, "25"),
                          "Jul"
                        ),
                        ne(
                          "div",
                          { className: "blog-two__meta" },
                          ne("a", { href: "#" }, "by Admin"),
                          ne("a", { href: "#" }, "3 Comments")
                        ),
                        ne(
                          "h3",
                          { className: "blog-two__title" },
                          ne(
                            "a",
                            { href: "news-details.html" },
                            "Get a tips to develop a quality education"
                          )
                        )
                      )
                    )
                  ),
                  ne(
                    "div",
                    { className: "item" },
                    ne(
                      "div",
                      {
                        className: "blog-two__single",
                        style: {
                          backgroundImage: "url(assets/images/blog-2-3.jpg)",
                        },
                      },
                      ne(
                        "div",
                        { className: "blog-two__inner" },
                        ne(
                          "a",
                          {
                            href: "news-details.html",
                            className: "blog-two__date",
                          },
                          ne("span", null, "25"),
                          "Jul"
                        ),
                        ne(
                          "div",
                          { className: "blog-two__meta" },
                          ne("a", { href: "#" }, "by Admin"),
                          ne("a", { href: "#" }, "3 Comments")
                        ),
                        ne(
                          "h3",
                          { className: "blog-two__title" },
                          ne(
                            "a",
                            { href: "news-details.html" },
                            "Learn variety of programs and courses"
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        le = o.a.createElement,
        ce = function () {
          return le(
            "section",
            { className: "cta-four" },
            le("img", {
              src: "assets/images/circle-stripe-1.png",
              className: "cta-four__stripe",
              alt: "",
            }),
            le("img", {
              src: "assets/images/line-stripe-1.png",
              className: "cta-four__line",
              alt: "",
            }),
            le(
              "div",
              { className: "container text-center" },
              le(
                "div",
                { className: "block-title" },
                le(
                  "h2",
                  { className: "block-title__title" },
                  "We\u2019ve best teachers ",
                  le("br", null),
                  "in every subject"
                )
              ),
              le(
                "p",
                { className: "cta-four__text" },
                "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit ",
                le("br", null),
                " consequat is simply free text available in the psutis sem nibh id eis sed odio sit amet."
              )
            )
          );
        },
        ie = o.a.createElement,
        me = function () {
          return ie(
            "section",
            { className: "mailchimp-one" },
            ie(
              "div",
              { className: "container" },
              ie(
                "div",
                { className: "row" },
                ie(
                  "div",
                  { className: "col-lg-6" },
                  ie(
                    "div",
                    { className: "mailchimp-one__content" },
                    ie(
                      "div",
                      { className: "mailchimp-one__icon" },
                      ie("i", { className: "kipso-icon-email" })
                    ),
                    ie(
                      "h2",
                      { className: "mailchimp-one__title" },
                      "Get latest courses ",
                      ie("br", null),
                      "updates by signing up"
                    )
                  )
                ),
                ie(
                  "div",
                  { className: "col-lg-6 d-flex" },
                  ie(
                    "div",
                    { className: "my-auto" },
                    ie(
                      "form",
                      { action: "#", className: "mailchimp-one__form mc-form" },
                      ie("input", {
                        type: "text",
                        id: "mc-email",
                        placeholder: "Enter your email",
                      }),
                      ie(
                        "button",
                        { type: "submit", className: "thm-btn" },
                        "Subscribe"
                      )
                    ),
                    ie("div", { className: "mc-form__response" })
                  )
                )
              )
            )
          );
        },
        ue = o.a.createElement;
      a.default = function () {
        return ue(
          n.a,
          {
            pageTitle:
              "Kipso - React Next Online Education Learning & LMS Template",
          },
          ue(f, null),
          ue(_.a, null),
          ue(h.a, null),
          ue(O, null),
          ue(C, null),
          ue(M, null),
          ue(Q, null),
          ue(ee, null),
          ue(te, null),
          ue(oe.a, null),
          ue(re, null),
          ue(ce, null),
          ue(me, null),
          ue(N.a, null)
        );
      };
    },
    f03Y: function (e, a, s) {
      "use strict";
      var t = s("q1tI"),
        o = s.n(t),
        n = s("YVwf"),
        r = s.n(n),
        l = (s("p6Nx"), o.a.createElement);
      a.a = function () {
        var e = Object(t.useState)(null),
          a = e[0],
          s = e[1];
        return l(
          "div",
          { className: "banner-wrapper" },
          l(
            "section",
            { className: "banner-one banner-carousel__one no-dots" },
            l(
              r.a,
              { getSwiper: s },
              l(
                "div",
                { className: "banner-one__slide banner-one__slide-one" },
                l(
                  "div",
                  { className: "container" },
                  l("div", { className: "banner-one__bubble-1" }),
                  l("div", { className: "banner-one__bubble-2" }),
                  l("div", { className: "banner-one__bubble-3" }),
                  l("img", {
                    src: "/assets/images/slider-1-scratch.png",
                    alt: "",
                    className: "banner-one__scratch",
                  }),
                  l("img", {
                    src: "/assets/images/slider-1-person-1.png",
                    className: "banner-one__person",
                    alt: "",
                  }),
                  l(
                    "div",
                    { className: "row no-gutters" },
                    l(
                      "div",
                      { className: "col-xl-12" },
                      l(
                        "h3",
                        {
                          className:
                            "banner-one__title banner-one__light-color",
                        },
                        "We Can ",
                        l("br", null),
                        "Teach You"
                      ),
                      l(
                        "p",
                        { className: "banner-one__tag-line" },
                        "are you ready to learn?"
                      ),
                      l(
                        "a",
                        { href: "#", className: "thm-btn banner-one__btn" },
                        "Learn More"
                      )
                    )
                  )
                )
              ),
              l(
                "div",
                { className: "banner-one__slide banner-one__slide-two" },
                l(
                  "div",
                  { className: "container" },
                  l("div", { className: "banner-one__bubble-1" }),
                  l("div", { className: "banner-one__bubble-2" }),
                  l("div", { className: "banner-one__bubble-3" }),
                  l("img", {
                    src: "/assets/images/slider-1-scratch.png",
                    alt: "",
                    className: "banner-one__scratch",
                  }),
                  l("img", {
                    src: "/assets/images/slider-1-person-2.png",
                    className: "banner-one__person",
                    alt: "",
                  }),
                  l(
                    "div",
                    { className: "row no-gutters" },
                    l(
                      "div",
                      { className: "col-xl-12" },
                      l(
                        "h3",
                        {
                          className:
                            "banner-one__title banner-one__light-color",
                        },
                        "We Can ",
                        l("br", null),
                        "Teach You"
                      ),
                      l(
                        "p",
                        { className: "banner-one__tag-line" },
                        "are you ready to learn?"
                      ),
                      l(
                        "a",
                        { href: "#", className: "thm-btn banner-one__btn" },
                        "Learn More"
                      )
                    )
                  )
                )
              )
            )
          ),
          l(
            "div",
            { className: "banner-carousel-btn" },
            l(
              "div",
              {
                onClick: function () {
                  null !== a && a.slidePrev();
                },
                className: "banner-carousel-btn__left-btn banner-arrow",
              },
              l("i", { className: "kipso-icon-left-arrow" })
            ),
            l(
              "div",
              {
                onClick: function () {
                  null !== a && a.slideNext();
                },
                className: "banner-carousel-btn__right-btn banner-arrow",
              },
              l("i", { className: "kipso-icon-right-arrow" })
            )
          ),
          l(
            "div",
            { className: "banner-one__cta" },
            l(
              "div",
              { className: "banner-one__cta-icon" },
              l("i", {
                className:
                  "kipso-icon-black-graduation-cap-tool-of-university-student-for-head",
              })
            ),
            l(
              "div",
              { className: "banner-one__cta-title" },
              l(
                "h3",
                { className: "banner-one__cta-text" },
                l(
                  "a",
                  { href: "#" },
                  "Read how we encourage our students to learn"
                )
              )
            ),
            l(
              "div",
              { className: "banner-one__cta-link" },
              l(
                "a",
                { href: "#" },
                l("i", { className: "kipso-icon-right-arrow" })
              )
            )
          )
        );
      };
    },
    "n+Gj": function (e, a, s) {
      "use strict";
      var t = s("1OyB"),
        o = s("vuIU"),
        n = s("JX7q"),
        r = s("md7G"),
        l = s("foSv"),
        c = s("Ji7U"),
        i = s("rePB"),
        m = s("q1tI"),
        u = s.n(m),
        d = s("YFqc"),
        f = s.n(d),
        _ = u.a.createElement;
      function h() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      var N = (function (e) {
        Object(c.a)(m, e);
        var a,
          s =
            ((a = m),
            function () {
              var e,
                s = Object(l.a)(a);
              if (h()) {
                var t = Object(l.a)(this).constructor;
                e = Reflect.construct(s, arguments, t);
              } else e = s.apply(this, arguments);
              return Object(r.a)(this, e);
            });
        function m() {
          var e;
          return (
            Object(t.a)(this, m),
            (e = s.call(this)),
            Object(i.a)(Object(n.a)(e), "handleScroll", function () {
              window.scrollY > 70
                ? e.setState({ sticky: !0 })
                : window.scrollY < 70 && e.setState({ sticky: !1 });
            }),
            Object(i.a)(Object(n.a)(e), "mobileMenu", function () {
              var e = document.querySelector(".menu-toggler"),
                a = document.querySelector(".main-navigation");
              e.addEventListener("click", function () {
                a.style.display = "block" != a.style.display ? "block" : "none";
              });
            }),
            Object(i.a)(Object(n.a)(e), "serachButton", function () {
              var e = document.querySelector(".search-toggle"),
                a = document.querySelector(".search-popup"),
                s = document.querySelector(".cancel"),
                t = document.querySelector(".search-overlay");
              e.addEventListener("click", function () {
                a.classList.add("active");
              }),
                s.addEventListener("click", function () {
                  a.classList.remove("active");
                }),
                t.addEventListener("click", function () {
                  a.classList.remove("active");
                });
            }),
            (e.state = { sticky: !1 }),
            e
          );
        }
        return (
          Object(o.a)(m, [
            {
              key: "componentDidMount",
              value: function () {
                window.addEventListener("scroll", this.handleScroll),
                  this.mobileMenu(),
                  this.serachButton();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                window.removeEventListener("scroll", this.handleScroll);
              },
            },
            {
              key: "render",
              value: function () {
                return _(
                  "header",
                  { className: "site-header site-header__header-one " },
                  _(
                    "nav",
                    {
                      className:
                        "navbar navbar-expand-lg navbar-light header-navigation stricky ".concat(
                          this.state.sticky ? "stricked-menu stricky-fixed" : ""
                        ),
                    },
                    _(
                      "div",
                      { className: "container clearfix" },
                      _(
                        "div",
                        { className: "logo-box clearfix" },
                        _(
                          f.a,
                          { href: "/" },
                          _(
                            "a",
                            { className: "navbar-brand" },
                            _("img", {
                              src: "/assets/images/logo-dark.png",
                              className: "main-logo",
                              width: "128",
                              alt: "Awesome Image",
                            })
                          )
                        ),
                        _(
                          "div",
                          { className: "header__social" },
                          _(
                            "a",
                            { href: "#" },
                            _("i", { className: "fab fa-twitter" })
                          ),
                          _(
                            "a",
                            { href: "#" },
                            _("i", { className: "fab fa-facebook-square" })
                          ),
                          _(
                            "a",
                            { href: "#" },
                            _("i", { className: "fab fa-pinterest-p" })
                          ),
                          _(
                            "a",
                            { href: "#" },
                            _("i", { className: "fab fa-instagram" })
                          )
                        ),
                        _(
                          "button",
                          { className: "menu-toggler" },
                          _("span", { className: "kipso-icon-menu" })
                        )
                      ),
                      _(
                        "div",
                        { className: "main-navigation" },
                        _(
                          "ul",
                          { className: " navigation-box" },
                          _(
                            "li",
                            { className: "current" },
                            _(f.a, { href: "/" }, _("a", null, "Home")),
                            _(
                              "ul",
                              { className: "sub-menu" },
                              _(
                                "li",
                                null,
                                _(f.a, { href: "/" }, _("a", null, "Home 01"))
                              ),
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/index-2" },
                                  _("a", null, "Home 02")
                                )
                              ),
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/index-3" },
                                  _("a", null, "Home 03")
                                )
                              ),
                              _(
                                "li",
                                null,
                                _("a", { href: "#" }, "Header Versions"),
                                _(
                                  "ul",
                                  { className: "sub-menu" },
                                  _(
                                    "li",
                                    null,
                                    _(
                                      f.a,
                                      { href: "/" },
                                      _("a", null, "Header 01")
                                    )
                                  ),
                                  _(
                                    "li",
                                    null,
                                    _(
                                      f.a,
                                      { href: "/index-2" },
                                      _("a", null, "Header 02")
                                    )
                                  ),
                                  _(
                                    "li",
                                    null,
                                    _(
                                      f.a,
                                      { href: "/index-3" },
                                      _("a", null, "Header 03")
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          _(
                            "li",
                            null,
                            _("a", { href: "#" }, "Pages"),
                            _(
                              "ul",
                              { className: "sub-menu" },
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/about" },
                                  _("a", null, "About Page")
                                )
                              ),
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/gallery" },
                                  _("a", null, "Gallery")
                                )
                              ),
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/pricing" },
                                  _("a", null, "Pricing Plans")
                                )
                              ),
                              _(
                                "li",
                                null,
                                _(f.a, { href: "/faq" }, _("a", null, "FAQ'S"))
                              )
                            )
                          ),
                          _(
                            "li",
                            null,
                            _("a", { href: "/courses" }, "Courses"),
                            _(
                              "ul",
                              { className: "sub-menu" },
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/courses" },
                                  _("a", null, "Courses")
                                )
                              ),
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/course-details" },
                                  _("a", null, "Courses Details")
                                )
                              )
                            )
                          ),
                          _(
                            "li",
                            null,
                            _(
                              f.a,
                              { href: "/teachers" },
                              _("a", null, "Teachers")
                            ),
                            _(
                              "ul",
                              { className: "sub-menu" },
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/teachers" },
                                  _("a", null, "Teachers")
                                )
                              ),
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/teacher-details" },
                                  _("a", null, "Teachers Details")
                                )
                              ),
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/become-teacher" },
                                  _("a", null, "Become Teacher")
                                )
                              )
                            )
                          ),
                          _(
                            "li",
                            null,
                            _(f.a, { href: "/news" }, _("a", null, "News")),
                            _(
                              "ul",
                              { className: "sub-menu" },
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/news" },
                                  _("a", null, "News Page")
                                )
                              ),
                              _(
                                "li",
                                null,
                                _(
                                  f.a,
                                  { href: "/news-details" },
                                  _("a", null, "News Details")
                                )
                              )
                            )
                          ),
                          _(
                            "li",
                            null,
                            _(
                              f.a,
                              { href: "/contact" },
                              _("a", null, "Contact")
                            )
                          )
                        )
                      ),
                      _(
                        "div",
                        { className: "right-side-box" },
                        _(
                          "a",
                          {
                            className:
                              "header__search-btn search-popup__toggler search-toggle",
                            href: "#",
                          },
                          _("i", { className: "kipso-icon-magnifying-glass" })
                        )
                      )
                    )
                  ),
                  _(
                    "div",
                    { className: "site-header__decor" },
                    _(
                      "div",
                      { className: "site-header__decor-row" },
                      _(
                        "div",
                        { className: "site-header__decor-single" },
                        _("div", { className: "site-header__decor-inner-1" })
                      ),
                      _(
                        "div",
                        { className: "site-header__decor-single" },
                        _("div", { className: "site-header__decor-inner-2" })
                      ),
                      _(
                        "div",
                        { className: "site-header__decor-single" },
                        _("div", { className: "site-header__decor-inner-3" })
                      )
                    )
                  )
                );
              },
            },
          ]),
          m
        );
      })(m.Component);
      a.a = N;
    },
    vlRD: function (e, a, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s("RNiq");
        },
      ]);
    },
  },
  [["vlRD", 0, 2, 6, 1, 3, 5, 7, 4]],
]);