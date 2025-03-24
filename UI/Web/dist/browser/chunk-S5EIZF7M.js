import {
  ChangelogUpdateItemComponent
} from "./chunk-ZT67ZH4B.js";
import {
  WikiLink
} from "./chunk-GX7EGMKV.js";
import {
  NgbActiveModal,
  NgbModalModule
} from "./chunk-2R2RCU4Y.js";
import {
  CommonModule,
  TranslocoDirective,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PYHIUVNJ.js";

// src/app/announcements/_components/update-notification/update-notification-modal.component.ts
function UpdateNotificationModalComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-changelog-update-item", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("update", ctx_r1.updateData)("showExtras", false);
  }
}
function UpdateNotificationModalComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function UpdateNotificationModalComponent_ng_container_0_Conditional_12_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("href", ctx_r1.updateData.updateUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("download"));
  }
}
function UpdateNotificationModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "h4", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275listener("click", function UpdateNotificationModalComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275template(6, UpdateNotificationModalComponent_ng_container_0_Conditional_6_Template, 1, 2, "app-changelog-update-item", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "a", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function UpdateNotificationModalComponent_ng_container_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, UpdateNotificationModalComponent_ng_container_0_Conditional_12_Template, 2, 2, "a", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("title"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("close"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.updateData ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.updateUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("help"));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("btn ", ctx_r1.updateData.isDocker ? "btn-primary" : "btn-secondary", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("close"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.updateData.isDocker ? 12 : -1);
  }
}
var UpdateNotificationModalComponent = class _UpdateNotificationModalComponent {
  constructor(modal) {
    this.modal = modal;
    this.updateUrl = WikiLink.UpdateNative;
  }
  ngOnInit() {
    if (this.updateData.isDocker) {
      this.updateUrl = WikiLink.UpdateDocker;
    } else {
      this.updateUrl = WikiLink.UpdateNative;
    }
  }
  close() {
    this.modal.close({ success: false, series: void 0 });
  }
  static {
    this.\u0275fac = function UpdateNotificationModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateNotificationModalComponent)(\u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _UpdateNotificationModalComponent, selectors: [["app-update-notification-modal"]], inputs: { updateData: "updateData" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "update", "showExtras"], [1, "modal-footer"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-icon", 3, "href"], ["type", "button", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary", 3, "click", "href"]], template: function UpdateNotificationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UpdateNotificationModalComponent_ng_container_0_Template, 13, 10, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "update-notification-modal");
      }
    }, dependencies: [CommonModule, NgbModalModule, TranslocoDirective, ChangelogUpdateItemComponent], styles: ["\n\n.update-body[_ngcontent-%COMP%] {\n  width: 100%;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n  .update-body img {\n  max-width: 100%;\n}\n/*# sourceMappingURL=update-notification-modal.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateNotificationModalComponent, { className: "UpdateNotificationModalComponent", filePath: "src/app/announcements/_components/update-notification/update-notification-modal.component.ts", lineNumber: 21 });
})();

export {
  UpdateNotificationModalComponent
};
//# sourceMappingURL=chunk-S5EIZF7M.js.map
