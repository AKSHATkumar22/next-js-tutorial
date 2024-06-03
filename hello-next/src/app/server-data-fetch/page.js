// yaha par humne data fetch karwaya hai taaki hume data mile
// aysnc ka madada sa
// usse humne ek variable mai store karwake phir data server sa call karwaya hai
async function fetchlistofProducts() {
  try {
    // yaha par basically humara data hume mil raha hai
    const apiresponse = await fetch("https://dummyjson.com/products");
    //yaha par data kon json ka format main store karwa rahe hai
    const result = await apiresponse.json();
    // yaha par data products milega api sa jon humara results ka madad sa milega
    return result.products;
    // agar nahin mila toh error
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ServerSideDataFetch() {
  // yaha ek variable mai store karwa ke upar wale variable sa milega
  const listofUsers = await fetchlistofProducts();
  //yaha par console.log karwa rahe hai
  console.log(listofUsers);
  //yaha par simple sa ek return heading ho raha hai
  return <h1>ServerSideDataFetching is going here</h1>;
}
