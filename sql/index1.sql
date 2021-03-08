/*As informações sobre animais de estimação são mantidas em duas tabelas separadas:*/

TABLE dogs
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL

TABLE cats
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL

SELECT name FROM dogs 
UNION 
SELECT name FROM cats

/*Escreva uma consulta que selecione todos os nomes de animais distintos.*/