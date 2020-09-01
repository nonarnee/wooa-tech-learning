
// 명시적 > 암묵적, 코드를 보고 알 수 있는 정보가 많다. (최근 개발 트렌드)
// 최근 자바스크립트는 명시적 역할의 기능들을 추가하여 업그레이드 되고 있다
let foo:number = 10;

/*
foo = false; // error
*/

function bar(...args) {
    // 가변 인자 함수라는 것을 명시해준다(es6 문법, '...args'로 명시)
    return args[0]+args[1];
}

bar(10, 20)

// =================================================================

// typescript의 typealias 기능
// type을 더 명시적으로 사용할 수 있다(readability)

// typescript에서 제공하는 기능의 유형
// 1. compile time (typealias, interface, generic)
//    => 대부분 typescript로 얻을 수 있는 이득은 compile time에서 제공되는 기능들
// 2. runtime

type Age = number;

let age: Age = 10;
let weight: number = 72;

// =================================================================

// typealias vs interface ?
// typescript 공식문서 훑어보자

// typescript는 javascript의 super set 이기 때문에
// 문법의 큰 차이가 없어 배우기 쉽다

type Foo = {
    // 객체 모양이지만 세미콜론을 붙인다
    age: Age;
    name: string;
}

interface Bar {
    // props의 type을 정의할 때 많이 쓰임
    age: Age;
    name: string;
}

const fooObj: Foo = {
    age: 10,
    name: 'kim', // fail comma(간지남)
}

const barObj: Bar = {
    age: 10,
    name: 'kim', // fail comma(간지남)
}