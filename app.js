const _drag = (() => {
    const _containerDOMElement = document.querySelector('.container');
    const _draggableDOMElement = _containerDOMElement.querySelector('.fill');
    const _droppableDOMElements = _containerDOMElement.querySelectorAll('.empty');
    function dragStart(){
        this.className += ' hold';
        setTimeout(() => this.className = 'invisible', 0);
    }
    function dragEnd() {
        this.className = 'fill';
    }
    function dragOver(e){
        e.preventDefault();
    }
    function dragEnter(e){
        e.preventDefault();
        this.className += ' hovered';
    }
    function dragLeave() {
        this.className = 'empty';
    }
    function dropHandler () {
        this.className = 'empty';
        this.append(_draggableDOMElement);
    }
    function init(){
        _draggableDOMElement.addEventListener('dragstart', dragStart);
        _draggableDOMElement.addEventListener('dragend', dragEnd);
        _droppableDOMElements.forEach(dropDOMElement => {
            dropDOMElement.addEventListener('dragover', dragOver);
            dropDOMElement.addEventListener('dragenter', dragEnter);
            dropDOMElement.addEventListener('dragleave', dragLeave);
            dropDOMElement.addEventListener('drop', dropHandler);
        });
    }
    return {
        init
    }
})();

document.addEventListener('DOMContentLoaded', _drag.init);