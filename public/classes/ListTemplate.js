// this is the class object that represents the display of either a payment or
// invoice at the top of the screen...between "Finance Logger" and the grey background
export class ListTemplate {
    //.............................HTMLUListElement <=TypeScript method for node in a <ul>
    constructor(container) {
        this.container = container;
    }
    // here we're creating a render() method
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
// 1.) register a list container (ul) inside the constructor
// 2.) const name = new type(arguments);create a render method to render a new 'li' to the container
// a.) accepts arguments: invoice or payment, a heading, a position
// b.) create the html templ,ates (li, h4, p)
// c.) add the 'li' template to the start/end of the list
