import ky from "ky";

const api = ky.create({
  prefixUrl: process.env.STRAPI_API_ENDPOINT,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
  },
});

export { api };
