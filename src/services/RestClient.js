export async function get(url, options = {}) {
  try {
    let res = await fetch(url, options);
    let ress = res.json();
    return ress;
  } catch (err) {
    console.log(`Error on get: ${err}`);
  }
}