CREATE TABLE person 
(	person_id serial primary key
,	fname varchar(50) not null
,	lname varchar(50) not null
,	date_of_birth date not null);

CREATE TABLE parent_child 
(	father_id integer reference person(person_id)
,	mother_id integer reference person(person_id)
,	sibling_id integer reference person(person_id)
,	primary key(father_id, mother_id, child_id));

INSERT INTO person (fname, lname, date_of_birth)
VALUES
('Marty', 'McFly', '1970-09-05'),
('George', 'McFly', '1936-10-21'),
('Lorraine', 'McFly', '1937-02-08');



