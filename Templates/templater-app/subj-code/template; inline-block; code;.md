<%*
const year = tp.date.now('y');
const month = tp.date.now('M');
const date = tp.date.now('D');

const tagsString = `${year} ${year} ${year}` ;

%>
# @code
```txt
%% paste youre code over here %%
```
## @block.local_tags
<% `#date/${year}/${month}/${date}` %> <% `#date/${year}/${month}` %> <% `#date/${year}` %>
 <% `#code/${year}/${month}/${date}` %> <% `#code/${year}/${month}` %> <% `#code/${year}` %>