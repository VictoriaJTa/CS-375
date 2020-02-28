# CS-375
[201925] Web Applications and Mobile Development @ Drexel University

## Setting up database

Prior to running this server, one needs to configure mysql on their system.
First, follow whichever method for installing mysql on your system,
then run mysql and create the database for Bill Bar by running:

``
CREATE DATABASE billbar;
``

Additionally, to allow for compatibility with NodeJS, the user login
must be reconfigured by running:

``
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<YOUR PASSWORD HERE>';
``

Finally, as the server will look for information in the directory, configure
the config.json file with your password. By default, this field will be empty,
so if you get any issues consider first changing the password in your config.json.
