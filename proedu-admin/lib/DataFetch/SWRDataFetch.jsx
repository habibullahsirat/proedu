import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useHeroData = () => {
  const { data, error, mutate } = useSWR(
    `${NEXT_PUBLIC_API_URL}/api/hero`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useExploreData = () => {
  const { data, error, mutate } = useSWR(
    `${NEXT_PUBLIC_API_URL}/api/explore`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFAQData = () => {
  const { data, error, mutate } = useSWR(
    `${NEXT_PUBLIC_API_URL}/api/faq`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFeedbackData = () => {
  const { data, error, mutate } = useSWR(
    `${NEXT_PUBLIC_API_URL}/api/feedback`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useCourseData = () => {
  const { data, error, mutate } = useSWR(
    `${NEXT_PUBLIC_API_URL}/api/course`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const usePartnerData = () => {
  const { data, error, mutate } = useSWR(
    `${NEXT_PUBLIC_API_URL}/api/partner`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useStudentData = () => {
  const { data, error, mutate } = useSWR(
    `${NEXT_PUBLIC_API_URL}/api/student`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useSiteData = () => {
  const { data, error, mutate } = useSWR(
    `${NEXT_PUBLIC_API_URL}/api/site-setting`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
