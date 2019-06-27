

class TabLink {
    constructor(link) {
        // data attribute from link
        this.tabContent = document.querySelector(`.content[data-tab='${link.dataset.tab}']`);

        this.tabContent = new Content(this.tabContent);
        // arrow function using implicit (automatic) value of where itw as called.  We call this "lexical scope."

        link.addEventListener('click', () => this.linkClick());
    }
    // methods
    linkClick() {
        
        this.tabContent.changeDisplay();
        
    }
}


class Content {
    constructor(tabElement) {
        this.tabElement = tabElement;
    }
    // methods
    changeDisplay(){
        const profiles = document.querySelectorAll('.content');
        profiles.forEach(e => e.classList.remove('change'));
        this.tabElement.classList.add('change')
        console.log(profiles)
        console.log(this.tabElement)
    }
    toggleContent() {
        
        this.tabElement.classList.toggle('change');
        console.log(this.tabElement)


    }
}



const links = document.querySelectorAll('.link');

links.forEach(link => new TabLink(link));

//this is for the three on the rubric. I couldn't think of a proper way to include something like this for the user. 
let numOfElements = document.querySelectorAll('.content');
let arrayElements = Array.prototype.slice.call(numOfElements);
let length = [arrayElements.length];
length.push(2)
newlength = length.map(x=>x*2)
console.log("Here is the outout of a map function that I built", newlength, "the original array was, ", length)