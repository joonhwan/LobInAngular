import * as React from 'react';
import * as ReactRouter from 'react-router';
import { routerShape } from 'react-router/lib/PropTypes';
import { mixin } from './utils';

export interface IHaveRouterOnContext {
  router?:ReactRouter.RouterOnContext;
  route?:any;
}

interface WithRouterFunc {
  (component:any):any;
}
let withRouter = (ReactRouter as any).withRouter as WithRouterFunc;

function RouterableFrom1<P extends IHaveRouterOnContext, S>(
  InnerComponent: new(props:P, context?)=>React.Component<P, S>
  ) {
    return withRouter(InnerComponent) as new(props:P, context?)=>React.Component<P, S>
  // return class extends React.Component<P, S> {
  //   static contextTypes: React.ValidationMap<any> = {
  //     router: routerShape
  //   }
  //   context: { 
  //     router:ReactRouter.RouterOnContext 
  //   }
    
  //   constructor(props:P, context?) {
  //     super(props, context);
  //   }

  //   componentDidMount() {
      
  //   }

  //   render() {
  //     console.log('withRouterHOC : this.props' + JSON.stringify(this.props));
  //     return (
  //       <InnerComponent 
  //         ref="innerComponent" {...this.props}
  //         router={this.context.router} route={this.props.route}
  //         />
  //     )
  //   }
  // }
}

function RouterableFrom2<P, S>(
  InnerComponent: new(props:P, context?)=>React.Component<P, S>, 
  routeLeaveHook:ReactRouter.RouteHook
  ) {

  return class extends React.Component<P & {route:any}, S> {
    static contextTypes: React.ValidationMap<any> = {
      router: routerShape
    }
    context: { router:ReactRouter.RouterOnContext }
    constructor(props:P & {route:any}, context?) {
      super(props, context);
    }

    componentDidMount() {
      this.context.router.setRouteLeaveHook(this.props.route, routeLeaveHook);
    }

    render() {
      return (
        <InnerComponent ref="innerComponent" {...this.props} />
      )
    }
  }
}

export {
  //RouterableFrom1 as RouterableFrom
  RouterableFrom2 as RouterableFrom
}