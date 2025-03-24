import {
  ImageComponent
} from "./chunk-2JLAQ3MZ.js";
import {
  ImageService
} from "./chunk-TPURWX2Y.js";
import {
  RouterLink
} from "./chunk-U2DWQJI2.js";
import {
  ChangeDetectorRef,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PYHIUVNJ.js";

// src/app/shared/person-badge/person-badge.component.ts
var _c0 = () => ({ "object-position": "top" });
function PersonBadgeComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styles", \u0275\u0275pureFunction0(3, _c0))("imageUrl", ctx_r0.ImageUrl)("errorImage", ctx_r0.imageService.noPersonImage);
  }
}
function PersonBadgeComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 5);
  }
}
function PersonBadgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275template(4, PersonBadgeComponent_Conditional_0_Conditional_4_Template, 1, 4, "app-image", 4)(5, PersonBadgeComponent_Conditional_0_Conditional_5_Template, 1, 0, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate1("routerLink", "/person/", ctx_r0.encodeURIComponent(ctx_r0.person.name), "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.HasCoverImage ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.person.name);
  }
}
var PersonBadgeComponent = class _PersonBadgeComponent {
  constructor() {
    this.imageService = inject(ImageService);
    this.cdRef = inject(ChangeDetectorRef);
    this.isStaff = false;
    this.encodeURIComponent = encodeURIComponent;
  }
  get HasCoverImage() {
    return this.isStaff || this.person.coverImage;
  }
  get ImageUrl() {
    if (this.isStaff && this.staff.imageUrl && !this.staff.imageUrl.endsWith("default.jpg")) {
      return this.person.imageUrl || "";
    }
    return this.imageService.getPersonImage(this.person.id);
  }
  ngOnInit() {
    this.staff = this.person;
    this.cdRef.markForCheck();
  }
  static {
    this.\u0275fac = function PersonBadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = \u0275\u0275defineComponent({ type: _PersonBadgeComponent, selectors: [["app-person-badge"]], inputs: { person: "person", isStaff: "isStaff" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "btn", "btn-icon", "p-0", 3, "routerLink"], [1, "tagbadge", "cursor", "clickable"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "image-container", "d-flex", "align-items-center", "justify-content-center"], ["objectFit", "cover", "height", "96px", "width", "96px", 3, "styles", "imageUrl", "errorImage"], ["aria-hidden", "true", 1, "fas", "fa-user"], [1, "flex-grow-1", "text-center", "mt-2"], [1, "mt-1", "mb-0"]], template: function PersonBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PersonBadgeComponent_Conditional_0_Template, 9, 4, "a", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.person !== void 0 ? 0 : -1);
      }
    }, dependencies: [ImageComponent, RouterLink], styles: ["\n\n.tagbadge[_ngcontent-%COMP%] {\n  background-color: var(--tagbadge-bg-color);\n  transition: all 0.3s ease-out;\n  margin: 3px 10px 3px 0px;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  display: inline-block;\n  cursor: pointer;\n  width: 96px;\n  word-break: break-word;\n}\n.tagbadge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  max-height: 48px;\n  height: 48px;\n  width: 48px;\n  font-size: 2.96rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n.tagbadge[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  background: var(--card-bg-color);\n  max-height: 96px;\n  height: 96px;\n  width: 96px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=person-badge.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonBadgeComponent, { className: "PersonBadgeComponent", filePath: "src/app/shared/person-badge/person-badge.component.ts", lineNumber: 17 });
})();

export {
  PersonBadgeComponent
};
//# sourceMappingURL=chunk-YFCV4WCV.js.map
