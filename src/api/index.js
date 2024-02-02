

export const getAllProducts = async () => {
    try {
      const res = await fetch('https://api.punkapi.com/v2/beers');
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
    //   console.log(result);
      return result;
    } catch (err) {
      return "hello";
    }
  };