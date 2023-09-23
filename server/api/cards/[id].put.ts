import db from "~/server/db";

export default defineEventHandler(async (event) => {
  try {
    const name = getRouterParam(event, "name");
    const rarity = getRouterParam(event, "rarity");
    if (name === undefined || rarity === undefined) {
      return;
    }
    await db
      .insertInto("card")
      .values({ name, rarity: Number(rarity) })
      .execute();
    setResponseStatus(event, 201);
  } catch (error) {
    setResponseStatus(event, 500);
  }
});
