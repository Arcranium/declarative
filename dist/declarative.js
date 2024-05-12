import { defineComponent as Z, computed as D, openBlock as L, createBlock as K, Teleport as Se, unref as Y, createElementVNode as I, normalizeClass as te, renderSlot as U, createElementBlock as R, getCurrentScope as Ot, onScopeDispose as At, ref as V, watch as oe, reactive as Le, getCurrentInstance as St, onMounted as ke, watchEffect as kt, inject as J, mergeModels as pe, useModel as $e, resolveDynamicComponent as Ve, withCtx as G, createVNode as me, withModifiers as We, mergeProps as qe, toHandlers as $t, TransitionGroup as Et, Transition as Ne, useCssVars as Pt, provide as ne, readonly as Ct, toDisplayString as Ae, createCommentVNode as Q, normalizeStyle as zt, pushScopeId as Dt, popScopeId as Tt, toRef as Mt, withDirectives as jt, vModelText as Lt, normalizeProps as Bt, guardReactiveProps as Ft } from "vue";
const He = "$__declarative_", Be = He + "root";
function It(e = "div") {
  const r = document.getElementById(Be);
  if (r)
    return r;
  const t = document.createElement(e);
  return t.id = Be, t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.zIndex = "2147483647", document.body.appendChild(t), t;
}
function Ge(e, r = "div") {
  const t = It(r), o = He + e, s = document.getElementById(o);
  if (s)
    return s;
  const u = document.createElement(r);
  return u.id = o, t.appendChild(u), u;
}
const Ee = /* @__PURE__ */ Z({
  __name: "DDimmed",
  props: {
    center: { type: Boolean, default: !1 },
    teleport: { type: [Boolean, String], default: !0 },
    show: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: r }) {
    const t = e, o = r, s = Ge("dimmed"), u = D(() => [
      "fixed top-0 left-0 w-dvw h-dvh bg-black/20 backdrop-blur-[2px] z-max transition",
      {
        "opacity-0": !t.show,
        "!backdrop-blur-0 bg-transparent pointer-events-none": t.disabled || !t.show,
        "flex justify-center items-center": t.center
      }
    ]);
    function n(d) {
      if (d.target != d.currentTarget) {
        d.stopPropagation(), d.preventDefault();
        return;
      }
      d.preventDefault(), o("click", d);
    }
    return (d, a) => d.teleport != !1 ? (L(), K(Se, {
      key: 0,
      to: typeof d.teleport == "boolean" ? Y(s) : d.teleport
    }, [
      I("div", {
        onClick: n,
        class: te(u.value)
      }, [
        U(d.$slots, "default")
      ], 2)
    ], 8, ["to"])) : (L(), R("div", {
      key: 1,
      onClick: n,
      class: te(u.value)
    }, [
      U(d.$slots, "default")
    ], 2));
  }
});
function Pe(e) {
  return Ot() ? (At(e), !0) : !1;
}
function le(e) {
  return typeof e == "function" ? e() : Y(e);
}
const Ye = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ut = (e) => e != null, Rt = Object.prototype.toString, Vt = (e) => Rt.call(e) === "[object Object]", X = () => {
}, Wt = /* @__PURE__ */ qt();
function qt() {
  var e, r;
  return Ye && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((r = window == null ? void 0 : window.navigator) == null ? void 0 : r.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Nt(e, r) {
  var t;
  if (typeof e == "number")
    return e + r;
  const o = ((t = e.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : t[0]) || "", s = e.slice(o.length), u = Number.parseFloat(o) + r;
  return Number.isNaN(u) ? e : u + s;
}
function ee(e) {
  var r;
  const t = le(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
const se = Ye ? window : void 0;
function ae(...e) {
  let r, t, o, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, o, s] = e, r = se) : [r, t, o, s] = e, !r)
    return X;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const u = [], n = () => {
    u.forEach((c) => c()), u.length = 0;
  }, d = (c, f, l, p) => (c.addEventListener(f, l, p), () => c.removeEventListener(f, l, p)), a = oe(
    () => [ee(r), le(s)],
    ([c, f]) => {
      if (n(), !c)
        return;
      const l = Vt(f) ? { ...f } : f;
      u.push(
        ...t.flatMap((p) => o.map((m) => d(c, p, m, l)))
      );
    },
    { immediate: !0, flush: "post" }
  ), i = () => {
    a(), n();
  };
  return Pe(i), i;
}
let Fe = !1;
function Ht(e, r, t = {}) {
  const { window: o = se, ignore: s = [], capture: u = !0, detectIframe: n = !1 } = t;
  if (!o)
    return X;
  Wt && !Fe && (Fe = !0, Array.from(o.document.body.children).forEach((l) => l.addEventListener("click", X)), o.document.documentElement.addEventListener("click", X));
  let d = !0;
  const a = (l) => s.some((p) => {
    if (typeof p == "string")
      return Array.from(o.document.querySelectorAll(p)).some((m) => m === l.target || l.composedPath().includes(m));
    {
      const m = ee(p);
      return m && (l.target === m || l.composedPath().includes(m));
    }
  }), c = [
    ae(o, "click", (l) => {
      const p = ee(e);
      if (!(!p || p === l.target || l.composedPath().includes(p))) {
        if (l.detail === 0 && (d = !a(l)), !d) {
          d = !0;
          return;
        }
        r(l);
      }
    }, { passive: !0, capture: u }),
    ae(o, "pointerdown", (l) => {
      const p = ee(e);
      d = !a(l) && !!(p && !l.composedPath().includes(p));
    }, { passive: !0 }),
    n && ae(o, "blur", (l) => {
      setTimeout(() => {
        var p;
        const m = ee(e);
        ((p = o.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(m != null && m.contains(o.document.activeElement)) && r(l);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((l) => l());
}
function Gt() {
  const e = V(!1), r = St();
  return r && ke(() => {
    e.value = !0;
  }, r), e;
}
function Xe(e) {
  const r = Gt();
  return D(() => (r.value, !!e()));
}
function ce(e, r = {}) {
  const { window: t = se } = r, o = Xe(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let s;
  const u = V(!1), n = (i) => {
    u.value = i.matches;
  }, d = () => {
    s && ("removeEventListener" in s ? s.removeEventListener("change", n) : s.removeListener(n));
  }, a = kt(() => {
    o.value && (d(), s = t.matchMedia(le(e)), "addEventListener" in s ? s.addEventListener("change", n) : s.addListener(n), u.value = s.matches);
  });
  return Pe(() => {
    a(), d(), s = void 0;
  }), u;
}
function Yt(e, r = {}) {
  function t(c, f) {
    let l = le(e[le(c)]);
    return f != null && (l = Nt(l, f)), typeof l == "number" && (l = `${l}px`), l;
  }
  const { window: o = se, strategy: s = "min-width" } = r;
  function u(c) {
    return o ? o.matchMedia(c).matches : !1;
  }
  const n = (c) => ce(() => `(min-width: ${t(c)})`, r), d = (c) => ce(() => `(max-width: ${t(c)})`, r), a = Object.keys(e).reduce((c, f) => (Object.defineProperty(c, f, {
    get: () => s === "min-width" ? n(f) : d(f),
    enumerable: !0,
    configurable: !0
  }), c), {});
  function i() {
    const c = Object.keys(e).map((f) => [f, n(f)]);
    return D(() => c.filter(([, f]) => f.value).map(([f]) => f));
  }
  return Object.assign(a, {
    greaterOrEqual: n,
    smallerOrEqual: d,
    greater(c) {
      return ce(() => `(min-width: ${t(c, 0.1)})`, r);
    },
    smaller(c) {
      return ce(() => `(max-width: ${t(c, -0.1)})`, r);
    },
    between(c, f) {
      return ce(() => `(min-width: ${t(c)}) and (max-width: ${t(f, -0.1)})`, r);
    },
    isGreater(c) {
      return u(`(min-width: ${t(c, 0.1)})`);
    },
    isGreaterOrEqual(c) {
      return u(`(min-width: ${t(c)})`);
    },
    isSmaller(c) {
      return u(`(max-width: ${t(c, -0.1)})`);
    },
    isSmallerOrEqual(c) {
      return u(`(max-width: ${t(c)})`);
    },
    isInBetween(c, f) {
      return u(`(min-width: ${t(c)}) and (max-width: ${t(f, -0.1)})`);
    },
    current: i,
    active() {
      const c = i();
      return D(() => c.value.length === 0 ? "" : c.value.at(-1));
    }
  });
}
function Xt(e, r, t = {}) {
  const {
    root: o,
    rootMargin: s = "0px",
    threshold: u = 0.1,
    window: n = se,
    immediate: d = !0
  } = t, a = Xe(() => n && "IntersectionObserver" in n), i = D(() => {
    const m = le(e);
    return (Array.isArray(m) ? m : [m]).map(ee).filter(Ut);
  });
  let c = X;
  const f = V(d), l = a.value ? oe(
    () => [i.value, ee(o), f.value],
    ([m, _]) => {
      if (c(), !f.value || !m.length)
        return;
      const E = new IntersectionObserver(
        r,
        {
          root: ee(_),
          rootMargin: s,
          threshold: u
        }
      );
      m.forEach((P) => P && E.observe(P)), c = () => {
        E.disconnect(), c = X;
      };
    },
    { immediate: d, flush: "post" }
  ) : X, p = () => {
    c(), l(), f.value = !1;
  };
  return Pe(p), {
    isSupported: a,
    isActive: f,
    pause() {
      c(), f.value = !1;
    },
    resume() {
      f.value = !0;
    },
    stop: p
  };
}
function Kt(e, r = {}) {
  const {
    threshold: t = 50,
    onSwipe: o,
    onSwipeEnd: s,
    onSwipeStart: u,
    passive: n = !0,
    window: d = se
  } = r, a = Le({ x: 0, y: 0 }), i = Le({ x: 0, y: 0 }), c = D(() => a.x - i.x), f = D(() => a.y - i.y), { max: l, abs: p } = Math, m = D(() => l(p(c.value), p(f.value)) >= t), _ = V(!1), E = D(() => m.value ? p(c.value) > p(f.value) ? c.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), P = (g) => [g.touches[0].clientX, g.touches[0].clientY], T = (g, b) => {
    a.x = g, a.y = b;
  }, C = (g, b) => {
    i.x = g, i.y = b;
  };
  let $;
  const z = Zt(d == null ? void 0 : d.document);
  n ? $ = z ? { passive: !0 } : { capture: !1 } : $ = z ? { passive: !1, capture: !0 } : { capture: !0 };
  const B = (g) => {
    _.value && (s == null || s(g, E.value)), _.value = !1;
  }, N = [
    ae(e, "touchstart", (g) => {
      if (g.touches.length !== 1)
        return;
      $.capture && !$.passive && g.preventDefault();
      const [b, w] = P(g);
      T(b, w), C(b, w), u == null || u(g);
    }, $),
    ae(e, "touchmove", (g) => {
      if (g.touches.length !== 1)
        return;
      const [b, w] = P(g);
      C(b, w), !_.value && m.value && (_.value = !0), _.value && (o == null || o(g));
    }, $),
    ae(e, ["touchend", "touchcancel"], B, $)
  ];
  return {
    isPassiveEventSupported: z,
    isSwiping: _,
    direction: E,
    coordsStart: a,
    coordsEnd: i,
    lengthX: c,
    lengthY: f,
    stop: () => N.forEach((g) => g())
  };
}
function Zt(e) {
  if (!e)
    return !1;
  let r = !1;
  const t = {
    get passive() {
      return r = !0, !1;
    }
  };
  return e.addEventListener("x", X, t), e.removeEventListener("x", X), r;
}
function Ke() {
  const r = J("tailwind-config").theme.screens;
  function t(o) {
    return parseInt(o.replace("px", ""));
  }
  return Yt({
    sm: t(r.sm),
    md: t(r.sm),
    lg: t(r.sm),
    xl: t(r.sm),
    "2xl": t(r["2xl"])
  });
}
const Jt = { class: "m-4 font-medium text-3xl select-none empty:hidden overflow-hidden" }, Qt = /* @__PURE__ */ I("div", { class: "border-b-2" }, null, -1), er = { class: "py-4 px-4 empty:hidden" }, tr = /* @__PURE__ */ I("div", { class: "border-b-2" }, null, -1), rr = { class: "p-3 empty:p-0 select-none empty:hidden" }, nr = /* @__PURE__ */ Z({
  __name: "DModal",
  props: /* @__PURE__ */ pe({
    closable: { type: Boolean, default: !0 },
    noBackdrop: { type: Boolean, default: !1 },
    alignVertical: { default: "center" },
    alignHorizontal: { default: "center" },
    fullscreen: { type: [Boolean, String], default: !1 },
    screen: { default: "parent" },
    form: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ pe([
    "submit",
    "close"
  ], ["update:modelValue"]),
  setup(e, { emit: r }) {
    const t = e, o = r, s = $e(e, "modelValue"), u = Ke(), n = Ge("modals"), d = D(() => [
      `justify-${t.alignVertical}`,
      `items-${t.alignHorizontal}`
    ]), a = D(() => {
      const f = [
        t.screen == "parent" ? "!size-full" : "!w-dvw !h-dvh",
        "!rounded-none !border-none"
      ];
      return [i.value ? f.join(" ") : "", {
        "scale-110": !s.value
      }];
    }), i = D(() => t.fullscreen == "auto" ? u.smallerOrEqual("md").value : t.fullscreen);
    function c() {
      t.closable && (o("close"), s.value = !1);
    }
    return (f, l) => (L(), K(Se, { to: Y(n) }, [
      (L(), K(Ve(f.form ? "form" : "div"), null, {
        default: G(() => [
          me(Ee, {
            show: s.value,
            disabled: f.noBackdrop,
            teleport: !1
          }, {
            default: G(() => [
              I("div", {
                class: te(["size-full flex", d.value]),
                onClick: We(c, ["self"])
              }, [
                I("div", {
                  class: te(["bg-white p-4 rounded-3xl sm:min-w-96 min-w-72 border-2 shadow-2xl transition-all duration-300", a.value])
                }, [
                  I("div", Jt, [
                    U(f.$slots, "title")
                  ]),
                  Qt,
                  I("div", er, [
                    U(f.$slots, "default")
                  ]),
                  tr,
                  I("div", rr, [
                    U(f.$slots, "action")
                  ])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 8, ["show", "disabled"])
        ]),
        _: 3
      }))
    ], 8, ["to"]));
  }
});
var ir = (e) => Object.prototype.toString.call(e).includes("Object"), Ze = (e) => Object.prototype.toString.call(e) === "[object String]", Je = (e) => Number.isInteger(e);
const ve = (e, r) => r(e) ? !0 : !ir(e) || Object.keys(e).length !== 2 ? !1 : !Object.entries(e).some(([t, o]) => {
  const s = !["enter", "leave"].includes(t), u = !r(o);
  return s || u;
}), or = (e) => ve(e, (r) => Je(r) && r >= 0), ar = (e) => ve(e, (r) => Ze(r) && r.trim() !== ""), lr = (e) => ve(e, (r) => Je(r) && r >= 0), Qe = 300, sr = "cubic-bezier(.25, .8, .5, 1)", ur = 0, cr = "y", dr = Qe, fr = {
  inheritAttrs: !1,
  props: {
    duration: {
      validator: or,
      default: Qe
    },
    easing: {
      validator: ar,
      default: () => sr
    },
    delay: {
      validator: lr,
      default: ur
    },
    noOpacity: {
      type: Boolean,
      default: !1
    },
    appear: {
      type: Boolean,
      default: !1
    },
    mode: {
      type: String,
      default: void 0
    },
    group: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "span"
    },
    noMove: {
      type: Boolean,
      default: !1
    },
    moveDuration: {
      type: Number,
      default: dr
    }
  },
  computed: {
    cComponent() {
      return this.group ? Et : Ne;
    },
    cAttrs() {
      const { appear: e, mode: r, tag: t, duration: o } = this;
      return this.group ? { appear: e, tag: t, duration: o, ...this.$attrs } : { appear: e, mode: r, duration: o };
    },
    cHooks() {
      return {
        beforeEnter: (...e) => {
          this.reduceTransition(...e), this.$emit("before-enter", ...e);
        },
        beforeLeave: (...e) => {
          var r;
          this.reduceTransition(...e), (r = this.initLeaving) == null || r.call(this, ...e), this.$emit("before-leave", ...e);
        },
        enter: (...e) => {
          var r;
          (r = this.onEnter) == null || r.call(this, ...e), this.$emit("enter", ...e);
        },
        leave: (...e) => {
          var r;
          (r = this.onLeave) == null || r.call(this, ...e), this.$emit("leave", ...e);
        },
        afterEnter: (...e) => {
          var r;
          this.resetTransition(...e), (r = this.resetElement) == null || r.call(this, ...e), this.$emit("after-enter", ...e);
        },
        afterLeave: (...e) => {
          var r;
          this.resetTransition(...e), (r = this.resetElement) == null || r.call(this, ...e), this.$emit("after-leave", ...e);
        }
      };
    }
  },
  methods: {
    setupTransition(e, r = "enter") {
      var t, o, s;
      const u = ((t = this.duration) == null ? void 0 : t[r]) ?? this.duration, n = ((o = this.easing) == null ? void 0 : o[r]) ?? this.easing, d = ((s = this.delay) == null ? void 0 : s[r]) ?? this.delay;
      e.style.setProperty("transition-duration", `${u}ms`, "important"), e.style.setProperty("transition-timing-function", `${n}`, "important"), e.style.setProperty("transition-delay", `${d}ms`, "important");
    },
    reduceTransition(e) {
      e.style.setProperty("transition-duration", "0ms", "important"), e.style.setProperty("transition-delay", "0ms", "important");
    },
    resetTransition(e) {
      e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-timing-function"), e.style.removeProperty("transition-delay");
    },
    initLeaving(e) {
      if (!this.group || this.noMove)
        return e;
      const r = getComputedStyle(e), { width: t, height: o } = r, { marginLeft: s, marginTop: u } = r;
      return e.style.setProperty("left", `${e.offsetLeft - parseFloat(s)}px`, "important"), e.style.setProperty("top", `${e.offsetTop - parseFloat(u)}px`, "important"), e.style.setProperty("width", `${parseFloat(t)}px`, "important"), e.style.setProperty("height", `${parseFloat(o)}px`, "important"), e.style.setProperty("position", "absolute", "important"), e;
    },
    setMoveDuration() {
      var e;
      this.group && this.$el && ((e = this.$el.style) == null || e.setProperty("--move-duration", `${this.moveDuration}ms`));
    }
  },
  watch: {
    moveDuration() {
      this.setMoveDuration();
    },
    group() {
      this.setMoveDuration();
    }
  },
  mounted() {
    this.setMoveDuration();
  }
}, pr = (e) => ve(e, (r) => Ze(r) && ["x", "y"].includes(r)), mr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [o, s] of r)
    t[o] = s;
  return t;
}, vr = {
  name: "transition-expand",
  mixins: [
    fr
  ],
  props: {
    axis: {
      validator: pr,
      default: cr
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    async onEnter(e) {
      await this.$nextTick(), await this.$nextTick(), this.getSizes(e), this.collapseElement(e, "enter"), e.offsetTop, this.setupTransition(e, "enter"), this.expandElement(e, "enter");
    },
    onLeave(e) {
      this.getSizes(e), this.expandElement(e, "leave"), e.offsetTop, this.setupTransition(e, "leave"), this.collapseElement(e, "leave");
    },
    expandElement(e, r = "enter") {
      var t;
      const o = ((t = this.axis) == null ? void 0 : t[r]) ?? this.axis, s = o === "x" ? "left" : "top", u = o === "x" ? "right" : "bottom", n = e.visual.size[o], d = e.visual.margin[o], a = e.visual.padding[o];
      this.noOpacity || e.style.setProperty("opacity", e.visual.opacity), delete e.visual, e.style.setProperty(o === "x" ? "width" : "height", `${parseFloat(n)}px`), e.style.setProperty(`padding-${s}`, `${parseFloat(a[0])}px`), e.style.setProperty(`padding-${u}`, `${parseFloat(a[1])}px`), e.style.setProperty(`margin-${s}`, `${parseFloat(d[0])}px`), e.style.setProperty(`margin-${u}`, `${parseFloat(d[1])}px`);
    },
    collapseElement(e, r = "enter") {
      var t;
      const o = ((t = this.axis) == null ? void 0 : t[r]) ?? this.axis, s = o === "x" ? "width" : "height", u = o === "x" ? "left" : "top", n = o === "x" ? "right" : "bottom";
      this.noOpacity || e.style.setProperty("opacity", 0), e.style.setProperty(s, "0px"), e.style.setProperty(`padding-${u}`, "0px"), e.style.setProperty(`padding-${n}`, "0px"), e.style.setProperty(`margin-${u}`, "0px"), e.style.setProperty(`margin-${n}`, "0px");
    },
    resetElement(e) {
      e.style.removeProperty("opacity"), e.style.removeProperty("width"), e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-right"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("padding-left"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-right"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("margin-left");
    },
    getSizes(e) {
      const r = getComputedStyle(e), { opacity: t } = r, { width: o, height: s } = r, { paddingTop: u, paddingRight: n, paddingBottom: d, paddingLeft: a } = r, { marginTop: i, marginRight: c, marginBottom: f, marginLeft: l } = r;
      e.visual = {
        opacity: t,
        size: { x: o, y: s },
        padding: { x: [a, n], y: [u, d] },
        margin: { x: [l, c], y: [i, f] }
      };
    }
  }
};
function gr(e, r, t, o, s, u) {
  return L(), K(Ve(e.cComponent), qe({ name: "expand" }, e.cAttrs, $t(e.cHooks)), {
    default: G(() => [
      U(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const et = /* @__PURE__ */ mr(vr, [["render", gr]]), yr = /* @__PURE__ */ Z({
  __name: "DTransitionSlide",
  props: {
    appear: { type: Boolean, default: !1 },
    axis: { default: "x" },
    factor: { default: 30 },
    reverseDirection: { type: Boolean, default: !0 }
  },
  setup(e) {
    Pt((d) => ({
      "6180c711": u.value,
      "7e9928bc": n.value
    }));
    const r = e, t = {
      x: [1, 0],
      y: [0, 1],
      "-x": [-1, 0],
      "-y": [0, -1]
    };
    function o(d, a) {
      return d == 1 ? a : d == -1 ? `-${a}` : "0";
    }
    const s = D(() => typeof r.factor == "string" ? r.factor : `${r.factor}px`), u = D(() => {
      const d = s.value, a = t[r.axis];
      return `${o(a[0], d)}, ${o(a[1], d)}`;
    }), n = D(() => {
      const d = s.value, a = t[r.axis], i = r.reverseDirection ? -1 : 1;
      return `${o(a[0] * i, d)}, ${o(a[1] * i, d)}`;
    });
    return (d, a) => (L(), K(Ne, {
      name: "d-slide",
      appear: d.appear
    }, {
      default: G(() => [
        U(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["appear"]));
  }
}), ie = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [o, s] of r)
    t[o] = s;
  return t;
}, tt = /* @__PURE__ */ ie(yr, [["__scopeId", "data-v-9fffba16"]]), rt = (e) => (Dt("data-v-477e04e9"), e = e(), Tt(), e), hr = {
  key: 0,
  class: "text-gray-500"
}, br = { key: 1 }, xr = /* @__PURE__ */ rt(() => /* @__PURE__ */ I("svg", {
  class: "icon ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [
  /* @__PURE__ */ I("path", { d: "M480-360 280-560h400L480-360Z" })
], -1)), _r = {
  key: 0,
  class: "d-select-options"
}, wr = /* @__PURE__ */ rt(() => /* @__PURE__ */ I("div", { class: "w-full flex justify-center" }, [
  /* @__PURE__ */ I("span", { class: "w-2/5 border-2" })
], -1)), Or = {
  key: 2,
  class: "hidden"
}, Ie = 0.65, Ar = /* @__PURE__ */ Z({
  __name: "DSelect",
  props: /* @__PURE__ */ pe({
    size: { default: "medium" },
    multiselect: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    modal: { type: [Boolean, String], default: "auto" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const r = $e(e, "modelValue"), t = e, o = V(!1), s = V(), u = V(), n = V(), d = Ke(), { isSwiping: a, lengthX: i, lengthY: c } = Kt(n), f = V(0);
    Xt(
      n,
      ([{ intersectionRatio: $ }]) => {
        f.value = $;
      },
      {
        threshold: [Ie]
      }
    ), ne("select-open", o), ne("select-multiselect", t.multiselect), ne("select-render", Ct(u)), ne("select-size", t.size), ne("select-current", r), ne("select-update", T), Ht(s, () => {
      t.modal == !0 || t.modal == "auto" && p.value || (o.value = !1);
    });
    const l = D(() => [
      t.size,
      {
        open: o.value
      }
    ]), p = D(() => t.modal == !0 ? !0 : t.modal == !1 ? !1 : d.smallerOrEqual("md").value), m = D(() => {
      if (!r.value || Array.isArray(r.value) && r.value.length < 1)
        return !0;
    }), _ = D(() => ({
      "scale-125 opacity-0 translate-y-[200%]": !o.value
    })), E = D(() => ({
      transform: `translate(${P.value[0]}px, ${P.value[1]}px)`,
      transition: `${a.value ? "none" : "all"} 0.2s`
    })), P = D(() => a.value && o.value ? [0, -c.value] : [0, 0]);
    oe([f, a], () => {
      f.value < Ie && !a.value && (o.value = !1);
    });
    function T($) {
      if (!t.multiselect) {
        r.value = $;
        return;
      }
      if (!r.value) {
        r.value = [$];
        return;
      }
      if (Array.isArray(r.value)) {
        if (r.value.includes($)) {
          r.value = r.value.toSpliced(r.value.indexOf($), 1);
          return;
        }
        r.value.push($), r.value = [...r.value];
        return;
      }
      r.value = [r.value, $];
    }
    function C() {
      o.value = !o.value;
    }
    return ($, z) => (L(), R("div", {
      class: "d-select-root",
      ref_key: "rootElementRef",
      ref: s
    }, [
      me(Y(Ce), {
        class: te(["d-select", l.value]),
        onClick: C
      }, {
        default: G(() => [
          (L(), R("span", {
            key: JSON.stringify(r.value),
            class: "d-select-display",
            ref_key: "displayElementRef",
            ref: u
          })),
          m.value ? (L(), R("span", hr, Ae($.placeholder), 1)) : Q("", !0),
          Array.isArray(r.value) && r.value.length > 1 ? (L(), R("span", br, "(+" + Ae(r.value.length - 1) + ")", 1)) : Q("", !0),
          xr
        ]),
        _: 1
      }, 8, ["class"]),
      p.value ? (L(), K(Ee, {
        key: 1,
        show: o.value
      }, {
        default: G(() => [
          me(tt, {
            axis: "y",
            "reverse-direction": !1
          }, {
            default: G(() => [
              o.value ? (L(), R("div", {
                key: 0,
                onClick: z[0] || (z[0] = We((B) => o.value = !1, ["self"])),
                class: "size-full overflow-hidden flex justify-center transition-all"
              }, [
                I("div", {
                  class: te(["mt-auto mb-5 mx-5 p-4 rounded-xl w-full bg-white border-2 flex flex-col gap-2", _.value]),
                  ref_key: "modalElementRef",
                  ref: n,
                  style: zt(E.value)
                }, [
                  wr,
                  U($.$slots, "default", {}, void 0, !0)
                ], 6)
              ])) : Q("", !0)
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["show"])) : (L(), K(Y(et), {
        key: 0,
        appear: ""
      }, {
        default: G(() => [
          o.value ? (L(), R("div", _r, [
            U($.$slots, "default", {}, void 0, !0)
          ])) : Q("", !0)
        ]),
        _: 3
      })),
      o.value ? Q("", !0) : (L(), R("div", Or, [
        U($.$slots, "default", {}, void 0, !0)
      ]))
    ], 512));
  }
}), Sr = /* @__PURE__ */ ie(Ar, [["__scopeId", "data-v-477e04e9"]]);
let fe;
const kr = new Uint8Array(16);
function $r() {
  if (!fe && (fe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !fe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return fe(kr);
}
const F = [];
for (let e = 0; e < 256; ++e)
  F.push((e + 256).toString(16).slice(1));
function Er(e, r = 0) {
  return F[e[r + 0]] + F[e[r + 1]] + F[e[r + 2]] + F[e[r + 3]] + "-" + F[e[r + 4]] + F[e[r + 5]] + "-" + F[e[r + 6]] + F[e[r + 7]] + "-" + F[e[r + 8]] + F[e[r + 9]] + "-" + F[e[r + 10]] + F[e[r + 11]] + F[e[r + 12]] + F[e[r + 13]] + F[e[r + 14]] + F[e[r + 15]];
}
const Pr = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ue = {
  randomUUID: Pr
};
function Cr(e, r, t) {
  if (Ue.randomUUID && !r && !e)
    return Ue.randomUUID();
  e = e || {};
  const o = e.random || (e.rng || $r)();
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, Er(o);
}
const zr = { key: 0 }, Dr = /* @__PURE__ */ Z({
  __name: "DSelectOption",
  props: {
    value: { default: Cr() },
    default: { type: Boolean, default: !1 },
    action: { type: Boolean, default: !1 }
  },
  emits: [
    "action"
  ],
  setup(e, { emit: r }) {
    const t = e, o = r;
    ke(() => {
      t.default && i && i(t.value);
    });
    const s = J("select-open"), u = J("select-multiselect"), n = J("select-render"), d = J("select-size"), a = J("select-current"), i = J("select-update");
    function c() {
      if (i) {
        if (t.action) {
          o("action"), s && (s.value = !1);
          return;
        }
        i(t.value), s != null && s.value && !u && (s.value = !1);
      }
    }
    const f = D(() => [
      d,
      {
        selected: l.value
      }
    ]), l = D(() => a != null && a.value ? Array.isArray(a.value) ? a.value.includes(t.value) : a.value == t.value : !1), p = D(() => a != null && a.value ? u && Array.isArray(a.value) ? a.value.indexOf(t.value) == 0 : a.value == t.value : !1);
    return (m, _) => (L(), R("div", null, [
      I("button", {
        class: te(["d-select-option", f.value]),
        onClick: c
      }, [
        U(m.$slots, "default", {}, void 0, !0)
      ], 2),
      Y(n) && p.value ? (L(), K(Se, {
        key: 0,
        to: Y(n)
      }, [
        l.value ? (L(), R("span", zr, [
          U(m.$slots, "default", {}, void 0, !0)
        ])) : Q("", !0)
      ], 8, ["to"])) : Q("", !0)
    ]));
  }
}), Tr = /* @__PURE__ */ ie(Dr, [["__scopeId", "data-v-2cf95216"]]), Mr = { class: "d-textfield-container group" }, jr = { class: "d-textfield-input" }, Lr = ["placeholder"], Br = { class: "d-textfield-actions" }, Fr = {
  key: 0,
  class: "d-textfield-error overflow-hidden"
}, Ir = /* @__PURE__ */ Z({
  inheritAttrs: !0,
  __name: "DTextField",
  props: /* @__PURE__ */ pe({
    size: { default: "medium" },
    placeholder: { default: "" },
    validity: { type: [null, String, Boolean], default: null },
    invalidMessage: { default: "Invalid" },
    rules: { type: [null, Function, Array], default: null }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e, { expose: r }) {
    var f;
    const t = e, o = $e(e, "modelValue");
    ke(() => {
      i(), c();
    });
    const s = V();
    r({
      inputRef: s
    });
    const u = V((f = s.value) == null ? void 0 : f.validity.valid), n = V(t.validity ?? t.invalidMessage), d = D(() => [
      t.size
    ]);
    ne("textfield-size", Mt(t, "size"));
    function a(l) {
      var p, m;
      l ? (n.value = l, (m = s.value) == null || m.setCustomValidity(l)) : (p = s.value) == null || p.setCustomValidity(""), u.value = l == null || l == "";
    }
    function i() {
      typeof t.validity == "boolean" ? a(t.validity ? "" : "Invalid") : typeof t.validity == "string" ? a(t.validity) : a(null);
    }
    function c() {
      var m;
      if (!t.rules)
        return;
      const l = (m = s.value) == null ? void 0 : m.value;
      let p = null;
      if (Array.isArray(t.rules)) {
        for (const _ of t.rules)
          if (p = _(l), p != null && p != !0)
            break;
      } else if (t.rules) {
        const _ = t.rules;
        p = _(l);
      }
      p == null ? a(null) : a(typeof p == "string" ? p : p ? null : t.invalidMessage);
    }
    return oe(() => t.validity, i), oe([() => t.rules, () => t.invalidMessage, o], c), oe(o, () => {
      var l, p;
      u.value = ((p = (l = s.value) == null ? void 0 : l.validity) == null ? void 0 : p.valid) ?? u.value;
    }), (l, p) => (L(), R("div", Mr, [
      I("div", jr, [
        jt(I("input", qe(l.$attrs, {
          ref_key: "inputRef",
          ref: s,
          "onUpdate:modelValue": p[0] || (p[0] = (m) => o.value = m),
          class: ["d-textfield", d.value],
          placeholder: l.placeholder,
          type: "text"
        }), null, 16, Lr), [
          [Lt, o.value]
        ]),
        I("div", Br, [
          U(l.$slots, "default", {}, void 0, !0)
        ])
      ]),
      me(Y(et), null, {
        default: G(() => [
          u.value ? Q("", !0) : (L(), R("div", Fr, Ae(n.value), 1))
        ]),
        _: 1
      })
    ]));
  }
}), Ur = /* @__PURE__ */ ie(Ir, [["__scopeId", "data-v-ded48949"]]), Rr = /* @__PURE__ */ Z({
  __name: "DTextFieldAction",
  setup(e) {
    const r = J("textfield-size");
    return (t, o) => (L(), K(Y(Ce), {
      class: "d-textfield-actions",
      size: Y(r)
    }, {
      default: G(() => [
        U(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["size"]));
  }
}), Vr = /* @__PURE__ */ ie(Rr, [["__scopeId", "data-v-ba5dfa81"]]), Wr = ["type"], qr = /* @__PURE__ */ Z({
  __name: "DButton",
  props: {
    primary: { type: Boolean, default: !1 },
    size: { default: "medium" },
    submit: { type: Boolean, default: !1 }
  },
  setup(e) {
    const r = e, t = D(() => [
      r.size,
      {
        primary: r.primary
      }
    ]);
    return (o, s) => (L(), R("button", {
      class: te(["d-button", t.value]),
      type: o.submit ? "submit" : "button"
    }, [
      U(o.$slots, "default", {}, void 0, !0)
    ], 10, Wr));
  }
}), Ce = /* @__PURE__ */ ie(qr, [["__scopeId", "data-v-ae4d77fa"]]), Nr = { class: "d-effect" }, Hr = /* @__PURE__ */ Z({
  inheritAttrs: !1,
  __name: "DEffect",
  setup(e) {
    return (r, t) => (L(), R("span", Nr, [
      U(r.$slots, "default", Bt(Ft(r.$attrs)), void 0, !0)
    ]));
  }
}), Gr = /* @__PURE__ */ ie(Hr, [["__scopeId", "data-v-4b1c3ba5"]]), Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DButton: Ce,
  DDimmed: Ee,
  DEffect: Gr,
  DModal: nr,
  DSelect: Sr,
  DSelectOption: Tr,
  DTextField: Ur,
  DTextFieldAction: Vr,
  DTransitionSlide: tt
}, Symbol.toStringTag, { value: "Module" }));
function Yr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nt = {}, it = {}, ze = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t) {
    if (t = `${t}`, t === "0")
      return "0";
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(t))
      return t.replace(/^[+-]?/, (s) => s === "-" ? "" : "-");
    let o = [
      "var",
      "calc",
      "min",
      "max",
      "clamp"
    ];
    for (const s of o)
      if (t.includes(`${s}(`))
        return `calc(${t} * -1)`;
  }
})(ze);
var ot = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const r = [
    "preflight",
    "container",
    "accessibility",
    "pointerEvents",
    "visibility",
    "position",
    "inset",
    "isolation",
    "zIndex",
    "order",
    "gridColumn",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRow",
    "gridRowStart",
    "gridRowEnd",
    "float",
    "clear",
    "margin",
    "boxSizing",
    "lineClamp",
    "display",
    "aspectRatio",
    "size",
    "height",
    "maxHeight",
    "minHeight",
    "width",
    "minWidth",
    "maxWidth",
    "flex",
    "flexShrink",
    "flexGrow",
    "flexBasis",
    "tableLayout",
    "captionSide",
    "borderCollapse",
    "borderSpacing",
    "transformOrigin",
    "translate",
    "rotate",
    "skew",
    "scale",
    "transform",
    "animation",
    "cursor",
    "touchAction",
    "userSelect",
    "resize",
    "scrollSnapType",
    "scrollSnapAlign",
    "scrollSnapStop",
    "scrollMargin",
    "scrollPadding",
    "listStylePosition",
    "listStyleType",
    "listStyleImage",
    "appearance",
    "columns",
    "breakBefore",
    "breakInside",
    "breakAfter",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridTemplateColumns",
    "gridTemplateRows",
    "flexDirection",
    "flexWrap",
    "placeContent",
    "placeItems",
    "alignContent",
    "alignItems",
    "justifyContent",
    "justifyItems",
    "gap",
    "space",
    "divideWidth",
    "divideStyle",
    "divideColor",
    "divideOpacity",
    "placeSelf",
    "alignSelf",
    "justifySelf",
    "overflow",
    "overscrollBehavior",
    "scrollBehavior",
    "textOverflow",
    "hyphens",
    "whitespace",
    "textWrap",
    "wordBreak",
    "borderRadius",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderOpacity",
    "backgroundColor",
    "backgroundOpacity",
    "backgroundImage",
    "gradientColorStops",
    "boxDecorationBreak",
    "backgroundSize",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundPosition",
    "backgroundRepeat",
    "backgroundOrigin",
    "fill",
    "stroke",
    "strokeWidth",
    "objectFit",
    "objectPosition",
    "padding",
    "textAlign",
    "textIndent",
    "verticalAlign",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "textTransform",
    "fontStyle",
    "fontVariantNumeric",
    "lineHeight",
    "letterSpacing",
    "textColor",
    "textOpacity",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textDecorationThickness",
    "textUnderlineOffset",
    "fontSmoothing",
    "placeholderColor",
    "placeholderOpacity",
    "caretColor",
    "accentColor",
    "opacity",
    "backgroundBlendMode",
    "mixBlendMode",
    "boxShadow",
    "boxShadowColor",
    "outlineStyle",
    "outlineWidth",
    "outlineOffset",
    "outlineColor",
    "ringWidth",
    "ringColor",
    "ringOpacity",
    "ringOffsetWidth",
    "ringOffsetColor",
    "blur",
    "brightness",
    "contrast",
    "dropShadow",
    "grayscale",
    "hueRotate",
    "invert",
    "saturate",
    "sepia",
    "filter",
    "backdropBlur",
    "backdropBrightness",
    "backdropContrast",
    "backdropGrayscale",
    "backdropHueRotate",
    "backdropInvert",
    "backdropOpacity",
    "backdropSaturate",
    "backdropSepia",
    "backdropFilter",
    "transitionProperty",
    "transitionDelay",
    "transitionDuration",
    "transitionTimingFunction",
    "willChange",
    "contain",
    "content",
    "forcedColorAdjust"
  ];
})(ot);
var at = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t, o) {
    return t === void 0 ? o : Array.isArray(t) ? t : [
      ...new Set(o.filter((u) => t !== !1 && t[u] !== !1).concat(Object.keys(t).filter((u) => t[u] !== !1)))
    ];
  }
})(at);
var lt = {}, ge = {}, De = { exports: {} }, j = String, st = function() {
  return { isColorSupported: !1, reset: j, bold: j, dim: j, italic: j, underline: j, inverse: j, hidden: j, strikethrough: j, black: j, red: j, green: j, yellow: j, blue: j, magenta: j, cyan: j, white: j, gray: j, bgBlack: j, bgRed: j, bgGreen: j, bgYellow: j, bgBlue: j, bgMagenta: j, bgCyan: j, bgWhite: j };
};
De.exports = st();
De.exports.createColors = st;
var ut = De.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(a, i) {
    for (var c in i)
      Object.defineProperty(a, c, {
        enumerable: !0,
        get: i[c]
      });
  }
  r(e, {
    dim: function() {
      return n;
    },
    default: function() {
      return d;
    }
  });
  const t = /* @__PURE__ */ o(ut);
  function o(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  let s = /* @__PURE__ */ new Set();
  function u(a, i, c) {
    typeof process < "u" && process.env.JEST_WORKER_ID || c && s.has(c) || (c && s.add(c), console.warn(""), i.forEach((f) => console.warn(a, "-", f)));
  }
  function n(a) {
    return t.default.dim(a);
  }
  const d = {
    info(a, i) {
      u(t.default.bold(t.default.cyan("info")), ...Array.isArray(a) ? [
        a
      ] : [
        i,
        a
      ]);
    },
    warn(a, i) {
      u(t.default.bold(t.default.yellow("warn")), ...Array.isArray(a) ? [
        a
      ] : [
        i,
        a
      ]);
    },
    risk(a, i) {
      u(t.default.bold(t.default.magenta("risk")), ...Array.isArray(a) ? [
        a
      ] : [
        i,
        a
      ]);
    }
  };
})(ge);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return s;
    }
  });
  const r = /* @__PURE__ */ t(ge);
  function t(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  function o({ version: u, from: n, to: d }) {
    r.default.warn(`${n}-color-renamed`, [
      `As of Tailwind CSS ${u}, \`${n}\` has been renamed to \`${d}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const s = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    },
    get lightBlue() {
      return o({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return o({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return o({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return o({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return o({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(lt);
var ct = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "defaults", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t, ...o) {
    for (let n of o) {
      for (let d in n) {
        var s;
        !(t == null || (s = t.hasOwnProperty) === null || s === void 0) && s.call(t, d) || (t[d] = n[d]);
      }
      for (let d of Object.getOwnPropertySymbols(n)) {
        var u;
        !(t == null || (u = t.hasOwnProperty) === null || u === void 0) && u.call(t, d) || (t[d] = n[d]);
      }
    }
    return t;
  }
})(ct);
var dt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "toPath", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t) {
    if (Array.isArray(t))
      return t;
    let o = t.split("[").length - 1, s = t.split("]").length - 1;
    if (o !== s)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${t}`);
    return t.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
})(dt);
var ft = {}, ye = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(f, l) {
    for (var p in l)
      Object.defineProperty(f, p, {
        enumerable: !0,
        get: l[p]
      });
  }
  r(e, {
    flagEnabled: function() {
      return d;
    },
    issueFlagNotices: function() {
      return i;
    },
    default: function() {
      return c;
    }
  });
  const t = /* @__PURE__ */ s(ut), o = /* @__PURE__ */ s(ge);
  function s(f) {
    return f && f.__esModule ? f : {
      default: f
    };
  }
  let u = {
    optimizeUniversalDefaults: !1,
    generalizedModifiers: !0,
    disableColorOpacityUtilitiesByDefault: !1,
    relativeContentPathsByDefault: !1
  }, n = {
    future: [
      "hoverOnlyWhenSupported",
      "respectDefaultRingColorOpacity",
      "disableColorOpacityUtilitiesByDefault",
      "relativeContentPathsByDefault"
    ],
    experimental: [
      "optimizeUniversalDefaults",
      "generalizedModifiers"
    ]
  };
  function d(f, l) {
    if (n.future.includes(l)) {
      var p, m, _;
      return f.future === "all" || ((_ = (m = f == null || (p = f.future) === null || p === void 0 ? void 0 : p[l]) !== null && m !== void 0 ? m : u[l]) !== null && _ !== void 0 ? _ : !1);
    }
    if (n.experimental.includes(l)) {
      var E, P, T;
      return f.experimental === "all" || ((T = (P = f == null || (E = f.experimental) === null || E === void 0 ? void 0 : E[l]) !== null && P !== void 0 ? P : u[l]) !== null && T !== void 0 ? T : !1);
    }
    return !1;
  }
  function a(f) {
    if (f.experimental === "all")
      return n.experimental;
    var l;
    return Object.keys((l = f == null ? void 0 : f.experimental) !== null && l !== void 0 ? l : {}).filter((p) => n.experimental.includes(p) && f.experimental[p]);
  }
  function i(f) {
    if (process.env.JEST_WORKER_ID === void 0 && a(f).length > 0) {
      let l = a(f).map((p) => t.default.yellow(p)).join(", ");
      o.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${l}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const c = n;
})(ye);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return u;
    }
  });
  const r = ye, t = /* @__PURE__ */ s(ge);
  function o(n) {
    if (typeof WeakMap != "function")
      return null;
    var d = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
    return (o = function(i) {
      return i ? a : d;
    })(n);
  }
  function s(n, d) {
    if (n && n.__esModule)
      return n;
    if (n === null || typeof n != "object" && typeof n != "function")
      return {
        default: n
      };
    var a = o(d);
    if (a && a.has(n))
      return a.get(n);
    var i = {}, c = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var f in n)
      if (f !== "default" && Object.prototype.hasOwnProperty.call(n, f)) {
        var l = c ? Object.getOwnPropertyDescriptor(n, f) : null;
        l && (l.get || l.set) ? Object.defineProperty(i, f, l) : i[f] = n[f];
      }
    return i.default = n, a && a.set(n, i), i;
  }
  function u(n) {
    if ((() => {
      if (n.purge || !n.content || !Array.isArray(n.content) && !(typeof n.content == "object" && n.content !== null))
        return !1;
      if (Array.isArray(n.content))
        return n.content.every((i) => typeof i == "string" ? !0 : !(typeof (i == null ? void 0 : i.raw) != "string" || i != null && i.extension && typeof (i == null ? void 0 : i.extension) != "string"));
      if (typeof n.content == "object" && n.content !== null) {
        if (Object.keys(n.content).some((i) => ![
          "files",
          "relative",
          "extract",
          "transform"
        ].includes(i)))
          return !1;
        if (Array.isArray(n.content.files)) {
          if (!n.content.files.every((i) => typeof i == "string" ? !0 : !(typeof (i == null ? void 0 : i.raw) != "string" || i != null && i.extension && typeof (i == null ? void 0 : i.extension) != "string")))
            return !1;
          if (typeof n.content.extract == "object") {
            for (let i of Object.values(n.content.extract))
              if (typeof i != "function")
                return !1;
          } else if (!(n.content.extract === void 0 || typeof n.content.extract == "function"))
            return !1;
          if (typeof n.content.transform == "object") {
            for (let i of Object.values(n.content.transform))
              if (typeof i != "function")
                return !1;
          } else if (!(n.content.transform === void 0 || typeof n.content.transform == "function"))
            return !1;
          if (typeof n.content.relative != "boolean" && typeof n.content.relative < "u")
            return !1;
        }
        return !0;
      }
      return !1;
    })() || t.default.warn("purge-deprecation", [
      "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
      "Update your configuration file to eliminate this warning.",
      "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"
    ]), n.safelist = (() => {
      var i;
      let { content: c, purge: f, safelist: l } = n;
      return Array.isArray(l) ? l : Array.isArray(c == null ? void 0 : c.safelist) ? c.safelist : Array.isArray(f == null ? void 0 : f.safelist) ? f.safelist : Array.isArray(f == null || (i = f.options) === null || i === void 0 ? void 0 : i.safelist) ? f.options.safelist : [];
    })(), n.blocklist = (() => {
      let { blocklist: i } = n;
      if (Array.isArray(i)) {
        if (i.every((c) => typeof c == "string"))
          return i;
        t.default.warn("blocklist-invalid", [
          "The `blocklist` option must be an array of strings.",
          "https://tailwindcss.com/docs/content-configuration#discarding-classes"
        ]);
      }
      return [];
    })(), typeof n.prefix == "function")
      t.default.warn("prefix-function", [
        "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
        "Update `prefix` in your configuration to be a string to eliminate this warning.",
        "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"
      ]), n.prefix = "";
    else {
      var a;
      n.prefix = (a = n.prefix) !== null && a !== void 0 ? a : "";
    }
    n.content = {
      relative: (() => {
        let { content: i } = n;
        return i != null && i.relative ? i.relative : (0, r.flagEnabled)(n, "relativeContentPathsByDefault");
      })(),
      files: (() => {
        let { content: i, purge: c } = n;
        return Array.isArray(c) ? c : Array.isArray(c == null ? void 0 : c.content) ? c.content : Array.isArray(i) ? i : Array.isArray(i == null ? void 0 : i.content) ? i.content : Array.isArray(i == null ? void 0 : i.files) ? i.files : [];
      })(),
      extract: (() => {
        let i = (() => {
          var l, p, m, _, E, P, T, C, $, z;
          return !((l = n.purge) === null || l === void 0) && l.extract ? n.purge.extract : !((p = n.content) === null || p === void 0) && p.extract ? n.content.extract : !((m = n.purge) === null || m === void 0 || (_ = m.extract) === null || _ === void 0) && _.DEFAULT ? n.purge.extract.DEFAULT : !((E = n.content) === null || E === void 0 || (P = E.extract) === null || P === void 0) && P.DEFAULT ? n.content.extract.DEFAULT : !((T = n.purge) === null || T === void 0 || (C = T.options) === null || C === void 0) && C.extractors ? n.purge.options.extractors : !(($ = n.content) === null || $ === void 0 || (z = $.options) === null || z === void 0) && z.extractors ? n.content.options.extractors : {};
        })(), c = {}, f = (() => {
          var l, p, m, _;
          if (!((l = n.purge) === null || l === void 0 || (p = l.options) === null || p === void 0) && p.defaultExtractor)
            return n.purge.options.defaultExtractor;
          if (!((m = n.content) === null || m === void 0 || (_ = m.options) === null || _ === void 0) && _.defaultExtractor)
            return n.content.options.defaultExtractor;
        })();
        if (f !== void 0 && (c.DEFAULT = f), typeof i == "function")
          c.DEFAULT = i;
        else if (Array.isArray(i))
          for (let { extensions: l, extractor: p } of i ?? [])
            for (let m of l)
              c[m] = p;
        else
          typeof i == "object" && i !== null && Object.assign(c, i);
        return c;
      })(),
      transform: (() => {
        let i = (() => {
          var f, l, p, m, _, E;
          return !((f = n.purge) === null || f === void 0) && f.transform ? n.purge.transform : !((l = n.content) === null || l === void 0) && l.transform ? n.content.transform : !((p = n.purge) === null || p === void 0 || (m = p.transform) === null || m === void 0) && m.DEFAULT ? n.purge.transform.DEFAULT : !((_ = n.content) === null || _ === void 0 || (E = _.transform) === null || E === void 0) && E.DEFAULT ? n.content.transform.DEFAULT : {};
        })(), c = {};
        return typeof i == "function" && (c.DEFAULT = i), typeof i == "object" && i !== null && Object.assign(c, i), c;
      })()
    };
    for (let i of n.content.files)
      if (typeof i == "string" && /{([^,]*?)}/g.test(i)) {
        t.default.warn("invalid-glob-braces", [
          `The glob pattern ${(0, t.dim)(i)} in your Tailwind CSS configuration is invalid.`,
          `Update it to ${(0, t.dim)(i.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
        ]);
        break;
      }
    return n;
  }
})(ft);
var pt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t) {
    if (Object.prototype.toString.call(t) !== "[object Object]")
      return !1;
    const o = Object.getPrototypeOf(t);
    return o === null || Object.getPrototypeOf(o) === null;
  }
})(pt);
var mt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "cloneDeep", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t) {
    return Array.isArray(t) ? t.map((o) => r(o)) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([o, s]) => [
      o,
      r(s)
    ])) : t;
  }
})(mt);
var vt = {}, gt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t) {
    return t.replace(/\\,/g, "\\2c ");
  }
})(gt);
var Te = {}, Me = {}, yt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  const r = {
    aliceblue: [
      240,
      248,
      255
    ],
    antiquewhite: [
      250,
      235,
      215
    ],
    aqua: [
      0,
      255,
      255
    ],
    aquamarine: [
      127,
      255,
      212
    ],
    azure: [
      240,
      255,
      255
    ],
    beige: [
      245,
      245,
      220
    ],
    bisque: [
      255,
      228,
      196
    ],
    black: [
      0,
      0,
      0
    ],
    blanchedalmond: [
      255,
      235,
      205
    ],
    blue: [
      0,
      0,
      255
    ],
    blueviolet: [
      138,
      43,
      226
    ],
    brown: [
      165,
      42,
      42
    ],
    burlywood: [
      222,
      184,
      135
    ],
    cadetblue: [
      95,
      158,
      160
    ],
    chartreuse: [
      127,
      255,
      0
    ],
    chocolate: [
      210,
      105,
      30
    ],
    coral: [
      255,
      127,
      80
    ],
    cornflowerblue: [
      100,
      149,
      237
    ],
    cornsilk: [
      255,
      248,
      220
    ],
    crimson: [
      220,
      20,
      60
    ],
    cyan: [
      0,
      255,
      255
    ],
    darkblue: [
      0,
      0,
      139
    ],
    darkcyan: [
      0,
      139,
      139
    ],
    darkgoldenrod: [
      184,
      134,
      11
    ],
    darkgray: [
      169,
      169,
      169
    ],
    darkgreen: [
      0,
      100,
      0
    ],
    darkgrey: [
      169,
      169,
      169
    ],
    darkkhaki: [
      189,
      183,
      107
    ],
    darkmagenta: [
      139,
      0,
      139
    ],
    darkolivegreen: [
      85,
      107,
      47
    ],
    darkorange: [
      255,
      140,
      0
    ],
    darkorchid: [
      153,
      50,
      204
    ],
    darkred: [
      139,
      0,
      0
    ],
    darksalmon: [
      233,
      150,
      122
    ],
    darkseagreen: [
      143,
      188,
      143
    ],
    darkslateblue: [
      72,
      61,
      139
    ],
    darkslategray: [
      47,
      79,
      79
    ],
    darkslategrey: [
      47,
      79,
      79
    ],
    darkturquoise: [
      0,
      206,
      209
    ],
    darkviolet: [
      148,
      0,
      211
    ],
    deeppink: [
      255,
      20,
      147
    ],
    deepskyblue: [
      0,
      191,
      255
    ],
    dimgray: [
      105,
      105,
      105
    ],
    dimgrey: [
      105,
      105,
      105
    ],
    dodgerblue: [
      30,
      144,
      255
    ],
    firebrick: [
      178,
      34,
      34
    ],
    floralwhite: [
      255,
      250,
      240
    ],
    forestgreen: [
      34,
      139,
      34
    ],
    fuchsia: [
      255,
      0,
      255
    ],
    gainsboro: [
      220,
      220,
      220
    ],
    ghostwhite: [
      248,
      248,
      255
    ],
    gold: [
      255,
      215,
      0
    ],
    goldenrod: [
      218,
      165,
      32
    ],
    gray: [
      128,
      128,
      128
    ],
    green: [
      0,
      128,
      0
    ],
    greenyellow: [
      173,
      255,
      47
    ],
    grey: [
      128,
      128,
      128
    ],
    honeydew: [
      240,
      255,
      240
    ],
    hotpink: [
      255,
      105,
      180
    ],
    indianred: [
      205,
      92,
      92
    ],
    indigo: [
      75,
      0,
      130
    ],
    ivory: [
      255,
      255,
      240
    ],
    khaki: [
      240,
      230,
      140
    ],
    lavender: [
      230,
      230,
      250
    ],
    lavenderblush: [
      255,
      240,
      245
    ],
    lawngreen: [
      124,
      252,
      0
    ],
    lemonchiffon: [
      255,
      250,
      205
    ],
    lightblue: [
      173,
      216,
      230
    ],
    lightcoral: [
      240,
      128,
      128
    ],
    lightcyan: [
      224,
      255,
      255
    ],
    lightgoldenrodyellow: [
      250,
      250,
      210
    ],
    lightgray: [
      211,
      211,
      211
    ],
    lightgreen: [
      144,
      238,
      144
    ],
    lightgrey: [
      211,
      211,
      211
    ],
    lightpink: [
      255,
      182,
      193
    ],
    lightsalmon: [
      255,
      160,
      122
    ],
    lightseagreen: [
      32,
      178,
      170
    ],
    lightskyblue: [
      135,
      206,
      250
    ],
    lightslategray: [
      119,
      136,
      153
    ],
    lightslategrey: [
      119,
      136,
      153
    ],
    lightsteelblue: [
      176,
      196,
      222
    ],
    lightyellow: [
      255,
      255,
      224
    ],
    lime: [
      0,
      255,
      0
    ],
    limegreen: [
      50,
      205,
      50
    ],
    linen: [
      250,
      240,
      230
    ],
    magenta: [
      255,
      0,
      255
    ],
    maroon: [
      128,
      0,
      0
    ],
    mediumaquamarine: [
      102,
      205,
      170
    ],
    mediumblue: [
      0,
      0,
      205
    ],
    mediumorchid: [
      186,
      85,
      211
    ],
    mediumpurple: [
      147,
      112,
      219
    ],
    mediumseagreen: [
      60,
      179,
      113
    ],
    mediumslateblue: [
      123,
      104,
      238
    ],
    mediumspringgreen: [
      0,
      250,
      154
    ],
    mediumturquoise: [
      72,
      209,
      204
    ],
    mediumvioletred: [
      199,
      21,
      133
    ],
    midnightblue: [
      25,
      25,
      112
    ],
    mintcream: [
      245,
      255,
      250
    ],
    mistyrose: [
      255,
      228,
      225
    ],
    moccasin: [
      255,
      228,
      181
    ],
    navajowhite: [
      255,
      222,
      173
    ],
    navy: [
      0,
      0,
      128
    ],
    oldlace: [
      253,
      245,
      230
    ],
    olive: [
      128,
      128,
      0
    ],
    olivedrab: [
      107,
      142,
      35
    ],
    orange: [
      255,
      165,
      0
    ],
    orangered: [
      255,
      69,
      0
    ],
    orchid: [
      218,
      112,
      214
    ],
    palegoldenrod: [
      238,
      232,
      170
    ],
    palegreen: [
      152,
      251,
      152
    ],
    paleturquoise: [
      175,
      238,
      238
    ],
    palevioletred: [
      219,
      112,
      147
    ],
    papayawhip: [
      255,
      239,
      213
    ],
    peachpuff: [
      255,
      218,
      185
    ],
    peru: [
      205,
      133,
      63
    ],
    pink: [
      255,
      192,
      203
    ],
    plum: [
      221,
      160,
      221
    ],
    powderblue: [
      176,
      224,
      230
    ],
    purple: [
      128,
      0,
      128
    ],
    rebeccapurple: [
      102,
      51,
      153
    ],
    red: [
      255,
      0,
      0
    ],
    rosybrown: [
      188,
      143,
      143
    ],
    royalblue: [
      65,
      105,
      225
    ],
    saddlebrown: [
      139,
      69,
      19
    ],
    salmon: [
      250,
      128,
      114
    ],
    sandybrown: [
      244,
      164,
      96
    ],
    seagreen: [
      46,
      139,
      87
    ],
    seashell: [
      255,
      245,
      238
    ],
    sienna: [
      160,
      82,
      45
    ],
    silver: [
      192,
      192,
      192
    ],
    skyblue: [
      135,
      206,
      235
    ],
    slateblue: [
      106,
      90,
      205
    ],
    slategray: [
      112,
      128,
      144
    ],
    slategrey: [
      112,
      128,
      144
    ],
    snow: [
      255,
      250,
      250
    ],
    springgreen: [
      0,
      255,
      127
    ],
    steelblue: [
      70,
      130,
      180
    ],
    tan: [
      210,
      180,
      140
    ],
    teal: [
      0,
      128,
      128
    ],
    thistle: [
      216,
      191,
      216
    ],
    tomato: [
      255,
      99,
      71
    ],
    turquoise: [
      64,
      224,
      208
    ],
    violet: [
      238,
      130,
      238
    ],
    wheat: [
      245,
      222,
      179
    ],
    white: [
      255,
      255,
      255
    ],
    whitesmoke: [
      245,
      245,
      245
    ],
    yellow: [
      255,
      255,
      0
    ],
    yellowgreen: [
      154,
      205,
      50
    ]
  };
})(yt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(m, _) {
    for (var E in _)
      Object.defineProperty(m, E, {
        enumerable: !0,
        get: _[E]
      });
  }
  r(e, {
    parseColor: function() {
      return l;
    },
    formatColor: function() {
      return p;
    }
  });
  const t = /* @__PURE__ */ o(yt);
  function o(m) {
    return m && m.__esModule ? m : {
      default: m
    };
  }
  let s = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, u = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, n = /(?:\d+|\d*\.\d+)%?/, d = /(?:\s*,\s*|\s+)/, a = /\s*[,/]\s*/, i = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, c = new RegExp(`^(rgba?)\\(\\s*(${n.source}|${i.source})(?:${d.source}(${n.source}|${i.source}))?(?:${d.source}(${n.source}|${i.source}))?(?:${a.source}(${n.source}|${i.source}))?\\s*\\)$`), f = new RegExp(`^(hsla?)\\(\\s*((?:${n.source})(?:deg|rad|grad|turn)?|${i.source})(?:${d.source}(${n.source}|${i.source}))?(?:${d.source}(${n.source}|${i.source}))?(?:${a.source}(${n.source}|${i.source}))?\\s*\\)$`);
  function l(m, { loose: _ = !1 } = {}) {
    var E, P;
    if (typeof m != "string")
      return null;
    if (m = m.trim(), m === "transparent")
      return {
        mode: "rgb",
        color: [
          "0",
          "0",
          "0"
        ],
        alpha: "0"
      };
    if (m in t.default)
      return {
        mode: "rgb",
        color: t.default[m].map((B) => B.toString())
      };
    let T = m.replace(u, (B, N, W, g, b) => [
      "#",
      N,
      N,
      W,
      W,
      g,
      g,
      b ? b + b : ""
    ].join("")).match(s);
    if (T !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(T[1], 16),
          parseInt(T[2], 16),
          parseInt(T[3], 16)
        ].map((B) => B.toString()),
        alpha: T[4] ? (parseInt(T[4], 16) / 255).toString() : void 0
      };
    var C;
    let $ = (C = m.match(c)) !== null && C !== void 0 ? C : m.match(f);
    if ($ === null)
      return null;
    let z = [
      $[2],
      $[3],
      $[4]
    ].filter(Boolean).map((B) => B.toString());
    return z.length === 2 && z[0].startsWith("var(") ? {
      mode: $[1],
      color: [
        z[0]
      ],
      alpha: z[1]
    } : !_ && z.length !== 3 || z.length < 3 && !z.some((B) => /^var\(.*?\)$/.test(B)) ? null : {
      mode: $[1],
      color: z,
      alpha: (E = $[5]) === null || E === void 0 || (P = E.toString) === null || P === void 0 ? void 0 : P.call(E)
    };
  }
  function p({ mode: m, color: _, alpha: E }) {
    let P = E !== void 0;
    return m === "rgba" || m === "hsla" ? `${m}(${_.join(", ")}${P ? `, ${E}` : ""})` : `${m}(${_.join(" ")}${P ? ` / ${E}` : ""})`;
  }
})(Me);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(u, n) {
    for (var d in n)
      Object.defineProperty(u, d, {
        enumerable: !0,
        get: n[d]
      });
  }
  r(e, {
    withAlphaValue: function() {
      return o;
    },
    default: function() {
      return s;
    }
  });
  const t = Me;
  function o(u, n, d) {
    if (typeof u == "function")
      return u({
        opacityValue: n
      });
    let a = (0, t.parseColor)(u, {
      loose: !0
    });
    return a === null ? d : (0, t.formatColor)({
      ...a,
      alpha: n
    });
  }
  function s({ color: u, property: n, variable: d }) {
    let a = [].concat(n);
    if (typeof u == "function")
      return {
        [d]: "1",
        ...Object.fromEntries(a.map((c) => [
          c,
          u({
            opacityVariable: d,
            opacityValue: `var(${d})`
          })
        ]))
      };
    const i = (0, t.parseColor)(u);
    return i === null ? Object.fromEntries(a.map((c) => [
      c,
      u
    ])) : i.alpha !== void 0 ? Object.fromEntries(a.map((c) => [
      c,
      u
    ])) : {
      [d]: "1",
      ...Object.fromEntries(a.map((c) => [
        c,
        (0, t.formatColor)({
          ...i,
          alpha: `var(${d})`
        })
      ]))
    };
  }
})(Te);
var je = {}, ht = {}, he = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "splitAtTopLevelOnly", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t, o) {
    let s = [], u = [], n = 0, d = !1;
    for (let a = 0; a < t.length; a++) {
      let i = t[a];
      s.length === 0 && i === o[0] && !d && (o.length === 1 || t.slice(a, a + o.length) === o) && (u.push(t.slice(n, a)), n = a + o.length), d ? d = !1 : i === "\\" && (d = !0), i === "(" || i === "[" || i === "{" ? s.push(i) : (i === ")" && s[s.length - 1] === "(" || i === "]" && s[s.length - 1] === "[" || i === "}" && s[s.length - 1] === "{") && s.pop();
    }
    return u.push(t.slice(n)), u;
  }
})(he);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(a, i) {
    for (var c in i)
      Object.defineProperty(a, c, {
        enumerable: !0,
        get: i[c]
      });
  }
  r(e, {
    parseBoxShadowValue: function() {
      return n;
    },
    formatBoxShadowValue: function() {
      return d;
    }
  });
  const t = he;
  let o = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), s = /\ +(?![^(]*\))/g, u = /^-?(\d+|\.\d+)(.*?)$/g;
  function n(a) {
    return (0, t.splitAtTopLevelOnly)(a, ",").map((c) => {
      let f = c.trim(), l = {
        raw: f
      }, p = f.split(s), m = /* @__PURE__ */ new Set();
      for (let _ of p)
        u.lastIndex = 0, !m.has("KEYWORD") && o.has(_) ? (l.keyword = _, m.add("KEYWORD")) : u.test(_) ? m.has("X") ? m.has("Y") ? m.has("BLUR") ? m.has("SPREAD") || (l.spread = _, m.add("SPREAD")) : (l.blur = _, m.add("BLUR")) : (l.y = _, m.add("Y")) : (l.x = _, m.add("X")) : l.color ? (l.unknown || (l.unknown = []), l.unknown.push(_)) : l.color = _;
      return l.valid = l.x !== void 0 && l.y !== void 0, l;
    });
  }
  function d(a) {
    return a.map((i) => i.valid ? [
      i.keyword,
      i.x,
      i.y,
      i.blur,
      i.spread,
      i.color
    ].filter(Boolean).join(" ") : i.raw).join(", ");
  }
})(ht);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(v, A) {
    for (var k in A)
      Object.defineProperty(v, k, {
        enumerable: !0,
        get: A[k]
      });
  }
  r(e, {
    normalize: function() {
      return a;
    },
    url: function() {
      return c;
    },
    number: function() {
      return f;
    },
    percentage: function() {
      return l;
    },
    length: function() {
      return _;
    },
    lineWidth: function() {
      return P;
    },
    shadow: function() {
      return T;
    },
    color: function() {
      return C;
    },
    image: function() {
      return $;
    },
    gradient: function() {
      return B;
    },
    position: function() {
      return W;
    },
    familyName: function() {
      return g;
    },
    genericName: function() {
      return w;
    },
    absoluteSize: function() {
      return x;
    },
    relativeSize: function() {
      return h;
    }
  });
  const t = Me, o = ht, s = he;
  let u = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function n(v) {
    return u.some((A) => new RegExp(`^${A}\\(.*\\)`).test(v));
  }
  const d = /* @__PURE__ */ new Set([
    // Concrete properties
    "scroll-timeline-name",
    "timeline-scope",
    "view-timeline-name",
    "font-palette",
    // Shorthand properties
    "scroll-timeline",
    "animation-timeline",
    "view-timeline"
  ]);
  function a(v, A = null, k = !0) {
    let S = A && d.has(A.property);
    return v.startsWith("--") && !S ? `var(${v})` : v.includes("url(") ? v.split(/(url\(.*?\))/g).filter(Boolean).map((M) => /^url\(.*?\)$/.test(M) ? M : a(M, A, !1)).join("") : (v = v.replace(/([^\\])_+/g, (M, be) => be + " ".repeat(M.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), k && (v = v.trim()), v = i(v), v);
  }
  function i(v) {
    let A = [
      "theme"
    ], k = [
      "min-content",
      "max-content",
      "fit-content",
      // Env
      "safe-area-inset-top",
      "safe-area-inset-right",
      "safe-area-inset-bottom",
      "safe-area-inset-left",
      "titlebar-area-x",
      "titlebar-area-y",
      "titlebar-area-width",
      "titlebar-area-height",
      "keyboard-inset-top",
      "keyboard-inset-right",
      "keyboard-inset-bottom",
      "keyboard-inset-left",
      "keyboard-inset-width",
      "keyboard-inset-height",
      "radial-gradient",
      "linear-gradient",
      "conic-gradient",
      "repeating-radial-gradient",
      "repeating-linear-gradient",
      "repeating-conic-gradient"
    ];
    return v.replace(/(calc|min|max|clamp)\(.+\)/g, (S) => {
      let M = "";
      function be() {
        let q = M.trimEnd();
        return q[q.length - 1];
      }
      for (let q = 0; q < S.length; q++) {
        let ue = function(H) {
          return H.split("").every((re, de) => S[q + de] === re);
        }, xe = function(H) {
          let re = 1 / 0;
          for (let wt of H) {
            let we = S.indexOf(wt, q);
            we !== -1 && we < re && (re = we);
          }
          let de = S.slice(q, re);
          return q += de.length - 1, de;
        }, _e = S[q];
        if (ue("var"))
          M += xe([
            ")",
            ","
          ]);
        else if (k.some((H) => ue(H))) {
          let H = k.find((re) => ue(re));
          M += H, q += H.length - 1;
        } else
          A.some((H) => ue(H)) ? M += xe([
            ")"
          ]) : ue("[") ? M += xe([
            "]"
          ]) : [
            "+",
            "-",
            "*",
            "/"
          ].includes(_e) && ![
            "(",
            "+",
            "-",
            "*",
            "/",
            ","
          ].includes(be()) ? M += ` ${_e} ` : M += _e;
      }
      return M.replace(/\s+/g, " ");
    });
  }
  function c(v) {
    return v.startsWith("url(");
  }
  function f(v) {
    return !isNaN(Number(v)) || n(v);
  }
  function l(v) {
    return v.endsWith("%") && f(v.slice(0, -1)) || n(v);
  }
  let m = `(?:${[
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "px",
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
  ].join("|")})`;
  function _(v) {
    return v === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${m}$`).test(v) || n(v);
  }
  let E = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function P(v) {
    return E.has(v);
  }
  function T(v) {
    let A = (0, o.parseBoxShadowValue)(a(v));
    for (let k of A)
      if (!k.valid)
        return !1;
    return !0;
  }
  function C(v) {
    let A = 0;
    return (0, s.splitAtTopLevelOnly)(v, "_").every((S) => (S = a(S), S.startsWith("var(") ? !0 : (0, t.parseColor)(S, {
      loose: !0
    }) !== null ? (A++, !0) : !1)) ? A > 0 : !1;
  }
  function $(v) {
    let A = 0;
    return (0, s.splitAtTopLevelOnly)(v, ",").every((S) => (S = a(S), S.startsWith("var(") ? !0 : c(S) || B(S) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((M) => S.startsWith(M)) ? (A++, !0) : !1)) ? A > 0 : !1;
  }
  let z = /* @__PURE__ */ new Set([
    "conic-gradient",
    "linear-gradient",
    "radial-gradient",
    "repeating-conic-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient"
  ]);
  function B(v) {
    v = a(v);
    for (let A of z)
      if (v.startsWith(`${A}(`))
        return !0;
    return !1;
  }
  let N = /* @__PURE__ */ new Set([
    "center",
    "top",
    "right",
    "bottom",
    "left"
  ]);
  function W(v) {
    let A = 0;
    return (0, s.splitAtTopLevelOnly)(v, "_").every((S) => (S = a(S), S.startsWith("var(") ? !0 : N.has(S) || _(S) || l(S) ? (A++, !0) : !1)) ? A > 0 : !1;
  }
  function g(v) {
    let A = 0;
    return (0, s.splitAtTopLevelOnly)(v, ",").every((S) => (S = a(S), S.startsWith("var(") ? !0 : S.includes(" ") && !/(['"])([^"']+)\1/g.test(S) || /^\d/g.test(S) ? !1 : (A++, !0))) ? A > 0 : !1;
  }
  let b = /* @__PURE__ */ new Set([
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "math",
    "emoji",
    "fangsong"
  ]);
  function w(v) {
    return b.has(v);
  }
  let y = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "xxx-large"
  ]);
  function x(v) {
    return y.has(v);
  }
  let O = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function h(v) {
    return O.has(v);
  }
})(je);
var bt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  const r = je, t = he;
  function o(s) {
    let u = [
      "cover",
      "contain"
    ];
    return (0, t.splitAtTopLevelOnly)(s, ",").every((n) => {
      let d = (0, t.splitAtTopLevelOnly)(n, "_").filter(Boolean);
      return d.length === 1 && u.includes(d[0]) ? !0 : d.length !== 1 && d.length !== 2 ? !1 : d.every((a) => (0, r.length)(a) || (0, r.percentage)(a) || a === "auto");
    });
  }
})(bt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(g, b) {
    for (var w in b)
      Object.defineProperty(g, w, {
        enumerable: !0,
        get: b[w]
      });
  }
  r(e, {
    updateAllClasses: function() {
      return i;
    },
    asValue: function() {
      return l;
    },
    parseColorFormat: function() {
      return _;
    },
    asColor: function() {
      return P;
    },
    asLookupValue: function() {
      return T;
    },
    typeMap: function() {
      return $;
    },
    coerceValue: function() {
      return N;
    },
    getMatchingTypes: function() {
      return W;
    }
  });
  const t = /* @__PURE__ */ a(gt), o = Te, s = je, u = /* @__PURE__ */ a(ze), n = bt, d = ye;
  function a(g) {
    return g && g.__esModule ? g : {
      default: g
    };
  }
  function i(g, b) {
    g.walkClasses((w) => {
      w.value = b(w.value), w.raws && w.raws.value && (w.raws.value = (0, t.default)(w.raws.value));
    });
  }
  function c(g, b) {
    if (!p(g))
      return;
    let w = g.slice(1, -1);
    if (b(w))
      return (0, s.normalize)(w);
  }
  function f(g, b = {}, w) {
    let y = b[g];
    if (y !== void 0)
      return (0, u.default)(y);
    if (p(g)) {
      let x = c(g, w);
      return x === void 0 ? void 0 : (0, u.default)(x);
    }
  }
  function l(g, b = {}, { validate: w = () => !0 } = {}) {
    var y;
    let x = (y = b.values) === null || y === void 0 ? void 0 : y[g];
    return x !== void 0 ? x : b.supportsNegativeValues && g.startsWith("-") ? f(g.slice(1), b.values, w) : c(g, w);
  }
  function p(g) {
    return g.startsWith("[") && g.endsWith("]");
  }
  function m(g) {
    let b = g.lastIndexOf("/"), w = g.lastIndexOf("[", b), y = g.indexOf("]", b);
    return g[b - 1] === "]" || g[b + 1] === "[" || w !== -1 && y !== -1 && w < b && b < y && (b = g.lastIndexOf("/", w)), b === -1 || b === g.length - 1 ? [
      g,
      void 0
    ] : p(g) && !g.includes("]/[") ? [
      g,
      void 0
    ] : [
      g.slice(0, b),
      g.slice(b + 1)
    ];
  }
  function _(g) {
    if (typeof g == "string" && g.includes("<alpha-value>")) {
      let b = g;
      return ({ opacityValue: w = 1 }) => b.replace("<alpha-value>", w);
    }
    return g;
  }
  function E(g) {
    return (0, s.normalize)(g.slice(1, -1));
  }
  function P(g, b = {}, { tailwindConfig: w = {} } = {}) {
    var y;
    if (((y = b.values) === null || y === void 0 ? void 0 : y[g]) !== void 0) {
      var x;
      return _((x = b.values) === null || x === void 0 ? void 0 : x[g]);
    }
    let [O, h] = m(g);
    if (h !== void 0) {
      var v, A, k, S;
      let M = (S = (v = b.values) === null || v === void 0 ? void 0 : v[O]) !== null && S !== void 0 ? S : p(O) ? O.slice(1, -1) : void 0;
      return M === void 0 ? void 0 : (M = _(M), p(h) ? (0, o.withAlphaValue)(M, E(h)) : ((A = w.theme) === null || A === void 0 || (k = A.opacity) === null || k === void 0 ? void 0 : k[h]) === void 0 ? void 0 : (0, o.withAlphaValue)(M, w.theme.opacity[h]));
    }
    return l(g, b, {
      validate: s.color
    });
  }
  function T(g, b = {}) {
    var w;
    return (w = b.values) === null || w === void 0 ? void 0 : w[g];
  }
  function C(g) {
    return (b, w) => l(b, w, {
      validate: g
    });
  }
  let $ = {
    any: l,
    color: P,
    url: C(s.url),
    image: C(s.image),
    length: C(s.length),
    percentage: C(s.percentage),
    position: C(s.position),
    lookup: T,
    "generic-name": C(s.genericName),
    "family-name": C(s.familyName),
    number: C(s.number),
    "line-width": C(s.lineWidth),
    "absolute-size": C(s.absoluteSize),
    "relative-size": C(s.relativeSize),
    shadow: C(s.shadow),
    size: C(n.backgroundSize)
  }, z = Object.keys($);
  function B(g, b) {
    let w = g.indexOf(b);
    return w === -1 ? [
      void 0,
      g
    ] : [
      g.slice(0, w),
      g.slice(w + 1)
    ];
  }
  function N(g, b, w, y) {
    if (w.values && b in w.values)
      for (let { type: O } of g ?? []) {
        let h = $[O](b, w, {
          tailwindConfig: y
        });
        if (h !== void 0)
          return [
            h,
            O,
            null
          ];
      }
    if (p(b)) {
      let O = b.slice(1, -1), [h, v] = B(O, ":");
      if (!/^[\w-_]+$/g.test(h))
        v = O;
      else if (h !== void 0 && !z.includes(h))
        return [];
      if (v.length > 0 && z.includes(h))
        return [
          l(`[${v}]`, w),
          h,
          null
        ];
    }
    let x = W(g, b, w, y);
    for (let O of x)
      return O;
    return [];
  }
  function* W(g, b, w, y) {
    let x = (0, d.flagEnabled)(y, "generalizedModifiers"), [O, h] = m(b);
    if (x && w.modifiers != null && (w.modifiers === "any" || typeof w.modifiers == "object" && (h && p(h) || h in w.modifiers)) || (O = b, h = void 0), h !== void 0 && O === "" && (O = "DEFAULT"), h !== void 0 && typeof w.modifiers == "object") {
      var A, k;
      let S = (k = (A = w.modifiers) === null || A === void 0 ? void 0 : A[h]) !== null && k !== void 0 ? k : null;
      S !== null ? h = S : p(h) && (h = E(h));
    }
    for (let { type: S } of g ?? []) {
      let M = $[S](O, w, {
        tailwindConfig: y
      });
      M !== void 0 && (yield [
        M,
        S,
        h ?? null
      ]);
    }
  }
})(vt);
var xt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t) {
    return typeof t == "function" ? t({}) : t;
  }
})(xt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return w;
    }
  });
  const r = /* @__PURE__ */ p(ze), t = /* @__PURE__ */ p(ot), o = /* @__PURE__ */ p(at), s = /* @__PURE__ */ p(lt), u = ct, n = dt, d = ft, a = /* @__PURE__ */ p(pt), i = mt, c = vt, f = Te, l = /* @__PURE__ */ p(xt);
  function p(y) {
    return y && y.__esModule ? y : {
      default: y
    };
  }
  function m(y) {
    return typeof y == "function";
  }
  function _(y, ...x) {
    let O = x.pop();
    for (let h of x)
      for (let v in h) {
        let A = O(y[v], h[v]);
        A === void 0 ? (0, a.default)(y[v]) && (0, a.default)(h[v]) ? y[v] = _({}, y[v], h[v], O) : y[v] = h[v] : y[v] = A;
      }
    return y;
  }
  const E = {
    colors: s.default,
    negative(y) {
      return Object.keys(y).filter((x) => y[x] !== "0").reduce((x, O) => {
        let h = (0, r.default)(y[O]);
        return h !== void 0 && (x[`-${O}`] = h), x;
      }, {});
    },
    breakpoints(y) {
      return Object.keys(y).filter((x) => typeof y[x] == "string").reduce((x, O) => ({
        ...x,
        [`screen-${O}`]: y[O]
      }), {});
    }
  };
  function P(y, ...x) {
    return m(y) ? y(...x) : y;
  }
  function T(y) {
    return y.reduce((x, { extend: O }) => _(x, O, (h, v) => h === void 0 ? [
      v
    ] : Array.isArray(h) ? [
      v,
      ...h
    ] : [
      v,
      h
    ]), {});
  }
  function C(y) {
    return {
      ...y.reduce((x, O) => (0, u.defaults)(x, O), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: T(y)
    };
  }
  function $(y, x) {
    if (Array.isArray(y) && (0, a.default)(y[0]))
      return y.concat(x);
    if (Array.isArray(x) && (0, a.default)(x[0]) && (0, a.default)(y))
      return [
        y,
        ...x
      ];
    if (Array.isArray(x))
      return x;
  }
  function z({ extend: y, ...x }) {
    return _(x, y, (O, h) => !m(O) && !h.some(m) ? _({}, O, ...h, $) : (v, A) => _({}, ...[
      O,
      ...h
    ].map((k) => P(k, v, A)), $));
  }
  function* B(y) {
    let x = (0, n.toPath)(y);
    if (x.length === 0 || (yield x, Array.isArray(y)))
      return;
    let O = /^(.*?)\s*\/\s*([^/]+)$/, h = y.match(O);
    if (h !== null) {
      let [, v, A] = h, k = (0, n.toPath)(v);
      k.alpha = A, yield k;
    }
  }
  function N(y) {
    const x = (O, h) => {
      for (const v of B(O)) {
        let A = 0, k = y;
        for (; k != null && A < v.length; )
          k = k[v[A++]], k = m(k) && (v.alpha === void 0 || A <= v.length - 1) ? k(x, E) : k;
        if (k !== void 0) {
          if (v.alpha !== void 0) {
            let S = (0, c.parseColorFormat)(k);
            return (0, f.withAlphaValue)(S, v.alpha, (0, l.default)(S));
          }
          return (0, a.default)(k) ? (0, i.cloneDeep)(k) : k;
        }
      }
      return h;
    };
    return Object.assign(x, {
      theme: x,
      ...E
    }), Object.keys(y).reduce((O, h) => (O[h] = m(y[h]) ? y[h](x, E) : y[h], O), {});
  }
  function W(y) {
    let x = [];
    return y.forEach((O) => {
      x = [
        ...x,
        O
      ];
      var h;
      const v = (h = O == null ? void 0 : O.plugins) !== null && h !== void 0 ? h : [];
      v.length !== 0 && v.forEach((A) => {
        A.__isOptionsFunction && (A = A());
        var k;
        x = [
          ...x,
          ...W([
            (k = A == null ? void 0 : A.config) !== null && k !== void 0 ? k : {}
          ])
        ];
      });
    }), x;
  }
  function g(y) {
    return [
      ...y
    ].reduceRight((O, h) => m(h) ? h({
      corePlugins: O
    }) : (0, o.default)(h, O), t.default);
  }
  function b(y) {
    return [
      ...y
    ].reduceRight((O, h) => [
      ...O,
      ...h
    ], []);
  }
  function w(y) {
    let x = [
      ...W(y),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var O, h;
    return (0, d.normalizeConfig)((0, u.defaults)({
      theme: N(z(C(x.map((v) => (O = v == null ? void 0 : v.theme) !== null && O !== void 0 ? O : {})))),
      corePlugins: g(x.map((v) => v.corePlugins)),
      plugins: b(y.map((v) => (h = v == null ? void 0 : v.plugins) !== null && h !== void 0 ? h : []))
    }, ...x));
  }
})(it);
var _t = {}, Xr = {
  content: [],
  presets: [],
  darkMode: "media",
  // or 'class'
  theme: {
    accentColor: ({ theme: e }) => ({
      ...e("colors"),
      auto: "auto"
    }),
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite"
    },
    aria: {
      busy: 'busy="true"',
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"'
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9"
    },
    backdropBlur: ({ theme: e }) => e("blur"),
    backdropBrightness: ({ theme: e }) => e("brightness"),
    backdropContrast: ({ theme: e }) => e("contrast"),
    backdropGrayscale: ({ theme: e }) => e("grayscale"),
    backdropHueRotate: ({ theme: e }) => e("hueRotate"),
    backdropInvert: ({ theme: e }) => e("invert"),
    backdropOpacity: ({ theme: e }) => e("opacity"),
    backdropSaturate: ({ theme: e }) => e("saturate"),
    backdropSepia: ({ theme: e }) => e("sepia"),
    backgroundColor: ({ theme: e }) => e("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: ({ theme: e }) => e("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    blur: {
      0: "0",
      none: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    borderColor: ({ theme: e }) => ({
      ...e("colors"),
      DEFAULT: e("colors.gray.200", "currentColor")
    }),
    borderOpacity: ({ theme: e }) => e("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px"
    },
    borderSpacing: ({ theme: e }) => ({
      ...e("spacing")
    }),
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none"
    },
    boxShadowColor: ({ theme: e }) => e("colors"),
    brightness: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    caretColor: ({ theme: e }) => e("colors"),
    colors: ({ colors: e }) => ({
      inherit: e.inherit,
      current: e.current,
      transparent: e.transparent,
      black: e.black,
      white: e.white,
      slate: e.slate,
      gray: e.gray,
      zinc: e.zinc,
      neutral: e.neutral,
      stone: e.stone,
      red: e.red,
      orange: e.orange,
      amber: e.amber,
      yellow: e.yellow,
      lime: e.lime,
      green: e.green,
      emerald: e.emerald,
      teal: e.teal,
      cyan: e.cyan,
      sky: e.sky,
      blue: e.blue,
      indigo: e.indigo,
      violet: e.violet,
      purple: e.purple,
      fuchsia: e.fuchsia,
      pink: e.pink,
      rose: e.rose
    }),
    columns: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      "3xs": "16rem",
      "2xs": "18rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
    },
    container: {},
    content: {
      none: "none"
    },
    contrast: {
      0: "0",
      50: ".5",
      75: ".75",
      100: "1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      "not-allowed": "not-allowed",
      none: "none",
      "context-menu": "context-menu",
      progress: "progress",
      cell: "cell",
      crosshair: "crosshair",
      "vertical-text": "vertical-text",
      alias: "alias",
      copy: "copy",
      "no-drop": "no-drop",
      grab: "grab",
      grabbing: "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out"
    },
    divideColor: ({ theme: e }) => e("borderColor"),
    divideOpacity: ({ theme: e }) => e("borderOpacity"),
    divideWidth: ({ theme: e }) => e("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgb(0 0 0 / 0.05)",
      DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      none: "0 0 #0000"
    },
    fill: ({ theme: e }) => ({
      none: "none",
      ...e("colors")
    }),
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexBasis: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%"
    }),
    flexGrow: {
      0: "0",
      DEFAULT: "1"
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1"
    },
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    gap: ({ theme: e }) => e("spacing"),
    gradientColorStops: ({ theme: e }) => e("colors"),
    gradientColorStopPositions: {
      "0%": "0%",
      "5%": "5%",
      "10%": "10%",
      "15%": "15%",
      "20%": "20%",
      "25%": "25%",
      "30%": "30%",
      "35%": "35%",
      "40%": "40%",
      "45%": "45%",
      "50%": "50%",
      "55%": "55%",
      "60%": "60%",
      "65%": "65%",
      "70%": "70%",
      "75%": "75%",
      "80%": "80%",
      "85%": "85%",
      "90%": "90%",
      "95%": "95%",
      "100%": "100%"
    },
    grayscale: {
      0: "0",
      DEFAULT: "100%"
    },
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridTemplateColumns: {
      none: "none",
      subgrid: "subgrid",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))"
    },
    gridTemplateRows: {
      none: "none",
      subgrid: "subgrid",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))"
    },
    height: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg"
    },
    inset: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    invert: {
      0: "0",
      DEFAULT: "100%"
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)"
        }
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      pulse: {
        "50%": {
          opacity: ".5"
        }
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem"
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },
    listStyleImage: {
      none: "none"
    },
    margin: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing")
    }),
    lineClamp: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6"
    },
    maxHeight: ({ theme: e }) => ({
      ...e("spacing"),
      none: "none",
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    maxWidth: ({ theme: e, breakpoints: r }) => ({
      ...e("spacing"),
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...r(e("screens"))
    }),
    minHeight: ({ theme: e }) => ({
      ...e("spacing"),
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    minWidth: ({ theme: e }) => ({
      ...e("spacing"),
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      15: "0.15",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      35: "0.35",
      40: "0.4",
      45: "0.45",
      50: "0.5",
      55: "0.55",
      60: "0.6",
      65: "0.65",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      85: "0.85",
      90: "0.9",
      95: "0.95",
      100: "1"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12"
    },
    outlineColor: ({ theme: e }) => e("colors"),
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    outlineWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    padding: ({ theme: e }) => e("spacing"),
    placeholderColor: ({ theme: e }) => e("colors"),
    placeholderOpacity: ({ theme: e }) => e("opacity"),
    ringColor: ({ theme: e }) => ({
      DEFAULT: e("colors.blue.500", "#3b82f6"),
      ...e("colors")
    }),
    ringOffsetColor: ({ theme: e }) => e("colors"),
    ringOffsetWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    ringOpacity: ({ theme: e }) => ({
      DEFAULT: "0.5",
      ...e("opacity")
    }),
    ringWidth: {
      DEFAULT: "3px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      45: "45deg",
      90: "90deg",
      180: "180deg"
    },
    saturate: {
      0: "0",
      50: ".5",
      100: "1",
      150: "1.5",
      200: "2"
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    scrollMargin: ({ theme: e }) => ({
      ...e("spacing")
    }),
    scrollPadding: ({ theme: e }) => e("spacing"),
    sepia: {
      0: "0",
      DEFAULT: "100%"
    },
    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg"
    },
    space: ({ theme: e }) => ({
      ...e("spacing")
    }),
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    stroke: ({ theme: e }) => ({
      none: "none",
      ...e("colors")
    }),
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2"
    },
    supports: {},
    data: {},
    textColor: ({ theme: e }) => e("colors"),
    textDecorationColor: ({ theme: e }) => e("colors"),
    textDecorationThickness: {
      auto: "auto",
      "from-font": "from-font",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    textIndent: ({ theme: e }) => ({
      ...e("spacing")
    }),
    textOpacity: ({ theme: e }) => e("opacity"),
    textUnderlineOffset: {
      auto: "auto",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left"
    },
    transitionDelay: {
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionDuration: {
      DEFAULT: "150ms",
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform"
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: ({ theme: e }) => ({
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    size: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    width: ({ theme: e }) => ({
      auto: "auto",
      ...e("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      svw: "100svw",
      lvw: "100lvw",
      dvw: "100dvw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    willChange: {
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      transform: "transform"
    },
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50"
    }
  },
  plugins: []
};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return s;
    }
  });
  const r = /* @__PURE__ */ o(Xr), t = ye;
  function o(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  function s(u) {
    var n;
    const d = ((n = u == null ? void 0 : u.presets) !== null && n !== void 0 ? n : [
      r.default
    ]).slice().reverse().flatMap((c) => s(c instanceof Function ? c() : c)), a = {
      // Add experimental configs here...
      respectDefaultRingColorOpacity: {
        theme: {
          ringColor: ({ theme: c }) => ({
            DEFAULT: "#3b82f67f",
            ...c("colors")
          })
        }
      },
      disableColorOpacityUtilitiesByDefault: {
        corePlugins: {
          backgroundOpacity: !1,
          borderOpacity: !1,
          divideOpacity: !1,
          placeholderOpacity: !1,
          ringOpacity: !1,
          textOpacity: !1
        }
      }
    }, i = Object.keys(a).filter((c) => (0, t.flagEnabled)(u, c)).map((c) => a[c]);
    return [
      u,
      ...i,
      ...d
    ];
  }
})(_t);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return s;
    }
  });
  const r = /* @__PURE__ */ o(it), t = /* @__PURE__ */ o(_t);
  function o(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  function s(...u) {
    let [, ...n] = (0, t.default)(u[0]);
    return (0, r.default)([
      ...u,
      ...n
    ]);
  }
})(nt);
let Oe = nt;
var Kr = (Oe.__esModule ? Oe : { default: Oe }).default;
const Zr = /* @__PURE__ */ Yr(Kr);
var Re;
((e) => {
  function r(l) {
    return l.trim() != "";
  }
  e.requireNoBlank = r;
  function t(l) {
    return l.length > 0;
  }
  e.requireNoEmpty = t;
  function o(l) {
    return /^[a-z]+$/.test(l);
  }
  e.requireAlphabetLowercases = o;
  function s(l) {
    return /^[A-Z]+$/.test(l);
  }
  e.requireAlphabetUppercases = s;
  function u(l) {
    return /^[a-zA-Z]+$/.test(l);
  }
  e.requireAlphabets = u;
  function n(l) {
    return /^[a-zA-Z0-9]+$/.test(l);
  }
  e.requireAlphanumerics = n;
  function d(l) {
    return (p) => l.test(p);
  }
  e.requireRegEx = d;
  function a(l = !1, p = !1) {
    return d(l ? p ? /^[a-zA-Z0-9_\-]+$/ : /^[a-zA-Z0-9_]+$/ : p ? /^[a-z0-9_\-]+$/ : /^[a-z0-9_]+$/);
  }
  e.requireGeneralIdentifier = a;
  function i(l) {
    return (p) => p.length >= l;
  }
  e.requireMinimum = i;
  function c(l) {
    return (p) => p.length <= l;
  }
  e.requireMaximum = c;
  function f(l, p) {
    return (m) => i(l)(m) && c(p)(m);
  }
  e.requireRange = f;
})(Re || (Re = {}));
Boolean.prototype.ifTrue = function(e, r = !1) {
  return this ? e : r;
};
Boolean.prototype.ifFalse = function(e, r = !0) {
  return this ? r : e;
};
Boolean.prototype.runIfTrue = function(e) {
  return this ? e() : null;
};
Boolean.prototype.runIfFalse = function(e) {
  return this ? null : e();
};
const en = (e) => (r) => {
  r.provide("tailwind-config", Zr(e.tailwindConfig));
};
export {
  Ce as DButton,
  Ee as DDimmed,
  Gr as DEffect,
  nr as DModal,
  Sr as DSelect,
  Tr as DSelectOption,
  Ur as DTextField,
  Vr as DTextFieldAction,
  tt as DTransitionSlide,
  Re as TextRules,
  Qr as components,
  Ge as createTopLevelElement,
  It as createTopLevelRootElement,
  en as declarativePlugin,
  He as topLevelElementIdPrefix,
  Be as topLevelRootElementId
};
