import * as moment from "moment";
const range = (min, max, type) => {
    let str = "";
    let minStr = min;
    let maxStr = max;
    if (type === "Edm.DateTimeOffset") {
        if (min !== undefined && min !== null && min !== "") {
            minStr = moment(min).format("ll");
        }
        if (max !== undefined && max !== null && max !== "") {
            maxStr = moment(max).format("ll");
        }
    }
    if (minStr !== undefined && minStr !== null && minStr !== "") {
        str += " from: " + minStr;
    }
    if (maxStr !== undefined && maxStr !== null && maxStr !== "") {
        str += " to: " + maxStr;
    }
    return str;
};

export default range;
