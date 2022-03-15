---
title: "이펙티브 타입스크립트 - 1. 타입스크립트 알아보기"  
type: "til"
slug: "til/typescript/effective-typescript/ch01"
tags: [ "frontend", "typescript", "book" ]
excerpt: "typescript 설정 이해, 런타임에 타입 정보를 유지하는 방법, 구조적 타이핑, any 타입"
hero: /assets/images/til/book-effective-typescript.png
date: "2022-03-03 20:00"  
updated: "2022-03-13 01:12"
---  


## 아이템1. 타입스크립트와 자바스크립트의 관계 이해하기  

타입스크립트(이하 ts)는 자바스크립트(이하 js)의 상위집합
  - 타입스크립트는 타입이 정의된 자바스크립트의 상위집합
  - ts는 js의 상위집합이기 때문에 .js에 있는 코드는 이미 타입스크립트 코드임
  - main.js -> main.ts로 바꾼다고 해도 달라지는 것은 없음
    - js에서 ts로 migration 큰 이점  


## 아이템2. 타입스크립트 설정 이해하기  

타입스크립트 설정 파일 생성 방법  
```typescript
tsc --init  
```  


### 설정1. noImplicitAny  

변수들이 미리 정의된 타입을 가져야 하는지 여부를 제어   
- 타입을 명시하지 않으면 암시적으로 'any' 타입  
- any 타입을 매개변수에 사용하면 타입 체커는 무용 지물    
- any는 유용하나 주의해서 사용해야함  
- 설정을 해재야하는 경우는 타입스크립트로 마이그레이션 하는 경우만 필요  

```typescript  
/* noImplicitAny: true는 아래 코드가 문제 없음 */
function add(a, b) {
  //         ~ 'a' 매개변수에는 암시적으로 'any' 형식이 포함됨  
  return a + b;
}  
```

### 설정2. strictNullChecks  

null과 undefined가 모든 타입에서 허용되는지 확인하는 설정  

```typescript
// strictNullChecks: true  
const x: number = null;
//    ~ 'null' 형식은 'number' 형식에 할당할 수 없음  


// null을 허용하려고 하는 경우  
const y: number | null = null;  
//                null을 허용하려고 의도를 명시적으로 드러냄  
```  

### 설정3. noEmitOnError  
오류가 있을 때 컴파일 하지 않는 옵션  


## 아이템3. 코드 생성과 타입이 관계없음을 이해하기  

타입스크림트 컴파일러는 최신 타입스크립트/자바스크립트를 브라우저에서 동작할 수 있도록 구버전의 자바스립트를 트랜스파일함  


### 타입 오류가 있는 코드도 컴파일이 가능함  

타입스크립트 오류는 warning 개념이라서 알려 주지만 그렇다고 빌드를 멈추지는 않음  
- 참고: noEmitOnError 옵션  


### 런타입에는 타입 체크가 불가능  

타입스크립트의 타입은 '제거 가능(erasable)'하기에 자바스크립트로 컴파일되는 과정에서 모든 인터페이스, 타입, 타입 구문은 그냥 제거되어 버림  

```typescript
// (버그) 기대와 다른 타입 체크  
interface  Square {
  width: number;
}  

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    //                 ~~~~~~~~~~ 'Rectangle'은 형식만 참조하지만, 여기서는 값으로 사용되고 있음  
    return shape.width * shape.height;
    //                         ~~~~~~ 'Shape' 형식에 'height' 속성이 없음  
  } else {
    return shape.width * shape.width;
  }
}
```  

그럼 `런타임에 타입 정보를 유지하는 방법이 필요` 

#### 방법1. 속성이 존재하는지 체크해보기      

```typescript
interface  Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if ('height' in shape) {
    shape; // shape는 Rectangle
    return shape.width * shape.height;
  } else {
    shape; // shape는 Square
    return shape.width * shape.width;
  }
}
```  

#### 방법2. '태그'기법  

```typescript
interface  Square {
  kind: 'square';
  width: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape = Square | Rectangle; // 태그된 유니온 -> 런타임에 타입 정보를 손쉽게 유지할 수 있음  

function calculateArea(shape: Shape) {
  if (shape.height === 'rectangle') {
    shape; // shape는 Rectangle
    return shape.width * shape.height;
  } else {
    shape; // shape는 Square
    return shape.width * shape.width;
  }
}
```  


#### 방법3. 클래스로 만들기  

인터페이스는 타입으로만 사용 가능하지만, 클래스로 선언하면 타입과 값으로 모두 사용할 수 있으므로 오류가 없음  

```typescript
class Square {
  constructor(public width: number) {
  }
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape = Square | Rectangle; // Rectangle은 타입으로 참조되지만  

function calculateArea(shape: Shape) {  
  if (shape instanceof Rectangle) { // 여기서는 값으로 참조됨  
    shape; // shape는 Rectangle
    return shape.width * shape.height;
  } else {
    shape; // shape는 Square
    return shape.width * shape.width;
  }
}
```  


### 타입 연산은 런타임에 영향을 주지 않음  

타입 체커를 통과하지만 잘못된 방법임  
```typescript
// 타입스크립트 
function asNumber(val: number | string): number {
  return val as number;
}

// 컴파일 후 아무런 정제 과정이 없음  
function asNumber(val) {
  return val;
}
```  

## 아이템4. 구조적 타이핑에 익숙해지기  

자바스크립트는 본질적으로 덕 타이핑 기반으로 어떤 함수의 매개변수 값이 모두 제대로 주어진다면, 그 값이 어떻게 만들어졌는지 신경 쓰지 않고 사용함  
- 덕 타이핑? 
  - 객체가 어떤 타입에 부합하는 변수와 메서드를 가질 경우 객체를 해당 타입에 속하는 것으로 간주하는 방식  
  - "만약 어떤 새가 오리처럼 걷고, 헤어지고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다."


아래 예제가 실행 가능한 이유는 구조적 타이핑 관점에서 Vector3D에 x, y가 있어서 Vector2D와 호환이 되기 때문  
```typescript
interface Vector2D {
  name: string;
  x: number;
  y: number;
}

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

calculateLength({name: 'vector2D', x: 3, y: 4}); // Vector2D
calculateLength({x: 3, y: 4, z:8}); // Vector3D
```  

## 아이템5. any 타입 지양하기  

any 타입을 사용하면 타입 체커와 타입스크립트 언어 서비스를 무력화시켜 버림  
any 타입은 진짜 문제점을 감추며, 개발 경험을 나쁘게 하고, 타입 시스템의 신뢰도를 떨어드리기에 최대한 사용을 피해야함  

### 단점1. any 타입에는 타입 안전성이 없음  

```typescript
let age: number;
age = '12' as any;
age += 1; // 결과: 121 
```

### 단점2. any는 함수 시그니처를 무시해 버림  

```typescript
function calculateAge(birthDate: Date): number {
  // ...
}

let birthDate: any = '1990-01-19';
calculateAge(birthDate); // 정상  
```  

### 단점3. any 타입에는 언어 서비스가 적용되지 않음  

언어 서비스는 자동완성 기능과 적절한 도움말을 제공함  


### 단점4. any 타입 설게를 감춰버림  

객체를 정의할 때 특히 문제가 되는데 상태 객체의 설계를 감춰버리기 때문  
깔끔하고 정확하고 명료한 코드 작성을 위해 제대로 된 타입 설계는 필수  


### 단점5. any는 타입시스템의 신뢰도를 떨어뜨림  

타입스크립트는 개발자의 삶을 편하게 하는 데 목적이 있지만, 코드 내에 존재하는 수많은 any 타입으로 인해 자바스크립트보다 일을 더 여럽게 만듬  
타입 오류를 고쳐야 하고 여전히 머릿속에 실제 타입을 기억해야 하기 때문  
타입이 실제 값과 일치한다면 타입 정보를 기억해 둘 필요가 없음  
타입스크립트가 타입 정보를 기억해 주기 때문  


---  

출처: [이펙티브 타입스크립트](https://link.coupang.com/a/ki28i)  
