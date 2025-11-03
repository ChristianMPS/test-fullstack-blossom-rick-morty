import axios from "axios";
import sequelize from "../config/database";
import Character from "../models/character";
import Origin from "../models/origin";
import Location from "../models/location";

async function seedCharacters() {
  try {
    console.log("🚀 Conectando a la base de datos...");
    await sequelize.authenticate();
    console.log("✅ Conectado a Supabase");

    console.log("🛠️ Sincronizando modelos...");
    await sequelize.sync({ force: true }); 

    console.log("📡 Obteniendo personajes desde la API...");
    const { data } = await axios.get("https://rickandmortyapi.com/api/character");
    const characters = data.results.slice(0, 15);

    console.log("💾 Insertando personajes...");
    for (const c of characters) {

      const [origin] = await Origin.findOrCreate({
        where: { name: c.origin.name },
        defaults: {
          type: c.origin.type || "Unknown",
          dimension: c.origin.dimension || "Unknown",
        },
      });

      const [location] = await Location.findOrCreate({
        where: { name: c.location.name },
        defaults: {
          type: c.location.type || "Unknown",
          dimension: c.location.dimension || "Unknown",
        },
      });


      await Character.create({
        name: c.name,
        status: c.status,
        species: c.species,
        type: c.type,
        gender: c.gender,
        image: c.image,
        episode: c.episode,
        created: c.created,
        originId: origin.id,
        locationId: location.id,
      });
    }

    console.log("✅ Se insertaron 15 personajes correctamente con relaciones.");
  } catch (error) {
    console.error("❌ Error al insertar personajes:", error);
  } finally {
    await sequelize.close();
  }
}

seedCharacters();
