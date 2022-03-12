---
title: "알고리즘 - 선형 탐색 vs 이진 탐색"  
type: "til"
slug: "til/algorithm/binary-search"
tags: [ "algorithm", "binary search", "data structure" ]
excerpt: "선형 탐색, 이진 탐색, 이진 탐색 트리"  
hero: /assets/images/basic/001.png  
date: "2022-03-13 01:00"  
updated: ""  
---


## 선형 탐색 알고리즘(Linear Search) 
순차 검색 알고리즘이라고도 부르는 선형 탐색은 찾고자 하는 값을 리스트의 맨 앞부터 끝까지 차례대로 찾아 나가는 것
- 시간복잡도: O(n)  
- 장점: 검색 방법 중 가장 단순하여 구현이 쉽고 정렬되지 않은 리스트에서도 사용
- 단점: 검색 길이가 길면 비효율적

```javascript

const search = (list, target) => {
    for ( const i = 0 ; i < list.length; i++ ) {
        if ( list[i] === target ) return i;
    } 
    return -1;
}

```  

## 이진 탐색 알고리즘(Binary Search Algorithm)  
오름차순으로 정렬된 리스트에서 특정한 값의 위치를 찾는 알고리즘으로  
임의의 중간값을 선택하여, 그 값과 찾고자 하는 값의 크고 작음을 비교하는 방식을 채택
배열 혹은 이진 트리를 이용하여 구현할 수 있음  
- 시간복잡도: O(log n)
- 장점: 검색이 반복될 때마다 목표값을 찾을 확률은 두 배가 되므로 속도가 빠름  
- 단점: 검색 원리상 정렬된 리스트에만 사용할 수 있음  

### 리스트에서 23 값을 찾는 이진 탐색 예시


![이진 탐색 알고리즘 예시](/assets/images/til/binary_search_ex_1.png)
![이진 탐색 알고리즘 예시](/assets/images/til/binary_search_ex_2.png)
![이진 탐색 알고리즘 예시](/assets/images/til/binary_search_ex_3.png)  

## 이진 탐색 트리  
이진 탐색을 위한 이진 트리
- 왼쪽 서브 트리는 루트보다 작은 값이 모임  
- 오른쪽 서브 트리는 루트보다 큰 값이 모임  
- 단점: 최악의 경우 한쪽으로 편향된 트리가 될 수 있음, 시간복잡고 O(n), [AVL 트리](https://ko.wikipedia.org/wiki/AVL_%ED%8A%B8%EB%A6%AC), [레드-블랙 트리](https://ko.wikipedia.org/wiki/%EB%A0%88%EB%93%9C-%EB%B8%94%EB%9E%99_%ED%8A%B8%EB%A6%AC)로 해결 가능

![이진 탐색 알고리즘 예시](/assets/images/til/binary_search_tree.png)  


이진 탐색 트리 요소 추가  
- root보다 작으면 왼쪽, 크면 오른쪽에 정점에 추가함

이진 탐색 트리 요소 삭제  
- 제거되는 정점의 부모


### 이진 탐색 예제  

```javascript
const array = [1, 1, 10, 23, 474, 567, 678, 789, 1006, 1549];

const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) /2);

    while (left < right) {

        // console.log(`start ===> left: ${left} / mid: ${mid} / right: ${right} / array[mid]: ${array[mid]}`);
        if (array[mid] === target) return mid;

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        mid = Math.floor((left + right) /2);
        // console.log(`end ===> left: ${left} / mid: ${mid} / right: ${right}`);
    }

    return -1;
}


console.log(binarySearch(array, 1006)); // 8
console.log(binarySearch(array, 10));   // 2
console.log(binarySearch(array, 9999)); // -1
```  


## 이진 탐색 트리 예제  

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while ( currentNode !== null ) {
            // 현재 노드 보다 값이 크면 오른쪽, 값이 작으면 왼쪽 정점에 추가하기 위한 분기
            if (currentNode.value < value) {

                // 오른쪽 노드가 비었으면 셋팅하고
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    break;
                }
                // 이미 차있으면 오른쪽 노드로 탐색을 이동하는 과정을 반복한다.
                currentNode = currentNode.right;
            } else {
                // 왼쪽 노드가 비었으면 셋팅하고
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }
                // 이미 차있으면 왼쪽 노드로 탐색을 이동하는 과정을 반복한다.
                currentNode = currentNode.left;
            }
        }
    }

    has(value) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (currentNode.value === value) return true;

            if (currentNode.value < value) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }

        return false;
    }
}


const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(5);
binarySearchTree.insert(4);
binarySearchTree.insert(7);
binarySearchTree.insert(6);
binarySearchTree.insert(8);
binarySearchTree.insert(3);
binarySearchTree.insert(2);
binarySearchTree.insert(5);

console.log(binarySearchTree.has(8)); // true
console.log(binarySearchTree.has(1)); // false

```
