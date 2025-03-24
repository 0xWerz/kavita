import {
  PersonRole
} from "./chunk-IBO6ECG5.js";
import {
  translate,
  ɵɵdefinePipe
} from "./chunk-PYHIUVNJ.js";

// src/app/_pipes/person-role.pipe.ts
var PersonRolePipe = class _PersonRolePipe {
  transform(value) {
    switch (value) {
      case PersonRole.Artist:
        return translate("person-role-pipe.artist");
      case PersonRole.Character:
        return translate("person-role-pipe.character");
      case PersonRole.Colorist:
        return translate("person-role-pipe.colorist");
      case PersonRole.CoverArtist:
        return translate("person-role-pipe.artist");
      case PersonRole.Editor:
        return translate("person-role-pipe.editor");
      case PersonRole.Inker:
        return translate("person-role-pipe.inker");
      case PersonRole.Letterer:
        return translate("person-role-pipe.letterer");
      case PersonRole.Penciller:
        return translate("person-role-pipe.penciller");
      case PersonRole.Publisher:
        return translate("person-role-pipe.publisher");
      case PersonRole.Imprint:
        return translate("person-role-pipe.imprint");
      case PersonRole.Writer:
        return translate("person-role-pipe.writer");
      case PersonRole.Team:
        return translate("person-role-pipe.team");
      case PersonRole.Location:
        return translate("person-role-pipe.location");
      case PersonRole.Translator:
        return translate("person-role-pipe.translator");
      case PersonRole.Other:
        return translate("person-role-pipe.other");
      default:
        return "";
    }
  }
  static {
    this.\u0275fac = function PersonRolePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonRolePipe)();
    };
  }
  static {
    this.\u0275pipe = \u0275\u0275definePipe({ name: "personRole", type: _PersonRolePipe, pure: true, standalone: true });
  }
};

export {
  PersonRolePipe
};
//# sourceMappingURL=chunk-JP4GUTMJ.js.map
