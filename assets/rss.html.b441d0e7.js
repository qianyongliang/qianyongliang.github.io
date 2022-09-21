import{_ as c,r as o,o as p,c as r,a as s,b as e,w as a,d as l,e as n}from"./app.5b28be51.js";const u={},d=l('<p><a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-rss/v/next" target="_blank"><img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-rss/next.svg?style=flat-square&amp;logo=npm" style="display:inline;margin:0 4px 0 0;" alt="npm"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/rss" target="_blank"><img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--rss-26A2FF?style=flat-square&amp;logo=github" style="display:inline;margin:0 4px 0 0;" alt="github"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/rss/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display:inline;margin:0 4px 0 0;" alt="license"></a></p><p><code>@renovamen/vuepress-plugin-rss</code> \u63D2\u4EF6\uFF0C\u7528\u4E8E\u4E3A <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress 2</a> \u4E3B\u9898 Gungnir \u63D0\u4F9B RSS \u652F\u6301\u3002\u4FEE\u6539\u81EA <a href="https://github.com/youngtailors/vuepress-plugin-rss" target="_blank" rel="noopener noreferrer">youngtailors/vuepress-plugin-rss</a>\u3002</p>',2),m={class:"custom-container warning"},g={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},v=s("path",{d:"M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z",style:{fill:"#f3cc2e","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.18)"},null,-1),h=[v],k=s("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),b=s("p",null,"\u8BE5\u63D2\u4EF6\u4EC5\u80FD\u4FDD\u8BC1\u5728 VuePress \u4E3B\u9898 Gungnir \u4E0A\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u5728\u522B\u7684 VuePress \u4E3B\u9898\u4E0A\u53EF\u80FD\u4F1A\u65E0\u6548\u3002",-1),_=s("h2",{id:"\u5B89\u88C5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),n(" \u5B89\u88C5")],-1),f=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),n(),s("span",{class:"token function"},"install"),n(` @renovamen/vuepress-plugin-rss@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),y=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(` @renovamen/vuepress-plugin-rss@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),x=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(` @renovamen/vuepress-plugin-rss@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),q=l(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u5728 <code>.vuepress/config.js</code> \u4E2D\u914D\u7F6E\u63D2\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> rssPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@renovamen/vuepress-plugin-rss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">rssPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">siteURL</span><span class="token operator">:</span> <span class="token string">&quot;https://zxh.io&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u7F51\u7AD9\u94FE\u63A5 \uFF08\u5FC5\u987B\uFF09</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u4F2F\u5229\u4E9A\u5927\u6076\u9F99\u7684\u535A\u5BA2&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u7F51\u7AD9\u6807\u9898\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\uFF1A\`themeConfig.title\`\uFF09</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;\u4E00\u4E2A\u7531 VuePress \u548C Gungnir \u5F3A\u529B\u9A71\u52A8\u7684\u535A\u5BA2&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u7F51\u7AD9\u63CF\u8FF0\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\uFF1A&quot;&quot;\uFF09</span>
      <span class="token literal-property property">copyright</span><span class="token operator">:</span> <span class="token string">&quot;Renovamen 2018-2021&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u7248\u6743\u4FE1\u606F\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\uFF1A&quot;&quot;\uFF09</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>  <span class="token comment">// \u9700\u8981\u5728\u751F\u6210\u7684 RSS \u6587\u4EF6\u4E0A\u663E\u793A\u591A\u5C11\u7BC7\u6587\u7AE0\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\uFF1A20\uFF09</span>
      <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span>  <span class="token comment">// \u6587\u7AE0\u7B5B\u9009\u51FD\u6570\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\uFF1A(page) =&gt; true\uFF09</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F00\u6E90\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5F00\u6E90\u534F\u8BAE" aria-hidden="true">#</a> \u5F00\u6E90\u534F\u8BAE</h2><p><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/rss/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a></p>`,5);function w(C,N){const t=o("CodeGroupItem"),i=o("CodeGroup");return p(),r("div",null,[d,s("div",m,[(p(),r("svg",g,h)),k,b]),_,e(i,null,{default:a(()=>[e(t,{title:"PNPM",active:""},{default:a(()=>[f]),_:1}),e(t,{title:"YARN",active:""},{default:a(()=>[y]),_:1}),e(t,{title:"NPM"},{default:a(()=>[x]),_:1})]),_:1}),q])}var V=c(u,[["render",w],["__file","rss.html.vue"]]);export{V as default};
