
import msvcrt
text = "hello from the python  script"

def speak () :
    return 'foobar'

dic = {'code1':0 , 'code2':1 , 'helloworld':speak}

dict={
    'state1':1,
    'state2':2
}

print('dict1',dict['state1'])

# Ваш код здесь
def foo () :
    print("hello world" , dic["code1"] , dic.get('nope' , 'default string') , dic.get('helloworld')())
foo()

# exec('filje:///C:/Users/user/Desktop/boooks/sorted-books-by-python/python_files/Python%20glazami%20hakera.pdf')

print(text) 
print("Нажмите любую клавишу, чтобы закрыть окно...")
msvcrt.getch()

   
