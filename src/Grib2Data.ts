export interface Bounds {
    nx: number;
    ny: number;
    lo1: number;
    la1: number;
    lo2: number;
    la2: number;
    dx: number;
    dy: number;
}

export function getDataSource(header: Header): string {
    switch (header.center || header.centerName) {
        case -3:
            return "OSCAR / Earth & Space Research";
        case 7:
        case "US National Weather Service, National Centres for Environmental Prediction (NCEP)":
            return "GFS / NCEP / US National Weather Service";
        default:
            return header.centerName;
    }
}

export interface Header extends Bounds {
    refTime: string;
    parameterCategory: number;
    parameterNumber: number;
    surface1Type: number;
    surface1Value: number;
    forecastTime: number;
    scanMode: number;
    center: number;
    centerName: string;
}

export interface Grib2Segment {
    header: Header;
    data: [number];
}

export type Grib2Data = Grib2Segment[];

