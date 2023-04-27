const initialState = false;
export const reducer = (state,action)=>{
    if(state){
        state=false;
    }else{
        state=true;
    }
    return state;
}