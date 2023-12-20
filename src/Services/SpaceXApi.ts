import { type APISpaceX } from "../Types/Api"

export const getLaunchesById = async ({id}) => {
    const url = "https://api.spacexdata.com/v5/launches/"
    const res = await fetch(url+{id},{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:{},
            options:{
            sort: {
                date_unix: "asc",
            },
            limit: 12,
            },
        }),
    })
    const { docs: launches } = (await res.json()) as APISpaceX
    console.log(launches)
    return launches
}

export const getLaunches = async () => {
    const url = "https://api.spacexdata.com/v5/launches/query"
    const res = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:{},
            options:{
            sort: {
                date_unix: "asc",
            },
            limit: 12,
            },
        }),
    })
    const { docs: launches } = (await res.json()) as APISpaceX
    console.log(launches)
    return launches
}

export const getLaunchesLastest = async () => {
    const url = "https://api.spacexdata.com/v5/launches/query"
    const res = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:{},
            options:{
            sort: {
                date_unix: "desc",
            },
            limit: 12,
            },
        }),
    })
    const { docs: launches } = (await res.json()) as APISpaceX
    console.log(launches)
    return launches
}

//const data = JSON.stringify(await res.json() )
//console.log(data)
//console.log(launches)
