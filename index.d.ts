// Generated by dts-bundle v0.7.3

export class Facet {
    constructor(options: IFacetOptions);
    bind: (facets: IFacet[]) => void;
    hide: () => void;
    show: () => void;
    destroy: () => void;
}

export class Filter {
    constructor(options: IFilterOptions);
    bind: (filters: IFacet[]) => void;
    destroy: () => void;
}

export interface IFacet {
    id: string;
    facetValues?: IFacetValue[];
    facetRanges?: IFacetRange[];
}

export interface IFacetOptions {
    facetConfig: IFacetConfig[];
    animationTime?: number;
    collapsed: boolean;
    containerElement: HTMLElement | null;
    onFilterChange: IFilterActionDelegate;
    onPinUnpin: IPinUnpinFilterDelegate;
    noOfFacetToShow?: number;
}

export interface IFilterOptions {
    filterConfig: IFacetConfig[];
    animationTime?: number;
    containerElement: HTMLElement | null;
    onFilterChange: IFilterActionDelegate;
    onAllFilterRemove: IAllFilterRemoveDelegate;
}

export interface IFacetRange {
    min: string;
    max: string;
    minIncluded: boolean;
    maxIncluded: boolean;
}

export interface IFacetValue {
    label: string;
    count: number;
    selected?: boolean;
    disabled?: boolean;
    isNotEqual: boolean;
}

export type IFilterActionDelegate = (key: string, value: string, action: FilterActionType, type: string, isRange: boolean) => void;

export type IPinUnpinFilterDelegate = (key: string, pin: boolean) => void;

export interface IFacetConfig {
    id: string;
    name: string;
    type: string;
    pinned: boolean;
    collapsed: boolean;
    order: number;
}

export type IAllFilterRemoveDelegate = () => void;

export enum FilterActionType {
    Add = "Add",
    Minus = "Minus",
}

