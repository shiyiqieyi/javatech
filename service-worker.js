/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c57a37e8cabd14c01ca5260ead671835"
  },
  {
    "url": "assets/css/0.styles.b1ca5b54.css",
    "revision": "71f8c74baf04b5fc54db0bd965e74a91"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0916536f.js",
    "revision": "1677fcdbbc3cf172e3553a4b77912968"
  },
  {
    "url": "assets/js/11.cc00b092.js",
    "revision": "ad0f2286c3bf300fb99c2a55ce0e4993"
  },
  {
    "url": "assets/js/12.4229f72d.js",
    "revision": "68382590d0a183b18b0af35a983c395f"
  },
  {
    "url": "assets/js/13.b707f111.js",
    "revision": "3e72380ce8950434d284a65b63755325"
  },
  {
    "url": "assets/js/14.32916da3.js",
    "revision": "44100003563892cd14406ec621ea501e"
  },
  {
    "url": "assets/js/15.98630e55.js",
    "revision": "9b685b6ce5fa0d0a1cb0acfc03e1fc5a"
  },
  {
    "url": "assets/js/16.fdb31739.js",
    "revision": "39f753611bd406b163420dd4a2a9bcd0"
  },
  {
    "url": "assets/js/17.63b217de.js",
    "revision": "6dfb205aa50e6b75d8568ad028339c00"
  },
  {
    "url": "assets/js/18.d8d6839b.js",
    "revision": "b509bde35ba3c6b1de516e99a3839b34"
  },
  {
    "url": "assets/js/19.fd09ee71.js",
    "revision": "37bbb046be35c23f7b21f6d45ebaec3d"
  },
  {
    "url": "assets/js/20.88dd02f8.js",
    "revision": "453ee957b9be0a2cb39458ff063f76ce"
  },
  {
    "url": "assets/js/21.7c8d68c9.js",
    "revision": "deff2c4791b5c777a98ae2b263753793"
  },
  {
    "url": "assets/js/22.8db28df7.js",
    "revision": "82fd6efa421f7564c6e0753ce4650d5b"
  },
  {
    "url": "assets/js/23.f4c28d93.js",
    "revision": "6147d51e9c6afcaba5c2fad4986275fc"
  },
  {
    "url": "assets/js/24.0946f0e0.js",
    "revision": "8ee965459a6508a7d8283ef264bdaa63"
  },
  {
    "url": "assets/js/25.bb2a9029.js",
    "revision": "025e058953547356a9be97ee608445e8"
  },
  {
    "url": "assets/js/26.8d3c4528.js",
    "revision": "d35861caa0b2d07850522a7735719b58"
  },
  {
    "url": "assets/js/27.1ab68e3a.js",
    "revision": "8d64c62e66ae886caa3a26d243e26f60"
  },
  {
    "url": "assets/js/28.d038a4ac.js",
    "revision": "d40c15a69468f7afb9005e334cb23020"
  },
  {
    "url": "assets/js/29.db9a4df7.js",
    "revision": "6888319e6903633ed8ca7b4e1df71d7d"
  },
  {
    "url": "assets/js/30.170361b2.js",
    "revision": "65b46b4748d27e5853740d66ab415cb0"
  },
  {
    "url": "assets/js/31.f0cd2392.js",
    "revision": "74b758437fb8a8eaee28f5a31b92fdb3"
  },
  {
    "url": "assets/js/32.c6fb8fa9.js",
    "revision": "63dcc3aa6bc5a3c06207833e4e1b8b14"
  },
  {
    "url": "assets/js/33.570bb64c.js",
    "revision": "5a9555fa0addebcbe96986fb0d84b229"
  },
  {
    "url": "assets/js/34.40beda3b.js",
    "revision": "edf6173d15c68458ccdeb538284e17d0"
  },
  {
    "url": "assets/js/35.438d5edf.js",
    "revision": "7df3e75d56247e8836f25427bab577ad"
  },
  {
    "url": "assets/js/36.0dfbc22b.js",
    "revision": "ef32f2fbaa5958992a9dd661cefd77fb"
  },
  {
    "url": "assets/js/37.b07fa903.js",
    "revision": "98689087da61024f4046879e1c02ece1"
  },
  {
    "url": "assets/js/38.cb645522.js",
    "revision": "ec46df6e11cbbffd511ef815649054d8"
  },
  {
    "url": "assets/js/39.dd291a24.js",
    "revision": "6e4db1da7af8ab1858cd8f61322b51f5"
  },
  {
    "url": "assets/js/4.0bbd3c9a.js",
    "revision": "8c3b30cf3f0061bf879fe6a7dedeb003"
  },
  {
    "url": "assets/js/40.418f2fef.js",
    "revision": "5f9a081c2f389c9c32698005fa4409ce"
  },
  {
    "url": "assets/js/41.cc2edb9b.js",
    "revision": "b89e5c78da6ea312817fefd6c82e89e8"
  },
  {
    "url": "assets/js/42.53c94659.js",
    "revision": "5e2a9fac90ed812b6daeda6c3730e2a8"
  },
  {
    "url": "assets/js/43.148753ea.js",
    "revision": "0bd64df035e0443d7aa0328c17c18b55"
  },
  {
    "url": "assets/js/44.77f0d4df.js",
    "revision": "e7eecba16ef42e6ce4379165991c80fe"
  },
  {
    "url": "assets/js/45.5c4c391d.js",
    "revision": "948b5b1eb988eedae9cca063b0064e28"
  },
  {
    "url": "assets/js/46.22985a4f.js",
    "revision": "edde80f30a9e96d93754c1152c38004c"
  },
  {
    "url": "assets/js/47.feb3bdd2.js",
    "revision": "e63bb6de2684a8ef3e9acd18c5424d65"
  },
  {
    "url": "assets/js/48.4aad712b.js",
    "revision": "e9df1794ad942b689b4587bd8c4c1e62"
  },
  {
    "url": "assets/js/49.b4033ec4.js",
    "revision": "68f5f2ad8c0e970b38983ecf43344c20"
  },
  {
    "url": "assets/js/5.62db1143.js",
    "revision": "dc4ca790d008d52bc9dfc1954ae0e704"
  },
  {
    "url": "assets/js/50.cf783cd3.js",
    "revision": "ca7d24345f38fce21c5d0f0cfe809c87"
  },
  {
    "url": "assets/js/51.ef27cd40.js",
    "revision": "5dec4bd42157e186768abce1910a246b"
  },
  {
    "url": "assets/js/6.f3834e9a.js",
    "revision": "48e2995cb4d7c73110d0fb5c35dc94c2"
  },
  {
    "url": "assets/js/7.a19cb19a.js",
    "revision": "7d9bff7b39983b159d0d1f6d25c37248"
  },
  {
    "url": "assets/js/8.f3e3a26e.js",
    "revision": "a3e7c201dbd60f7300f1a6539a67fceb"
  },
  {
    "url": "assets/js/9.2067b61b.js",
    "revision": "dd9adfa08d656928df37aa6d7fdc43bf"
  },
  {
    "url": "assets/js/app.a25685f0.js",
    "revision": "9c4dfa49f321f305ba5eca9d1c6f8f8f"
  },
  {
    "url": "assets/js/vendors~flowchart.94c19f8c.js",
    "revision": "46ecfaa5c1ca7a01d1216d8eb8df76da"
  },
  {
    "url": "assets/js/vendors~notification.d37b4d01.js",
    "revision": "1684c1e4034d1bb275e905d573abd729"
  },
  {
    "url": "cache/cache-interview.html",
    "revision": "abd987d8d2b8f1a5458ec800da16d0c7"
  },
  {
    "url": "cache/CacheInterview.html",
    "revision": "47f551519b2a9b6528fcdc527f17edf6"
  },
  {
    "url": "cache/Caffeine.html",
    "revision": "75c7b5a5aaf1b5adc5b423fc78216f87"
  },
  {
    "url": "cache/Ehcache.html",
    "revision": "0403667c69584fca300cab22e0b00cc2"
  },
  {
    "url": "cache/index.html",
    "revision": "edd47f9f16bf82d55a4453d49ff720be"
  },
  {
    "url": "framework/index.html",
    "revision": "d97a1d6e1bfa44eebd3ce4b4a4056db4"
  },
  {
    "url": "framework/mybatis.html",
    "revision": "7ae0725999967517a6aa68a3e9b6404c"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "6cbacc33d6629e898e2227b4aa795d81"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "55a731de5feb3f23380b771863010bda"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "6a7e6ef26649d200bd8d6bfd82263123"
  },
  {
    "url": "lib/index.html",
    "revision": "c229b5f27b715388d8ec551f2633d2fa"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "b0bda393ce14cbea611d8f5159846722"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "d6ca47fc29efb7de23aaeefbe7c8ad0c"
  },
  {
    "url": "lib/javamail.html",
    "revision": "d817bba46152fecebe6e285499d1ee91"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "57c294cdc466813eff2f72ec638ba16f"
  },
  {
    "url": "lib/reflections.html",
    "revision": "33bd27b73e3ac578f4dccd12c4cce953"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "71ef90a0a6991fdbe8528d33da9e4e20"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "b69e93e0d3599d1a599877dfd6a70a20"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "4416512e6c5e6fa755f98bf3ccbb77d1"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "b657efd66484ac0f18c8379cd79557cd"
  },
  {
    "url": "lib/template/index.html",
    "revision": "233699bf64aa09bd52d20bc4e2e87c5b"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "a285f48ba1b06887f798e57c0cbbae24"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "cb555115cd42374a28ce9db89e61d282"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "3791edea817bcffa439c458d39cfc2bb"
  },
  {
    "url": "lib/zxing.html",
    "revision": "36231074bfe8ab0d8af7c9456aa017a7"
  },
  {
    "url": "mq/activemq.html",
    "revision": "b8657464e9fb4a6f5847f9c942f9704c"
  },
  {
    "url": "mq/index.html",
    "revision": "783843ad5fcc2737224a2da80edeabd7"
  },
  {
    "url": "mq/mq-interview.html",
    "revision": "f59daf2034ba26fc23f7d2ac7d3d11ce"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "8230360a5bc95f39be6574132604d7a2"
  },
  {
    "url": "security/index.html",
    "revision": "d4abe487a38e4e8b0c50864d6d51e97a"
  },
  {
    "url": "security/shiro.html",
    "revision": "b8ff5f95ec589220460ef4fc59b026af"
  },
  {
    "url": "security/spring-security.html",
    "revision": "53b405dbbf8bdea6670e32e8c69b4ce6"
  },
  {
    "url": "server/index.html",
    "revision": "32a6c1e77f4a18b5d305df8f5a02171c"
  },
  {
    "url": "server/jetty.html",
    "revision": "ddab70a81c94ad6f315be4c9f201c1c9"
  },
  {
    "url": "server/tomcat.html",
    "revision": "2d13e133d9d9a98d703f25788cfd78ac"
  },
  {
    "url": "soa/dubbo.html",
    "revision": "803f5836608200ddcb49bf892cde1642"
  },
  {
    "url": "soa/index.html",
    "revision": "d111709339106c458a120dda98104fb6"
  },
  {
    "url": "soa/netty.html",
    "revision": "450891f77326f1e1fca8b7dcc71d0714"
  },
  {
    "url": "test/index.html",
    "revision": "785e66b815be22459d613821de46ad71"
  },
  {
    "url": "test/jmeter.html",
    "revision": "4bb34c7a08b20c407bf8fc746e7e502e"
  },
  {
    "url": "test/jmh.html",
    "revision": "4e81424c2ebd48679bff5e62e05bd6c6"
  },
  {
    "url": "test/junit.html",
    "revision": "9121a98e009cf2ffc25c2c57e7ecfab8"
  },
  {
    "url": "test/mockito.html",
    "revision": "eec15609c7095b2ebbbceab8545ece6a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
