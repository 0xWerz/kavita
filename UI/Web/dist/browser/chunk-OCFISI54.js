import {
  LooseLeafOrDefaultNumber
} from "./chunk-5C4ZM5AT.js";
import {
  DefaultValuePipe
} from "./chunk-KMTIWVED.js";
import {
  LibraryType,
  UtilityService
} from "./chunk-A6JEQ5GB.js";
import {
  ChangeDetectorRef,
  TranslocoDirective,
  TranslocoModule,
  inject,
  translate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PYHIUVNJ.js";

// src/app/cards/entity-title/entity-title.component.ts
function EntityTitleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "defaultValue");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.renderText), "\n");
  }
}
var EntityTitleComponent = class _EntityTitleComponent {
  constructor() {
    this.utilityService = inject(UtilityService);
    this.cdRef = inject(ChangeDetectorRef);
    this.LooseLeafOrSpecial = LooseLeafOrDefaultNumber + "";
    this.LibraryType = LibraryType;
    this.libraryType = LibraryType.Manga;
    this.includeVolume = false;
    this.includeChapter = false;
    this.prioritizeTitleName = true;
    this.fallbackToVolume = true;
    this.isChapter = false;
    this.titleName = "";
    this.volumeTitle = "";
    this.number = "";
    this.renderText = "";
  }
  ngOnInit() {
    this.isChapter = this.utilityService.isChapter(this.entity);
    if (this.isChapter) {
      const c = this.entity;
      this.volumeTitle = c.volumeTitle || "";
      this.titleName = c.titleName || "";
      this.number = c.range;
    } else {
      const v = this.utilityService.asVolume(this.entity);
      this.volumeTitle = v.name || "";
      this.titleName = v.name || "";
      if (v.chapters[0].titleName) {
        this.titleName += " - " + v.chapters[0].titleName;
      }
      this.number = v.name;
    }
    this.calculateRenderText();
    this.cdRef.markForCheck();
  }
  calculateRenderText() {
    switch (this.libraryType) {
      case LibraryType.Manga:
        this.renderText = this.calculateMangaRenderText();
        break;
      case LibraryType.Comic:
        this.renderText = this.calculateComicRenderText();
        break;
      case LibraryType.Book:
        this.renderText = this.calculateBookRenderText();
        break;
      case LibraryType.Images:
        this.renderText = this.calculateImageRenderText();
        break;
      case LibraryType.LightNovel:
        this.renderText = this.calculateLightNovelRenderText();
        break;
      case LibraryType.ComicVine:
        this.renderText = this.calculateComicRenderText();
        break;
    }
    this.cdRef.markForCheck();
  }
  calculateBookRenderText() {
    let renderText = "";
    if (this.titleName !== "" && this.prioritizeTitleName) {
      renderText = this.titleName;
    } else if (this.fallbackToVolume && this.isChapter) {
      renderText = translate("entity-title.single-volume");
    } else if (this.number === this.LooseLeafOrSpecial) {
      renderText = "";
    } else {
      renderText = translate("entity-title.book-num", { num: this.volumeTitle });
    }
    return renderText;
  }
  calculateLightNovelRenderText() {
    let renderText = "";
    if (this.titleName !== "" && this.prioritizeTitleName) {
      renderText = this.titleName;
    } else if (this.fallbackToVolume && this.isChapter) {
      renderText = translate("entity-title.single-volume");
    } else if (this.number === this.LooseLeafOrSpecial) {
      renderText = "";
    } else {
      const bookNum = this.isChapter ? this.number : this.volumeTitle;
      renderText = translate("entity-title.book-num", { num: bookNum });
    }
    return renderText;
  }
  calculateMangaRenderText() {
    let renderText = "";
    if (this.titleName !== "" && this.prioritizeTitleName) {
      if (this.isChapter && this.includeChapter) {
        if (this.number === this.LooseLeafOrSpecial) {
          renderText = translate("entity-title.chapter") + " - ";
        } else {
          renderText = translate("entity-title.chapter") + " " + this.number + " - ";
        }
      }
      renderText += this.titleName;
    } else {
      if (this.includeVolume && this.volumeTitle !== "") {
        if (this.number !== this.LooseLeafOrSpecial && this.isChapter && this.includeVolume) {
          renderText = this.volumeTitle;
        }
      }
      if (this.number !== this.LooseLeafOrSpecial) {
        if (this.isChapter) {
          renderText = translate("entity-title.chapter") + " " + this.number;
        } else {
          renderText = this.volumeTitle;
        }
      } else if (this.fallbackToVolume && this.isChapter && this.volumeTitle) {
        renderText = translate("entity-title.vol-num", { num: this.volumeTitle });
      } else if (this.fallbackToVolume && this.isChapter) {
        renderText = translate("entity-title.single-volume");
      } else {
        renderText = translate("entity-title.special");
      }
    }
    return renderText;
  }
  calculateImageRenderText() {
    let renderText = "";
    if (this.number !== this.LooseLeafOrSpecial) {
      if (this.isChapter) {
        renderText = translate("entity-title.chapter") + " " + this.number;
      } else {
        renderText = this.volumeTitle;
      }
    } else {
      renderText = translate("entity-title.special");
    }
    return renderText;
  }
  calculateComicRenderText() {
    let renderText = "";
    if (this.titleName && this.prioritizeTitleName) {
      if (this.isChapter && this.includeChapter) {
        renderText = translate("entity-title.issue-num") + " " + this.number + " - ";
      }
      renderText += this.titleName;
    } else {
      if (this.includeVolume && this.volumeTitle) {
        if (this.number !== this.LooseLeafOrSpecial) {
          renderText = this.isChapter ? this.volumeTitle : "";
        }
      }
      renderText += this.number !== this.LooseLeafOrSpecial ? this.isChapter ? translate("entity-title.issue-num") + " " + this.number : this.volumeTitle : translate("entity-title.special");
    }
    return renderText;
  }
  static {
    this.\u0275fac = function EntityTitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EntityTitleComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _EntityTitleComponent, selectors: [["app-entity-title"]], inputs: { libraryType: "libraryType", entity: "entity", includeVolume: "includeVolume", includeChapter: "includeChapter", prioritizeTitleName: "prioritizeTitleName", fallbackToVolume: "fallbackToVolume" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"]], template: function EntityTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EntityTitleComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("translocoRead", "entity-title");
      }
    }, dependencies: [TranslocoModule, TranslocoDirective, DefaultValuePipe], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntityTitleComponent, { className: "EntityTitleComponent", filePath: "src/app/cards/entity-title/entity-title.component.ts", lineNumber: 23 });
})();

export {
  EntityTitleComponent
};
//# sourceMappingURL=chunk-OCFISI54.js.map
