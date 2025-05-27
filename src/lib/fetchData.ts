export async function fetchData(user: string) {
  try {
    const params = new URLSearchParams({ user });
    const res = await fetch(
      `http://localhost:3000/api/posts?${params.toString()}`
    );
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    if (data.status !== 200) {
      throw new Error();
    }
    return data;
  } catch (err) {
    return null;
  }
}
