# Assignment 2 - Web API.
​
Name: Mark Bates
​
## Features.
 
 + Feature 1 - implemented the user authentication into the web app to access the favourites page (will work for the already created user1, user2)
 + Feature 2 - added additional api routes to the web app via the api (popular and now playing)
​
## Installation Requirements
​
This app uses the git repository form the web api labs along with this repository. Due to difficulties implementing both into one, this will require the download of both repositories running simultaniously in seperate windows (in VS Code) for the app to work.

To get the necessary data from the TMDB Database, you will require a TMDB key to access this.

You ay also need to download mongoDB on your device if you have not already done so.
​
## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

before running the api, be sure to create a .env file in the root folder for any required information such as below, ie:
​
### Web api labs .env
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=yourMongoDBURLHere
SEED_DB=True
SECRET=yourJWTSecretHere
TMDB_KEY=YourTMDBKeyHere
```

### Web App .env
```bat
TMDB_KEY=YourTMDBKeyHere
FAST_REFRESH=false
SKIP_PREFLIGHT_CHECK=true
```
​
## API Design
​
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies | Gets a list of movies
| /api/movies/popular | Get a list of popular movies
| /api/movies/playing | Gets a list of movies now playing in cinemas  
​
## Security and Authentication
protected routes are implemented onto the favourites page of the web app. When a user tries to access it, it will redirect them to a login page where they will have to ligin with a valid username and password to access the page.
​
## Integrating with React App
​
The react app is integrated into the web app via a proxy to local host 8080 in the package.json file. here it gets the appropriate api calls and pushes them to the web app to be displayed on the page
​
~~~Javascript
export const getPopularMovies = () => {
    return fetch(
       '/api/movies/popular',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
​
~~~
