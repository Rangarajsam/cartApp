import generalConstants from '../constants/generalConstants';

const initialState = {
    carts:[],
    getItemsLoaderState:{
        fetching:false,
        fetched:false,
        error:false
    },
    sortType:'',
    searchText:'',
    isFiltered:false,
    range:{
        min:0,
        max:0
    },
    cartsAdded:[],
    actualPayable:0,
    discounted:0,
    finalPayable:0
};

export default (state=initialState,action) => {
    switch (action.type) {  
        case generalConstants.getItemsLoaderState :
            return {
                ...state,
                getItemsLoaderState:action.payload.state
            }
        case generalConstants.getCarts :
            let modifiedCart = [...action.payload.carts];
            modifiedCart = modifiedCart.map((cart) => {
                cart.addedCount = 0
                return cart;
            });
            return {
                ...state,
                carts : modifiedCart
            }

        case generalConstants.sort :
            let sorted;
            if(action.payload.sortType === generalConstants.sortHightoLow) {
                sorted = [...state.carts].sort((a,b) => b.price - a.price);
            }
            else if (action.payload.sortType === generalConstants.sortLowtoHigh) {
                sorted = [...state.carts].sort((a,b) => a.price - b.price);
            }
            else {
                sorted = [...state.carts].sort((a,b) => b.discount - a.discount);
            }
            return {
                ...state,
                sortType:action.payload.sortType,
                carts : sorted
            }

        case generalConstants.searchCart :
            return {
                ...state,
                searchText:action.payload.searchText
            }

        case generalConstants.filterCart :
            return {
                ...state,
                isFiltered:action.payload.isFiltered,
                range:action.payload.range
            }

        case generalConstants.addToCart :
            let disCountedPrice = (action.payload.cart.price*action.payload.cart.discount)/100;
            let cart = {...action.payload.cart};
            cart.addedCount = 1;
            return {
                ...state,
                actualPayable:state.actualPayable + action.payload.cart.price,
                discounted:state.discounted + disCountedPrice,
                finalPayable:state.finalPayable + (action.payload.cart.price - disCountedPrice),
                cartsAdded:[...state.cartsAdded].concat([cart])
            }

        case generalConstants.removeFromCart :
            let addedCount = action.payload.cart.addedCount;
            let cartPrice = action.payload.cart.price*addedCount;
            let cartDiscount = action.payload.cart.discount;
            let disCountedPriceOnRemove = (cartPrice*cartDiscount)/100;
            return {
                ...state,
                actualPayable:state.actualPayable - cartPrice,
                discounted:state.discounted - disCountedPriceOnRemove,
                finalPayable:state.finalPayable - (cartPrice - disCountedPriceOnRemove),
                cartsAdded:[...state.cartsAdded].filter(cart => cart.id !== action.payload.cart.id)
            }

        case generalConstants.addCountCart :
            let disCountedPriceOnAdd = (action.payload.cart.price*action.payload.cart.discount)/100;
            let cartsAdded = [...state.cartsAdded];
            cartsAdded.forEach((cart,i,arr) => {
               if (cart.id === action.payload.cart.id) {
                arr[i].addedCount+=1
               }
            });
            return {
                ...state,
                actualPayable:state.actualPayable + action.payload.cart.price,
                discounted:state.discounted + disCountedPriceOnAdd,
                finalPayable:state.finalPayable + (action.payload.cart.price - disCountedPriceOnAdd),
                cartsAdded:cartsAdded
            }

        case generalConstants.substractCountCart :
            let disCountedPriceOnSubstract = (action.payload.cart.price*action.payload.cart.discount)/100;
            let cartsAddedOnSubstract = [...state.cartsAdded];
            cartsAddedOnSubstract.forEach((cart,i,arr) => {
               if (cart.id === action.payload.cart.id) {
                arr[i].addedCount-=1
               }
            });
            return {
                ...state,
                actualPayable:state.actualPayable - action.payload.cart.price,
                discounted:state.discounted - disCountedPriceOnSubstract,
                finalPayable:state.finalPayable - (action.payload.cart.price - disCountedPriceOnSubstract),
                cartsAdded:cartsAddedOnSubstract
            }

        default :
            return state;
    }
}

// var carts =[
//     {
//         id: 9096,
//         name: "Item1",
//         price: 480,
//         discount: 25,
//         category: "literature",
//         img_url: "http://lorempixel.com/500/600/technics/"
//     },
//     {
//         id: 9296,
//         name: "Item2",
//         price: 150,
//         discount: 6,
//         category: "literature",
//         img_url: "http://lorempixel.com/500/600/technics/"
//     },
//     {
//         id: 3296,
//         name: "Item3",
//         price: 200,
//         discount: 16,
//         category: "literature",
//         img_url: "http://lorempixel.com/500/600/technics/"
//     },
//     {
//         id: 8796,
//         name: "Item4",
//         price: 280,
//         discount: 10,
//         category: "literature",
//         img_url: "http://lorempixel.com/500/600/technics/"
//     },
//     {
//         id: 9676,
//         name: "Item5",
//         price: 350,
//         discount: 14,
//         category: "literature",
//         img_url: "http://lorempixel.com/500/600/technics/"
//     },
//     {
//         id: 8296,
//         name: "Item6",
//         price: 400,
//         discount: 6,
//         category: "literature",
//         img_url: "http://lorempixel.com/500/600/technics/"
//     },
//     {
//         id: 7796,
//         name: "Item7",
//         price: 720,
//         discount: 18,
//         category: "literature",
//         img_url: "http://lorempixel.com/500/600/technics/"
//     },
//     {
//         id: 3453,
//         name: "Item8",
//         price: 500,
//         discount: 12,
//         category: "literature",
//         img_url: "http://lorempixel.com/500/600/technics/"
//     },
//     {
//         id: 3455,
//         name: "Item9",
//         price: 650,
//         discount: 22,
//         category: "literature",
//         img_url: "http://lorempixel.com/500/600/technics/"
//     },
//     {
//         id: 9996,
//         name: "Item10",
//         price: 500,
//         discount: 2,
//         category: "literature",
//         img_url: "http://lorempixel.com/500/600/technics/"
//     }
// ]
