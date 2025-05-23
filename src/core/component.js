export default class Component{
    $target;
    stateVal;
    
    constructor($target){
        this.$target = $target;
        this.setup()
        this.setEvent()
    }
    setup(){}
    template(){return ''};
    setEvent(){}
}