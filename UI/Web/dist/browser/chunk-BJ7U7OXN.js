import {
  SafeHtmlPipe
} from "./chunk-FLGYJHAG.js";
import {
  ChangeDetectorRef,
  NgClass,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/shared/read-more/read-more.component.ts
var _c0 = (a0) => ({ "blur-text": a0 });
var _c1 = (a0, a1) => ({ "fa-caret-down": a0, "fa-caret-up": a1 });
function ReadMoreComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275listener("click", function ReadMoreComponent_ng_container_0_Conditional_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleView());
    });
    \u0275\u0275text(1, " \xA0");
    \u0275\u0275element(2, "i", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hidden", ctx_r1.hideToggle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c1, ctx_r1.isCollapsed, !ctx_r1.isCollapsed));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xA0", ctx_r1.isCollapsed ? t_r3("read-more") : t_r3("read-less"), " ");
  }
}
function ReadMoreComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275pipe(3, "safeHtml");
    \u0275\u0275template(4, ReadMoreComponent_ng_container_0_Conditional_4_Template, 4, 7, "a", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(3, 3, ctx_r1.currentText), \u0275\u0275sanitizeHtml)("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx_r1.blur && ctx_r1.isCollapsed));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.text && ctx_r1.text.length > ctx_r1.maxLength && ctx_r1.showToggle ? 4 : -1);
  }
}
var ReadMoreComponent = class _ReadMoreComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.maxLength = 250;
    this.blur = false;
    this.showToggle = true;
    this.hideToggle = true;
    this.isCollapsed = true;
  }
  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }
  determineView() {
    const text = this.text ? this.text.replace(/\n/g, "<br>") : "";
    if (!this.text || this.text.length <= this.maxLength) {
      this.currentText = text;
      this.isCollapsed = true;
      this.hideToggle = true;
      this.cdRef.markForCheck();
      return;
    }
    this.hideToggle = false;
    if (this.isCollapsed) {
      this.currentText = text.substring(0, this.maxLength);
      this.currentText = this.currentText.substring(0, Math.min(this.currentText.length, this.currentText.lastIndexOf(" ")));
      this.currentText = this.currentText + "\u2026";
    } else if (!this.isCollapsed) {
      this.currentText = text;
    }
    this.cdRef.markForCheck();
  }
  ngOnChanges() {
    this.determineView();
  }
  static {
    this.\u0275fac = function ReadMoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReadMoreComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ReadMoreComponent, selectors: [["app-read-more"]], inputs: { text: "text", maxLength: "maxLength", blur: "blur", showToggle: "showToggle" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "read-more-cont"], [3, "innerHTML", "ngClass"], [1, "read-more-link", 3, "hidden"], [1, "read-more-link", 3, "click"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"]], template: function ReadMoreComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ReadMoreComponent_ng_container_0_Template, 5, 7, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "read-more");
      }
    }, dependencies: [SafeHtmlPipe, TranslocoDirective, NgClass], styles: ["\n\n.blur-text[_ngcontent-%COMP%] {\n  color: transparent;\n  text-shadow: 0 0 5px var(--body-text-color);\n}\n.read-more-cont[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.read-more-cont[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  word-break: break-word;\n  max-width: 120ch;\n}\n@media (max-width: 576px) {\n  .read-more-cont[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    max-width: 50ch;\n  }\n}\n/*# sourceMappingURL=read-more.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReadMoreComponent, { className: "ReadMoreComponent", filePath: "src/app/shared/read-more/read-more.component.ts", lineNumber: 14 });
})();

export {
  ReadMoreComponent
};
//# sourceMappingURL=chunk-BJ7U7OXN.js.map
