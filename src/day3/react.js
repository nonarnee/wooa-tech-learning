/* @jsx createElement */ // <= 내가 만든 createElement()로 바뀐다.
/* @jsx React.createElement */ // <= react 기본값
/* @jsx H */
// babel이 제공하는 기능
// createElement가 H로 바뀐다
// createElement를 내가 원하는 함수로 치환시킬 수 있다.

// 어떤 부분을 react가 수행하고
// 어떤 부분을 트랜스파일러가 수행하는지 파악하자
// compile time, runtime 에 수행되는 각 부분을 파악하자

// 같은 것은 합치고 다른 것은 분리한다는 대원칙.
// html(string) <-> browser <-> js : browser가 html string을 dom tree로 관리하여 편의성을 제공하는 컨셉
// dom <-> vdom <-> js : vdom이 dom과는 어렵게 js와는 쉽게 관리할 수 있게 하여 편의성을 제공하는 컨셉, 결국 컨셉은 같다

import React, {createElement} from 'react';
import ReactDOM from 'react-dom';

/*
// 최상위 컴포넌트가 단 1개만 존재할 수 밖에 없는 구조
// 리액트는 1개의 vdom 객체를 가진다.
const vdom = {
  type: 'ul', // 태그명
  props: { // 속성

  },
  children: [ // 자식 요소
    { type: 'li', props: { className: 'item' }, children: 'React' },
    { type: 'li', props: { className: 'item' }, children: 'Redux' },
    { type: 'li', props: { className: 'item' }, children: 'TypeScript' },
    { type: 'li', props: { className: 'item' }, children: 'mobx' },
  ],
}
*/

function renderElement(node) {
  if(typeof node === 'string') {
    return document.createTextNode(node);
  }
  const el = document.createElement(node.type);
  node.children.map(renderElement).forEach(element => {
    el.appendChild(element);
  })
  return el;
}

function myRender(vdom, container) {
  // 실제로 react는 append child 하기 전에 diff logic을 이용해
  // 바뀐 부분만 부분 렌더링한다
  container.appendChild(renderElement(vdom))
}

// React의 createElement()는 virtual dom을 만든다.
// react는 virtual dom을 real dom으로 트랜스파일링 한다.
// 개발자가 직접 createElement() 하지 않게 JSX 문법을 통해 편의성을 제공한다.
function myCreateElement(type, props = {}, ...children) {
  if(typeof type === 'function') {
    return type()
  }
  return { type, props, children };
}

// 이름을 줄 수 있다는 것은 큰 장점을 가진다.(명시적 > 암시적)
// primitive type들은 다루기 까다롭다.
// 객체가 보편적으로 가장 다루기 쉽다.
function StudyList(props) {
  return (
    <div>
      <h1>1</h1>
      <ul>
        <Row label="하하하" />
        <li className="item">React</li>
        <li className="item">Redux</li>
        <li className="item">TypeScript</li>
        <li className="item">mobx</li>
      </ul>
    </div>
  );
}


function Row(props) {
  return <li>{ props.label }</li>;
}

function App() {
  const vdom = myCreateElement('ul', {}, createElement('li', {}, 'React'));
  console.log(vdom); // virtual dom을 만들었다!

  return (
    <div>
      <h1>Hello?</h1>
      <StudyList item="abcd" id="hoho" />
    </div>
  )
}

myRender(<App />, document.getElementById("root"));

// render()가 virtudoal dom을 real dom으로 컨버팅하여 html로 만들고 루트 엘리먼트에 붙이는 역할을 한다.
ReactDOM.render(<App />, document.getElementById('root'));


// github 초기 release 버전을 보면 핵심 로직을 보통 파악할 수 있다.
// 최근 release 버전을 보면 파악하기 굉장히 복잡할 수 있다.
