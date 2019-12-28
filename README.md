# Boggle

#### Prerequisites

|Software|Version|
|--------|-------|
|Ruby|2.5+|
|Rails|6.+|

#### Installation

Execute these commands to setup and run(dev-mode) application,

> rails db:migrate

> bundle install

> yarn install

> rails webpacker:install

> rails webpacker:install:react

> rails generate react:install

> rails server

#### Description

   • When game starts, new 4x4 board is generated. 
   
   • User can type the words which they think they found.
   
   • System does validation and adds valid words into a list. 
   
   • Systems keeps track of scores, the score is total number of characters in the word. –
   
   • If word is invalid an error is displayed. 
   
   • When timer runs out user can no longer enter new words, but should see results. 
   
#### Additional features

   • User can select `5*5` and `6*6` boggle board 
   
#### Work in progress..

1. Dockerization
2. Multi-player