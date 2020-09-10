// 3가지는 js의 많은 부분을 차지
Promise()

function* foo() {}

async function bar() {}

// x 값이 확정 되기 전에 b를 동작할 수 없다
const a = 10;
const b = a * 10;

// 지연(lazy) 호출, 두 라인 동시에 동작 가능
const c = () => 10;
const d = c() * 10;



const p = new Promise(function(resolve, reject) { // 2개의 함수를 전달하기 위해 호출
  resolve('1');
})

p.then(function (r) {
  console.log(r);
})



function* make () { // 제너레이터는 co-routine의 개념을 차용
  return 1;
}
const i = make();
console.log(i) // GeneratorFunctionPrototype {_invoke: function invoke(), constructor: Object}

function* makeNumber() {
  let num = 1;

  while(true) {
    // yield는 값을 밖으로 반환해주는 역할을 한다.
    // return은 함수를 종료하지만 yield는 함수를 종료하지 않는다.
    yield num++;
  }
}
const res = makeNumber();
console.log(res.next()); // Object {value: 1, done: false}
console.log(res.next()); // Object {value: 2, done: false}
console.log(res.next()); // Object {value: 3, done: false}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 비동기를 동기처럼 보이게 해주는 제너레이터
function* main() {
  yield delay(3000);
  console.log('3초 뒤');
}

// await 동작 원리==================================
const it = main(); // it = delay(3000), 즉 it는 Promise

const { value } = it.next();
if(value instanceof Promise) {
  value.then(() => {
    it.next();
  })
}

delay(3000).then(() => {
  console.log('3초 뒤');
})
// ==============================================

// async-await는 Promise에 최적화 되어있다.
// await 오른쪽은 무조건 Promise여야 하기 때문.
// yield는 그런 제약이 없기 때문에 응용할 수 있는 범위가 더 넓다.(general하게 쓸 수 있다)
async function main2() {
  console.log('시작');
  await delay(3000);
  console.log('3초 뒤입니다.');
}
main2();
