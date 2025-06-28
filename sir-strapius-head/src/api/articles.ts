import qs from "qs";

import { api } from "./_client";
import { paths } from "./_types";

type AllParams = paths["/articles"]["get"]["parameters"];
type AllResponse =
  paths["/articles"]["get"]["responses"]["200"]["content"]["application/json"];

const all = (params: AllParams) =>
  api
    .get<AllResponse>("articles", { searchParams: qs.stringify(params.query) })
    .json();

type ByIdParams = paths["/articles/{id}"]["get"]["parameters"];
type ByIdResponse =
  paths["/articles/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

const byId = (params: ByIdParams) =>
  api
    .get<ByIdResponse>(`articles/${params.path.documentId}`, {
      searchParams: qs.stringify(params.query),
    })
    .json();

const bySlug = async (slug: string, params: AllParams) => {
  const queryWithSlug = {
    ...params.query,
    filters: {
      ...params.query?.filters,
      slug: { $eq: slug },
    },
  };
  const { data } = await api
    .get<AllResponse>("articles", { searchParams: qs.stringify(queryWithSlug) })
    .json();

  if (data && data.length > 0) {
    return data[0];
  }
  return undefined;
};

const articleApi = {
  all,
  byId,
  bySlug,
};

export { articleApi };
