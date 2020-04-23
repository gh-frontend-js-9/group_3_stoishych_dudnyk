export enum StateStatus {
    INIT = 'INIT',
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    FAILED = 'FAILED',
}

export type State<P, R = any> =
    | {status: StateStatus.INIT}
    | {status: StateStatus.LOADING}
    | {status: StateStatus.LOADED}
    | {status: StateStatus.FAILED}
