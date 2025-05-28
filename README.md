# Description

This is a responsive Social media dashboard developed with Next.js, Tailwind and MongoDB to store the data.
Users can register and login in the platform and then create posts and visualize the statistics of their posts interactions in four types of charts.
There are three main sections: Home, Dashboard and Tables.

## Characteristics

- Registration and Log in
- Add posts manually
- When you add a "post", the likes, unlikes, comments, shares, saves, reports are generated automatically with math random to have data information for the graphics
- Dynamic tables and charts
- Filter option for the posts list

## Technologies

- React with Next.js
- MongoDB with mongoose
- Tailwind & CSS
- Auth0 for authentication
- Typescript
- HTML

## Requirements

Node.js and npm installed in your system. If you don't have them, download them from nodejs.org.

## Installation

1.  Clone the repository:

```bash
git clone https://github.com/EPdesarrollo/camaleonic-test.git
```

2. Install needed dependencies

```bash
npm install
```

3. To run in local environment:

```bash
npm run dev
```

To run in production state:

```bash
npm run build
```

Once the server is running, open your browser and navigate to `http://localhost:3000/` or your running PORT. The application will automatically reload whenever you modify any of the source files.

## Execution

You have two options, since it’s already deployed in vercel you can see it on this link: https://camaleonic-test.vercel.app.

Or if you want to clone and see it in local development:

Open the .env.example file where you will find this example:

```bash
AUTH0_SECRET = your_auth_secret
APP_BASE_URL = your_localhostPort_url
AUTH0_DOMAIN = your_auth0_domain
AUTH0_CLIENT_ID = your_auth_client_id
AUTH0_CLIENT_SECRET = your_auth_client_secret
MONGODB_URI = your_mongodb_url_connection

```

Auth0

- Create an Auth0 account, you can follow this quick start link: https://auth0.com/docs/quickstart/webapp/nextjs/interactive
- Fill in your credential in .env.example with your Auth0 values
- Rename the file “.env.example” to “.env”

Mongo DB:

- Create a MongoDB database
- Add the MongoDB URI connection to the .env file

Finally on: src/lib/fetchData.ts comment the vercel URL api, and update the local development port with your running port.
