<%*
const y = tp.date.now("YYYY");
const m = tp.date.now("M");
const d = tp.date.now("D");
%><% `# @subject:` %>
<%
`# @document.meta`
%>
<% `#process/${y}/${m}/${d}` %> <% `#process/${y}/${m}` %> <% `#process/${y} #process` %>
<% `#date/${y}/${m}/${d}` %> <% `#date/${y}/${m}` %> <% `#date/${y}` %>
# @document.tags.cloud
%% refresh with template the PrintAllTags 'alt + e (templater hot-key) ; print:"util printall"' %%