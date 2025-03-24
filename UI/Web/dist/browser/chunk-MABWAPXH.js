import {
  CommonModule,
  NgClass,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction3
} from "./chunk-PYHIUVNJ.js";

// src/app/shared/tag-badge/tag-badge.component.ts
var _c0 = ["*"];
var _c1 = (a0, a1, a2) => ({ "selectable-cursor": a0, "not-allowed-cursor": a1, "clickable-cursor": a2 });
var TagBadgeCursor;
(function(TagBadgeCursor2) {
  TagBadgeCursor2[TagBadgeCursor2["Selectable"] = 0] = "Selectable";
  TagBadgeCursor2[TagBadgeCursor2["Clickable"] = 1] = "Clickable";
  TagBadgeCursor2[TagBadgeCursor2["NotAllowed"] = 2] = "NotAllowed";
})(TagBadgeCursor || (TagBadgeCursor = {}));
var TagBadgeComponent = class _TagBadgeComponent {
  constructor() {
    this.selectionMode = TagBadgeCursor.Selectable;
    this.fillStyle = "outline";
  }
  get TagBadgeCursor() {
    return TagBadgeCursor;
  }
  static {
    this.\u0275fac = function TagBadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TagBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _TagBadgeComponent, selectors: [["app-tag-badge"]], inputs: { selectionMode: "selectionMode", fillStyle: "fillStyle" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 2, vars: 8, consts: [[3, "ngClass"]], template: function TagBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMapInterpolate1("tagbadge ", ctx.fillStyle, "");
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(4, _c1, ctx.selectionMode === ctx.TagBadgeCursor.Selectable, ctx.selectionMode === ctx.TagBadgeCursor.NotAllowed, ctx.selectionMode === ctx.TagBadgeCursor.Clickable));
      }
    }, dependencies: [CommonModule, NgClass], styles: ["\n\n.tagbadge[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-out;\n  margin: 3px 5px 3px 0px;\n  padding: 2px 10px;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  display: inline-block;\n  cursor: default;\n  width: auto;\n}\n.tagbadge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin-right: 0px;\n  cursor: pointer;\n}\n.selectable-cursor[_ngcontent-%COMP%] {\n  cursor: text !important;\n}\n.selectable-cursor[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: text !important;\n}\n.not-allowed-cursor[_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.not-allowed-cursor[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n.clickable-cursor[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n.clickable-cursor[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n.filled[_ngcontent-%COMP%] {\n  border: 1px solid var(--tagbadge-filled-border-color);\n  color: var(--tagbadge-filled-text-color);\n  background-color: var(--tagbadge-filled-bg-color);\n}\n.outline[_ngcontent-%COMP%] {\n  border: 1px solid var(--tagbadge-border-color);\n  color: var(--tagbadge-text-color);\n  background-color: var(--tagbadge-bg-color);\n}\n/*# sourceMappingURL=tag-badge.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TagBadgeComponent, { className: "TagBadgeComponent", filePath: "src/app/shared/tag-badge/tag-badge.component.ts", lineNumber: 33 });
})();

export {
  TagBadgeCursor,
  TagBadgeComponent
};
//# sourceMappingURL=chunk-MABWAPXH.js.map
