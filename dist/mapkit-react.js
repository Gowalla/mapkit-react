import ue, { useState as se, useRef as qe, useEffect as f, useImperativeHandle as gr, useContext as ge, useMemo as wr } from "react";
import { createPortal as _r } from "react-dom";
var xe = {}, Sr = {
  get exports() {
    return xe;
  },
  set exports(r) {
    xe = r;
  }
}, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Tr() {
  if (Ge)
    return ie;
  Ge = 1;
  var r = ue, h = Symbol.for("react.element"), E = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, P = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(x, p, b) {
    var k, w = {}, _ = null, W = null;
    b !== void 0 && (_ = "" + b), p.key !== void 0 && (_ = "" + p.key), p.ref !== void 0 && (W = p.ref);
    for (k in p)
      y.call(p, k) && !A.hasOwnProperty(k) && (w[k] = p[k]);
    if (x && x.defaultProps)
      for (k in p = x.defaultProps, p)
        w[k] === void 0 && (w[k] = p[k]);
    return { $$typeof: h, type: x, key: _, ref: W, props: w, _owner: P.current };
  }
  return ie.Fragment = E, ie.jsx = j, ie.jsxs = j, ie;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Mr() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ue, h = Symbol.for("react.element"), E = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), x = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Y = Symbol.iterator, o = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Y && e[Y] || e[o];
      return typeof t == "function" ? t : null;
    }
    var u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          n[i - 1] = arguments[i];
        $("error", e, n);
      }
    }
    function $(e, t, n) {
      {
        var i = u.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", n = n.concat([l]));
        var d = n.map(function(c) {
          return String(c);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var F = !1, v = !1, S = !1, R = !1, O = !1, B;
    B = Symbol.for("react.module.reference");
    function J(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === A || O || e === P || e === b || e === k || R || e === W || F || v || S || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === w || e.$$typeof === j || e.$$typeof === x || e.$$typeof === p || e.$$typeof === B || e.getModuleId !== void 0));
    }
    function we(e, t, n) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? n + "(" + l + ")" : n;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case E:
          return "Portal";
        case A:
          return "Profiler";
        case P:
          return "StrictMode";
        case b:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return le(t) + ".Consumer";
          case j:
            var n = e;
            return le(n._context) + ".Provider";
          case p:
            return we(e, e.render, "ForwardRef");
          case w:
            var i = e.displayName || null;
            return i !== null ? i : V(e.type) || "Memo";
          case _: {
            var l = e, d = l._payload, c = l._init;
            try {
              return V(c(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, q = 0, fe, de, pe, ve, me, he, a;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function Z() {
      {
        if (q === 0) {
          fe = console.log, de = console.info, pe = console.warn, ve = console.error, me = console.group, he = console.groupCollapsed, a = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        q++;
      }
    }
    function te() {
      {
        if (q--, q === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: fe
            }),
            info: H({}, e, {
              value: de
            }),
            warn: H({}, e, {
              value: pe
            }),
            error: H({}, e, {
              value: ve
            }),
            group: H({}, e, {
              value: me
            }),
            groupCollapsed: H({}, e, {
              value: he
            }),
            groupEnd: H({}, e, {
              value: a
            })
          });
        }
        q < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = u.ReactCurrentDispatcher, G;
    function ne(e, t, n) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            G = i && i[1] || "";
          }
        return `
` + G + e;
      }
    }
    var L = !1, T;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      T = new I();
    }
    function z(e, t) {
      if (!e || L)
        return "";
      {
        var n = T.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      L = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Ee.current, Ee.current = null, Z();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (K) {
              i = K;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (K) {
              i = K;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            i = K;
          }
          e();
        }
      } catch (K) {
        if (K && i && typeof K.stack == "string") {
          for (var s = K.stack.split(`
`), D = i.stack.split(`
`), g = s.length - 1, M = D.length - 1; g >= 1 && M >= 0 && s[g] !== D[M]; )
            M--;
          for (; g >= 1 && M >= 0; g--, M--)
            if (s[g] !== D[M]) {
              if (g !== 1 || M !== 1)
                do
                  if (g--, M--, M < 0 || s[g] !== D[M]) {
                    var N = `
` + s[g].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && T.set(e, N), N;
                  }
                while (g >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        L = !1, Ee.current = d, te(), Error.prepareStackTrace = l;
      }
      var ee = e ? e.displayName || e.name : "", Ke = ee ? ne(ee) : "";
      return typeof e == "function" && T.set(e, Ke), Ke;
    }
    function U(e, t, n) {
      return z(e, !1);
    }
    function _e(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function X(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return z(e, _e(e));
      if (typeof e == "string")
        return ne(e);
      switch (e) {
        case b:
          return ne("Suspense");
        case k:
          return ne("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return U(e.render);
          case w:
            return X(e.type, t, n);
          case _: {
            var i = e, l = i._payload, d = i._init;
            try {
              return X(d(l), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Oe = {}, Fe = u.ReactDebugCurrentFrame;
    function ye(e) {
      if (e) {
        var t = e._owner, n = X(e.type, e._source, t ? t.type : null);
        Fe.setExtraStackFrame(n);
      } else
        Fe.setExtraStackFrame(null);
    }
    function tr(e, t, n, i, l) {
      {
        var d = Function.call.bind(be);
        for (var c in e)
          if (d(e, c)) {
            var s = void 0;
            try {
              if (typeof e[c] != "function") {
                var D = Error((i || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              s = e[c](t, c, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              s = g;
            }
            s && !(s instanceof Error) && (ye(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, c, typeof s), ye(null)), s instanceof Error && !(s.message in Oe) && (Oe[s.message] = !0, ye(l), m("Failed %s type: %s", n, s.message), ye(null));
          }
      }
    }
    var nr = Array.isArray;
    function Se(e) {
      return nr(e);
    }
    function ar(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function ir(e) {
      try {
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function De(e) {
      if (ir(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Le(e);
    }
    var ae = u.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Ne, Te;
    Te = {};
    function ur(e) {
      if (be.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (be.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function cr(e, t) {
      if (typeof e.ref == "string" && ae.current && t && ae.current.stateNode !== t) {
        var n = V(ae.current.type);
        Te[n] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(ae.current.type), e.ref), Te[n] = !0);
      }
    }
    function lr(e, t) {
      {
        var n = function() {
          We || (We = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function fr(e, t) {
      {
        var n = function() {
          Ne || (Ne = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var dr = function(e, t, n, i, l, d, c) {
      var s = {
        $$typeof: h,
        type: e,
        key: t,
        ref: n,
        props: c,
        _owner: d
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function pr(e, t, n, i, l) {
      {
        var d, c = {}, s = null, D = null;
        n !== void 0 && (De(n), s = "" + n), sr(t) && (De(t.key), s = "" + t.key), ur(t) && (D = t.ref, cr(t, l));
        for (d in t)
          be.call(t, d) && !or.hasOwnProperty(d) && (c[d] = t[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            c[d] === void 0 && (c[d] = g[d]);
        }
        if (s || D) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && lr(c, M), D && fr(c, M);
        }
        return dr(e, s, D, l, i, ae.current, c);
      }
    }
    var Me = u.ReactCurrentOwner, Ye = u.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var t = e._owner, n = X(e.type, e._source, t ? t.type : null);
        Ye.setExtraStackFrame(n);
      } else
        Ye.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function Ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function $e() {
      {
        if (Me.current) {
          var e = V(Me.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function mr(e) {
      {
        var t = $e();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Be(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = mr(t);
        if (Ve[n])
          return;
        Ve[n] = !0;
        var i = "";
        e && e._owner && e._owner !== Me.current && (i = " It was passed a child from " + V(e._owner.type) + "."), Q(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, i), Q(null);
      }
    }
    function Ue(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Se(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            Ae(i) && Be(i, t);
          }
        else if (Ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = C(e);
          if (typeof l == "function" && l !== e.entries)
            for (var d = l.call(e), c; !(c = d.next()).done; )
              Ae(c.value) && Be(c.value, t);
        }
      }
    }
    function hr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === p || t.$$typeof === w))
          n = t.propTypes;
        else
          return;
        if (n) {
          var i = V(t);
          tr(n, e.props, "prop", i, e);
        } else if (t.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var l = V(t);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var i = t[n];
          if (i !== "children" && i !== "key") {
            Q(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), Q(null);
            break;
          }
        }
        e.ref !== null && (Q(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    function He(e, t, n, i, l, d) {
      {
        var c = J(e);
        if (!c) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = vr(l);
          D ? s += D : s += $e();
          var g;
          e === null ? g = "null" : Se(e) ? g = "array" : e !== void 0 && e.$$typeof === h ? (g = "<" + (V(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, s);
        }
        var M = pr(e, t, n, l, d);
        if (M == null)
          return M;
        if (c) {
          var N = t.children;
          if (N !== void 0)
            if (i)
              if (Se(N)) {
                for (var ee = 0; ee < N.length; ee++)
                  Ue(N[ee], e);
                Object.freeze && Object.freeze(N);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(N, e);
        }
        return e === y ? kr(M) : hr(M), M;
      }
    }
    function Er(e, t, n) {
      return He(e, t, n, !0);
    }
    function br(e, t, n) {
      return He(e, t, n, !1);
    }
    var yr = br, Rr = Er;
    oe.Fragment = y, oe.jsx = yr, oe.jsxs = Rr;
  }()), oe;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Tr() : r.exports = Mr();
})(Sr);
const je = xe.jsx, ce = ue.createContext(null);
let Re = null;
function Pr(r) {
  return Re !== null || (Re = new Promise((h) => {
    const E = document.createElement("script");
    E.addEventListener("load", () => {
      mapkit.init({
        authorizationCallback: (y) => y(r)
      }), h();
    }, { once: !0 }), E.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js", E.crossOrigin = "anonymous", document.head.appendChild(E);
  })), Re;
}
var Xe = /* @__PURE__ */ ((r) => (r[r.Light = 0] = "Light", r[r.Dark = 1] = "Dark", r))(Xe || {});
function Ar(r) {
  switch (r) {
    case 1:
      return mapkit.Map.ColorSchemes.Dark;
    case 0:
      return mapkit.Map.ColorSchemes.Light;
    default:
      throw new RangeError("Invalid color scheme");
  }
}
var Qe = /* @__PURE__ */ ((r) => (r[r.Standard = 0] = "Standard", r[r.MutedStandard = 1] = "MutedStandard", r[r.Hybrid = 2] = "Hybrid", r[r.Satellite = 3] = "Satellite", r))(Qe || {});
function jr(r) {
  switch (r) {
    case 0:
      return mapkit.Map.MapTypes.Standard;
    case 1:
      return mapkit.Map.MapTypes.MutedStandard;
    case 2:
      return mapkit.Map.MapTypes.Hybrid;
    case 3:
      return mapkit.Map.MapTypes.Satellite;
    default:
      throw new RangeError("Invalid map type");
  }
}
function xr(r) {
  switch (r) {
    case mapkit.Map.MapTypes.Standard:
      return 0;
    case mapkit.Map.MapTypes.MutedStandard:
      return 1;
    case mapkit.Map.MapTypes.Hybrid:
      return 2;
    case mapkit.Map.MapTypes.Satellite:
      return 3;
    default:
      throw new RangeError("Invalid map type");
  }
}
var er = /* @__PURE__ */ ((r) => (r[r.Adaptive = 0] = "Adaptive", r[r.Metric = 1] = "Metric", r[r.Imperial = 2] = "Imperial", r))(er || {});
function Cr(r) {
  switch (r) {
    case 0:
      return mapkit.Map.Distances.Adaptive;
    case 1:
      return mapkit.Map.Distances.Metric;
    case 2:
      return mapkit.Map.Distances.Imperial;
    default:
      throw new RangeError("Invalid distances value");
  }
}
var rr = /* @__PURE__ */ ((r) => (r[r.LandCover = 0] = "LandCover", r[r.PointsOfInterest = 1] = "PointsOfInterest", r[r.None = 2] = "None", r))(rr || {});
function Or(r) {
  switch (r) {
    case 0:
      return mapkit.Map.LoadPriorities.LandCover;
    case 1:
      return mapkit.Map.LoadPriorities.PointsOfInterest;
    case 2:
      return mapkit.Map.LoadPriorities.None;
    default:
      throw new RangeError("Invalid load priority");
  }
}
var Ce = /* @__PURE__ */ ((r) => (r[r.Hidden = 0] = "Hidden", r[r.Visible = 1] = "Visible", r[r.Adaptive = 2] = "Adaptive", r))(Ce || {});
function Je(r) {
  switch (r) {
    case 2:
      return mapkit.FeatureVisibility.Adaptive;
    case 1:
      return mapkit.FeatureVisibility.Visible;
    case 0:
      return mapkit.FeatureVisibility.Hidden;
    default:
      throw new RangeError("Invalid feature visibility");
  }
}
var Fr = /* @__PURE__ */ ((r) => (r[r.Airport = 0] = "Airport", r[r.AmusementPark = 1] = "AmusementPark", r[r.Aquarium = 2] = "Aquarium", r[r.ATM = 3] = "ATM", r[r.Bakery = 4] = "Bakery", r[r.Bank = 5] = "Bank", r[r.Beach = 6] = "Beach", r[r.Brewery = 7] = "Brewery", r[r.Cafe = 8] = "Cafe", r[r.Campground = 9] = "Campground", r[r.CarRental = 10] = "CarRental", r[r.EVCharger = 11] = "EVCharger", r[r.FireStation = 12] = "FireStation", r[r.FitnessCenter = 13] = "FitnessCenter", r[r.FoodMarket = 14] = "FoodMarket", r[r.GasStation = 15] = "GasStation", r[r.Hospital = 16] = "Hospital", r[r.Hotel = 17] = "Hotel", r[r.Laundry = 18] = "Laundry", r[r.Library = 19] = "Library", r[r.Marina = 20] = "Marina", r[r.MovieTheater = 21] = "MovieTheater", r[r.Museum = 22] = "Museum", r[r.NationalPark = 23] = "NationalPark", r[r.Nightlife = 24] = "Nightlife", r[r.Park = 25] = "Park", r[r.Parking = 26] = "Parking", r[r.Pharmacy = 27] = "Pharmacy", r[r.Police = 28] = "Police", r[r.PostOffice = 29] = "PostOffice", r[r.PublicTransport = 30] = "PublicTransport", r[r.Restaurant = 31] = "Restaurant", r[r.Restroom = 32] = "Restroom", r[r.School = 33] = "School", r[r.Stadium = 34] = "Stadium", r[r.Store = 35] = "Store", r[r.Theater = 36] = "Theater", r[r.University = 37] = "University", r[r.Winery = 38] = "Winery", r[r.Zoo = 39] = "Zoo", r))(Fr || {});
function Ze(r) {
  switch (r) {
    case 0:
      return mapkit.PointOfInterestCategory.Airport;
    case 1:
      return mapkit.PointOfInterestCategory.AmusementPark;
    case 2:
      return mapkit.PointOfInterestCategory.Aquarium;
    case 3:
      return mapkit.PointOfInterestCategory.ATM;
    case 4:
      return mapkit.PointOfInterestCategory.Bakery;
    case 5:
      return mapkit.PointOfInterestCategory.Bank;
    case 6:
      return mapkit.PointOfInterestCategory.Beach;
    case 7:
      return mapkit.PointOfInterestCategory.Brewery;
    case 8:
      return mapkit.PointOfInterestCategory.Cafe;
    case 9:
      return mapkit.PointOfInterestCategory.Campground;
    case 10:
      return mapkit.PointOfInterestCategory.CarRental;
    case 11:
      return mapkit.PointOfInterestCategory.EVCharger;
    case 12:
      return mapkit.PointOfInterestCategory.FireStation;
    case 13:
      return mapkit.PointOfInterestCategory.FitnessCenter;
    case 14:
      return mapkit.PointOfInterestCategory.FoodMarket;
    case 15:
      return mapkit.PointOfInterestCategory.GasStation;
    case 16:
      return mapkit.PointOfInterestCategory.Hospital;
    case 17:
      return mapkit.PointOfInterestCategory.Hotel;
    case 18:
      return mapkit.PointOfInterestCategory.Laundry;
    case 19:
      return mapkit.PointOfInterestCategory.Library;
    case 20:
      return mapkit.PointOfInterestCategory.Marina;
    case 21:
      return mapkit.PointOfInterestCategory.MovieTheater;
    case 22:
      return mapkit.PointOfInterestCategory.Museum;
    case 23:
      return mapkit.PointOfInterestCategory.NationalPark;
    case 24:
      return mapkit.PointOfInterestCategory.Nightlife;
    case 25:
      return mapkit.PointOfInterestCategory.Park;
    case 26:
      return mapkit.PointOfInterestCategory.Parking;
    case 27:
      return mapkit.PointOfInterestCategory.Pharmacy;
    case 28:
      return mapkit.PointOfInterestCategory.Police;
    case 29:
      return mapkit.PointOfInterestCategory.PostOffice;
    case 30:
      return mapkit.PointOfInterestCategory.PublicTransport;
    case 31:
      return mapkit.PointOfInterestCategory.Restaurant;
    case 32:
      return mapkit.PointOfInterestCategory.Restroom;
    case 33:
      return mapkit.PointOfInterestCategory.School;
    case 34:
      return mapkit.PointOfInterestCategory.Stadium;
    case 35:
      return mapkit.PointOfInterestCategory.Store;
    case 36:
      return mapkit.PointOfInterestCategory.Theater;
    case 37:
      return mapkit.PointOfInterestCategory.University;
    case 38:
      return mapkit.PointOfInterestCategory.Winery;
    case 39:
      return mapkit.PointOfInterestCategory.Zoo;
    default:
      throw new RangeError("Invalid point of interest category");
  }
}
function Ie(r) {
  return new mapkit.CoordinateRegion(
    new mapkit.Coordinate(r.centerLatitude, r.centerLongitude),
    new mapkit.CoordinateSpan(r.latitudeDelta, r.longitudeDelta)
  );
}
function re(r, h, E, y) {
  f(() => {
    if (!r || !E)
      return;
    const P = (A) => {
      E(y(A));
    };
    return r.addEventListener(h, P), () => r.removeEventListener(h, P);
  }, [r, E]);
}
const Wr = ue.forwardRef(({
  children: r = void 0,
  load: h,
  token: E,
  colorScheme: y = Xe.Light,
  mapType: P = Qe.Standard,
  distances: A = er.Adaptive,
  loadPriority: j = rr.LandCover,
  isRotationEnabled: x = !0,
  isScrollEnabled: p = !0,
  isZoomEnabled: b = !0,
  showsMapTypeControl: k = !0,
  showsZoomControl: w = !0,
  showsUserLocationControl: _ = !1,
  showsPointsOfInterest: W = !0,
  showsUserLocation: Y = !1,
  tracksUserLocation: o = !1,
  allowWheelToZoom: C = !1,
  includedPOICategories: u = void 0,
  excludedPOICategories: m = void 0,
  paddingTop: $ = 0,
  paddingRight: F = 0,
  paddingBottom: v = 0,
  paddingLeft: S = 0,
  initialRegion: R = void 0,
  cameraBoundary: O = void 0,
  minCameraDistance: B = 0,
  maxCameraDistance: J = 1 / 0,
  onMapTypeChange: we = void 0,
  onSingleTap: le = void 0,
  onDoubleTap: V = void 0,
  onLongPress: H = void 0,
  onUserLocationChange: q = void 0,
  onUserLocationError: fe = void 0,
  onClick: de = void 0,
  onMouseMove: pe = void 0,
  onMouseDown: ve = void 0,
  onMouseUp: me = void 0
}, he) => {
  const [a, ke] = se(null), Z = qe(null), te = qe(!1);
  f(() => ((typeof h == "function" ? h : Pr)(E).then(() => {
    if (te.current)
      return;
    const T = R ? { region: Ie(R) } : {};
    ke(new mapkit.Map(Z.current, T)), te.current = !0;
  }), () => {
    a && (a.destroy(), te.current = !1);
  }), []), gr(he, () => a, [a]), f(() => {
    a && (a.colorScheme = Ar(y));
  }, [a, y]), f(() => {
    a && (a.mapType = jr(P));
  }, [a, P]), f(() => {
    a && (a.distances = Cr(A));
  }, [a, A]), f(() => {
    a && (a.loadPriority = Or(j));
  }, [a, j]), Object.entries({
    isRotationEnabled: x,
    isScrollEnabled: p,
    isZoomEnabled: b,
    showsMapTypeControl: k,
    showsZoomControl: w,
    showsUserLocationControl: _,
    showsPointsOfInterest: W,
    showsUserLocation: Y,
    tracksUserLocation: o
  }).forEach(([L, T]) => {
    f(() => {
      a && (a[L] = T);
    }, [a, T]);
  }), f(() => {
    if (a)
      try {
        a._allowWheelToZoom = C;
      } catch {
      }
  }, [a, C]), f(() => {
    a && (a.padding = new mapkit.Padding($, F, v, S));
  }, [a, $, F, v, S]), f(() => {
    a && (a.cameraBoundary = O ? Ie(O) : null);
  }, [a, O]), f(() => {
    a && (a.cameraZoomRange = new mapkit.CameraZoomRange(B, J));
  }, [a, B, J]), f(() => {
    if (a) {
      if (u && m)
        throw new Error("Can’t specify both includedPOICategories and excludedPOICategories.");
      u ? a.pointOfInterestFilter = mapkit.PointOfInterestFilter.including(
        u.map(Ze)
      ) : m ? a.pointOfInterestFilter = mapkit.PointOfInterestFilter.excluding(
        m.map(Ze)
      ) : a.pointOfInterestFilter = null;
    }
  }, [a, u, m]), re(a, "map-type-change", we, () => xr(a.mapType));
  const G = ({ domEvents: L, pointOnPage: T }) => ({
    domEvents: L,
    pointOnPage: T,
    toCoordinates: () => a.convertPointOnPageToCoordinate(T)
  });
  return re(a, "single-tap", le, G), re(a, "double-tap", V, G), re(a, "long-press", H, G), re(a, "user-location-change", q, ({ coordinate: { latitude: L, longitude: T }, timestamp: I, floorLevel: z }) => ({
    coordinate: { latitude: L, longitude: T },
    timestamp: I,
    floorLevel: z
  })), re(a, "user-location-error", fe, ({ code: L, message: T }) => ({ code: L, message: T })), [
    { name: "click", handler: de },
    { name: "mousemove", handler: pe },
    { name: "mousedown", handler: ve },
    { name: "mouseup", handler: me }
  ].forEach(({ name: L, handler: T }) => {
    f(() => {
      var z;
      if (!a || !T)
        return;
      const I = (U) => {
        T({
          domEvents: [U],
          pointOnPage: { x: U.pageX, y: U.pageY },
          toCoordinates() {
            const { latitude: _e, longitude: X } = a.convertPointOnPageToCoordinate(new DOMPoint(U.pageX, U.pageY));
            return { latitude: _e, longitude: X };
          }
        });
      };
      return (z = Z.current) == null || z.addEventListener(L, I), () => {
        var U;
        return (U = Z.current) == null ? void 0 : U.removeEventListener(L, I);
      };
    }, [a, T]);
  }), /* @__PURE__ */ je(ue.StrictMode, { children: /* @__PURE__ */ je("div", { style: { width: "100%", height: "100%" }, ref: Z, children: /* @__PURE__ */ je(ce.Provider, { value: a, children: r }) }) });
});
function Nr({
  latitude: r,
  longitude: h,
  title: E = "",
  subtitle: y = "",
  accessibilityLabel: P = null,
  subtitleVisibility: A = Ce.Adaptive,
  titleVisibility: j = Ce.Adaptive,
  color: x = "#ff5b40",
  glyphColor: p = "white",
  glyphText: b = "",
  glyphImage: k = null,
  selectedGlyphImage: w = void 0,
  selected: _ = void 0,
  onSelect: W = void 0,
  onDeselect: Y = void 0
}) {
  const [o, C] = se(null), u = ge(ce);
  return f(() => {
    if (u === null)
      return;
    const F = new mapkit.MarkerAnnotation(
      new mapkit.Coordinate(r, h)
    );
    return u.addAnnotation(F), C(F), () => {
      u.removeAnnotation(F);
    };
  }, [u, r, h]), f(() => {
    o && (o.subtitleVisibility = Je(A));
  }, [o, A]), f(() => {
    o && (o.titleVisibility = Je(j));
  }, [o, j]), Object.entries({
    title: E,
    subtitle: y,
    accessibilityLabel: P,
    color: x,
    glyphColor: p,
    glyphText: b,
    glyphImage: k,
    selectedGlyphImage: w,
    selected: _
  }).forEach(([F, v]) => {
    f(() => {
      o && (o[F] = v);
    }, [o, v]);
  }), [
    { name: "select", handler: W },
    { name: "deselect", handler: Y }
  ].forEach(({ name: F, handler: v }) => {
    f(() => {
      if (!o || !v)
        return;
      const S = () => v();
      return o.addEventListener(F, S), () => o.removeEventListener(F, S);
    }, [o, v]);
  }), null;
}
function Yr({
  latitude: r,
  longitude: h,
  title: E = "",
  subtitle: y = "",
  accessibilityLabel: P = null,
  selected: A = void 0,
  onSelect: j = void 0,
  onDeselect: x = void 0,
  children: p
}) {
  const [b, k] = se(null), w = wr(() => document.createElement("div"), []), _ = ge(ce);
  return f(() => {
    if (_ === null)
      return;
    const o = new mapkit.Annotation(
      new mapkit.Coordinate(r, h),
      () => w
    );
    return _.addAnnotation(o), k(o), () => {
      _.removeAnnotation(o);
    };
  }, [_, r, h]), Object.entries({
    title: E,
    subtitle: y,
    accessibilityLabel: P,
    selected: A
  }).forEach(([o, C]) => {
    f(() => {
      b && (b[o] = C);
    }, [b, C]);
  }), [
    { name: "select", handler: j },
    { name: "deselect", handler: x }
  ].forEach(({ name: o, handler: C }) => {
    f(() => {
      if (!b || !C)
        return;
      const u = () => C();
      return b.addEventListener(o, u), () => b.removeEventListener(o, u);
    }, [b, C]);
  }), _r(p, w);
}
function $r({
  points: r,
  visible: h = !0,
  enabled: E = !0,
  selected: y = !1,
  onSelect: P = void 0,
  onDeselect: A = void 0,
  lineCap: j = "round",
  lineDash: x = [],
  lineDashOffset: p = 0,
  lineJoin: b = "round",
  lineWidth: k = 1,
  strokeColor: w = "rgb(0, 122, 255)",
  strokeOpacity: _ = 1,
  strokeStart: W = 0,
  strokeEnd: Y = 1
}) {
  const [o, C] = se(null), u = ge(ce);
  return f(() => {
    if (u === null)
      return;
    const v = new mapkit.PolylineOverlay([]);
    return u.addOverlay(v), C(v), () => {
      u.removeOverlay(v);
    };
  }, [u]), f(() => {
    o !== null && (o.points = r.map(({ latitude: v, longitude: S }) => new mapkit.Coordinate(v, S)));
  }, [o, r]), Object.entries({ visible: h, enabled: E, selected: y }).forEach(([v, S]) => {
    f(() => {
      o && (o[v] = S);
    }, [o, S]);
  }), Object.entries({
    lineCap: j,
    lineDash: x,
    lineDashOffset: p,
    lineJoin: b,
    lineWidth: k,
    strokeColor: w,
    strokeOpacity: _,
    strokeStart: W,
    strokeEnd: Y
  }).forEach(([v, S]) => {
    f(() => {
      o && (o.style[v] = S);
    }, [o, S]);
  }), [
    { name: "select", handler: P },
    { name: "deselect", handler: A }
  ].forEach(({ name: v, handler: S }) => {
    f(() => {
      if (!o || !S)
        return;
      const R = () => S();
      return o.addEventListener(v, R), () => o.removeEventListener(v, R);
    }, [o, S]);
  }), null;
}
function Vr({
  points: r,
  visible: h = !0,
  enabled: E = !0,
  selected: y = !1,
  onSelect: P = void 0,
  onDeselect: A = void 0,
  lineDash: j = [],
  lineDashOffset: x = 0,
  lineJoin: p = "round",
  lineWidth: b = 1,
  strokeColor: k = "rgb(0, 122, 255)",
  strokeOpacity: w = 1,
  strokeStart: _ = 0,
  strokeEnd: W = 1,
  fillColor: Y = "rgb(0, 122, 255)",
  fillOpacity: o = 0.1,
  fillRule: C = "nonzero"
}) {
  const [u, m] = se(null), $ = ge(ce);
  return f(() => {
    if ($ === null)
      return;
    const R = new mapkit.PolygonOverlay([]);
    return $.addOverlay(R), m(R), () => {
      $.removeOverlay(R);
    };
  }, [$]), f(() => {
    if (u === null)
      return;
    if (!r || r.length === 0) {
      u.points = [];
      return;
    }
    const R = (O) => O.map(
      ({ latitude: B, longitude: J }) => new mapkit.Coordinate(B, J)
    );
    u.points = Array.isArray(r[0]) ? r.map(R) : R(r);
  }, [u, r]), Object.entries({ visible: h, enabled: E, selected: y }).forEach(([R, O]) => {
    f(() => {
      u && (u[R] = O);
    }, [u, O]);
  }), Object.entries({
    lineDash: j,
    lineDashOffset: x,
    lineJoin: p,
    lineWidth: b,
    strokeColor: k,
    strokeOpacity: w,
    strokeStart: _,
    strokeEnd: W,
    fillColor: Y,
    fillOpacity: o,
    fillRule: C
  }).forEach(([R, O]) => {
    f(() => {
      u && (u.style[R] = O);
    }, [u, O]);
  }), [
    { name: "select", handler: P },
    { name: "deselect", handler: A }
  ].forEach(({ name: R, handler: O }) => {
    f(() => {
      if (!u || !O)
        return;
      const B = () => O();
      return u.addEventListener(R, B), () => u.removeEventListener(R, B);
    }, [u, O]);
  }), null;
}
export {
  Yr as Annotation,
  Xe as ColorScheme,
  er as Distances,
  Ce as FeatureVisibility,
  rr as LoadPriority,
  Wr as Map,
  Qe as MapType,
  Nr as Marker,
  Fr as PointOfInterestCategory,
  Vr as Polygon,
  $r as Polyline
};
