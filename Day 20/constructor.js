class Mobile{
    constructor(messeging, calling, logo){
        this.messeging = messeging
        this.calling = calling
        this.logo = logo
    }

    Detail(){
        console.log(`Mobile Consist ${this.messeging}, ${this.calling} and logo ${this.logo}`);
    }
}

let a = new Mobile("Messeging", "Calling", "Apple");
a.Detail();