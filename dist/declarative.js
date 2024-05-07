import { defineComponent as J, computed as j, resolveComponent as ht, openBlock as L, createBlock as X, Teleport as ke, createVNode as ce, mergeProps as Ee, withCtx as W, renderSlot as I, createElementBlock as G, normalizeClass as ee, getCurrentScope as bt, onScopeDispose as xt, unref as ne, ref as q, watch as ge, reactive as je, getCurrentInstance as wt, onMounted as Ie, watchEffect as _t, inject as Z, mergeModels as me, useModel as Ae, createElementVNode as U, withModifiers as Re, normalizeProps as Ot, guardReactiveProps as St, resolveDynamicComponent as kt, toHandlers as Et, TransitionGroup as At, Transition as Ve, useCssVars as $t, provide as te, readonly as Pt, createCommentVNode as ue, normalizeStyle as Ct, pushScopeId as Tt, popScopeId as Dt, withDirectives as zt, vModelText as Mt } from "vue";
const $e = /* @__PURE__ */ J({
  __name: "DDimmed",
  props: {
    center: { type: Boolean, default: !1 },
    teleport: { type: Boolean, default: !0 },
    show: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: r }) {
    const t = e, i = r, a = j(() => ({
      "opacity-0": !t.show,
      "!backdrop-blur-0 bg-transparent pointer-events-none": t.disabled || !t.show,
      "flex justify-center items-center": t.center
    }));
    function u(n) {
      if (n.target != n.currentTarget) {
        n.stopPropagation(), n.preventDefault();
        return;
      }
      n.preventDefault(), i("click", n);
    }
    return (n, c) => {
      const l = ht("d-dimmed", !0);
      return n.teleport ? (L(), X(ke, {
        key: 0,
        to: ":root"
      }, [
        ce(l, Ee(n.$attrs, { teleport: !1 }), {
          default: W(() => [
            I(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ])) : (L(), G("div", {
        key: 1,
        class: ee(["fixed top-0 left-0 w-dvw h-dvh bg-black/20 backdrop-blur-[2px] z-max transition", a.value]),
        onClick: u
      }, [
        I(n.$slots, "default")
      ], 2));
    };
  }
}), We = "$__declarative_", Le = We + "root";
function jt(e = "div") {
  const r = document.getElementById(Le);
  if (r)
    return r;
  const t = document.createElement(e);
  return t.id = Le, t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.zIndex = "2147483647", document.body.appendChild(t), t;
}
function Lt(e, r = "div") {
  const t = jt(r), i = We + e, a = document.getElementById(i);
  if (a)
    return a;
  const u = document.createElement(r);
  return u.id = i, t.appendChild(u), u;
}
function Pe(e) {
  return bt() ? (xt(e), !0) : !1;
}
function oe(e) {
  return typeof e == "function" ? e() : ne(e);
}
const Ne = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ft = (e) => e != null, Bt = Object.prototype.toString, Ut = (e) => Bt.call(e) === "[object Object]", Y = () => {
}, It = /* @__PURE__ */ Rt();
function Rt() {
  var e, r;
  return Ne && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((r = window == null ? void 0 : window.navigator) == null ? void 0 : r.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Vt(e, r) {
  var t;
  if (typeof e == "number")
    return e + r;
  const i = ((t = e.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : t[0]) || "", a = e.slice(i.length), u = Number.parseFloat(i) + r;
  return Number.isNaN(u) ? e : u + a;
}
function K(e) {
  var r;
  const t = oe(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
const ie = Ne ? window : void 0;
function re(...e) {
  let r, t, i, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, i, a] = e, r = ie) : [r, t, i, a] = e, !r)
    return Y;
  Array.isArray(t) || (t = [t]), Array.isArray(i) || (i = [i]);
  const u = [], n = () => {
    u.forEach((s) => s()), u.length = 0;
  }, c = (s, d, f, y) => (s.addEventListener(d, f, y), () => s.removeEventListener(d, f, y)), l = ge(
    () => [K(r), oe(a)],
    ([s, d]) => {
      if (n(), !s)
        return;
      const f = Ut(d) ? { ...d } : d;
      u.push(
        ...t.flatMap((y) => i.map((g) => c(s, y, g, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), o = () => {
    l(), n();
  };
  return Pe(o), o;
}
let Fe = !1;
function Wt(e, r, t = {}) {
  const { window: i = ie, ignore: a = [], capture: u = !0, detectIframe: n = !1 } = t;
  if (!i)
    return Y;
  It && !Fe && (Fe = !0, Array.from(i.document.body.children).forEach((f) => f.addEventListener("click", Y)), i.document.documentElement.addEventListener("click", Y));
  let c = !0;
  const l = (f) => a.some((y) => {
    if (typeof y == "string")
      return Array.from(i.document.querySelectorAll(y)).some((g) => g === f.target || f.composedPath().includes(g));
    {
      const g = K(y);
      return g && (f.target === g || f.composedPath().includes(g));
    }
  }), s = [
    re(i, "click", (f) => {
      const y = K(e);
      if (!(!y || y === f.target || f.composedPath().includes(y))) {
        if (f.detail === 0 && (c = !l(f)), !c) {
          c = !0;
          return;
        }
        r(f);
      }
    }, { passive: !0, capture: u }),
    re(i, "pointerdown", (f) => {
      const y = K(e);
      c = !l(f) && !!(y && !f.composedPath().includes(y));
    }, { passive: !0 }),
    n && re(i, "blur", (f) => {
      setTimeout(() => {
        var y;
        const g = K(e);
        ((y = i.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(g != null && g.contains(i.document.activeElement)) && r(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => s.forEach((f) => f());
}
function Nt() {
  const e = q(!1), r = wt();
  return r && Ie(() => {
    e.value = !0;
  }, r), e;
}
function He(e) {
  const r = Nt();
  return j(() => (r.value, !!e()));
}
function se(e, r = {}) {
  const { window: t = ie } = r, i = He(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let a;
  const u = q(!1), n = (o) => {
    u.value = o.matches;
  }, c = () => {
    a && ("removeEventListener" in a ? a.removeEventListener("change", n) : a.removeListener(n));
  }, l = _t(() => {
    i.value && (c(), a = t.matchMedia(oe(e)), "addEventListener" in a ? a.addEventListener("change", n) : a.addListener(n), u.value = a.matches);
  });
  return Pe(() => {
    l(), c(), a = void 0;
  }), u;
}
function Ht(e, r = {}) {
  function t(s, d) {
    let f = oe(e[oe(s)]);
    return d != null && (f = Vt(f, d)), typeof f == "number" && (f = `${f}px`), f;
  }
  const { window: i = ie, strategy: a = "min-width" } = r;
  function u(s) {
    return i ? i.matchMedia(s).matches : !1;
  }
  const n = (s) => se(() => `(min-width: ${t(s)})`, r), c = (s) => se(() => `(max-width: ${t(s)})`, r), l = Object.keys(e).reduce((s, d) => (Object.defineProperty(s, d, {
    get: () => a === "min-width" ? n(d) : c(d),
    enumerable: !0,
    configurable: !0
  }), s), {});
  function o() {
    const s = Object.keys(e).map((d) => [d, n(d)]);
    return j(() => s.filter(([, d]) => d.value).map(([d]) => d));
  }
  return Object.assign(l, {
    greaterOrEqual: n,
    smallerOrEqual: c,
    greater(s) {
      return se(() => `(min-width: ${t(s, 0.1)})`, r);
    },
    smaller(s) {
      return se(() => `(max-width: ${t(s, -0.1)})`, r);
    },
    between(s, d) {
      return se(() => `(min-width: ${t(s)}) and (max-width: ${t(d, -0.1)})`, r);
    },
    isGreater(s) {
      return u(`(min-width: ${t(s, 0.1)})`);
    },
    isGreaterOrEqual(s) {
      return u(`(min-width: ${t(s)})`);
    },
    isSmaller(s) {
      return u(`(max-width: ${t(s, -0.1)})`);
    },
    isSmallerOrEqual(s) {
      return u(`(max-width: ${t(s)})`);
    },
    isInBetween(s, d) {
      return u(`(min-width: ${t(s)}) and (max-width: ${t(d, -0.1)})`);
    },
    current: o,
    active() {
      const s = o();
      return j(() => s.value.length === 0 ? "" : s.value.at(-1));
    }
  });
}
function qt(e, r, t = {}) {
  const {
    root: i,
    rootMargin: a = "0px",
    threshold: u = 0.1,
    window: n = ie,
    immediate: c = !0
  } = t, l = He(() => n && "IntersectionObserver" in n), o = j(() => {
    const g = oe(e);
    return (Array.isArray(g) ? g : [g]).map(K).filter(Ft);
  });
  let s = Y;
  const d = q(c), f = l.value ? ge(
    () => [o.value, K(i), d.value],
    ([g, _]) => {
      if (s(), !d.value || !g.length)
        return;
      const A = new IntersectionObserver(
        r,
        {
          root: K(_),
          rootMargin: a,
          threshold: u
        }
      );
      g.forEach((C) => C && A.observe(C)), s = () => {
        A.disconnect(), s = Y;
      };
    },
    { immediate: c, flush: "post" }
  ) : Y, y = () => {
    s(), f(), d.value = !1;
  };
  return Pe(y), {
    isSupported: l,
    isActive: d,
    pause() {
      s(), d.value = !1;
    },
    resume() {
      d.value = !0;
    },
    stop: y
  };
}
function Gt(e, r = {}) {
  const {
    threshold: t = 50,
    onSwipe: i,
    onSwipeEnd: a,
    onSwipeStart: u,
    passive: n = !0,
    window: c = ie
  } = r, l = je({ x: 0, y: 0 }), o = je({ x: 0, y: 0 }), s = j(() => l.x - o.x), d = j(() => l.y - o.y), { max: f, abs: y } = Math, g = j(() => f(y(s.value), y(d.value)) >= t), _ = q(!1), A = j(() => g.value ? y(s.value) > y(d.value) ? s.value > 0 ? "left" : "right" : d.value > 0 ? "up" : "down" : "none"), C = (m) => [m.touches[0].clientX, m.touches[0].clientY], T = (m, b) => {
    l.x = m, l.y = b;
  }, $ = (m, b) => {
    o.x = m, o.y = b;
  };
  let P;
  const M = Yt(c == null ? void 0 : c.document);
  n ? P = M ? { passive: !0 } : { capture: !1 } : P = M ? { passive: !1, capture: !0 } : { capture: !0 };
  const F = (m) => {
    _.value && (a == null || a(m, A.value)), _.value = !1;
  }, N = [
    re(e, "touchstart", (m) => {
      if (m.touches.length !== 1)
        return;
      P.capture && !P.passive && m.preventDefault();
      const [b, w] = C(m);
      T(b, w), $(b, w), u == null || u(m);
    }, P),
    re(e, "touchmove", (m) => {
      if (m.touches.length !== 1)
        return;
      const [b, w] = C(m);
      $(b, w), !_.value && g.value && (_.value = !0), _.value && (i == null || i(m));
    }, P),
    re(e, ["touchend", "touchcancel"], F, P)
  ];
  return {
    isPassiveEventSupported: M,
    isSwiping: _,
    direction: A,
    coordsStart: l,
    coordsEnd: o,
    lengthX: s,
    lengthY: d,
    stop: () => N.forEach((m) => m())
  };
}
function Yt(e) {
  if (!e)
    return !1;
  let r = !1;
  const t = {
    get passive() {
      return r = !0, !1;
    }
  };
  return e.addEventListener("x", Y, t), e.removeEventListener("x", Y), r;
}
function qe() {
  const r = Z("tailwind-config").theme.screens;
  function t(i) {
    return parseInt(i.replace("px", ""));
  }
  return Ht({
    sm: t(r.sm),
    md: t(r.sm),
    lg: t(r.sm),
    xl: t(r.sm),
    "2xl": t(r["2xl"])
  });
}
const Xt = { class: "m-4 font-medium text-3xl select-none empty:hidden overflow-hidden" }, Kt = /* @__PURE__ */ U("div", { class: "border-b-2" }, null, -1), Jt = { class: "py-4 px-4 empty:hidden" }, Qt = /* @__PURE__ */ U("div", { class: "border-b-2" }, null, -1), Zt = { class: "p-3 empty:p-0 select-none empty:hidden" }, er = /* @__PURE__ */ J({
  __name: "DModal",
  props: /* @__PURE__ */ me({
    closable: { type: Boolean, default: !0 },
    noBackdrop: { type: Boolean, default: !1 },
    alignVertical: { default: "center" },
    alignHorizontal: { default: "center" },
    fullscreen: { type: [Boolean, String], default: !1 },
    screen: { default: "parent" }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ me([
    "close"
  ], ["update:modelValue"]),
  setup(e, { emit: r }) {
    const t = e, i = r, a = Ae(e, "modelValue"), u = qe(), n = Lt("modals"), c = j(() => [
      `justify-${t.alignVertical}`,
      `items-${t.alignHorizontal}`
    ]), l = j(() => (t.screen == "parent", [{
      "scale-110": !a.value
    }]));
    j(() => t.fullscreen == "auto" ? u.smallerOrEqual("md").value : t.fullscreen);
    function o() {
      t.closable && (i("close"), a.value = !1);
    }
    return (s, d) => (L(), X(ke, { to: ne(n) }, [
      ce($e, {
        show: a.value,
        disabled: s.noBackdrop,
        teleport: !1
      }, {
        default: W(() => [
          U("div", {
            class: ee(["size-full flex", c.value]),
            onClick: Re(o, ["self"])
          }, [
            U("div", {
              class: ee(["bg-white p-4 rounded-3xl sm:min-w-96 min-w-72 border-2 shadow-2xl transition-all duration-300", l.value])
            }, [
              U("div", Xt, [
                I(s.$slots, "title")
              ]),
              Kt,
              U("div", Jt, [
                I(s.$slots, "default")
              ]),
              Qt,
              U("div", Zt, [
                I(s.$slots, "action")
              ])
            ], 2)
          ], 2)
        ]),
        _: 3
      }, 8, ["show", "disabled"])
    ], 8, ["to"]));
  }
}), tr = { class: "d-effect" }, rr = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "DEffect",
  setup(e) {
    return (r, t) => (L(), G("span", tr, [
      I(r.$slots, "default", Ot(St(r.$attrs)), void 0, !0)
    ]));
  }
}), ae = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [i, a] of r)
    t[i] = a;
  return t;
}, de = /* @__PURE__ */ ae(rr, [["__scopeId", "data-v-4b1c3ba5"]]);
var nr = (e) => Object.prototype.toString.call(e).includes("Object"), Ge = (e) => Object.prototype.toString.call(e) === "[object String]", Ye = (e) => Number.isInteger(e);
const ve = (e, r) => r(e) ? !0 : !nr(e) || Object.keys(e).length !== 2 ? !1 : !Object.entries(e).some(([t, i]) => {
  const a = !["enter", "leave"].includes(t), u = !r(i);
  return a || u;
}), or = (e) => ve(e, (r) => Ye(r) && r >= 0), ir = (e) => ve(e, (r) => Ge(r) && r.trim() !== ""), ar = (e) => ve(e, (r) => Ye(r) && r >= 0), Xe = 300, lr = "cubic-bezier(.25, .8, .5, 1)", sr = 0, ur = "y", cr = Xe, dr = {
  inheritAttrs: !1,
  props: {
    duration: {
      validator: or,
      default: Xe
    },
    easing: {
      validator: ir,
      default: () => lr
    },
    delay: {
      validator: ar,
      default: sr
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
      default: cr
    }
  },
  computed: {
    cComponent() {
      return this.group ? At : Ve;
    },
    cAttrs() {
      const { appear: e, mode: r, tag: t, duration: i } = this;
      return this.group ? { appear: e, tag: t, duration: i, ...this.$attrs } : { appear: e, mode: r, duration: i };
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
      var t, i, a;
      const u = ((t = this.duration) == null ? void 0 : t[r]) ?? this.duration, n = ((i = this.easing) == null ? void 0 : i[r]) ?? this.easing, c = ((a = this.delay) == null ? void 0 : a[r]) ?? this.delay;
      e.style.setProperty("transition-duration", `${u}ms`, "important"), e.style.setProperty("transition-timing-function", `${n}`, "important"), e.style.setProperty("transition-delay", `${c}ms`, "important");
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
      const r = getComputedStyle(e), { width: t, height: i } = r, { marginLeft: a, marginTop: u } = r;
      return e.style.setProperty("left", `${e.offsetLeft - parseFloat(a)}px`, "important"), e.style.setProperty("top", `${e.offsetTop - parseFloat(u)}px`, "important"), e.style.setProperty("width", `${parseFloat(t)}px`, "important"), e.style.setProperty("height", `${parseFloat(i)}px`, "important"), e.style.setProperty("position", "absolute", "important"), e;
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
}, fr = (e) => ve(e, (r) => Ge(r) && ["x", "y"].includes(r)), pr = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [i, a] of r)
    t[i] = a;
  return t;
}, mr = {
  name: "transition-expand",
  mixins: [
    dr
  ],
  props: {
    axis: {
      validator: fr,
      default: ur
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
      const i = ((t = this.axis) == null ? void 0 : t[r]) ?? this.axis, a = i === "x" ? "left" : "top", u = i === "x" ? "right" : "bottom", n = e.visual.size[i], c = e.visual.margin[i], l = e.visual.padding[i];
      this.noOpacity || e.style.setProperty("opacity", e.visual.opacity), delete e.visual, e.style.setProperty(i === "x" ? "width" : "height", `${parseFloat(n)}px`), e.style.setProperty(`padding-${a}`, `${parseFloat(l[0])}px`), e.style.setProperty(`padding-${u}`, `${parseFloat(l[1])}px`), e.style.setProperty(`margin-${a}`, `${parseFloat(c[0])}px`), e.style.setProperty(`margin-${u}`, `${parseFloat(c[1])}px`);
    },
    collapseElement(e, r = "enter") {
      var t;
      const i = ((t = this.axis) == null ? void 0 : t[r]) ?? this.axis, a = i === "x" ? "width" : "height", u = i === "x" ? "left" : "top", n = i === "x" ? "right" : "bottom";
      this.noOpacity || e.style.setProperty("opacity", 0), e.style.setProperty(a, "0px"), e.style.setProperty(`padding-${u}`, "0px"), e.style.setProperty(`padding-${n}`, "0px"), e.style.setProperty(`margin-${u}`, "0px"), e.style.setProperty(`margin-${n}`, "0px");
    },
    resetElement(e) {
      e.style.removeProperty("opacity"), e.style.removeProperty("width"), e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-right"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("padding-left"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-right"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("margin-left");
    },
    getSizes(e) {
      const r = getComputedStyle(e), { opacity: t } = r, { width: i, height: a } = r, { paddingTop: u, paddingRight: n, paddingBottom: c, paddingLeft: l } = r, { marginTop: o, marginRight: s, marginBottom: d, marginLeft: f } = r;
      e.visual = {
        opacity: t,
        size: { x: i, y: a },
        padding: { x: [l, n], y: [u, c] },
        margin: { x: [f, s], y: [o, d] }
      };
    }
  }
};
function gr(e, r, t, i, a, u) {
  return L(), X(kt(e.cComponent), Ee({ name: "expand" }, e.cAttrs, Et(e.cHooks)), {
    default: W(() => [
      I(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const vr = /* @__PURE__ */ pr(mr, [["render", gr]]), yr = /* @__PURE__ */ J({
  __name: "DTransitionSlide",
  props: {
    appear: { type: Boolean, default: !1 },
    axis: { default: "x" },
    factor: { default: 30 },
    reverseDirection: { type: Boolean, default: !0 }
  },
  setup(e) {
    $t((c) => ({
      "6180c711": u.value,
      "7e9928bc": n.value
    }));
    const r = e, t = {
      x: [1, 0],
      y: [0, 1],
      "-x": [-1, 0],
      "-y": [0, -1]
    };
    function i(c, l) {
      return c == 1 ? l : c == -1 ? `-${l}` : "0";
    }
    const a = j(() => typeof r.factor == "string" ? r.factor : `${r.factor}px`), u = j(() => {
      const c = a.value, l = t[r.axis];
      return `${i(l[0], c)}, ${i(l[1], c)}`;
    }), n = j(() => {
      const c = a.value, l = t[r.axis], o = r.reverseDirection ? -1 : 1;
      return `${i(l[0] * o, c)}, ${i(l[1] * o, c)}`;
    });
    return (c, l) => (L(), X(Ve, {
      name: "d-slide",
      appear: c.appear
    }, {
      default: W(() => [
        I(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["appear"]));
  }
}), Ke = /* @__PURE__ */ ae(yr, [["__scopeId", "data-v-9fffba16"]]), Je = (e) => (Tt("data-v-05429d19"), e = e(), Dt(), e), hr = /* @__PURE__ */ Je(() => /* @__PURE__ */ U("svg", {
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 -960 960 960",
  width: "24"
}, [
  /* @__PURE__ */ U("path", { d: "M480-360 280-560h400L480-360Z" })
], -1)), br = {
  key: 0,
  class: "d-select-options"
}, xr = /* @__PURE__ */ Je(() => /* @__PURE__ */ U("div", { class: "w-full flex justify-center" }, [
  /* @__PURE__ */ U("span", { class: "w-2/5 border-2" })
], -1)), wr = {
  key: 2,
  class: "hidden"
}, Be = 0.65, _r = /* @__PURE__ */ J({
  __name: "DSelect",
  props: /* @__PURE__ */ me({
    size: { default: "medium" },
    multiselect: { type: Boolean, default: !1 },
    modal: { type: [Boolean, String], default: "auto" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const r = Ae(e, "modelValue"), t = e, i = q(!1), a = q(), u = q(), n = q(), c = qe(), { isSwiping: l, lengthX: o, lengthY: s } = Gt(n), d = q(0);
    qt(
      n,
      ([{ intersectionRatio: $ }]) => {
        d.value = $;
      },
      {
        threshold: [Be]
      }
    ), te("select-open", i), te("select-multiselect", t.multiselect), te("select-render", Pt(u)), te("select-size", t.size), te("select-current", r), te("select-update", C), Wt(a, () => {
      t.modal != !0 && (i.value = !1);
    });
    const f = j(() => [
      t.size,
      {
        open: i.value
      }
    ]), y = j(() => t.modal == !0 ? !0 : t.modal == !1 ? !1 : c.smallerOrEqual("md").value), g = j(() => ({
      "scale-125 opacity-0 translate-y-[200%]": !i.value
    })), _ = j(() => ({
      transform: `translate(${A.value[0]}px, ${A.value[1]}px)`,
      transition: `${l.value ? "none" : "all"} 0.2s`
    })), A = j(() => l.value && i.value ? [0, -s.value] : [0, 0]);
    ge([d, l], () => {
      d.value < Be && !l.value && (i.value = !1);
    });
    function C($) {
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
    function T() {
      i.value = !i.value;
    }
    return ($, P) => (L(), G("div", {
      class: "d-select-root",
      ref_key: "rootElementRef",
      ref: a
    }, [
      ce(de, null, {
        default: W(() => [
          U("button", {
            class: ee(["d-select", f.value]),
            onClick: T
          }, [
            (L(), G("span", {
              key: JSON.stringify(r.value),
              class: "d-select-display",
              ref_key: "displayElementRef",
              ref: u
            })),
            hr
          ], 2)
        ]),
        _: 1
      }),
      y.value ? (L(), X($e, {
        key: 1,
        show: i.value,
        teleport: !1
      }, {
        default: W(() => [
          ce(Ke, {
            axis: "y",
            "reverse-direction": !1
          }, {
            default: W(() => [
              i.value ? (L(), G("div", {
                key: 0,
                onClick: P[0] || (P[0] = Re((M) => i.value = !1, ["self"])),
                class: "size-full overflow-hidden flex justify-center transition-all"
              }, [
                U("div", {
                  class: ee(["mt-auto mb-5 mx-5 p-4 rounded-xl w-full bg-white border-2 flex flex-col gap-2", g.value]),
                  ref_key: "modalElementRef",
                  ref: n,
                  style: Ct(_.value)
                }, [
                  xr,
                  I($.$slots, "default", {}, void 0, !0)
                ], 6)
              ])) : ue("", !0)
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["show"])) : (L(), X(ne(vr), {
        key: 0,
        appear: ""
      }, {
        default: W(() => [
          i.value ? (L(), G("div", br, [
            I($.$slots, "default", {}, void 0, !0)
          ])) : ue("", !0)
        ]),
        _: 3
      })),
      i.value ? ue("", !0) : (L(), G("div", wr, [
        I($.$slots, "default", {}, void 0, !0)
      ]))
    ], 512));
  }
}), Or = /* @__PURE__ */ ae(_r, [["__scopeId", "data-v-05429d19"]]);
let pe;
const Sr = new Uint8Array(16);
function kr() {
  if (!pe && (pe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !pe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return pe(Sr);
}
const B = [];
for (let e = 0; e < 256; ++e)
  B.push((e + 256).toString(16).slice(1));
function Er(e, r = 0) {
  return B[e[r + 0]] + B[e[r + 1]] + B[e[r + 2]] + B[e[r + 3]] + "-" + B[e[r + 4]] + B[e[r + 5]] + "-" + B[e[r + 6]] + B[e[r + 7]] + "-" + B[e[r + 8]] + B[e[r + 9]] + "-" + B[e[r + 10]] + B[e[r + 11]] + B[e[r + 12]] + B[e[r + 13]] + B[e[r + 14]] + B[e[r + 15]];
}
const Ar = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ue = {
  randomUUID: Ar
};
function $r(e, r, t) {
  if (Ue.randomUUID && !r && !e)
    return Ue.randomUUID();
  e = e || {};
  const i = e.random || (e.rng || kr)();
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, Er(i);
}
const Pr = { key: 0 }, Cr = /* @__PURE__ */ J({
  __name: "DSelectOption",
  props: {
    value: { default: $r() }
  },
  setup(e) {
    const r = e;
    Ie(() => {
      n && c && (n.value || c(r.value));
    });
    const t = Z("select-open"), i = Z("select-multiselect"), a = Z("select-render"), u = Z("select-size"), n = Z("select-current"), c = Z("select-update");
    function l() {
      c && (c(r.value), t != null && t.value && !i && (t.value = !1));
    }
    const o = j(() => [
      u,
      {
        selected: s.value
      }
    ]), s = j(() => n != null && n.value ? Array.isArray(n.value) ? n.value.includes(r.value) : n.value == r.value : !1);
    return (d, f) => (L(), G("div", null, [
      ce(de, null, {
        default: W(() => [
          U("button", {
            class: ee(["d-select-option", o.value]),
            onClick: l
          }, [
            I(d.$slots, "default", {}, void 0, !0)
          ], 2)
        ]),
        _: 3
      }),
      ne(a) ? (L(), X(ke, {
        key: 0,
        to: ne(a)
      }, [
        s.value ? (L(), G("span", Pr, [
          I(d.$slots, "default", {}, void 0, !0)
        ])) : ue("", !0)
      ], 8, ["to"])) : ue("", !0)
    ]));
  }
}), Tr = /* @__PURE__ */ ae(Cr, [["__scopeId", "data-v-c4c82ab3"]]), Dr = /* @__PURE__ */ J({
  __name: "DButton",
  props: {
    primary: { type: Boolean, default: !1 },
    size: { default: "medium" }
  },
  setup(e) {
    const r = e, t = j(() => [
      r.size,
      {
        primary: r.primary
      }
    ]);
    return (i, a) => (L(), X(ne(de), null, {
      default: W(() => [
        U("button", Ee({
          class: ["d-button", t.value]
        }, i.$attrs), [
          I(i.$slots, "default", {}, void 0, !0)
        ], 16)
      ]),
      _: 3
    }));
  }
}), zr = /* @__PURE__ */ ae(Dr, [["__scopeId", "data-v-0814b184"]]), Mr = ["placeholder"], jr = /* @__PURE__ */ J({
  __name: "DTextField",
  props: /* @__PURE__ */ me({
    size: { default: "medium" },
    placeholder: { default: "" },
    validity: { type: [null, String, Boolean], default: null }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e, { expose: r }) {
    const t = e, i = Ae(e, "modelValue"), a = q();
    r({
      inputRef: a
    });
    const u = j(() => [
      t.size
    ]);
    return ge([() => t.validity, a], () => {
      var c;
      let n = "";
      typeof t.validity == "boolean" ? n = t.validity ? "Error" : "" : typeof t.validity == "string" && (n = t.validity), (c = a.value) == null || c.setCustomValidity(n);
    }), (n, c) => (L(), X(de, null, {
      default: W(() => [
        zt(U("input", {
          ref_key: "inputRef",
          ref: a,
          "onUpdate:modelValue": c[0] || (c[0] = (l) => i.value = l),
          class: ee(["d-textfield", u.value]),
          placeholder: n.placeholder,
          type: "text"
        }, null, 10, Mr), [
          [Mt, i.value]
        ])
      ]),
      _: 1
    }));
  }
}), Lr = /* @__PURE__ */ ae(jr, [["__scopeId", "data-v-a5476cee"]]), Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DButton: zr,
  DDimmed: $e,
  DEffect: de,
  DModal: er,
  DSelect: Or,
  DSelectOption: Tr,
  DTextField: Lr,
  DTransitionSlide: Ke
}, Symbol.toStringTag, { value: "Module" }));
function Fr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qe = {}, Ze = {}, Ce = {};
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
      return t.replace(/^[+-]?/, (a) => a === "-" ? "" : "-");
    let i = [
      "var",
      "calc",
      "min",
      "max",
      "clamp"
    ];
    for (const a of i)
      if (t.includes(`${a}(`))
        return `calc(${t} * -1)`;
  }
})(Ce);
var et = {};
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
})(et);
var tt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t, i) {
    return t === void 0 ? i : Array.isArray(t) ? t : [
      ...new Set(i.filter((u) => t !== !1 && t[u] !== !1).concat(Object.keys(t).filter((u) => t[u] !== !1)))
    ];
  }
})(tt);
var rt = {}, ye = {}, Te = { exports: {} }, z = String, nt = function() {
  return { isColorSupported: !1, reset: z, bold: z, dim: z, italic: z, underline: z, inverse: z, hidden: z, strikethrough: z, black: z, red: z, green: z, yellow: z, blue: z, magenta: z, cyan: z, white: z, gray: z, bgBlack: z, bgRed: z, bgGreen: z, bgYellow: z, bgBlue: z, bgMagenta: z, bgCyan: z, bgWhite: z };
};
Te.exports = nt();
Te.exports.createColors = nt;
var ot = Te.exports;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(l, o) {
    for (var s in o)
      Object.defineProperty(l, s, {
        enumerable: !0,
        get: o[s]
      });
  }
  r(e, {
    dim: function() {
      return n;
    },
    default: function() {
      return c;
    }
  });
  const t = /* @__PURE__ */ i(ot);
  function i(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  let a = /* @__PURE__ */ new Set();
  function u(l, o, s) {
    typeof process < "u" && process.env.JEST_WORKER_ID || s && a.has(s) || (s && a.add(s), console.warn(""), o.forEach((d) => console.warn(l, "-", d)));
  }
  function n(l) {
    return t.default.dim(l);
  }
  const c = {
    info(l, o) {
      u(t.default.bold(t.default.cyan("info")), ...Array.isArray(l) ? [
        l
      ] : [
        o,
        l
      ]);
    },
    warn(l, o) {
      u(t.default.bold(t.default.yellow("warn")), ...Array.isArray(l) ? [
        l
      ] : [
        o,
        l
      ]);
    },
    risk(l, o) {
      u(t.default.bold(t.default.magenta("risk")), ...Array.isArray(l) ? [
        l
      ] : [
        o,
        l
      ]);
    }
  };
})(ye);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const r = /* @__PURE__ */ t(ye);
  function t(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  function i({ version: u, from: n, to: c }) {
    r.default.warn(`${n}-color-renamed`, [
      `As of Tailwind CSS ${u}, \`${n}\` has been renamed to \`${c}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const a = {
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
      return i({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      }), this.sky;
    },
    get warmGray() {
      return i({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      }), this.stone;
    },
    get trueGray() {
      return i({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      }), this.neutral;
    },
    get coolGray() {
      return i({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      }), this.gray;
    },
    get blueGray() {
      return i({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      }), this.slate;
    }
  };
})(rt);
var it = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "defaults", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t, ...i) {
    for (let n of i) {
      for (let c in n) {
        var a;
        !(t == null || (a = t.hasOwnProperty) === null || a === void 0) && a.call(t, c) || (t[c] = n[c]);
      }
      for (let c of Object.getOwnPropertySymbols(n)) {
        var u;
        !(t == null || (u = t.hasOwnProperty) === null || u === void 0) && u.call(t, c) || (t[c] = n[c]);
      }
    }
    return t;
  }
})(it);
var at = {};
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
    let i = t.split("[").length - 1, a = t.split("]").length - 1;
    if (i !== a)
      throw new Error(`Path is invalid. Has unbalanced brackets: ${t}`);
    return t.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
})(at);
var lt = {}, he = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(d, f) {
    for (var y in f)
      Object.defineProperty(d, y, {
        enumerable: !0,
        get: f[y]
      });
  }
  r(e, {
    flagEnabled: function() {
      return c;
    },
    issueFlagNotices: function() {
      return o;
    },
    default: function() {
      return s;
    }
  });
  const t = /* @__PURE__ */ a(ot), i = /* @__PURE__ */ a(ye);
  function a(d) {
    return d && d.__esModule ? d : {
      default: d
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
  function c(d, f) {
    if (n.future.includes(f)) {
      var y, g, _;
      return d.future === "all" || ((_ = (g = d == null || (y = d.future) === null || y === void 0 ? void 0 : y[f]) !== null && g !== void 0 ? g : u[f]) !== null && _ !== void 0 ? _ : !1);
    }
    if (n.experimental.includes(f)) {
      var A, C, T;
      return d.experimental === "all" || ((T = (C = d == null || (A = d.experimental) === null || A === void 0 ? void 0 : A[f]) !== null && C !== void 0 ? C : u[f]) !== null && T !== void 0 ? T : !1);
    }
    return !1;
  }
  function l(d) {
    if (d.experimental === "all")
      return n.experimental;
    var f;
    return Object.keys((f = d == null ? void 0 : d.experimental) !== null && f !== void 0 ? f : {}).filter((y) => n.experimental.includes(y) && d.experimental[y]);
  }
  function o(d) {
    if (process.env.JEST_WORKER_ID === void 0 && l(d).length > 0) {
      let f = l(d).map((y) => t.default.yellow(y)).join(", ");
      i.default.warn("experimental-flags-enabled", [
        `You have enabled experimental features: ${f}`,
        "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
      ]);
    }
  }
  const s = n;
})(he);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "normalizeConfig", {
    enumerable: !0,
    get: function() {
      return u;
    }
  });
  const r = he, t = /* @__PURE__ */ a(ye);
  function i(n) {
    if (typeof WeakMap != "function")
      return null;
    var c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
    return (i = function(o) {
      return o ? l : c;
    })(n);
  }
  function a(n, c) {
    if (n && n.__esModule)
      return n;
    if (n === null || typeof n != "object" && typeof n != "function")
      return {
        default: n
      };
    var l = i(c);
    if (l && l.has(n))
      return l.get(n);
    var o = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var d in n)
      if (d !== "default" && Object.prototype.hasOwnProperty.call(n, d)) {
        var f = s ? Object.getOwnPropertyDescriptor(n, d) : null;
        f && (f.get || f.set) ? Object.defineProperty(o, d, f) : o[d] = n[d];
      }
    return o.default = n, l && l.set(n, o), o;
  }
  function u(n) {
    if ((() => {
      if (n.purge || !n.content || !Array.isArray(n.content) && !(typeof n.content == "object" && n.content !== null))
        return !1;
      if (Array.isArray(n.content))
        return n.content.every((o) => typeof o == "string" ? !0 : !(typeof (o == null ? void 0 : o.raw) != "string" || o != null && o.extension && typeof (o == null ? void 0 : o.extension) != "string"));
      if (typeof n.content == "object" && n.content !== null) {
        if (Object.keys(n.content).some((o) => ![
          "files",
          "relative",
          "extract",
          "transform"
        ].includes(o)))
          return !1;
        if (Array.isArray(n.content.files)) {
          if (!n.content.files.every((o) => typeof o == "string" ? !0 : !(typeof (o == null ? void 0 : o.raw) != "string" || o != null && o.extension && typeof (o == null ? void 0 : o.extension) != "string")))
            return !1;
          if (typeof n.content.extract == "object") {
            for (let o of Object.values(n.content.extract))
              if (typeof o != "function")
                return !1;
          } else if (!(n.content.extract === void 0 || typeof n.content.extract == "function"))
            return !1;
          if (typeof n.content.transform == "object") {
            for (let o of Object.values(n.content.transform))
              if (typeof o != "function")
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
      var o;
      let { content: s, purge: d, safelist: f } = n;
      return Array.isArray(f) ? f : Array.isArray(s == null ? void 0 : s.safelist) ? s.safelist : Array.isArray(d == null ? void 0 : d.safelist) ? d.safelist : Array.isArray(d == null || (o = d.options) === null || o === void 0 ? void 0 : o.safelist) ? d.options.safelist : [];
    })(), n.blocklist = (() => {
      let { blocklist: o } = n;
      if (Array.isArray(o)) {
        if (o.every((s) => typeof s == "string"))
          return o;
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
      var l;
      n.prefix = (l = n.prefix) !== null && l !== void 0 ? l : "";
    }
    n.content = {
      relative: (() => {
        let { content: o } = n;
        return o != null && o.relative ? o.relative : (0, r.flagEnabled)(n, "relativeContentPathsByDefault");
      })(),
      files: (() => {
        let { content: o, purge: s } = n;
        return Array.isArray(s) ? s : Array.isArray(s == null ? void 0 : s.content) ? s.content : Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.content) ? o.content : Array.isArray(o == null ? void 0 : o.files) ? o.files : [];
      })(),
      extract: (() => {
        let o = (() => {
          var f, y, g, _, A, C, T, $, P, M;
          return !((f = n.purge) === null || f === void 0) && f.extract ? n.purge.extract : !((y = n.content) === null || y === void 0) && y.extract ? n.content.extract : !((g = n.purge) === null || g === void 0 || (_ = g.extract) === null || _ === void 0) && _.DEFAULT ? n.purge.extract.DEFAULT : !((A = n.content) === null || A === void 0 || (C = A.extract) === null || C === void 0) && C.DEFAULT ? n.content.extract.DEFAULT : !((T = n.purge) === null || T === void 0 || ($ = T.options) === null || $ === void 0) && $.extractors ? n.purge.options.extractors : !((P = n.content) === null || P === void 0 || (M = P.options) === null || M === void 0) && M.extractors ? n.content.options.extractors : {};
        })(), s = {}, d = (() => {
          var f, y, g, _;
          if (!((f = n.purge) === null || f === void 0 || (y = f.options) === null || y === void 0) && y.defaultExtractor)
            return n.purge.options.defaultExtractor;
          if (!((g = n.content) === null || g === void 0 || (_ = g.options) === null || _ === void 0) && _.defaultExtractor)
            return n.content.options.defaultExtractor;
        })();
        if (d !== void 0 && (s.DEFAULT = d), typeof o == "function")
          s.DEFAULT = o;
        else if (Array.isArray(o))
          for (let { extensions: f, extractor: y } of o ?? [])
            for (let g of f)
              s[g] = y;
        else
          typeof o == "object" && o !== null && Object.assign(s, o);
        return s;
      })(),
      transform: (() => {
        let o = (() => {
          var d, f, y, g, _, A;
          return !((d = n.purge) === null || d === void 0) && d.transform ? n.purge.transform : !((f = n.content) === null || f === void 0) && f.transform ? n.content.transform : !((y = n.purge) === null || y === void 0 || (g = y.transform) === null || g === void 0) && g.DEFAULT ? n.purge.transform.DEFAULT : !((_ = n.content) === null || _ === void 0 || (A = _.transform) === null || A === void 0) && A.DEFAULT ? n.content.transform.DEFAULT : {};
        })(), s = {};
        return typeof o == "function" && (s.DEFAULT = o), typeof o == "object" && o !== null && Object.assign(s, o), s;
      })()
    };
    for (let o of n.content.files)
      if (typeof o == "string" && /{([^,]*?)}/g.test(o)) {
        t.default.warn("invalid-glob-braces", [
          `The glob pattern ${(0, t.dim)(o)} in your Tailwind CSS configuration is invalid.`,
          `Update it to ${(0, t.dim)(o.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
        ]);
        break;
      }
    return n;
  }
})(lt);
var st = {};
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
    const i = Object.getPrototypeOf(t);
    return i === null || Object.getPrototypeOf(i) === null;
  }
})(st);
var ut = {};
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
    return Array.isArray(t) ? t.map((i) => r(i)) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([i, a]) => [
      i,
      r(a)
    ])) : t;
  }
})(ut);
var ct = {}, dt = {};
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
})(dt);
var De = {}, ze = {}, ft = {};
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
})(ft);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(g, _) {
    for (var A in _)
      Object.defineProperty(g, A, {
        enumerable: !0,
        get: _[A]
      });
  }
  r(e, {
    parseColor: function() {
      return f;
    },
    formatColor: function() {
      return y;
    }
  });
  const t = /* @__PURE__ */ i(ft);
  function i(g) {
    return g && g.__esModule ? g : {
      default: g
    };
  }
  let a = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, u = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, n = /(?:\d+|\d*\.\d+)%?/, c = /(?:\s*,\s*|\s+)/, l = /\s*[,/]\s*/, o = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, s = new RegExp(`^(rgba?)\\(\\s*(${n.source}|${o.source})(?:${c.source}(${n.source}|${o.source}))?(?:${c.source}(${n.source}|${o.source}))?(?:${l.source}(${n.source}|${o.source}))?\\s*\\)$`), d = new RegExp(`^(hsla?)\\(\\s*((?:${n.source})(?:deg|rad|grad|turn)?|${o.source})(?:${c.source}(${n.source}|${o.source}))?(?:${c.source}(${n.source}|${o.source}))?(?:${l.source}(${n.source}|${o.source}))?\\s*\\)$`);
  function f(g, { loose: _ = !1 } = {}) {
    var A, C;
    if (typeof g != "string")
      return null;
    if (g = g.trim(), g === "transparent")
      return {
        mode: "rgb",
        color: [
          "0",
          "0",
          "0"
        ],
        alpha: "0"
      };
    if (g in t.default)
      return {
        mode: "rgb",
        color: t.default[g].map((F) => F.toString())
      };
    let T = g.replace(u, (F, N, R, m, b) => [
      "#",
      N,
      N,
      R,
      R,
      m,
      m,
      b ? b + b : ""
    ].join("")).match(a);
    if (T !== null)
      return {
        mode: "rgb",
        color: [
          parseInt(T[1], 16),
          parseInt(T[2], 16),
          parseInt(T[3], 16)
        ].map((F) => F.toString()),
        alpha: T[4] ? (parseInt(T[4], 16) / 255).toString() : void 0
      };
    var $;
    let P = ($ = g.match(s)) !== null && $ !== void 0 ? $ : g.match(d);
    if (P === null)
      return null;
    let M = [
      P[2],
      P[3],
      P[4]
    ].filter(Boolean).map((F) => F.toString());
    return M.length === 2 && M[0].startsWith("var(") ? {
      mode: P[1],
      color: [
        M[0]
      ],
      alpha: M[1]
    } : !_ && M.length !== 3 || M.length < 3 && !M.some((F) => /^var\(.*?\)$/.test(F)) ? null : {
      mode: P[1],
      color: M,
      alpha: (A = P[5]) === null || A === void 0 || (C = A.toString) === null || C === void 0 ? void 0 : C.call(A)
    };
  }
  function y({ mode: g, color: _, alpha: A }) {
    let C = A !== void 0;
    return g === "rgba" || g === "hsla" ? `${g}(${_.join(", ")}${C ? `, ${A}` : ""})` : `${g}(${_.join(" ")}${C ? ` / ${A}` : ""})`;
  }
})(ze);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(u, n) {
    for (var c in n)
      Object.defineProperty(u, c, {
        enumerable: !0,
        get: n[c]
      });
  }
  r(e, {
    withAlphaValue: function() {
      return i;
    },
    default: function() {
      return a;
    }
  });
  const t = ze;
  function i(u, n, c) {
    if (typeof u == "function")
      return u({
        opacityValue: n
      });
    let l = (0, t.parseColor)(u, {
      loose: !0
    });
    return l === null ? c : (0, t.formatColor)({
      ...l,
      alpha: n
    });
  }
  function a({ color: u, property: n, variable: c }) {
    let l = [].concat(n);
    if (typeof u == "function")
      return {
        [c]: "1",
        ...Object.fromEntries(l.map((s) => [
          s,
          u({
            opacityVariable: c,
            opacityValue: `var(${c})`
          })
        ]))
      };
    const o = (0, t.parseColor)(u);
    return o === null ? Object.fromEntries(l.map((s) => [
      s,
      u
    ])) : o.alpha !== void 0 ? Object.fromEntries(l.map((s) => [
      s,
      u
    ])) : {
      [c]: "1",
      ...Object.fromEntries(l.map((s) => [
        s,
        (0, t.formatColor)({
          ...o,
          alpha: `var(${c})`
        })
      ]))
    };
  }
})(De);
var Me = {}, pt = {}, be = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "splitAtTopLevelOnly", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function r(t, i) {
    let a = [], u = [], n = 0, c = !1;
    for (let l = 0; l < t.length; l++) {
      let o = t[l];
      a.length === 0 && o === i[0] && !c && (i.length === 1 || t.slice(l, l + i.length) === i) && (u.push(t.slice(n, l)), n = l + i.length), c ? c = !1 : o === "\\" && (c = !0), o === "(" || o === "[" || o === "{" ? a.push(o) : (o === ")" && a[a.length - 1] === "(" || o === "]" && a[a.length - 1] === "[" || o === "}" && a[a.length - 1] === "{") && a.pop();
    }
    return u.push(t.slice(n)), u;
  }
})(be);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(l, o) {
    for (var s in o)
      Object.defineProperty(l, s, {
        enumerable: !0,
        get: o[s]
      });
  }
  r(e, {
    parseBoxShadowValue: function() {
      return n;
    },
    formatBoxShadowValue: function() {
      return c;
    }
  });
  const t = be;
  let i = /* @__PURE__ */ new Set([
    "inset",
    "inherit",
    "initial",
    "revert",
    "unset"
  ]), a = /\ +(?![^(]*\))/g, u = /^-?(\d+|\.\d+)(.*?)$/g;
  function n(l) {
    return (0, t.splitAtTopLevelOnly)(l, ",").map((s) => {
      let d = s.trim(), f = {
        raw: d
      }, y = d.split(a), g = /* @__PURE__ */ new Set();
      for (let _ of y)
        u.lastIndex = 0, !g.has("KEYWORD") && i.has(_) ? (f.keyword = _, g.add("KEYWORD")) : u.test(_) ? g.has("X") ? g.has("Y") ? g.has("BLUR") ? g.has("SPREAD") || (f.spread = _, g.add("SPREAD")) : (f.blur = _, g.add("BLUR")) : (f.y = _, g.add("Y")) : (f.x = _, g.add("X")) : f.color ? (f.unknown || (f.unknown = []), f.unknown.push(_)) : f.color = _;
      return f.valid = f.x !== void 0 && f.y !== void 0, f;
    });
  }
  function c(l) {
    return l.map((o) => o.valid ? [
      o.keyword,
      o.x,
      o.y,
      o.blur,
      o.spread,
      o.color
    ].filter(Boolean).join(" ") : o.raw).join(", ");
  }
})(pt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(p, S) {
    for (var E in S)
      Object.defineProperty(p, E, {
        enumerable: !0,
        get: S[E]
      });
  }
  r(e, {
    normalize: function() {
      return l;
    },
    url: function() {
      return s;
    },
    number: function() {
      return d;
    },
    percentage: function() {
      return f;
    },
    length: function() {
      return _;
    },
    lineWidth: function() {
      return C;
    },
    shadow: function() {
      return T;
    },
    color: function() {
      return $;
    },
    image: function() {
      return P;
    },
    gradient: function() {
      return F;
    },
    position: function() {
      return R;
    },
    familyName: function() {
      return m;
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
  const t = ze, i = pt, a = be;
  let u = [
    "min",
    "max",
    "clamp",
    "calc"
  ];
  function n(p) {
    return u.some((S) => new RegExp(`^${S}\\(.*\\)`).test(p));
  }
  const c = /* @__PURE__ */ new Set([
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
  function l(p, S = null, E = !0) {
    let k = S && c.has(S.property);
    return p.startsWith("--") && !k ? `var(${p})` : p.includes("url(") ? p.split(/(url\(.*?\))/g).filter(Boolean).map((D) => /^url\(.*?\)$/.test(D) ? D : l(D, S, !1)).join("") : (p = p.replace(/([^\\])_+/g, (D, xe) => xe + " ".repeat(D.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), E && (p = p.trim()), p = o(p), p);
  }
  function o(p) {
    let S = [
      "theme"
    ], E = [
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
    return p.replace(/(calc|min|max|clamp)\(.+\)/g, (k) => {
      let D = "";
      function xe() {
        let V = D.trimEnd();
        return V[V.length - 1];
      }
      for (let V = 0; V < k.length; V++) {
        let le = function(H) {
          return H.split("").every((Q, fe) => k[V + fe] === Q);
        }, we = function(H) {
          let Q = 1 / 0;
          for (let yt of H) {
            let Oe = k.indexOf(yt, V);
            Oe !== -1 && Oe < Q && (Q = Oe);
          }
          let fe = k.slice(V, Q);
          return V += fe.length - 1, fe;
        }, _e = k[V];
        if (le("var"))
          D += we([
            ")",
            ","
          ]);
        else if (E.some((H) => le(H))) {
          let H = E.find((Q) => le(Q));
          D += H, V += H.length - 1;
        } else
          S.some((H) => le(H)) ? D += we([
            ")"
          ]) : le("[") ? D += we([
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
          ].includes(xe()) ? D += ` ${_e} ` : D += _e;
      }
      return D.replace(/\s+/g, " ");
    });
  }
  function s(p) {
    return p.startsWith("url(");
  }
  function d(p) {
    return !isNaN(Number(p)) || n(p);
  }
  function f(p) {
    return p.endsWith("%") && d(p.slice(0, -1)) || n(p);
  }
  let g = `(?:${[
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
  function _(p) {
    return p === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${g}$`).test(p) || n(p);
  }
  let A = /* @__PURE__ */ new Set([
    "thin",
    "medium",
    "thick"
  ]);
  function C(p) {
    return A.has(p);
  }
  function T(p) {
    let S = (0, i.parseBoxShadowValue)(l(p));
    for (let E of S)
      if (!E.valid)
        return !1;
    return !0;
  }
  function $(p) {
    let S = 0;
    return (0, a.splitAtTopLevelOnly)(p, "_").every((k) => (k = l(k), k.startsWith("var(") ? !0 : (0, t.parseColor)(k, {
      loose: !0
    }) !== null ? (S++, !0) : !1)) ? S > 0 : !1;
  }
  function P(p) {
    let S = 0;
    return (0, a.splitAtTopLevelOnly)(p, ",").every((k) => (k = l(k), k.startsWith("var(") ? !0 : s(k) || F(k) || [
      "element(",
      "image(",
      "cross-fade(",
      "image-set("
    ].some((D) => k.startsWith(D)) ? (S++, !0) : !1)) ? S > 0 : !1;
  }
  let M = /* @__PURE__ */ new Set([
    "conic-gradient",
    "linear-gradient",
    "radial-gradient",
    "repeating-conic-gradient",
    "repeating-linear-gradient",
    "repeating-radial-gradient"
  ]);
  function F(p) {
    p = l(p);
    for (let S of M)
      if (p.startsWith(`${S}(`))
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
  function R(p) {
    let S = 0;
    return (0, a.splitAtTopLevelOnly)(p, "_").every((k) => (k = l(k), k.startsWith("var(") ? !0 : N.has(k) || _(k) || f(k) ? (S++, !0) : !1)) ? S > 0 : !1;
  }
  function m(p) {
    let S = 0;
    return (0, a.splitAtTopLevelOnly)(p, ",").every((k) => (k = l(k), k.startsWith("var(") ? !0 : k.includes(" ") && !/(['"])([^"']+)\1/g.test(k) || /^\d/g.test(k) ? !1 : (S++, !0))) ? S > 0 : !1;
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
  function w(p) {
    return b.has(p);
  }
  let v = /* @__PURE__ */ new Set([
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "xxx-large"
  ]);
  function x(p) {
    return v.has(p);
  }
  let O = /* @__PURE__ */ new Set([
    "larger",
    "smaller"
  ]);
  function h(p) {
    return O.has(p);
  }
})(Me);
var mt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "backgroundSize", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  const r = Me, t = be;
  function i(a) {
    let u = [
      "cover",
      "contain"
    ];
    return (0, t.splitAtTopLevelOnly)(a, ",").every((n) => {
      let c = (0, t.splitAtTopLevelOnly)(n, "_").filter(Boolean);
      return c.length === 1 && u.includes(c[0]) ? !0 : c.length !== 1 && c.length !== 2 ? !1 : c.every((l) => (0, r.length)(l) || (0, r.percentage)(l) || l === "auto");
    });
  }
})(mt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  function r(m, b) {
    for (var w in b)
      Object.defineProperty(m, w, {
        enumerable: !0,
        get: b[w]
      });
  }
  r(e, {
    updateAllClasses: function() {
      return o;
    },
    asValue: function() {
      return f;
    },
    parseColorFormat: function() {
      return _;
    },
    asColor: function() {
      return C;
    },
    asLookupValue: function() {
      return T;
    },
    typeMap: function() {
      return P;
    },
    coerceValue: function() {
      return N;
    },
    getMatchingTypes: function() {
      return R;
    }
  });
  const t = /* @__PURE__ */ l(dt), i = De, a = Me, u = /* @__PURE__ */ l(Ce), n = mt, c = he;
  function l(m) {
    return m && m.__esModule ? m : {
      default: m
    };
  }
  function o(m, b) {
    m.walkClasses((w) => {
      w.value = b(w.value), w.raws && w.raws.value && (w.raws.value = (0, t.default)(w.raws.value));
    });
  }
  function s(m, b) {
    if (!y(m))
      return;
    let w = m.slice(1, -1);
    if (b(w))
      return (0, a.normalize)(w);
  }
  function d(m, b = {}, w) {
    let v = b[m];
    if (v !== void 0)
      return (0, u.default)(v);
    if (y(m)) {
      let x = s(m, w);
      return x === void 0 ? void 0 : (0, u.default)(x);
    }
  }
  function f(m, b = {}, { validate: w = () => !0 } = {}) {
    var v;
    let x = (v = b.values) === null || v === void 0 ? void 0 : v[m];
    return x !== void 0 ? x : b.supportsNegativeValues && m.startsWith("-") ? d(m.slice(1), b.values, w) : s(m, w);
  }
  function y(m) {
    return m.startsWith("[") && m.endsWith("]");
  }
  function g(m) {
    let b = m.lastIndexOf("/"), w = m.lastIndexOf("[", b), v = m.indexOf("]", b);
    return m[b - 1] === "]" || m[b + 1] === "[" || w !== -1 && v !== -1 && w < b && b < v && (b = m.lastIndexOf("/", w)), b === -1 || b === m.length - 1 ? [
      m,
      void 0
    ] : y(m) && !m.includes("]/[") ? [
      m,
      void 0
    ] : [
      m.slice(0, b),
      m.slice(b + 1)
    ];
  }
  function _(m) {
    if (typeof m == "string" && m.includes("<alpha-value>")) {
      let b = m;
      return ({ opacityValue: w = 1 }) => b.replace("<alpha-value>", w);
    }
    return m;
  }
  function A(m) {
    return (0, a.normalize)(m.slice(1, -1));
  }
  function C(m, b = {}, { tailwindConfig: w = {} } = {}) {
    var v;
    if (((v = b.values) === null || v === void 0 ? void 0 : v[m]) !== void 0) {
      var x;
      return _((x = b.values) === null || x === void 0 ? void 0 : x[m]);
    }
    let [O, h] = g(m);
    if (h !== void 0) {
      var p, S, E, k;
      let D = (k = (p = b.values) === null || p === void 0 ? void 0 : p[O]) !== null && k !== void 0 ? k : y(O) ? O.slice(1, -1) : void 0;
      return D === void 0 ? void 0 : (D = _(D), y(h) ? (0, i.withAlphaValue)(D, A(h)) : ((S = w.theme) === null || S === void 0 || (E = S.opacity) === null || E === void 0 ? void 0 : E[h]) === void 0 ? void 0 : (0, i.withAlphaValue)(D, w.theme.opacity[h]));
    }
    return f(m, b, {
      validate: a.color
    });
  }
  function T(m, b = {}) {
    var w;
    return (w = b.values) === null || w === void 0 ? void 0 : w[m];
  }
  function $(m) {
    return (b, w) => f(b, w, {
      validate: m
    });
  }
  let P = {
    any: f,
    color: C,
    url: $(a.url),
    image: $(a.image),
    length: $(a.length),
    percentage: $(a.percentage),
    position: $(a.position),
    lookup: T,
    "generic-name": $(a.genericName),
    "family-name": $(a.familyName),
    number: $(a.number),
    "line-width": $(a.lineWidth),
    "absolute-size": $(a.absoluteSize),
    "relative-size": $(a.relativeSize),
    shadow: $(a.shadow),
    size: $(n.backgroundSize)
  }, M = Object.keys(P);
  function F(m, b) {
    let w = m.indexOf(b);
    return w === -1 ? [
      void 0,
      m
    ] : [
      m.slice(0, w),
      m.slice(w + 1)
    ];
  }
  function N(m, b, w, v) {
    if (w.values && b in w.values)
      for (let { type: O } of m ?? []) {
        let h = P[O](b, w, {
          tailwindConfig: v
        });
        if (h !== void 0)
          return [
            h,
            O,
            null
          ];
      }
    if (y(b)) {
      let O = b.slice(1, -1), [h, p] = F(O, ":");
      if (!/^[\w-_]+$/g.test(h))
        p = O;
      else if (h !== void 0 && !M.includes(h))
        return [];
      if (p.length > 0 && M.includes(h))
        return [
          f(`[${p}]`, w),
          h,
          null
        ];
    }
    let x = R(m, b, w, v);
    for (let O of x)
      return O;
    return [];
  }
  function* R(m, b, w, v) {
    let x = (0, c.flagEnabled)(v, "generalizedModifiers"), [O, h] = g(b);
    if (x && w.modifiers != null && (w.modifiers === "any" || typeof w.modifiers == "object" && (h && y(h) || h in w.modifiers)) || (O = b, h = void 0), h !== void 0 && O === "" && (O = "DEFAULT"), h !== void 0 && typeof w.modifiers == "object") {
      var S, E;
      let k = (E = (S = w.modifiers) === null || S === void 0 ? void 0 : S[h]) !== null && E !== void 0 ? E : null;
      k !== null ? h = k : y(h) && (h = A(h));
    }
    for (let { type: k } of m ?? []) {
      let D = P[k](O, w, {
        tailwindConfig: v
      });
      D !== void 0 && (yield [
        D,
        k,
        h ?? null
      ]);
    }
  }
})(ct);
var gt = {};
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
})(gt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return w;
    }
  });
  const r = /* @__PURE__ */ y(Ce), t = /* @__PURE__ */ y(et), i = /* @__PURE__ */ y(tt), a = /* @__PURE__ */ y(rt), u = it, n = at, c = lt, l = /* @__PURE__ */ y(st), o = ut, s = ct, d = De, f = /* @__PURE__ */ y(gt);
  function y(v) {
    return v && v.__esModule ? v : {
      default: v
    };
  }
  function g(v) {
    return typeof v == "function";
  }
  function _(v, ...x) {
    let O = x.pop();
    for (let h of x)
      for (let p in h) {
        let S = O(v[p], h[p]);
        S === void 0 ? (0, l.default)(v[p]) && (0, l.default)(h[p]) ? v[p] = _({}, v[p], h[p], O) : v[p] = h[p] : v[p] = S;
      }
    return v;
  }
  const A = {
    colors: a.default,
    negative(v) {
      return Object.keys(v).filter((x) => v[x] !== "0").reduce((x, O) => {
        let h = (0, r.default)(v[O]);
        return h !== void 0 && (x[`-${O}`] = h), x;
      }, {});
    },
    breakpoints(v) {
      return Object.keys(v).filter((x) => typeof v[x] == "string").reduce((x, O) => ({
        ...x,
        [`screen-${O}`]: v[O]
      }), {});
    }
  };
  function C(v, ...x) {
    return g(v) ? v(...x) : v;
  }
  function T(v) {
    return v.reduce((x, { extend: O }) => _(x, O, (h, p) => h === void 0 ? [
      p
    ] : Array.isArray(h) ? [
      p,
      ...h
    ] : [
      p,
      h
    ]), {});
  }
  function $(v) {
    return {
      ...v.reduce((x, O) => (0, u.defaults)(x, O), {}),
      // In order to resolve n config objects, we combine all of their `extend` properties
      // into arrays instead of objects so they aren't overridden.
      extend: T(v)
    };
  }
  function P(v, x) {
    if (Array.isArray(v) && (0, l.default)(v[0]))
      return v.concat(x);
    if (Array.isArray(x) && (0, l.default)(x[0]) && (0, l.default)(v))
      return [
        v,
        ...x
      ];
    if (Array.isArray(x))
      return x;
  }
  function M({ extend: v, ...x }) {
    return _(x, v, (O, h) => !g(O) && !h.some(g) ? _({}, O, ...h, P) : (p, S) => _({}, ...[
      O,
      ...h
    ].map((E) => C(E, p, S)), P));
  }
  function* F(v) {
    let x = (0, n.toPath)(v);
    if (x.length === 0 || (yield x, Array.isArray(v)))
      return;
    let O = /^(.*?)\s*\/\s*([^/]+)$/, h = v.match(O);
    if (h !== null) {
      let [, p, S] = h, E = (0, n.toPath)(p);
      E.alpha = S, yield E;
    }
  }
  function N(v) {
    const x = (O, h) => {
      for (const p of F(O)) {
        let S = 0, E = v;
        for (; E != null && S < p.length; )
          E = E[p[S++]], E = g(E) && (p.alpha === void 0 || S <= p.length - 1) ? E(x, A) : E;
        if (E !== void 0) {
          if (p.alpha !== void 0) {
            let k = (0, s.parseColorFormat)(E);
            return (0, d.withAlphaValue)(k, p.alpha, (0, f.default)(k));
          }
          return (0, l.default)(E) ? (0, o.cloneDeep)(E) : E;
        }
      }
      return h;
    };
    return Object.assign(x, {
      theme: x,
      ...A
    }), Object.keys(v).reduce((O, h) => (O[h] = g(v[h]) ? v[h](x, A) : v[h], O), {});
  }
  function R(v) {
    let x = [];
    return v.forEach((O) => {
      x = [
        ...x,
        O
      ];
      var h;
      const p = (h = O == null ? void 0 : O.plugins) !== null && h !== void 0 ? h : [];
      p.length !== 0 && p.forEach((S) => {
        S.__isOptionsFunction && (S = S());
        var E;
        x = [
          ...x,
          ...R([
            (E = S == null ? void 0 : S.config) !== null && E !== void 0 ? E : {}
          ])
        ];
      });
    }), x;
  }
  function m(v) {
    return [
      ...v
    ].reduceRight((O, h) => g(h) ? h({
      corePlugins: O
    }) : (0, i.default)(h, O), t.default);
  }
  function b(v) {
    return [
      ...v
    ].reduceRight((O, h) => [
      ...O,
      ...h
    ], []);
  }
  function w(v) {
    let x = [
      ...R(v),
      {
        prefix: "",
        important: !1,
        separator: ":"
      }
    ];
    var O, h;
    return (0, c.normalizeConfig)((0, u.defaults)({
      theme: N(M($(x.map((p) => (O = p == null ? void 0 : p.theme) !== null && O !== void 0 ? O : {})))),
      corePlugins: m(x.map((p) => p.corePlugins)),
      plugins: b(v.map((p) => (h = p == null ? void 0 : p.plugins) !== null && h !== void 0 ? h : []))
    }, ...x));
  }
})(Ze);
var vt = {}, Br = {
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
      return a;
    }
  });
  const r = /* @__PURE__ */ i(Br), t = he;
  function i(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  function a(u) {
    var n;
    const c = ((n = u == null ? void 0 : u.presets) !== null && n !== void 0 ? n : [
      r.default
    ]).slice().reverse().flatMap((s) => a(s instanceof Function ? s() : s)), l = {
      // Add experimental configs here...
      respectDefaultRingColorOpacity: {
        theme: {
          ringColor: ({ theme: s }) => ({
            DEFAULT: "#3b82f67f",
            ...s("colors")
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
    }, o = Object.keys(l).filter((s) => (0, t.flagEnabled)(u, s)).map((s) => l[s]);
    return [
      u,
      ...o,
      ...c
    ];
  }
})(vt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return a;
    }
  });
  const r = /* @__PURE__ */ i(Ze), t = /* @__PURE__ */ i(vt);
  function i(u) {
    return u && u.__esModule ? u : {
      default: u
    };
  }
  function a(...u) {
    let [, ...n] = (0, t.default)(u[0]);
    return (0, r.default)([
      ...u,
      ...n
    ]);
  }
})(Qe);
let Se = Qe;
var Ur = (Se.__esModule ? Se : { default: Se }).default;
const Ir = /* @__PURE__ */ Fr(Ur), Wr = (e) => (r) => {
  r.provide("tailwind-config", Ir(e.tailwindConfig));
};
export {
  zr as DButton,
  $e as DDimmed,
  de as DEffect,
  er as DModal,
  Or as DSelect,
  Tr as DSelectOption,
  Lr as DTextField,
  Ke as DTransitionSlide,
  Vr as components,
  Wr as declarativePlugin
};
