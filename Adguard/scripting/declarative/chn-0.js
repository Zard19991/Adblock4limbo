/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: chn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#firstSingle\",\"action\":[\"style\",\"padding: 0 !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".q-body--prevent-scroll\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#ac-globalnav\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".ac-gn-blur\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"html #globalnav\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"[data-href*=\\\"://sax\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".finance_header\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"#detect.ad-placement\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\".top_bg\",\"action\":[\"style\",\"height: 60px !important;\"]}"],["{\"selector\":\"#content_left > div[style*=\\\"display:block !important;\\\"]:not(.result)\",\"action\":[\"style\",\"position: absolute!important; left: -4000px!important;\"]}","{\"selector\":\".ec_wise_ad\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".special_conf_skin .wrap1\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\".bili-video-card:has(.bili-video-card__info--ad) > .bili-video-card__skeleton\",\"action\":[\"style\",\"visibility: visible !important;\"]}","{\"selector\":\".bili-video-card:has(.bili-video-card__info--creative-ad) > .bili-video-card__skeleton\",\"action\":[\"style\",\"visibility: visible !important;\"]}"],["{\"selector\":\".sidebar > section#text-8[style*=\\\"bottom: 240px;\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#ADback\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\"body[style*=\\\"overflow\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0!important;\"]}"],["{\"selector\":\"[data-spotim-module=\\\"recirculation\\\"][data-spotim-showing-slots~=\\\"1-start-300x250\\\"] .spotim-recirculation div[data-spotim-row] > div[data-spotim-slot-size=\\\"300x250\\\"] ~ .sprcRftoX\",\"action\":[\"style\",\"margin-left: 0!important;\"]}","{\"selector\":\"body [data-spotim-module=\\\"recirculation\\\"][data-spotim-showing-slots~=\\\"1-start-300x250\\\"] .sprc2PlxR [data-spotim-row=\\\"1\\\"]::before\",\"action\":[\"style\",\"left: 0!important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"div[id^=\\\"gklobl\\\"]\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\".wpcom_ad_wrap\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".wrapper > div[data-content-source] > .modalOpenWidth[style*=\\\"top:\\\"]\",\"action\":[\"style\",\"top: 80px !important;\"]}"],["{\"selector\":\".app.padding > .header\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".app.padding\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".t-b.sel > ul.nl > li:has(> a[href*=\\\"/lapin.\\\"])\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"#comment\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"body[style]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#adleft\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"#adright\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"a[onclick*=\\\"openurl\\\"][target=\\\"_blank\\\"] img[src^=\\\"/static/\\\"]\",\"action\":[\"style\",\"position: absolute!important; top: -9999px!important; left: -9999px!important; bottom: unset!important;\"]}","{\"selector\":\"body > .hidden-xs > div[id]:has(> img[src^=\\\"/static/\\\"][onclick*=\\\"open\\\"])\",\"action\":[\"style\",\"position: absolute!important; top: -9999px!important; left: -9999px!important; bottom: unset!important;\"]}","{\"selector\":\"img[src^=\\\"/pic/tu/\\\"]\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\"#mainContent\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#j-topBgBox + .crumbs-nav.top-op\",\"action\":[\"style\",\"margin-bottom: 10px !important;\"]}"],["{\"selector\":\"body #aswift_1:not(#style_important)\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"padding-right: 0!important; overflow: visible!important;\"]}"],["{\"selector\":\"#SlashviewAdDetector\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".sptable_do_not_remove\",\"action\":[\"style\",\"display: block !important; visibility: hidden !important;\"]}"],["{\"selector\":\".main-content\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"#wrapfabtest\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\".player-rm > a[target=\\\"_blank\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"a[href*=\\\".umtrack.com/\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#player_div\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"iframe[width=\\\"728\\\"][height=\\\"90\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"a[href*=\\\"/entry/register/?i_code=\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#acornerinner1122\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".ad-area\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".app-container[aria-expanded=\\\"false\\\"] section.with-ad\",\"action\":[\"style\",\"width: calc(100% - 20px) !important;\"]}","{\"selector\":\".c-ad-103\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\".main_ad_head_wide\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"] .main-header\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"][data-section-type=\\\"new-video\\\"] .content-wrap:nth-child(-1n+2)\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div[class*=\\\"-ad-sidebar-\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\".download .content-area > div[class]\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"#m2\",\"action\":[\"style\",\"height: 5px!important;\"]}"],["{\"selector\":\"#video_player\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\".playmar > .playl\",\"action\":[\"style\",\"visibility: hidden!important;\"]}","{\"selector\":\".playmar > .playr\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\".bg-overlayer\",\"action\":[\"style\",\"pointer-events: unset !important;\"]}"],["{\"selector\":\".player-side > .block\",\"action\":[\"style\",\"visibility: hidden !important; min-height: 390px !important;\"]}"],["{\"selector\":\"#ypaad\",\"action\":[\"style\",\"height: 3px!important;\"]}"],["{\"selector\":\"img[width=\\\"960\\\"][height=\\\"90\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".fb_fanpage_inpage > .other_news_box_2\",\"action\":[\"style\",\"padding: 0 0px!important; margin: 26px 0!important;\"]}"],["{\"selector\":\"#BH-bigbanner\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"#flyRightBox\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"img[onload=\\\"AntiAd.check(this)\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#header > nav.floated-navbar\",\"action\":[\"style\",\"top: 0!important;\"]}"],["{\"selector\":\".whitecon > .related[data-desc=\\\"相關新聞\\\"] > li:nth-child(5)\",\"action\":[\"style\",\"margin-right: 0!important; margin-left: 20px!important;\"]}"],["{\"selector\":\"a[href*=\\\".11h5.\\\"] img\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body > article[class][style*=\\\"position: fixed;top: 0;z-index: 9999;display:block !important;\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"]];

const hostnamesMap = new Map([["pansci.asia",0],["itshokunin.cc",1],["alotof.software",1],["theporn.cc",2],["69xx.one",2],["theav.xyz",2],["apple.com.cn",3],["sina.cn",4],["money.163.com",5],["h5.17k.com",[6,7]],["mobile01.com",6],["1keydata.com",8],["4399.com",9],["gameapps.hk",9],["51cto.com",10],["baidu.com",11],["tieba.baidu.com",12],["bilibili.com",13],["buzzorange.com",14],["csgoob.com",15],["dm5.com",16],["duodada.com",17],["m.lelekan.com",17],["chinese.engadget.com",18],["ezneering.com",19],["game735.com",20],["ghxi.com",21],["haoweichi.com",22],["ekamus.info",22],["huaban.com",23],["iqihang.com",24],["ithome.com",25],["jieav.com",26],["linovelib.com",27],["yodu.org",27],["nfmovies.com",28],["nxpaaq.com",29],["book.qidian.com",30],["rjno1.com",31],["slashlook.com",32],["slashview.com",33],["t66y.com",34],["udn.com",35],["v2rayssr.com",36],["waipian1.com",37],["waipian10.com",37],["waipian11.com",37],["waipian12.com",37],["waipian13.com",37],["waipian14.com",37],["waipian15.com",37],["waipian16.com",37],["waipian17.com",37],["waipian18.com",37],["waipian19.com",37],["waipian2.com",37],["waipian20.com",37],["waipian21.com",37],["waipian22.com",37],["waipian23.com",37],["waipian24.com",37],["waipian25.com",37],["waipian26.com",37],["waipian27.com",37],["waipian28.com",37],["waipian29.com",37],["waipian3.com",37],["waipian30.com",37],["waipian31.com",37],["waipian32.com",37],["waipian33.com",37],["waipian34.com",37],["waipian35.com",37],["waipian36.com",37],["waipian37.com",37],["waipian38.com",37],["waipian39.com",37],["waipian4.com",37],["waipian40.com",37],["waipian5.com",37],["waipian6.com",37],["waipian7.com",37],["waipian8.com",37],["waipian9.com",37],["weihemenye.com",38],["discuss.com.hk",39],["ulifestyle.com.hk",40],["applefans.today",40],["bde4.icu",41],["520cc.me",42],["manwa.me",43],["liaoningmovie.net",44],["sutin0831.pixnet.net",45],["renfei.net",46],["xbgame.net",47],["macapp.so",48],["58b.tv",49],["aiyifan.tv",50],["iyf.tv",[50,51]],["bingfeng.tw",52],["com.tw",53],["cna.com.tw",54],["gamer.com.tw",55],["kocpc.com.tw",56],["ltn.com.tw",57],["dilidili.wang",[58,59]]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["h5.dilidili.wang",[58]]]);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
