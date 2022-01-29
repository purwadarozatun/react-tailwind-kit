import { useState, createElement } from 'react';
import { useForm } from 'react-hook-form';

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;

  var _React$useState = useState(0),
      count = _React$useState[0],
      setCount = _React$useState[1];

  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text, " ", count, createElement("button", {
    onClick: function onClick() {
      setCount(count + 1);
    }
  }, "CLICK"));
};
var ReactTable = function ReactTable() {
  var _useForm = useForm(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  console.log(watch("example"));
  return createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, createElement("input", Object.assign({
    defaultValue: "test"
  }, register("example"))), createElement("input", Object.assign({}, register("exampleRequired", {
    required: true
  }))), errors.exampleRequired && createElement("span", null, "This field is required"), createElement("input", {
    type: "submit"
  }));
};

export { ExampleComponent, ReactTable };
//# sourceMappingURL=index.modern.js.map
