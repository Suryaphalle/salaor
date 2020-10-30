import { parse as parseQs } from "qs";
import React from "react";
import { useIntl } from "react-intl";
import { Route,RouteComponentProps, Switch } from "react-router-dom";

import { sectionNames } from "@saleor/intl";
import { asSortParams } from "@saleor/utils/sort";
import { WindowTitle } from "../components/WindowTitle";
import {
  influencerAddPath,
  InfluencerListUrlQueryParams,
  InfluencerListUrlSortField,
  influencerListPath,
  influencerPath,
  InfluencerUrlQueryParams,
} from './urls'

import InfluencerListViewComponent from "./views/InfluencerList";
import InfluencerCreateView from "./views/InfluencerCreate";
import InfluencerDetailsViewComponent from "./views/InfluencerDetails";


const InfluencerListView: React.FC<RouteComponentProps<{}>> = ({ location }) => {
  const qs = parseQs(location.search.substr(1));
  const params: InfluencerListUrlQueryParams = asSortParams(
    qs,
    InfluencerListUrlSortField
  );

  return <InfluencerListViewComponent params={params} />;
};
interface InfluencerDetailsRouteParams {
  id: string;
}
const InfluencerDetailsView: React.FC<RouteComponentProps<
  InfluencerDetailsRouteParams
>> = ({ location, match }) => {
  const qs = parseQs(location.search.substr(1));
  const params: InfluencerUrlQueryParams = qs;

  return (
    <InfluencerDetailsViewComponent
      id={decodeURIComponent(match.params.id)}
      params={params}
    />
  );
};
export const InfluencerSection: React.FC<{}> = () => {
    const intl = useIntl();
  
    return (
      <>
        <WindowTitle title={intl.formatMessage(sectionNames.influencer)} />
        <Switch>
        <Route exact path={influencerListPath} component={InfluencerListView} />
        <Route exact path={influencerAddPath} component={InfluencerCreateView} />
        {/* <Route path={InfluencerAddressesPath(":id")} component={InfluencerAddressesView}/> */}
        <Route path={influencerPath(":id")} component={InfluencerDetailsView} />
        </Switch>
      </>
    );
  };