import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import { sectionNames } from "@saleor/intl";
import {
  ListActions,
  PageListProps,
  TabPageProps,
  SortPage,
  FilterPageProps
} from "@saleor/types";
import { InfluencerListUrlSortField } from "@saleor/influencer/urls";
import FilterBar from "@saleor/components/FilterBar";
import CustomerList from "../CustomerList/CustomerList";
import { ListCustomers_customers_edges_node } from "../../types/ListCustomers";
import {
  CustomerFilterKeys,
  CustomerListFilterOpts,
  createFilterStructure
} from "./filters";

export interface CustomerListPageProps
  extends PageListProps,
    ListActions,
    FilterPageProps<CustomerFilterKeys, CustomerListFilterOpts>,
    SortPage<InfluencerListUrlSortField>,
    TabPageProps {
    influencers: ListCustomers_customers_edges_node[];
}

const CustomerListPage: React.FC<CustomerListPageProps> = ({
  currencySymbol,
  currentTab,
  filterOpts,
  initialSearch,
  onAdd,
  onAll,
  onFilterChange,
  onSearchChange,
  onTabChange,
  onTabDelete,
  onTabSave,
  tabs,
  ...customerListProps
}) => {
  const intl = useIntl();

  const structure = createFilterStructure(intl, filterOpts);

  return (
    <Container>
      <PageHeader title={intl.formatMessage(sectionNames.influencer)}>
        <Button color="primary" variant="contained" onClick={onAdd}>
          <FormattedMessage
            defaultMessage="Create Influencer"
            description="button"
          />
        </Button>
      </PageHeader>
      <Card>
        <FilterBar
          allTabLabel={intl.formatMessage({
            defaultMessage: "All Influencer",
            description: "tab name"
          })}
          currencySymbol={currencySymbol}
          currentTab={currentTab}
          filterStructure={structure}
          initialSearch={initialSearch}
          searchPlaceholder={intl.formatMessage({
            defaultMessage: "Search Influencer"
          })}
          tabs={tabs}
          onAll={onAll}
          onFilterChange={onFilterChange}
          onSearchChange={onSearchChange}
          onTabChange={onTabChange}
          onTabDelete={onTabDelete}
          onTabSave={onTabSave}
        />
        <CustomerList {...customerListProps} />
      </Card>
    </Container>
  );
};
CustomerListPage.displayName = "CustomerListPage";
export default CustomerListPage;
