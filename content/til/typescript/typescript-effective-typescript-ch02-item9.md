---
title: "이펙티브 타입스크립트 - 3. 타입 단언(as Type)보다는 타입 선언(: Type)을 사용하기 등"  
type: "til"
slug: "til/typescript/effective-typescript/ch02/item9"
tags: [ "frontend", "typescript", "book" ]
excerpt: "타입 단언, 타입 선언, 객체 래퍼 타입, 자바스크립트 7가지 기본형 값들, 함수 표현식에 타입 적용하기"
hero: /assets/images/til/book-effective-typescript.png
date: "2022-03-16 01:00"  
updated: ""
---  


> 이번 글에서는 아이템9~아이템12를 살펴본다.
> - 아이템9. 타입 단언(as Type)보다는 타입 선언(: Type)을 사용하기
> - 아이템10. 객체 레터 타입 피하기
> - 아이템11. 잉여 속성 체크의 한계 인지하기
> - 아이템12. 함수 표현식에 타입 적용하기  
> 

## 아이템9. 타입 단언(as Type)보다는 타입 선언(: Type)을 사용하기

```typescript
interface Person { 
    name: string;
}

const alice: Person = { name: 'Alice' }; // 타입은 Person  
const bob = { name: 'Bob' } as Person  ; // 타입은 Person
```  

위 alice와 bob은 결과가 같아 보이지만 다르다.
1. alice: Person은 변수에 `'타입 선언'`을 붙여서 그 값이 선언된 타입임을 명시한다.
2. bob은 as Person인 `'타입 단언'`을 수행함. 그러면 타입스크립트가 추론한 타입이 있더라도 Person 타입으로 간주한다.


### 이유1. 타입 단언을 사용하면 타입 체크를 할 수 없다.
타입 선언은 할당되는 값이 해당 인터페이스를 만족하는 검사하는데, 타입 단언은 강제로 타입을 지정했으니 타입 체커에게 오류를 무시하라고 하는 것.

```typescript
const alice: Person = {};
//    ~~~~~ 'Person' 유형에 필요한 'name' 속성이 '{}' 유형에 없습니다. 
const bob = {} as Person; // 오류 없음  
```

### 이유2. 속성 추가
```typescript
const alice: Person = {
  name: 'Alice',
  occupation: 'TypeScript Developer'
  // ~~~~~~~ 개체 리터럴은 알려진 속성만 지정할 수 있음, Person 형식에 occupation이 없습니다.
}

const bob = {
  name: 'Bob',
  occupation: 'Javascript Developer'
} as Person // 오류 없음  
```


### 타입스크립트보다 타입 정보를 더 잘 알고 있는 상황에서의 단언문 사용법

변수의 접두사로 쓰인 !는 접미사로 쓰이면 단언문으로 해석한다.
단언문은 컴파일 과정 중에 제거되므로, 타입 체커는 알지 못하지만 그 값이 null이 아니라고 확신할 수 있을 때 사용해야 한다.

```typescript
const elOrNull = document.getElementById('foo'); // 타입은 HTMLElement | null
const el = document.getElementById('foo')!;      // 타입은 HTMLElement
```



## 아이템10. 객체 레터 타입 피하기

### 래퍼 타입을 직접 사용하거나 인스턴스를 행성하는 것은 피하기

기본형들은 불변이며 메서드를 가지지 않는다는 점에서 객체와 구분된다.
> 기본형 7가지
> - string, number, boolean, null, undefined, symbol, bigint

### JS는 기본형과 객체 타입을 자유롭게 변환한다.
```javascript
> 'primitive'.charAt(3);
m
```  

위 예제에서 charAt은 string의 메서드가 아니다.
string 기본형에는 메서드가 없지만, JS에는 메서드를 가지는 String 객체 타입이 정의되어 있다.  
JS는 기본형과 객체 타입을 서로 자유롭게 변환한다.
string 기본형에는 charAt 같은 메서드를 사용할 때, JS는 기본형을 String 객체로 래핑하고, 메서드를 호출하고, 마지막에 래핑한 객체를 버린다.




### 타입스크립트 객체 래퍼 타입은 지양하고, 대신 기본형 타입을 사용해야 함

- String -> string
- Number -> number
- Boolean -> boolean
- Symbol -> symbol
- BigInt -> bigint

> 기본형은 객체 타입에 할당할 수 있지만, 객체 타입은 기본형에 할당할 수 없음을 주의해야한다.



## 아이템11. 잉여 속성 체크의 한계 인지하기

아이템7에서 이야기 한 것 처럼 타입은 부분 집합 개념이 있으므로, 속성이 부분 집합에 해당이 되면 타입으로 할당 할 수 있다.

```typescript
interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}

const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
}

const r: Room = obj; // 정상  
```  

잉여 속성 체크가 할당 가능 검사와는 별도의 과정이라는 것을 알아야 TS의 타입 시스템에 대한 개념을 정확히 잡을 수 있음


> 잉여 속성 체크는 타입 단언문을 사용할 때 적용되지 않는다.

### 인덱스 시그니처

잉여 속성 체크를 원치 않는다면, 인덱스 시그니처를 사용해서 타입스크립트가 추가적인 속성을 예상하도록 할 수 있음

 ```typescript
interface Options {
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}

const o: Options = { darkMode: true } // 정상 
```

## 아이템12. 함수 표현식에 타입 적용하기

### 매개변수나 반환 값에 타입을 명시하기보다는 함수 표현식 전체에 타입 구문을 적용하기

JS와 TS에서는 함수 '문장'과 '표현식'을 다르게 인식한다.

```typescript
function rollDice1(sides: number): number { /* ... */ }          // 문장  
const rollDice2 = function(sides: number): number { /* ... */ }; // 표현식
const rollDice3 = (sides: number): number => { /* ... */ };      // 표현식
```  

TS에서는 함수 표현식을 사용하는 것이 좋다. 함수의 매개변수부터 반환값까지 전체를 함수 타입으로 선언하여 함수 표현식에 재사용할 수 있다는 장점이 있다.

```typescript
type DiceRollFn = (sides: number) => number;  
const rollDice: DiceRollFn = sides => { /* ... */ };  
```  

### 함수 타입 선언


### 타입 시그니처를 반복적으로 작성한 코드가 있다면 함수 타입을 분리해 내거나 이미 존재하는 타입을 찾기

함수 타입의 선언은 불필요한 코드의 반복을 줄인다.

```typescript
// 일반적인 함수 정의  
function add(a: number, b: number) { return a + b; }
function sub(a: number, b: number) { return a - b; }
function mul(a: number, b: number) { return a * b; }
function div(a: number, b: number) { return a / b; }
```  

```typescript
// 함수 타입 선언  
type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;
```  

위 예제를 통해
- 함수 구현부 분리되어 로직이 보다 분명해짐
- 모든 함수 표현식의 반환 타입까지 number로 선언한 셈

라이브러리를 직접 만든다면 공통 콜백에 타입을 제공해야 한다.



### 다른 함수의 시그니처를 참조하려면 typeof fn을 사용

```typescript
const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error('Request failed: ' + response.status);
  }
  
  return response;
}
```  

- 함수 전체에 타입(typeof fetch)을 적용함
- 타입스크립트가 input과 init의 타입을 추론할 수 있게 해줌
- 타입 구문은 또한 checkedFetch의 반환 타입을 보장하며, fetch와 동일함
- throw 대신 return을 했다면 타입스크립트가 오류를 표출함


> 함수의 매개변수에 타입 선언을 하는 것보다 함수 표현식 전체 타입을 정의하는 것이 코드도 간결하고 안전하다.  
> 다른 함수의 시그니처와 동일한 타입을 가지는 새 함수를 작성하거나,
> 동일한 타입 시그니처를 가지는 여러 개의 함수를 작성할 때는 매개변수의 타입과 반환 타입을 반복해서 작성하지 말고 함수 전체의 타입 선언을 적용해야 한다.


## 아이템12. 함수 표현식에 타입 적용하기  

### 매개변수나 반환 값에 타입을 명시하기보다는 함수 표현식 전체에 타입 구문을 적용하기  

JS와 TS에서는 함수 '문장'과 '표현식'을 다르게 인식한다.  

```typescript
function rollDice1(sides: number): number { /* ... */ }          // 문장  
const rollDice2 = function(sides: number): number { /* ... */ }; // 표현식
const rollDice3 = (sides: number): number => { /* ... */ };      // 표현식
```  

TS에서는 함수 표현식을 사용하는 것이 좋다. 함수의 매개변수부터 반환값까지 전체를 함수 타입으로 선언하여 함수 표현식에 재사용할 수 있다는 장점이 있다.  

```typescript
type DiceRollFn = (sides: number) => number;  
const rollDice: DiceRollFn = sides => { /* ... */ };  
```  

### 함수 타입 선언


### 타입 시그니처를 반복적으로 작성한 코드가 있다면 함수 타입을 분리해 내거나 이미 존재하는 타입을 찾기

함수 타입의 선언은 불필요한 코드의 반복을 줄인다.

```typescript
// 일반적인 함수 정의  
function add(a: number, b: number) { return a + b; }
function sub(a: number, b: number) { return a - b; }
function mul(a: number, b: number) { return a * b; }
function div(a: number, b: number) { return a / b; }
```  

```typescript
// 함수 타입 선언  
type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;
```  

위 예제를 통해
- 함수 구현부 분리되어 로직이 보다 분명해짐
- 모든 함수 표현식의 반환 타입까지 number로 선언한 셈  

라이브러리를 직접 만든다면 공통 콜백에 타입을 제공해야 한다. 



### 다른 함수의 시그니처를 참조하려면 typeof fn을 사용  

```typescript
const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error('Request failed: ' + response.status);
  }
  
  return response;
}
```  

- 함수 전체에 타입(typeof fetch)을 적용함  
- 타입스크립트가 input과 init의 타입을 추론할 수 있게 해줌  
- 타입 구문은 또한 checkedFetch의 반환 타입을 보장하며, fetch와 동일함  
- throw 대신 return을 했다면 타입스크립트가 오류를 표출함  


> 함수의 매개변수에 타입 선언을 하는 것보다 함수 표현식 전체 타입을 정의하는 것이 코드도 간결하고 안전하다.  
> 다른 함수의 시그니처와 동일한 타입을 가지는 새 함수를 작성하거나, 
> 동일한 타입 시그니처를 가지는 여러 개의 함수를 작성할 때는 매개변수의 타입과 반환 타입을 반복해서 작성하지 말고 함수 전체의 타입 선언을 적용해야 한다.  



---  

출처: [이펙티브 타입스크립트](https://link.coupang.com/a/ki28i)  
