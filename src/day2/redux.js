
export function createStore(reducer) {
  let state;
  let listeners = [];
  // state를 그대로 return 하면 js에서는 객체같은 경우 값을 참조하기 때문에
  // 바깥에서 객체 내부 데이터를 바꾸면 state도 바뀌는 사태가 벌어진다.
  const getState = () => ({ ...state });
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(fn => fn());
  }
  const subscribe = (fn) => {
    listeners.push(fn);
  }

  return {
    getState,
    dispatch,
    subscribe
  };
}
