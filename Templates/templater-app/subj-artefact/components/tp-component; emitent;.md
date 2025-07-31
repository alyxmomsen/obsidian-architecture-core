<%*

const level = await tp.system.prompt('enter header symbol (#) level' , 1)

%><% `${'#'.repeat(Number.parseInt(level))} emitent` %>
<% `%% content %%` %>
