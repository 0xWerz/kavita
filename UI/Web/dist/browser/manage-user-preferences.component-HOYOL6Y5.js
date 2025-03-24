import {
  bookColorThemes
} from "./chunk-GYRVME4Z.js";
import {
  BookService
} from "./chunk-UATES4PD.js";
import {
  LayoutMode,
  PageSplitOption,
  ReaderMode,
  ScalingOption,
  bookLayoutModes,
  bookWritingStyles,
  layoutModes,
  pageSplitOptions,
  pdfScrollModes,
  pdfSpreadModes,
  pdfThemes,
  readingDirections,
  readingModes,
  scalingOptions
} from "./chunk-6PD4CA3T.js";
import "./chunk-4C3V74T6.js";
import {
  BookPageLayoutMode,
  ReadingDirection,
  WritingStyle
} from "./chunk-HLXD4ERA.js";
import {
  PdfScrollMode,
  PdfSpreadMode,
  PdfTheme
} from "./chunk-FAV3BSNY.js";
import {
  SettingSwitchComponent
} from "./chunk-HXDVBBHR.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import {
  AccountService,
  LicenseService,
  LocalizationService,
  Router
} from "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import {
  Title
} from "./chunk-FLGYJHAG.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
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
  ApplicationRef,
  AsyncPipe,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  DOCUMENT,
  DecimalPipe,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  PLATFORM_ID,
  TitleCasePipe,
  TranslocoDirective,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __spreadValues,
  debounceTime,
  distinctUntilChanged,
  filter,
  forkJoin,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  switchMap,
  take,
  takeUntilDestroyed,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// node_modules/ngx-color-picker/fesm2022/ngx-color-picker.mjs
var _c0 = ["dialogPopup"];
var _c1 = ["hueSlider"];
var _c2 = ["alphaSlider"];
function ColorPickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("arrow arrow-", ctx_r1.cpUsePosition, "");
    \u0275\u0275styleProp("left", ctx_r1.cpArrowPosition)("top", ctx_r1.arrowTop, "px");
  }
}
function ColorPickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragStart("saturation-lightness"));
    })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd("saturation-lightness"));
    });
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r1.hueSliderColor);
    \u0275\u0275property("rgX", 1)("rgY", 1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("top", ctx_r1.slider == null ? null : ctx_r1.slider.v, "px")("left", ctx_r1.slider == null ? null : ctx_r1.slider.s, "px");
  }
}
function ColorPickerComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 29);
    \u0275\u0275element(1, "path", 30)(2, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ColorPickerComponent_button_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddPresetColor($event, ctx_r1.selectedColor));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cpAddColorButtonClass);
    \u0275\u0275property("disabled", ctx_r1.cpPresetColors && ctx_r1.cpPresetColors.length >= ctx_r1.cpMaxPresetColorsLength);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cpAddColorButtonText, " ");
  }
}
function ColorPickerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function ColorPickerComponent_div_21_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_input_6_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_input_6_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.a);
  }
}
function ColorPickerComponent_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCyanInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMagentaInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onYellowInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlackInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ColorPickerComponent_div_21_input_6_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "div");
    \u0275\u0275text(9, "C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13, "Y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15, "K");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ColorPickerComponent_div_21_div_16_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 3 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.c);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.m);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.y);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.k);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.a);
  }
}
function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 35)(2, "input", 41);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaturationInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLightnessInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "div");
    \u0275\u0275text(8, "H");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "S");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 2 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 360)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.h);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.s);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_23_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_input_5_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_input_5_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.a);
  }
}
function ColorPickerComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 35)(2, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRedInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGreenInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ColorPickerComponent_div_23_input_5_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "div");
    \u0275\u0275text(8, "R");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "G");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "B");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ColorPickerComponent_div_23_div_13_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 1 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.r);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.g);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.b);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hexAlpha);
  }
}
function ColorPickerComponent_div_24_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 35)(2, "input", 45);
    \u0275\u0275listener("blur", function ColorPickerComponent_div_24_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHexInput(null));
    })("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHexInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div");
    \u0275\u0275text(6, "Hex");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ColorPickerComponent_div_24_div_7_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 0 ? "none" : "block");
    \u0275\u0275classProp("hex-alpha", ctx_r1.cpAlphaChannel === "forced");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.hexText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel === "forced");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel === "forced");
  }
}
function ColorPickerComponent_div_25_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_25_input_3_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_input_3_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.a);
  }
}
function ColorPickerComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_25_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onValueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColorPickerComponent_div_25_input_3_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div");
    \u0275\u0275text(6, "V");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8, "A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275listener("click", function ColorPickerComponent_div_26_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormatToggle(-1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275listener("click", function ColorPickerComponent_div_26_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormatToggle(1));
    });
    \u0275\u0275elementEnd()();
  }
}
function ColorPickerComponent_div_27_div_4_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275listener("click", function ColorPickerComponent_div_27_div_4_div_1_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const color_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemovePresetColor($event, color_r17));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cpRemoveColorButtonClass);
  }
}
function ColorPickerComponent_div_27_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function ColorPickerComponent_div_27_div_4_div_1_Template_div_click_0_listener() {
      const color_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setColorFromString(color_r17));
    });
    \u0275\u0275template(1, ColorPickerComponent_div_27_div_4_div_1_span_1_Template, 1, 3, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", color_r17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAddColorButton);
  }
}
function ColorPickerComponent_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ColorPickerComponent_div_27_div_4_div_1_Template, 2, 3, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpPresetColorsClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cpPresetColors);
  }
}
function ColorPickerComponent_div_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpPresetEmptyMessageClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpPresetEmptyMessage);
  }
}
function ColorPickerComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "hr");
    \u0275\u0275elementStart(2, "div", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ColorPickerComponent_div_27_div_4_Template, 2, 4, "div", 51)(5, ColorPickerComponent_div_27_div_5_Template, 2, 4, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cpPresetLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpPresetColors == null ? null : ctx_r1.cpPresetColors.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.cpPresetColors == null ? null : ctx_r1.cpPresetColors.length) && ctx_r1.cpAddColorButton);
  }
}
function ColorPickerComponent_div_28_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ColorPickerComponent_div_28_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancelColor($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpCancelButtonClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpCancelButtonText);
  }
}
function ColorPickerComponent_div_28_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ColorPickerComponent_div_28_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpOKButtonClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpOKButtonText);
  }
}
function ColorPickerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, ColorPickerComponent_div_28_button_1_Template, 2, 4, "button", 57)(2, ColorPickerComponent_div_28_button_2_Template, 2, 4, "button", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpCancelButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpOKButton);
  }
}
function ColorPickerComponent_div_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorPickerComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, ColorPickerComponent_div_29_ng_container_1_Template, 1, 0, "ng-container", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cpExtraTemplate);
  }
}
var ColorFormats;
(function(ColorFormats2) {
  ColorFormats2[ColorFormats2["HEX"] = 0] = "HEX";
  ColorFormats2[ColorFormats2["RGBA"] = 1] = "RGBA";
  ColorFormats2[ColorFormats2["HSLA"] = 2] = "HSLA";
  ColorFormats2[ColorFormats2["CMYK"] = 3] = "CMYK";
})(ColorFormats || (ColorFormats = {}));
var Rgba = class {
  r;
  g;
  b;
  a;
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
};
var Hsva = class {
  h;
  s;
  v;
  a;
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
};
var Hsla = class {
  h;
  s;
  l;
  a;
  constructor(h, s, l, a) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }
};
var Cmyk = class {
  c;
  m;
  y;
  k;
  a;
  constructor(c, m, y, k, a = 1) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
    this.a = a;
  }
};
function calculateAutoPositioning(elBounds, triggerElBounds) {
  let usePositionX = "right";
  let usePositionY = "bottom";
  const {
    height,
    width
  } = elBounds;
  const {
    top,
    left
  } = triggerElBounds;
  const bottom = top + triggerElBounds.height;
  const right = left + triggerElBounds.width;
  const collisionTop = top - height < 0;
  const collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
  const collisionLeft = left - width < 0;
  const collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
  const collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight;
  if (collisionBottom) {
    usePositionY = "top";
  }
  if (collisionTop) {
    usePositionY = "bottom";
  }
  if (collisionLeft) {
    usePositionX = "right";
  }
  if (collisionRight) {
    usePositionX = "left";
  }
  if (collisionAll) {
    const postions = ["left", "right", "top", "bottom"];
    return postions.reduce((prev, next) => elBounds[prev] > elBounds[next] ? prev : next);
  }
  if (collisionLeft && collisionRight) {
    if (collisionTop) {
      return "bottom";
    }
    if (collisionBottom) {
      return "top";
    }
    return top > bottom ? "top" : "bottom";
  }
  if (collisionTop && collisionBottom) {
    if (collisionLeft) {
      return "right";
    }
    if (collisionRight) {
      return "left";
    }
    return left > right ? "left" : "right";
  }
  return `${usePositionY}-${usePositionX}`;
}
function detectIE() {
  let ua = "";
  if (typeof navigator !== "undefined") {
    ua = navigator.userAgent.toLowerCase();
  }
  const msie = ua.indexOf("msie ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  return false;
}
var TextDirective = class _TextDirective {
  rg;
  text;
  newValue = new EventEmitter();
  inputChange(event) {
    const value = event.target.value;
    if (this.rg === void 0) {
      this.newValue.emit(value);
    } else {
      const numeric = parseFloat(value);
      this.newValue.emit({
        v: numeric,
        rg: this.rg
      });
    }
  }
  static \u0275fac = function TextDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TextDirective,
    selectors: [["", "text", ""]],
    hostBindings: function TextDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function TextDirective_input_HostBindingHandler($event) {
          return ctx.inputChange($event);
        });
      }
    },
    inputs: {
      rg: "rg",
      text: "text"
    },
    outputs: {
      newValue: "newValue"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextDirective, [{
    type: Directive,
    args: [{
      selector: "[text]"
    }]
  }], null, {
    rg: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    newValue: [{
      type: Output
    }],
    inputChange: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var SliderDirective = class _SliderDirective {
  elRef;
  listenerMove;
  listenerStop;
  rgX;
  rgY;
  slider;
  dragEnd = new EventEmitter();
  dragStart = new EventEmitter();
  newValue = new EventEmitter();
  mouseDown(event) {
    this.start(event);
  }
  touchStart(event) {
    this.start(event);
  }
  constructor(elRef) {
    this.elRef = elRef;
    this.listenerMove = (event) => this.move(event);
    this.listenerStop = () => this.stop();
  }
  move(event) {
    event.preventDefault();
    this.setCursor(event);
  }
  start(event) {
    this.setCursor(event);
    event.stopPropagation();
    document.addEventListener("mouseup", this.listenerStop);
    document.addEventListener("touchend", this.listenerStop);
    document.addEventListener("mousemove", this.listenerMove);
    document.addEventListener("touchmove", this.listenerMove);
    this.dragStart.emit();
  }
  stop() {
    document.removeEventListener("mouseup", this.listenerStop);
    document.removeEventListener("touchend", this.listenerStop);
    document.removeEventListener("mousemove", this.listenerMove);
    document.removeEventListener("touchmove", this.listenerMove);
    this.dragEnd.emit();
  }
  getX(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageX = event.pageX !== void 0 ? event.pageX : event.touches[0].pageX;
    return pageX - position.left - window.pageXOffset;
  }
  getY(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageY = event.pageY !== void 0 ? event.pageY : event.touches[0].pageY;
    return pageY - position.top - window.pageYOffset;
  }
  setCursor(event) {
    const width = this.elRef.nativeElement.offsetWidth;
    const height = this.elRef.nativeElement.offsetHeight;
    const x = Math.max(0, Math.min(this.getX(event), width));
    const y = Math.max(0, Math.min(this.getY(event), height));
    if (this.rgX !== void 0 && this.rgY !== void 0) {
      this.newValue.emit({
        s: x / width,
        v: 1 - y / height,
        rgX: this.rgX,
        rgY: this.rgY
      });
    } else if (this.rgX === void 0 && this.rgY !== void 0) {
      this.newValue.emit({
        v: y / height,
        rgY: this.rgY
      });
    } else if (this.rgX !== void 0 && this.rgY === void 0) {
      this.newValue.emit({
        v: x / width,
        rgX: this.rgX
      });
    }
  }
  static \u0275fac = function SliderDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SliderDirective,
    selectors: [["", "slider", ""]],
    hostBindings: function SliderDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) {
          return ctx.mouseDown($event);
        })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) {
          return ctx.touchStart($event);
        });
      }
    },
    inputs: {
      rgX: "rgX",
      rgY: "rgY",
      slider: "slider"
    },
    outputs: {
      dragEnd: "dragEnd",
      dragStart: "dragStart",
      newValue: "newValue"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderDirective, [{
    type: Directive,
    args: [{
      selector: "[slider]"
    }]
  }], () => [{
    type: ElementRef
  }], {
    rgX: [{
      type: Input
    }],
    rgY: [{
      type: Input
    }],
    slider: [{
      type: Input
    }],
    dragEnd: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    newValue: [{
      type: Output
    }],
    mouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    touchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }]
  });
})();
var SliderPosition = class {
  h;
  s;
  v;
  a;
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
};
var SliderDimension = class {
  h;
  s;
  v;
  a;
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
};
var ColorPickerService = class _ColorPickerService {
  active = null;
  setActive(active) {
    if (this.active && this.active !== active && this.active.cpDialogDisplay !== "inline") {
      this.active.closeDialog();
    }
    this.active = active;
  }
  hsva2hsla(hsva) {
    const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
    if (v === 0) {
      return new Hsla(h, 0, 0, a);
    } else if (s === 0 && v === 1) {
      return new Hsla(h, 1, 1, a);
    } else {
      const l = v * (2 - s) / 2;
      return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
    }
  }
  hsla2hsva(hsla) {
    const h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1);
    const l = Math.min(hsla.l, 1), a = Math.min(hsla.a, 1);
    if (l === 0) {
      return new Hsva(h, 0, 0, a);
    } else {
      const v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
      return new Hsva(h, 2 * (v - l) / v, v, a);
    }
  }
  hsvaToRgba(hsva) {
    let r, g, b;
    const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        r = v, g = t, b = p;
        break;
      case 1:
        r = q, g = v, b = p;
        break;
      case 2:
        r = p, g = v, b = t;
        break;
      case 3:
        r = p, g = q, b = v;
        break;
      case 4:
        r = t, g = p, b = v;
        break;
      case 5:
        r = v, g = p, b = q;
        break;
      default:
        r = 0, g = 0, b = 0;
    }
    return new Rgba(r, g, b, a);
  }
  cmykToRgb(cmyk) {
    const r = (1 - cmyk.c) * (1 - cmyk.k);
    const g = (1 - cmyk.m) * (1 - cmyk.k);
    const b = (1 - cmyk.y) * (1 - cmyk.k);
    return new Rgba(r, g, b, cmyk.a);
  }
  rgbaToCmyk(rgba) {
    const k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
    if (k === 1) {
      return new Cmyk(0, 0, 0, 1, rgba.a);
    } else {
      const c = (1 - rgba.r - k) / (1 - k);
      const m = (1 - rgba.g - k) / (1 - k);
      const y = (1 - rgba.b - k) / (1 - k);
      return new Cmyk(c, m, y, k, rgba.a);
    }
  }
  rgbaToHsva(rgba) {
    let h, s;
    const r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1);
    const b = Math.min(rgba.b, 1), a = Math.min(rgba.a, 1);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const v = max, d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
      h = 0;
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }
    return new Hsva(h, s, v, a);
  }
  rgbaToHex(rgba, allowHex8) {
    let hex = "#" + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);
    if (allowHex8) {
      hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
    }
    return hex;
  }
  normalizeCMYK(cmyk) {
    return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
  }
  denormalizeCMYK(cmyk) {
    return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
  }
  denormalizeRGBA(rgba) {
    return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
  }
  stringToHsva(colorString = "", allowHex8 = false) {
    let hsva = null;
    colorString = (colorString || "").toLowerCase();
    const stringParsers = [{
      re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function(execResult) {
        return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }, {
      re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function(execResult) {
        return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }];
    if (allowHex8) {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
        parse: function(execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || "FF", 16) / 255);
        }
      });
    } else {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
        parse: function(execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
        }
      });
    }
    stringParsers.push({
      re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
      parse: function(execResult) {
        return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
      }
    });
    for (const key in stringParsers) {
      if (stringParsers.hasOwnProperty(key)) {
        const parser = stringParsers[key];
        const match = parser.re.exec(colorString), color = match && parser.parse(match);
        if (color) {
          if (color instanceof Rgba) {
            hsva = this.rgbaToHsva(color);
          } else if (color instanceof Hsla) {
            hsva = this.hsla2hsva(color);
          }
          return hsva;
        }
      }
    }
    return hsva;
  }
  outputFormat(hsva, outputFormat, alphaChannel) {
    if (outputFormat === "auto") {
      outputFormat = hsva.a < 1 ? "rgba" : "hex";
    }
    switch (outputFormat) {
      case "hsla":
        const hsla = this.hsva2hsla(hsva);
        const hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        if (hsva.a < 1 || alphaChannel === "always") {
          return "hsla(" + hslaText.h + "," + hslaText.s + "%," + hslaText.l + "%," + hslaText.a + ")";
        } else {
          return "hsl(" + hslaText.h + "," + hslaText.s + "%," + hslaText.l + "%)";
        }
      case "rgba":
        const rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
        if (hsva.a < 1 || alphaChannel === "always") {
          return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + Math.round(rgba.a * 100) / 100 + ")";
        } else {
          return "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
        }
      default:
        const allowHex8 = alphaChannel === "always" || alphaChannel === "forced";
        return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
    }
  }
  static \u0275fac = function ColorPickerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ColorPickerService,
    factory: _ColorPickerService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SUPPORTS_TOUCH = typeof window !== "undefined" && "ontouchstart" in window;
var ColorPickerComponent = class _ColorPickerComponent {
  ngZone;
  elRef;
  cdRef;
  document;
  platformId;
  service;
  isIE10 = false;
  cmyk;
  hsva;
  width;
  height;
  cmykColor;
  outputColor;
  initialColor;
  fallbackColor;
  listenerResize;
  listenerMouseDown;
  directiveInstance;
  sliderH;
  sliderDimMax;
  directiveElementRef;
  dialogArrowSize = 10;
  dialogArrowOffset = 15;
  dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
  useRootViewContainer = false;
  show;
  hidden;
  top;
  left;
  position;
  format;
  slider;
  hexText;
  hexAlpha;
  cmykText;
  hslaText;
  rgbaText;
  arrowTop;
  selectedColor;
  hueSliderColor;
  alphaSliderColor;
  cpWidth;
  cpHeight;
  cpColorMode;
  cpCmykEnabled;
  cpAlphaChannel;
  cpOutputFormat;
  cpDisableInput;
  cpDialogDisplay;
  cpIgnoredElements;
  cpSaveClickOutside;
  cpCloseClickOutside;
  cpPosition;
  cpUsePosition;
  cpPositionOffset;
  cpOKButton;
  cpOKButtonText;
  cpOKButtonClass;
  cpCancelButton;
  cpCancelButtonText;
  cpCancelButtonClass;
  cpEyeDropper;
  eyeDropperSupported;
  cpPresetLabel;
  cpPresetColors;
  cpPresetColorsClass;
  cpMaxPresetColorsLength;
  cpPresetEmptyMessage;
  cpPresetEmptyMessageClass;
  cpAddColorButton;
  cpAddColorButtonText;
  cpAddColorButtonClass;
  cpRemoveColorButtonClass;
  cpArrowPosition;
  cpTriggerElement;
  cpExtraTemplate;
  dialogElement;
  hueSlider;
  alphaSlider;
  handleEsc(event) {
    if (this.show && this.cpDialogDisplay === "popup") {
      this.onCancelColor(event);
    }
  }
  handleEnter(event) {
    if (this.show && this.cpDialogDisplay === "popup") {
      this.onAcceptColor(event);
    }
  }
  constructor(ngZone, elRef, cdRef, document2, platformId, service) {
    this.ngZone = ngZone;
    this.elRef = elRef;
    this.cdRef = cdRef;
    this.document = document2;
    this.platformId = platformId;
    this.service = service;
    this.eyeDropperSupported = isPlatformBrowser(this.platformId) && "EyeDropper" in this.document.defaultView;
  }
  ngOnInit() {
    this.slider = new SliderPosition(0, 0, 0, 0);
    const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
    const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
    this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
    if (this.cpCmykEnabled) {
      this.format = ColorFormats.CMYK;
    } else if (this.cpOutputFormat === "rgba") {
      this.format = ColorFormats.RGBA;
    } else if (this.cpOutputFormat === "hsla") {
      this.format = ColorFormats.HSLA;
    } else {
      this.format = ColorFormats.HEX;
    }
    this.listenerMouseDown = (event) => {
      this.onMouseDown(event);
    };
    this.listenerResize = () => {
      this.onResize();
    };
    this.openDialog(this.initialColor, false);
  }
  ngOnDestroy() {
    this.closeDialog();
  }
  ngAfterViewInit() {
    if (this.cpWidth !== 230 || this.cpDialogDisplay === "inline") {
      const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
      const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
      this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
      this.updateColorPicker(false);
      this.cdRef.detectChanges();
    }
  }
  openDialog(color, emit = true) {
    this.service.setActive(this);
    if (!this.width) {
      this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
    }
    if (!this.height) {
      this.height = 320;
    }
    this.setInitialColor(color);
    this.setColorFromString(color, emit);
    this.openColorPicker();
  }
  closeDialog() {
    this.closeColorPicker();
  }
  setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpEyeDropper, cpTriggerElement, cpExtraTemplate) {
    this.setInitialColor(color);
    this.setColorMode(cpColorMode);
    this.isIE10 = detectIE() === 10;
    this.directiveInstance = instance;
    this.directiveElementRef = elementRef;
    this.cpDisableInput = cpDisableInput;
    this.cpCmykEnabled = cpCmykEnabled;
    this.cpAlphaChannel = cpAlphaChannel;
    this.cpOutputFormat = cpOutputFormat;
    this.cpDialogDisplay = cpDialogDisplay;
    this.cpIgnoredElements = cpIgnoredElements;
    this.cpSaveClickOutside = cpSaveClickOutside;
    this.cpCloseClickOutside = cpCloseClickOutside;
    this.useRootViewContainer = cpUseRootViewContainer;
    this.width = this.cpWidth = parseInt(cpWidth, 10);
    this.height = this.cpHeight = parseInt(cpHeight, 10);
    this.cpPosition = cpPosition;
    this.cpPositionOffset = parseInt(cpPositionOffset, 10);
    this.cpOKButton = cpOKButton;
    this.cpOKButtonText = cpOKButtonText;
    this.cpOKButtonClass = cpOKButtonClass;
    this.cpCancelButton = cpCancelButton;
    this.cpCancelButtonText = cpCancelButtonText;
    this.cpCancelButtonClass = cpCancelButtonClass;
    this.cpEyeDropper = cpEyeDropper;
    this.fallbackColor = cpFallbackColor || "#fff";
    this.setPresetConfig(cpPresetLabel, cpPresetColors);
    this.cpPresetColorsClass = cpPresetColorsClass;
    this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
    this.cpPresetEmptyMessage = cpPresetEmptyMessage;
    this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
    this.cpAddColorButton = cpAddColorButton;
    this.cpAddColorButtonText = cpAddColorButtonText;
    this.cpAddColorButtonClass = cpAddColorButtonClass;
    this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
    this.cpTriggerElement = cpTriggerElement;
    this.cpExtraTemplate = cpExtraTemplate;
    if (!cpPositionRelativeToArrow) {
      this.dialogArrowOffset = 0;
    }
    if (cpDialogDisplay === "inline") {
      this.dialogArrowSize = 0;
      this.dialogArrowOffset = 0;
    }
    if (cpOutputFormat === "hex" && cpAlphaChannel !== "always" && cpAlphaChannel !== "forced") {
      this.cpAlphaChannel = "disabled";
    }
  }
  setColorMode(mode) {
    switch (mode.toString().toUpperCase()) {
      case "1":
      case "C":
      case "COLOR":
        this.cpColorMode = 1;
        break;
      case "2":
      case "G":
      case "GRAYSCALE":
        this.cpColorMode = 2;
        break;
      case "3":
      case "P":
      case "PRESETS":
        this.cpColorMode = 3;
        break;
      default:
        this.cpColorMode = 1;
    }
  }
  setInitialColor(color) {
    this.initialColor = color;
  }
  setPresetConfig(cpPresetLabel, cpPresetColors) {
    this.cpPresetLabel = cpPresetLabel;
    this.cpPresetColors = cpPresetColors;
  }
  setColorFromString(value, emit = true, update = true) {
    let hsva;
    if (this.cpAlphaChannel === "always" || this.cpAlphaChannel === "forced") {
      hsva = this.service.stringToHsva(value, true);
      if (!hsva && !this.hsva) {
        hsva = this.service.stringToHsva(value, false);
      }
    } else {
      hsva = this.service.stringToHsva(value, false);
    }
    if (!hsva && !this.hsva) {
      hsva = this.service.stringToHsva(this.fallbackColor, false);
    }
    if (hsva) {
      this.hsva = hsva;
      this.sliderH = this.hsva.h;
      if (this.cpOutputFormat === "hex" && this.cpAlphaChannel === "disabled") {
        this.hsva.a = 1;
      }
      this.updateColorPicker(emit, update);
    }
  }
  onResize() {
    if (this.position === "fixed") {
      this.setDialogPosition();
    } else if (this.cpDialogDisplay !== "inline") {
      this.closeColorPicker();
    }
  }
  onDragEnd(slider) {
    this.directiveInstance.sliderDragEnd({
      slider,
      color: this.outputColor
    });
  }
  onDragStart(slider) {
    this.directiveInstance.sliderDragStart({
      slider,
      color: this.outputColor
    });
  }
  onMouseDown(event) {
    if (this.show && !this.isIE10 && this.cpDialogDisplay === "popup" && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter((item) => item === event.target).length === 0) {
      this.ngZone.run(() => {
        if (this.cpSaveClickOutside) {
          this.directiveInstance.colorSelected(this.outputColor);
        } else {
          this.hsva = null;
          this.setColorFromString(this.initialColor, false);
          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }
          this.directiveInstance.colorChanged(this.initialColor);
          this.directiveInstance.colorCanceled();
        }
        if (this.cpCloseClickOutside) {
          this.closeColorPicker();
        }
      });
    }
  }
  onAcceptColor(event) {
    event.stopPropagation();
    if (this.outputColor) {
      this.directiveInstance.colorSelected(this.outputColor);
    }
    if (this.cpDialogDisplay === "popup") {
      this.closeColorPicker();
    }
  }
  onCancelColor(event) {
    this.hsva = null;
    event.stopPropagation();
    this.directiveInstance.colorCanceled();
    this.setColorFromString(this.initialColor, true);
    if (this.cpDialogDisplay === "popup") {
      if (this.cpCmykEnabled) {
        this.directiveInstance.cmykChanged(this.cmykColor);
      }
      this.directiveInstance.colorChanged(this.initialColor, true);
      this.closeColorPicker();
    }
  }
  onEyeDropper() {
    if (!this.eyeDropperSupported) return;
    const eyeDropper = new window.EyeDropper();
    eyeDropper.open().then((eyeDropperResult) => {
      this.setColorFromString(eyeDropperResult.sRGBHex, true);
    });
  }
  onFormatToggle(change) {
    const availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
    const nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
    this.format = this.dialogInputFields[nextFormat];
  }
  onColorChange(value) {
    this.hsva.s = value.s / value.rgX;
    this.hsva.v = value.v / value.rgY;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "lightness",
      value: this.hsva.v,
      color: this.outputColor
    });
    this.directiveInstance.sliderChanged({
      slider: "saturation",
      value: this.hsva.s,
      color: this.outputColor
    });
  }
  onHueChange(value) {
    this.hsva.h = value.v / value.rgX;
    this.sliderH = this.hsva.h;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "hue",
      value: this.hsva.h,
      color: this.outputColor
    });
  }
  onValueChange(value) {
    this.hsva.v = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "value",
      value: this.hsva.v,
      color: this.outputColor
    });
  }
  onAlphaChange(value) {
    this.hsva.a = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "alpha",
      value: this.hsva.a,
      color: this.outputColor
    });
  }
  onHexInput(value) {
    if (value === null) {
      this.updateColorPicker();
    } else {
      if (value && value[0] !== "#") {
        value = "#" + value;
      }
      let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
      if (this.cpAlphaChannel === "always") {
        validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
      }
      const valid = validHex.test(value);
      if (valid) {
        if (value.length < 5) {
          value = "#" + value.substring(1).split("").map((c) => c + c).join("");
        }
        if (this.cpAlphaChannel === "forced") {
          value += Math.round(this.hsva.a * 255).toString(16);
        }
        this.setColorFromString(value, true, false);
      }
      this.directiveInstance.inputChanged({
        input: "hex",
        valid,
        value,
        color: this.outputColor
      });
    }
  }
  onRedInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.r = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "red",
      valid,
      value: rgba.r,
      color: this.outputColor
    });
  }
  onBlueInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.b = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "blue",
      valid,
      value: rgba.b,
      color: this.outputColor
    });
  }
  onGreenInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.g = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "green",
      valid,
      value: rgba.g,
      color: this.outputColor
    });
  }
  onHueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.h = value.v / value.rg;
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "hue",
      valid,
      value: this.hsva.h,
      color: this.outputColor
    });
  }
  onValueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.v = value.v / value.rg;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "value",
      valid,
      value: this.hsva.v,
      color: this.outputColor
    });
  }
  onAlphaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.a = value.v / value.rg;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "alpha",
      valid,
      value: this.hsva.a,
      color: this.outputColor
    });
  }
  onLightnessInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      hsla.l = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "lightness",
      valid,
      value: hsla.l,
      color: this.outputColor
    });
  }
  onSaturationInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      hsla.s = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "saturation",
      valid,
      value: hsla.s,
      color: this.outputColor
    });
  }
  onCyanInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.c = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "cyan",
      valid: true,
      value: this.cmyk.c,
      color: this.outputColor
    });
  }
  onMagentaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.m = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "magenta",
      valid: true,
      value: this.cmyk.m,
      color: this.outputColor
    });
  }
  onYellowInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.y = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "yellow",
      valid: true,
      value: this.cmyk.y,
      color: this.outputColor
    });
  }
  onBlackInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.k = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "black",
      valid: true,
      value: this.cmyk.k,
      color: this.outputColor
    });
  }
  onAddPresetColor(event, value) {
    event.stopPropagation();
    if (!this.cpPresetColors.filter((color) => color === value).length) {
      this.cpPresetColors = this.cpPresetColors.concat(value);
      this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    }
  }
  onRemovePresetColor(event, value) {
    event.stopPropagation();
    this.cpPresetColors = this.cpPresetColors.filter((color) => color !== value);
    this.directiveInstance.presetColorsChanged(this.cpPresetColors);
  }
  // Private helper functions for the color picker dialog status
  openColorPicker() {
    if (!this.show) {
      this.show = true;
      this.hidden = true;
      setTimeout(() => {
        this.hidden = false;
        this.setDialogPosition();
        this.cdRef.detectChanges();
      }, 0);
      this.directiveInstance.stateChanged(true);
      if (!this.isIE10) {
        this.ngZone.runOutsideAngular(() => {
          if (SUPPORTS_TOUCH) {
            document.addEventListener("touchstart", this.listenerMouseDown);
          } else {
            document.addEventListener("mousedown", this.listenerMouseDown);
          }
        });
      }
      window.addEventListener("resize", this.listenerResize);
    }
  }
  closeColorPicker() {
    if (this.show) {
      this.show = false;
      this.directiveInstance.stateChanged(false);
      if (!this.isIE10) {
        if (SUPPORTS_TOUCH) {
          document.removeEventListener("touchstart", this.listenerMouseDown);
        } else {
          document.removeEventListener("mousedown", this.listenerMouseDown);
        }
      }
      window.removeEventListener("resize", this.listenerResize);
      if (!this.cdRef["destroyed"]) {
        this.cdRef.detectChanges();
      }
    }
  }
  updateColorPicker(emit = true, update = true, cmykInput = false) {
    if (this.sliderDimMax) {
      if (this.cpColorMode === 2) {
        this.hsva.s = 0;
      }
      let hue, hsla, rgba;
      const lastOutput = this.outputColor;
      hsla = this.service.hsva2hsla(this.hsva);
      if (!this.cpCmykEnabled) {
        rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
      } else {
        if (!cmykInput) {
          rgba = this.service.hsvaToRgba(this.hsva);
          this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
        } else {
          rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
          this.hsva = this.service.rgbaToHsva(rgba);
        }
        rgba = this.service.denormalizeRGBA(rgba);
        this.sliderH = this.hsva.h;
      }
      hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
      if (update) {
        this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
        if (this.cpCmykEnabled) {
          this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
        }
        const allowHex8 = this.cpAlphaChannel === "always";
        this.hexText = this.service.rgbaToHex(rgba, allowHex8);
        this.hexAlpha = this.rgbaText.a;
      }
      if (this.cpOutputFormat === "auto") {
        if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK && this.format !== ColorFormats.HSLA) {
          if (this.hsva.a < 1) {
            this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
          }
        }
      }
      this.hueSliderColor = "rgb(" + hue.r + "," + hue.g + "," + hue.b + ")";
      this.alphaSliderColor = "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
      this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
      this.selectedColor = this.service.outputFormat(this.hsva, "rgba", null);
      if (this.format !== ColorFormats.CMYK) {
        this.cmykColor = "";
      } else {
        if (this.cpAlphaChannel === "always" || this.cpAlphaChannel === "enabled" || this.cpAlphaChannel === "forced") {
          const alpha = Math.round(this.cmyk.a * 100) / 100;
          this.cmykColor = `cmyka(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k},${alpha})`;
        } else {
          this.cmykColor = `cmyk(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k})`;
        }
      }
      this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
      if (emit && lastOutput !== this.outputColor) {
        if (this.cpCmykEnabled) {
          this.directiveInstance.cmykChanged(this.cmykColor);
        }
        this.directiveInstance.colorChanged(this.outputColor);
      }
    }
  }
  // Private helper functions for the color picker dialog positioning
  setDialogPosition() {
    if (this.cpDialogDisplay === "inline") {
      this.position = "relative";
    } else {
      let position = "static", transform = "", style;
      let parentNode = null, transformNode = null;
      let node = this.directiveElementRef.nativeElement.parentNode;
      const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
      while (node !== null && node.tagName !== "HTML") {
        style = window.getComputedStyle(node);
        position = style.getPropertyValue("position");
        transform = style.getPropertyValue("transform");
        if (position !== "static" && parentNode === null) {
          parentNode = node;
        }
        if (transform && transform !== "none" && transformNode === null) {
          transformNode = node;
        }
        if (position === "fixed") {
          parentNode = transformNode;
          break;
        }
        node = node.parentNode;
      }
      const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== "fixed");
      if (this.useRootViewContainer || position === "fixed" && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
        this.top = boxDirective.top;
        this.left = boxDirective.left;
      } else {
        if (parentNode === null) {
          parentNode = node;
        }
        const boxParent = this.createDialogBox(parentNode, position !== "fixed");
        this.top = boxDirective.top - boxParent.top;
        this.left = boxDirective.left - boxParent.left;
      }
      if (position === "fixed") {
        this.position = "fixed";
      }
      let usePosition = this.cpPosition;
      const dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
      if (this.cpPosition === "auto") {
        const triggerBounds = this.cpTriggerElement.nativeElement.getBoundingClientRect();
        usePosition = calculateAutoPositioning(dialogBounds, triggerBounds);
      }
      this.arrowTop = usePosition === "top" ? dialogHeight - 1 : void 0;
      this.cpArrowPosition = void 0;
      switch (usePosition) {
        case "top":
          this.top -= dialogHeight + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          break;
        case "bottom":
          this.top += boxDirective.height + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          break;
        case "top-left":
        case "left-top":
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          break;
        case "top-right":
        case "right-top":
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          break;
        case "left":
        case "bottom-left":
        case "left-bottom":
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left -= this.cpWidth + this.dialogArrowSize - 2;
          break;
        case "right":
        case "bottom-right":
        case "right-bottom":
        default:
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left += boxDirective.width + this.dialogArrowSize - 2;
          break;
      }
      const windowInnerHeight = window.innerHeight;
      const windowInnerWidth = window.innerWidth;
      const elRefClientRect = this.elRef.nativeElement.getBoundingClientRect();
      const bottom = this.top + dialogBounds.height;
      if (bottom > windowInnerHeight) {
        this.top = windowInnerHeight - dialogBounds.height;
        this.cpArrowPosition = elRefClientRect.x / 2 - 20;
      }
      const right = this.left + dialogBounds.width;
      if (right > windowInnerWidth) {
        this.left = windowInnerWidth - dialogBounds.width;
        this.cpArrowPosition = elRefClientRect.x / 2 - 20;
      }
      this.cpUsePosition = usePosition;
    }
  }
  // Private helper functions for the color picker dialog positioning and opening
  isDescendant(parent, child) {
    let node = child.parentNode;
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  createDialogBox(element, offset) {
    const {
      top,
      left
    } = element.getBoundingClientRect();
    return {
      top: top + (offset ? window.pageYOffset : 0),
      left: left + (offset ? window.pageXOffset : 0),
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  static \u0275fac = function ColorPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ColorPickerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColorPickerComponent,
    selectors: [["color-picker"]],
    viewQuery: function ColorPickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
        \u0275\u0275viewQuery(_c1, 7);
        \u0275\u0275viewQuery(_c2, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dialogElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hueSlider = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alphaSlider = _t.first);
      }
    },
    hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) {
          return ctx.handleEsc($event);
        }, false, \u0275\u0275resolveDocument)("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) {
          return ctx.handleEnter($event);
        }, false, \u0275\u0275resolveDocument);
      }
    },
    decls: 30,
    vars: 51,
    consts: [["dialogPopup", ""], ["hueSlider", ""], ["valueSlider", ""], ["alphaSlider", ""], [1, "color-picker", 3, "click"], [3, "left", "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color", 3, "click"], ["class", "eyedropper-icon", "xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 4, "ngIf"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], [1, "cursor"], [1, "value", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], [1, "alpha", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], ["class", "extra-template", 4, "ngIf"], [1, "saturation-lightness", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX", "rgY"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "eyedropper-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"], ["type", "button", 3, "click", "disabled"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "keyup.enter", "newValue", "text", "rg", "value"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "hex-text"], [3, "blur", "keyup.enter", "newValue", "text", "value"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "extra-template"], [4, "ngTemplateOutlet"]],
    template: function ColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4, 0);
        \u0275\u0275listener("click", function ColorPickerComponent_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275template(2, ColorPickerComponent_div_2_Template, 1, 7, "div", 5)(3, ColorPickerComponent_div_3_Template, 2, 8, "div", 6);
        \u0275\u0275elementStart(4, "div", 7)(5, "div", 8);
        \u0275\u0275element(6, "div", 9);
        \u0275\u0275elementStart(7, "div", 10);
        \u0275\u0275listener("click", function ColorPickerComponent_Template_div_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.eyeDropperSupported && ctx.cpEyeDropper && ctx.onEyeDropper());
        });
        \u0275\u0275template(8, ColorPickerComponent__svg_svg_8_Template, 3, 0, "svg", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ColorPickerComponent_button_9_Template, 2, 5, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 13);
        \u0275\u0275template(11, ColorPickerComponent_div_11_Template, 1, 0, "div", 14);
        \u0275\u0275elementStart(12, "div", 15, 1);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onHueChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("hue"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("hue"));
        });
        \u0275\u0275element(14, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 17, 2);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onValueChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("value"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("value"));
        });
        \u0275\u0275element(17, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 18, 3);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAlphaChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("alpha"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("alpha"));
        });
        \u0275\u0275element(20, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(21, ColorPickerComponent_div_21_Template, 17, 12, "div", 19)(22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20)(23, ColorPickerComponent_div_23_Template, 14, 10, "div", 21)(24, ColorPickerComponent_div_24_Template, 8, 7, "div", 22)(25, ColorPickerComponent_div_25_Template, 9, 3, "div", 23)(26, ColorPickerComponent_div_26_Template, 3, 0, "div", 24)(27, ColorPickerComponent_div_27_Template, 6, 3, "div", 25)(28, ColorPickerComponent_div_28_Template, 3, 2, "div", 26)(29, ColorPickerComponent_div_29_Template, 2, 1, "div", 27);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");
        \u0275\u0275classProp("open", ctx.show);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.cpDialogDisplay === "popup");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("background-color", ctx.selectedColor)("cursor", ctx.eyeDropperSupported && ctx.cpEyeDropper ? "pointer" : null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.eyeDropperSupported && ctx.cpEyeDropper);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpAddColorButton);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.cpAlphaChannel === "disabled");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.slider == null ? null : ctx.slider.h, "px");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("right", ctx.slider == null ? null : ctx.slider.v, "px");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.slider == null ? null : ctx.slider.a, "px");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpExtraTemplate);
      }
    },
    dependencies: [NgForOf, NgIf, NgTemplateOutlet, TextDirective, SliderDirective],
    styles: ['.color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;-webkit-flex:1;-ms-flex:1;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:"x";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerComponent, [{
    type: Component,
    args: [{
      selector: "color-picker",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div #dialogPopup class="color-picker" [class.open]="show" [style.display]="!show ? 'none' : 'block'" [style.visibility]="hidden ? 'hidden' : 'visible'" [style.top.px]="top" [style.left.px]="left" [style.position]="position" [style.height.px]="cpHeight" [style.width.px]="cpWidth" (click)="$event.stopPropagation()">
  <div *ngIf="cpDialogDisplay === 'popup'" [style.left]="cpArrowPosition" class="arrow arrow-{{cpUsePosition}}" [style.top.px]="arrowTop"></div>

  <div *ngIf="(cpColorMode ||\xA01) === 1" class="saturation-lightness" [slider] [rgX]="1" [rgY]="1" [style.background-color]="hueSliderColor" (newValue)="onColorChange($event)" (dragStart)="onDragStart('saturation-lightness')" (dragEnd)="onDragEnd('saturation-lightness')">
    <div class="cursor" [style.top.px]="slider?.v" [style.left.px]="slider?.s"></div>
  </div>

  <div class="hue-alpha box">
    <div class="left">
      <div class="selected-color-background"></div>

      <div class="selected-color" [style.background-color]="selectedColor" [style.cursor]="eyeDropperSupported && cpEyeDropper ? 'pointer' : null" (click)="eyeDropperSupported && cpEyeDropper && onEyeDropper()">
        <svg *ngIf="eyeDropperSupported && cpEyeDropper" class="eyedropper-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/></svg>
      </div>

      <button *ngIf="cpAddColorButton" type="button" class="{{cpAddColorButtonClass}}" [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength" (click)="onAddPresetColor($event, selectedColor)">
        {{cpAddColorButtonText}}
      </button>
    </div>

    <div class="right">
      <div *ngIf="cpAlphaChannel==='disabled'" style="height: 16px;"></div>

      <div #hueSlider class="hue" [slider] [rgX]="1" [style.display]="(cpColorMode ||\xA01) === 1 ? 'block' : 'none'" (newValue)="onHueChange($event)" (dragStart)="onDragStart('hue')" (dragEnd)="onDragEnd('hue')">
        <div class="cursor" [style.left.px]="slider?.h"></div>
      </div>

      <div #valueSlider class="value" [slider] [rgX]="1" [style.display]="(cpColorMode ||\xA01) === 2 ? 'block': 'none'" (newValue)="onValueChange($event)" (dragStart)="onDragStart('value')" (dragEnd)="onDragEnd('value')">
        <div class="cursor" [style.right.px]="slider?.v"></div>
      </div>

      <div #alphaSlider class="alpha" [slider] [rgX]="1" [style.display]="cpAlphaChannel === 'disabled' ? 'none' : 'block'" [style.background-color]="alphaSliderColor" (newValue)="onAlphaChange($event)" (dragStart)="onDragStart('alpha')" (dragEnd)="onDragEnd('alpha')">
        <div class="cursor" [style.left.px]="slider?.a"></div>
      </div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="cmyk-text" [style.display]="format !== 3 ? 'none' : 'block'">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.c" (keyup.enter)="onAcceptColor($event)" (newValue)="onCyanInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.m" (keyup.enter)="onAcceptColor($event)" (newValue)="onMagentaInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.y" (keyup.enter)="onAcceptColor($event)" (newValue)="onYellowInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.k" (keyup.enter)="onAcceptColor($event)" (newValue)="onBlackInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="cmykText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

     <div class="box">
      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1 " class="hsla-text" [style.display]="format !== 2 ? 'none' : 'block'">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="360" [text] [rg]="360" [value]="hslaText?.h" (keyup.enter)="onAcceptColor($event)" (newValue)="onHueInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.s" (keyup.enter)="onAcceptColor($event)" (newValue)="onSaturationInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.l" (keyup.enter)="onAcceptColor($event)" (newValue)="onLightnessInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="hslaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>H</div><div>S</div><div>L</div><div *ngIf="cpAlphaChannel!=='disabled'">A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1 " [style.display]="format !== 1 ? 'none' : 'block'" class="rgba-text">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.r" (keyup.enter)="onAcceptColor($event)" (newValue)="onRedInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.g" (keyup.enter)="onAcceptColor($event)" (newValue)="onGreenInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.b" (keyup.enter)="onAcceptColor($event)" (newValue)="onBlueInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="rgbaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>R</div><div>G</div><div>B</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="hex-text" [class.hex-alpha]="cpAlphaChannel==='forced'"
    [style.display]="format !== 0 ? 'none' : 'block'">
    <div class="box">
      <input [text] [value]="hexText" (blur)="onHexInput(null)" (keyup.enter)="onAcceptColor($event)" (newValue)="onHexInput($event)"/>
      <input *ngIf="cpAlphaChannel==='forced'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="hexAlpha" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)"/>
    </div>

    <div class="box">
      <div>Hex</div>
      <div *ngIf="cpAlphaChannel==='forced'">A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 2" class="value-text">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.l" (keyup.enter)="onAcceptColor($event)" (newValue)="onValueInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1"  [text] [rg]="1" [value]="hslaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>V</div><div>A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="type-policy">
    <span class="type-policy-arrow" (click)="onFormatToggle(-1)"></span>
    <span class="type-policy-arrow" (click)="onFormatToggle(1)"></span>
  </div>

  <div *ngIf="cpPresetColors?.length || cpAddColorButton" class="preset-area">
    <hr>

    <div class="preset-label">{{cpPresetLabel}}</div>

    <div *ngIf="cpPresetColors?.length" class="{{cpPresetColorsClass}}">
      <div *ngFor="let color of cpPresetColors" class="preset-color" [style.backgroundColor]="color" (click)="setColorFromString(color)">
        <span *ngIf="cpAddColorButton" class="{{cpRemoveColorButtonClass}}" (click)="onRemovePresetColor($event, color)"></span>
      </div>
    </div>

    <div *ngIf="!cpPresetColors?.length && cpAddColorButton" class="{{cpPresetEmptyMessageClass}}">{{cpPresetEmptyMessage}}</div>
  </div>

  <div *ngIf="cpOKButton || cpCancelButton" class="button-area">
    <button *ngIf="cpCancelButton" type="button" class="{{cpCancelButtonClass}}" (click)="onCancelColor($event)">{{cpCancelButtonText}}</button>

    <button *ngIf="cpOKButton" type="button" class="{{cpOKButtonClass}}" (click)="onAcceptColor($event)">{{cpOKButtonText}}</button>
  </div>

  <div class="extra-template" *ngIf="cpExtraTemplate">
    <ng-container *ngTemplateOutlet="cpExtraTemplate"></ng-container>
  </div>
</div>
`,
      styles: ['.color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.color-picker *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;-webkit-flex:1;-ms-flex:1;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:"x";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n']
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ColorPickerService
  }], {
    dialogElement: [{
      type: ViewChild,
      args: ["dialogPopup", {
        static: true
      }]
    }],
    hueSlider: [{
      type: ViewChild,
      args: ["hueSlider", {
        static: true
      }]
    }],
    alphaSlider: [{
      type: ViewChild,
      args: ["alphaSlider", {
        static: true
      }]
    }],
    handleEsc: [{
      type: HostListener,
      args: ["document:keyup.esc", ["$event"]]
    }],
    handleEnter: [{
      type: HostListener,
      args: ["document:keyup.enter", ["$event"]]
    }]
  });
})();
var NG_DEV_MODE = typeof ngDevMode === "undefined" || !!ngDevMode;
var ColorPickerDirective = class _ColorPickerDirective {
  injector;
  cfr;
  appRef;
  vcRef;
  elRef;
  _service;
  dialog;
  dialogCreated = false;
  ignoreChanges = false;
  cmpRef;
  viewAttachedToAppRef = false;
  colorPicker;
  cpWidth = "230px";
  cpHeight = "auto";
  cpToggle = false;
  cpDisabled = false;
  cpIgnoredElements = [];
  cpFallbackColor = "";
  cpColorMode = "color";
  cpCmykEnabled = false;
  cpOutputFormat = "auto";
  cpAlphaChannel = "enabled";
  cpDisableInput = false;
  cpDialogDisplay = "popup";
  cpSaveClickOutside = true;
  cpCloseClickOutside = true;
  cpUseRootViewContainer = false;
  cpPosition = "auto";
  cpPositionOffset = "0%";
  cpPositionRelativeToArrow = false;
  cpOKButton = false;
  cpOKButtonText = "OK";
  cpOKButtonClass = "cp-ok-button-class";
  cpCancelButton = false;
  cpCancelButtonText = "Cancel";
  cpCancelButtonClass = "cp-cancel-button-class";
  cpEyeDropper = false;
  cpPresetLabel = "Preset colors";
  cpPresetColors;
  cpPresetColorsClass = "cp-preset-colors-class";
  cpMaxPresetColorsLength = 6;
  cpPresetEmptyMessage = "No colors added";
  cpPresetEmptyMessageClass = "preset-empty-message";
  cpAddColorButton = false;
  cpAddColorButtonText = "Add color";
  cpAddColorButtonClass = "cp-add-color-button-class";
  cpRemoveColorButtonClass = "cp-remove-color-button-class";
  cpArrowPosition = 0;
  cpExtraTemplate;
  cpInputChange = new EventEmitter(true);
  cpToggleChange = new EventEmitter(true);
  cpSliderChange = new EventEmitter(true);
  cpSliderDragEnd = new EventEmitter(true);
  cpSliderDragStart = new EventEmitter(true);
  colorPickerOpen = new EventEmitter(true);
  colorPickerClose = new EventEmitter(true);
  colorPickerCancel = new EventEmitter(true);
  colorPickerSelect = new EventEmitter(true);
  colorPickerChange = new EventEmitter(false);
  cpCmykColorChange = new EventEmitter(true);
  cpPresetColorsChange = new EventEmitter(true);
  handleClick() {
    this.inputFocus();
  }
  handleFocus() {
    this.inputFocus();
  }
  handleInput(event) {
    this.inputChange(event);
  }
  constructor(injector, cfr, appRef, vcRef, elRef, _service) {
    this.injector = injector;
    this.cfr = cfr;
    this.appRef = appRef;
    this.vcRef = vcRef;
    this.elRef = elRef;
    this._service = _service;
  }
  ngOnDestroy() {
    if (this.cmpRef != null) {
      if (this.viewAttachedToAppRef) {
        this.appRef.detachView(this.cmpRef.hostView);
      }
      this.cmpRef.destroy();
      this.cmpRef = null;
      this.dialog = null;
    }
  }
  ngOnChanges(changes) {
    if (changes.cpToggle && !this.cpDisabled) {
      if (changes.cpToggle.currentValue) {
        this.openDialog();
      } else if (!changes.cpToggle.currentValue) {
        this.closeDialog();
      }
    }
    if (changes.colorPicker) {
      if (this.dialog && !this.ignoreChanges) {
        if (this.cpDialogDisplay === "inline") {
          this.dialog.setInitialColor(changes.colorPicker.currentValue);
        }
        this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
        if (this.cpUseRootViewContainer && this.cpDialogDisplay !== "inline") {
          this.cmpRef.changeDetectorRef.detectChanges();
        }
      }
      this.ignoreChanges = false;
    }
    if (changes.cpPresetLabel || changes.cpPresetColors) {
      if (this.dialog) {
        this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
      }
    }
  }
  openDialog() {
    if (!this.dialogCreated) {
      let vcRef = this.vcRef;
      this.dialogCreated = true;
      this.viewAttachedToAppRef = false;
      if (this.cpUseRootViewContainer && this.cpDialogDisplay !== "inline") {
        const classOfRootComponent = this.appRef.componentTypes[0];
        const appInstance = this.injector.get(classOfRootComponent, Injector.NULL);
        if (appInstance !== Injector.NULL) {
          vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
          if (NG_DEV_MODE && vcRef === this.vcRef) {
            console.warn("You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef!Please expose it by adding 'public vcRef: ViewContainerRef' to the constructor.");
          }
        } else {
          this.viewAttachedToAppRef = true;
        }
      }
      const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
      if (this.viewAttachedToAppRef) {
        this.cmpRef = compFactory.create(this.injector);
        this.appRef.attachView(this.cmpRef.hostView);
        document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
      } else {
        const injector = Injector.create({
          providers: [],
          // We shouldn't use `vcRef.parentInjector` since it's been deprecated long time ago and might be removed
          // in newer Angular versions: https://github.com/angular/angular/pull/25174.
          parent: vcRef.injector
        });
        this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
      }
      this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.cpEyeDropper, this.elRef, this.cpExtraTemplate);
      this.dialog = this.cmpRef.instance;
      if (this.vcRef !== vcRef) {
        this.cmpRef.changeDetectorRef.detectChanges();
      }
    } else if (this.dialog) {
      this.cmpRef.instance.cpAlphaChannel = this.cpAlphaChannel;
      this.dialog.openDialog(this.colorPicker);
    }
  }
  closeDialog() {
    if (this.dialog && this.cpDialogDisplay === "popup") {
      this.dialog.closeDialog();
    }
  }
  cmykChanged(value) {
    this.cpCmykColorChange.emit(value);
  }
  stateChanged(state) {
    this.cpToggleChange.emit(state);
    if (state) {
      this.colorPickerOpen.emit(this.colorPicker);
    } else {
      this.colorPickerClose.emit(this.colorPicker);
    }
  }
  colorChanged(value, ignore = true) {
    this.ignoreChanges = ignore;
    this.colorPickerChange.emit(value);
  }
  colorSelected(value) {
    this.colorPickerSelect.emit(value);
  }
  colorCanceled() {
    this.colorPickerCancel.emit();
  }
  inputFocus() {
    const element = this.elRef.nativeElement;
    const ignored = this.cpIgnoredElements.filter((item) => item === element);
    if (!this.cpDisabled && !ignored.length) {
      if (typeof document !== "undefined" && element === document.activeElement) {
        this.openDialog();
      } else if (!this.dialog || !this.dialog.show) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    }
  }
  inputChange(event) {
    if (this.dialog) {
      this.dialog.setColorFromString(event.target.value, true);
    } else {
      this.colorPicker = event.target.value;
      this.colorPickerChange.emit(this.colorPicker);
    }
  }
  inputChanged(event) {
    this.cpInputChange.emit(event);
  }
  sliderChanged(event) {
    this.cpSliderChange.emit(event);
  }
  sliderDragEnd(event) {
    this.cpSliderDragEnd.emit(event);
  }
  sliderDragStart(event) {
    this.cpSliderDragStart.emit(event);
  }
  presetColorsChanged(value) {
    this.cpPresetColorsChange.emit(value);
  }
  static \u0275fac = function ColorPickerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ApplicationRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ColorPickerService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ColorPickerDirective,
    selectors: [["", "colorPicker", ""]],
    hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ColorPickerDirective_click_HostBindingHandler() {
          return ctx.handleClick();
        })("focus", function ColorPickerDirective_focus_HostBindingHandler() {
          return ctx.handleFocus();
        })("input", function ColorPickerDirective_input_HostBindingHandler($event) {
          return ctx.handleInput($event);
        });
      }
    },
    inputs: {
      colorPicker: "colorPicker",
      cpWidth: "cpWidth",
      cpHeight: "cpHeight",
      cpToggle: "cpToggle",
      cpDisabled: "cpDisabled",
      cpIgnoredElements: "cpIgnoredElements",
      cpFallbackColor: "cpFallbackColor",
      cpColorMode: "cpColorMode",
      cpCmykEnabled: "cpCmykEnabled",
      cpOutputFormat: "cpOutputFormat",
      cpAlphaChannel: "cpAlphaChannel",
      cpDisableInput: "cpDisableInput",
      cpDialogDisplay: "cpDialogDisplay",
      cpSaveClickOutside: "cpSaveClickOutside",
      cpCloseClickOutside: "cpCloseClickOutside",
      cpUseRootViewContainer: "cpUseRootViewContainer",
      cpPosition: "cpPosition",
      cpPositionOffset: "cpPositionOffset",
      cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
      cpOKButton: "cpOKButton",
      cpOKButtonText: "cpOKButtonText",
      cpOKButtonClass: "cpOKButtonClass",
      cpCancelButton: "cpCancelButton",
      cpCancelButtonText: "cpCancelButtonText",
      cpCancelButtonClass: "cpCancelButtonClass",
      cpEyeDropper: "cpEyeDropper",
      cpPresetLabel: "cpPresetLabel",
      cpPresetColors: "cpPresetColors",
      cpPresetColorsClass: "cpPresetColorsClass",
      cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
      cpPresetEmptyMessage: "cpPresetEmptyMessage",
      cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
      cpAddColorButton: "cpAddColorButton",
      cpAddColorButtonText: "cpAddColorButtonText",
      cpAddColorButtonClass: "cpAddColorButtonClass",
      cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
      cpArrowPosition: "cpArrowPosition",
      cpExtraTemplate: "cpExtraTemplate"
    },
    outputs: {
      cpInputChange: "cpInputChange",
      cpToggleChange: "cpToggleChange",
      cpSliderChange: "cpSliderChange",
      cpSliderDragEnd: "cpSliderDragEnd",
      cpSliderDragStart: "cpSliderDragStart",
      colorPickerOpen: "colorPickerOpen",
      colorPickerClose: "colorPickerClose",
      colorPickerCancel: "colorPickerCancel",
      colorPickerSelect: "colorPickerSelect",
      colorPickerChange: "colorPickerChange",
      cpCmykColorChange: "cpCmykColorChange",
      cpPresetColorsChange: "cpPresetColorsChange"
    },
    exportAs: ["ngxColorPicker"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerDirective, [{
    type: Directive,
    args: [{
      selector: "[colorPicker]",
      exportAs: "ngxColorPicker"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: ApplicationRef
  }, {
    type: ViewContainerRef
  }, {
    type: ElementRef
  }, {
    type: ColorPickerService
  }], {
    colorPicker: [{
      type: Input
    }],
    cpWidth: [{
      type: Input
    }],
    cpHeight: [{
      type: Input
    }],
    cpToggle: [{
      type: Input
    }],
    cpDisabled: [{
      type: Input
    }],
    cpIgnoredElements: [{
      type: Input
    }],
    cpFallbackColor: [{
      type: Input
    }],
    cpColorMode: [{
      type: Input
    }],
    cpCmykEnabled: [{
      type: Input
    }],
    cpOutputFormat: [{
      type: Input
    }],
    cpAlphaChannel: [{
      type: Input
    }],
    cpDisableInput: [{
      type: Input
    }],
    cpDialogDisplay: [{
      type: Input
    }],
    cpSaveClickOutside: [{
      type: Input
    }],
    cpCloseClickOutside: [{
      type: Input
    }],
    cpUseRootViewContainer: [{
      type: Input
    }],
    cpPosition: [{
      type: Input
    }],
    cpPositionOffset: [{
      type: Input
    }],
    cpPositionRelativeToArrow: [{
      type: Input
    }],
    cpOKButton: [{
      type: Input
    }],
    cpOKButtonText: [{
      type: Input
    }],
    cpOKButtonClass: [{
      type: Input
    }],
    cpCancelButton: [{
      type: Input
    }],
    cpCancelButtonText: [{
      type: Input
    }],
    cpCancelButtonClass: [{
      type: Input
    }],
    cpEyeDropper: [{
      type: Input
    }],
    cpPresetLabel: [{
      type: Input
    }],
    cpPresetColors: [{
      type: Input
    }],
    cpPresetColorsClass: [{
      type: Input
    }],
    cpMaxPresetColorsLength: [{
      type: Input
    }],
    cpPresetEmptyMessage: [{
      type: Input
    }],
    cpPresetEmptyMessageClass: [{
      type: Input
    }],
    cpAddColorButton: [{
      type: Input
    }],
    cpAddColorButtonText: [{
      type: Input
    }],
    cpAddColorButtonClass: [{
      type: Input
    }],
    cpRemoveColorButtonClass: [{
      type: Input
    }],
    cpArrowPosition: [{
      type: Input
    }],
    cpExtraTemplate: [{
      type: Input
    }],
    cpInputChange: [{
      type: Output
    }],
    cpToggleChange: [{
      type: Output
    }],
    cpSliderChange: [{
      type: Output
    }],
    cpSliderDragEnd: [{
      type: Output
    }],
    cpSliderDragStart: [{
      type: Output
    }],
    colorPickerOpen: [{
      type: Output
    }],
    colorPickerClose: [{
      type: Output
    }],
    colorPickerCancel: [{
      type: Output
    }],
    colorPickerSelect: [{
      type: Output
    }],
    colorPickerChange: [{
      type: Output
    }],
    cpCmykColorChange: [{
      type: Output
    }],
    cpPresetColorsChange: [{
      type: Output
    }],
    handleClick: [{
      type: HostListener,
      args: ["click"]
    }],
    handleFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    handleInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var ColorPickerModule = class _ColorPickerModule {
  static \u0275fac = function ColorPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ColorPickerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ColorPickerDirective],
      declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective]
    }]
  }], null, null);
})();

// src/app/_pipes/reading-direction.pipe.ts
var ReadingDirectionPipe = class _ReadingDirectionPipe {
  transform(value) {
    const v = parseInt(value + "", 10);
    switch (v) {
      case ReadingDirection.LeftToRight:
        return translate("preferences.left-to-right");
      case ReadingDirection.RightToLeft:
        return translate("preferences.right-to-left");
    }
  }
  static {
    this.\u0275fac = function ReadingDirectionPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReadingDirectionPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "readingDirection", type: _ReadingDirectionPipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/scaling-option.pipe.ts
var ScalingOptionPipe = class _ScalingOptionPipe {
  transform(value) {
    const v = parseInt(value + "", 10);
    switch (v) {
      case ScalingOption.Automatic:
        return translate("preferences.automatic");
      case ScalingOption.FitToHeight:
        return translate("preferences.fit-to-height");
      case ScalingOption.FitToWidth:
        return translate("preferences.fit-to-width");
      case ScalingOption.Original:
        return translate("preferences.original");
    }
  }
  static {
    this.\u0275fac = function ScalingOptionPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScalingOptionPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "scalingOption", type: _ScalingOptionPipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/page-split-option.pipe.ts
var PageSplitOptionPipe = class _PageSplitOptionPipe {
  transform(value) {
    const v = parseInt(value + "", 10);
    switch (v) {
      case PageSplitOption.FitSplit:
        return translate("preferences.fit-to-screen");
      case PageSplitOption.NoSplit:
        return translate("preferences.no-split");
      case PageSplitOption.SplitLeftToRight:
        return translate("preferences.split-left-to-right");
      case PageSplitOption.SplitRightToLeft:
        return translate("preferences.split-right-to-left");
    }
  }
  static {
    this.\u0275fac = function PageSplitOptionPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageSplitOptionPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "pageSplitOption", type: _PageSplitOptionPipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/reading-mode.pipe.ts
var ReaderModePipe = class _ReaderModePipe {
  transform(value) {
    const v = parseInt(value + "", 10);
    switch (v) {
      case ReaderMode.UpDown:
        return translate("preferences.up-to-down");
      case ReaderMode.Webtoon:
        return translate("preferences.webtoon");
      case ReaderMode.LeftRight:
        return translate("preferences.left-to-right");
    }
  }
  static {
    this.\u0275fac = function ReaderModePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReaderModePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "readerMode", type: _ReaderModePipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/layout-mode.pipe.ts
var LayoutModePipe = class _LayoutModePipe {
  transform(value) {
    const v = parseInt(value + "", 10);
    switch (v) {
      case LayoutMode.Single:
        return translate("preferences.single");
      case LayoutMode.Double:
        return translate("preferences.double");
      case LayoutMode.DoubleReversed:
        return translate("preferences.double-manga");
      case LayoutMode.DoubleNoCover:
        return translate("preferences.double-no-cover");
    }
  }
  static {
    this.\u0275fac = function LayoutModePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LayoutModePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "layoutMode", type: _LayoutModePipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/writing-style.pipe.ts
var WritingStylePipe = class _WritingStylePipe {
  transform(value) {
    const v = parseInt(value + "", 10);
    switch (v) {
      case WritingStyle.Horizontal:
        return translate("preferences.horizontal");
      case WritingStyle.Vertical:
        return translate("preferences.vertical");
    }
  }
  static {
    this.\u0275fac = function WritingStylePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WritingStylePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "writingStyle", type: _WritingStylePipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/book-page-layout-mode.pipe.ts
var BookPageLayoutModePipe = class _BookPageLayoutModePipe {
  transform(value) {
    const v = parseInt(value + "", 10);
    switch (v) {
      case BookPageLayoutMode.Column1:
        return translate("preferences.1-column");
      case BookPageLayoutMode.Column2:
        return translate("preferences.2-column");
      case BookPageLayoutMode.Default:
        return translate("preferences.scroll");
    }
  }
  static {
    this.\u0275fac = function BookPageLayoutModePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookPageLayoutModePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "bookPageLayoutMode", type: _BookPageLayoutModePipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/pdf-spread-mode.pipe.ts
var PdfSpreadModePipe = class _PdfSpreadModePipe {
  transform(value) {
    const v = parseInt(value + "", 10);
    switch (v) {
      case PdfSpreadMode.None:
        return translate("preferences.pdf-none");
      case PdfSpreadMode.Odd:
        return translate("preferences.pdf-odd");
      case PdfSpreadMode.Even:
        return translate("preferences.pdf-even");
    }
  }
  static {
    this.\u0275fac = function PdfSpreadModePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PdfSpreadModePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "pdfSpreadMode", type: _PdfSpreadModePipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/pdf-theme.pipe.ts
var PdfThemePipe = class _PdfThemePipe {
  transform(value) {
    const v = parseInt(value + "", 10);
    switch (v) {
      case PdfTheme.Dark:
        return translate("preferences.pdf-dark");
      case PdfTheme.Light:
        return translate("preferences.pdf-light");
    }
  }
  static {
    this.\u0275fac = function PdfThemePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PdfThemePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "pdfTheme", type: _PdfThemePipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/pdf-scroll-mode.pipe.ts
var PdfScrollModePipe = class _PdfScrollModePipe {
  transform(value) {
    const v = parseInt(value + "", 10);
    switch (v) {
      case PdfScrollMode.Wrapped:
        return translate("preferences.pdf-multiple");
      case PdfScrollMode.Page:
        return translate("preferences.pdf-page");
      case PdfScrollMode.Horizontal:
        return translate("preferences.pdf-horizontal");
      case PdfScrollMode.Vertical:
        return translate("preferences.pdf-vertical");
    }
  }
  static {
    this.\u0275fac = function PdfScrollModePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PdfScrollModePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "pdfScrollMode", type: _PdfScrollModePipe, pure: true, standalone: true });
  }
};

// src/app/user-settings/manga-user-preferences/manage-user-preferences.component.ts
var _forTrack0 = ($index, $item) => $item.renderName;
var _c02 = () => ({ size: "100" });
var _c12 = (a0) => ({ "background-color": a0 });
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "titlecase");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.Locale), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2.fileName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 3, opt_r2.renderName), " (", \u0275\u0275pipeBind2(3, 5, opt_r2.translationCompletion, "1.0-1"), "%)");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 12);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_8_For_2_Template, 4, 8, "option", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.locales);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 15);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 16);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 17);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 18);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 19);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_Conditional_31_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 21);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_Conditional_31_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_Conditional_31_Conditional_3_ng_template_1_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("title", t_r3("anilist-scrobbling-label"))("subtitle", t_r3("anilist-scrobbling-tooltip"));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_Conditional_31_Conditional_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 22);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_Conditional_31_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-switch", 6);
    \u0275\u0275template(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_Conditional_31_Conditional_5_ng_template_1_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("title", t_r3("want-to-read-sync-label"))("subtitle", t_r3("want-to-read-sync-tooltip"));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275template(3, ManageUserPreferencesComponent_ng_container_0_Conditional_3_Conditional_31_Conditional_3_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275template(5, ManageUserPreferencesComponent_ng_container_0_Conditional_3_Conditional_31_Conditional_5_Template, 3, 2, "app-setting-switch", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 8);
  }
  if (rf & 2) {
    let tmp_52_0;
    let tmp_53_0;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("kavitaplus-settings-title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_52_0 = ctx_r0.settingsForm.get("aniListScrobblingEnabled")) ? 3 : -1, tmp_52_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_53_0 = ctx_r0.settingsForm.get("wantToReadSync")) ? 5 : -1, tmp_53_0);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "readingDirection");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("readingDirection").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "readingDirection");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r4.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 23);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_40_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.readingDirections);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "scalingOption");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("scalingOption").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_46_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "scalingOption");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    \u0275\u0275property("value", opt_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r5.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 24);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_46_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.scalingOptions);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "pageSplitOption");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("pageSplitOption").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_52_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "pageSplitOption");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275property("value", opt_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r6.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 25);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_52_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pageSplitOptions);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "readerMode");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("readerMode").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_58_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "readerMode");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    \u0275\u0275property("value", opt_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r7.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 26);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_58_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.readerModes);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "layoutMode");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("layoutMode").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_64_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "layoutMode");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    \u0275\u0275property("value", opt_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r8.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 27);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_64_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.layoutModes);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c12, ctx_r0.user.preferences.backgroundColor));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.user.preferences.backgroundColor.toUpperCase());
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 31);
    \u0275\u0275listener("colorPickerChange", function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_70_Template_input_colorPickerChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.handleBackgroundColorChange($event));
    });
    \u0275\u0275twoWayListener("colorPickerChange", function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_70_Template_input_colorPickerChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.preferences.backgroundColor, $event) || (ctx_r0.user.preferences.backgroundColor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r0.user.preferences.backgroundColor);
    \u0275\u0275property("value", ctx_r0.user.preferences.backgroundColor)("cpAlphaChannel", "disabled");
    \u0275\u0275twoWayProperty("colorPicker", ctx_r0.user.preferences.backgroundColor);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 32);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 33);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 34);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 35);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 36);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 37);
    \u0275\u0275elementEnd();
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "readingDirection");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("bookReaderReadingDirection").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_104_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "readingDirection");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("value", opt_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r10.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 38);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_104_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.readingDirections);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "titlecase");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("bookReaderFontFamily").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_110_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    \u0275\u0275property("value", opt_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r11));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 39);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_110_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.fontFamilies);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "writingStyle");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("bookReaderWritingStyle").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_116_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "writingStyle");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    \u0275\u0275property("value", opt_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r12.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 40);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_116_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.bookWritingStyles);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "bookPageLayoutMode");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("bookReaderLayoutMode").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_122_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "bookPageLayoutMode");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    \u0275\u0275property("value", opt_r13.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r13.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 41);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_122_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.bookLayoutModes);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.settingsForm.get("bookReaderThemeName").value, " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_128_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    \u0275\u0275property("value", opt_r14.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r14.name));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 42);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_128_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.bookColorThemesTranslated);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_51_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_51_0 = ctx_r0.settingsForm.get("bookReaderFontSize")) == null ? null : tmp_51_0.value) + "%");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275element(2, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_51_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_51_0 = ctx_r0.settingsForm.get("bookReaderFontSize")) == null ? null : tmp_51_0.value) + "%");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_51_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_51_0 = ctx_r0.settingsForm.get("bookReaderLineSpacing")) == null ? null : tmp_51_0.value) + "%");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275element(2, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_51_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_51_0 = ctx_r0.settingsForm.get("bookReaderLineSpacing")) == null ? null : tmp_51_0.value) + "%");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_51_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_51_0 = ctx_r0.settingsForm.get("bookReaderMargin")) == null ? null : tmp_51_0.value) + "%");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275element(2, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_51_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_51_0 = ctx_r0.settingsForm.get("bookReaderMargin")) == null ? null : tmp_51_0.value) + "%");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "pdfSpreadMode");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("pdfSpreadMode").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_156_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "pdfSpreadMode");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r15 = ctx.$implicit;
    \u0275\u0275property("value", opt_r15.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r15.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 50);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_156_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pdfSpreadModes);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "pdfTheme");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("pdfTheme").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_162_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "pdfTheme");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r16 = ctx.$implicit;
    \u0275\u0275property("value", opt_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r16.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 51);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_162_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pdfThemes);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "pdfScrollMode");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.settingsForm.get("pdfScrollMode").value), " ");
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_168_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "pdfScrollMode");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r17 = ctx.$implicit;
    \u0275\u0275property("value", opt_r17.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r17.value));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 52);
    \u0275\u0275repeaterCreate(1, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_168_For_2_Template, 3, 4, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pdfScrollModes);
  }
}
function ManageUserPreferencesComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 4)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(3);
    \u0275\u0275elementStart(4, "div", 5)(5, "app-setting-item", 6);
    \u0275\u0275template(6, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_6_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_8_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "app-setting-switch", 6);
    \u0275\u0275template(12, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_12_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 5)(15, "app-setting-switch", 6);
    \u0275\u0275template(16, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_16_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 5)(19, "app-setting-switch", 6);
    \u0275\u0275template(20, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_20_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 5)(23, "app-setting-switch", 6);
    \u0275\u0275template(24, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_24_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 7)(27, "app-setting-switch", 6);
    \u0275\u0275template(28, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_28_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(30, "div", 8);
    \u0275\u0275template(31, ManageUserPreferencesComponent_ng_container_0_Conditional_3_Conditional_31_Template, 7, 3);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275elementStart(33, "h4", 9);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(35);
    \u0275\u0275elementStart(36, "div", 5)(37, "app-setting-item", 6);
    \u0275\u0275template(38, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_38_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(40, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_40_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 5)(43, "app-setting-item", 6);
    \u0275\u0275template(44, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_44_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(46, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_46_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 5)(49, "app-setting-item", 6);
    \u0275\u0275template(50, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_50_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(52, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_52_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 5)(55, "app-setting-item", 6);
    \u0275\u0275template(56, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_56_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(58, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_58_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 5)(61, "app-setting-item", 6);
    \u0275\u0275template(62, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_62_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(64, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_64_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 5)(67, "app-setting-item", 6);
    \u0275\u0275template(68, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_68_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(70, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_70_Template, 1, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 5)(73, "app-setting-switch", 6);
    \u0275\u0275template(74, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_74_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 5)(77, "app-setting-switch", 6);
    \u0275\u0275template(78, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_78_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 5)(81, "app-setting-switch", 6);
    \u0275\u0275template(82, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_82_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 5)(85, "app-setting-switch", 6);
    \u0275\u0275template(86, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_86_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(88, "div", 8);
    \u0275\u0275elementStart(89, "h4", 10);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(91);
    \u0275\u0275elementStart(92, "div", 5)(93, "app-setting-switch", 6);
    \u0275\u0275template(94, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_94_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 5)(97, "app-setting-switch", 6);
    \u0275\u0275template(98, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_98_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 5)(101, "app-setting-item", 6);
    \u0275\u0275template(102, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_102_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(104, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_104_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 5)(107, "app-setting-item", 6);
    \u0275\u0275template(108, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_108_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(110, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_110_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 5)(113, "app-setting-item", 6);
    \u0275\u0275template(114, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_114_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(116, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_116_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 5)(119, "app-setting-item", 6);
    \u0275\u0275template(120, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_120_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(122, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_122_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "div", 5)(125, "app-setting-item", 6);
    \u0275\u0275template(126, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_126_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(128, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_128_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div", 5)(131, "app-setting-item", 6);
    \u0275\u0275template(132, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_132_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(134, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_134_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "div", 5)(137, "app-setting-item", 6);
    \u0275\u0275template(138, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_138_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(140, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_140_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 5)(143, "app-setting-item", 6);
    \u0275\u0275template(144, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_144_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(146, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_146_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(148, "div", 8);
    \u0275\u0275elementStart(149, "h4", 11);
    \u0275\u0275text(150);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(151);
    \u0275\u0275elementStart(152, "div", 5)(153, "app-setting-item", 6);
    \u0275\u0275template(154, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_154_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(156, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_156_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "div", 5)(159, "app-setting-item", 6);
    \u0275\u0275template(160, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_160_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(162, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_162_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div", 5)(165, "app-setting-item", 6);
    \u0275\u0275template(166, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_166_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(168, ManageUserPreferencesComponent_ng_container_0_Conditional_3_ng_template_168_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.settingsForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("global-settings-title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("locale-label"))("subtitle", t_r3("locale-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("blur-unread-summaries-label"))("subtitle", t_r3("blur-unread-summaries-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("prompt-on-download-label"))("subtitle", t_r3("prompt-on-download-tooltip", \u0275\u0275pureFunction0(66, _c02)));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("disable-animations-label"))("subtitle", t_r3("disable-animations-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("collapse-series-relationships-label"))("subtitle", t_r3("collapse-series-relationships-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("share-series-reviews-label"))("subtitle", t_r3("share-series-reviews-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(32, 64, ctx_r0.licenseService.hasValidLicense$) ? 31 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("image-reader-settings-title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("reading-direction-label"))("subtitle", t_r3("reading-direction-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("scaling-option-label"))("subtitle", t_r3("scaling-option-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("page-splitting-label"))("subtitle", t_r3("page-splitting-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("reading-mode-label"))("subtitle", t_r3("reading-mode-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("layout-mode-label"))("subtitle", t_r3("layout-mode-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("background-color-label"))("subtitle", t_r3("background-color-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("auto-close-menu-label"))("subtitle", t_r3("auto-close-menu-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("show-screen-hints-label"))("subtitle", t_r3("show-screen-hints-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("emulate-comic-book-label"))("subtitle", t_r3("emulate-comic-book-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("swipe-to-paginate-label"))("subtitle", t_r3("swipe-to-paginate-tooltip"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("book-reader-settings-title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("tap-to-paginate-label"))("subtitle", t_r3("tap-to-paginate-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("immersive-mode-label"))("subtitle", t_r3("immersive-mode-tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("reading-direction-label"))("subtitle", t_r3("reading-direction-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("font-family-label"))("subtitle", t_r3("font-family-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("writing-style-label"))("subtitle", t_r3("writing-style-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("layout-mode-book-label"))("subtitle", t_r3("layout-mode-book-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("color-theme-book-label"))("subtitle", t_r3("color-theme-book-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("font-size-book-label"))("subtitle", t_r3("font-size-book-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("line-height-book-label"))("subtitle", t_r3("line-height-book-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("margin-book-label"))("subtitle", t_r3("margin-book-tooltip"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("pdf-reader-settings-title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("pdf-spread-mode-label"))("subtitle", t_r3("pdf-spread-mode-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("pdf-theme-label"))("subtitle", t_r3("pdf-theme-tooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("pdf-scroll-mode-label"))("subtitle", t_r3("pdf-scroll-mode-tooltip"));
  }
}
function ManageUserPreferencesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ManageUserPreferencesComponent_ng_container_0_Conditional_3_Template, 170, 67, "form", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("pref-description"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.user ? 3 : -1);
  }
}
var ManageUserPreferencesComponent = class _ManageUserPreferencesComponent {
  get Locale() {
    if (!this.settingsForm.get("locale"))
      return "English";
    return this.locales.filter((l) => l.fileName === this.settingsForm.get("locale").value)[0].renderName;
  }
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.accountService = inject(AccountService);
    this.bookService = inject(BookService);
    this.titleService = inject(Title);
    this.router = inject(Router);
    this.cdRef = inject(ChangeDetectorRef);
    this.localizationService = inject(LocalizationService);
    this.licenseService = inject(LicenseService);
    this.readingDirections = readingDirections;
    this.scalingOptions = scalingOptions;
    this.pageSplitOptions = pageSplitOptions;
    this.readerModes = readingModes;
    this.layoutModes = layoutModes;
    this.bookWritingStyles = bookWritingStyles;
    this.bookLayoutModes = bookLayoutModes;
    this.pdfSpreadModes = pdfSpreadModes;
    this.pdfThemes = pdfThemes;
    this.pdfScrollModes = pdfScrollModes;
    this.bookColorThemesTranslated = bookColorThemes.map((o) => {
      const d = __spreadValues({}, o);
      d.name = translate("theme." + d.translationKey);
      return d;
    });
    this.fontFamilies = [];
    this.locales = [];
    this.settingsForm = new FormGroup({});
    this.user = void 0;
    this.fontFamilies = this.bookService.getFontFamilies().map((f) => f.title);
    this.cdRef.markForCheck();
    this.localizationService.getLocales().subscribe((res) => {
      this.locales = res;
      this.cdRef.markForCheck();
    });
  }
  ngOnInit() {
    this.titleService.setTitle("Kavita - User Preferences");
    forkJoin({
      user: this.accountService.currentUser$.pipe(take(1)),
      pref: this.accountService.getPreferences()
    }).subscribe((results) => {
      if (results.user === void 0) {
        this.router.navigateByUrl("/login");
        return;
      }
      this.user = results.user;
      this.user.preferences = results.pref;
      if (this.fontFamilies.indexOf(this.user.preferences.bookReaderFontFamily) < 0) {
        this.user.preferences.bookReaderFontFamily = "default";
      }
      this.settingsForm.addControl("readingDirection", new FormControl(this.user.preferences.readingDirection, []));
      this.settingsForm.addControl("scalingOption", new FormControl(this.user.preferences.scalingOption, []));
      this.settingsForm.addControl("pageSplitOption", new FormControl(this.user.preferences.pageSplitOption, []));
      this.settingsForm.addControl("autoCloseMenu", new FormControl(this.user.preferences.autoCloseMenu, []));
      this.settingsForm.addControl("showScreenHints", new FormControl(this.user.preferences.showScreenHints, []));
      this.settingsForm.addControl("readerMode", new FormControl(this.user.preferences.readerMode, []));
      this.settingsForm.addControl("layoutMode", new FormControl(this.user.preferences.layoutMode, []));
      this.settingsForm.addControl("emulateBook", new FormControl(this.user.preferences.emulateBook, []));
      this.settingsForm.addControl("swipeToPaginate", new FormControl(this.user.preferences.swipeToPaginate, []));
      this.settingsForm.addControl("backgroundColor", new FormControl(this.user.preferences.backgroundColor, []));
      this.settingsForm.addControl("bookReaderFontFamily", new FormControl(this.user.preferences.bookReaderFontFamily, []));
      this.settingsForm.addControl("bookReaderFontSize", new FormControl(this.user.preferences.bookReaderFontSize, []));
      this.settingsForm.addControl("bookReaderLineSpacing", new FormControl(this.user.preferences.bookReaderLineSpacing, []));
      this.settingsForm.addControl("bookReaderMargin", new FormControl(this.user.preferences.bookReaderMargin, []));
      this.settingsForm.addControl("bookReaderReadingDirection", new FormControl(this.user.preferences.bookReaderReadingDirection, []));
      this.settingsForm.addControl("bookReaderWritingStyle", new FormControl(this.user.preferences.bookReaderWritingStyle, []));
      this.settingsForm.addControl("bookReaderTapToPaginate", new FormControl(this.user.preferences.bookReaderTapToPaginate, []));
      this.settingsForm.addControl("bookReaderLayoutMode", new FormControl(this.user.preferences.bookReaderLayoutMode || BookPageLayoutMode.Default, []));
      this.settingsForm.addControl("bookReaderThemeName", new FormControl(this.user?.preferences.bookReaderThemeName || bookColorThemes[0].name, []));
      this.settingsForm.addControl("bookReaderImmersiveMode", new FormControl(this.user?.preferences.bookReaderImmersiveMode, []));
      this.settingsForm.addControl("pdfTheme", new FormControl(this.user?.preferences.pdfTheme || PdfTheme.Dark, []));
      this.settingsForm.addControl("pdfScrollMode", new FormControl(this.user?.preferences.pdfScrollMode || PdfScrollMode.Vertical, []));
      this.settingsForm.addControl("pdfSpreadMode", new FormControl(this.user?.preferences.pdfSpreadMode || PdfSpreadMode.None, []));
      this.settingsForm.addControl("theme", new FormControl(this.user.preferences.theme, []));
      this.settingsForm.addControl("globalPageLayoutMode", new FormControl(this.user.preferences.globalPageLayoutMode, []));
      this.settingsForm.addControl("blurUnreadSummaries", new FormControl(this.user.preferences.blurUnreadSummaries, []));
      this.settingsForm.addControl("promptForDownloadSize", new FormControl(this.user.preferences.promptForDownloadSize, []));
      this.settingsForm.addControl("noTransitions", new FormControl(this.user.preferences.noTransitions, []));
      this.settingsForm.addControl("collapseSeriesRelationships", new FormControl(this.user.preferences.collapseSeriesRelationships, []));
      this.settingsForm.addControl("shareReviews", new FormControl(this.user.preferences.shareReviews, []));
      this.settingsForm.addControl("locale", new FormControl(this.user.preferences.locale || "en", []));
      this.settingsForm.addControl("aniListScrobblingEnabled", new FormControl(this.user.preferences.aniListScrobblingEnabled || false, []));
      this.settingsForm.addControl("wantToReadSync", new FormControl(this.user.preferences.wantToReadSync || false, []));
      this.settingsForm.valueChanges.pipe(distinctUntilChanged(), debounceTime(100), filter((_) => this.settingsForm.valid), takeUntilDestroyed(this.destroyRef), switchMap((_) => {
        const data = this.packSettings();
        return this.accountService.updatePreferences(data);
      }), tap((prefs) => {
        if (this.user) {
          this.user.preferences = __spreadValues({}, prefs);
          this.cdRef.markForCheck();
        }
      })).subscribe();
      this.cdRef.markForCheck();
    });
    this.settingsForm.get("bookReaderImmersiveMode")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((mode) => {
      if (mode) {
        this.settingsForm.get("bookReaderTapToPaginate")?.setValue(true);
        this.cdRef.markForCheck();
      }
    });
    this.cdRef.markForCheck();
  }
  reset() {
    if (!this.user)
      return;
    this.settingsForm.get("readingDirection")?.setValue(this.user.preferences.readingDirection, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("scalingOption")?.setValue(this.user.preferences.scalingOption, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("pageSplitOption")?.setValue(this.user.preferences.pageSplitOption, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("autoCloseMenu")?.setValue(this.user.preferences.autoCloseMenu, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("showScreenHints")?.setValue(this.user.preferences.showScreenHints, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("readerMode")?.setValue(this.user.preferences.readerMode, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("layoutMode")?.setValue(this.user.preferences.layoutMode, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("emulateBook")?.setValue(this.user.preferences.emulateBook, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("swipeToPaginate")?.setValue(this.user.preferences.swipeToPaginate, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("backgroundColor")?.setValue(this.user.preferences.backgroundColor, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookReaderFontFamily")?.setValue(this.user.preferences.bookReaderFontFamily, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookReaderFontSize")?.setValue(this.user.preferences.bookReaderFontSize, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookReaderLineSpacing")?.setValue(this.user.preferences.bookReaderLineSpacing, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookReaderMargin")?.setValue(this.user.preferences.bookReaderMargin, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookReaderReadingDirection")?.setValue(this.user.preferences.bookReaderReadingDirection, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookReaderWritingStyle")?.setValue(this.user.preferences.bookReaderWritingStyle, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookReaderTapToPaginate")?.setValue(this.user.preferences.bookReaderTapToPaginate, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookReaderLayoutMode")?.setValue(this.user.preferences.bookReaderLayoutMode || BookPageLayoutMode.Default, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookReaderThemeName")?.setValue(this.user?.preferences.bookReaderThemeName || bookColorThemes[0].name, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("bookReaderImmersiveMode")?.setValue(this.user?.preferences.bookReaderImmersiveMode, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("pdfTheme")?.setValue(this.user?.preferences.pdfTheme || PdfTheme.Dark, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("pdfScrollMode")?.setValue(this.user?.preferences.pdfScrollMode || PdfScrollMode.Vertical, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("pdfSpreadMode")?.setValue(this.user?.preferences.pdfSpreadMode || PdfSpreadMode.None, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("theme")?.setValue(this.user.preferences.theme, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("globalPageLayoutMode")?.setValue(this.user.preferences.globalPageLayoutMode, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("blurUnreadSummaries")?.setValue(this.user.preferences.blurUnreadSummaries, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("promptForDownloadSize")?.setValue(this.user.preferences.promptForDownloadSize, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("noTransitions")?.setValue(this.user.preferences.noTransitions, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("collapseSeriesRelationships")?.setValue(this.user.preferences.collapseSeriesRelationships, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("shareReviews")?.setValue(this.user.preferences.shareReviews, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("locale")?.setValue(this.user.preferences.locale || "en", { onlySelf: true, emitEvent: false });
    this.settingsForm.get("aniListScrobblingEnabled")?.setValue(this.user.preferences.aniListScrobblingEnabled || false, { onlySelf: true, emitEvent: false });
    this.settingsForm.get("wantToReadSync")?.setValue(this.user.preferences.wantToReadSync || false, { onlySelf: true, emitEvent: false });
  }
  packSettings() {
    const modelSettings = this.settingsForm.value;
    return {
      readingDirection: parseInt(modelSettings.readingDirection, 10),
      scalingOption: parseInt(modelSettings.scalingOption, 10),
      pageSplitOption: parseInt(modelSettings.pageSplitOption, 10),
      autoCloseMenu: modelSettings.autoCloseMenu,
      readerMode: parseInt(modelSettings.readerMode, 10),
      layoutMode: parseInt(modelSettings.layoutMode, 10),
      showScreenHints: modelSettings.showScreenHints,
      backgroundColor: modelSettings.backgroundColor || "#000",
      bookReaderFontFamily: modelSettings.bookReaderFontFamily,
      bookReaderLineSpacing: modelSettings.bookReaderLineSpacing,
      bookReaderFontSize: modelSettings.bookReaderFontSize,
      bookReaderMargin: modelSettings.bookReaderMargin,
      bookReaderTapToPaginate: modelSettings.bookReaderTapToPaginate,
      bookReaderReadingDirection: parseInt(modelSettings.bookReaderReadingDirection, 10),
      bookReaderWritingStyle: parseInt(modelSettings.bookReaderWritingStyle, 10),
      bookReaderLayoutMode: parseInt(modelSettings.bookReaderLayoutMode, 10),
      bookReaderThemeName: modelSettings.bookReaderThemeName,
      theme: modelSettings.theme,
      bookReaderImmersiveMode: modelSettings.bookReaderImmersiveMode,
      globalPageLayoutMode: parseInt(modelSettings.globalPageLayoutMode, 10),
      blurUnreadSummaries: modelSettings.blurUnreadSummaries,
      promptForDownloadSize: modelSettings.promptForDownloadSize,
      noTransitions: modelSettings.noTransitions,
      emulateBook: modelSettings.emulateBook,
      swipeToPaginate: modelSettings.swipeToPaginate,
      collapseSeriesRelationships: modelSettings.collapseSeriesRelationships,
      shareReviews: modelSettings.shareReviews,
      locale: modelSettings.locale || "en",
      pdfTheme: parseInt(modelSettings.pdfTheme, 10),
      pdfScrollMode: parseInt(modelSettings.pdfScrollMode, 10),
      pdfSpreadMode: parseInt(modelSettings.pdfSpreadMode, 10),
      aniListScrobblingEnabled: modelSettings.aniListScrobblingEnabled,
      wantToReadSync: modelSettings.wantToReadSync
    };
  }
  handleBackgroundColorChange(color) {
    this.settingsForm.markAsDirty();
    this.settingsForm.markAsTouched();
    if (this.user?.preferences) {
      this.user.preferences.backgroundColor = color;
    }
    this.settingsForm.get("backgroundColor")?.setValue(color);
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function ManageUserPreferencesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageUserPreferencesComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageUserPreferencesComponent, selectors: [["app-manga-user-preferences"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["view", ""], ["edit", ""], ["switch", ""], [4, "transloco", "translocoRead"], [3, "formGroup"], [1, "row", "g-0", "mt-4", "mb-4"], [3, "title", "subtitle"], [1, "row", "g-0", "mt-2"], [1, "setting-section-break"], ["id", "image-reader-heading", 1, "mt-3"], ["id", "book-reader-heading", 1, "mt-3"], ["id", "pdf-reader-heading", 1, "mt-3"], ["aria-describedby", "global-header", "formControlName", "locale", 1, "form-select"], [3, "value"], [1, "form-check", "form-switch", "float-end"], ["type", "checkbox", "role", "switch", "formControlName", "blurUnreadSummaries", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "formControlName", "promptForDownloadSize", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "formControlName", "noTransitions", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "formControlName", "collapseSeriesRelationships", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "formControlName", "shareReviews", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["id", "kavitaplus-heading", 1, "mt-3"], ["id", "setting-anilist-scrobbling", "type", "checkbox", "formControlName", "aniListScrobblingEnabled", 1, "form-check-input"], ["id", "setting-want-to-read-sync", "type", "checkbox", "formControlName", "wantToReadSync", 1, "form-check-input"], ["aria-describedby", "image-reader-heading", "formControlName", "readingDirection", 1, "form-select"], ["aria-describedby", "image-reader-heading", "formControlName", "scalingOption", 1, "form-select"], ["aria-describedby", "image-reader-heading", "formControlName", "pageSplitOption", 1, "form-select"], ["aria-describedby", "image-reader-heading", "formControlName", "readerMode", 1, "form-select"], ["aria-describedby", "image-reader-heading", "formControlName", "layoutMode", 1, "form-select"], [1, "color-box-container"], [1, "color-box", 3, "ngStyle"], [1, "hex-code"], [1, "form-control", 3, "colorPickerChange", "value", "cpAlphaChannel", "colorPicker"], ["type", "checkbox", "role", "switch", "formControlName", "autoCloseMenu", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "formControlName", "showScreenHints", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "formControlName", "emulateBook", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "formControlName", "swipeToPaginate", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "formControlName", "bookReaderTapToPaginate", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["type", "checkbox", "role", "switch", "formControlName", "bookReaderImmersiveMode", "aria-labelledby", "auto-close-label", 1, "form-check-input"], ["aria-describedby", "book-reader-heading", "formControlName", "bookReaderReadingDirection", 1, "form-select"], ["aria-describedby", "book-reader-heading", "formControlName", "bookReaderFontFamily", 1, "form-select"], ["aria-describedby", "book-reader-heading", "formControlName", "bookReaderWritingStyle", 1, "form-select"], ["aria-describedby", "book-reader-heading", "formControlName", "bookReaderLayoutMode", 1, "form-select"], ["aria-describedby", "book-reader-heading", "formControlName", "bookReaderThemeName", 1, "form-select"], [1, "range-text"], [1, "row", "g-0"], [1, "col-10"], ["type", "range", "id", "fontsize", "min", "50", "max", "300", "step", "10", "formControlName", "bookReaderFontSize", 1, "form-range"], [1, "ps-2", "col-2", "align-middle"], ["type", "range", "id", "linespacing", "min", "100", "max", "200", "step", "10", "formControlName", "bookReaderLineSpacing", 1, "form-range"], ["type", "range", "id", "margin", "min", "0", "max", "30", "step", "5", "formControlName", "bookReaderMargin", 1, "form-range"], ["aria-describedby", "pdf-reader-heading", "formControlName", "pdfSpreadMode", 1, "form-select"], ["aria-describedby", "pdf-reader-heading", "formControlName", "pdfTheme", 1, "form-select"], ["aria-describedby", "pdf-reader-heading", "formControlName", "pdfScrollMode", 1, "form-select"]], template: function ManageUserPreferencesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageUserPreferencesComponent_ng_container_0_Template, 4, 2, "ng-container", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "user-preferences");
      }
    }, dependencies: [
      TranslocoDirective,
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
      TitleCasePipe,
      ColorPickerModule,
      ColorPickerDirective,
      SettingItemComponent,
      SettingSwitchComponent,
      ReadingDirectionPipe,
      ScalingOptionPipe,
      PageSplitOptionPipe,
      ReaderModePipe,
      LayoutModePipe,
      NgStyle,
      WritingStylePipe,
      BookPageLayoutModePipe,
      PdfSpreadModePipe,
      PdfThemePipe,
      PdfScrollModePipe,
      AsyncPipe,
      DecimalPipe
    ], styles: ["\n\n.color-box-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n.color-box[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 1px solid #000;\n  margin-right: 10px;\n}\n.hex-code[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=manage-user-preferences.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageUserPreferencesComponent, { className: "ManageUserPreferencesComponent", filePath: "src/app/user-settings/manga-user-preferences/manage-user-preferences.component.ts", lineNumber: 86 });
})();
export {
  ManageUserPreferencesComponent
};
//# sourceMappingURL=manage-user-preferences.component-HOYOL6Y5.js.map
