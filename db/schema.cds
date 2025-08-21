namespace cap.temp;
using {cuid} from '@sap/cds/common';


entity Books : cuid {
    title : String;
    country: String;
}