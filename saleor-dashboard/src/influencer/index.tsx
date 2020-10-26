import { parse as parseQs } from "qs";
import React from "react";
import { useIntl } from "react-intl";
import { Route,RouteComponentProps, Switch } from "react-router-dom";

import { sectionNames } from "@saleor/intl";
import { asSortParams } from "@saleor/utils/sort";
import { WindowTitle } from "../components/WindowTitle";
import {
  InfluencerListUrlQueryParams,
  InfluencerListUrlSortField,
  influencerListPath,
} from './urls'

import InfluencerListViewComponent from "./views/InfluencerList";

const InfluencerListView: React.FC<RouteComponentProps<{}>> = ({ location }) => {
  const qs = parseQs(location.search.substr(1));
  const params: InfluencerListUrlQueryParams = asSortParams(
    qs,
    InfluencerListUrlSortField
  );

  return <InfluencerListViewComponent params={params} />;
};

export const InfluencerSection: React.FC<{}> = () => {
    const intl = useIntl();
  
    return (
      <>
        <WindowTitle title={intl.formatMessage(sectionNames.influencer)} />
        <Switch>
        <Route exact path={influencerListPath} component={InfluencerListView} />
        {/* <Route exact path={InfluencerAddPath} component={InfluencerCreateView} /> */}
        {/* <Route path={InfluencerAddressesPath(":id")} component={InfluencerAddressesView}/> */}
        {/* <Route path={InfluencerPath(":id")} component={InfluencerDetailsView} /> */}
      </Switch>
      </>
    );
  };