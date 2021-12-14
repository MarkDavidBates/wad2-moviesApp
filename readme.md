# Assignment 1 - ReactJS app.

Name: Mark Bates

## Overview.

This repository contains the code from the ReactJS labs completed during Web App development 2 in Semester 1. It also contains the additional functionality for assignment 1 of this module.

### Features.
 
+ added a "Now Playing" page that displays the movies that are showing in cinemas
+ added a "Popular" page that displays the most popular movies
+ added a credits tab on the "Movie Details" page that displays the cast of the moive
+ added extra details to the "Movie Detials" page, including the languages and videos relating to the movie

## API endpoints.

+ Movie Videos - movie/{:id}/videos
+ Movie Credits - movie/{:id}/credits
+ Movies Playing Now - movie/now_playing
+ Popular Movies - movie/popular

### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /credits - displays all credited people in the movie.
+ /credits/:id/character - display the name of the character in the credits page
+ /credits/:id/name - display the name of the people credited in the credits page