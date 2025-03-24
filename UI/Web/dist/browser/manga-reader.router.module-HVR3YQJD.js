import {
  FITTING_OPTION,
  PAGING_DIRECTION,
  SPLIT_PAGE_PART
} from "./chunk-TYLQK2UY.js";
import {
  LayoutMode,
  PageSplitOption,
  ReaderMode,
  ScalingOption,
  layoutModes,
  pageSplitOptions
} from "./chunk-6PD4CA3T.js";
import "./chunk-4C3V74T6.js";
import {
  ReadingDirection
} from "./chunk-HLXD4ERA.js";
import "./chunk-FAV3BSNY.js";
import {
  NavService
} from "./chunk-CUVDZVWA.js";
import {
  ScrollService
} from "./chunk-7GKAFCLA.js";
import {
  ReaderService
} from "./chunk-D2FQ65JS.js";
import {
  Stack
} from "./chunk-JGJJUNHA.js";
import {
  MemberService
} from "./chunk-XZ5MKEYT.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import {
  InfiniteScrollDirective,
  InfiniteScrollModule
} from "./chunk-EA72DBFY.js";
import {
  Breakpoint,
  KEY_CODES,
  LibraryType,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import {
  AccountService,
  ActivatedRoute,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  NgbActiveModal,
  NgbModal,
  NgbModalModule
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService,
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import {
  DomSanitizer
} from "./chunk-FLGYJHAG.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  RangeValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  PercentPipe,
  Renderer2,
  RendererFactory2,
  ReplaySubject,
  Subject,
  TranslocoDirective,
  ViewChild,
  __spreadValues,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  elementAt,
  filter,
  forkJoin,
  forwardRef,
  fromEvent,
  inject,
  map,
  merge,
  of,
  race,
  setClassMetadata,
  shareReplay,
  switchMap,
  take,
  takeUntil,
  takeUntilDestroyed,
  tap,
  throttleTime,
  translate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassMapInterpolate3,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMapInterpolate1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// node_modules/detect-it/dist/detect-it.esm.js
var w = typeof window !== "undefined" ? window : {
  screen: {},
  navigator: {}
};
var matchMedia = (w.matchMedia || function() {
  return {
    matches: false
  };
}).bind(w);
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var noop = function() {
};
w.addEventListener && w.addEventListener("p", noop, options);
w.removeEventListener && w.removeEventListener("p", noop, false);
var supportsPassiveEvents = passiveOptionAccessed;
var supportsPointerEvents = "PointerEvent" in w;
var onTouchStartInWindow = "ontouchstart" in w;
var touchEventInWindow = "TouchEvent" in w;
var supportsTouchEvents = onTouchStartInWindow || touchEventInWindow && matchMedia("(any-pointer: coarse)").matches;
var hasTouch = (w.navigator.maxTouchPoints || 0) > 0 || supportsTouchEvents;
var userAgent = w.navigator.userAgent || "";
var isIPad = matchMedia("(pointer: coarse)").matches && // both iPad and iPhone can "request desktop site", which sets the userAgent to Macintosh
// so need to check both userAgents to determine if it is an iOS device
// and screen size to separate iPad from iPhone
/iPad|Macintosh/.test(userAgent) && Math.min(w.screen.width || 0, w.screen.height || 0) >= 768;
var hasCoarsePrimaryPointer = (matchMedia("(pointer: coarse)").matches || // if the pointer is not coarse and not fine then the browser doesn't support
// interaction media queries (see https://caniuse.com/css-media-interaction)
// so if it has onTouchStartInWindow assume it has a coarse primary pointer
!matchMedia("(pointer: fine)").matches && onTouchStartInWindow) && // bug in firefox (as of v81) on hybrid windows devices where the interaction media queries
// always indicate a touch only device (only has a coarse pointer that can't hover)
// so assume that the primary pointer is not coarse for firefox windows
!/Windows.*Firefox/.test(userAgent);
var hasAnyHoverOrAnyFinePointer = matchMedia("(any-pointer: fine)").matches || matchMedia("(any-hover: hover)").matches || // iPads might have an input device that can hover, so assume it has anyHover
isIPad || // if no onTouchStartInWindow then the browser is indicating that it is not a touch only device
// see above note for supportsTouchEvents
!onTouchStartInWindow;

// node_modules/@angular-slider/ngx-slider/fesm2022/angular-slider-ngx-slider.mjs
var _c0 = (a0, a1, a2) => ({
  tooltip: a0,
  placement: a1,
  content: a2
});
function TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) {
}
function TooltipWrapperComponent_ng_container_0_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TooltipWrapperComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TooltipWrapperComponent_ng_container_0_1_Template, 1, 0, null, 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c0, ctx_r0.tooltip, ctx_r0.placement, ctx_r0.content));
  }
}
function TooltipWrapperComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("title", ctx_r0.tooltip)("data-tooltip-placement", ctx_r0.placement);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.content, " ");
  }
}
var _c1 = ["tooltipTemplate"];
var _c2 = ["leftOuterSelectionBar"];
var _c3 = ["rightOuterSelectionBar"];
var _c4 = ["fullBar"];
var _c5 = ["selectionBar"];
var _c6 = ["minHandle"];
var _c7 = ["maxHandle"];
var _c8 = ["floorLabel"];
var _c9 = ["ceilLabel"];
var _c10 = ["minHandleLabel"];
var _c11 = ["maxHandleLabel"];
var _c12 = ["combinedLabel"];
var _c13 = ["ticksElement"];
var _c14 = (a0) => ({
  "ngx-slider-selected": a0
});
function SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ngx-slider-tooltip-wrapper", 32);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("template", ctx_r1.tooltipTemplate)("tooltip", t_r1.valueTooltip)("placement", t_r1.valueTooltipPlacement)("content", t_r1.value);
  }
}
function SliderComponent_span_28_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 33);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerText", t_r1.legend);
  }
}
function SliderComponent_span_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", t_r1.legend, \u0275\u0275sanitizeHtml);
  }
}
function SliderComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275element(1, "ngx-slider-tooltip-wrapper", 28);
    \u0275\u0275template(2, SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template, 1, 4, "ngx-slider-tooltip-wrapper", 29)(3, SliderComponent_span_28_span_3_Template, 1, 1, "span", 30)(4, SliderComponent_span_28_span_4_Template, 1, 1, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c14, t_r1.selected))("ngStyle", t_r1.style);
    \u0275\u0275advance();
    \u0275\u0275property("template", ctx_r1.tooltipTemplate)("tooltip", t_r1.tooltip)("placement", t_r1.tooltipPlacement);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r1.value !== null && t_r1.value !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r1.legend !== null && t_r1.legend !== void 0 && ctx_r1.allowUnsafeHtmlInSlider === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r1.legend !== null && t_r1.legend !== void 0 && (ctx_r1.allowUnsafeHtmlInSlider === null || ctx_r1.allowUnsafeHtmlInSlider === void 0 || ctx_r1.allowUnsafeHtmlInSlider));
  }
}
var LabelType;
(function(LabelType2) {
  LabelType2[LabelType2["Low"] = 0] = "Low";
  LabelType2[LabelType2["High"] = 1] = "High";
  LabelType2[LabelType2["Floor"] = 2] = "Floor";
  LabelType2[LabelType2["Ceil"] = 3] = "Ceil";
  LabelType2[LabelType2["TickValue"] = 4] = "TickValue";
})(LabelType || (LabelType = {}));
var Options = class {
  /** Minimum value for a slider.
    Not applicable when using stepsArray. */
  floor = 0;
  /** Maximum value for a slider.
    Not applicable when using stepsArray. */
  ceil = null;
  /** Step between each value.
    Not applicable when using stepsArray. */
  step = 1;
  /** The minimum range authorized on the slider.
    Applies to range slider only.
    When using stepsArray, expressed as index into stepsArray. */
  minRange = null;
  /** The maximum range authorized on the slider.
    Applies to range slider only.
    When using stepsArray, expressed as index into stepsArray. */
  maxRange = null;
  /** Set to true to have a push behavior. When the min handle goes above the max,
    the max is moved as well (and vice-versa). The range between min and max is
    defined by the step option (defaults to 1) and can also be overriden by
    the minRange option. Applies to range slider only. */
  pushRange = false;
  /** The minimum value authorized on the slider.
    When using stepsArray, expressed as index into stepsArray. */
  minLimit = null;
  /** The maximum value authorized on the slider.
    When using stepsArray, expressed as index into stepsArray. */
  maxLimit = null;
  /** Custom translate function. Use this if you want to translate values displayed
      on the slider. */
  translate = null;
  /** Custom function for combining overlapping labels in range slider.
      It takes the min and max values (already translated with translate fuction)
      and should return how these two values should be combined.
      If not provided, the default function will join the two values with
      ' - ' as separator. */
  combineLabels = null;
  /** Use to display legend under ticks (thus, it needs to be used along with
     showTicks or showTicksValues). The function will be called with each tick
     value and returned content will be displayed under the tick as a legend.
     If the returned value is null, then no legend is displayed under
     the corresponding tick.You can also directly provide the legend values
     in the stepsArray option. */
  getLegend = null;
  /** Use to display a custom legend of a stepItem from stepsArray.
    It will be the same as getLegend but for stepsArray. */
  getStepLegend = null;
  /** If you want to display a slider with non linear/number steps.
     Just pass an array with each slider value and that's it; the floor, ceil and step settings
     of the slider will be computed automatically.
     By default, the value model and valueHigh model values will be the value of the selected item
     in the stepsArray.
     They can also be bound to the index of the selected item by setting the bindIndexForStepsArray
     option to true. */
  stepsArray = null;
  /** Set to true to bind the index of the selected item to value model and valueHigh model. */
  bindIndexForStepsArray = false;
  /** When set to true and using a range slider, the range can be dragged by the selection bar.
    Applies to range slider only. */
  draggableRange = false;
  /** Same as draggableRange but the slider range can't be changed.
    Applies to range slider only. */
  draggableRangeOnly = false;
  /** Set to true to always show the selection bar before the slider handle. */
  showSelectionBar = false;
  /** Set to true to always show the selection bar after the slider handle. */
  showSelectionBarEnd = false;
  /**  Set a number to draw the selection bar between this value and the slider handle.
    When using stepsArray, expressed as index into stepsArray. */
  showSelectionBarFromValue = null;
  /**  Only for range slider. Set to true to visualize in different colour the areas
    on the left/right (top/bottom for vertical range slider) of selection bar between the handles. */
  showOuterSelectionBars = false;
  /** Set to true to hide pointer labels */
  hidePointerLabels = false;
  /** Set to true to hide min / max labels  */
  hideLimitLabels = false;
  /** Set to false to disable the auto-hiding behavior of the limit labels. */
  autoHideLimitLabels = true;
  /** Set to true to make the slider read-only. */
  readOnly = false;
  /** Set to true to disable the slider. */
  disabled = false;
  /** Set to true to display a tick for each step of the slider. */
  showTicks = false;
  /** Set to true to display a tick and the step value for each step of the slider.. */
  showTicksValues = false;
  /* The step between each tick to display. If not set, the step value is used.
    Not used when ticksArray is specified. */
  tickStep = null;
  /* The step between displaying each tick step value.
    If not set, then tickStep or step is used, depending on which one is set. */
  tickValueStep = null;
  /** Use to display ticks at specific positions.
    The array contains the index of the ticks that should be displayed.
    For example, [0, 1, 5] will display a tick for the first, second and sixth values. */
  ticksArray = null;
  /** Used to display a tooltip when a tick is hovered.
    Set to a function that returns the tooltip content for a given value. */
  ticksTooltip = null;
  /** Same as ticksTooltip but for ticks values. */
  ticksValuesTooltip = null;
  /** Set to true to display the slider vertically.
    The slider will take the full height of its parent.
    Changing this value at runtime is not currently supported. */
  vertical = false;
  /** Function that returns the current color of the selection bar.
    If your color won't change, don't use this option but set it through CSS.
    If the returned color depends on a model value (either value or valueHigh),
    you should use the argument passed to the function.
    Indeed, when the function is called, there is no certainty that the model
    has already been updated.*/
  getSelectionBarColor = null;
  /** Function that returns the color of a tick. showTicks must be enabled. */
  getTickColor = null;
  /** Function that returns the current color of a pointer.
    If your color won't change, don't use this option but set it through CSS.
    If the returned color depends on a model value (either value or valueHigh),
    you should use the argument passed to the function.
    Indeed, when the function is called, there is no certainty that the model has already been updated.
    To handle range slider pointers independently, you should evaluate pointerType within the given
    function where "min" stands for value model and "max" for valueHigh model values. */
  getPointerColor = null;
  /** Handles are focusable (on click or with tab) and can be modified using the following keyboard controls:
    Left/bottom arrows: -1
    Right/top arrows: +1
    Page-down: -10%
    Page-up: +10%
    Home: minimum value
    End: maximum value
   */
  keyboardSupport = true;
  /** If you display the slider in an element that uses transform: scale(0.5), set the scale value to 2
    so that the slider is rendered properly and the events are handled correctly. */
  scale = 1;
  /** If you display the slider in an element that uses transform: rotate(90deg), set the rotate value to 90
   so that the slider is rendered properly and the events are handled correctly. Value is in degrees. */
  rotate = 0;
  /** Set to true to force the value(s) to be rounded to the step, even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, they are not rounded
    and can be between two steps. */
  enforceStep = true;
  /** Set to true to force the value(s) to be normalised to allowed range (floor to ceil), even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
    the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation. */
  enforceRange = true;
  /** Set to true to force the value(s) to be rounded to the nearest step value, even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
    the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation. */
  enforceStepsArray = true;
  /** Set to true to prevent to user from switching the min and max handles. Applies to range slider only. */
  noSwitching = false;
  /** Set to true to only bind events on slider handles. */
  onlyBindHandles = false;
  /** Set to true to show graphs right to left.
    If vertical is true it will be from top to bottom and left / right arrow functions reversed. */
  rightToLeft = false;
  /** Set to true to reverse keyboard navigation:
    Right/top arrows: -1
    Left/bottom arrows: +1
    Page-up: -10%
    Page-down: +10%
    End: minimum value
    Home: maximum value
   */
  reversedControls = false;
  /** Set to true to keep the slider labels inside the slider bounds. */
  boundPointerLabels = true;
  /** Set to true to use a logarithmic scale to display the slider.  */
  logScale = false;
  /** Function that returns the position on the slider for a given value.
    The position must be a percentage between 0 and 1.
    The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly. */
  customValueToPosition = null;
  /** Function that returns the value for a given position on the slider.
    The position is a percentage between 0 and 1.
    The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly. */
  customPositionToValue = null;
  /** Precision limit for calculated values.
    Values used in calculations will be rounded to this number of significant digits
    to prevent accumulating small floating-point errors. */
  precisionLimit = 12;
  /** Use to display the selection bar as a gradient.
    The given object must contain from and to properties which are colors. */
  selectionBarGradient = null;
  /** Use to add a label directly to the slider for accessibility. Adds the aria-label attribute. */
  ariaLabel = "ngx-slider";
  /** Use instead of ariaLabel to reference the id of an element which will be used to label the slider.
    Adds the aria-labelledby attribute. */
  ariaLabelledBy = null;
  /** Use to add a label directly to the slider range for accessibility. Adds the aria-label attribute. */
  ariaLabelHigh = "ngx-slider-max";
  /** Use instead of ariaLabelHigh to reference the id of an element which will be used to label the slider range.
    Adds the aria-labelledby attribute. */
  ariaLabelledByHigh = null;
  /** Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the handle */
  handleDimension = null;
  /** Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the bar */
  barDimension = null;
  /** Enable/disable CSS animations */
  animate = true;
  /** Enable/disable CSS animations while moving the slider */
  animateOnMove = false;
};
var AllowUnsafeHtmlInSlider = new InjectionToken("AllowUnsafeHtmlInSlider");
var PointerType;
(function(PointerType2) {
  PointerType2[PointerType2["Min"] = 0] = "Min";
  PointerType2[PointerType2["Max"] = 1] = "Max";
})(PointerType || (PointerType = {}));
var ChangeContext = class {
  value;
  highValue;
  pointerType;
};
var ValueHelper = class {
  static isNullOrUndefined(value) {
    return value === void 0 || value === null;
  }
  static areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; ++i) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  static linearValueToPosition(val, minVal, maxVal) {
    const range = maxVal - minVal;
    return (val - minVal) / range;
  }
  static logValueToPosition(val, minVal, maxVal) {
    val = Math.log(val);
    minVal = Math.log(minVal);
    maxVal = Math.log(maxVal);
    const range = maxVal - minVal;
    return (val - minVal) / range;
  }
  static linearPositionToValue(percent, minVal, maxVal) {
    return percent * (maxVal - minVal) + minVal;
  }
  static logPositionToValue(percent, minVal, maxVal) {
    minVal = Math.log(minVal);
    maxVal = Math.log(maxVal);
    const value = percent * (maxVal - minVal) + minVal;
    return Math.exp(value);
  }
  static findStepIndex(modelValue, stepsArray) {
    const differences = stepsArray.map((step) => Math.abs(modelValue - step.value));
    let minDifferenceIndex = 0;
    for (let index = 0; index < stepsArray.length; index++) {
      if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
        minDifferenceIndex = index;
      }
    }
    return minDifferenceIndex;
  }
};
var CompatibilityHelper = class {
  /** Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari) */
  static isTouchEvent(event) {
    if (window.TouchEvent !== void 0) {
      return event instanceof TouchEvent;
    }
    return event.touches !== void 0;
  }
  /** Detect presence of ResizeObserver API */
  static isResizeObserverAvailable() {
    return window.ResizeObserver !== void 0;
  }
};
var MathHelper = class {
  /* Round numbers to a given number of significant digits */
  static roundToPrecisionLimit(value, precisionLimit) {
    return +value.toPrecision(precisionLimit);
  }
  static isModuloWithinPrecisionLimit(value, modulo, precisionLimit) {
    const limit = Math.pow(10, -precisionLimit);
    return Math.abs(value % modulo) <= limit || Math.abs(Math.abs(value % modulo) - modulo) <= limit;
  }
  static clampToRange(value, floor, ceil) {
    return Math.min(Math.max(value, floor), ceil);
  }
};
var EventListener = class {
  eventName = null;
  events = null;
  eventsSubscription = null;
  teardownCallback = null;
};
var EventListenerHelper = class {
  renderer;
  constructor(renderer) {
    this.renderer = renderer;
  }
  attachPassiveEventListener(nativeElement, eventName, callback, throttleInterval) {
    if (supportsPassiveEvents !== true) {
      return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
    }
    const listener = new EventListener();
    listener.eventName = eventName;
    listener.events = new Subject();
    const observerCallback = (event) => {
      listener.events.next(event);
    };
    nativeElement.addEventListener(eventName, observerCallback, {
      passive: true,
      capture: false
    });
    listener.teardownCallback = () => {
      nativeElement.removeEventListener(eventName, observerCallback, {
        passive: true,
        capture: false
      });
    };
    listener.eventsSubscription = listener.events.pipe(
      !ValueHelper.isNullOrUndefined(throttleInterval) ? throttleTime(throttleInterval, void 0, {
        leading: true,
        trailing: true
      }) : tap(() => {
      })
      // no-op
    ).subscribe((event) => {
      callback(event);
    });
    return listener;
  }
  detachEventListener(eventListener) {
    if (!ValueHelper.isNullOrUndefined(eventListener.eventsSubscription)) {
      eventListener.eventsSubscription.unsubscribe();
      eventListener.eventsSubscription = null;
    }
    if (!ValueHelper.isNullOrUndefined(eventListener.events)) {
      eventListener.events.complete();
      eventListener.events = null;
    }
    if (!ValueHelper.isNullOrUndefined(eventListener.teardownCallback)) {
      eventListener.teardownCallback();
      eventListener.teardownCallback = null;
    }
  }
  attachEventListener(nativeElement, eventName, callback, throttleInterval) {
    const listener = new EventListener();
    listener.eventName = eventName;
    listener.events = new Subject();
    const observerCallback = (event) => {
      listener.events.next(event);
    };
    listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
    listener.eventsSubscription = listener.events.pipe(
      !ValueHelper.isNullOrUndefined(throttleInterval) ? throttleTime(throttleInterval, void 0, {
        leading: true,
        trailing: true
      }) : tap(() => {
      })
      // no-op
    ).subscribe((event) => {
      callback(event);
    });
    return listener;
  }
};
var SliderElementDirective = class _SliderElementDirective {
  elemRef;
  renderer;
  changeDetectionRef;
  _position = 0;
  get position() {
    return this._position;
  }
  _dimension = 0;
  get dimension() {
    return this._dimension;
  }
  _alwaysHide = false;
  get alwaysHide() {
    return this._alwaysHide;
  }
  _vertical = false;
  get vertical() {
    return this._vertical;
  }
  _scale = 1;
  get scale() {
    return this._scale;
  }
  _rotate = 0;
  get rotate() {
    return this._rotate;
  }
  opacity = 1;
  visibility = "visible";
  left = "";
  bottom = "";
  height = "";
  width = "";
  transform = "";
  eventListenerHelper;
  eventListeners = [];
  constructor(elemRef, renderer, changeDetectionRef) {
    this.elemRef = elemRef;
    this.renderer = renderer;
    this.changeDetectionRef = changeDetectionRef;
    this.eventListenerHelper = new EventListenerHelper(this.renderer);
  }
  setAlwaysHide(hide) {
    this._alwaysHide = hide;
    if (hide) {
      this.visibility = "hidden";
    } else {
      this.visibility = "visible";
    }
  }
  hide() {
    this.opacity = 0;
  }
  show() {
    if (this.alwaysHide) {
      return;
    }
    this.opacity = 1;
  }
  isVisible() {
    if (this.alwaysHide) {
      return false;
    }
    return this.opacity !== 0;
  }
  setVertical(vertical) {
    this._vertical = vertical;
    if (this._vertical) {
      this.left = "";
      this.width = "";
    } else {
      this.bottom = "";
      this.height = "";
    }
  }
  setScale(scale) {
    this._scale = scale;
  }
  setRotate(rotate) {
    this._rotate = rotate;
    this.transform = "rotate(" + rotate + "deg)";
  }
  getRotate() {
    return this._rotate;
  }
  // Set element left/top position depending on whether slider is horizontal or vertical
  setPosition(pos) {
    if (this._position !== pos && !this.isRefDestroyed()) {
      this.changeDetectionRef.markForCheck();
    }
    this._position = pos;
    if (this._vertical) {
      this.bottom = Math.round(pos) + "px";
    } else {
      this.left = Math.round(pos) + "px";
    }
  }
  // Calculate element's width/height depending on whether slider is horizontal or vertical
  calculateDimension() {
    const val = this.getBoundingClientRect();
    if (this.vertical) {
      this._dimension = (val.bottom - val.top) * this.scale;
    } else {
      this._dimension = (val.right - val.left) * this.scale;
    }
  }
  // Set element width/height depending on whether slider is horizontal or vertical
  setDimension(dim) {
    if (this._dimension !== dim && !this.isRefDestroyed()) {
      this.changeDetectionRef.markForCheck();
    }
    this._dimension = dim;
    if (this._vertical) {
      this.height = Math.round(dim) + "px";
    } else {
      this.width = Math.round(dim) + "px";
    }
  }
  getBoundingClientRect() {
    return this.elemRef.nativeElement.getBoundingClientRect();
  }
  on(eventName, callback, debounceInterval) {
    const listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
    this.eventListeners.push(listener);
  }
  onPassive(eventName, callback, debounceInterval) {
    const listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
    this.eventListeners.push(listener);
  }
  off(eventName) {
    let listenersToKeep;
    let listenersToRemove;
    if (!ValueHelper.isNullOrUndefined(eventName)) {
      listenersToKeep = this.eventListeners.filter((event) => event.eventName !== eventName);
      listenersToRemove = this.eventListeners.filter((event) => event.eventName === eventName);
    } else {
      listenersToKeep = [];
      listenersToRemove = this.eventListeners;
    }
    for (const listener of listenersToRemove) {
      this.eventListenerHelper.detachEventListener(listener);
    }
    this.eventListeners = listenersToKeep;
  }
  isRefDestroyed() {
    return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef["destroyed"];
  }
  static \u0275fac = function SliderElementDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderElementDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SliderElementDirective,
    selectors: [["", "ngxSliderElement", ""]],
    hostVars: 14,
    hostBindings: function SliderElementDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("opacity", ctx.opacity)("visibility", ctx.visibility)("left", ctx.left)("bottom", ctx.bottom)("height", ctx.height)("width", ctx.width)("transform", ctx.transform);
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderElementDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxSliderElement]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    opacity: [{
      type: HostBinding,
      args: ["style.opacity"]
    }],
    visibility: [{
      type: HostBinding,
      args: ["style.visibility"]
    }],
    left: [{
      type: HostBinding,
      args: ["style.left"]
    }],
    bottom: [{
      type: HostBinding,
      args: ["style.bottom"]
    }],
    height: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    width: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    transform: [{
      type: HostBinding,
      args: ["style.transform"]
    }]
  });
})();
var SliderHandleDirective = class _SliderHandleDirective extends SliderElementDirective {
  active = false;
  role = "";
  tabindex = "";
  ariaOrientation = "";
  ariaLabel = "";
  ariaLabelledBy = "";
  ariaValueNow = "";
  ariaValueText = "";
  ariaValueMin = "";
  ariaValueMax = "";
  focus() {
    this.elemRef.nativeElement.focus();
  }
  focusIfNeeded() {
    if (document.activeElement !== this.elemRef.nativeElement) {
      this.elemRef.nativeElement.focus();
    }
  }
  constructor(elemRef, renderer, changeDetectionRef) {
    super(elemRef, renderer, changeDetectionRef);
  }
  static \u0275fac = function SliderHandleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderHandleDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SliderHandleDirective,
    selectors: [["", "ngxSliderHandle", ""]],
    hostVars: 11,
    hostBindings: function SliderHandleDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.role)("tabindex", ctx.tabindex)("aria-orientation", ctx.ariaOrientation)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-valuenow", ctx.ariaValueNow)("aria-valuetext", ctx.ariaValueText)("aria-valuemin", ctx.ariaValueMin)("aria-valuemax", ctx.ariaValueMax);
        \u0275\u0275classProp("ngx-slider-active", ctx.active);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxSliderHandle]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    active: [{
      type: HostBinding,
      args: ["class.ngx-slider-active"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    tabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaOrientation: [{
      type: HostBinding,
      args: ["attr.aria-orientation"]
    }],
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    ariaLabelledBy: [{
      type: HostBinding,
      args: ["attr.aria-labelledby"]
    }],
    ariaValueNow: [{
      type: HostBinding,
      args: ["attr.aria-valuenow"]
    }],
    ariaValueText: [{
      type: HostBinding,
      args: ["attr.aria-valuetext"]
    }],
    ariaValueMin: [{
      type: HostBinding,
      args: ["attr.aria-valuemin"]
    }],
    ariaValueMax: [{
      type: HostBinding,
      args: ["attr.aria-valuemax"]
    }]
  });
})();
var SliderLabelDirective = class _SliderLabelDirective extends SliderElementDirective {
  allowUnsafeHtmlInSlider;
  _value = null;
  get value() {
    return this._value;
  }
  constructor(elemRef, renderer, changeDetectionRef, allowUnsafeHtmlInSlider) {
    super(elemRef, renderer, changeDetectionRef);
    this.allowUnsafeHtmlInSlider = allowUnsafeHtmlInSlider;
  }
  setValue(value) {
    let recalculateDimension = false;
    if (!this.alwaysHide && (ValueHelper.isNullOrUndefined(this.value) || this.value.length !== value.length || this.value.length > 0 && this.dimension === 0)) {
      recalculateDimension = true;
    }
    this._value = value;
    if (this.allowUnsafeHtmlInSlider === false) {
      this.elemRef.nativeElement.innerText = value;
    } else {
      this.elemRef.nativeElement.innerHTML = value;
    }
    if (recalculateDimension) {
      this.calculateDimension();
    }
  }
  static \u0275fac = function SliderLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderLabelDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(AllowUnsafeHtmlInSlider, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SliderLabelDirective,
    selectors: [["", "ngxSliderLabel", ""]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxSliderLabel]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [AllowUnsafeHtmlInSlider]
    }, {
      type: Optional
    }]
  }], null);
})();
var TooltipWrapperComponent = class _TooltipWrapperComponent {
  template;
  tooltip;
  placement;
  content;
  static \u0275fac = function TooltipWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipWrapperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TooltipWrapperComponent,
    selectors: [["ngx-slider-tooltip-wrapper"]],
    inputs: {
      template: "template",
      tooltip: "tooltip",
      placement: "placement",
      content: "content"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-slider-inner-tooltip"]],
    template: function TooltipWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TooltipWrapperComponent_ng_container_0_Template, 2, 6, "ng-container", 0)(1, TooltipWrapperComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.template);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.template);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    styles: [".ngx-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipWrapperComponent, [{
    type: Component,
    args: [{
      selector: "ngx-slider-tooltip-wrapper",
      template: '<ng-container *ngIf="template">\n  <ng-template *ngTemplateOutlet="template; context: {tooltip: tooltip, placement: placement, content: content}"></ng-template>\n</ng-container>\n\n<ng-container *ngIf="!template">\n  <div class="ngx-slider-inner-tooltip" [attr.title]="tooltip" [attr.data-tooltip-placement]="placement">\n    {{content}}\n  </div>\n</ng-container>',
      styles: [".ngx-slider-inner-tooltip{height:100%}\n"]
    }]
  }], null, {
    template: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    content: [{
      type: Input
    }]
  });
})();
var Tick = class {
  selected = false;
  style = {};
  tooltip = null;
  tooltipPlacement = null;
  value = null;
  valueTooltip = null;
  valueTooltipPlacement = null;
  legend = null;
};
var Dragging = class {
  active = false;
  value = 0;
  difference = 0;
  position = 0;
  lowLimit = 0;
  highLimit = 0;
};
var ModelValues = class {
  value;
  highValue;
  static compare(x, y) {
    if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    return x.value === y.value && x.highValue === y.highValue;
  }
};
var ModelChange = class extends ModelValues {
  // Flag used to by-pass distinctUntilChanged() filter on input values
  // (sometimes there is a need to pass values through even though the model values have not changed)
  forceChange;
  static compare(x, y) {
    if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    return x.value === y.value && x.highValue === y.highValue && x.forceChange === y.forceChange;
  }
};
var NGX_SLIDER_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: forwardRef(() => SliderComponent),
  multi: true
};
var SliderComponent = class _SliderComponent {
  renderer;
  elementRef;
  changeDetectionRef;
  zone;
  allowUnsafeHtmlInSlider;
  // Add ngx-slider class to the host element - this is static, should never change
  sliderElementNgxSliderClass = true;
  // Model for low value of slider. For simple slider, this is the only input. For range slider, this is the low value.
  value = null;
  // Output for low value slider to support two-way bindings
  valueChange = new EventEmitter();
  // Model for high value of slider. Not used in simple slider. For range slider, this is the high value.
  highValue = null;
  // Output for high value slider to support two-way bindings
  highValueChange = new EventEmitter();
  // An object with all the other options of the slider.
  // Each option can be updated at runtime and the slider will automatically be re-rendered.
  options = new Options();
  // Event emitted when user starts interaction with the slider
  userChangeStart = new EventEmitter();
  // Event emitted on each change coming from user interaction
  userChange = new EventEmitter();
  // Event emitted when user finishes interaction with the slider
  userChangeEnd = new EventEmitter();
  manualRefreshSubscription;
  // Input event that triggers slider refresh (re-positioning of slider elements)
  set manualRefresh(manualRefresh) {
    this.unsubscribeManualRefresh();
    this.manualRefreshSubscription = manualRefresh.subscribe(() => {
      setTimeout(() => this.calculateViewDimensionsAndDetectChanges());
    });
  }
  triggerFocusSubscription;
  // Input event that triggers setting focus on given slider handle
  set triggerFocus(triggerFocus) {
    this.unsubscribeTriggerFocus();
    this.triggerFocusSubscription = triggerFocus.subscribe((pointerType) => {
      this.focusPointer(pointerType);
    });
  }
  // Slider type, true means range slider
  get range() {
    return !ValueHelper.isNullOrUndefined(this.value) && !ValueHelper.isNullOrUndefined(this.highValue);
  }
  // Set to true if init method already executed
  initHasRun = false;
  // Changes in model inputs are passed through this subject
  // These are all changes coming in from outside the component through input bindings or reactive form inputs
  inputModelChangeSubject = new Subject();
  inputModelChangeSubscription = null;
  // Changes to model outputs are passed through this subject
  // These are all changes that need to be communicated to output emitters and registered callbacks
  outputModelChangeSubject = new Subject();
  outputModelChangeSubscription = null;
  // Low value synced to model low value
  viewLowValue = null;
  // High value synced to model high value
  viewHighValue = null;
  // Options synced to model options, based on defaults
  viewOptions = new Options();
  // Half of the width or height of the slider handles
  handleHalfDimension = 0;
  // Maximum position the slider handle can have
  maxHandlePosition = 0;
  // Which handle is currently tracked for move events
  currentTrackingPointer = null;
  // Internal variable to keep track of the focus element
  currentFocusPointer = null;
  // Used to call onStart on the first keydown event
  firstKeyDown = false;
  // Current touch id of touch event being handled
  touchId = null;
  // Values recorded when first dragging the bar
  dragging = new Dragging();
  /* Slider DOM elements */
  // Left selection bar outside two handles
  leftOuterSelectionBarElement;
  // Right selection bar outside two handles
  rightOuterSelectionBarElement;
  // The whole slider bar
  fullBarElement;
  // Highlight between two handles
  selectionBarElement;
  // Left slider handle
  minHandleElement;
  // Right slider handle
  maxHandleElement;
  // Floor label
  floorLabelElement;
  // Ceiling label
  ceilLabelElement;
  // Label above the low value
  minHandleLabelElement;
  // Label above the high value
  maxHandleLabelElement;
  // Combined label
  combinedLabelElement;
  // The ticks
  ticksElement;
  // Optional custom template for displaying tooltips
  tooltipTemplate;
  // Host element class bindings
  sliderElementVerticalClass = false;
  sliderElementAnimateClass = false;
  sliderElementWithLegendClass = false;
  sliderElementDisabledAttr = null;
  sliderElementAriaLabel = "ngx-slider";
  // CSS styles and class flags
  barStyle = {};
  minPointerStyle = {};
  maxPointerStyle = {};
  fullBarTransparentClass = false;
  selectionBarDraggableClass = false;
  ticksUnderValuesClass = false;
  // Whether to show/hide ticks
  get showTicks() {
    return this.viewOptions.showTicks;
  }
  /* If tickStep is set or ticksArray is specified.
     In this case, ticks values should be displayed below the slider. */
  intermediateTicks = false;
  // Ticks array as displayed in view
  ticks = [];
  // Event listeners
  eventListenerHelper = null;
  onMoveEventListener = null;
  onEndEventListener = null;
  // Whether currently moving the slider (between onStart() and onEnd())
  moving = false;
  // Observer for slider element resize events
  resizeObserver = null;
  // Callbacks for reactive forms support
  onTouchedCallback = null;
  onChangeCallback = null;
  constructor(renderer, elementRef, changeDetectionRef, zone, allowUnsafeHtmlInSlider) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.changeDetectionRef = changeDetectionRef;
    this.zone = zone;
    this.allowUnsafeHtmlInSlider = allowUnsafeHtmlInSlider;
    this.eventListenerHelper = new EventListenerHelper(this.renderer);
  }
  // OnInit interface
  ngOnInit() {
    this.viewOptions = new Options();
    Object.assign(this.viewOptions, this.options);
    this.updateDisabledState();
    this.updateVerticalState();
    this.updateAriaLabel();
  }
  // AfterViewInit interface
  ngAfterViewInit() {
    this.applyOptions();
    this.subscribeInputModelChangeSubject();
    this.subscribeOutputModelChangeSubject();
    this.renormaliseModelValues();
    this.viewLowValue = this.modelValueToViewValue(this.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(this.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.updateVerticalState();
    this.manageElementsStyle();
    this.updateDisabledState();
    this.calculateViewDimensions();
    this.addAccessibility();
    this.updateCeilLabel();
    this.updateFloorLabel();
    this.initHandles();
    this.manageEventsBindings();
    this.updateAriaLabel();
    this.subscribeResizeObserver();
    this.initHasRun = true;
    if (!this.isRefDestroyed()) {
      this.changeDetectionRef.detectChanges();
    }
  }
  // OnChanges interface
  ngOnChanges(changes) {
    if (!ValueHelper.isNullOrUndefined(changes.options) && JSON.stringify(changes.options.previousValue) !== JSON.stringify(changes.options.currentValue)) {
      this.onChangeOptions();
    }
    if (!ValueHelper.isNullOrUndefined(changes.value) || !ValueHelper.isNullOrUndefined(changes.highValue)) {
      this.inputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        forceChange: false,
        internalChange: false
      });
    }
  }
  // OnDestroy interface
  ngOnDestroy() {
    this.unbindEvents();
    this.unsubscribeResizeObserver();
    this.unsubscribeInputModelChangeSubject();
    this.unsubscribeOutputModelChangeSubject();
    this.unsubscribeManualRefresh();
    this.unsubscribeTriggerFocus();
  }
  // ControlValueAccessor interface
  writeValue(obj) {
    if (obj instanceof Array) {
      this.value = obj[0];
      this.highValue = obj[1];
    } else {
      this.value = obj;
    }
    this.inputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      forceChange: false,
      internalChange: false
    });
  }
  // ControlValueAccessor interface
  registerOnChange(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
  }
  // ControlValueAccessor interface
  registerOnTouched(onTouchedCallback) {
    this.onTouchedCallback = onTouchedCallback;
  }
  // ControlValueAccessor interface
  setDisabledState(isDisabled) {
    this.viewOptions.disabled = isDisabled;
    this.updateDisabledState();
  }
  setAriaLabel(ariaLabel) {
    this.viewOptions.ariaLabel = ariaLabel;
    this.updateAriaLabel();
  }
  onResize(event) {
    this.calculateViewDimensionsAndDetectChanges();
  }
  subscribeInputModelChangeSubject() {
    this.inputModelChangeSubscription = this.inputModelChangeSubject.pipe(
      distinctUntilChanged(ModelChange.compare),
      // Hack to reset the status of the distinctUntilChanged() - if a "fake" event comes through with forceChange=true,
      // we forcefully by-pass distinctUntilChanged(), but otherwise drop the event
      filter((modelChange) => !modelChange.forceChange && !modelChange.internalChange)
    ).subscribe((modelChange) => this.applyInputModelChange(modelChange));
  }
  subscribeOutputModelChangeSubject() {
    this.outputModelChangeSubscription = this.outputModelChangeSubject.pipe(distinctUntilChanged(ModelChange.compare)).subscribe((modelChange) => this.publishOutputModelChange(modelChange));
  }
  subscribeResizeObserver() {
    if (CompatibilityHelper.isResizeObserverAvailable()) {
      this.resizeObserver = new ResizeObserver(() => this.calculateViewDimensionsAndDetectChanges());
      this.resizeObserver.observe(this.elementRef.nativeElement);
    }
  }
  unsubscribeResizeObserver() {
    if (CompatibilityHelper.isResizeObserverAvailable() && this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  unsubscribeOnMove() {
    if (!ValueHelper.isNullOrUndefined(this.onMoveEventListener)) {
      this.eventListenerHelper.detachEventListener(this.onMoveEventListener);
      this.onMoveEventListener = null;
    }
  }
  unsubscribeOnEnd() {
    if (!ValueHelper.isNullOrUndefined(this.onEndEventListener)) {
      this.eventListenerHelper.detachEventListener(this.onEndEventListener);
      this.onEndEventListener = null;
    }
  }
  unsubscribeInputModelChangeSubject() {
    if (!ValueHelper.isNullOrUndefined(this.inputModelChangeSubscription)) {
      this.inputModelChangeSubscription.unsubscribe();
      this.inputModelChangeSubscription = null;
    }
  }
  unsubscribeOutputModelChangeSubject() {
    if (!ValueHelper.isNullOrUndefined(this.outputModelChangeSubscription)) {
      this.outputModelChangeSubscription.unsubscribe();
      this.outputModelChangeSubscription = null;
    }
  }
  unsubscribeManualRefresh() {
    if (!ValueHelper.isNullOrUndefined(this.manualRefreshSubscription)) {
      this.manualRefreshSubscription.unsubscribe();
      this.manualRefreshSubscription = null;
    }
  }
  unsubscribeTriggerFocus() {
    if (!ValueHelper.isNullOrUndefined(this.triggerFocusSubscription)) {
      this.triggerFocusSubscription.unsubscribe();
      this.triggerFocusSubscription = null;
    }
  }
  getPointerElement(pointerType) {
    if (pointerType === PointerType.Min) {
      return this.minHandleElement;
    } else if (pointerType === PointerType.Max) {
      return this.maxHandleElement;
    }
    return null;
  }
  getCurrentTrackingValue() {
    if (this.currentTrackingPointer === PointerType.Min) {
      return this.viewLowValue;
    } else if (this.currentTrackingPointer === PointerType.Max) {
      return this.viewHighValue;
    }
    return null;
  }
  modelValueToViewValue(modelValue) {
    if (ValueHelper.isNullOrUndefined(modelValue)) {
      return NaN;
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      return ValueHelper.findStepIndex(+modelValue, this.viewOptions.stepsArray);
    }
    return +modelValue;
  }
  viewValueToModelValue(viewValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      return this.getStepValue(viewValue);
    }
    return viewValue;
  }
  getStepValue(sliderValue) {
    const step = this.viewOptions.stepsArray[sliderValue];
    return !ValueHelper.isNullOrUndefined(step) ? step.value : NaN;
  }
  applyViewChange() {
    this.value = this.viewValueToModelValue(this.viewLowValue);
    if (this.range) {
      this.highValue = this.viewValueToModelValue(this.viewHighValue);
    }
    this.outputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      userEventInitiated: true,
      forceChange: false
    });
    this.inputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      forceChange: false,
      internalChange: true
    });
  }
  // Apply model change to the slider view
  applyInputModelChange(modelChange) {
    const normalisedModelChange = this.normaliseModelValues(modelChange);
    const normalisationChange = !ModelValues.compare(modelChange, normalisedModelChange);
    if (normalisationChange) {
      this.value = normalisedModelChange.value;
      this.highValue = normalisedModelChange.highValue;
    }
    this.viewLowValue = this.modelValueToViewValue(normalisedModelChange.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(normalisedModelChange.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.updateLowHandle(this.valueToPosition(this.viewLowValue));
    if (this.range) {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
    }
    this.updateSelectionBar();
    this.updateTicksScale();
    this.updateAriaAttributes();
    if (this.range) {
      this.updateCombinedLabel();
    }
    this.outputModelChangeSubject.next({
      value: normalisedModelChange.value,
      highValue: normalisedModelChange.highValue,
      forceChange: normalisationChange,
      userEventInitiated: false
    });
  }
  // Publish model change to output event emitters and registered callbacks
  publishOutputModelChange(modelChange) {
    const emitOutputs = () => {
      this.valueChange.emit(modelChange.value);
      if (this.range) {
        this.highValueChange.emit(modelChange.highValue);
      }
      if (!ValueHelper.isNullOrUndefined(this.onChangeCallback)) {
        if (this.range) {
          this.onChangeCallback([modelChange.value, modelChange.highValue]);
        } else {
          this.onChangeCallback(modelChange.value);
        }
      }
      if (!ValueHelper.isNullOrUndefined(this.onTouchedCallback)) {
        if (this.range) {
          this.onTouchedCallback([modelChange.value, modelChange.highValue]);
        } else {
          this.onTouchedCallback(modelChange.value);
        }
      }
    };
    if (modelChange.userEventInitiated) {
      emitOutputs();
      this.userChange.emit(this.getChangeContext());
    } else {
      setTimeout(() => {
        emitOutputs();
      });
    }
  }
  normaliseModelValues(input) {
    const normalisedInput = new ModelValues();
    normalisedInput.value = input.value;
    normalisedInput.highValue = input.highValue;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
      if (this.viewOptions.enforceStepsArray) {
        const valueIndex = ValueHelper.findStepIndex(normalisedInput.value, this.viewOptions.stepsArray);
        normalisedInput.value = this.viewOptions.stepsArray[valueIndex].value;
        if (this.range) {
          const highValueIndex = ValueHelper.findStepIndex(normalisedInput.highValue, this.viewOptions.stepsArray);
          normalisedInput.highValue = this.viewOptions.stepsArray[highValueIndex].value;
        }
      }
      return normalisedInput;
    }
    if (this.viewOptions.enforceStep) {
      normalisedInput.value = this.roundStep(normalisedInput.value);
      if (this.range) {
        normalisedInput.highValue = this.roundStep(normalisedInput.highValue);
      }
    }
    if (this.viewOptions.enforceRange) {
      normalisedInput.value = MathHelper.clampToRange(normalisedInput.value, this.viewOptions.floor, this.viewOptions.ceil);
      if (this.range) {
        normalisedInput.highValue = MathHelper.clampToRange(normalisedInput.highValue, this.viewOptions.floor, this.viewOptions.ceil);
      }
      if (this.range && input.value > input.highValue) {
        if (this.viewOptions.noSwitching) {
          normalisedInput.value = normalisedInput.highValue;
        } else {
          const tempValue = input.value;
          normalisedInput.value = input.highValue;
          normalisedInput.highValue = tempValue;
        }
      }
    }
    return normalisedInput;
  }
  renormaliseModelValues() {
    const previousModelValues = {
      value: this.value,
      highValue: this.highValue
    };
    const normalisedModelValues = this.normaliseModelValues(previousModelValues);
    if (!ModelValues.compare(normalisedModelValues, previousModelValues)) {
      this.value = normalisedModelValues.value;
      this.highValue = normalisedModelValues.highValue;
      this.outputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        forceChange: true,
        userEventInitiated: false
      });
    }
  }
  onChangeOptions() {
    if (!this.initHasRun) {
      return;
    }
    const previousOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
    this.applyOptions();
    const newOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
    const rebindEvents = !ValueHelper.areArraysEqual(previousOptionsInfluencingEventBindings, newOptionsInfluencingEventBindings);
    this.renormaliseModelValues();
    this.viewLowValue = this.modelValueToViewValue(this.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(this.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.resetSlider(rebindEvents);
  }
  // Read the user options and apply them to the slider model
  applyOptions() {
    this.viewOptions = new Options();
    Object.assign(this.viewOptions, this.options);
    this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
    this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
    if (this.viewOptions.draggableRangeOnly) {
      this.viewOptions.draggableRange = true;
    }
    this.viewOptions.showTicks = this.viewOptions.showTicks || this.viewOptions.showTicksValues || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray);
    if (this.viewOptions.showTicks && (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray))) {
      this.intermediateTicks = true;
    }
    this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar || this.viewOptions.showSelectionBarEnd || !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue);
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
      this.applyStepsArrayOptions();
    } else {
      this.applyFloorCeilOptions();
    }
    if (ValueHelper.isNullOrUndefined(this.viewOptions.combineLabels)) {
      this.viewOptions.combineLabels = (minValue, maxValue) => {
        return minValue + " - " + maxValue;
      };
    }
    if (this.viewOptions.logScale && this.viewOptions.floor === 0) {
      throw Error("Can't use floor=0 with logarithmic scale");
    }
  }
  applyStepsArrayOptions() {
    this.viewOptions.floor = 0;
    this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
    this.viewOptions.step = 1;
    if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
      this.viewOptions.translate = (modelValue) => {
        if (this.viewOptions.bindIndexForStepsArray) {
          return String(this.getStepValue(modelValue));
        }
        return String(modelValue);
      };
    }
  }
  applyFloorCeilOptions() {
    if (ValueHelper.isNullOrUndefined(this.viewOptions.step)) {
      this.viewOptions.step = 1;
    } else {
      this.viewOptions.step = +this.viewOptions.step;
      if (this.viewOptions.step <= 0) {
        this.viewOptions.step = 1;
      }
    }
    if (ValueHelper.isNullOrUndefined(this.viewOptions.ceil) || ValueHelper.isNullOrUndefined(this.viewOptions.floor)) {
      throw Error("floor and ceil options must be supplied");
    }
    this.viewOptions.ceil = +this.viewOptions.ceil;
    this.viewOptions.floor = +this.viewOptions.floor;
    if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
      this.viewOptions.translate = (value) => String(value);
    }
  }
  // Resets slider
  resetSlider(rebindEvents = true) {
    this.manageElementsStyle();
    this.addAccessibility();
    this.updateCeilLabel();
    this.updateFloorLabel();
    if (rebindEvents) {
      this.unbindEvents();
      this.manageEventsBindings();
    }
    this.updateDisabledState();
    this.updateAriaLabel();
    this.calculateViewDimensions();
    this.refocusPointerIfNeeded();
  }
  // Sets focus on the specified pointer
  focusPointer(pointerType) {
    if (pointerType !== PointerType.Min && pointerType !== PointerType.Max) {
      pointerType = PointerType.Min;
    }
    if (pointerType === PointerType.Min) {
      this.minHandleElement.focus();
    } else if (this.range && pointerType === PointerType.Max) {
      this.maxHandleElement.focus();
    }
  }
  refocusPointerIfNeeded() {
    if (!ValueHelper.isNullOrUndefined(this.currentFocusPointer)) {
      const element = this.getPointerElement(this.currentFocusPointer);
      element.focusIfNeeded();
    }
  }
  // Update each elements style based on options
  manageElementsStyle() {
    this.updateScale();
    this.floorLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
    this.ceilLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
    const hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
    this.minHandleLabelElement.setAlwaysHide(hideLabelsForTicks || this.viewOptions.hidePointerLabels);
    this.maxHandleLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
    this.combinedLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
    this.selectionBarElement.setAlwaysHide(!this.range && !this.viewOptions.showSelectionBar);
    this.leftOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
    this.rightOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
    this.fullBarTransparentClass = this.range && this.viewOptions.showOuterSelectionBars;
    this.selectionBarDraggableClass = this.viewOptions.draggableRange && !this.viewOptions.onlyBindHandles;
    this.ticksUnderValuesClass = this.intermediateTicks && this.options.showTicksValues;
    if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
      this.updateVerticalState();
      setTimeout(() => {
        this.resetSlider();
      });
    }
    if (this.sliderElementAnimateClass !== this.viewOptions.animate) {
      setTimeout(() => {
        this.sliderElementAnimateClass = this.viewOptions.animate;
      });
    }
    this.updateRotate();
  }
  // Manage the events bindings based on readOnly and disabled options
  manageEventsBindings() {
    if (this.viewOptions.disabled || this.viewOptions.readOnly) {
      this.unbindEvents();
    } else {
      this.bindEvents();
    }
  }
  // Set the disabled state based on disabled option
  updateDisabledState() {
    this.sliderElementDisabledAttr = this.viewOptions.disabled ? "disabled" : null;
  }
  // Set the aria-label state based on ariaLabel option
  updateAriaLabel() {
    this.sliderElementAriaLabel = this.viewOptions.ariaLabel || "nxg-slider";
  }
  // Set vertical state based on vertical option
  updateVerticalState() {
    this.sliderElementVerticalClass = this.viewOptions.vertical;
    for (const element of this.getAllSliderElements()) {
      if (!ValueHelper.isNullOrUndefined(element)) {
        element.setVertical(this.viewOptions.vertical);
      }
    }
  }
  updateScale() {
    for (const element of this.getAllSliderElements()) {
      element.setScale(this.viewOptions.scale);
    }
  }
  updateRotate() {
    for (const element of this.getAllSliderElements()) {
      element.setRotate(this.viewOptions.rotate);
    }
  }
  getAllSliderElements() {
    return [this.leftOuterSelectionBarElement, this.rightOuterSelectionBarElement, this.fullBarElement, this.selectionBarElement, this.minHandleElement, this.maxHandleElement, this.floorLabelElement, this.ceilLabelElement, this.minHandleLabelElement, this.maxHandleLabelElement, this.combinedLabelElement, this.ticksElement];
  }
  // Initialize slider handles positions and labels
  // Run only once during initialization and every time view port changes size
  initHandles() {
    this.updateLowHandle(this.valueToPosition(this.viewLowValue));
    if (this.range) {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
    }
    this.updateSelectionBar();
    if (this.range) {
      this.updateCombinedLabel();
    }
    this.updateTicksScale();
  }
  // Adds accessibility attributes, run only once during initialization
  addAccessibility() {
    this.updateAriaAttributes();
    this.minHandleElement.role = "slider";
    if (this.viewOptions.keyboardSupport && !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
      this.minHandleElement.tabindex = "0";
    } else {
      this.minHandleElement.tabindex = "";
    }
    this.minHandleElement.ariaOrientation = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? "vertical" : "horizontal";
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabel)) {
      this.minHandleElement.ariaLabel = this.viewOptions.ariaLabel;
    } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledBy)) {
      this.minHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledBy;
    }
    if (this.range) {
      this.maxHandleElement.role = "slider";
      if (this.viewOptions.keyboardSupport && !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
        this.maxHandleElement.tabindex = "0";
      } else {
        this.maxHandleElement.tabindex = "";
      }
      this.maxHandleElement.ariaOrientation = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? "vertical" : "horizontal";
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelHigh)) {
        this.maxHandleElement.ariaLabel = this.viewOptions.ariaLabelHigh;
      } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledByHigh)) {
        this.maxHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledByHigh;
      }
    }
  }
  // Updates aria attributes according to current values
  updateAriaAttributes() {
    this.minHandleElement.ariaValueNow = (+this.value).toString();
    this.minHandleElement.ariaValueText = this.viewOptions.translate(+this.value, LabelType.Low);
    this.minHandleElement.ariaValueMin = this.viewOptions.floor.toString();
    this.minHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
    if (this.range) {
      this.maxHandleElement.ariaValueNow = (+this.highValue).toString();
      this.maxHandleElement.ariaValueText = this.viewOptions.translate(+this.highValue, LabelType.High);
      this.maxHandleElement.ariaValueMin = this.viewOptions.floor.toString();
      this.maxHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
    }
  }
  // Calculate dimensions that are dependent on view port size
  // Run once during initialization and every time view port changes size.
  calculateViewDimensions() {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.handleDimension)) {
      this.minHandleElement.setDimension(this.viewOptions.handleDimension);
    } else {
      this.minHandleElement.calculateDimension();
    }
    const handleWidth = this.minHandleElement.dimension;
    this.handleHalfDimension = handleWidth / 2;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.barDimension)) {
      this.fullBarElement.setDimension(this.viewOptions.barDimension);
    } else {
      this.fullBarElement.calculateDimension();
    }
    this.maxHandlePosition = this.fullBarElement.dimension - handleWidth;
    if (this.initHasRun) {
      this.updateFloorLabel();
      this.updateCeilLabel();
      this.initHandles();
    }
  }
  calculateViewDimensionsAndDetectChanges() {
    this.calculateViewDimensions();
    if (!this.isRefDestroyed()) {
      this.changeDetectionRef.detectChanges();
    }
  }
  /**
   * If the slider reference is already destroyed
   * @returns boolean - true if ref is destroyed
   */
  isRefDestroyed() {
    return this.changeDetectionRef["destroyed"];
  }
  // Update the ticks position
  updateTicksScale() {
    if (!this.viewOptions.showTicks && this.sliderElementWithLegendClass) {
      setTimeout(() => {
        this.sliderElementWithLegendClass = false;
      });
      return;
    }
    const ticksArray = !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray) ? this.viewOptions.ticksArray : this.getTicksArray();
    const translate2 = this.viewOptions.vertical ? "translateY" : "translateX";
    if (this.viewOptions.rightToLeft) {
      ticksArray.reverse();
    }
    const tickValueStep = !ValueHelper.isNullOrUndefined(this.viewOptions.tickValueStep) ? this.viewOptions.tickValueStep : !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step;
    let hasAtLeastOneLegend = false;
    const newTicks = ticksArray.map((value) => {
      let position = this.valueToPosition(value);
      if (this.viewOptions.vertical) {
        position = this.maxHandlePosition - position;
      }
      const translation = translate2 + "(" + Math.round(position) + "px)";
      const tick = new Tick();
      tick.selected = this.isTickSelected(value);
      tick.style = {
        "-webkit-transform": translation,
        "-moz-transform": translation,
        "-o-transform": translation,
        "-ms-transform": translation,
        transform: translation
      };
      if (tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
        tick.style["background-color"] = this.getSelectionBarColor();
      }
      if (!tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getTickColor)) {
        tick.style["background-color"] = this.getTickColor(value);
      }
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksTooltip)) {
        tick.tooltip = this.viewOptions.ticksTooltip(value);
        tick.tooltipPlacement = this.viewOptions.vertical ? "right" : "top";
      }
      if (this.viewOptions.showTicksValues && !ValueHelper.isNullOrUndefined(tickValueStep) && MathHelper.isModuloWithinPrecisionLimit(value, tickValueStep, this.viewOptions.precisionLimit)) {
        tick.value = this.getDisplayValue(value, LabelType.TickValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksValuesTooltip)) {
          tick.valueTooltip = this.viewOptions.ticksValuesTooltip(value);
          tick.valueTooltipPlacement = this.viewOptions.vertical ? "right" : "top";
        }
      }
      let legend = null;
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
        const step = this.viewOptions.stepsArray[value];
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getStepLegend)) {
          legend = this.viewOptions.getStepLegend(step);
        } else if (!ValueHelper.isNullOrUndefined(step)) {
          legend = step.legend;
        }
      } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.getLegend)) {
        legend = this.viewOptions.getLegend(value);
      }
      if (!ValueHelper.isNullOrUndefined(legend)) {
        tick.legend = legend;
        hasAtLeastOneLegend = true;
      }
      return tick;
    });
    if (this.sliderElementWithLegendClass !== hasAtLeastOneLegend) {
      setTimeout(() => {
        this.sliderElementWithLegendClass = hasAtLeastOneLegend;
      });
    }
    if (!ValueHelper.isNullOrUndefined(this.ticks) && this.ticks.length === newTicks.length) {
      for (let i = 0; i < newTicks.length; ++i) {
        Object.assign(this.ticks[i], newTicks[i]);
      }
    } else {
      this.ticks = newTicks;
      if (!this.isRefDestroyed()) {
        this.changeDetectionRef.detectChanges();
      }
    }
  }
  getTicksArray() {
    if (!this.viewOptions.showTicks) {
      return [];
    }
    const step = !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step;
    const ticksArray = [];
    const numberOfValues = 1 + Math.floor(MathHelper.roundToPrecisionLimit(Math.abs(this.viewOptions.ceil - this.viewOptions.floor) / step, this.viewOptions.precisionLimit));
    for (let index = 0; index < numberOfValues; ++index) {
      ticksArray.push(MathHelper.roundToPrecisionLimit(this.viewOptions.floor + step * index, this.viewOptions.precisionLimit));
    }
    return ticksArray;
  }
  isTickSelected(value) {
    if (!this.range) {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
        const center = this.viewOptions.showSelectionBarFromValue;
        if (this.viewLowValue > center && value >= center && value <= this.viewLowValue) {
          return true;
        } else if (this.viewLowValue < center && value <= center && value >= this.viewLowValue) {
          return true;
        }
      } else if (this.viewOptions.showSelectionBarEnd) {
        if (value >= this.viewLowValue) {
          return true;
        }
      } else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
        return true;
      }
    }
    if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
      return true;
    }
    return false;
  }
  // Update position of the floor label
  updateFloorLabel() {
    if (!this.floorLabelElement.alwaysHide) {
      this.floorLabelElement.setValue(this.getDisplayValue(this.viewOptions.floor, LabelType.Floor));
      this.floorLabelElement.calculateDimension();
      const position = this.viewOptions.rightToLeft ? this.fullBarElement.dimension - this.floorLabelElement.dimension : 0;
      this.floorLabelElement.setPosition(position);
    }
  }
  // Update position of the ceiling label
  updateCeilLabel() {
    if (!this.ceilLabelElement.alwaysHide) {
      this.ceilLabelElement.setValue(this.getDisplayValue(this.viewOptions.ceil, LabelType.Ceil));
      this.ceilLabelElement.calculateDimension();
      const position = this.viewOptions.rightToLeft ? 0 : this.fullBarElement.dimension - this.ceilLabelElement.dimension;
      this.ceilLabelElement.setPosition(position);
    }
  }
  // Update slider handles and label positions
  updateHandles(which, newPos) {
    if (which === PointerType.Min) {
      this.updateLowHandle(newPos);
    } else if (which === PointerType.Max) {
      this.updateHighHandle(newPos);
    }
    this.updateSelectionBar();
    this.updateTicksScale();
    if (this.range) {
      this.updateCombinedLabel();
    }
  }
  // Helper function to work out the position for handle labels depending on RTL or not
  getHandleLabelPos(labelType, newPos) {
    const labelDimension = labelType === PointerType.Min ? this.minHandleLabelElement.dimension : this.maxHandleLabelElement.dimension;
    const nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDimension;
    const endOfBarPos = this.fullBarElement.dimension - labelDimension;
    if (!this.viewOptions.boundPointerLabels) {
      return nearHandlePos;
    }
    if (this.viewOptions.rightToLeft && labelType === PointerType.Min || !this.viewOptions.rightToLeft && labelType === PointerType.Max) {
      return Math.min(nearHandlePos, endOfBarPos);
    } else {
      return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
    }
  }
  // Update low slider handle position and label
  updateLowHandle(newPos) {
    this.minHandleElement.setPosition(newPos);
    this.minHandleLabelElement.setValue(this.getDisplayValue(this.viewLowValue, LabelType.Low));
    this.minHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Min, newPos));
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
      this.minPointerStyle = {
        backgroundColor: this.getPointerColor(PointerType.Min)
      };
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Update high slider handle position and label
  updateHighHandle(newPos) {
    this.maxHandleElement.setPosition(newPos);
    this.maxHandleLabelElement.setValue(this.getDisplayValue(this.viewHighValue, LabelType.High));
    this.maxHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Max, newPos));
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
      this.maxPointerStyle = {
        backgroundColor: this.getPointerColor(PointerType.Max)
      };
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Show/hide floor/ceiling label
  updateFloorAndCeilLabelsVisibility() {
    if (this.viewOptions.hidePointerLabels) {
      return;
    }
    let floorLabelHidden = false;
    let ceilLabelHidden = false;
    const isMinLabelAtFloor = this.isLabelBelowFloorLabel(this.minHandleLabelElement);
    const isMinLabelAtCeil = this.isLabelAboveCeilLabel(this.minHandleLabelElement);
    const isMaxLabelAtCeil = this.isLabelAboveCeilLabel(this.maxHandleLabelElement);
    const isCombinedLabelAtFloor = this.isLabelBelowFloorLabel(this.combinedLabelElement);
    const isCombinedLabelAtCeil = this.isLabelAboveCeilLabel(this.combinedLabelElement);
    if (isMinLabelAtFloor) {
      floorLabelHidden = true;
      this.floorLabelElement.hide();
    } else {
      floorLabelHidden = false;
      this.floorLabelElement.show();
    }
    if (isMinLabelAtCeil) {
      ceilLabelHidden = true;
      this.ceilLabelElement.hide();
    } else {
      ceilLabelHidden = false;
      this.ceilLabelElement.show();
    }
    if (this.range) {
      const hideCeil = this.combinedLabelElement.isVisible() ? isCombinedLabelAtCeil : isMaxLabelAtCeil;
      const hideFloor = this.combinedLabelElement.isVisible() ? isCombinedLabelAtFloor : isMinLabelAtFloor;
      if (hideCeil) {
        this.ceilLabelElement.hide();
      } else if (!ceilLabelHidden) {
        this.ceilLabelElement.show();
      }
      if (hideFloor) {
        this.floorLabelElement.hide();
      } else if (!floorLabelHidden) {
        this.floorLabelElement.show();
      }
    }
  }
  isLabelBelowFloorLabel(label) {
    const pos = label.position;
    const dim = label.dimension;
    const floorPos = this.floorLabelElement.position;
    const floorDim = this.floorLabelElement.dimension;
    return this.viewOptions.rightToLeft ? pos + dim >= floorPos - 2 : pos <= floorPos + floorDim + 2;
  }
  isLabelAboveCeilLabel(label) {
    const pos = label.position;
    const dim = label.dimension;
    const ceilPos = this.ceilLabelElement.position;
    const ceilDim = this.ceilLabelElement.dimension;
    return this.viewOptions.rightToLeft ? pos <= ceilPos + ceilDim + 2 : pos + dim >= ceilPos - 2;
  }
  // Update slider selection bar, combined label and range label
  updateSelectionBar() {
    let position = 0;
    let dimension = 0;
    const isSelectionBarFromRight = this.viewOptions.rightToLeft ? !this.viewOptions.showSelectionBarEnd : this.viewOptions.showSelectionBarEnd;
    const positionForRange = this.viewOptions.rightToLeft ? this.maxHandleElement.position + this.handleHalfDimension : this.minHandleElement.position + this.handleHalfDimension;
    if (this.range) {
      dimension = Math.abs(this.maxHandleElement.position - this.minHandleElement.position);
      position = positionForRange;
    } else {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
        const center = this.viewOptions.showSelectionBarFromValue;
        const centerPosition = this.valueToPosition(center);
        const isModelGreaterThanCenter = this.viewOptions.rightToLeft ? this.viewLowValue <= center : this.viewLowValue > center;
        if (isModelGreaterThanCenter) {
          dimension = this.minHandleElement.position - centerPosition;
          position = centerPosition + this.handleHalfDimension;
        } else {
          dimension = centerPosition - this.minHandleElement.position;
          position = this.minHandleElement.position + this.handleHalfDimension;
        }
      } else if (isSelectionBarFromRight) {
        dimension = Math.ceil(Math.abs(this.maxHandlePosition - this.minHandleElement.position) + this.handleHalfDimension);
        position = Math.floor(this.minHandleElement.position + this.handleHalfDimension);
      } else {
        dimension = this.minHandleElement.position + this.handleHalfDimension;
        position = 0;
      }
    }
    this.selectionBarElement.setDimension(dimension);
    this.selectionBarElement.setPosition(position);
    if (this.range && this.viewOptions.showOuterSelectionBars) {
      if (this.viewOptions.rightToLeft) {
        this.rightOuterSelectionBarElement.setDimension(position);
        this.rightOuterSelectionBarElement.setPosition(0);
        this.fullBarElement.calculateDimension();
        this.leftOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
        this.leftOuterSelectionBarElement.setPosition(position + dimension);
      } else {
        this.leftOuterSelectionBarElement.setDimension(position);
        this.leftOuterSelectionBarElement.setPosition(0);
        this.fullBarElement.calculateDimension();
        this.rightOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
        this.rightOuterSelectionBarElement.setPosition(position + dimension);
      }
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
      const color = this.getSelectionBarColor();
      this.barStyle = {
        backgroundColor: color
      };
    } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.selectionBarGradient)) {
      const offset = !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue) ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue) : 0;
      const reversed = offset - position > 0 && !isSelectionBarFromRight || offset - position <= 0 && isSelectionBarFromRight;
      const direction = this.viewOptions.vertical ? reversed ? "bottom" : "top" : reversed ? "left" : "right";
      this.barStyle = {
        backgroundImage: "linear-gradient(to " + direction + ", " + this.viewOptions.selectionBarGradient.from + " 0%," + this.viewOptions.selectionBarGradient.to + " 100%)"
      };
      if (this.viewOptions.vertical) {
        this.barStyle.backgroundPosition = "center " + (offset + dimension + position + (reversed ? -this.handleHalfDimension : 0)) + "px";
        this.barStyle.backgroundSize = "100% " + (this.fullBarElement.dimension - this.handleHalfDimension) + "px";
      } else {
        this.barStyle.backgroundPosition = offset - position + (reversed ? this.handleHalfDimension : 0) + "px center";
        this.barStyle.backgroundSize = this.fullBarElement.dimension - this.handleHalfDimension + "px 100%";
      }
    }
  }
  // Wrapper around the getSelectionBarColor of the user to pass to correct parameters
  getSelectionBarColor() {
    if (this.range) {
      return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
    }
    return this.viewOptions.getSelectionBarColor(this.value);
  }
  // Wrapper around the getPointerColor of the user to pass to  correct parameters
  getPointerColor(pointerType) {
    if (pointerType === PointerType.Max) {
      return this.viewOptions.getPointerColor(this.highValue, pointerType);
    }
    return this.viewOptions.getPointerColor(this.value, pointerType);
  }
  // Wrapper around the getTickColor of the user to pass to correct parameters
  getTickColor(value) {
    return this.viewOptions.getTickColor(value);
  }
  // Update combined label position and value
  updateCombinedLabel() {
    let isLabelOverlap = null;
    if (this.viewOptions.rightToLeft) {
      isLabelOverlap = this.minHandleLabelElement.position - this.minHandleLabelElement.dimension - 10 <= this.maxHandleLabelElement.position;
    } else {
      isLabelOverlap = this.minHandleLabelElement.position + this.minHandleLabelElement.dimension + 10 >= this.maxHandleLabelElement.position;
    }
    if (isLabelOverlap) {
      const lowDisplayValue = this.getDisplayValue(this.viewLowValue, LabelType.Low);
      const highDisplayValue = this.getDisplayValue(this.viewHighValue, LabelType.High);
      const combinedLabelValue = this.viewOptions.rightToLeft ? this.viewOptions.combineLabels(highDisplayValue, lowDisplayValue) : this.viewOptions.combineLabels(lowDisplayValue, highDisplayValue);
      this.combinedLabelElement.setValue(combinedLabelValue);
      const pos = this.viewOptions.boundPointerLabels ? Math.min(Math.max(this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2, 0), this.fullBarElement.dimension - this.combinedLabelElement.dimension) : this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2;
      this.combinedLabelElement.setPosition(pos);
      this.minHandleLabelElement.hide();
      this.maxHandleLabelElement.hide();
      this.combinedLabelElement.show();
    } else {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
      this.updateLowHandle(this.valueToPosition(this.viewLowValue));
      this.maxHandleLabelElement.show();
      this.minHandleLabelElement.show();
      this.combinedLabelElement.hide();
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Return the translated value if a translate function is provided else the original value
  getDisplayValue(value, which) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      value = this.getStepValue(value);
    }
    return this.viewOptions.translate(value, which);
  }
  // Round value to step and precision based on minValue
  roundStep(value, customStep) {
    const step = !ValueHelper.isNullOrUndefined(customStep) ? customStep : this.viewOptions.step;
    let steppedDifference = MathHelper.roundToPrecisionLimit((value - this.viewOptions.floor) / step, this.viewOptions.precisionLimit);
    steppedDifference = Math.round(steppedDifference) * step;
    return MathHelper.roundToPrecisionLimit(this.viewOptions.floor + steppedDifference, this.viewOptions.precisionLimit);
  }
  // Translate value to pixel position
  valueToPosition(val) {
    let fn = ValueHelper.linearValueToPosition;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.customValueToPosition)) {
      fn = this.viewOptions.customValueToPosition;
    } else if (this.viewOptions.logScale) {
      fn = ValueHelper.logValueToPosition;
    }
    val = MathHelper.clampToRange(val, this.viewOptions.floor, this.viewOptions.ceil);
    let percent = fn(val, this.viewOptions.floor, this.viewOptions.ceil);
    if (ValueHelper.isNullOrUndefined(percent)) {
      percent = 0;
    }
    if (this.viewOptions.rightToLeft) {
      percent = 1 - percent;
    }
    return percent * this.maxHandlePosition;
  }
  // Translate position to model value
  positionToValue(position) {
    let percent = position / this.maxHandlePosition;
    if (this.viewOptions.rightToLeft) {
      percent = 1 - percent;
    }
    let fn = ValueHelper.linearPositionToValue;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.customPositionToValue)) {
      fn = this.viewOptions.customPositionToValue;
    } else if (this.viewOptions.logScale) {
      fn = ValueHelper.logPositionToValue;
    }
    const value = fn(percent, this.viewOptions.floor, this.viewOptions.ceil);
    return !ValueHelper.isNullOrUndefined(value) ? value : 0;
  }
  // Get the X-coordinate or Y-coordinate of an event
  getEventXY(event, targetTouchId) {
    if (event instanceof MouseEvent) {
      return this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? event.clientY : event.clientX;
    }
    let touchIndex = 0;
    const touches = event.touches;
    if (!ValueHelper.isNullOrUndefined(targetTouchId)) {
      for (let i = 0; i < touches.length; i++) {
        if (touches[i].identifier === targetTouchId) {
          touchIndex = i;
          break;
        }
      }
    }
    return this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? touches[touchIndex].clientY : touches[touchIndex].clientX;
  }
  // Compute the event position depending on whether the slider is horizontal or vertical
  getEventPosition(event, targetTouchId) {
    const sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
    const sliderPos = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
    let eventPos = 0;
    if (this.viewOptions.vertical || this.viewOptions.rotate !== 0) {
      eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
    } else {
      eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
    }
    return eventPos * this.viewOptions.scale - this.handleHalfDimension;
  }
  // Get the handle closest to an event
  getNearestHandle(event) {
    if (!this.range) {
      return PointerType.Min;
    }
    const position = this.getEventPosition(event);
    const distanceMin = Math.abs(position - this.minHandleElement.position);
    const distanceMax = Math.abs(position - this.maxHandleElement.position);
    if (distanceMin < distanceMax) {
      return PointerType.Min;
    } else if (distanceMin > distanceMax) {
      return PointerType.Max;
    } else if (!this.viewOptions.rightToLeft) {
      return position < this.minHandleElement.position ? PointerType.Min : PointerType.Max;
    }
    return position > this.minHandleElement.position ? PointerType.Min : PointerType.Max;
  }
  // Bind mouse and touch events to slider handles
  bindEvents() {
    const draggableRange = this.viewOptions.draggableRange;
    if (!this.viewOptions.onlyBindHandles) {
      this.selectionBarElement.on("mousedown", (event) => this.onBarStart(null, draggableRange, event, true, true, true));
    }
    if (this.viewOptions.draggableRangeOnly) {
      this.minHandleElement.on("mousedown", (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
      this.maxHandleElement.on("mousedown", (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
    } else {
      this.minHandleElement.on("mousedown", (event) => this.onStart(PointerType.Min, event, true, true));
      if (this.range) {
        this.maxHandleElement.on("mousedown", (event) => this.onStart(PointerType.Max, event, true, true));
      }
      if (!this.viewOptions.onlyBindHandles) {
        this.fullBarElement.on("mousedown", (event) => this.onStart(null, event, true, true, true));
        this.ticksElement.on("mousedown", (event) => this.onStart(null, event, true, true, true, true));
      }
    }
    if (!this.viewOptions.onlyBindHandles) {
      this.selectionBarElement.onPassive("touchstart", (event) => this.onBarStart(null, draggableRange, event, true, true, true));
    }
    if (this.viewOptions.draggableRangeOnly) {
      this.minHandleElement.onPassive("touchstart", (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
      this.maxHandleElement.onPassive("touchstart", (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
    } else {
      this.minHandleElement.onPassive("touchstart", (event) => this.onStart(PointerType.Min, event, true, true));
      if (this.range) {
        this.maxHandleElement.onPassive("touchstart", (event) => this.onStart(PointerType.Max, event, true, true));
      }
      if (!this.viewOptions.onlyBindHandles) {
        this.fullBarElement.onPassive("touchstart", (event) => this.onStart(null, event, true, true, true));
        this.ticksElement.onPassive("touchstart", (event) => this.onStart(null, event, false, false, true, true));
      }
    }
    if (this.viewOptions.keyboardSupport) {
      this.minHandleElement.on("focus", () => this.onPointerFocus(PointerType.Min));
      if (this.range) {
        this.maxHandleElement.on("focus", () => this.onPointerFocus(PointerType.Max));
      }
    }
  }
  getOptionsInfluencingEventBindings(options2) {
    return [options2.disabled, options2.readOnly, options2.draggableRange, options2.draggableRangeOnly, options2.onlyBindHandles, options2.keyboardSupport];
  }
  // Unbind mouse and touch events to slider handles
  unbindEvents() {
    this.unsubscribeOnMove();
    this.unsubscribeOnEnd();
    for (const element of this.getAllSliderElements()) {
      if (!ValueHelper.isNullOrUndefined(element)) {
        element.off();
      }
    }
  }
  onBarStart(pointerType, draggableRange, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
    if (draggableRange) {
      this.onDragStart(pointerType, event, bindMove, bindEnd);
    } else {
      this.onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
    }
  }
  // onStart event handler
  onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
    event.stopPropagation();
    if (!CompatibilityHelper.isTouchEvent(event) && !supportsPassiveEvents) {
      event.preventDefault();
    }
    this.moving = false;
    this.calculateViewDimensions();
    if (ValueHelper.isNullOrUndefined(pointerType)) {
      pointerType = this.getNearestHandle(event);
    }
    this.currentTrackingPointer = pointerType;
    const pointerElement = this.getPointerElement(pointerType);
    pointerElement.active = true;
    if (this.viewOptions.keyboardSupport) {
      pointerElement.focus();
    }
    if (bindMove) {
      this.unsubscribeOnMove();
      const onMoveCallback = (e) => this.dragging.active ? this.onDragMove(e) : this.onMove(e);
      if (CompatibilityHelper.isTouchEvent(event)) {
        this.onMoveEventListener = this.eventListenerHelper.attachPassiveEventListener(document, "touchmove", onMoveCallback);
      } else {
        this.onMoveEventListener = this.eventListenerHelper.attachEventListener(document, "mousemove", onMoveCallback);
      }
    }
    if (bindEnd) {
      this.unsubscribeOnEnd();
      const onEndCallback = (e) => this.onEnd(e);
      if (CompatibilityHelper.isTouchEvent(event)) {
        this.onEndEventListener = this.eventListenerHelper.attachPassiveEventListener(document, "touchend", onEndCallback);
      } else {
        this.onEndEventListener = this.eventListenerHelper.attachEventListener(document, "mouseup", onEndCallback);
      }
    }
    this.userChangeStart.emit(this.getChangeContext());
    if (CompatibilityHelper.isTouchEvent(event) && !ValueHelper.isNullOrUndefined(event.changedTouches)) {
      if (ValueHelper.isNullOrUndefined(this.touchId)) {
        this.touchId = event.changedTouches[0].identifier;
      }
    }
    if (simulateImmediateMove) {
      this.onMove(event, true);
    }
    if (simulateImmediateEnd) {
      this.onEnd(event);
    }
  }
  // onMove event handler
  onMove(event, fromTick) {
    let touchForThisSlider = null;
    if (CompatibilityHelper.isTouchEvent(event)) {
      const changedTouches = event.changedTouches;
      for (let i = 0; i < changedTouches.length; i++) {
        if (changedTouches[i].identifier === this.touchId) {
          touchForThisSlider = changedTouches[i];
          break;
        }
      }
      if (ValueHelper.isNullOrUndefined(touchForThisSlider)) {
        return;
      }
    }
    if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
      if (this.moving) {
        this.sliderElementAnimateClass = false;
      }
    }
    this.moving = true;
    const newPos = !ValueHelper.isNullOrUndefined(touchForThisSlider) ? this.getEventPosition(event, touchForThisSlider.identifier) : this.getEventPosition(event);
    let newValue;
    const ceilValue = this.viewOptions.rightToLeft ? this.viewOptions.floor : this.viewOptions.ceil;
    const floorValue = this.viewOptions.rightToLeft ? this.viewOptions.ceil : this.viewOptions.floor;
    if (newPos <= 0) {
      newValue = floorValue;
    } else if (newPos >= this.maxHandlePosition) {
      newValue = ceilValue;
    } else {
      newValue = this.positionToValue(newPos);
      if (fromTick && !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) {
        newValue = this.roundStep(newValue, this.viewOptions.tickStep);
      } else {
        newValue = this.roundStep(newValue);
      }
    }
    this.positionTrackingHandle(newValue);
  }
  onEnd(event) {
    if (CompatibilityHelper.isTouchEvent(event)) {
      const changedTouches = event.changedTouches;
      if (changedTouches[0].identifier !== this.touchId) {
        return;
      }
    }
    this.moving = false;
    if (this.viewOptions.animate) {
      this.sliderElementAnimateClass = true;
    }
    this.touchId = null;
    if (!this.viewOptions.keyboardSupport) {
      this.minHandleElement.active = false;
      this.maxHandleElement.active = false;
      this.currentTrackingPointer = null;
    }
    this.dragging.active = false;
    this.unsubscribeOnMove();
    this.unsubscribeOnEnd();
    this.userChangeEnd.emit(this.getChangeContext());
  }
  onPointerFocus(pointerType) {
    const pointerElement = this.getPointerElement(pointerType);
    pointerElement.on("blur", () => this.onPointerBlur(pointerElement));
    pointerElement.on("keydown", (event) => this.onKeyboardEvent(event));
    pointerElement.on("keyup", () => this.onKeyUp());
    pointerElement.active = true;
    this.currentTrackingPointer = pointerType;
    this.currentFocusPointer = pointerType;
    this.firstKeyDown = true;
  }
  onKeyUp() {
    this.firstKeyDown = true;
    this.userChangeEnd.emit(this.getChangeContext());
  }
  onPointerBlur(pointer) {
    pointer.off("blur");
    pointer.off("keydown");
    pointer.off("keyup");
    pointer.active = false;
    if (ValueHelper.isNullOrUndefined(this.touchId)) {
      this.currentTrackingPointer = null;
      this.currentFocusPointer = null;
    }
  }
  getKeyActions(currentValue) {
    const valueRange = this.viewOptions.ceil - this.viewOptions.floor;
    let increaseStep = currentValue + this.viewOptions.step;
    let decreaseStep = currentValue - this.viewOptions.step;
    let increasePage = currentValue + valueRange / 10;
    let decreasePage = currentValue - valueRange / 10;
    if (this.viewOptions.reversedControls) {
      increaseStep = currentValue - this.viewOptions.step;
      decreaseStep = currentValue + this.viewOptions.step;
      increasePage = currentValue - valueRange / 10;
      decreasePage = currentValue + valueRange / 10;
    }
    const actions = {
      UP: increaseStep,
      DOWN: decreaseStep,
      LEFT: decreaseStep,
      RIGHT: increaseStep,
      PAGEUP: increasePage,
      PAGEDOWN: decreasePage,
      HOME: this.viewOptions.reversedControls ? this.viewOptions.ceil : this.viewOptions.floor,
      END: this.viewOptions.reversedControls ? this.viewOptions.floor : this.viewOptions.ceil
    };
    if (this.viewOptions.rightToLeft) {
      actions.LEFT = increaseStep;
      actions.RIGHT = decreaseStep;
      if (this.viewOptions.vertical || this.viewOptions.rotate !== 0) {
        actions.UP = decreaseStep;
        actions.DOWN = increaseStep;
      }
    }
    return actions;
  }
  onKeyboardEvent(event) {
    const currentValue = this.getCurrentTrackingValue();
    const keyCode = !ValueHelper.isNullOrUndefined(event.keyCode) ? event.keyCode : event.which;
    const keys = {
      38: "UP",
      40: "DOWN",
      37: "LEFT",
      39: "RIGHT",
      33: "PAGEUP",
      34: "PAGEDOWN",
      36: "HOME",
      35: "END"
    };
    const actions = this.getKeyActions(currentValue);
    const key = keys[keyCode];
    const action = actions[key];
    if (ValueHelper.isNullOrUndefined(action) || ValueHelper.isNullOrUndefined(this.currentTrackingPointer)) {
      return;
    }
    event.preventDefault();
    if (this.firstKeyDown) {
      this.firstKeyDown = false;
      this.userChangeStart.emit(this.getChangeContext());
    }
    const actionValue = MathHelper.clampToRange(action, this.viewOptions.floor, this.viewOptions.ceil);
    const newValue = this.roundStep(actionValue);
    if (!this.viewOptions.draggableRangeOnly) {
      this.positionTrackingHandle(newValue);
    } else {
      const difference = this.viewHighValue - this.viewLowValue;
      let newMinValue;
      let newMaxValue;
      if (this.currentTrackingPointer === PointerType.Min) {
        newMinValue = newValue;
        newMaxValue = newValue + difference;
        if (newMaxValue > this.viewOptions.ceil) {
          newMaxValue = this.viewOptions.ceil;
          newMinValue = newMaxValue - difference;
        }
      } else if (this.currentTrackingPointer === PointerType.Max) {
        newMaxValue = newValue;
        newMinValue = newValue - difference;
        if (newMinValue < this.viewOptions.floor) {
          newMinValue = this.viewOptions.floor;
          newMaxValue = newMinValue + difference;
        }
      }
      this.positionTrackingBar(newMinValue, newMaxValue);
    }
  }
  // onDragStart event handler, handles dragging of the middle bar
  onDragStart(pointerType, event, bindMove, bindEnd) {
    const position = this.getEventPosition(event);
    this.dragging = new Dragging();
    this.dragging.active = true;
    this.dragging.value = this.positionToValue(position);
    this.dragging.difference = this.viewHighValue - this.viewLowValue;
    this.dragging.lowLimit = this.viewOptions.rightToLeft ? this.minHandleElement.position - position : position - this.minHandleElement.position;
    this.dragging.highLimit = this.viewOptions.rightToLeft ? position - this.maxHandleElement.position : this.maxHandleElement.position - position;
    this.onStart(pointerType, event, bindMove, bindEnd);
  }
  /** Get min value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft */
  getMinValue(newPos, outOfBounds, isAbove) {
    const isRTL = this.viewOptions.rightToLeft;
    let value = null;
    if (outOfBounds) {
      if (isAbove) {
        value = isRTL ? this.viewOptions.floor : this.viewOptions.ceil - this.dragging.difference;
      } else {
        value = isRTL ? this.viewOptions.ceil - this.dragging.difference : this.viewOptions.floor;
      }
    } else {
      value = isRTL ? this.positionToValue(newPos + this.dragging.lowLimit) : this.positionToValue(newPos - this.dragging.lowLimit);
    }
    return this.roundStep(value);
  }
  /** Get max value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft */
  getMaxValue(newPos, outOfBounds, isAbove) {
    const isRTL = this.viewOptions.rightToLeft;
    let value = null;
    if (outOfBounds) {
      if (isAbove) {
        value = isRTL ? this.viewOptions.floor + this.dragging.difference : this.viewOptions.ceil;
      } else {
        value = isRTL ? this.viewOptions.ceil : this.viewOptions.floor + this.dragging.difference;
      }
    } else {
      if (isRTL) {
        value = this.positionToValue(newPos + this.dragging.lowLimit) + this.dragging.difference;
      } else {
        value = this.positionToValue(newPos - this.dragging.lowLimit) + this.dragging.difference;
      }
    }
    return this.roundStep(value);
  }
  onDragMove(event) {
    const newPos = this.getEventPosition(event);
    if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
      if (this.moving) {
        this.sliderElementAnimateClass = false;
      }
    }
    this.moving = true;
    let ceilLimit, floorLimit, floorHandleElement, ceilHandleElement;
    if (this.viewOptions.rightToLeft) {
      ceilLimit = this.dragging.lowLimit;
      floorLimit = this.dragging.highLimit;
      floorHandleElement = this.maxHandleElement;
      ceilHandleElement = this.minHandleElement;
    } else {
      ceilLimit = this.dragging.highLimit;
      floorLimit = this.dragging.lowLimit;
      floorHandleElement = this.minHandleElement;
      ceilHandleElement = this.maxHandleElement;
    }
    const isUnderFloorLimit = newPos <= floorLimit;
    const isOverCeilLimit = newPos >= this.maxHandlePosition - ceilLimit;
    let newMinValue;
    let newMaxValue;
    if (isUnderFloorLimit) {
      if (floorHandleElement.position === 0) {
        return;
      }
      newMinValue = this.getMinValue(newPos, true, false);
      newMaxValue = this.getMaxValue(newPos, true, false);
    } else if (isOverCeilLimit) {
      if (ceilHandleElement.position === this.maxHandlePosition) {
        return;
      }
      newMaxValue = this.getMaxValue(newPos, true, true);
      newMinValue = this.getMinValue(newPos, true, true);
    } else {
      newMinValue = this.getMinValue(newPos, false, false);
      newMaxValue = this.getMaxValue(newPos, false, false);
    }
    this.positionTrackingBar(newMinValue, newMaxValue);
  }
  // Set the new value and position for the entire bar
  positionTrackingBar(newMinValue, newMaxValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newMinValue < this.viewOptions.minLimit) {
      newMinValue = this.viewOptions.minLimit;
      newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.viewOptions.precisionLimit);
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newMaxValue > this.viewOptions.maxLimit) {
      newMaxValue = this.viewOptions.maxLimit;
      newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.viewOptions.precisionLimit);
    }
    this.viewLowValue = newMinValue;
    this.viewHighValue = newMaxValue;
    this.applyViewChange();
    this.updateHandles(PointerType.Min, this.valueToPosition(newMinValue));
    this.updateHandles(PointerType.Max, this.valueToPosition(newMaxValue));
  }
  // Set the new value and position to the current tracking handle
  positionTrackingHandle(newValue) {
    newValue = this.applyMinMaxLimit(newValue);
    if (this.range) {
      if (this.viewOptions.pushRange) {
        newValue = this.applyPushRange(newValue);
      } else {
        if (this.viewOptions.noSwitching) {
          if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
            newValue = this.applyMinMaxRange(this.viewHighValue);
          } else if (this.currentTrackingPointer === PointerType.Max && newValue < this.viewLowValue) {
            newValue = this.applyMinMaxRange(this.viewLowValue);
          }
        }
        newValue = this.applyMinMaxRange(newValue);
        if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
          this.viewLowValue = this.viewHighValue;
          this.applyViewChange();
          this.updateHandles(PointerType.Min, this.maxHandleElement.position);
          this.updateAriaAttributes();
          this.currentTrackingPointer = PointerType.Max;
          this.minHandleElement.active = false;
          this.maxHandleElement.active = true;
          if (this.viewOptions.keyboardSupport) {
            this.maxHandleElement.focus();
          }
        } else if (this.currentTrackingPointer === PointerType.Max && newValue < this.viewLowValue) {
          this.viewHighValue = this.viewLowValue;
          this.applyViewChange();
          this.updateHandles(PointerType.Max, this.minHandleElement.position);
          this.updateAriaAttributes();
          this.currentTrackingPointer = PointerType.Min;
          this.maxHandleElement.active = false;
          this.minHandleElement.active = true;
          if (this.viewOptions.keyboardSupport) {
            this.minHandleElement.focus();
          }
        }
      }
    }
    if (this.getCurrentTrackingValue() !== newValue) {
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewLowValue = newValue;
        this.applyViewChange();
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewHighValue = newValue;
        this.applyViewChange();
      }
      this.updateHandles(this.currentTrackingPointer, this.valueToPosition(newValue));
      this.updateAriaAttributes();
    }
  }
  applyMinMaxLimit(newValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newValue < this.viewOptions.minLimit) {
      return this.viewOptions.minLimit;
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newValue > this.viewOptions.maxLimit) {
      return this.viewOptions.maxLimit;
    }
    return newValue;
  }
  applyMinMaxRange(newValue) {
    const oppositeValue = this.currentTrackingPointer === PointerType.Min ? this.viewHighValue : this.viewLowValue;
    const difference = Math.abs(newValue - oppositeValue);
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange)) {
      if (difference < this.viewOptions.minRange) {
        if (this.currentTrackingPointer === PointerType.Min) {
          return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.viewOptions.precisionLimit);
        } else if (this.currentTrackingPointer === PointerType.Max) {
          return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.viewOptions.precisionLimit);
        }
      }
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxRange)) {
      if (difference > this.viewOptions.maxRange) {
        if (this.currentTrackingPointer === PointerType.Min) {
          return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.viewOptions.precisionLimit);
        } else if (this.currentTrackingPointer === PointerType.Max) {
          return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.viewOptions.precisionLimit);
        }
      }
    }
    return newValue;
  }
  applyPushRange(newValue) {
    const difference = this.currentTrackingPointer === PointerType.Min ? this.viewHighValue - newValue : newValue - this.viewLowValue;
    const minRange = !ValueHelper.isNullOrUndefined(this.viewOptions.minRange) ? this.viewOptions.minRange : this.viewOptions.step;
    const maxRange = this.viewOptions.maxRange;
    if (difference < minRange) {
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.viewOptions.ceil), this.viewOptions.precisionLimit);
        newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.viewOptions.floor), this.viewOptions.precisionLimit);
        newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
      }
      this.updateAriaAttributes();
    } else if (!ValueHelper.isNullOrUndefined(maxRange) && difference > maxRange) {
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
      }
      this.updateAriaAttributes();
    }
    return newValue;
  }
  getChangeContext() {
    const changeContext = new ChangeContext();
    changeContext.pointerType = this.currentTrackingPointer;
    changeContext.value = +this.value;
    if (this.range) {
      changeContext.highValue = +this.highValue;
    }
    return changeContext;
  }
  static \u0275fac = function SliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(AllowUnsafeHtmlInSlider, 8));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SliderComponent,
    selectors: [["ngx-slider"]],
    contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tooltipTemplate = _t.first);
      }
    },
    viewQuery: function SliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5, SliderElementDirective);
        \u0275\u0275viewQuery(_c3, 5, SliderElementDirective);
        \u0275\u0275viewQuery(_c4, 5, SliderElementDirective);
        \u0275\u0275viewQuery(_c5, 5, SliderElementDirective);
        \u0275\u0275viewQuery(_c6, 5, SliderHandleDirective);
        \u0275\u0275viewQuery(_c7, 5, SliderHandleDirective);
        \u0275\u0275viewQuery(_c8, 5, SliderLabelDirective);
        \u0275\u0275viewQuery(_c9, 5, SliderLabelDirective);
        \u0275\u0275viewQuery(_c10, 5, SliderLabelDirective);
        \u0275\u0275viewQuery(_c11, 5, SliderLabelDirective);
        \u0275\u0275viewQuery(_c12, 5, SliderLabelDirective);
        \u0275\u0275viewQuery(_c13, 5, SliderElementDirective);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.leftOuterSelectionBarElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rightOuterSelectionBarElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fullBarElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectionBarElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.minHandleElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.maxHandleElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.floorLabelElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ceilLabelElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.minHandleLabelElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.maxHandleLabelElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.combinedLabelElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ticksElement = _t.first);
      }
    },
    hostVars: 10,
    hostBindings: function SliderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function SliderComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow);
      }
      if (rf & 2) {
        \u0275\u0275attribute("disabled", ctx.sliderElementDisabledAttr)("aria-label", ctx.sliderElementAriaLabel);
        \u0275\u0275classProp("ngx-slider", ctx.sliderElementNgxSliderClass)("vertical", ctx.sliderElementVerticalClass)("animate", ctx.sliderElementAnimateClass)("with-legend", ctx.sliderElementWithLegendClass);
      }
    },
    inputs: {
      value: "value",
      highValue: "highValue",
      options: "options",
      manualRefresh: "manualRefresh",
      triggerFocus: "triggerFocus"
    },
    outputs: {
      valueChange: "valueChange",
      highValueChange: "highValueChange",
      userChangeStart: "userChangeStart",
      userChange: "userChange",
      userChangeEnd: "userChangeEnd"
    },
    features: [\u0275\u0275ProvidersFeature([NGX_SLIDER_CONTROL_VALUE_ACCESSOR]), \u0275\u0275NgOnChangesFeature],
    decls: 29,
    vars: 13,
    consts: [["leftOuterSelectionBar", ""], ["rightOuterSelectionBar", ""], ["fullBar", ""], ["selectionBar", ""], ["minHandle", ""], ["maxHandle", ""], ["floorLabel", ""], ["ceilLabel", ""], ["minHandleLabel", ""], ["maxHandleLabel", ""], ["combinedLabel", ""], ["ticksElement", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-left-out-selection"], [1, "ngx-slider-span", "ngx-slider-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-right-out-selection"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-full-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-selection-bar"], [1, "ngx-slider-span", "ngx-slider-bar", "ngx-slider-selection", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-min", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-max", 3, "ngStyle"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-floor"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-ceil"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-value"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-high"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-combined"], ["ngxSliderElement", "", 1, "ngx-slider-ticks", 3, "hidden"], ["class", "ngx-slider-tick", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "ngx-slider-tick", 3, "ngClass", "ngStyle"], [3, "template", "tooltip", "placement"], ["class", "ngx-slider-span ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerText", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerHTML", 4, "ngIf"], [1, "ngx-slider-span", "ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerText"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerHTML"]],
    template: function SliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 12, 0);
        \u0275\u0275element(2, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "span", 14, 1);
        \u0275\u0275element(5, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 15, 2);
        \u0275\u0275element(8, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 16, 3);
        \u0275\u0275element(11, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "span", 18, 4)(14, "span", 19, 5)(16, "span", 20, 6)(18, "span", 21, 7)(20, "span", 22, 8)(22, "span", 23, 9)(24, "span", 24, 10);
        \u0275\u0275elementStart(26, "span", 25, 11);
        \u0275\u0275template(28, SliderComponent_span_28_Template, 5, 10, "span", 26);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("ngx-slider-transparent", ctx.fullBarTransparentClass);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("ngx-slider-draggable", ctx.selectionBarDraggableClass);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngStyle", ctx.barStyle);
        \u0275\u0275advance();
        \u0275\u0275property("ngStyle", ctx.minPointerStyle);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("display", ctx.range ? "inherit" : "none");
        \u0275\u0275property("ngStyle", ctx.maxPointerStyle);
        \u0275\u0275advance(12);
        \u0275\u0275classProp("ngx-slider-ticks-values-under", ctx.ticksUnderValuesClass);
        \u0275\u0275property("hidden", !ctx.showTicks);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.ticks);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgStyle, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent],
    styles: ['.ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;user-select:none;touch-action:pan-y}  .ngx-slider.with-legend{margin-bottom:40px}  .ngx-slider[disabled]{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}  .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}  .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ngx-slider .ngx-slider-draggable{cursor:move}  .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:transparent}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}  .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}  .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}  .ngx-slider .ngx-slider-pointer:after{content:"";width:8px;height:8px;position:absolute;top:12px;left:12px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#fff}  .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}  .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}  .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}  .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}  .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}  .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}  .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;transform:translate(-50%)}  .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;transform:translate(-50%);max-width:50px;white-space:normal}  .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}  .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}  .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;transform:translateY(-28%)}  .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;transform:translateY(-28%);max-width:none;white-space:nowrap}  .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}  .ngx-slider *{transition:none}  .ngx-slider.animate .ngx-slider-bar-wrapper{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-selection{transition:background-color linear .3s}  .ngx-slider.animate .ngx-slider-pointer{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-pointer:after{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-bubble{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity linear .3s}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity linear .3s}  .ngx-slider.animate .ngx-slider-tick{transition:background-color linear .3s}']
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderComponent, [{
    type: Component,
    args: [{
      selector: "ngx-slider",
      providers: [NGX_SLIDER_CONTROL_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.Default,
      template: `<!-- // 0 Left selection bar outside two handles -->
<span ngxSliderElement #leftOuterSelectionBar class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-left-out-selection">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 1 Right selection bar outside two handles -->
<span ngxSliderElement #rightOuterSelectionBar class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-right-out-selection">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 2 The whole slider bar -->
<span ngxSliderElement #fullBar [class.ngx-slider-transparent]="fullBarTransparentClass" class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-full-bar">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 3 Selection bar between two handles -->
<span ngxSliderElement #selectionBar [class.ngx-slider-draggable]="selectionBarDraggableClass" class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-selection-bar">
  <span class="ngx-slider-span ngx-slider-bar ngx-slider-selection" [ngStyle]="barStyle"></span>
</span>
<!-- // 4 Low slider handle -->
<span ngxSliderHandle #minHandle class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min" [ngStyle]=minPointerStyle></span>
<!-- // 5 High slider handle -->
<span ngxSliderHandle #maxHandle [style.display]="range ? 'inherit' : 'none'" class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max" [ngStyle]=maxPointerStyle></span>
<!-- // 6 Floor label -->
<span ngxSliderLabel #floorLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-floor"></span>
<!-- // 7 Ceiling label -->
<span ngxSliderLabel #ceilLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-ceil"></span>
<!-- // 8 Label above the low slider handle -->
<span ngxSliderLabel #minHandleLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-model-value"></span>
<!-- // 9 Label above the high slider handle -->
<span ngxSliderLabel #maxHandleLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-model-high"></span>
<!-- // 10 Combined range label when the slider handles are close ex. 15 - 17 -->
<span ngxSliderLabel #combinedLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-combined"></span>
<!-- // 11 The ticks -->
<span ngxSliderElement #ticksElement [hidden]="!showTicks" [class.ngx-slider-ticks-values-under]="ticksUnderValuesClass" class="ngx-slider-ticks">
  <span *ngFor="let t of ticks" class="ngx-slider-tick" [ngClass]="{'ngx-slider-selected': t.selected}" [ngStyle]="t.style">
    <ngx-slider-tooltip-wrapper [template]="tooltipTemplate" [tooltip]="t.tooltip" [placement]="t.tooltipPlacement"></ngx-slider-tooltip-wrapper>
    <ngx-slider-tooltip-wrapper *ngIf="t.value !== null && t.value !== undefined" class="ngx-slider-span ngx-slider-tick-value"
        [template]="tooltipTemplate" [tooltip]="t.valueTooltip" [placement]="t.valueTooltipPlacement" [content]="t.value"></ngx-slider-tooltip-wrapper>
    <span *ngIf="t.legend !== null && t.legend !== undefined && allowUnsafeHtmlInSlider === false" class="ngx-slider-span ngx-slider-tick-legend" [innerText]="t.legend"></span>
    <span *ngIf="t.legend !== null && t.legend !== undefined && (allowUnsafeHtmlInSlider === null || allowUnsafeHtmlInSlider === undefined || allowUnsafeHtmlInSlider)" class="ngx-slider-span ngx-slider-tick-legend" [innerHTML]="t.legend"></span>
  </span>
</span>`,
      styles: ['::ng-deep .ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;user-select:none;touch-action:pan-y}::ng-deep .ngx-slider.with-legend{margin-bottom:40px}::ng-deep .ngx-slider[disabled]{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}::ng-deep .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}::ng-deep .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}::ng-deep .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}::ng-deep .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}::ng-deep .ngx-slider .ngx-slider-draggable{cursor:move}::ng-deep .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:transparent}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}::ng-deep .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}::ng-deep .ngx-slider .ngx-slider-pointer:after{content:"";width:8px;height:8px;position:absolute;top:12px;left:12px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#fff}::ng-deep .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}::ng-deep .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}::ng-deep .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}::ng-deep .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}::ng-deep .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}::ng-deep .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}::ng-deep .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}::ng-deep .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;transform:translate(-50%)}::ng-deep .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;transform:translate(-50%);max-width:50px;white-space:normal}::ng-deep .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}::ng-deep .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}::ng-deep .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}::ng-deep .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}::ng-deep .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}::ng-deep .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;transform:translateY(-28%)}::ng-deep .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;transform:translateY(-28%);max-width:none;white-space:nowrap}::ng-deep .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}::ng-deep .ngx-slider *{transition:none}::ng-deep .ngx-slider.animate .ngx-slider-bar-wrapper{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-selection{transition:background-color linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-pointer{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-pointer:after{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-tick{transition:background-color linear .3s}\n']
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [AllowUnsafeHtmlInSlider]
    }, {
      type: Optional
    }]
  }], {
    sliderElementNgxSliderClass: [{
      type: HostBinding,
      args: ["class.ngx-slider"]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    highValue: [{
      type: Input
    }],
    highValueChange: [{
      type: Output
    }],
    options: [{
      type: Input
    }],
    userChangeStart: [{
      type: Output
    }],
    userChange: [{
      type: Output
    }],
    userChangeEnd: [{
      type: Output
    }],
    manualRefresh: [{
      type: Input
    }],
    triggerFocus: [{
      type: Input
    }],
    leftOuterSelectionBarElement: [{
      type: ViewChild,
      args: ["leftOuterSelectionBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    rightOuterSelectionBarElement: [{
      type: ViewChild,
      args: ["rightOuterSelectionBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    fullBarElement: [{
      type: ViewChild,
      args: ["fullBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    selectionBarElement: [{
      type: ViewChild,
      args: ["selectionBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    minHandleElement: [{
      type: ViewChild,
      args: ["minHandle", {
        read: SliderHandleDirective,
        static: false
      }]
    }],
    maxHandleElement: [{
      type: ViewChild,
      args: ["maxHandle", {
        read: SliderHandleDirective,
        static: false
      }]
    }],
    floorLabelElement: [{
      type: ViewChild,
      args: ["floorLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    ceilLabelElement: [{
      type: ViewChild,
      args: ["ceilLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    minHandleLabelElement: [{
      type: ViewChild,
      args: ["minHandleLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    maxHandleLabelElement: [{
      type: ViewChild,
      args: ["maxHandleLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    combinedLabelElement: [{
      type: ViewChild,
      args: ["combinedLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    ticksElement: [{
      type: ViewChild,
      args: ["ticksElement", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate", {
        static: false
      }]
    }],
    sliderElementVerticalClass: [{
      type: HostBinding,
      args: ["class.vertical"]
    }],
    sliderElementAnimateClass: [{
      type: HostBinding,
      args: ["class.animate"]
    }],
    sliderElementWithLegendClass: [{
      type: HostBinding,
      args: ["class.with-legend"]
    }],
    sliderElementDisabledAttr: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    sliderElementAriaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize", ["$event"]]
    }]
  });
})();
var NgxSliderModule = class _NgxSliderModule {
  static \u0275fac = function NgxSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxSliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NgxSliderModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSliderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [SliderComponent, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent],
      exports: [SliderComponent]
    }]
  }], null, null);
})();

// src/app/reader-shared/_modals/shortcuts-modal/shortcuts-modal.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function ShortcutsModalComponent_ng_container_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const shortcut_r3 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(shortcut_r3.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4(shortcut_r3.description), "");
  }
}
function ShortcutsModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "h4", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275listener("click", function ShortcutsModalComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modal.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
    \u0275\u0275repeaterCreate(7, ShortcutsModalComponent_ng_container_0_For_8_Template, 5, 2, "div", 6, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
    \u0275\u0275listener("click", function ShortcutsModalComponent_ng_container_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modal.close());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("title"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("close"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.shortcuts);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("close"));
  }
}
var ShortcutsModalComponent = class _ShortcutsModalComponent {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.shortcuts = [];
  }
  static {
    this.\u0275fac = function ShortcutsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShortcutsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ShortcutsModalComponent, selectors: [["app-shortcuts-modal"]], inputs: { shortcuts: "shortcuts" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row", "g-0"], [1, "col-md-6", "mb-2"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ShortcutsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ShortcutsModalComponent_ng_container_0_Template, 12, 3, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "shortcuts-modal");
      }
    }, dependencies: [NgbModalModule, TranslocoDirective], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShortcutsModalComponent, { className: "ShortcutsModalComponent", filePath: "src/app/reader-shared/_modals/shortcuts-modal/shortcuts-modal.component.ts", lineNumber: 24 });
})();

// src/app/manga-reader/_service/manga-reader.service.ts
var MangaReaderService = class _MangaReaderService {
  constructor(rendererFactory, readerService) {
    this.readerService = readerService;
    this.pageDimensions = {};
    this.pairs = {};
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  load(chapterInfo) {
    chapterInfo.pageDimensions.forEach((d) => {
      this.pageDimensions[d.pageNumber] = {
        height: d.height,
        width: d.width,
        isWide: d.isWide
      };
    });
    this.pairs = chapterInfo.doublePairs;
  }
  adjustForDoubleReader(page) {
    if (!this.pairs.hasOwnProperty(page))
      return page;
    return this.pairs[page];
  }
  getPageDimensions(pageNum) {
    if (!this.pageDimensions.hasOwnProperty(pageNum))
      return null;
    return this.pageDimensions[pageNum];
  }
  isWidePage(pageNum) {
    if (!this.pageDimensions.hasOwnProperty(pageNum))
      return false;
    return this.pageDimensions[pageNum].isWide;
  }
  maxHeight() {
    return Object.values(this.pageDimensions).reduce((max, obj) => Math.max(max, obj.height), 0);
  }
  maxWidth() {
    return Object.values(this.pageDimensions).reduce((max, obj) => Math.max(max, obj.width), 0);
  }
  isCoverImage(pageNumber) {
    return pageNumber === 0;
  }
  isNoSplit(pageSplitOption) {
    const splitValue = parseInt(pageSplitOption + "", 10);
    return splitValue === PageSplitOption.NoSplit || splitValue === PageSplitOption.FitSplit;
  }
  isSplitLeftToRight(pageSplitOption) {
    return parseInt(pageSplitOption + "", 10) === PageSplitOption.SplitLeftToRight;
  }
  isSecondLastImage(pageNum, maxPages) {
    return maxPages - 2 === pageNum;
  }
  isLastImage(pageNum, maxPages) {
    return maxPages - 1 === pageNum;
  }
  shouldSplit(img, pageSplitOption) {
    const needsSplitting = this.isWidePage(this.readerService.imageUrlToPageNum(img?.src));
    return !(this.isNoSplit(pageSplitOption) || !needsSplitting);
  }
  shouldRenderAsFitSplit(pageSplitOption) {
    if (parseInt(pageSplitOption + "", 10) !== PageSplitOption.FitSplit)
      return false;
    return true;
  }
  translateScalingOption(option) {
    switch (option) {
      case ScalingOption.Automatic: {
        const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const ratio = windowWidth / windowHeight;
        if (windowHeight > windowWidth) {
          return FITTING_OPTION.WIDTH;
        }
        if (windowWidth >= windowHeight || ratio > 1) {
          return FITTING_OPTION.HEIGHT;
        }
        return FITTING_OPTION.WIDTH;
      }
      case ScalingOption.FitToHeight:
        return FITTING_OPTION.HEIGHT;
      case ScalingOption.FitToWidth:
        return FITTING_OPTION.WIDTH;
      default:
        return FITTING_OPTION.ORIGINAL;
    }
  }
  shouldBeWebtoonMode() {
    const pages = Object.values(this.pageDimensions);
    let webtoonScore = 0;
    pages.forEach((info) => {
      const aspectRatio = info.height / info.width;
      let score = 0;
      if (aspectRatio >= 2) {
        score += 1;
      }
      if (info.width <= 750) {
        score += 0.5;
      }
      webtoonScore += score;
    });
    return webtoonScore / pages.length >= 0.5;
  }
  applyBookmarkEffect(elements) {
    if (elements.length > 0) {
      elements.forEach((elem) => this.renderer.addClass(elem, "bookmark-effect"));
      setTimeout(() => {
        elements.forEach((elem) => this.renderer.removeClass(elem, "bookmark-effect"));
      }, 1e3);
    }
  }
  static {
    this.\u0275fac = function MangaReaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MangaReaderService)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(ReaderService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _MangaReaderService, factory: _MangaReaderService.\u0275fac, providedIn: "root" });
  }
};

// src/app/_pipes/safe-style.pipe.ts
var SafeStylePipe = class _SafeStylePipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  transform(style2) {
    return this.sanitizer.bypassSecurityTrustStyle(style2);
  }
  static {
    this.\u0275fac = function SafeStylePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SafeStylePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "safeStyle", type: _SafeStylePipe, pure: true, standalone: true });
  }
};

// src/app/_helpers/browser.ts
var isSafari = [
  "iPad Simulator",
  "iPhone Simulator",
  "iPod Simulator",
  "iPad",
  "iPhone",
  "iPod"
].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;

// src/app/manga-reader/_components/canvas-renderer/canvas-renderer.component.ts
var _c02 = ["content"];
var _c15 = (a0) => ({ "d-none": a0 });
var ValidSplits = [PageSplitOption.SplitLeftToRight, PageSplitOption.SplitRightToLeft];
var CanvasRendererComponent = class _CanvasRendererComponent {
  constructor() {
    this.isSafari = isSafari;
    this.destroyRef = inject(DestroyRef);
    this.cdRef = inject(ChangeDetectorRef);
    this.mangaReaderService = inject(MangaReaderService);
    this.readerService = inject(ReaderService);
    this.imageHeight = new EventEmitter();
    this.currentImageSplitPart = SPLIT_PAGE_PART.NO_SPLIT;
    this.pagingDirection = PAGING_DIRECTION.FORWARD;
    this.fit = FITTING_OPTION.ORIGINAL;
    this.pageSplit = PageSplitOption.FitSplit;
    this.layoutMode = LayoutMode.Single;
    this.canvasImage = null;
    this.darkness$ = of("brightness(100%)");
    this.renderWithCanvas = false;
  }
  ngOnInit() {
    this.readerSettings$.pipe(takeUntilDestroyed(this.destroyRef), tap((value) => {
      this.fit = value.fitting;
      this.pageSplit = value.pageSplit;
      this.layoutMode = value.layoutMode;
      const rerenderNeeded = this.pageSplit != value.pageSplit;
      this.pagingDirection = value.pagingDirection;
      if (rerenderNeeded) {
        this.reset();
      }
    })).subscribe(() => {
    });
    this.darkness$ = this.readerSettings$.pipe(map((values) => "brightness(" + values.darkness + "%)"), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.imageFitClass$ = this.readerSettings$.pipe(takeUntilDestroyed(this.destroyRef), map((values) => values.fitting), map((fit) => {
      if (fit === FITTING_OPTION.WIDTH)
        return fit;
      if (this.canvasImage === null)
        return fit;
      if (this.mangaReaderService.isWidePage(this.readerService.imageUrlToPageNum(this.canvasImage.src)) && this.mangaReaderService.shouldRenderAsFitSplit(this.pageSplit)) {
        return FITTING_OPTION.WIDTH;
      }
      return fit;
    }), filter(() => this.isValid()));
    this.bookmark$.pipe(takeUntilDestroyed(this.destroyRef), tap((_) => {
      if (this.currentImageSplitPart === SPLIT_PAGE_PART.NO_SPLIT)
        return;
      if (!this.canvas)
        return;
      const elements = [this.canvas?.nativeElement];
      this.mangaReaderService.applyBookmarkEffect(elements);
    })).subscribe(() => {
    });
    this.showClickOverlayClass$ = this.showClickOverlay$.pipe(map((showOverlay) => showOverlay ? "blur" : ""), takeUntilDestroyed(this.destroyRef));
  }
  ngAfterViewInit() {
    if (this.canvas) {
      this.ctx = this.canvas.nativeElement.getContext("2d", { alpha: false });
    }
  }
  reset() {
    this.currentImageSplitPart = SPLIT_PAGE_PART.NO_SPLIT;
  }
  updateSplitPage() {
    if (this.canvasImage == null)
      return;
    const needsSplitting = this.mangaReaderService.isWidePage(this.readerService.imageUrlToPageNum(this.canvasImage.src));
    if (!needsSplitting || this.mangaReaderService.isNoSplit(this.pageSplit)) {
      this.currentImageSplitPart = SPLIT_PAGE_PART.NO_SPLIT;
      return needsSplitting;
    }
    const splitLeftToRight = this.mangaReaderService.isSplitLeftToRight(this.pageSplit);
    if (this.pagingDirection === PAGING_DIRECTION.FORWARD) {
      switch (this.currentImageSplitPart) {
        case SPLIT_PAGE_PART.NO_SPLIT:
          this.currentImageSplitPart = splitLeftToRight ? SPLIT_PAGE_PART.LEFT_PART : SPLIT_PAGE_PART.RIGHT_PART;
          break;
        case SPLIT_PAGE_PART.LEFT_PART:
          const r2lSplittingPart = needsSplitting ? SPLIT_PAGE_PART.RIGHT_PART : SPLIT_PAGE_PART.NO_SPLIT;
          this.currentImageSplitPart = splitLeftToRight ? SPLIT_PAGE_PART.RIGHT_PART : r2lSplittingPart;
          break;
        case SPLIT_PAGE_PART.RIGHT_PART:
          const l2rSplittingPart = needsSplitting ? SPLIT_PAGE_PART.LEFT_PART : SPLIT_PAGE_PART.NO_SPLIT;
          this.currentImageSplitPart = splitLeftToRight ? l2rSplittingPart : SPLIT_PAGE_PART.LEFT_PART;
          break;
      }
    } else if (this.pagingDirection === PAGING_DIRECTION.BACKWARDS) {
      switch (this.currentImageSplitPart) {
        case SPLIT_PAGE_PART.NO_SPLIT:
          this.currentImageSplitPart = splitLeftToRight ? SPLIT_PAGE_PART.RIGHT_PART : SPLIT_PAGE_PART.LEFT_PART;
          break;
        case SPLIT_PAGE_PART.LEFT_PART:
          const l2rSplittingPart = needsSplitting ? SPLIT_PAGE_PART.RIGHT_PART : SPLIT_PAGE_PART.NO_SPLIT;
          this.currentImageSplitPart = splitLeftToRight ? l2rSplittingPart : SPLIT_PAGE_PART.RIGHT_PART;
          break;
        case SPLIT_PAGE_PART.RIGHT_PART:
          this.currentImageSplitPart = splitLeftToRight ? SPLIT_PAGE_PART.LEFT_PART : needsSplitting ? SPLIT_PAGE_PART.LEFT_PART : SPLIT_PAGE_PART.NO_SPLIT;
          break;
      }
    }
    return needsSplitting;
  }
  isValid() {
    return this.renderWithCanvas;
  }
  renderPage(img) {
    this.renderWithCanvas = false;
    if (img === null || img.length === 0 || img[0] === null)
      return;
    if (!this.ctx || !this.canvas)
      return;
    this.canvasImage = img[0];
    this.cdRef.markForCheck();
    if (this.layoutMode !== LayoutMode.Single || !ValidSplits.includes(this.pageSplit)) {
      return;
    }
    const needsSplitting = this.updateSplitPage();
    if (!needsSplitting)
      return;
    this.renderWithCanvas = true;
    if (this.currentImageSplitPart === SPLIT_PAGE_PART.NO_SPLIT)
      return;
    this.setCanvasSize();
    if (needsSplitting && this.currentImageSplitPart === SPLIT_PAGE_PART.LEFT_PART) {
      this.canvas.nativeElement.width = this.canvasImage.width / 2;
      this.ctx.drawImage(this.canvasImage, 0, 0, this.canvasImage.width, this.canvasImage.height, 0, 0, this.canvasImage.width, this.canvasImage.height);
      this.cdRef.markForCheck();
    } else if (needsSplitting && this.currentImageSplitPart === SPLIT_PAGE_PART.RIGHT_PART) {
      this.canvas.nativeElement.width = this.canvasImage.width / 2;
      this.ctx.drawImage(this.canvasImage, 0, 0, this.canvasImage.width, this.canvasImage.height, -this.canvasImage.width / 2, 0, this.canvasImage.width, this.canvasImage.height);
      this.cdRef.markForCheck();
    }
    this.cdRef.markForCheck();
  }
  getPageAmount(direction) {
    if (this.canvasImage === null)
      return 1;
    if (!this.mangaReaderService.isWidePage(this.readerService.imageUrlToPageNum(this.canvasImage.src)))
      return 1;
    switch (direction) {
      case PAGING_DIRECTION.FORWARD:
        return this.shouldMoveNext() ? 1 : 0;
      case PAGING_DIRECTION.BACKWARDS:
        return this.shouldMovePrev() ? 1 : 0;
    }
  }
  shouldMoveNext() {
    if (this.mangaReaderService.isNoSplit(this.pageSplit))
      return true;
    const isSplitLeftToRight = this.mangaReaderService.isSplitLeftToRight(this.pageSplit);
    return this.currentImageSplitPart !== (this.mangaReaderService.isSplitLeftToRight(this.pageSplit) ? SPLIT_PAGE_PART.LEFT_PART : SPLIT_PAGE_PART.RIGHT_PART);
  }
  shouldMovePrev() {
    if (this.mangaReaderService.isNoSplit(this.pageSplit))
      return true;
    return this.currentImageSplitPart !== (this.mangaReaderService.isSplitLeftToRight(this.pageSplit) ? SPLIT_PAGE_PART.RIGHT_PART : SPLIT_PAGE_PART.LEFT_PART);
  }
  setCanvasSize() {
    if (this.canvasImage == null)
      return;
    if (!this.ctx || !this.canvas) {
      return;
    }
    const canvasLimit = this.isSafari ? 16777216 : 124992400;
    const needsScaling = this.canvasImage.width * this.canvasImage.height > canvasLimit;
    if (needsScaling) {
      this.canvas.nativeElement.width = this.isSafari ? 4096 : 16384;
      this.canvas.nativeElement.height = this.isSafari ? 4096 : 16384;
    } else {
      this.canvas.nativeElement.width = this.canvasImage.width;
      this.canvas.nativeElement.height = this.canvasImage.height;
    }
    this.imageHeight.emit(this.canvas.nativeElement.height);
    this.cdRef.markForCheck();
  }
  getBookmarkPageCount() {
    return 1;
  }
  static {
    this.\u0275fac = function CanvasRendererComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CanvasRendererComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _CanvasRendererComponent, selectors: [["app-canvas-renderer"]], viewQuery: function CanvasRendererComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvas = _t.first);
      }
    }, inputs: { readerSettings$: "readerSettings$", image$: "image$", bookmark$: "bookmark$", showClickOverlay$: "showClickOverlay$", imageFit$: "imageFit$" }, outputs: { imageHeight: "imageHeight" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 19, consts: [["content", ""], [3, "ngClass"], ["ondragstart", "return false;", "onselectstart", "return false;"]], template: function CanvasRendererComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "safeStyle");
        \u0275\u0275element(4, "canvas", 2, 0);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275classMapInterpolate1("image-container ", \u0275\u0275pipeBind1(1, 9, ctx.imageFitClass$), "");
        \u0275\u0275styleProp("filter", \u0275\u0275pipeBind1(3, 13, (tmp_2_0 = \u0275\u0275pipeBind1(2, 11, ctx.darkness$)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ""));
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c15, !ctx.renderWithCanvas));
        \u0275\u0275advance(4);
        \u0275\u0275classMap(\u0275\u0275pipeBind1(6, 15, ctx.imageFitClass$));
      }
    }, dependencies: [NgClass, AsyncPipe, SafeStylePipe], styles: ['\n\nimg[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.image-container[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n.image-container.full-width[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container.full-height[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: flex;\n  align-content: center;\n  overflow-y: hidden;\n}\n.image-container.original[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  width: auto;\n  margin: auto;\n  max-height: 100dvh;\n  height: 100dvh;\n  vertical-align: top;\n  object-fit: cover;\n}\n.image-container[_ngcontent-%COMP%]   .full-height.wide[_ngcontent-%COMP%] {\n  height: 100dvh;\n}\n.image-container[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  align-self: center;\n  width: auto;\n  margin: 0 auto;\n  vertical-align: top;\n}\n.image-container[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  vertical-align: top;\n  object-fit: contain;\n  width: 100%;\n}\n.image-container[_ngcontent-%COMP%]   .fit-to-screen.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100dvh;\n}\n.bookmark-effect[_ngcontent-%COMP%] {\n  animation: bookmark 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.highlight[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-next-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.highlight-2[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-prev-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n  .image-container.book-shadow[class*=double-offset]:before, \n  .image-container.book-shadow.wide:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  box-shadow:\n    0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n    0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n    0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n    0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43);\n}\n@supports (-moz-appearance: none) {\n    .image-container.book-shadow[class*=double-offset]:before, \n     .image-container.book-shadow.wide:before {\n    box-shadow:\n      0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n      0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n      0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n      0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43),\n      0px 0px 1px 0.5px rgba(0, 0, 0, 0.43);\n  }\n}\n/*# sourceMappingURL=canvas-renderer.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CanvasRendererComponent, { className: "CanvasRendererComponent", filePath: "src/app/manga-reader/_components/canvas-renderer/canvas-renderer.component.ts", lineNumber: 37 });
})();

// src/app/manga-reader/_components/double-renderer/double-renderer.component.ts
var _c03 = (a0) => ({ "center-double": a0 });
function DoubleRendererComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 3, 0);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate3("", \u0275\u0275pipeBind1(3, 6, ctx_r0.imageFitClass$), " ", \u0275\u0275pipeBind1(4, 8, ctx_r0.readerModeClass$), " ", \u0275\u0275pipeBind1(5, 10, ctx_r0.showClickOverlayClass$), "");
    \u0275\u0275property("src", ctx_r0.currentImage.src, \u0275\u0275sanitizeUrl);
  }
}
function DoubleRendererComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate3("image-2 ", \u0275\u0275pipeBind1(2, 6, ctx_r0.imageFitClass$), " ", \u0275\u0275pipeBind1(3, 8, ctx_r0.readerModeClass$), " ", \u0275\u0275pipeBind1(4, 10, ctx_r0.showClickOverlayClass$), "");
    \u0275\u0275property("src", ctx_r0.currentImage2.src, \u0275\u0275sanitizeUrl);
  }
}
function DoubleRendererComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "safeStyle");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, DoubleRendererComponent_ng_container_0_ng_container_8_Template, 6, 12, "ng-container", 1)(9, DoubleRendererComponent_ng_container_0_ng_container_9_Template, 5, 12, "ng-container", 1);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate3("image-container ", \u0275\u0275pipeBind1(2, 10, ctx_r0.imageFitClass$), " ", \u0275\u0275pipeBind1(3, 12, ctx_r0.layoutClass$), " ", \u0275\u0275pipeBind1(4, 14, ctx_r0.emulateBookClass$), "");
    \u0275\u0275styleProp("filter", \u0275\u0275pipeBind1(6, 18, (tmp_2_0 = \u0275\u0275pipeBind1(5, 16, ctx_r0.darkness$)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ""));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c03, \u0275\u0275pipeBind1(7, 20, ctx_r0.shouldRenderDouble$)));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.currentImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(10, 22, ctx_r0.shouldRenderDouble$));
  }
}
var DoubleRendererComponent = class _DoubleRendererComponent {
  constructor(cdRef, mangaReaderService, document2, readerService) {
    this.cdRef = cdRef;
    this.mangaReaderService = mangaReaderService;
    this.document = document2;
    this.readerService = readerService;
    this.imageHeight = new EventEmitter();
    this.destroyRef = inject(DestroyRef);
    this.debugMode = 0;
    this.darkness$ = of("brightness(100%)");
    this.emulateBookClass$ = of("");
    this.layoutMode = LayoutMode.Single;
    this.pageSplit = PageSplitOption.FitSplit;
    this.pageNum = 0;
    this.maxPages = 0;
    this.currentImage = new Image();
    this.currentImage2 = new Image();
    this.ReaderMode = ReaderMode;
    this.LayoutMode = LayoutMode;
  }
  ngOnInit() {
    this.readerModeClass$ = this.readerSettings$.pipe(map((values) => values.readerMode), map((mode) => mode === ReaderMode.LeftRight || mode === ReaderMode.UpDown ? "" : "d-none"), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.darkness$ = this.readerSettings$.pipe(map((values) => "brightness(" + values.darkness + "%)"), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.emulateBookClass$ = this.readerSettings$.pipe(map((data) => data.emulateBook), map((enabled) => enabled ? "book-shadow" : ""), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.showClickOverlayClass$ = this.showClickOverlay$.pipe(map((showOverlay) => showOverlay ? "blur" : ""), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.pageNum$.pipe(takeUntilDestroyed(this.destroyRef), tap((pageInfo) => {
      this.pageNum = pageInfo.pageNum;
      this.maxPages = pageInfo.maxPages;
      this.currentImage = this.getPage(this.pageNum);
      this.currentImage2 = this.getPage(this.pageNum + 1);
      this.cdRef.markForCheck();
    }), filter((_) => this.isValid())).subscribe(() => {
    });
    this.shouldRenderDouble$ = this.pageNum$.pipe(takeUntilDestroyed(this.destroyRef), map((_) => this.shouldRenderDouble()), filter((_) => this.isValid()));
    this.imageFitClass$ = this.readerSettings$.pipe(takeUntilDestroyed(this.destroyRef), map((values) => values.fitting), filter((_) => this.isValid()), shareReplay());
    this.layoutClass$ = combineLatest([this.shouldRenderDouble$, this.readerSettings$]).pipe(takeUntilDestroyed(this.destroyRef), map((value) => {
      if (value[0] && value[1].fitting === FITTING_OPTION.WIDTH)
        return "fit-to-width-double-offset";
      if (value[0] && value[1].fitting === FITTING_OPTION.HEIGHT)
        return "fit-to-height-double-offset";
      if (value[0] && value[1].fitting === FITTING_OPTION.ORIGINAL)
        return "original-double-offset";
      if (this.mangaReaderService.isWidePage(this.pageNum))
        return "double-offset";
      return "";
    }), filter((_) => this.isValid()));
    this.readerSettings$.pipe(takeUntilDestroyed(this.destroyRef), tap((values) => {
      this.layoutMode = values.layoutMode;
      this.pageSplit = values.pageSplit;
      this.cdRef.markForCheck();
    })).subscribe(() => {
    });
    this.bookmark$.pipe(takeUntilDestroyed(this.destroyRef), tap((_) => {
      const elements = [];
      const image1 = this.document.querySelector("#image-1");
      if (image1 != null)
        elements.push(image1);
      const image2 = this.document.querySelector("#image-2");
      if (image2 != null)
        elements.push(image2);
      this.mangaReaderService.applyBookmarkEffect(elements);
    }), filter((_) => this.isValid())).subscribe(() => {
    });
  }
  shouldRenderDouble() {
    if (!this.isValid())
      return false;
    if (this.mangaReaderService.isCoverImage(this.pageNum)) {
      this.debugLog("Not rendering double as current page is cover image");
      return false;
    }
    if (this.mangaReaderService.isWidePage(this.pageNum)) {
      this.debugLog("Not rendering double as current page is wide image");
      return false;
    }
    if (this.mangaReaderService.isSecondLastImage(this.pageNum, this.maxPages)) {
      this.debugLog("Not rendering double as current page is last");
      return false;
    }
    if (this.mangaReaderService.isLastImage(this.pageNum, this.maxPages)) {
      this.debugLog("Not rendering double as current page is last");
      return false;
    }
    if (this.mangaReaderService.isWidePage(this.pageNum + 1)) {
      this.debugLog("Not rendering double as next page is wide image");
      return false;
    }
    return true;
  }
  isValid() {
    return this.layoutMode === LayoutMode.Double;
  }
  renderPage(img) {
    if (img === null || img.length === 0 || img[0] === null)
      return;
    if (!this.isValid())
      return;
    if (!this.shouldRenderDouble() && (this.currentImage.height || img[0].height) > 0) {
      this.imageHeight.emit(this.currentImage.height || img[0].height);
      return;
    }
    this.cdRef.markForCheck();
    this.imageHeight.emit(Math.max(this.currentImage.height, this.currentImage2.height));
    this.cdRef.markForCheck();
  }
  shouldMovePrev() {
    return true;
  }
  shouldMoveNext() {
    return true;
  }
  getPageAmount(direction) {
    if (!this.isValid())
      return 0;
    switch (direction) {
      case PAGING_DIRECTION.FORWARD:
        if (this.mangaReaderService.isCoverImage(this.pageNum)) {
          this.debugLog("Moving forward 1 page as on cover image");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum)) {
          this.debugLog("Moving forward 1 page as current page is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum + 1)) {
          this.debugLog("Moving forward 1 page as next page is wide");
          return 1;
        }
        if (this.mangaReaderService.isSecondLastImage(this.pageNum, this.maxPages)) {
          this.debugLog("Moving forward 1 page as 2 pages left");
          return 1;
        }
        if (this.mangaReaderService.isLastImage(this.pageNum, this.maxPages)) {
          this.debugLog("Moving forward 1 page as 1 page left");
          return 1;
        }
        this.debugLog("Moving forward 2 pages");
        return 2;
      case PAGING_DIRECTION.BACKWARDS:
        if (this.mangaReaderService.isCoverImage(this.pageNum)) {
          this.debugLog("Moving back 1 page as on cover image");
          return 1;
        }
        if (this.mangaReaderService.adjustForDoubleReader(this.pageNum - 1) != this.pageNum - 1 && !this.mangaReaderService.isWidePage(this.pageNum - 2)) {
          this.debugLog("Moving back 2 pages as previous pair should be in a pair");
          return 2;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum)) {
          this.debugLog("Moving back 1 page as current page is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum - 1)) {
          this.debugLog("Moving back 1 page as prev page is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum - 2)) {
          this.debugLog("Moving back 1 page as 2 pages back is wide");
          return 1;
        }
        this.debugLog("Moving back 2 pages");
        return 2;
    }
  }
  reset() {
  }
  getBookmarkPageCount() {
    return this.shouldRenderDouble() ? 2 : 1;
  }
  debugLog(message, extraData) {
    if (!(this.debugMode & 2))
      return;
    if (extraData !== void 0) {
      console.log(message, extraData);
    } else {
      console.log(message);
    }
  }
  static {
    this.\u0275fac = function DoubleRendererComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DoubleRendererComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MangaReaderService), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ReaderService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _DoubleRendererComponent, selectors: [["app-double-renderer"]], inputs: { readerSettings$: "readerSettings$", image$: "image$", bookmark$: "bookmark$", showClickOverlay$: "showClickOverlay$", pageNum$: "pageNum$", getPage: "getPage" }, outputs: { imageHeight: "imageHeight" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["image", ""], [4, "ngIf"], [3, "ngClass"], ["alt", " ", "id", "image-1", 3, "src"], ["alt", " ", "id", "image-2", 3, "src"]], template: function DoubleRendererComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DoubleRendererComponent_ng_container_0_Template, 11, 26, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isValid());
      }
    }, dependencies: [NgIf, NgClass, AsyncPipe, SafeStylePipe], styles: ['\n\nimg[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.image-container[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n.image-container.full-width[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container.full-height[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: flex;\n  align-content: center;\n  overflow-y: hidden;\n}\n.image-container.original[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  width: auto;\n  margin: auto;\n  max-height: 100dvh;\n  height: 100dvh;\n  vertical-align: top;\n  object-fit: cover;\n}\n.image-container[_ngcontent-%COMP%]   .full-height.wide[_ngcontent-%COMP%] {\n  height: 100dvh;\n}\n.image-container[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  align-self: center;\n  width: auto;\n  margin: 0 auto;\n  vertical-align: top;\n}\n.image-container[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  vertical-align: top;\n  object-fit: contain;\n  width: 100%;\n}\n.image-container[_ngcontent-%COMP%]   .fit-to-screen.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100dvh;\n}\n.bookmark-effect[_ngcontent-%COMP%] {\n  animation: bookmark 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.highlight[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-next-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.highlight-2[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-prev-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n  .image-container.book-shadow[class*=double-offset]:before, \n  .image-container.book-shadow.wide:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  box-shadow:\n    0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n    0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n    0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n    0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43);\n}\n@supports (-moz-appearance: none) {\n    .image-container.book-shadow[class*=double-offset]:before, \n     .image-container.book-shadow.wide:before {\n    box-shadow:\n      0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n      0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n      0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n      0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43),\n      0px 0px 1px 0.5px rgba(0, 0, 0, 0.43);\n  }\n}\n.image-container.full-height[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n.image-container[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  margin: unset;\n  object-fit: contain;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  vertical-align: top;\n  max-width: fit-content;\n}\n.full-width.double[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.full-width.double.cover[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.center-double[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: unset;\n}\n.fit-to-width-double-offset[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.original-double-offset[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.fit-to-height-double-offset[_ngcontent-%COMP%] {\n  height: 100dvh;\n  object-fit: scale-down;\n  top: 50%;\n  left: 50%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=double-renderer.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoubleRendererComponent, { className: "DoubleRendererComponent", filePath: "src/app/manga-reader/_components/double-renderer/double-renderer.component.ts", lineNumber: 36 });
})();

// src/app/manga-reader/_components/double-reverse-renderer/double-reverse-renderer.component.ts
var _c04 = (a0, a1) => ({ "center-double": a0, "reverse": a1 });
function DoubleReverseRendererComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 3, 0);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate3("", \u0275\u0275pipeBind1(3, 6, ctx_r0.imageFitClass$), " ", \u0275\u0275pipeBind1(4, 8, ctx_r0.readerModeClass$), " ", \u0275\u0275pipeBind1(5, 10, ctx_r0.showClickOverlayClass$), "");
    \u0275\u0275property("src", ctx_r0.leftImage.src, \u0275\u0275sanitizeUrl);
  }
}
function DoubleReverseRendererComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate3("image-2 ", \u0275\u0275pipeBind1(2, 6, ctx_r0.imageFitClass$), " ", \u0275\u0275pipeBind1(3, 8, ctx_r0.readerModeClass$), " ", \u0275\u0275pipeBind1(4, 10, ctx_r0.showClickOverlayClass$), "");
    \u0275\u0275property("src", ctx_r0.rightImage.src, \u0275\u0275sanitizeUrl);
  }
}
function DoubleReverseRendererComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "safeStyle");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, DoubleReverseRendererComponent_ng_container_0_ng_container_8_Template, 6, 12, "ng-container", 1)(9, DoubleReverseRendererComponent_ng_container_0_ng_container_9_Template, 5, 12, "ng-container", 1);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("image-container ", \u0275\u0275pipeBind1(2, 9, ctx_r0.layoutClass$), " ", \u0275\u0275pipeBind1(3, 11, ctx_r0.emulateBookClass$), "");
    \u0275\u0275styleProp("filter", \u0275\u0275pipeBind1(5, 15, (tmp_2_0 = \u0275\u0275pipeBind1(4, 13, ctx_r0.darkness$)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ""));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(23, _c04, \u0275\u0275pipeBind1(6, 17, ctx_r0.shouldRenderDouble$), \u0275\u0275pipeBind1(7, 19, ctx_r0.shouldRenderDouble$)));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.leftImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(10, 21, ctx_r0.shouldRenderDouble$));
  }
}
var DoubleReverseRendererComponent = class _DoubleReverseRendererComponent {
  get ReaderMode() {
    return ReaderMode;
  }
  get FITTING_OPTION() {
    return FITTING_OPTION;
  }
  get LayoutMode() {
    return LayoutMode;
  }
  constructor(cdRef, mangaReaderService, document2, readerService) {
    this.cdRef = cdRef;
    this.mangaReaderService = mangaReaderService;
    this.document = document2;
    this.readerService = readerService;
    this.imageHeight = new EventEmitter();
    this.destroyRef = inject(DestroyRef);
    this.debugMode = 0;
    this.darkness$ = of("brightness(100%)");
    this.emulateBookClass$ = of("");
    this.layoutMode = LayoutMode.Single;
    this.pageSplit = PageSplitOption.FitSplit;
    this.pageNum = 0;
    this.maxPages = 0;
    this.leftImage = new Image();
    this.rightImage = new Image();
  }
  ngOnInit() {
    this.readerModeClass$ = this.readerSettings$.pipe(filter((_) => this.isValid()), map((values) => values.readerMode), map((mode) => mode === ReaderMode.LeftRight || mode === ReaderMode.UpDown ? "" : "d-none"), takeUntilDestroyed(this.destroyRef));
    this.darkness$ = this.readerSettings$.pipe(map((values) => "brightness(" + values.darkness + "%)"), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.emulateBookClass$ = this.readerSettings$.pipe(map((data) => data.emulateBook), map((enabled) => enabled ? "book-shadow" : ""), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.showClickOverlayClass$ = this.showClickOverlay$.pipe(map((showOverlay) => showOverlay ? "blur" : ""), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.pageNum$.pipe(takeUntilDestroyed(this.destroyRef), tap((pageInfo) => {
      this.pageNum = pageInfo.pageNum;
      this.maxPages = pageInfo.maxPages;
      this.leftImage = this.getPage(this.pageNum);
      this.rightImage = this.getPage(this.pageNum + 1);
    }), filter((_) => this.isValid())).subscribe(() => {
    });
    this.shouldRenderDouble$ = this.pageNum$.pipe(takeUntilDestroyed(this.destroyRef), map(() => this.shouldRenderDouble()), filter(() => this.isValid()), shareReplay());
    this.imageFitClass$ = this.readerSettings$.pipe(takeUntilDestroyed(this.destroyRef), map((values) => values.fitting), filter((_) => this.isValid()), shareReplay());
    this.layoutClass$ = combineLatest([this.shouldRenderDouble$, this.readerSettings$]).pipe(takeUntilDestroyed(this.destroyRef), map((value) => {
      if (value[0] && value[1].fitting === FITTING_OPTION.WIDTH)
        return "fit-to-width-double-offset";
      if (value[0] && value[1].fitting === FITTING_OPTION.HEIGHT)
        return "fit-to-height-double-offset";
      if (value[0] && value[1].fitting === FITTING_OPTION.ORIGINAL)
        return "original-double-offset";
      if (this.mangaReaderService.isWidePage(this.pageNum))
        return "double-offset";
      return "";
    }), filter((_) => this.isValid()));
    this.readerSettings$.pipe(takeUntilDestroyed(this.destroyRef), tap((values) => {
      this.layoutMode = values.layoutMode;
      this.pageSplit = values.pageSplit;
      this.cdRef.markForCheck();
    })).subscribe(() => {
    });
    this.bookmark$.pipe(takeUntilDestroyed(this.destroyRef), tap((_) => {
      const elements = [];
      const image1 = this.document.querySelector("#image-1");
      if (image1 != null)
        elements.push(image1);
      const image2 = this.document.querySelector("#image-2");
      if (image2 != null)
        elements.push(image2);
      this.mangaReaderService.applyBookmarkEffect(elements);
    }), filter((_) => this.isValid())).subscribe(() => {
    });
  }
  shouldRenderDouble() {
    if (!this.isValid())
      return false;
    if (this.mangaReaderService.isCoverImage(this.pageNum)) {
      this.debugLog("Not rendering double as current page is cover image");
      return false;
    }
    if (this.mangaReaderService.isWidePage(this.pageNum)) {
      this.debugLog("Not rendering double as current page is wide image");
      return false;
    }
    if (this.mangaReaderService.isSecondLastImage(this.pageNum, this.maxPages)) {
      this.debugLog("Not rendering double as current page is last");
      return false;
    }
    if (this.mangaReaderService.isWidePage(this.pageNum + 1)) {
      this.debugLog("Not rendering double as next page is wide image");
      return false;
    }
    if (this.mangaReaderService.isLastImage(this.pageNum, this.maxPages)) {
      this.debugLog("Not rendering double as current page is last and there are an odd number of pages");
      return false;
    }
    return true;
  }
  isValid() {
    return this.layoutMode === LayoutMode.DoubleReversed;
  }
  renderPage(img) {
    if (img === null || img.length === 0 || img[0] === null)
      return;
    if (!this.isValid())
      return;
    this.imageHeight.emit(Math.max(this.leftImage.height, this.rightImage.height));
    this.cdRef.markForCheck();
  }
  shouldMovePrev() {
    return true;
  }
  shouldMoveNext() {
    return true;
  }
  getPageAmount(direction) {
    if (this.layoutMode !== LayoutMode.DoubleReversed)
      return 0;
    switch (direction) {
      case PAGING_DIRECTION.FORWARD:
        if (this.mangaReaderService.isCoverImage(this.pageNum)) {
          this.debugLog("Moving forward 1 page as on cover image");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum)) {
          this.debugLog("Moving forward 1 page as current page is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum + 1)) {
          this.debugLog("Moving forward 1 page as current page is wide");
          return 1;
        }
        if (this.mangaReaderService.isSecondLastImage(this.pageNum, this.maxPages)) {
          this.debugLog("Moving forward 1 page as 2 pages left");
          return 1;
        }
        if (this.mangaReaderService.isLastImage(this.pageNum, this.maxPages)) {
          this.debugLog("Moving forward 2 pages as right image is the last page and we just rendered double page");
          return 2;
        }
        this.debugLog("Moving forward 2 pages");
        return 2;
      case PAGING_DIRECTION.BACKWARDS:
        if (this.mangaReaderService.isCoverImage(this.pageNum)) {
          this.debugLog("Moving back 1 page as on cover image");
          return 1;
        }
        if (this.mangaReaderService.adjustForDoubleReader(this.pageNum - 1) != this.pageNum - 1 && !this.mangaReaderService.isWidePage(this.pageNum - 2)) {
          this.debugLog("Moving back 2 pages as previous pair should be in a pair");
          return 2;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum)) {
          this.debugLog("Moving back 1 page as left page is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum) && !this.mangaReaderService.isWidePage(this.pageNum - 4)) {
          this.debugLog("Moving back 1 page as left page is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum - 1)) {
          this.debugLog("Moving back 1 page as prev page is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum - 2)) {
          this.debugLog("Moving back 1 page as 2 pages back is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum + 2)) {
          this.debugLog("Moving back 2 page as 2 pages back is wide");
          return 1;
        }
        if (this.mangaReaderService.isSecondLastImage(this.pageNum, this.maxPages)) {
          this.debugLog("Moving back 1 page as 2 pages left");
          return 1;
        }
        this.debugLog("Moving back 2 pages");
        return 2;
    }
  }
  reset() {
  }
  getBookmarkPageCount() {
    return this.shouldRenderDouble() ? 2 : 1;
  }
  debugLog(message, extraData) {
    if (!(this.debugMode & 2))
      return;
    if (extraData !== void 0) {
      console.log(message, extraData);
    } else {
      console.log(message);
    }
  }
  static {
    this.\u0275fac = function DoubleReverseRendererComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DoubleReverseRendererComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MangaReaderService), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ReaderService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _DoubleReverseRendererComponent, selectors: [["app-double-reverse-renderer"]], inputs: { readerSettings$: "readerSettings$", image$: "image$", bookmark$: "bookmark$", showClickOverlay$: "showClickOverlay$", pageNum$: "pageNum$", getPage: "getPage" }, outputs: { imageHeight: "imageHeight" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["image", ""], [4, "ngIf"], [3, "ngClass"], ["alt", " ", "id", "image-1", 3, "src"], ["alt", " ", "id", "image-2", 3, "src"]], template: function DoubleReverseRendererComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DoubleReverseRendererComponent_ng_container_0_Template, 11, 26, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isValid());
      }
    }, dependencies: [NgIf, NgClass, AsyncPipe, SafeStylePipe], styles: ['\n\nimg[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.image-container[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n.image-container.full-width[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container.full-height[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: flex;\n  align-content: center;\n  overflow-y: hidden;\n}\n.image-container.original[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  width: auto;\n  margin: auto;\n  max-height: 100dvh;\n  height: 100dvh;\n  vertical-align: top;\n  object-fit: cover;\n}\n.image-container[_ngcontent-%COMP%]   .full-height.wide[_ngcontent-%COMP%] {\n  height: 100dvh;\n}\n.image-container[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  align-self: center;\n  width: auto;\n  margin: 0 auto;\n  vertical-align: top;\n}\n.image-container[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  vertical-align: top;\n  object-fit: contain;\n  width: 100%;\n}\n.image-container[_ngcontent-%COMP%]   .fit-to-screen.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100dvh;\n}\n.bookmark-effect[_ngcontent-%COMP%] {\n  animation: bookmark 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.highlight[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-next-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.highlight-2[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-prev-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n  .image-container.book-shadow[class*=double-offset]:before, \n  .image-container.book-shadow.wide:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  box-shadow:\n    0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n    0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n    0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n    0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43);\n}\n@supports (-moz-appearance: none) {\n    .image-container.book-shadow[class*=double-offset]:before, \n     .image-container.book-shadow.wide:before {\n    box-shadow:\n      0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n      0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n      0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n      0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43),\n      0px 0px 1px 0.5px rgba(0, 0, 0, 0.43);\n  }\n}\n.image-container[_ngcontent-%COMP%] {\n  height: 100dvh;\n}\n.image-container.reverse[_ngcontent-%COMP%] {\n  overflow: unset;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  flex-direction: row-reverse;\n}\n.image-container.reverse[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: unset;\n}\n.image-container[_ngcontent-%COMP%]   #image-1.double[_ngcontent-%COMP%] {\n  margin: 0 0 0 auto;\n}\n.image-container[_ngcontent-%COMP%]   #image-2.double[_ngcontent-%COMP%] {\n  margin: 0 auto 0 0;\n}\n.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n.image-container[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  margin: unset;\n  object-fit: contain;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  vertical-align: top;\n  max-width: fit-content;\n}\n.full-width.double[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.full-width.double.cover[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.center-double[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: unset;\n}\n.fit-to-width-double-offset[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.original-double-offset[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.fit-to-height-double-offset[_ngcontent-%COMP%] {\n  height: 100dvh;\n  object-fit: scale-down;\n  top: 50%;\n  left: 50%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=double-reverse-renderer.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoubleReverseRendererComponent, { className: "DoubleReverseRendererComponent", filePath: "src/app/manga-reader/_components/double-reverse-renderer/double-reverse-renderer.component.ts", lineNumber: 37 });
})();

// src/app/manga-reader/_components/single-renderer/single-renderer.component.ts
function SingleRendererComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3, 0);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMapInterpolate1("width: ", \u0275\u0275pipeBind1(2, 9, ctx_r0.widthOverride$), "");
    \u0275\u0275classMapInterpolate3("", \u0275\u0275pipeBind1(3, 11, ctx_r0.imageFitClass$), " ", \u0275\u0275pipeBind1(4, 13, ctx_r0.readerModeClass$), " ", \u0275\u0275pipeBind1(5, 15, ctx_r0.showClickOverlayClass$), "");
    \u0275\u0275property("src", ctx_r0.currentImage.src, \u0275\u0275sanitizeUrl);
  }
}
function SingleRendererComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "safeStyle");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "safeStyle");
    \u0275\u0275template(7, SingleRendererComponent_Conditional_0_Conditional_7_Template, 6, 17, "img", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate2("image-container ", \u0275\u0275pipeBind1(1, 9, ctx_r0.imageFitClass$), " ", \u0275\u0275pipeBind1(2, 11, ctx_r0.emulateBookClass$), "");
    \u0275\u0275styleProp("filter", \u0275\u0275pipeBind1(4, 15, (tmp_2_0 = \u0275\u0275pipeBind1(3, 13, ctx_r0.darkness$)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ""))("height", \u0275\u0275pipeBind1(6, 19, (tmp_3_0 = \u0275\u0275pipeBind1(5, 17, ctx_r0.imageContainerHeight$)) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ""));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.currentImage ? 7 : -1);
  }
}
var SingleRendererComponent = class _SingleRendererComponent {
  get ReaderMode() {
    return ReaderMode;
  }
  get LayoutMode() {
    return LayoutMode;
  }
  constructor(cdRef, mangaReaderService, document2) {
    this.cdRef = cdRef;
    this.mangaReaderService = mangaReaderService;
    this.document = document2;
    this.imageHeight = new EventEmitter();
    this.destroyRef = inject(DestroyRef);
    this.darkness$ = of("brightness(100%)");
    this.layoutMode = LayoutMode.Single;
    this.pageSplit = PageSplitOption.FitSplit;
    this.pageNum = 0;
    this.maxPages = 1;
    this.widthOverride$ = new Observable();
  }
  ngOnInit() {
    this.readerModeClass$ = this.readerSettings$.pipe(map((values) => values.readerMode), map((mode) => mode === ReaderMode.LeftRight || mode === ReaderMode.UpDown ? "" : "d-none"), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.widthOverride$ = this.readerSettings$.pipe(map((values) => parseInt(values.widthSlider) <= 0 ? "" : values.widthSlider + "%"), takeUntilDestroyed(this.destroyRef));
    this.emulateBookClass$ = this.readerSettings$.pipe(map((data) => data.emulateBook), map((enabled) => enabled ? "book-shadow" : ""), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.imageContainerHeight$ = this.image$.pipe(filter((_) => this.isValid()), switchMap((img) => {
      this.cdRef.markForCheck();
      return this.calculateImageContainerHeight$();
    }), takeUntilDestroyed(this.destroyRef));
    this.pageNum$.pipe(takeUntilDestroyed(this.destroyRef), tap((pageInfo) => {
      this.pageNum = pageInfo.pageNum;
      this.maxPages = pageInfo.maxPages;
    })).subscribe(() => {
    });
    this.darkness$ = this.readerSettings$.pipe(map((values) => "brightness(" + values.darkness + "%)"), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.showClickOverlayClass$ = this.showClickOverlay$.pipe(map((showOverlay) => showOverlay ? "blur" : ""), takeUntilDestroyed(this.destroyRef), filter((_) => this.isValid()));
    this.readerSettings$.pipe(takeUntilDestroyed(this.destroyRef), tap((values) => {
      this.layoutMode = values.layoutMode;
      this.pageSplit = values.pageSplit;
      this.cdRef.markForCheck();
    })).subscribe(() => {
    });
    this.bookmark$.pipe(takeUntilDestroyed(this.destroyRef), tap((_) => {
      const elements = [];
      const image1 = this.document.querySelector("#image-1");
      if (image1 != null)
        elements.push(image1);
      this.mangaReaderService.applyBookmarkEffect(elements);
    }), filter((_) => this.isValid())).subscribe(() => {
    });
    this.imageFitClass$ = combineLatest([this.readerSettings$, this.pageNum$]).pipe(map((values) => values[0].fitting), map((fit) => {
      if (this.mangaReaderService.isWidePage(this.pageNum) && this.mangaReaderService.shouldRenderAsFitSplit(this.pageSplit)) {
        return FITTING_OPTION.WIDTH + " fit-to-screen wide";
      }
      return fit;
    }), shareReplay({ refCount: true, bufferSize: 1 }), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
  }
  calculateImageContainerHeight$() {
    return this.readerSettings$.pipe(map((values) => values.fitting), map((mode) => {
      if (mode !== FITTING_OPTION.HEIGHT)
        return "";
      const readingArea = this.document.querySelector(".reading-area");
      if (!readingArea)
        return "calc(100dvh)";
      if (this.currentImage?.width - readingArea.scrollWidth > 0) {
        return "calc(100dvh)";
      }
      return "calc(100dvh)";
    }), filter((_) => this.isValid()));
  }
  isValid() {
    return this.layoutMode === LayoutMode.Single;
  }
  renderPage(img) {
    if (img === null || img.length === 0 || img[0] === null)
      return;
    if (!this.isValid())
      return;
    this.currentImage = img[0];
    this.cdRef.markForCheck();
    this.imageHeight.emit(this.currentImage.height);
  }
  shouldMovePrev() {
    return true;
  }
  shouldMoveNext() {
    return true;
  }
  getPageAmount(direction) {
    if (!this.isValid() || this.mangaReaderService.shouldSplit(this.currentImage, this.pageSplit))
      return 0;
    return 1;
  }
  reset() {
  }
  getBookmarkPageCount() {
    return 1;
  }
  static {
    this.\u0275fac = function SingleRendererComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SingleRendererComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MangaReaderService), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SingleRendererComponent, selectors: [["app-single-renderer"]], inputs: { readerSettings$: "readerSettings$", image$: "image$", bookmark$: "bookmark$", showClickOverlay$: "showClickOverlay$", pageNum$: "pageNum$" }, outputs: { imageHeight: "imageHeight" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["image", ""], [3, "class", "filter", "height"], ["alt", " ", "id", "image-1", 3, "style", "src", "class"], ["alt", " ", "id", "image-1", 3, "src"]], template: function SingleRendererComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SingleRendererComponent_Conditional_0_Template, 8, 21, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isValid() && !ctx.mangaReaderService.shouldSplit(ctx.currentImage, ctx.pageSplit) ? 0 : -1);
      }
    }, dependencies: [AsyncPipe, SafeStylePipe], styles: ['\n\nimg[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.image-container[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n.image-container.full-width[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container.full-height[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: flex;\n  align-content: center;\n  overflow-y: hidden;\n}\n.image-container.original[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  width: auto;\n  margin: auto;\n  max-height: 100dvh;\n  height: 100dvh;\n  vertical-align: top;\n  object-fit: cover;\n}\n.image-container[_ngcontent-%COMP%]   .full-height.wide[_ngcontent-%COMP%] {\n  height: 100dvh;\n}\n.image-container[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  align-self: center;\n  width: auto;\n  margin: 0 auto;\n  vertical-align: top;\n}\n.image-container[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  vertical-align: top;\n  object-fit: contain;\n  width: 100%;\n}\n.image-container[_ngcontent-%COMP%]   .fit-to-screen.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100dvh;\n}\n.bookmark-effect[_ngcontent-%COMP%] {\n  animation: bookmark 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.highlight[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-next-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.highlight-2[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-prev-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n  .image-container.book-shadow[class*=double-offset]:before, \n  .image-container.book-shadow.wide:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  box-shadow:\n    0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n    0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n    0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n    0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43);\n}\n@supports (-moz-appearance: none) {\n    .image-container.book-shadow[class*=double-offset]:before, \n     .image-container.book-shadow.wide:before {\n    box-shadow:\n      0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n      0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n      0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n      0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43),\n      0px 0px 1px 0.5px rgba(0, 0, 0, 0.43);\n  }\n}\n/*# sourceMappingURL=single-renderer.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SingleRendererComponent, { className: "SingleRendererComponent", filePath: "src/app/manga-reader/_components/single-renderer/single-renderer.component.ts", lineNumber: 32 });
})();

// src/app/manga-reader/_components/double-renderer-no-cover/double-no-cover-renderer.component.ts
var _c05 = (a0) => ({ "center-double": a0 });
function DoubleNoCoverRendererComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 3, 0);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate3("", \u0275\u0275pipeBind1(3, 6, ctx_r0.imageFitClass$), " ", \u0275\u0275pipeBind1(4, 8, ctx_r0.readerModeClass$), " ", \u0275\u0275pipeBind1(5, 10, ctx_r0.showClickOverlayClass$), "");
    \u0275\u0275property("src", ctx_r0.currentImage.src, \u0275\u0275sanitizeUrl);
  }
}
function DoubleNoCoverRendererComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate3("image-2 ", \u0275\u0275pipeBind1(2, 6, ctx_r0.imageFitClass$), " ", \u0275\u0275pipeBind1(3, 8, ctx_r0.readerModeClass$), " ", \u0275\u0275pipeBind1(4, 10, ctx_r0.showClickOverlayClass$), "");
    \u0275\u0275property("src", ctx_r0.currentImage2.src, \u0275\u0275sanitizeUrl);
  }
}
function DoubleNoCoverRendererComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "safeStyle");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, DoubleNoCoverRendererComponent_ng_container_0_ng_container_8_Template, 6, 12, "ng-container", 1)(9, DoubleNoCoverRendererComponent_ng_container_0_ng_container_9_Template, 5, 12, "ng-container", 1);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate3("image-container ", \u0275\u0275pipeBind1(2, 10, ctx_r0.imageFitClass$), " ", \u0275\u0275pipeBind1(3, 12, ctx_r0.layoutClass$), " ", \u0275\u0275pipeBind1(4, 14, ctx_r0.emulateBookClass$), "");
    \u0275\u0275styleProp("filter", \u0275\u0275pipeBind1(6, 18, (tmp_2_0 = \u0275\u0275pipeBind1(5, 16, ctx_r0.darkness$)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ""));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c05, \u0275\u0275pipeBind1(7, 20, ctx_r0.shouldRenderDouble$)));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.currentImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(10, 22, ctx_r0.shouldRenderDouble$));
  }
}
var DoubleNoCoverRendererComponent = class _DoubleNoCoverRendererComponent {
  get ReaderMode() {
    return ReaderMode;
  }
  get FITTING_OPTION() {
    return FITTING_OPTION;
  }
  get LayoutMode() {
    return LayoutMode;
  }
  constructor(cdRef, mangaReaderService, document2, readerService) {
    this.cdRef = cdRef;
    this.mangaReaderService = mangaReaderService;
    this.document = document2;
    this.readerService = readerService;
    this.imageHeight = new EventEmitter();
    this.destroyRef = inject(DestroyRef);
    this.debugMode = 2;
    this.darkness$ = of("brightness(100%)");
    this.emulateBookClass$ = of("");
    this.layoutMode = LayoutMode.Single;
    this.pageSplit = PageSplitOption.FitSplit;
    this.pageNum = 0;
    this.maxPages = 0;
    this.currentImage = new Image();
    this.currentImage2 = new Image();
  }
  ngOnInit() {
    this.readerModeClass$ = this.readerSettings$.pipe(map((values) => values.readerMode), map((mode) => mode === ReaderMode.LeftRight || mode === ReaderMode.UpDown ? "" : "d-none"), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.darkness$ = this.readerSettings$.pipe(map((values) => "brightness(" + values.darkness + "%)"), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.emulateBookClass$ = this.readerSettings$.pipe(map((data) => data.emulateBook), map((enabled) => enabled ? "book-shadow" : ""), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.showClickOverlayClass$ = this.showClickOverlay$.pipe(map((showOverlay) => showOverlay ? "blur" : ""), filter((_) => this.isValid()), takeUntilDestroyed(this.destroyRef));
    this.pageNum$.pipe(takeUntilDestroyed(this.destroyRef), tap((pageInfo) => {
      this.pageNum = pageInfo.pageNum;
      this.maxPages = pageInfo.maxPages;
      this.currentImage = this.getPage(this.pageNum);
      this.currentImage2 = this.getPage(this.pageNum + 1);
      this.cdRef.markForCheck();
    }), filter((_) => this.isValid())).subscribe(() => {
    });
    this.shouldRenderDouble$ = this.pageNum$.pipe(takeUntilDestroyed(this.destroyRef), map((_) => this.shouldRenderDouble()), filter((_) => this.isValid()));
    this.imageFitClass$ = this.readerSettings$.pipe(takeUntilDestroyed(this.destroyRef), map((values) => values.fitting), filter((_) => this.isValid()), shareReplay());
    this.layoutClass$ = combineLatest([this.shouldRenderDouble$, this.readerSettings$]).pipe(takeUntilDestroyed(this.destroyRef), map((value) => {
      if (value[0] && value[1].fitting === FITTING_OPTION.WIDTH)
        return "fit-to-width-double-offset";
      if (value[0] && value[1].fitting === FITTING_OPTION.HEIGHT)
        return "fit-to-height-double-offset";
      if (value[0] && value[1].fitting === FITTING_OPTION.ORIGINAL)
        return "original-double-offset";
      return "";
    }), filter((_) => this.isValid()));
    this.readerSettings$.pipe(takeUntilDestroyed(this.destroyRef), tap((values) => {
      this.layoutMode = values.layoutMode;
      this.pageSplit = values.pageSplit;
      this.cdRef.markForCheck();
    })).subscribe(() => {
    });
    this.bookmark$.pipe(takeUntilDestroyed(this.destroyRef), tap((_) => {
      const elements = [];
      const image1 = this.document.querySelector("#image-1");
      if (image1 != null)
        elements.push(image1);
      const image2 = this.document.querySelector("#image-2");
      if (image2 != null)
        elements.push(image2);
      this.mangaReaderService.applyBookmarkEffect(elements);
    }), filter((_) => this.isValid())).subscribe(() => {
    });
  }
  shouldRenderDouble() {
    if (!this.isValid())
      return false;
    if (this.mangaReaderService.isWidePage(this.pageNum)) {
      this.debugLog("Not rendering double as current page is wide image");
      return false;
    }
    if (this.mangaReaderService.isSecondLastImage(this.pageNum, this.maxPages)) {
      this.debugLog("Not rendering double as current page is last");
      return false;
    }
    if (this.mangaReaderService.isLastImage(this.pageNum, this.maxPages)) {
      this.debugLog("Not rendering double as current page is last");
      return false;
    }
    if (this.mangaReaderService.isWidePage(this.pageNum + 1)) {
      this.debugLog("Not rendering double as next page is wide image");
      return false;
    }
    return true;
  }
  isValid() {
    return this.layoutMode === LayoutMode.DoubleNoCover;
  }
  renderPage(img) {
    if (img === null || img.length === 0 || img[0] === null)
      return;
    if (!this.isValid())
      return;
    if (!this.shouldRenderDouble() && (this.currentImage.height || img[0].height) > 0) {
      this.imageHeight.emit(this.currentImage.height || img[0].height);
      return;
    }
    this.cdRef.markForCheck();
    this.imageHeight.emit(Math.max(this.currentImage.height, this.currentImage2.height));
    this.cdRef.markForCheck();
  }
  shouldMovePrev() {
    return true;
  }
  shouldMoveNext() {
    return true;
  }
  getPageAmount(direction) {
    if (!this.isValid())
      return 0;
    switch (direction) {
      case PAGING_DIRECTION.FORWARD:
        if (this.mangaReaderService.isWidePage(this.pageNum)) {
          this.debugLog("Moving forward 1 page as current page is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum + 1)) {
          this.debugLog("Moving forward 1 page as next page is wide");
          return 1;
        }
        if (this.mangaReaderService.isCoverImage(this.pageNum)) {
          this.debugLog("Moving forward 2 page as on cover image");
          return 2;
        }
        if (this.mangaReaderService.isSecondLastImage(this.pageNum, this.maxPages)) {
          this.debugLog("Moving forward 1 page as 2 pages left");
          return 1;
        }
        if (this.mangaReaderService.isLastImage(this.pageNum, this.maxPages)) {
          this.debugLog("Moving forward 1 page as 1 page left");
          return 1;
        }
        this.debugLog("Moving forward 2 pages");
        return 2;
      case PAGING_DIRECTION.BACKWARDS:
        if (this.mangaReaderService.isCoverImage(this.pageNum - 1)) {
          this.debugLog("Moving back 1 page as on cover image");
          return 2;
        }
        if (this.mangaReaderService.isCoverImage(this.pageNum)) {
          this.debugLog("Moving back 1 page as on cover image");
          return 2;
        }
        if (this.mangaReaderService.adjustForDoubleReader(this.pageNum - 1) != this.pageNum - 1 && !this.mangaReaderService.isWidePage(this.pageNum - 2)) {
          this.debugLog("Moving back 2 pages as previous pair should be in a pair");
          return 2;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum)) {
          this.debugLog("Moving back 1 page as current page is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum - 1)) {
          this.debugLog("Moving back 1 page as prev page is wide");
          return 1;
        }
        if (this.mangaReaderService.isWidePage(this.pageNum - 2)) {
          this.debugLog("Moving back 1 page as 2 pages back is wide");
          return 1;
        }
        this.debugLog("Moving back 2 pages");
        return 2;
    }
  }
  reset() {
  }
  getBookmarkPageCount() {
    return this.shouldRenderDouble() ? 2 : 1;
  }
  debugLog(message, extraData) {
    if (!(this.debugMode & 2))
      return;
    if (extraData !== void 0) {
      console.log(message, extraData);
    } else {
      console.log(message);
    }
  }
  static {
    this.\u0275fac = function DoubleNoCoverRendererComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DoubleNoCoverRendererComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MangaReaderService), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ReaderService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _DoubleNoCoverRendererComponent, selectors: [["app-double-no-cover-renderer"]], inputs: { readerSettings$: "readerSettings$", image$: "image$", bookmark$: "bookmark$", showClickOverlay$: "showClickOverlay$", pageNum$: "pageNum$", getPage: "getPage" }, outputs: { imageHeight: "imageHeight" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["image", ""], [4, "ngIf"], [3, "ngClass"], ["alt", " ", "id", "image-1", 3, "src"], ["alt", " ", "id", "image-2", 3, "src"]], template: function DoubleNoCoverRendererComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DoubleNoCoverRendererComponent_ng_container_0_Template, 11, 26, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isValid());
      }
    }, dependencies: [NgIf, NgClass, AsyncPipe, SafeStylePipe], styles: ['\n\nimg[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.image-container[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n.image-container.full-width[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container.full-height[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: flex;\n  align-content: center;\n  overflow-y: hidden;\n}\n.image-container.original[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  width: auto;\n  margin: auto;\n  max-height: 100dvh;\n  height: 100dvh;\n  vertical-align: top;\n  object-fit: cover;\n}\n.image-container[_ngcontent-%COMP%]   .full-height.wide[_ngcontent-%COMP%] {\n  height: 100dvh;\n}\n.image-container[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  align-self: center;\n  width: auto;\n  margin: 0 auto;\n  vertical-align: top;\n}\n.image-container[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  vertical-align: top;\n  object-fit: contain;\n  width: 100%;\n}\n.image-container[_ngcontent-%COMP%]   .fit-to-screen.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100dvh;\n}\n.bookmark-effect[_ngcontent-%COMP%] {\n  animation: bookmark 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.highlight[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-next-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.highlight-2[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-prev-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n  .image-container.book-shadow[class*=double-offset]:before, \n  .image-container.book-shadow.wide:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  box-shadow:\n    0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n    0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n    0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n    0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43);\n}\n@supports (-moz-appearance: none) {\n    .image-container.book-shadow[class*=double-offset]:before, \n     .image-container.book-shadow.wide:before {\n    box-shadow:\n      0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n      0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n      0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n      0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43),\n      0px 0px 1px 0.5px rgba(0, 0, 0, 0.43);\n  }\n}\n.image-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.image-container[_ngcontent-%COMP%]   #image-1.double[_ngcontent-%COMP%] {\n  margin: 0 0 0 auto;\n}\n.image-container.full-height[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  vertical-align: top;\n  max-width: fit-content;\n}\n.full-width.double[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.full-width.double.cover[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.center-double[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: unset;\n}\n.fit-to-width-double-offset[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.original-double-offset[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.fit-to-height-double-offset[_ngcontent-%COMP%] {\n  height: 100vh;\n  object-fit: scale-down;\n  top: 50%;\n  left: 50%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=double-no-cover-renderer.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoubleNoCoverRendererComponent, { className: "DoubleNoCoverRendererComponent", filePath: "src/app/manga-reader/_components/double-renderer-no-cover/double-no-cover-renderer.component.ts", lineNumber: 36 });
})();

// src/app/_pipes/fullscreen-icon.pipe.ts
var FullscreenIconPipe = class _FullscreenIconPipe {
  transform(isFullscreen) {
    return isFullscreen ? "fa-compress-alt" : "fa-expand-alt";
  }
  static {
    this.\u0275fac = function FullscreenIconPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullscreenIconPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "fullscreenIcon", type: _FullscreenIconPipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/reader-mode-icon.pipe.ts
var ReaderModeIconPipe = class _ReaderModeIconPipe {
  transform(readerMode) {
    switch (readerMode) {
      case ReaderMode.LeftRight:
        return "fa-exchange-alt";
      case ReaderMode.UpDown:
        return "fa-exchange-alt fa-rotate-90";
      case ReaderMode.Webtoon:
        return "fa-arrows-alt-v";
      default:
        return "";
    }
  }
  static {
    this.\u0275fac = function ReaderModeIconPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReaderModeIconPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "readerModeIcon", type: _ReaderModeIconPipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/fitting-icon.pipe.ts
var FittingIconPipe = class _FittingIconPipe {
  transform(fit) {
    switch (fit) {
      case FITTING_OPTION.HEIGHT:
        return "fa fa-arrows-alt-v";
      case FITTING_OPTION.WIDTH:
        return "fa fa-arrows-alt-h";
      case FITTING_OPTION.ORIGINAL:
        return "fa fa-expand-arrows-alt";
    }
  }
  static {
    this.\u0275fac = function FittingIconPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FittingIconPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "fittingIcon", type: _FittingIconPipe, pure: true, standalone: true });
  }
};

// src/app/manga-reader/_components/infinite-scroller/infinite-scroller.component.ts
var _c06 = ["bottomSpacer"];
var _forTrack02 = ($index, $item) => $item.src;
var _c16 = (a0) => ({ "width": a0 });
function InfiniteScrollerComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "strong");
    \u0275\u0275text(2, "Captures Scroll Events:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Is Scrolling:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "All Images Loaded:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "Prefetched");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14, "Pages:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17, "At Top:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20, "At Bottom:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23, "Total Height:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, "Total Scroll:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29, "Scroll Top:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !ctx_r1.isScrolling && ctx_r1.allImagesLoaded, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.isScrollingForwards() ? "Forwards" : "Backwards", " ", ctx_r1.isScrolling, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.allImagesLoaded, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.minPageLoaded, "-", ctx_r1.maxPageLoaded, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.pageNum, " / ", ctx_r1.totalPages - 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.atTop, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.atBottom, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTotalHeight(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTotalScroll(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getScrollTop(), " ");
  }
}
function InfiniteScrollerComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13, 1);
    \u0275\u0275listener("click", function InfiniteScrollerComponent_ng_container_0_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadPrevChapter.emit());
    });
    \u0275\u0275element(2, "div", 12);
    \u0275\u0275elementStart(3, "div")(4, "button", 8);
    \u0275\u0275element(5, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 8);
    \u0275\u0275element(9, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r4("continuous-reading-prev-chapter"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("continuous-reading-prev-chapter-alt"));
  }
}
function InfiniteScrollerComponent_ng_container_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 15);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "safeStyle");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("load", function InfiniteScrollerComponent_ng_container_0_For_5_Template_img_load_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageLoad($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate2("mx-auto ", ctx_r1.pageNum === item_r6.page && ctx_r1.showDebugOutline() ? "active" : "", " ", ctx_r1.areImagesWiderThanWindow ? "full-width" : "", "");
    \u0275\u0275styleProp("filter", \u0275\u0275pipeBind1(2, 13, (tmp_15_0 = \u0275\u0275pipeBind1(1, 11, ctx_r1.darkness$)) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : ""));
    \u0275\u0275propertyInterpolate("src", item_r6.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275propertyInterpolate1("id", "page-", item_r6.page, "");
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(17, _c16, \u0275\u0275pipeBind1(3, 15, ctx_r1.widthOverride$)));
    \u0275\u0275attribute("page", item_r6.page);
  }
}
function InfiniteScrollerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InfiniteScrollerComponent_ng_container_0_Conditional_1_Template, 31, 13, "div", 3)(2, InfiniteScrollerComponent_ng_container_0_Conditional_2_Template, 12, 2, "div", 4);
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275repeaterCreate(4, InfiniteScrollerComponent_ng_container_0_For_5_Template, 4, 19, "img", 6, _forTrack02);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7, 0);
    \u0275\u0275listener("click", function InfiniteScrollerComponent_ng_container_0_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadNextChapter.emit());
    });
    \u0275\u0275elementStart(9, "div")(10, "button", 8);
    \u0275\u0275element(11, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 8);
    \u0275\u0275element(15, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showDebugBar() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.atTop ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("infiniteScrollDistance", 1)("infiniteScrollThrottle", 50);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 6, ctx_r1.webtoonImages));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r4("continuous-reading-next-chapter"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("continuous-reading-next-chapter-alt"));
  }
}
var SPACER_SCROLL_INTO_PX = 200;
var InfiniteScrollerComponent = class _InfiniteScrollerComponent {
  get minPageLoaded() {
    return Math.min(...Object.values(this.imagesLoaded));
  }
  get maxPageLoaded() {
    return Math.max(...Object.values(this.imagesLoaded));
  }
  get areImagesWiderThanWindow() {
    let [_, innerWidth] = this.getInnerDimensions();
    return this.webtoonImageWidth > (innerWidth || document.body.clientWidth);
  }
  constructor(document2) {
    this.document = document2;
    this.mangaReaderService = inject(MangaReaderService);
    this.readerService = inject(ReaderService);
    this.renderer = inject(Renderer2);
    this.scrollService = inject(ScrollService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.pageNum = 0;
    this.bufferPages = 5;
    this.totalPages = 0;
    this.pageNumberChange = new EventEmitter();
    this.loadNextChapter = new EventEmitter();
    this.loadPrevChapter = new EventEmitter();
    this.bookmarkPage = new ReplaySubject();
    this.fullscreenToggled = new ReplaySubject();
    this.bottomSpacerIntersectionObserver = new IntersectionObserver((entries) => this.handleBottomIntersection(entries), { threshold: 1 });
    this.darkness$ = of("brightness(100%)");
    this.webtoonImages = new BehaviorSubject([]);
    this.intersectionObserver = new IntersectionObserver((entries) => this.handleIntersection(entries), { threshold: 0.01 });
    this.scrollingDirection = PAGING_DIRECTION.FORWARD;
    this.prevScrollPosition = 0;
    this.currentPageElem = null;
    this.webtoonImageWidth = window.innerWidth || this.document.body.clientWidth || this.document.documentElement.clientWidth;
    this.isScrolling = false;
    this.allImagesLoaded = false;
    this.imagesLoaded = {};
    this.atBottom = false;
    this.atTop = false;
    this.isFullscreenMode = false;
    this.previousScrollHeightMinusTop = 0;
    this.initFinished = false;
    this.debugMode = 0;
    this.debugLogFilter = ["[PREFETCH]", "[Intersection]", "[Visibility]", "[Image Load]"];
    this.widthOverride$ = new Observable();
    this.widthSliderValue$ = new Observable();
    const reader = document2.querySelector(".reading-area");
    if (reader !== null) {
      this.readerElemRef = new ElementRef(reader);
    }
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("totalPages") && changes["totalPages"].previousValue != changes["totalPages"].currentValue) {
      this.totalPages = changes["totalPages"].currentValue;
      this.cdRef.markForCheck();
      this.initWebtoonReader();
    }
  }
  ngOnDestroy() {
    this.intersectionObserver.disconnect();
  }
  initScrollHandler() {
    fromEvent(this.isFullscreenMode ? this.readerElemRef.nativeElement : this.document.body, "scroll").pipe(debounceTime(20), takeUntilDestroyed(this.destroyRef)).subscribe((event) => this.handleScrollEvent(event));
    fromEvent(this.isFullscreenMode ? this.readerElemRef.nativeElement : this.document.body, "scrollend").pipe(debounceTime(20), takeUntilDestroyed(this.destroyRef)).subscribe((event) => this.handleScrollEndEvent(event));
  }
  ngOnInit() {
    this.initScrollHandler();
    this.recalculateImageWidth();
    this.darkness$ = this.readerSettings$.pipe(map((values) => "brightness(" + values.darkness + "%)"), takeUntilDestroyed(this.destroyRef));
    this.widthSliderValue$ = this.readerSettings$.pipe(map((values) => parseInt(values.widthSlider) <= 0 ? "" : values.widthSlider + "%"), takeUntilDestroyed(this.destroyRef));
    this.widthOverride$ = this.widthSliderValue$;
    this.widthSliderValue$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
      this.currentPageElem = this.document.querySelector("img#page-" + this.pageNum);
      if (!this.currentPageElem)
        return;
      let images = Array.from(document.querySelectorAll('img[id^="page-"]'));
      images.forEach((img) => {
        this.renderer.setStyle(img, "width", val);
      });
      this.widthOverride$ = this.widthSliderValue$;
      this.prevScrollPosition = this.currentPageElem.getBoundingClientRect().top;
      this.currentPageElem.scrollIntoView();
      this.cdRef.markForCheck();
    });
    if (this.goToPage) {
      this.goToPage.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((page) => {
        const isSamePage = this.pageNum === page;
        if (isSamePage) {
          return;
        }
        this.debugLog("[GoToPage] jump has occured from " + this.pageNum + " to " + page);
        if (this.pageNum < page) {
          this.scrollingDirection = PAGING_DIRECTION.FORWARD;
        } else {
          this.scrollingDirection = PAGING_DIRECTION.BACKWARDS;
        }
        this.setPageNum(page, true);
      });
    }
    if (this.bookmarkPage) {
      this.bookmarkPage.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((page) => {
        const image = document.querySelector('img[id^="page-' + page + '"]');
        if (image) {
          this.renderer.addClass(image, "bookmark-effect");
          setTimeout(() => {
            this.renderer.removeClass(image, "bookmark-effect");
          }, 1e3);
        }
      });
    }
    if (this.fullscreenToggled) {
      this.fullscreenToggled.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((isFullscreen) => {
        this.debugLog("[FullScreen] Fullscreen mode: ", isFullscreen);
        this.isFullscreenMode = isFullscreen;
        this.cdRef.markForCheck();
        this.recalculateImageWidth();
        this.initScrollHandler();
        this.setPageNum(this.pageNum, true);
      });
    }
  }
  ngAfterViewInit() {
    this.bottomSpacerIntersectionObserver.observe(this.bottomSpacer.nativeElement);
  }
  recalculateImageWidth() {
    const [_, innerWidth] = this.getInnerDimensions();
    this.webtoonImageWidth = innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
    this.cdRef.markForCheck();
  }
  getVerticalOffset() {
    const reader = this.isFullscreenMode ? this.readerElemRef.nativeElement : this.document.body;
    let offset = 0;
    if (reader instanceof Window) {
      offset = reader.scrollY;
    } else {
      offset = reader.scrollTop;
    }
    return offset || document.body.scrollTop || document.documentElement.scrollTop || 0;
  }
  handleScrollEvent(event) {
    const verticalOffset = this.getVerticalOffset();
    if (verticalOffset > this.prevScrollPosition) {
      this.scrollingDirection = PAGING_DIRECTION.FORWARD;
    } else {
      this.scrollingDirection = PAGING_DIRECTION.BACKWARDS;
    }
    this.prevScrollPosition = verticalOffset;
    if (this.isScrolling && this.currentPageElem != null && this.isElementVisible(this.currentPageElem)) {
      this.debugLog("[Scroll] Image is visible from scroll, isScrolling is now false");
      this.isScrolling = false;
      this.cdRef.markForCheck();
    }
    if (!this.isScrolling) {
      const midlineImages = Array.from(document.querySelectorAll('img[id^="page-"]')).filter((entry) => this.shouldElementCountAsCurrentPage(entry));
      if (midlineImages.length > 0) {
        this.setPageNum(parseInt(midlineImages[0].getAttribute("page") || this.pageNum + "", 10));
      }
    }
    this.checkIfShouldTriggerContinuousReader();
  }
  handleScrollEndEvent(event) {
    if (!this.isScrolling) {
      const closestImages = Array.from(document.querySelectorAll('img[id^="page-"]'));
      const img = this.findClosestVisibleImage(closestImages);
      if (img != null) {
        this.setPageNum(parseInt(img.getAttribute("page") || this.pageNum + "", 10));
      }
    }
  }
  getTotalHeight() {
    let totalHeight = 0;
    document.querySelectorAll('img[id^="page-"]').forEach((img) => totalHeight += img.getBoundingClientRect().height);
    return Math.round(totalHeight);
  }
  getTotalScroll() {
    if (this.isFullscreenMode) {
      return this.readerElemRef.nativeElement.offsetHeight + this.readerElemRef.nativeElement.scrollTop;
    }
    return document.body.offsetHeight + document.body.scrollTop;
  }
  getScrollTop() {
    if (this.isFullscreenMode) {
      return this.readerElemRef.nativeElement.scrollTop;
    }
    return document.body.scrollTop;
  }
  checkIfShouldTriggerContinuousReader() {
    if (this.isScrolling)
      return;
    if (this.scrollingDirection === PAGING_DIRECTION.FORWARD) {
      const totalHeight = this.getTotalHeight();
      const totalScroll = this.getTotalScroll();
      if (this.atTop && this.pageNum > 0) {
        this.atTop = false;
        this.cdRef.markForCheck();
      }
      if (totalHeight != 0 && totalScroll >= totalHeight && !this.atBottom) {
        this.atBottom = true;
        this.cdRef.markForCheck();
        this.setPageNum(this.totalPages);
        this.previousScrollHeightMinusTop = this.getScrollTop();
        requestAnimationFrame(() => {
          document.body.scrollTop = this.previousScrollHeightMinusTop + SPACER_SCROLL_INTO_PX / 2;
          this.cdRef.markForCheck();
        });
        this.checkIfShouldTriggerContinuousReader();
      } else if (totalScroll >= totalHeight + SPACER_SCROLL_INTO_PX && this.atBottom) {
        this.loadNextChapter.emit();
        this.cdRef.markForCheck();
      }
    } else {
      if (this.getScrollTop() < 5 && this.pageNum === 0 && !this.atTop) {
        this.atBottom = false;
        this.atTop = true;
        this.cdRef.markForCheck();
        this.previousScrollHeightMinusTop = document.body.scrollHeight - document.body.scrollTop;
        const reader = this.isFullscreenMode ? this.readerElemRef.nativeElement : this.document.body;
        requestAnimationFrame(() => this.scrollService.scrollTo(SPACER_SCROLL_INTO_PX / 2, reader));
      } else if (this.getScrollTop() < 5 && this.pageNum === 0 && this.atTop) {
        this.loadPrevChapter.emit();
        this.cdRef.markForCheck();
      }
    }
  }
  getInnerDimensions() {
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    if (this.isFullscreenMode) {
      innerHeight = this.readerElemRef.nativeElement.clientHeight;
      innerWidth = this.readerElemRef.nativeElement.clientWidth;
    }
    return [innerHeight, innerWidth];
  }
  isElementVisible(elem) {
    if (elem === null || elem === void 0) {
      return false;
    }
    this.debugLog("[Visibility] Checking if Page " + elem.getAttribute("id") + " is visible");
    const rect = elem.getBoundingClientRect();
    const [innerHeight, innerWidth] = this.getInnerDimensions();
    return rect.bottom >= 0 && rect.right >= 0 && rect.top <= (innerHeight || document.body.clientHeight) && rect.left <= (innerWidth || document.body.clientWidth);
  }
  shouldElementCountAsCurrentPage(elem) {
    if (elem === null || elem === void 0) {
      return false;
    }
    const rect = elem.getBoundingClientRect();
    const [innerHeight, innerWidth] = this.getInnerDimensions();
    if (rect.bottom >= 0 && rect.right >= 0 && rect.top <= (innerHeight || document.body.clientHeight) && rect.left <= (innerWidth || document.body.clientWidth)) {
      const topX = innerHeight || document.body.clientHeight;
      return Math.abs(rect.top / topX) <= 0.25;
    }
    return false;
  }
  findClosestVisibleImage(images) {
    let closestImage = null;
    let closestDistanceToTop = Number.MAX_VALUE;
    for (const image of images) {
      const rect = image.getBoundingClientRect();
      const distanceToTop = Math.abs(rect.top);
      if (distanceToTop < closestDistanceToTop) {
        closestDistanceToTop = distanceToTop;
        closestImage = image;
      }
    }
    return closestImage;
  }
  initWebtoonReader() {
    this.initFinished = false;
    this.recalculateImageWidth();
    this.imagesLoaded = {};
    this.webtoonImages.next([]);
    this.atBottom = false;
    this.checkIfShouldTriggerContinuousReader();
    this.cdRef.markForCheck();
    const [startingIndex, endingIndex] = this.calculatePrefetchIndecies();
    this.debugLog("[INIT] Prefetching pages " + startingIndex + " to " + endingIndex + ". Current page: ", this.pageNum);
    for (let i = startingIndex; i <= endingIndex; i++) {
      this.loadWebtoonImage(i);
    }
    this.cdRef.markForCheck();
  }
  onImageLoad(event) {
    const imagePage = this.readerService.imageUrlToPageNum(event.target.src);
    this.debugLog("[Image Load] Image loaded: ", imagePage);
    if (event.target.width < this.webtoonImageWidth) {
      this.webtoonImageWidth = event.target.width;
    }
    this.renderer.setAttribute(event.target, "width", this.mangaReaderService.maxWidth() + "");
    this.renderer.setAttribute(event.target, "height", event.target.height + "");
    this.attachIntersectionObserverElem(event.target);
    if (imagePage === this.pageNum) {
      Promise.all(Array.from(this.document.querySelectorAll("img")).filter((img) => !img.complete).map((img) => new Promise((resolve) => {
        img.onload = img.onerror = resolve;
      }))).then(() => {
        this.debugLog("[Initialization] All images have loaded from initial prefetch, initFinished = true");
        this.debugLog("[Image Load] ! Loaded current page !", this.pageNum);
        this.currentPageElem = this.document.querySelector("img#page-" + this.pageNum);
        if (this.currentPageElem && !this.isElementVisible(this.currentPageElem)) {
          this.scrollToCurrentPage();
        } else {
          this.initFinished = true;
          this.cdRef.markForCheck();
        }
        this.allImagesLoaded = true;
        this.cdRef.markForCheck();
      });
    }
  }
  handleBottomIntersection(entries) {
    if (entries.length > 0 && this.pageNum > this.totalPages - 5 && this.initFinished) {
      this.debugLog("[Intersection] The whole bottom spacer is visible", entries[0].isIntersecting);
      this.loadNextChapter.emit();
    }
  }
  handleIntersection(entries) {
    if (!this.allImagesLoaded || this.isScrolling) {
      this.debugLog("[Intersection] Images are not loaded (or performing scrolling action), skipping any scroll calculations");
      return;
    }
    entries.forEach((entry) => {
      const imagePage = parseInt(entry.target.attributes.getNamedItem("page")?.value + "", 10);
      this.debugLog("[Intersection] Page " + imagePage + " is visible: ", entry.isIntersecting);
      if (entry.isIntersecting) {
        this.debugLog("[Intersection] ! Page " + imagePage + " just entered screen");
        this.prefetchWebtoonImages(imagePage);
      }
    });
  }
  setPageNum(pageNum, scrollToPage = false) {
    if (pageNum >= this.totalPages) {
      pageNum = this.totalPages - 1;
    } else if (pageNum < 0) {
      pageNum = 0;
    }
    this.pageNum = pageNum;
    this.pageNumberChange.emit(this.pageNum);
    this.cdRef.markForCheck();
    this.prefetchWebtoonImages();
    if (scrollToPage) {
      this.scrollToCurrentPage();
    }
  }
  isScrollingForwards() {
    return this.scrollingDirection === PAGING_DIRECTION.FORWARD;
  }
  scrollToCurrentPage() {
    this.currentPageElem = document.querySelector("img#page-" + this.pageNum);
    if (!this.currentPageElem) {
      return;
    }
    this.debugLog("[GoToPage] Scrolling to page", this.pageNum);
    this.prevScrollPosition = this.currentPageElem.getBoundingClientRect().top;
    this.isScrolling = true;
    this.cdRef.markForCheck();
    setTimeout(() => {
      if (this.currentPageElem) {
        this.debugLog("[Scroll] Scrolling to page ", this.pageNum);
        this.currentPageElem.scrollIntoView({ behavior: "smooth" });
        this.initFinished = true;
        this.cdRef.markForCheck();
      }
    }, 600);
  }
  loadWebtoonImage(page) {
    if (this.imagesLoaded.hasOwnProperty(page)) {
      this.debugLog("	[PREFETCH] Skipping prefetch of ", page);
      return;
    }
    this.debugLog("	[PREFETCH] Prefetching ", page);
    const data = this.webtoonImages.value.concat({ src: this.urlProvider(page), page });
    data.sort((a, b) => {
      if (a.page < b.page) {
        return -1;
      } else if (a.page > b.page) {
        return 1;
      } else
        return 0;
    });
    this.allImagesLoaded = false;
    this.cdRef.markForCheck();
    this.webtoonImages.next(data);
    if (!this.imagesLoaded.hasOwnProperty(page)) {
      this.imagesLoaded[page] = page;
    }
  }
  attachIntersectionObserverElem(elem) {
    if (elem !== null) {
      this.intersectionObserver.observe(elem);
      this.debugLog("[Intersection] Attached Intersection Observer to page", this.readerService.imageUrlToPageNum(elem.src));
    } else {
      console.error("Could not attach observer on elem");
    }
  }
  calculatePrefetchIndecies(pageNum = -1) {
    if (pageNum == -1) {
      pageNum = this.pageNum;
    }
    let startingIndex = 0;
    let endingIndex = 0;
    if (this.isScrollingForwards()) {
      startingIndex = Math.min(Math.max(pageNum - this.bufferPages, 0), this.totalPages - 1);
      endingIndex = Math.min(Math.max(pageNum + this.bufferPages, 0), this.totalPages - 1);
      if (startingIndex === this.totalPages) {
        return [0, 0];
      }
    } else {
      startingIndex = Math.min(Math.max(pageNum - this.bufferPages, 0), this.totalPages - 1);
      endingIndex = Math.min(Math.max(pageNum + this.bufferPages, 0), this.totalPages - 1);
    }
    if (startingIndex > endingIndex) {
      const temp = startingIndex;
      startingIndex = endingIndex;
      endingIndex = temp;
    }
    return [startingIndex, endingIndex];
  }
  range(size, startAt = 0) {
    return [...Array(size).keys()].map((i) => i + startAt);
  }
  prefetchWebtoonImages(pageNum = -1) {
    if (pageNum === -1) {
      pageNum = this.pageNum;
    }
    const [startingIndex, endingIndex] = this.calculatePrefetchIndecies(pageNum);
    if (startingIndex === 0 && endingIndex === 0) {
      return;
    }
    this.debugLog("	[PREFETCH] prefetching pages: " + startingIndex + " to " + endingIndex);
    for (let i = startingIndex; i <= endingIndex; i++) {
      this.loadWebtoonImage(i);
    }
    Promise.all(Array.from(document.querySelectorAll("img")).filter((img) => !img.complete).map((img) => new Promise((resolve) => {
      img.onload = img.onerror = resolve;
    }))).then(() => {
      this.allImagesLoaded = true;
      this.cdRef.markForCheck();
    });
  }
  debugLog(message, extraData) {
    if (!(this.debugMode & 2))
      return;
    if (this.debugLogFilter.filter((str) => message.replace("	", "").startsWith(str)).length > 0)
      return;
    if (extraData !== void 0) {
      console.log(message, extraData);
    } else {
      console.log(message);
    }
  }
  showDebugBar() {
    return this.debugMode & 4;
  }
  showDebugOutline() {
    return this.debugMode & 8;
  }
  static {
    this.\u0275fac = function InfiniteScrollerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InfiniteScrollerComponent)(\u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _InfiniteScrollerComponent, selectors: [["app-infinite-scroller"]], viewQuery: function InfiniteScrollerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bottomSpacer = _t.first);
      }
    }, inputs: { pageNum: "pageNum", bufferPages: "bufferPages", totalPages: "totalPages", urlProvider: "urlProvider", readerSettings$: "readerSettings$", goToPage: "goToPage", bookmarkPage: "bookmarkPage", fullscreenToggled: "fullscreenToggled" }, outputs: { pageNumberChange: "pageNumberChange", loadNextChapter: "loadNextChapter", loadPrevChapter: "loadPrevChapter" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["bottomSpacer", ""], ["topSpacer", ""], [4, "transloco", "translocoRead"], [1, "fixed-top", "overlay"], ["role", "alert", 1, "spacer", "top"], ["infinite-scroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle"], ["rel", "nofollow", "alt", "image", "ondragstart", "return false;", "onselectstart", "return false;", 2, "display", "block", 3, "src", "ngStyle", "filter", "class", "id"], ["role", "alert", 1, "spacer", "bottom", 3, "click"], [1, "btn", "btn-icon", "mx-auto"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-down", "animate"], [1, "mx-auto", "text"], [1, "visually-hidden"], [1, "empty-space"], ["role", "alert", 1, "spacer", "top", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-up", "animate"], ["rel", "nofollow", "alt", "image", "ondragstart", "return false;", "onselectstart", "return false;", 2, "display", "block", 3, "load", "src", "ngStyle", "id"]], template: function InfiniteScrollerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, InfiniteScrollerComponent_ng_container_0_Template, 19, 8, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "infinite-scroller");
      }
    }, dependencies: [AsyncPipe, TranslocoDirective, InfiniteScrollModule, InfiniteScrollDirective, SafeStylePipe, NgStyle], styles: ["\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.active[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n.full-opacity[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  cursor: pointer;\n}\n.spacer[_ngcontent-%COMP%]   .animate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_move-up-down 1s linear infinite;\n}\n.spacer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  z-index: 101;\n}\n.spacer[_ngcontent-%COMP%]   .empty-space[_ngcontent-%COMP%] {\n  height: 200px;\n}\nimg[_ngcontent-%COMP%], \n.full-width[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n  height: auto;\n}\n*[_ngcontent-%COMP%]:not(html) {\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n@keyframes _ngcontent-%COMP%_move-up-down {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.bookmark-effect[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_infinite-scroll-bookmark 1s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n@keyframes _ngcontent-%COMP%_infinite-scroll-bookmark {\n  0%, 100% {\n    filter: opacity(1);\n  }\n  50% {\n    filter: opacity(0.25);\n  }\n}\n/*# sourceMappingURL=infinite-scroller.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfiniteScrollerComponent, { className: "InfiniteScrollerComponent", filePath: "src/app/manga-reader/_components/infinite-scroller/infinite-scroller.component.ts", lineNumber: 67 });
})();

// src/app/ng-swipe/ag-swipe.core.ts
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["X"] = "x";
  SwipeDirection2["Y"] = "y";
})(SwipeDirection || (SwipeDirection = {}));
function createSwipeSubscription({ domElement, onSwipeMove, onSwipeEnd }) {
  if (!(domElement instanceof HTMLElement)) {
    throw new Error("Provided domElement should be an instance of HTMLElement");
  }
  if (typeof onSwipeMove !== "function" && typeof onSwipeEnd !== "function") {
    throw new Error("At least one of the following swipe event handler functions should be provided: onSwipeMove and/or onSwipeEnd");
  }
  const touchStarts$ = fromEvent(domElement, "touchstart").pipe(map(getTouchCoordinates));
  const touchMoves$ = fromEvent(domElement, "touchmove").pipe(map(getTouchCoordinates));
  const touchEnds$ = fromEvent(domElement, "touchend").pipe(map(getTouchCoordinates));
  const touchCancels$ = fromEvent(domElement, "touchcancel");
  const touchStartsWithDirection$ = touchStarts$.pipe(switchMap((touchStartEvent) => touchMoves$.pipe(elementAt(3), map((touchMoveEvent) => ({
    x: touchStartEvent.x,
    y: touchStartEvent.y,
    direction: getTouchDirection(touchStartEvent, touchMoveEvent)
  })))));
  return touchStartsWithDirection$.pipe(switchMap((touchStartEvent) => touchMoves$.pipe(map((touchMoveEvent) => getTouchDistance(touchStartEvent, touchMoveEvent)), tap((coordinates) => {
    if (typeof onSwipeMove !== "function") {
      return;
    }
    onSwipeMove(getSwipeEvent(touchStartEvent, coordinates));
  }), takeUntil(race(touchEnds$.pipe(map((touchEndEvent) => getTouchDistance(touchStartEvent, touchEndEvent)), tap((coordinates) => {
    if (typeof onSwipeEnd !== "function") {
      return;
    }
    onSwipeEnd(getSwipeEvent(touchStartEvent, coordinates));
  })), touchCancels$))))).subscribe();
}
function getTouchCoordinates(touchEvent) {
  return {
    x: touchEvent.changedTouches[0].clientX,
    y: touchEvent.changedTouches[0].clientY
  };
}
function getTouchDistance(startCoordinates, moveCoordinates) {
  return {
    x: moveCoordinates.x - startCoordinates.x,
    y: moveCoordinates.y - startCoordinates.y
  };
}
function getTouchDirection(startCoordinates, moveCoordinates) {
  const { x, y } = getTouchDistance(startCoordinates, moveCoordinates);
  return Math.abs(x) < Math.abs(y) ? SwipeDirection.Y : SwipeDirection.X;
}
function getSwipeEvent(touchStartEvent, coordinates) {
  return {
    direction: touchStartEvent.direction,
    distance: coordinates[touchStartEvent.direction]
  };
}

// src/app/ng-swipe/ng-swipe.directive.ts
var SwipeDirective = class _SwipeDirective {
  constructor(elementRef, zone) {
    this.elementRef = elementRef;
    this.zone = zone;
    this.restrictSwipeToLeftSide = false;
    this.swipeMove = new EventEmitter();
    this.swipeEnd = new EventEmitter();
    this.swipeLeft = new EventEmitter();
    this.swipeRight = new EventEmitter();
    this.swipeUp = new EventEmitter();
    this.swipeDown = new EventEmitter();
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.swipeSubscription = createSwipeSubscription({
        domElement: this.elementRef.nativeElement,
        onSwipeMove: (swipeMoveEvent) => this.swipeMove.emit(swipeMoveEvent),
        onSwipeEnd: (swipeEndEvent) => {
          if (this.isSwipeWithinRestrictedArea(swipeEndEvent)) {
            this.swipeEnd.emit(swipeEndEvent);
            this.detectSwipeDirection(swipeEndEvent);
          }
        }
      });
    });
  }
  isSwipeWithinRestrictedArea(swipeEvent) {
    if (!this.restrictSwipeToLeftSide)
      return true;
    const elementRect = this.elementRef.nativeElement.getBoundingClientRect();
    const touchAreaWidth = elementRect.width * 0.3;
    if (swipeEvent.direction === SwipeDirection.X && Math.abs(swipeEvent.distance) < touchAreaWidth) {
      return true;
    }
    return false;
  }
  detectSwipeDirection(swipeEvent) {
    if (swipeEvent.direction === SwipeDirection.X) {
      if (swipeEvent.distance > 0) {
        this.swipeRight.emit();
      } else {
        this.swipeLeft.emit();
      }
    } else if (swipeEvent.direction === SwipeDirection.Y) {
      if (swipeEvent.distance > 0) {
        this.swipeDown.emit();
      } else {
        this.swipeUp.emit();
      }
    }
  }
  ngOnDestroy() {
    this.swipeSubscription?.unsubscribe();
  }
  static {
    this.\u0275fac = function SwipeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SwipeDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = \u0275\u0275defineDirective({ type: _SwipeDirective, selectors: [["", "ngSwipe", ""]], inputs: { restrictSwipeToLeftSide: "restrictSwipeToLeftSide" }, outputs: { swipeMove: "swipeMove", swipeEnd: "swipeEnd", swipeLeft: "swipeLeft", swipeRight: "swipeRight", swipeUp: "swipeUp", swipeDown: "swipeDown" }, standalone: true });
  }
};

// src/app/_directives/dbl-click.directive.ts
var DblClickDirective = class _DblClickDirective {
  constructor() {
    this.singleClick = new EventEmitter();
    this.doubleClick = new EventEmitter();
    this.lastTapTime = 0;
    this.tapTimeout = 300;
  }
  handleClick(event) {
    const currentTime = (/* @__PURE__ */ new Date()).getTime();
    if (currentTime - this.lastTapTime < this.tapTimeout) {
      clearTimeout(this.singleClickTimeout);
      event.stopPropagation();
      event.preventDefault();
      this.doubleClick.emit(event);
    } else {
      this.singleClickTimeout = setTimeout(() => {
        this.singleClick.emit(event);
      }, this.tapTimeout);
    }
    this.lastTapTime = currentTime;
  }
  static {
    this.\u0275fac = function DblClickDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DblClickDirective)();
    };
  }
  static {
    this.\u0275dir = \u0275\u0275defineDirective({ type: _DblClickDirective, selectors: [["", "appDblClick", ""]], hostBindings: function DblClickDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function DblClickDirective_click_HostBindingHandler($event) {
          return ctx.handleClick($event);
        });
      }
    }, outputs: { singleClick: "singleClick", doubleClick: "doubleClick" }, standalone: true });
  }
};

// src/app/manga-reader/_components/manga-reader/manga-reader.component.ts
var _c07 = ["reader"];
var _c17 = ["readingArea"];
var _c22 = ["content"];
var _forTrack03 = ($index, $item) => $item.src;
var _forTrack1 = ($index, $item) => $item.value;
var _c32 = (a0) => ({ overflow: a0 });
var _c42 = (a0, a1) => ({ "background-color": a0, "height": a1 });
var _c52 = (a0, a1) => ({ "current": a0, "loaded": a1 });
var _c62 = (a0) => ({ percentage: a0 });
var _c72 = (a0, a1) => ({ "height": a0, "max-height": a1 });
var _c82 = (a0, a1, a2) => ({ "height": a0, "left": "inherit", "right": a1, "max-height": a2 });
function MangaReaderComponent_ng_container_0_Conditional_3_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c52, ctx === ctx_r2.pageNum, img_r2.complete));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.readerService.imageUrlToPageNum(img_r2.src));
  }
}
function MangaReaderComponent_ng_container_0_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MangaReaderComponent_ng_container_0_Conditional_3_For_2_Conditional_0_Template, 2, 5, "span", 8);
  }
  if (rf & 2) {
    let tmp_15_0;
    const img_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_15_0 = ctx_r2.readerService.imageUrlToPageNum(img_r2.src)) ? 0 : -1, tmp_15_0);
  }
}
function MangaReaderComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, MangaReaderComponent_ng_container_0_Conditional_3_For_2_Template, 1, 1, null, null, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.cachedImages);
  }
}
function MangaReaderComponent_ng_container_0_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_4_Conditional_9_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.turnOffIncognito());
    });
    \u0275\u0275text(1, "(");
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ")");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("aria-label", t_r6("incognito-alt"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("incognito-title"));
  }
}
function MangaReaderComponent_ng_container_0_Conditional_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "percent");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6("series-progress", \u0275\u0275pureFunction1(3, _c62, \u0275\u0275pipeBind1(2, 1, ctx_r2.Math.min(1, (ctx_r2.totalSeriesPagesRead + ctx_r2.pageNum) / ctx_r2.totalSeriesPages)))));
  }
}
function MangaReaderComponent_ng_container_0_Conditional_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_4_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.bookmarkPage());
    });
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("title", t_r6(ctx_r2.CurrentPageBookmarked ? "unbookmark-page-tooltip" : "bookmark-page-tooltip"));
    \u0275\u0275attribute("aria-checked", ctx_r2.CurrentPageBookmarked);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("", ctx_r2.CurrentPageBookmarked ? "fa" : "far", " fa-bookmark");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6(ctx_r2.CurrentPageBookmarked ? "unbookmark-page-tooltip" : "bookmark-page-tooltip"));
  }
}
function MangaReaderComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 9)(2, "button", 10);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeReader());
    });
    \u0275\u0275element(3, "i", 11);
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "div", 13);
    \u0275\u0275text(8);
    \u0275\u0275template(9, MangaReaderComponent_ng_container_0_Conditional_4_Conditional_9_Template, 6, 2, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275text(11);
    \u0275\u0275template(12, MangaReaderComponent_ng_container_0_Conditional_4_Conditional_12_Template, 3, 5, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "button", 17);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_4_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openShortcutModal());
    });
    \u0275\u0275element(15, "i", 18);
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, MangaReaderComponent_ng_container_0_Conditional_4_Conditional_18_Template, 4, 6, "button", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideFromTop", ctx_r2.menuOpen);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r6("back"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("back"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.incognitoMode ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.subtitle, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.totalSeriesPages > 0 ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r6("shortcuts-menu-alt"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.bookmarkMode && ctx_r2.hasBookmarkRights ? 18 : -1);
  }
}
function MangaReaderComponent_ng_container_0_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("fa fa-angle-", ctx_r2.readingDirection === ctx_r2.ReadingDirection.RightToLeft ? "double-" : "", "", ctx_r2.readerMode === ctx_r2.ReaderMode.LeftRight ? "left" : "up", "");
    \u0275\u0275property("title", t_r6("prev-page-tooltip"));
  }
}
function MangaReaderComponent_ng_container_0_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("fa fa-angle-", ctx_r2.readingDirection === ctx_r2.ReadingDirection.LeftToRight ? "double-" : "", "", ctx_r2.readerMode === ctx_r2.ReaderMode.LeftRight ? "right" : "down", "");
    \u0275\u0275property("title", t_r6("next-page-tooltip"));
  }
}
function MangaReaderComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("dblclick", function MangaReaderComponent_ng_container_0_Conditional_9_Template_div_dblclick_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.bookmarkPage($event));
    })("singleClick", function MangaReaderComponent_ng_container_0_Conditional_9_Template_div_singleClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleMenu());
    });
    \u0275\u0275element(1, "app-canvas-renderer", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 26)(3, "div", 27);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_9_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.handlePageChange($event, ctx_r2.KeyDirection.Left));
    });
    \u0275\u0275template(4, MangaReaderComponent_ng_container_0_Conditional_9_Conditional_4_Template, 2, 5, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_9_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.handlePageChange($event, ctx_r2.KeyDirection.Right));
    });
    \u0275\u0275template(6, MangaReaderComponent_ng_container_0_Conditional_9_Conditional_6_Template, 2, 5, "div");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 28);
    \u0275\u0275listener("doubleClick", function MangaReaderComponent_ng_container_0_Conditional_9_Template_div_doubleClick_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.bookmarkPage($event));
    })("singleClick", function MangaReaderComponent_ng_container_0_Conditional_9_Template_div_singleClick_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleMenu());
    });
    \u0275\u0275element(8, "app-single-renderer", 29)(9, "app-double-renderer", 30)(10, "app-double-reverse-renderer", 30)(11, "app-double-no-cover-renderer", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("readerSettings$", ctx_r2.readerSettings$)("image$", ctx_r2.currentImage$)("bookmark$", ctx_r2.showBookmarkEffect$)("showClickOverlay$", ctx_r2.showClickOverlay$);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate2("", ctx_r2.readerMode === ctx_r2.ReaderMode.LeftRight ? "left" : "top", " ", ctx_r2.clickOverlayClass("left"), "");
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(39, _c72, ctx_r2.readerMode === ctx_r2.ReaderMode.LeftRight ? ctx_r2.MaxHeight : "25%", ctx_r2.MaxHeight));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showClickOverlay ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("", ctx_r2.readerMode === ctx_r2.ReaderMode.LeftRight ? "right" : "bottom", " ", ctx_r2.clickOverlayClass("right"), "");
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction3(42, _c82, ctx_r2.readerMode === ctx_r2.ReaderMode.LeftRight ? ctx_r2.MaxHeight : "25%", ctx_r2.RightPaginationOffset + "px", ctx_r2.MaxHeight));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showClickOverlay ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("image$", ctx_r2.currentImage$)("readerSettings$", ctx_r2.readerSettings$)("bookmark$", ctx_r2.showBookmarkEffect$)("pageNum$", ctx_r2.pageNum$)("showClickOverlay$", ctx_r2.showClickOverlay$);
    \u0275\u0275advance();
    \u0275\u0275property("image$", ctx_r2.currentImage$)("readerSettings$", ctx_r2.readerSettings$)("bookmark$", ctx_r2.showBookmarkEffect$)("showClickOverlay$", ctx_r2.showClickOverlay$)("pageNum$", ctx_r2.pageNum$)("getPage", ctx_r2.getPageFn);
    \u0275\u0275advance();
    \u0275\u0275property("image$", ctx_r2.currentImage$)("readerSettings$", ctx_r2.readerSettings$)("bookmark$", ctx_r2.showBookmarkEffect$)("showClickOverlay$", ctx_r2.showClickOverlay$)("pageNum$", ctx_r2.pageNum$)("getPage", ctx_r2.getPageFn);
    \u0275\u0275advance();
    \u0275\u0275property("image$", ctx_r2.currentImage$)("readerSettings$", ctx_r2.readerSettings$)("bookmark$", ctx_r2.showBookmarkEffect$)("showClickOverlay$", ctx_r2.showClickOverlay$)("pageNum$", ctx_r2.pageNum$)("getPage", ctx_r2.getPageFn);
  }
}
function MangaReaderComponent_ng_container_0_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("doubleClick", function MangaReaderComponent_ng_container_0_Conditional_10_Conditional_0_Template_div_doubleClick_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.bookmarkPage($event));
    })("singleClick", function MangaReaderComponent_ng_container_0_Conditional_10_Conditional_0_Template_div_singleClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleMenu());
    });
    \u0275\u0275elementStart(1, "app-infinite-scroller", 34);
    \u0275\u0275listener("pageNumberChange", function MangaReaderComponent_ng_container_0_Conditional_10_Conditional_0_Template_app_infinite_scroller_pageNumberChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.handleWebtoonPageChange($event));
    })("loadNextChapter", function MangaReaderComponent_ng_container_0_Conditional_10_Conditional_0_Template_app_infinite_scroller_loadNextChapter_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.loadNextChapter());
    })("loadPrevChapter", function MangaReaderComponent_ng_container_0_Conditional_10_Conditional_0_Template_app_infinite_scroller_loadPrevChapter_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.loadPrevChapter());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("pageNum", ctx_r2.pageNum)("bufferPages", 5)("goToPage", ctx_r2.goToPageEvent)("totalPages", ctx_r2.maxPages)("urlProvider", ctx_r2.getPageUrl)("bookmarkPage", ctx_r2.showBookmarkEffectEvent)("fullscreenToggled", ctx_r2.fullscreenEvent)("readerSettings$", ctx_r2.readerSettings$);
  }
}
function MangaReaderComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MangaReaderComponent_ng_container_0_Conditional_10_Conditional_0_Template, 2, 8, "div", 32);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r2.isLoading && !ctx_r2.inSetup ? 0 : -1);
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "ngx-slider", 52);
    \u0275\u0275listener("userChangeEnd", function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_7_Template_ngx_slider_userChangeEnd_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.sliderPageUpdate($event);
      return \u0275\u0275resetView(ctx_r2.startMenuCloseTimer());
    })("userChange", function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_7_Template_ngx_slider_userChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.sliderDragUpdate($event));
    })("userChangeStart", function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_7_Template_ngx_slider_userChangeStart_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelMenuCloseTimer());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r2.pageOptions)("value", ctx_r2.pageNum)("manualRefresh", ctx_r2.refreshSlider);
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "ngx-slider", 53);
    \u0275\u0275listener("userChangeEnd", function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_8_Template_ngx_slider_userChangeEnd_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.startMenuCloseTimer());
    })("userChangeStart", function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_8_Template_ngx_slider_userChangeStart_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelMenuCloseTimer());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r2.pageOptions)("value", ctx_r2.pageNum);
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "span", 43);
    \u0275\u0275elementStart(2, "div", 44)(3, "button", 45);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.loadPrevChapter();
      return \u0275\u0275resetView(ctx_r2.resetMenuCloseTimer());
    });
    \u0275\u0275element(4, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.goToPage(0);
      return \u0275\u0275resetView(ctx_r2.resetMenuCloseTimer());
    });
    \u0275\u0275element(6, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_7_Template, 2, 3, "div", 49)(8, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Conditional_8_Template, 2, 2, "div", 49);
    \u0275\u0275elementStart(9, "button", 47);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.goToPage(ctx_r2.maxPages);
      return \u0275\u0275resetView(ctx_r2.resetMenuCloseTimer());
    });
    \u0275\u0275element(10, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 45);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.loadNextChapter();
      return \u0275\u0275resetView(ctx_r2.resetMenuCloseTimer());
    });
    \u0275\u0275element(12, "i", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.prevChapterDisabled)("title", t_r6("prev-chapter-tooltip"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.prevPageDisabled || ctx_r2.pageNum === 0)("title", t_r6("first-page-tooltip"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.pageOptions.ceil > 0 ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.nextPageDisabled || ctx_r2.pageNum >= ctx_r2.maxPages - 1)("title", t_r6("last-page-tooltip"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.nextChapterDisabled)("title", t_r6("next-chapter-tooltip"));
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r15 = ctx.$implicit;
    \u0275\u0275property("value", opt_r15.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r15.text);
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Case_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 83);
    \u0275\u0275element(2, "i", 84)(3, "i", 85);
    \u0275\u0275elementEnd()();
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Case_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 83);
    \u0275\u0275element(2, "i", 84)(3, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 87);
    \u0275\u0275element(5, "i", 84)(6, "i", 88);
    \u0275\u0275elementEnd()();
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Case_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "span", 83);
    \u0275\u0275element(2, "i", 84)(3, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 87);
    \u0275\u0275element(5, "i", 84)(6, "i", 86);
    \u0275\u0275elementEnd()();
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r16 = ctx.$implicit;
    \u0275\u0275property("value", opt_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r16.text);
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const widthOverrideLabel_r17 = ctx;
    const t_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", widthOverrideLabel_r17 ? widthOverrideLabel_r17 : t_r6("off"), " ");
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r6("off"), " ");
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "form", 54)(2, "div", 55)(3, "div", 56)(4, "label", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\xA0 ");
    \u0275\u0275elementStart(7, "div", 58);
    \u0275\u0275element(8, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 59);
    \u0275\u0275repeaterCreate(10, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_For_11_Template, 2, 2, "option", 60, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 56)(13, "label", 61);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\xA0");
    \u0275\u0275element(16, "i", 23);
    \u0275\u0275pipe(17, "fittingIcon");
    \u0275\u0275elementStart(18, "select", 62)(19, "option", 63);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 64);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 65);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 55)(26, "div", 56)(27, "label", 66);
    \u0275\u0275text(28, "Layout Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\xA0 ");
    \u0275\u0275template(30, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Case_30_Template, 4, 0, "div", 67)(31, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Case_31_Template, 7, 0, "div", 67)(32, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Case_32_Template, 7, 0, "div", 67);
    \u0275\u0275elementStart(33, "select", 68);
    \u0275\u0275repeaterCreate(34, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_For_35_Template, 2, 2, "option", 60, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 69)(37, "div", 35)(38, "div", 35)(39, "div", 70);
    \u0275\u0275element(40, "input", 71);
    \u0275\u0275elementStart(41, "label", 72);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 35)(44, "div", 35)(45, "div", 70);
    \u0275\u0275element(46, "input", 73);
    \u0275\u0275elementStart(47, "label", 74);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(49, "div", 69)(50, "div", 35)(51, "div", 35)(52, "div", 70);
    \u0275\u0275element(53, "input", 75);
    \u0275\u0275elementStart(54, "label", 76);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(56, "div", 55)(57, "div", 56)(58, "label", 77);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 78);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 56)(64, "label", 80);
    \u0275\u0275text(65);
    \u0275\u0275template(66, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Conditional_66_Template, 1, 1);
    \u0275\u0275pipe(67, "async");
    \u0275\u0275template(68, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Conditional_68_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 56)(71, "button", 82);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.savePref());
    });
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_21_0;
    let tmp_23_0;
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.generalSettingsForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("image-splitting-label"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.SplitIconClass);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.pageSplitOptionsTranslated);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("image-scaling-label"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(17, 21, ctx_r2.FittingOption));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("height"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("width"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("original"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional((tmp_15_0 = ctx_r2.layoutMode) === ctx_r2.LayoutMode.Single ? 30 : tmp_15_0 === ctx_r2.LayoutMode.Double ? 31 : tmp_15_0 === ctx_r2.LayoutMode.DoubleReversed ? 32 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.layoutModesTranslated);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r6("auto-close-menu-label"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r6("swipe-enabled-label"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r6("emulate-comic-book-label"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("brightness-label"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_21_0 = ctx_r2.generalSettingsForm.get("darkness")) == null ? null : tmp_21_0.value) + "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", t_r6("width-override-label"), ": ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_23_0 = \u0275\u0275pipeBind1(67, 23, ctx_r2.widthOverrideLabel$)) ? 66 : 68, tmp_23_0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r6("save-globally"));
  }
}
function MangaReaderComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_1_Template, 13, 9, "div", 35);
    \u0275\u0275elementStart(2, "div", 36)(3, "div", 37)(4, "button", 38);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.setReadingDirection();
      return \u0275\u0275resetView(ctx_r2.resetMenuCloseTimer());
    });
    \u0275\u0275element(5, "i", 23);
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 37)(9, "button", 40);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.toggleReaderMode();
      return \u0275\u0275resetView(ctx_r2.resetMenuCloseTimer());
    });
    \u0275\u0275element(10, "i", 23);
    \u0275\u0275pipe(11, "readerModeIcon");
    \u0275\u0275elementStart(12, "span", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 37)(15, "button", 40);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_11_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.toggleFullscreen();
      return \u0275\u0275resetView(ctx_r2.resetMenuCloseTimer());
    });
    \u0275\u0275element(16, "i", 23);
    \u0275\u0275pipe(17, "fullscreenIcon");
    \u0275\u0275elementStart(18, "span", 12);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 37)(21, "button", 40);
    \u0275\u0275listener("click", function MangaReaderComponent_ng_container_0_Conditional_11_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.settingsOpen = !ctx_r2.settingsOpen;
      return \u0275\u0275resetView(ctx_r2.resetMenuCloseTimer());
    });
    \u0275\u0275element(22, "i", 41);
    \u0275\u0275elementStart(23, "span", 12);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(25, MangaReaderComponent_ng_container_0_Conditional_11_Conditional_25_Template, 73, 25, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@slideFromBottom", ctx_r2.menuOpen);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.pageOptions !== void 0 && ctx_r2.pageOptions.ceil !== void 0 ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.readerMode === ctx_r2.ReaderMode.Webtoon || ctx_r2.readerMode === ctx_r2.ReaderMode.UpDown)("title", t_r6("reading-direction-tooltip") + ctx_r2.readingDirection === ctx_r2.ReadingDirection.LeftToRight ? t_r6("left-to-right-alt") : t_r6("right-to-left-alt"));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa fa-angle-double-", ctx_r2.readingDirection === ctx_r2.ReadingDirection.LeftToRight ? "right" : "left", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.readingDirection === ctx_r2.ReadingDirection.LeftToRight ? t_r6("left-to-right-alt") : t_r6("right-to-left-alt"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r6("reading-mode-tooltip"));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa ", \u0275\u0275pipeBind1(11, 21, ctx_r2.readerMode), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("reading-mode-tooltip"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("title", ctx_r2.isFullscreen ? t_r6("collapse") : t_r6("fullscreen"));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa ", \u0275\u0275pipeBind1(17, 23, ctx_r2.isFullscreen), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isFullscreen ? t_r6("collapse") : t_r6("fullscreen"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r6("settings-tooltip"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("settings-tooltip"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.settingsOpen && ctx_r2.generalSettingsForm ? 25 : -1);
  }
}
function MangaReaderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3, 0);
    \u0275\u0275template(3, MangaReaderComponent_ng_container_0_Conditional_3_Template, 3, 0, "div", 4)(4, MangaReaderComponent_ng_container_0_Conditional_4_Template, 19, 9, "div", 4);
    \u0275\u0275element(5, "app-loading", 5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementStart(7, "div", 6, 1);
    \u0275\u0275listener("swipeEnd", function MangaReaderComponent_ng_container_0_Template_div_swipeEnd_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSwipeEnd($event));
    })("swipeMove", function MangaReaderComponent_ng_container_0_Template_div_swipeMove_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSwipeMove($event));
    });
    \u0275\u0275template(9, MangaReaderComponent_ng_container_0_Conditional_9_Template, 12, 46)(10, MangaReaderComponent_ng_container_0_Conditional_10_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MangaReaderComponent_ng_container_0_Conditional_11_Template, 26, 25, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(10, _c32, ctx_r2.isFullscreen ? "auto" : "visible"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.debugMode ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.menuOpen ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.isLoading || !((tmp_7_0 = \u0275\u0275pipeBind1(6, 8, ctx_r2.currentImage$)) == null ? null : tmp_7_0.complete) && ctx_r2.readerMode !== ctx_r2.ReaderMode.Webtoon)("absolute", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(12, _c42, ctx_r2.backgroundColor, ctx_r2.readerMode === ctx_r2.ReaderMode.Webtoon ? "inherit" : "100dvh"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.readerMode !== ctx_r2.ReaderMode.Webtoon ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.menuOpen ? 11 : -1);
  }
}
var PREFETCH_PAGES = 10;
var CHAPTER_ID_NOT_FETCHED = -2;
var CHAPTER_ID_DOESNT_EXIST = -1;
var ANIMATION_SPEED = 200;
var OVERLAY_AUTO_CLOSE_TIME = 3e3;
var CLICK_OVERLAY_TIMEOUT = 3e3;
var ChapterInfoPosition;
(function(ChapterInfoPosition2) {
  ChapterInfoPosition2[ChapterInfoPosition2["Previous"] = 0] = "Previous";
  ChapterInfoPosition2[ChapterInfoPosition2["Current"] = 1] = "Current";
  ChapterInfoPosition2[ChapterInfoPosition2["Next"] = 2] = "Next";
})(ChapterInfoPosition || (ChapterInfoPosition = {}));
var KeyDirection;
(function(KeyDirection2) {
  KeyDirection2[KeyDirection2["Right"] = 0] = "Right";
  KeyDirection2[KeyDirection2["Left"] = 1] = "Left";
  KeyDirection2[KeyDirection2["Up"] = 2] = "Up";
  KeyDirection2[KeyDirection2["Down"] = 3] = "Down";
})(KeyDirection || (KeyDirection = {}));
var MangaReaderComponent = class _MangaReaderComponent {
  get CurrentPageBookmarked() {
    return this.bookmarks.hasOwnProperty(this.pageNum);
  }
  get WindowWidth() {
    return this.readingArea?.nativeElement.scrollWidth + "px";
  }
  get ImageHeight() {
    if (this.FittingOption !== FITTING_OPTION.HEIGHT) {
      return this.mangaReaderService.getPageDimensions(this.pageNum)?.height + "px";
    }
    return this.readingArea?.nativeElement?.clientHeight + "px";
  }
  get MaxHeight() {
    return "100dvh";
  }
  get RightPaginationOffset() {
    if (this.readerMode === ReaderMode.LeftRight && this.FittingOption !== FITTING_OPTION.WIDTH) {
      return (this.readingArea?.nativeElement?.scrollLeft || 0) * -1;
    }
    return 0;
  }
  get SplitIconClass() {
    if (this.mangaReaderService.isSplitLeftToRight(this.pageSplitOption)) {
      return "left-side";
    } else if (this.mangaReaderService.isNoSplit(this.pageSplitOption)) {
      return "none";
    }
    return "right-side";
  }
  get FittingOption() {
    return this.generalSettingsForm?.get("fittingOption")?.value || FITTING_OPTION.HEIGHT;
  }
  get ReadingAreaWidth() {
    return this.readingArea?.nativeElement.scrollWidth - this.readingArea?.nativeElement.clientWidth;
  }
  get ReadingAreaHeight() {
    return this.readingArea?.nativeElement.scrollHeight - this.readingArea?.nativeElement.clientHeight;
  }
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.accountService = inject(AccountService);
    this.formBuilder = inject(FormBuilder);
    this.navService = inject(NavService);
    this.memberService = inject(MemberService);
    this.modalService = inject(NgbModal);
    this.cdRef = inject(ChangeDetectorRef);
    this.toastr = inject(ToastrService);
    this.readerService = inject(ReaderService);
    this.utilityService = inject(UtilityService);
    this.mangaReaderService = inject(MangaReaderService);
    this.KeyDirection = KeyDirection;
    this.ReaderMode = ReaderMode;
    this.LayoutMode = LayoutMode;
    this.ReadingDirection = ReadingDirection;
    this.Breakpoint = Breakpoint;
    this.Math = Math;
    this.readingListId = CHAPTER_ID_DOESNT_EXIST;
    this.incognitoMode = false;
    this.bookmarkMode = false;
    this.readingListMode = false;
    this.pageNum = 0;
    this.maxPages = 1;
    this.totalSeriesPages = 0;
    this.totalSeriesPagesRead = 0;
    this.readingDirection = ReadingDirection.LeftToRight;
    this.scalingOption = ScalingOption.FitToHeight;
    this.pageSplitOption = PageSplitOption.FitSplit;
    this.isFullscreen = false;
    this.autoCloseMenu = true;
    this.readerMode = ReaderMode.LeftRight;
    this.readerModeSubject = new BehaviorSubject(this.readerMode);
    this.readerMode$ = this.readerModeSubject.asObservable();
    this.pagingDirection = PAGING_DIRECTION.FORWARD;
    this.pagingDirectionSubject = new BehaviorSubject(this.pagingDirection);
    this.pagingDirection$ = this.pagingDirectionSubject.asObservable();
    this.pageSplitOptionsTranslated = pageSplitOptions.map(this.translatePrefOptions);
    this.layoutModesTranslated = layoutModes.map(this.translatePrefOptions);
    this.isLoading = true;
    this.hasBookmarkRights = false;
    this.canvasImage = new Image();
    this.cachedImages = [];
    this.continuousChaptersStack = new Stack();
    this.continuousChapterInfos = [void 0, void 0, void 0];
    this.showBookmarkEffectEvent = new ReplaySubject();
    this.showBookmarkEffect$ = this.showBookmarkEffectEvent.asObservable();
    this.fullscreenEvent = new ReplaySubject();
    this.menuOpen = false;
    this.prevPageDisabled = false;
    this.nextPageDisabled = false;
    this.pageOptions = {
      floor: 0,
      ceil: 0,
      step: 1,
      boundPointerLabels: true,
      showSelectionBar: true,
      translate: (_, label) => {
        if (label == LabelType.Floor) {
          return "1";
        } else if (label === LabelType.Ceil) {
          return this.maxPages + "";
        }
        return this.pageNum + 1 + "";
      },
      animate: false
    };
    this.refreshSlider = new EventEmitter();
    this.title = "";
    this.subtitle = "";
    this.showClickOverlay = false;
    this.showClickOverlaySubject = new ReplaySubject();
    this.showClickOverlay$ = this.showClickOverlaySubject.asObservable();
    this.nextChapterId = CHAPTER_ID_NOT_FETCHED;
    this.prevChapterId = CHAPTER_ID_NOT_FETCHED;
    this.nextChapterDisabled = false;
    this.prevChapterDisabled = false;
    this.nextChapterPrefetched = false;
    this.prevChapterPrefetched = false;
    this.settingsOpen = false;
    this.bookmarks = {};
    this.libraryType = LibraryType.Manga;
    this.inSetup = true;
    this.layoutMode = LayoutMode.Single;
    this.backgroundColor = "#FFFFFF";
    this.rightPaginationOffset = 0;
    this.prevScrollLeft = 0;
    this.prevScrollTop = 0;
    this.prevIsHorizontalScrollLeft = true;
    this.prevIsVerticalScrollLeft = true;
    this.hasHitRightScroll = false;
    this.hasScrolledX = false;
    this.hasScrolledY = false;
    this.hasHitZeroScroll = false;
    this.hasHitZeroTopScroll = false;
    this.hasHitBottomTopScroll = false;
    this.debugMode = false;
    this.widthOverrideLabel$ = new Observable();
    this.currentImage = new ReplaySubject(1);
    this.currentImage$ = this.currentImage.asObservable().pipe(shareReplay({ refCount: true, bufferSize: 2 }));
    this.pageNumSubject = new ReplaySubject();
    this.pageNum$ = this.pageNumSubject.asObservable();
    this.getPageUrl = (pageNum, chapterId = this.chapterId) => {
      if (this.bookmarkMode)
        return this.readerService.getBookmarkPageUrl(this.seriesId, this.user.apiKey, pageNum);
      return this.readerService.getPageUrl(chapterId, pageNum);
    };
    this.navService.hideNavBar();
    this.navService.hideSideNav();
    this.cdRef.markForCheck();
  }
  ngOnInit() {
    const libraryId = this.route.snapshot.paramMap.get("libraryId");
    const seriesId = this.route.snapshot.paramMap.get("seriesId");
    const chapterId = this.route.snapshot.paramMap.get("chapterId");
    if (libraryId === null || seriesId === null || chapterId === null) {
      this.router.navigateByUrl("/home");
      return;
    }
    this.getPageFn = this.getPage.bind(this);
    this.libraryId = parseInt(libraryId, 10);
    this.seriesId = parseInt(seriesId, 10);
    this.chapterId = parseInt(chapterId, 10);
    this.incognitoMode = this.route.snapshot.queryParamMap.get("incognitoMode") === "true";
    this.bookmarkMode = this.route.snapshot.queryParamMap.get("bookmarkMode") === "true";
    const readingListId = this.route.snapshot.queryParamMap.get("readingListId");
    if (readingListId != null) {
      this.readingListMode = true;
      this.readingListId = parseInt(readingListId, 10);
    }
    this.continuousChaptersStack.push(this.chapterId);
    this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      if (!user) {
        this.router.navigateByUrl("/login");
        return;
      }
      this.user = user;
      this.hasBookmarkRights = this.accountService.hasBookmarkRole(user) || this.accountService.hasAdminRole(user);
      this.readingDirection = this.user.preferences.readingDirection;
      this.scalingOption = this.user.preferences.scalingOption;
      this.pageSplitOption = this.user.preferences.pageSplitOption;
      this.autoCloseMenu = this.user.preferences.autoCloseMenu;
      this.readerMode = this.user.preferences.readerMode;
      this.layoutMode = this.user.preferences.layoutMode || LayoutMode.Single;
      this.backgroundColor = this.user.preferences.backgroundColor || "#000000";
      this.readerService.setOverrideStyles(this.backgroundColor);
      this.generalSettingsForm = this.formBuilder.nonNullable.group({
        autoCloseMenu: new FormControl(this.autoCloseMenu),
        pageSplitOption: new FormControl(this.pageSplitOption),
        fittingOption: new FormControl(this.mangaReaderService.translateScalingOption(this.scalingOption)),
        widthSlider: new FormControl("none"),
        layoutMode: new FormControl(this.layoutMode),
        darkness: new FormControl(100),
        emulateBook: new FormControl(this.user.preferences.emulateBook),
        swipeToPaginate: new FormControl(this.user.preferences.swipeToPaginate)
      });
      this.readerModeSubject.next(this.readerMode);
      this.pagingDirectionSubject.next(this.pagingDirection);
      this.readerSettings$ = merge(this.generalSettingsForm.valueChanges, this.pagingDirection$, this.readerMode$).pipe(map((_) => this.createReaderSettingsUpdate()), takeUntilDestroyed(this.destroyRef));
      this.updateForm();
      this.pagingDirection$.pipe(distinctUntilChanged(), tap((dir) => {
        this.pagingDirection = dir;
        this.cdRef.markForCheck();
      }), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      });
      this.readerMode$.pipe(distinctUntilChanged(), tap((mode) => {
        this.readerMode = mode;
        this.disableDoubleRendererIfScreenTooSmall();
        this.cdRef.markForCheck();
      }), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      });
      this.setupWidthOverrideTriggers();
      this.generalSettingsForm.get("layoutMode")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
        const changeOccurred = parseInt(val, 10) !== this.layoutMode;
        this.layoutMode = parseInt(val, 10);
        if (this.layoutMode === LayoutMode.Single) {
          this.generalSettingsForm.get("pageSplitOption")?.setValue(this.user.preferences.pageSplitOption);
          this.generalSettingsForm.get("pageSplitOption")?.enable();
          this.generalSettingsForm.get("widthSlider")?.enable();
          this.generalSettingsForm.get("fittingOption")?.enable();
          this.generalSettingsForm.get("emulateBook")?.enable();
        } else {
          this.generalSettingsForm.get("pageSplitOption")?.setValue(PageSplitOption.NoSplit);
          this.generalSettingsForm.get("pageSplitOption")?.disable();
          this.generalSettingsForm.get("widthSlider")?.disable();
          this.generalSettingsForm.get("fittingOption")?.setValue(this.mangaReaderService.translateScalingOption(ScalingOption.FitToHeight));
          this.generalSettingsForm.get("fittingOption")?.disable();
          this.generalSettingsForm.get("emulateBook")?.enable();
        }
        this.cdRef.markForCheck();
        if (changeOccurred) {
          this.setPageNum(this.adjustPagesForDoubleRenderer(this.pageNum));
          this.loadPage();
        }
      });
      this.generalSettingsForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.autoCloseMenu = this.generalSettingsForm.get("autoCloseMenu")?.value;
        this.pageSplitOption = parseInt(this.generalSettingsForm.get("pageSplitOption")?.value, 10);
        const needsSplitting = this.mangaReaderService.isWidePage(this.readerService.imageUrlToPageNum(this.canvasImage.src));
        if (needsSplitting) {
          this.pagingDirectionSubject.next(PAGING_DIRECTION.FORWARD);
          this.canvasRenderer.reset();
          this.loadPage();
        }
      });
      this.memberService.hasReadingProgress(this.libraryId).pipe(take(1)).subscribe((progress) => {
        if (!progress) {
          this.toggleMenu();
          this.toastr.info(translate("manga-reader.first-time-reading-manga"));
        }
      });
    });
    this.init();
  }
  ngAfterViewInit() {
    fromEvent(this.readingArea.nativeElement, "scroll").pipe(debounceTime(20), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.readerMode === ReaderMode.Webtoon)
        return;
      if (this.readerMode === ReaderMode.LeftRight && this.FittingOption === FITTING_OPTION.HEIGHT) {
        this.rightPaginationOffset = this.readingArea.nativeElement.scrollLeft * -1;
        this.cdRef.markForCheck();
        return;
      }
      this.rightPaginationOffset = 0;
      this.cdRef.markForCheck();
    });
    fromEvent(this.readingArea.nativeElement, "scroll").pipe(debounceTime(200), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.prevScrollLeft = this.readingArea?.nativeElement?.scrollLeft || 0;
      this.prevScrollTop = this.readingArea?.nativeElement?.scrollTop || 0;
      this.hasScrolledX = true;
      this.hasScrolledY = true;
    });
  }
  ngOnDestroy() {
    this.readerService.resetOverrideStyles();
    this.navService.showNavBar();
    this.navService.showSideNav();
    this.showBookmarkEffectEvent.complete();
    if (this.goToPageEvent !== void 0)
      this.goToPageEvent.complete();
    this.readerService.disableWakeLock();
  }
  onResize() {
    this.disableDoubleRendererIfScreenTooSmall();
  }
  handleKeyPress(event) {
    switch (this.readerMode) {
      case ReaderMode.LeftRight:
        if (event.key === KEY_CODES.RIGHT_ARROW) {
          if (!this.checkIfPaginationAllowed(KeyDirection.Right))
            return;
          this.readingDirection === ReadingDirection.LeftToRight ? this.nextPage() : this.prevPage();
        } else if (event.key === KEY_CODES.LEFT_ARROW) {
          if (!this.checkIfPaginationAllowed(KeyDirection.Left))
            return;
          this.readingDirection === ReadingDirection.LeftToRight ? this.prevPage() : this.nextPage();
        }
        break;
      case ReaderMode.UpDown:
        if (event.key === KEY_CODES.UP_ARROW) {
          if (!this.checkIfPaginationAllowed(KeyDirection.Up))
            return;
          this.prevPage();
        } else if (event.key === KEY_CODES.DOWN_ARROW) {
          if (!this.checkIfPaginationAllowed(KeyDirection.Down))
            return;
          this.nextPage();
        }
        break;
      case ReaderMode.Webtoon:
        break;
    }
    if (event.key === KEY_CODES.ESC_KEY) {
      if (this.menuOpen) {
        this.toggleMenu();
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      this.closeReader();
    } else if (event.key === KEY_CODES.SPACE) {
      this.toggleMenu();
    } else if (event.key === KEY_CODES.G) {
      const goToPageNum = this.promptForPage();
      if (goToPageNum === null) {
        return;
      }
      this.goToPage(parseInt(goToPageNum.trim(), 10));
    } else if (event.key === KEY_CODES.B) {
      this.bookmarkPage();
    } else if (event.key === KEY_CODES.F) {
      this.toggleFullscreen();
    } else if (event.key === KEY_CODES.H) {
      this.openShortcutModal();
    }
  }
  setupWidthOverrideTriggers() {
    const widthOverrideControl = this.generalSettingsForm.get("widthSlider");
    const enableWidthOverride = () => {
      widthOverrideControl.enable();
    };
    const disableWidthOverride = () => {
      widthOverrideControl.setValue(0);
      widthOverrideControl.disable();
    };
    const handleControlChanges = () => {
      const fitting = this.generalSettingsForm.get("fittingOption")?.value;
      const splitting = this.generalSettingsForm.get("pageSplitOption")?.value;
      if (PageSplitOption.FitSplit == splitting && FITTING_OPTION.WIDTH == fitting || this.readerMode === ReaderMode.Webtoon) {
        enableWidthOverride();
      } else {
        disableWidthOverride();
      }
    };
    this.readerModeSubject.asObservable().pipe(filter((v) => v === ReaderMode.Webtoon), tap(enableWidthOverride), takeUntilDestroyed(this.destroyRef)).subscribe();
    this.generalSettingsForm.get("pageSplitOption")?.valueChanges.pipe(distinctUntilChanged(), tap(handleControlChanges), takeUntilDestroyed(this.destroyRef)).subscribe();
    this.generalSettingsForm.get("fittingOption")?.valueChanges.pipe(tap(handleControlChanges), takeUntilDestroyed(this.destroyRef)).subscribe();
    widthOverrideControl.setValue(0);
    this.widthOverrideLabel$ = this.readerSettings$?.pipe(map((values) => parseInt(values.widthSlider) <= 0 ? "" : values.widthSlider + "%"), takeUntilDestroyed(this.destroyRef));
  }
  createReaderSettingsUpdate() {
    return {
      pageSplit: parseInt(this.generalSettingsForm.get("pageSplitOption")?.value, 10),
      fitting: this.generalSettingsForm.get("fittingOption")?.value,
      widthSlider: this.generalSettingsForm.get("widthSlider")?.value,
      layoutMode: this.layoutMode,
      darkness: parseInt(this.generalSettingsForm.get("darkness")?.value + "", 10) || 100,
      pagingDirection: this.pagingDirection,
      readerMode: this.readerMode,
      emulateBook: this.generalSettingsForm.get("emulateBook")?.value
    };
  }
  adjustPagesForDoubleRenderer(pageNum) {
    if (pageNum === this.maxPages - 1)
      return pageNum;
    if (this.readerMode !== ReaderMode.Webtoon && this.layoutMode !== LayoutMode.Single) {
      return this.mangaReaderService.adjustForDoubleReader(pageNum);
    }
    return pageNum;
  }
  switchToWebtoonReaderIfPagesLikelyWebtoon() {
    if (this.readerMode === ReaderMode.Webtoon)
      return;
    if (this.mangaReaderService.shouldBeWebtoonMode()) {
      this.readerMode = ReaderMode.Webtoon;
      this.toastr.info(translate("toasts.webtoon-override"));
      this.readerModeSubject.next(this.readerMode);
      this.cdRef.markForCheck();
    }
  }
  disableDoubleRendererIfScreenTooSmall() {
    if (window.innerWidth > window.innerHeight) {
      this.generalSettingsForm.get("layoutMode")?.enable();
      this.cdRef.markForCheck();
      return;
    }
    if (this.layoutMode === LayoutMode.Single || this.readerMode === ReaderMode.Webtoon)
      return;
    this.generalSettingsForm.get("layoutMode")?.setValue(LayoutMode.Single);
    this.generalSettingsForm.get("layoutMode")?.disable();
    this.toastr.info(translate("manga-reader.layout-mode-switched"));
    this.cdRef.markForCheck();
  }
  getPage(pageNum, chapterId = this.chapterId, forceNew = false) {
    let img;
    if (this.bookmarkMode)
      img = this.cachedImages.find((img2) => this.readerService.imageUrlToPageNum(img2.src) === pageNum);
    else
      img = this.cachedImages.find((img2) => this.readerService.imageUrlToPageNum(img2.src) === pageNum && (this.readerService.imageUrlToChapterId(img2.src) == chapterId || this.readerService.imageUrlToChapterId(img2.src) === -1));
    if (!img || forceNew) {
      img = new Image();
      img.src = this.getPageUrl(pageNum, chapterId);
      img.onload = (evt) => {
        this.currentImage.next(img);
        this.cdRef.markForCheck();
      };
    }
    return img;
  }
  isHorizontalScrollLeft() {
    const scrollLeft = this.readingArea?.nativeElement?.scrollLeft || 0;
    if (scrollLeft === 0 && this.ReadingAreaWidth === 0)
      return false;
    if (scrollLeft === this.ReadingAreaWidth)
      return false;
    return scrollLeft < this.ReadingAreaWidth;
  }
  isVerticalScrollLeft() {
    const scrollTop = this.readingArea?.nativeElement?.scrollTop || 0;
    return scrollTop < this.ReadingAreaHeight;
  }
  checkIfPaginationAllowed(direction) {
    if (this.readingArea === void 0 || this.readingArea.nativeElement === void 0)
      return true;
    const scrollLeft = this.readingArea?.nativeElement?.scrollLeft || 0;
    const scrollTop = this.readingArea?.nativeElement?.scrollTop || 0;
    switch (direction) {
      case KeyDirection.Right:
        if (this.prevIsHorizontalScrollLeft && !this.isHorizontalScrollLeft()) {
          return true;
        }
        this.prevIsHorizontalScrollLeft = this.isHorizontalScrollLeft();
        if (this.isHorizontalScrollLeft()) {
          return false;
        }
        break;
      case KeyDirection.Left:
        this.prevIsHorizontalScrollLeft = this.isHorizontalScrollLeft();
        if (scrollLeft > 0 || this.prevScrollLeft > 0) {
          return false;
        }
        break;
      case KeyDirection.Up:
        this.prevIsVerticalScrollLeft = this.isVerticalScrollLeft();
        if (scrollTop > 0 || this.prevScrollTop > 0) {
          return false;
        }
        break;
      case KeyDirection.Down:
        if (this.prevIsVerticalScrollLeft && !this.isVerticalScrollLeft()) {
          return true;
        }
        this.prevIsVerticalScrollLeft = this.isVerticalScrollLeft();
        if (this.isVerticalScrollLeft()) {
          return false;
        }
        break;
    }
    return true;
  }
  init() {
    this.nextChapterId = CHAPTER_ID_NOT_FETCHED;
    this.prevChapterId = CHAPTER_ID_NOT_FETCHED;
    this.nextChapterDisabled = false;
    this.prevChapterDisabled = false;
    this.nextChapterPrefetched = false;
    this.pageNum = 0;
    this.pagingDirectionSubject.next(PAGING_DIRECTION.FORWARD);
    this.inSetup = true;
    this.canvasImage.src = "";
    this.cdRef.markForCheck();
    this.cachedImages = [];
    for (let i = 0; i < PREFETCH_PAGES; i++) {
      this.cachedImages.push(new Image());
    }
    if (this.goToPageEvent) {
      this.goToPageEvent.complete();
    }
    if (this.bookmarkMode) {
      this.readerService.getBookmarkInfo(this.seriesId).subscribe((bookmarkInfo) => {
        this.setPageNum(0);
        this.title = bookmarkInfo.seriesName;
        this.subtitle = translate("manga-reader.bookmarks-title");
        this.libraryType = bookmarkInfo.libraryType;
        this.maxPages = bookmarkInfo.pages;
        this.mangaReaderService.load(bookmarkInfo);
        const newOptions = Object.assign({}, this.pageOptions);
        newOptions.ceil = this.maxPages - 1;
        this.pageOptions = newOptions;
        this.inSetup = false;
        this.cdRef.markForCheck();
        this.goToPageEvent = new BehaviorSubject(this.pageNum);
        this.render();
      });
      setTimeout(() => {
        this.readerService.enableWakeLock(this.reader.nativeElement);
      }, 1e3);
      return;
    }
    forkJoin({
      progress: this.readerService.getProgress(this.chapterId),
      chapterInfo: this.readerService.getChapterInfo(this.chapterId, true),
      bookmarks: this.readerService.getBookmarks(this.chapterId)
    }).pipe(take(1)).subscribe((results) => {
      if (this.readingListMode && (results.chapterInfo.seriesFormat === MangaFormat.EPUB || results.chapterInfo.seriesFormat === MangaFormat.PDF)) {
        const params = this.readerService.getQueryParamsObject(this.incognitoMode, this.readingListMode, this.readingListId);
        this.router.navigate(this.readerService.getNavigationArray(results.chapterInfo.libraryId, results.chapterInfo.seriesId, this.chapterId, results.chapterInfo.seriesFormat), { queryParams: params });
        return;
      }
      this.mangaReaderService.load(results.chapterInfo);
      this.continuousChapterInfos[ChapterInfoPosition.Current] = results.chapterInfo;
      this.volumeId = results.chapterInfo.volumeId;
      this.maxPages = results.chapterInfo.pages;
      let page = results.progress.pageNum;
      if (page > this.maxPages) {
        page = this.maxPages - 1;
      }
      page = this.adjustPagesForDoubleRenderer(page);
      this.totalSeriesPages = results.chapterInfo.seriesTotalPages;
      this.totalSeriesPagesRead = results.chapterInfo.seriesTotalPagesRead - page;
      this.setPageNum(page);
      this.goToPageEvent = new BehaviorSubject(this.pageNum);
      const newOptions = Object.assign({}, this.pageOptions);
      newOptions.ceil = this.maxPages - 1;
      this.pageOptions = newOptions;
      this.libraryType = results.chapterInfo.libraryType;
      this.title = results.chapterInfo.title;
      this.subtitle = results.chapterInfo.subtitle;
      this.inSetup = false;
      this.disableDoubleRendererIfScreenTooSmall();
      this.switchToWebtoonReaderIfPagesLikelyWebtoon();
      this.bookmarks = {};
      results.bookmarks.forEach((bookmark) => {
        this.bookmarks[bookmark.page] = 1;
      });
      this.cdRef.markForCheck();
      this.readerService.getNextChapter(this.seriesId, this.volumeId, this.chapterId, this.readingListId).pipe(take(1)).subscribe((chapterId) => {
        this.nextChapterId = chapterId;
        if (chapterId === CHAPTER_ID_DOESNT_EXIST || chapterId === this.chapterId) {
          this.nextChapterDisabled = true;
          this.cdRef.markForCheck();
        } else {
          this.getPage(0, this.nextChapterId);
        }
      });
      this.readerService.getPrevChapter(this.seriesId, this.volumeId, this.chapterId, this.readingListId).pipe(take(1)).subscribe((chapterId) => {
        this.prevChapterId = chapterId;
        if (chapterId === CHAPTER_ID_DOESNT_EXIST || chapterId === this.chapterId) {
          this.prevChapterDisabled = true;
          this.cdRef.markForCheck();
        } else {
          this.getPage(1e6, this.prevChapterId);
        }
      });
      this.render();
    }, () => {
      setTimeout(() => {
        this.closeReader();
      }, 200);
    });
  }
  closeReader() {
    this.readerService.closeReader(this.readingListMode, this.readingListId);
  }
  render() {
    if (this.readerMode === ReaderMode.Webtoon) {
      this.isLoading = false;
      this.cdRef.markForCheck();
    } else {
      this.loadPage();
    }
  }
  cancelMenuCloseTimer() {
    if (this.menuTimeout) {
      clearTimeout(this.menuTimeout);
    }
  }
  resetMenuCloseTimer() {
    if (this.menuTimeout) {
      clearTimeout(this.menuTimeout);
      if (!this.settingsOpen && this.autoCloseMenu) {
        this.startMenuCloseTimer();
      }
    }
  }
  startMenuCloseTimer() {
    if (!this.autoCloseMenu) {
      return;
    }
    this.menuTimeout = setTimeout(() => {
      this.toggleMenu();
    }, OVERLAY_AUTO_CLOSE_TIME);
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.cdRef.markForCheck();
    if (this.menuTimeout) {
      clearTimeout(this.menuTimeout);
    }
    if (this.menuOpen && !this.settingsOpen) {
      this.startMenuCloseTimer();
    } else {
      this.showClickOverlay = false;
      this.settingsOpen = false;
      this.cdRef.markForCheck();
    }
  }
  resetSwipeModifiers() {
    this.prevScrollLeft = 0;
    this.prevScrollTop = 0;
    this.hasScrolledX = false;
    this.hasScrolledY = false;
    this.hasHitRightScroll = false;
    this.hasHitZeroScroll = false;
    this.hasHitBottomTopScroll = false;
    this.hasHitZeroTopScroll = false;
  }
  onSwipeMove(_) {
    this.prevScrollLeft = this.readingArea?.nativeElement?.scrollLeft || 0;
    this.prevScrollTop = this.readingArea?.nativeElement?.scrollTop || 0;
  }
  triggerSwipePagination(direction) {
    if (!this.generalSettingsForm.get("swipeToPaginate")?.value)
      return;
    switch (direction) {
      case KeyDirection.Down:
        this.nextPage();
        break;
      case KeyDirection.Right:
        this.readingDirection === ReadingDirection.LeftToRight ? this.nextPage() : this.prevPage();
        break;
      case KeyDirection.Up:
        this.prevPage();
        break;
      case KeyDirection.Left:
        this.readingDirection === ReadingDirection.LeftToRight ? this.prevPage() : this.nextPage();
        break;
    }
  }
  onSwipeEnd(event) {
    switch (this.readerMode) {
      case ReaderMode.Webtoon:
        break;
      case ReaderMode.LeftRight: {
        if (event.direction !== "x")
          return;
        const scrollLeft = this.readingArea?.nativeElement?.scrollLeft || 0;
        const direction = event.distance < 0 ? KeyDirection.Right : KeyDirection.Left;
        if (!this.checkIfPaginationAllowed(direction)) {
          return;
        }
        if (direction === KeyDirection.Right) {
          this.hasHitZeroScroll = false;
          if (scrollLeft === 0 && this.ReadingAreaWidth === 0) {
            this.triggerSwipePagination(direction);
            return;
          }
          if (!this.hasHitRightScroll && this.checkIfPaginationAllowed(direction)) {
            this.hasHitRightScroll = true;
            return;
          }
        } else if (direction === KeyDirection.Left) {
          this.hasHitRightScroll = false;
          if (scrollLeft === 0 && this.prevScrollLeft === 0) {
            if (!this.hasScrolledX || this.hasHitZeroScroll) {
              this.triggerSwipePagination(direction);
              return;
            }
            this.hasHitZeroScroll = true;
            return;
          }
        }
        if (!this.hasHitRightScroll) {
          return;
        }
        this.triggerSwipePagination(direction);
        break;
      }
      case ReaderMode.UpDown: {
        if (event.direction !== "y")
          return;
        const direction = event.distance < 0 ? KeyDirection.Down : KeyDirection.Up;
        const scrollTop = this.readingArea?.nativeElement?.scrollTop || 0;
        if (!this.checkIfPaginationAllowed(direction))
          return;
        if (direction === KeyDirection.Down) {
          this.hasHitZeroTopScroll = false;
          if (!this.hasHitBottomTopScroll && this.checkIfPaginationAllowed(direction)) {
            this.hasHitBottomTopScroll = true;
            return;
          }
        } else if (direction === KeyDirection.Up) {
          this.hasHitBottomTopScroll = false;
          if (scrollTop === 0 && this.prevScrollTop === 0) {
            if (!this.hasScrolledY || this.hasHitZeroTopScroll) {
              this.triggerSwipePagination(direction);
              return;
            }
            this.hasHitZeroTopScroll = true;
            return;
          }
        }
        if (!this.hasHitBottomTopScroll) {
          return;
        }
        this.triggerSwipePagination(direction);
        break;
      }
    }
  }
  handlePageChange(event, direction) {
    if (this.readerMode === ReaderMode.Webtoon) {
      if (direction === KeyDirection.Right) {
        this.nextPage(event);
      } else {
        this.prevPage(event);
      }
      return;
    }
    if (direction === KeyDirection.Right) {
      this.readingDirection === ReadingDirection.LeftToRight ? this.nextPage(event) : this.prevPage(event);
    } else if (direction === KeyDirection.Left) {
      this.readingDirection === ReadingDirection.LeftToRight ? this.prevPage(event) : this.nextPage(event);
    }
  }
  nextPage(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.resetSwipeModifiers();
    this.isLoading = true;
    this.cdRef.markForCheck();
    this.pagingDirectionSubject.next(PAGING_DIRECTION.FORWARD);
    const pageAmount = Math.max(this.canvasRenderer.getPageAmount(PAGING_DIRECTION.FORWARD), this.singleRenderer.getPageAmount(PAGING_DIRECTION.FORWARD), this.doubleRenderer.getPageAmount(PAGING_DIRECTION.FORWARD), this.doubleReverseRenderer.getPageAmount(PAGING_DIRECTION.FORWARD), this.doubleNoCoverRenderer.getPageAmount(PAGING_DIRECTION.FORWARD));
    const isSplitRendering = [PageSplitOption.SplitRightToLeft, PageSplitOption.SplitRightToLeft].includes(parseInt(this.generalSettingsForm.get("pageSplitOption")?.value, 10));
    const notInSplit = this.canvasRenderer.getPageAmount(PAGING_DIRECTION.BACKWARDS) === 0;
    const isASpread = this.mangaReaderService.isWidePage(this.pageNum);
    if (this.pageNum + pageAmount >= this.maxPages && (!isASpread || !isSplitRendering || notInSplit)) {
      this.loadNextChapter();
      return;
    }
    this.setPageNum(this.pageNum + pageAmount);
    this.loadPage();
  }
  prevPage(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.resetSwipeModifiers();
    this.isLoading = true;
    this.cdRef.markForCheck();
    this.pagingDirectionSubject.next(PAGING_DIRECTION.BACKWARDS);
    const pageAmount = this.readerMode === ReaderMode.Webtoon ? 1 : Math.max(this.canvasRenderer.getPageAmount(PAGING_DIRECTION.BACKWARDS), this.singleRenderer.getPageAmount(PAGING_DIRECTION.BACKWARDS), this.doubleRenderer.getPageAmount(PAGING_DIRECTION.BACKWARDS), this.doubleNoCoverRenderer.getPageAmount(PAGING_DIRECTION.BACKWARDS), this.doubleReverseRenderer.getPageAmount(PAGING_DIRECTION.BACKWARDS));
    const notInSplit = this.readerMode === ReaderMode.Webtoon ? true : this.canvasRenderer.shouldMovePrev();
    if (this.pageNum - 1 < 0 && notInSplit) {
      this.loadPrevChapter();
      return;
    }
    this.setPageNum(this.pageNum - pageAmount);
    this.loadPage();
  }
  setCanvasImage() {
    if (this.cachedImages === void 0)
      return;
    this.canvasImage = this.getPage(this.pageNum, this.chapterId, this.layoutMode !== LayoutMode.Single);
    if (!this.canvasImage.complete) {
      this.canvasImage.addEventListener("load", () => {
        this.currentImage.next(this.canvasImage);
      }, false);
    } else {
      this.currentImage.next(this.canvasImage);
    }
    this.cdRef.markForCheck();
  }
  loadNextChapter() {
    if (this.nextPageDisabled || this.nextChapterDisabled || this.bookmarkMode) {
      this.toastr.info(translate("manga-reader.no-next-chapter"));
      this.isLoading = false;
      this.cdRef.markForCheck();
      return;
    }
    if (this.nextChapterId === CHAPTER_ID_NOT_FETCHED || this.nextChapterId === this.chapterId) {
      this.readerService.getNextChapter(this.seriesId, this.volumeId, this.chapterId, this.readingListId).pipe(take(1)).subscribe((chapterId) => {
        this.nextChapterId = chapterId;
        this.loadChapter(chapterId, "Next");
      });
    } else {
      this.loadChapter(this.nextChapterId, "Next");
    }
  }
  loadPrevChapter() {
    if (this.prevPageDisabled || this.prevChapterDisabled || this.bookmarkMode) {
      this.toastr.info(translate("manga-reader.no-prev-chapter"));
      this.isLoading = false;
      this.cdRef.markForCheck();
      return;
    }
    this.continuousChaptersStack.pop();
    const prevChapter = this.continuousChaptersStack.peek();
    if (prevChapter != this.chapterId) {
      if (prevChapter !== void 0) {
        this.chapterId = prevChapter;
        this.init();
        return;
      }
    }
    if (this.prevChapterId === CHAPTER_ID_NOT_FETCHED || this.prevChapterId === this.chapterId) {
      this.readerService.getPrevChapter(this.seriesId, this.volumeId, this.chapterId, this.readingListId).pipe(take(1)).subscribe((chapterId) => {
        this.prevChapterId = chapterId;
        this.loadChapter(chapterId, "Prev");
      });
    } else {
      this.loadChapter(this.prevChapterId, "Prev");
    }
  }
  loadChapter(chapterId, direction) {
    if (chapterId > 0) {
      this.isLoading = true;
      this.cdRef.markForCheck();
      this.chapterId = chapterId;
      this.continuousChaptersStack.push(chapterId);
      const newRoute = this.readerService.getNextChapterUrl(this.router.url, this.chapterId, this.incognitoMode, this.readingListMode, this.readingListId);
      window.history.replaceState({}, "", newRoute);
      this.init();
      const msg = translate(direction === "Next" ? "toasts.load-next-chapter" : "toasts.load-prev-chapter", { entity: this.utilityService.formatChapterName(this.libraryType).toLowerCase() });
      this.toastr.info(msg, "", { timeOut: 3e3 });
    } else {
      const msg = translate(direction === "Next" ? "toasts.no-next-chapter" : "toasts.no-prev-chapter", { entity: this.utilityService.formatChapterName(this.libraryType).toLowerCase() });
      this.toastr.warning(msg);
      this.isLoading = false;
      if (direction === "Prev") {
        this.prevPageDisabled = true;
      } else {
        this.nextPageDisabled = true;
      }
      this.cdRef.markForCheck();
    }
  }
  renderPage() {
    const page = [this.canvasImage];
    this.canvasRenderer?.renderPage(page);
    this.singleRenderer?.renderPage(page);
    this.doubleRenderer?.renderPage(page);
    this.doubleNoCoverRenderer?.renderPage(page);
    this.doubleReverseRenderer?.renderPage(page);
    this.readingArea.nativeElement.scroll(0, 0);
    this.isLoading = false;
    this.cdRef.markForCheck();
  }
  prefetch() {
    for (let i = 0; i <= PREFETCH_PAGES - 3; i++) {
      let numOffset = this.pageNum + i;
      if (numOffset > this.maxPages - 1) {
        break;
      }
      const index = (numOffset % this.cachedImages.length + this.cachedImages.length) % this.cachedImages.length;
      const cachedImagePageNum = this.readerService.imageUrlToPageNum(this.cachedImages[index].src);
      if (cachedImagePageNum !== numOffset) {
        this.cachedImages[index] = this.getPage(numOffset, this.chapterId);
      }
    }
  }
  loadPage() {
    if (this.readerMode === ReaderMode.Webtoon)
      return;
    this.isLoading = true;
    this.setCanvasImage();
    this.cdRef.markForCheck();
    this.renderPage();
    this.isLoading = false;
    this.cdRef.markForCheck();
    this.prefetch();
  }
  setReadingDirection() {
    if (this.readingDirection === ReadingDirection.LeftToRight) {
      this.readingDirection = ReadingDirection.RightToLeft;
    } else {
      this.readingDirection = ReadingDirection.LeftToRight;
    }
    if (this.menuOpen && this.user.preferences.showScreenHints) {
      this.showClickOverlay = true;
      this.showClickOverlaySubject.next(true);
      setTimeout(() => {
        this.showClickOverlay = false;
        this.showClickOverlaySubject.next(false);
      }, CLICK_OVERLAY_TIMEOUT);
    }
  }
  sliderDragUpdate(context) {
    if (this.readerMode !== ReaderMode.Webtoon) {
      this.setPageNum(context.value);
    }
  }
  sliderPageUpdate(context) {
    const page = context.value;
    if (page > this.pageNum) {
      this.pagingDirectionSubject.next(PAGING_DIRECTION.FORWARD);
    } else {
      this.pagingDirectionSubject.next(PAGING_DIRECTION.BACKWARDS);
    }
    this.setPageNum(this.adjustPagesForDoubleRenderer(page));
    this.refreshSlider.emit();
    this.goToPageEvent.next(this.pageNum);
    this.render();
  }
  setPageNum(pageNum) {
    this.pageNum = Math.max(Math.min(pageNum, this.maxPages - 1), 0);
    this.pageNumSubject.next({ pageNum: this.pageNum, maxPages: this.maxPages });
    this.cdRef.markForCheck();
    if (this.pageNum >= this.maxPages - 10) {
      if (this.nextChapterId > 0 && !this.nextChapterPrefetched) {
        this.readerService.getChapterInfo(this.nextChapterId).pipe(take(1)).subscribe((res) => {
          this.continuousChapterInfos[ChapterInfoPosition.Next] = res;
          this.nextChapterPrefetched = true;
          this.prefetchStartOfChapter(this.nextChapterId, PAGING_DIRECTION.FORWARD);
        });
      }
    } else if (this.pageNum <= 10) {
      if (this.prevChapterId > 0 && !this.prevChapterPrefetched) {
        this.readerService.getChapterInfo(this.prevChapterId).pipe(take(1)).subscribe((res) => {
          this.continuousChapterInfos[ChapterInfoPosition.Previous] = res;
          this.prevChapterPrefetched = true;
          this.prefetchStartOfChapter(this.nextChapterId, PAGING_DIRECTION.BACKWARDS);
        });
      }
    }
    let tempPageNum = this.pageNum;
    if (this.pageNum == this.maxPages - 1 && this.pagingDirection === PAGING_DIRECTION.FORWARD) {
      tempPageNum = this.pageNum + 1;
    }
    if (!this.incognitoMode && !this.bookmarkMode) {
      this.readerService.saveProgress(this.libraryId, this.seriesId, this.volumeId, this.chapterId, tempPageNum).pipe(take(1)).subscribe(() => {
      });
    }
  }
  prefetchStartOfChapter(chapterId, direction) {
    let pages = [];
    if (direction === PAGING_DIRECTION.BACKWARDS) {
      if (this.continuousChapterInfos[ChapterInfoPosition.Previous] === void 0)
        return;
      const n = this.continuousChapterInfos[ChapterInfoPosition.Previous].pages;
      pages = Array.from({ length: Math.min(n + 1, 5) }, (v, k) => n - k);
    } else {
      pages = [0, 1, 2, 3, 4];
    }
    const images = [];
    pages.forEach((_, i) => {
      const img = new Image();
      img.src = this.getPageUrl(i, chapterId);
      images.push(img);
    });
  }
  goToPage(pageNum) {
    let page = pageNum;
    if (page === void 0 || this.pageNum === page) {
      return;
    }
    if (page > this.maxPages) {
      page = this.maxPages;
    } else if (page < 0) {
      page = 0;
    }
    if (!(page === 0 || page === this.maxPages - 1)) {
      page -= 1;
    }
    if (page > this.pageNum) {
      this.pagingDirectionSubject.next(PAGING_DIRECTION.FORWARD);
    } else {
      this.pagingDirectionSubject.next(PAGING_DIRECTION.BACKWARDS);
    }
    this.setPageNum(this.adjustPagesForDoubleRenderer(page));
    this.goToPageEvent.next(page);
    this.render();
  }
  clickOverlayClass(side) {
    if (!this.showClickOverlay) {
      return "";
    }
    if (this.readingDirection === ReadingDirection.LeftToRight) {
      return side === "right" ? "highlight" : "highlight-2";
    }
    return side === "right" ? "highlight-2" : "highlight";
  }
  promptForPage() {
    const question = translate("book-reader.go-to-page-prompt", { totalPages: this.maxPages });
    const goToPageNum = window.prompt(question, "");
    if (goToPageNum === null || goToPageNum.trim().length === 0) {
      return null;
    }
    return goToPageNum;
  }
  toggleFullscreen() {
    this.readerService.toggleFullscreen(this.reader.nativeElement, () => {
      this.isFullscreen = true;
      this.fullscreenEvent.next(true);
      this.render();
    });
  }
  toggleReaderMode() {
    switch (this.readerMode) {
      case ReaderMode.LeftRight:
        this.pagingDirectionSubject.next(PAGING_DIRECTION.FORWARD);
        this.readerModeSubject.next(ReaderMode.UpDown);
        break;
      case ReaderMode.UpDown:
        this.readerModeSubject.next(ReaderMode.Webtoon);
        break;
      case ReaderMode.Webtoon:
        this.readerModeSubject.next(ReaderMode.LeftRight);
        break;
    }
    if (this.readerMode !== ReaderMode.Webtoon) {
      this.canvasImage = this.getPage(this.pageNum);
      this.currentImage.next(this.canvasImage);
      this.pageNumSubject.next({ pageNum: this.pageNum, maxPages: this.maxPages });
      this.cdRef.detectChanges();
    }
    this.updateForm();
    this.render();
  }
  updateForm() {
    if (this.readerMode === ReaderMode.Webtoon) {
      this.generalSettingsForm.get("pageSplitOption")?.disable();
      this.generalSettingsForm.get("fittingOption")?.disable();
      this.generalSettingsForm.get("layoutMode")?.disable();
    } else {
      this.generalSettingsForm.get("fittingOption")?.enable();
      this.generalSettingsForm.get("pageSplitOption")?.enable();
      this.generalSettingsForm.get("layoutMode")?.enable();
      if (this.layoutMode !== LayoutMode.Single) {
        this.generalSettingsForm.get("pageSplitOption")?.disable();
        this.generalSettingsForm.get("fittingOption")?.disable();
      }
    }
    this.cdRef.markForCheck();
  }
  handleWebtoonPageChange(updatedPageNum) {
    this.setPageNum(updatedPageNum);
  }
  bookmarkPage(event = void 0) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (this.bookmarkMode)
      return;
    if (!(this.accountService.hasBookmarkRole(this.user) || this.accountService.hasAdminRole(this.user)))
      return;
    const pageNum = this.pageNum;
    const isDouble = this.canvasRenderer !== void 0 && this.doubleRenderer !== void 0 && Math.max(this.canvasRenderer.getBookmarkPageCount(), this.singleRenderer.getBookmarkPageCount(), this.doubleRenderer.getBookmarkPageCount(), this.doubleReverseRenderer.getBookmarkPageCount(), this.doubleNoCoverRenderer.getBookmarkPageCount()) > 1;
    if (this.CurrentPageBookmarked) {
      let apis = [this.readerService.unbookmark(this.seriesId, this.volumeId, this.chapterId, pageNum)];
      if (isDouble)
        apis.push(this.readerService.unbookmark(this.seriesId, this.volumeId, this.chapterId, pageNum + 1));
      forkJoin(apis).pipe(take(1)).subscribe(() => {
        delete this.bookmarks[pageNum];
        if (isDouble)
          delete this.bookmarks[pageNum + 1];
        this.cdRef.detectChanges();
      });
    } else {
      let apis = [this.readerService.bookmark(this.seriesId, this.volumeId, this.chapterId, pageNum)];
      if (isDouble)
        apis.push(this.readerService.bookmark(this.seriesId, this.volumeId, this.chapterId, pageNum + 1));
      forkJoin(apis).pipe(take(1)).subscribe(() => {
        this.bookmarks[pageNum] = 1;
        if (isDouble)
          this.bookmarks[pageNum + 1] = 1;
        this.cdRef.detectChanges();
      });
    }
    this.showBookmarkEffectEvent.next(pageNum);
  }
  turnOffIncognito() {
    this.incognitoMode = false;
    const newRoute = this.readerService.getNextChapterUrl(this.router.url, this.chapterId, this.incognitoMode, this.readingListMode, this.readingListId);
    window.history.replaceState({}, "", newRoute);
    this.toastr.info(translate("toasts.incognito-off"));
    if (!this.bookmarkMode) {
      this.readerService.saveProgress(this.libraryId, this.seriesId, this.volumeId, this.chapterId, this.pageNum).pipe(take(1)).subscribe(() => {
      });
    }
  }
  openShortcutModal() {
    const ref = this.modalService.open(ShortcutsModalComponent, { scrollable: true, size: "md" });
    ref.componentInstance.shortcuts = [
      { key: "\u21FD", description: "prev-page" },
      { key: "\u21FE", description: "next-page" },
      { key: "\u2191", description: "prev-page" },
      { key: "\u2193", description: "next-page" },
      { key: "G", description: "go-to" },
      { key: "B", description: "bookmark" },
      { key: translate("shortcuts-modal.double-click"), description: "bookmark" },
      { key: "ESC", description: "close-reader" },
      { key: "SPACE", description: "toggle-menu" }
    ];
  }
  savePref() {
    const modelSettings = this.generalSettingsForm.getRawValue();
    this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      if (!user)
        return;
      const data = __spreadValues({}, user.preferences);
      data.layoutMode = parseInt(modelSettings.layoutMode, 10);
      data.readerMode = this.readerMode;
      data.autoCloseMenu = this.autoCloseMenu;
      data.readingDirection = this.readingDirection;
      data.emulateBook = modelSettings.emulateBook;
      data.swipeToPaginate = modelSettings.swipeToPaginate;
      data.pageSplitOption = parseInt(modelSettings.pageSplitOption, 10);
      data.locale = data.locale || "en";
      this.accountService.updatePreferences(data).subscribe((updatedPrefs) => {
        this.toastr.success(translate("manga-reader.user-preferences-updated"));
        if (this.user) {
          this.user.preferences = updatedPrefs;
          this.cdRef.markForCheck();
        }
      });
    });
  }
  translatePrefOptions(o) {
    const d = __spreadValues({}, o);
    d.text = translate("preferences." + o.text);
    return d;
  }
  static {
    this.\u0275fac = function MangaReaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MangaReaderComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _MangaReaderComponent, selectors: [["app-manga-reader"]], viewQuery: function MangaReaderComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c07, 5);
        \u0275\u0275viewQuery(_c17, 5);
        \u0275\u0275viewQuery(_c22, 5);
        \u0275\u0275viewQuery(CanvasRendererComponent, 5);
        \u0275\u0275viewQuery(SingleRendererComponent, 5);
        \u0275\u0275viewQuery(DoubleRendererComponent, 5);
        \u0275\u0275viewQuery(DoubleReverseRendererComponent, 5);
        \u0275\u0275viewQuery(DoubleNoCoverRendererComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reader = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.readingArea = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvas = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRenderer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.singleRenderer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.doubleRenderer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.doubleReverseRenderer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.doubleNoCoverRenderer = _t.first);
      }
    }, hostBindings: function MangaReaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function MangaReaderComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow)("orientationchange", function MangaReaderComponent_orientationchange_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow)("keyup", function MangaReaderComponent_keyup_HostBindingHandler($event) {
          return ctx.handleKeyPress($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275ProvidersFeature([MangaReaderService]), \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["reader", ""], ["readingArea", ""], [4, "transloco", "translocoRead"], [1, "reader", 3, "ngStyle"], [1, "fixed-top", "overlay"], [3, "loading", "absolute"], ["ngSwipe", "", 1, "reading-area", 3, "swipeEnd", "swipeMove", "ngStyle"], [1, "fixed-bottom", "overlay"], [1, "me-1", 3, "ngClass"], [2, "display", "flex", "margin-top", "5px"], [1, "btn", "btn-icon", 2, "height", "100%", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "visually-hidden"], [2, "font-weight", "bold"], ["role", "button", 1, "clickable"], [1, "subtitle"], [2, "margin-left", "auto", "padding-right", "3%"], ["title", "Shortcuts", 1, "btn", "btn-icon", 3, "click"], ["aria-hidden", "true", 1, "fa-regular", "fa-rectangle-list"], ["role", "checkbox", 1, "btn", "btn-icon", 3, "title"], ["role", "button", 1, "clickable", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-glasses"], ["role", "checkbox", 1, "btn", "btn-icon", 3, "click", "title"], ["aria-hidden", "true"], ["appDblClick", "", 3, "dblclick", "singleClick"], [3, "readerSettings$", "image$", "bookmark$", "showClickOverlay$"], [1, "pagination-area"], [3, "click", "ngStyle"], ["appDblClick", "", 3, "doubleClick", "singleClick"], [3, "image$", "readerSettings$", "bookmark$", "pageNum$", "showClickOverlay$"], [3, "image$", "readerSettings$", "bookmark$", "showClickOverlay$", "pageNum$", "getPage"], ["aria-hidden", "true", 3, "title"], ["appDblClick", "", 1, "webtoon-images"], ["appDblClick", "", 1, "webtoon-images", 3, "doubleClick", "singleClick"], [3, "pageNumberChange", "loadNextChapter", "loadPrevChapter", "pageNum", "bufferPages", "goToPage", "totalPages", "urlProvider", "bookmarkPage", "fullscreenToggled", "readerSettings$"], [1, "mb-3"], [1, "row", "pt-4", "ms-2", "me-2", "mb-2"], [1, "col"], ["aria-describedby", "reading-direction", 1, "btn", "btn-icon", 3, "click", "disabled", "title"], ["id", "reading-direction", 1, "visually-hidden"], [1, "btn", "btn-icon", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-sliders-h"], [1, "bottom-menu"], ["id", "slider-info", 1, "visually-hidden"], [1, "row", "g-0"], [1, "btn", "btn-icon", "col-1", 3, "click", "disabled", "title"], ["aria-hidden", "true", 1, "fa", "fa-fast-backward"], [1, "btn", "btn-icon", "col-2", 3, "click", "disabled", "title"], ["aria-hidden", "true", 1, "fa", "fa-step-backward"], [1, "col", "custom-slider"], ["aria-hidden", "true", 1, "fa", "fa-step-forward"], ["aria-hidden", "true", 1, "fa", "fa-fast-forward"], ["aria-describedby", "slider-info", 3, "userChangeEnd", "userChange", "userChangeStart", "options", "value", "manualRefresh"], ["aria-describedby", "slider-info", 3, "userChangeEnd", "userChangeStart", "options", "value"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-md-6", "col-sm-12"], ["for", "page-splitting", 1, "form-label"], [1, "split", "fa", "fa-image"], ["id", "page-splitting", "formControlName", "pageSplitOption", 1, "form-control"], [3, "value"], ["for", "page-fitting", 1, "form-label"], ["id", "page-fitting", "formControlName", "fittingOption", 1, "form-control"], ["value", "full-height"], ["value", "full-width"], ["value", "original"], ["for", "layout-mode", 1, "form-label"], [1, "split-double"], ["id", "layout-mode", "formControlName", "layoutMode", 1, "form-control"], [1, "col-md-3", "col-sm-12"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "auto-close", "formControlName", "autoCloseMenu", 1, "form-check-input"], ["for", "auto-close", 1, "form-check-label"], ["type", "checkbox", "id", "swipe-to-paginate", "formControlName", "swipeToPaginate", 1, "form-check-input"], ["for", "swipe-to-paginate", 1, "form-check-label"], ["type", "checkbox", "id", "emulate-book", "formControlName", "emulateBook", 1, "form-check-input"], ["for", "emulate-book", 1, "form-check-label"], ["for", "darkness", 1, "form-label", "range-label"], [1, "ms-1", "range-text"], ["type", "range", "id", "darkness", "min", "10", "max", "100", "step", "1", "formControlName", "darkness", 1, "form-range"], ["for", "width-override-slider", 1, "form-label"], ["id", "width-override-slider", "type", "range", "min", "0", "max", "100", "formControlName", "widthSlider", 1, "form-range"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-stack", "fa-1x"], [1, "fa-regular", "fa-square-full", "fa-stack-2x"], [1, "fa", "fa-image", "fa-stack-1x"], [1, "fab", "fa-1", "fa-stack-1x"], [1, "fa-stack", "fa", "right"], [1, "fab", "fa-2", "fa-stack-1x"]], template: function MangaReaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MangaReaderComponent_ng_container_0_Template, 12, 15, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manga-reader");
      }
    }, dependencies: [
      NgStyle,
      LoadingComponent,
      SwipeDirective,
      CanvasRendererComponent,
      SingleRendererComponent,
      DoubleRendererComponent,
      DoubleReverseRendererComponent,
      DoubleNoCoverRendererComponent,
      InfiniteScrollerComponent,
      NgxSliderModule,
      SliderComponent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      RangeValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FittingIconPipe,
      ReaderModeIconPipe,
      FullscreenIconPipe,
      TranslocoDirective,
      PercentPipe,
      NgClass,
      AsyncPipe,
      DblClickDirective
    ], styles: ['\n\nimg[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  user-select: none;\n}\n.image-container[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n.image-container.full-width[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container.full-height[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: flex;\n  align-content: center;\n  overflow-y: hidden;\n}\n.image-container.original[_ngcontent-%COMP%] {\n  height: 100dvh;\n  display: grid;\n}\n.image-container[_ngcontent-%COMP%]   .full-height[_ngcontent-%COMP%] {\n  width: auto;\n  margin: auto;\n  max-height: 100dvh;\n  height: 100dvh;\n  vertical-align: top;\n  object-fit: cover;\n}\n.image-container[_ngcontent-%COMP%]   .full-height.wide[_ngcontent-%COMP%] {\n  height: 100dvh;\n}\n.image-container[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%] {\n  align-self: center;\n  width: auto;\n  margin: 0 auto;\n  vertical-align: top;\n}\n.image-container[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  vertical-align: top;\n  object-fit: contain;\n  width: 100%;\n}\n.image-container[_ngcontent-%COMP%]   .fit-to-screen.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100dvh;\n}\n.bookmark-effect[_ngcontent-%COMP%] {\n  animation: bookmark 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.highlight[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-next-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.highlight-2[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-prev-highlight-bg-color) !important;\n  animation: fadein 0.5s both;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n  .image-container.book-shadow[class*=double-offset]:before, \n  .image-container.book-shadow.wide:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  box-shadow:\n    0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n    0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n    0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n    0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43);\n}\n@supports (-moz-appearance: none) {\n    .image-container.book-shadow[class*=double-offset]:before, \n     .image-container.book-shadow.wide:before {\n    box-shadow:\n      0px 0px 53.38px 25px rgba(0, 0, 0, 0.43),\n      0px 0px 6.28px 2px rgba(0, 0, 0, 0.43),\n      0px 0px 15.7px 4px rgba(0, 0, 0, 0.43),\n      0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43),\n      0px 0px 1px 0.5px rgba(0, 0, 0, 0.43);\n  }\n}\n.current[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.loaded[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.reading-area[_ngcontent-%COMP%] {\n  overflow: auto;\n  text-align: center;\n}\n.reading-area[_ngcontent-%COMP%]::-webkit-scrollbar {\n  background-color: transparent;\n  width: inherit;\n}\n.reading-area[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--default-state-scrollbar);\n}\n.reading-area[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb {\n  background-color: var(--primary-color-scrollbar);\n}\n.reader[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-bg-color);\n  overflow: auto;\n}\n.reader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.title[_ngcontent-%COMP%], \n.subtitle[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bottom-menu[_ngcontent-%COMP%] {\n  padding: 20px 20px;\n}\n.overlay[_ngcontent-%COMP%] {\n  background-color: var(--manga-reader-overlay-bg-color);\n  -webkit-backdrop-filter: var(--manga-reader-overlay-filter);\n  backdrop-filter: var(--manga-reader-overlay-filter);\n  color: var(--manga-reader-overlay-text-color);\n}\n@media (min-width: 600px) {\n  .overlay[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .i[_ngcontent-%COMP%] {\n    left: 20px;\n  }\n  .overlay[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .i[_ngcontent-%COMP%] {\n    right: 20px;\n  }\n}\n.split[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 40px;\n  z-index: 1;\n  top: 0;\n  overflow: hidden;\n  border: 2px solid #ccc;\n  vertical-align: sub;\n  display: inline-block;\n}\n.split[_ngcontent-%COMP%]::before {\n  margin-left: 30%;\n}\n.split[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-top: -16px;\n}\n.split[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  height: 20px;\n  margin-left: 20px;\n  width: 20px;\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-top: -16px;\n}\n.split[_ngcontent-%COMP%]   .none[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.split-double[_ngcontent-%COMP%] {\n  height: 20px;\n  display: inline-block;\n  font-size: 0.7em;\n}\n.split-double[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  left: -7px;\n}\n  .custom-slider .ngx-slider .ngx-slider-bar {\n  background: #e9ffe2;\n  height: 2px;\n}\n  .custom-slider .ngx-slider .ngx-slider-selection {\n  background: var(--primary-color);\n}\n  .custom-slider .ngx-slider .ngx-slider-pointer {\n  width: 8px;\n  height: 16px;\n  top: auto;\n  bottom: 0;\n  background-color: var(--primary-color);\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n  .custom-slider .ngx-slider .ngx-slider-pointer:after {\n  display: none;\n}\n  .custom-slider .ngx-slider .ngx-slider-bubble {\n  bottom: 14px;\n  font-weight: bold;\n}\n  .custom-slider .ngx-slider .ngx-slider-limit {\n  font-weight: bold;\n  color: white !important;\n}\n  .custom-slider .ngx-slider .ngx-slider-tick {\n  width: 1px;\n  height: 10px;\n  margin-left: 4px;\n  border-radius: 0;\n  background: #ffe4d1;\n  top: -1px;\n}\n  .custom-slider .ngx-slider .ngx-slider-tick.ngx-slider-selected {\n  background: var(--primary-color);\n}\n.webtoon-images[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.pagination-area[_ngcontent-%COMP%] {\n  cursor: pointer;\n  z-index: 100;\n}\n.pagination-area[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 42px;\n}\n.pagination-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 25%;\n  background: rgba(0, 0, 0, 0);\n  max-height: calc(var(--vh) * 100);\n  z-index: 100;\n}\n.pagination-area[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0);\n  z-index: 100;\n}\n.pagination-area[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 25%;\n  background: rgba(0, 0, 0, 0);\n  max-height: calc(var(--vh) * 100);\n  z-index: 100;\n}\n.pagination-area[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0);\n  z-index: 100;\n}\n/*# sourceMappingURL=manga-reader.component.css.map */'], data: { animation: [
      trigger("slideFromTop", [
        state("in", style({ transform: "translateY(0)" })),
        transition("void => *", [
          style({ transform: "translateY(-100%)" }),
          animate(ANIMATION_SPEED)
        ]),
        transition("* => void", [
          animate(ANIMATION_SPEED, style({ transform: "translateY(-100%)" }))
        ])
      ]),
      trigger("slideFromBottom", [
        state("in", style({ transform: "translateY(0)" })),
        transition("void => *", [
          style({ transform: "translateY(100%)" }),
          animate(ANIMATION_SPEED)
        ]),
        transition("* => void", [
          animate(ANIMATION_SPEED, style({ transform: "translateY(100%)" }))
        ])
      ])
    ] }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MangaReaderComponent, { className: "MangaReaderComponent", filePath: "src/app/manga-reader/_components/manga-reader/manga-reader.component.ts", lineNumber: 131 });
})();

// src/app/_routes/manga-reader.router.module.ts
var routes = [
  {
    path: ":chapterId",
    component: MangaReaderComponent
  },
  {
    path: ":chapterId/list/:listId",
    component: MangaReaderComponent
  }
];
export {
  routes
};
//# sourceMappingURL=manga-reader.router.module-HVR3YQJD.js.map
