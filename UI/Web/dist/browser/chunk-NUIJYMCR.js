import {
  BulkSelectionService
} from "./chunk-OMYYKEHJ.js";
import {
  CardActionablesComponent
} from "./chunk-W4DBALQX.js";
import {
  KEY_CODES
} from "./chunk-A6JEQ5GB.js";
import {
  Action,
  ActionFactoryService
} from "./chunk-U2DWQJI2.js";
import {
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  DecimalPipe,
  DestroyRef,
  NgStyle,
  TranslocoDirective,
  TranslocoModule,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/cards/bulk-operations/bulk-operations.component.ts
var _c0 = (a0, a1) => ({ "margin-left": a0, "margin-right": a1 });
var _c1 = (a0) => ({ num: a0 });
function BulkOperationsComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function BulkOperationsComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.executeAction(ctx_r2.Action.MarkAsUnread));
    });
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("ngbTooltip", t_r4("mark-as-unread"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("mark-as-unread"));
  }
}
function BulkOperationsComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function BulkOperationsComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.executeAction(ctx_r2.Action.MarkAsRead));
    });
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("ngbTooltip", t_r4("mark-as-read"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("mark-as-read"));
  }
}
function BulkOperationsComponent_ng_container_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275element(4, "i", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275template(8, BulkOperationsComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_8_Template, 4, 2, "button", 6)(9, BulkOperationsComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_9_Template, 4, 2, "button", 6);
    \u0275\u0275elementStart(10, "app-card-actionables", 7);
    \u0275\u0275listener("actionHandler", function BulkOperationsComponent_ng_container_0_Conditional_1_Conditional_0_Template_app_card_actionables_actionHandler_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.performAction($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12, "Bulk Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275listener("click", function BulkOperationsComponent_ng_container_0_Conditional_1_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.bulkSelectionService.deselectAll());
    });
    \u0275\u0275element(14, "i", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const selectionCount_r6 = \u0275\u0275nextContext();
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(8, _c0, ctx_r2.marginLeft + "px", ctx_r2.marginRight + "px"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("items-selected", \u0275\u0275pureFunction1(11, _c1, \u0275\u0275pipeBind1(6, 6, selectionCount_r6))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.hasMarkAsUnread ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasMarkAsRead ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("actions", ctx_r2.actions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r4("deselect-all"));
  }
}
function BulkOperationsComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BulkOperationsComponent_ng_container_0_Conditional_1_Conditional_0_Template, 16, 13, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx > 0 ? 0 : -1);
  }
}
function BulkOperationsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BulkOperationsComponent_ng_container_0_Conditional_1_Template, 1, 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(2, 1, ctx_r2.bulkSelectionService.selections$)) ? 1 : -1, tmp_2_0);
  }
}
var BulkOperationsComponent = class _BulkOperationsComponent {
  constructor() {
    this.modalMode = false;
    this.marginLeft = 0;
    this.marginRight = 8;
    this.hasMarkAsRead = false;
    this.hasMarkAsUnread = false;
    this.actions = [];
    this.destroyRef = inject(DestroyRef);
    this.cdRef = inject(ChangeDetectorRef);
    this.actionFactoryService = inject(ActionFactoryService);
    this.bulkSelectionService = inject(BulkSelectionService);
    this.Action = Action;
  }
  handleKeypress(event) {
    if (event.key === KEY_CODES.SHIFT) {
      this.bulkSelectionService.isShiftDown = true;
    }
  }
  handleKeyUp(event) {
    if (event.key === KEY_CODES.SHIFT) {
      this.bulkSelectionService.isShiftDown = false;
    }
  }
  ngOnInit() {
    this.bulkSelectionService.actions$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((actions) => {
      this.actions = this.actionFactoryService.applyCallbackToList(actions, this.actionCallback.bind(this));
      this.hasMarkAsRead = this.actionFactoryService.hasAction(this.actions, Action.MarkAsRead);
      this.hasMarkAsUnread = this.actionFactoryService.hasAction(this.actions, Action.MarkAsUnread);
      this.cdRef.markForCheck();
    });
  }
  performAction(action) {
    this.actionCallback(action, null);
  }
  executeAction(action) {
    const foundActions = this.actions.filter((act) => act.action === action);
    if (foundActions.length > 0) {
      this.performAction(foundActions[0]);
    }
  }
  static {
    this.\u0275fac = function BulkOperationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkOperationsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _BulkOperationsComponent, selectors: [["app-bulk-operations"]], hostBindings: function BulkOperationsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.shift", function BulkOperationsComponent_keydown_shift_HostBindingHandler($event) {
          return ctx.handleKeypress($event);
        }, false, \u0275\u0275resolveDocument)("keyup.shift", function BulkOperationsComponent_keyup_shift_HostBindingHandler($event) {
          return ctx.handleKeyUp($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { actionCallback: "actionCallback", modalMode: "modalMode", marginLeft: "marginLeft", marginRight: "marginRight" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "bulk-select-container", 3, "ngStyle"], [1, "bulk-select"], [1, "d-flex", "justify-content-around", "align-items-center"], [1, "highlight"], ["aria-hidden", "true", 1, "fa", "fa-check", "me-1"], ["placement", "bottom", 1, "btn", "btn-icon", 3, "ngbTooltip"], ["labelBy", "bulk-actions-header", "iconClass", "fa-ellipsis-h", 3, "actionHandler", "actions"], ["id", "bulk-actions-header", 1, "visually-hidden"], [1, "btn", "btn-icon", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times", "me-1"], ["placement", "bottom", 1, "btn", "btn-icon", 3, "click", "ngbTooltip"], ["aria-hidden", "true", 1, "fa-regular", "fa-circle-check"], [1, "visually-hidden"], ["aria-hidden", "true", 1, "fa-solid", "fa-circle-check"]], template: function BulkOperationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BulkOperationsComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "bulk-operations");
      }
    }, dependencies: [
      AsyncPipe,
      CardActionablesComponent,
      TranslocoModule,
      TranslocoDirective,
      NgbTooltip,
      NgStyle,
      DecimalPipe
    ], styles: ["\n\n.bulk-select-container[_ngcontent-%COMP%] {\n  z-index: 1;\n  top: 0;\n  position: sticky;\n}\n.bulk-select-container[_ngcontent-%COMP%]   .bulk-select[_ngcontent-%COMP%] {\n  background-color: var(--bulk-selection-bg-color);\n  border-bottom: 2px solid var(--primary-color);\n  color: var(--bulk-selection-text-color) !important;\n}\n.bulk-select-container[_ngcontent-%COMP%]   .bulk-select[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  color: var(--bulk-selection-text-color);\n}\n.highlight[_ngcontent-%COMP%] {\n  color: var(--bulk-selection-highlight-text-color) !important;\n}\n/*# sourceMappingURL=bulk-operations.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkOperationsComponent, { className: "BulkOperationsComponent", filePath: "src/app/cards/bulk-operations/bulk-operations.component.ts", lineNumber: 34 });
})();

export {
  BulkOperationsComponent
};
//# sourceMappingURL=chunk-NUIJYMCR.js.map
