export const homeFeed = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        lng: locale,
      },
    });
    const { data } = await res.json();
    return { ...data };
  } catch (error) {
    console.log(error);
  }
};

export const searchResults = async (locale, searchText) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/searchProducts?search=${searchText}`,
      {
        method: 'GET',
        headers: {
          lng: locale,
        },
      }
    );
    const data = await res.json();
    return { ...data };
  } catch (error) {
    console.log(error);
  }
};
