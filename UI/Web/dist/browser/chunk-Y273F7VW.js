import {
  SelectionModel
} from "./chunk-WQSUGJVO.js";
import {
  TagBadgeComponent
} from "./chunk-MABWAPXH.js";
import {
  KEY_CODES
} from "./chunk-A6JEQ5GB.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-5J5IKBMT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BPOUBDX2.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  CommonModule,
  DOCUMENT,
  DestroyRef,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  Renderer2,
  RendererStyleFlags2,
  ReplaySubject,
  TranslocoDirective,
  auditTime,
  filter,
  inject,
  map,
  shareReplay,
  switchMap,
  take,
  takeUntilDestroyed,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
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
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveBody,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// src/app/typeahead/_models/typeahead-settings.ts
var TypeaheadSettings = class {
  constructor() {
    this.debounce = 200;
    this.multiple = false;
    this.id = "";
    this.showLocked = false;
    this.minCharacters = 1;
    this.unique = true;
    this.addIfNonExisting = false;
  }
};

// src/app/typeahead/_components/typeahead.component.ts
var _c0 = ["optionItem"];
var _c1 = ["badgeItem"];
var _c2 = ["input"];
var _c3 = (a0) => ({ "disabled": a0 });
var _c4 = (a0, a1, a2) => ({ $implicit: a0, idx: a1, value: a2 });
var _c5 = (a0) => ({ item: a0 });
function TypeaheadComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275listener("click", function TypeaheadComponent_ng_container_0_ng_container_3_Template_span_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleLock($event));
    });
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("locked-field"));
  }
}
function TypeaheadComponent_ng_container_0_app_tag_badge_5_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 15);
    \u0275\u0275listener("click", function TypeaheadComponent_ng_container_0_app_tag_badge_5_i_2_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const option_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleSelection(option_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("aria-label", t_r4("close"));
  }
}
function TypeaheadComponent_ng_container_0_app_tag_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tag-badge", 12);
    \u0275\u0275elementContainer(1, 13);
    \u0275\u0275template(2, TypeaheadComponent_ng_container_0_app_tag_badge_5_i_2_Template, 1, 1, "i", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.badgeTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c4, option_r6, i_r7, ctx_r2.typeaheadControl.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.disabled);
  }
}
function TypeaheadComponent_ng_container_0_input_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 16, 0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", ctx_r2.settings.id);
  }
}
function TypeaheadComponent_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("spinner-border spinner-border-sm ", ctx_r2.settings.multiple ? "close-offset" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("loading"));
  }
}
function TypeaheadComponent_ng_container_0_ng_container_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function TypeaheadComponent_ng_container_0_ng_container_8_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.clearSelections(true);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
}
function TypeaheadComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TypeaheadComponent_ng_container_0_ng_container_8_button_1_Template, 1, 0, "button", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const selected_r9 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", selected_r9.length > 0);
  }
}
function TypeaheadComponent_ng_container_0_ng_container_10_div_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 26);
    \u0275\u0275listener("mouseenter", function TypeaheadComponent_ng_container_0_ng_container_10_div_1_li_3_Template_li_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.focusedIndex = 0;
      return \u0275\u0275resetView(ctx_r2.updateHighlight());
    })("click", function TypeaheadComponent_ng_container_0_ng_container_10_div_1_li_3_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.addNewItem(ctx_r2.typeaheadControl.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("add-item", \u0275\u0275pureFunction1(1, _c5, ctx_r2.typeaheadControl.value)), " ");
  }
}
function TypeaheadComponent_ng_container_0_ng_container_10_div_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275listener("click", function TypeaheadComponent_ng_container_0_ng_container_10_div_1_li_4_Template_li_click_0_listener() {
      const option_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.handleOptionClick(option_r12));
    })("mouseenter", function TypeaheadComponent_ng_container_0_ng_container_10_div_1_li_4_Template_li_mouseenter_0_listener() {
      const index_r13 = \u0275\u0275restoreView(_r11).index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      ctx_r2.focusedIndex = index_r13 + (ctx_r2.showAddItem ? 1 : 0);
      return \u0275\u0275resetView(ctx_r2.updateHighlight());
    });
    \u0275\u0275elementContainer(1, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("data-index", index_r13);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.optionTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c4, option_r12, index_r13, ctx_r2.typeaheadControl.value));
  }
}
function TypeaheadComponent_ng_container_0_ng_container_10_div_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r4("no-data"), "", ctx_r2.settings.addIfNonExisting ? t_r4("add-custom-item") : "", " ");
  }
}
function TypeaheadComponent_ng_container_0_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "ul", 22, 1);
    \u0275\u0275template(3, TypeaheadComponent_ng_container_0_ng_container_10_div_1_li_3_Template, 2, 3, "li", 23)(4, TypeaheadComponent_ng_container_0_ng_container_10_div_1_li_4_Template, 2, 7, "li", 24)(5, TypeaheadComponent_ng_container_0_ng_container_10_div_1_li_5_Template, 2, 2, "li", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const options_r14 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@slideFromTop", ctx_r2.hasFocus);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.showAddItem);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", options_r14)("ngForTrackBy", ctx_r2.settings.trackByIdentityFn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", options_r14.length === 0 && !ctx_r2.showAddItem);
  }
}
function TypeaheadComponent_ng_container_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TypeaheadComponent_ng_container_0_ng_container_10_div_1_Template, 6, 5, "div", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasFocus);
  }
}
function TypeaheadComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 3)(2, "div");
    \u0275\u0275template(3, TypeaheadComponent_ng_container_0_ng_container_3_Template, 5, 1, "ng-container", 4);
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275listener("click", function TypeaheadComponent_ng_container_0_Template_div_click_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    });
    \u0275\u0275template(5, TypeaheadComponent_ng_container_0_app_tag_badge_5_Template, 3, 7, "app-tag-badge", 6)(6, TypeaheadComponent_ng_container_0_input_6_Template, 2, 1, "input", 7)(7, TypeaheadComponent_ng_container_0_div_7_Template, 3, 4, "div", 8)(8, TypeaheadComponent_ng_container_0_ng_container_8_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, TypeaheadComponent_ng_container_0_ng_container_10_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.typeaheadForm);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("input-group ", ctx_r2.hasFocus ? "open" : "", " ", ctx_r2.locked ? "lock-active" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.settings.showLocked);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c3, ctx_r2.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.optionSelection.selected());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.disabled && ctx_r2.settings.multiple && \u0275\u0275pipeBind1(9, 12, ctx_r2.selectedData));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(11, 14, ctx_r2.filteredOptions));
  }
}
var ANIMATION_SPEED = 200;
var TypeaheadComponent = class _TypeaheadComponent {
  constructor(renderer2, document, cdRef) {
    this.renderer2 = renderer2;
    this.document = document;
    this.cdRef = cdRef;
    this.reset = new ReplaySubject(1);
    this.locked = false;
    this.disabled = false;
    this.selectedData = new EventEmitter();
    this.newItemAdded = new EventEmitter();
    this.onUnlock = new EventEmitter();
    this.lockedChange = new EventEmitter();
    this.destroyRef = inject(DestroyRef);
    this.hasFocus = false;
    this.focusedIndex = 0;
    this.showAddItem = false;
    this.isLoadingOptions = false;
  }
  ngOnInit() {
    this.reset.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((resetToEmpty) => {
      this.clearSelections(resetToEmpty);
      this.init();
    });
    if (this.focus) {
      this.focus.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((id) => {
        if (this.settings.id !== id)
          return;
        this.onInputFocus();
      });
    }
    this.init();
  }
  init() {
    if (this.settings.compareFn === void 0 && this.settings.multiple) {
      console.error("A compare function must be defined");
      return;
    }
    if (this.settings.trackByIdentityFn === void 0) {
      this.settings.trackByIdentityFn = (index, value) => value;
    }
    if (this.settings.hasOwnProperty("formControl") && this.settings.formControl) {
      this.typeaheadControl = this.settings.formControl;
    } else {
      this.typeaheadControl = new FormControl("");
    }
    this.typeaheadForm = new FormGroup({
      "typeahead": this.typeaheadControl
    });
    this.filteredOptions = this.typeaheadForm.get("typeahead").valueChanges.pipe(tap((val) => {
      if (this.inputElem != null && this.inputElem.nativeElement != null) {
        this.renderer2.setStyle(this.inputElem.nativeElement, "width", 15 * (val.trim().length + 1) + "px");
        this.focusedIndex = 0;
      }
    }), map((val) => val.trim()), auditTime(this.settings.debounce), filter((val) => {
      if (this.settings.minCharacters === 0)
        return true;
      if (!val || val.length < this.settings.minCharacters) {
        return false;
      }
      return true;
    }), switchMap((val) => {
      this.isLoadingOptions = true;
      return this.settings.fetchFn(val.trim()).pipe(takeUntilDestroyed(this.destroyRef), map((items) => items.filter((item) => this.filterSelected(item))));
    }), tap((filteredOptions) => {
      this.isLoadingOptions = false;
      this.focusedIndex = 0;
      this.cdRef.markForCheck();
      setTimeout(() => {
        this.updateShowAddItem(filteredOptions);
        this.updateHighlight();
      }, 10);
      setTimeout(() => this.updateHighlight(), 20);
    }), shareReplay(), takeUntilDestroyed(this.destroyRef));
    if (this.settings.savedData) {
      if (this.settings.multiple) {
        this.optionSelection = new SelectionModel(true, this.settings.savedData);
      } else {
        const isArray = this.settings.savedData.hasOwnProperty("length");
        if (isArray) {
          this.optionSelection = new SelectionModel(true, this.settings.savedData);
        } else {
          this.optionSelection = new SelectionModel(true, [this.settings.savedData]);
        }
      }
    } else {
      this.optionSelection = new SelectionModel();
    }
  }
  handleDocumentClick(event) {
    if (event.target && event.target.classList.contains("list-group-item")) {
      return;
    }
    this.hasFocus = false;
  }
  handleKeyPress(event) {
    if (!this.hasFocus) {
      return;
    }
    if (this.disabled)
      return;
    switch (event.key) {
      case KEY_CODES.DOWN_ARROW:
      case KEY_CODES.RIGHT_ARROW: {
        this.focusedIndex = Math.min(this.focusedIndex + 1, this.document.querySelectorAll(".list-group-item").length - 1);
        this.updateHighlight();
        break;
      }
      case KEY_CODES.UP_ARROW:
      case KEY_CODES.LEFT_ARROW: {
        this.focusedIndex = Math.max(this.focusedIndex - 1, 0);
        this.updateHighlight();
        break;
      }
      case KEY_CODES.ENTER: {
        this.document.querySelectorAll(".list-group-item").forEach((item, index) => {
          if (item.classList.contains("active")) {
            this.filteredOptions.pipe(take(1)).subscribe((opts) => {
              event.preventDefault();
              event.stopPropagation();
              item.click();
              this.focusedIndex = 0;
            });
          }
        });
        break;
      }
      case KEY_CODES.BACKSPACE:
      case KEY_CODES.DELETE: {
        if (this.typeaheadControl.value !== null && this.typeaheadControl.value !== void 0 && this.typeaheadControl.value.trim() !== "") {
          break;
        }
        const selected = this.optionSelection.selected();
        if (selected.length > 0) {
          this.removeSelectedOption(selected.pop());
        }
        break;
      }
      case KEY_CODES.ESC_KEY:
        this.hasFocus = false;
        event.stopPropagation();
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  toggleSelection(opt) {
    this.optionSelection.toggle(opt, void 0, this.settings.selectionCompareFn);
    this.selectedData.emit(this.optionSelection.selected());
  }
  removeSelectedOption(opt) {
    this.optionSelection.toggle(opt, void 0, this.settings.selectionCompareFn);
    this.selectedData.emit(this.optionSelection.selected());
    this.resetField();
  }
  clearSelections(untoggleAll = false) {
    if (this.optionSelection) {
      if (!untoggleAll && this.settings.savedData) {
        const isArray = this.settings.savedData.hasOwnProperty("length");
        if (isArray) {
          this.optionSelection = new SelectionModel(true, this.settings.savedData);
        } else {
          this.optionSelection = new SelectionModel(true, [this.settings.savedData]);
        }
        this.cdRef.markForCheck();
      } else {
        this.optionSelection.selected().forEach((item) => this.optionSelection.toggle(item, false));
        this.cdRef.markForCheck();
      }
      this.selectedData.emit(this.optionSelection.selected());
      this.resetField();
    }
  }
  handleOptionClick(opt) {
    if (this.disabled)
      return;
    if (!this.settings.multiple && this.optionSelection.selected().length > 0) {
      return;
    }
    this.toggleSelection(opt);
    this.resetField();
    this.onInputFocus();
  }
  addNewItem(title) {
    if (this.settings.addTransformFn == void 0 || !this.settings.addIfNonExisting) {
      return;
    }
    const newItem = this.settings.addTransformFn(title);
    this.newItemAdded.emit(newItem);
    this.toggleSelection(newItem);
    this.resetField();
    this.onInputFocus();
  }
  filterSelected(item) {
    if (this.settings.unique && this.settings.multiple) {
      return !this.optionSelection.isSelected(item, this.settings.selectionCompareFn);
    }
    return true;
  }
  openDropdown() {
    setTimeout(() => {
      this.typeaheadControl.setValue(this.typeaheadControl.value);
      this.hasFocus = true;
    });
  }
  onInputFocus(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (this.disabled)
      return;
    if (!this.settings.multiple && this.optionSelection.selected().length > 0) {
      return;
    }
    if (this.inputElem) {
      this.document.body.click();
      this.inputElem.nativeElement.focus();
      this.hasFocus = true;
    }
    this.openDropdown();
  }
  resetField() {
    if (this.inputElem && this.inputElem.nativeElement) {
      this.renderer2.setStyle(this.inputElem.nativeElement, "width", 4, RendererStyleFlags2.Important);
    }
    this.typeaheadControl.setValue("");
    this.focusedIndex = 0;
  }
  updateHighlight() {
    this.document.querySelectorAll(".list-group-item").forEach((item, index) => {
      if (index === this.focusedIndex && !item.classList.contains("no-hover")) {
        this.renderer2.addClass(item, "active");
      } else {
        this.renderer2.removeClass(item, "active");
      }
    });
  }
  updateShowAddItem(options) {
    this.showAddItem = false;
    this.cdRef.markForCheck();
    if (!this.settings.addIfNonExisting)
      return;
    const inputText = this.typeaheadControl.value.trim();
    if (inputText.length < Math.max(this.settings.minCharacters, 1))
      return;
    if (!this.typeaheadControl.dirty)
      return;
    if (typeof this.settings.compareFnForAdd == "function") {
      const willDuplicateExist = this.settings.compareFnForAdd(this.optionSelection.selected(), inputText);
      if (willDuplicateExist.length > 0) {
        return;
      }
    }
    if (typeof this.settings.compareFn == "function") {
      const matches = this.settings.compareFn(options, inputText);
      if (matches.length > 0 && matches.includes(this.settings.addTransformFn(inputText))) {
        return;
      }
    }
    this.showAddItem = true;
    if (this.showAddItem) {
      this.hasFocus = true;
    }
    this.cdRef.markForCheck();
  }
  toggleLock(event) {
    if (this.disabled)
      return;
    this.locked = !this.locked;
    this.lockedChange.emit(this.locked);
    if (!this.locked) {
      this.onUnlock.emit();
    }
  }
  static {
    this.\u0275fac = function TypeaheadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TypeaheadComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _TypeaheadComponent, selectors: [["app-typeahead"]], contentQueries: function TypeaheadComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 5);
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.badgeTemplate = _t.first);
      }
    }, viewQuery: function TypeaheadComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputElem = _t.first);
      }
    }, hostBindings: function TypeaheadComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function TypeaheadComponent_click_HostBindingHandler($event) {
          return ctx.handleDocumentClick($event);
        }, false, \u0275\u0275resolveBody)("keydown", function TypeaheadComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeyPress($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { settings: "settings", reset: "reset", locked: "locked", disabled: "disabled", focus: "focus" }, outputs: { selectedData: "selectedData", newItemAdded: "newItemAdded", onUnlock: "onUnlock", lockedChange: "lockedChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["input", ""], ["results", ""], [4, "transloco", "translocoRead"], [3, "formGroup"], [4, "ngIf"], [1, "typeahead-input", 3, "click", "ngClass"], ["fillStyle", "filled", 4, "ngFor", "ngForOf"], ["type", "text", "autocomplete", "off", "formControlName", "typeahead", 3, "id", 4, "ngIf"], ["role", "status", 3, "class", 4, "ngIf"], [1, "input-group-text", "clickable", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-lock"], [1, "visually-hidden"], ["fillStyle", "filled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "fa fa-times", "tabindex", "0", 3, "click", 4, "ngIf"], ["tabindex", "0", 1, "fa", "fa-times", 3, "click"], ["type", "text", "autocomplete", "off", "formControlName", "typeahead", 3, "id"], ["role", "status"], ["class", "btn btn-close float-end mt-2", "style", "font-size: 0.8rem;", 3, "click", 4, "ngIf"], [1, "btn", "btn-close", "float-end", "mt-2", 2, "font-size", "0.8rem", 3, "click"], ["class", "dropdown", 4, "ngIf"], [1, "dropdown"], [1, "list-group", "results"], ["class", "list-group-item add-item", "role", "option", 3, "mouseenter", "click", 4, "ngIf"], ["class", "list-group-item", "role", "option", 3, "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "list-group-item no-hover", "role", "status", 4, "ngIf"], ["role", "option", 1, "list-group-item", "add-item", 3, "mouseenter", "click"], ["role", "option", 1, "list-group-item", 3, "click", "mouseenter"], ["role", "status", 1, "list-group-item", "no-hover"]], template: function TypeaheadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TypeaheadComponent_ng_container_0_Template, 12, 18, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "typeahead");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, AsyncPipe, TagBadgeComponent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoDirective], styles: ["\n\nform[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-group[_ngcontent-%COMP%] {\n  flex-wrap: inherit;\n}\ninput[_ngcontent-%COMP%] {\n  width: 15px;\n  opacity: 1px;\n  position: relative;\n  left: 4px;\n  border: none;\n}\n.lock-active[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n}\n.close-offset[_ngcontent-%COMP%] {\n  right: 29px !important;\n  top: 29% !important;\n}\n.typeahead-input[_ngcontent-%COMP%] {\n  padding: 0px 6px;\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: none;\n  border-radius: 4px;\n  cursor: text;\n  min-height: 38px;\n  background-color: var(--input-bg-color);\n  border: 1px solid var(--input-border-color);\n  color: var(--body-text-color);\n}\n.typeahead-input.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.typeahead-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: 0 !important;\n  border-radius: 0.28571429rem;\n  display: inline-block !important;\n  padding: 0px !important;\n  min-height: 0px !important;\n  max-width: 100% !important;\n  margin: 0px !important;\n  text-indent: 0 !important;\n  line-height: inherit !important;\n  box-shadow: none !important;\n}\n.typeahead-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:empty {\n  padding-top: 6px !important;\n}\n.open[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0px;\n}\n.open[_ngcontent-%COMP%]   .typeahead-input[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n.dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 10rem;\n  background: var(--input-bg-color);\n  z-index: 1000;\n  border-radius: 4px;\n  margin-top: -1px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  position: absolute;\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.dropdown[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n.dropdown[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  width: 100%;\n}\n.dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  margin: auto;\n  cursor: pointer;\n  top: 30%;\n}\n.results[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-left-color: var(--list-group-hover-text-color);\n  border-right-color: var(--list-group-hover-text-color);\n}\n.results[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-color: var(--list-group-hover-text-color);\n}\n/*# sourceMappingURL=typeahead.component.css.map */"], data: { animation: [
      trigger("slideFromTop", [
        state("in", style({ height: "0px" })),
        transition("void => *", [
          style({ height: "100%", overflow: "auto" }),
          animate(ANIMATION_SPEED)
        ]),
        transition("* => void", [
          animate(ANIMATION_SPEED, style({ height: "0px" }))
        ])
      ])
    ] }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypeaheadComponent, { className: "TypeaheadComponent", filePath: "src/app/typeahead/_components/typeahead.component.ts", lineNumber: 54 });
})();

export {
  TypeaheadSettings,
  TypeaheadComponent
};
//# sourceMappingURL=chunk-Y273F7VW.js.map
