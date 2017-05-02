-- Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

INSERT INTO burgers (burger_name, devoured)
VALUES("Bison Burger",true);

INSERT INTO burgers (burger_name, devoured)
VALUES("Turkey",false);

INSERT INTO burgers (burger_name, devoured)
VALUES("Veggie",false);
