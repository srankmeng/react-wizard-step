'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _WizardStep = require('../../components/WizardStep');

var _WizardStep2 = _interopRequireDefault(_WizardStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WizardStep = function (_Component) {
  _inherits(WizardStep, _Component);

  function WizardStep() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WizardStep);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WizardStep.__proto__ || Object.getPrototypeOf(WizardStep)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentStep: 1,
      maxStep: _this.props.children.length,
      stepAble: 1,
      isDone: false,
      stepList: [],
      currentIndex: 1,
      maxIndex: 0
    }, _this.componentDidMount = function () {
      var stepList = _this.generateStepList(_this.props.children);
      _this.setState({
        stepList: stepList,
        maxIndex: stepList.length
      });
    }, _this.goToStep = function (stepNumber) {
      var step = stepNumber;
      if (step > _this.state.stepAble) {
        step = _this.state.stepAble;
      }
      var indexOfStep = _this.state.stepList.findIndex(function (item) {
        return item.step === step;
      });
      _this.setState({
        currentStep: step,
        currentIndex: indexOfStep + 1
      });
    }, _this.beforeIncreaseStep = function (callback) {
      if (callback) {
        if (callback() !== false) {
          _this.increaseStep();
        }
      } else {
        _this.increaseStep();
      }
    }, _this.increaseStep = function () {
      var _this$state = _this.state,
          currentStep = _this$state.currentStep,
          maxStep = _this$state.maxStep,
          stepList = _this$state.stepList,
          currentIndex = _this$state.currentIndex,
          maxIndex = _this$state.maxIndex;

      var nextIndex = currentIndex + 1;
      var nextStep = currentStep + 1;
      if (_this.isIncreaseStep(stepList, currentIndex)) {
        if (nextStep > maxStep) {
          nextStep = maxStep;
        }
        _this.setState({
          currentStep: nextStep,
          stepAble: nextStep
        });
      }

      if (nextIndex > maxIndex) {
        nextIndex = maxIndex;
      }
      _this.setState({ currentIndex: nextIndex });
    }, _this.decreaseStep = function () {
      var _this$state2 = _this.state,
          currentStep = _this$state2.currentStep,
          stepList = _this$state2.stepList,
          currentIndex = _this$state2.currentIndex;

      var prevIndex = currentIndex - 1;
      var prevStep = currentStep - 1;

      if (_this.isDecreaseStep(stepList, currentIndex)) {
        if (prevStep < 1) {
          prevStep = 1;
        }
        _this.setState({ currentStep: prevStep });
      }

      if (prevIndex < 1) {
        prevIndex = 1;
      }
      _this.setState({ currentIndex: prevIndex });
    }, _this.isIncreaseStep = function (stepList, currentIndex) {
      return !stepList[currentIndex - 1].isSub || stepList[currentIndex - 1].subStep >= stepList[currentIndex - 1].maxSubStep;
    }, _this.isDecreaseStep = function (stepList, currentIndex) {
      return !stepList[currentIndex - 1].isSub || stepList[currentIndex - 1].subStep <= 1;
    }, _this.beforeDoneStep = function (callback) {
      if (callback) {
        if (callback() !== false) {
          _this.doneStep();
        }
      } else {
        _this.doneStep();
      }
    }, _this.doneStep = function () {
      _this.setState({ isDone: true });
    }, _this.generateStepClass = function (indexItem) {
      var currentStep = _this.state.currentStep;
      var stepClass = '';
      if (indexItem < currentStep) {
        stepClass = 'done';
      } else if (indexItem === currentStep) {
        stepClass = 'doing';
      }
      return stepClass;
    }, _this.generateStepList = function (stepList) {
      var result = stepList.map(function (item, i) {
        if (_typeof(item.props.children) === 'object') {
          return item.props.children.map(function (subItem, j) {
            return {
              step: i + 1,
              component: subItem,
              title: subItem.props.title,
              subTitle: subItem.props.subTitle,
              isSub: true,
              subStep: j + 1,
              maxSubStep: item.props.children.length,
              handler: subItem.props.handler
            };
          });
        }
        return {
          step: i + 1,
          component: item,
          title: item.props.title,
          subTitle: item.props.subTitle,
          isSub: false,
          subStep: 0,
          maxSubStep: 0,
          handler: item.props.handler
        };
      });
      return _lodash2.default.flattenDeep(result);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WizardStep, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          afterDoneComponent = _props.afterDoneComponent,
          isShowStepBar = _props.isShowStepBar,
          isShowNumber = _props.isShowNumber;
      var _state = this.state,
          currentStep = _state.currentStep,
          currentIndex = _state.currentIndex,
          isDone = _state.isDone,
          maxStep = _state.maxStep,
          stepList = _state.stepList;


      return _react2.default.createElement(_WizardStep2.default, {
        stepList: stepList,
        maxStep: maxStep,
        currentStep: currentStep,
        currentIndex: currentIndex,
        generateStepClass: function generateStepClass(indexItem) {
          return _this2.generateStepClass(indexItem);
        },
        goToStep: function goToStep(indexItem) {
          return _this2.goToStep(indexItem);
        },
        increaseStep: function increaseStep(callback) {
          return _this2.beforeIncreaseStep(callback);
        },
        decreaseStep: function decreaseStep() {
          return _this2.decreaseStep();
        },
        doneStep: function doneStep(callback) {
          return _this2.beforeDoneStep(callback);
        },
        afterDoneComponent: afterDoneComponent,
        isDone: isDone,
        isShowStepBar: isShowStepBar,
        isShowNumber: isShowNumber
      });
    }
  }]);

  return WizardStep;
}(_react.Component);

WizardStep.propTypes = {
  afterDoneComponent: _propTypes2.default.any,
  isShowStepBar: _propTypes2.default.bool,
  isShowNumber: _propTypes2.default.bool,
  children: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    subTitle: _propTypes2.default.string,
    handler: _propTypes2.default.func
  }))
};
WizardStep.defaultProps = {
  isShowStepBar: true,
  isShowNumber: true
};
exports.default = WizardStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250YWluZXJzL1dpemFyZFN0ZXAvaW5kZXguanMiXSwibmFtZXMiOlsiV2l6YXJkU3RlcCIsInN0YXRlIiwiY3VycmVudFN0ZXAiLCJtYXhTdGVwIiwicHJvcHMiLCJjaGlsZHJlbiIsImxlbmd0aCIsInN0ZXBBYmxlIiwiaXNEb25lIiwic3RlcExpc3QiLCJjdXJyZW50SW5kZXgiLCJtYXhJbmRleCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2VuZXJhdGVTdGVwTGlzdCIsInNldFN0YXRlIiwiZ29Ub1N0ZXAiLCJzdGVwTnVtYmVyIiwic3RlcCIsImluZGV4T2ZTdGVwIiwiZmluZEluZGV4IiwiaXRlbSIsImJlZm9yZUluY3JlYXNlU3RlcCIsImNhbGxiYWNrIiwiaW5jcmVhc2VTdGVwIiwibmV4dEluZGV4IiwibmV4dFN0ZXAiLCJpc0luY3JlYXNlU3RlcCIsImRlY3JlYXNlU3RlcCIsInByZXZJbmRleCIsInByZXZTdGVwIiwiaXNEZWNyZWFzZVN0ZXAiLCJpc1N1YiIsInN1YlN0ZXAiLCJtYXhTdWJTdGVwIiwiYmVmb3JlRG9uZVN0ZXAiLCJkb25lU3RlcCIsImdlbmVyYXRlU3RlcENsYXNzIiwiaW5kZXhJdGVtIiwic3RlcENsYXNzIiwicmVzdWx0IiwibWFwIiwiaSIsInN1Ykl0ZW0iLCJqIiwiY29tcG9uZW50IiwidGl0bGUiLCJzdWJUaXRsZSIsImhhbmRsZXIiLCJmbGF0dGVuRGVlcCIsImFmdGVyRG9uZUNvbXBvbmVudCIsImlzU2hvd1N0ZXBCYXIiLCJpc1Nob3dOdW1iZXIiLCJwcm9wVHlwZXMiLCJhbnkiLCJib29sIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs7OExBaUJKQyxLLEdBQVE7QUFDTkMsbUJBQWEsQ0FEUDtB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b20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFN0ZXBDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9XaXphcmRTdGVwJ1xuXG5jbGFzcyBXaXphcmRTdGVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhZnRlckRvbmVDb21wb25lbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgaXNTaG93U3RlcEJhcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTaG93TnVtYmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc3ViVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBoYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB9KSksXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzU2hvd1N0ZXBCYXI6IHRydWUsXG4gICAgaXNTaG93TnVtYmVyOiB0cnVlLFxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgY3VycmVudFN0ZXA6IDEsXG4gICAgbWF4U3RlcDogdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGgsXG4gICAgc3RlcEFibGU6IDEsXG4gICAgaXNEb25lOiBmYWxzZSxcbiAgICBzdGVwTGlzdDogW10sXG4gICAgY3VycmVudEluZGV4OiAxLFxuICAgIG1heEluZGV4OiAwLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RlcExpc3QgPSB0aGlzLmdlbmVyYXRlU3RlcExpc3QodGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0ZXBMaXN0LFxuICAgICAgbWF4SW5kZXg6IHN0ZXBMaXN0Lmxlbmd0aCxcbiAgICB9KVxuICB9XG5cbiAgZ29Ub1N0ZXAgPSAoc3RlcE51bWJlcikgPT4ge1xuICAgIGxldCBzdGVwID0gc3RlcE51bWJlclxuICAgIGlmIChzdGVwID4gdGhpcy5zdGF0ZS5zdGVwQWJsZSkge1xuICAgICAgc3RlcCA9IHRoaXMuc3RhdGUuc3RlcEFibGVcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZlN0ZXAgPSB0aGlzLnN0YXRlLnN0ZXBMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uc3RlcCA9PT0gc3RlcClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRTdGVwOiBzdGVwLFxuICAgICAgY3VycmVudEluZGV4OiBpbmRleE9mU3RlcCArIDEsXG4gICAgfSlcbiAgfVxuXG4gIGJlZm9yZUluY3JlYXNlU3RlcCA9IChjYWxsYmFjaykgPT4ge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgaWYgKGNhbGxiYWNrKCkgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5jcmVhc2VTdGVwKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmNyZWFzZVN0ZXAoKVxuICAgIH1cbiAgfVxuXG4gIGluY3JlYXNlU3RlcCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwLCBtYXhTdGVwLCBzdGVwTGlzdCwgY3VycmVudEluZGV4LCBtYXhJbmRleCB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxXG4gICAgbGV0IG5leHRTdGVwID0gY3VycmVudFN0ZXAgKyAxXG4gICAgaWYgKHRoaXMuaXNJbmNyZWFzZVN0ZXAoc3RlcExpc3QsIGN1cnJlbnRJbmRleCkpIHtcbiAgICAgIGlmIChuZXh0U3RlcCA+IG1heFN0ZXApIHtcbiAgICAgICAgbmV4dFN0ZXAgPSBtYXhTdGVwXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudFN0ZXA6IG5leHRTdGVwLFxuICAgICAgICBzdGVwQWJsZTogbmV4dFN0ZXAsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChuZXh0SW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgbmV4dEluZGV4ID0gbWF4SW5kZXhcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRJbmRleDogbmV4dEluZGV4IH0pXG4gIH1cblxuICBkZWNyZWFzZVN0ZXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCwgc3RlcExpc3QsIGN1cnJlbnRJbmRleCB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggLSAxXG4gICAgbGV0IHByZXZTdGVwID0gY3VycmVudFN0ZXAgLSAxXG5cbiAgICBpZiAodGhpcy5pc0RlY3JlYXNlU3RlcChzdGVwTGlzdCwgY3VycmVudEluZGV4KSkge1xuICAgICAgaWYgKHByZXZTdGVwIDwgMSkge1xuICAgICAgICBwcmV2U3RlcCA9IDFcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3RlcDogcHJldlN0ZXAgfSlcbiAgICB9XG5cbiAgICBpZiAocHJldkluZGV4IDwgMSkge1xuICAgICAgcHJldkluZGV4ID0gMVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudEluZGV4OiBwcmV2SW5kZXggfSlcbiAgfVxuXG4gIGlzSW5jcmVhc2VTdGVwID0gKHN0ZXBMaXN0LCBjdXJyZW50SW5kZXgpID0+IHtcbiAgICByZXR1cm4gIXN0ZXBMaXN0W2N1cnJlbnRJbmRleCAtIDFdLmlzU3ViIHx8IHN0ZXBMaXN0W2N1cnJlbnRJbmRleCAtIDFdLnN1YlN0ZXAgPj0gc3RlcExpc3RbY3VycmVudEluZGV4IC0gMV0ubWF4U3ViU3RlcFxuICB9XG5cbiAgaXNEZWNyZWFzZVN0ZXAgPSAoc3RlcExpc3QsIGN1cnJlbnRJbmRleCkgPT4ge1xuICAgIHJldHVybiAhc3RlcExpc3RbY3VycmVudEluZGV4IC0gMV0uaXNTdWIgfHwgc3RlcExpc3RbY3VycmVudEluZGV4IC0gMV0uc3ViU3RlcCA8PSAxXG4gIH1cblxuICBiZWZvcmVEb25lU3RlcCA9IChjYWxsYmFjaykgPT4ge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgaWYgKGNhbGxiYWNrKCkgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZG9uZVN0ZXAoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbmVTdGVwKClcbiAgICB9XG4gIH1cblxuICBkb25lU3RlcCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEb25lOiB0cnVlIH0pXG4gIH1cblxuICBnZW5lcmF0ZVN0ZXBDbGFzcyA9IChpbmRleEl0ZW0pID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IHRoaXMuc3RhdGUuY3VycmVudFN0ZXBcbiAgICBsZXQgc3RlcENsYXNzID0gJydcbiAgICBpZiAoaW5kZXhJdGVtIDwgY3VycmVudFN0ZXApIHtcbiAgICAgIHN0ZXBDbGFzcyA9ICdkb25lJ1xuICAgIH0gZWxzZSBpZiAoaW5kZXhJdGVtID09PSBjdXJyZW50U3RlcCkge1xuICAgICAgc3RlcENsYXNzID0gJ2RvaW5nJ1xuICAgIH1cbiAgICByZXR1cm4gc3RlcENsYXNzXG4gIH1cblxuICBnZW5lcmF0ZVN0ZXBMaXN0ID0gKHN0ZXBMaXN0KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3RlcExpc3QubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0ucHJvcHMuY2hpbGRyZW4gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBpdGVtLnByb3BzLmNoaWxkcmVuLm1hcCgoc3ViSXRlbSwgaikgPT4gKHtcbiAgICAgICAgICBzdGVwOiBpICsgMSxcbiAgICAgICAgICBjb21wb25lbnQ6IHN1Ykl0ZW0sXG4gICAgICAgICAgdGl0bGU6IHN1Ykl0ZW0ucHJvcHMudGl0bGUsXG4gICAgICAgICAgc3ViVGl0bGU6IHN1Ykl0ZW0ucHJvcHMuc3ViVGl0bGUsXG4gICAgICAgICAgaXNTdWI6IHRydWUsXG4gICAgICAgICAgc3ViU3RlcDogaiArIDEsXG4gICAgICAgICAgbWF4U3ViU3RlcDogaXRlbS5wcm9wcy5jaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgICAgaGFuZGxlcjogc3ViSXRlbS5wcm9wcy5oYW5kbGVyLFxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0ZXA6IGkgKyAxLFxuICAgICAgICBjb21wb25lbnQ6IGl0ZW0sXG4gICAgICAgIHRpdGxlOiBpdGVtLnByb3BzLnRpdGxlLFxuICAgICAgICBzdWJUaXRsZTogaXRlbS5wcm9wcy5zdWJUaXRsZSxcbiAgICAgICAgaXNTdWI6IGZhbHNlLFxuICAgICAgICBzdWJTdGVwOiAwLFxuICAgICAgICBtYXhTdWJTdGVwOiAwLFxuICAgICAgICBoYW5kbGVyOiBpdGVtLnByb3BzLmhhbmRsZXIsXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gXy5mbGF0dGVuRGVlcChyZXN1bHQpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhZnRlckRvbmVDb21wb25lbnQsIGlzU2hvd1N0ZXBCYXIsIGlzU2hvd051bWJlciB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAsIGN1cnJlbnRJbmRleCwgaXNEb25lLCBtYXhTdGVwLCBzdGVwTGlzdCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGVwQ29tcG9uZW50XG4gICAgICAgIHN0ZXBMaXN0PXtzdGVwTGlzdH1cbiAgICAgICAgbWF4U3RlcD17bWF4U3RlcH1cbiAgICAgICAgY3VycmVudFN0ZXA9e2N1cnJlbnRTdGVwfVxuICAgICAgICBjdXJyZW50SW5kZXg9e2N1cnJlbnRJbmRleH1cbiAgICAgICAgZ2VuZXJhdGVTdGVwQ2xhc3M9eyBpbmRleEl0ZW0gPT4gdGhpcy5nZW5lcmF0ZVN0ZXBDbGFzcyhpbmRleEl0ZW0pfVxuICAgICAgICBnb1RvU3RlcD17IGluZGV4SXRlbSA9PiB0aGlzLmdvVG9TdGVwKGluZGV4SXRlbSl9XG4gICAgICAgIGluY3JlYXNlU3RlcD17Y2FsbGJhY2sgPT4gdGhpcy5iZWZvcmVJbmNyZWFzZVN0ZXAoY2FsbGJhY2spfVxuICAgICAgICBkZWNyZWFzZVN0ZXA9eygpID0+IHRoaXMuZGVjcmVhc2VTdGVwKCl9XG4gICAgICAgIGRvbmVTdGVwPXtjYWxsYmFjayA9PiB0aGlzLmJlZm9yZURvbmVTdGVwKGNhbGxiYWNrKX1cbiAgICAgICAgYWZ0ZXJEb25lQ29tcG9uZW50PXthZnRlckRvbmVDb21wb25lbnR9XG4gICAgICAgIGlzRG9uZT17aXNEb25lfVxuICAgICAgICBpc1Nob3dTdGVwQmFyPXtpc1Nob3dTdGVwQmFyfVxuICAgICAgICBpc1Nob3dOdW1iZXI9e2lzU2hvd051bWJlcn1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpemFyZFN0ZXBcbiJdfQ==