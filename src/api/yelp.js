import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer evedhRJ0wz88VVns_6vm8YVFcoVQtn0TUW3Bf6tGO5YuOc7DvgS1cFymsforY3qe0N7U2pDFRqiQL-aPYs7Z6wFZAXmnwNsZkjEnQf6QlT2xFkfaBmRUO4v-4p1LZXYx`,
  },
});
