const { nanoid } = requise("nanoid");

const URL = require("../models/url.model");

async function generateNewShortUrl(req, res) {
  const { redirectUrl } = req.body;

  if (!redirectUrl) return res.status(400).json({ message: "Url inválida." });

  try {
    const shortId = await nanoid(8);

    await URL.create({
      shortId: shortId,
      redirectUrl,
      visitHistory: [],
    });
  } catch (error) {
    if(error) return res.status(400).json({message: 'Erro, tenta novamente mais tarde!'})
  }
}

module.export = {
  generateNewShortUrl,
};
