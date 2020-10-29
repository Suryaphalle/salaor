import { InfluencerListUrlSortField } from "@saleor/influencer/urls";
import { UserSortField } from "@saleor/types/globalTypes";
import { createGetSortQueryVariables } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: InfluencerListUrlSortField
): UserSortField {
  switch (sort) {
    case InfluencerListUrlSortField.email:
      return UserSortField.EMAIL;
    case InfluencerListUrlSortField.name:
      return UserSortField.LAST_NAME;
    // case InfluencerListUrlSortField.orders:
    //   return UserSortField.ORDER_COUNT;
    default:
      return undefined;
  }
}

export const getSortQueryVariables = createGetSortQueryVariables(
  getSortQueryField
);
