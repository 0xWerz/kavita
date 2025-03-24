import {
  TypeaheadComponent,
  TypeaheadSettings
} from "./chunk-Y273F7VW.js";
import {
  LooseLeafOrDefaultNumber,
  SpecialVolumeNumber
} from "./chunk-5C4ZM5AT.js";
import {
  PublicationStatusPipe
} from "./chunk-XZ2P7HP2.js";
import {
  TimeAgoPipe
} from "./chunk-WOFHNJUD.js";
import {
  SearchService
} from "./chunk-5VCWX7WV.js";
import {
  ActionService,
  CoverImageChooserComponent,
  EditListComponent,
  UploadService
} from "./chunk-HTPJQXUV.js";
import {
  SeriesService
} from "./chunk-HG4LWHDT.js";
import {
  SettingButtonComponent
} from "./chunk-4AQVNEIP.js";
import {
  DefaultDatePipe
} from "./chunk-DMXJBIB5.js";
import {
  WikiLink
} from "./chunk-GX7EGMKV.js";
import {
  SentenceCasePipe
} from "./chunk-IQIEDCQT.js";
import {
  MangaFormatPipe
} from "./chunk-RMZ6EY72.js";
import {
  DownloadService
} from "./chunk-CVI764VQ.js";
import {
  BytesPipe
} from "./chunk-C423WP7Y.js";
import {
  LibraryService
} from "./chunk-PBM62GK4.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import {
  UtcToLocalTimePipe
} from "./chunk-2L2JQBKQ.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  MetadataService,
  PersonRole
} from "./chunk-IBO6ECG5.js";
import {
  SettingItemComponent
} from "./chunk-KJWRNOWO.js";
import {
  Breakpoint,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  AccountService,
  Action,
  ActionFactoryService,
  LicenseService
} from "./chunk-U2DWQJI2.js";
import {
  NgbActiveModal,
  NgbCollapse,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLink,
  NgbNavOutlet
} from "./chunk-2R2RCU4Y.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BPOUBDX2.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  CommonModule,
  DecimalPipe,
  DestroyRef,
  EventEmitter,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  ReplaySubject,
  TitleCasePipe,
  TranslocoDirective,
  TranslocoModule,
  TranslocoService,
  __async,
  firstValueFrom,
  forkJoin,
  inject,
  map,
  of,
  switchMap,
  takeUntilDestroyed,
  tap,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PYHIUVNJ.js";

// src/app/_models/series-detail/relation-kind.ts
var RelationKind;
(function(RelationKind2) {
  RelationKind2[RelationKind2["Prequel"] = 1] = "Prequel";
  RelationKind2[RelationKind2["Sequel"] = 2] = "Sequel";
  RelationKind2[RelationKind2["SpinOff"] = 3] = "SpinOff";
  RelationKind2[RelationKind2["Adaptation"] = 4] = "Adaptation";
  RelationKind2[RelationKind2["SideStory"] = 5] = "SideStory";
  RelationKind2[RelationKind2["Character"] = 6] = "Character";
  RelationKind2[RelationKind2["Contains"] = 7] = "Contains";
  RelationKind2[RelationKind2["Other"] = 8] = "Other";
  RelationKind2[RelationKind2["AlternativeSetting"] = 9] = "AlternativeSetting";
  RelationKind2[RelationKind2["AlternativeVersion"] = 10] = "AlternativeVersion";
  RelationKind2[RelationKind2["Doujinshi"] = 11] = "Doujinshi";
  RelationKind2[RelationKind2["Parent"] = 12] = "Parent";
  RelationKind2[RelationKind2["Edition"] = 13] = "Edition";
  RelationKind2[RelationKind2["Annual"] = 14] = "Annual";
})(RelationKind || (RelationKind = {}));
var RelationKindsUnsorted = [
  { text: "Prequel", value: RelationKind.Prequel },
  { text: "Sequel", value: RelationKind.Sequel },
  { text: "Spin Off", value: RelationKind.SpinOff },
  { text: "Adaptation", value: RelationKind.Adaptation },
  { text: "Annual", value: RelationKind.Annual },
  { text: "Alternative Setting", value: RelationKind.AlternativeSetting },
  { text: "Alternative Version", value: RelationKind.AlternativeVersion },
  { text: "Side Story", value: RelationKind.SideStory },
  { text: "Character", value: RelationKind.Character },
  { text: "Contains", value: RelationKind.Contains },
  { text: "Edition", value: RelationKind.Edition },
  { text: "Doujinshi", value: RelationKind.Doujinshi },
  { text: "Other", value: RelationKind.Other }
];
var RelationKinds = RelationKindsUnsorted.slice().sort((a, b) => a.text.localeCompare(b.text));

// src/app/_pipes/relationship.pipe.ts
var RelationshipPipe = class _RelationshipPipe {
  constructor() {
    this.translocoService = inject(TranslocoService);
  }
  transform(relationship) {
    if (relationship === void 0)
      return "";
    switch (relationship) {
      case RelationKind.Adaptation:
        return this.translocoService.translate("relationship-pipe.adaptation");
      case RelationKind.AlternativeSetting:
        return this.translocoService.translate("relationship-pipe.alternative-setting");
      case RelationKind.AlternativeVersion:
        return this.translocoService.translate("relationship-pipe.alternative-version");
      case RelationKind.Character:
        return this.translocoService.translate("relationship-pipe.character");
      case RelationKind.Contains:
        return this.translocoService.translate("relationship-pipe.contains");
      case RelationKind.Doujinshi:
        return this.translocoService.translate("relationship-pipe.doujinshi");
      case RelationKind.Other:
        return this.translocoService.translate("relationship-pipe.other");
      case RelationKind.Prequel:
        return this.translocoService.translate("relationship-pipe.prequel");
      case RelationKind.Sequel:
        return this.translocoService.translate("relationship-pipe.sequel");
      case RelationKind.SideStory:
        return this.translocoService.translate("relationship-pipe.side-story");
      case RelationKind.SpinOff:
        return this.translocoService.translate("relationship-pipe.spin-off");
      case RelationKind.Parent:
        return this.translocoService.translate("relationship-pipe.parent");
      case RelationKind.Edition:
        return this.translocoService.translate("relationship-pipe.edition");
      case RelationKind.Annual:
        return this.translocoService.translate("relationship-pipe.annual");
      default:
        return "";
    }
  }
  static {
    this.\u0275fac = function RelationshipPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RelationshipPipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "relationship", type: _RelationshipPipe, pure: true, standalone: true });
  }
};

// src/app/cards/edit-series-relation/edit-series-relation.component.ts
function EditSeriesRelationComponent_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("target-series"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("relationship"));
  }
}
function EditSeriesRelationComponent_ng_container_0_div_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", item_r6.name, " (", ctx_r4.libraryNames[item_r6.libraryId], ") ");
  }
}
function EditSeriesRelationComponent_ng_container_0_div_8_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", item_r7.name, " ");
  }
}
function EditSeriesRelationComponent_ng_container_0_div_8_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", item_r7.localizedName, " ");
  }
}
function EditSeriesRelationComponent_ng_container_0_div_8_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditSeriesRelationComponent_ng_container_0_div_8_ng_template_5_Conditional_0_Template, 1, 1)(1, EditSeriesRelationComponent_ng_container_0_div_8_ng_template_5_Conditional_1_Template, 1, 1);
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const value_r8 = ctx.value;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(item_r7.name.toLowerCase().trim().indexOf(value_r8.toLowerCase().trim()) >= 0 ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", ctx_r4.libraryNames[item_r7.libraryId], ") ");
  }
}
function EditSeriesRelationComponent_ng_container_0_div_8_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "relationship");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("value", opt_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r9.value));
  }
}
function EditSeriesRelationComponent_ng_container_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 12)(2, "app-typeahead", 13);
    \u0275\u0275listener("selectedData", function EditSeriesRelationComponent_ng_container_0_div_8_Template_app_typeahead_selectedData_2_listener($event) {
      const relation_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.updateSeries($event, relation_r4));
    });
    \u0275\u0275template(3, EditSeriesRelationComponent_ng_container_0_div_8_ng_template_3_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, EditSeriesRelationComponent_ng_container_0_div_8_ng_template_5_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "select", 15)(9, "option", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, EditSeriesRelationComponent_ng_container_0_div_8_option_11_Template, 3, 4, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 18);
    \u0275\u0275listener("click", function EditSeriesRelationComponent_ng_container_0_div_8_Template_button_click_12_listener() {
      const idx_r10 = \u0275\u0275restoreView(_r3).index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.removeRelation(idx_r10));
    });
    \u0275\u0275element(13, "i", 19);
    \u0275\u0275elementStart(14, "span", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const relation_r4 = ctx.$implicit;
    const idx_r10 = ctx.index;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "relation--", idx_r10, "");
    \u0275\u0275property("settings", relation_r4.typeaheadSettings)("focus", ctx_r4.focusTypeahead);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControl", relation_r4.formControl);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r4.RelationKind.Parent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("parent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.relationOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("remove"));
  }
}
function EditSeriesRelationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "a", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, EditSeriesRelationComponent_ng_container_0_div_6_Template, 5, 2, "div", 5);
    \u0275\u0275elementStart(7, "form");
    \u0275\u0275template(8, EditSeriesRelationComponent_ng_container_0_div_8_Template, 16, 9, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
    \u0275\u0275listener("click", function EditSeriesRelationComponent_ng_container_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.addNewRelation());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("description-part-1"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r4.WikiLink.SeriesRelationships, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("description-part-2"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.relations.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.relations);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("add-relationship"));
  }
}
var EditSeriesRelationComponent = class _EditSeriesRelationComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.cdRef = inject(ChangeDetectorRef);
    this.seriesService = inject(SeriesService);
    this.utilityService = inject(UtilityService);
    this.libraryService = inject(LibraryService);
    this.searchService = inject(SearchService);
    this.imageService = inject(ImageService);
    this.RelationKind = RelationKind;
    this.WikiLink = WikiLink;
    this.save = new EventEmitter();
    this.saveApi = new ReplaySubject(1);
    this.relationOptions = RelationKinds;
    this.relations = [];
    this.libraryNames = {};
    this.focusTypeahead = new EventEmitter();
  }
  ngOnInit() {
    this.seriesService.getRelatedForSeries(this.series.id).subscribe((relations) => {
      this.setupRelationRows(relations.prequels, RelationKind.Prequel);
      this.setupRelationRows(relations.sequels, RelationKind.Sequel);
      this.setupRelationRows(relations.sideStories, RelationKind.SideStory);
      this.setupRelationRows(relations.spinOffs, RelationKind.SpinOff);
      this.setupRelationRows(relations.adaptations, RelationKind.Adaptation);
      this.setupRelationRows(relations.others, RelationKind.Other);
      this.setupRelationRows(relations.characters, RelationKind.Character);
      this.setupRelationRows(relations.alternativeSettings, RelationKind.AlternativeSetting);
      this.setupRelationRows(relations.alternativeVersions, RelationKind.AlternativeVersion);
      this.setupRelationRows(relations.doujinshis, RelationKind.Doujinshi);
      this.setupRelationRows(relations.contains, RelationKind.Contains);
      this.setupRelationRows(relations.parent, RelationKind.Parent);
      this.setupRelationRows(relations.editions, RelationKind.Edition);
      this.setupRelationRows(relations.annuals, RelationKind.Annual);
      this.cdRef.detectChanges();
    });
    this.libraryService.getLibraryNames().subscribe((names) => {
      this.libraryNames = names;
      this.cdRef.markForCheck();
    });
    this.save.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.saveState());
  }
  setupRelationRows(relations, kind) {
    relations.map((item, indx) => __async(this, null, function* () {
      const settings = yield firstValueFrom(this.createSeriesTypeahead(item, kind, indx));
      const form = new FormControl(kind, []);
      if (kind === RelationKind.Parent) {
        form.disable();
      }
      return { series: item, typeaheadSettings: settings, formControl: form };
    })).forEach((p) => __async(this, null, function* () {
      this.relations.push(yield p);
      this.cdRef.markForCheck();
    }));
  }
  addNewRelation() {
    return __async(this, null, function* () {
      this.relations.push({ series: void 0, formControl: new FormControl(RelationKind.Adaptation, []), typeaheadSettings: yield firstValueFrom(this.createSeriesTypeahead(void 0, RelationKind.Adaptation, this.relations.length)) });
      this.cdRef.markForCheck();
      setTimeout(() => {
        this.focusTypeahead.emit(`relation--${this.relations.length - 1}`);
      }, 10);
    });
  }
  removeRelation(index) {
    this.relations.splice(index, 1);
    this.cdRef.markForCheck();
  }
  updateSeries(event, relation) {
    if (event[0] === void 0) {
      relation.series = void 0;
      this.cdRef.markForCheck();
      return;
    }
    relation.series = { id: event[0].seriesId, name: event[0].name };
    this.cdRef.markForCheck();
  }
  createSeriesTypeahead(series, relationship, index) {
    const seriesSettings = new TypeaheadSettings();
    seriesSettings.minCharacters = 0;
    seriesSettings.multiple = false;
    seriesSettings.id = "relation--" + index;
    seriesSettings.unique = true;
    seriesSettings.addIfNonExisting = false;
    seriesSettings.fetchFn = (searchFilter) => this.searchService.search(searchFilter).pipe(map((group) => group.series), map((items) => seriesSettings.compareFn(items, searchFilter)), map((series2) => series2.filter((s) => s.seriesId !== this.series.id)));
    seriesSettings.compareFn = (options, filter) => {
      return options.filter((m) => {
        return this.utilityService.filter(m.name, filter) || this.utilityService.filter(m.localizedName, filter);
      });
    };
    seriesSettings.selectionCompareFn = (a, b) => {
      return a.seriesId == b.seriesId;
    };
    if (series !== void 0) {
      return this.searchService.search(series.name).pipe(map((group) => group.series), map((results) => {
        seriesSettings.savedData = results.filter((s) => s.seriesId === series.id);
        return seriesSettings;
      }));
    }
    return of(seriesSettings);
  }
  saveState() {
    const adaptations = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.Adaptation && item.series !== void 0).map((item) => item.series.id);
    const characters = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.Character && item.series !== void 0).map((item) => item.series.id);
    const contains = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.Contains && item.series !== void 0).map((item) => item.series.id);
    const others = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.Other && item.series !== void 0).map((item) => item.series.id);
    const prequels = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.Prequel && item.series !== void 0).map((item) => item.series.id);
    const sequels = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.Sequel && item.series !== void 0).map((item) => item.series.id);
    const sideStories = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.SideStory && item.series !== void 0).map((item) => item.series.id);
    const spinOffs = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.SpinOff && item.series !== void 0).map((item) => item.series.id);
    const alternativeSettings = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.AlternativeSetting && item.series !== void 0).map((item) => item.series.id);
    const alternativeVersions = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.AlternativeVersion && item.series !== void 0).map((item) => item.series.id);
    const doujinshis = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.Doujinshi && item.series !== void 0).map((item) => item.series.id);
    const editions = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.Edition && item.series !== void 0).map((item) => item.series.id);
    const annuals = this.relations.filter((item) => parseInt(item.formControl.value, 10) === RelationKind.Annual && item.series !== void 0).map((item) => item.series.id);
    this.seriesService.updateRelationships(this.series.id, adaptations, characters, contains, others, prequels, sequels, sideStories, spinOffs, alternativeSettings, alternativeVersions, doujinshis, editions, annuals).subscribe(() => {
    });
  }
  static {
    this.\u0275fac = function EditSeriesRelationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditSeriesRelationComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _EditSeriesRelationComponent, selectors: [["app-edit-series-relation"]], inputs: { series: "series", save: "save" }, outputs: { saveApi: "saveApi" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["badgeItem", ""], ["optionItem", ""], [4, "transloco", "translocoRead"], [1, "container-fluid"], ["target", "_blank", "rel", "noopener noreferrer", "referrerpolicy", "no-referrer", 3, "href"], ["class", "row g-0", 4, "ngIf"], ["class", "row g-0", 4, "ngFor", "ngForOf"], [1, "row", "g-0", "mt-3", "mb-3"], [1, "btn", "btn-outline-secondary", "col-md-12", 3, "click"], [1, "row", "g-0"], [1, "form-label", "col-md-7"], [1, "form-label", "col-md-5"], [1, "col-sm-12", "col-md-12", "col-lg-7", "mb-3"], [3, "selectedData", "settings", "id", "focus"], [1, "col-sm-12", "col-md-10", "col-lg-3", "mb-3"], [1, "form-select", 3, "formControl"], ["disabled", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-auto", "col-md-2", "mb-3", "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-trash"], [1, "visually-hidden"], [3, "value"]], template: function EditSeriesRelationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EditSeriesRelationComponent_ng_container_0_Template, 12, 6, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "edit-series-relation");
      }
    }, dependencies: [
      TypeaheadComponent,
      CommonModule,
      NgForOf,
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormControlDirective,
      TranslocoModule,
      TranslocoDirective,
      RelationshipPipe
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditSeriesRelationComponent, { className: "EditSeriesRelationComponent", filePath: "src/app/cards/edit-series-relation/edit-series-relation.component.ts", lineNumber: 49 });
})();

// src/app/cards/_modals/edit-series-modal/edit-series-modal.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.action;
var _c0 = (a0) => ({ seriesName: a0 });
var _c1 = (a0) => ({ item: a0, field: "sortNameLocked" });
var _c2 = (a0) => ({ item: a0, field: "localizedNameLocked" });
var _c3 = (a0) => ({ item: a0, field: "summaryLocked" });
var _c4 = (a0) => ({ item: a0, field: "releaseYearLocked" });
var _c5 = (a0) => ({ item: a0, field: "ageRatingLocked" });
var _c6 = (a0) => ({ item: a0, field: "publicationStatusLocked" });
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_3_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_3_Conditional_1_Conditional_1_Conditional_0_Template, 2, 1, "div", 25);
  }
  if (rf & 2) {
    const formControl_r4 = \u0275\u0275nextContext();
    \u0275\u0275conditional(formControl_r4.errors.required ? 0 : -1);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 24);
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_3_Conditional_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const formControl_r4 = ctx;
    \u0275\u0275classProp("is-invalid", formControl_r4.invalid && !formControl_r4.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional(formControl_r4.errors ? 1 : -1);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_3_Conditional_1_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.editSeriesForm.get("name")) ? 1 : -1, tmp_9_0);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_7_ng_template_1_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("required-field"));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_7_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_7_ng_template_1_Conditional_3_Conditional_0_Template, 2, 1, "div", 25);
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(formControl_r5.errors.required ? 0 : -1);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275elementContainer(1, 26);
    \u0275\u0275element(2, "input", 27);
    \u0275\u0275template(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_7_ng_template_1_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formControl_r5 = \u0275\u0275nextContext();
    \u0275\u0275nextContext(2);
    const lock_r6 = \u0275\u0275reference(42);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("input-group ", ctx_r1.series.sortNameLocked ? "lock-active" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c1, ctx_r1.series));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", formControl_r5.invalid && !formControl_r5.untouched);
    \u0275\u0275advance();
    \u0275\u0275conditional(formControl_r5.errors ? 3 : -1);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-setting-item", 22);
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_7_ng_template_1_Template, 4, 10, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("title", t_r3("sort-name-label"))("toggleOnViewClick", false)("showEdit", false);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275elementContainer(1, 26);
    \u0275\u0275element(2, "input", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const lock_r6 = \u0275\u0275reference(42);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("input-group ", ctx_r1.series.localizedNameLocked ? "lock-active" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c2, ctx_r1.series));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_11_Conditional_0_Template, 3, 7, "div", 28);
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.editSeriesForm.get("localizedName")) ? 0 : -1, tmp_9_0);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275elementContainer(1, 26);
    \u0275\u0275element(2, "textarea", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const lock_r6 = \u0275\u0275reference(42);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("input-group ", ctx_r1.metadata.summaryLocked ? "lock-active" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c3, ctx_r1.metadata));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "app-setting-item", 22);
    \u0275\u0275template(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_13_ng_template_3_Template, 3, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r3("summary-label"))("toggleOnViewClick", false)("showEdit", false);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "app-setting-item", 22);
    \u0275\u0275template(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_3_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 20)(6, "div", 21);
    \u0275\u0275template(7, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_7_Template, 3, 3, "app-setting-item", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "div", 21)(10, "app-setting-item", 22);
    \u0275\u0275template(11, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_ng_template_11_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Conditional_13_Template, 5, 3, "div", 20);
  }
  if (rf & 2) {
    let tmp_11_0;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r3("name-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_11_0 = ctx_r1.editSeriesForm.get("sortName")) ? 7 : -1, tmp_11_0);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("localized-name-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.metadata ? 13 : -1);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r8.title, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", item_r9.title, " (", item_r9.isoCode, ") ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_4_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.updateLanguage($event);
      return \u0275\u0275resetView(ctx_r1.metadata.languageLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_4_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.languageLocked, $event) || (ctx_r1.metadata.languageLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_4_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.metadata.languageLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_4_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.metadata.languageLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_4_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_4_ng_template_3_Template, 1, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("settings", ctx_r1.languageSettings);
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.languageLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_9_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("release-year-validation"));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_9_Conditional_3_Conditional_0_Template, 2, 1, "p", 25);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.pattern ? 0 : -1);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275elementContainer(1, 26);
    \u0275\u0275element(2, "input", 38);
    \u0275\u0275template(3, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_9_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    \u0275\u0275nextContext(3);
    const lock_r6 = \u0275\u0275reference(42);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("input-group ", ctx_r1.metadata.releaseYearLocked ? "lock-active" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c4, ctx_r1.metadata));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_17_0 = ctx_r1.editSeriesForm.get("releaseYear")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r1.editSeriesForm.get("releaseYear")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_18_0 = (tmp_18_0 = ctx_r1.editSeriesForm.get("releaseYear")) == null ? null : tmp_18_0.errors) ? 3 : -1, tmp_18_0);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r11.title, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_15_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r12.title, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_15_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.updateGenres($event);
      return \u0275\u0275resetView(ctx_r1.metadata.genresLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_15_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.genresLocked, $event) || (ctx_r1.metadata.genresLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_15_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.metadata.genresLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_15_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.metadata.genresLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_15_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_15_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("settings", ctx_r1.genreSettings);
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.genresLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_21_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r14.title, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_21_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r15.title, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_21_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.updateTags($event);
      return \u0275\u0275resetView(ctx_r1.metadata.tagsLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_21_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.tagsLocked, $event) || (ctx_r1.metadata.tagsLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_21_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.metadata.tagsLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_21_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.metadata.tagsLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_21_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_21_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("settings", ctx_r1.tagsSettings);
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.tagsLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_27_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r16 = ctx.$implicit;
    \u0275\u0275property("value", opt_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r16.title));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275elementContainer(1, 26);
    \u0275\u0275elementStart(2, "select", 39);
    \u0275\u0275repeaterCreate(3, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_27_For_4_Template, 3, 4, "option", 40, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const lock_r6 = \u0275\u0275reference(42);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("input-group ", ctx_r1.metadata.ageRatingLocked ? "lock-active" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c5, ctx_r1.metadata));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.ageRatings);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_32_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "publicationStatus");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r17 = ctx.$implicit;
    \u0275\u0275property("value", opt_r17.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, opt_r17.value));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275elementContainer(1, 26);
    \u0275\u0275elementStart(2, "select", 41);
    \u0275\u0275repeaterCreate(3, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_32_For_4_Template, 3, 4, "option", 40, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const lock_r6 = \u0275\u0275reference(42);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("input-group ", ctx_r1.metadata.publicationStatusLocked ? "lock-active" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", lock_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c6, ctx_r1.metadata));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.publicationStatuses);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 31)(2, "div", 32)(3, "app-setting-item", 22);
    \u0275\u0275template(4, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_4_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 33)(7, "div", 21)(8, "app-setting-item", 22);
    \u0275\u0275template(9, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_9_Template, 4, 10, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 20)(12, "div", 34)(13, "div", 32)(14, "app-setting-item", 22);
    \u0275\u0275template(15, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_15_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 20)(18, "div", 34)(19, "div", 32)(20, "app-setting-item", 22);
    \u0275\u0275template(21, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_21_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 20)(24, "div", 35)(25, "div", 32)(26, "app-setting-item", 22);
    \u0275\u0275template(27, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_27_Template, 5, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 36)(30, "div", 32)(31, "app-setting-item", 22);
    \u0275\u0275template(32, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_ng_template_32_Template, 5, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("language-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("release-year-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("genres-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("tags-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("age-rating-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("publication-status-label"))("toggleOnViewClick", false)("showEdit", false);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "a", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_ng_template_3_Template, 34, 18, "ng-template", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbNavItem", ctx_r1.tabs[ctx_r1.TabID.Metadata]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.tabs[ctx_r1.TabID.Metadata]));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r19.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r20.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_3_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Writer);
      return \u0275\u0275resetView(ctx_r1.metadata.writerLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_3_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.writerLocked, $event) || (ctx_r1.metadata.writerLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_3_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.writerLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_3_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.writerLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_3_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_3_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Writer));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.writerLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r22.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r23.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_8_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.CoverArtist);
      return \u0275\u0275resetView(ctx_r1.metadata.coverArtistLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_8_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.coverArtistLocked, $event) || (ctx_r1.metadata.coverArtistLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_8_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.coverArtistLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_8_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.coverArtistLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_8_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_8_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.CoverArtist));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.coverArtistLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r25.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r26.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_13_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Publisher);
      return \u0275\u0275resetView(ctx_r1.metadata.publisherLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_13_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.publisherLocked, $event) || (ctx_r1.metadata.publisherLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_13_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.publisherLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_13_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.publisherLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_13_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_13_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Publisher));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.publisherLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r28.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r29.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_18_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Imprint);
      return \u0275\u0275resetView(ctx_r1.metadata.publisherLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_18_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.imprintLocked, $event) || (ctx_r1.metadata.imprintLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_18_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.imprintLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_18_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.imprintLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_18_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_18_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Imprint));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.imprintLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_23_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r31.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_23_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r32.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_23_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Penciller);
      return \u0275\u0275resetView(ctx_r1.metadata.pencillerLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_23_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.pencillerLocked, $event) || (ctx_r1.metadata.pencillerLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_23_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.pencillerLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_23_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.pencillerLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_23_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_23_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Penciller));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.pencillerLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_28_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r34.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_28_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r35.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_28_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Letterer);
      return \u0275\u0275resetView(ctx_r1.metadata.lettererLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_28_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.lettererLocked, $event) || (ctx_r1.metadata.lettererLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_28_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.lettererLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_28_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.lettererLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_28_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_28_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Letterer));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.lettererLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_33_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r37 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r37.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_33_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r38 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r38.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_33_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Inker);
      return \u0275\u0275resetView(ctx_r1.metadata.inkerLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_33_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.inkerLocked, $event) || (ctx_r1.metadata.inkerLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_33_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.inkerLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_33_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.inkerLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_33_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_33_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Inker));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.inkerLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_38_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r40 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r40.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_38_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r41 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r41.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_38_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Editor);
      return \u0275\u0275resetView(ctx_r1.metadata.editorLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_38_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.editorLocked, $event) || (ctx_r1.metadata.editorLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_38_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.editorLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_38_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.editorLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_38_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_38_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Editor));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.editorLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_43_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r43 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r43.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_43_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r44 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r44.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_43_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Colorist);
      return \u0275\u0275resetView(ctx_r1.metadata.coloristLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_43_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.coloristLocked, $event) || (ctx_r1.metadata.coloristLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_43_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.coloristLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_43_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.coloristLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_43_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_43_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Colorist));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.coloristLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_48_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r46.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_48_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r47 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r47.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_48_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Translator);
      return \u0275\u0275resetView(ctx_r1.metadata.translatorLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_48_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.translatorLocked, $event) || (ctx_r1.metadata.translatorLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_48_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.translatorLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_48_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.translatorLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_48_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_48_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Translator));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.translatorLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_53_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r49 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r49.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_53_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r50 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r50.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_53_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Character);
      return \u0275\u0275resetView(ctx_r1.metadata.characterLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_53_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.characterLocked, $event) || (ctx_r1.metadata.characterLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_53_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.characterLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_53_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.characterLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_53_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_53_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Character));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.characterLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_58_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r52 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r52.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_58_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r53 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r53.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_58_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.updatePerson($event, ctx_r1.PersonRole.Team);
      return \u0275\u0275resetView(ctx_r1.metadata.teamLocked = true);
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_58_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.teamLocked, $event) || (ctx_r1.metadata.teamLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_58_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.teamLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_58_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.teamLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_58_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_58_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Team));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.teamLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_63_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r55.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_63_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r56 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", item_r56.name, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-typeahead", 37);
    \u0275\u0275listener("selectedData", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_63_Template_app_typeahead_selectedData_0_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updatePerson($event, ctx_r1.PersonRole.Location));
    });
    \u0275\u0275twoWayListener("lockedChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_63_Template_app_typeahead_lockedChange_0_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.metadata.locationLocked, $event) || (ctx_r1.metadata.locationLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onUnlock", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_63_Template_app_typeahead_onUnlock_0_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.locationLocked = false);
    })("newItemAdded", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_63_Template_app_typeahead_newItemAdded_0_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.metadata.locationLocked = true);
    });
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_63_ng_template_1_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_63_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("settings", ctx_r1.getPersonsSettings(ctx_r1.PersonRole.Location));
    \u0275\u0275twoWayProperty("locked", ctx_r1.metadata.locationLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 32)(2, "app-setting-item", 22);
    \u0275\u0275template(3, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_3_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 20)(6, "div", 32)(7, "app-setting-item", 22);
    \u0275\u0275template(8, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_8_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 20)(11, "div", 32)(12, "app-setting-item", 22);
    \u0275\u0275template(13, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_13_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 20)(16, "div", 32)(17, "app-setting-item", 22);
    \u0275\u0275template(18, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_18_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 20)(21, "div", 32)(22, "app-setting-item", 22);
    \u0275\u0275template(23, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_23_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 20)(26, "div", 32)(27, "app-setting-item", 22);
    \u0275\u0275template(28, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_28_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 20)(31, "div", 32)(32, "app-setting-item", 22);
    \u0275\u0275template(33, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_33_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 20)(36, "div", 32)(37, "app-setting-item", 22);
    \u0275\u0275template(38, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_38_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 20)(41, "div", 32)(42, "app-setting-item", 22);
    \u0275\u0275template(43, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_43_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 20)(46, "div", 32)(47, "app-setting-item", 22);
    \u0275\u0275template(48, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_48_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 20)(51, "div", 32)(52, "app-setting-item", 22);
    \u0275\u0275template(53, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_53_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 20)(56, "div", 32)(57, "app-setting-item", 22);
    \u0275\u0275template(58, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_58_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 20)(61, "div", 32)(62, "app-setting-item", 22);
    \u0275\u0275template(63, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_ng_template_63_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r3("writer-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("cover-artist-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("publisher-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("imprint-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("penciller-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("letterer-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("inker-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("editor-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("colorist-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("translator-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("character-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("team-label"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("location-label"))("toggleOnViewClick", false)("showEdit", false);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-edit-list", 42);
    \u0275\u0275listener("updateItems", function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_18_ng_template_3_Template_app_edit_list_updateItems_2_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateWeblinks($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("web-link-description"));
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.WebLinks)("label", t_r3("web-link-label"));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13)(1, "a", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_18_ng_template_3_Template, 3, 3, "ng-template", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbNavItem", ctx_r1.tabs[ctx_r1.TabID.WebLinks]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.tabs[ctx_r1.TabID.WebLinks]));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-cover-image-chooser", 44);
    \u0275\u0275twoWayListener("imageUrlsChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_22_Template_app_cover_image_chooser_imageUrlsChange_2_listener($event) {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.imageUrls, $event) || (ctx_r1.imageUrls = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("imageSelected", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_22_Template_app_cover_image_chooser_imageSelected_2_listener($event) {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSelectedIndex($event));
    })("selectedBase64Url", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_22_Template_app_cover_image_chooser_selectedBase64Url_2_listener($event) {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateSelectedImage($event));
    })("resetClicked", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_22_Template_app_cover_image_chooser_resetClicked_2_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleReset());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("cover-image-description"), " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("imageUrls", ctx_r1.imageUrls);
    \u0275\u0275property("showReset", ctx_r1.series.coverImageLocked);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-edit-series-relation", 45);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("series", ctx_r1.series)("save", ctx_r1.saveNestedComponents);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "sentenceCase");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.libraryName), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "mangaFormat");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.series.format), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.series.folderPath), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultValue");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.series.lowestFolderPath), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_24_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.metadata.maxCount, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_24_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.metadata.totalCount, " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_24_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "publicationStatus");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.metadata.publicationStatus), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_24_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "bytes");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.size), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 35)(2, "div", 32)(3, "app-setting-item", 46);
    \u0275\u0275template(4, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_24_ng_template_4_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 35)(7, "div", 32)(8, "app-setting-item", 46);
    \u0275\u0275template(9, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_24_ng_template_9_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 20)(12, "div", 35)(13, "div", 32)(14, "app-setting-item", 22);
    \u0275\u0275template(15, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_24_ng_template_15_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 35)(18, "div", 32)(19, "app-setting-item", 22);
    \u0275\u0275template(20, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_24_ng_template_20_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("title", t_r3("max-items-title"))("subtitle", t_r3("highest-count-tooltip"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("total-items-title"))("subtitle", t_r3("max-issue-tooltip"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("publication-status-title"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("size-title"))("toggleOnViewClick", false)("showEdit", false);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "utcToLocalTime");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.series.created, "shortDate"), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultDate");
    \u0275\u0275pipe(2, "timeAgo");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, ctx_r1.series.lastChapterAdded)), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultDate");
    \u0275\u0275pipe(2, "timeAgo");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, ctx_r1.series.lastFolderScanned)), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "defaultDate");
    \u0275\u0275pipe(2, "timeAgo");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, ctx_r1.series.lastChapterAdded)), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.series.pages), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.series.wordCount), " ");
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("loading"));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_61_For_2_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 58)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 59);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const file_r62 = ctx.$implicit;
    const t_r3 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r62.filePath);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", t_r3("chapter-title"), " ", file_r62.chapter, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", t_r3("pages-title"), " ", file_r62.pages, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("format-title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.utilityService.mangaFormatToText(file_r62.format));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_61_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 50);
    \u0275\u0275element(1, "app-image", 51);
    \u0275\u0275elementStart(2, "div", 52)(3, "h5", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 20)(7, "div", 54);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "utcToLocalTime");
    \u0275\u0275pipe(10, "defaultDate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 54);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "utcToLocalTime");
    \u0275\u0275pipe(14, "defaultDate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "div", 54)(17, "button", 55);
    \u0275\u0275listener("click", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_61_For_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r59);
      const collapse_r60 = \u0275\u0275reference(22);
      return \u0275\u0275resetView(collapse_r60.toggle());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 54);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 56, 5);
    \u0275\u0275twoWayListener("ngbCollapseChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_61_For_2_Template_div_ngbCollapseChange_21_listener($event) {
      const volume_r61 = \u0275\u0275restoreView(_r59).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.volumeCollapsed[volume_r61.name], $event) || (ctx_r1.volumeCollapsed[volume_r61.name] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "ul", 57);
    \u0275\u0275repeaterCreate(24, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_61_For_2_For_25_Template, 12, 7, "li", 58, _forTrack2);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const volume_r61 = ctx.$implicit;
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r1.imageService.getVolumeCoverImage(volume_r61.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatVolumeName(volume_r61));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", t_r3("added-title"), " ", \u0275\u0275pipeBind1(10, 14, \u0275\u0275pipeBind1(9, 12, volume_r61.createdUtc)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", t_r3("last-modified-title"), " ", \u0275\u0275pipeBind1(14, 19, \u0275\u0275pipeBind2(13, 16, volume_r61.lastModifiedUtc, "short")), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.isAdmin);
    \u0275\u0275attribute("aria-expanded", !ctx_r1.volumeCollapsed[volume_r61.name]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("view-files"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", t_r3("pages-title"), " ", volume_r61.pages, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngbCollapse", ctx_r1.volumeCollapsed[volume_r61.name]);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(volume_r61.volumeFiles);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 48);
    \u0275\u0275repeaterCreate(1, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_61_For_2_Template, 26, 21, "li", 50, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.seriesVolumes);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 20)(3, "div", 35)(4, "div", 32)(5, "app-setting-item", 22);
    \u0275\u0275template(6, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_6_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 35)(9, "div", 32)(10, "app-setting-item", 22);
    \u0275\u0275template(11, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_11_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 20)(14, "div", 35)(15, "div", 32)(16, "app-setting-item", 46);
    \u0275\u0275template(17, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_17_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 35)(20, "div", 32)(21, "app-setting-item", 46);
    \u0275\u0275template(22, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_22_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(24, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_24_Template, 22, 14);
    \u0275\u0275elementStart(25, "div", 20)(26, "div", 35)(27, "div", 32)(28, "app-setting-item", 22);
    \u0275\u0275template(29, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_29_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 35)(32, "div", 32)(33, "app-setting-item", 22);
    \u0275\u0275template(34, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_34_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 20)(37, "div", 35)(38, "div", 32)(39, "app-setting-item", 22);
    \u0275\u0275template(40, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_40_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 35)(43, "div", 32)(44, "app-setting-item", 22);
    \u0275\u0275template(45, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_45_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 20)(48, "div", 35)(49, "div", 32)(50, "app-setting-item", 22);
    \u0275\u0275template(51, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_51_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 35)(54, "div", 32)(55, "app-setting-item", 22);
    \u0275\u0275template(56, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_ng_template_56_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "h4");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_60_Template, 3, 1, "div", 47)(61, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Conditional_61_Template, 3, 0, "ul", 48);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("info-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("library-title"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("format-title"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("folder-path-title"))("subtitle", t_r3("folder-path-tooltip"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("lowest-folder-path-title"))("subtitle", t_r3("lowest-folder-path-tooltip"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.metadata ? 24 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", t_r3("created-title"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("last-added-title"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("last-scanned-title"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("last-read-title"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(6);
    \u0275\u0275property("title", t_r3("total-pages-title"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("title", t_r3("total-words-title"))("toggleOnViewClick", false)("showEdit", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("volumes-title"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoadingVolumes ? 60 : 61);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_34_Conditional_0_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "app-setting-button", 61)(2, "button", 62);
    \u0275\u0275listener("click", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_34_Conditional_0_For_1_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r63);
      const task_r64 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.runTask(task_r64));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r64 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("subtitle", task_r64.description);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("btn btn-", task_r64.action === ctx_r1.Action.Delete ? "danger" : "secondary", " btn-sm mb-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r64.title);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_34_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_34_Conditional_0_For_1_Conditional_0_Template, 4, 5, "div", 60);
  }
  if (rf & 2) {
    const task_r64 = ctx.$implicit;
    const user_r65 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.accountService.canInvokeAction(user_r65, task_r64.action) ? 0 : -1);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_34_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_34_Conditional_0_For_1_Template, 1, 1, null, null, _forTrack3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r1.tasks);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_34_Conditional_0_Template, 2, 0);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_6_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.accountService.currentUser$)) ? 0 : -1, tmp_6_0);
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275listener("click", function EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_41_Template_span_click_0_listener() {
      const ctx_r66 = \u0275\u0275restoreView(_r66);
      const item_r68 = ctx_r66.item;
      const field_r69 = ctx_r66.field;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.unlock(item_r68, field_r69));
    });
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("field-locked-alt"));
  }
}
function EditSeriesModalComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h5", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function EditSeriesModalComponent_ng_container_0_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "form", 11)(7, "ul", 12, 0);
    \u0275\u0275twoWayListener("activeIdChange", function EditSeriesModalComponent_ng_container_0_Conditional_1_Template_ul_activeIdChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.active, $event) || (ctx_r1.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "li", 13)(10, "a", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_12_Template, 14, 8, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_13_Template, 4, 2, "li", 13);
    \u0275\u0275elementStart(14, "li", 13)(15, "a", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_17_Template, 65, 39, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, EditSeriesModalComponent_ng_container_0_Conditional_1_Conditional_18_Template, 4, 2, "li", 13);
    \u0275\u0275elementStart(19, "li", 13)(20, "a", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_22_Template, 3, 3, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li", 13)(24, "a", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_26_Template, 1, 2, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li", 13)(28, "a", 14);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_30_Template, 62, 36, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li", 13)(32, "a", 14);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_34_Template, 2, 3, "ng-template", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(35, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 17)(37, "button", 18);
    \u0275\u0275listener("click", function EditSeriesModalComponent_ng_container_0_Conditional_1_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 19);
    \u0275\u0275listener("click", function EditSeriesModalComponent_ng_container_0_Conditional_1_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(41, EditSeriesModalComponent_ng_container_0_Conditional_1_ng_template_41_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const nav_r70 = \u0275\u0275reference(8);
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("title", \u0275\u0275pureFunction1(29, _c0, ctx_r1.series.name)), "");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("close"));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("modal-body scrollable-modal ", ctx_r1.utilityService.getActiveBreakpoint() === ctx_r1.Breakpoint.Mobile ? "" : "d-flex", "");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.editSeriesForm);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("orientation", ctx_r1.utilityService.getActiveBreakpoint() === ctx_r1.Breakpoint.Mobile ? "horizontal" : "vertical");
    \u0275\u0275twoWayProperty("activeId", ctx_r1.active);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.tabs[ctx_r1.TabID.General]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.tabs[ctx_r1.TabID.General]));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.metadata ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngbNavItem", ctx_r1.tabs[ctx_r1.TabID.People]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.tabs[ctx_r1.TabID.People]));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.metadata ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngbNavItem", ctx_r1.tabs[ctx_r1.TabID.CoverImage]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.tabs[ctx_r1.TabID.CoverImage]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.tabs[ctx_r1.TabID.Related]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.tabs[ctx_r1.TabID.Related]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.tabs[ctx_r1.TabID.Info]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.tabs[ctx_r1.TabID.Info]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavItem", ctx_r1.tabs[ctx_r1.TabID.Tasks]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.tabs[ctx_r1.TabID.Tasks]));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("tab-content ", ctx_r1.utilityService.getActiveBreakpoint() === ctx_r1.Breakpoint.Mobile ? "mt-3" : "ms-4 flex-fill", "");
    \u0275\u0275property("ngbNavOutlet", nav_r70);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("close"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.editSeriesForm.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("save"));
  }
}
function EditSeriesModalComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EditSeriesModalComponent_ng_container_0_Conditional_1_Template, 43, 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.series ? 1 : -1);
  }
}
var TabID;
(function(TabID2) {
  TabID2[TabID2["General"] = 0] = "General";
  TabID2[TabID2["Metadata"] = 1] = "Metadata";
  TabID2[TabID2["People"] = 2] = "People";
  TabID2[TabID2["WebLinks"] = 3] = "WebLinks";
  TabID2[TabID2["CoverImage"] = 4] = "CoverImage";
  TabID2[TabID2["Related"] = 5] = "Related";
  TabID2[TabID2["Info"] = 6] = "Info";
  TabID2[TabID2["Tasks"] = 7] = "Tasks";
})(TabID || (TabID = {}));
var blackList = [
  Action.Edit,
  Action.Info,
  Action.IncognitoRead,
  Action.Read,
  Action.SendTo,
  Action.AddToWantToReadList,
  Action.AddToCollection,
  Action.AddToReadingList,
  Action.RemoveFromWantToReadList,
  Action.RemoveFromWantToReadList
];
var EditSeriesModalComponent = class _EditSeriesModalComponent {
  constructor() {
    this.modal = inject(NgbActiveModal);
    this.seriesService = inject(SeriesService);
    this.utilityService = inject(UtilityService);
    this.fb = inject(FormBuilder);
    this.imageService = inject(ImageService);
    this.libraryService = inject(LibraryService);
    this.uploadService = inject(UploadService);
    this.metadataService = inject(MetadataService);
    this.cdRef = inject(ChangeDetectorRef);
    this.accountService = inject(AccountService);
    this.licenseService = inject(LicenseService);
    this.destroyRef = inject(DestroyRef);
    this.toastr = inject(ToastrService);
    this.actionFactoryService = inject(ActionFactoryService);
    this.actionService = inject(ActionService);
    this.downloadService = inject(DownloadService);
    this.TabID = TabID;
    this.PersonRole = PersonRole;
    this.Breakpoint = Breakpoint;
    this.Action = Action;
    this.seriesVolumes = [];
    this.isLoadingVolumes = false;
    this.tasks = this.actionFactoryService.getActionablesForSettingsPage(this.actionFactoryService.getSeriesActions(this.runTask.bind(this)), blackList);
    this.volumeCollapsed = {};
    this.tabs = ["general-tab", "metadata-tab", "people-tab", "web-links-tab", "cover-image-tab", "related-tab", "info-tab", "tasks-tab"];
    this.active = this.tabs[0];
    this.libraryName = void 0;
    this.size = 0;
    this.hasForcedKPlus = false;
    this.forceIsLoading = false;
    this.tagsSettings = new TypeaheadSettings();
    this.languageSettings = new TypeaheadSettings();
    this.peopleSettings = {};
    this.genreSettings = new TypeaheadSettings();
    this.tags = [];
    this.genres = [];
    this.ageRatings = [];
    this.publicationStatuses = [];
    this.validLanguages = [];
    this.imageUrls = [];
    this.selectedCover = "";
    this.coverImageReset = false;
    this.isAdmin = false;
    this.saveNestedComponents = new EventEmitter();
  }
  get WebLinks() {
    return this.metadata?.webLinks.split(",") || [""];
  }
  getPersonsSettings(role) {
    return this.peopleSettings[role];
  }
  ngOnInit() {
    this.imageUrls.push(this.imageService.getSeriesCoverImage(this.series.id));
    this.libraryService.getLibraryNames().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((names) => {
      this.libraryName = names[this.series.libraryId];
    });
    this.accountService.isAdmin$.pipe(takeUntilDestroyed(this.destroyRef), tap((isAdmin) => {
      this.isAdmin = isAdmin;
      this.cdRef.markForCheck();
    })).subscribe();
    this.initSeries = Object.assign({}, this.series);
    this.editSeriesForm = this.fb.group({
      id: new FormControl(this.series.id, []),
      summary: new FormControl("", []),
      name: new FormControl(this.series.name, [Validators.required]),
      localizedName: new FormControl(this.series.localizedName, []),
      sortName: new FormControl(this.series.sortName, [Validators.required]),
      rating: new FormControl(this.series.userRating, []),
      coverImageIndex: new FormControl(0, []),
      coverImageLocked: new FormControl(this.series.coverImageLocked, []),
      ageRating: new FormControl("", []),
      publicationStatus: new FormControl("", []),
      language: new FormControl("", []),
      releaseYear: new FormControl("", [Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/([1-9]\d{3})|[0]{1}/)])
    });
    this.cdRef.markForCheck();
    this.metadataService.getAllAgeRatings().subscribe((ratings) => {
      this.ageRatings = ratings;
      this.cdRef.markForCheck();
    });
    this.metadataService.getAllPublicationStatus().subscribe((statuses) => {
      this.publicationStatuses = statuses;
      this.cdRef.markForCheck();
    });
    this.seriesService.getMetadata(this.series.id).subscribe((metadata) => {
      if (metadata) {
        this.metadata = metadata;
        this.setupTypeaheads();
        this.editSeriesForm.get("summary")?.patchValue(this.metadata.summary);
        this.editSeriesForm.get("ageRating")?.patchValue(this.metadata.ageRating);
        this.editSeriesForm.get("publicationStatus")?.patchValue(this.metadata.publicationStatus);
        this.editSeriesForm.get("language")?.patchValue(this.metadata.language);
        this.editSeriesForm.get("releaseYear")?.patchValue(this.metadata.releaseYear);
        this.cdRef.markForCheck();
        this.editSeriesForm.get("name")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
          this.series.nameLocked = true;
          this.cdRef.markForCheck();
        });
        this.editSeriesForm.get("sortName")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
          this.series.sortNameLocked = true;
          this.cdRef.markForCheck();
        });
        this.editSeriesForm.get("localizedName")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
          this.series.localizedNameLocked = true;
          this.cdRef.markForCheck();
        });
        this.editSeriesForm.get("summary")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
          this.metadata.summaryLocked = true;
          this.metadata.summary = val;
          this.cdRef.markForCheck();
        });
        this.editSeriesForm.get("ageRating")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
          this.metadata.ageRating = parseInt(val + "", 10);
          this.metadata.ageRatingLocked = true;
          this.cdRef.markForCheck();
        });
        this.editSeriesForm.get("publicationStatus")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
          this.metadata.publicationStatus = parseInt(val + "", 10);
          this.metadata.publicationStatusLocked = true;
          this.cdRef.markForCheck();
        });
        this.editSeriesForm.get("releaseYear")?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((val) => {
          this.metadata.releaseYear = parseInt(val + "", 10);
          this.metadata.releaseYearLocked = true;
          this.cdRef.markForCheck();
        });
      }
    });
    this.isLoadingVolumes = true;
    this.cdRef.markForCheck();
    this.seriesService.getVolumes(this.series.id).subscribe((volumes) => {
      this.seriesVolumes = volumes;
      this.isLoadingVolumes = false;
      if (this.seriesVolumes.length === 1) {
        this.imageUrls.push(...this.seriesVolumes[0].chapters.map((c) => this.imageService.getChapterCoverImage(c.id)));
      } else {
        this.imageUrls.push(...this.seriesVolumes.map((v) => this.imageService.getVolumeCoverImage(v.id)));
      }
      volumes.forEach((v) => {
        this.volumeCollapsed[v.name] = true;
      });
      this.seriesVolumes.forEach((vol) => {
        vol.volumeFiles = vol.chapters?.map((c) => c.files.map((f) => {
          f.chapter = c.range;
          return f;
        })).flat();
      });
      if (volumes.length > 0) {
        this.size = volumes.reduce((sum1, volume) => {
          return sum1 + volume.chapters.reduce((sum2, chapter) => {
            return sum2 + chapter.files.reduce((sum3, file) => {
              return sum3 + file.bytes;
            }, 0);
          }, 0);
        }, 0);
      }
      this.cdRef.markForCheck();
    });
  }
  formatVolumeName(volume) {
    if (volume.minNumber === LooseLeafOrDefaultNumber) {
      return translate("edit-series-modal.loose-leaf-volume");
    } else if (volume.minNumber === SpecialVolumeNumber) {
      return translate("edit-series-modal.specials-volume");
    }
    return translate("edit-series-modal.volume-num") + " " + volume.name;
  }
  setupTypeaheads() {
    forkJoin([
      this.setupTagSettings(),
      this.setupGenreTypeahead(),
      this.setupPersonTypeahead(),
      this.setupLanguageTypeahead()
    ]).subscribe((results) => {
      this.cdRef.markForCheck();
    });
  }
  setupTagSettings() {
    this.tagsSettings.minCharacters = 0;
    this.tagsSettings.multiple = true;
    this.tagsSettings.id = "tags";
    this.tagsSettings.unique = true;
    this.tagsSettings.showLocked = true;
    this.tagsSettings.addIfNonExisting = true;
    this.tagsSettings.compareFn = (options, filter) => {
      return options.filter((m) => this.utilityService.filter(m.title, filter));
    };
    this.tagsSettings.fetchFn = (filter) => this.metadataService.getAllTags().pipe(map((items) => this.tagsSettings.compareFn(items, filter)));
    this.tagsSettings.addTransformFn = (title) => {
      return { id: 0, title };
    };
    this.tagsSettings.selectionCompareFn = (a, b) => {
      return a.title.toLowerCase() == b.title.toLowerCase();
    };
    this.tagsSettings.compareFnForAdd = (options, filter) => {
      return options.filter((m) => this.utilityService.filterMatches(m.title, filter));
    };
    if (this.metadata.tags) {
      this.tagsSettings.savedData = this.metadata.tags;
    }
    return of(true);
  }
  setupGenreTypeahead() {
    this.genreSettings.minCharacters = 0;
    this.genreSettings.multiple = true;
    this.genreSettings.id = "genres";
    this.genreSettings.unique = true;
    this.genreSettings.showLocked = true;
    this.genreSettings.addIfNonExisting = true;
    this.genreSettings.fetchFn = (filter) => {
      return this.metadataService.getAllGenres().pipe(map((items) => this.genreSettings.compareFn(items, filter)));
    };
    this.genreSettings.compareFn = (options, filter) => {
      return options.filter((m) => this.utilityService.filter(m.title, filter));
    };
    this.genreSettings.compareFnForAdd = (options, filter) => {
      return options.filter((m) => this.utilityService.filterMatches(m.title, filter));
    };
    this.genreSettings.selectionCompareFn = (a, b) => {
      return a.title.toLowerCase() == b.title.toLowerCase();
    };
    this.genreSettings.addTransformFn = (title) => {
      return { id: 0, title };
    };
    if (this.metadata.genres) {
      this.genreSettings.savedData = this.metadata.genres;
    }
    return of(true);
  }
  updateFromPreset(id, presetField, role) {
    const personSettings = this.createBlankPersonSettings(id, role);
    if (presetField && presetField.length > 0) {
      const fetch = personSettings.fetchFn;
      return fetch("").pipe(map((people) => {
        const presetIds = presetField.map((p) => p.id);
        personSettings.savedData = people.filter((person) => presetIds.includes(person.id));
        this.peopleSettings[role] = personSettings;
        this.metadataService.updatePerson(this.metadata, personSettings.savedData, role);
        this.cdRef.markForCheck();
        return true;
      }));
    } else {
      this.peopleSettings[role] = personSettings;
      return of(true);
    }
  }
  setupLanguageTypeahead() {
    return this.metadataService.getAllValidLanguages().pipe(tap((validLanguages) => {
      this.validLanguages = validLanguages;
      this.languageSettings.minCharacters = 0;
      this.languageSettings.multiple = false;
      this.languageSettings.id = "language";
      this.languageSettings.unique = true;
      this.languageSettings.showLocked = true;
      this.languageSettings.addIfNonExisting = false;
      this.languageSettings.compareFn = (options, filter) => {
        return options.filter((m) => this.utilityService.filter(m.title, filter));
      };
      this.languageSettings.compareFnForAdd = (options, filter) => {
        return options.filter((m) => this.utilityService.filterMatches(m.title, filter));
      };
      this.languageSettings.fetchFn = (filter) => of(this.validLanguages).pipe(map((items) => this.languageSettings.compareFn(items, filter)));
      this.languageSettings.selectionCompareFn = (a, b) => {
        return a.isoCode == b.isoCode;
      };
      const l = this.validLanguages.find((l2) => l2.isoCode === this.metadata.language);
      if (l !== void 0) {
        this.languageSettings.savedData = l;
      }
      this.cdRef.markForCheck();
    }), switchMap((_) => of(true)));
  }
  setupPersonTypeahead() {
    this.peopleSettings = {};
    return forkJoin([
      this.updateFromPreset("writer", this.metadata.writers, PersonRole.Writer),
      this.updateFromPreset("character", this.metadata.characters, PersonRole.Character),
      this.updateFromPreset("colorist", this.metadata.colorists, PersonRole.Colorist),
      this.updateFromPreset("cover-artist", this.metadata.coverArtists, PersonRole.CoverArtist),
      this.updateFromPreset("editor", this.metadata.editors, PersonRole.Editor),
      this.updateFromPreset("inker", this.metadata.inkers, PersonRole.Inker),
      this.updateFromPreset("letterer", this.metadata.letterers, PersonRole.Letterer),
      this.updateFromPreset("penciller", this.metadata.pencillers, PersonRole.Penciller),
      this.updateFromPreset("publisher", this.metadata.publishers, PersonRole.Publisher),
      this.updateFromPreset("imprint", this.metadata.imprints, PersonRole.Imprint),
      this.updateFromPreset("translator", this.metadata.translators, PersonRole.Translator),
      this.updateFromPreset("teams", this.metadata.teams, PersonRole.Team),
      this.updateFromPreset("locations", this.metadata.locations, PersonRole.Location)
    ]).pipe(map((results) => {
      return of(true);
    }));
  }
  fetchPeople(role, filter) {
    return this.metadataService.getAllPeople().pipe(map((people) => {
      return people.filter((p) => this.utilityService.filter(p.name, filter));
    }));
  }
  createBlankPersonSettings(id, role) {
    const personSettings = new TypeaheadSettings();
    personSettings.minCharacters = 0;
    personSettings.multiple = true;
    personSettings.showLocked = true;
    personSettings.unique = true;
    personSettings.addIfNonExisting = true;
    personSettings.id = id;
    personSettings.compareFn = (options, filter) => {
      return options.filter((m) => this.utilityService.filter(m.name, filter));
    };
    personSettings.compareFnForAdd = (options, filter) => {
      return options.filter((m) => this.utilityService.filterMatches(m.name, filter));
    };
    personSettings.selectionCompareFn = (a, b) => {
      return a.name == b.name;
    };
    personSettings.fetchFn = (filter) => {
      return this.fetchPeople(role, filter).pipe(map((items) => personSettings.compareFn(items, filter)));
    };
    personSettings.addTransformFn = (title) => {
      return { id: 0, name: title, description: "", coverImageLocked: false, primaryColor: "", secondaryColor: "" };
    };
    return personSettings;
  }
  close() {
    this.modal.close({ success: false, series: void 0, coverImageUpdate: this.coverImageReset, updateExternal: this.hasForcedKPlus });
  }
  forceScan() {
    this.forceIsLoading = true;
    this.metadataService.forceRefreshFromPlus(this.series.id).subscribe(() => {
      this.hasForcedKPlus = true;
      this.forceIsLoading = false;
      this.toastr.info(translate("toasts.force-kavita+-refresh-success"));
      this.cdRef.markForCheck();
    });
  }
  updateWeblinks(items) {
    this.metadata.webLinks = items.map((s) => s.replaceAll(",", "%2C")).join(",");
  }
  save() {
    const model = this.editSeriesForm.value;
    const selectedIndex = this.editSeriesForm.get("coverImageIndex")?.value || 0;
    const apis = [
      this.seriesService.updateMetadata(this.metadata)
    ];
    const nameFieldsDirty = this.editSeriesForm.get("name")?.dirty || this.editSeriesForm.get("sortName")?.dirty || this.editSeriesForm.get("localizedName")?.dirty;
    const nameFieldLockChanged = this.series.nameLocked !== this.initSeries.nameLocked || this.series.sortNameLocked !== this.initSeries.sortNameLocked || this.series.localizedNameLocked !== this.initSeries.localizedNameLocked;
    if (nameFieldsDirty || nameFieldLockChanged || this.coverImageReset) {
      model.nameLocked = this.series.nameLocked;
      model.sortNameLocked = this.series.sortNameLocked;
      model.localizedNameLocked = this.series.localizedNameLocked;
      model.language = this.metadata.language;
      apis.push(this.seriesService.updateSeries(model));
    }
    if (selectedIndex > 0 || this.coverImageReset) {
      apis.push(this.uploadService.updateSeriesCoverImage(model.id, this.selectedCover, !this.coverImageReset));
    }
    this.saveNestedComponents.emit();
    forkJoin(apis).subscribe((results) => {
      this.modal.close({ success: true, series: model, coverImageUpdate: selectedIndex > 0 || this.coverImageReset, updateExternal: this.hasForcedKPlus });
    });
  }
  updateTags(tags) {
    this.tags = tags;
    this.metadata.tags = tags;
    this.cdRef.markForCheck();
  }
  updateGenres(genres) {
    this.genres = genres;
    this.metadata.genres = genres;
    this.cdRef.markForCheck();
  }
  updatePerson(persons, role) {
    this.metadataService.updatePerson(this.metadata, persons, role);
    this.metadata.locationLocked = true;
    this.cdRef.markForCheck();
  }
  updateLanguage(language) {
    if (language.length === 0) {
      this.metadata.language = "";
      return;
    }
    this.metadata.language = language[0].isoCode;
    this.cdRef.markForCheck();
  }
  updateSelectedIndex(index) {
    this.editSeriesForm.patchValue({
      coverImageIndex: index
    });
    this.cdRef.markForCheck();
  }
  updateSelectedImage(url) {
    this.selectedCover = url;
    this.cdRef.markForCheck();
  }
  handleReset() {
    this.coverImageReset = true;
    this.editSeriesForm.patchValue({
      coverImageLocked: false
    });
    this.cdRef.markForCheck();
  }
  unlock(b, field) {
    if (b) {
      b[field] = !b[field];
    }
    this.cdRef.markForCheck();
  }
  runTask(action) {
    return __async(this, null, function* () {
      switch (action.action) {
        case Action.Scan:
          yield this.actionService.scanSeries(this.series);
          break;
        case Action.RefreshMetadata:
          yield this.actionService.refreshSeriesMetadata(this.series);
          break;
        case Action.GenerateColorScape:
          yield this.actionService.refreshSeriesMetadata(this.series, void 0, false, true);
          break;
        case Action.AnalyzeFiles:
          this.actionService.analyzeFilesForSeries(this.series);
          break;
        case Action.MarkAsRead:
          this.actionService.markSeriesAsRead(this.series);
          break;
        case Action.MarkAsUnread:
          this.actionService.markSeriesAsUnread(this.series);
          break;
        case Action.Delete:
          yield this.actionService.deleteSeries(this.series);
          break;
        case Action.Download:
          this.downloadService.download("series", this.series);
          break;
        case Action.Match:
          this.actionService.matchSeries(this.series, (_) => {
            this.modal.close({ success: true, series: this.series, coverImageUpdate: false, updateExternal: true });
          });
          break;
      }
    });
  }
  static {
    this.\u0275fac = function EditSeriesModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditSeriesModalComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _EditSeriesModalComponent, selectors: [["app-edit-series-modal"]], inputs: { series: "series" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["nav", "ngbNav"], ["lock", ""], ["view", ""], ["badgeItem", ""], ["optionItem", ""], ["collapse", "ngbCollapse"], [4, "transloco", "translocoRead"], [1, "modal-container"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [3, "formGroup"], ["ngbNav", "", 1, "nav-pills", 2, "min-width", "135px", 3, "activeIdChange", "activeId", "orientation"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "row"], [1, "mb-3", 2, "width", "100%"], [3, "title", "toggleOnViewClick", "showEdit"], [1, "input-group"], ["id", "name", "formControlName", "name", "type", "text", "readonly", "", 1, "form-control"], [1, "invalid-feedback"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["id", "sort-name", "formControlName", "sortName", "type", "text", 1, "form-control"], [3, "class"], ["id", "localized-name", "formControlName", "localizedName", "type", "text", 1, "form-control"], ["id", "summary", "formControlName", "summary", "rows", "4", 1, "form-control"], [1, "col-lg-8", "col-md-12", "pe-2"], [1, "mb-3"], [1, "col-lg-4", "col-md-12"], [1, "col-md-12"], [1, "col-lg-6", "col-md-12", "pe-2"], [1, "col-lg-6", "col-md-12"], [3, "selectedData", "lockedChange", "onUnlock", "newItemAdded", "settings", "locked"], ["type", "number", "inputmode", "numeric", "id", "release-year", "formControlName", "releaseYear", "maxlength", "4", "minlength", "4", 1, "form-control"], ["id", "age-rating", "formControlName", "ageRating", 1, "form-select"], [3, "value"], ["id", "publication-status", "formControlName", "publicationStatus", 1, "form-select"], [3, "updateItems", "items", "label"], ["role", "alert", 1, "alert", "alert-warning"], [3, "imageUrlsChange", "imageSelected", "selectedBase64Url", "resetClicked", "imageUrls", "showReset"], [3, "series", "save"], [3, "title", "subtitle", "toggleOnViewClick", "showEdit"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "list-unstyled"], [1, "visually-hidden"], [1, "d-flex", "my-4"], ["width", "74px", 1, "me-3", 2, "width", "74px", 3, "imageUrl"], [1, "flex-grow-1"], [1, "mt-0", "mb-1"], [1, "col"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [3, "ngbCollapseChange", "ngbCollapse"], [1, "list-group", "mt-2"], [1, "list-group-item"], [1, "badge", "badge-secondary"], [1, "mt-3", "mb-3"], [3, "subtitle"], [3, "click"], [1, "input-group-text", "clickable", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-lock"]], template: function EditSeriesModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EditSeriesModalComponent_ng_container_0_Template, 2, 1, "ng-container", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "edit-series-modal");
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      NumberValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MinLengthValidator,
      MaxLengthValidator,
      FormGroupDirective,
      FormControlName,
      NgbNav,
      NgbNavContent,
      NgbNavItem,
      NgbNavLink,
      CommonModule,
      NgTemplateOutlet,
      AsyncPipe,
      DecimalPipe,
      TitleCasePipe,
      TypeaheadComponent,
      CoverImageChooserComponent,
      EditSeriesRelationComponent,
      SentenceCasePipe,
      MangaFormatPipe,
      DefaultDatePipe,
      TimeAgoPipe,
      PublicationStatusPipe,
      BytesPipe,
      ImageComponent,
      NgbCollapse,
      NgbNavOutlet,
      DefaultValuePipe,
      TranslocoModule,
      TranslocoDirective,
      UtcToLocalTimePipe,
      EditListComponent,
      SettingButtonComponent,
      SettingItemComponent
    ], styles: ["\n\n.lock-active[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n}\n/*# sourceMappingURL=edit-series-modal.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditSeriesModalComponent, { className: "EditSeriesModalComponent", filePath: "src/app/cards/_modals/edit-series-modal/edit-series-modal.component.ts", lineNumber: 123 });
})();

export {
  RelationKind,
  RelationshipPipe,
  EditSeriesModalComponent
};
//# sourceMappingURL=chunk-OOCLTPIS.js.map
