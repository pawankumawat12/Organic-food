import './Order.scss';
function Order(){
    const dummyOrders = [
    {
    no : 1,
      orderId: "ORD1234",
      customerId: "CUS001",
      orderDate: "2025-06-19",
      orderStatus: "Pending",
      productId: "PROD01",
      title: "iPhone 15 Pro",
      quantity: 2,
      price: 79999,
      category: "Mobile",
      warranty: "1 Year",
      returnPolicy: "7 Days Return"
    },
    {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },
    {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },
    {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },
    {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },
    {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },  {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },
    {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },
    {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },
    {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },
    {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    },
    {
    no : 2,
      orderId: "ORD1235",
      customerId: "CUS002",
      orderDate: "2025-06-17",
      orderStatus: "Delivered",
      productId: "PROD02",
      title: "Sony ahelkaksjdfklajsdklfjaskldjfaklsdjfklasdjfklasjdlfkjasldfkj",
      quantity: 1,
      price: 2999,
      category: "Audio",
      warranty: "6 Months",
      returnPolicy: "No Return"
    }
  ];
    return(
        <>
        <div className="admin-orders">
      <h2>Orders</h2>
      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
                <th>No.</th>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Product ID</th>
              <th>Title</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Category</th>
              <th>Warranty</th>
              <th>Return</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.no}</td>
                <td>{order.orderId}</td>
                <td>{order.customerId}</td>
                <td>{order.orderDate}</td>
                <td className={`status ${order.orderStatus.toLowerCase()}`}>{order.orderStatus}</td>
                <td>{order.productId}</td>
                <td>{order.title}</td>
                <td>{order.quantity}</td>
                <td>₹{order.price.toLocaleString()}</td>
                <td>{order.category}</td>
                <td>{order.warranty}</td>
                <td>{order.returnPolicy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        
        </>
    )
}

export default Order;