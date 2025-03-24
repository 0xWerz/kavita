import {
  EventEmitter,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-PYHIUVNJ.js";

// src/app/_single-module/table/_directives/sortable-header.directive.ts
var compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
var rotate = { asc: "desc", desc: "asc", "": "asc" };
var SortableHeader = class _SortableHeader {
  constructor() {
    this.sortable = "";
    this.direction = "";
    this.sort = new EventEmitter();
  }
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
  static {
    this.\u0275fac = function SortableHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SortableHeader)();
    };
  }
  static {
    this.\u0275dir = \u0275\u0275defineDirective({ type: _SortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function SortableHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function SortableHeader_click_HostBindingHandler() {
          return ctx.rotate();
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
      }
    }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" }, standalone: true });
  }
};

export {
  compare,
  SortableHeader
};
//# sourceMappingURL=chunk-EENYA2ZI.js.map
