
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
// Researching =====================================================
//
// * Interface의 Declaration Merging이 가장 큰 차이다.
//
//   => interface는 같은 이름으로 여러 번 선언을 해도 컴파일 시점에서 합쳐지기 때문에 확장성이 좋다.
//      따라서, 일반적으로는 interface를 사용하고 union, tuple 등이 필요한 경우에만 type 별칭을
//      사용하라는 TypeScript Handbook의 내용은 현재에도 유효하다.
//   => declaration merging으로 확장할 수 있기 때문에, 외부에 노출해야 하는
//      public API에 사용되는 타입은 항상 interface를 사용하여 작성해야 한다.
//   => type 별칭으로 작성된 타입은 조금 더 제한적이기 때문에 private API같이 외부에 노출할 필요가 없는 경우에 사용하는 것이 좋다.
//
// * React Component의 Props와 State의 타입을 기술하려면 어떤 것이 좋을까?
//
//   => 일반적으로는 interface를 사용해도 무리가 없다.
//   => React component를 사용하는데 declaration merging이나 implements는 필요 없다.
//   => interface에 union이 사용되었다면 extends 할 수 없기 때문에 해당 경우에는 type 별칭을 사용해서 타입을 기술해야 한다.
//
// ref.) https://joonsungum.github.io/post/2019-02-25-typescript-interface-and-type-alias/
// =================================================================

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