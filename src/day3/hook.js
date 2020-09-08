import React, {useState} from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    }
  }

  componentDidMount() {
    // this.state.count = 100; // <= render()가 호출 안됨

    // setState를 호출할 때 해당 인스턴스의 render()를 호출하자
    this.setState({ count: this.state.count + 1 })
  }

  render() { // 스스로 호출하는 경우는 없다. React가 호출
    return (
      <p>안녕하세요</p>
    )
  }
}

/* React 내부 로직
const hello = new Hello();

// ...
vdom = hello.render();

if(hello.hasOwnProperty('componentDidMount')) {
  hello.componentDidMount();
}
 */

function App() {
  // 함수형 컴포넌트는 렌더링 할 때 호출할 수 밖에 없고
  // 호출시마다 필연적으로 값이 초기화되기 때문에
  // 초기엔 함수형 컴포넌트는 상태를 가질 수 없다는 결론이 나왔다.
  // let x = 10;

  // useState()는 배열을 리턴한다
  // [0]: 상태값, [1]: 상태값 세터 함수
  // createElement()에서 useState가 어떤 컴포넌트와 매핑되는지 알 수 있고
  // 최초 호출시 useState hook을 관리하는 전역 배열에 초기값과 전역 배열의 인덱스값을 가리키는 함수를 저장해놓는다.
  // n번째 호출시 useState 전역 배열을 참조하여 초기값으로 세팅하는 부분을 무시한다.
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <h1 onClick={() => setCounter(counter + 1)}>상태 {counter}</h1>
      <Hello />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
