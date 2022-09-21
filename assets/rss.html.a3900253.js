import{_ as o,r as p,o as a,c as t,a as s,b as l,w as c,e as n,d as r}from"./app.5b28be51.js";const i={},u={class:"custom-container info"},d={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},k=s("path",{d:"M13 1.188C6.477 1.188 1.188 6.477 1.188 13S6.477 24.813 13 24.813 24.813 19.523 24.813 13c0-6.523-5.29-11.812-11.813-11.812Zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827Zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193Z",style:{fill:"#157ffb","fill-rule":"nonzero"},transform:"translate(-1.257 -1.257) scale(1.0582)"},null,-1),m=[k],v=s("p",{class:"custom-container-title"},"\u4FE1\u606F",-1),_=s("p",null,"\u9ED8\u8BA4\u4E0D\u542F\u7528\u8BE5\u529F\u80FD\u3002",-1),h=n("\u901A\u8FC7\u63D2\u4EF6 "),g=n("plugin-rss"),f=n(" \u6765\u63D0\u4F9B RSS \u652F\u6301\uFF0C\u751F\u6210\u7684\u6587\u4EF6\u8DEF\u5F84\u4E3A "),b=s("code",null,"./rss.xml",-1),y=n("\u3002\u63D2\u4EF6\u914D\u7F6E\uFF1A"),q=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">gungnirTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">themePlugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">siteURL</span><span class="token operator">:</span> <span class="token string">&quot;https://zxh.io&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u7F51\u7AD9\u94FE\u63A5 \uFF08\u5FC5\u987B\uFF09</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u897F\u4F2F\u5229\u4E9A\u5927\u6076\u9F99\u7684\u535A\u5BA2&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u7F51\u7AD9\u6807\u9898\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\uFF1A\`themeConfig.title\`\uFF09</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;\u4E00\u4E2A\u7531 VuePress \u548C Gungnir \u5F3A\u529B\u9A71\u52A8\u7684\u535A\u5BA2&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u7F51\u7AD9\u63CF\u8FF0\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\uFF1A&quot;&quot;\uFF09</span>
      <span class="token literal-property property">copyright</span><span class="token operator">:</span> <span class="token string">&quot;Renovamen 2018-2021&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u7248\u6743\u4FE1\u606F\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\uFF1A&quot;&quot;\uFF09</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>  <span class="token comment">// \u9700\u8981\u5728\u751F\u6210\u7684 RSS \u6587\u4EF6\u4E0A\u663E\u793A\u591A\u5C11\u7BC7\u6587\u7AE0\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\uFF1A20\uFF09</span>
      <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span>  <span class="token comment">// \u6587\u7AE0\u7B5B\u9009\u51FD\u6570\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\uFF1A(page) =&gt; true\uFF09</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="/rss.xml">\u8FD9\u91CC</a>\u662F\u672C\u7AD9\u7684 RSS \u6587\u4EF6\u3002</p>`,2);function x(S,w){const e=p("RouterLink");return a(),t("div",null,[s("div",u,[(a(),t("svg",d,m)),v,_]),s("p",null,[h,l(e,{to:"/zh/docs/plugins/rss/"},{default:c(()=>[g]),_:1}),f,b,y]),q])}var V=o(i,[["render",x],["__file","rss.html.vue"]]);export{V as default};
