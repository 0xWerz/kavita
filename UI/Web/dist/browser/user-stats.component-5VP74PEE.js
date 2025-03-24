import {
  DayBreakdownComponent,
  GenericListModalComponent,
  ReadingActivityComponent,
  StatListComponent,
  StatisticsService,
  TimeDurationPipe
} from "./chunk-ERF6WUKS.js";
import {
  IconAndTitleComponent
} from "./chunk-D3SGRXLI.js";
import {
  CompactNumberPipe
} from "./chunk-AFXXYIIH.js";
import "./chunk-RGQOJ2I6.js";
import "./chunk-XZ2P7HP2.js";
import {
  TimeAgoPipe
} from "./chunk-WOFHNJUD.js";
import "./chunk-RMZ6EY72.js";
import "./chunk-CVI764VQ.js";
import "./chunk-C423WP7Y.js";
import "./chunk-NGXWDHM5.js";
import {
  MemberService
} from "./chunk-XZ5MKEYT.js";
import {
  LibraryService
} from "./chunk-PBM62GK4.js";
import "./chunk-2JLAQ3MZ.js";
import "./chunk-TPURWX2Y.js";
import "./chunk-HN36WWH3.js";
import "./chunk-A6JEQ5GB.js";
import "./chunk-RSMGJKYW.js";
import {
  AccountService
} from "./chunk-U2DWQJI2.js";
import {
  NgbModal
} from "./chunk-2R2RCU4Y.js";
import "./chunk-5J5IKBMT.js";
import "./chunk-PUXELTB2.js";
import "./chunk-FLGYJHAG.js";
import "./chunk-BPOUBDX2.js";
import "./chunk-CQADFT7F.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  DecimalPipe,
  DestroyRef,
  NgIf,
  PercentPipe,
  TranslocoDirective,
  TranslocoModule,
  inject,
  map,
  shareReplay,
  takeUntilDestroyed,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/statistics/_components/user-stats-info-cards/user-stats-info-cards.component.ts
var _c0 = (a0) => ({ value: a0 });
function UserStatsInfoCardsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275elementStart(3, "div", 2)(4, "app-icon-and-title", 3);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275listener("click", function UserStatsInfoCardsComponent_ng_container_0_Template_app_icon_and_title_click_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.openPageByYearList();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "compactNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 4);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9);
    \u0275\u0275elementStart(10, "div", 2)(11, "app-icon-and-title", 3);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275listener("click", function UserStatsInfoCardsComponent_ng_container_0_Template_app_icon_and_title_click_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.openWordByYearList();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "compactNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "div", 4);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16);
    \u0275\u0275elementStart(17, "div", 2)(18, "app-icon-and-title", 5);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "timeDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "div", 4);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23);
    \u0275\u0275elementStart(24, "div", 2)(25, "app-icon-and-title", 6);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "timeDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "div", 4);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(29);
    \u0275\u0275elementStart(30, "div", 2)(31, "app-icon-and-title", 7);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "compactNumber");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "div", 4);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(36);
    \u0275\u0275elementStart(37, "div", 2)(38, "app-icon-and-title", 8);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "timeAgo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("label", t_r3("total-pages-read-label"))("clickable", true)("title", t_r3("total-pages-read-tooltip", \u0275\u0275pureFunction1(42, _c0, \u0275\u0275pipeBind1(5, 22, ctx_r1.totalPagesRead))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 24, ctx_r1.totalPagesRead), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r3("total-words-read-label"))("clickable", true)("title", t_r3("total-words-read-tooltip", \u0275\u0275pureFunction1(44, _c0, \u0275\u0275pipeBind1(12, 26, ctx_r1.totalWordsRead))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 28, ctx_r1.totalWordsRead), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r3("time-spent-reading-label"))("clickable", false)("title", t_r3("time-spent-reading-tooltip", \u0275\u0275pureFunction1(46, _c0, \u0275\u0275pipeBind1(19, 30, ctx_r1.timeSpentReading))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 32, ctx_r1.timeSpentReading), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r3("avg-reading-per-week-label"))("clickable", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 34, ctx_r1.avgHoursPerWeekSpentReading), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r3("chapters-read-label"))("clickable", false)("title", t_r3("chapters-read-tooltip", \u0275\u0275pureFunction1(48, _c0, \u0275\u0275pipeBind1(32, 36, ctx_r1.chaptersRead))));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("chapters", \u0275\u0275pureFunction1(50, _c0, \u0275\u0275pipeBind1(34, 38, ctx_r1.chaptersRead))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("label", t_r3("last-active-label"))("clickable", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 40, ctx_r1.lastActive), " ");
  }
}
var UserStatsInfoCardsComponent = class _UserStatsInfoCardsComponent {
  constructor(statsService, modalService, accountService) {
    this.statsService = statsService;
    this.modalService = modalService;
    this.accountService = accountService;
    this.totalPagesRead = 0;
    this.totalWordsRead = 0;
    this.timeSpentReading = 0;
    this.chaptersRead = 0;
    this.lastActive = "";
    this.avgHoursPerWeekSpentReading = 0;
  }
  openPageByYearList() {
    const numberPipe = new CompactNumberPipe();
    this.statsService.getPagesPerYear().subscribe((yearCounts) => {
      const ref = this.modalService.open(GenericListModalComponent, { scrollable: true });
      ref.componentInstance.items = yearCounts.map((t) => {
        const countStr = translate("user-stats-info-cards.pages-count", { num: numberPipe.transform(t.value) });
        return `${t.name}: ${countStr}s`;
      });
      ref.componentInstance.title = translate("user-stats-info-cards.pages-read-by-year-title");
    });
  }
  openWordByYearList() {
    const numberPipe = new CompactNumberPipe();
    this.statsService.getWordsPerYear().subscribe((yearCounts) => {
      const ref = this.modalService.open(GenericListModalComponent, { scrollable: true });
      ref.componentInstance.items = yearCounts.map((t) => {
        const countStr = translate("user-stats-info-cards.words-count", { num: numberPipe.transform(t.value) });
        return `${t.name}: ${countStr}`;
      });
      ref.componentInstance.title = translate("user-stats-info-cards.words-read-by-year-title");
    });
  }
  static {
    this.\u0275fac = function UserStatsInfoCardsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserStatsInfoCardsComponent)(\u0275\u0275directiveInject(StatisticsService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(AccountService));
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _UserStatsInfoCardsComponent, selectors: [["app-user-stats-info-cards"]], inputs: { totalPagesRead: "totalPagesRead", totalWordsRead: "totalWordsRead", timeSpentReading: "timeSpentReading", chaptersRead: "chaptersRead", lastActive: "lastActive", avgHoursPerWeekSpentReading: "avgHoursPerWeekSpentReading" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "row", "g-0", "mt-4", "mb-3", "d-flex", "justify-content-around"], [1, "col-auto", "mb-2"], ["fontClasses", "fa-regular fa-file-lines", 3, "click", "label", "clickable", "title"], [1, "vr", "d-none", "d-lg-block", "m-2"], ["fontClasses", "fas fa-eye", 3, "label", "clickable", "title"], ["fontClasses", "fas fa-eye", 3, "label", "clickable"], ["fontClasses", "fa-regular fa-file-lines", 3, "label", "clickable", "title"], ["fontClasses", "fa-regular fa-calendar", 3, "label", "clickable"]], template: function UserStatsInfoCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UserStatsInfoCardsComponent_ng_container_0_Template, 41, 52, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "user-stats-info-cards");
      }
    }, dependencies: [IconAndTitleComponent, DecimalPipe, CompactNumberPipe, TimeDurationPipe, TimeAgoPipe, TranslocoDirective], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserStatsInfoCardsComponent, { className: "UserStatsInfoCardsComponent", filePath: "src/app/statistics/_components/user-stats-info-cards/user-stats-info-cards.component.ts", lineNumber: 21 });
})();

// src/app/statistics/_components/user-stats/user-stats.component.ts
function UserStatsComponent_ng_container_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-user-stats-info-cards", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const userStats_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("totalPagesRead", userStats_r1.totalPagesRead)("totalWordsRead", userStats_r1.totalWordsRead)("timeSpentReading", userStats_r1.timeSpentReading)("chaptersRead", userStats_r1.chaptersRead)("lastActive", userStats_r1.lastActive)("avgHoursPerWeekSpentReading", userStats_r1.avgHoursPerWeekSpentReading);
  }
}
function UserStatsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275template(2, UserStatsComponent_ng_container_0_div_1_ng_container_2_Template, 2, 6, "ng-container", 4);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275element(5, "app-reading-activity", 6);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275element(8, "app-day-breakdown", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275element(10, "app-stat-list", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 8, ctx_r2.userStats$));
    \u0275\u0275advance(3);
    \u0275\u0275property("userId", ctx_r2.userId)("isAdmin", \u0275\u0275pipeBind1(6, 10, ctx_r2.accountService.isAdmin$) || false)("individualUserMode", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("userId", ctx_r2.userId);
    \u0275\u0275advance(2);
    \u0275\u0275property("data$", ctx_r2.percentageRead$)("label", t_r2("read-percentage"))("title", t_r2("library-read-progress-title"));
  }
}
function UserStatsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UserStatsComponent_ng_container_0_div_1_Template, 11, 12, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.userId);
  }
}
var UserStatsComponent = class _UserStatsComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.cdRef = inject(ChangeDetectorRef);
    this.statService = inject(StatisticsService);
    this.accountService = inject(AccountService);
    this.memberService = inject(MemberService);
    this.libraryService = inject(LibraryService);
    this.userId = void 0;
  }
  ngOnInit() {
    this.memberService.getMember().subscribe((me) => {
      this.userId = me.id;
      this.cdRef.markForCheck();
      this.userStats$ = this.statService.getUserStatistics(this.userId).pipe(takeUntilDestroyed(this.destroyRef), shareReplay());
      this.readSeries$ = this.statService.getReadingHistory(this.userId).pipe(takeUntilDestroyed(this.destroyRef));
      const pipe = new PercentPipe("en-US");
      this.libraryService.getLibraryNames().subscribe((names) => {
        this.percentageRead$ = this.userStats$.pipe(takeUntilDestroyed(this.destroyRef), map((d) => d.percentReadPerLibrary.map((l) => {
          return { name: names[l.count], value: parseFloat((pipe.transform(l.value, "1.1-1") || "0").replace("%", "")) };
        }).sort((a, b) => b.value - a.value)));
      });
    });
  }
  static {
    this.\u0275fac = function UserStatsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserStatsComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _UserStatsComponent, selectors: [["app-user-stats"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["class", "vstack gap-3", 4, "ngIf"], [1, "vstack", "gap-3"], [1, "row", "g-0", "d-flex", "justify-content-around"], [4, "ngIf"], [1, "row", "g-0", "fixed-row"], [3, "userId", "isAdmin", "individualUserMode"], [3, "userId"], [3, "data$", "label", "title"], [3, "totalPagesRead", "totalWordsRead", "timeSpentReading", "chaptersRead", "lastActive", "avgHoursPerWeekSpentReading"]], template: function UserStatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UserStatsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "user-stats");
      }
    }, dependencies: [
      NgIf,
      UserStatsInfoCardsComponent,
      ReadingActivityComponent,
      StatListComponent,
      AsyncPipe,
      TranslocoModule,
      TranslocoDirective,
      DayBreakdownComponent
    ], styles: ["\n\n.fixed-row[_ngcontent-%COMP%] {\n  height: auto;\n}\n/*# sourceMappingURL=user-stats.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserStatsComponent, { className: "UserStatsComponent", filePath: "src/app/statistics/_components/user-stats/user-stats.component.ts", lineNumber: 34 });
})();
export {
  UserStatsComponent
};
//# sourceMappingURL=user-stats.component-5VP74PEE.js.map
