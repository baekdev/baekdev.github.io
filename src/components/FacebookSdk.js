const window = require('global/window');
const document = require('global/document');

if (typeof window !== undefined) {

window.fbAsyncInit = function() {
    FB.init({
        appId      : '2757197850997445',
        xfbml      : true,
        version    : 'v2.8'
    });
    FB.Canvas.getPageInfo(
        function(info) {
            alert('Width: ' + info.clientWidth + ' Height: ' + info.clientHeight);
        }
    );
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    
    var js, fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) {return;}
    if (fjs === undefined) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));  

}