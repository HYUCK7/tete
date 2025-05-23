function state() {
    const options = {
        currentStateKey : 0,
        renderCount: 0,
        states: [],
        root: null,
        rootComponent: null,
    }
    function useState(init){
        const {currentStateKey: key, states} = options;
        if(states.length == key) {
            states.push(init)
        }
        const state = states[key];  
        
        const setState = (newState) => {
            states[key] = newState;
            _render()
        }
        options.currentStateKey += 1;
    
        return [state, setState];
    }
    const _render = (rootComponent, root) => {
        const {root, rootComponent} = options;
        if(!root || !rootComponent) return;
        root.innerHTML = rootComponent();
        options.currentStateKey = 0
        options.renderCount += 1;
    }
    function render (rootComponent, root) {
        options.root = root;
        options.rootComponent = rootComponent;
        _render();
    }
    return {
        useState, render
    }
}

export const {useState, render} = state();