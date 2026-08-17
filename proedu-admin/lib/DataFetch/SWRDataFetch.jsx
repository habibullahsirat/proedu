import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useHeroData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/hero`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useNoticeData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/notice`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const usePublicationData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/publication`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAboutData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/about`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useStatData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/stat`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFindDepartmentLeftData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/find-department-left`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFindDepartmentRightData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/find-department-right`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAdmissionData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/admission`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFeatureData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/feature`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const usePrincipleMessageData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/principle-message`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useCampusLifeData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/campus-life`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAlumniEventImageData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/event-image`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAlumniEventData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/events`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useNewsData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/news`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFeedbackData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/feedback`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
