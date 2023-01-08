# SQL - More queries
# Resources
* Read or Watch:
1. [How To Create a New User and Grant Permissions in MySQL](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql)
2. [How To Use MySQL GRANT Statement To Grant Privileges To a User](https://www.mysqltutorial.org/mysql-grant.aspx)
3. [MySQL constraints](https://zetcode.com/mysql/constraints/)
4. [SQL technique: subqueries](https://web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesign.php?page=sql/subqueries.php)
5. [Basic query operation: the join](https://web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesign.php?page=sql/join.php)
6. [SQL technique: multiple joins and the distinct keyword](https://web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesign.php?page=sql/multijoin.php)
7. [SQL technique: join types](https://web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesign.php?page=sql/jointypes.php)
8. [SQL technique: union and minus](https://web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesign.php?page=sql/setops.php)
9. [MySQL Cheat Sheet](https://intellipaat.com/mediaFiles/2019/02/SQL-Commands-Cheat-Sheet.pdf?US)
10. [The Seven Types of SQL Joins](https://tableplus.com/blog/2018/09/a-beginners-guide-to-seven-types-of-sql-joins.html)
11. [MySQL Tutorial](https://www.youtube.com/watch?v=yPu6qV5byu4)
12. [SQL Style Guide](https://www.sqlstyle.guide/)
13. [MySQL 8.0 SQL Statement Syntax](https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html)
Extra resources around relational database model design:
14. [Design](https://www.guru99.com/database-design.html)
15. [Normalization](https://www.guru99.com/database-normalization.html)
16. [ER Modeling](https://www.guru99.com/er-modeling.html)
## 0-privileges.sql
** Write a script that lists all privileges of the MySQL users *user_0d_1 and *user_0d_2 on your server (in *localhost).

## 1-create_user.sql

Write a script that creates the MySQL server user *user_0d_1.

1. *user_0d_1 should have all privileges on your MySQL server
2. The *user_0d_1 password should be set to *user_0d_1_pwd
3. If the user *user_0d_1 already exists, your script should not fail

## 2-create_read_user.sql

Write a script that creates the database *hbtn_0d_2 and the user *user_0d_2.

1. *user_0d_2 should have only SELECT privilege in the database *hbtn_0d_2
2. The *user_0d_2 password should be set to *user_0d_2_pwd
3. If the database *hbtn_0d_2 already exists, your script should not fail
4. If the user *user_0d_2 already exists, your script should not fail

## 3-force_name.sql

Write a script that creates the table *force_name on your MySQL server.

1. *force_name description:
	**id INT
	**name VARCHAR(256) can’t be null
The database name will be passed as an argument of the mysql command
If the table force_name already exists, your script should not fail

## 4-never_empty.sql

Write a script that creates the table id_not_null on your MySQL server.

1. **id_not_null description:
	**id INT with the default value 1
	**name VARCHAR(256)
2. The database name will be passed as an argument of the **mysql command
3. If the table **id_not_null already exists, your script should not fail

## 5-unique_id.sql

Write a script that creates the table **unique_id on your MySQL server.

1. **unique_id description:
	**id INT with the default value 1 and must be unique
	**name VARCHAR(256)
2. The database name will be passed as an argument of the mysql command
3. If the table **unique_id already exists, your script should not fail

## 6-states.sql

Write a script that creates the database hbtn_0d_usa and the table states (in the database hbtn_0d_usa) on your MySQL server.

1. **states description:
	**id INT unique, auto generated, can’t be null and is a primary key
	**name VARCHAR(256) can’t be null
If the database **hbtn_0d_usa already exists, your script should not fail
If the table **states already exists, your script should not fail

## 7-cities.sql

Write a script that creates the database **hbtn_0d_usa and the table **cities (in the database **hbtn_0d_usa) on your MySQL server.

1. **cities description:
	**id INT unique, auto generated, can’t be null and is a primary key
	**state_id INT, can’t be null and must be a FOREIGN KEY that references to id of the states table
	**name VARCHAR(256) can’t be null
2. If the database **hbtn_0d_usa already exists, your script should not fail
3. If the table **cities already exists, your script should not fail

## 8-cities_of_california_subquery.sql

Write a script that lists all the cities of California that can be found in the database **hbtn_0d_usa.

1. The *states table contains only one record where **name = California (but the id can be different, as per the example)
2. Results must be sorted in ascending order by cities.id
3. You are not allowed to use the JOIN keyword
4. The database name will be passed as an argument of the mysql command

## 9-cities_by_state_join.sql

Write a script that lists all cities contained in the database hbtn_0d_usa.

1. Each record should display: cities.id - cities.name - states.name
2. Results must be sorted in ascending order by cities.id
3. You can use only one SELECT statement
4. The database name will be passed as an argument of the mysql command

## 10-genre_id_by_show.sql

Import the database dump from hbtn_0d_tvshows to your MySQL server:  
[download](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sql)

Write a script that lists all shows contained in hbtn_0d_tvshows that have at least one genre linked.

1. Each record should display: tv_shows.title - tv_show_genres.genre_id
2. Results must be sorted in ascending order by tv_shows.title and tv_show_genres.genre_id
3. You can use only one SELECT statement
4. The database name will be passed as an argument of the mysql command

## 11-genre_id_all_shows.sql

Import the database dump of hbtn_0d_tvshows to your MySQL server:[download](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sql) (same as 10-genre_id_by_show.sql)

Write a script that lists all shows contained in the database hbtn_0d_tvshows.

1. Each record should display: tv_shows.title - tv_show_genres.genre_id
2. Results must be sorted in ascending order by tv_shows.title and tv_show_genres.genre_id
3. If a show doesn’t have a genre, display NULL
4. You can use only one SELECT statement
5. The database name will be passed as an argument of the mysql command

## 12-no_genre.sql

Import the database dump from hbtn_0d_tvshows to your MySQL server:[download](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sql) (same as 11-genre_id_all_shows.sql)

Write a script that lists all shows contained in hbtn_0d_tvshows without a genre linked.

1. Each record should display: tv_shows.title - tv_show_genres.genre_id
2. Results must be sorted in ascending order by tv_shows.title and tv_show_genres.genre_id
3. You can use only one SELECT statement
4. The database name will be passed as an argument of the mysql command

## 13-count_shows_by_genre.sql

Import the database dump from hbtn_0d_tvshows to your MySQL server:[download](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sql) (same as 12-no_genre.sql)

Write a script that lists all genres from hbtn_0d_tvshows and displays the number of shows linked to each.

1. Each record should display: <TV Show genre> - <Number of shows linked to this genre>
2. First column must be called genre
3. Second column must be called number_of_shows
4. Don’t display a genre that doesn’t have any shows linked
5. Results must be sorted in descending order by the number of shows linked
6. You can use only one SELECT statement
7. The database name will be passed as an argument of the mysql command

## 14-my_genres.sql

Import the database dump from hbtn_0d_tvshows to your MySQL server:[ https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sql](download) (same as 13-count_shows_by_genre.sql)

Write a script that uses the hbtn_0d_tvshows database to lists all genres of the show Dexter.

1. The tv_shows table contains only one record where title = Dexter (but the id can be different)
2. Each record should display: tv_genres.name
3. Results must be sorted in ascending order by the genre name
4. You can use only one SELECT statement
5. The database name will be passed as an argument of the mysql command

## 15-comedy_only.sql

Import the database dump from hbtn_0d_tvshows to your MySQL server: [download](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sql) (same as 14-my_genres.sql)

Write a script that lists all Comedy shows in the database hbtn_0d_tvshows.

1. The tv_genres table contains only one record where name = Comedy (but the id can be different)
2. Each record should display: tv_shows.title
3. Results must be sorted in ascending order by the show title
4. You can use only one SELECT statement
5. The database name will be passed as an argument of the mysql command

## 16-shows_by_genre.sql

Import the database dump from hbtn_0d_tvshows to your MySQL server: [download](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sq) (same as 15-comedy_only.sql)

Write a script that lists all shows, and all genres linked to that show, from the database hbtn_0d_tvshows.

1. If a show doesn’t have a genre, display NULL in the genre column
2. Each record should display: tv_shows.title - tv_genres.name
3. Results must be sorted in ascending order by the show title and genre name
4. You can use only one SELECT statement
5. The database name will be passed as an argument of the mysql command

## 100-not_my_genres.sql

Import the database dump from hbtn_0d_tvshows to your MySQL server:[https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sql ](download) (same as 16-shows_by_genre.sql)

Write a script that uses the hbtn_0d_tvshows database to list all genres not linked to the show Dexter

1. The tv_shows table contains only one record where title = Dexter (but the id can be different)
2. Each record should display: tv_genres.name
3. Results must be sorted in ascending order by the genre name
4. You can use a maximum of two SELECT statement
5. The database name will be passed as an argument of the mysql command

## 101-not_a_comedy.sql
https://www.guru99.com/er-modeling.html
Import the database dump from hbtn_0d_tvshows to your MySQL server: [https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows.sql ](download) (same as 100-not_my_genres.sql)

Write a script that lists all shows without the genre Comedy in the database hbtn_0d_tvshows.

1. The tv_genres table contains only one record where name = Comedy (but the id can be different)
2. Each record should display: tv_shows.title
3. Results must be sorted in ascending order by the show title
4. You can use a maximum of two SELECT statement
5. The database name will be passed as an argument of the mysql command

## 102-rating_shows.sql

Import the database hbtn_0d_tvshows_rate dump to your MySQL server:[https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows_rate.sql ](download)

Write a script that lists all shows from hbtn_0d_tvshows_rate by their rating.

1. Each record should display: tv_shows.title - rating sum
2. Results must be sorted in descending order by the rating
3. You can use only one SELECT statement
4. The database name will be passed as an argument of the mysql command

## 103-rating_genres.sql

Import the database dump from hbtn_0d_tvshows_rate to your MySQL server: [ https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/274/hbtn_0d_tvshows_rate.sql](download) (same as 102-rating_shows.sql)

Write a script that lists all genres in the database hbtn_0d_tvshows_rate by their rating.

1. Each record should display: tv_genres.name - rating sum
2. Results must be sorted in descending order by their rating
3. You can use only one SELECT statement
4. The database name will be passed as an argument of the mysql command
