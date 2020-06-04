(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{478:function(t,s,a){"use strict";a.r(s);var v=a(14),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"缓存面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存面试题"}},[t._v("#")]),t._v(" 缓存面试题")]),t._v(" "),a("h2",{attrs:{id:"为什么用缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么用缓存"}},[t._v("#")]),t._v(" 为什么用缓存")]),t._v(" "),a("p",[t._v("用缓存，主要有两个用途："),a("strong",[t._v("高性能")]),t._v("、"),a("strong",[t._v("高并发")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"高性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高性能"}},[t._v("#")]),t._v(" 高性能")]),t._v(" "),a("p",[t._v("假设这么个场景，你有个操作，一个请求过来，吭哧吭哧你各种乱七八糟操作 mysql，半天查出来一个结果，耗时 600ms。但是这个结果可能接下来几个小时都不会变了，或者变了也可以不用立即反馈给用户。那么此时咋办？")]),t._v(" "),a("p",[t._v("缓存啊，折腾 600ms 查出来的结果，扔缓存里，一个 key 对应一个 value，下次再有人查，别走 mysql 折腾 600ms 了，直接从缓存里，通过一个 key 查出来一个 value，2ms 搞定。性能提升 300 倍。")]),t._v(" "),a("p",[t._v("就是说对于一些需要复杂操作耗时查出来的结果，且确定后面不怎么变化，但是有很多读请求，那么直接将查询出来的结果放在缓存中，后面直接读缓存就好。")]),t._v(" "),a("h3",{attrs:{id:"高并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高并发"}},[t._v("#")]),t._v(" 高并发")]),t._v(" "),a("p",[t._v("mysql 这么重的数据库，压根儿设计不是让你玩儿高并发的，虽然也可以玩儿，但是天然支持不好。mysql 单机支撑到 "),a("code",[t._v("2000QPS")]),t._v(" 也开始容易报警了。")]),t._v(" "),a("p",[t._v("所以要是你有个系统，高峰期一秒钟过来的请求有 1 万，那一个 mysql 单机绝对会死掉。你这个时候就只能上缓存，把很多数据放缓存，别放 mysql。缓存功能简单，说白了就是 "),a("code",[t._v("key-value")]),t._v(" 式操作，单机支撑的并发量轻松一秒几万十几万，支撑高并发 so easy。单机承载并发量是 mysql 单机的几十倍。")]),t._v(" "),a("blockquote",[a("p",[t._v("缓存是走内存的，内存天然就支撑高并发。")])]),t._v(" "),a("h2",{attrs:{id:"缓存淘汰算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存淘汰算法"}},[t._v("#")]),t._v(" 缓存淘汰算法")]),t._v(" "),a("p",[t._v("常见的缓存淘汰算法有以下几种：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("FIFO")]),t._v(" - 先进先出，在这种淘汰算法中，先进入缓存的会先被淘汰。这种可谓是最简单的了，但是会导致我们命中率很低。试想一下我们如果有个访问频率很高的数据是所有数据第一个访问的，而那些不是很高的是后面再访问的，那这样就会把我们的首个数据但是他的访问频率很高给挤出。")]),t._v(" "),a("li",[a("strong",[t._v("LRU")]),t._v(" - 最近最少使用算法。在这种算法中避免了上面的问题，每次访问数据都会将其放在我们的队尾，如果需要淘汰数据，就只需要淘汰队首即可。但是这个依然有个问题，如果有个数据在 1 个小时的前 59 分钟访问了 1 万次(可见这是个热点数据),再后一分钟没有访问这个数据，但是有其他的数据访问，就导致了我们这个热点数据被淘汰。")]),t._v(" "),a("li",[a("strong",[t._v("LFU")]),t._v(" - 最近最少频率使用。在这种算法中又对上面进行了优化，利用额外的空间记录每个数据的使用频率，然后选出频率最低进行淘汰。这样就避免了 LRU 不能处理时间段的问题。")])]),t._v(" "),a("p",[t._v("这三种缓存淘汰算法，实现复杂度一个比一个高，同样的命中率也是一个比一个好。而我们一般来说选择的方案居中即可，即实现成本不是太高，而命中率也还行的 LRU。")]),t._v(" "),a("p",[t._v("一个简单的 LRU 实现：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LRUCache")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保持插入顺序")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LRUCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("capacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedHashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保证每次查询后，都在末尾")]),t._v("\n            map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" iterator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entrySet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"缓存方案技术选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存方案技术选型"}},[t._v("#")]),t._v(" 缓存方案技术选型")]),t._v(" "),a("h3",{attrs:{id:"整体缓存方案（多级缓存）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体缓存方案（多级缓存）"}},[t._v("#")]),t._v(" 整体缓存方案（多级缓存）")]),t._v(" "),a("p",[t._v("实际的应用中，往往不是单独使用某一种缓存技术，而是组合使用多种缓存。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("CDN 缓存")]),t._v(" - 存放 HTML、CSS、JS 等静态资源。")]),t._v(" "),a("li",[a("strong",[t._v("反向代理缓存")]),t._v(" - 动静分离，只缓存用户请求的静态资源。")]),t._v(" "),a("li",[a("strong",[t._v("进程内缓存")]),t._v(" - 缓存应用字典等常用数据。")]),t._v(" "),a("li",[a("strong",[t._v("分布式缓存")]),t._v(" - 缓存数据库中的热点数据。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javaweb/technology/cache/%E7%BC%93%E5%AD%98%E6%95%B4%E4%BD%93%E6%9E%B6%E6%9E%84.png",alt:"img"}})]),t._v(" "),a("p",[t._v("上图展示了常见的缓存整体解决方案：")]),t._v(" "),a("ol",[a("li",[t._v("浏览器向客户端发起请求，如果 CDN 有缓存则直接返回；")]),t._v(" "),a("li",[t._v("如果 CDN 无缓存，则访问反向代理服务器；")]),t._v(" "),a("li",[t._v("如果反向代理服务器有缓存则直接返回；")]),t._v(" "),a("li",[t._v("如果反向代理服务器无缓存或动态请求，则访问应用服务器；")]),t._v(" "),a("li",[t._v("应用服务器访问进程内缓存；如果有缓存，则返回代理服务器，并缓存数据；（动态请求不缓存）")]),t._v(" "),a("li",[t._v("如果进程内缓存无数据，则读取分布式缓存；并返回应用服务器；应用服务器将数据缓存到本地缓存（部分）；")]),t._v(" "),a("li",[t._v("如果分布式缓存无数据，则应用程序读取数据库数据，并放入分布式缓存；")])]),t._v(" "),a("p",[t._v("Java 应用主要关注的是进程内缓存和分布式缓存。")]),t._v(" "),a("h3",{attrs:{id:"进程内缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程内缓存"}},[t._v("#")]),t._v(" 进程内缓存")]),t._v(" "),a("p",[t._v("常见的本地缓存实现方案：HashMap、Guava Cache、Caffeine、Ehcache。")]),t._v(" "),a("p",[t._v("技术对比：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("比较项")]),t._v(" "),a("th",[t._v("ConcurrentHashMap")]),t._v(" "),a("th",[t._v("LRUMap")]),t._v(" "),a("th",[t._v("Ehcache")]),t._v(" "),a("th",[t._v("Guava Cache")]),t._v(" "),a("th",[t._v("Caffeine")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("读写性能")]),t._v(" "),a("td",[t._v("很好，分段锁")]),t._v(" "),a("td",[t._v("一般，全局加锁")]),t._v(" "),a("td",[t._v("好")]),t._v(" "),a("td",[t._v("好，需要做淘汰操作")]),t._v(" "),a("td",[t._v("很好")])]),t._v(" "),a("tr",[a("td",[t._v("淘汰算法")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("LRU，一般")]),t._v(" "),a("td",[t._v("支持多种淘汰算法,LRU,LFU,FIFO")]),t._v(" "),a("td",[t._v("LRU，一般")]),t._v(" "),a("td",[t._v("W-TinyLFU, 很好")])]),t._v(" "),a("tr",[a("td",[t._v("功能丰富程度")]),t._v(" "),a("td",[t._v("功能比较简单")]),t._v(" "),a("td",[t._v("功能比较单一")]),t._v(" "),a("td",[t._v("功能很丰富")]),t._v(" "),a("td",[t._v("功能很丰富，支持刷新和虚引用等")]),t._v(" "),a("td",[t._v("功能和 Guava Cache 类似")])]),t._v(" "),a("tr",[a("td",[t._v("工具大小")]),t._v(" "),a("td",[t._v("jdk 自带类，很小")]),t._v(" "),a("td",[t._v("基于 LinkedHashMap，较小")]),t._v(" "),a("td",[t._v("很大，最新版本 1.4MB")]),t._v(" "),a("td",[t._v("是 Guava 工具类中的一个小部分，较小")]),t._v(" "),a("td",[t._v("一般，最新版本 644KB")])]),t._v(" "),a("tr",[a("td",[t._v("是否持久化")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("否")])]),t._v(" "),a("tr",[a("td",[t._v("是否支持集群")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("否")])])])]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("ConcurrentHashMap")])]),t._v(" - 比较适合缓存比较固定不变的元素，且缓存的数量较小的。虽然从上面表格中比起来有点逊色，但是其由于是 JDK 自带的类，在各种框架中依然有大量的使用，比如我们可以用来缓存我们反射的 Method，Field 等等；也可以缓存一些链接，防止其重复建立。在 Caffeine 中也是使用的 "),a("code",[t._v("ConcurrentHashMap")]),t._v(" 来存储元素。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("LRUMap")])]),t._v(" - 如果不想引入第三方包，又想使用淘汰算法淘汰数据，可以使用这个。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("Ehcache")])]),t._v(" - 由于其 jar 包很大，较重量级。对于需要持久化和集群的一些功能的，可以选择 Ehcache。需要注意的是，虽然 Ehcache 也支持分布式缓存，但是由于其节点间通信方式为 rmi，表现不如 Redis，所以一般不建议用它来作为分布式缓存。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("Guava Cache")])]),t._v(" - Guava 这个 jar 包在很多 Java 应用程序中都有大量的引入，所以很多时候其实是直接用就好了，并且其本身是轻量级的而且功能较为丰富，在不了解 Caffeine 的情况下可以选择 Guava Cache。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("Caffeine")])]),t._v(" - 其在命中率，读写性能上都比 Guava Cache 好很多，并且其 API 和 Guava cache 基本一致，甚至会多一点。在真实环境中使用 Caffeine，取得过不错的效果。")])]),t._v(" "),a("p",[t._v("总结一下：如果不需要淘汰算法则选择 "),a("code",[t._v("ConcurrentHashMap")]),t._v("，如果需要淘汰算法和一些丰富的 API，推荐选择 Caffeine。")]),t._v(" "),a("h3",{attrs:{id:"分布式缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式缓存"}},[t._v("#")]),t._v(" 分布式缓存")]),t._v(" "),a("p",[t._v("这里选取三个比较出名的分布式缓存（MemCache，Redis，Tair）来作为比较：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("比较项")]),t._v(" "),a("th",[t._v("MemCache")]),t._v(" "),a("th",[t._v("Redis")]),t._v(" "),a("th",[t._v("Tair")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("数据结构")]),t._v(" "),a("td",[t._v("只支持简单的 Key-Value 结构")]),t._v(" "),a("td",[t._v("String,Hash, List, Set, Sorted Set")]),t._v(" "),a("td",[t._v("String,HashMap, List，Set")])]),t._v(" "),a("tr",[a("td",[t._v("持久化")]),t._v(" "),a("td",[t._v("不支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")])]),t._v(" "),a("tr",[a("td",[t._v("容量大小")]),t._v(" "),a("td",[t._v("数据纯内存，数据存储不宜过多")]),t._v(" "),a("td",[t._v("数据全内存，资源成本考量不宜超过 100GB")]),t._v(" "),a("td",[t._v("可以配置全内存或内存+磁盘引擎，数据容量可无限扩充")])]),t._v(" "),a("tr",[a("td",[t._v("读写性能")]),t._v(" "),a("td",[t._v("很高")]),t._v(" "),a("td",[t._v("很高(RT0.5ms 左右)")]),t._v(" "),a("td",[t._v("String 类型比较高(RT1ms 左右)，复杂类型比较慢(RT5ms 左右)")])]),t._v(" "),a("tr",[a("td",[t._v("过期策略")]),t._v(" "),a("td",[t._v("过期后，不删除缓存")]),t._v(" "),a("td",[t._v("有多种过期策略")]),t._v(" "),a("td",[t._v("支持")])])])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("MemCache")]),t._v(" - 这一块接触得比较少，不做过多的推荐。其吞吐量较大，但是支持的数据结构较少，并且不支持持久化。")]),t._v(" "),a("li",[a("code",[t._v("Redis")]),t._v(" - 支持丰富的数据结构，读写性能很高，但是数据全内存，必须要考虑资源成本，支持持久化。")]),t._v(" "),a("li",[a("code",[t._v("Tair")]),t._v(" - 支持丰富的数据结构，读写性能较高，部分类型比较慢，理论上容量可以无限扩充。")])]),t._v(" "),a("p",[t._v("总结：如果服务对延迟比较敏感，Map/Set 数据也比较多的话，比较适合 Redis。如果服务需要放入缓存量的数据很大，对延迟又不是特别敏感的话，那就可以选择 Tair。")]),t._v(" "),a("h2",{attrs:{id:"缓存常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存常见问题"}},[t._v("#")]),t._v(" 缓存常见问题")]),t._v(" "),a("h3",{attrs:{id:"缓存雪崩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[t._v("#")]),t._v(" 缓存雪崩")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("缓存雪崩是指缓存不可用或者大量缓存由于超时时间相同在同一时间段失效，大量请求直接访问数据库，数据库压力过大导致系统雪崩")]),t._v("。")])]),t._v(" "),a("p",[t._v("缓存雪崩的事前事中事后的解决方案如下：")]),t._v(" "),a("ul",[a("li",[t._v("事前：Redis 高可用，使用 Redis Cluster（主从+哨兵），避免全盘崩溃。")]),t._v(" "),a("li",[t._v("事中：本地缓存（Ehcache/Caffine/Google Cache） + Hystrix 限流&降级，避免数据库崩溃。")]),t._v(" "),a("li",[t._v("事后：Redis 持久化，一旦重启，自动从磁盘上加载数据，快速恢复缓存数据。")])]),t._v(" "),a("p",[t._v("上面的解决方案简单来说，就是多级缓存方案。系统收到一个查询请求，先查本地缓存，再查分布式缓存，最后查数据库，只要命中，立即返回。")]),t._v(" "),a("p",[t._v("辅助性手段：")]),t._v(" "),a("ul",[a("li",[t._v("通过监控关注缓存的健康程度，根据业务量适当的扩容缓存。")]),t._v(" "),a("li",[t._v("缓存的过期时间可以取个随机值。比如以前是设置 10 分钟的超时时间，那每个 Key 都可以随机 8-13 分钟过期，尽量让不同 Key 的过期时间不同。")])]),t._v(" "),a("h3",{attrs:{id:"缓存穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[t._v("#")]),t._v(" 缓存穿透")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("缓存穿透是指：查询的数据在数据库中不存在，那么缓存中自然也不存在。所以，应用在缓存中查不到，则会去查询数据库。当这样的请求多了后，数据库的压力就会增大。")])])]),t._v(" "),a("p",[t._v("解决缓存穿透，一般有两种方法：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("对于返回为 NULL 的依然缓存，对于抛出异常的返回不进行缓存")]),t._v("。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javaweb/technology/cache/缓存穿透1.png!zp",width:"350px"}})]),t._v(" "),a("p",[t._v("采用这种手段的会增加我们缓存的维护成本，需要在插入缓存的时候删除这个空缓存，当然我们可以通过设置较短的超时时间来解决这个问题。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("过滤不可能存在的数据")])])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javaweb/technology/cache/缓存穿透2.png!zp",width:"350px"}})]),t._v(" "),a("p",[a("strong",[t._v("制定一些规则过滤一些不可能存在的数据")]),t._v("。小数据用 BitMap，大数据可以用布隆过滤器，比如你的订单 ID 明显是在一个范围 1-1000，如果不是 1-1000 之内的数据那其实可以直接给过滤掉。")]),t._v(" "),a("h3",{attrs:{id:"缓存击穿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[t._v("#")]),t._v(" 缓存击穿")]),t._v(" "),a("p",[t._v("缓存击穿是指，某些 key 是热点数据，访问非常频繁。如果某个 key 失效的瞬间，大量的请求过来，缓存未命中，然后去数据库访问，此时数据库访问量会急剧增加。")]),t._v(" "),a("p",[t._v("为了避免这个问题，我们可以采取下面的两个手段:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("分布式锁")]),t._v(" - 锁住热点数据的 key，避免大量线程同时访问同一个 key。")]),t._v(" "),a("li",[a("strong",[t._v("异步加载")]),t._v(" - 可以对部分数据采取到期自动刷新的策略，而不是到期自动淘汰。淘汰其实也是为了数据的时效性，所以采用自动刷新也可以。")])]),t._v(" "),a("h3",{attrs:{id:"缓存更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存更新"}},[t._v("#")]),t._v(" 缓存更新")]),t._v(" "),a("p",[t._v("一般来说，系统如果不是严格要求缓存和数据库保持一致性的话，尽量不要将"),a("strong",[t._v("读请求和写请求串行化")]),t._v("。串行化可以保证一定不会出现数据不一致的情况，但是它会导致系统的吞吐量大幅度下降。")]),t._v(" "),a("p",[t._v("一般来说缓存的更新有两种情况:")]),t._v(" "),a("ul",[a("li",[t._v("先删除缓存，再更新数据库。")]),t._v(" "),a("li",[t._v("先更新数据库，再删除缓存。")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("为什么是删除缓存，而不是更新缓存呢？")])]),t._v(" "),a("p",[t._v("你可以想想当有多个并发的请求更新数据，你并不能保证更新数据库的顺序和更新缓存的顺序一致，那就会出现数据库中和缓存中数据不一致的情况。所以一般来说考虑删除缓存。")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("先删除缓存，再更新数据库")])])]),t._v(" "),a("p",[t._v("对于一个更新操作简单来说，就是先去各级缓存进行删除，然后更新数据库。")]),t._v(" "),a("p",[t._v("这个操作有一个比较大的问题，在对缓存删除完之后，有一个读请求，这个时候由于缓存被删除所以直接会读库，读操作的数据是老的并且会被加载进入缓存当中，后续读请求全部访问的老数据。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javaweb/technology/cache/缓存更新.png!zp",width:"400px"}})]),t._v(" "),a("p",[t._v("对缓存的操作不论成功失败都不能阻塞我们对数据库的操作，那么很多时候删除缓存可以用异步的操作，但是先删除缓存不能很好的适用于这个场景。")]),t._v(" "),a("p",[t._v("先删除缓存也有一个好处是，如果对数据库操作失败了，那么由于先删除的缓存，最多只是造成 Cache Miss。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("先更新数据库，再删除缓存")])])]),t._v(" "),a("blockquote",[a("p",[t._v("注：更推荐使用这种策略")])]),t._v(" "),a("p",[t._v("如果我们使用更新数据库，再删除缓存就能避免上面的问题。")]),t._v(" "),a("p",[t._v("但是同样的引入了新的问题：假设执行更新操作时，又接收到查询请求，此时就会返回缓存中的老数据。更麻烦的是，如果数据库更新操作执行失败，则缓存中可能永远是脏数据。")]),t._v(" "),a("ul",[a("li",[t._v("应该选择哪种更新策略")])]),t._v(" "),a("p",[t._v("通过上面的内容，我们知道，两种更新策略都存在并发问题。")]),t._v(" "),a("p",[t._v("但是建议选择先更新数据库，再删除缓存，因为其并发问题出现的概率可能非常低，因为这个条件需要发生在读缓存时缓存失效，而且同时有一个并发写操作。而实际上数据库的写操作会比读操作慢得多，而且还要锁表，而读操作必需在写操作前进入数据库操作，而又要晚于写操作更新缓存，所有的这些条件都具备的概率基本并不大。")]),t._v(" "),a("p",[t._v("如果需要数据库和缓存保证强一致性，则可以通过 2PC 或 Paxos 协议来实现。但是 2PC 太慢，而 Paxos 太复杂，所以如果不是非常重要的数据，不建议使用强一致性方案。")]),t._v(" "),a("h3",{attrs:{id:"缓存预热"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存预热"}},[t._v("#")]),t._v(" 缓存预热")]),t._v(" "),a("p",[t._v("缓存预热是指系统启动后，将常用的数据直接缓存。这样就可以避免用户请求的时候，先查询数据库，然后再更新缓存的问题。")]),t._v(" "),a("p",[t._v("解决方案：")]),t._v(" "),a("ul",[a("li",[t._v("直接写个缓存刷新页面，上线时手工操作下。")]),t._v(" "),a("li",[t._v("数据量不大，可以在项目启动的时候自动进行加载。")]),t._v(" "),a("li",[t._v("定时刷新缓存。")])]),t._v(" "),a("h3",{attrs:{id:"缓存降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存降级"}},[t._v("#")]),t._v(" 缓存降级")]),t._v(" "),a("p",[t._v("当访问量剧增、服务出现问题（如响应时间慢或不响应）或非核心服务影响到核心流程的性能时，仍然需要保证服务还是可用的，即使是有损服务。系统可以根据一些关键数据进行自动降级，也可以配置开关实现人工降级。")]),t._v(" "),a("p",[t._v("降级的最终目的是保证核心服务可用，即使是有损的。而且有些服务是无法降级的（如加入购物车、结算）。")]),t._v(" "),a("h2",{attrs:{id:"redis-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-特性"}},[t._v("#")]),t._v(" Redis 特性")]),t._v(" "),a("p",[t._v("由于 Redis 是目前最流行的分布式缓存方案，所以缓存问题总是会绑定着 Redis 特性一起问。")]),t._v(" "),a("h3",{attrs:{id:"redis-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-数据类型"}},[t._v("#")]),t._v(" Redis 数据类型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("Redis 数据类型有哪些？")]),t._v(" "),a("li",[t._v("Redis 各种数据类型适用于什么样的场景？")])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("解答：")]),t._v(" "),a("p",[t._v("Redis 基本数据类型：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("可以存储的值")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("STRING")]),t._v(" "),a("td",[t._v("字符串、整数或者浮点数")]),t._v(" "),a("td",[t._v("对整个字符串或者字符串的其中一部分执行操作"),a("br"),t._v(" 对整数和浮点数执行自增或者自减操作")])]),t._v(" "),a("tr",[a("td",[t._v("LIST")]),t._v(" "),a("td",[t._v("列表")]),t._v(" "),a("td",[t._v("从两端压入或者弹出元素"),a("br"),t._v(" 读取单个或者多个元素"),a("br"),t._v(" 进行修剪，只保留一个范围内的元素")])]),t._v(" "),a("tr",[a("td",[t._v("SET")]),t._v(" "),a("td",[t._v("无序集合")]),t._v(" "),a("td",[t._v("添加、获取、移除单个元素"),a("br"),t._v(" 检查一个元素是否存在于集合中"),a("br"),t._v(" 计算交集、并集、差集"),a("br"),t._v(" 从集合里面随机获取元素")])]),t._v(" "),a("tr",[a("td",[t._v("HASH")]),t._v(" "),a("td",[t._v("包含键值对的无序散列表")]),t._v(" "),a("td",[t._v("添加、获取、移除单个键值对"),a("br"),t._v(" 获取所有键值对"),a("br"),t._v(" 检查某个键是否存在")])]),t._v(" "),a("tr",[a("td",[t._v("ZSET")]),t._v(" "),a("td",[t._v("有序集合")]),t._v(" "),a("td",[t._v("添加、获取、删除元素"),a("br"),t._v(" 根据分值范围或者成员来获取元素"),a("br"),t._v(" 计算一个键的排名")])])])]),t._v(" "),a("p",[t._v("Redis 各种数据类型的应用比较繁杂，详情可以参考："),a("a",{attrs:{href:"https://github.com/dunwu/db-tutorial/blob/master/docs/nosql/redis/redis-datatype.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 数据类型"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"redis-内存淘汰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-内存淘汰"}},[t._v("#")]),t._v(" Redis 内存淘汰")]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("Redis 有哪些淘汰策略？")]),t._v(" "),a("li",[t._v("这些淘汰策略分别适用于什么场景？")]),t._v(" "),a("li",[t._v("Redis 有哪些删除失效 key 的方法？")]),t._v(" "),a("li",[t._v("如何设置 Redis 中键的过期时间？")]),t._v(" "),a("li",[t._v("如果让你实现一个 LRU 算法，怎么做？")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("解答：")]),t._v(" "),a("p",[t._v("Redis 提供了下面几种内存淘汰策略供用户选：")]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("noeviction")])]),t._v(" - 当内存使用达到阈值的时候，所有引起申请内存的命令会报错。这是 Redis 默认的策略。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("allkeys-lru")])]),t._v(" - 在主键空间中，优先移除最近未使用的 key。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("allkeys-random")])]),t._v(" - 在主键空间中，随机移除某个 key。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("volatile-lru")])]),t._v(" - 在设置了过期时间的键空间中，优先移除最近未使用的 key。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("volatile-random")])]),t._v(" - 在设置了过期时间的键空间中，随机移除某个 key。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("volatile-ttl")])]),t._v(" - 在设置了过期时间的键空间中，具有更早过期时间的 key 优先移除。")])]),t._v(" "),a("p",[t._v("如何选择内存淘汰策略：")]),t._v(" "),a("ul",[a("li",[t._v("如果数据呈现幂等分布，也就是一部分数据访问频率高，一部分数据访问频率低，则使用 "),a("code",[t._v("allkeys-lru")]),t._v("。")]),t._v(" "),a("li",[t._v("如果数据呈现平等分布，也就是所有的数据访问频率都相同，则使用 "),a("code",[t._v("allkeys-random")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("volatile-lru")]),t._v(" 策略和 "),a("code",[t._v("volatile-random")]),t._v(" 策略适合我们将一个 Redis 实例既应用于缓存和又应用于持久化存储的时候，然而我们也可以通过使用两个 Redis 实例来达到相同的效果。")]),t._v(" "),a("li",[t._v("将 key 设置过期时间实际上会消耗更多的内存，因此我们建议使用 "),a("code",[t._v("allkeys-lru")]),t._v(" 策略从而更有效率的使用内存。")])]),t._v(" "),a("p",[t._v("Redis 删除失效主键的方法主要有两种：")]),t._v(" "),a("ul",[a("li",[t._v("消极方法（passive way），在主键被访问时如果发现它已经失效，那么就删除它。")]),t._v(" "),a("li",[t._v("主动方法（active way），周期性地从设置了失效时间的主键中选择一部分失效的主键删除。")])]),t._v(" "),a("h3",{attrs:{id:"redis-持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-持久化"}},[t._v("#")]),t._v(" Redis 持久化")]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("Redis 有哪些持久化方式？")]),t._v(" "),a("li",[t._v("Redis 的不同持久化方式的特性和原理是什么？")]),t._v(" "),a("li",[t._v("RDB 和 AOF 各有什么优缺点？分别适用于什么样的场景？")]),t._v(" "),a("li",[t._v("Redis 执行持久化时，可以处理请求吗？")]),t._v(" "),a("li",[t._v("AOF 有几种同步频率？")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("解答：")]),t._v(" "),a("p",[t._v("Redis 支持两种持久化方式：RDB 和 AOF。")]),t._v(" "),a("p",[t._v("RDB 即快照方式，它将某个时间点的所有 Redis 数据保存到一个经过压缩的二进制文件（RDB 文件）中。")]),t._v(" "),a("p",[t._v("AOF(Append Only File) 是以文本日志形式将所有写命令追加到 AOF 文件的末尾，以此来记录数据的变化。")]),t._v(" "),a("p",[t._v("更详细的特性及原理说明请参考："),a("a",{attrs:{href:"https://github.com/dunwu/db-tutorial/blob/master/docs/nosql/redis/redis-persistence.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 持久化"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"redis-高并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-高并发"}},[t._v("#")]),t._v(" Redis 高并发")]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("Redis 是单线程模型，为何吞吐量还很高？")]),t._v(" "),a("li",[t._v("Redis 集群如何分片和寻址？")]),t._v(" "),a("li",[t._v("Redis 集群如何扩展？")]),t._v(" "),a("li",[t._v("Redis 集群如何保证数据一致？")]),t._v(" "),a("li",[t._v("Redis 集群如何规划？你们公司的生产环境上如何部署 Redis 集群？")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("解答：")]),t._v(" "),a("p",[t._v("Redis 单机吞吐量也很高，能达到几万 QPS，但需要格外注意的是："),a("strong",[t._v("Redis 是单线程模型")]),t._v("。很多人可能会奇怪，Redis 是单线程模型，如何能处理高并发请求呢？")]),t._v(" "),a("p",[t._v("原因在于：")]),t._v(" "),a("ul",[a("li",[t._v("Redis 读写都是内存操作。")]),t._v(" "),a("li",[t._v("Redis 基于"),a("strong",[t._v("非阻塞的 IO 多路复用机制")]),t._v("，同时监听多个 socket，将产生事件的 socket 压入内存队列中，事件分派器根据 socket 上的事件类型来选择对应的事件处理器进行处理。")]),t._v(" "),a("li",[t._v("单线程，避免了线程创建、销毁、上下文切换的开销，并且避免了资源竞争。")])]),t._v(" "),a("p",[t._v("Redis 的高并发通过主从架构来实现。Redis 集群采用主从模型，提供复制和故障转移功能，来保证 Redis 集群的高可用。通常情况，一主多从模式已经可以满足大部分项目的需要。根据实际的并发量，可以通过增加节点来扩展并发吞吐。")]),t._v(" "),a("p",[t._v("一主多从模式下，主节点负责写操作（单机几万 QPS），从节点负责查询操作（单机十万 QPS）。")]),t._v(" "),a("p",[t._v("进一步，如果需要缓存大量数据，就需要分区（sharding），Redis 集群通过划分虚拟 hash 槽来分片，进行数据分享。")]),t._v(" "),a("p",[t._v("根据 CAP 理论，Consistency、Availability、Partition tolerance 三者不可兼得，而 Redis 集群的选择是 AP。Redis 集群节点间采用异步通信方式，不保证强一致性，尽力达到最终一致性。")]),t._v(" "),a("p",[a("code",[t._v("Redis")]),t._v(" 集群一般由 "),a("strong",[t._v("多个节点")]),t._v(" 组成，节点数量至少为 "),a("code",[t._v("6")]),t._v(" 个，才能保证组成 "),a("strong",[t._v("完整高可用")]),t._v(" 的集群。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/10/10/16db5250b0d1c392?w=1467&h=803&f=png&s=43428",alt:"img"}})]),t._v(" "),a("p",[t._v("更详细的特性及原理说明请参考："),a("a",{attrs:{href:"https://github.com/dunwu/db-tutorial/blob/master/docs/nosql/redis/redis-cluster.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 集群"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"redis-高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-高可用"}},[t._v("#")]),t._v(" Redis 高可用")]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("Redis 如何实现高可用？")]),t._v(" "),a("li",[t._v("Redis 哨兵的功能？")]),t._v(" "),a("li",[t._v("Redis 哨兵的原理？")]),t._v(" "),a("li",[t._v("Redis 哨兵如何选举 Leader？")]),t._v(" "),a("li",[t._v("Redis 如何实现故障转移？")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("解答：")]),t._v(" "),a("p",[t._v("Redis 的高可用是通过哨兵来实现（Raft 协议的 Redis 实现）。Sentinel（哨兵）可以监听主服务器，并在主服务器进入下线状态时，自动从从服务器中选举出新的主服务器。")]),t._v(" "),a("p",[t._v("由一个或多个 Sentinel 实例组成的 Sentinel 系统可以监视任意多个主服务器，以及这些主服务器的所有从服务器，并在被监视的主服务器进入下线状态时，自动将下线主服务器的某个从服务器升级为新的主服务器，然后由新的主服务器代替已下线的主服务器继续处理命令请求。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/snap/20200131135847.png",alt:"img"}})]),t._v(" "),a("p",[t._v("更详细的特性及原理说明请参考："),a("a",{attrs:{href:"https://github.com/dunwu/db-tutorial/blob/master/docs/nosql/redis/redis-sentinel.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 哨兵"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"redis-复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-复制"}},[t._v("#")]),t._v(" Redis 复制")]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("Redis 复制的工作原理？Redis 旧版复制和新版复制有何不同？")]),t._v(" "),a("li",[t._v("Redis 主从节点间如何复制数据？")]),t._v(" "),a("li",[t._v("Redis 的数据一致性是强一致性吗？")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("解答：")]),t._v(" "),a("p",[t._v("旧版复制基于 "),a("code",[t._v("SYNC")]),t._v(" 命令实现。分为同步（sync）和命令传播（command propagate）两个操作。这种方式存在缺陷：不能高效处理断线重连后的复制情况。")]),t._v(" "),a("p",[t._v("新版复制基于 "),a("code",[t._v("PSYNC")]),t._v(" 命令实现。同步操作分为了两块：")]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("完整重同步（full resychronization）")])]),t._v(" 用于初次复制；")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("部分重同步（partial resychronization）")])]),t._v(" 用于断线后重复制。\n"),a("ul",[a("li",[t._v("主从服务器的"),a("strong",[t._v("复制偏移量（replication offset）")])]),t._v(" "),a("li",[t._v("主服务器的"),a("strong",[t._v("复制积压缓冲区（replication backlog）")])]),t._v(" "),a("li",[a("strong",[t._v("服务器的运行 ID")])])])])]),t._v(" "),a("p",[t._v("Redis 集群主从节点复制的工作流程：")]),t._v(" "),a("ul",[a("li",[t._v("步骤 1. 设置主从服务器")]),t._v(" "),a("li",[t._v("步骤 2. 主从服务器建立 TCP 连接。")]),t._v(" "),a("li",[t._v("步骤 3. 发送 PING 检查通信状态。")]),t._v(" "),a("li",[t._v("步骤 4. 身份验证。")]),t._v(" "),a("li",[t._v("步骤 5. 发送端口信息。")]),t._v(" "),a("li",[t._v("步骤 6. 同步。")]),t._v(" "),a("li",[t._v("步骤 7. 命令传播。")])]),t._v(" "),a("p",[t._v("更详细的特性及原理说明请参考："),a("a",{attrs:{href:"https://github.com/dunwu/db-tutorial/blob/master/docs/nosql/redis/redis-replication.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 复制"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"redis-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-事务"}},[t._v("#")]),t._v(" Redis 事务")]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("Redis 支持事务吗？")]),t._v(" "),a("li",[t._v("Redis 事务是严格意义的事务吗？Redis 为什么不支持回滚。")]),t._v(" "),a("li",[t._v("Redis 事务如何工作？")]),t._v(" "),a("li",[t._v("了解 Redis 事务中的 CAS 行为吗？")]),t._v(" "),a("li",[t._v("除了事务，还有其他批量执行 Redis 命令的方式吗？")])]),t._v(" "),a("p",[t._v("解答：")]),t._v(" "),a("p",[a("strong",[t._v("Redis 提供的不是严格的事务，Redis 只保证串行执行命令，并且能保证全部执行，但是执行命令失败时并不会回滚，而是会继续执行下去")]),t._v("。")]),t._v(" "),a("p",[t._v("Redis 不支持回滚的理由：")]),t._v(" "),a("ul",[a("li",[t._v("Redis 命令只会因为错误的语法而失败，或是命令用在了错误类型的键上面。")]),t._v(" "),a("li",[t._v("因为不需要对回滚进行支持，所以 Redis 的内部可以保持简单且快速。")])]),t._v(" "),a("p",[a("code",[t._v("MULTI")]),t._v(" 、 "),a("code",[t._v("EXEC")]),t._v(" 、 "),a("code",[t._v("DISCARD")]),t._v(" 和 "),a("code",[t._v("WATCH")]),t._v(" 是 Redis 事务相关的命令。")]),t._v(" "),a("ul",[a("li",[a("strong",[a("a",{attrs:{href:"https://redis.io/commands/multi",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MULTI")]),a("OutboundLink")],1),t._v(" 命令用于开启一个事务，它总是返回 OK 。")])]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://redis.io/commands/exec",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("EXEC")]),a("OutboundLink")],1),t._v(" 命令负责触发并执行事务中的所有命令。")])]),t._v(" "),a("li",[a("strong",[t._v("当执行 "),a("a",{attrs:{href:"https://redis.io/commands/discard",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DISCARD")]),a("OutboundLink")],1),t._v(" 命令时， 事务会被放弃， 事务队列会被清空， 并且客户端会从事务状态中退出。")])]),t._v(" "),a("li",[t._v("**"),a("a",{attrs:{href:"https://redis.io/commands/watch",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("WATCH")]),a("OutboundLink")],1),t._v(" 命令可以为 Redis 事务提供 check-and-set （CAS）行为。**被 WATCH 的键会被监视，并会发觉这些键是否被改动过了。 如果有至少一个被监视的键在 EXEC 执行之前被修改了， 那么整个事务都会被取消， EXEC 返回 nil-reply 来表示事务已经失败。")])]),t._v(" "),a("p",[t._v("Redis 是一种基于 C/S 模型以及请求/响应协议的 TCP 服务。Redis 支持管道技术。管道技术允许请求以异步方式发送，即旧请求的应答还未返回的情况下，允许发送新请求。这种方式可以大大提高传输效率。使用管道发送命令时，Redis Server 会将部分请求放到缓存队列中（占用内存），执行完毕后一次性发送结果。如果需要发送大量的命令，会占用大量的内存，因此应该按照合理数量分批次的处理。")])])}),[],!1,null,null,null);s.default=_.exports}}]);