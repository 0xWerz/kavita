import {
  CommonModule,
  EventEmitter,
  NgClass,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/shared/icon-and-title/icon-and-title.component.ts
var _c0 = ["*"];
var _c1 = (a0) => ({ "clickable": a0 });
function IconAndTitleComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
var IconAndTitleComponent = class _IconAndTitleComponent {
  constructor() {
    this.clickable = true;
    this.title = "";
    this.label = "";
    this.fontClasses = "";
    this.click = new EventEmitter();
  }
  handleClick(event) {
    if (this.clickable)
      this.click.emit(event);
  }
  static {
    this.\u0275fac = function IconAndTitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IconAndTitleComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _IconAndTitleComponent, selectors: [["app-icon-and-title"]], inputs: { clickable: "clickable", title: "title", label: "label", fontClasses: "fontClasses" }, outputs: { click: "click" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 5, vars: 9, consts: [[1, "d-flex", "justify-content-center", "align-self-center", "align-items-center", "icon-and-title", 3, "click", "ngClass"], ["class", "label", 4, "ngIf"], ["aria-hidden", "true", 3, "title"], [1, "text"], [1, "label"]], template: function IconAndTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function IconAndTitleComponent_Template_div_click_0_listener($event) {
          return ctx.handleClick($event);
        });
        \u0275\u0275template(1, IconAndTitleComponent_div_1_Template, 2, 1, "div", 1);
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c1, ctx.clickable));
        \u0275\u0275attribute("role", ctx.clickable ? "button" : "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.label && ctx.label.length > 0);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("", ctx.fontClasses, " mx-auto icon");
        \u0275\u0275property("title", ctx.title);
      }
    }, dependencies: [CommonModule, NgClass, NgIf], styles: ["\n\n.icon-and-title[_ngcontent-%COMP%] {\n  flex-direction: column;\n  min-width: 60px;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n.text[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: center;\n}\n.label[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  text-align: center;\n  font-weight: bold;\n}\n/*# sourceMappingURL=icon-and-title.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconAndTitleComponent, { className: "IconAndTitleComponent", filePath: "src/app/shared/icon-and-title/icon-and-title.component.ts", lineNumber: 12 });
})();

export {
  IconAndTitleComponent
};
//# sourceMappingURL=chunk-D3SGRXLI.js.map
