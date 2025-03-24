// src/app/shared/data-structures/stack.ts
var Stack = class {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return void 0;
  }
  pop() {
    if (this.isEmpty()) {
      return void 0;
    }
    return this.items.pop();
  }
  push(item) {
    this.items.push(item);
  }
};

export {
  Stack
};
//# sourceMappingURL=chunk-JGJJUNHA.js.map
