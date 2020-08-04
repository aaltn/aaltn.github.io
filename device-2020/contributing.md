# Руководство по внесению изменений

Поддерживайте ваш репозиторий обновлённым. <br> 

## Прежде чем приступать к новому заданию, обновите `master`

Обновить свой репозиторий с помощью программы [GitHub Desktop](https://desktop.github.com) можно так:

- Откройте ваш локальный репозиторий в программе GitHub Desktop.

- Нажмите на кнопку в верхней панели «Fetch origin».

- Когда вы обновили `master`, приступайте к выполнению следующего задания.

--

## Есть вопрос?

Посмотрите [коллекцию часто задаваемых вопросов по Git](http://firstaidgit.ru).

## Как настроить SSH

[Generating a new SSH key](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) команды:

_`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`_<br> 

Adding your SSH key to the ssh-agent
* start the ssh-agent in the background:
_`eval $(ssh-agent -s)`_<br> 
_`ssh-add ~/.ssh/id_rsa`_<br> 

* Add the SSH key to your GitHub account: 
_`clip < ~/.ssh/id_rsa.pub`_<br> 
* Click New SSH key or Add SSH key.
* Paste your key into the "Key" field.


### комады Git

#### Как удалить commit в Github

1. Получаем хэш-код коммита, к которому хотим вернуться.<br>
2. Заходим в папку репозитория и пишем в консоль:<br>

 _`   $ git reset --hard a3775a5485af0af20375cedf46112db5f813322a `_<br>
 _`   $ git push --force`_<br>
 
 
#### Список удаленных репозиториев:<br> 
_`git remote -v`_<br> 

более подробно:<br> 
_`cat .git/config`_<br> 

удалить если ошиблись:<br> 
_`git remote rm origin`_<br> 

и создать заново:<br> 
_`git remote add origin https://github.com/aaltn/device-2020.git`_<br> 

### Полезное:

если появляется предупреждение: _`warning: LF will be replaced by CRLF`_<br> 
_`git config core.autocrlf true`_<br>

##### create a new repository on the command line:

_`echo "# device-2020" >> Readme.md`_<br>
_or `touch Readme.md`_<br>
_`git init`_<br>
_`git add Readme.md`_<br>
_`git commit -m "create a repository for project 'Device'"`_<br>
_`git remote add origin git@github.com:aaltn/device-2020.git`_ if use SSH<br>
_`git remote add origin https://github.com/aaltn/device-2020.git `_ if use HTTPS<br>
_`git push -u origin master`_<br>

#####  …or push an existing repository from the command line
_`git remote add origin git@github.com:aaltn/device-2020.git`_ if use SSH<br>
_`git remote add origin https://github.com/aaltn/device-2020.git`_ if use HTTPS<br>
_`git push -u origin master`_<br>
