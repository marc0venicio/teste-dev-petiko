/*Dada a seguinte definição de dados, escreva uma consulta que retorne o 
número de alunos cujo primeiro nome é John.*/

TABLE students
   id INTEGER PRIMARY KEY,
   firstName VARCHAR(30) NOT NULL,
   lastName VARCHAR(30) NOT NULL

SELECT  COUNT ( * ) FROM students WHERE firstName =  " John " ;