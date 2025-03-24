import {
  ReadTimePipe
} from "./chunk-SXNBP4JN.js";
import {
  PersonBadgeComponent
} from "./chunk-YFCV4WCV.js";
import {
  BadgeExpanderComponent
} from "./chunk-5EJJ6TJW.js";
import {
  SafeUrlPipe
} from "./chunk-R7FGP62P.js";
import {
  CarouselReelComponent
} from "./chunk-RGQOJ2I6.js";
import {
  SeriesFormatComponent
} from "./chunk-FAULLNLJ.js";
import {
  FilterUtilitiesService
} from "./chunk-SBBWMOEE.js";
import "./chunk-IQIEDCQT.js";
import {
  MangaFormatPipe
} from "./chunk-RMZ6EY72.js";
import "./chunk-MABWAPXH.js";
import "./chunk-KMTIWVED.js";
import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  FilterComparison,
  FilterField,
  MetadataService,
  PersonRole
} from "./chunk-IBO6ECG5.js";
import "./chunk-BX5PUGWH.js";
import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import "./chunk-U2DWQJI2.js";
import "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  TranslocoDirective,
  inject,
  shareReplay,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/language-name.pipe.ts
var LanguageNamePipe = class _LanguageNamePipe {
  constructor(metadataService) {
    this.metadataService = metadataService;
  }
  transform(isoCode) {
    return this.metadataService.getLanguageNameForCode(isoCode).pipe(shareReplay());
  }
  static {
    this.\u0275fac = function LanguageNamePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguageNamePipe)(\u0275\u0275directiveInject(MetadataService, 16));
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "languageName", type: _LanguageNamePipe, pure: true, standalone: true });
  }
};

// src/app/_single-module/details-tab/details-tab.component.ts
function DetailsTabComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h4", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "readTime");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("read-time-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r1.readingTime), " ");
  }
}
function DetailsTabComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h4", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("release-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.releaseYear, " ");
  }
}
function DetailsTabComponent_ng_container_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h4", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "languageName");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1("language-title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, \u0275\u0275pipeBind1(5, 2, ctx_r1.language)), " ");
  }
}
function DetailsTabComponent_ng_container_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function DetailsTabComponent_ng_container_0_ng_template_18_Template_a_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openGeneric(ctx_r1.FilterField.Genres, item_r4.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.title);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function DetailsTabComponent_ng_container_0_ng_template_25_Template_a_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openGeneric(ctx_r1.FilterField.Tags, item_r6.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.title);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275pipe(1, "safeUrl");
    \u0275\u0275element(2, "app-image", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(1, 4, item_r7), \u0275\u0275sanitizeUrl)("title", item_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("imageUrl", ctx_r1.imageService.getWebLinkImage(item_r7))("errorImage", ctx_r1.imageService.errorWebLinkImage);
  }
}
function DetailsTabComponent_ng_container_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("person", item_r8);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("person", item_r9);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275property("person", item_r10);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275property("person", item_r11);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275property("person", item_r12);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275property("person", item_r13);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275property("person", item_r14);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275property("person", item_r15);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275property("person", item_r16);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    \u0275\u0275property("person", item_r17);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    \u0275\u0275property("person", item_r18);
  }
}
function DetailsTabComponent_ng_container_0_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-person-badge", 15);
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275property("person", item_r19);
  }
}
function DetailsTabComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275template(2, DetailsTabComponent_ng_container_0_Conditional_2_Template, 6, 4, "div", 4)(3, DetailsTabComponent_ng_container_0_Conditional_3_Template, 5, 2, "div", 4)(4, DetailsTabComponent_ng_container_0_Conditional_4_Template, 7, 6, "div", 4);
    \u0275\u0275elementStart(5, "div", 4)(6, "h4", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275element(9, "app-series-format", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "mangaFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "div", 8);
    \u0275\u0275elementStart(13, "div", 4)(14, "h4", 5);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 6)(17, "app-badge-expander", 9);
    \u0275\u0275template(18, DetailsTabComponent_ng_container_0_ng_template_18_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 4)(21, "h4", 5);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 6)(24, "app-badge-expander", 9);
    \u0275\u0275template(25, DetailsTabComponent_ng_container_0_ng_template_25_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 10)(28, "app-carousel-reel", 11);
    \u0275\u0275template(29, DetailsTabComponent_ng_container_0_ng_template_29_Template, 3, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, DetailsTabComponent_ng_container_0_Conditional_31_Template, 1, 0, "div", 8);
    \u0275\u0275elementStart(32, "div", 10)(33, "app-carousel-reel", 11);
    \u0275\u0275template(34, DetailsTabComponent_ng_container_0_ng_template_34_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 10)(37, "app-carousel-reel", 11);
    \u0275\u0275template(38, DetailsTabComponent_ng_container_0_ng_template_38_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 10)(41, "app-carousel-reel", 11);
    \u0275\u0275template(42, DetailsTabComponent_ng_container_0_ng_template_42_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 10)(45, "app-carousel-reel", 11);
    \u0275\u0275template(46, DetailsTabComponent_ng_container_0_ng_template_46_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 10)(49, "app-carousel-reel", 11);
    \u0275\u0275template(50, DetailsTabComponent_ng_container_0_ng_template_50_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 10)(53, "app-carousel-reel", 11);
    \u0275\u0275template(54, DetailsTabComponent_ng_container_0_ng_template_54_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 10)(57, "app-carousel-reel", 11);
    \u0275\u0275template(58, DetailsTabComponent_ng_container_0_ng_template_58_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 10)(61, "app-carousel-reel", 11);
    \u0275\u0275template(62, DetailsTabComponent_ng_container_0_ng_template_62_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 10)(65, "app-carousel-reel", 11);
    \u0275\u0275template(66, DetailsTabComponent_ng_container_0_ng_template_66_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 10)(69, "app-carousel-reel", 11);
    \u0275\u0275template(70, DetailsTabComponent_ng_container_0_ng_template_70_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 10)(73, "app-carousel-reel", 11);
    \u0275\u0275template(74, DetailsTabComponent_ng_container_0_ng_template_74_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 10)(77, "app-carousel-reel", 11);
    \u0275\u0275template(78, DetailsTabComponent_ng_container_0_ng_template_78_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.readingTime ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.releaseYear ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.language ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1("format-title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("format", ctx_r1.format);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 43, ctx_r1.format), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r1("genres-title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("includeComma", true)("items", ctx_r1.genres)("itemsTillExpander", 3)("defaultExpanded", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r1("tags-title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("includeComma", true)("items", ctx_r1.tags)("itemsTillExpander", 3)("defaultExpanded", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.webLinks)("title", t_r1("weblinks-title"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.genres.length > 0 || ctx_r1.tags.length > 0 || ctx_r1.webLinks.length > 0 ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.metadata.writers)("title", t_r1("writers-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.colorists)("title", t_r1("colorists-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.editors)("title", t_r1("editors-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.coverArtists)("title", t_r1("cover-artists-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.inkers)("title", t_r1("inkers-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.letterers)("title", t_r1("letterers-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.pencillers)("title", t_r1("pencillers-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.translators)("title", t_r1("translators-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.characters)("title", t_r1("characters-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.locations)("title", t_r1("locations-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.teams)("title", t_r1("teams-title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.metadata.imprints)("title", t_r1("imprints-title"));
  }
}
var DetailsTabComponent = class _DetailsTabComponent {
  constructor() {
    this.imageService = inject(ImageService);
    this.filterUtilityService = inject(FilterUtilitiesService);
    this.PersonRole = PersonRole;
    this.FilterField = FilterField;
    this.format = MangaFormat.UNKNOWN;
    this.genres = [];
    this.tags = [];
    this.webLinks = [];
    this.MangaFormat = MangaFormat;
  }
  openGeneric(queryParamName, filter) {
    if (queryParamName === FilterField.None)
      return;
    this.filterUtilityService.applyFilter(["all-series"], queryParamName, FilterComparison.Equal, `${filter}`).subscribe();
  }
  static {
    this.\u0275fac = function DetailsTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DetailsTabComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _DetailsTabComponent, selectors: [["app-details-tab"]], inputs: { metadata: "metadata", readingTime: "readingTime", language: "language", format: "format", releaseYear: "releaseYear", genres: "genres", tags: "tags", webLinks: "webLinks" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["badgeExpanderItem", ""], ["carouselItem", ""], [4, "transloco", "translocoRead"], [1, "details", "pb-3"], [1, "mb-3", "ms-1"], [1, "header"], [1, "ms-3"], [3, "format"], ["aria-hidden", "true", 1, "setting-section-break"], [3, "includeComma", "items", "itemsTillExpander", "defaultExpanded"], [1, "mb-3"], [3, "items", "title"], ["href", "javascript:void(0)", 1, "dark-exempt", "btn-icon", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 1, "me-1", 3, "href", "title"], ["height", "24px", "width", "24px", "aria-hidden", "true", 3, "imageUrl", "errorImage"], [3, "person"]], template: function DetailsTabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DetailsTabComponent_ng_container_0_Template, 80, 45, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "details-tab");
      }
    }, dependencies: [
      CarouselReelComponent,
      PersonBadgeComponent,
      TranslocoDirective,
      ImageComponent,
      BadgeExpanderComponent,
      ReadTimePipe,
      SeriesFormatComponent,
      MangaFormatPipe,
      LanguageNamePipe,
      AsyncPipe,
      SafeUrlPipe
    ], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailsTabComponent, { className: "DetailsTabComponent", filePath: "src/app/_single-module/details-tab/details-tab.component.ts", lineNumber: 50 });
})();
export {
  DetailsTabComponent
};
//# sourceMappingURL=details-tab.component-F4LGUAYX.js.map
