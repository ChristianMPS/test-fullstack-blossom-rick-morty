## Getting Started

🚀 Rick and Morty GraphQL Server

This project is a GraphQL API that interacts with the Rick and Morty API, allowing you to query characters, filter them by different parameters, and store data in a Supabase PostgreSQL database.

1. Install Dependencies

Run the following command to install all required packages: npm install

2. Start the Development Server

Run the development server with: npx ts-node src/index.ts   

Once running, you’ll see: 🚀 Server ready at http://localhost:4000/graphql

3. Querying the API

The server allows you to perform queries on the Rick and Morty API through GraphQL.
Below are some examples you can try directly in the GraphQL Playground.

this are some examples of querys:

🧍 Get the first 20 characters: 

{
  characters {
    id
    name
    status
    species
    type
    gender
    origin {
      name
      type
      dimension
    }
    location {
      name
      type
      dimension
    }
    image
    episode {
      id
      name
      episode
      air_date
    }
    created
  }
}

🔍 Filter characters by multiple parameters

You can query by name, status, or gender.

query {
  characters(name: "Rick", status: "Alive", gender: "Male") {
    id
    name
    status
    species
    type
    gender
    origin {
      name
      type
      dimension
    }
    location {
      name
      type
      dimension
    }
    image
    episode {
      id
      name
      episode
      air_date
    }
    created
  }
}

⚙️ Filter by a single parameter (valid parameters name,status,gender)

query {
  characters( gender: "Male") {
    id
    name
    status
    species
    type
    gender
    origin {
      name
      type
      dimension
    }
    location {
      name
      type
      dimension
    }
    image
    episode {
      id
      name
      episode
      air_date
    }
    created
  }
}

4. 🗃️ Initialize the Database with Supabase

This project uses Supabase as a relational database to persist characters.

Steps:

Go to https://supabase.com
 and create an account.

Create a new project inside Supabase.

Once your database is ready, go to:
Project Settings → Database → Connection Info → Connection string for ORMs

Copy the Direct Connection URL, which looks like this:
postgresql://postgres.[project-id]:[password]@aws-1-us-east-1.pooler.supabase.com:5432/postgres

Create a .env file in the root of your project and add:
DATABASE_URL="your Supabase direct connection URL here" remember copy your password in the url and without "", DATABASE_URL=your url

5. 🌱 Seed the Database

To populate your database with the first 15 characters from the Rick and Morty API, run: npx ts-node src/seeders/seedCharacters.ts

You should see something like this in your terminal:

something like this:
 Conectando a la base de datos...
✅ Conectado a Supabase
📡 Obteniendo personajes desde la API...
💾 Insertando personajes...
✅ Se insertaron 15 personajes correctamente.
