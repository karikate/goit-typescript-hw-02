import axios from "axios";

export const fetchPhoto = async (query, page = 0) => {
  const AccessKey = "8D7P1yJV46O80rFVy5nPpT81oO6pOspldbBTrXvhF6g";
  const BaseUrl = `https://api.unsplash.com/search/photos`;

  const { data } = await axios.get(BaseUrl, {
    params: {
      client_id: AccessKey,
      query: query,
      page: page,
      per_page: 12,
    },
  });

  return data.results;
};
