export declare const ROOT_PATH: string;
export declare const clone: (obj: Object) => Object;
export declare const isObject: (obj: any) => boolean;
export declare const returnOnlyNumbers: (str: string) => string;
export declare const capitalize: (str: string) => string;
export declare const generateToken: () => string;
export declare const returnPhoneMask: (str: string, countryCode?: string) => string | undefined;
export declare const normalize: (str: string, type: 'lower' | 'upper' | undefined) => string | undefined;
declare const index: {
    ROOT_PATH: string;
    clone: (obj: Object) => Object;
    isObject: (obj: any) => boolean;
    returnOnlyNumbers: (str: string) => string;
    capitalize: (str: string) => string;
    generateToken: () => string;
    returnPhoneMask: (str: string, countryCode?: string) => string | undefined;
    normalize: (str: string, type: 'lower' | 'upper' | undefined) => string | undefined;
};
export default index;
