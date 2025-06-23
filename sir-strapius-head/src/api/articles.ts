import qs from "qs";

import { api } from "./_client";
import { paths } from "./_types";

const articleApi = {
  all: (params: paths["/articles"]["get"]["parameters"]) =>
    api
      .get<
        paths["/articles"]["get"]["responses"]["200"]["content"]["application/json"]
      >("articles", { searchParams: qs.stringify(params) })
      .json(),

  byId: (params: paths["/articles/{id}"]["get"]["parameters"]) =>
    api
      .get<
        paths["/articles/{id}"]["get"]["responses"]["200"]["content"]["application/json"]
      >(`articles/${params.path.documentId}`, {
        searchParams: qs.stringify(params.query),
      })
      .json()
      .catch(console.log),
};

export { articleApi };
