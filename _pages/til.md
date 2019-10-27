---
layout: post
title: Today I Learned
author: baekdev
categories: [ TIL ]
tags: [TIL]
permalink: /til  
# image: assets/images/post/2019/2019_005.png
description: "오늘 새롭게 알게 된 것 혹은 자주 사용하지 않아 매번 검색하는 내용을 메모하는 곳입니다. 메모장 성격이 강하며 이후 글감으로 발전 할 수 있습니다. 오류 혹은 기타 문의 사항은 말씀해주시면 감사하겠습니다 :)" 
toc: true  
comments: true  
date: 2019-10-11   
lastmod: 2019-10-11  
---  

> 오늘 새롭게 알게 된 것 혹은 자주 사용하지 않아 매번 검색하는 내용을 메모하는 곳입니다.  
> 메모장 성격이 강하며 이후 글감으로 발전 할 수 있습니다.  
> 오류 혹은 기타 문의 사항은 말씀해주시면 감사하겠습니다 :)   


<span id="top"></span>  

<br/>  

# A  

## AWS  

### AWS Region Latency
- [cloudping.info](http://www.cloudping.info/)   

### AWS glacier  
- [AWS Glacier는 뭐지? - AWS S3 와 Glacier 장단점 비교](https://bluese05.tistory.com/35)  


<br/>  

# B  

## Brew  
### brew service 위치  
```terminal
$> cd /usr/local/etc/
/usr/local/etc/ $> ls -l
...
``` 

## Blockchain
- [비즈니스 블록체인 시리즈](http://www.hanbit.co.kr/channel/category/category_view.html?cms_code=CMS7054041020)

## Bitcoin
- [비트코인에 대해 쉽게 설명한 인터뷰 형식의 내용](http://ppss.kr/archives/96552)

<br/>
# C  

## Circuit breaker   
트레이딩 커브(trading curb)의 일종인 주식 용어이다.  
트레이딩 커브(trading curb)는 주식시장에서 가격이 급격히 떨어지는 경우에 반응하여, 시장을 진정시키기 위해 매매를 일시적으로 정지시키는 것을 말한다.  

**MSA에서 서비스간 장애 전파**  
마이크로 서비스 아키텍쳐 패턴은 시스템을 여러개의 서비스 컴포넌트로 나눠서 서비스 컴포넌트간에 호출하는 개념을 가지고 있다. 이 아키텍쳐는 장점도 많지만 반대로 몇가지 단점을 가지고 있는데 그중에 하나는 하나의 컴포넌트가 느려지거나 장애가 나면 그 장애가난 컴포넌트를 호출하는 종속된 컴포넌트까지 장애가 전파되는 특성을 가지고 있다.  

Service A가 Service B를 호출하는 상황에서 어떤 문제로 인하여 Service B가 응답을 못하거나 또는 응답 속도가 매우 느려진 상황이라고 가정하자. Service A가 Service B에 대한 호출 시도를 하면, Service A에서 Service B를 호출한 쓰레드는 응답을 받지 못하기 때문에, 계속 응답을 기다리는 상태로 잡혀있게 된다. 지속해서 Service A가 Service B를 호출을 하게 되면 앞과 같은 원리로 각 쓰레드들이 응답을 기다리는 상태로 변하게 되고 결과적으로는 남은 쓰레드가 없어서 다른 요청을 처리할 수 없는 상태가 된다. 이렇게 Service B의 장애가 Service A에 영향을 주는 경우를 장애가 전파 되었다고 한다. 이 상황에서 Service A를 호출하는 서비스가 또 있다면, 같은 원리로 인하여 그 서비스까지 장애가 전파되서 전체 시스템이 장애 상태로 빠질 수 있다.  

**Circuit breaker 패턴**    
서비스 호출 중간 즉 위의 예제에서는 Service A와 Service B에 Circuit Breaker를 설치한다.  
Service B로의 모든 호출은 이 Circuit Breaker를 통하게 되고 Service B가 정상적인 상황에서는 트래픽을 문제 없이 bypass 한다.   

출처: 
- [서킷브레이커란? - 위키백과](http://bitly.kr/kSm6Y)   
- [Circuit breaker 패턴을 이용한 장애에 강한 MSA 서비스 구현하기 #1 - Circuit breaker와 넷플릭스 Hystrix](https://bcho.tistory.com/1247)  
- [Circuit breaker 패턴을 이용한 장애에 강한 MSA 서비스 구현하기 #2 - Circuit breaker와 넷플릭스 Hystrix](https://bcho.tistory.com/1250)  


<br/>  

# D  

## D3.js  
### D3.js Workshop   
버전이 안맞아서 중간중간 소스를 모두 따라해볼 순 없지만 D3.js를 간략하게 이해할 수 있음  
[D3.js workshop](https://bost.ocks.org/mike/d3/workshop/#0)  


## Data Analysis  

### 용어정리  

- 분류  
	- 데이터를 분석하여, 특정값이 어느 카테고리에 속하는지 분류하는 것  

- 이진분류  
	- 0,1로 나눠진 두가지 카테고리중 어디에 속하는지를 분류  

- 이미지분류  
	- 그림으로 이루어진 데이터 분류  

- CNN  
	- Convolution Neural Network. 이미지 분류에 자주쓰이는 딥러닝 알고리즘의 일종  

- 예측  
	- 데이터를 분석하여, 향후이 데이터가 어떻게 될것인지를 예견하는 것  
  
- RNN  
	- Recurrent Neural Netwrok  
  - 시계열 등 순서가 있는(sequential) data를 피팅하고 예측하는데 자주쓰이는 딥러닝 알고리즘의 일종  

- user-based 추천  
	- 사용자의 사용정보 및 선호도를 기반하는 추천엔진 구현방법  

- 협업 필터링(Collaborative Filtering)  
	- 요즘 가장 자주 쓰이는 추천 알고리즘  
	- [https://www.bloter.net/archives/263722](https://www.bloter.net/archives/263722)   

- Cold start problem  
	- user-based 추천 시, 초기사용자의 데이터가 빈약하여 추천 알고리즘의 성능에 이슈가 있는 문제점을 말함  

- Random Sampling / 무선표집 
	- 데이터들 중에서 일부를 랜덤하게 추출
		- 데이터 특성에 따른 고려를 해야 한다. 
		- 예를 들어 대통령 투표 출구 조사 
		- 지역, 성별, 나이 등을 고려하여 그 안에서 랜덤하게 추출 
		- bias 데이터는 이것을 고려하지 않았기에 한쪽으로 치우칠 수 있음 
		- M[뮤]모집단 평균
		- a[시그마] 모집단의 표준편차 
		- (barX)는 샘플의 평균 
		- (barS)는 샘플의 표준편차 
	- N = 200 ( 200개 추출 )
	- 나온 데이터를 sample이라고 함 
	- 충분하게 표집을 하면 이 집단을 대표할 수 있다고 볼 수 있음 
- 모집단 (population)
- 기술통계 ( descriptive )  

**데이터 활용, 목적 설정**
-  효과라는 걸 정의 
	- 뇌파의 특정값이 줄어들 것이다. 
- N = 100 
- 방법1 집단간(between)
	- 서로 다른 처치 
	- 랜덤하게 50명씩 뽑음(두 그룹은 비슷함)
		- A그룹 - 약 복용, 뇌파 평균값
		- B그룹 - 약 미복용, 뇌파 평균값
	- 평균이 차이가 있는지 확인
	- -> 0가설 검정, 두 집단은 처치 전후에 차이가 없다  
- 방법2 집단내(within)
	- 병원에서 하는 법
	- 그대로 1차 투입, 평균
	- 그대로 2차 투입, 평균
	- 그대로 3차 투입, 평균
	- 집단을 유지하고 처치만 늘려간다. 
	- -> 0가설 : 처치 전후에 차이가 있냐 없냐 
	- 몇번 투약 후 효과가 있다 
	- 평균의 차이가 유의 확률이 될 것 같다. 


## Docker   
- [초보를 위한 도커 안내서 시리즈](https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html)  

<br/>  

# E    
## Free Data Ebook Archive  
- [Free Data Ebook Archive](http://www.oreilly.com/data/free/archive.html)    

<br/>  

# F  
## Firebase  
- [Firebase란?](http://cocomo.tistory.com/487)  

<br/>  

# G  
## Git & Github  
### IntelliJ Git password change  
Mac -> Keychain -> git관련 키체인 삭제  

### Git commit message 수정(Amend)  
```terminal  
# Modify only Head  
> git commit --amend  

# Modify multiple commits  
> git rebase -i HEAD~3  
> Modify text from 'pick' to 'edit' and save   
> git commit --amend  
> git rebase --continue  
```   


### 좋은 Git 커밋 메시지를 작성하기 위한 7가지 약속    
[좋은 Git 커밋 메시지를 작성하기 위한 7가지 약속](http://meetup.toast.com/posts/106)    


### Github 대시보드에서 Commit/Push가 카운트 되지 않을 때 (Why are my contributions not showing up on my profile?)  

git config를 확인한다.   
	- 저장소에 contributors로 등록되지 않은 계정은(즉 내가 아니면) 카운트 되지 않음  
	- 이런 경우는 보통 하나의 컴퓨터에 다수의 git계정을 사용하는 경우 발생.   
	- 나는 회사가 gitlab을 사용하다 보니 겹쳐서 종종 내 repo에 회사 이메일로 commit이 되곤 했다.    
```shell  
$> git config user.email  
$> my-company@email.com  
```  

여러 계정을 설정할 수 있는 방법이 있다. 하지만 간단하게는 현재 내  프로젝트내에서만 변경해서 push할 수 있다.  
 
```shell  
$> git config —local user.email “my-repo@email.com”  
```  

참고 링크   
	- [여러 개의 github 계정 사용하기 – Hanju Jo – Software Engineer](https://aweekj.github.io/using-multiple-accounts-in-git/)
	- [github - git에 등록된 계정 변경하는 방법 | Hashcode](http://hashcode.co.kr/questions/4342/git%EC%97%90-%EB%93%B1%EB%A1%9D%EB%90%9C-%EA%B3%84%EC%A0%95-%EB%B3%80%EA%B2%BD%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)
	- [Learn how we count contributions.](https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/)
  

### Change Git editor   
```shell    
$> $ git config --global core.editor "Atom"  
```  

### shields.io    
[shields.io](https://shields.io/)를 통해서 app status를 이미지화 할 수 있다.     
ex) [![Blog](https://img.shields.io/badge/Blog-baek.dev-green.svg)](https://baek.dev/)  



## Gradle  

### gradle cache cleanup on Mac/Linux   
```shell  
~/.gradle > rm -f caches/  
```

### gradle lib depndency  
```shell  
./gradlew [module]:dependencies > [filename]   
./gradlew springboot-app:dependencies > dependencies.log  
```  

### intelliJ에서 project build out을 못찾는 경우   
- gradle refresh를 해본다  
- 그래도 안되면, project structure - project에서 out path를 강제로 명시한 뒤, 빌드해본다   

### TODO. IntelliJ project build without gradle  
TBU  

<br/>  

# I  

## IntelliJ
- [인텔리J 디버깅하기](http://www.popit.kr/inteliij-%EB%94%94%EB%B2%84%EA%B9%85%ED%95%98%EA%B8%B0/)
- [IntelliJ 디버깅 해보기](http://jojoldu.tistory.com/149)
- build error : cannot find symbol
  - Preferences - Compiler - Annotation Processors
    - checked *Enable annotation processing*  
- [How to increase the memory heap size on IntelliJ IDEA?](https://stackoverflow.com/questions/17221725/how-to-increase-the-memory-heap-size-on-intellij-idea)  

## iTerm 커서 이동  
`iTerm - Preferences - profiles - key tab  에서 + 버튼을 클릭`하여 다음과 같이 추가해준다.  

- 앞으로 이동은 f(forward)  
    <img src="{{site.baseurl}}/{{site.assetsurl}}/images/til/iterm_cursor_001.png" style="width: 500px;" />  
    
- 뒤로 이동은 b(back)  
    <img src="{{site.baseurl}}/{{site.assetsurl}}/images/til/iterm_cursor_002.png" style="width: 500px;" />     


<br/>  

# L  

## Linux  
### Linux에서 특정 포트 사용하는 프로세스 확인
```terminal
$> lsof -i tcp:[Port Number]
$> lsof -i tcp:8080
```  

### Process Kill  
```terminal
$> kill -9 [PID Number]
```   

### Linux에서 WebServer 사용  
- [리눅스에서 웹서버 사용](https://www.youtube.com/watch?v=lmDslNR_ymc)  


# J  

## Java  
### StrSubstitutor
- [텍스트 템플릿 구현](http://jsonobject.tistory.com/230)


### Why does Stream.allMatch() return true for an empty stream?  
[공진리란?](https://freshrimpsushi.tistory.com/399)  
예를 들어 "신은 죽었다." 라는 말에서 신이 존재하지 않는다면, 가정부터 틀려먹었다면 어떻게 되는 걸까?  
신이 존재하지 않는다면 0명의 신이 죽은 것이므로 누가 진짜 죽었나 살았나 따질 것도 없이 참이 된다.  
한편 "신은 살아있다." 라는 말 역시 신이 존재하지 않는다면 0명을 확인하는 것이므로 반드시 참이다.
이렇듯 가정이 모순이라면 주장이 무엇이든 상관 없이 참이 되는 것을  공진리Vacuous Truth 혹은 항진Tautology이라고 한다.  
```java  
1) Please look at the next code:  
System.out.println(Streams.emptyStream().allMatch(o -> true));  
System.out.println(Streams.emptyStream().anyMatch(o -> true));  
System.out.println(Streams.emptyStream().noneMatch(o -> true));  
 
The result output will be:  
true  
false  
true  
```  

### ThreadLocal    
자바 1.2 버전부터 제공되고 있지만 아직 다수의 개발자들이 잘 몰라서 활용을 잘 못하는 기능이 하나 있는데,  
그 기능이 바로 쓰레드 단위로 로컬 변수를 할당하는 기능이다. 이 기능은 ThreadLocal 클래스를 통해서 제공된다.  

ThreadLocal의 사용방법은 너무 쉽다. 단지 다음의 네 가지만 해 주면 된다.
- ThreadLocal 객체를 생성한다.  
- ThreadLocal.set() 메서드를 이용해서 현재 쓰레드의 로컬 변수에 값을 저장한다.  
- ThreadLocal.get() 메서드를 이용해서 현재 쓰레드의 로컬 변수 값을 읽어온다.  
- ThreadLocal.remove() 메서드를 이용해서 현재 쓰레드의 로컬 변수 값을 삭제한다.  
아래 코드는 ThreadLocal의 기본적인 사용방법을 보여주고 있다.   

```java  
// 현재 쓰레드와 관련된 로컬 변수를 하나 생성한다.  
ThreadLocal<UserInfo> local = new ThreadLocal<UserInfo>();  

// 로컬 변수에 값 할당  
local.set(currentUser);  

// 이후 실행되는 코드는 쓰레드 로컬 변수 값을 사용  
UserInfo userInfo = local.get();  
```   

자세한 내용은 [최범균님의 블로그](https://javacan.tistory.com/entry/ThreadLocalUsage?fbclid=IwAR2UTKebrhhbAEpSGL2b9jh-jq22yi3wow-aVpO1rTeRQgzleuJ09FHcEFE) 에서 확인 할 수 있다.  


## json  
### ObjectMapper - Unknown Properties  
```java  
import com.fasterxml.jackson.databind.ObjectMapper;  

ObjectMapper objectMapper = new ObjectMapper();
objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
```

# K  
  
## Kafka  

- [Kafka 운영자가 말하는 Kafka Consumer Group](https://www.popit.kr/kafka-consumer-group/)  
- [Message Queue 정리](https://shortstories.gitbooks.io/studybook/content/message_queue_c815_b9ac.html)  


# M  

## mongoDB  
### Create  
```
$ brew install mongo
$ sudo mkdir -p /data/db
$ whoami
username
$ sudo chown [username] /data/db

$ sudo vi ~/.bash_profile

export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin
``` 

// restart terminal

```
$ mongo -version
MongoDB shell version v3.4.4
```
// start mongoDB
// mongod를 이용하여 mongodb를 시작하거나 mongo로 shell에 접속한다.

```
$ mongod
```

// New open an other terminal

```
$ mongo
MongoDB shell version v3.4.4
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.4
Welcome to the MongoDB shell.

> db
test

> show dbs
admin  0.000GB
local  0.000GB

> use local
switched to db local

> db
local

> help
blah blah

> db.help()
blah blan 
```


## MySQL  
### Group By
- 한시간 단위 그룹핑[^1]
  - GROUP BY HOUR(date)  
- 두시간 단위 그룹핑
  - SELECT date FROM  tbl WHERE HOUR(date)%2=0 GROUP BY HOUR(date)  혹은   
    SELECT date FROM  tbl WHERE HOUR(date)%2=1 GROUP BY HOUR(date) 
   

## MAT / Memory Analyzer Tool  
실행시 data paramter를 넘겨줘야 한다.  	
```shell  	
$> ~/Downloads/program/mat.app/Contents/MacOS/MemoryAnalyzer -data ~/Downloads/workspace	
``` 

# N  

## Node.js & npm  

### node.js 및 npm 설치
[https://nodejs.org/en/](https://nodejs.org/en/) 에서 다운 받아 next, next!

### Mac NPM & NODE Upgrade
- [[Node.js] TIP: Node.js 와 NPM 최신버전으로 업그레이드 하기](https://velopert.com/1351)  

#### LTS(Long Term Supported)
짝수 버전, 안정성과 보안성에 초점을 두어 개발

#### Stable
잦은 업데이트를 진행, 홀수 버전


### 설치 후 npm 버전 확인
```
> npm -v
3.10.10
```

### npm 최신 버전으로 업데이트
```
> npm install -g npm
```  

### http-server
html을 볼 수 있게 서버를 실행
[http-server install](https://www.npmjs.com/package/http-server)  

# P  

## Provisioning / 프로비저닝  
- 사용자의 요구에 맞게 시스템 자원을 할당, 배치, 배포해 두었다가 필요 시 시스템을 즉시 사용할 수 있는 상태로 미리 준비해 두는 것  


## Python  
### Python Simple WebServer  
현재 폴더의 경로로 간단한 웹서버를 띄우는 파이썬 명령어  


### Python 2.x
```shell 
$> python -m SimpleHttpServer [<port number>]
```  


### Python 3.x  
```shell 
$> python3 -m http.server [<port number>]
```  


# T  

## Timestamp vs UnixTimestamp  
- Milliseconds 단위로 현 시각을 표현할 때 Timestamp  
- Seconds 단위로 현 시각을 표현할 때는 UnixTimestamp  


# w  

## wget  
- WWW(world wide web) + get 
- 웹 서버에서 콘텐츠를 가져오는 컴퓨터 프로그램으로 GNU 프로젝트의 일부  

### install 
```shell 
$brew install wget  
```
```shell  
# version list : https://ftp.gnu.org/gnu/wget/
$curl -O https://ftp.gnu.org/gnu/wget/wget-1.19.tar.xz  
```  


# V  

## Vue.js  

- [Aboout DOM](https://developer.mozilla.org/ko/docs/Gecko_DOM_Reference/%EC%86%8C%EA%B0%9C)  
- [Render Function & JSX](https://kr.vuejs.org/v2/guide/render-function.html)  
- [Vue VS React](https://kr.vuejs.org/v2/guide/comparison.html)  
- [Attribute : v-bind](https://kr.vuejs.org/v2/guide/syntax.html#%EC%9B%90%EC%8B%9C-HTML)  
- [v-bind](https://kr.vuejs.org/v2/api/#v-bind)  
- [filter](https://kr.vuejs.org/v2/guide/filters.html)  




### MSA / Microservices Architecture
[마이크로서비스 아키텍처(MSA) - kihoonkim](https://kihoonkim.github.io/2018/03/25/Microservices%20Architecture/first-msa-retro/)

### SEO ( Search Engine Optimization )
- [Github Jekyll 블로그에 SEO 적용하기](https://songyunseop.github.io/post/2016/09/SEO-for-Blog/)



# Z  

## Mac에서 bash대신 zsh 사용하기
- [멋진 Terminal 만들기](https://beomi.github.io/2017/07/07/Beautify-ZSH/)  
- [chsh: /usr/local/bin/zsh: non-standard shell](http://blog.kimtree.net/?p=729)  



---  
[^1]: [Group By 시간에 대해서 질문 좀 드릴께요](http://www.mysqlkorea.com/gnuboard4/bbs/board.php?bo_table=community_04&wr_id=1270)  



<a href="#top">🔝</a>  
