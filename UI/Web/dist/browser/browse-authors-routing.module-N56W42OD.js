import {
  PersonService
} from "./chunk-JDXHSOKB.js";
import {
  CardDetailLayoutComponent,
  JumpbarService
} from "./chunk-5ZZKBPDI.js";
import "./chunk-3CC6XT7E.js";
import "./chunk-AVPZRN66.js";
import {
  SideNavCompanionBarComponent
} from "./chunk-UXZKIERU.js";
import "./chunk-MBZDR44C.js";
import "./chunk-3H6WDNS7.js";
import {
  BulkSelectionService
} from "./chunk-OMYYKEHJ.js";
import {
  CompactNumberPipe
} from "./chunk-AFXXYIIH.js";
import "./chunk-LOI3GAWB.js";
import "./chunk-CUVDZVWA.js";
import "./chunk-454HUQZW.js";
import {
  ScrollService
} from "./chunk-7GKAFCLA.js";
import "./chunk-FAULLNLJ.js";
import "./chunk-SBBWMOEE.js";
import {
  CardActionablesComponent
} from "./chunk-W4DBALQX.js";
import {
  ActionService
} from "./chunk-HTPJQXUV.js";
import "./chunk-HG4LWHDT.js";
import "./chunk-6M2JHRYX.js";
import "./chunk-D2FQ65JS.js";
import "./chunk-HSFLUHPU.js";
import "./chunk-4AQVNEIP.js";
import "./chunk-2XUUWUDC.js";
import "./chunk-AOHQX7B2.js";
import "./chunk-ECSSQE2U.js";
import "./chunk-JGJJUNHA.js";
import "./chunk-BJ7U7OXN.js";
import "./chunk-DMXJBIB5.js";
import "./chunk-GX7EGMKV.js";
import "./chunk-M6XH7OA7.js";
import "./chunk-IQIEDCQT.js";
import "./chunk-ZLESQ73K.js";
import "./chunk-RMZ6EY72.js";
import "./chunk-CVI764VQ.js";
import "./chunk-C423WP7Y.js";
import "./chunk-NGXWDHM5.js";
import "./chunk-XZ5MKEYT.js";
import "./chunk-PBM62GK4.js";
import "./chunk-HXDVBBHR.js";
import "./chunk-65GP3B4U.js";
import "./chunk-2L2JQBKQ.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import "./chunk-IBO6ECG5.js";
import "./chunk-BX5PUGWH.js";
import "./chunk-KJWRNOWO.js";
import "./chunk-D7CIAEAO.js";
import "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import "./chunk-R5PSFMI2.js";
import {
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  ActionFactoryService,
  ActivatedRoute,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import {
  MessageHubService
} from "./chunk-PUXELTB2.js";
import {
  Title
} from "./chunk-FLGYJHAG.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  ChangeDetectorRef,
  DecimalPipe,
  DestroyRef,
  EventEmitter,
  NgTemplateOutlet,
  TranslocoDirective,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattributeInterpolate2,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
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
  ɵɵpropertyInterpolate2,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/cards/person-card/person-card.component.ts
var _c0 = ["subtitle"];
var _c1 = () => ({ "border-radius": ".25rem .25rem 0 0" });
var _c2 = () => ({ standalone: true });
var _c3 = (a0) => ({ $implicit: a0 });
function PersonCardComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("imageUrl", ctx_r1.imageUrl)("errorImage", ctx_r1.imageService.noPersonImage)("styles", \u0275\u0275pureFunction0(3, _c1));
  }
}
function PersonCardComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementEnd();
  }
}
function PersonCardComponent_ng_container_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function PersonCardComponent_ng_container_0_Conditional_5_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleSelection($event));
    });
    \u0275\u0275element(1, "input", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("bulk-mode ", ctx_r1.bulkSelectionService.hasSelections() ? "always-show" : "", "");
    \u0275\u0275advance();
    \u0275\u0275attributeInterpolate2("aria-labelledby", "", ctx_r1.title, "_", ctx_r1.entity.id, "");
    \u0275\u0275property("ngModel", ctx_r1.selected)("ngModelOptions", \u0275\u0275pureFunction0(8, _c2));
  }
}
function PersonCardComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.count);
  }
}
function PersonCardComponent_ng_container_0_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13)(1, "app-card-actionables", 15);
    \u0275\u0275listener("actionHandler", function PersonCardComponent_ng_container_0_Conditional_8_Conditional_4_Template_app_card_actionables_actionHandler_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.performAction($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("actions", ctx_r1.actions)("labelBy", ctx_r1.title);
  }
}
function PersonCardComponent_ng_container_0_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275elementContainer(1, 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.subtitleTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, ctx_r1.entity));
  }
}
function PersonCardComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div")(2, "span", 12);
    \u0275\u0275listener("click", function PersonCardComponent_ng_container_0_Conditional_8_Template_span_click_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleClick($event));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PersonCardComponent_ng_container_0_Conditional_8_Conditional_4_Template, 2, 2, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PersonCardComponent_ng_container_0_Conditional_8_Conditional_5_Template, 2, 4, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate2("id", "", ctx_r1.title, "_", ctx_r1.entity.id, "");
    \u0275\u0275property("ngbTooltip", ctx_r1.tooltipTitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.actions && ctx_r1.actions.length > 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.subtitleTemplate ? 5 : -1);
  }
}
function PersonCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 1);
    \u0275\u0275listener("click", function PersonCardComponent_ng_container_0_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleClick($event));
    });
    \u0275\u0275template(3, PersonCardComponent_ng_container_0_Conditional_3_Template, 1, 4, "app-image", 2)(4, PersonCardComponent_ng_container_0_Conditional_4_Template, 2, 0, "div", 3)(5, PersonCardComponent_ng_container_0_Conditional_5_Template, 2, 9, "div", 4)(6, PersonCardComponent_ng_container_0_Conditional_6_Template, 3, 1, "div", 5);
    \u0275\u0275element(7, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PersonCardComponent_ng_container_0_Conditional_8_Template, 6, 7, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("card-item-container card ", ctx_r1.selected ? "selected-highlight" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.entity.coverImage ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allowSelection ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.count > 1 ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.title.length > 0 || ctx_r1.actions.length > 0 ? 8 : -1);
  }
}
var PersonCardComponent = class _PersonCardComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.imageService = inject(ImageService);
    this.bulkSelectionService = inject(BulkSelectionService);
    this.messageHub = inject(MessageHubService);
    this.scrollService = inject(ScrollService);
    this.cdRef = inject(ChangeDetectorRef);
    this.imageUrl = "";
    this.title = "";
    this.selected = false;
    this.actions = [];
    this.allowSelection = false;
    this.count = 0;
    this.clicked = new EventEmitter();
    this.selection = new EventEmitter();
    this.tooltipTitle = this.title;
    this.prevTouchTime = 0;
    this.prevOffset = 0;
    this.selectionInProgress = false;
  }
  onTouchMove(event) {
    if (!this.allowSelection)
      return;
    this.selectionInProgress = false;
    this.cdRef.markForCheck();
  }
  onTouchStart(event) {
    if (!this.allowSelection)
      return;
    this.prevTouchTime = event.timeStamp;
    this.prevOffset = this.scrollService.scrollPosition;
    this.selectionInProgress = true;
  }
  onTouchEnd(event) {
    if (!this.allowSelection)
      return;
    const delta = event.timeStamp - this.prevTouchTime;
    const verticalOffset = this.scrollService.scrollPosition;
    if (delta >= 300 && delta <= 1e3 && verticalOffset === this.prevOffset && this.selectionInProgress) {
      this.handleSelection();
      event.stopPropagation();
      event.preventDefault();
    }
    this.prevTouchTime = 0;
    this.selectionInProgress = false;
  }
  handleClick(event) {
    if (this.bulkSelectionService.hasSelections()) {
      this.handleSelection();
      return;
    }
    this.clicked.emit(this.title);
  }
  performAction(action) {
    if (typeof action.callback === "function") {
      action.callback(action, this.entity);
    }
  }
  handleSelection(event) {
    if (event) {
      event.stopPropagation();
    }
    this.selection.emit(this.selected);
    this.cdRef.detectChanges();
  }
  static {
    this.\u0275fac = function PersonCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonCardComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _PersonCardComponent, selectors: [["app-person-card"]], contentQueries: function PersonCardComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.subtitleTemplate = _t.first);
      }
    }, hostBindings: function PersonCardComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("touchmove", function PersonCardComponent_touchmove_HostBindingHandler($event) {
          return ctx.onTouchMove($event);
        })("touchstart", function PersonCardComponent_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchend", function PersonCardComponent_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        });
      }
    }, inputs: { imageUrl: "imageUrl", title: "title", selected: "selected", actions: "actions", entity: "entity", allowSelection: "allowSelection", count: "count" }, outputs: { clicked: "clicked", selection: "selection" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "overlay", 3, "click"], ["height", "158px", "width", "158px", 3, "imageUrl", "errorImage", "styles"], [1, "missing-img", "mx-auto"], [3, "class"], [1, "count"], [1, "card-overlay"], [1, "card-body"], ["aria-hidden", "true", 1, "fas", "fa-user", "fs-2"], [3, "click"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelOptions"], [1, "badge", "bg-primary"], ["placement", "top", "tabindex", "0", 1, "card-title", 3, "click", "id", "ngbTooltip"], [1, "card-actions", "float-end"], [2, "text-align", "center"], [3, "actionHandler", "actions", "labelBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function PersonCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PersonCardComponent_ng_container_0_Template, 9, 7, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "card-item");
      }
    }, dependencies: [
      NgbTooltip,
      CardActionablesComponent,
      NgTemplateOutlet,
      FormsModule,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgModel,
      ImageComponent,
      TranslocoDirective
    ], styles: ["\n\n.error-banner[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 18px;\n  background-color: var(--toast-error-bg-color);\n  font-size: 12px;\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.selected-highlight[_ngcontent-%COMP%] {\n  outline: 2px solid var(--primary-color);\n}\n.progress-banner[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 5px;\n}\n.progress-banner[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  color: var(--card-progress-bar-color);\n  background-color: transparent;\n}\n.download[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  top: 25%;\n  right: 30%;\n}\n.badge-container[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  display: block;\n  height: 232.91px;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 160px;\n}\n.not-read-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(-1 * var(--card-progress-triangle-size) / 2);\n  right: -14px;\n  z-index: 1000;\n  height: var(--card-progress-triangle-size);\n  width: var(--card-progress-triangle-size);\n  background-color: var(--primary-color);\n  transform: rotate(45deg);\n}\n.bulk-mode[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  visibility: hidden;\n}\n.bulk-mode.always-show[_ngcontent-%COMP%] {\n  visibility: visible !important;\n  width: 160px;\n  height: 232.91px;\n}\n.bulk-mode[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: var(--checkbox-bg-color);\n}\n.meta-title[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n  pointer-events: none;\n  border-width: 0;\n}\n.overlay[_ngcontent-%COMP%]:hover   .bulk-mode[_ngcontent-%COMP%] {\n  visibility: visible;\n  z-index: 110;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover {\n  visibility: visible;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover   .overlay-information[_ngcontent-%COMP%] {\n  visibility: visible;\n  display: block;\n}\n.overlay[_ngcontent-%COMP%]:hover:hover    + .meta-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  visibility: visible;\n  pointer-events: none;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 232.91px;\n  transition: all 0.2s;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]:hover {\n  background-color: var(--card-overlay-hover-bg-color);\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 50px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 115;\n}\n.overlay[_ngcontent-%COMP%]:hover   .overlay-information[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color) !important;\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  top: 5px;\n  right: 10px;\n  position: absolute;\n}\n.card-actions[_ngcontent-%COMP%] {\n  z-index: 115;\n}\n.library[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-decoration: none;\n  margin-top: 0px;\n}\n.card-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 5px;\n}\n.card-title-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  min-width: 22px;\n}\n.card-title-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  text-align: center;\n  max-width: 90px;\n}\n.card-title-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-actions[_ngcontent-%COMP%] {\n  min-width: 15.82px;\n}\n.card-format[_ngcontent-%COMP%] {\n  min-width: 22px;\n}\n  app-card-actionables .dropdown .dropdown-toggle {\n  padding: 0 5px;\n}\n.meta-title[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  padding: 10px 0;\n  text-align: center;\n  max-width: 120px;\n}\n.card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  height: 40px;\n  overflow: hidden;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  font-size: 0.8rem;\n}\n.overlay-information[_ngcontent-%COMP%] {\n  visibility: hidden;\n  display: none;\n}\n.overlay-information[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.chapter[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.volume[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.expected[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n.chapter[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.volume[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.series[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.expected[_ngcontent-%COMP%]   .overlay-information--centered[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 32px;\n}\n.bulk-mode.always-show[_ngcontent-%COMP%] {\n  height: 160px;\n}\n.card-item-container[_ngcontent-%COMP%] {\n  background-color: unset;\n  border: 1px solid transparent;\n  transition: all ease-in-out 300ms;\n}\n.card-item-container[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  height: 160px;\n  position: relative;\n  display: flex;\n  background-color: hsla(0, 0%, 0%, 0.12);\n}\n.card-item-container[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .missing-img[_ngcontent-%COMP%] {\n  align-self: center;\n  display: flex;\n}\n.card-item-container[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .card-overlay[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.card-item-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  bottom: 0;\n  background-color: transparent;\n  position: unset !important;\n  margin-bottom: 5px;\n  display: flex;\n  flex-direction: column;\n}\n.card-item-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.card-item-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=person-card.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonCardComponent, { className: "PersonCardComponent", filePath: "src/app/cards/person-card/person-card.component.ts", lineNumber: 44 });
})();

// src/app/browse-people/browse-authors.component.ts
var _c02 = (a0) => ({ num: a0 });
function BrowseAuthorsComponent_ng_container_1_ng_template_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "compactNumber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "compactNumber");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, item_r2.seriesCount), " series");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 4, item_r2.issueCount), " issues");
  }
}
function BrowseAuthorsComponent_ng_container_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-person-card", 7);
    \u0275\u0275listener("clicked", function BrowseAuthorsComponent_ng_container_1_ng_template_9_Template_app_person_card_clicked_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPerson(item_r2));
    });
    \u0275\u0275template(1, BrowseAuthorsComponent_ng_container_1_ng_template_9_ng_template_1_Template, 7, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("entity", item_r2)("title", item_r2.name)("imageUrl", ctx_r2.imageService.getPersonImage(item_r2.id));
  }
}
function BrowseAuthorsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-side-nav-companion-bar", 4)(2, "h2", 5)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h6", 1);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "app-card-detail-layout", 6);
    \u0275\u0275template(9, BrowseAuthorsComponent_ng_container_1_ng_template_9_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("hasFilter", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", t_r4("author-count", \u0275\u0275pureFunction1(12, _c02, \u0275\u0275pipeBind1(7, 10, ctx_r2.pagination.totalItems))), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("isLoading", ctx_r2.isLoading)("items", ctx_r2.authors)("pagination", ctx_r2.pagination)("trackByIdentity", ctx_r2.trackByIdentity)("jumpBarKeys", ctx_r2.jumpKeys)("filteringDisabled", true)("refresh", ctx_r2.refresh);
  }
}
var BrowseAuthorsComponent = class _BrowseAuthorsComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.cdRef = inject(ChangeDetectorRef);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.titleService = inject(Title);
    this.actionFactoryService = inject(ActionFactoryService);
    this.actionService = inject(ActionService);
    this.hubService = inject(MessageHubService);
    this.utilityService = inject(UtilityService);
    this.personService = inject(PersonService);
    this.jumpbarService = inject(JumpbarService);
    this.imageService = inject(ImageService);
    this.series = [];
    this.isLoading = false;
    this.authors = [];
    this.pagination = { currentPage: 0, totalPages: 0, totalItems: 0, itemsPerPage: 0 };
    this.refresh = new EventEmitter();
    this.jumpKeys = [];
    this.trackByIdentity = (index, item) => `${item.id}`;
  }
  ngOnInit() {
    this.isLoading = true;
    this.cdRef.markForCheck();
    this.personService.getAuthorsToBrowse(void 0, void 0).subscribe((d) => {
      this.authors = d.result;
      this.pagination = d.pagination;
      this.jumpKeys = this.jumpbarService.getJumpKeys(this.authors, (d2) => d2.name);
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }
  goToPerson(person) {
    this.router.navigate(["person", person.name]);
  }
  static {
    this.\u0275fac = function BrowseAuthorsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowseAuthorsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _BrowseAuthorsComponent, selectors: [["app-browse-authors"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["cardItem", ""], ["subtitle", ""], [1, "main-container", "container-fluid"], [4, "transloco", "translocoRead"], [3, "hasFilter"], ["title", ""], [3, "isLoading", "items", "pagination", "trackByIdentity", "jumpBarKeys", "filteringDisabled", "refresh"], [3, "clicked", "entity", "title", "imageUrl"], [1, "d-flex", "justify-content-evenly"], [2, "font-size", "12px"]], template: function BrowseAuthorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, BrowseAuthorsComponent_ng_container_1_Template, 11, 14, "ng-container", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("translocoRead", "browse-authors");
      }
    }, dependencies: [
      SideNavCompanionBarComponent,
      TranslocoDirective,
      CardDetailLayoutComponent,
      DecimalPipe,
      PersonCardComponent,
      CompactNumberPipe
    ], styles: ["\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0 0 0 10px;\n}\n/*# sourceMappingURL=browse-authors.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrowseAuthorsComponent, { className: "BrowseAuthorsComponent", filePath: "src/app/browse-people/browse-authors.component.ts", lineNumber: 50 });
})();

// src/app/_routes/browse-authors-routing.module.ts
var routes = [
  { path: "", component: BrowseAuthorsComponent, pathMatch: "full" }
];
export {
  routes
};
//# sourceMappingURL=browse-authors-routing.module-N56W42OD.js.map
