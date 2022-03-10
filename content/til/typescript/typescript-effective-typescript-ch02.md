---
title: "Typescript/이펙티브 타입스크립트 - 2장 타입스크립트의 타입 시스템"  
type: "til"
slug: "til/typescript/effective-typescript/ch02"
tags: [ "frontend", "typescript", "book" ]
excerpt: "타입스크립트의 동작 원리, 해야 할 것과 하지 말아야 할 것에 대한 구체적인 조언을 담은 이펙티브 타입스크립트"
hero: /assets/images/til/book-effective-typescript.png
date: "2022-03-10 22:00"  
updated: ""  
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












---  

출처: [이펙티브 타입스크립트](https://link.coupang.com/a/ki28i)  
