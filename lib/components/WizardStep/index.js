'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var WizardStep = function WizardStep(_ref) {
  var stepList = _ref.stepList,
      maxStep = _ref.maxStep,
      currentStep = _ref.currentStep,
      currentIndex = _ref.currentIndex,
      generateStepClass = _ref.generateStepClass,
      goToStep = _ref.goToStep,
      decreaseStep = _ref.decreaseStep,
      increaseStep = _ref.increaseStep,
      doneStep = _ref.doneStep,
      afterDoneComponent = _ref.afterDoneComponent,
      isDone = _ref.isDone,
      isShowStepBar = _ref.isShowStepBar,
      isShowNumber = _ref.isShowNumber;

  var previousBtn = _react2.default.createElement(
    'a',
    { className: 'button button-previous', onClick: function onClick() {
        return decreaseStep();
      } },
    'Previous'
  );
  var nextBtn = _react2.default.createElement(
    'a',
    { className: 'button button-next', onClick: function onClick() {
        return increaseStep(stepList[currentIndex - 1].handler);
      } },
    'Next'
  );
  var doneBtn = _react2.default.createElement(
    'a',
    { className: 'button button-done', onClick: function onClick() {
        return doneStep(stepList[stepList.length - 1].handler);
      } },
    'Done'
  );
  var stepBar = _react2.default.createElement(
    'ul',
    { className: 'step-progress' },
    [].concat(_toConsumableArray(Array(maxStep))).map(function (item, i) {
      return _react2.default.createElement(
        'li',
        {
          key: i,
          className: 'step ' + generateStepClass(i + 1),
          onClick: function onClick() {
            return goToStep(i + 1);
          }
        },
        i + 1
      );
    })
  );
  var stepNumber = _react2.default.createElement(
    'div',
    { className: 'step-display' },
    currentStep,
    ' / ',
    maxStep
  );

  return _react2.default.createElement(
    'div',
    { className: 'step-container' },
    !isDone || !afterDoneComponent ? _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'p',
        { className: 'step-title' },
        stepList.length ? stepList[currentIndex - 1].title : ''
      ),
      _react2.default.createElement(
        'p',
        { className: 'step-sub-title' },
        stepList.length ? stepList[currentIndex - 1].subTitle : ''
      ),
      isShowStepBar ? stepBar : null,
      _react2.default.createElement(
        'div',
        { className: 'step-content' },
        stepList.length ? stepList[currentIndex - 1].component : null
      ),
      _react2.default.createElement(
        'div',
        { className: 'step-footer' },
        isShowNumber ? stepNumber : null,
        _react2.default.createElement(
          'div',
          { className: 'step-btn-group' },
          currentStep > 1 ? previousBtn : null,
          currentStep < maxStep ? nextBtn : doneBtn
        )
      )
    ) : afterDoneComponent
  );
};

WizardStep.propTypes = {
  stepList: _propTypes2.default.arrayOf(_react2.default.PropTypes.shape({
    title: _propTypes2.default.string,
    subTitle: _propTypes2.default.string,
    component: _propTypes2.default.any,
    handler: _propTypes2.default.func,
    isSub: _propTypes2.default.bool,
    maxSubStep: _propTypes2.default.number,
    step: _propTypes2.default.number,
    subStep: _propTypes2.default.number
  })),
  maxStep: _propTypes2.default.number,
  currentStep: _propTypes2.default.number,
  currentIndex: _propTypes2.default.number,
  generateStepClass: _propTypes2.default.func,
  goToStep: _propTypes2.default.func,
  decreaseStep: _propTypes2.default.func,
  increaseStep: _propTypes2.default.func,
  doneStep: _propTypes2.default.func,
  afterDoneComponent: _propTypes2.default.any,
  isDone: _propTypes2.default.bool,
  isShowStepBar: _propTypes2.default.bool,
  isShowNumber: _propTypes2.default.bool
};

exports.default = WizardStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dpemFyZFN0ZXAvaW5kZXguanMiXSwibmFtZXMiOlsiV2l6YXJkU3RlcCIsInN0ZXBMaXN0IiwibWF4U3RlcCIsImN1cnJlbnRTdGVwIiwiY3VycmVudEluZGV4IiwiZ2VuZXJhdGVTdGVwQ2xhc3MiLCJnb1RvU3RlcCIsImRlY3JlYXNlU3RlcCIsImluY3JlYXNlU3RlcCIsImRvbmVTdGVwIiwiYWZ0ZXJEb25lQ29tcG9uZW50IiwiaXNEb25lIiwiaXNTaG93U3RlcEJhciIsImlzU2hvd051bWJlciIsInByZXZpb3VzQnRuIiwibmV4dEJ0biIsImhhbmRsZXIiLCJkb25lQnRuIiwibGVuZ3RoIiwic3RlcEJhciIsIkFycmF5IiwibWFwIiwiaXRlbSIsImkiLCJzdGVwTnVtYmVyIiwidGl0bGUiLCJzdWJUaXRsZSIsImNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImFueSIsImZ1bmMiLCJpc1N1YiIsImJvb2wiLCJtYXhTdWJTdGVwIiwibnVtYmVyIiwic3RlcCIsInN1YlN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLE9BY2I7QUFBQSxNQWJKQyxRQWFJLFFBYkpBLFFBYUk7QUFBQSxNQVpKQyxPQVlJLFFBWkpBLE9BWUk7QUFBQSxNQVhKQyxXQVdJLFFBWEpBLFdBV0k7QUFBQSxNQVZKQyxZQVVJLFFBVkpBLFlBVUk7QUFBQSxNQVRKQyxpQkFTSSxRQVRKQSxpQkFTSTtBQUFBLE1BUkpDLFFBUUksUUFSSkEsUUFRSTtBQUFBLE1BUEpDLFlBT0ksUUFQSkEsWUFPSTtBQUFBLE1BTkpDLFlBTUksUUFOSkEsWUFNSTtBQUFBLE1BTEpDLFFBS0ksUUFMSkEsUUFLSTtBQUFBLE1BSkpDLGtCQUlJLFFBSkpBLGtCQUlJO0FBQUEsTUFISkMsTUFHSSxRQUhKQSxN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QUFhLG9CQUFVbUMsTUFaRjtBQWFyQmxDLGdCQUFjLG9CQUFVa0MsTUFiSDtBQWNyQmpDLHFCQUFtQixvQkFBVTZCLElBZFI7QUFlckI1QixZQUFVLG9CQUFVNEIsSUFmQztBQWdCckIzQixnQkFBYyxvQkFBVTJCLElBaEJIO0FBaUJyQjFCLGdCQUFjLG9CQUFVMEIsSUFqQkg7QUFrQnJCekIsWUFBVSxvQkFBVXlCLElBbEJDO0FBbUJyQnhCLHNCQUFvQixvQkFBVXVCLEdBbkJUO0FBb0JyQnRCLFVBQVEsb0JBQVV5QixJQXBCRztBQXFCckJ4QixpQkFBZSxvQkFBVXdCLElBckJKO0FBc0JyQnZCLGdCQUFjLG9CQUFVdUI7QUF0QkgsQ0FBdkI7O2tCQXlCZXBDLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgV2l6YXJkU3RlcCA9ICh7XG4gIHN0ZXBMaXN0LFxuICBtYXhTdGVwLFxuICBjdXJyZW50U3RlcCxcbiAgY3VycmVudEluZGV4LFxuICBnZW5lcmF0ZVN0ZXBDbGFzcyxcbiAgZ29Ub1N0ZXAsXG4gIGRlY3JlYXNlU3RlcCxcbiAgaW5jcmVhc2VTdGVwLFxuICBkb25lU3RlcCxcbiAgYWZ0ZXJEb25lQ29tcG9uZW50LFxuICBpc0RvbmUsXG4gIGlzU2hvd1N0ZXBCYXIsXG4gIGlzU2hvd051bWJlcixcbn0pID0+IHtcbiAgY29uc3QgcHJldmlvdXNCdG4gPSA8YSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXByZXZpb3VzXCIgb25DbGljaz17KCkgPT4gZGVjcmVhc2VTdGVwKCl9PlByZXZpb3VzPC9hPlxuICBjb25zdCBuZXh0QnRuID0gPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1uZXh0XCIgb25DbGljaz17KCkgPT4gaW5jcmVhc2VTdGVwKHN0ZXBMaXN0W2N1cnJlbnRJbmRleCAtIDFdLmhhbmRsZXIpfT5OZXh0PC9hPlxuICBjb25zdCBkb25lQnRuID0gPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1kb25lXCIgb25DbGljaz17KCkgPT4gZG9uZVN0ZXAoc3RlcExpc3Rbc3RlcExpc3QubGVuZ3RoIC0gMV0uaGFuZGxlcil9PkRvbmU8L2E+XG4gIGNvbnN0IHN0ZXBCYXIgPSAoXG4gICAgPHVsIGNsYXNzTmFtZT1cInN0ZXAtcHJvZ3Jlc3NcIj5cbiAgICAgIHtcbiAgICAgICAgWy4uLkFycmF5KG1heFN0ZXApXS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHN0ZXAgJHtnZW5lcmF0ZVN0ZXBDbGFzcyhpICsgMSl9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvVG9TdGVwKGkgKyAxKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aSArIDF9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L3VsPlxuICApXG4gIGNvbnN0IHN0ZXBOdW1iZXIgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWRpc3BsYXlcIj5cbiAgICAgIHsgY3VycmVudFN0ZXAgfSAvIHsgbWF4U3RlcCB9XG4gICAgPC9kaXY+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1jb250YWluZXJcIj5cbiAgICAgIHtcbiAgICAgICAgIWlzRG9uZSB8fCAhYWZ0ZXJEb25lQ29tcG9uZW50ID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGVwLXRpdGxlXCI+e3N0ZXBMaXN0Lmxlbmd0aCA/IHN0ZXBMaXN0W2N1cnJlbnRJbmRleCAtIDFdLnRpdGxlIDogJyd9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1zdWItdGl0bGVcIj57c3RlcExpc3QubGVuZ3RoID8gc3RlcExpc3RbY3VycmVudEluZGV4IC0gMV0uc3ViVGl0bGUgOiAnJ308L3A+XG4gICAgICAgICAgICB7IGlzU2hvd1N0ZXBCYXIgPyBzdGVwQmFyIDogbnVsbCB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtY29udGVudFwiPlxuICAgICAgICAgICAgICB7c3RlcExpc3QubGVuZ3RoID8gc3RlcExpc3RbY3VycmVudEluZGV4IC0gMV0uY29tcG9uZW50IDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWZvb3RlclwiPlxuICAgICAgICAgICAgICB7IGlzU2hvd051bWJlciA/IHN0ZXBOdW1iZXIgOiBudWxsIH1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICAgIHsgY3VycmVudFN0ZXAgPiAxID8gcHJldmlvdXNCdG4gOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IGN1cnJlbnRTdGVwIDwgbWF4U3RlcCA/IG5leHRCdG4gOiBkb25lQnRuIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IGFmdGVyRG9uZUNvbXBvbmVudFxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbldpemFyZFN0ZXAucHJvcFR5cGVzID0ge1xuICBzdGVwTGlzdDogUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdWJUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNTdWI6IFByb3BUeXBlcy5ib29sLFxuICAgIG1heFN1YlN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzdWJTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSksXG4gIG1heFN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjdXJyZW50SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdlbmVyYXRlU3RlcENsYXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ29Ub1N0ZXA6IFByb3BUeXBlcy5mdW5jLFxuICBkZWNyZWFzZVN0ZXA6IFByb3BUeXBlcy5mdW5jLFxuICBpbmNyZWFzZVN0ZXA6IFByb3BUeXBlcy5mdW5jLFxuICBkb25lU3RlcDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFmdGVyRG9uZUNvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcbiAgaXNEb25lOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNTaG93U3RlcEJhcjogUHJvcFR5cGVzLmJvb2wsXG4gIGlzU2hvd051bWJlcjogUHJvcFR5cGVzLmJvb2wsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpemFyZFN0ZXBcbiJdfQ==