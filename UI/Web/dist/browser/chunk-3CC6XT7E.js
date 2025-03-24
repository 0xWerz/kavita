import {
  ChangeDetectorRef,
  CommonModule,
  EventEmitter,
  NgIf,
  NgStyle,
  TranslocoDirective,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-PYHIUVNJ.js";

// src/app/shared/drawer/drawer.component.ts
var _c0 = [[["", "header", ""]], [["", "subheader", ""]], [["", "body", ""]]];
var _c1 = ["[header]", "[subheader]", "[body]"];
var _c2 = (a0, a1) => ({ "top": a0, "visibility": a1 });
function DrawerComponent_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function DrawerComponent_ng_container_0_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
  }
}
function DrawerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function DrawerComponent_ng_container_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275projection(7, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275projection(9, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, DrawerComponent_ng_container_0_div_10_Template, 1, 0, "div", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("offcanvas offcanvas-", ctx_r1.position, "");
    \u0275\u0275classProp("show", ctx_r1.isOpen);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(8, _c2, ctx_r1.options.topOffset + "px", ctx_r1.isOpen ? "visible" : "hidden"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", t_r4("common.close"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.isOpen);
  }
}
var DrawerOptions = class {
  constructor() {
    this.topOffset = 0;
  }
};
var DrawerComponent = class _DrawerComponent {
  constructor(cdRef) {
    this.cdRef = cdRef;
    this.isOpen = false;
    this.width = 400;
    this.position = "start";
    this.options = new DrawerOptions();
    this.drawerClosed = new EventEmitter();
    this.isOpenChange = new EventEmitter();
  }
  close() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
    this.drawerClosed.emit(false);
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function DrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DrawerComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _DrawerComponent, selectors: [["app-drawer"]], inputs: { isOpen: "isOpen", width: "width", position: "position", options: "options" }, outputs: { drawerClosed: "drawerClosed", isOpenChange: "isOpenChange" }, exportAs: ["drawer"], standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c1, decls: 1, vars: 0, consts: [[4, "transloco"], ["tabindex", "-1", "id", "offcanvas", "aria-labelledby", "offcanvasLabel", "role", "dialog", 3, "ngStyle"], [1, "offcanvas-header"], ["id", "offcanvasLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn-close", "text-reset", 3, "click"], [1, "offcanvas-header", "row", "hide-if-empty"], [1, "offcanvas-body"], ["class", "offcanvas-backdrop fade show", 3, "click", 4, "ngIf"], [1, "offcanvas-backdrop", "fade", "show", 3, "click"]], template: function DrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275template(0, DrawerComponent_ng_container_0_Template, 11, 11, "ng-container", 0);
      }
    }, dependencies: [CommonModule, NgIf, NgStyle, TranslocoDirective], styles: ["\n\n.offcanvas[_ngcontent-%COMP%] {\n  color: var(--drawer-text-color);\n  background-color: var(--drawer-bg-color);\n}\n.hide-if-empty[_ngcontent-%COMP%]:empty {\n  display: none !important;\n}\n/*# sourceMappingURL=drawer.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DrawerComponent, { className: "DrawerComponent", filePath: "src/app/shared/drawer/drawer.component.ts", lineNumber: 21 });
})();

export {
  DrawerComponent
};
//# sourceMappingURL=chunk-3CC6XT7E.js.map
