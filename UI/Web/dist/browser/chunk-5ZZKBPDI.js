import {
  DrawerComponent
} from "./chunk-3CC6XT7E.js";
import {
  ToggleService
} from "./chunk-UXZKIERU.js";
import {
  VirtualScrollerComponent,
  VirtualScrollerModule
} from "./chunk-MBZDR44C.js";
import {
  FilterUtilitiesService
} from "./chunk-SBBWMOEE.js";
import {
  CardActionablesComponent
} from "./chunk-W4DBALQX.js";
import {
  FilterService
} from "./chunk-6M2JHRYX.js";
import {
  CollectionTagService
} from "./chunk-AOHQX7B2.js";
import {
  LibraryService
} from "./chunk-PBM62GK4.js";
import {
  FilterCombination,
  FilterComparison,
  FilterField,
  MetadataService,
  PersonRole,
  SortField,
  allFields,
  allSortFields,
  mangaFormatFilters
} from "./chunk-IBO6ECG5.js";
import {
  LoadingComponent
} from "./chunk-D7CIAEAO.js";
import {
  Select2,
  Select2Module
} from "./chunk-LGLLZBOI.js";
import {
  Breakpoint,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  NavigationStart,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  NgbDateParserFormatter,
  NgbInputDatepicker,
  NgbTooltip
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService,
  animate,
  style,
  transition,
  trigger
} from "./chunk-5J5IKBMT.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  DOCUMENT,
  DestroyRef,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  TranslocoDirective,
  TranslocoModule,
  TranslocoService,
  distinctUntilChanged,
  filter,
  inject,
  map,
  of,
  startWith,
  switchMap,
  takeUntilDestroyed,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PYHIUVNJ.js";

// src/app/_services/jumpbar.service.ts
var keySize = 25;
var JumpbarService = class _JumpbarService {
  constructor() {
    this.resumeKeys = {};
    this.resumeScroll = {};
  }
  getResumeKey(key) {
    const k = key.toUpperCase();
    if (this.resumeKeys.hasOwnProperty(k))
      return this.resumeKeys[k];
    return "";
  }
  getResumePosition(url) {
    if (this.resumeScroll.hasOwnProperty(url))
      return this.resumeScroll[url];
    return 0;
  }
  saveResumeKey(key, value) {
    const k = key.toUpperCase();
    this.resumeKeys[k] = value;
  }
  saveResumePosition(url, value) {
    this.resumeScroll[url] = value;
  }
  generateJumpBar(jumpBarKeys, currentSize) {
    const fullSize = jumpBarKeys.length * keySize;
    if (currentSize >= fullSize) {
      return [...jumpBarKeys];
    }
    const jumpBarKeysToRender = [];
    const targetNumberOfKeys = parseInt(Math.floor(currentSize / keySize) + "", 10);
    const removeCount = jumpBarKeys.length - targetNumberOfKeys - 3;
    if (removeCount <= 0)
      return [...jumpBarKeys];
    const removalTimes = Math.ceil(removeCount / 2);
    const midPoint = Math.floor(jumpBarKeys.length / 2);
    jumpBarKeysToRender.push(jumpBarKeys[0]);
    this._removeFirstPartOfJumpBar(midPoint, removalTimes, jumpBarKeys, jumpBarKeysToRender);
    jumpBarKeysToRender.push(jumpBarKeys[midPoint]);
    this._removeSecondPartOfJumpBar(midPoint, removalTimes, jumpBarKeys, jumpBarKeysToRender);
    jumpBarKeysToRender.push(jumpBarKeys[jumpBarKeys.length - 1]);
    return jumpBarKeysToRender;
  }
  _removeSecondPartOfJumpBar(midPoint, numberOfRemovals = 1, jumpBarKeys, jumpBarKeysToRender) {
    const removedIndexes = [];
    for (let removal = 0; removal < numberOfRemovals; removal++) {
      let min = 1e8;
      let minIndex = -1;
      for (let i = midPoint + 1; i < jumpBarKeys.length - 2; i++) {
        if (jumpBarKeys[i].size < min && !removedIndexes.includes(i)) {
          min = jumpBarKeys[i].size;
          minIndex = i;
        }
      }
      removedIndexes.push(minIndex);
    }
    for (let i = midPoint + 1; i < jumpBarKeys.length - 2; i++) {
      if (!removedIndexes.includes(i))
        jumpBarKeysToRender.push(jumpBarKeys[i]);
    }
  }
  _removeFirstPartOfJumpBar(midPoint, numberOfRemovals = 1, jumpBarKeys, jumpBarKeysToRender) {
    const removedIndexes = [];
    for (let removal = 0; removal < numberOfRemovals; removal++) {
      let min = 1e8;
      let minIndex = -1;
      for (let i = 1; i < midPoint; i++) {
        if (jumpBarKeys[i].size < min && !removedIndexes.includes(i)) {
          min = jumpBarKeys[i].size;
          minIndex = i;
        }
      }
      removedIndexes.push(minIndex);
    }
    for (let i = 1; i < midPoint; i++) {
      if (!removedIndexes.includes(i))
        jumpBarKeysToRender.push(jumpBarKeys[i]);
    }
  }
  getJumpKeys(data, keySelector) {
    const keys = {};
    data.forEach((obj) => {
      let ch = keySelector(obj).charAt(0).toUpperCase();
      if (/\d|\#|!|%|@|\(|\)|\^|\.|_|\*/g.test(ch)) {
        ch = "#";
      }
      if (!keys.hasOwnProperty(ch)) {
        keys[ch] = 0;
      }
      keys[ch] += 1;
    });
    return Object.keys(keys).map((k) => {
      k = k.toUpperCase();
      return {
        key: k,
        size: keys[k],
        title: k
      };
    }).sort((a, b) => {
      if (a.key < b.key)
        return -1;
      if (a.key > b.key)
        return 1;
      return 0;
    });
  }
  static {
    this.\u0275fac = function JumpbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JumpbarService)();
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _JumpbarService, factory: _JumpbarService.\u0275fac, providedIn: "root" });
  }
};

// src/app/metadata-filter/filter-settings.ts
var FilterSettings = class {
  constructor() {
    this.sortDisabled = false;
    this.statementLimit = 0;
    this.saveDisabled = false;
  }
};

// src/app/_pipes/sort-field.pipe.ts
var SortFieldPipe = class _SortFieldPipe {
  constructor(translocoService) {
    this.translocoService = translocoService;
  }
  transform(value) {
    switch (value) {
      case SortField.SortName:
        return this.translocoService.translate("sort-field-pipe.sort-name");
      case SortField.Created:
        return this.translocoService.translate("sort-field-pipe.created");
      case SortField.LastModified:
        return this.translocoService.translate("sort-field-pipe.last-modified");
      case SortField.LastChapterAdded:
        return this.translocoService.translate("sort-field-pipe.last-chapter-added");
      case SortField.TimeToRead:
        return this.translocoService.translate("sort-field-pipe.time-to-read");
      case SortField.ReleaseYear:
        return this.translocoService.translate("sort-field-pipe.release-year");
      case SortField.ReadProgress:
        return this.translocoService.translate("sort-field-pipe.read-progress");
      case SortField.AverageRating:
        return this.translocoService.translate("sort-field-pipe.average-rating");
      case SortField.Random:
        return this.translocoService.translate("sort-field-pipe.random");
    }
  }
  static {
    this.\u0275fac = function SortFieldPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SortFieldPipe)(\u0275\u0275directiveInject(TranslocoService, 16));
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "sortField", type: _SortFieldPipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/filter-field.pipe.ts
var FilterFieldPipe = class _FilterFieldPipe {
  transform(value) {
    switch (value) {
      case FilterField.AgeRating:
        return translate("filter-field-pipe.age-rating");
      case FilterField.Characters:
        return translate("filter-field-pipe.characters");
      case FilterField.CollectionTags:
        return translate("filter-field-pipe.collection-tags");
      case FilterField.Colorist:
        return translate("filter-field-pipe.colorist");
      case FilterField.CoverArtist:
        return translate("filter-field-pipe.cover-artist");
      case FilterField.Editor:
        return translate("filter-field-pipe.editor");
      case FilterField.Formats:
        return translate("filter-field-pipe.formats");
      case FilterField.Genres:
        return translate("filter-field-pipe.genres");
      case FilterField.Inker:
        return translate("filter-field-pipe.inker");
      case FilterField.Imprint:
        return translate("filter-field-pipe.imprint");
      case FilterField.Team:
        return translate("filter-field-pipe.team");
      case FilterField.Location:
        return translate("filter-field-pipe.location");
      case FilterField.Languages:
        return translate("filter-field-pipe.languages");
      case FilterField.Libraries:
        return translate("filter-field-pipe.libraries");
      case FilterField.Letterer:
        return translate("filter-field-pipe.letterer");
      case FilterField.PublicationStatus:
        return translate("filter-field-pipe.publication-status");
      case FilterField.Penciller:
        return translate("filter-field-pipe.penciller");
      case FilterField.Publisher:
        return translate("filter-field-pipe.publisher");
      case FilterField.ReadProgress:
        return translate("filter-field-pipe.read-progress");
      case FilterField.ReadTime:
        return translate("filter-field-pipe.read-time");
      case FilterField.ReleaseYear:
        return translate("filter-field-pipe.release-year");
      case FilterField.SeriesName:
        return translate("filter-field-pipe.series-name");
      case FilterField.Summary:
        return translate("filter-field-pipe.summary");
      case FilterField.Tags:
        return translate("filter-field-pipe.tags");
      case FilterField.Translators:
        return translate("filter-field-pipe.translators");
      case FilterField.UserRating:
        return translate("filter-field-pipe.user-rating");
      case FilterField.Writers:
        return translate("filter-field-pipe.writers");
      case FilterField.Path:
        return translate("filter-field-pipe.path");
      case FilterField.FilePath:
        return translate("filter-field-pipe.file-path");
      case FilterField.WantToRead:
        return translate("filter-field-pipe.want-to-read");
      case FilterField.ReadingDate:
        return translate("filter-field-pipe.read-date");
      case FilterField.ReadLast:
        return translate("filter-field-pipe.read-last");
      case FilterField.AverageRating:
        return translate("filter-field-pipe.average-rating");
      default:
        throw new Error(`Invalid FilterField value: ${value}`);
    }
  }
  static {
    this.\u0275fac = function FilterFieldPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilterFieldPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "filterField", type: _FilterFieldPipe, pure: true, standalone: true });
  }
};

// src/app/_pipes/filter-comparison.pipe.ts
var FilterComparisonPipe = class _FilterComparisonPipe {
  transform(value) {
    switch (value) {
      case FilterComparison.BeginsWith:
        return translate("filter-comparison-pipe.begins-with");
      case FilterComparison.Contains:
        return translate("filter-comparison-pipe.contains");
      case FilterComparison.Equal:
        return translate("filter-comparison-pipe.equal");
      case FilterComparison.GreaterThan:
        return translate("filter-comparison-pipe.greater-than");
      case FilterComparison.GreaterThanEqual:
        return translate("filter-comparison-pipe.greater-than-or-equal");
      case FilterComparison.LessThan:
        return translate("filter-comparison-pipe.less-than");
      case FilterComparison.LessThanEqual:
        return translate("filter-comparison-pipe.less-than-or-equal");
      case FilterComparison.Matches:
        return translate("filter-comparison-pipe.matches");
      case FilterComparison.NotContains:
        return translate("filter-comparison-pipe.does-not-contain");
      case FilterComparison.NotEqual:
        return translate("filter-comparison-pipe.not-equal");
      case FilterComparison.EndsWith:
        return translate("filter-comparison-pipe.ends-with");
      case FilterComparison.IsBefore:
        return translate("filter-comparison-pipe.is-before");
      case FilterComparison.IsAfter:
        return translate("filter-comparison-pipe.is-after");
      case FilterComparison.IsInLast:
        return translate("filter-comparison-pipe.is-in-last");
      case FilterComparison.IsNotInLast:
        return translate("filter-comparison-pipe.is-not-in-last");
      case FilterComparison.MustContains:
        return translate("filter-comparison-pipe.must-contains");
      case FilterComparison.IsEmpty:
        return translate("filter-comparison-pipe.is-empty");
      default:
        throw new Error(`Invalid FilterComparison value: ${value}`);
    }
  }
  static {
    this.\u0275fac = function FilterComparisonPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilterComparisonPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "filterComparison", type: _FilterComparisonPipe, pure: true, standalone: true });
  }
};

// src/app/metadata-filter/_components/metadata-filter-row/metadata-filter-row.component.ts
var _c0 = ["*"];
function MetadataFilterRowComponent_ng_container_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "filterField");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275property("value", field_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, field_r1));
  }
}
function MetadataFilterRowComponent_ng_container_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "filterComparison");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comparison_r2 = ctx.$implicit;
    \u0275\u0275property("value", comparison_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, comparison_r2));
  }
}
function MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 11);
  }
}
function MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 12);
  }
}
function MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 13);
  }
}
function MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "input", 15, 0);
    \u0275\u0275listener("dateSelect", function MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_3_Template_input_dateSelect_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.onDateSelect($event));
    })("blur", function MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_3_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.updateIfDateFilled());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const d_r5 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(d_r5.toggle());
    });
    \u0275\u0275elementEnd()();
  }
}
function MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "select2", 17);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275property("data", ctx)("hideSelectedItems", true)("multiple", ctx_r3.MultipleDropdownAllowed)("infiniteScroll", true)("resettable", true);
  }
}
function MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_4_Conditional_0_Template, 1, 5, "select2", 17);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_6_0 = \u0275\u0275pipeBind1(1, 1, ctx_r3.dropdownOptions$)) ? 0 : -1, tmp_6_0);
  }
}
function MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_0_Template, 1, 0, "input", 11)(1, MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_1_Template, 1, 0, "input", 12)(2, MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_2_Template, 1, 0, "input", 13)(3, MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_3_Template, 4, 0, "div", 14)(4, MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Case_4_Template, 2, 3);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_5_0 = ctx) === ctx_r3.PredicateType.Text ? 0 : tmp_5_0 === ctx_r3.PredicateType.Number ? 1 : tmp_5_0 === ctx_r3.PredicateType.Boolean ? 2 : tmp_5_0 === ctx_r3.PredicateType.Date ? 3 : tmp_5_0 === ctx_r3.PredicateType.Dropdown ? 4 : -1);
  }
}
function MetadataFilterRowComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MetadataFilterRowComponent_ng_container_0_Conditional_13_Conditional_0_Template, 5, 1);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_3_0 = \u0275\u0275pipeBind1(1, 1, ctx_r3.predicateType$)) ? 0 : -1, tmp_3_0);
  }
}
function MetadataFilterRowComponent_ng_container_0_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbTooltip", t_r6(ctx_r3.UiLabel.tooltip));
  }
}
function MetadataFilterRowComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, MetadataFilterRowComponent_ng_container_0_Conditional_15_Conditional_2_Template, 1, 1, "i", 19);
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6(ctx_r3.UiLabel.unit));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.UiLabel.tooltip ? 2 : -1);
  }
}
function MetadataFilterRowComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 2)(2, "div", 3)(3, "div", 4)(4, "select", 5);
    \u0275\u0275repeaterCreate(5, MetadataFilterRowComponent_ng_container_0_For_6_Template, 3, 4, "option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "select", 8);
    \u0275\u0275repeaterCreate(9, MetadataFilterRowComponent_ng_container_0_For_10_Template, 3, 4, "option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275template(13, MetadataFilterRowComponent_ng_container_0_Conditional_13_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275template(15, MetadataFilterRowComponent_ng_container_0_Conditional_15_Template, 3, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(16, 0, ["#removeBtn", ""]);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.formGroup);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.availableFields);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 3, ctx_r3.validComparisons$));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_5_0 = ctx_r3.formGroup.get("comparison")) == null ? null : tmp_5_0.value) !== ctx_r3.FilterComparison.IsEmpty ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.UiLabel !== null ? 15 : -1);
  }
}
var PredicateType;
(function(PredicateType2) {
  PredicateType2[PredicateType2["Text"] = 1] = "Text";
  PredicateType2[PredicateType2["Number"] = 2] = "Number";
  PredicateType2[PredicateType2["Dropdown"] = 3] = "Dropdown";
  PredicateType2[PredicateType2["Boolean"] = 4] = "Boolean";
  PredicateType2[PredicateType2["Date"] = 5] = "Date";
})(PredicateType || (PredicateType = {}));
var FilterRowUi = class {
  constructor(unit = "", tooltip = "") {
    this.unit = "";
    this.tooltip = "";
    this.unit = unit;
    this.tooltip = tooltip;
  }
};
var unitLabels = /* @__PURE__ */ new Map([
  [FilterField.ReadingDate, new FilterRowUi("unit-reading-date")],
  [FilterField.AverageRating, new FilterRowUi("unit-average-rating")],
  [FilterField.ReadProgress, new FilterRowUi("unit-reading-progress")],
  [FilterField.UserRating, new FilterRowUi("unit-user-rating")],
  [FilterField.ReadLast, new FilterRowUi("unit-read-last")]
]);
var StringFields = [FilterField.SeriesName, FilterField.Summary, FilterField.Path, FilterField.FilePath];
var NumberFields = [
  FilterField.ReadTime,
  FilterField.ReleaseYear,
  FilterField.ReadProgress,
  FilterField.UserRating,
  FilterField.AverageRating,
  FilterField.ReadLast
];
var DropdownFields = [
  FilterField.PublicationStatus,
  FilterField.Languages,
  FilterField.AgeRating,
  FilterField.Translators,
  FilterField.Characters,
  FilterField.Publisher,
  FilterField.Editor,
  FilterField.CoverArtist,
  FilterField.Letterer,
  FilterField.Colorist,
  FilterField.Inker,
  FilterField.Penciller,
  FilterField.Writers,
  FilterField.Genres,
  FilterField.Libraries,
  FilterField.Formats,
  FilterField.CollectionTags,
  FilterField.Tags,
  FilterField.Imprint,
  FilterField.Team,
  FilterField.Location
];
var BooleanFields = [FilterField.WantToRead];
var DateFields = [FilterField.ReadingDate];
var DropdownFieldsWithoutMustContains = [
  FilterField.Libraries,
  FilterField.Formats,
  FilterField.AgeRating,
  FilterField.PublicationStatus
];
var DropdownFieldsThatIncludeNumberComparisons = [
  FilterField.AgeRating
];
var NumberFieldsThatIncludeDateComparisons = [
  FilterField.ReleaseYear
];
var FieldsThatShouldIncludeIsEmpty = [
  FilterField.Summary,
  FilterField.UserRating,
  FilterField.Genres,
  FilterField.CollectionTags,
  FilterField.Tags,
  FilterField.ReleaseYear,
  FilterField.Translators,
  FilterField.Characters,
  FilterField.Publisher,
  FilterField.Editor,
  FilterField.CoverArtist,
  FilterField.Letterer,
  FilterField.Colorist,
  FilterField.Inker,
  FilterField.Penciller,
  FilterField.Writers,
  FilterField.Imprint,
  FilterField.Team,
  FilterField.Location
];
var StringComparisons = [
  FilterComparison.Equal,
  FilterComparison.NotEqual,
  FilterComparison.BeginsWith,
  FilterComparison.EndsWith,
  FilterComparison.Matches
];
var DateComparisons = [
  FilterComparison.IsBefore,
  FilterComparison.IsAfter,
  FilterComparison.Equal,
  FilterComparison.NotEqual
];
var NumberComparisons = [
  FilterComparison.Equal,
  FilterComparison.NotEqual,
  FilterComparison.LessThan,
  FilterComparison.LessThanEqual,
  FilterComparison.GreaterThan,
  FilterComparison.GreaterThanEqual
];
var DropdownComparisons = [
  FilterComparison.Equal,
  FilterComparison.NotEqual,
  FilterComparison.Contains,
  FilterComparison.NotContains,
  FilterComparison.MustContains
];
var BooleanComparisons = [
  FilterComparison.Equal
];
var MetadataFilterRowComponent = class _MetadataFilterRowComponent {
  get UiLabel() {
    const field = parseInt(this.formGroup.get("input").value, 10);
    if (!unitLabels.has(field))
      return null;
    return unitLabels.get(field);
  }
  get MultipleDropdownAllowed() {
    const comp = parseInt(this.formGroup.get("comparison")?.value, 10);
    return comp === FilterComparison.Contains || comp === FilterComparison.NotContains || comp === FilterComparison.MustContains;
  }
  constructor(metadataService, libraryService, collectionTagService) {
    this.metadataService = metadataService;
    this.libraryService = libraryService;
    this.collectionTagService = collectionTagService;
    this.index = 0;
    this.availableFields = allFields;
    this.filterStatement = new EventEmitter();
    this.cdRef = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.dateParser = inject(NgbDateParserFormatter);
    this.FilterComparison = FilterComparison;
    this.formGroup = new FormGroup({
      "comparison": new FormControl(FilterComparison.Equal, []),
      "filterValue": new FormControl("", [])
    });
    this.validComparisons$ = new BehaviorSubject([FilterComparison.Equal]);
    this.predicateType$ = new BehaviorSubject(PredicateType.Text);
    this.dropdownOptions$ = of([]);
    this.loaded = false;
    this.PredicateType = PredicateType;
  }
  ngOnInit() {
    this.formGroup.addControl("input", new FormControl(FilterField.SeriesName, []));
    this.formGroup.get("input")?.valueChanges.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((val) => this.handleFieldChange(val));
    this.populateFromPreset();
    this.formGroup.get("filterValue")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    this.dropdownOptions$ = this.formGroup.get("input").valueChanges.pipe(startWith(this.preset.value), distinctUntilChanged(), filter(() => {
      const inputVal = parseInt(this.formGroup.get("input")?.value, 10);
      return DropdownFields.includes(inputVal);
    }), switchMap((_) => this.getDropdownObservable()), takeUntilDestroyed(this.destroyRef));
    this.formGroup.valueChanges.pipe(distinctUntilChanged(), tap((_) => this.propagateFilterUpdate()), takeUntilDestroyed(this.destroyRef)).subscribe();
    this.loaded = true;
    this.cdRef.markForCheck();
  }
  propagateFilterUpdate() {
    const stmt = {
      comparison: parseInt(this.formGroup.get("comparison")?.value, 10),
      field: parseInt(this.formGroup.get("input")?.value, 10),
      value: this.formGroup.get("filterValue")?.value
    };
    if (typeof stmt.value === "object" && DateFields.includes(stmt.field)) {
      stmt.value = this.dateParser.format(stmt.value);
    }
    if (typeof stmt.value === "number" && !Number.isNaN(stmt.value)) {
      stmt.value = stmt.value + "";
    }
    if (typeof stmt.value === "boolean") {
      stmt.value = stmt.value + "";
    }
    if (stmt.comparison !== FilterComparison.IsEmpty) {
      if (!stmt.value && (![FilterField.SeriesName, FilterField.Summary].includes(stmt.field) && !BooleanFields.includes(stmt.field)))
        return;
    }
    this.filterStatement.emit(stmt);
  }
  populateFromPreset() {
    const val = this.preset.value === "undefined" || !this.preset.value ? "" : this.preset.value;
    this.formGroup.get("comparison")?.patchValue(this.preset.comparison);
    this.formGroup.get("input")?.patchValue(this.preset.field);
    if (StringFields.includes(this.preset.field)) {
      this.formGroup.get("filterValue")?.patchValue(val);
    } else if (BooleanFields.includes(this.preset.field)) {
      this.formGroup.get("filterValue")?.patchValue(val);
    } else if (DateFields.includes(this.preset.field)) {
      this.formGroup.get("filterValue")?.patchValue(this.dateParser.parse(val));
    } else if (DropdownFields.includes(this.preset.field)) {
      if (this.MultipleDropdownAllowed || val.includes(",")) {
        this.formGroup.get("filterValue")?.patchValue(val.split(",").map((d) => parseInt(d, 10)));
      } else {
        if (this.preset.field === FilterField.Languages) {
          this.formGroup.get("filterValue")?.patchValue(val);
        } else {
          this.formGroup.get("filterValue")?.patchValue(parseInt(val, 10));
        }
      }
    } else {
      this.formGroup.get("filterValue")?.patchValue(parseInt(val, 10));
    }
    this.cdRef.markForCheck();
  }
  getDropdownObservable() {
    const filterField = parseInt(this.formGroup.get("input")?.value, 10);
    switch (filterField) {
      case FilterField.PublicationStatus:
        return this.metadataService.getAllPublicationStatus().pipe(map((pubs) => pubs.map((pub) => {
          return { value: pub.value, label: pub.title };
        })));
      case FilterField.AgeRating:
        return this.metadataService.getAllAgeRatings().pipe(map((ratings) => ratings.map((rating) => {
          return { value: rating.value, label: rating.title };
        })));
      case FilterField.Genres:
        return this.metadataService.getAllGenres().pipe(map((genres) => genres.map((genre) => {
          return { value: genre.id, label: genre.title };
        })));
      case FilterField.Languages:
        return this.metadataService.getAllLanguages().pipe(map((statuses) => statuses.map((status) => {
          return { value: status.isoCode, label: status.title + ` (${status.isoCode})` };
        })));
      case FilterField.Formats:
        return of(mangaFormatFilters).pipe(map((statuses) => statuses.map((status) => {
          return { value: status.value, label: status.title };
        })));
      case FilterField.Libraries:
        return this.libraryService.getLibraries().pipe(map((libs) => libs.map((lib) => {
          return { value: lib.id, label: lib.name };
        })));
      case FilterField.Tags:
        return this.metadataService.getAllTags().pipe(map((statuses) => statuses.map((status) => {
          return { value: status.id, label: status.title };
        })));
      case FilterField.CollectionTags:
        return this.collectionTagService.allCollections().pipe(map((statuses) => statuses.map((status) => {
          return { value: status.id, label: status.title };
        })));
      case FilterField.Characters:
        return this.getPersonOptions(PersonRole.Character);
      case FilterField.Colorist:
        return this.getPersonOptions(PersonRole.Colorist);
      case FilterField.CoverArtist:
        return this.getPersonOptions(PersonRole.CoverArtist);
      case FilterField.Editor:
        return this.getPersonOptions(PersonRole.Editor);
      case FilterField.Inker:
        return this.getPersonOptions(PersonRole.Inker);
      case FilterField.Letterer:
        return this.getPersonOptions(PersonRole.Letterer);
      case FilterField.Penciller:
        return this.getPersonOptions(PersonRole.Penciller);
      case FilterField.Publisher:
        return this.getPersonOptions(PersonRole.Publisher);
      case FilterField.Imprint:
        return this.getPersonOptions(PersonRole.Imprint);
      case FilterField.Team:
        return this.getPersonOptions(PersonRole.Team);
      case FilterField.Location:
        return this.getPersonOptions(PersonRole.Location);
      case FilterField.Translators:
        return this.getPersonOptions(PersonRole.Translator);
      case FilterField.Writers:
        return this.getPersonOptions(PersonRole.Writer);
    }
    return of([]);
  }
  getPersonOptions(role) {
    return this.metadataService.getAllPeopleByRole(role).pipe(map((people) => people.map((person) => {
      return { value: person.id, label: person.name };
    })));
  }
  handleFieldChange(val) {
    const inputVal = parseInt(val, 10);
    if (StringFields.includes(inputVal)) {
      let comps = [...StringComparisons];
      if (FieldsThatShouldIncludeIsEmpty.includes(inputVal)) {
        comps.push(FilterComparison.IsEmpty);
      }
      this.validComparisons$.next([...new Set(comps)]);
      this.predicateType$.next(PredicateType.Text);
      if (this.loaded) {
        this.formGroup.get("filterValue")?.patchValue("");
        this.formGroup.get("comparison")?.patchValue(StringComparisons[0]);
      }
      return;
    }
    if (NumberFields.includes(inputVal)) {
      const comps = [...NumberComparisons];
      if (NumberFieldsThatIncludeDateComparisons.includes(inputVal)) {
        comps.push(...DateComparisons);
      }
      if (FieldsThatShouldIncludeIsEmpty.includes(inputVal)) {
        comps.push(FilterComparison.IsEmpty);
      }
      this.validComparisons$.next([...new Set(comps)]);
      this.predicateType$.next(PredicateType.Number);
      if (this.loaded) {
        this.formGroup.get("filterValue")?.patchValue(0);
        this.formGroup.get("comparison")?.patchValue(NumberComparisons[0]);
      }
      return;
    }
    if (DateFields.includes(inputVal)) {
      const comps = [...DateComparisons];
      if (FieldsThatShouldIncludeIsEmpty.includes(inputVal)) {
        comps.push(FilterComparison.IsEmpty);
      }
      this.validComparisons$.next([...new Set(comps)]);
      this.predicateType$.next(PredicateType.Date);
      if (this.loaded) {
        this.formGroup.get("filterValue")?.patchValue(false);
        this.formGroup.get("comparison")?.patchValue(DateComparisons[0]);
      }
      return;
    }
    if (BooleanFields.includes(inputVal)) {
      let comps = [...DateComparisons];
      if (FieldsThatShouldIncludeIsEmpty.includes(inputVal)) {
        comps.push(FilterComparison.IsEmpty);
      }
      this.validComparisons$.next([...new Set(comps)]);
      this.predicateType$.next(PredicateType.Boolean);
      if (this.loaded) {
        this.formGroup.get("filterValue")?.patchValue(false);
        this.formGroup.get("comparison")?.patchValue(BooleanComparisons[0]);
      }
      return;
    }
    if (DropdownFields.includes(inputVal)) {
      let comps = [...DropdownComparisons];
      if (DropdownFieldsThatIncludeNumberComparisons.includes(inputVal)) {
        comps.push(...NumberComparisons);
      }
      if (DropdownFieldsWithoutMustContains.includes(inputVal)) {
        comps = comps.filter((c) => c !== FilterComparison.MustContains);
      }
      if (FieldsThatShouldIncludeIsEmpty.includes(inputVal)) {
        comps.push(FilterComparison.IsEmpty);
      }
      this.validComparisons$.next([...new Set(comps)]);
      this.predicateType$.next(PredicateType.Dropdown);
      if (this.loaded) {
        this.formGroup.get("filterValue")?.patchValue(0);
        this.formGroup.get("comparison")?.patchValue(comps[0]);
      }
      return;
    }
  }
  onDateSelect(_) {
    this.propagateFilterUpdate();
  }
  updateIfDateFilled() {
    this.propagateFilterUpdate();
  }
  static {
    this.\u0275fac = function MetadataFilterRowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetadataFilterRowComponent)(\u0275\u0275directiveInject(MetadataService), \u0275\u0275directiveInject(LibraryService), \u0275\u0275directiveInject(CollectionTagService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _MetadataFilterRowComponent, selectors: [["app-metadata-row-filter"]], inputs: { index: "index", preset: "preset", availableFields: "availableFields" }, outputs: { filterStatement: "filterStatement" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["d", "ngbDatepicker"], [4, "transloco", "translocoRead"], [3, "formGroup"], [1, "row", "g-0"], [1, "col-md-3", "me-2", "col-10", "mb-2"], ["formControlName", "input", 1, "form-select", "me-2"], [3, "value"], [1, "col-md-2", "me-2", "col-10", "mb-2"], ["formControlName", "comparison", 1, "col-auto", "form-select"], [1, "col-md-4", "col-10", "mb-2"], [1, "col", "pt-2", "ms-2"], ["type", "text", "autocomplete", "true", "formControlName", "filterValue", 1, "form-control", "me-2"], ["type", "number", "inputmode", "numeric", "formControlName", "filterValue", "min", "0", 1, "form-control", "me-2"], ["type", "checkbox", "formControlName", "filterValue", 1, "form-check-input", "mt-2", "me-2", 2, "font-size", "1.5rem"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "formControlName", "filterValue", "ngbDatepicker", "", 1, "form-control", 3, "dateSelect", "blur"], ["type", "button", 1, "btn", "btn-outline-secondary", "fa-solid", "fa-calendar-days", 3, "click"], ["formControlName", "filterValue", 3, "data", "hideSelectedItems", "multiple", "infiniteScroll", "resettable"], [1, "text-muted"], ["aria-hidden", "true", 1, "fa", "fa-info-circle", "ms-1", 3, "ngbTooltip"]], template: function MetadataFilterRowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MetadataFilterRowComponent_ng_container_0_Template, 17, 5, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "metadata-filter-row");
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      CheckboxControlValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MinValidator,
      FormGroupDirective,
      FormControlName,
      AsyncPipe,
      FilterFieldPipe,
      FilterComparisonPipe,
      Select2Module,
      Select2,
      NgbTooltip,
      TranslocoDirective,
      NgbInputDatepicker
    ], styles: ["\n\n  .select2-selection__rendered {\n  padding-top: 4px !important;\n}\n  .ngb-dp-content, \n  .ngb-dp-header {\n  background: var(--bs-body-bg);\n  color: var(--body-text-color);\n}\n  .ngb-dp-header, \n  .ngb-dp-weekdays {\n  background-color: var(--bs-body-bg) !important;\n}\n  .ngb-dp-day .btn-light, \n  .ngb-dp-weekday {\n  background: var(--bs-body-bg);\n  color: var(--body-text-color);\n}\n  [ngbDatepickerDayView]:hover:not(.bg-primary), \n[ngbDatepickerDayView].active[_ngcontent-%COMP%]:not(.bg-primary) {\n  background: var(--primary-color-dark-shade) !important;\n  outline: 1px solid var(--primary-color-dark-shade) !important;\n}\n/*# sourceMappingURL=metadata-filter-row.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataFilterRowComponent, { className: "MetadataFilterRowComponent", filePath: "src/app/metadata-filter/_components/metadata-filter-row/metadata-filter-row.component.ts", lineNumber: 144 });
})();

// src/app/metadata-filter/_components/metadata-builder/metadata-builder.component.ts
var _c02 = (a0) => ({ num: a0 });
function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r2.title);
  }
}
function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_div_11_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20, 1);
    \u0275\u0275listener("click", function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_div_11_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeFilter(i_r5));
    });
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    const t_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("ngbTooltip", t_r7("remove-rule", \u0275\u0275pureFunction1(2, _c02, i_r5)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r7("remove-rule", \u0275\u0275pureFunction1(4, _c02, i_r5)));
  }
}
function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 16)(2, "app-metadata-row-filter", 17);
    \u0275\u0275listener("filterStatement", function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_div_11_Template_app_metadata_row_filter_filterStatement_2_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateFilter(i_r5, $event));
    });
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275template(4, MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_div_11_button_4_Template, 5, 6, "button", 19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const filterStmt_r8 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("index", i_r5 + 100)("preset", filterStmt_r8)("availableFields", ctx_r2.availableFilterFields);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r5 < ctx_r2.filter.statements.length - 1 && ctx_r2.filter.statements.length > 1);
  }
}
function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "select", 9);
    \u0275\u0275template(5, MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_option_5_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "button", 11);
    \u0275\u0275listener("click", function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addFilter());
    });
    \u0275\u0275element(8, "i", 12);
    \u0275\u0275elementStart(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(11, MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_div_11_Template, 5, 4, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.groupOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbTooltip", t_r7("add-rule"))("disabled", ctx_r2.statementLimit === -1 || ctx_r2.statementLimit > 0 && ctx_r2.filter.statements.length >= ctx_r2.statementLimit);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r7("add-rule"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filter.statements);
  }
}
function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("value", opt_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r10.title);
  }
}
function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_div_10_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20, 1);
    \u0275\u0275listener("click", function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_div_10_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const i_r12 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeFilter(i_r12));
    });
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("ngbTooltip", t_r7("remove-rule"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r7("remove-rule"));
  }
}
function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 28)(2, "app-metadata-row-filter", 17);
    \u0275\u0275listener("filterStatement", function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_div_10_Template_app_metadata_row_filter_filterStatement_2_listener($event) {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateFilter(i_r12, $event));
    });
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275template(4, MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_div_10_button_4_Template, 5, 2, "button", 19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const filterStmt_r14 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("index", i_r12)("preset", filterStmt_r14)("availableFields", ctx_r2.availableFilterFields);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r12 < ctx_r2.filter.statements.length - 1 && ctx_r2.filter.statements.length > 1);
  }
}
function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 23)(2, "div", 24)(3, "select", 9);
    \u0275\u0275template(4, MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_option_4_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 25)(6, "button", 26);
    \u0275\u0275listener("click", function MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addFilter());
    });
    \u0275\u0275element(7, "i", 12);
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(10, MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_div_10_Template, 5, 4, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.groupOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbTooltip", t_r7("add-rule"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r7("add-rule"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filter.statements);
  }
}
function MetadataBuilderComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 4);
    \u0275\u0275template(2, MetadataBuilderComponent_ng_container_0_ng_container_1_ng_container_2_Template, 12, 5, "ng-container", 5)(3, MetadataBuilderComponent_ng_container_0_ng_container_1_ng_template_3_Template, 11, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const mobileView_r15 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.formGroup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.utilityService.getActiveBreakpoint() === ctx_r2.Breakpoint.Desktop)("ngIfElse", mobileView_r15);
  }
}
function MetadataBuilderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MetadataBuilderComponent_ng_container_0_ng_container_1_Template, 5, 3, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filter);
  }
}
var MetadataBuilderComponent = class _MetadataBuilderComponent {
  constructor() {
    this.statementLimit = 0;
    this.availableFilterFields = allFields;
    this.update = new EventEmitter();
    this.apply = new EventEmitter();
    this.cdRef = inject(ChangeDetectorRef);
    this.metadataService = inject(MetadataService);
    this.utilityService = inject(UtilityService);
    this.filterUtilityService = inject(FilterUtilitiesService);
    this.destroyRef = inject(DestroyRef);
    this.Breakpoint = Breakpoint;
    this.formGroup = new FormGroup({});
    this.groupOptions = [
      { value: FilterCombination.Or, title: translate("metadata-builder.or") },
      { value: FilterCombination.And, title: translate("metadata-builder.and") }
    ];
  }
  ngOnInit() {
    this.formGroup.addControl("comparison", new FormControl(this.filter?.combination || FilterCombination.Or, []));
    this.formGroup.valueChanges.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef), tap((values) => {
      this.filter.combination = parseInt(this.formGroup.get("comparison")?.value, 10);
      this.update.emit(this.filter);
    })).subscribe();
  }
  addFilter() {
    this.filter.statements = [this.metadataService.createDefaultFilterStatement(), ...this.filter.statements];
    this.cdRef.markForCheck();
  }
  removeFilter(index) {
    this.filter.statements = this.filter.statements.slice(0, index).concat(this.filter.statements.slice(index + 1));
    this.cdRef.markForCheck();
  }
  updateFilter(index, filterStmt) {
    this.metadataService.updateFilter(this.filter.statements, index, filterStmt);
    this.update.emit(this.filter);
  }
  static {
    this.\u0275fac = function MetadataBuilderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetadataBuilderComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _MetadataBuilderComponent, selectors: [["app-metadata-builder"]], inputs: { filter: "filter", statementLimit: "statementLimit", availableFilterFields: "availableFilterFields" }, outputs: { update: "update", apply: "apply" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["mobileView", ""], ["removeBtn", ""], [4, "transloco", "translocoRead"], [4, "ngIf"], [3, "formGroup"], [4, "ngIf", "ngIfElse"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-md-2"], ["formControlName", "comparison", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-icon", 3, "click", "ngbTooltip", "disabled"], ["aria-hidden", "true", 1, "fa", "fa-solid", "fa-plus"], ["aria-hidden", "true", 1, "visually-hidden"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-md-10"], [3, "filterStatement", "index", "preset", "availableFields"], [1, "col-md-1", "ms-2"], ["type", "button", "class", "btn btn-icon", 3, "ngbTooltip", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-icon", 3, "click", "ngbTooltip"], ["aria-hidden", "true", 1, "fa-solid", "fa-minus"], [1, "visually-hidden"], [1, "row", "mb-3"], [1, "col-md-4", "col-10"], [1, "col-md-2", "col-1"], [1, "btn", "btn-icon", 3, "click", "ngbTooltip"], ["class", "row mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "col-md-1", "ms-2", "col-1"]], template: function MetadataBuilderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MetadataBuilderComponent_ng_container_0_Template, 2, 1, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "metadata-builder");
      }
    }, dependencies: [
      NgIf,
      MetadataFilterRowComponent,
      NgForOf,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgbTooltip,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      TranslocoDirective
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataBuilderComponent, { className: "MetadataBuilderComponent", filePath: "src/app/metadata-filter/_components/metadata-builder/metadata-builder.component.ts", lineNumber: 45 });
})();

// src/app/metadata-filter/metadata-filter.component.ts
var _c03 = ["[ngbCollapse]"];
var _forTrack0 = ($index, $item) => $item.value;
var _c1 = (a0) => ({ isOpen: a0 });
var _c2 = () => ({ topOffset: 75 });
var _c3 = (a0) => ({ "mt-3": a0 });
function MetadataFilterComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275elementContainer(1, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const isOpen_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275nextContext();
    const filterSection_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("@inOutAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", filterSection_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c1, isOpen_r1));
  }
}
function MetadataFilterComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-drawer", 5, 2);
    \u0275\u0275listener("drawerClosed", function MetadataFilterComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_1_Template_app_drawer_drawerClosed_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.toggleService.set(false));
    });
    \u0275\u0275elementStart(3, "h5", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275elementContainer(6, 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const isOpen_r1 = \u0275\u0275nextContext(2);
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const filterSection_r2 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", isOpen_r1)("options", \u0275\u0275pureFunction0(5, _c2))("width", 600);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("filter-title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", filterSection_r2);
  }
}
function MetadataFilterComponent_ng_container_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MetadataFilterComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_0_Template, 2, 5, "div")(1, MetadataFilterComponent_ng_container_0_Conditional_1_Conditional_0_Conditional_1_Template, 7, 6, "div");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx >= ctx_r3.Breakpoint.Tablet ? 0 : 1);
  }
}
function MetadataFilterComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MetadataFilterComponent_ng_container_0_Conditional_1_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r3.utilityService.getActiveBreakpoint()) ? 0 : -1, tmp_6_0);
  }
}
function MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 21);
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("title", t_r5("ascending-alt"));
  }
}
function MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 22);
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("title", t_r5("descending-alt"));
  }
}
function MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    \u0275\u0275property("value", field_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r7.title);
  }
}
function MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 8);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const buttons_r8 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", buttons_r8);
  }
}
function MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275elementContainer(1, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const buttons_r8 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buttons_r8);
  }
}
function MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "app-metadata-builder", 11);
    \u0275\u0275listener("update", function MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Template_app_metadata_builder_update_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.handleFilters($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "form", 12)(4, "div", 13)(5, "div", 14)(6, "div", 15)(7, "label", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 18)(11, "label", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 20);
    \u0275\u0275listener("click", function MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateSortOrder());
    });
    \u0275\u0275template(14, MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Conditional_14_Template, 1, 1, "i", 21)(15, MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Conditional_15_Template, 1, 1, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 23);
    \u0275\u0275repeaterCreate(17, MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_For_18_Template, 2, 2, "option", 24, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 25)(20, "label", 26);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Conditional_23_Template, 1, 1, "ng-container", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Conditional_24_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("filter", ctx_r3.filterV2)("availableFilterFields", ctx_r3.allFilterFields)("statementLimit", ctx_r3.filterSettings.statementLimit);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.sortGroup);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r5("limit-label"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("sort-by-label"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.filterSettings.sortDisabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isAscendingSort ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.allSortFields);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c3, ctx_r3.utilityService.getActiveBreakpoint() <= ctx_r3.Breakpoint.Mobile));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("filter-name-label"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.utilityService.getActiveBreakpoint() > ctx_r3.Breakpoint.Tablet ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.utilityService.getActiveBreakpoint() <= ctx_r3.Breakpoint.Tablet ? 24 : -1);
  }
}
function MetadataFilterComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MetadataFilterComponent_ng_container_0_ng_template_3_Conditional_0_Template, 25, 14, "div", 9);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.fullyLoaded && ctx_r3.filterV2 ? 0 : -1);
  }
}
function MetadataFilterComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "button", 29);
    \u0275\u0275listener("click", function MetadataFilterComponent_ng_container_0_ng_template_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clear());
    });
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function MetadataFilterComponent_ng_container_0_ng_template_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.apply());
    });
    \u0275\u0275element(5, "i", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 33)(8, "button", 34);
    \u0275\u0275listener("click", function MetadataFilterComponent_ng_container_0_ng_template_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275element(9, "i", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("reset"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("apply"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.filterSettings.saveDisabled || !((tmp_7_0 = ctx_r3.sortGroup.get("name")) == null ? null : tmp_7_0.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("save"), " ");
  }
}
function MetadataFilterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MetadataFilterComponent_ng_container_0_Conditional_1_Template, 1, 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, MetadataFilterComponent_ng_container_0_ng_template_3_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, MetadataFilterComponent_ng_container_0_ng_template_5_Template, 11, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = \u0275\u0275pipeBind1(2, 1, ctx_r3.toggleService.toggleState$)) ? 1 : -1, tmp_4_0);
  }
}
var MetadataFilterComponent = class _MetadataFilterComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.utilityService = inject(UtilityService);
    this.cdRef = inject(ChangeDetectorRef);
    this.toastr = inject(ToastrService);
    this.filterService = inject(FilterService);
    this.toggleService = inject(ToggleService);
    this.translocoService = inject(TranslocoService);
    this.sortFieldPipe = new SortFieldPipe(this.translocoService);
    this.filterOpen = new EventEmitter();
    this.filteringDisabled = false;
    this.applyFilter = new EventEmitter();
    this.filteringCollapsed = true;
    this.libraries = [];
    this.isAscendingSort = true;
    this.updateApplied = 0;
    this.fullyLoaded = false;
    this.allSortFields = allSortFields.map((f) => {
      return { title: this.sortFieldPipe.transform(f), value: f };
    }).sort((a, b) => a.title.localeCompare(b.title));
    this.allFilterFields = allFields;
    this.Breakpoint = Breakpoint;
  }
  ngOnInit() {
    if (this.filterSettings === void 0) {
      this.filterSettings = new FilterSettings();
      this.cdRef.markForCheck();
    }
    if (this.filterOpen) {
      this.filterOpen.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((openState) => {
        this.filteringCollapsed = !openState;
        this.toggleService.set(!this.filteringCollapsed);
        this.cdRef.markForCheck();
      });
    }
    this.loadFromPresetsAndSetup();
  }
  close() {
    this.filterOpen.emit(false);
    this.filteringCollapsed = true;
    this.toggleService.set(!this.filteringCollapsed);
    this.cdRef.markForCheck();
  }
  deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    if (obj instanceof Array) {
      return obj.map((item) => this.deepClone(item));
    }
    const clonedObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          clonedObj[key] = this.deepClone(obj[key]);
        } else {
          clonedObj[key] = obj[key];
        }
      }
    }
    return clonedObj;
  }
  handleFilters(filter2) {
    this.filterV2 = filter2;
  }
  loadFromPresetsAndSetup() {
    this.fullyLoaded = false;
    this.filterV2 = this.deepClone(this.filterSettings.presetsV2);
    this.sortGroup = new FormGroup({
      sortField: new FormControl({ value: this.filterV2?.sortOptions?.sortField || SortField.SortName, disabled: this.filterSettings.sortDisabled }, []),
      limitTo: new FormControl(this.filterV2?.limitTo || 0, []),
      name: new FormControl(this.filterV2?.name || "", [])
    });
    if (this.filterSettings?.presetsV2?.sortOptions) {
      this.isAscendingSort = this.filterSettings?.presetsV2?.sortOptions.isAscending;
    }
    this.sortGroup.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.filterV2?.sortOptions === null) {
        this.filterV2.sortOptions = {
          isAscending: this.isAscendingSort,
          sortField: parseInt(this.sortGroup.get("sortField")?.value, 10)
        };
      }
      this.filterV2.sortOptions.sortField = parseInt(this.sortGroup.get("sortField")?.value, 10);
      this.filterV2.limitTo = Math.max(parseInt(this.sortGroup.get("limitTo")?.value || "0", 10), 0);
      this.filterV2.name = this.sortGroup.get("name")?.value || "";
      this.cdRef.markForCheck();
    });
    this.fullyLoaded = true;
    this.apply();
  }
  updateSortOrder() {
    if (this.filterSettings.sortDisabled)
      return;
    this.isAscendingSort = !this.isAscendingSort;
    if (this.filterV2?.sortOptions === null) {
      this.filterV2.sortOptions = {
        isAscending: this.isAscendingSort,
        sortField: SortField.SortName
      };
    }
    this.filterV2.sortOptions.isAscending = this.isAscendingSort;
    this.cdRef.markForCheck();
  }
  clear() {
    this.loadFromPresetsAndSetup();
  }
  apply() {
    this.applyFilter.emit({ isFirst: this.updateApplied === 0, filterV2: this.filterV2 });
    if (this.utilityService.getActiveBreakpoint() === Breakpoint.Mobile && this.updateApplied !== 0) {
      this.toggleSelected();
    }
    this.updateApplied++;
    this.cdRef.markForCheck();
  }
  save() {
    if (!this.filterV2)
      return;
    this.filterV2.name = this.sortGroup.get("name")?.value;
    this.filterService.saveFilter(this.filterV2).subscribe(() => {
      this.toastr.success(translate("toasts.smart-filter-updated"));
      this.apply();
    });
  }
  toggleSelected() {
    this.toggleService.toggle();
    this.cdRef.markForCheck();
  }
  setToggle(event) {
    this.toggleService.set(!this.filteringCollapsed);
  }
  static {
    this.\u0275fac = function MetadataFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetadataFilterComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _MetadataFilterComponent, selectors: [["app-metadata-filter"]], contentQueries: function MetadataFilterComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.collapse = _t.first);
      }
    }, inputs: { filterOpen: "filterOpen", filteringDisabled: "filteringDisabled", filterSettings: "filterSettings" }, outputs: { applyFilter: "applyFilter" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["filterSection", ""], ["buttons", ""], ["commentDrawer", "drawer"], [4, "transloco", "translocoRead"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "drawerClosed", "isOpen", "options", "width"], ["header", ""], ["body", "", 1, "drawer-body"], [3, "ngTemplateOutlet"], [1, "filter-section", "mx-auto", "pb-3"], [1, "row", "justify-content-center", "g-0"], [3, "update", "filter", "availableFilterFields", "statementLimit"], [1, "container-fluid", 3, "formGroup"], [1, "row", "mb-3"], [1, "col-md-2", "col-sm-3"], [1, "form-group", "pe-1"], ["for", "limit-to", 1, "form-label"], ["id", "limit-to", "type", "number", "inputmode", "numeric", "formControlName", "limitTo", 1, "form-control"], [1, "col-md-3", "col-sm-9"], ["for", "sort-options", 1, "form-label"], [1, "btn", "btn-sm", "btn-secondary-outline", 2, "height", "25px", "padding-bottom", "0", 3, "click", "disabled"], [1, "fa", "fa-arrow-up", 3, "title"], [1, "fa", "fa-arrow-down", 3, "title"], ["id", "sort-options", "formControlName", "sortField", 1, "form-select", 2, "height", "38px"], [3, "value"], [1, "col-md-4", "col-sm-12", 3, "ngClass"], ["for", "filter-name", 1, "form-label"], ["id", "filter-name", "type", "text", "formControlName", "name", 1, "form-control"], [1, "col-md-6", "col-sm-6", "mt-4", "pt-2", "d-flex", "justify-content-between"], [1, "btn", "btn-secondary", "col-6", "me-1", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-arrow-rotate-left", "me-1"], [1, "btn", "btn-primary", "col-6", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-play", "me-1"], [1, "col-md-2", "col-sm-6", "mt-4", "pt-2"], [1, "btn", "btn-primary", "col-12", 3, "click", "disabled"], ["aria-hidden", "true", 1, "fa-solid", "fa-floppy-disk"]], template: function MetadataFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MetadataFilterComponent_ng_container_0_Template, 7, 3, "ng-container", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "metadata-filter");
      }
    }, dependencies: [
      NgTemplateOutlet,
      DrawerComponent,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      FormsModule,
      AsyncPipe,
      TranslocoModule,
      TranslocoDirective,
      MetadataBuilderComponent,
      NgClass
    ], styles: ["\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, \ninput[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=metadata-filter.component.css.map */"], data: { animation: [
      trigger("inOutAnimation", [
        transition(":enter", [
          style({ height: 0, opacity: 0 }),
          animate(".5s ease-out", style({ height: 300, opacity: 1 }))
        ]),
        transition(":leave", [
          style({ height: 300, opacity: 1 }),
          animate(".5s ease-in", style({ height: 0, opacity: 0 }))
        ])
      ])
    ] }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataFilterComponent, { className: "MetadataFilterComponent", filePath: "src/app/metadata-filter/metadata-filter.component.ts", lineNumber: 65 });
})();

// src/app/cards/card-detail-layout/card-detail-layout.component.ts
var _c04 = ["cardItem"];
var _c12 = ["noData"];
var _c22 = [".jump-bar"];
var _forTrack02 = ($index, $item) => $item.key;
var _c32 = (a0) => ({ "empty": a0 });
var _c4 = (a0) => ({ count: a0 });
var _c5 = (a0, a1) => ({ $implicit: a0, idx: a1 });
var _c6 = () => ({ id: "jumpbar" });
var _c7 = (a0) => ({ "disabled": a0 });
function CardDetailLayoutComponent_ng_container_0_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "app-card-actionables", 17);
    \u0275\u0275listener("actionHandler", function CardDetailLayoutComponent_ng_container_0_Conditional_1_Conditional_3_Template_app_card_actionables_actionHandler_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.performAction($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\xA0 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("actions", ctx_r2.actions)("labelBy", ctx_r2.header);
  }
}
function CardDetailLayoutComponent_ng_container_0_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", t_r4("total-items", \u0275\u0275pureFunction1(2, _c4, ctx_r2.pagination.totalItems)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.pagination.totalItems);
  }
}
function CardDetailLayoutComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 15)(2, "h4");
    \u0275\u0275template(3, CardDetailLayoutComponent_ng_container_0_Conditional_1_Conditional_3_Template, 3, 2, "span");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275template(6, CardDetailLayoutComponent_ng_container_0_Conditional_1_Conditional_6_Template, 2, 4, "span", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.actions.length > 0 ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.header, "\xA0 ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.pagination !== void 0 ? 6 : -1);
  }
}
function CardDetailLayoutComponent_ng_container_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275elementContainer(1, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.noDataTemplate);
  }
}
function CardDetailLayoutComponent_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function CardDetailLayoutComponent_ng_container_0_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.tryToSaveJumpKey());
    });
    \u0275\u0275elementContainer(1, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275nextContext();
    const scroll_r8 = \u0275\u0275reference(8);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate1("id", "jumpbar-index--", i_r7, "");
    \u0275\u0275attribute("jumpbar-index", i_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c5, item_r6, scroll_r8.viewPortInfo.startIndexWithBuffer + i_r7));
  }
}
function CardDetailLayoutComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 13);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const jumpBar_r9 = \u0275\u0275reference(17);
    \u0275\u0275property("ngTemplateOutlet", jumpBar_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction0(2, _c6));
  }
}
function CardDetailLayoutComponent_ng_container_0_ng_template_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function CardDetailLayoutComponent_ng_container_0_ng_template_13_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.tryToSaveJumpKey());
    });
    \u0275\u0275elementContainer(1, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275propertyInterpolate1("id", "jumpbar-index--", i_r12, "");
    \u0275\u0275attribute("jumpbar-index", i_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c5, item_r11, i_r12));
  }
}
function CardDetailLayoutComponent_ng_container_0_ng_template_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p");
    \u0275\u0275elementContainer(2, 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.noDataTemplate);
  }
}
function CardDetailLayoutComponent_ng_container_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "virtual-scroller", 20, 0)(2, "div", 11, 1);
    \u0275\u0275template(4, CardDetailLayoutComponent_ng_container_0_ng_template_13_div_4_Template, 2, 8, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CardDetailLayoutComponent_ng_container_0_ng_template_13_Conditional_5_Template, 3, 1, "div", 21);
  }
  if (rf & 2) {
    const scroll_r13 = \u0275\u0275reference(1);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("items", ctx_r2.items)("bufferAmount", ctx_r2.bufferAmount);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", scroll_r13.viewPortItems)("ngForTrackBy", ctx_r2.trackByIdentity);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.items.length === 0 && !ctx_r2.isLoading ? 5 : -1);
  }
}
function CardDetailLayoutComponent_ng_container_0_ng_template_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function CardDetailLayoutComponent_ng_container_0_ng_template_16_For_2_Template_button_click_0_listener() {
      const jumpKey_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.scrollTo(jumpKey_r15));
    });
    \u0275\u0275elementStart(1, "div", 25)(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const jumpKey_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c7, ctx_r2.hasCustomSort()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(jumpKey_r15.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(jumpKey_r15.size);
  }
}
function CardDetailLayoutComponent_ng_container_0_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, CardDetailLayoutComponent_ng_container_0_ng_template_16_For_2_Template, 6, 5, "button", 23, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.jumpBarKeysToRender);
  }
}
function CardDetailLayoutComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CardDetailLayoutComponent_ng_container_0_Conditional_1_Template, 7, 3, "div", 5);
    \u0275\u0275elementStart(2, "app-metadata-filter", 6);
    \u0275\u0275listener("applyFilter", function CardDetailLayoutComponent_ng_container_0_Template_app_metadata_filter_applyFilter_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyMetadataFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "div", 9);
    \u0275\u0275template(6, CardDetailLayoutComponent_ng_container_0_Conditional_6_Template, 2, 1, "p");
    \u0275\u0275elementStart(7, "virtual-scroller", 10, 0)(9, "div", 11, 1);
    \u0275\u0275template(11, CardDetailLayoutComponent_ng_container_0_div_11_Template, 2, 8, "div", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(12, CardDetailLayoutComponent_ng_container_0_Conditional_12_Template, 1, 3, "ng-container", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CardDetailLayoutComponent_ng_container_0_ng_template_13_Template, 6, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(15, "app-loading", 14);
    \u0275\u0275template(16, CardDetailLayoutComponent_ng_container_0_ng_template_16_Template, 3, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const scroll_r8 = \u0275\u0275reference(8);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.header.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("filterSettings", ctx_r2.filterSettings)("filterOpen", ctx_r2.filterOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c32, ctx_r2.items.length === 0 && !ctx_r2.isLoading));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.items.length === 0 && !ctx_r2.isLoading ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c32, ctx_r2.items.length === 0 && !ctx_r2.isLoading))("items", ctx_r2.items)("bufferAmount", ctx_r2.bufferAmount)("parentScroll", ctx_r2.parentScroll);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", scroll_r8.viewPortItems)("ngForTrackBy", ctx_r2.trackByIdentity);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.jumpBarKeysToRender.length >= 4 && ctx_r2.items.length > 0 && scroll_r8.viewPortInfo.maxScrollPosition > 0 ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("loading", ctx_r2.isLoading);
  }
}
var ANIMATION_TIME_MS = 0;
var CardDetailLayoutComponent = class _CardDetailLayoutComponent {
  constructor(document) {
    this.document = document;
    this.filterUtilityService = inject(FilterUtilitiesService);
    this.utilityService = inject(UtilityService);
    this.cdRef = inject(ChangeDetectorRef);
    this.jumpbarService = inject(JumpbarService);
    this.router = inject(Router);
    this.destroyRef = inject(DestroyRef);
    this.Breakpoint = Breakpoint;
    this.header = "";
    this.isLoading = false;
    this.items = [];
    this.filteringDisabled = false;
    this.actions = [];
    this.jumpBarKeys = [];
    this.jumpBarKeysToRender = [];
    this.itemClicked = new EventEmitter();
    this.applyFilter = new EventEmitter();
    this.filter = this.filterUtilityService.createSeriesV2Filter();
    this.libraries = [];
    this.updateApplied = 0;
    this.bufferAmount = 1;
  }
  resizeJumpBar() {
    const currentSize = (this.document.querySelector(".viewport-container")?.getBoundingClientRect().height || 10) - 30;
    this.jumpBarKeysToRender = this.jumpbarService.generateJumpBar(this.jumpBarKeys, currentSize);
    this.cdRef.markForCheck();
  }
  ngOnInit() {
    if (this.trackByIdentity === void 0) {
      this.trackByIdentity = (_, item) => `${this.header}_${this.updateApplied}_${item?.libraryId}`;
    }
    if (this.filterSettings === void 0) {
      this.filterSettings = new FilterSettings();
      this.cdRef.markForCheck();
    }
    if (this.pagination === void 0) {
      this.pagination = { currentPage: 1, itemsPerPage: this.items.length, totalItems: this.items.length, totalPages: 1 };
      this.cdRef.markForCheck();
    }
    if (this.refresh) {
      this.refresh.subscribe(() => {
        this.cdRef.markForCheck();
        this.virtualScroller.refresh();
      });
    }
    this.router.events.pipe(filter((event) => event instanceof NavigationStart), takeUntilDestroyed(this.destroyRef), map((evt) => evt), tap((_) => this.tryToSaveJumpKey())).subscribe();
  }
  ngOnChanges(changes) {
    this.jumpBarKeysToRender = [...this.jumpBarKeys];
    this.resizeJumpBar();
    const startIndex = this.jumpbarService.getResumePosition(this.router.url);
    if (startIndex > 0) {
      setTimeout(() => this.virtualScroller.scrollToIndex(startIndex, true, 0, ANIMATION_TIME_MS), 10);
      return;
    }
    if (changes.hasOwnProperty("isLoading")) {
      const loadingChange = changes["isLoading"];
      if (loadingChange.previousValue === true && loadingChange.currentValue === false) {
        setTimeout(() => this.virtualScroller.scrollToIndex(0, true, 0, ANIMATION_TIME_MS), 10);
      }
    }
  }
  hasCustomSort() {
    if (this.filteringDisabled)
      return false;
    const hasCustomSort = this.filter?.sortOptions?.sortField != SortField.SortName || !this.filter?.sortOptions.isAscending;
    return hasCustomSort;
  }
  performAction(action) {
    if (typeof action.callback === "function") {
      action.callback(action, void 0);
    }
  }
  applyMetadataFilter(event) {
    this.applyFilter.emit(event);
    this.updateApplied++;
    this.filter = event.filterV2;
    this.cdRef.markForCheck();
  }
  scrollTo(jumpKey) {
    if (this.hasCustomSort())
      return;
    let targetIndex = 0;
    for (let i = 0; i < this.jumpBarKeys.length; i++) {
      if (this.jumpBarKeys[i].key === jumpKey.key)
        break;
      targetIndex += this.jumpBarKeys[i].size;
    }
    this.virtualScroller.scrollToIndex(targetIndex, true, 0, ANIMATION_TIME_MS);
    setTimeout(() => this.jumpbarService.saveResumePosition(this.router.url, this.virtualScroller.viewPortInfo.startIndex), ANIMATION_TIME_MS + 100);
  }
  tryToSaveJumpKey() {
    this.jumpbarService.saveResumePosition(this.router.url, this.virtualScroller.viewPortInfo.startIndex);
  }
  static {
    this.\u0275fac = function CardDetailLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardDetailLayoutComponent)(\u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _CardDetailLayoutComponent, selectors: [["app-card-detail-layout"]], contentQueries: function CardDetailLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c04, 5);
        \u0275\u0275contentQuery(dirIndex, _c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.noDataTemplate = _t.first);
      }
    }, viewQuery: function CardDetailLayoutComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c22, 5);
        \u0275\u0275viewQuery(VirtualScrollerComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.jumpBar = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.virtualScroller = _t.first);
      }
    }, hostBindings: function CardDetailLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function CardDetailLayoutComponent_resize_HostBindingHandler($event) {
          return ctx.resizeJumpBar($event);
        }, false, \u0275\u0275resolveWindow)("orientationchange", function CardDetailLayoutComponent_orientationchange_HostBindingHandler($event) {
          return ctx.resizeJumpBar($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { header: "header", isLoading: "isLoading", items: "items", pagination: "pagination", parentScroll: "parentScroll", filterOpen: "filterOpen", filteringDisabled: "filteringDisabled", actions: "actions", trackByIdentity: "trackByIdentity", filterSettings: "filterSettings", refresh: "refresh", jumpBarKeys: "jumpBarKeys" }, outputs: { itemClicked: "itemClicked", applyFilter: "applyFilter" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["scroll", ""], ["container", ""], ["cardTemplate", ""], ["jumpBar", ""], [4, "transloco", "translocoRead"], [1, "row", "mt-2", "g-0", "pb-2"], [3, "applyFilter", "filterSettings", "filterOpen"], [1, "viewport-container", "ms-1", 3, "ngClass"], [1, "content-container"], [1, "card-container", "mt-"], [3, "ngClass", "items", "bufferAmount", "parentScroll"], [1, "grid", "row", "g-0"], ["class", "card col-auto mt-2 mb-2", 3, "id", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "loading"], [1, "col", "me-auto"], [1, "badge", "bg-primary", "rounded-pill"], [3, "actionHandler", "actions", "labelBy"], [3, "ngTemplateOutlet"], [1, "card", "col-auto", "mt-2", "mb-2", 3, "click", "id"], [3, "items", "bufferAmount"], [1, "mx-auto", 2, "width", "200px"], [1, "jump-bar"], [1, "btn", "btn-link", "flip-button", 3, "ngClass"], [1, "btn", "btn-link", "flip-button", 3, "click", "ngClass"], [1, "flip-button-inner"], [1, "flip-button-front"], [1, "flip-button-back"]], template: function CardDetailLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CardDetailLayoutComponent_ng_container_0_Template, 18, 17, "ng-container", 4);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "card-detail-layout");
      }
    }, dependencies: [
      LoadingComponent,
      VirtualScrollerModule,
      VirtualScrollerComponent,
      CardActionablesComponent,
      MetadataFilterComponent,
      TranslocoDirective,
      NgTemplateOutlet,
      NgClass,
      NgForOf
    ], styles: ["\n\n.viewport-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: calc(var(--vh) * 100 - 157px);\n  margin-bottom: 10px;\n}\n.viewport-container.empty[_ngcontent-%COMP%] {\n  height: auto;\n}\n.content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 160px);\n  grid-gap: 0.5rem;\n  justify-content: space-between;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  align-items: start;\n}\n@media (max-width: 576px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-gap: 0.3rem;\n  }\n}\n.jump-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  flex-shrink: 0;\n  font-size: 13px;\n  overflow: hidden;\n  padding: 0 5px;\n  align-items: center;\n  justify-content: space-around;\n}\n@media (max-width: 576px) {\n  .jump-bar[_ngcontent-%COMP%] {\n    padding: 0 5px 0 5px;\n  }\n}\n.jump-bar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: hsla(0, 0%, 100%, 0.7);\n  height: 25px;\n  text-align: center;\n  padding: 0px 5px;\n  -webkit-tap-highlight-color: transparent;\n  background: none;\n  border: 0;\n  border-radius: 0;\n  cursor: pointer;\n  line-height: inherit;\n  margin: 0;\n  outline: none;\n  text-align: inherit;\n  text-decoration: none;\n  touch-action: manipulation;\n  transition: color 0.2s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.jump-bar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.jump-bar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.jump-bar[_ngcontent-%COMP%]   .btn.disabled[_ngcontent-%COMP%] {\n  color: lightgrey;\n  cursor: not-allowed;\n}\n.virtual-scroller[_ngcontent-%COMP%], \nvirtual-scroller[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(var(--vh) * 100 - 155px);\n  mask-image:\n    linear-gradient(\n      to bottom,\n      transparent,\n      black 0%,\n      black 97%,\n      transparent 100%);\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      transparent,\n      black 0%,\n      black 97%,\n      transparent 100%);\n  overflow: auto;\n  scrollbar-color: rgba(255, 255, 255, 0.3) rgba(0, 0, 0, 0.1);\n  scrollbar-width: thin;\n}\nvirtual-scroller.empty[_ngcontent-%COMP%] {\n  display: none;\n}\n.vertical.selfScroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: inherit;\n}\n.vertical.selfScroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: transparent;\n}\n.vertical.selfScroll[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 255, 255, 0.3);\n}\nh2[_ngcontent-%COMP%] {\n  display: inline-block;\n  word-break: break-all;\n}\n.flip-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  width: 25px;\n  height: 25px;\n  position: relative;\n  overflow: hidden;\n}\n.flip-button-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  top: 0;\n  left: 0;\n}\n.flip-button[_ngcontent-%COMP%]:hover   .flip-button-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.flip-button-front[_ngcontent-%COMP%], \n.flip-button-back[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  border-radius: 4px;\n  transform-style: preserve-3d;\n}\n.flip-button-back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=card-detail-layout.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardDetailLayoutComponent, { className: "CardDetailLayoutComponent", filePath: "src/app/cards/card-detail-layout/card-detail-layout.component.ts", lineNumber: 55 });
})();

export {
  JumpbarService,
  FilterSettings,
  CardDetailLayoutComponent
};
//# sourceMappingURL=chunk-5ZZKBPDI.js.map
