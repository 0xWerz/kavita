import {
  MemberService
} from "./chunk-XZ5MKEYT.js";
import {
  of,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_guards/library-access.guard.ts
var LibraryAccessGuard = class _LibraryAccessGuard {
  constructor(memberService) {
    this.memberService = memberService;
  }
  canActivate(next, state) {
    const libraryId = parseInt(state.url.split("library/")[1], 10);
    if (isNaN(libraryId))
      return of(false);
    return this.memberService.hasLibraryAccess(libraryId);
  }
  static {
    this.\u0275fac = function LibraryAccessGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LibraryAccessGuard)(\u0275\u0275inject(MemberService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _LibraryAccessGuard, factory: _LibraryAccessGuard.\u0275fac, providedIn: "root" });
  }
};

export {
  LibraryAccessGuard
};
//# sourceMappingURL=chunk-HY4ACD33.js.map
