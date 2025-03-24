import {
  SideNavCompanionBarComponent
} from "./chunk-UXZKIERU.js";
import {
  ChangelogComponent
} from "./chunk-33CWXKBP.js";
import "./chunk-ZT67ZH4B.js";
import "./chunk-KKWGV4SA.js";
import "./chunk-CUVDZVWA.js";
import "./chunk-D7CIAEAO.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  TranslocoDirective,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/announcements/_components/announcements/announcements.component.ts
function AnnouncementsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-side-nav-companion-bar")(2, "h4", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "app-changelog");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1("title"), " ");
  }
}
var AnnouncementsComponent = class _AnnouncementsComponent {
  constructor() {
  }
  static {
    this.\u0275fac = function AnnouncementsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnnouncementsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _AnnouncementsComponent, selectors: [["app-announcements"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "main-container", "container-fluid"], [4, "transloco", "translocoRead"], ["title", ""]], template: function AnnouncementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AnnouncementsComponent_ng_container_1_Template, 5, 1, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("translocoRead", "announcements");
      }
    }, dependencies: [SideNavCompanionBarComponent, ChangelogComponent, TranslocoDirective], styles: ["\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0 0 0 10px;\n}\n/*# sourceMappingURL=announcements.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnouncementsComponent, { className: "AnnouncementsComponent", filePath: "src/app/announcements/_components/announcements/announcements.component.ts", lineNumber: 13 });
})();

// src/app/_routes/announcements-routing.module.ts
var routes = [
  { path: "", component: AnnouncementsComponent, pathMatch: "full" }
];
export {
  routes
};
//# sourceMappingURL=announcements-routing.module-GVIPS742.js.map
