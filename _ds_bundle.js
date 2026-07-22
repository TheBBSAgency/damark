/* @ds-bundle: {"format":4,"namespace":"DamarkManufacturingDesignSystem_70152b","components":[{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"SpecList","sourcePath":"components/content/SpecList.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionEyebrow","sourcePath":"components/core/SectionEyebrow.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/content/PullQuote.jsx":"02db5527ef22","components/content/SpecList.jsx":"0bdb0a3396b8","components/core/Badge.jsx":"3b8a7e3e585e","components/core/Button.jsx":"f7868fb14788","components/core/Card.jsx":"faef42002ac1","components/core/SectionEyebrow.jsx":"9ef11e290b3d","components/core/Stat.jsx":"a4db82039368","components/forms/Input.jsx":"2f9ea093ede6","components/forms/Textarea.jsx":"e4f0db5e9a76","ui_kits/website/AboutScreen.jsx":"e52a5de5dc7d","ui_kits/website/CareersScreen.jsx":"82bc5ee6c37c","ui_kits/website/ContactScreen.jsx":"d4a7aa93422b","ui_kits/website/HomeScreen.jsx":"62350c40478d","ui_kits/website/ServiceDetailScreen.jsx":"0cb49615afcd","ui_kits/website/ServicesScreen.jsx":"133780357a53","ui_kits/website/SiteFooter.jsx":"a1d212f979a8","ui_kits/website/SiteHeader.jsx":"e10b6126d53f","ui_kits/website/image-slot.js":"9309434cb09c","ui_kits/website/serviceData.js":"8562842b0110","ui_kits/website/servicesData.js":"f659d3fe3ad4","ui_kits/website/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DamarkManufacturingDesignSystem_70152b = window.DamarkManufacturingDesignSystem_70152b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/PullQuote.jsx
try { (() => {
/**
 * Damark PullQuote — founder/owner quotes are central to the brand.
 * Plain, no flourish. Big condensed text, amber rule, attribution.
 * tone: light (on white) | dark (on steel-900) | brand (on blue)
 */
function PullQuote({
  children,
  name,
  title,
  tone = 'light',
  size = 'lg'
}) {
  const tones = {
    light: {
      fg: 'var(--text-strong)',
      sub: 'var(--text-muted)',
      bg: 'transparent'
    },
    dark: {
      fg: '#fff',
      sub: 'var(--steel-300)',
      bg: 'var(--steel-900)'
    },
    brand: {
      fg: '#fff',
      sub: 'var(--blue-100)',
      bg: 'var(--blue-700)'
    }
  };
  const t = tones[tone];
  const fontSize = size === 'lg' ? 'var(--display-sm)' : 'var(--text-lg)';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: t.bg,
      padding: t.bg === 'transparent' ? 0 : 'var(--space-6)',
      borderLeft: `3px solid var(--amber-500)`,
      paddingLeft: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize,
      lineHeight: 1.12,
      letterSpacing: '-0.01em',
      color: t.fg
    }
  }, typeof children === 'string' ? `“${children}”` : children), (name || title) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: t.fg
    }
  }, name), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: t.sub
    }
  }, title)));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/SpecList.jsx
try { (() => {
/**
 * Damark SpecList — mono key/value rows for capabilities, equipment
 * specs, tolerances. Reads like a setup sheet. Pass items=[{k,v}].
 */
function SpecList({
  items = [],
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: '#fff'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      background: 'var(--steel-900)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600,
      fontSize: 'var(--text-sm)'
    }
  }, title), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '16px',
      padding: '11px 16px',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, it.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-strong)',
      textAlign: 'right'
    }
  }, it.v))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Damark Badge / Status chip.
 * tone: neutral | brand | pass | fail | hold | iso
 * Square-ish by default; pill via shape="pill".
 * Use for shop-floor statuses (IN SPEC, ON HOLD), industries, ISO marks.
 */
function Badge({
  children,
  tone = 'neutral',
  shape = 'square',
  size = 'md'
}) {
  const tones = {
    neutral: {
      bg: 'var(--steel-100)',
      fg: 'var(--steel-700)',
      bd: 'var(--steel-200)'
    },
    brand: {
      bg: 'var(--blue-50)',
      fg: 'var(--blue-700)',
      bd: 'var(--blue-200)'
    },
    pass: {
      bg: 'var(--green-50)',
      fg: 'var(--green-600)',
      bd: '#bfe3cd'
    },
    fail: {
      bg: 'var(--red-50)',
      fg: 'var(--red-600)',
      bd: '#f1c4bd'
    },
    hold: {
      bg: 'var(--amber-50)',
      fg: 'var(--amber-600)',
      bd: '#f5dca0'
    },
    iso: {
      bg: 'var(--steel-900)',
      fg: '#fff',
      bd: 'var(--steel-900)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const sizes = {
    sm: {
      fontSize: '11px',
      padding: '2px 8px'
    },
    md: {
      fontSize: '12px',
      padding: '4px 10px'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: sizes[size].fontSize,
      padding: sizes[size].padding,
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-xs)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Damark Button — sturdy, squared, plain-spoken.
 * Variants: primary (blue), secondary (outline steel), ghost, danger.
 * Primary uses an optional amber underline accent on hover, like a floor marking.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  block = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const sizes = {
    sm: {
      fontSize: 'var(--text-sm)',
      padding: '7px 14px',
      gap: '6px',
      minHeight: '34px'
    },
    md: {
      fontSize: 'var(--text-base)',
      padding: '10px 20px',
      gap: '8px',
      minHeight: '44px'
    },
    lg: {
      fontSize: 'var(--text-md)',
      padding: '14px 28px',
      gap: '10px',
      minHeight: '52px'
    }
  };
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    fontSize: sizes[size].fontSize,
    padding: sizes[size].padding,
    minHeight: sizes[size].minHeight,
    border: '2px solid transparent',
    borderRadius: 'var(--radius-xs)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background 120ms ease, border-color 120ms ease, transform 60ms ease, color 120ms ease',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--blue-700)' : 'var(--blue-600)',
      color: 'var(--text-on-brand)',
      borderColor: hover && !disabled ? 'var(--blue-700)' : 'var(--blue-600)'
    },
    secondary: {
      background: hover && !disabled ? 'rgba(26,43,206,0.08)' : 'transparent',
      color: 'var(--blue-600)',
      borderColor: hover && !disabled ? 'var(--blue-600)' : 'var(--steel-400)'
    },
    ghost: {
      background: hover && !disabled ? 'rgba(100,113,131,0.14)' : 'transparent',
      color: 'var(--text-brand)',
      borderColor: 'transparent'
    },
    danger: {
      background: hover && !disabled ? 'var(--red-600)' : 'var(--red-500)',
      color: '#fff',
      borderColor: hover && !disabled ? 'var(--red-600)' : 'var(--red-500)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant]
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Damark Card — a plain, sturdy container. Hairline border, square-ish
 * corners, low shadow. Optional top accent rule (amber or blue).
 * Set interactive for a subtle hover lift (use for clickable service cards).
 */
function Card({
  children,
  accent = 'none',
  interactive = false,
  padding = 'var(--space-5)',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const accents = {
    none: null,
    amber: 'var(--amber-500)',
    blue: 'var(--blue-600)',
    steel: 'var(--steel-400)'
  };
  const topRule = accents[accent];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderTop: topRule ? `3px solid ${topRule}` : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow 140ms ease, transform 140ms ease',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionEyebrow.jsx
try { (() => {
/**
 * Damark SectionEyebrow — uppercase condensed label with a leading
 * amber tick. The standard kicker above section headings sitewide.
 */
function SectionEyebrow({
  children,
  color = 'var(--text-brand)',
  tick = true
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color
    }
  }, tick && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '24px',
      height: '3px',
      background: 'var(--amber-500)'
    }
  }), children);
}
Object.assign(__ds_scope, { SectionEyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionEyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/**
 * Damark Stat — a big mono/condensed figure with a label.
 * Used for the plain proof points Damark leans on: "30 YEARS",
 * "15,000 SQ FT", "NO MINIMUM". An optional amber tick sits on top.
 */
function Stat({
  value,
  label,
  sub = null,
  accent = true,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, accent && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '32px',
      height: '3px',
      background: 'var(--amber-500)',
      alignSelf: align === 'center' ? 'center' : 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      textTransform: 'uppercase',
      fontSize: 'var(--display-md)',
      lineHeight: 0.95,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Damark Input — squared field with a clear label. Steel border,
 * blue focus ring. Used in the RFQ / contact forms.
 */
function Input({
  label,
  hint,
  error,
  id,
  required = false,
  type = 'text',
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-500)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: '#fff',
      padding: '11px 14px',
      minHeight: '44px',
      border: `1px solid ${error ? 'var(--red-500)' : focus ? 'var(--blue-600)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-xs)',
      boxShadow: focus ? '0 0 0 3px var(--ring-color)' : 'none',
      outline: 'none',
      transition: 'border-color 120ms, box-shadow 120ms'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--red-600)'
    }
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Damark Textarea — multi-line field for "describe what you need".
 * Matches Input styling.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  required = false,
  rows = 5,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || `ta-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-500)',
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: '#fff',
      resize: 'vertical',
      padding: '11px 14px',
      border: `1px solid ${error ? 'var(--red-500)' : focus ? 'var(--blue-600)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-xs)',
      boxShadow: focus ? '0 0 0 3px var(--ring-color)' : 'none',
      outline: 'none',
      transition: 'border-color 120ms, box-shadow 120ms'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--red-600)'
    }
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
/* global React */
const DS_A = window.DamarkManufacturingDesignSystem_70152b;
function AboutScreen({
  go
}) {
  const {
    Button,
    PullQuote,
    Stat,
    SectionEyebrow,
    Card,
    Badge
  } = DS_A;
  const wrap = {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 32px'
  };
  const operate = [['We make the first part right', 'We make the first part and make sure it\u2019s right before we go further. No surprises downstream.'], ['We flag print problems early', 'If we see something in a print that\u2019s going to cause a problem, we say so — before it costs you time or money.'], ['We tell you if we can\u2019t do it', 'If we can\u2019t do a job, we\u2019ll tell you, and often point you to someone who can.'], ['You get a person', 'If you call us, you get a person. Not a menu. Not a voicemail system. A person.'], ['We show up after hours', 'If something goes wrong after hours and you need help, call us.']];
  const choose = [['We do the work other shops won\u2019t', 'Small batches, tight tolerances, odd materials, one-off parts. Bring it. We\u2019ve machined everything from components for agricultural equipment to housings for lighting systems on the President\u2019s helicopter.'], ['We treat the relationship like it matters', 'Because it does. A customer who trusts you enough to call on a Sunday afternoon when something\u2019s down isn\u2019t just a job number. We know that, and we act like it.'], ['We have the equipment to back it up', 'A 15,000 sq ft facility, a full complement of CNC mills and lathes including horizontal machining centers with pallet changers, in-house SolidWorks engineering, and inspection equipment most shops our size don\u2019t carry.'], ['We\u2019re ISO compliant', 'Our quality system supports full process documentation: in-process routings, machine setup sheets, calibrated gauges, and first sample inspection reports — so your parts meet the standards your customers require.']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--steel-900)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/welding.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.26
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(14,18,54,0.94), rgba(14,18,54,0.6))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      padding: '76px 32px 68px'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    color: "var(--chrome-cyan)"
  }, "About Damark"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '14px 0 14px',
      fontSize: 'clamp(32px,4.4vw,56px)',
      maxWidth: '20ch'
    }
  }, "Thirty Years of Honest Work"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--steel-200)',
      maxWidth: '58ch'
    }
  }, "Family-owned since 1995. No sales team, no runaround \u2014 just straight talk and work done right. Here's how we operate, and why our customers keep coming back."))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '80px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.95fr 1.05fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "How We Operate"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 18px'
    }
  }, "The Work Has to Be Right. The Communication Has to Be Straight."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17
    }
  }, "Damark has never had a sales team. Every customer the shop has ever had came through a referral, a relationship, or a reputation that preceded the first phone call. That's not an accident. It's a choice."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17
    }
  }, "And when something goes sideways, you work through it. You don't point fingers and invoice your way out of it. That's been true since 1995. It's still true today."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    name: "Dave Buerger",
    title: "Founder",
    tone: "dark"
  }, "We don't have a salesman. Our reputation and our quality. That's our sales."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, "What that looks like in practice"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, operate.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 18,
      padding: '18px 0',
      borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--blue-600)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '5px 0 4px',
      fontSize: 19
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      color: 'var(--text-muted)'
    }
  }, d)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-muted)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '56ch',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Why Clients Choose Us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 16px'
    }
  }, "Why Clients Keep Coming Back"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17.5
    }
  }, "Damark's longest-running customers have been ordering parts for decades. Some of them have moved companies, changed industries, and brought Damark with them to the next place.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 18
    }
  }, choose.map(([t, d], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    accent: "blue"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 8px',
      fontSize: 22
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      color: 'var(--text-muted)'
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '48px 32px',
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1995",
    label: "Founded"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "15,000",
    label: "Sq Ft, Lomira WI"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "30 YRS",
    label: "In Business"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "WORD OF",
    label: "Mouth Growth"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "ISO",
    label: "Compliant"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--blue-600)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '80px 32px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, {
    color: "var(--chrome-cyan)"
  }, "How Damark Started"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      margin: '14px 0 18px'
    }
  }, "He Went and Did It For Himself"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--blue-100)'
    }
  }, "In 1995, Dave Buerger started Damark with his wife Vicki, doing fabrication and repair work for manufacturers around Wisconsin. Everybody was betting against him. He didn't much care. The work was good. The reputation spread. In 2003, Damark relocated to its current 15,000 sq ft facility in Lomira \u2014 a building Dave and Vicki largely built out themselves. The customer list kept growing, almost entirely through word of mouth."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: '#fff',
      fontWeight: 600
    }
  }, "Thirty years later, not much about that philosophy has changed.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 116,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--blue-800)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/hq-lomira.jpg",
    alt: "Damark HQ, Lomira WI",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement(PullQuote, {
    name: "Dave Buerger",
    title: "Founder",
    tone: "brand"
  }, "Everybody was betting against me. They were taking bets on how soon I'd be out.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/precision-machining.jpg",
    alt: "On the Damark floor",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "The Next Generation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 18px'
    }
  }, "Brock Takes the Wheel"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17
    }
  }, "On December 31, 2025, Brock Buerger \u2014 Dave's son \u2014 took over ownership of Damark alongside his wife. The company passed from Dave to Brock, but it didn't pass to an outsider."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17
    }
  }, "Brock started on the saw in 2011, learned to square up parts on the manual mills, picked up SolidWorks and CNC programming, and worked his way through the whole shop over more than a decade. Dave made sure the last things he handed off were the ones that matter most: quoting, material ordering, and the judgment to look at a job and see how one decision ripples through the whole operation. His wife handles the office side \u2014 scheduling, paperwork, financials \u2014 the same foundation Vicki built from day one."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "The name changed hands. The structure, the standards, and the work did not."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    name: "Brock Buerger",
    title: "Owner",
    tone: "dark"
  }, "I slowly just learned my way along the whole time. I used to just saw, then I learned to square up parts on the manual mills, and then I just progressed from there."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '80px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 14px'
    }
  }, "Work With a Shop That Stands Behind It"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      maxWidth: '52ch',
      margin: '0 auto 26px'
    }
  }, "Send us your print or describe what you need. You'll get a real person and a straight answer."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Get a Quote \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('services')
  }, "See What We Do"))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CareersScreen.jsx
try { (() => {
/* global React */
const DS_CR = window.DamarkManufacturingDesignSystem_70152b;
function CareersScreen({
  go
}) {
  const {
    Button,
    Card,
    Badge,
    Input,
    Textarea,
    PullQuote,
    SectionEyebrow
  } = DS_CR;
  const [sent, setSent] = React.useState(false);
  const wrap = {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 32px'
  };
  const why = [['Hours that give you your day back', 'Monday through Friday, 6:00 AM to 2:30 PM. You\u2019re done before most people are thinking about leaving. Go fish. Coach your kid\u2019s game. Actually use the rest of your day.'], ['A team that works together', 'Everybody here knows each other. When someone needs help, they get it. No politics, no cliques, no one looking over your shoulder. You come in, do good work, and you\u2019re treated like an adult.'], ['Work that keeps you sharp', 'Small batch, production runs, prototypes, fixtures, and more. You won\u2019t be doing the same operation on the same part for the next ten years. If you like solving problems, this is the right kind of shop.'], ['Room to grow', 'We\u2019ve taken people with limited experience and developed them into solid machinists. If you\u2019re willing to learn and you show up ready to work, we\u2019ll invest in you.']];
  const benefits = ['401(k) with 3% company match', 'Health insurance contribution', 'Mon–Fri schedule — no weekends, no rotating shifts', 'Consistent 6:00 AM – 2:30 PM hours', 'Stable, family-owned company, 30 years in business'];
  const fit = [['You\u2019re mechanically inclined', 'You understand how things go together and come apart. You think in three dimensions. You don\u2019t need everything spelled out for you.'], ['You\u2019re self-directed', 'We\u2019ll give you the job. We trust you to get it done. We\u2019re not going to stand over you, but we expect you to come back when something doesn\u2019t look right.'], ['You take quality personally', 'A bad part leaving this shop reflects on all of us. We\u2019re looking for people who care about that.'], ['You work well with others', 'This is a small team. Attitude matters. We\u2019d rather have someone with less experience and the right mindset than a highly skilled machinist who makes everyone miserable.']];
  const roles = ['Experienced CNC machinists — setup & operation', 'Machinists with manual mill & lathe experience', 'Candidates with some shop experience, ready to train up'];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--steel-900)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/production-floor-panoramic.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(14,18,54,0.94), rgba(14,18,54,0.55))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      padding: '76px 32px 68px'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    color: "var(--chrome-cyan)"
  }, "Careers"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '14px 0 14px',
      fontSize: 'clamp(32px,4.4vw,54px)',
      maxWidth: '20ch'
    }
  }, "Precision Machining Jobs in Lomira, WI"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--steel-200)',
      maxWidth: '60ch'
    }
  }, "We're a small shop, which means the work is varied, the pace is real, and what you do matters. You're not a number here \u2014 you're part of how this place runs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => {
      const el = document.getElementById('apply');
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, "Apply Now \u2192")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '80px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '56ch',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Why Work Here"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 14px'
    }
  }, "What Working at Damark Looks Like"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17.5,
      margin: 0
    }
  }, "Damark has been running the same way for thirty years: do the work right, treat people straight, and build something worth coming back to every day.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 18
    }
  }, why.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    accent: "blue"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '2px 0 8px',
      fontSize: 22
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      color: 'var(--text-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-muted)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '76px 32px',
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.2fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "What We Offer"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 18px'
    }
  }, "Benefits"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, benefits.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 3,
      background: 'var(--amber-500)',
      flex: 'none',
      position: 'relative',
      top: 10
    }
  }), b)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Who Fits Here"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 18px'
    }
  }, "Who We're Looking For"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }
  }, fit.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      fontSize: 18
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, roles.map(r => /*#__PURE__*/React.createElement(Badge, {
    key: r,
    tone: "brand",
    shape: "pill"
  }, r)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    tone: "dark"
  }, "We'd rather have someone with less experience and the right mindset than a highly skilled machinist who makes everyone miserable.")), /*#__PURE__*/React.createElement("section", {
    id: "apply",
    style: {
      background: 'var(--blue-600)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '72px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, {
    color: "var(--chrome-cyan)"
  }, "How to Apply"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      margin: '14px 0 16px'
    }
  }, "It's Simple"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--blue-100)'
    }
  }, "Fill out the form and attach your resume \u2014 a cover letter is optional, but if there's something your resume doesn't say, we're happy to read it. We review every application personally. If we think there's a fit, we'll be in touch to set up a time to come in and talk."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 600,
      marginTop: 18
    }
  }, "Questions before you apply?"), /*#__PURE__*/React.createElement("a", {
    href: "tel:9202697825",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      color: '#fff',
      textDecoration: 'none'
    }
  }, "(920) 269-7825"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--blue-100)',
      margin: '4px 0 0'
    }
  }, "Or stop by \u2014 Mon\u2013Fri, 6:00 AM \u2013 2:30 PM \xB7 1015 Church Street, Lomira, WI")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 8px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "pass"
  }, "Application Received"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 8px'
    }
  }, "Thanks \u2014 We'll Be In Touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "We review every application personally. If there's a fit, we'll reach out to set up a time to talk."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Submit Another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--display-sm)',
      color: 'var(--text-strong)'
    }
  }, "Apply for a Position"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    required: true,
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    required: true,
    placeholder: "(000) 000-0000"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true,
    placeholder: "you@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Position of Interest",
    placeholder: "CNC Machinist"
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Anything you want us to know?",
    rows: 4,
    placeholder: "Anything that's not on your resume (optional)."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: 'var(--text-strong)'
    }
  }, "Resume ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-fail)'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "file",
    required: true,
    accept: ".pdf,.doc,.docx",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 12px',
      background: 'var(--surface-page)',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "PDF or Word \xB7 max 10MB")), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: 'var(--text-strong)'
    }
  }, "Cover Letter ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontWeight: 600
    }
  }, "(optional)")), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".pdf,.doc,.docx",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 12px',
      background: 'var(--surface-page)',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "PDF or Word \xB7 max 10MB"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit"
  }, "Submit Application \u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Reviewed by a real person."))))));
}
window.CareersScreen = CareersScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CareersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
/* global React */
const DS_C = window.DamarkManufacturingDesignSystem_70152b;
function ContactScreen() {
  const {
    Button,
    Input,
    Textarea,
    Card,
    Badge,
    SectionEyebrow
  } = DS_C;
  const [sent, setSent] = React.useState(false);
  const wrap = {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 24px'
  };
  const next = [['We review every inquiry personally', 'A real person reads what you send — not an auto-responder, not a queue.'], ['If it’s a fit, we follow up', 'We confirm the details and get a quote started, turned around based on job complexity.'], ['If it’s not, we say so', 'If it’s not something we can handle in-house, we’ll tell you that too, and point you in the right direction if we can.'], ['No runaround', 'No automated reply telling you someone will get back to you in three to five business days. We move fast because that’s what our customers expect.']];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--steel-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '60px 24px'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    color: "var(--chrome-cyan)"
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '12px 0 12px',
      fontSize: 'clamp(30px,4vw,46px)'
    }
  }, "Let's Talk About Your Job"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--steel-200)',
      maxWidth: '58ch'
    }
  }, "A print ready to quote, a part that needs reverse engineering, or a job your current shop can't handle \u2014 reach out. We'll give you a straight answer on whether we can help and what it will take."))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '64px 24px',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 'var(--space-6)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 8px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "pass"
  }, "RFQ Received"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 8px'
    }
  }, "Thanks \u2014 We'll Be In Touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "A real person will get back to you fast. If it's urgent, call ", /*#__PURE__*/React.createElement("a", {
    href: "tel:9202697825",
    style: {
      color: 'var(--blue-600)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "(920) 269-7825"), "."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send Another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--display-sm)'
    }
  }, "Request a Quote"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    required: true,
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Company name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true,
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel",
    placeholder: "(000) 000-0000"
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Describe the job",
    rows: 5,
    required: true,
    placeholder: "Material, quantity, tolerances, deadline \u2014 or just describe what you need. Attach a print if you have one."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit"
  }, "Email Your RFQ \u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Reaches a real person \u2014 no automated reply.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: "amber"
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Call Us"), /*#__PURE__*/React.createElement("a", {
    href: "tel:9202697825",
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      color: 'var(--text-strong)',
      textDecoration: 'none',
      margin: '8px 0 4px'
    }
  }, "(920) 269-7825"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "No menu. No voicemail system. A person.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Message Us"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 16,
      color: 'var(--text-body)'
    }
  }, "Send your RFQ with the form \u2014 it reaches a real person, not an inbox.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Shop"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 16,
      color: 'var(--text-body)'
    }
  }, "1015 Church Street", /*#__PURE__*/React.createElement("br", null), "Lomira, WI 53048"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "iso"
  }, "ISO Compliant"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Family-Owned \xB7 1995"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--amber-50)',
      border: '1px solid #f5dca0',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      marginBottom: 4
    }
  }, "Line down after hours?"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, "Existing customers can reach us when something goes wrong. Call us \u2014 we'll do what we can to get you back up.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-muted)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '54ch',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "What Happens Next"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 14px'
    }
  }, "What to Expect After You Reach Out"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      margin: 0
    }
  }, "Here's exactly what happens once your inquiry lands with us \u2014 no mystery, no black box.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, next.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderTop: '3px solid var(--blue-600)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      color: 'var(--blue-600)',
      lineHeight: 1
    }
  }, i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '10px 0 8px',
      fontSize: 19
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, d)))))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* global React */
const DS_H = window.DamarkManufacturingDesignSystem_70152b;
function HomeScreen({
  go,
  tweaks = {}
}) {
  const {
    Button,
    Card,
    Badge,
    Stat,
    PullQuote,
    SectionEyebrow
  } = DS_H;
  const wrap = {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 32px'
  };
  const heroOverlay = tweaks.heroOverlay != null ? tweaks.heroOverlay : 0.85;
  const showProofBand = tweaks.showProofBand != null ? tweaks.showProofBand : true;
  const accentMap = {
    navy: 'blue',
    steel: 'steel',
    brass: 'amber'
  };
  const cardAccent = accentMap[tweaks.servicesAccent] || 'blue';
  const services = [['CNC Precision Machining', 'High-tolerance milling, turning, and production runs — including horizontal machining centers with pallet changers.', 'cnc-precision-machining'], ['Fixturing & Tooling', 'Weld fixtures, machining fixtures, robotic tooling, and hydraulic clamping. Designed in-house in SolidWorks.', 'fixturing-tooling'], ['Prototyping', 'Got an idea on paper or in your head? We help you get it made, tested, and refined before production.', 'prototyping'], ['Reverse Engineering', 'Part discontinued? We measure it, model it in SolidWorks, and manufacture a replacement.', 'reverse-engineering'], ['Fabrication & Welding', 'Structural fabrication, custom assemblies, weld fixtures, and repair work — all in-house.', 'fabrication-welding'], ['Emergency & After-Hours', 'Line down on a Saturday? Existing customers can reach us. Call us and you get a person.', 'emergency-support']];
  const industries = ['Aerospace', 'Agriculture', 'Department of Defense', 'Construction', 'Nuclear', 'Lighting & Electrical', 'OEM Manufacturing', 'Job Shops'];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--steel-900)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/production-floor-panoramic.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(14,18,54,0.94) 0%, rgba(14,18,54,0.78) 42%, rgba(14,18,54,0.34) 100%)',
      opacity: heroOverlay
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      padding: '104px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    color: "var(--chrome-cyan)"
  }, "Precision Machining \xB7 Lomira, Wisconsin"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(38px, 5.2vw, 68px)',
      lineHeight: 1.0,
      margin: '18px 0 20px',
      color: '#fff',
      maxWidth: '17ch',
      textTransform: 'uppercase'
    }
  }, "Production Work Done Right"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      maxWidth: '56ch',
      color: 'var(--steel-200)',
      margin: '0 0 12px',
      lineHeight: 1.55
    }
  }, "A full-service precision machine shop. We machine parts from small-batch one-offs to production runs, build fixtures and tooling, prototype new ideas, and reverse-engineer parts that don't exist anymore."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: '#fff',
      margin: '0 0 30px'
    }
  }, "Ground to sky \u2014 and everything in between."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Get a Quote \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => {
      window.location.href = 'tel:9202697825';
    },
    style: {
      color: '#fff',
      backgroundColor: 'transparent',
      border: 'none'
    }
  }, "Call (920) 269-7825")))), showProofBand && /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '34px 32px',
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "30 YRS",
    label: "In Business"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "15,000",
    label: "Sq Ft Facility"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "NO MIN",
    label: "Order Size"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "ISO",
    label: "Compliant Processes"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1 \u2192 1,000",
    label: "Parts Per Run"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "What Sets Us Apart"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 18px'
    }
  }, "The Job Doesn't End When the Parts Ship"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17
    }
  }, "Most machine shops take the job, run the parts, and move on. We've been doing work for some of our customers since the day we opened \u2014 not because we locked them into anything, but because we show up, we do the work right, and when something needs to be resolved, we resolve it. That's the whole model."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 22
    }
  }, [['No phone menus.', 'Call us and you get a person.'], ['No minimum.', 'One part or a thousand. We\u2019ll quote it.'], ['No hand-off.', 'Same people, start to finish.'], ['ISO-compliant processes.', 'Documentation your customers require.']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 3,
      background: 'var(--amber-500)',
      flex: 'none',
      position: 'relative',
      top: 9
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("strong", null, a), " ", b))))), /*#__PURE__*/React.createElement(PullQuote, {
    name: "Dave Buerger",
    title: "Founder",
    tone: "dark"
  }, "We don't have a salesman. Our reputation and our quality. That's our sales."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-muted)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 32,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "What We Do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0'
    }
  }, "From One Prototype to a Production Program")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('services')
  }, "All Services \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, services.map(([t, d, slug], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    accent: cardAccent,
    interactive: true,
    onClick: () => go('service:' + slug)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 8px',
      fontSize: 23
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--blue-600)'
    }
  }, "Learn More \u2192")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '88px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "home-ground-to-sky",
    placeholder: "Drop a part / shop photo",
    shape: "rounded",
    radius: "6",
    style: {
      display: 'block',
      width: '100%',
      height: '440px'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Ground to Sky"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 18px'
    }
  }, "Parts That Have Shipped From Our Floor"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17
    }
  }, "Components for military lighting systems \u2014 including a housing for a light on the President's helicopter \u2014 agricultural equipment, precision tooling for the riveting industry, OEM production parts, and prototype assemblies for independent inventors. We treat the $400 job and the aerospace run the same way."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 20
    }
  }, industries.map(x => /*#__PURE__*/React.createElement(Badge, {
    key: x,
    tone: "neutral",
    shape: "pill"
  }, x)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--blue-600)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '80px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, {
    color: "var(--chrome-cyan)"
  }, "Family-Owned Since 1995"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      margin: '14px 0 16px'
    }
  }, "Honest Work, Done Right, Builds a Business That Lasts"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--blue-100)'
    }
  }, "Damark was founded in 1995 on a simple belief \u2014 do the work right, treat people straight, and stand behind what you make. We've never had a sales team. Every customer came through a referral, a relationship, or a reputation that preceded the first phone call. That hasn't changed."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      color: '#fff',
      backgroundColor: '#1D2675',
      border: 'none',
      marginTop: 8
    },
    onClick: () => go('about')
  }, "Learn More About Damark \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--blue-800)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/hq-lomira.jpg",
    alt: "Damark HQ in Lomira, WI",
    style: {
      width: '100%',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '88px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 14px',
      fontSize: 'clamp(32px,4vw,52px)'
    }
  }, "Ready to Get a Part Made?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      maxWidth: '52ch',
      margin: '0 auto 28px'
    }
  }, "Send us your print, your drawing, or just describe what you need. We'll get back to you fast. No automated reply, no runaround."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Email Your RFQ \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => {
      window.location.href = 'tel:9202697825';
    }
  }, "Call (920) 269-7825"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceDetailScreen.jsx
try { (() => {
/* global React */
const DS_SD = window.DamarkManufacturingDesignSystem_70152b;
function FAQItem({
  q,
  a
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '20px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--text-strong)',
      textTransform: 'none',
      letterSpacing: 0
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 26,
      height: 26,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--blue-600)',
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      lineHeight: 1,
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'transform 160ms ease'
    }
  }, "+")), open && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 22px',
      fontSize: 16,
      color: 'var(--text-body)',
      maxWidth: '74ch',
      paddingRight: 46
    }
  }, a));
}
function ServiceDetailScreen({
  go,
  slug
}) {
  const {
    Button,
    Card,
    PullQuote,
    SectionEyebrow
  } = DS_SD;
  const all = window.DAMARK_SERVICES || [];
  const s = all.find(x => x.slug === slug) || all[0];
  const wrap = {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 32px'
  };
  const idx = all.findIndex(x => x.slug === s.slug);
  const more = all.filter(x => x.slug !== s.slug).slice(0, 3);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--steel-900)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/img/${s.img}`,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(14,18,54,0.95) 0%, rgba(14,18,54,0.82) 45%, rgba(14,18,54,0.45) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      padding: '64px 32px 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--steel-300)',
      fontFamily: 'var(--font-mono)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('services');
    },
    style: {
      color: 'var(--chrome-cyan)',
      textDecoration: 'none'
    }
  }, "Services"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, s.nav)), /*#__PURE__*/React.createElement(SectionEyebrow, {
    color: "var(--chrome-cyan)"
  }, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '14px 0 12px',
      fontSize: 'clamp(30px,4vw,52px)',
      maxWidth: '20ch'
    }
  }, s.h1), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Get a Quote \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => {
      window.location.href = 'tel:9202697825';
    },
    style: {
      color: '#fff',
      borderColor: '#fff',
      backgroundColor: 'transparent',
      border: 'none'
    }
  }, "Call (920) 269-7825")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '72px 32px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '52ch'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Overview"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 18px'
    }
  }, s.introTitle)), s.intro.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 17.5,
      maxWidth: '74ch'
    }
  }, p))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Capabilities"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 26px'
    }
  }, s.whatTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }
  }, s.what.map(([t, d], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    accent: "blue"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 8px',
      fontSize: 21
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      color: 'var(--text-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-muted)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '72px 32px',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Who It's For"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 20px'
    }
  }, s.whoTitle), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, s.who.map((w, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 3,
      background: 'var(--amber-500)',
      flex: 'none',
      position: 'relative',
      top: 10
    }
  }), w)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "The Process"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 20px'
    }
  }, s.processTitle), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, s.process.map(([t, d], i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 18,
      paddingBottom: i === s.process.length - 1 ? 0 : 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--blue-600)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 4px',
      fontSize: 19
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      color: 'var(--text-muted)'
    }
  }, d)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Why Damark"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 18px'
    }
  }, s.whyTitle), s.why.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 16.5
    }
  }, p))), /*#__PURE__*/React.createElement(PullQuote, {
    name: s.quote[1],
    title: s.quote[2],
    tone: "dark"
  }, s.quote[0]))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-muted)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 24px'
    }
  }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, s.faq.map(([q, a]) => /*#__PURE__*/React.createElement(FAQItem, {
    key: q,
    q: q,
    a: a
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Keep Exploring"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 24px'
    }
  }, "Other Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, more.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.slug,
    accent: "blue",
    interactive: true,
    onClick: () => go('service:' + m.slug)
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '2px 0 8px',
      fontSize: 21
    }
  }, m.nav), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, m.card), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--blue-600)'
    }
  }, "Learn More \u2192"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--steel-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '64px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      margin: '0 0 12px'
    }
  }, "Ready to Get a Quote?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--steel-300)',
      maxWidth: '52ch',
      margin: '0 auto 26px'
    }
  }, "Send your print, your drawing, or a description of what you need. We'll review it and get back to you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Email Your RFQ \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => {
      window.location.href = 'tel:9202697825';
    },
    style: {
      color: '#fff',
      borderColor: 'var(--steel-500)',
      backgroundColor: 'transparent',
      border: 'none'
    }
  }, "Call (920) 269-7825")))));
}
window.ServiceDetailScreen = ServiceDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
/* global React */
const DS_S = window.DamarkManufacturingDesignSystem_70152b;
function ServicesScreen({
  go
}) {
  const {
    Button,
    Card,
    Badge,
    PullQuote,
    SectionEyebrow
  } = DS_S;
  const wrap = {
    maxWidth: 1240,
    margin: '0 auto',
    padding: '0 32px'
  };
  const services = window.DAMARK_SERVICES || [];
  const quality = [['Documented routings', 'Every job runs through documented in-process routings and machine setup sheets, so the work is repeatable from the first part to the last.'], ['Calibrated inspection', 'We use calibrated gauges and inspection equipment, including optical comparator measurement, to verify parts at setup and during production runs.'], ['ISO-compliant processes', 'Our processes are ISO compliant. We support first sample inspection reports and documentation that meets your customers\u2019 supplier quality requirements.'], ['In-process checks', 'Our machinists perform in-process checks throughout the job \u2014 not just at the end \u2014 so problems are caught while they\u2019re still cheap to fix.']];
  const materials = ['Plastics', 'Aluminum', 'Carbon Steel', 'Stainless Steel', 'Tool Steel', 'Hardened Steels', 'Castings', 'Forgings'];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--steel-900)',
      color: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/precision-machining.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(14,18,54,0.95) 0%, rgba(14,18,54,0.8) 48%, rgba(14,18,54,0.4) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      padding: '72px 32px 64px'
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    color: "var(--chrome-cyan)"
  }, "Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '14px 0 16px',
      fontSize: 'clamp(32px,4.4vw,56px)',
      maxWidth: '20ch'
    }
  }, "Machining, Tooling & Production \u2014 All Under One Roof"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--steel-200)',
      maxWidth: '62ch',
      lineHeight: 1.55
    }
  }, "Damark is a full-service precision machine shop. We work with manufacturers, OEMs, engineers, and independent designers \u2014 everything from single prototype parts to long-running production programs."))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '72px 32px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "What Damark Does"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0'
    }
  }, "From Print to Finished Part")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17.5,
      marginTop: 4
    }
  }, "We have the equipment, the engineering capability, and the experience to take a job from print to finished part \u2014 and to flag problems along the way that would cost you time and money down the line."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17.5,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "If you're not sure whether we can handle your job, send it over. We'll tell you straight.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '56px 32px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.slug,
    style: {
      display: 'grid',
      gridTemplateColumns: i % 2 ? '1fr 1.1fr' : '1.1fr 1fr',
      gap: 44,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: i % 2 ? 2 : 1,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/img/${s.img}`,
    alt: s.nav,
    style: {
      width: '100%',
      height: 300,
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      order: i % 2 ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-faint)',
      fontSize: 14
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--display-sm)',
      margin: '4px 0 12px'
    }
  }, s.nav), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5
    }
  }, s.card), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('service:' + s.slug)
  }, "Learn More \u2192")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-muted)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '72px 32px',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Materials"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 16px'
    }
  }, "Materials We Work With"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5
    }
  }, "We machine across a wide range of materials. Got a material question? ", /*#__PURE__*/React.createElement("strong", null, "Ask us \u2014 we'll tell you whether it's something we can run.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('contact'),
    style: {
      marginTop: 6,
      color: '#fff',
      backgroundColor: '#1D2675',
      padding: 12,
      fontWeight: 700,
      border: 'none'
    }
  }, "Ask a Material Question \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, materials.map(m => /*#__PURE__*/React.createElement(Badge, {
    key: m,
    tone: "brand",
    size: "md"
  }, m))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '58ch',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Quality"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 16px'
    }
  }, "How We Handle Quality"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17.5
    }
  }, "Quality at Damark is not a department. It's how the work gets done. Every job is built to be repeatable, documented, and verified \u2014 so the parts you get meet the standards your customers require.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 18
    }
  }, quality.map(([t, d], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    accent: "blue"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 8px',
      fontSize: 21
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      color: 'var(--text-muted)'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "iso"
  }, "ISO Compliant"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "First sample inspection reports & supplier-quality documentation available on request."))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '8px 32px 72px'
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    name: "Dave Buerger",
    title: "Founder",
    tone: "brand",
    size: "lg"
  }, "We build farm equipment parts up to aerospace. Ground to sky. That's really the gist of it.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--steel-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '64px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      margin: '0 0 14px'
    }
  }, "Have a Job to Quote?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--steel-300)',
      maxWidth: '52ch',
      margin: '0 auto 26px'
    }
  }, "Send us your print or describe what you need. We turn quotes around based on job complexity \u2014 and we'll tell you upfront if something isn't a fit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Email Your RFQ \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => {
      window.location.href = 'tel:9202697825';
    },
    style: {
      color: '#fff',
      borderColor: 'var(--steel-500)',
      backgroundColor: 'transparent',
      border: 'none'
    }
  }, "Call (920) 269-7825")))));
}
window.ServicesScreen = ServicesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
/* global React */
const DS_F = window.DamarkManufacturingDesignSystem_70152b;
function SiteFooter({
  go
}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  };
  const head = {
    fontFamily: 'var(--font-display)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontSize: 13,
    color: 'var(--steel-400)',
    marginBottom: 4
  };
  const link = {
    color: 'var(--steel-200)',
    textDecoration: 'none',
    fontSize: 15
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--steel-950)',
      color: 'var(--steel-300)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '56px 32px 28px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/damark-logo-2026.png",
    alt: "Damark Production and Tooling",
    style: {
      height: 52,
      marginBottom: 16,
      borderRadius: 2,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      maxWidth: 280,
      color: 'var(--steel-400)',
      margin: 0
    }
  }, "Precision machining and production work, done right. Family-owned in Lomira, Wisconsin since 1995.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('service:cnc-precision-machining');
    }
  }, "CNC Precision Machining"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('service:fixturing-tooling');
    }
  }, "Fixturing & Tooling"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('service:prototyping');
    }
  }, "Prototyping"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('service:reverse-engineering');
    }
  }, "Reverse Engineering"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('service:fabrication-welding');
    }
  }, "Fabrication & Welding"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('service:shop-to-shop');
    }
  }, "Outsourced Machining for Shops"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('service:emergency-support');
    }
  }, "Emergency & After-Hours")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Company"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('about');
    }
  }, "About"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('careers');
    }
  }, "Careers"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('contact');
    }
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, "Reach a Person"), /*#__PURE__*/React.createElement("a", {
    style: {
      ...link,
      fontFamily: 'var(--font-mono)'
    },
    href: "tel:9202697825"
  }, "(920) 269-7825"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('contact');
    }
  }, "Contact Us \u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--steel-400)'
    }
  }, "1015 Church Street", /*#__PURE__*/React.createElement("br", null), "Lomira, WI 53048"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--steel-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: 'var(--steel-500)',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Damark Manufacturing Corporation"), /*#__PURE__*/React.createElement("span", null, "No salesman. Just the work."))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
/* global React */
const DS = window.DamarkManufacturingDesignSystem_70152b;
function SiteHeader({
  route,
  go
}) {
  const {
    Button
  } = DS;
  const [open, setOpen] = React.useState(false);
  const nav = [['home', 'Home'], ['about', 'About'], ['services', 'Services'], ['careers', 'Careers'], ['contact', 'Contact']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: '#fff',
      boxShadow: '0 1px 0 var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--blue-600)',
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '7px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      fontSize: 13,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", null, "1015 Church Street \xB7 Lomira, WI 53048"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Family-Owned Since 1995")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, "ISO-Compliant"))), /*#__PURE__*/React.createElement("style", null, `@media (max-width:860px){.dm-header-row{padding-left:10px !important;padding-right:10px !important;justify-content:flex-start !important;}.dm-nav-desktop{display:none !important;}.dm-hamburger{display:inline-flex !important;}}@media (min-width:861px){.dm-hamburger,.dm-nav-mobile{display:none !important;}}`), /*#__PURE__*/React.createElement("div", {
    className: "dm-header-row",
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      flex: 'none',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/damark-logo-2026.png",
    alt: "Damark Production and Tooling",
    style: {
      height: 56,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "dm-hamburger",
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(v => !v),
    style: {
      display: 'none',
      marginLeft: 'auto',
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 2,
      background: 'var(--text-strong)',
      transition: 'transform .2s',
      transform: open ? 'translateY(7px) rotate(45deg)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 2,
      background: 'var(--text-strong)',
      opacity: open ? 0 : 1,
      transition: 'opacity .2s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 2,
      background: 'var(--text-strong)',
      transition: 'transform .2s',
      transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "dm-nav-desktop",
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, nav.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontWeight: 600,
      fontSize: 16,
      padding: '10px 13px',
      textDecoration: 'none',
      color: route === id ? 'var(--blue-600)' : 'var(--text-strong)',
      borderBottom: route === id ? '3px solid var(--blue-600)' : '3px solid transparent'
    },
    onMouseEnter: e => {
      if (route !== id) e.currentTarget.style.color = 'var(--blue-600)';
    },
    onMouseLeave: e => {
      if (route !== id) e.currentTarget.style.color = 'var(--text-strong)';
    }
  }, label)), /*#__PURE__*/React.createElement("a", {
    href: "tel:9202697825",
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      textDecoration: 'none',
      fontSize: 15,
      margin: '0 14px 0 14px'
    }
  }, "(920) 269-7825"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('contact')
  }, "Get a Quote"))), open && /*#__PURE__*/React.createElement("nav", {
    className: "dm-nav-mobile",
    style: {
      borderTop: '1px solid var(--border-subtle)',
      padding: '8px 10px 16px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, nav.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      go(id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontWeight: 600,
      fontSize: 17,
      padding: '13px 8px',
      textDecoration: 'none',
      color: route === id ? 'var(--blue-600)' : 'var(--text-strong)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, label)), /*#__PURE__*/React.createElement("a", {
    href: "tel:9202697825",
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      textDecoration: 'none',
      fontSize: 16,
      padding: '13px 8px'
    }
  }, "(920) 269-7825"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setOpen(false);
      go('contact');
    }
  }, "Get a Quote"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/serviceData.js
try { (() => {
/* Damark service detail content — transcribed from the approved website content doc.
   Exposed as window.SERVICE_DATA (array, in display order). No emails (use the form). */
(function () {
  const S = [{
    slug: 'cnc-precision-machining',
    nav: 'CNC Precision Machining',
    card: 'CNC Precision Machining',
    blurb: 'High-tolerance milling and turning, small batch to production — including HMCs with pallet changers.',
    image: 'precision-machining.jpg',
    h1: 'CNC Precision Machining: Small Batch to Production Runs',
    introHead: 'Precision Machining Built on Thirty Years of Floor Experience',
    intro: ["CNC machining at Damark isn't just about having the equipment. It's about knowing how to run it. Our experienced team has the background to look at a print, identify what's going to cause problems before the first cut, and machine the part right the first time.", "We handle jobs other shops pass on: tight tolerances, difficult materials, low quantities, and parts with no room for error. And when a job becomes repeat work, our documented processes make sure the tenth order runs the same as the first."],
    whatHead: 'What Our CNC Machining Service Covers',
    what: [['CNC Milling', 'Multi-axis milling including 4th-axis capability up to 22 inches. Prismatic parts, complex geometries, and tight-tolerance work. Our horizontal machining centers run with pallet changers, keeping production moving on repeat work.'], ['CNC Turning / Lathe Work', 'Precision turned parts across a range of diameters and lengths. We run both CNC lathes and manual lathes for secondary operations — flexibility other shops don\u2019t have.'], ['Small Batch & Job Shop Work', 'One part or fifty. We quote it. Most high-volume shops won\u2019t touch small runs because they can\u2019t make the economics work. We can, and we do. Regularly.'], ['Production Runs', 'For repeat work we build documented routings, setup sheets, and in-process inspection checkpoints. We incorporate the bill of materials so material is ordered correctly and on time.']],
    who: ['OEM manufacturers who need a reliable outside supplier for production components', 'Other machine shops who need overflow capacity or specialty work', 'Equipment designers and builders who need machined components for custom machinery', 'Engineers and purchasing managers who need a shop they can trust to hold tolerance and meet deadlines', 'Independent inventors and product developers who need a capable shop for one-off and early-production work'],
    process: [['Send us your print or describe the job.', 'Use the form or call us directly. No formal print yet? We can work from sketches, samples, or a description.'], ['We review and quote.', 'We look at the print carefully — not just for what it says, but for what might cause issues in machining. If we see a problem, we say so before we quote it.'], ['First article and approval.', 'For new work we typically start with a first article: one part made to print, inspected, and approved before we proceed.'], ['Production and documentation.', 'Once the process is established, it\u2019s documented. Every repeat order runs off the same setup sheets, tooling, and inspection checkpoints.'], ['Delivery.', 'Parts ship on your account or we arrange delivery. We can also coordinate plating, heat treating, and other outside processes on your behalf.']],
    quote: {
      text: 'We build farm equipment parts up to aerospace. Ground to sky. That\u2019s really the gist of it.',
      name: 'Dave Buerger',
      title: 'Founder'
    },
    faqs: [['What materials can Damark machine?', 'Aluminum, carbon steel, stainless steel, tool steel, hardened steels, plastics, castings, and forgings. If you have a specific material in mind, contact us and we\u2019ll confirm whether it\u2019s something we can run.'], ['What is your minimum order quantity?', 'There is no minimum. We regularly run one-piece jobs and small batches that larger production shops won\u2019t quote. If you need it made, send it over and we\u2019ll give you a number.'], ['Do you hold tight tolerances?', 'Yes. Tight-tolerance work is a significant part of what we do. We have calibrated inspection equipment on the floor, including optical comparator measurement, and our machinists perform in-process checks throughout the job.'], ['Are you ISO certified?', 'We are ISO compliant. Our quality system includes documented in-process routings, machine setup sheets, calibrated gauges, and first sample inspection reports. We regularly supply parts to ISO-certified customers who require documentation.'], ['Can you handle repeat production orders?', 'Yes. For repeat work we build documented routings and incorporate bill of materials into our ordering process so material is ready when the job kicks off. The process is consistent from one order to the next.'], ['Do you work with other machine shops?', 'Yes, and we do it regularly. If you have overflow work, a job outside your core capability, or a customer order you can\u2019t fit, we can help. We protect your customer relationships. We\u2019re not going to go around you.'], ['What is your typical lead time?', 'It depends on the job: material availability, complexity, and current shop capacity all factor in. Contact us with your details and deadline and we\u2019ll give you a straight answer on whether we can meet it.'], ['Can you coordinate outside processes like plating or heat treating?', 'Yes. We regularly coordinate outside processing — heat treating, plating, and other secondary operations — on behalf of our customers. You don\u2019t have to manage multiple vendors if you don\u2019t want to.']]
  }, {
    slug: 'fixturing-tooling',
    nav: 'Fixturing & Tooling',
    card: 'Fixturing & Tooling',
    blurb: 'Weld fixtures, machining fixtures, robotic tooling, and hydraulic clamping — designed and built in-house.',
    image: 'tooling-fabrication-banner.png',
    h1: 'Weld Fixtures, Machining Fixtures & Custom Tooling',
    introHead: 'Fixtures That Work the First Time, Because We Design and Build Them',
    intro: ["A fixture is only as good as the engineering behind it. At Damark, design and fabrication happen in the same building, by the same team. When the person designing your fixture can walk over and talk to the person building it — and prove it out on the floor before it ships — you end up with tooling that actually does what it\u2019s supposed to do.", "Damark has designed and built hundreds of fixtures over the last few decades. That depth of experience is in every fixture that leaves this shop."],
    whatHead: 'What We Design and Build',
    what: [['Weld Fixtures', 'Custom weld fixtures for manual, semi-automated, and robotic welding. We design to your weldment geometry, clamping sequence, and production environment. Repeatability is built in from the start.'], ['Machining Fixtures', 'Locating, clamping, and holding parts in the right position, every time. We design for rigidity, chip clearance, and operator usability.'], ['Robotic Tooling', 'End-of-arm tooling and robotic work-cell fixtures designed around your robot and your part geometry.'], ['Hydraulic & Pneumatic Clamping', 'Integrated clamping for faster cycle times and more consistent clamping force — useful where operator variation is a problem.'], ['Sensing & Monitoring Integration', 'Part-presence sensing, clamping confirmation, or in-process monitoring built in. We work with your controls team or handle it ourselves.'], ['Amada & Brake Tooling', 'Custom and modified tooling for press brake and punch press operations, including Amada-compatible tooling.']],
    process: [['You describe what you need.', 'Send part prints, weldment drawings, or assembly documents. An existing fixture that isn\u2019t working? Send that too. A description of the problem is often as useful as a drawing of the solution.'], ['We design it in SolidWorks.', 'Our engineers model the fixture in full 3D — clamping sequence, locating strategy, operator access. You review the design before we cut metal.'], ['We build and prove it out.', 'Built in-house on the same floor as our machining and welding. We prove it out with your part geometry before it ships. If something needs adjustment, we catch it here, not on your floor.'], ['We deliver a fixture that works.', 'And if something comes up later — a design change, a worn component, a modification — we\u2019re the same shop that built it. Call us.']],
    quote: {
      text: 'We\u2019ve built hundreds of fixtures. Everything from a simple weld fixture to a full robotic work cell setup.',
      name: 'Dave Buerger',
      title: 'Founder'
    },
    faqs: [['Do you offer design-only services, or do you have to build the fixture too?', 'We can do design-only if that\u2019s what you need — a fully detailed SolidWorks model and drawing package your team or another shop can build from. That said, most customers find it cleaner to have design and build under one roof.'], ['What information do I need to provide to get started?', 'At minimum, the part print and a description of the operation: welding, machining, assembly, etc. Production volume, clamping preferences, and equipment constraints help. A sketch of what you\u2019re thinking is plenty to start.'], ['Can you modify an existing fixture?', 'Yes. Wrong clamp location, worn locators, a design that didn\u2019t account for a part change — we can evaluate it and make modifications. Sometimes the fix is simple; sometimes a redesign makes more sense. We\u2019ll tell you which.'], ['Do your fixtures include sensing and part-present detection?', 'Yes, when the application calls for it. We can integrate pneumatic, proximity, or other sensing. If you have a preferred sensor or controls interface, let us know upfront and we\u2019ll design to it.'], ['What lead time should I expect?', 'It depends on complexity, design time, and current capacity. Simple fixtures move quickly; hydraulic clamping or sensing integration takes longer. Contact us with your application and deadline for a realistic answer.'], ['What is the fixture made from?', 'Most are mild steel or tool steel depending on the application. We can use aluminum for lighter-duty or weight-sensitive applications. Material selection is part of the design conversation.']]
  }, {
    slug: 'prototyping',
    nav: 'Prototyping',
    card: 'Prototyping',
    blurb: 'From a sketch, a sample, or an idea in your head to a part you can hold, test, and refine.',
    image: 'trak-dpm5.jpg',
    h1: 'Prototype Parts Made Right, From Sketch to Finished Piece',
    introHead: 'From an Idea to a Part You Can Hold in Your Hand',
    intro: ["Most prototype shops want a complete print before they\u2019ll quote anything. We\u2019re not that kind of shop. A sketch on paper, a part you want to copy, an idea you\u2019ve been sitting on — bring it to us. We\u2019ll work through it with you.", "Prototyping at Damark means you get engineering judgment alongside the machining. If what you\u2019ve drawn isn\u2019t going to work the way you expect, we\u2019ll tell you before we make chips, not after."],
    whatHead: 'What Prototyping at Damark Covers',
    what: [['First-Off Parts', 'The first physical version of something that hasn\u2019t been made before — machined from your print, sketch, or model so you can test, measure, and evaluate it.'], ['Iterative Development', 'When the first version needs a dimension adjusted or a feature moved, we iterate. Some take one pass, some take three. We don\u2019t treat each revision as a separate project from scratch.'], ['Design-to-Print Work', 'No formal print? We model in SolidWorks and can produce a drawing package from a physical sample, a sketch, or a description of what the part needs to do.'], ['Sample Parts for Approval', 'A physical sample to show a customer or get sign-off before going into production. One part, made right, documented if needed.'], ['Form, Fit & Function Models', 'When you need to know if a part fits the assembly, clears an obstruction, or interfaces correctly — before you commit to production quantities.']],
    quote: {
      text: 'There\u2019s a guy building a corn grinder. He\u2019s been here two or three times. Comes in with his sketch and we work through it with him.',
      name: 'Brock Buerger',
      title: 'Owner'
    },
    faqs: [['Do I need a complete print to get a prototype made?', 'No. We work from full SolidWorks models, PDF drawings, hand sketches, physical samples, and verbal descriptions. The more you have, the faster we move, but a formal print isn\u2019t a barrier to getting started.'], ['Can Damark help with the design, or just the machining?', 'Both. If you have an idea but not a design, we can model it in SolidWorks and work through it with you. We\u2019re not a pure design firm, but we\u2019re not going to machine something we can see is going to fail either.'], ['What if the first prototype isn\u2019t right and I need changes?', 'That\u2019s normal and expected. We iterate — make the change and produce the next version. We don\u2019t treat each revision as a brand-new job with a brand-new setup charge.'], ['How many prototypes can I order?', 'As many or as few as you need. One piece is fine. Three for testing and one for a customer presentation is fine too.'], ['What materials can you prototype in?', 'The same materials we production-machine: aluminum, steel, stainless, tool steel, plastics, and others. If the material you want isn\u2019t practical for a prototype, we can discuss functional equivalents.'], ['Can you take a prototype part into production?', 'Yes. The documentation from the prototype phase — inspection data, setup notes, tooling decisions — gives us a head start on the production routing. You\u2019re not starting from zero.']]
  }, {
    slug: 'reverse-engineering',
    nav: 'Reverse Engineering',
    card: 'Reverse Engineering',
    blurb: 'Part discontinued, drawing gone? We measure it, model it in SolidWorks, and manufacture a replacement.',
    image: 'equipment-doosan.jpg',
    h1: 'Reverse Engineering: When the Drawing Doesn\u2019t Exist',
    introHead: 'The Original Is Gone. The Machine Still Has to Run.',
    intro: ["Parts go out of production. Manufacturers shut down. Drawings get lost. When a line is down or a machine is sitting idle, you need someone who can look at a worn, broken, or damaged part and figure out what it was supposed to be.", "That\u2019s what we do. We measure it, model it in SolidWorks, produce a print, and machine a replacement. We apply engineering judgment to the process — not just caliper-to-drawing copying. If the part is worn, we interpret the wear. If it\u2019s cracked, we figure out why."],
    whatHead: 'What Reverse Engineering at Damark Covers',
    what: [['Part Measurement & Documentation', 'We measure the physical part with precision inspection equipment, including 3D scanning. We document geometry, material characteristics, and any surface finish or tolerance requirements we can determine.'], ['SolidWorks Modeling', 'A full 3D model that becomes the basis for the manufacturing drawing and the production routing for any future orders.'], ['Manufacturing Drawing Production', 'A complete engineering drawing — tolerances, material callouts, surface finish. You own that drawing.'], ['Replacement Part Manufacturing', 'We don\u2019t just document. We machine the replacement in-house. Measurement, modeling, and manufacturing all happen at Damark.'], ['Engineering Analysis & Improvement', 'If the original failed because of a design weakness, we can discuss whether the replacement should be modified to perform better. The option is there.']],
    quote: {
      text: 'Anyone can measure a worn part and get the wrong answer. The cracks tell you about the loads. We apply real engineering thinking to this.',
      name: 'Damark',
      title: 'Engineering'
    },
    faqs: [['What condition does the part need to be in?', 'Worn, damaged, and partially broken parts are all workable in most cases. We evaluate the condition when we receive it. Even a destroyed part with photos of its installed position and context can often be reconstructed. Contact us and describe what you have.'], ['Can you work from photographs or partial drawings?', 'Sometimes, depending on complexity. A simple turned part with a known function might be reconstructable from good photographs. More complex parts with tight tolerances really need to be in front of us. Send what you have and we\u2019ll tell you whether it\u2019s workable.'], ['Will you provide me with a drawing of the part?', 'Yes. The drawing is yours. We produce a full SolidWorks model and a manufacturing drawing, and you get copies of both. If you ever need the part made again, you have the documentation.'], ['How do you handle parts that failed in service? Do you just copy the failure?', 'No. If a part failed because of a design issue — wrong material, undersized cross-section, poor geometry at a stress riser — we flag it and discuss whether the replacement should be modified. Sometimes copying the original exactly is right; sometimes it isn\u2019t.'], ['What is the typical turnaround?', 'It depends on complexity. Measurement and modeling take time — we want to do it right, not fast. Many parts turn around in a few weeks; very complex geometry or unusual materials take longer.'], ['What if I need more than one replacement? Can you stock them?', 'Yes. Once the part is documented and the process established, ordering more is straightforward. We can quote a small stock quantity at the same time as the first piece. It\u2019s usually a good idea.']]
  }, {
    slug: 'fabrication-welding',
    nav: 'Fabrication & Welding',
    card: 'Fabrication & Welding',
    blurb: 'Custom assemblies, structural work, weld fixtures, and repair — with machining under the same roof.',
    image: 'welding.jpg',
    h1: 'In-House Fabrication and Welding',
    introHead: 'Fabrication and Machining Under One Roof',
    intro: ["When fabricated components also require machined features, or when a weld fixture needs to be built to tight dimensional tolerances, having fabrication and machining in the same building matters. You don\u2019t coordinate between two vendors. You don\u2019t lose time in transit. The machinist and the welder work five feet apart.", "Damark has offered in-house fabrication and welding since the beginning. It\u2019s part of how we stay useful to customers who don\u2019t want to manage a supply chain to solve one problem."],
    whatHead: 'What Our Fabrication and Welding Services Cover',
    what: [['Custom Structural Fabrication', 'Frames, brackets, supports, enclosures, and structural components built to your drawings — or designed in-house for simpler assemblies.'], ['Custom Weld Assemblies', 'From simple brackets to multi-component structures. If the weldment also requires machined surfaces, bores, or features, we handle that in-house without shipping it out.'], ['Weld Fixture Fabrication', 'Fixtures for your welding operations, designed and built to hold your parts in position during the weld cycle.'], ['Fabrication Repair & Modification', 'Worn, cracked, or broken assemblies — or assemblies that need modifying for a new application. We evaluate, repair or rebuild, and return it ready to use.'], ['Form Die, Stamp Die & Fixture Repair', 'Repair and reconditioning of forming, stamping, and fixture tooling that has worn or been damaged in service.'], ['Sawing & Material Prep', 'We have a CNC saw for material cutting and prep. Stock cut to length before it goes to the mill or weld table happens in-house.']],
    quote: {
      text: 'We started in fabrication and repair. That\u2019s the foundation everything else was built on.',
      name: 'Dave Buerger',
      title: 'Founder'
    },
    faqs: [['What materials do you weld?', 'We weld mild steel, stainless steel, and aluminum. If you have a specific material requirement, let us know upfront.'], ['Do you handle structural welding for load-bearing applications?', 'Contact us with your application. We can discuss what the weldment needs to do and whether our capability and process documentation meet your requirements.'], ['Can you fabricate from my drawings, or do you need to design the assembly?', 'Both. We regularly fabricate from customer-supplied drawings. For simpler assemblies — especially ones with machined features — we can develop the design in-house so it\u2019s all planned together.'], ['Do you offer repair work on existing fabricated assemblies?', 'Yes. Bring in the assembly or describe what\u2019s wrong. In many cases a worn or cracked assembly can be repaired and reconditioned for significantly less than building new.'], ['Can you handle the machining on a welded assembly?', 'Yes — that\u2019s specifically one of the things we do well. Welded assemblies that require machined bores, faced surfaces, or drilled patterns are handled in-house start to finish.']]
  }, {
    slug: 'shop-to-shop',
    nav: 'Shop-to-Shop',
    card: 'Outsourced Machining for Shops',
    blurb: 'Overflow, specialty, and hard-to-fit work for other shops. We protect your customer relationships.',
    image: 'doosan-dnm400.jpg',
    h1: 'Overflow & Specialty Machining for Other Shops',
    introHead: 'A Shop You Can Send Work To',
    intro: ["A meaningful share of what runs through Damark\u2019s floor comes from other shops. Overflow jobs. Work outside a shop\u2019s core capability. Orders a customer pushed in with a deadline that won\u2019t fit the schedule. Parts that need a process — 4th-axis, HMC, tight-tolerance inspection — the sending shop doesn\u2019t have.", "We do this work regularly. We\u2019ve been doing it for years. Your customer doesn\u2019t hear from us. Your relationship stays yours."],
    whatHead: 'The Work We Take From Other Shops',
    what: [['Overflow & Capacity Work', 'More work than your floor can handle right now? We run the overflow while your shop stays focused on what\u2019s committed. No minimum lot size, no minimum relationship requirement.'], ['Specialty Operations', '4th-axis milling, HMC work with pallet changers, tight-tolerance turned parts, optical comparator inspection, or SolidWorks-supported programming for complex geometry.'], ['Hard-to-Machine Materials', 'Hardened steels, stainless, or difficult castings — where you\u2019d rather send it out than tie up your own equipment and tooling.'], ['Tight-Tolerance Jobs', 'Parts that require documented inspection: first sample inspection reports, in-process measurement, calibrated gauges.'], ['Short-Run & One-Off Work', 'One or two pieces, not worth a setup on your floor, but important enough to your customer relationship to get done right.'], ['Fixture & Tooling Work', 'Need a weld fixture, machining fixture, or custom tooling built for your own shop? We can handle that too.']],
    quote: {
      text: 'We do a lot of work for other shops. Overflow, stuff they can\u2019t do. It\u2019s a big part of what we run.',
      name: 'Brock Buerger',
      title: 'Owner'
    },
    faqs: [['How do you handle confidentiality? Will you contact my customer?', 'No. We work for you, not your customer. We don\u2019t reach out to anyone on the other end of your relationship. If you want a formal NDA in place before you send us a print, we\u2019ll sign it. No issue.'], ['What types of jobs are the best fit?', 'Milling and turning across a wide range of metals and plastics, including 4th-axis, HMC production, or tight-tolerance inspection. Fixture and tooling work. Small batch and repeat production. Not sure? Call and describe the job.'], ['Do you have a minimum order size or commitment?', 'No minimums. If you have a one-piece job that matters to your customer relationship, send it. We\u2019ll quote it.'], ['How do you handle communication on an active job?', 'You deal with the same people throughout. If something comes up — a question on the print, a material substitution, a lead time issue — we call you directly. We don\u2019t let things drift and surprise you at delivery.'], ['Can you support the documentation my customer requires?', 'Our processes are ISO compliant. We can provide in-process documentation, first sample inspection reports, and calibrated measurement data. Tell us the specific supplier quality requirements before we quote and we\u2019ll confirm we can meet them.'], ['What is your typical capacity situation?', 'Capacity varies. Contact us with your job and timeline — we\u2019ll tell you whether we can take it and when. We\u2019d rather tell you we\u2019re full than take the work and miss your deadline.']]
  }, {
    slug: 'emergency-support',
    nav: 'Emergency & After-Hours',
    card: 'Emergency & After-Hours',
    blurb: 'For existing customers: when a line is down after hours, you call a person who knows your account.',
    image: 'services-1.jpg',
    h1: 'After-Hours Support for Existing Customers',
    introHead: 'When Something Goes Wrong at 9 PM on a Friday',
    intro: ["Production problems don\u2019t happen at convenient times. A critical component fails. A part wears out and there\u2019s no spare. A line goes down and the morning shift can\u2019t start until something gets fixed.", "For existing Damark customers, you\u2019re not alone in that situation. Call us. We\u2019ll pick up or we\u2019ll call back. This isn\u2019t a 24/7 call center — it\u2019s a shop owned by people who understand what it means to have production stopped, and who show up when it matters."],
    whatHead: 'What After-Hours Support Looks Like',
    what: [['Direct access, not a ticket system', 'If you\u2019re an existing customer and something goes wrong, you call Brock\u2019s cell. You talk to a person who knows your account and your equipment and can decide what\u2019s possible — not someone who has to look you up and escalate.'], ['A part we\u2019ve made before', 'If it\u2019s a part we\u2019ve run and we have material on hand, we may be able to turn something around faster than normal.'], ['A part we haven\u2019t made before', 'We\u2019ll talk through what we know and figure out the fastest path.'], ['When we genuinely can\u2019t help', 'Wrong process, wrong material, equipment we\u2019re not set up to run — we\u2019ll tell you that, and we might know who can. We don\u2019t make promises we can\u2019t keep. But we do pick up the phone.']],
    quote: {
      text: 'Somebody needed a pin for a carnival ride, fast, couldn\u2019t find anyone. They called us on a weekend, we got it done. That\u2019s just what you do.',
      name: 'Brock Buerger',
      title: 'Owner'
    },
    faqs: [['Is after-hours support available to new customers?', 'It\u2019s primarily set up for existing customers with established relationships. That said, if you\u2019re in a genuine emergency and you reach us, we\u2019ll hear you out. We won\u2019t hang up on someone because they\u2019re not already in the system.'], ['What types of emergencies can Damark help with?', 'Failed production components, broken fixtures, worn parts that need a quick replacement, critical tooling that needs repair or remaking. If the part can be machined or fabricated and we have material on hand, there\u2019s a real chance we can help.'], ['What response time should I expect after hours?', 'There\u2019s no guaranteed response window — this is a small shop, not a staffed help desk. In practice, if Brock is reachable you\u2019ll hear back within the hour. Leave a clear message with your number and the nature of the problem.'], ['Does Damark charge a premium for emergency work?', 'Rush work often carries a premium — material sourcing, overtime, prioritizing your job over the queue all have real costs. We\u2019ll be straight about what it takes. We\u2019re not going to gouge someone in an emergency, but we\u2019re not going to absorb real costs without acknowledging them.'], ['What if my emergency is something Damark can\u2019t handle?', 'We\u2019ll tell you that. And if we know a shop that can help, we\u2019ll say so. Getting you pointed in the right direction is worth something even when we\u2019re not the answer.']]
  }];
  window.SERVICE_DATA = S;
  window.getService = slug => S.find(s => s.slug === slug);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/serviceData.js", error: String((e && e.message) || e) }); }

// ui_kits/website/servicesData.js
try { (() => {
/* Damark service-page content (verbatim from approved website copy).
   Consumed by ServiceDetailScreen.jsx and listed on ServicesScreen.jsx. */
window.DAMARK_SERVICES = [{
  slug: 'cnc-precision-machining',
  nav: 'CNC Precision Machining',
  card: 'High-tolerance milling, turning, and production runs — including horizontal machining centers with pallet changers.',
  img: 'precision-machining.jpg',
  h1: 'CNC Precision Machining: Small Batch to Production Runs',
  eyebrow: 'CNC Machining',
  introTitle: 'Precision Machining Built on Thirty Years of Floor Experience',
  intro: ["CNC machining at Damark isn't just about having the equipment. It's about knowing how to run it. Our experienced team has the background to look at a print, identify what's going to cause problems before the first cut, and machine the part right the first time.", "We handle jobs other shops pass on: tight tolerances, difficult materials, low quantities, and parts with no room for error. And when a job becomes repeat work, our documented processes make sure the tenth order runs the same as the first."],
  whatTitle: 'What Our CNC Machining Service Covers',
  what: [['CNC Milling', 'Multi-axis milling including 4th-axis capability up to 22 inches. Prismatic parts, complex geometries, and tight-tolerance work across a range of sizes. Our horizontal machining centers run with pallet changers, keeping production moving on repeat work.'], ['CNC Turning / Lathe Work', 'Precision turned parts across a range of diameters and lengths. We run both CNC lathes and manual lathes for secondary operations, giving us flexibility other shops don\u2019t have.'], ['Small Batch & Job Shop Work', 'One part or fifty. We quote it. Most high-volume shops won\u2019t touch small runs because they can\u2019t make the economics work. We can, and we do. Regularly.'], ['Production Runs', 'For repeat work we build documented routings, setup sheets, and in-process inspection checkpoints. We incorporate bill of materials into our routings so material is ordered correctly and on time.']],
  whoTitle: 'Who We Work With',
  who: ['OEM manufacturers who need a reliable outside supplier for production components', 'Other machine shops who need overflow capacity or specialty work they can\u2019t run in-house', 'Equipment designers and builders who need machined components for custom machinery', 'Engineers and purchasing managers who need a shop they can trust to hold tolerance and meet deadlines', 'Independent inventors and product developers who need a capable shop for one-off and early-production work'],
  processTitle: 'What to Expect When You Work With Us',
  process: [['Send us your print or describe the job', 'Send your RFQ from the form or call us directly. No formal print yet? We can work from sketches, samples, or a description.'], ['We review and quote', 'We look at the print carefully \u2014 not just for what it says, but for what might cause issues in machining. If we see something that\u2019s going to cost you time or money, we say so before we quote.'], ['First article and approval', 'For new work we typically start with a first article: one part made to print, inspected, and approved before we proceed.'], ['Production and documentation', 'Once the process is established, it\u2019s documented. Every repeat order runs off the same setup sheets, tooling documentation, and inspection checkpoints.'], ['Delivery', 'Parts ship on your account or we arrange delivery depending on the job. We can also coordinate plating, heat treating, and other outside processes on your behalf.']],
  whyTitle: 'Why Shops and Manufacturers Keep Sending Us Work',
  why: ["Damark has built most of its business from customers who found us through someone who used to work somewhere else \u2014 an engineer who moved companies, a production manager who switched industries. They bring us with them because the work was right and the relationship was straight.", "We\u2019ve machined components that ended up in agricultural equipment, military lighting systems, aerospace applications, nuclear facilities, and construction machinery. We\u2019ve also made a $400 job for a guy who needed three pieces and couldn\u2019t find anyone else to touch it. We treat both the same way."],
  quote: ['We build farm equipment parts up to aerospace. Ground to sky. That\u2019s really the gist of it.', 'Dave Buerger', 'Founder'],
  faq: [['What materials can Damark machine?', 'We work across a wide range of materials including aluminum, carbon steel, stainless steel, tool steel, hardened steels, plastics, castings, and forgings. If you have a specific material in mind, contact us and we\u2019ll confirm whether it\u2019s something we can run.'], ['What is your minimum order quantity?', 'There is no minimum. We regularly run one-piece jobs and small batches that larger production shops won\u2019t quote. If you need it made, send it over and we\u2019ll give you a number.'], ['Do you hold tight tolerances?', 'Yes. Tight-tolerance work is a significant part of what we do. We have calibrated inspection equipment on the floor, including optical comparator measurement, and our machinists perform in-process checks throughout the job.'], ['Are you ISO certified?', 'We are ISO compliant. Our quality system includes documented in-process routings, machine setup sheets, calibrated gauges, and first sample inspection reports. We regularly supply parts to ISO-certified customers who require documentation from their outside suppliers.'], ['Can you handle repeat production orders?', 'Yes. For repeat work we build documented routings and incorporate bill of materials into our ordering process so material is ready when the job kicks off. Several of our customers have been placing repeat orders with us for years.'], ['Do you work with other machine shops?', 'Yes, and we do it regularly. If you have overflow work, a job outside your core capability, or a customer order you can\u2019t fit in your schedule, we can help. We protect your customer relationships.'], ['What is your typical lead time?', 'Lead time depends on the job: material availability, complexity, and current shop capacity. Contact us with your details and deadline and we\u2019ll give you a straight answer on whether we can meet it.'], ['Can you coordinate outside processes like plating or heat treating?', 'Yes. We regularly coordinate outside processing on behalf of our customers. You don\u2019t have to manage multiple vendors if you don\u2019t want to.']]
}, {
  slug: 'fixturing-tooling',
  nav: 'Fixturing & Tooling',
  card: 'Weld fixtures, machining fixtures, robotic tooling, and hydraulic clamping. Designed in-house in SolidWorks.',
  img: 'tooling-fabrication-banner.png',
  h1: 'Weld Fixtures, Machining Fixtures & Custom Tooling',
  eyebrow: 'Fixturing & Tooling',
  introTitle: 'Fixtures That Work the First Time, Because We Design and Build Them',
  intro: ["A fixture is only as good as the engineering behind it. At Damark, design and fabrication happen in the same building, by the same team. When the person designing your fixture can walk over and talk to the person building it \u2014 and prove it out on the floor before it ships \u2014 you end up with tooling that actually does what it\u2019s supposed to do.", "Damark has designed and built hundreds of fixtures over the last few decades. That depth of experience is in every fixture that leaves this shop."],
  whatTitle: 'What We Design and Build',
  what: [['Weld Fixtures', 'Custom weld fixtures for manual, semi-automated, and robotic welding operations. We design to your weldment geometry, clamping sequence, and production environment. Repeatability is built in from the start.'], ['Machining Fixtures', 'Fixtures for CNC milling and turning operations: locating, clamping, and holding parts in the right position, every time. We design for rigidity, chip clearance, and operator usability.'], ['Robotic Tooling', 'End-of-arm tooling and robotic work cell fixtures designed around your robot and your part geometry.'], ['Hydraulic & Pneumatic Clamping', 'Fixtures with integrated hydraulic or pneumatic clamping for faster cycle times and more consistent clamping force. Useful where operator variation is a problem.'], ['Sensing & Monitoring Integration', 'Fixtures with part-presence sensing, clamping confirmation, or in-process monitoring built in. We work with your controls team or handle the integration ourselves.'], ['Amada & Brake Tooling', 'Custom and modified tooling for press brake and punch press operations, including Amada-compatible tooling.']],
  whoTitle: 'Who We Work With',
  who: ['Engineers and production managers running automated or semi-automated assembly and welding lines', 'Machine shops that need work holding for a specific CNC operation', 'Equipment designers and builders who need tooling designed alongside custom machinery', 'Job shops who need a capable outside source for fixture design and build'],
  processTitle: 'How the Process Works',
  process: [['You describe what you need', 'Send us part prints, weldment drawings, or assembly documents. If you have an existing fixture that isn\u2019t working right, send that too. A description of the problem is often as useful as a drawing of the solution.'], ['We design it in SolidWorks', 'Our engineers model the fixture in full 3D, working through clamping sequence, locating strategy, and operator access. You review the design before we cut metal.'], ['We build and prove it out', 'The fixture is built in-house on the same floor as our machining and welding operations. We prove it out with your part geometry before it ships.'], ['We deliver a fixture that works', 'And if something comes up after delivery \u2014 a design change, a worn component, a modification \u2014 we\u2019re the same shop that built it. Call us.']],
  whyTitle: 'Why This Work Belongs at Damark',
  why: ["Most shops either design fixtures or build them. We do both, which means the engineer who designs your fixture answers to the same standard as the machinist who builds it. There\u2019s no gap between what was designed and what gets made.", "We\u2019ve built fixtures that load parts automatically, clamp with hydraulic force, confirm part presence with sensors, and integrate directly into robotic work cells. We\u2019ve also built simple manual weld fixtures for small shops doing low-volume work. The level of sophistication depends on what the job calls for."],
  quote: ['We\u2019ve built hundreds of fixtures. Everything from a simple weld fixture to a full robotic work cell setup.', 'Dave Buerger', 'Founder'],
  faq: [['Do you offer design-only services, or do you have to build the fixture too?', 'We can do design-only if that\u2019s what you need \u2014 a fully detailed SolidWorks model and drawing package your team or another shop can build from. That said, most customers find it cleaner to have design and build under one roof.'], ['What information do I need to provide to get started?', 'At minimum, the part print and a description of the operation. It helps to know your production volume, clamping preferences, and any equipment constraints. If you have an existing fixture or a sketch, send that too.'], ['Can you modify an existing fixture?', 'Yes. If you have a fixture that\u2019s not quite working right \u2014 wrong clamp location, worn locators, a design that didn\u2019t account for a part change \u2014 we can evaluate it and make modifications. We\u2019ll tell you whether a fix or a redesign makes more sense.'], ['Do your fixtures include sensing and part-present detection?', 'Yes, when the application calls for it. We can integrate pneumatic, proximity, or other sensing. If you have a preferred sensor or controls interface, let us know upfront and we\u2019ll design to it.'], ['What lead time should I expect?', 'It depends on fixture complexity, design time, and current shop capacity. Simple fixtures move quickly; complex tooling with hydraulic clamping or sensing takes longer. Contact us with your application and deadline.'], ['What is the fixture made from?', 'Most fixtures are built from mild steel or tool steel depending on the application. We can use aluminum for lighter-duty or weight-sensitive applications. Material selection is part of the design conversation.']]
}, {
  slug: 'prototyping',
  nav: 'Prototyping',
  card: 'Got an idea on paper or in your head? We help you get it made, tested, and refined before production.',
  img: 'trak-dpm5.jpg',
  h1: 'Prototype Parts Made Right, From Sketch to Finished Piece',
  eyebrow: 'Prototyping',
  introTitle: 'From an Idea to a Part You Can Hold in Your Hand',
  intro: ["Most prototype shops want a complete print before they\u2019ll quote anything. We\u2019re not that kind of shop. If you have a sketch on paper, a part you want to copy, or an idea you\u2019ve been sitting on and haven\u2019t been able to get made \u2014 bring it to us. We\u2019ll work through it with you.", "Prototyping at Damark means you get engineering judgment alongside the machining. If what you\u2019ve drawn isn\u2019t going to work the way you expect, we\u2019ll tell you before we make chips, not after."],
  whatTitle: 'What Prototyping at Damark Covers',
  what: [['First-Off Parts', 'The first physical version of something that hasn\u2019t been made before. We machine it from your print, sketch, or model, and give you a part you can test, measure, and evaluate.'], ['Iterative Development', 'When the first version isn\u2019t quite right, we iterate. Some prototypes take one pass, some take three. We work through it without treating each revision like a separate project from scratch.'], ['Design-to-Print Work', 'If you don\u2019t have a formal print, we can help develop one. We model in SolidWorks and can produce a drawing package from a physical sample, a sketch, or a description.'], ['Sample Parts for Customer Approval', 'Need a physical sample to show a customer or get sign-off before production? We make those. One part, made right, documented if needed.'], ['Form, Fit & Function Models', 'When you need to know if a part fits in the assembly, clears an obstruction, or interfaces correctly with a mating component, before you commit to production quantities.']],
  whoTitle: 'Who We Work With',
  who: ['Independent inventors who need someone to actually build it, not just quote it with a 10-piece minimum', 'Equipment designers and custom machinery builders proving out a design before the full build', 'OEMs and small manufacturers entering a new product category who need a prototype first', 'Engineers with a problem to solve: a replacement part that doesn\u2019t exist, a modification, or a one-off solution'],
  processTitle: 'How Prototyping Works Here',
  process: [['You tell us what you\u2019re trying to build', 'Print, sketch, part sample, or verbal description. Bring whatever you have. The more context about what the part needs to do, the better we can help.'], ['We give you honest feedback before we start', 'If we see something that\u2019s going to cause a problem in machining or in use, we say so. If there\u2019s a simpler way to get the same result, we point it out.'], ['We machine the first piece', 'Made to your print or agreed specification, and inspected before it leaves the shop.'], ['We revise if needed', 'If the first piece reveals something that needs to change, we make that change and go again. This is part of the process, not a problem.'], ['We document as you go', 'When you\u2019re ready to move toward production, the work we\u2019ve done on the prototype feeds directly into the production routing. You\u2019re not starting from scratch.']],
  whyTitle: 'Why Inventors and Engineers Come Back to Us',
  why: ["Prototyping customers tend to come back for one reason: they got honest feedback, the part was made right, and when it needed to change, the process wasn\u2019t painful.", "We\u2019ve made prototype parts for independent inventors working out of garages, for product designers at established manufacturers, and for engineers who needed a part made fast because something in the field was broken."],
  quote: ['There\u2019s a guy building a corn grinder. He\u2019s been here two or three times. Comes in with his sketch and we work through it with him.', 'Brock Buerger', 'Owner'],
  faq: [['Do I need a complete print to get a prototype made?', 'No. We work from full SolidWorks models, PDF drawings, hand sketches, physical samples, and verbal descriptions. Lack of a formal print isn\u2019t a barrier to getting started. Contact us and tell us what you have.'], ['Can Damark help with the design, or just the machining?', 'Both. If you have an idea but not a design, we can model it in SolidWorks and work through it with you. We\u2019re not a pure design firm, but we\u2019re not going to machine something we can see is going to fail either.'], ['What if the first prototype isn\u2019t right and I need changes?', 'That\u2019s normal and expected. We iterate. We don\u2019t treat each revision as a brand-new job with a brand-new setup charge.'], ['How many prototypes can I order?', 'As many or as few as you need. One piece is fine. Three for testing and one for a customer presentation is fine too.'], ['What materials can you prototype in?', 'The same materials we production-machine: aluminum, steel, stainless, tool steel, plastics, and others. If the material you want isn\u2019t practical for a prototype, we can discuss functional equivalents.'], ['Can you take a prototype part into production?', 'Yes. The documentation from the prototype phase \u2014 inspection data, setup notes, tooling decisions \u2014 gives us a head start on the production routing. You\u2019re not starting from zero.']]
}, {
  slug: 'reverse-engineering',
  nav: 'Reverse Engineering',
  card: 'Part discontinued? We measure it, model it in SolidWorks, and manufacture a replacement.',
  img: 'equipment-doosan.jpg',
  h1: 'Reverse Engineering: When the Drawing Doesn\u2019t Exist',
  eyebrow: 'Reverse Engineering',
  introTitle: 'The Original Is Gone. The Machine Still Has to Run.',
  intro: ["Parts go out of production. Manufacturers shut down. Drawings get lost. Equipment that\u2019s been running for twenty years doesn\u2019t come with a parts catalog anymore. When that happens \u2014 and a line is down or a machine is sitting idle \u2014 you need someone who can look at a worn, broken, or damaged part and figure out what it was supposed to be.", "That\u2019s what we do. We measure it, model it in SolidWorks, produce a print, and machine a replacement. We apply engineering judgment, not just caliper-to-drawing copying. If the part is worn, we interpret the wear. If it\u2019s cracked, we figure out why it cracked."],
  whatTitle: 'What Reverse Engineering at Damark Covers',
  what: [['Part Measurement & Documentation', 'We measure the physical part using precision inspection equipment, including 3D scanning. We document geometry, material characteristics, and surface finish or tolerance requirements.'], ['SolidWorks Modeling', 'We build a full 3D model in SolidWorks. This becomes the basis for the manufacturing drawing and the production routing for future orders.'], ['Manufacturing Drawing Production', 'A complete engineering drawing from the model: a real print, with tolerances, material callouts, and surface finish specs. You own that drawing.'], ['Replacement Part Manufacturing', 'We don\u2019t just document. The measurement, modeling, and manufacturing all happen at Damark.'], ['Engineering Analysis & Improvement', 'If the original failed because of a design weakness, we can discuss whether the replacement should be modified to perform better. The option is there.']],
  whoTitle: 'Who Needs This Service',
  who: ['Maintenance managers and plant engineers with legacy equipment no longer supported by the original manufacturer', 'Equipment owners with machinery that predates modern CAD systems', 'Manufacturers who need replacement components for production equipment no longer in current production', 'Machine shops whose customers bring them worn or broken parts and need a single supplier from measurement to replacement'],
  processTitle: 'How the Process Works',
  process: [['You bring us the part', 'Ship it or drop it off. If it can\u2019t be removed from the equipment, we may be able to work from photographs and field measurements.'], ['We measure and evaluate it', 'Using precision measuring equipment and 3D scanning to capture the geometry. We also evaluate condition: what\u2019s worn, what\u2019s damaged, what the original dimensions likely were.'], ['We model it and produce a drawing', 'The model and drawing give us a repeatable manufacturing baseline. You get a copy of the drawing.'], ['We quote the replacement', 'We\u2019ll give you a price for the first piece and, if you want, a small stock quantity so you\u2019re not in the same situation six months from now.'], ['We machine and deliver', 'Made in-house, inspected before it ships.']],
  whyTitle: 'Engineering Judgment Is What Makes This Work',
  why: ["Reverse engineering isn\u2019t measurement. Anyone can measure a worn part and get the wrong answer. The worn surfaces aren\u2019t the original surfaces. The cracks tell you about the loads. The material hardness tells you something about what the original designer was solving for.", "We apply real engineering thinking to this process, not just a caliper and a model. That\u2019s the difference between a replacement part that fits and runs, and one that fails the same way the original did."],
  quote: ['The worn surfaces aren\u2019t the original surfaces. The cracks tell you about the loads. That\u2019s the difference between a replacement that runs and one that fails the same way.', 'Dave Buerger', 'Founder'],
  faq: [['What condition does the part need to be in?', 'Worn, damaged, and partially broken parts are all workable in most cases. We evaluate when we receive it and tell you whether we have enough to work from. Even for destroyed parts, photographs, partial drawings, and context can be enough.'], ['Can you work from photographs or partial drawings instead of a physical sample?', 'Sometimes, depending on complexity. A simple turned part might be reconstructable from good photographs. More complex parts with tight tolerances really need to be in front of us. Send what you have and we\u2019ll tell you.'], ['Will you provide me with a drawing of the part?', 'Yes. The drawing is yours. We produce a full SolidWorks model and a manufacturing drawing, and you get copies of both.'], ['How do you handle parts that failed in service? Do you just copy the failure?', 'No. If a part failed because of a design issue, we flag it and discuss whether the replacement should match the original spec or be modified. Sometimes copying exactly is right. Sometimes it isn\u2019t.'], ['What is the typical turnaround?', 'It depends on complexity. We want to do it right, not fast. For many parts, a few weeks. Complex geometry or unusual materials may take longer.'], ['What if I need more than one replacement? Can you stock them?', 'Yes. Once the part is documented, ordering additional quantity is straightforward. We can quote a small stock quantity at the same time as the first piece.']]
}, {
  slug: 'fabrication-welding',
  nav: 'Fabrication & Welding',
  card: 'Structural fabrication, custom assemblies, weld fixtures, and repair work — all in-house.',
  img: 'welding.jpg',
  h1: 'In-House Fabrication & Welding',
  eyebrow: 'Fabrication & Welding',
  introTitle: 'Fabrication and Machining Under One Roof',
  intro: ["When fabricated components also require machined features, or when a weld fixture needs to be built to tight dimensional tolerances, having fabrication and machining in the same building matters. You don\u2019t coordinate between two vendors. You don\u2019t lose time in transit. The machinist and the welder work five feet apart.", "Damark has offered in-house fabrication and welding since the beginning. It\u2019s part of how we stay useful to customers who don\u2019t want to manage a supply chain to solve one problem."],
  whatTitle: 'What Our Fabrication and Welding Services Cover',
  what: [['Custom Structural Fabrication', 'Frames, brackets, supports, enclosures, and structural components built to your drawings. We work from customer prints or develop the design in-house for simpler assemblies.'], ['Custom Weld Assemblies', 'From simple brackets to multi-component structures. If the weldment also requires machined surfaces, bores, or features, we handle that in-house without shipping it out.'], ['Weld Fixture Fabrication', 'Fixtures for your welding operations, designed and built to hold your parts in position during the weld cycle.'], ['Fabrication Repair & Modification', 'Existing assemblies that are worn, cracked, broken, or need modification for a new application. We evaluate, repair or rebuild, and return it ready to use.'], ['Form Die, Stamp Die & Fixture Repair', 'Repair and reconditioning of forming, stamping, and fixture tooling that has worn or been damaged in service.'], ['Sawing & Material Prep', 'We have a CNC saw for material cutting and prep. If a job needs stock cut to length before it goes to the mill or weld table, that happens in-house.']],
  whoTitle: 'Who We Work With',
  who: ['Manufacturers who need custom fabricated components or weld assemblies as part of their product or equipment', 'Machine builders and equipment designers who need fabricated structures machined to tolerance', 'Maintenance and facilities teams who need repair or modification work on existing fabricated equipment', 'Other machine shops who need fabrication capability they don\u2019t have in-house'],
  processTitle: 'The Machining Changes Everything',
  process: [['One roof, one team', 'At Damark, the machinist can walk over and talk to the welder before the first weld is laid. Fixturing for the weld is designed with the machining requirements in mind.'], ['Sequence planned from the start', 'The sequence is planned up front, not discovered after the fact. That\u2019s the difference between a part that shows up ready to use and one that requires rework at every handoff.']],
  whyTitle: 'Why This Work Belongs at Damark',
  why: ["Fabricated parts that require machined features are a coordination problem if your fab shop and machine shop are two different places. The assembly gets built, ships to the machine shop, the machine shop finds the weldment is out of tolerance, and now you\u2019re back at the fab shop for correction.", "At Damark, that gap doesn\u2019t exist. It\u2019s not a small thing."],
  quote: ['We started in fabrication and repair. That\u2019s the foundation everything else was built on.', 'Dave Buerger', 'Founder'],
  faq: [['What materials do you weld?', 'We weld mild steel, stainless steel, and aluminum. If you have a specific material requirement, let us know upfront.'], ['Do you handle structural welding for load-bearing applications?', 'Contact us with your application. We can discuss what the weldment needs to do and whether our capability and process documentation meet your requirements.'], ['Can you fabricate from my drawings, or do you need to design the assembly?', 'Both. We regularly fabricate from customer-supplied drawings. For simpler assemblies, we can develop a design in-house, particularly when the assembly will have machined features.'], ['Do you offer repair work on existing fabricated assemblies?', 'Yes. Bring in the assembly or describe what\u2019s wrong. In many cases a worn or cracked assembly can be repaired and reconditioned for significantly less than building new.'], ['Can you handle the machining on a welded assembly without me finding a separate machine shop?', 'Yes \u2014 that\u2019s specifically one of the things we do well. Welded assemblies that require machined bores, faced surfaces, drilled patterns, or other features are handled in-house start to finish.']]
}, {
  slug: 'shop-to-shop',
  nav: 'Outsourced Machining for Shops',
  card: 'Overflow, specialty, and hard-to-fit machining for other shops. We protect your customer relationships.',
  img: 'doosan-dnm400.jpg',
  h1: 'Overflow & Specialty Work for Other Shops',
  eyebrow: 'Shop-to-Shop Services',
  introTitle: 'A Shop You Can Send Work To',
  intro: ["A meaningful share of what runs through Damark\u2019s floor comes from other shops. Overflow jobs. Work that\u2019s outside a shop\u2019s core capability. Orders a customer pushed in with a deadline that won\u2019t fit the schedule. Parts that need a process \u2014 4th-axis, HMC, tight-tolerance inspection \u2014 that the sending shop doesn\u2019t have.", "We do this work regularly. We\u2019ve been doing it for years. Your customer doesn\u2019t hear from us. Your relationship stays yours."],
  whatTitle: 'The Work We Take From Other Shops',
  what: [['Overflow & Capacity Work', 'We run the overflow while your shop stays focused on what\u2019s already committed. No minimum lot size, no minimum relationship requirement.'], ['Specialty Operations', '4th-axis milling, HMC work with pallet changers, tight-tolerance turned parts, optical comparator inspection, or SolidWorks-supported programming for complex geometry.'], ['Hard-to-Machine Materials', 'Hardened steels, stainless, or difficult castings, where the risk is high enough that you\u2019d rather send it out than tie up your own equipment.'], ['Tight-Tolerance Jobs', 'Parts that require documented inspection \u2014 first sample inspection reports, in-process measurement, calibrated gauges \u2014 that your shop\u2019s documentation system doesn\u2019t support.'], ['Short-Run & One-Off Work', 'One or two pieces, not worth a setup on your floor, but important enough to your customer relationship that you need them done right.'], ['Fixture & Tooling Work', 'If you need a weld fixture, machining fixture, or custom tooling built for your own shop, we can handle that too.']],
  whoTitle: 'What Kind of Shops Send Us Work',
  who: ['General machine shops with more CNC milling and turning work than their floor can absorb', 'Tool and die operations that need machined components outside their specialty', 'Weld shops and fabricators whose customers need machined features they can\u2019t produce', 'Manufacturers with in-house machining who have a job that doesn\u2019t fit their equipment or schedule', 'Job shops who need a second-tier supplier they can trust on work they care about'],
  processTitle: 'How We Protect Your Customer Relationships',
  process: [['We don\u2019t call your customer', 'We don\u2019t put our name on the box. We don\u2019t pitch them on coming to us directly. You brought us the work. The relationship is yours.'], ['We sign your NDA', 'If you need a non-disclosure agreement before you send work over, that\u2019s not a problem. We\u2019ll sign it.'], ['We build long-term partnerships', 'The ones that last are built on the same thing every good business relationship is: the work gets done right, communication is straight, and nobody embarrasses the other party.']],
  whyTitle: 'Why Shops Come Back',
  why: ["The shops that send us work consistently do it because the parts come back right and the communication is straight. They know what\u2019s happening with their job. If something comes up, we call. We don\u2019t surface problems at delivery.", "We also have the equipment to back it up: a 15,000 sq ft facility, horizontal machining centers with pallet changers, 4th-axis milling, CNC lathes, in-house SolidWorks programming, and a calibrated inspection process."],
  quote: ['We do a lot of work for other shops. Overflow, stuff they can\u2019t do. It\u2019s a big part of what we run.', 'Brock Buerger', 'Owner'],
  faq: [['How do you handle confidentiality? Will you contact my customer?', 'No. We work for you, not your customer. We don\u2019t reach out to anyone on the other end of your relationship. If you want a formal NDA in place before you send a print, we\u2019ll sign it.'], ['What types of jobs are the best fit?', 'Milling and turning across a wide range of metals and plastics, including 4th-axis, HMC production work, or tight-tolerance inspection documentation. Fixture and tooling work. Small batch and repeat production.'], ['Do you have a minimum order size or commitment?', 'No minimums. If you have a one-piece job that matters to your customer relationship, send it. We\u2019ll quote it.'], ['How do you handle communication on an active job?', 'You deal with the same people throughout. If something comes up \u2014 a question on the print, a material substitution, a lead time issue \u2014 we call you directly. We don\u2019t let things drift and surprise you at delivery.'], ['Can you support the documentation my customer requires?', 'Our processes are ISO compliant. We can provide in-process documentation, first sample inspection reports, and calibrated measurement data. Tell us the requirements before we quote and we\u2019ll confirm.'], ['What is your typical capacity situation?', 'Shop capacity varies. Contact us with your job and timeline. We\u2019d rather tell you we\u2019re full than take the work and miss your deadline.']]
}, {
  slug: 'emergency-support',
  nav: 'Emergency & After-Hours',
  card: 'Line down on a Saturday? Existing customers can reach us. Call us and you get a person.',
  img: 'iso-compliant.jpg',
  h1: 'After-Hours Support for Existing Customers',
  eyebrow: 'Emergency & After-Hours Support',
  introTitle: 'When Something Goes Wrong at 9 PM on a Friday',
  intro: ["Production problems don\u2019t happen at convenient times. A critical component fails. A part wears out and there\u2019s no spare. A line goes down and the morning shift can\u2019t start until something gets fixed.", "For existing Damark customers, you\u2019re not alone in that situation. Call us. We\u2019ll pick up or we\u2019ll call back. This isn\u2019t a 24/7 call center \u2014 it\u2019s a shop owned by people who understand what it means to have production stopped, and who\u2019ve built enough of a relationship to show up when it matters."],
  whatTitle: 'What After-Hours Support Looks Like',
  what: [['Direct access, not a ticket system', 'If you\u2019re an existing customer and something goes wrong, you call Brock\u2019s cell. You talk to a person who knows your account and your equipment and can make a decision about what\u2019s possible.'], ['Parts we\u2019ve made before', 'If it\u2019s a part we\u2019ve made before and we have material on hand, we may be able to turn something around faster than normal.'], ['Parts we haven\u2019t made before', 'We\u2019ll talk through what we know and figure out the fastest path.'], ['When we genuinely can\u2019t help', 'We\u2019ll tell you that \u2014 and we might know who can. We don\u2019t make promises we can\u2019t keep. But we do pick up the phone.']],
  whoTitle: 'Who This Service Is For',
  who: ['Existing Damark customers \u2014 the shops, manufacturers, and production facilities we already have a working relationship with', 'If you\u2019re not a current customer but you need help fast and think Damark might solve it, call anyway. We\u2019ll tell you if we can help.'],
  processTitle: 'How to Reach Damark After Hours',
  process: [['Existing customers', 'You should have Brock\u2019s direct number. Use it.'], ['Don\u2019t have it?', 'Call the main shop line at (920) 269-7825 and leave a detailed message: what the part is, what failed, what you need, and your callback number.'], ['Shop hours', 'Monday \u2013 Friday, 6:00 AM \u2013 2:30 PM. After-hours support is available for existing customers outside these hours.']],
  whyTitle: 'How It Works in the Real World',
  why: ["We\u2019re a small shop, which means the person who runs it is the person who picks up. That\u2019s not a policy. It\u2019s a disposition."],
  quote: ['Somebody needed a pin, some kind of carnival ride thing. They called us on a weekend, we got it done. That\u2019s just what you do.', 'Brock Buerger', 'Owner'],
  faq: [['Is after-hours support available to new customers?', 'It\u2019s primarily set up for existing customers with established relationships. That said, if you\u2019re in a genuine emergency and you reach us, we\u2019ll hear you out. We won\u2019t hang up on someone because they\u2019re not already in the system.'], ['What types of emergencies can Damark help with?', 'Failed production components, broken fixtures, worn parts that need a quick replacement, critical tooling that needs repair or remaking. If the part can be machined or fabricated and we have material on hand, there\u2019s a real chance we can help.'], ['What response time should I expect after hours?', 'There\u2019s no guaranteed response window. This is a small shop, not a staffed help desk. In practice, if Brock is reachable, you\u2019ll hear back within the hour. Leave a clear message with your number and the nature of the problem.'], ['Does Damark charge a premium for emergency work?', 'Rush work often carries a premium \u2014 material sourcing, overtime, prioritizing your job over the queue. We\u2019ll be straight with you about what it takes. We\u2019re not going to gouge someone in an emergency, but we\u2019re not going to absorb real costs without acknowledging them.'], ['What if my emergency is something Damark can\u2019t handle?', 'We\u2019ll tell you that. And if we know a shop that can help, we\u2019ll say so. Getting you pointed in the right direction is worth something even when we\u2019re not the answer.']]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/servicesData.js", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionEyebrow = __ds_scope.SectionEyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
