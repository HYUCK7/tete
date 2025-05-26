export default class Component{
    $target;
    stateVal;
    props;
    constructor($target, props){
        this.$target = $target;
        this.props = props;
        this.setup()
        this.setEvent()
        this.render();
      
    }
    setup(){}
    template(){return ''};
    setEvent(){}
    effected(){}
    render(){
        this.$target.innerHTML = this.template();
        this.effected();
    }
    addEvent(eventType, selector, callback){
        const children = [...this.$target.querySelectorAll(selector)];
        const isTarget = (target) => children.includes(target) || target.closest(selector);
        this.$target.addEventListener(eventType, (event) => {
            if(!isTarget(event.target)) return false;
            callback(event);
        })
    }
}