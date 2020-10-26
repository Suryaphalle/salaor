import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

import {
  ActiveTab,
  BulkAction,
  Dialog,
  Filters,
  Pagination,
  SingleAction,
  TabActionDialog,
  Sort
} from "../types";

export const influencerSection = "/influencer/";
export const influencerListPath = influencerSection;

export enum InfluencerListUrlFiltersEnum {
  joinedFrom = "joinedFrom",
  joinedTo = "joinedTo",
  moneySpentFrom = "moneySpentFrom",
  moneySpentTo = "moneySpentTo",
  numberOfOrdersFrom = "numberOfOrdersFrom",
  numberOfOrdersTo = "numberOfOrdersTo",
  query = "query"
}
export type InfluencerListUrlFilters = Filters<InfluencerListUrlFiltersEnum>;

export type InfluencerListUrlDialog = "remove" | TabActionDialog;
export enum InfluencerListUrlSortField {
  name = "name",
  email = "email",
  orders = "orders"
}
export type InfluencerListUrlSort = Sort<InfluencerListUrlSortField>;
export type InfluencerListUrlQueryParams = ActiveTab &
  BulkAction &
  InfluencerListUrlFilters &
  InfluencerListUrlSort &
  Dialog<InfluencerListUrlDialog> &
  Pagination;
export const influencerListUrl = (params?: InfluencerListUrlQueryParams) =>
  influencerListPath + "?" + stringifyQs(params);


export const influencerAddPath = urlJoin(influencerSection, "add");
export const influencerAddUrl = influencerAddPath;

export const influencerPath = (id: string) => urlJoin(influencerSection, id);
export type InfluencerUrlDialog = "remove";
export type InfluencerUrlQueryParams = Dialog<InfluencerUrlDialog>;
export const influencerUrl = (id: string, params?: InfluencerUrlQueryParams) =>
  influencerPath(encodeURIComponent(id)) + "?" + stringifyQs(params);


export const influencerAddressesPath = (id: string) =>
  urlJoin(influencerPath(id), "addresses");
export type InfluencerAddressesUrlDialog = "add" | "edit" | "remove";
export type InfluencerAddressesUrlQueryParams = Dialog<InfluencerAddressesUrlDialog> &
  SingleAction;
export const influencerAddressesUrl = (
  id: string,
  params?: InfluencerAddressesUrlQueryParams
) => influencerAddressesPath(encodeURIComponent(id)) + "?" + stringifyQs(params);
