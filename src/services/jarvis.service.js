import apiFetch from "./api-fetch"

export async function getDataJarvis () {
  const data = await apiFetch("?results=15")
  return data
}