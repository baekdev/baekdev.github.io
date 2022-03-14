---
title: "이펙티브 타입스크립트 - 2장 타입스크립트의 타입 시스템"  
type: "til"
slug: "til/typescript/effective-typescript/ch02"
tags: [ "frontend", "typescript", "book" ]
excerpt: "Literal Type, 타입 체커, 유니온 타입, 서브타입, 타입 공간, 값 공간의 심벌 구분, typeof, instanceof, 타입 단언, 타입 선언, 객체 래퍼 타입, 자바스크립트 7가지 기본형 값들"
hero: /assets/images/til/book-effective-typescript.png
date: "2022-03-10 22:00"  
updated: "2022-03-13 01:12"
---  


## 아이템6. 편집기를 사용하여 타입 시스템 탐색하기

### 타입스크립트를 설치하면   
- 타입스크립트 컴파일러(tsc)를 실행할 수 있음
- 단독으로 실행할 수 있는 타입스크립트 서버(tsserver)를 실행할 수 있음  

### 언어 서비스에 포함된 항목    
- 코드 자동 완성
- 명세 검사
- 검색
- 리팩터링

    
## 아이템7. 타입이 값들의 집합이라고 생각하기    

### 가장 작은 집합    
- 아무 값도 포함하지 않는 공집합  
- 타입스크립트에서는 never 타입

### Literal Type  
- 한 가지 값만 포함하는 타입  
- 타입스크립트에서 unit type이라고도 불림  

```typescript  
type A = 'A';
type B = 'B';
type Twelve = 12;

// union type
type AB = A | B;
type AB12 = A | B | Twelve;

const c: AB = 'C';
//    ~ 'C' 형식은 'AB' 형식에 할당할 수 없습니다.    
```  

### 타입 체커의 주요 역할 - 집합 검사  
- 하나의 집합이 다른 집합의 부분 집합인지 검사하는 것  

```typescript  
const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
const ab12: AB12 = ab; // { 'A', 'B' }는 {'A', 'B', 12}의 부분 집합이라 정상임  
```

- 구조적 타이핑 규칙들은 어떠한 값이 다른 속성도 가질 수 있음을 의미  
- 심지어 함수 호출의 매개변수에도 다른 속성을 가질 수 있음  
- 특정 상황에서만 추가 속성을 허용하지 않는 잉여 속성 체크만 생각하다 보면 간과하기 쉬움  


#### 두 타입의 인터섹션  

- & 연산자는 두 타입의 인턱센션(교집합)을 계산  
- 아래 예시에서 두 인터페이스는 공통 속성이 없기 때문에 공집합 예상할 수도 있지만  
- 인터페이스 속성이 아닌 값의 집합에 적용이 됨

```typescript
interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: 'Alan Turing',
  birth: new Date('1912/06/23'),
  death: new Date('1954/06/07'),
}; // 정상  

```  

##### 인터페이스 유니온에 대한 never 타입  
```typescript
type K = keyof (Person | Lifespan); // 타입이 never 
```  


#### 서브타입
- Vector3D는 Vector2D의 서브 타입임    
- Vector2D는 Vector1D의 서브 타입임    

```typescript
interface Vector1D { x: number; }
interface Vector2D extends Vector1D { y: number; }
interface Vector3D extends Vector2D { z: number; }
```



## 아이템8. 타입 공간과 값 공간의 심벌 구분하기   

타입스크립트의 심벌은 타입 공간이나 값 공간 중의 한 곳에 존재함

### interface와 instanceof 
```typescript
interface Cylinder {
  radius: number;
  height: number;
}

function calculateVolumn(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape.radius
    // ~ '{}'형식에 'radius'속성이 없습니다. 
  }
}
```  

- instanceof는 자바스크립트의 런타임 연사자이고, 값에 대해 연산함  
- instanceof Cylinder는 타입이 아니라 함수를 참조함  


### class & enum  

- 상황에 따라 타입과 값 두 가지 모두 가능한 예약어  
- 클래스가 타입으로 쓰일 때는 형태(속성과, 메서드)가 사용됨
- 클래스가 값으로 쓰일 때는 생성자가 사용됨  

```typescript
class Cylinder {
  radius = 1;
  height = 1;
}

function calculateVolumn(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape        // 정상, 타입은 Cylinder  
    shape.radius // 정상, 타입은 number
  }
}
```

### typeof  

- typeof는 값을 읽어서 타입스크립트 타입을 반환함  
- 타입 공간의 typeof는 보다 큰 타입의 일부분으로 사용할 수 있음  
- type 구문으로 이름을 붙이는 용도로도 사용할 수 있음  
- 값의 관점에서 typeof는 자바스크립트 런타임의 typeof 연산자가 됨  
- 값 공간의 typeof는 대상 심벌의 런타임 타입을 가리키는 문자열을 반환, 타입스크립트 타입과는 다름  
- 자바스크립트의 런타임 타입은 총 6개
  - string, number, boolean, undefined, object, function  


```typescript  
  
class Cylinder {  // 클래스가 자바스크립트에서는 실제 함수로 구현됨  
  radius = 1;
  height = 1;
}

const v = typeof Cylinder; // 그래서 값이 "function"임   
type T = typeof Cylinder;  // 타입이 typeof Cylinder  

declare let fn: T;
const c = new fn(); // 타입이 Cylinder  
```


### 두 공간 사이에서 다른 의미를 가지는 코드 패턴  

- 값으로 쓰이는 this는 자바스크립트의 this keyword임  
  - 타입으로 쓰이는 this는 일명 다형성 this라고 불리는 this의 타입스크립트 타입임  
    - 서브클래스의 메서드 체인을 구현할 떄 유용
- 값에서 &와 |는 AND와 OR 비트 연산
  - 타입에서는 인터섹션과 유니온임 
- const는 새 변수를 선언하지만, as const는 리터럴 또는 리터럴 표현식의 추론된 타입을 바꿈  
- extends는 서브클래스 또는 서브타입 또는 제너릭 타입의 한정자를 정의할 수 있음  
- in은 루프 또는 매핑된 타입에 등장  

> 타입스크립트 코드가 잘 동작하지 않는다면 타입 공간과 값 공간을 혼동해서 잘못 작성했을 가능성이 큼  



## 아이템9. 타입 단언(as Type)보다는 타입 선언(: Type)을 사용하기  

```typescript
interface Person { 
    name: string;
}

const alice: Person = { name: 'Alice' }; // 타입은 Person  
const bob = { name: 'Bob' } as Person  ; // 타입은 Person
```  

위 alice와 bob은 결과가 같아 보이지만 다름  
1. alice: Person은 변수에 `'타입 선언'`을 붙여서 그 값이 선언된 타입임을 명시함  
2. bob은 as Person인 `'타입 단언'`을 수행함. 그러면 타입스크립트가 추론한 타입이 있더라도 Person 타입으로 간주함  


### 이유1. 타입 단언을 사용하면 타입 체크를 할 수 없음
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

기본형들은 불변이며 메서드를 가지지 않는다는 점에서 객체와 구분됨  
> 기본형 7가지  
> - string, number, boolean, null, undefined, symbol, bigint

### JS는 기본형과 객체 타입을 자유롭게 변환함  
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


---  

출처: [이펙티브 타입스크립트](https://link.coupang.com/a/ki28i)  
