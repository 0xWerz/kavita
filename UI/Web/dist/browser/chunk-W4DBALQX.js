import {
  Breakpoint,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  AccountService,
  Action
} from "./chunk-U2DWQJI2.js";
import {
  NgbActiveModal,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal
} from "./chunk-2R2RCU4Y.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  DestroyRef,
  EventEmitter,
  NgTemplateOutlet,
  TranslocoDirective,
  __spreadProps,
  __spreadValues,
  inject,
  takeUntilDestroyed,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattributeInterpolate1,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/_single-module/card-actionables/_pipes/dynamic-list.pipe.ts
var DynamicListPipe = class _DynamicListPipe {
  transform(value) {
    if (value === void 0 || value === null)
      return [];
    return value;
  }
  static {
    this.\u0275fac = function DynamicListPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DynamicListPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "dynamicList", type: _DynamicListPipe, pure: true, standalone: true });
  }
};

// src/app/_single-module/actionable-modal/actionable-modal.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _c0 = (a0) => ({ action: a0 });
function ActionableModalComponent_ng_container_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ActionableModalComponent_ng_container_0_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleBack());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2190 ", t_r4("back-to", \u0275\u0275pureFunction1(1, _c0, ctx_r1.currentLevel[ctx_r1.currentLevel.length - 1])), " ");
  }
}
function ActionableModalComponent_ng_container_0_For_10_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function ActionableModalComponent_ng_container_0_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ActionableModalComponent_ng_container_0_For_10_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const action_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleItemClick(action_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, ActionableModalComponent_ng_container_0_For_10_Conditional_0_Conditional_2_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r6.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(action_r6.children.length > 0 || action_r6.dynamicList ? 2 : -1);
  }
}
function ActionableModalComponent_ng_container_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActionableModalComponent_ng_container_0_For_10_Conditional_0_Template, 3, 2, "button", 9);
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.willRenderAction(action_r6) ? 0 : -1);
  }
}
function ActionableModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h4", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ActionableModalComponent_ng_container_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modal.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275template(7, ActionableModalComponent_ng_container_0_Conditional_7_Template, 2, 3, "button", 6);
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275repeaterCreate(9, ActionableModalComponent_ng_container_0_For_10_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("title"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.currentLevel.length > 0 ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.currentItems);
  }
}
var ActionableModalComponent = class _ActionableModalComponent {
  constructor() {
    this.utilityService = inject(UtilityService);
    this.modal = inject(NgbActiveModal);
    this.accountService = inject(AccountService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.Breakpoint = Breakpoint;
    this.actions = [];
    this.actionPerformed = new EventEmitter();
    this.currentLevel = [];
    this.currentItems = [];
  }
  ngOnInit() {
    this.currentItems = this.translateOptions(this.actions);
    this.accountService.currentUser$.pipe(tap((user) => {
      this.user = user;
      this.cdRef.markForCheck();
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  handleItemClick(item) {
    if (item.children && item.children.length > 0) {
      this.currentLevel.push(item.title);
      if (item.children.length === 1 && item.children[0].dynamicList) {
        item.children[0].dynamicList.subscribe((dynamicItems) => {
          this.currentItems = dynamicItems.map((di) => __spreadProps(__spreadValues({}, item), {
            children: [],
            title: di.title,
            _extra: di,
            action: item.children[0].action
          }));
        });
      } else {
        this.currentItems = this.translateOptions(item.children);
      }
    } else {
      this.actionPerformed.emit(item);
      this.modal.close(item);
    }
    this.cdRef.markForCheck();
  }
  handleBack() {
    if (this.currentLevel.length > 0) {
      this.currentLevel.pop();
      let items = this.actions;
      for (let level of this.currentLevel) {
        items = items.find((item) => item.title === level)?.children || [];
      }
      this.currentItems = this.translateOptions(items);
      this.cdRef.markForCheck();
    }
  }
  translateOptions(opts) {
    return opts.map((a) => {
      return __spreadProps(__spreadValues({}, a), { title: translate("actionable." + a.title) });
    });
  }
  static {
    this.\u0275fac = function ActionableModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActionableModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ActionableModalComponent, selectors: [["app-actionable-modal"]], inputs: { actions: "actions", willRenderAction: "willRenderAction", shouldRenderSubMenu: "shouldRenderSubMenu" }, outputs: { actionPerformed: "actionPerformed" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "modal-container"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "close", 1, "btn-close", 3, "click"], [1, "modal-body", "scrollable-modal"], [1, "btn", "btn-secondary", "w-100", "mb-3", "text-start"], [1, "d-grid", "gap-2"], [1, "btn", "btn-secondary", "w-100", "mb-3", "text-start", 3, "click"], [1, "btn", "btn-outline-primary", "text-start", "d-flex", "justify-content-between", "align-items-center", "w-100"], [1, "btn", "btn-outline-primary", "text-start", "d-flex", "justify-content-between", "align-items-center", "w-100", 3, "click"], [1, "ms-1"]], template: function ActionableModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ActionableModalComponent_ng_container_0_Template, 11, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "actionable");
      }
    }, dependencies: [TranslocoDirective], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionableModalComponent, { className: "ActionableModalComponent", filePath: "src/app/_single-module/actionable-modal/actionable-modal.component.ts", lineNumber: 31 });
})();

// src/app/_single-module/card-actionables/card-actionables.component.ts
var _forTrack02 = ($index, $item) => $item.title;
var _c02 = (a0) => ({ list: a0 });
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openMobileActionableMenu($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275element(2, "i", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMapInterpolate1("btn ", ctx_r1.btnClass, " px-3");
    \u0275\u0275propertyInterpolate1("id", "actions-", ctx_r1.labelBy, "");
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa ", ctx_r1.iconClass, "");
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Conditional_0_For_1_Template_button_click_0_listener($event) {
      const dynamicItem_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const action_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.performDynamicClick($event, action_r6, dynamicItem_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dynamicItem_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dynamicItem_r5.title);
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Conditional_0_For_1_Template, 2, 1, "button", 10, _forTrack02);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx);
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Conditional_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const action_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.performAction($event, action_r6));
    })("mouseover", function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Conditional_3_Template_button_mouseover_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.closeAllSubmenus());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r6 = \u0275\u0275nextContext(2).$implicit;
    const t_r8 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r8(action_r6.title));
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Conditional_0_Template, 2, 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "dynamicList");
    \u0275\u0275template(3, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Conditional_3_Template, 2, 1, "button", 10);
  }
  if (rf & 2) {
    let tmp_18_0;
    const action_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional((tmp_18_0 = action_r6.dynamicList !== void 0 && \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, action_r6.dynamicList))) ? 0 : ctx_r1.willRenderAction(action_r6) ? 3 : -1, tmp_18_0);
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r6 = \u0275\u0275nextContext(3).$implicit;
    const t_r8 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275propertyInterpolate1("id", "actions-", action_r6.title, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r8(action_r6.title), " ");
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Conditional_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14, 1);
    \u0275\u0275listener("click", function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const subMenuHover_r10 = \u0275\u0275reference(1);
      const action_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.preventEvent($event);
      return \u0275\u0275resetView(ctx_r1.openSubmenu(action_r6.title, subMenuHover_r10));
    })("mouseover", function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Conditional_0_Template_div_mouseover_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const subMenuHover_r10 = \u0275\u0275reference(1);
      const action_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.preventEvent($event);
      return \u0275\u0275resetView(ctx_r1.openSubmenu(action_r6.title, subMenuHover_r10));
    })("mouseleave", function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Conditional_0_Template_div_mouseleave_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.preventEvent($event));
    });
    \u0275\u0275template(2, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Conditional_0_Conditional_2_Template, 3, 3, "button", 15);
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Conditional_0_ng_container_4_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275nextContext(2);
    const submenu_r11 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.willRenderAction(action_r6) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275attributeInterpolate1("aria-labelledby", "actions-", action_r6.title, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", submenu_r11)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c02, action_r6.children));
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Conditional_0_Template, 5, 7, "div", 13);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const action_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r1.shouldRenderSubMenu(action_r6, \u0275\u0275pipeBind1(1, 1, action_r6.children == null ? null : action_r6.children[0].dynamicList)) ? 0 : -1);
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_0_Template, 4, 5)(1, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    \u0275\u0275conditional(action_r6.children === void 0 || (action_r6 == null ? null : action_r6.children == null ? null : action_r6.children.length) === 0 || action_r6.dynamicList !== void 0 ? 0 : 1);
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_For_1_Template, 2, 1, null, null, _forTrack02);
  }
  if (rf & 2) {
    const list_r12 = ctx.list;
    \u0275\u0275repeater(list_r12);
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 7);
    \u0275\u0275listener("click", function CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.preventEvent($event));
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275template(5, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_container_5_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_ng_template_6_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const submenu_r11 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("btn ", ctx_r1.btnClass, " px-3");
    \u0275\u0275propertyInterpolate1("id", "actions-", ctx_r1.labelBy, "");
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("fa ", ctx_r1.iconClass, "");
    \u0275\u0275advance();
    \u0275\u0275attributeInterpolate1("aria-labelledby", "actions-", ctx_r1.labelBy, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", submenu_r11)("ngTemplateOutletContext", \u0275\u0275pureFunction1(14, _c02, ctx_r1.actions));
  }
}
function CardActionablesComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_0_Template, 3, 10, "button", 3);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, CardActionablesComponent_ng_container_0_Conditional_1_Conditional_2_Template, 8, 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx_r1.utilityService.activeBreakpoint$) <= ctx_r1.Breakpoint.Tablet ? 0 : 2);
  }
}
function CardActionablesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CardActionablesComponent_ng_container_0_Conditional_1_Template, 3, 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.actions.length > 0 ? 1 : -1);
  }
}
var CardActionablesComponent = class _CardActionablesComponent {
  constructor() {
    this.cdRef = inject(ChangeDetectorRef);
    this.accountService = inject(AccountService);
    this.destroyRef = inject(DestroyRef);
    this.utilityService = inject(UtilityService);
    this.modalService = inject(NgbModal);
    this.Breakpoint = Breakpoint;
    this.iconClass = "fa-ellipsis-v";
    this.btnClass = "";
    this.actions = [];
    this.labelBy = "card";
    this.label = "";
    this.disabled = false;
    this.actionHandler = new EventEmitter();
    this.isAdmin = false;
    this.canDownload = false;
    this.canPromote = false;
    this.submenu = {};
  }
  ngOnInit() {
    this.accountService.currentUser$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user) => {
      if (!user)
        return;
      this.isAdmin = this.accountService.hasAdminRole(user);
      this.canDownload = this.accountService.hasDownloadRole(user);
      this.canPromote = this.accountService.hasPromoteRole(user);
      if (!this.isAdmin && this.actions.filter((a) => !a.requiresAdmin).length === 0) {
        this.actions = [];
      }
      this.cdRef.markForCheck();
    });
  }
  preventEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  performAction(event, action) {
    this.preventEvent(event);
    if (typeof action.callback === "function") {
      this.actionHandler.emit(action);
    }
  }
  willRenderAction(action) {
    return action.requiresAdmin && this.isAdmin || action.action === Action.Download && (this.canDownload || this.isAdmin) || !action.requiresAdmin && action.action !== Action.Download || action.action === Action.Promote && (this.canPromote || this.isAdmin) || action.action === Action.UnPromote && (this.canPromote || this.isAdmin);
  }
  shouldRenderSubMenu(action, dynamicList) {
    return action.children[0].dynamicList === void 0 || action.children[0].dynamicList === null || dynamicList !== null && dynamicList.length > 0;
  }
  openSubmenu(actionTitle, subMenu) {
    if (Object.keys(this.submenu).length > 0) {
      const keys = Object.keys(this.submenu).filter((k) => k !== actionTitle);
      keys.forEach((key) => {
        this.submenu[key].close();
        delete this.submenu[key];
      });
    }
    this.submenu[actionTitle] = subMenu;
    subMenu.open();
  }
  closeAllSubmenus() {
    Object.keys(this.submenu).forEach((key) => {
      this.submenu[key].close();
      delete this.submenu[key];
    });
  }
  performDynamicClick(event, action, dynamicItem) {
    action._extra = dynamicItem;
    this.performAction(event, action);
  }
  openMobileActionableMenu(event) {
    this.preventEvent(event);
    const ref = this.modalService.open(ActionableModalComponent, { fullscreen: true, centered: true });
    ref.componentInstance.actions = this.actions;
    ref.componentInstance.willRenderAction = this.willRenderAction.bind(this);
    ref.componentInstance.shouldRenderSubMenu = this.shouldRenderSubMenu.bind(this);
    ref.componentInstance.actionPerformed.subscribe((action) => {
      this.performAction(event, action);
    });
  }
  static {
    this.\u0275fac = function CardActionablesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardActionablesComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _CardActionablesComponent, selectors: [["app-card-actionables"]], inputs: { iconClass: "iconClass", btnClass: "btnClass", actions: "actions", labelBy: "labelBy", label: "label", disabled: "disabled" }, outputs: { actionHandler: "actionHandler" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["submenu", ""], ["subMenuHover", "ngbDropdown"], [4, "transloco", "translocoRead"], [3, "disabled", "class", "id"], [3, "click", "disabled", "id"], ["aria-hidden", "true"], ["ngbDropdown", "", "container", "body", 1, "d-inline-block"], ["ngbDropdownToggle", "", 3, "click", "disabled", "id"], ["ngbDropdownMenu", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ngbDropdownItem", ""], ["ngbDropdownItem", "", 3, "click"], ["ngbDropdownItem", "", 3, "click", "mouseover"], ["ngbDropdown", "", "placement", "right left"], ["ngbDropdown", "", "placement", "right left", 3, "click", "mouseover", "mouseleave"], ["ngbDropdownToggle", "", 1, "submenu-toggle", 3, "id"], [1, "fa-solid", "fa-angle-right", "submenu-icon"]], template: function CardActionablesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CardActionablesComponent_ng_container_0_Template, 2, 1, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "actionable");
      }
    }, dependencies: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, DynamicListPipe, TranslocoDirective, AsyncPipe, NgTemplateOutlet], styles: ["\n\n.dropdown-toggle[_ngcontent-%COMP%]:after {\n  content: none !important;\n}\n.submenu-toggle[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);\n  font-weight: 400;\n  text-align: inherit;\n  border: 0;\n  color: var(--dropdown-item-text-color);\n  background-color: var(--dropdown-item-bg-color);\n}\n.submenu-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--dropdown-item-text-color);\n  background-color: var(--dropdown-item-hover-bg-color);\n  cursor: pointer;\n}\n.submenu-toggle[_ngcontent-%COMP%]:focus-visible {\n  color: var(--dropdown-item-text-color);\n  background-color: var(--dropdown-item-hover-bg-color);\n}\n.submenu-icon[_ngcontent-%COMP%] {\n  float: right;\n  padding: var(--bs-dropdown-item-padding-y) 0;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=card-actionables.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardActionablesComponent, { className: "CardActionablesComponent", filePath: "src/app/_single-module/card-actionables/card-actionables.component.ts", lineNumber: 29 });
})();

export {
  CardActionablesComponent
};
//# sourceMappingURL=chunk-W4DBALQX.js.map
