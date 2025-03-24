import {
  ChangelogUpdateItemComponent
} from "./chunk-ZT67ZH4B.js";
import {
  ServerService
} from "./chunk-KKWGV4SA.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from "./chunk-2R2RCU4Y.js";
import {
  ChangeDetectorRef,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/announcements/_components/changelog/changelog.component.ts
var _c0 = (a0) => ({ version: a0 });
function ChangelogComponent_ng_container_1_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const update_r1 = \u0275\u0275nextContext().$implicit;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("nightly", \u0275\u0275pureFunction1(1, _c0, update_r1.currentVersion)));
  }
}
function ChangelogComponent_ng_container_1_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("installed"));
  }
}
function ChangelogComponent_ng_container_1_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("available"));
  }
}
function ChangelogComponent_ng_container_1_For_3_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-changelog-update-item", 12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const update_r1 = ctx_r2.$implicit;
    const \u0275$index_9_r4 = ctx_r2.$index;
    \u0275\u0275property("update", update_r1)("showExtras", true)("index", \u0275$index_9_r4);
  }
}
function ChangelogComponent_ng_container_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "h2", 6)(3, "button", 7)(4, "h4", 8);
    \u0275\u0275text(5);
    \u0275\u0275template(6, ChangelogComponent_ng_container_1_For_3_Conditional_6_Template, 2, 3, "span", 9)(7, ChangelogComponent_ng_container_1_For_3_Conditional_7_Template, 2, 1, "span", 9)(8, ChangelogComponent_ng_container_1_For_3_Conditional_8_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11);
    \u0275\u0275template(11, ChangelogComponent_ng_container_1_For_3_ng_template_11_Template, 1, 3, "ng-template");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const update_r1 = ctx.$implicit;
    const \u0275$index_9_r4 = ctx.$index;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", update_r1.updateTitle, "\xA0 ");
    \u0275\u0275advance();
    \u0275\u0275conditional(update_r1.isOnNightlyInRelease ? 6 : update_r1.isReleaseEqual ? 7 : update_r1.isReleaseNewer && \u0275$index_9_r4 === 0 ? 8 : -1);
  }
}
function ChangelogComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275repeaterCreate(2, ChangelogComponent_ng_container_1_For_3_Template, 12, 2, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-loading", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.updates);
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r4.isLoading);
  }
}
var ChangelogComponent = class _ChangelogComponent {
  constructor() {
    this.serverService = inject(ServerService);
    this.cdRef = inject(ChangeDetectorRef);
    this.accountService = inject(AccountService);
    this.updates = [];
    this.isLoading = true;
  }
  ngOnInit() {
    this.serverService.getChangelog(30).subscribe((updates) => {
      this.updates = updates;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function ChangelogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangelogComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ChangelogComponent, selectors: [["app-changelog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "main-container", "container-fluid"], [4, "transloco", "translocoRead"], [1, "changelog"], ["ngbAccordion", "", 1, "mb-2"], [3, "loading"], ["ngbAccordionItem", "", 1, "p-2"], ["ngbAccordionHeader", ""], ["ngbAccordionButton", ""], [1, "changelog-header"], [1, "badge", "bg-secondary"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], [3, "update", "showExtras", "index"]], template: function ChangelogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ChangelogComponent_ng_container_1_Template, 5, 1, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("translocoRead", "changelog");
      }
    }, dependencies: [
      LoadingComponent,
      TranslocoDirective,
      NgbAccordionDirective,
      NgbAccordionItem,
      NgbAccordionButton,
      NgbAccordionHeader,
      NgbAccordionCollapse,
      NgbAccordionBody,
      ChangelogUpdateItemComponent
    ], styles: ["\n\n.update-details[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.changelog-header[_ngcontent-%COMP%] {\n  color: var(--body-text-color);\n}\n/*# sourceMappingURL=changelog.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangelogComponent, { className: "ChangelogComponent", filePath: "src/app/announcements/_components/changelog/changelog.component.ts", lineNumber: 26 });
})();

export {
  ChangelogComponent
};
//# sourceMappingURL=chunk-33CWXKBP.js.map
