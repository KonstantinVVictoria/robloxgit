// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "../../discordbot/bot";
import NextCors from "nextjs-cors";
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const message = req.body.message;
  const bot = await client;
  const channel = await bot.channels.fetch("980161368923713536");
  await channel.send(message);
  res.status(200).json({ successful: true });
}
