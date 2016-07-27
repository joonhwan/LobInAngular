import * as React from 'react';
import * as ReactRouter from 'react-router';
import { routerShape } from 'react-router/lib/PropTypes';

export function withRouter<P, S>(
  InnerComponent: new(props:P, context?)=>React.Component<P, S>, 
  //routeLeaveHook:ReactRouter.RouteHook
  routeLeaveHook:(self:React.Component<P,S>, nextLocation)=>any
  ) {

  return class extends React.Component<P & {route?:any}, S> {
    static contextTypes: React.ValidationMap<any> = {
      router: routerShape
    }
    context: { router:ReactRouter.RouterOnContext }
    constructor(props:P & {route?:any}, context?) {
      super(props, context);
    }

    componentDidMount() {
      let self = this.refs['innerComponent'] as React.Component<P, S>;
      this.context.router.setRouteLeaveHook(this.props.route, nextLocation => routeLeaveHook(self, nextLocation));
    }

    render() {
      return (
        <InnerComponent ref="innerComponent" {...this.props} />
      )
    }
  }
}