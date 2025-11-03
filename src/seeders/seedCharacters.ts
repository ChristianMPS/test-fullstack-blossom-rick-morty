import axios from "axios";
import sequelize from "../config/database";
import Character from "../models/character";


async function seedCharacters() {
  try {
    console.log("🚀 Conectando a la base de datos...");
    await sequelize.authenticate();
    console.log("✅ Conectado a Supabase");

    console.log("📡 Obteniendo personajes desde la API...");
    const response = await axios.get("https://rickandmortyapi.com/api/character");
    const characters = response.data.results.slice(0, 15);

    console.log("💾 Insertando personajes...");
    await Character.bulkCreate(
      characters.map((c: any) => ({
        name: c.name,
        status: c.status,
        species: c.species,
        type: c.type,
        gender: c.gender,
        origin: c.origin,
        location: c.location,
        image: c.image,
        episode: c.episode,
        created: c.created,
      }))
    );

    console.log("✅ Se insertaron 15 personajes correctamente.");
  } catch (error) {
    console.error("❌ Error al insertar personajes:", error);
  } finally {
    await sequelize.close();
  }
}

seedCharacters();
