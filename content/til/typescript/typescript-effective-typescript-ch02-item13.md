---
title: "이펙티브 타입스크립트 - 4. 타입과 인터페이스 차이점 알기"  
type: "til"
slug: "til/typescript/effective-typescript/ch02/item13"
tags: [ "frontend", "typescript", "book" ]
excerpt: "타입과 인터페이스의 차이점과 비슷한 점 이해하고, 타입과 인터페이스를 선택해야하는 상황 살펴보기"
hero: /assets/images/til/book-effective-typescript.png
date: "2022-03-16 01:35"  
updated: ""
---  


## 타입과 인터페이스의 차이점과 비슷한 점 이해  

타입스크립트에서 명명된 타입(named type)을 정의하는 방법 두 가지가 있다.  
- 방법1. 타입으로 선언
- 방법2. 인터페이스를 사용

```typescript  
// 방법1. 타입으로 선언   
type TState = {
  name: string;
  capital: string;
}
// 방법2. 인터페이스를 사용  
interface IState {
  name: string;
  capital: string;
}
```  

> 클래스를 사용할 수도 있지만,  
> 클래스는 값으로도 쓰일 수 있는 JS 런타임 개념이다.

## 인터페이스 선언과 타입 선언의 비슷한 점

### 1. 명명된 타입은 두 방법으로 정의하든 상태에는 차이가 없다.  
IState, TState를 추가 속성과 함께 할당한다면 동일한 오류가 발생한다.

### 2. 인덱스 시그니처 사용법
```typescript
type TDict = {
  [key: string]: string;
}

interface IDict {
  [key: string]: string;
}
```

### 3. 함수 타입 정의
```typescript
type TFn = (x: number) => string;
interface IFn {
  (x: number): string;
}

const toStrT: TFn = x => `값: ${x}`;
const toStrI: IFn = x => `값: ${x}`;
```   

### 4. 두 방법 모두 함수 호출이 가능한 객체이다.
```typescript
type TFnWithProperties = {
  (x: number): number;
  prop: string;
}  

interface IFnWithProperties {
  (x: number): number;
  prop: string;
}
```  

### 5. 제너릭 가능
```typescript
type TPair<T> = {
  first: T;
  second: T;
}  
interface IPair<T> {
  first: T;
  second: T;
}  
```  

### 6. 인터페이스는 타입을 확장할 수 있고, 타입은 인터페이스를 확장할 수 있다.

```typescript  
interface IStateWithPop extends TState { 
  population: number;
}

type TStateWithPop = IState & { population: number; };
```  

> 클래스에 implements 할 때는 타입과 인터페이스를 둘 다 사용 가능하다.

## 타입과 인터페이스의 차이점

### 1. 유니온 타입(O), 유니온 인터페이스(X)  
   인터페이스는 타입을 확장할 수 있지만, 유니온은 할 수 없다. 단, 유니온 타입을 확장하는게 필요한 경우에는 아래와 같이 할당 가능한 유니온 타입 추가해준다.
```typescript
type Input = { /* ... */ };
type Output = { /* ... */ };  
interface VariableMap {
  [name: string]: Input |  Output;
}  

// 또는  

type NamedVariable = (Input |  Output) & { name: string };
interface VariableMap {
  [name: string]: NamedVariable;
}
```  

### 2. type 키워드는 일반적으로 interface보다 쓰임새가 많다.  

- type 키워드는 유니온이 될 수도 있고
- 매핑된 타입 또는 조건부 타입 같은 고급 기능에 활용되기도 한다.
- 튜플과 배열 타입과 type 키워드를 이용해 더 간결하게 표현할 수 있다.
```typescript
type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];
```

### 3. 인터페이스에만 있는 고유 기능 - 보강(augment)  

```typescript
interface IState {
  name: string;
  capital: string;
}

interface IState {
  population: number;
}

const wyoming: IState = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 500_000,
} // 정상  
```  

위 예제처럼 속성을 확장하는 것을 '선언 병합'이라고 한다. 선언 병합을 지원하기 위해서는 반드시 interface를 사용해야 하며 표준을 따라야 한다. 타입 선언에는 사용자가 채워야하는 빈틈이 있을 수 있는데, 바로 이 선언 병합이 그렇다.


## 타입 선언 vs 인터페이스 선언, 어떻게 선택해야할까?
- 복잡한 타입이라면 고민할 것도 없이 타입 선언을 사용하면 된다.
- 타입과 인터페이스, 두 가지 방법으로 모두 표현할 수 있는 간단한 객체 타입이라면 일관성과 보강 관점에서 고려해봐야 한다.
- 일관되게 인터페이스를 사용하는 코드베이스에서 작업하고 있다면 인터페이스를 사용하고
- 일관되게 타입을 사용 중이라면 타입을 사용하면 된다.
- 아직 스타일이 확립되지 않은 프로젝트라면, 향후에 보강의 가능성이 있을지 생각해 봐야 한다.
- 어떤 API에 대한 타입 선언을 작성해야 한다면 인터페이스를 사용하는게 좋다.
  - API가 변경될 때 사요앚가 인터페이스를 통해 새로운 필드를 병합할 수 있어 유용하다.
  - 그러나 프로젝트 내부적으로 사용되는 타입에 선언 병합이 발생하는 것은 잘못된 설계이다.

---  

출처: [이펙티브 타입스크립트](https://link.coupang.com/a/ki28i)  
