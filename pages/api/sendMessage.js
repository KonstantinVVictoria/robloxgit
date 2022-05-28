// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "../../discordbot/bot";
import NextCors from "nextjs-cors";
const bot = await client;
console.log("imports done");
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const message = req.body.message;
  console.log(req.body);
  const channel = await bot.channels.fetch("980161368923713536");
  channel.send(message);
  res.status(200).json({ successful: true });
}
