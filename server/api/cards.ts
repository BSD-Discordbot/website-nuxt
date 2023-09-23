import { getAllCards } from "../db/methods/cards"

export default defineEventHandler(async (event) => {
  return await getAllCards()
})