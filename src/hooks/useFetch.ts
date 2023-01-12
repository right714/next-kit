import useSWR from "swr";

/**
 * URLを用いてSWRによるフェッチを行う
 *
 * @param {string} url フェッチするURL
 * @param {boolean} suspense サスペンスで機能させるかどうか
 *
 * @return response, error
 */
const useFetch = (url: string, suspense = true) => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw Error(res.statusText);
    }

    return await res.json();
  };

  const { data, error } = useSWR(url, fetcher, {
    suspense: suspense,
    revalidateOnFocus: false,
  });

  return {
    response: data,
    error,
  };
};

export { useFetch };
