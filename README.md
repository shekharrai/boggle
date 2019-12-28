# Boggle

## Prerequisites

|Software|Version|
|--------|-------|
|Ruby|2.5+|
|Rails|6.+|
<hr/>

## Installation

Execute these commands to setup and run(dev-mode) application,

> yarn install

> rails db:migrate

> bundle install

> rails server

<hr/>

## Description

- When game starts, new 4x4 board is generated. 
- User can type the words which they think they found.
- System does validation and adds valid words into a list. 
- Systems keeps track of scores, the score is total number of characters in the word. –
- If word is invalid an error is displayed. 
- When timer runs out user can no longer enter new words, but should see results. 
       
<hr/>

## Additional features

- User can select `5*5` and `6*6` boggle board 
   
<hr/>

## Work in progress..

1. Dockerization
2. Multi-player