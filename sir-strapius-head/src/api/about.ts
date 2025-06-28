import qs from "qs";

import { api } from "./_client";
import { paths } from "./_types";

type ContentParams = paths["/about"]["get"]["parameters"];
type ContentResponse =
  paths["/about"]["get"]["responses"]["200"]["content"]["application/json"];

const content = (params: ContentParams) =>
  api
    .get<ContentResponse>("about", { searchParams: qs.stringify(params.query) })
    .json();

const aboutApi = {
  content,
};

export { aboutApi };
