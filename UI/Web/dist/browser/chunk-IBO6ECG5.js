import {
  QueryContext
} from "./chunk-BX5PUGWH.js";
import {
  MangaFormat
} from "./chunk-RSMGJKYW.js";
import {
  TextResonse
} from "./chunk-BPOUBDX2.js";
import {
  HttpClient,
  environment
} from "./chunk-CQADFT7F.js";
import {
  of,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PYHIUVNJ.js";

// src/app/_models/metadata/person.ts
var PersonRole;
(function(PersonRole2) {
  PersonRole2[PersonRole2["Other"] = 1] = "Other";
  PersonRole2[PersonRole2["Artist"] = 2] = "Artist";
  PersonRole2[PersonRole2["Writer"] = 3] = "Writer";
  PersonRole2[PersonRole2["Penciller"] = 4] = "Penciller";
  PersonRole2[PersonRole2["Inker"] = 5] = "Inker";
  PersonRole2[PersonRole2["Colorist"] = 6] = "Colorist";
  PersonRole2[PersonRole2["Letterer"] = 7] = "Letterer";
  PersonRole2[PersonRole2["CoverArtist"] = 8] = "CoverArtist";
  PersonRole2[PersonRole2["Editor"] = 9] = "Editor";
  PersonRole2[PersonRole2["Publisher"] = 10] = "Publisher";
  PersonRole2[PersonRole2["Character"] = 11] = "Character";
  PersonRole2[PersonRole2["Translator"] = 12] = "Translator";
  PersonRole2[PersonRole2["Imprint"] = 13] = "Imprint";
  PersonRole2[PersonRole2["Team"] = 14] = "Team";
  PersonRole2[PersonRole2["Location"] = 15] = "Location";
})(PersonRole || (PersonRole = {}));

// src/app/_models/metadata/v2/filter-comparison.ts
var FilterComparison;
(function(FilterComparison2) {
  FilterComparison2[FilterComparison2["Equal"] = 0] = "Equal";
  FilterComparison2[FilterComparison2["GreaterThan"] = 1] = "GreaterThan";
  FilterComparison2[FilterComparison2["GreaterThanEqual"] = 2] = "GreaterThanEqual";
  FilterComparison2[FilterComparison2["LessThan"] = 3] = "LessThan";
  FilterComparison2[FilterComparison2["LessThanEqual"] = 4] = "LessThanEqual";
  FilterComparison2[FilterComparison2["Contains"] = 5] = "Contains";
  FilterComparison2[FilterComparison2["MustContains"] = 6] = "MustContains";
  FilterComparison2[FilterComparison2["Matches"] = 7] = "Matches";
  FilterComparison2[FilterComparison2["NotContains"] = 8] = "NotContains";
  FilterComparison2[FilterComparison2["NotEqual"] = 9] = "NotEqual";
  FilterComparison2[FilterComparison2["BeginsWith"] = 10] = "BeginsWith";
  FilterComparison2[FilterComparison2["EndsWith"] = 11] = "EndsWith";
  FilterComparison2[FilterComparison2["IsBefore"] = 12] = "IsBefore";
  FilterComparison2[FilterComparison2["IsAfter"] = 13] = "IsAfter";
  FilterComparison2[FilterComparison2["IsInLast"] = 14] = "IsInLast";
  FilterComparison2[FilterComparison2["IsNotInLast"] = 15] = "IsNotInLast";
  FilterComparison2[FilterComparison2["IsEmpty"] = 16] = "IsEmpty";
})(FilterComparison || (FilterComparison = {}));

// src/app/_models/metadata/v2/filter-field.ts
var FilterField;
(function(FilterField2) {
  FilterField2[FilterField2["None"] = -1] = "None";
  FilterField2[FilterField2["Summary"] = 0] = "Summary";
  FilterField2[FilterField2["SeriesName"] = 1] = "SeriesName";
  FilterField2[FilterField2["PublicationStatus"] = 2] = "PublicationStatus";
  FilterField2[FilterField2["Languages"] = 3] = "Languages";
  FilterField2[FilterField2["AgeRating"] = 4] = "AgeRating";
  FilterField2[FilterField2["UserRating"] = 5] = "UserRating";
  FilterField2[FilterField2["Tags"] = 6] = "Tags";
  FilterField2[FilterField2["CollectionTags"] = 7] = "CollectionTags";
  FilterField2[FilterField2["Translators"] = 8] = "Translators";
  FilterField2[FilterField2["Characters"] = 9] = "Characters";
  FilterField2[FilterField2["Publisher"] = 10] = "Publisher";
  FilterField2[FilterField2["Editor"] = 11] = "Editor";
  FilterField2[FilterField2["CoverArtist"] = 12] = "CoverArtist";
  FilterField2[FilterField2["Letterer"] = 13] = "Letterer";
  FilterField2[FilterField2["Colorist"] = 14] = "Colorist";
  FilterField2[FilterField2["Inker"] = 15] = "Inker";
  FilterField2[FilterField2["Penciller"] = 16] = "Penciller";
  FilterField2[FilterField2["Writers"] = 17] = "Writers";
  FilterField2[FilterField2["Genres"] = 18] = "Genres";
  FilterField2[FilterField2["Libraries"] = 19] = "Libraries";
  FilterField2[FilterField2["ReadProgress"] = 20] = "ReadProgress";
  FilterField2[FilterField2["Formats"] = 21] = "Formats";
  FilterField2[FilterField2["ReleaseYear"] = 22] = "ReleaseYear";
  FilterField2[FilterField2["ReadTime"] = 23] = "ReadTime";
  FilterField2[FilterField2["Path"] = 24] = "Path";
  FilterField2[FilterField2["FilePath"] = 25] = "FilePath";
  FilterField2[FilterField2["WantToRead"] = 26] = "WantToRead";
  FilterField2[FilterField2["ReadingDate"] = 27] = "ReadingDate";
  FilterField2[FilterField2["AverageRating"] = 28] = "AverageRating";
  FilterField2[FilterField2["Imprint"] = 29] = "Imprint";
  FilterField2[FilterField2["Team"] = 30] = "Team";
  FilterField2[FilterField2["Location"] = 31] = "Location";
  FilterField2[FilterField2["ReadLast"] = 32] = "ReadLast";
})(FilterField || (FilterField = {}));
var enumArray = Object.keys(FilterField).filter((key) => !isNaN(Number(key)) && parseInt(key, 10) >= 0).map((key) => {
  return { key, value: FilterField[key] };
});
enumArray.sort((a, b) => a.value.localeCompare(b.value));
var allFields = enumArray.map((key) => parseInt(key.key, 10));
var allPeople = [
  FilterField.Characters,
  FilterField.Colorist,
  FilterField.CoverArtist,
  FilterField.Editor,
  FilterField.Inker,
  FilterField.Letterer,
  FilterField.Penciller,
  FilterField.Publisher,
  FilterField.Translators,
  FilterField.Writers
];
var personRoleForFilterField = (role) => {
  switch (role) {
    case PersonRole.Artist:
      return FilterField.CoverArtist;
    case PersonRole.Character:
      return FilterField.Characters;
    case PersonRole.Colorist:
      return FilterField.Colorist;
    case PersonRole.CoverArtist:
      return FilterField.CoverArtist;
    case PersonRole.Editor:
      return FilterField.Editor;
    case PersonRole.Inker:
      return FilterField.Inker;
    case PersonRole.Letterer:
      return FilterField.Letterer;
    case PersonRole.Penciller:
      return FilterField.Penciller;
    case PersonRole.Publisher:
      return FilterField.Publisher;
    case PersonRole.Translator:
      return FilterField.Translators;
    case PersonRole.Writer:
      return FilterField.Writers;
    case PersonRole.Imprint:
      return FilterField.Imprint;
    case PersonRole.Location:
      return FilterField.Location;
    case PersonRole.Team:
      return FilterField.Team;
    case PersonRole.Other:
      return FilterField.None;
  }
};

// src/app/_models/metadata/series-filter.ts
var SortField;
(function(SortField2) {
  SortField2[SortField2["SortName"] = 1] = "SortName";
  SortField2[SortField2["Created"] = 2] = "Created";
  SortField2[SortField2["LastModified"] = 3] = "LastModified";
  SortField2[SortField2["LastChapterAdded"] = 4] = "LastChapterAdded";
  SortField2[SortField2["TimeToRead"] = 5] = "TimeToRead";
  SortField2[SortField2["ReleaseYear"] = 6] = "ReleaseYear";
  SortField2[SortField2["ReadProgress"] = 7] = "ReadProgress";
  SortField2[SortField2["AverageRating"] = 8] = "AverageRating";
  SortField2[SortField2["Random"] = 9] = "Random";
})(SortField || (SortField = {}));
var allSortFields = Object.keys(SortField).filter((key) => !isNaN(Number(key)) && parseInt(key, 10) >= 0).map((key) => parseInt(key, 10));
var mangaFormatFilters = [
  {
    title: "Images",
    value: MangaFormat.IMAGE,
    selected: false
  },
  {
    title: "EPUB",
    value: MangaFormat.EPUB,
    selected: false
  },
  {
    title: "PDF",
    value: MangaFormat.PDF,
    selected: false
  },
  {
    title: "ARCHIVE",
    value: MangaFormat.ARCHIVE,
    selected: false
  }
];

// src/app/_models/metadata/v2/filter-combination.ts
var FilterCombination;
(function(FilterCombination2) {
  FilterCombination2[FilterCombination2["Or"] = 0] = "Or";
  FilterCombination2[FilterCombination2["And"] = 1] = "And";
})(FilterCombination || (FilterCombination = {}));

// src/app/_services/metadata.service.ts
var MetadataService = class _MetadataService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = environment.apiUrl;
    this.validLanguages = [];
  }
  getSeriesMetadataFromPlus(seriesId, libraryType) {
    return this.httpClient.get(this.baseUrl + "metadata/series-detail-plus?seriesId=" + seriesId + "&libraryType=" + libraryType);
  }
  forceRefreshFromPlus(seriesId) {
    return this.httpClient.post(this.baseUrl + "metadata/force-refresh?seriesId=" + seriesId, {});
  }
  getAllAgeRatings(libraries) {
    let method = "metadata/age-ratings";
    if (libraries != void 0 && libraries.length > 0) {
      method += "?libraryIds=" + libraries.join(",");
    }
    return this.httpClient.get(this.baseUrl + method);
  }
  getAllPublicationStatus(libraries) {
    let method = "metadata/publication-status";
    if (libraries != void 0 && libraries.length > 0) {
      method += "?libraryIds=" + libraries.join(",");
    }
    return this.httpClient.get(this.baseUrl + method);
  }
  getAllTags(libraries) {
    let method = "metadata/tags";
    if (libraries != void 0 && libraries.length > 0) {
      method += "?libraryIds=" + libraries.join(",");
    }
    return this.httpClient.get(this.baseUrl + method);
  }
  getAllGenres(libraries, context = QueryContext.None) {
    let method = "metadata/genres";
    if (libraries != void 0 && libraries.length > 0) {
      method += "?libraryIds=" + libraries.join(",") + "&context=" + context;
    } else {
      method += "?context=" + context;
    }
    return this.httpClient.get(this.baseUrl + method);
  }
  getAllLanguages(libraries) {
    let method = "metadata/languages";
    if (libraries != void 0 && libraries.length > 0) {
      method += "?libraryIds=" + libraries.join(",");
    }
    return this.httpClient.get(this.baseUrl + method);
  }
  getLanguageNameForCode(code) {
    return this.httpClient.get(`${this.baseUrl}metadata/language-title?code=${code}`, TextResonse);
  }
  getAllValidLanguages() {
    if (this.validLanguages != void 0 && this.validLanguages.length > 0) {
      return of(this.validLanguages);
    }
    return this.httpClient.get(this.baseUrl + "metadata/all-languages").pipe(tap((l) => this.validLanguages = l));
  }
  getAllPeople(libraries) {
    let method = "metadata/people";
    if (libraries != void 0 && libraries.length > 0) {
      method += "?libraryIds=" + libraries.join(",");
    }
    return this.httpClient.get(this.baseUrl + method);
  }
  getAllPeopleByRole(role) {
    return this.httpClient.get(this.baseUrl + "metadata/people-by-role?role=" + role);
  }
  createDefaultFilterDto() {
    return {
      statements: [],
      combination: FilterCombination.And,
      limitTo: 0,
      sortOptions: {
        isAscending: true,
        sortField: SortField.SortName
      }
    };
  }
  createDefaultFilterStatement(field = FilterField.SeriesName, comparison = FilterComparison.Equal, value = "") {
    return {
      comparison,
      field,
      value
    };
  }
  updateFilter(arr, index, filterStmt) {
    arr[index].comparison = filterStmt.comparison;
    arr[index].field = filterStmt.field;
    arr[index].value = filterStmt.value ? filterStmt.value + "" : "";
  }
  updatePerson(entity, persons, role) {
    switch (role) {
      case PersonRole.Other:
        break;
      case PersonRole.Artist:
        break;
      case PersonRole.CoverArtist:
        entity.coverArtists = persons;
        break;
      case PersonRole.Character:
        entity.characters = persons;
        break;
      case PersonRole.Colorist:
        entity.colorists = persons;
        break;
      case PersonRole.Editor:
        entity.editors = persons;
        break;
      case PersonRole.Inker:
        entity.inkers = persons;
        break;
      case PersonRole.Letterer:
        entity.letterers = persons;
        break;
      case PersonRole.Penciller:
        entity.pencillers = persons;
        break;
      case PersonRole.Publisher:
        entity.publishers = persons;
        break;
      case PersonRole.Imprint:
        entity.imprints = persons;
        break;
      case PersonRole.Team:
        entity.teams = persons;
        break;
      case PersonRole.Location:
        entity.locations = persons;
        break;
      case PersonRole.Writer:
        entity.writers = persons;
        break;
      case PersonRole.Translator:
        entity.translators = persons;
        break;
    }
  }
  static {
    this.\u0275fac = function MetadataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetadataService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = \u0275\u0275defineInjectable({ token: _MetadataService, factory: _MetadataService.\u0275fac, providedIn: "root" });
  }
};

export {
  PersonRole,
  SortField,
  allSortFields,
  mangaFormatFilters,
  FilterComparison,
  FilterField,
  allFields,
  allPeople,
  personRoleForFilterField,
  FilterCombination,
  MetadataService
};
//# sourceMappingURL=chunk-IBO6ECG5.js.map
