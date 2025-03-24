import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import {
  SafeHtmlPipe
} from "./chunk-FLGYJHAG.js";
import {
  AsyncPipe,
  DatePipe,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PYHIUVNJ.js";

// src/app/announcements/_components/update-section/update-section.component.ts
function UpdateSectionComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
function UpdateSectionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul");
    \u0275\u0275repeaterCreate(5, UpdateSectionComponent_Conditional_0_For_6_Template, 2, 1, "li", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.items.length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.items);
  }
}
var UpdateSectionComponent = class _UpdateSectionComponent {
  constructor() {
    this.items = [];
    this.title = "";
  }
  static {
    this.\u0275fac = function UpdateSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _UpdateSectionComponent, selectors: [["app-update-section"]], inputs: { items: "items", title: "title" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "badge", "bg-primary", "ms-2"], [1, "code"]], template: function UpdateSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UpdateSectionComponent_Conditional_0_Template, 7, 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.items.length > 0 ? 0 : -1);
      }
    }, styles: ["\n\n/*# sourceMappingURL=update-section.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateSectionComponent, { className: "UpdateSectionComponent", filePath: "src/app/announcements/_components/update-section/update-section.component.ts", lineNumber: 11 });
})();

// src/app/announcements/_components/changelog-update-item/changelog-update-item.component.ts
function ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
    \u0275\u0275pipe(1, "safeHtml");
    \u0275\u0275element(2, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.update.blogPart), \u0275\u0275sanitizeHtml);
  }
}
function ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Conditional_12_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("btn disabled btn-", ctx_r0.index === 0 ? "primary" : "secondary", " float-end");
    \u0275\u0275propertyInterpolate("href", ctx_r0.update.updateUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("installed"));
  }
}
function ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Conditional_12_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("btn btn-", ctx_r0.index === 0 ? "primary" : "secondary", " float-end");
    \u0275\u0275propertyInterpolate("href", ctx_r0.update.updateUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("download"));
  }
}
function ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Conditional_12_Conditional_5_Conditional_0_Template, 2, 5, "a", 8)(1, ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Conditional_12_Conditional_5_Conditional_1_Template, 2, 5, "a", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r0.update.updateVersion === ctx_r0.update.currentVersion ? 0 : 1);
  }
}
function ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
    \u0275\u0275elementStart(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Conditional_12_Conditional_5_Template, 2, 1);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", t_r2("published-label"), "", \u0275\u0275pipeBind2(4, 3, ctx_r0.update.publishDate, "short"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.update.isDocker && \u0275\u0275pipeBind1(6, 6, ctx_r0.accountService.isAdmin$) ? 5 : -1);
  }
}
function ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Conditional_1_Template, 3, 3);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275element(3, "app-update-section", 3)(4, "app-update-section", 3)(5, "app-update-section", 3)(6, "app-update-section", 3)(7, "app-update-section", 3)(8, "app-update-section", 3)(9, "app-update-section", 3)(10, "app-update-section", 3)(11, "app-update-section", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Conditional_12_Template, 7, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.update.blogPart ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r0.update.added)("title", t_r2("added"));
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.update.changed)("title", t_r2("changed"));
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.update.fixed)("title", t_r2("fixed"));
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.update.developer)("title", t_r2("developer"));
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.update.theme)("title", t_r2("theme"));
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.update.removed)("title", t_r2("removed"));
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.update.api)("title", t_r2("api"));
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.update.featureRequests)("title", t_r2("feature-requests"));
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.update.knownIssues)("title", t_r2("known-issues"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showExtras ? 12 : -1);
  }
}
function ChangelogUpdateItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChangelogUpdateItemComponent_ng_container_0_Conditional_1_Template, 13, 20, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.update ? 1 : -1);
  }
}
var ChangelogUpdateItemComponent = class _ChangelogUpdateItemComponent {
  constructor() {
    this.accountService = inject(AccountService);
    this.update = null;
    this.index = 0;
    this.showExtras = true;
  }
  static {
    this.\u0275fac = function ChangelogUpdateItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangelogUpdateItemComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ChangelogUpdateItemComponent, selectors: [["app-changelog-update-item"]], inputs: { update: "update", index: "index", showExtras: "showExtras" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "update-details"], [1, "mt-4"], [3, "items", "title"], [1, "blog-content", 3, "innerHTML"], [1, "setting-section-break"], [1, "mb-1", "mt-2"], [1, "text-muted"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "class"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function ChangelogUpdateItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ChangelogUpdateItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "changelog-update-item");
      }
    }, dependencies: [
      SafeHtmlPipe,
      UpdateSectionComponent,
      AsyncPipe,
      DatePipe,
      TranslocoDirective
    ], styles: ["\n\n.update-details[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n[_nghost-%COMP%]     .blog-content {\n  margin-bottom: 1.5rem;\n  line-height: 1.6;\n  word-wrap: break-word;\n}\n[_nghost-%COMP%]     .blog-content img {\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=changelog-update-item.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangelogUpdateItemComponent, { className: "ChangelogUpdateItemComponent", filePath: "src/app/announcements/_components/changelog-update-item/changelog-update-item.component.ts", lineNumber: 23 });
})();

export {
  ChangelogUpdateItemComponent
};
//# sourceMappingURL=chunk-ZT67ZH4B.js.map
