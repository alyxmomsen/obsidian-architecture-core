<%*
const year = tp.date.now('y');
const month = tp.date.now('M');
const date = tp.date.now('D');

const utilName = 'PrintAllTags' ;
await tp.system.prompt('important! give data about an emitent')
const condition = await tp.system.prompt('Add tags and execute the util component named `' + utilName + '`. Print `true` if you have got it', 'false');
console.log(condition);
%># @emitent
%%  Здесь указывается что было причиной 
генерации этого документа %%
<% `# @subject` %>
<% `# @document` %>
<% `## hash-tags` %>
<% `#date/${year}/${month}/${date}` %> <% `#date/${year}/${month}` 
%> <% `#date/${year}` %>
<% `#artefact/${year}/${month}/${date}` %> <% `#artefact/${year}/${month}` 
%> <% `#artefact/${year} #artefact` %>
<%
`## cloud of hash-tags` %>
<% 
condition == 'false' ? (`%% принт вэ util ` + utilName + " хир %%") : ''
%>