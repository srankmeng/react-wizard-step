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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250YWluZXJzL1dpemFyZFN0ZXAvaW5kZXguanMiXSwibmFtZXMiOlsiV2l6YXJkU3RlcCIsInN0YXRlIiwiY3VycmVudFN0ZXAiLCJtYXhTdGVwIiwicHJvcHMiLCJjaGlsZHJlbiIsImxlbmd0aCIsInN0ZXBBYmxlIiwiaXNEb25lIiwic3RlcExpc3QiLCJjdXJyZW50SW5kZXgiLCJtYXhJbmRleCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2VuZXJhdGVTdGVwTGlzdCIsInNldFN0YXRlIiwiZ29Ub1N0ZXAiLCJzdGVwTnVtYmVyIiwic3RlcCIsImluZGV4T2ZTdGVwIiwiZmluZEluZGV4IiwiaXRlbSIsImJlZm9yZUluY3JlYXNlU3RlcCIsImNhbGxiYWNrIiwiaW5jcmVhc2VTdGVwIiwibmV4dEluZGV4IiwibmV4dFN0ZXAiLCJpc0luY3JlYXNlU3RlcCIsImRlY3JlYXNlU3RlcCIsInByZXZJbmRleCIsInByZXZTdGVwIiwiaXNEZWNyZWFzZVN0ZXAiLCJpc1N1YiIsInN1YlN0ZXAiLCJtYXhTdWJTdGVwIiwiYmVmb3JlRG9uZVN0ZXAiLCJkb25lU3RlcCIsImdlbmVyYXRlU3RlcENsYXNzIiwiaW5kZXhJdGVtIiwic3RlcENsYXNzIiwicmVzdWx0IiwibWFwIiwiaSIsInN1Ykl0ZW0iLCJqIiwiY29tcG9uZW50IiwidGl0bGUiLCJzdWJUaXRsZSIsImhhbmRsZXIiLCJmbGF0dGVuRGVlcCIsImFmdGVyRG9uZUNvbXBvbmVudCIsImlzU2hvd1N0ZXBCYXIiLCJpc1Nob3dOdW1iZXIiLCJwcm9wVHlwZXMiLCJhbnkiLCJib29sIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs7OExBaUJKQyxLLEdBQVE7QUFDTkMsbUJBQWEsQ0FEUDtB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b20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IFN0ZXBDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9XaXphcmRTdGVwJ1xyXG5cclxuY2xhc3MgV2l6YXJkU3RlcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGFmdGVyRG9uZUNvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcclxuICAgIGlzU2hvd1N0ZXBCYXI6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaXNTaG93TnVtYmVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgc3ViVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgfSkpLFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGlzU2hvd1N0ZXBCYXI6IHRydWUsXHJcbiAgICBpc1Nob3dOdW1iZXI6IHRydWUsXHJcbiAgfVxyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGN1cnJlbnRTdGVwOiAxLFxyXG4gICAgbWF4U3RlcDogdGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGgsXHJcbiAgICBzdGVwQWJsZTogMSxcclxuICAgIGlzRG9uZTogZmFsc2UsXHJcbiAgICBzdGVwTGlzdDogW10sXHJcbiAgICBjdXJyZW50SW5kZXg6IDEsXHJcbiAgICBtYXhJbmRleDogMCxcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RlcExpc3QgPSB0aGlzLmdlbmVyYXRlU3RlcExpc3QodGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdGVwTGlzdCxcclxuICAgICAgbWF4SW5kZXg6IHN0ZXBMaXN0Lmxlbmd0aCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnb1RvU3RlcCA9IChzdGVwTnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgc3RlcCA9IHN0ZXBOdW1iZXJcclxuICAgIGlmIChzdGVwID4gdGhpcy5zdGF0ZS5zdGVwQWJsZSkge1xyXG4gICAgICBzdGVwID0gdGhpcy5zdGF0ZS5zdGVwQWJsZVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5kZXhPZlN0ZXAgPSB0aGlzLnN0YXRlLnN0ZXBMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0uc3RlcCA9PT0gc3RlcClcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjdXJyZW50U3RlcDogc3RlcCxcclxuICAgICAgY3VycmVudEluZGV4OiBpbmRleE9mU3RlcCArIDEsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYmVmb3JlSW5jcmVhc2VTdGVwID0gKGNhbGxiYWNrKSA9PiB7XHJcbiAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgaWYgKGNhbGxiYWNrKCkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5pbmNyZWFzZVN0ZXAoKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluY3JlYXNlU3RlcCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbmNyZWFzZVN0ZXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwLCBtYXhTdGVwLCBzdGVwTGlzdCwgY3VycmVudEluZGV4LCBtYXhJbmRleCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgbGV0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDFcclxuICAgIGxldCBuZXh0U3RlcCA9IGN1cnJlbnRTdGVwICsgMVxyXG4gICAgaWYgKHRoaXMuaXNJbmNyZWFzZVN0ZXAoc3RlcExpc3QsIGN1cnJlbnRJbmRleCkpIHtcclxuICAgICAgaWYgKG5leHRTdGVwID4gbWF4U3RlcCkge1xyXG4gICAgICAgIG5leHRTdGVwID0gbWF4U3RlcFxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGN1cnJlbnRTdGVwOiBuZXh0U3RlcCxcclxuICAgICAgICBzdGVwQWJsZTogbmV4dFN0ZXAsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5leHRJbmRleCA+IG1heEluZGV4KSB7XHJcbiAgICAgIG5leHRJbmRleCA9IG1heEluZGV4XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudEluZGV4OiBuZXh0SW5kZXggfSlcclxuICB9XHJcblxyXG4gIGRlY3JlYXNlU3RlcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAsIHN0ZXBMaXN0LCBjdXJyZW50SW5kZXggfSA9IHRoaXMuc3RhdGVcclxuICAgIGxldCBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggLSAxXHJcbiAgICBsZXQgcHJldlN0ZXAgPSBjdXJyZW50U3RlcCAtIDFcclxuXHJcbiAgICBpZiAodGhpcy5pc0RlY3JlYXNlU3RlcChzdGVwTGlzdCwgY3VycmVudEluZGV4KSkge1xyXG4gICAgICBpZiAocHJldlN0ZXAgPCAxKSB7XHJcbiAgICAgICAgcHJldlN0ZXAgPSAxXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGVwOiBwcmV2U3RlcCB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcmV2SW5kZXggPCAxKSB7XHJcbiAgICAgIHByZXZJbmRleCA9IDFcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50SW5kZXg6IHByZXZJbmRleCB9KVxyXG4gIH1cclxuXHJcbiAgaXNJbmNyZWFzZVN0ZXAgPSAoc3RlcExpc3QsIGN1cnJlbnRJbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuICFzdGVwTGlzdFtjdXJyZW50SW5kZXggLSAxXS5pc1N1YiB8fCBzdGVwTGlzdFtjdXJyZW50SW5kZXggLSAxXS5zdWJTdGVwID49IHN0ZXBMaXN0W2N1cnJlbnRJbmRleCAtIDFdLm1heFN1YlN0ZXBcclxuICB9XHJcblxyXG4gIGlzRGVjcmVhc2VTdGVwID0gKHN0ZXBMaXN0LCBjdXJyZW50SW5kZXgpID0+IHtcclxuICAgIHJldHVybiAhc3RlcExpc3RbY3VycmVudEluZGV4IC0gMV0uaXNTdWIgfHwgc3RlcExpc3RbY3VycmVudEluZGV4IC0gMV0uc3ViU3RlcCA8PSAxXHJcbiAgfVxyXG5cclxuICBiZWZvcmVEb25lU3RlcCA9IChjYWxsYmFjaykgPT4ge1xyXG4gICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgIGlmIChjYWxsYmFjaygpICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuZG9uZVN0ZXAoKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRvbmVTdGVwKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvbmVTdGVwID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG9uZTogdHJ1ZSB9KVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVTdGVwQ2xhc3MgPSAoaW5kZXhJdGVtKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IHRoaXMuc3RhdGUuY3VycmVudFN0ZXBcclxuICAgIGxldCBzdGVwQ2xhc3MgPSAnJ1xyXG4gICAgaWYgKGluZGV4SXRlbSA8IGN1cnJlbnRTdGVwKSB7XHJcbiAgICAgIHN0ZXBDbGFzcyA9ICdkb25lJ1xyXG4gICAgfSBlbHNlIGlmIChpbmRleEl0ZW0gPT09IGN1cnJlbnRTdGVwKSB7XHJcbiAgICAgIHN0ZXBDbGFzcyA9ICdkb2luZydcclxuICAgIH1cclxuICAgIHJldHVybiBzdGVwQ2xhc3NcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlU3RlcExpc3QgPSAoc3RlcExpc3QpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHN0ZXBMaXN0Lm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0ucHJvcHMuY2hpbGRyZW4gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0ucHJvcHMuY2hpbGRyZW4ubWFwKChzdWJJdGVtLCBqKSA9PiAoe1xyXG4gICAgICAgICAgc3RlcDogaSArIDEsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IHN1Ykl0ZW0sXHJcbiAgICAgICAgICB0aXRsZTogc3ViSXRlbS5wcm9wcy50aXRsZSxcclxuICAgICAgICAgIHN1YlRpdGxlOiBzdWJJdGVtLnByb3BzLnN1YlRpdGxlLFxyXG4gICAgICAgICAgaXNTdWI6IHRydWUsXHJcbiAgICAgICAgICBzdWJTdGVwOiBqICsgMSxcclxuICAgICAgICAgIG1heFN1YlN0ZXA6IGl0ZW0ucHJvcHMuY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICAgICAgaGFuZGxlcjogc3ViSXRlbS5wcm9wcy5oYW5kbGVyLFxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RlcDogaSArIDEsXHJcbiAgICAgICAgY29tcG9uZW50OiBpdGVtLFxyXG4gICAgICAgIHRpdGxlOiBpdGVtLnByb3BzLnRpdGxlLFxyXG4gICAgICAgIHN1YlRpdGxlOiBpdGVtLnByb3BzLnN1YlRpdGxlLFxyXG4gICAgICAgIGlzU3ViOiBmYWxzZSxcclxuICAgICAgICBzdWJTdGVwOiAwLFxyXG4gICAgICAgIG1heFN1YlN0ZXA6IDAsXHJcbiAgICAgICAgaGFuZGxlcjogaXRlbS5wcm9wcy5oYW5kbGVyLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIF8uZmxhdHRlbkRlZXAocmVzdWx0KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhZnRlckRvbmVDb21wb25lbnQsIGlzU2hvd1N0ZXBCYXIsIGlzU2hvd051bWJlciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBjdXJyZW50U3RlcCwgY3VycmVudEluZGV4LCBpc0RvbmUsIG1heFN0ZXAsIHN0ZXBMaXN0IH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0ZXBDb21wb25lbnRcclxuICAgICAgICBzdGVwTGlzdD17c3RlcExpc3R9XHJcbiAgICAgICAgbWF4U3RlcD17bWF4U3RlcH1cclxuICAgICAgICBjdXJyZW50U3RlcD17Y3VycmVudFN0ZXB9XHJcbiAgICAgICAgY3VycmVudEluZGV4PXtjdXJyZW50SW5kZXh9XHJcbiAgICAgICAgZ2VuZXJhdGVTdGVwQ2xhc3M9eyBpbmRleEl0ZW0gPT4gdGhpcy5nZW5lcmF0ZVN0ZXBDbGFzcyhpbmRleEl0ZW0pfVxyXG4gICAgICAgIGdvVG9TdGVwPXsgaW5kZXhJdGVtID0+IHRoaXMuZ29Ub1N0ZXAoaW5kZXhJdGVtKX1cclxuICAgICAgICBpbmNyZWFzZVN0ZXA9e2NhbGxiYWNrID0+IHRoaXMuYmVmb3JlSW5jcmVhc2VTdGVwKGNhbGxiYWNrKX1cclxuICAgICAgICBkZWNyZWFzZVN0ZXA9eygpID0+IHRoaXMuZGVjcmVhc2VTdGVwKCl9XHJcbiAgICAgICAgZG9uZVN0ZXA9e2NhbGxiYWNrID0+IHRoaXMuYmVmb3JlRG9uZVN0ZXAoY2FsbGJhY2spfVxyXG4gICAgICAgIGFmdGVyRG9uZUNvbXBvbmVudD17YWZ0ZXJEb25lQ29tcG9uZW50fVxyXG4gICAgICAgIGlzRG9uZT17aXNEb25lfVxyXG4gICAgICAgIGlzU2hvd1N0ZXBCYXI9e2lzU2hvd1N0ZXBCYXJ9XHJcbiAgICAgICAgaXNTaG93TnVtYmVyPXtpc1Nob3dOdW1iZXJ9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXphcmRTdGVwXHJcbiJdfQ==