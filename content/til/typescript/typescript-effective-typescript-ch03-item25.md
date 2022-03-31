---
title: "이펙티브 타입스크립트 - 6. 비동기 코드에는 콜백 대신 async 함수 사용하기"  
type: "til"
slug: "til/typescript/effective-typescript/ch03/item25"
tags: [ "frontend", "typescript", "book" ]
excerpt: "Callback 보다는 Promise가 코드 작성하기 쉽고, 타입 추론하기가 쉽다."
hero: /assets/images/til/book-effective-typescript.png
date: "2022-03-31 14:35"  
updated: ""
---  

## ES2015 이전  

과거의 자바스크립트에서는 비동기 동작을 모델링하기 위해 콜백을 사용했고, 악명 높은 콜백 지옥을 필연적으로 마주할 수 밖에 없었다. 
아래 예제에서 볼 수 있듯, 실행의 순서는 코드의 순서와 반대이다. 이러한 콜백이 중첩된 코드는 직관적으로 이해하기 어렵다. 
요청들을 병렬로 실행하거나 오류 상황을 빠져나오고 싶다면 더욱 혼란스럽다.  

```typescript
fetchURL(url1, function(response1){
   fetchURL(url2, function(response2){
      fetchURL(url3, function(response3){
         // ...
         console.log(1);
      });
      console.log(2);
   });
   console.log(3);
});
console.log(4);


// 실행
4
3
2
1
```  

## ES2015(ES6) - Promise

ES2015(ES6)에서는 콜백 지옥을 극복하기 위해 Promise 개념을 도입했다. 프로미스는 미래에 가능해질 어떤 것을 나타내며, future라고 부르기도 한다.  

```typescript
const pagePromise = fetch(url1);
pagePromise.then(response1 => {
  return fetch(url2);
}).then(response2 => {
  return fetch(url3);
}).then(response3 => {
  // ...
}).catch(error => {
  // ...
});
```  

## ES2017(ES8) - async & await  

```typescript
async function fetchPages() {
  const response1 = await fetch(url1);
  const response2 = await fetch(url2);
  const response3 = await fetch(url3);
  // ... 
}
```  

### await  

1. `await`은 각각의 프로미스가 처리(**resolve**)될 때까지 fetchPages 함수의 실행을 멈춘다.  
2. `async` 함수 내에서 await 중인 프로미스가 거절(**reject**)되면 예외를 던진다.   
3. 이를 통해 일반적인 `try/catch` 구문을 사용할 수 있다.  

```typescript

async function fetchPages() {
  try {
    const response1 = await fetch(url1);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    // ...
  } catch (e) {
    // ...
  }
}

```  

## Callback보다 Promise 또는 async/await을 사용해야하는 이유  

1. Callback 보다는 Promise가 코드 작성하기 쉽다.  
   1. 병렬로 api call을 하고싶다면 Promise.all을 사용해서 Promise 조합하면 된다.    
      1. 이런 경우는 await와 구조 분해 할당이 찰떡궁합이다.
2. Callback 보다는 Prmoise가 타입 추론하기 쉽다.  
   1. 입력된 Promise들 중 첫 번째가 처리될 때 완료되는 Promise.race도 타입 추론과 잘 맞는다.  
   2. Promise.race를 사용하여 프로미스에 타임아웃을 추가하는 방법은 흔하게 사용되는 패턴이다.
```typescript
async function fetchWithTimeout(url: string, ms: number) {
      return Promise.race([fetch(url), timeout(ms)]);  
```


## 프로미스를 생성하기 보다는 asycn/await을 사용하자.  

1. 일반적으로 더 간결하고 직관적인 코드가 된다.  
2. async 함수는 항상 프로미스를 반환하도록 강제된다.
   1. 어떤 함수가 Promise를 반환하면 async를 사용하여 항상 비동기 코드를 작성하도록 하자.  
```typescript  
// async 사용  
const getNumber = async () => 42; //  type: () => Promise<number>;
// Promise 직접 생성  
const getNumber = () => Promise.resolve(42);    
```  


   






---  

출처: [이펙티브 타입스크립트](https://link.coupang.com/a/ki28i)  
