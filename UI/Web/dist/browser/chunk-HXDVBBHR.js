import {
  SafeHtmlPipe
} from "./chunk-FLGYJHAG.js";
import {
  ChangeDetectorRef,
  ElementRef,
  NgTemplateOutlet,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/settings/_components/setting-switch/setting-switch.component.ts
var _c0 = ["switch"];
function SettingSwitchComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.switchRef);
  }
}
function SettingSwitchComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("for", ctx_r0.labelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function SettingSwitchComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.title, " ");
  }
}
function SettingSwitchComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.subtitle), \u0275\u0275sanitizeHtml);
  }
}
function SettingSwitchComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 1)(3, "div", 2);
    \u0275\u0275template(4, SettingSwitchComponent_ng_container_0_Conditional_4_Template, 1, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2)(6, "h6", 4);
    \u0275\u0275template(7, SettingSwitchComponent_ng_container_0_Conditional_7_Template, 2, 2, "label", 5)(8, SettingSwitchComponent_ng_container_0_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SettingSwitchComponent_ng_container_0_Conditional_9_Template, 2, 3, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.switchRef ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r0.id || ctx_r0.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.labelId ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.subtitle ? 9 : -1);
  }
}
var SettingSwitchComponent = class _SettingSwitchComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.elementRef = inject(ElementRef);
    this.title = "";
    this.subtitle = void 0;
    this.id = void 0;
    this.labelId = "";
  }
  ngAfterContentInit() {
    setTimeout(() => {
      if (this.id) {
        this.labelId = this.id;
        this.cdRef.markForCheck();
        return;
      }
      const element = this.elementRef.nativeElement;
      const inputElement = element.querySelector("input");
      if (inputElement && inputElement.id) {
        this.labelId = inputElement.id;
        this.cdRef.markForCheck();
      } else {
        console.warn("No input with ID found in app-setting-switch. For accessibility, please ensure the input has an ID.");
      }
    });
  }
  static {
    this.\u0275fac = function SettingSwitchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingSwitchComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SettingSwitchComponent, selectors: [["app-setting-switch"]], contentQueries: function SettingSwitchComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.switchRef = _t.first);
      }
    }, inputs: { title: "title", subtitle: "subtitle", id: "id" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "row", "g-0", "mb-2"], [1, "col-auto"], [3, "ngTemplateOutlet"], [1, "section-title", 3, "id"], [1, "reset-label", 3, "for"], [1, "text-muted", "mt-2", 3, "innerHTML"]], template: function SettingSwitchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SettingSwitchComponent_ng_container_0_Template, 10, 4, "ng-container", 0);
      }
    }, dependencies: [
      NgTemplateOutlet,
      TranslocoDirective,
      SafeHtmlPipe
    ], styles: ["\n\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=setting-switch.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingSwitchComponent, { className: "SettingSwitchComponent", filePath: "src/app/settings/_components/setting-switch/setting-switch.component.ts", lineNumber: 26 });
})();

export {
  SettingSwitchComponent
};
//# sourceMappingURL=chunk-HXDVBBHR.js.map
