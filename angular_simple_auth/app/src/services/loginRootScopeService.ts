
export interface ILoginGlobalData
{
    currentUser: string;
}

export class LoginGlobalData implements ILoginGlobalData {
    constructor(public currentUser?: string) {
        
    }
}

export interface ILoginRootScopeService extends angular.IRootScopeService {
    globals: ILoginGlobalData;
} 

