import tableConfig from "../config/tableConfig";

export default function (data) {
    return {
        ...tableConfig,
        rows: data,

    };
}