export default function counter(state = [], action) {
    switch (action.type) {
        case 'FETCH_IT_ASYNC':
            let image = action.value;
            // console.log('img',image);
            return [...state, image];
        default:
            return state;
    }
}
