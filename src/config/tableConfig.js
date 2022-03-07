export default {
    columns: [
        {
            field: "Player",
            headerName: "Player",
            width: 180
        },
        {
            field: "Team",
            headerName: "Team"
        },
        {
            field: "Pos",
            headerName: "Pos"
        },
        {
            field: "Att",
            headerName: "Att"
        },
        {
            field: "Att/G",
            headerName: "Att/G"
        },
        {
            field: "Yds",
            headerName: "Yds"
        },
        {
            field: "Avg",
            headerName: "Avg"
        },
        {
            field: "Yds/G",
            headerName: "Yds/G"
        },
        {
            field: "TD",
            headerName: "TD"
        },
        {
            field: "Lng",
            headerName: "Lng"
        },
        {
            field: "1st",
            headerName: "1st"
        },
        {
            field: "1st%",
            headerName: "1st%"
        },
        {
            field: "20+",
            headerName: "20+"
        },
        {
            field: "40+",
            headerName: "40+"
        },
        {
            field: "FUM",
            headerName: "FUM"
        }
    ],
    initialState: {
        columns: {
            columnVisibilityModel: {
                Player: true,
                Team: true,
                Pos: true,
                Att: true,
                "Att/G": true,
                Yds: true,
                Avg: true,
                "Yds/G": true,
                TD: true,
                Lng: true,
                "1st": true,
                "1st%": true,
                "20+": true,
                "40+": true,
                FUM: true
            }
        }
    }
}