import { createStore } from './redux';

const INCREMENT = 'INCREMENT';
const RESET = 'RESET';

const store = createStore(reducer, update);

store.subscribe(update)
function update() {
  console.log(store.getState());
}

function reducer(state = {}, action) {
  if(action.type === INCREMENT) {
    // Rule 2. 꼭 기존 객체의 참조를 끊고 새로운 객체를 전달한다.
    return {
      ...state,
      count: state.count ? state.count+1 : 1
    }
  } else if(action.type === RESET) {
    return {
      ...state,
      count: action.resetCount,
    }
  }
}

// 스토어 값은 불변(immutable)이어야 하므로 이와 같은 코드는 쓸 수 없게 해야한다.
store.person = {};

// Rule 1. 스토어에 있는 값은 직접 수정할 수 없어야 한다.
// console.log(store.getState());

function actionCreator(type, payload) {
  return {
    ...payload,
    type: type,
  }
}

function increment() {
  store.dispatch(actionCreator(INCREMENT))
}

function reset() {
  store.dispatch(actionCreator(RESET, {resetCount: 0} ))
}

store.dispatch({ type:INCREMENT });
store.dispatch(actionCreator(INCREMENT));
increment();
reset();
