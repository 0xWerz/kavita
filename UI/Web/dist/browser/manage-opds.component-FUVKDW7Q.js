import {
  WikiLink
} from "./chunk-GX7EGMKV.js";
import {
  SettingsService
} from "./chunk-65GP3B4U.js";
import {
  ApiKeyComponent
} from "./chunk-5QTHIAHW.js";
import "./chunk-KJWRNOWO.js";
import "./chunk-I5OSWZYW.js";
import {
  AccountService,
  LicenseService
} from "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DestroyRef,
  TranslocoDirective,
  inject,
  takeUntilDestroyed,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PYHIUVNJ.js";

// src/app/user-settings/manage-opds/manage-opds.component.ts
function ManageOpdsComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1("clients-opds-alert"));
  }
}
function ManageOpdsComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "app-api-key", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r1("clients-opds-url-label"))("tooltipText", t_r1("clients-opds-url-tooltip") + " " + ctx_r1.opdsUrlLink)("hideData", true)("showRefresh", false)("transform", ctx_r1.makeUrl);
  }
}
function ManageOpdsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManageOpdsComponent_ng_container_0_Conditional_1_Template, 2, 1, "div", 1);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-api-key", 2);
    \u0275\u0275template(5, ManageOpdsComponent_ng_container_0_Conditional_5_Template, 2, 5, "div", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.opdsEnabled ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("clients-opds-description"));
    \u0275\u0275advance();
    \u0275\u0275property("hideData", true)("title", t_r1("clients-api-key-label"))("tooltipText", t_r1("clients-api-key-tooltip"))("showRefresh", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.opdsEnabled && ctx_r1.opdsUrl ? 5 : -1);
  }
}
var ManageOpdsComponent = class _ManageOpdsComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.accountService = inject(AccountService);
    this.settingsService = inject(SettingsService);
    this.cdRef = inject(ChangeDetectorRef);
    this.licenseService = inject(LicenseService);
    this.user = void 0;
    this.opdsUrlLink = `<a href="${WikiLink.OpdsClients}" target="_blank" rel="noopener noreferrer">Wiki</a>`;
    this.opdsEnabled = false;
    this.opdsUrl = "";
    this.hasActiveLicense = false;
    this.makeUrl = (val) => {
      return this.opdsUrl;
    };
    this.accountService.getOpdsUrl().subscribe((res) => {
      this.opdsUrl = res;
      this.cdRef.markForCheck();
    });
    this.settingsService.getOpdsEnabled().subscribe((res) => {
      this.opdsEnabled = res;
      this.cdRef.markForCheck();
    });
    this.licenseService.hasValidLicense$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
      this.hasActiveLicense = res;
      this.cdRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function ManageOpdsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageOpdsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageOpdsComponent, selectors: [["app-manage-opds"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["role", "alert", 1, "alert", "alert-warning"], [3, "hideData", "title", "tooltipText", "showRefresh"], [1, "mt-4"], [3, "title", "tooltipText", "hideData", "showRefresh", "transform"]], template: function ManageOpdsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageOpdsComponent_ng_container_0_Template, 6, 7, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "user-preferences");
      }
    }, dependencies: [
      ApiKeyComponent,
      TranslocoDirective
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageOpdsComponent, { className: "ManageOpdsComponent", filePath: "src/app/user-settings/manage-opds/manage-opds.component.ts", lineNumber: 26 });
})();
export {
  ManageOpdsComponent
};
//# sourceMappingURL=manage-opds.component-FUVKDW7Q.js.map
