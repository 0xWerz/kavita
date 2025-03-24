import {
  ChangelogComponent
} from "./chunk-33CWXKBP.js";
import "./chunk-ZT67ZH4B.js";
import {
  ServerService
} from "./chunk-KKWGV4SA.js";
import "./chunk-D7CIAEAO.js";
import "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DatePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PYHIUVNJ.js";

// src/app/admin/manage-system/manage-system.component.ts
function ManageSystemComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 3)(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 2)(15, "div", 3)(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 3)(21, "div");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(26, "div", 12);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("version-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.serverInfo.kavitaVersion);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("installId-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.serverInfo.installId);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1("first-install-version-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.serverInfo.firstInstallVersion);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("first-install-date-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 9, ctx_r1.serverInfo.firstInstallDate, "shortDate"));
  }
}
function ManageSystemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManageSystemComponent_ng_container_0_Conditional_1_Template, 27, 12);
    \u0275\u0275elementStart(2, "div", 1)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2)(6, "div", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4)(9, "a", 5);
    \u0275\u0275text(10, "kavitareader.com");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 2)(12, "div", 3);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 4)(15, "a", 6);
    \u0275\u0275text(16, "wiki.kavitareader.com");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 2)(18, "div", 3);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 4)(21, "a", 7);
    \u0275\u0275text(22, "discord.gg/b52wT37kt7");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 2)(24, "div", 3);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 4)(27, "a", 8);
    \u0275\u0275text(28, "opencollective.com/kavita");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 2)(30, "div", 3);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 4)(33, "a", 9);
    \u0275\u0275text(34, "github.com/Kareadita/Kavita");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 2)(36, "div", 3);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 4)(39, "a", 10);
    \u0275\u0275text(40, "Weblate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 2)(43, "div", 3);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 4)(46, "a", 11);
    \u0275\u0275text(47, "https://github.com/Kareadita/Kavita/discussions/");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "br");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(49, "div", 12);
    \u0275\u0275elementStart(50, "div", 1)(51, "h3");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "app-changelog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.serverInfo ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("more-info-title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("home-page-title"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r1("wiki-title"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r1("discord-title"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r1("donations-title"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r1("source-title"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r1("localization-title"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r1("feature-request-title"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r1("updates-title"));
  }
}
var ManageSystemComponent = class _ManageSystemComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.serverService = inject(ServerService);
  }
  ngOnInit() {
    this.serverService.getServerInfo().subscribe((info) => {
      this.serverInfo = info;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function ManageSystemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageSystemComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageSystemComponent, selectors: [["app-manage-system"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "mb-3"], [1, "row"], [1, "col-4"], [1, "col"], ["href", "https://www.kavitareader.com", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://wiki.kavitareader.com", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://discord.gg/b52wT37kt7", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://opencollective.com/kavita", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://github.com/Kareadita/Kavita", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://hosted.weblate.org/engage/kavita/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://github.com/Kareadita/Kavita/discussions/2529", "target", "_blank", "rel", "noopener noreferrer"], [1, "setting-section-break"]], template: function ManageSystemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageSystemComponent_ng_container_0_Template, 54, 10, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-system");
      }
    }, dependencies: [TranslocoDirective, ChangelogComponent, DatePipe], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageSystemComponent, { className: "ManageSystemComponent", filePath: "src/app/admin/manage-system/manage-system.component.ts", lineNumber: 16 });
})();
export {
  ManageSystemComponent
};
//# sourceMappingURL=manage-system.component-SPBIWLVF.js.map
