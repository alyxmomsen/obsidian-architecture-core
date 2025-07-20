# @description 

# @context
%%
здесь как правило описываются события предшевствующие возникновению субъекта процесса
%%
# list  : log
%%  
хронологически отсортированые, от недавних к ранее созданным, элементы списка 
%%
## subj : item
## subj : item
# collection : inventory
%% 
здесь храним все что помогает работать с данным процессом
%%
## subj : item
## subj : item
# meta
## list : regex
%% 
regex дает возможность искать тег, если ключевое в теге находится после символа "/"
например "hashtag/foo/bar"
ищем "bar"
regex: 
``/#(\w+\/)*bar/``
%%
### subject
```regex
/./
```
## tags
### specific
#completed/not
### common
#process #process/{{date:YYYY/M/D}} #process/{{date:y}} #process/{{date:y/M}}

#process/M{{date:M}}D{{date:D}} : month/day

#date | #date/{{date:y}} | #date/{{date:y/M}} | #date/{{date:y/M/D}}
#date/M{{date:M}}/D{{date:D}}
