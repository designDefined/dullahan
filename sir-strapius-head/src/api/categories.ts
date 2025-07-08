import qs from "qs";

import { api } from "./_client";
import { paths } from "./_types";

type AllParams = paths["/categories"]["get"]["parameters"];
type AllResponse =
  paths["/categories"]["get"]["responses"]["200"]["content"]["application/json"];

const all = (params: AllParams) =>
  api
    .get<AllResponse>("categories", {
      searchParams: qs.stringify(params.query),
    })
    .json();

type ByIdParams = paths["/categories/{id}"]["get"]["parameters"];
type ByIdResponse =
  paths["/categories/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

const byId = (params: ByIdParams) =>
  api
    .get<ByIdResponse>(`categories/${params.path.documentId}?populate=*`, {
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
    .get<AllResponse>("categories", {
      searchParams: qs.stringify(queryWithSlug),
    })
    .json();

  if (data && data.length > 0) {
    return data[0];
  }
  return undefined;
};

const categoryApi = {
  all,
  byId,
  bySlug,
};

export { categoryApi };
