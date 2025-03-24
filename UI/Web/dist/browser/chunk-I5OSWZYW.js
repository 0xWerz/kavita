import {
  ChangeDetectorRef,
  EventEmitter,
  NgTemplateOutlet,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/settings/_components/setting-title/setting-title.component.ts
var _c0 = ["extra"];
function SettingTitleComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("for", ctx_r1.labelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.title);
  }
}
function SettingTitleComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.title, " ");
  }
}
function SettingTitleComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.titleExtraRef);
  }
}
function SettingTitleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4);
    \u0275\u0275template(5, SettingTitleComponent_ng_container_0_Conditional_5_Template, 2, 2, "label", 5)(6, SettingTitleComponent_ng_container_0_Conditional_6_Template, 1, 1)(7, SettingTitleComponent_ng_container_0_Conditional_7_Template, 1, 1, "ng-container", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
    \u0275\u0275listener("click", function SettingTitleComponent_ng_container_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleViewMode());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("id", ctx_r1.id || ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.labelId ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.titleExtraRef ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canEdit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? t_r3("common.close") : t_r3("common.edit"));
  }
}
var SettingTitleComponent = class _SettingTitleComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.title = "";
    this.labelId = void 0;
    this.id = void 0;
    this.canEdit = true;
    this.isEditMode = false;
    this.editMode = new EventEmitter();
  }
  toggleViewMode() {
    this.isEditMode = !this.isEditMode;
    this.editMode.emit(this.isEditMode);
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function SettingTitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingTitleComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SettingTitleComponent, selectors: [["app-setting-title"]], contentQueries: function SettingTitleComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleExtraRef = _t.first);
      }
    }, inputs: { title: "title", labelId: "labelId", id: "id", canEdit: "canEdit", isEditMode: "isEditMode" }, outputs: { editMode: "editMode" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "settings-row", "g-0", "row"], [1, "row", "g-0", "mb-2"], [1, "col-auto"], [1, "section-title", 3, "id"], [1, "reset-label", 3, "for"], [3, "ngTemplateOutlet"], [1, "col-auto", "text-end", "align-self-end", "justify-content-end", "edit-btn"], ["type", "button", 1, "btn", "btn-text", "btn-sm", "btn-alignment", 3, "click", "disabled"]], template: function SettingTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SettingTitleComponent_ng_container_0_Template, 11, 5, "ng-container", 0);
      }
    }, dependencies: [
      NgTemplateOutlet,
      TranslocoDirective
    ], styles: ["\n\n.btn-alignment[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n  padding-top: 0;\n}\n/*# sourceMappingURL=setting-title.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingTitleComponent, { className: "SettingTitleComponent", filePath: "src/app/settings/_components/setting-title/setting-title.component.ts", lineNumber: 24 });
})();

export {
  SettingTitleComponent
};
//# sourceMappingURL=chunk-I5OSWZYW.js.map
