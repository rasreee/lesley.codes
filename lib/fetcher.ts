export async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  if (res.status === 200) {
    const data = await res.json();
    console.error('❌ SearchData: ', JSON.stringify(data, null, 4));
    return data;
  }
  const data = await res.json();
  console.error('❌ Error: ', JSON.stringify(data, null, 4));
  throw data;
}
