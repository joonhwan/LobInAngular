import * as React from 'react';
import * as ReactRouter from 'react-router';
import { routerShape } from 'react-router/lib/PropTypes';
import { mixin } from './utils';

export interface IHaveRouterOnContext {
  router?:ReactRouter.RouterOnContext;
  route?:any;
  params?:any;
  location?:Location
}

let __withRouter = ((ReactRouter as any).withRouter) as (inner:any)=>any;

function RouterableJsWrapper<P extends IHaveRouterOnContext, S>(
  InnerComponent: new(props:P, context?)=>React.Component<P, S>
  ) {
    console.log("hooking js withRouter...");
    return __withRouter(InnerComponent) as new(props:P, context?)=>React.Component<P, S>;
}

function RouterableTsWay<P extends IHaveRouterOnContext, S>(
  InnerComponent: new(props:P, context?)=>React.Component<P, S>
  ) {

  return class WithRoutered extends React.Component<P & {route:any}, S> {
    static contextTypes: React.ValidationMap<any> = {
      router: routerShape
    }
    context: { router:ReactRouter.RouterOnContext }
    constructor(props:P & {route:any}, context?) {
      super(props, context);
    }

    componentWillMount() {
      console.log('WithRouter willMount() : this.props=' + JSON.stringify(this.props));
      // console.log("WithRoutered setRouteLeaveHook()");
      // this.context.router.setRouteLeaveHKook(this.props.route, routeLeaveHook);
    }

    render() {
      // console.log('WithRoutered render(). props=' + JSON.stringify(this.props));
      // console.log('WithRoutered render(). context=' + JSON.stringify(this.context));
      return (
        <InnerComponent {...this.props} router={this.context.router} />
      )
    }
  }
}

export {
  //RouterableJsWrapper as WithRouter
  RouterableTsWay as WithRouter
}