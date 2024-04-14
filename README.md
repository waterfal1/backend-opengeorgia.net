## Overview
The backend of the website for travelers across Georgia. 

## Installation
1. Install dependencies - "yarn install"
2. You need to set up a local MongoDB database (name opengeorgia_dev) to apply migration. Set DEV_MODE to true and DB_URL, DB_URL_MIGRATION as mongodb://127.0.0.1:27017/opengeorgia_dev
Follow MongoDB docs to install the MongoDB server on your machine.
3. Request could be blocked by CORS policy. You can define the CORS policy in the index.js entry point file.
4. Upon the project running disable migration in the "startServer" function to avoid data duplication. 
5. Backend API is available at "http://localhost:5000/myendpoint"
## Usage
You can make some queries at studio.apollographql.com. by pressing "query your server"

some examples: 
<br />
<pre>
    query {
        getAllTrans {
           _id, id, cost, placeName
        }
    }
</pre>
<br />
<pre>
  query {
    getAllReviews {
      _id alt date face name quotes text1 rating
    }
  } 
</pre>
