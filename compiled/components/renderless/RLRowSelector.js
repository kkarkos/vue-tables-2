"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLRowSelector',
  inject: ['opts', 'theme', 'colspan', 'slots', 'toggleRowSelection', 'isRowSelected', 'componentsOverride', 'row', 'index', 'page', 'limit'],
  render: function render() {
    return this.$scopedSlots["default"]({
      tdClass: this.theme.td,
      mode: this.opts().selectable.mode,
      type: this.opts().selectable.mode === 'single' ? 'radio' : 'checkbox',
      row: this.row(),
      index: this.index() - (this.page() - 1) * this.limit(),
      toggleRow: this.toggleRowSelection,
      selected: this.isRowSelected(this.row()),
      disabled: this.opts().selectable.only && !this.opts().selectable.only(this.row()),
      override: this.componentsOverride.rowSelector
    });
  }
};
exports["default"] = _default;