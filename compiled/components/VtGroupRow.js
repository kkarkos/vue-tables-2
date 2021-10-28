"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RLGroupRow = _interopRequireDefault(require("./renderless/RLGroupRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtGroupRow',
  components: {
    RLGroupRow: _RLGroupRow["default"]
  },
  props: ['level', 'value'],
  render: function render() {
    var h = arguments[0];
    return h("r-l-group-row", {
      attrs: {
        level: this.level,
        value: this.value
      },
      scopedSlots: {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : h("tr", {
            "class": "VueTables__group-row VueTables__group-row--".concat(props.level),
            on: {
              "click": props.toggleGroupDirection
            }
          }, [h("td", {
            attrs: {
              colspan: props.colspan
            }
          }, [props.canToggleGroup ? h("button", {
            "class": props.theme.button,
            on: {
              "click": props.toggleGroup.bind(this, props.groupValue)
            }
          }, [props.groupValue, h("span", {
            "class": "VueTables__group-toggler ".concat(props.groupToggleIcon(props.groupValue))
          })]) : '', !props.canToggleGroup ? h("span", [props.groupValue]) : '', props.slot])]);
        }
      }
    });
  }
};
exports["default"] = _default2;