import { useState, useEffect } from 'react';
import { useLatestAPI } from './useLatestAPI';

export function useGetData(URL) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [getData, setGetData] = useState(() => ({
        data: {},
        isLoading: true,
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => { };
        }

        const controller = new AbortController();

        async function getGetData() {
            try {
                setGetData({ data: {}, isLoading: true });

                const response = await fetch(
                    URL,
                    {
                        signal: controller.signal,
                    }
                );
                const data = await response.json();

                setGetData({ data, isLoading: false });
            } catch (err) {
                setGetData({ data: {}, isLoading: false });
                console.error(err);
            }
        }

        getGetData();

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading, URL]);

    return getData;
}
