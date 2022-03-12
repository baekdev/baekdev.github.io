---
title: "자료구조 - 트라이(Trie)"  
type: "til"
slug: "til/data-structure/trie"  
tags: [ "data structure" ]
excerpt: "트라이의 개념, 장단점, 트라이 구조, 트라이 구현"
hero: /assets/images/basic/001.png  
date: "2022-03-11 01:55"  
updated: "2022-03-13 01:12"    
---

## 트라이(Trie)란? 

- Retireval(탐색)에서 나온 단어  
  - Radix tree, Prefix Tree 라고도 함 
- 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조
- 자동완성 검색에 주로 사용

## 트라이의 특징  

### 장점 
- 검색어 자동완성, 사전 찾기 등에 응용
- 문자열을 탐색할 때 단순하게 비교하는 것보다 효율적으로 찾을 수 있음  
- 시간복잡도: L이 문자열의 길이일 때 탐색, 삽입은 O(L)만큼 소요

### 단점  
  - 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장 공간을 더 많이 사용함
 
## 트라이 구조  

![자료구조 트라이 예시](/assets/images/til/data-structure-trie.png)  

- 루트는 비어 있음  
- 각 간선(링크)은 추가될 문자를 키로 가짐  
- 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가짐  
- 해시 테이블과 연결 리스트를 이용하여 구현할 수 있음  


## 자바스크립트로 구현해본 트라이  
- 문제 해결시에는 오브젝트, 배열을 사용하자  

```javascript  

class Node {
    constructor(value = "") {
        this.value = value;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node; // 루트 노드는 공백
    }

    insert(word) {
        let currentNode = this.root;

        // word = cat;
        for (const char of word) {
            console.log(`#### currentNode.children.has(${char}): ${currentNode.children.has(char)}`);
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new Node(currentNode.value + char));

                Array.from(currentNode.children.keys()).forEach(([key]) => {
                    console.log(`${key} : ${currentNode.children.get(key).value}`);
                });
            }

            currentNode = currentNode.children.get(char);
        }
    }

    has(word) {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }
        return true;
    }
}


const trie = new Trie();
trie.insert('cat');
trie.insert('carry');
trie.insert('candy');
trie.insert('can');
trie.insert('cant');

console.log(trie.has('can'));   // true
console.log(trie.has('candy')); // true
console.log(trie.has('con'));   // false

```  


