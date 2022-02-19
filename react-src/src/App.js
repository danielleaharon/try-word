import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,  Switch}  from 'react-router-dom';

import Home from './components/Home/home';

import Footer from './components/footer/footer';
import Contact from './components/Contact/Contact';
// import ProductsChoice from './components/Products/ProductsChoice';
// import Product from './components/Product/Product';
// import Design from './components/Design/Design';
// import DesignMobile from './components/Design/DesignMobile';
import NotFound from './components/NotFound/NotFound';
// import NotFoundDesign from './components/NotFoundDesign/NotFoundDesign';

// import Admin from './components/Admin/Admin';
// import Cart from './components/Cart/Cart';
// import Order from './components/Order/Order';
// import OrderAdmin from './components/OrderAdmin/OrderAdmin';

import axios from 'axios';
import Config from './config/config';

import { Fragment } from 'react';
import Navbar from './components/Navbar/navbar';

export default  function App(props) {
  const [cart, setCart] = React.useState([]);
  const [order, setOrder] = React.useState([]);
  const [category, setCategory] = React.useState('all');
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const [design, setDesign] = React.useState(null);
  const [Ondesign, setOnDesign] = React.useState(false);



  const updateWindowDimensions = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  React.useEffect(() => {
    updateWindowDimensions();

    window.addEventListener('resize', updateWindowDimensions);

    // returned function will be called on component unmount 

    window.removeEventListener('resize', updateWindowDimensions)


  });

//   React.useEffect(() => {
//     updateWindowDimensions();

//     window.addEventListener('resize', updateWindowDimensions);

//     // returned function will be called on component unmount 

//     if (localStorage.getItem("cart") != null) {
//       if (cart.length < JSON.parse(localStorage.getItem("cart")).length) {
//         setCart(JSON.parse(localStorage.getItem("cart")));
//       }
//     }
//     else {
//       localStorage.setItem("cart", JSON.stringify(cart))
//     }


//     if (localStorage.getItem("order") != null) {
 
//       const orderList2 = [];

//       JSON.parse(localStorage.getItem('order')).forEach((item) => {
//         axios.post(Config.getServerPath() + 'order/userOrder/' + item._id)
//           .then(res => {
//             if (res.data.status === 400) {
//               console.log('error')

//             } else {

//               orderList2.push(res.data.order)
//               localStorage.setItem("order", JSON.stringify(orderList2));
          
//             }
//           })
//           .catch(() => {
//             console.log('send')
//           });

//         if (order.length < JSON.parse(localStorage.getItem("order")).length)
//           setOrder(JSON.parse(localStorage.getItem("order")));

//       })

//     }

//     //window.removeEventListener('resize', updateWindowDimensions)


//   }, [cart,order.length]);
//   const updateOrder = async () => {
//     const orderList2 = [];

//     await JSON.parse(localStorage.getItem('order')).forEach((item) => {
//       axios.post(Config.getServerPath() + 'order/userOrder/' + item._id)
//         .then(res => {
//           if (res.data.status === 400) {
//             console.log('error')
//             return
//           }

//           orderList2.push(res.data.order)
//           // orderList2=res.data.orderList;
//           localStorage.setItem("order", JSON.stringify(orderList2));
//           if (order.length === orderList2.length)
//             setOrder(orderList2);
//           // setOrder(res.data.orderList)
//           //   if(order.length<JSON.parse(localStorage.getItem("order")).length) {
//           //     setOrder(JSON.parse(localStorage.getItem("order")));
//           // }

//         })
//         .catch(() => {
//           console.log('send')
//         });

//     })


//     // setOrder(JSON.parse(localStorage.getItem("order")));

//     return true;
//   }
//   const goToDesign = (item) => {
//     setDesign(item)
//   }
//   const addToCart = (item, size, imgItem, design) => {

//     const arr = cart;
//     const index = arr.findIndex(x => x.item._id === item._id && x.imgItem.color === imgItem.color && x.size === size && x.design.url.front === design.url.front);
//     if (index !== -1) {
//       arr[index].count++;
//       if (Ondesign)
//         goToDesign(arr[index])
//       // const tempItem={item,size,imgItem,count};
//       // arr.push(tempItem);
//     }
//     else {
//       var count = 1;
//       const tempItem2 = { item, size, imgItem, count, design };
//       arr.push(tempItem2);
//       if (Ondesign)
//         goToDesign(tempItem2)
//     }
//     localStorage.setItem("cart", JSON.stringify(arr));
//     setCart(JSON.parse(localStorage.getItem("cart")));

//     // setCart(arr)

//   }
//   const updateCart = (item, count) => {
//     const arr = cart;
//     const index = cart.findIndex(x => x.item._id === item.item._id && x.imgItem.color === item.imgItem.color && x.size === item.size && x.design.url.front === item.design.url.front);
//     if (index !== -1) {
//       arr[index].count = count;
//       // const tempItem={item,size,imgItem,count};
//       // arr.push(tempItem);
//     }
//     localStorage.setItem("cart", JSON.stringify(arr));

//   }
//   const updateCartDesign = (item, design) => {
//     const arr = cart;
//     const index = cart.findIndex(x => x.item._id === item.item._id && x.imgItem.color === item.imgItem.color && x.size === item.size && x.design.url.front === item.design.url.front);
//     if (index !== -1) {
//       arr[index].design = design;
//       // const tempItem={item,size,imgItem,count};
//       // arr.push(tempItem);
//     }
//     localStorage.setItem("cart", JSON.stringify(arr));

//   }
//   const deleteFromCart = (item) => {
//     console.log(cart)
//     const index = cart.findIndex(x => x.item._id === item.item._id && x.imgItem.color === item.imgItem.color && x.size === item.size && x.design.url.front === item.design.url.front);
//     console.log(index)

//     if (index !== -1) {
//       const tempList = cart.splice(index, 1);
//       console.log(tempList)
//       // const tempList2=cart.slice(index+1,cart.length);
//       // tempList= tempList.concat(tempList2)
//       localStorage.setItem("cart", JSON.stringify(cart));
//       setCart(JSON.parse(localStorage.getItem("cart")));


//     }
//   }
  const getAppContent = () => {

    return (

      <div className={''}>

        <Switch>

          {/* <Route path={'/admin'} exact
            render={(props) =>
              <Admin {...props}
              />} /> */}

          <Route path={'/'} exact
            render={(props) =>
              <Home {...props}
                setCategory={setCategory}
                width={width}
              />} />


          <Route path={'/Contact'} exact
            render={(props) =>
              <Contact {...props}
                width={width}

              />} />
          {/* <Route path={'/Products/:category/:subcategory'} exact
            render={(props) =>
              <ProductsChoice {...props}
                addToCart={addToCart}
                Ondesign={Ondesign}
                // category={category}
                width={width}
                height={height}
                deleteFromCart={deleteFromCart}
              />} />

          {width <= 800 ? <Route path={'/Design/*'} exact
            render={(props) =>
              // <NotFoundDesign height={height} />
              <DesignMobile {...props}
              productDesign={design}
              setOnDesign={setOnDesign}
              Ondesign={Ondesign}
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
              goToDesign={goToDesign}
              updateCartDesign={updateCartDesign}
              width={width}
              height={height}



            />
            } />
            : <Route path={'/Design/*'} exact
              render={(props) =>

                <Design {...props}
                  productDesign={design}
                  setOnDesign={setOnDesign}
                  Ondesign={Ondesign}
                  addToCart={addToCart}
                  deleteFromCart={deleteFromCart}
                  goToDesign={goToDesign}
                  updateCartDesign={updateCartDesign}
                  width={width}
                  height={height}



                />} />}
     


          <Route path={'/Cart'} exact
            render={(props) =>
              <Cart {...props}
                cart={cart}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
                updateCart={updateCart}
                goToDesign={goToDesign}
                setCart={setCart}
                setOrder={setOrder}
                width={width}
                height={height}

              />} />

          <Route path={'/Order'} exact
            render={(props) =>
              <Order {...props}
                order={order}
                updateOrder={updateOrder}
                width={width}

              />} />

          <Route path={'/OrderAdmin'} exact
            render={(props) =>
              <OrderAdmin {...props}
                order={order}
                updateOrder={updateOrder}
              />} />
          <Route path={'/'}
            render={(props) =>
              <NotFound {...props}
                height={height}

              />} /> */}
        </Switch>
      </div>
    );
  }
  return (
    <div className='App-background' >
      <Router>

        <Navbar hide={Ondesign} cartSize={cart.length} orderSize={order.length}
        />
        <Fragment>
          {getAppContent()}
        </Fragment>
        {/* </div> */}
        <hr className='hr' hidden={Ondesign} />
        <Footer hide={Ondesign} />
      </Router>

    </div>
  );



}
