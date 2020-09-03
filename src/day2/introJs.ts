
// 함수
function func() {}
let y = func; // js는 함수도 '값'으로 정의한다.

// 함수정의문
function foo() {
  return 0;
}

// 함수식, 함수는 변수에 담을 수 있다.
const bar = function bar() {

};
bar() // 왼쪽에 있는 'bar'를 의미

// 익명 함수
// js는 '값'을 표현할때 ()를 사용
(function(){

})

// 즉시실행함수
// 선언하자마자 호출하는 경우 함수명 생략 가능
// 함수명이 없기 때문에 다시 호출할 수 없음
// 한 번만 실행할 함수를 구현할 때 종종 사용
(function(){

})()


// 일급 함수(High Order Function): 함수를 인자로 받고 함수를 리턴하는 함수
// 리액트에 존재하는 일급 컴포넌트(High Order Component)도 같은 원리
function foo2(x) {
    x();
    return function() {

    };
}
const y = foo2(function() {

})

// arrow function
// 모든 js 코드는 식, 문(statement)으로 나눌 수 있다.
// 세미콜론은 식의 마무리라고 볼 수 있다
0; // 문
1 + 10; // 식
foo(); // 식(함수의 호출)
1 + 10 + foo(); // 식
if() {} // 문(conditional statement)
while() {} // 문(loop statement)

const foo3 = function(x) {

};
const bar3 = (x) => {

}

// 둘은 같다고 볼 수 있다
const x = 10; // 값을 가공할 수 없다.
const y = () => 10; // 값을 가공할 수 있다.

// arrow function은 함수명이 없기 때문에 재귀로 사용할 수 없다.

function foo() {
    this.name = 10; // 동적 바인딩
}
const y = new foo(); // 인스턴스 객체

if(y instanceof foo) { // y가 foo로 만든 인스턴스니?

}
console.log(y) // { name:10, constructor: Object }

// 더 명시적
// constructor가 눈에 드러나 있다
// foo는 'new' 없이 'foo()'만으로도 호출 가능
// class는 반드시 'new'로 호출해야 함, 아니면 에러
// 예전에는 인스턴스 객체를 만들 때 꼭 명시적으로 'new'를 사용하자는 컨벤션으로 정해놓고 코딩했었다
// 이를 해결하기 위해 class가 등장
class bar {
    constructor() {
        this.name = 10;
    }
}
console.log(new bar()) // {name:10, constructor: Object}

// js와 운영체제의 연관성
// js는 싱글 스레드


// this
const person = {
    name: '황태영',
    getName() {
        return this.name; // 목적: this를 바꿔가며 활용해라
    }
}
// 실행 컨텍스트
// 자바스크립트 엔진이 getName()을 누가 소유하고 있는지 확인
console.log(person.getName()) // 황태영

const man = person.getName;

button.addEventListener('click', person.getName) // this가 person이 아니게 된다
button.addEventListener('click', person.getName.bind(person)) // this가 person으로 묶인다
person.getName.call(person)

// scope
// 클로저는 값을 보호할 떄 보통 사용
function foo(x) {
    return function() {
        return x;
    }
}

const f = foo(10);

console.log(f());


const person2 = {
    age: 10,
}

function makePerson() {
    let age = 10;

    return {
        getAge() {
            return age;
        },
        setAge(x) {
            age = x > 1 && x < 130 ? x : age;
        }
    }
}

let p = makePerson();
console.log(p.getAge())

person2.age = 500; // 못하게 하고 싶다


// 비동기
// v1
setTimeout(function(x) {
    console.log('실행하자')
    setTimeout(function(y) {
        console.log('또실행하자')
        // 더 가면 callback hell
    }, 2000)
}, 1000);

// v2
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('응답');
    }, 1000)
    resolve(); // p1.then 다음에 오는 콜백 함수 호출해줌
    reject(); // .catch 다음에 오는 콜백 함수 호출해줌
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('응답2');
    }, 1000)
    resolve(); // p2.then 다음에 오는 콜백 함수 호출해줌
    reject(); // .catch 다음에 오는 콜백 함수 호출해줌
});

p1.then(p2)
    .then(function(r) {
        console.log(r);
    })
    .catch(function() {

})

// v3
async function main() {
    console.log('1');
    try {
        const x = await delay(3000); // 1과 2사이에 3초 간격을 두고싶다
    } catch(e) {
        console.error(e);
    }

    console.log('2');
}

const delay = ms => new Promise((resolve) => setTimeout(resolve, ms));

main();


// 커링과 클로저는 완전히 구분할 수 없다.
// 커링은 클로저를 위한 기술중에 하나이다.
function foo(a,b,c) {

}

function foo(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}

const foo = a => b => c => a+b+c;