import { API } from "./../api";
import { useQuery } from "@tanstack/react-query";
import { Nation } from "../types";


export function useNationsQuery() {
  return useQuery<Nation[]>(["nations"], async () => API.fetchNations(), {
    select: (nation) =>
      nation
        .filter((n) => n.tags.includes("inTree"))
        .filter((n) => !n.tags.includes("hidden"))
        .sort((a, b) => a.id - b.id),
  });
}
