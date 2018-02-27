'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

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
    _style.Button,
    { className: 'button button-previous', onClick: function onClick() {
        return decreaseStep();
      } },
    'Previous'
  );
  var nextBtn = _react2.default.createElement(
    _style.Button,
    { className: 'button button-next', onClick: function onClick() {
        return increaseStep(stepList[currentIndex - 1].handler);
      } },
    'Next'
  );
  var doneBtn = _react2.default.createElement(
    _style.Button,
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
    _style.StepContainer,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dpemFyZFN0ZXAvaW5kZXguanMiXSwibmFtZXMiOlsiV2l6YXJkU3RlcCIsInN0ZXBMaXN0IiwibWF4U3RlcCIsImN1cnJlbnRTdGVwIiwiY3VycmVudEluZGV4IiwiZ2VuZXJhdGVTdGVwQ2xhc3MiLCJnb1RvU3RlcCIsImRlY3JlYXNlU3RlcCIsImluY3JlYXNlU3RlcCIsImRvbmVTdGVwIiwiYWZ0ZXJEb25lQ29tcG9uZW50IiwiaXNEb25lIiwiaXNTaG93U3RlcEJhciIsImlzU2hvd051bWJlciIsInByZXZpb3VzQnRuIiwibmV4dEJ0biIsImhhbmRsZXIiLCJkb25lQnRuIiwibGVuZ3RoIiwic3RlcEJhciIsIkFycmF5IiwibWFwIiwiaXRlbSIsImkiLCJzdGVwTnVtYmVyIiwidGl0bGUiLCJzdWJUaXRsZSIsImNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImFueSIsImZ1bmMiLCJpc1N1YiIsImJvb2wiLCJtYXhTdWJTdGVwIiwibnVtYmVyIiwic3RlcCIsInN1YlN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLE9BY2I7QUFBQSxNQWJKQyxRQWFJLFFBYkpBLFFBYUk7QUFBQSxNQVpKQyxPQVlJLFFBWkpBLE9BWUk7QUFBQSxNQVhKQyxXQVdJLFFBWEpBLFdBV0k7QUFBQSxNQVZKQyxZQVVJLFFBVkpBLFlBVUk7QUFBQSxNQVRKQyxpQkFTSSxRQVRKQSxpQkFTSTtBQUFBLE1BUkpDLFFBUUksUUFSSkEsUUFRSTtBQUFBLE1BUEpDLFlBT0ksUUFQSkEsWUFPSTtBQUFBLE1BTkpDLFlBTUksUUFOSkEsWUFNSTtBQUFBLE1BTEpDLFFBS0ksUUFMSkEsUUFLSTtBQUFBLE1BSkpDLGtCQUlJLFFBSkpBLGtCQUlJO0FBQUEsTUFISkMsTUFHSSxRQUhKQSxN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bkMsZUFBYSxvQkFBVW1DLE1BWkY7QUFhckJsQyxnQkFBYyxvQkFBVWtDLE1BYkg7QUFjckJqQyxxQkFBbUIsb0JBQVU2QixJQWRSO0FBZXJCNUIsWUFBVSxvQkFBVTRCLElBZkM7QUFnQnJCM0IsZ0JBQWMsb0JBQVUyQixJQWhCSDtBQWlCckIxQixnQkFBYyxvQkFBVTBCLElBakJIO0FBa0JyQnpCLFlBQVUsb0JBQVV5QixJQWxCQztBQW1CckJ4QixzQkFBb0Isb0JBQVV1QixHQW5CVDtBQW9CckJ0QixVQUFRLG9CQUFVeUIsSUFwQkc7QUFxQnJCeEIsaUJBQWUsb0JBQVV3QixJQXJCSjtBQXNCckJ2QixnQkFBYyxvQkFBVXVCO0FBdEJILENBQXZCOztrQkF5QmVwQyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IEJ1dHRvbiwgU3RlcENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGUnXHJcblxyXG5jb25zdCBXaXphcmRTdGVwID0gKHtcclxuICBzdGVwTGlzdCxcclxuICBtYXhTdGVwLFxyXG4gIGN1cnJlbnRTdGVwLFxyXG4gIGN1cnJlbnRJbmRleCxcclxuICBnZW5lcmF0ZVN0ZXBDbGFzcyxcclxuICBnb1RvU3RlcCxcclxuICBkZWNyZWFzZVN0ZXAsXHJcbiAgaW5jcmVhc2VTdGVwLFxyXG4gIGRvbmVTdGVwLFxyXG4gIGFmdGVyRG9uZUNvbXBvbmVudCxcclxuICBpc0RvbmUsXHJcbiAgaXNTaG93U3RlcEJhcixcclxuICBpc1Nob3dOdW1iZXIsXHJcbn0pID0+IHtcclxuICBjb25zdCBwcmV2aW91c0J0biA9IDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1wcmV2aW91c1wiIG9uQ2xpY2s9eygpID0+IGRlY3JlYXNlU3RlcCgpfT5QcmV2aW91czwvQnV0dG9uPlxyXG4gIGNvbnN0IG5leHRCdG4gPSA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbmV4dFwiIG9uQ2xpY2s9eygpID0+IGluY3JlYXNlU3RlcChzdGVwTGlzdFtjdXJyZW50SW5kZXggLSAxXS5oYW5kbGVyKX0+TmV4dDwvQnV0dG9uPlxyXG4gIGNvbnN0IGRvbmVCdG4gPSA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tZG9uZVwiIG9uQ2xpY2s9eygpID0+IGRvbmVTdGVwKHN0ZXBMaXN0W3N0ZXBMaXN0Lmxlbmd0aCAtIDFdLmhhbmRsZXIpfT5Eb25lPC9CdXR0b24+XHJcbiAgY29uc3Qgc3RlcEJhciA9IChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJzdGVwLXByb2dyZXNzXCI+XHJcbiAgICAgIHtcclxuICAgICAgICBbLi4uQXJyYXkobWF4U3RlcCldLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3RlcCAke2dlbmVyYXRlU3RlcENsYXNzKGkgKyAxKX1gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb1RvU3RlcChpICsgMSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpICsgMX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgPC91bD5cclxuICApXHJcbiAgY29uc3Qgc3RlcE51bWJlciA9IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1kaXNwbGF5XCI+XHJcbiAgICAgIHsgY3VycmVudFN0ZXAgfSAvIHsgbWF4U3RlcCB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RlcENvbnRhaW5lciBjbGFzc05hbWU9XCJzdGVwLWNvbnRhaW5lclwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgIWlzRG9uZSB8fCAhYWZ0ZXJEb25lQ29tcG9uZW50ID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC10aXRsZVwiPntzdGVwTGlzdC5sZW5ndGggPyBzdGVwTGlzdFtjdXJyZW50SW5kZXggLSAxXS50aXRsZSA6ICcnfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RlcC1zdWItdGl0bGVcIj57c3RlcExpc3QubGVuZ3RoID8gc3RlcExpc3RbY3VycmVudEluZGV4IC0gMV0uc3ViVGl0bGUgOiAnJ308L3A+XHJcbiAgICAgICAgICAgIHsgaXNTaG93U3RlcEJhciA/IHN0ZXBCYXIgOiBudWxsIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICB7c3RlcExpc3QubGVuZ3RoID8gc3RlcExpc3RbY3VycmVudEluZGV4IC0gMV0uY29tcG9uZW50IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICB7IGlzU2hvd051bWJlciA/IHN0ZXBOdW1iZXIgOiBudWxsIH1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICB7IGN1cnJlbnRTdGVwID4gMSA/IHByZXZpb3VzQnRuIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB7IGN1cnJlbnRTdGVwIDwgbWF4U3RlcCA/IG5leHRCdG4gOiBkb25lQnRuIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogYWZ0ZXJEb25lQ29tcG9uZW50XHJcbiAgICAgIH1cclxuICAgIDwvU3RlcENvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbldpemFyZFN0ZXAucHJvcFR5cGVzID0ge1xyXG4gIHN0ZXBMaXN0OiBQcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzdWJUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcclxuICAgIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgaXNTdWI6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWF4U3ViU3RlcDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzdWJTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIH0pKSxcclxuICBtYXhTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGN1cnJlbnRTdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGN1cnJlbnRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICBnZW5lcmF0ZVN0ZXBDbGFzczogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZ29Ub1N0ZXA6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGRlY3JlYXNlU3RlcDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaW5jcmVhc2VTdGVwOiBQcm9wVHlwZXMuZnVuYyxcclxuICBkb25lU3RlcDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgYWZ0ZXJEb25lQ29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxyXG4gIGlzRG9uZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaXNTaG93U3RlcEJhcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaXNTaG93TnVtYmVyOiBQcm9wVHlwZXMuYm9vbCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2l6YXJkU3RlcFxyXG4iXX0=