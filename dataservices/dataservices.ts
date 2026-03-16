import { MapLocation } from "@/interfaces/interfaces";
export const fetchMapLocation = async (maplocation: string) => {
    console.log(maplocation);
    const response = await fetch("https://serpapi.com/search?engine=google_maps" + maplocation)
    const data: MapLocation[] = await response.json();
    return data;


}