import {
  CardActionablesComponent
} from "./chunk-W4DBALQX.js";
import {
  SelectionModel
} from "./chunk-WQSUGJVO.js";
import {
  TimeAgoPipe
} from "./chunk-WOFHNJUD.js";
import {
  ActionService,
  LibrarySettingsModalComponent,
  LibraryTypePipe
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
import {
  DefaultDatePipe
} from "./chunk-DMXJBIB5.js";
import "./chunk-GX7EGMKV.js";
import "./chunk-M6XH7OA7.js";
import {
  SentenceCasePipe
} from "./chunk-IQIEDCQT.js";
import "./chunk-ZLESQ73K.js";
import "./chunk-NGXWDHM5.js";
import "./chunk-XZ5MKEYT.js";
import {
  LibraryService
} from "./chunk-PBM62GK4.js";
import "./chunk-HXDVBBHR.js";
import "./chunk-65GP3B4U.js";
import "./chunk-2JLAQ3MZ.js";
import "./chunk-TPURWX2Y.js";
import "./chunk-BX5PUGWH.js";
import "./chunk-KJWRNOWO.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import {
  Select2Module
} from "./chunk-LGLLZBOI.js";
import "./chunk-EA72DBFY.js";
import "./chunk-HN36WWH3.js";
import "./chunk-R5PSFMI2.js";
import {
  Breakpoint,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  Action,
  ActionFactoryService,
  RouterLink
} from "./chunk-U2DWQJI2.js";
import {
  ConfirmService,
  NgbActiveModal,
  NgbModal,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import {
  EVENTS,
  MessageHubService
} from "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import {
  CheckboxControlValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  DestroyRef,
  NgTemplateOutlet,
  TranslocoDirective,
  TranslocoModule,
  __async,
  catchError,
  distinctUntilChanged,
  filter,
  inject,
  take,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/admin/_modals/copy-settings-from-library-modal/copy-settings-from-library-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CopySettingsFromLibraryModalComponent_ng_container_0_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lib_r3 = ctx.$implicit;
    \u0275\u0275property("value", lib_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lib_r3.name);
  }
}
function CopySettingsFromLibraryModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "h4", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275listener("click", function CopySettingsFromLibraryModalComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modal.close(null));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "form", 5)(9, "select", 6)(10, "option", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, CopySettingsFromLibraryModalComponent_ng_container_0_For_13_Template, 2, 2, "option", 7, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
    \u0275\u0275listener("click", function CopySettingsFromLibraryModalComponent_ng_container_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modal.close(null));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 10);
    \u0275\u0275listener("click", function CopySettingsFromLibraryModalComponent_ng_container_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("title"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("close"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("description"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.libForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("select-option"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.libraries);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("close"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("select"));
  }
}
var CopySettingsFromLibraryModalComponent = class _CopySettingsFromLibraryModalComponent {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.libraries = [];
    this.libForm = new FormGroup({
      "library": new FormControl(null)
    });
  }
  save() {
    this.modal.close(parseInt(this.libForm.get("library")?.value + "", 10));
  }
  static {
    this.\u0275fac = function CopySettingsFromLibraryModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CopySettingsFromLibraryModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _CopySettingsFromLibraryModalComponent, selectors: [["app-copy-settings-from-library-modal"]], inputs: { libraries: "libraries" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], ["formControlName", "library", 1, "form-select"], [3, "value"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function CopySettingsFromLibraryModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CopySettingsFromLibraryModalComponent_ng_container_0_Template, 19, 8, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "copy-settings-from-library-modal");
      }
    }, dependencies: [
      TranslocoDirective,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CopySettingsFromLibraryModalComponent, { className: "CopySettingsFromLibraryModalComponent", filePath: "src/app/admin/_modals/copy-settings-from-library-modal/copy-settings-from-library-modal.component.ts", lineNumber: 18 });
})();

// src/app/admin/manage-library/manage-library.component.ts
var _forTrack02 = ($index, $item) => $item.name + $item.type + $item.folders.length + $item.lastScanned;
var _c0 = (a0) => ({ libraryName: a0 });
var _c1 = (a0) => ({ name: a0 });
function ManageLibraryComponent_ng_container_0_Conditional_8_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate(t_r4("include-type-tooltip"));
  }
}
function ManageLibraryComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "form", 14)(3, "div", 15);
    \u0275\u0275element(4, "input", 16);
    \u0275\u0275elementStart(5, "label", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "i", 18);
    \u0275\u0275template(8, ManageLibraryComponent_ng_container_0_Conditional_8_ng_template_8_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(10, "span", 19);
    \u0275\u0275elementContainer(11, 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 21)(13, "button", 22);
    \u0275\u0275listener("click", function ManageLibraryComponent_ng_container_0_Conditional_8_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetBulkMode());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 23);
    \u0275\u0275listener("click", function ManageLibraryComponent_ng_container_0_Conditional_8_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyBulkAction());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const includeTypeTooltip_r5 = \u0275\u0275reference(9);
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("bulk-copy-to", \u0275\u0275pureFunction1(8, _c0, ctx_r1.sourceCopyToLibrary.name)), " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.bulkForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("include-type-label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", includeTypeTooltip_r5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", includeTypeTooltip_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("cancel"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.hasSomeSelected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("apply"));
  }
}
function ManageLibraryComponent_ng_container_0_For_29_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card-actionables", 29);
    \u0275\u0275listener("actionHandler", function ManageLibraryComponent_ng_container_0_For_29_Conditional_19_Template_app_card_actionables_actionHandler_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const library_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.performAction($event, library_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("actions", ctx_r1.actions);
  }
}
function ManageLibraryComponent_ng_container_0_For_29_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ManageLibraryComponent_ng_container_0_For_29_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const library_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scanLibrary(library_r8));
    });
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 32);
    \u0275\u0275listener("click", function ManageLibraryComponent_ng_container_0_For_29_Conditional_21_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const library_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteLibrary(library_r8));
    });
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275pipe(4, "sentenceCase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 34);
    \u0275\u0275listener("click", function ManageLibraryComponent_ng_container_0_For_29_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const library_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editLibrary(library_r8));
    });
    \u0275\u0275element(6, "i", 35);
    \u0275\u0275pipe(7, "sentenceCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const library_r8 = \u0275\u0275nextContext().$implicit;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbTooltip", t_r4("scan-library"));
    \u0275\u0275attribute("aria-label", t_r4("scan-library"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.deletionInProgress);
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", t_r4("delete-library"));
    \u0275\u0275attribute("aria-label", t_r4("delete-library-by-name", \u0275\u0275pureFunction1(11, _c1, \u0275\u0275pipeBind1(4, 7, library_r8.name))));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngbTooltip", t_r4("edit-library"));
    \u0275\u0275attribute("aria-label", t_r4("edit-library-by-name", \u0275\u0275pureFunction1(13, _c1, \u0275\u0275pipeBind1(7, 9, library_r8.name))));
  }
}
function ManageLibraryComponent_ng_container_0_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 11)(3, "input", 24);
    \u0275\u0275listener("change", function ManageLibraryComponent_ng_container_0_For_29_Template_input_change_3_listener() {
      const ctx_r6 = \u0275\u0275restoreView(_r6);
      const library_r8 = ctx_r6.$implicit;
      const \u0275$index_80_r9 = ctx_r6.$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleSelection(library_r8, \u0275$index_80_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td", 26)(7, "a", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "libraryType");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "timeAgo");
    \u0275\u0275pipe(17, "defaultDate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275template(19, ManageLibraryComponent_ng_container_0_For_29_Conditional_19_Template, 1, 1, "app-card-actionables", 28);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275template(21, ManageLibraryComponent_ng_container_0_For_29_Conditional_21_Template, 8, 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const library_r8 = ctx.$implicit;
    const \u0275$index_80_r9 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("id", "select-library-", \u0275$index_80_r9, "");
    \u0275\u0275property("ngModel", ctx_r1.selections.isSelected(library_r8));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("for", "select-library-", \u0275$index_80_r9, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(library_r8.name);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("id", "library--", \u0275$index_80_r9, "");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/library/" + library_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(library_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, library_r8.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", library_r8.folders.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 18, \u0275\u0275pipeBind1(16, 16, library_r8.lastScanned)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(20, 20, ctx_r1.useActionables$) ? 19 : 21);
  }
}
function ManageLibraryComponent_ng_container_0_ForEmpty_30_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275element(2, "app-loading", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r1.loading);
  }
}
function ManageLibraryComponent_ng_container_0_ForEmpty_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("no-data"));
  }
}
function ManageLibraryComponent_ng_container_0_ForEmpty_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ManageLibraryComponent_ng_container_0_ForEmpty_30_Conditional_0_Template, 3, 1, "tr")(1, ManageLibraryComponent_ng_container_0_ForEmpty_30_Conditional_1_Template, 3, 1, "tr");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.loading ? 0 : 1);
  }
}
function ManageLibraryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "app-card-actionables", 4);
    \u0275\u0275listener("actionHandler", function ManageLibraryComponent_ng_container_0_Template_app_card_actionables_actionHandler_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBulkAction($event, null));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function ManageLibraryComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addLibrary());
    });
    \u0275\u0275element(5, "i", 6);
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, ManageLibraryComponent_ng_container_0_Conditional_8_Template, 17, 10, "div", 8);
    \u0275\u0275elementStart(9, "table", 9)(10, "thead")(11, "tr")(12, "th", 10)(13, "div", 11)(14, "input", 12);
    \u0275\u0275listener("change", function ManageLibraryComponent_ng_container_0_Template_input_change_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "th", 10);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 10);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 10);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 10);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, ManageLibraryComponent_ng_container_0_For_29_Template, 22, 22, "tr", null, _forTrack02, false, ManageLibraryComponent_ng_container_0_ForEmpty_30_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("actions", ctx_r1.bulkActions)("label", t_r4("bulk-action-label"))("disabled", ctx_r1.bulkMode);
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r4("add-library"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("add-library"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bulkMode && ctx_r1.bulkAction === ctx_r1.Action.CopySettings && ctx_r1.sourceCopyToLibrary ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.selectAll)("indeterminate", ctx_r1.hasSomeSelected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("select-all"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("name-header"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("type-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("shared-folders-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("last-scanned-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("actions-header"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.libraries);
  }
}
var ManageLibraryComponent = class _ManageLibraryComponent {
  constructor() {
    this.libraryService = inject(LibraryService);
    this.modalService = inject(NgbModal);
    this.toastr = inject(ToastrService);
    this.confirmService = inject(ConfirmService);
    this.hubService = inject(MessageHubService);
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.utilityService = inject(UtilityService);
    this.actionFactoryService = inject(ActionFactoryService);
    this.actionService = inject(ActionService);
    this.Breakpoint = Breakpoint;
    this.Action = Action;
    this.actions = this.actionFactoryService.getLibraryActions(this.handleAction.bind(this));
    this.bulkActions = this.actionFactoryService.getBulkLibraryActions(this.handleBulkAction.bind(this));
    this.libraries = [];
    this.loading = false;
    this.deletionInProgress = false;
    this.useActionableSource = new BehaviorSubject(this.utilityService.getActiveBreakpoint() <= Breakpoint.Tablet);
    this.useActionables$ = this.useActionableSource.asObservable();
    this.selectAll = false;
    this.bulkMode = false;
    this.bulkAction = null;
    this.sourceCopyToLibrary = null;
    this.bulkForm = new FormGroup({ "includeType": new FormControl(false) });
    this.isShiftDown = false;
    this.lastSelectedIndex = null;
  }
  handleKeypress(event) {
    this.isShiftDown = true;
  }
  handleKeyUp(event) {
    this.isShiftDown = false;
  }
  onResize() {
    this.useActionableSource.next(this.utilityService.getActiveBreakpoint() <= Breakpoint.Tablet);
  }
  get hasSomeSelected() {
    return this.selections != null && this.selections.hasSomeSelected();
  }
  ngOnInit() {
    this.getLibraries();
    this.hubService.messages$.pipe(takeUntilDestroyed(this.destroyRef), filter((event) => event.event === EVENTS.ScanSeries || event.event === EVENTS.NotificationProgress), distinctUntilChanged((prev, curr) => this.hasMessageChanged(prev, curr))).subscribe((event) => {
      let libId = 0;
      if (event.event === EVENTS.ScanSeries) {
        libId = event.payload.libraryId;
      } else {
        if (event.payload.body.hasOwnProperty("libraryId")) {
          libId = event.payload.body.libraryId;
        }
      }
      this.libraryService.getLibraries().pipe(take(1)).subscribe((libraries) => {
        const newLibrary = libraries.find((lib) => lib.id === libId);
        const existingLibrary = this.libraries.find((lib) => lib.id === libId);
        if (existingLibrary !== void 0) {
          existingLibrary.lastScanned = newLibrary?.lastScanned || existingLibrary.lastScanned;
          this.cdRef.markForCheck();
        }
      });
    });
  }
  hasMessageChanged(prev, curr) {
    if (curr.event !== prev.event)
      return true;
    if (curr.event === EVENTS.ScanSeries) {
      return prev.payload.libraryId === curr.payload.libraryId;
    }
    if (curr.event === EVENTS.NotificationProgress) {
      return prev.payload.eventType != curr.payload.eventType;
    }
    return false;
  }
  getLibraries() {
    this.loading = true;
    this.cdRef.markForCheck();
    this.libraryService.getLibraries().pipe(take(1), takeUntilDestroyed(this.destroyRef)).subscribe((libraries) => {
      this.libraries = [...libraries];
      this.setupSelections();
      this.resetBulkMode();
      this.loading = false;
      this.cdRef.markForCheck();
    });
  }
  editLibrary(library) {
    const modalRef = this.modalService.open(LibrarySettingsModalComponent, { size: "xl", fullscreen: "md" });
    modalRef.componentInstance.library = library;
    modalRef.closed.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((refresh) => {
      if (refresh) {
        this.getLibraries();
      }
    });
  }
  addLibrary() {
    const modalRef = this.modalService.open(LibrarySettingsModalComponent, { size: "xl", fullscreen: "md" });
    modalRef.closed.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((refresh) => {
      if (refresh) {
        this.getLibraries();
      }
    });
  }
  deleteLibrary(library) {
    return __async(this, null, function* () {
      if (yield this.confirmService.confirm(translate("toasts.confirm-library-delete", { name: library.name }))) {
        this.deletionInProgress = true;
        this.libraryService.delete(library.id).pipe(take(1)).subscribe(() => {
          this.deletionInProgress = false;
          this.cdRef.markForCheck();
          this.getLibraries();
          this.toastr.success(translate("toasts.library-deleted", { name: library.name }));
        });
      }
    });
  }
  scanLibrary(library) {
    return __async(this, null, function* () {
      yield this.actionService.scanLibrary(library);
    });
  }
  applyBulkAction() {
    return __async(this, null, function* () {
      let selected = this.selections.selected();
      if (this.bulkAction === Action.CopySettings) {
        selected = selected.filter((l) => l.id !== this.sourceCopyToLibrary.id);
      }
      if (selected.length === 0) {
        yield this.confirmService.alert(translate("toasts.must-select-library"));
        return;
      }
      switch (this.bulkAction) {
        case Action.Scan:
          yield this.confirmService.alert(translate("toasts.bulk-scan"));
          this.bulkMode = true;
          this.cdRef.markForCheck();
          this.libraryService.scanMultipleLibraries(selected.map((l) => l.id)).subscribe((_) => this.resetBulkMode());
          break;
        case Action.RefreshMetadata:
          if (!(yield this.confirmService.confirm(translate("toasts.bulk-covers"))))
            return;
          this.bulkMode = true;
          this.cdRef.markForCheck();
          this.libraryService.refreshMetadataMultipleLibraries(selected.map((l) => l.id), true, false).subscribe(() => {
            this.getLibraries();
            this.resetBulkMode();
          });
          break;
        case Action.AnalyzeFiles:
          this.bulkMode = true;
          this.cdRef.markForCheck();
          this.libraryService.analyzeFilesMultipleLibraries(selected.map((l) => l.id)).subscribe(() => {
            this.getLibraries();
            this.resetBulkMode();
          });
          break;
        case Action.GenerateColorScape:
          this.bulkMode = true;
          this.cdRef.markForCheck();
          this.libraryService.refreshMetadataMultipleLibraries(selected.map((l) => l.id), false, true).subscribe(() => {
            this.getLibraries();
            this.resetBulkMode();
          });
          break;
        case Action.Delete:
          this.bulkMode = true;
          this.cdRef.markForCheck();
          const libIds = selected.map((l) => l.id);
          if (!(yield this.confirmService.confirm(translate("toasts.bulk-delete-libraries", { count: libIds.length }))))
            return;
          this.libraryService.deleteMultiple(libIds).pipe(catchError((_, obs) => {
            this.resetBulkMode();
            return obs;
          })).subscribe(() => {
            this.getLibraries();
            this.resetBulkMode();
          });
          break;
        case Action.CopySettings:
          if (selected.length === 1 && selected[0].id === this.sourceCopyToLibrary.id) {
            return;
          }
          this.bulkMode = true;
          this.cdRef.markForCheck();
          const includeType = this.bulkForm.get("includeType").value + "" == "true";
          this.libraryService.copySettingsFromLibrary(this.sourceCopyToLibrary.id, selected.map((l) => l.id), includeType).subscribe(() => {
            this.getLibraries();
            this.resetBulkMode();
          });
          break;
      }
    });
  }
  handleBulkAction(action, library) {
    return __async(this, null, function* () {
      this.bulkAction = action.action;
      this.cdRef.markForCheck();
      switch (action.action) {
        case Action.Scan:
        case Action.RefreshMetadata:
        case Action.GenerateColorScape:
        case Action.Delete:
        case Action.AnalyzeFiles:
          yield this.applyBulkAction();
          break;
        case Action.CopySettings:
          const ref = this.modalService.open(CopySettingsFromLibraryModalComponent, { size: "lg", fullscreen: "md" });
          ref.componentInstance.libraries = this.libraries;
          ref.closed.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
            if (res === null)
              return;
            this.bulkMode = true;
            this.sourceCopyToLibrary = this.libraries.filter((l) => l.id === res)[0];
            this.cdRef.markForCheck();
          });
          break;
      }
    });
  }
  handleAction(action, library) {
    return __async(this, null, function* () {
      switch (action.action) {
        case Action.Scan:
          yield this.actionService.scanLibrary(library);
          break;
        case Action.RefreshMetadata:
          yield this.actionService.refreshLibraryMetadata(library);
          break;
        case Action.GenerateColorScape:
          yield this.actionService.refreshLibraryMetadata(library, void 0, false, true);
          break;
        case Action.Edit:
          this.editLibrary(library);
          break;
        case Action.Delete:
          yield this.deleteLibrary(library);
          break;
        default:
          break;
      }
    });
  }
  performAction(action, library) {
    if (typeof action.callback === "function") {
      action.callback(action, library);
    }
  }
  setupSelections() {
    this.selections = new SelectionModel(false, this.libraries);
    this.cdRef.markForCheck();
  }
  toggleAll() {
    this.selectAll = !this.selectAll;
    this.libraries.forEach((s) => this.selections.toggle(s, this.selectAll));
    this.cdRef.markForCheck();
  }
  handleSelection(item, index) {
    if (this.isShiftDown && this.lastSelectedIndex !== null) {
      const start = Math.min(this.lastSelectedIndex, index);
      const end = Math.max(this.lastSelectedIndex, index);
      for (let i = start; i <= end; i++) {
        const library = this.libraries[i];
        if (!this.selections.isSelected(library)) {
          this.selections.toggle(library, true);
        }
      }
    } else {
      this.selections.toggle(item);
    }
    this.lastSelectedIndex = index;
    const numberOfSelected = this.selections.selected().length;
    this.selectAll = numberOfSelected === this.libraries.length;
    this.cdRef.markForCheck();
  }
  resetBulkMode() {
    this.bulkAction = null;
    this.bulkMode = false;
    this.sourceCopyToLibrary = null;
    this.libraries.forEach((s) => {
      if (this.selections.isSelected(s)) {
        this.selections.toggle(s, false);
      }
    });
    this.selectAll = false;
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function ManageLibraryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ManageLibraryComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _ManageLibraryComponent, selectors: [["app-manage-library"]], hostBindings: function ManageLibraryComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.shift", function ManageLibraryComponent_keydown_shift_HostBindingHandler($event) {
          return ctx.handleKeypress($event);
        }, false, \u0275\u0275resolveDocument)("keyup.shift", function ManageLibraryComponent_keyup_shift_HostBindingHandler($event) {
          return ctx.handleKeyUp($event);
        }, false, \u0275\u0275resolveDocument)("resize", function ManageLibraryComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow)("orientationchange", function ManageLibraryComponent_orientationchange_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["includeTypeTooltip", ""], [4, "transloco", "translocoRead"], [1, "position-relative"], [1, "position-absolute", "custom-position-2"], ["btnClass", "btn-primary-outline ms-1", 3, "actionHandler", "actions", "label", "disabled"], [1, "btn", "btn-primary-outline", "position-absolute", "custom-position", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "phone-hidden", "ms-1"], [1, "alert", "alert-warning"], [1, "table", "table-striped"], ["scope", "col"], [1, "form-check"], ["id", "select-all", "type", "checkbox", 1, "form-check-input", 3, "change", "ngModel", "indeterminate"], ["for", "select-all", 1, "form-check-label", "d-md-block", "d-none"], [3, "formGroup"], [1, "form-check", "form-switch"], ["id", "bulk-action-type", "type", "checkbox", "formControlName", "includeType", "aria-describedby", "include-type-help", 1, "form-check-input"], ["for", "bulk-action-type", 1, "form-check-label"], ["aria-hidden", "true", "placement", "left", "role", "button", "tabindex", "0", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"], ["id", "include-type-help", 1, "visually-hidden"], [3, "ngTemplateOutlet"], [1, "mt-2"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", "ms-1", 3, "click", "disabled"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "ngModel"], [1, "form-check-label", "visually-hidden", 3, "for"], [3, "id"], [3, "routerLink"], [3, "actions"], [3, "actionHandler", "actions"], ["placement", "top", 1, "btn", "btn-secondary", "me-2", "btn-sm", 3, "click", "ngbTooltip"], ["aria-hidden", "true", 1, "fa", "fa-sync-alt"], [1, "btn", "btn-danger", "me-2", "btn-sm", 3, "click", "disabled"], ["placement", "top", 1, "fa", "fa-trash", 3, "ngbTooltip"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["placement", "top", 1, "fa", "fa-pen", 3, "ngbTooltip"], ["colspan", "4", 2, "text-align", "center"], [3, "loading"]], template: function ManageLibraryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ManageLibraryComponent_ng_container_0_Template, 31, 15, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "manage-library");
      }
    }, dependencies: [
      RouterLink,
      NgbTooltip,
      LibraryTypePipe,
      TimeAgoPipe,
      SentenceCasePipe,
      TranslocoModule,
      TranslocoDirective,
      DefaultDatePipe,
      AsyncPipe,
      LoadingComponent,
      CardActionablesComponent,
      Select2Module,
      \u0275NgNoValidate,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      FormGroupDirective,
      FormControlName,
      NgTemplateOutlet
    ], styles: ["\n\n.custom-position[_ngcontent-%COMP%] {\n  right: 15px;\n  top: -42px;\n}\n.custom-position-2[_ngcontent-%COMP%] {\n  right: 160px;\n  top: -42px;\n}\n@media (max-width: 576px) {\n  .custom-position-2[_ngcontent-%COMP%] {\n    right: 65px;\n  }\n}\n.member-name[_ngcontent-%COMP%] {\n  word-break: keep-all;\n  margin: 0;\n}\n.list-group-item[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--elevation-layer1);\n}\n@media (max-width: 576px) {\n  .table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    width: 100% !important;\n    display: block;\n  }\n}\n@media (max-width: 992px) {\n  .table[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.table[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 32px;\n}\n/*# sourceMappingURL=manage-library.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageLibraryComponent, { className: "ManageLibraryComponent", filePath: "src/app/admin/manage-library/manage-library.component.ts", lineNumber: 52 });
})();
export {
  ManageLibraryComponent
};
//# sourceMappingURL=manage-library.component-BEYOYZ2K.js.map
