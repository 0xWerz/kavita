// src/app/_models/preferences/pdf-theme.ts
var PdfTheme;
(function(PdfTheme2) {
  PdfTheme2[PdfTheme2["Dark"] = 0] = "Dark";
  PdfTheme2[PdfTheme2["Light"] = 1] = "Light";
})(PdfTheme || (PdfTheme = {}));

// src/app/_models/preferences/pdf-scroll-mode.ts
var PdfScrollMode;
(function(PdfScrollMode2) {
  PdfScrollMode2[PdfScrollMode2["Vertical"] = 0] = "Vertical";
  PdfScrollMode2[PdfScrollMode2["Horizontal"] = 1] = "Horizontal";
  PdfScrollMode2[PdfScrollMode2["Wrapped"] = 2] = "Wrapped";
  PdfScrollMode2[PdfScrollMode2["Page"] = 3] = "Page";
})(PdfScrollMode || (PdfScrollMode = {}));

// src/app/_models/preferences/pdf-spread-mode.ts
var PdfSpreadMode;
(function(PdfSpreadMode2) {
  PdfSpreadMode2[PdfSpreadMode2["None"] = 0] = "None";
  PdfSpreadMode2[PdfSpreadMode2["Odd"] = 1] = "Odd";
  PdfSpreadMode2[PdfSpreadMode2["Even"] = 2] = "Even";
})(PdfSpreadMode || (PdfSpreadMode = {}));

// src/app/_models/preferences/pdf-layout-mode.ts
var PdfLayoutMode;
(function(PdfLayoutMode2) {
  PdfLayoutMode2[PdfLayoutMode2["Multiple"] = 0] = "Multiple";
  PdfLayoutMode2[PdfLayoutMode2["Single"] = 1] = "Single";
  PdfLayoutMode2[PdfLayoutMode2["Book"] = 2] = "Book";
  PdfLayoutMode2[PdfLayoutMode2["InfiniteScroll"] = 3] = "InfiniteScroll";
})(PdfLayoutMode || (PdfLayoutMode = {}));

export {
  PdfTheme,
  PdfScrollMode,
  PdfLayoutMode,
  PdfSpreadMode
};
//# sourceMappingURL=chunk-FAV3BSNY.js.map
