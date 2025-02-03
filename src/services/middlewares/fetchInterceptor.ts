const options = {
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

export async function fetchInterceptorScrapper(url: string, extraOptions: RequestInit = {}): Promise<Response> {
  const response = await fetch(`http://localhost:8000/api/scrape${url}`, {
    ...options,
    ...extraOptions,
  } as RequestInit);

  return response;
}
