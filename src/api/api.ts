export const fetchQuote = async () => {
  try {
    const res = await fetch(
      `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
    );
    const res2 = await res.json();
    const data = await res2;
    return data;
  } catch (err: any) {
    throw err;
  }
};
