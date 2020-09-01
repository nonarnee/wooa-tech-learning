import React from 'react';
import ReactDOM from 'react-dom';

// babel transfile
// var _react = _interopRequireDefault(require("react"));
//
// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//
// function App() {
//     return /*#__PURE__*/_react.default.createElement("h1", {
//         id: "header"
//     }, "hello tech");
// }

// CRA의 대표적 단점
// 1. CRA가 제공하지 않는 프로젝트 구조를 세팅하는 것이 매우 어렵다
// 2. CRA 개발진이 1번과 같은 피드백에 대해 보수적이다.
// 3. 다양한 환경에 대응하기 어렵다.
// Production 에서는 사용하지 않는 것을 권장

// Redux
// 간단한 패턴이지만 간단하기 때문에 복잡한 기능을 구현하기 어렵다.
// 어른한테 심부름 시키는 것 보다 아이한테 심부름 시키는게 더 어렵다.

// MobX
// 상태관리의 패러다임을 변화시켰다.
// 편하다. 내부에서도 많이 사용하고 있다.

// Redux vs MobX
// 간단하게 만들었을 때는 이유가 있다. 결과를 유도하는 것이 쉽다.
// 제공하는 기능이 많으면 응용할 수 있는 범위가 넓다. 결과를 유도하는 과정이 오래 걸릴 수 있다.

// typescript 같은 type을 강하게 다루는 언어로 개발하는 이유
// 개발자의 실수를 compile time에 막을 수 있다.
// 실수의 무게가 굉장히 클 수 있기 때문에 굉장히 큰 장점이 된다.

interface AppProps {
    title: string;
    color: string;
}

function App(props:AppProps) {
    return (
        <h1>{props.title}</h1>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App title="Tech Hello?" color="red" />
  </React.StrictMode>,
  document.getElementById('root')
);

