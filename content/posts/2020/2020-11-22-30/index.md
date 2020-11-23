---
title: "둘리 & 도우너 어서오고 짤 생성기"
slug: "post/30/"
tags: ["사이드 프로젝트"]
hero: /assets/images/post/2020/2020_029.png
excerpt: "장안의 화제 '도우너 어서오고' 짤을 손 쉽게 만들 수 있는 짤 생성기를 사이드 프로젝트로 진행했습니다."
date: "2020-11-22T20:30:00.009Z"
---

import DoolysWelcome from './DoolysWelcome';
import DoolysSmoke from './DoolysWelcome/DoolysSmoke';

그간 해보고 싶었던 사이드 프로젝트 중 짤 생성기를 만들었다.  
짤 생성기는 적은 시간을 투자하는 대비 만족도와 활용도가 높은 편이라 꼭 해보고 싶었다!

엉덩국님의 애기 공룡 웹툰 중 '도우너 어서오고' 컷이 많은 배리에이션으로 화제가 되고 있다.  
그러던 중 어떤 커뮤니티에서 문구 수정을 아이폰 단축키를 이용하여 번거롭게, 그리고 예쁘지 않게 만드는 것을 보고 타깃을 정하게 되었다.

> [둘리 & 도우너 어서오고 짤 생성기](https://baek.dev/doolys-welcome)

<div class="row">
    <div class="col-sm-12 col-md-6">
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#welcome"><i class="fas fa-chevron-right"></i>어서오고</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#hoi"><i class="fas fa-chevron-right"></i>초능력</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#smoke"><i class="fas fa-chevron-right"></i>떨</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#over"><i class="fas fa-chevron-right"></i>선 넘네</a>
            </li>
        </ul>
    </div>
    <div class="tab-content">
        <DoolysWelcome />
        <DoolysSmoke />
    </div>
</div>
