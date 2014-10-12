CentOS 6.4 LAMP - Vagrant Box
=============================

A Vagrant box that has preinstalled LAMP stack, based on the vagrant box found at
https://vagrantcloud.com/smallhadroncollider/boxes/centos-6.4-lamp


Includes
--------
- Apache 2.2.15 (with mod_ssl)
- PHP 5.3.3
- MySQL 5.1.71
- OPcache 7.0.3
- Memcached 1.4.4
- Composer


Included Packages
-----------------
- `php-mysqli`
- `php-pdo`
- `php-xml`
- `php-pecl-zendopcache`
- `memcached`
- `php-pecl-memcached`


Apache settings
---------------
In `/etc/httpd/conf/httpd.conf`:

- `ServerName vagrant.dev`
- `User vagrant`
- `Group vagrant`
- `AllowOverride All` - allows `.htaccess` overrides
- `DocumentRoot "/var/www/public"`
- `EnableSendfile off` - avoids issues with mounted file systems


php.ini settings
----------------
In `/etc/php.ini`:

+ `error_log /vagrant/php_errors.log`


Memcached settings
------------------
In `/etc/sysconfig/memcached`:

- `CACHESIZE="256"`


MySQL settings
--------------

- Host: `127.0.0.1`
- Username: `root`
- Password:
- SSH Host: `127.0.0.1`
- SSH User: `Vagrant`
- SSH Key File: `~/.vagrant.d/insecure_private_key`
- SSH Port: `2222`


Vagrant Setup
-------------
Apache will run from `/var/www/public`, and is shared to `/www`

by default the vm ip address is `192.168.35.6`


CentOS MySQL Issue
------------------
CentOS can do weird stuff with the MySQL socket. If you're having issues with MySQL loading try:

    sudo mv /var/lib/mysql/mysql.sock /var/lib/mysql/mysql.sock.bak
    sudo service mysqld start

or from the host machine:

    vagrant ssh -c "sudo mv /var/lib/mysql/mysql.sock /var/lib/mysql/mysql.sock.bak; sudo service mysqld start"
