import {
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-PYHIUVNJ.js";

// src/app/_directives/enter-blur.directive.ts
var EnterBlurDirective = class _EnterBlurDirective {
  onEnter(event) {
    event.preventDefault();
    document.body.click();
  }
  static {
    this.\u0275fac = function EnterBlurDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnterBlurDirective)();
    };
  }
  static {
    this.\u0275dir = \u0275\u0275defineDirective({ type: _EnterBlurDirective, selectors: [["", "appEnterBlur", ""]], hostBindings: function EnterBlurDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.enter", function EnterBlurDirective_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnter($event);
        });
      }
    }, standalone: true });
  }
};

export {
  EnterBlurDirective
};
//# sourceMappingURL=chunk-CGYVF6ML.js.map
