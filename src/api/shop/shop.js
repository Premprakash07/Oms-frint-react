const getAllShops = async () => {
  let response;
  await fetch(
    "/public/shop/allshops",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then(async (res) => {
      console.log(res);
      response = res;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};

const getShopById = async (id) => {
  let response;
  await fetch(
    `/public/shop/getdetails/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then(async (res) => {
      console.log(res);
      response = res;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};

const getAllItems = async (shopId) => {
  let response;
  await fetch(
    `/public/shop/allItems/${shopId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then(async (res) => {
      console.log(res);
      response = res;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};

const getShopReviews = async (shopId) => {
  let response;
  await fetch(`/public/review/shop/getall/${shopId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(async (res) => {
      console.log(res);
      response = res;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
}

export {getAllShops, getShopById, getAllItems, getShopReviews}