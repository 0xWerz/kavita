import {
  AccountService,
  Router
} from "./chunk-U2DWQJI2.js";
import {
  ToastrService
} from "./chunk-5J5IKBMT.js";
import {
  TranslocoService,
  map,
  take,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor(accountService, router, toastr, translocoService) {
    this.accountService = accountService;
    this.router = router;
    this.toastr = toastr;
    this.translocoService = translocoService;
    this.urlKey = "kavita--auth-intersection-url";
  }
  canActivate() {
    return this.accountService.currentUser$.pipe(take(1), map((user) => {
      if (user) {
        return true;
      }
      localStorage.setItem(this.urlKey, window.location.pathname);
      this.router.navigateByUrl("/login");
      return false;
    }));
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AccountService), \u0275\u0275inject(Router), \u0275\u0275inject(ToastrService), \u0275\u0275inject(TranslocoService));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthGuard
};
//# sourceMappingURL=chunk-3KO4NMBD.js.map
