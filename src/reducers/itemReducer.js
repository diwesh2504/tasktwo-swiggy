let initialState=[
    {id:1,"name":"Masala Channa",qty:20,type:"veg",price:125},
    {id:2,"name":"Paneer Makhani Biryani",qty:5,type:"veg",price:150},
    {id:3,"name":"Aamras Ki Kadhi",qty:20,type:"veg",price:115},
    {id:4,"name":"Dahi Kebab",qty:20,type:"veg",price:110},
    {id:5,"name":"Mushroom Kofta in Tomato Gravy",qty:20,type:"veg",price:145},
    {id:6,"name":"Stuffed Baby Eggplant",qty:20,type:"veg",price:155},
    {id:7,"name":"Vegetarian Khao Suey",qty:20,type:"veg",price:105},
    {id:8,"name":"Stuffed Masala Mushrooms",qty:20,type:"veg",price:95},
    {id:9,"name":"Momos",qty:20,type:"veg",price:185},
    {id:10,"name":"Grilled Chicken Escalope with Fresh Salsa",qty:20,type:"non-veg",price:250},
    {id:11,"name":"Mutton Korma",qty:20,type:"non-veg",price:195},
    {id:12,"name":"Pina Colada Pork Ribs",qty:20,type:"non-veg",price:215},
    {id:13,"name":"Malabar Fish Biryani",qty:20,type:"non-veg",price:205},
    {id:14,"name":"Keema Samosa with Yoghurt Dip",qty:20,type:"non-veg",price:185},
    {id:15,"name":"Curried Parmesan Fish Fingers",qty:20,type:"non-veg",price:165},
    {id:16,"name":"Chicken 65",qty:20,type:"non-veg",price:125}
]

export const itemReducer=(state=initialState,action)=>{
    switch(action.type){
        case "LOAD_ITEMS":
            return state;
        case "EDIT_QUANTITY":
            return state.map((item)=>{
                if(item.id===action.id){
                    item.qty-=action.qty;
                    return {...item}
                }else
                    return {...item}
            })
        case "EDIT_FROM_CART":
            return state.map((item)=>{
                if(item.id===action.id)
                {
                    item.qty-=action.qty
                    return {...item}
                }else{
                    return {...item}
                }
            })
        default:
            return state;
    }
}