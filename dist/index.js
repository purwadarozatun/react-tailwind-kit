var React = require('react');
var reactHookForm = require('react-hook-form');

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;

  var _React$useState = React.useState(0),
      count = _React$useState[0],
      setCount = _React$useState[1];

  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text, " ", count, React.createElement("button", {
    onClick: function onClick() {
      setCount(count + 1);
    }
  }, "CLICK"));
};
var ReactTable = function ReactTable() {
  var _useForm = reactHookForm.useForm(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  console.log(watch("example"));
  return React.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, React.createElement("input", Object.assign({
    defaultValue: "test"
  }, register("example"))), React.createElement("input", Object.assign({}, register("exampleRequired", {
    required: true
  }))), errors.exampleRequired && React.createElement("span", null, "This field is required"), React.createElement("input", {
    type: "submit"
  }));
};

exports.ExampleComponent = ExampleComponent;
exports.ReactTable = ReactTable;
//# sourceMappingURL=index.js.map
