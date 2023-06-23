import toolkit from "@reduxjs/toolkit"
const {configureStore, configureLogin, createSlice} = toolkit;

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
            state.push(action.payload);
        },
    },
});

const loginSlice = createSlice({
    name:"login",
    initialState:{status:false},
    reducers:{
        login(state){
            state.status=true;
        },
    },
});



// store
const store = configureStore({
    reducer: {
        cart : cartSlice.reducer,
        login: loginSlice.reducer,
    }
})
console.log("create store : ",store.getState());

// subscribe
store.subscribe(()=>{
    console.log("STORE CHANGE : ",store.getState());
})

// dispatch
store.dispatch(cartSlice.actions.addToCart({id:10,qty:10}))
store.dispatch(loginSlice.actions.login())