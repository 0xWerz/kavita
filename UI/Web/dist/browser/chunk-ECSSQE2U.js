import {
  Stack
} from "./chunk-JGJJUNHA.js";
import {
  WikiLink
} from "./chunk-GX7EGMKV.js";
import {
  LibraryService
} from "./chunk-PBM62GK4.js";
import {
  NgbActiveModal,
  NgbHighlight,
  NgbTypeahead
} from "./chunk-2R2RCU4Y.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-BPOUBDX2.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  Subject,
  TranslocoDirective,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
  of,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// src/app/admin/_modals/directory-picker/directory-picker.component.ts
var _c0 = ["instance"];
var _c1 = (a0) => ({ "disabled": a0 });
function DirectoryPickerComponent_ng_container_0_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ngb-highlight", 25);
  }
  if (rf & 2) {
    const r_r3 = ctx.result;
    const t_r4 = ctx.term;
    \u0275\u0275property("result", r_r3)("term", t_r4);
  }
}
function DirectoryPickerComponent_ng_container_0_ol_15_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const route_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", route_r5, " ");
  }
}
function DirectoryPickerComponent_ng_container_0_ol_15_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275listener("click", function DirectoryPickerComponent_ng_container_0_ol_15_li_1_ng_template_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const index_r7 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.navigateTo(index_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(route_r5);
  }
}
function DirectoryPickerComponent_ng_container_0_ol_15_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, DirectoryPickerComponent_ng_container_0_ol_15_li_1_ng_container_1_Template, 2, 1, "ng-container", 28)(2, DirectoryPickerComponent_ng_container_0_ol_15_li_1_ng_template_2_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r5 = ctx.$implicit;
    const last_r8 = ctx.last;
    const nonActive_r9 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMapInterpolate1("breadcrumb-item ", route_r5 === ctx_r1.routeStack.peek() ? "active" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", last_r8)("ngIfElse", nonActive_r9);
  }
}
function DirectoryPickerComponent_ng_container_0_ol_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 26);
    \u0275\u0275template(1, DirectoryPickerComponent_ng_container_0_ol_15_li_1_Template, 4, 5, "li", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.routeStack.items);
  }
}
function DirectoryPickerComponent_ng_container_0_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r10("instructions"), " ");
  }
}
function DirectoryPickerComponent_ng_container_0_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 30);
    \u0275\u0275listener("click", function DirectoryPickerComponent_ng_container_0_tr_31_Template_tr_click_0_listener() {
      const folder_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectNode(folder_r12));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275element(2, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const folder_r12 = ctx.$implicit;
    const idx_r13 = ctx.index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c1, folder_r12.disabled));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("id", "folder--", idx_r13, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", folder_r12.name, " ");
  }
}
function DirectoryPickerComponent_ng_container_0_a_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate("href", ctx_r1.helpUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r10("help"));
  }
}
function DirectoryPickerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "h4", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function DirectoryPickerComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "div", 9)(7, "label", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11)(10, "input", 12, 0);
    \u0275\u0275twoWayListener("ngModelChange", function DirectoryPickerComponent_ng_container_0_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.path, $event) || (ctx_r1.path = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function DirectoryPickerComponent_ng_container_0_Template_input_focus_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.focus$.next($event.target.value));
    })("click", function DirectoryPickerComponent_ng_container_0_Template_input_click_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.click$.next($event.target.value));
    })("ngModelChange", function DirectoryPickerComponent_ng_container_0_Template_input_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateTable());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, DirectoryPickerComponent_ng_container_0_ng_template_12_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nav", 13);
    \u0275\u0275template(15, DirectoryPickerComponent_ng_container_0_ol_15_Template, 2, 1, "ol", 14)(16, DirectoryPickerComponent_ng_container_0_ng_template_16_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "table", 15)(19, "thead")(20, "tr")(21, "th", 16);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 17);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody")(26, "tr", 18);
    \u0275\u0275listener("click", function DirectoryPickerComponent_ng_container_0_Template_tr_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275element(28, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30, "...");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, DirectoryPickerComponent_ng_container_0_tr_31_Template, 5, 6, "tr", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 21);
    \u0275\u0275template(33, DirectoryPickerComponent_ng_container_0_a_33_Template, 2, 2, "a", 22);
    \u0275\u0275elementStart(34, "button", 23);
    \u0275\u0275listener("click", function DirectoryPickerComponent_ng_container_0_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 24);
    \u0275\u0275listener("click", function DirectoryPickerComponent_ng_container_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.share());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    const rt_r14 = \u0275\u0275reference(13);
    const noBreadcrumb_r15 = \u0275\u0275reference(17);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r10("title"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r10("close"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r10("path-label"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.path);
    \u0275\u0275property("ngbTypeahead", ctx_r1.search)("placeholder", t_r10("path-placeholder"))("resultTemplate", rt_r14);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.routeStack.peek() !== void 0)("ngIfElse", noBreadcrumb_r15);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r10("type-header"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r10("name-header"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.folders);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.helpUrl.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r10("cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r10("share"));
  }
}
var DirectoryPickerComponent = class _DirectoryPickerComponent {
  constructor(modal, libraryService) {
    this.modal = modal;
    this.libraryService = libraryService;
    this.startingFolder = "";
    this.helpUrl = WikiLink.Library;
    this.currentRoot = "";
    this.folders = [];
    this.routeStack = new Stack();
    this.path = "";
    this.focus$ = new Subject();
    this.click$ = new Subject();
    this.searching = false;
    this.searchFailed = false;
    this.search = (text$) => {
      const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
      const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
      const inputFocus$ = this.focus$;
      return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$, text$).pipe(debounceTime(300), distinctUntilChanged(), tap(() => this.searching = true), switchMap((term) => this.libraryService.listDirectories(this.path).pipe(tap(() => this.searchFailed = false), tap((folders) => this.folders = folders), map((folders) => folders.map((f) => f.fullPath)), catchError(() => {
        this.searchFailed = true;
        return of([]);
      }))), tap(() => this.searching = false));
    };
  }
  ngOnInit() {
    if (this.startingFolder && this.startingFolder.length > 0) {
      let folders = this.startingFolder.split("/");
      let folders2 = this.startingFolder.split("\\");
      if (folders.length === 1 && folders2.length > 1) {
        folders = folders2;
      }
      if (!folders[0].endsWith("/")) {
        folders[0] = folders[0] + "/";
      }
      folders.forEach((folder) => this.routeStack.push(folder));
      const fullPath = this.routeStack.items.join("/");
      this.loadChildren(fullPath);
    } else {
      this.loadChildren(this.currentRoot);
    }
  }
  updateTable() {
    this.loadChildren(this.path);
  }
  selectNode(folder) {
    if (folder.disabled)
      return;
    this.currentRoot = folder.name;
    this.routeStack.push(folder.name);
    this.path = folder.fullPath;
    this.loadChildren(this.path);
  }
  goBack() {
    this.routeStack.pop();
    const stackPeek = this.routeStack.peek();
    if (stackPeek !== void 0) {
      this.currentRoot = stackPeek;
      const fullPath = this.routeStack.items.join("/");
      this.loadChildren(fullPath);
    } else {
      this.currentRoot = "";
      this.loadChildren(this.currentRoot);
    }
  }
  loadChildren(path) {
    this.libraryService.listDirectories(path).subscribe((folders) => {
      this.folders = folders;
    }, (err) => {
      this.routeStack.pop();
      const item = this.folders.find((f) => f.fullPath === path);
      if (item) {
        item.disabled = true;
      }
    });
  }
  share() {
    this.modal.close({ success: true, folderPath: this.path });
  }
  close() {
    this.modal.close({ success: false, folderPath: void 0 });
  }
  navigateTo(index) {
    while (this.routeStack.items.length - 1 > index) {
      this.routeStack.pop();
    }
    const fullPath = this.routeStack.items.join("/");
    this.path = fullPath;
    this.loadChildren(fullPath);
  }
  static {
    this.\u0275fac = function DirectoryPickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DirectoryPickerComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(LibraryService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _DirectoryPickerComponent, selectors: [["app-directory-picker"]], viewQuery: function DirectoryPickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.instance = _t.first);
      }
    }, inputs: { startingFolder: "startingFolder", helpUrl: "helpUrl" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["instance", "ngbTypeahead"], ["rt", ""], ["noBreadcrumb", ""], ["nonActive", ""], [4, "transloco", "translocoRead"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["for", "typeahead-focus", 1, "form-label"], [1, "input-group"], ["id", "typeahead-focus", "type", "text", 1, "form-control", 2, "width", "100%", 3, "ngModelChange", "focus", "click", "ngModel", "ngbTypeahead", "placeholder", "resultTemplate"], ["aria-label", "directory breadcrumb"], ["class", "breadcrumb", 4, "ngIf", "ngIfElse"], [1, "table", "table-striped", "scrollable"], ["scope", "col", 2, "width", "40px"], ["scope", "col"], [3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-arrow-turn-up"], ["class", "clickable", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["class", "btn btn-icon", "target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "result", "term"], [1, "breadcrumb"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["href", "javascript:void(0);", 3, "click"], [1, "clickable", 3, "click", "ngClass"], ["aria-hidden", "true", 1, "fa-regular", "fa-folder"], [3, "id"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-icon", 3, "href"]], template: function DirectoryPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DirectoryPickerComponent_ng_container_0_Template, 38, 15, "ng-container", 4);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "directory-picker");
      }
    }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgbTypeahead, FormsModule, NgModel, NgbHighlight, NgIf, NgForOf, NgClass, TranslocoDirective], styles: ['\n\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  content: ">";\n}\n.scrollable[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 400px;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n}\n.disabled[_ngcontent-%COMP%] {\n  color: lightgrey !important;\n  cursor: not-allowed !important;\n  background-color: var(--error-color);\n}\n/*# sourceMappingURL=directory-picker.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectoryPickerComponent, { className: "DirectoryPickerComponent", filePath: "src/app/admin/_modals/directory-picker/directory-picker.component.ts", lineNumber: 25 });
})();

export {
  DirectoryPickerComponent
};
//# sourceMappingURL=chunk-ECSSQE2U.js.map
