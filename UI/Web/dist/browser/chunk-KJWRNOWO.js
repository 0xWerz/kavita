import {
  SafeHtmlPipe
} from "./chunk-FLGYJHAG.js";
import {
  ChangeDetectorRef,
  ElementRef,
  EventEmitter,
  NgClass,
  NgTemplateOutlet,
  TranslocoDirective,
  filter,
  fromEvent,
  inject,
  tap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/settings/_components/setting-item/setting-item.component.ts
var _c0 = ["titleExtra"];
var _c1 = ["view"];
var _c2 = ["edit"];
var _c3 = ["titleActions"];
var _c4 = (a0) => ({ "non-selectable": a0 });
function SettingItemComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 3);
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
function SettingItemComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.title, " ");
  }
}
function SettingItemComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.titleExtraRef);
  }
}
function SettingItemComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function SettingItemComponent_ng_container_0_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleEditMode());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r0.canEdit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? t_r3("common.close") : ctx_r0.editLabel || t_r3("common.edit"), " ");
  }
}
function SettingItemComponent_ng_container_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.titleActionsRef);
  }
}
function SettingItemComponent_ng_container_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.valueEditRef);
  }
}
function SettingItemComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275listener("click", function SettingItemComponent_ng_container_0_Conditional_12_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleEditMode());
    });
    \u0275\u0275elementContainer(1, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c4, !ctx_r0.canEdit || !ctx_r0.showEdit));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.valueViewRef);
  }
}
function SettingItemComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.subtitle), \u0275\u0275sanitizeHtml);
  }
}
function SettingItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 1)(3, "div")(4, "h6", 2);
    \u0275\u0275template(5, SettingItemComponent_ng_container_0_Conditional_5_Template, 2, 2, "label", 3)(6, SettingItemComponent_ng_container_0_Conditional_6_Template, 1, 1)(7, SettingItemComponent_ng_container_0_Conditional_7_Template, 1, 1, "ng-container", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275template(9, SettingItemComponent_ng_container_0_Conditional_9_Template, 2, 2, "button", 6)(10, SettingItemComponent_ng_container_0_Conditional_10_Template, 1, 1, "ng-container", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SettingItemComponent_ng_container_0_Conditional_11_Template, 1, 1, "ng-container", 4)(12, SettingItemComponent_ng_container_0_Conditional_12_Template, 2, 4, "span", 7)(13, SettingItemComponent_ng_container_0_Conditional_13_Template, 2, 3, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("col-auto ", ctx_r0.fixedExtras ? "setting-title no-anim edit" : "setting-title edit", "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.labelId ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.titleExtraRef ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showEdit ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.titleActionsRef ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isEditMode ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.subtitle ? 13 : -1);
  }
}
var SettingItemComponent = class _SettingItemComponent {
  onClickInside(event) {
    event.stopPropagation();
  }
  constructor(elementRef) {
    this.cdRef = inject(ChangeDetectorRef);
    this.title = "";
    this.editLabel = void 0;
    this.canEdit = true;
    this.showEdit = true;
    this.isEditMode = false;
    this.subtitle = void 0;
    this.labelId = void 0;
    this.toggleOnViewClick = true;
    this.fixedExtras = false;
    this.control = null;
    this.editMode = new EventEmitter();
    if (!this.toggleOnViewClick)
      return;
    fromEvent(window, "click").pipe(filter((event) => {
      if (!this.toggleOnViewClick)
        return false;
      if (this.control != null && this.control.invalid)
        return false;
      const mouseEvent = event;
      const selection = window.getSelection();
      const hasSelection = selection !== null && selection.toString().trim() === "";
      return !elementRef.nativeElement.contains(mouseEvent.target) && hasSelection;
    }), tap(() => {
      this.isEditMode = false;
      this.editMode.emit(this.isEditMode);
      this.cdRef.markForCheck();
    })).subscribe();
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("isEditMode")) {
      const change = changes.isEditMode;
      if (change.isFirstChange())
        return;
      if (!this.toggleOnViewClick)
        return;
      if (!this.canEdit)
        return;
      if (this.control != null && this.control.invalid)
        return;
      console.log("isEditMode", this.isEditMode, "currentValue", change.currentValue);
      this.isEditMode = change.currentValue;
      this.cdRef.markForCheck();
    }
  }
  toggleEditMode() {
    if (!this.toggleOnViewClick)
      return;
    if (!this.canEdit)
      return;
    if (this.control != null && this.control.invalid)
      return;
    this.isEditMode = !this.isEditMode;
    this.editMode.emit(this.isEditMode);
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function SettingItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingItemComponent)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _SettingItemComponent, selectors: [["app-setting-item"]], contentQueries: function SettingItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 5);
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
        \u0275\u0275contentQuery(dirIndex, _c2, 5);
        \u0275\u0275contentQuery(dirIndex, _c3, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleExtraRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.valueViewRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.valueEditRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleActionsRef = _t.first);
      }
    }, hostBindings: function SettingItemComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SettingItemComponent_click_HostBindingHandler($event) {
          return ctx.onClickInside($event);
        });
      }
    }, inputs: { title: "title", editLabel: "editLabel", canEdit: "canEdit", showEdit: "showEdit", isEditMode: "isEditMode", subtitle: "subtitle", labelId: "labelId", toggleOnViewClick: "toggleOnViewClick", fixedExtras: "fixedExtras", control: "control" }, outputs: { editMode: "editMode" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "settings-row", "g-0", "row"], [1, "section-title"], [1, "reset-label", 3, "for"], [3, "ngTemplateOutlet"], [1, "col-auto", "text-end", "align-self-end", "justify-content-end", "edit-btn"], ["type", "button", 1, "btn", "btn-text", "btn-sm", "btn-alignment", 3, "disabled"], [1, "view-value", 3, "ngClass"], [1, "text-muted", "mt-2", 3, "innerHTML"], ["type", "button", 1, "btn", "btn-text", "btn-sm", "btn-alignment", 3, "click", "disabled"], [1, "view-value", 3, "click", "ngClass"]], template: function SettingItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SettingItemComponent_ng_container_0_Template, 14, 9, "ng-container", 0);
      }
    }, dependencies: [
      TranslocoDirective,
      NgTemplateOutlet,
      SafeHtmlPipe,
      NgClass
    ], styles: ["\n\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.text-muted[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.view-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--primary-color);\n  cursor: pointer;\n}\n.non-selectable[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.btn-alignment[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n  padding-top: 0;\n}\n/*# sourceMappingURL=setting-item.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingItemComponent, { className: "SettingItemComponent", filePath: "src/app/settings/_components/setting-item/setting-item.component.ts", lineNumber: 29 });
})();

export {
  SettingItemComponent
};
//# sourceMappingURL=chunk-KJWRNOWO.js.map
