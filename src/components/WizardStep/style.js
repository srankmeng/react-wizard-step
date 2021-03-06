import styled from 'styled-components'
import { lighten } from 'polished'

const borderColor = '#aaa'
const lightBlue = '#128eff'

export const Button = styled.a`
    display: inline-block;
    padding: 6px 12px;
    margin: 0 5px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.428571429;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    color: #fff;
    background-color: ${lightBlue};
    border: 1px solid ${lightBlue};

    &:hover, &:focus {
        color: #fff;
        background-color: ${lighten(0.05, lightBlue)};
        border: 1px solid ${lightBlue};
    }
`

export const StepContainer = styled.div`
  padding: 20px 0px;

  .step-title {
    text-align: center;
    font-size: 16px;
    color: #333;
  }
  .step-sub-title {
    text-align: center;
    font-size: 12px;
    color: #999;
  }
  .step-progress {
    list-style: none;
    text-align: center;
    margin: 20px 0;
    padding: 0;
    .step {
      position: relative;
      display: inline-block;
      border: 1px solid ${borderColor};
      color: ${borderColor};
      width: 24px;
      height: 24px;
      text-align: center;
      cursor: pointer;
      margin: 10px 30px;
      padding: 3px 0;
      border-radius: 50%;
      box-sizing: border-box;

      &:before {
        content: " ";
        position: absolute;
        border-top: 1px solid ${borderColor};
        width: 50px;
        top: 11px;
        right: 100%;
        margin-right: 5px;
      }

      &:first-child {
        &:before {
          width: 0;
        }
      }

      &.done, &.doing {
        color: #fff;
        background: ${lightBlue};
        border: 1px solid ${lightBlue};
        &:before {
          border-top: 1px solid ${lightBlue};
        }
      }
    }
  }
  .step-footer {
    margin: 40px 0 20px;

    &:after {
      content: " ";
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
    }

    .step-display {
      float: left;
      padding: 10px 0;
      color: #999;
    }

    .step-btn-group {
      float: right;
    }
  }
`

