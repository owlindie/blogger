&lt;script&gt;
//&lt;![CDATA[
numPosts = 10;
function recentPosts(a){if(document.getElementById(&quot;recent-posts&quot;)){var e=a.feed.entry,title,link,content=&quot;&quot;,ct=document.getElementById(&quot;recent-posts&quot;);for(var i=0;i&lt;numPosts;i++){for(var j=0;j&lt;numPosts;j++){if(e[i].link[j].rel==&quot;alternate&quot;){link=e[i].link[j].href;break}}var title=e[i].title.$t;content+=&#39;&lt;li class=&quot;recent-posts&quot;&gt;&lt;a href=&quot;&#39;+link+&#39;&quot; title=&quot;&#39;+title+&#39;&quot; target=&quot;_blank&quot;&gt;&#39;+title+&#39;&lt;/a&gt;&lt;/li&gt;&#39;}ct.innerHTML=content}}var rcp=document.createElement(&#39;script&#39;);rcp.src=&#39;/feeds/posts/summary?alt=json-in-script&amp;orderby=published&amp;max-results=&#39;+numPosts+&#39;&amp;callback=recentPosts&#39;;document.getElementsByTagName(&#39;head&#39;)[0].appendChild(rcp);
//]]&gt;
&lt;/script&gt;
