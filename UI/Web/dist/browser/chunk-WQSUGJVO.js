// src/app/typeahead/_models/selection-model.ts
var SelectionModel = class {
  constructor(selectedState = false, selectedOptions = [], propAccessor = "") {
    this._propAccessor = "";
    this.defaultEqual = (a, b) => {
      if (typeof a === "object" && a !== null && typeof b === "object" && b !== null) {
        return this.shallowEqual(a, b);
      }
      return a === b;
    };
    this._data = [];
    if (propAccessor != void 0 || propAccessor !== "") {
      this._propAccessor = propAccessor;
    }
    selectedOptions.forEach((d) => {
      this._data.push({ value: d, selected: selectedState });
    });
  }
  toggle(data, selectedState, compareFn) {
    const lookupMethod = compareFn || this.defaultEqual;
    const dataItem = this._data.filter((d) => lookupMethod(d.value, data));
    if (dataItem.length > 0) {
      if (selectedState != void 0) {
        dataItem[0].selected = selectedState;
      } else {
        dataItem[0].selected = !dataItem[0].selected;
      }
    } else {
      this._data.push({ value: data, selected: selectedState === void 0 ? true : selectedState });
    }
  }
  isSelected(data, compareFn) {
    const lookupMethod = compareFn || this.defaultEqual;
    const dataItem = this._data.filter((d) => lookupMethod(d.value, data));
    if (dataItem.length > 0) {
      return dataItem[0].selected;
    }
    return false;
  }
  hasSomeSelected() {
    const selectedCount = this._data.filter((d) => d.selected).length;
    return selectedCount !== this._data.length && selectedCount !== 0;
  }
  selected() {
    return this._data.filter((d) => d.selected).map((d) => d.value);
  }
  unselected() {
    return this._data.filter((d) => !d.selected).map((d) => d.value);
  }
  peek() {
    if (this._data.length > 0) {
      return this._data[this._data.length - 1].value;
    }
    return void 0;
  }
  shallowEqual(a, b) {
    for (const key in a) {
      if (!(key in b) || a[key] !== b[key]) {
        return false;
      }
    }
    for (const key in b) {
      if (!(key in a)) {
        return false;
      }
    }
    return true;
  }
};

export {
  SelectionModel
};
//# sourceMappingURL=chunk-WQSUGJVO.js.map
