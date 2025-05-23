import {state} from '../hooks/state';
export default class Component{
    $target;
    constructor($target){
        this.$target = $target;
        
        const [state, setState] = state.useState(this.initState());
    }

}