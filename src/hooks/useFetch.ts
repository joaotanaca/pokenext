import useSWR, { SWRConfiguration } from "swr";

export function useFetch<T = any>(url: string, options?: SWRConfiguration) {
    const { data, error } = useSWR<T>(url, async (url) => {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    });

    return { data, error };
}
